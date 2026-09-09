import Link from "next/link";
import type { Metadata } from "next";
import { getCurrentProfile } from "@/lib/auth/dal";
import { canViewFinance } from "@/lib/auth/roles";
import { getDashboardData } from "@/lib/admin/dashboard";
import { DATE_RANGE_LABELS, type DateRangeKey } from "@/lib/admin/date-range";
import { formatCurrency, formatDate, formatTime } from "@/lib/admin/format";
import { PageHeader } from "@/components/admin/ui/PageHeader";
import { StatCard, Card } from "@/components/admin/ui/Card";
import { StatusBadge } from "@/components/admin/ui/Badge";
import { EmptyState } from "@/components/admin/ui/EmptyState";

export const metadata: Metadata = { title: "Dashboard" };

const RANGE_KEYS: DateRangeKey[] = ["today", "week", "month", "year", "all"];

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>;
}) {
  const { range: rawRange } = await searchParams;
  const range = (RANGE_KEYS.includes(rawRange as DateRangeKey) ? rawRange : "month") as DateRangeKey;

  const [profile, data] = await Promise.all([getCurrentProfile(), getDashboardData(range)]);
  const showFinance = profile ? canViewFinance(profile.role) : false;

  return (
    <div>
      <PageHeader
        title={`Welcome back${profile?.fullName ? `, ${profile.fullName.split(" ")[0]}` : ""}`}
        description="Here's what's happening across the business."
        actions={
          <div className="flex items-center gap-1 bg-white border border-line rounded-sm p-1">
            {RANGE_KEYS.map((key) => (
              <Link
                key={key}
                href={`/admin?range=${key}`}
                className={`px-3 py-1.5 text-xs rounded-sm ${
                  range === key ? "bg-navy text-ivory" : "text-stone hover:bg-ivory-deep"
                }`}
              >
                {DATE_RANGE_LABELS[key]}
              </Link>
            ))}
          </div>
        }
      />

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-ink-soft mb-3">Operations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          <StatCard label="Today's trips" value={data.operational?.todays_trips ?? 0} />
          <StatCard label="Upcoming trips" value={data.operational?.upcoming_trips ?? 0} />
          <StatCard label="Pending" value={data.operational?.pending_bookings ?? 0} />
          <StatCard label="Confirmed" value={data.operational?.confirmed_bookings ?? 0} />
          <StatCard label="Completed" value={data.operational?.completed_bookings ?? 0} />
          <StatCard label="Cancelled" value={data.operational?.cancelled_bookings ?? 0} />
          <StatCard label="Unassigned" value={data.operational?.unassigned_trips ?? 0} hint={data.operational?.unassigned_trips ? "Needs a driver" : undefined} />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-semibold text-ink-soft mb-3">Sales &amp; CRM</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard label="New leads" value={data.crm?.new_leads ?? 0} hint={DATE_RANGE_LABELS[range]} />
          <StatCard label="Pending quotations" value={data.crm?.pending_quotations ?? 0} />
          <StatCard label="Accepted quotations" value={data.crm?.accepted_quotations ?? 0} hint={DATE_RANGE_LABELS[range]} />
          <StatCard
            label="Conversion rate"
            value={
              data.crm?.sent_quotations
                ? `${Math.round(((data.crm?.accepted_quotations ?? 0) / data.crm.sent_quotations) * 100)}%`
                : "—"
            }
            hint={DATE_RANGE_LABELS[range]}
          />
        </div>
      </section>

      {showFinance ? (
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-ink-soft mb-3">Finance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard label="Today's revenue" value={formatCurrency(data.finance?.todays_revenue)} />
            <StatCard label={`Revenue (${DATE_RANGE_LABELS[range].toLowerCase()})`} value={formatCurrency(data.finance?.revenue_period)} />
            <StatCard label="Payments received" value={formatCurrency(data.finance?.payments_received_period)} hint={DATE_RANGE_LABELS[range]} />
            <StatCard label="Outstanding invoices" value={formatCurrency(data.finance?.outstanding_invoices)} />
            <StatCard
              label="Overdue invoices"
              value={data.finance?.overdue_invoices_count ?? 0}
              hint={data.finance?.overdue_invoices_amount ? formatCurrency(data.finance.overdue_invoices_amount) : undefined}
            />
            <StatCard label="Expenses" value={formatCurrency(data.finance?.expenses_period)} hint={DATE_RANGE_LABELS[range]} />
            <StatCard
              label="Estimated profit"
              value={formatCurrency((Number(data.finance?.revenue_period ?? 0) - Number(data.finance?.expenses_period ?? 0)))}
              hint="Revenue − expenses, estimate"
            />
          </div>
        </section>
      ) : null}

      <div className="grid lg:grid-cols-2 gap-4">
        <ListCard title="Recent bookings" viewAllHref="/admin/bookings">
          {data.recentBookings.length === 0 ? (
            <EmptyState title="No bookings yet" />
          ) : (
            data.recentBookings.map((b: any) => (
              <Row key={b.id} href={`/admin/bookings/${b.id}`}>
                <div>
                  <p className="text-sm font-medium text-ink">{b.booking_reference}</p>
                  <p className="text-xs text-stone">{b.customers?.full_name} · {b.pickup} → {b.dropoff}</p>
                </div>
                <StatusBadge status={b.status} />
              </Row>
            ))
          )}
        </ListCard>

        <ListCard title="Upcoming trips" viewAllHref="/admin/dispatch">
          {data.upcomingTrips.length === 0 ? (
            <EmptyState title="No upcoming trips" />
          ) : (
            data.upcomingTrips.map((b: any) => (
              <Row key={b.id} href={`/admin/bookings/${b.id}`}>
                <div>
                  <p className="text-sm font-medium text-ink">{b.booking_reference}</p>
                  <p className="text-xs text-stone">
                    {formatDate(b.trip_date)} {formatTime(b.trip_time)} · {b.drivers?.full_name ?? "Unassigned"}
                  </p>
                </div>
                <StatusBadge status={b.status} />
              </Row>
            ))
          )}
        </ListCard>

        {showFinance ? (
          <ListCard title="Recent payments" viewAllHref="/admin/payments">
            {data.recentPayments.length === 0 ? (
              <EmptyState title="No payments yet" />
            ) : (
              data.recentPayments.map((p: any) => (
                <Row key={p.id}>
                  <div>
                    <p className="text-sm font-medium text-ink">{formatCurrency(p.amount, p.currency)}</p>
                    <p className="text-xs text-stone">{p.customers?.full_name} · {p.method.replaceAll("_", " ")}</p>
                  </div>
                  <p className="text-xs text-stone">{formatDate(p.payment_date)}</p>
                </Row>
              ))
            )}
          </ListCard>
        ) : null}

        <ListCard title="Pending quotations" viewAllHref="/admin/quotations">
          {data.pendingQuotations.length === 0 ? (
            <EmptyState title="No quotations awaiting response" />
          ) : (
            data.pendingQuotations.map((q: any) => (
              <Row key={q.id} href={`/admin/quotations/${q.id}`}>
                <div>
                  <p className="text-sm font-medium text-ink">{q.quotation_number}</p>
                  <p className="text-xs text-stone">{q.customers?.full_name} · {formatCurrency(q.total, q.currency)}</p>
                </div>
                <StatusBadge status={q.status} />
              </Row>
            ))
          )}
        </ListCard>

        <ListCard title="Follow-ups due today" viewAllHref="/admin/follow-ups">
          {data.followUpsDue.length === 0 ? (
            <EmptyState title="Nothing due today" />
          ) : (
            data.followUpsDue.map((f: any) => (
              <Row key={f.id} href="/admin/follow-ups">
                <div>
                  <p className="text-sm font-medium text-ink">{f.customers?.full_name ?? "—"}</p>
                  <p className="text-xs text-stone">{f.type.replaceAll("_", " ")} {f.notes ? `· ${f.notes}` : ""}</p>
                </div>
              </Row>
            ))
          )}
        </ListCard>

        <ListCard title="Unassigned trips" viewAllHref="/admin/dispatch">
          {data.unassignedTrips.length === 0 ? (
            <EmptyState title="Everything is assigned" />
          ) : (
            data.unassignedTrips.map((b: any) => (
              <Row key={b.id} href={`/admin/bookings/${b.id}`}>
                <div>
                  <p className="text-sm font-medium text-ink">{b.booking_reference}</p>
                  <p className="text-xs text-stone">{formatDate(b.trip_date)} {formatTime(b.trip_time)} · {b.pickup} → {b.dropoff}</p>
                </div>
              </Row>
            ))
          )}
        </ListCard>
      </div>
    </div>
  );
}

function ListCard({ title, viewAllHref, children }: { title: string; viewAllHref: string; children: React.ReactNode }) {
  return (
    <Card>
      <div className="flex items-center justify-between px-4 py-3 border-b border-line">
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
        <Link href={viewAllHref} className="text-xs text-gold hover:underline">
          View all
        </Link>
      </div>
      <div className="divide-y divide-line">{children}</div>
    </Card>
  );
}

function Row({ children, href }: { children: React.ReactNode; href?: string }) {
  const inner = <div className="flex items-center justify-between gap-3 px-4 py-3">{children}</div>;
  if (!href) return inner;
  return (
    <Link href={href} className="block hover:bg-ivory-deep transition-colors">
      {inner}
    </Link>
  );
}
