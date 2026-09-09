import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { requireCustomer } from "@/lib/auth/customer-dal";
import { createClient } from "@/lib/supabase/server";
import { Card } from "@/components/admin/ui/Card";
import { StatusBadge } from "@/components/admin/ui/Badge";
import { EmptyState } from "@/components/admin/ui/EmptyState";
import { formatCurrency, formatDate } from "@/lib/admin/format";

export const metadata: Metadata = { title: "Invoice details" };

export default async function MyInvoiceDetailPage({ params }: { params: Promise<{ number: string }> }) {
  await requireCustomer();
  const { number } = await params;
  const supabase = await createClient();

  const [{ data: invoices }, { data: items }, { data: receipts }] = await Promise.all([
    supabase.rpc("get_my_invoice", { p_invoice_number: number }),
    supabase.rpc("get_my_invoice_items", { p_invoice_number: number }),
    supabase.rpc("get_my_invoice_receipts", { p_invoice_number: number }),
  ]);
  const invoice = invoices?.[0];
  if (!invoice) notFound();

  return (
    <div>
      <Link href="/my-invoices" className="inline-flex items-center gap-1.5 text-sm text-stone hover:text-ink mb-4">
        <ArrowLeft className="h-4 w-4" /> Back to invoices
      </Link>

      <div className="flex items-start justify-between gap-3 mb-6">
        <div>
          <h1 className="font-display text-xl text-ink">{invoice.invoice_number}</h1>
          <p className="text-sm text-stone mt-1">Due {formatDate(invoice.due_date)}</p>
        </div>
        <StatusBadge status={invoice.status} />
      </div>

      <Card className="p-4 mb-4">
        {items && items.length > 0 ? (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-stone border-b border-line">
                <th className="py-2 font-medium">Description</th>
                <th className="py-2 font-medium text-right">Qty</th>
                <th className="py-2 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {items.map((item, i) => (
                <tr key={i}>
                  <td className="py-2">{item.description}</td>
                  <td className="py-2 text-right">{item.quantity}</td>
                  <td className="py-2 text-right">{formatCurrency(item.amount, invoice.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyState title="No line items" />
        )}

        <div className="mt-4 ml-auto max-w-xs space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="text-stone">Subtotal</span>
            <span>{formatCurrency(invoice.subtotal, invoice.currency)}</span>
          </div>
          {invoice.discount > 0 ? (
            <div className="flex justify-between">
              <span className="text-stone">Discount</span>
              <span>-{formatCurrency(invoice.discount, invoice.currency)}</span>
            </div>
          ) : null}
          <div className="flex justify-between">
            <span className="text-stone">Tax</span>
            <span>{formatCurrency(invoice.tax_amount, invoice.currency)}</span>
          </div>
          <div className="flex justify-between font-semibold pt-1.5 border-t border-line">
            <span>Total</span>
            <span>{formatCurrency(invoice.total, invoice.currency)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone">Paid</span>
            <span>{formatCurrency(invoice.amount_paid, invoice.currency)}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Balance due</span>
            <span>{formatCurrency(invoice.balance_due, invoice.currency)}</span>
          </div>
        </div>
      </Card>

      {receipts && receipts.length > 0 ? (
        <Card className="p-4">
          <p className="text-xs uppercase tracking-wide text-stone mb-2">Payment history</p>
          <ul className="text-sm divide-y divide-line">
            {receipts.map((r, i) => (
              <li key={i} className="py-2 flex justify-between">
                <span>
                  {formatDate(r.payment_date)} · {r.method.replaceAll("_", " ")}
                </span>
                <span>{formatCurrency(r.amount, invoice.currency)}</span>
              </li>
            ))}
          </ul>
        </Card>
      ) : null}

      {invoice.payment_terms ? (
        <p className="text-xs text-stone mt-4">{invoice.payment_terms}</p>
      ) : null}
    </div>
  );
}
