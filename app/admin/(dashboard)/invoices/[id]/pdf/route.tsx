import { notFound } from "next/navigation";
import { requireRole } from "@/lib/auth/dal";
import { VIEW_FINANCE } from "@/lib/auth/roles";
import { createClient } from "@/lib/supabase/server";
import { getCompanySettings } from "@/lib/pdf/company";
import { BusinessDocument } from "@/lib/pdf/BusinessDocument";
import { pdfResponse } from "@/lib/pdf/render";
import { formatDate } from "@/lib/admin/format";

export const runtime = "nodejs";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  await requireRole(VIEW_FINANCE);
  const { id } = await params;
  const supabase = await createClient();

  const { data: invoice } = await supabase
    .from("invoices")
    .select("*, customers(full_name, email, phone, company_name, billing_address), invoice_items(*)")
    .eq("id", id)
    .maybeSingle();
  if (!invoice) notFound();

  const company = await getCompanySettings();
  const customer = (invoice as any).customers;
  const items = ((invoice as any).invoice_items ?? []).sort((a: any, b: any) => a.sort_order - b.sort_order);

  const doc = (
    <BusinessDocument
      company={company}
      documentTitle="Invoice"
      documentNumber={invoice.invoice_number}
      statusLabel={invoice.status}
      currency={invoice.currency}
      customer={{
        name: customer?.full_name ?? "—",
        email: customer?.email,
        phone: customer?.phone,
        company: customer?.company_name,
        billingAddress: customer?.billing_address,
      }}
      meta={[invoice.due_date ? { label: "Due date", value: formatDate(invoice.due_date) } : null].filter(Boolean) as any}
      items={items.map((i: any) => ({ description: i.description, quantity: Number(i.quantity), unitPrice: Number(i.unit_price), amount: Number(i.amount) }))}
      totals={{
        subtotal: Number(invoice.subtotal),
        discount: Number(invoice.discount),
        taxAmount: Number(invoice.tax_amount),
        total: Number(invoice.total),
        amountPaid: Number(invoice.amount_paid),
        balanceDue: Number(invoice.balance_due),
      }}
      paymentTerms={invoice.payment_terms}
      termsAndConditions={invoice.terms_and_conditions}
    />
  );

  return pdfResponse(doc, `${invoice.invoice_number}.pdf`);
}
