import Link from "next/link";
import type { Metadata } from "next";
import { requireCustomer } from "@/lib/auth/customer-dal";
import { createClient } from "@/lib/supabase/server";
import { Card } from "@/components/admin/ui/Card";
import { StatusBadge } from "@/components/admin/ui/Badge";
import { EmptyState } from "@/components/admin/ui/EmptyState";
import { formatCurrency, formatDate } from "@/lib/admin/format";

export const metadata: Metadata = { title: "My invoices" };

export default async function MyInvoicesPage() {
  await requireCustomer();
  const supabase = await createClient();
  const { data: invoices } = await supabase.rpc("get_my_invoices");

  return (
    <div>
      <h1 className="font-display text-xl text-ink mb-6">My invoices</h1>

      {!invoices || invoices.length === 0 ? (
        <Card>
          <EmptyState title="No invoices yet" description="Invoices for your bookings will appear here." />
        </Card>
      ) : (
        <div className="space-y-3">
          {invoices.map((inv) => (
            <Link key={inv.id} href={`/my-invoices/${inv.invoice_number}`}>
              <Card className="p-4 hover:border-gold transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{inv.invoice_number}</p>
                    <p className="text-xs text-stone mt-1">Due {formatDate(inv.due_date)}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <StatusBadge status={inv.status} />
                    <p className="text-sm font-medium text-ink mt-1.5">{formatCurrency(inv.total, inv.currency)}</p>
                    {inv.balance_due > 0 ? (
                      <p className="text-xs text-amber-700">{formatCurrency(inv.balance_due, inv.currency)} due</p>
                    ) : null}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
