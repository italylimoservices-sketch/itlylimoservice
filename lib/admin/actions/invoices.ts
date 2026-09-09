"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { requireRole } from "@/lib/auth/dal";
import { MANAGE_FINANCE } from "@/lib/auth/roles";
import { notifyCustomer } from "@/lib/notifications/service";
import { formatCurrency } from "@/lib/admin/format";

export type FormState = { error?: string } | undefined;

export async function createInvoiceForBooking(bookingId: string) {
  await requireRole(MANAGE_FINANCE);
  const supabase = await createClient();

  const { data: existing } = await supabase.from("invoices").select("id").eq("booking_id", bookingId).maybeSingle();
  if (existing) {
    redirect(`/admin/invoices/${existing.id}`);
  }

  const { data: booking } = await supabase.from("bookings").select("*").eq("id", bookingId).single();
  if (!booking) throw new Error("Booking not found.");

  const { data: invoice, error } = await supabase
    .from("invoices")
    .insert({
      // Filled in by the assign_invoice_number trigger.
      invoice_number: undefined!,
      booking_id: booking.id,
      customer_id: booking.customer_id,
      subtotal: booking.price,
      discount: booking.discount,
      tax_amount: booking.tax_amount,
      total: booking.total,
      currency: booking.currency,
      due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      status: "DRAFT",
    })
    .select("id")
    .single();
  if (error || !invoice) throw new Error(error?.message ?? "Could not create invoice.");

  await supabase.from("invoice_items").insert({
    invoice_id: invoice.id,
    description: `Trip: ${booking.pickup} → ${booking.dropoff} (${booking.booking_reference})`,
    quantity: 1,
    unit_price: booking.price,
    amount: booking.price,
    sort_order: 0,
  });

  revalidatePath("/admin/invoices");
  redirect(`/admin/invoices/${invoice.id}`);
}

export async function markInvoiceSent(id: string) {
  await requireRole(MANAGE_FINANCE);
  const supabase = await createClient();
  const { error } = await supabase.from("invoices").update({ status: "SENT", sent_at: new Date().toISOString() }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath(`/admin/invoices/${id}`);
  revalidatePath("/admin/invoices");
}

export async function voidInvoice(id: string) {
  await requireRole(MANAGE_FINANCE);
  const supabase = await createClient();
  const { error } = await supabase.from("invoices").update({ status: "VOID" }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath(`/admin/invoices/${id}`);
  revalidatePath("/admin/invoices");
}

const PaymentSchema = z.object({
  amount: z.coerce.number().positive("Enter an amount greater than zero."),
  method: z.enum(["CASH", "BANK_TRANSFER", "CARD", "ONLINE", "OTHER"]),
  reference_number: z.string().trim().optional().or(z.literal("")),
  payment_date: z.string().trim().min(1, "Payment date is required."),
  notes: z.string().trim().optional().or(z.literal("")),
});

export async function recordPayment(invoiceId: string, _prevState: FormState, formData: FormData): Promise<FormState> {
  const profile = await requireRole(MANAGE_FINANCE);
  const parsed = PaymentSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  const supabase = await createClient();
  // The before_payment_insert trigger validates this doesn't exceed the
  // remaining balance, and the reconcile/receipt triggers do the rest —
  // this insert is the entire operation.
  const { error } = await supabase.from("payments").insert({
    invoice_id: invoiceId,
    amount: parsed.data.amount,
    method: parsed.data.method,
    reference_number: parsed.data.reference_number || null,
    payment_date: parsed.data.payment_date,
    notes: parsed.data.notes || null,
    recorded_by: profile.id,
  });

  if (error) {
    return { error: error.message };
  }

  await supabase.rpc("log_activity", {
    p_action: "payment.recorded",
    p_entity_type: "invoice",
    p_entity_id: invoiceId,
    p_metadata: { amount: parsed.data.amount, method: parsed.data.method },
  });

  const { data: invoice } = await supabase
    .from("invoices")
    .select("invoice_number, amount_paid, balance_due, currency, customers(full_name, email), receipts(receipt_number)")
    .eq("id", invoiceId)
    .maybeSingle();
  const customer = (invoice as any)?.customers;
  if (invoice && customer?.email) {
    const receipts = (invoice as any).receipts as { receipt_number: string }[] | undefined;
    await notifyCustomer({
      templateKey: "payment_confirmation",
      to: customer.email,
      vars: {
        customer_name: customer.full_name ?? "",
        invoice_number: invoice.invoice_number,
        amount_paid: formatCurrency(invoice.amount_paid, invoice.currency),
        balance_due: formatCurrency(invoice.balance_due, invoice.currency),
        receipt_number: receipts?.at(-1)?.receipt_number ?? "",
      },
      relatedEntityType: "invoice",
      relatedEntityId: invoiceId,
    });
  }

  revalidatePath(`/admin/invoices/${invoiceId}`);
  revalidatePath("/admin/invoices");
  revalidatePath("/admin/payments");
  revalidatePath("/admin/receipts");
}
