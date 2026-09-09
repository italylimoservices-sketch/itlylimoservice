import { notFound } from "next/navigation";
import { requireUser } from "@/lib/auth/dal";
import { createClient } from "@/lib/supabase/server";
import { getCompanySettings } from "@/lib/pdf/company";
import { BusinessDocument } from "@/lib/pdf/BusinessDocument";
import { pdfResponse } from "@/lib/pdf/render";
import { formatDate, formatTime } from "@/lib/admin/format";

export const runtime = "nodejs";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  await requireUser();
  const { id } = await params;
  const supabase = await createClient();

  const { data: quotation } = await supabase
    .from("quotations")
    .select("*, customers(full_name, email, phone, company_name, billing_address), quotation_items(*)")
    .eq("id", id)
    .maybeSingle();
  if (!quotation) notFound();

  const company = await getCompanySettings();
  const customer = (quotation as any).customers;
  const items = ((quotation as any).quotation_items ?? []).sort((a: any, b: any) => a.sort_order - b.sort_order);

  const doc = (
    <BusinessDocument
      company={company}
      documentTitle="Quotation"
      documentNumber={quotation.quotation_number}
      statusLabel={quotation.status}
      currency={quotation.currency}
      customer={{
        name: customer?.full_name ?? "—",
        email: customer?.email,
        phone: customer?.phone,
        company: customer?.company_name,
        billingAddress: customer?.billing_address,
      }}
      meta={[
        quotation.trip_date ? { label: "Trip date", value: `${formatDate(quotation.trip_date)} ${formatTime(quotation.trip_time)}` } : null,
        quotation.pickup ? { label: "Pickup", value: quotation.pickup } : null,
        quotation.dropoff ? { label: "Drop-off", value: quotation.dropoff } : null,
        quotation.valid_until ? { label: "Valid until", value: formatDate(quotation.valid_until) } : null,
      ].filter(Boolean) as any}
      items={items.map((i: any) => ({ description: i.description, quantity: Number(i.quantity), unitPrice: Number(i.unit_price), amount: Number(i.amount) }))}
      totals={{
        subtotal: Number(quotation.subtotal),
        discount: Number(quotation.discount),
        taxAmount: Number(quotation.tax_amount),
        total: Number(quotation.total),
      }}
      paymentTerms={quotation.payment_terms}
      termsAndConditions={quotation.terms_and_conditions}
    />
  );

  return pdfResponse(doc, `${quotation.quotation_number}.pdf`);
}
