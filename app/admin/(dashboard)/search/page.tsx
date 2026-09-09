import Link from "next/link";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth/dal";
import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/admin/ui/PageHeader";
import { Card } from "@/components/admin/ui/Card";
import { EmptyState } from "@/components/admin/ui/EmptyState";

export const metadata: Metadata = { title: "Search" };

type Result = { type: string; label: string; sublabel?: string; href: string };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  await requireUser();
  const { q } = await searchParams;
  const query = q?.trim();

  let results: Result[] = [];

  if (query) {
    const supabase = await createClient();
    const like = `%${query}%`;

    const [customers, bookings, quotations, invoices, receipts, drivers, vehicles] = await Promise.all([
      supabase.from("customers").select("id, full_name, phone, email").or(`full_name.ilike.${like},phone.ilike.${like},email.ilike.${like}`).limit(8),
      supabase.from("bookings").select("id, booking_reference, pickup, dropoff").ilike("booking_reference", like).limit(8),
      supabase.from("quotations").select("id, quotation_number").ilike("quotation_number", like).limit(8),
      supabase.from("invoices").select("id, invoice_number").ilike("invoice_number", like).limit(8),
      supabase.from("receipts").select("id, receipt_number").ilike("receipt_number", like).limit(8),
      supabase.from("drivers").select("id, full_name, phone").or(`full_name.ilike.${like},phone.ilike.${like}`).limit(8),
      supabase.from("vehicles").select("id, name, registration_number").or(`name.ilike.${like},registration_number.ilike.${like}`).limit(8),
    ]);

    results = [
      ...(customers.data ?? []).map((c) => ({ type: "Customer", label: c.full_name, sublabel: c.phone ?? c.email ?? undefined, href: `/admin/customers/${c.id}` })),
      ...(bookings.data ?? []).map((b) => ({ type: "Booking", label: b.booking_reference, sublabel: `${b.pickup} → ${b.dropoff}`, href: `/admin/bookings/${b.id}` })),
      ...(quotations.data ?? []).map((qt) => ({ type: "Quotation", label: qt.quotation_number, href: `/admin/quotations/${qt.id}` })),
      ...(invoices.data ?? []).map((i) => ({ type: "Invoice", label: i.invoice_number, href: `/admin/invoices/${i.id}` })),
      ...(receipts.data ?? []).map((r) => ({ type: "Receipt", label: r.receipt_number, href: `/admin/receipts/${r.id}` })),
      ...(drivers.data ?? []).map((d) => ({ type: "Driver", label: d.full_name, sublabel: d.phone ?? undefined, href: `/admin/drivers/${d.id}` })),
      ...(vehicles.data ?? []).map((v) => ({ type: "Vehicle", label: v.name, sublabel: v.registration_number ?? undefined, href: `/admin/vehicles/${v.id}` })),
    ];
  }

  return (
    <div>
      <PageHeader title="Search" description={query ? `Results for "${query}"` : "Enter a search term"} />
      <Card>
        {!query ? (
          <EmptyState title="Type a booking reference, customer, invoice, quotation, driver, or vehicle" />
        ) : results.length === 0 ? (
          <EmptyState title="No matches found" />
        ) : (
          <ul className="divide-y divide-line">
            {results.map((r, i) => (
              <li key={i}>
                <Link href={r.href} className="flex items-center justify-between px-4 py-3 hover:bg-ivory-deep">
                  <div>
                    <p className="text-sm font-medium text-ink">{r.label}</p>
                    {r.sublabel ? <p className="text-xs text-stone">{r.sublabel}</p> : null}
                  </div>
                  <span className="text-xs uppercase tracking-wide text-stone">{r.type}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
