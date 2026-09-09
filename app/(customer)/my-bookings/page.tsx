import Link from "next/link";
import type { Metadata } from "next";
import { requireCustomer } from "@/lib/auth/customer-dal";
import { createClient } from "@/lib/supabase/server";
import { Card } from "@/components/admin/ui/Card";
import { StatusBadge } from "@/components/admin/ui/Badge";
import { EmptyState } from "@/components/admin/ui/EmptyState";
import { formatCurrency, formatDate, formatTime } from "@/lib/admin/format";

export const metadata: Metadata = { title: "My bookings" };

export default async function MyBookingsPage() {
  await requireCustomer();
  const supabase = await createClient();
  const { data: bookings } = await supabase.rpc("get_my_bookings");

  return (
    <div>
      <h1 className="font-display text-xl text-ink mb-6">My bookings</h1>

      {!bookings || bookings.length === 0 ? (
        <Card>
          <EmptyState
            title="No bookings yet"
            description="Once you book a trip with us, it will show up here. If you think this is a mistake, contact us and we'll link your account."
          />
        </Card>
      ) : (
        <div className="space-y-3">
          {bookings.map((b) => (
            <Link key={b.id} href={`/my-bookings/${b.booking_reference}`}>
              <Card className="p-4 hover:border-gold transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{b.booking_reference}</p>
                    <p className="text-sm text-stone mt-0.5">
                      {b.pickup} → {b.dropoff}
                    </p>
                    <p className="text-xs text-stone mt-1">
                      {formatDate(b.trip_date)} · {formatTime(b.trip_time)}
                      {b.vehicle_name ? ` · ${b.vehicle_name}` : ""}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <StatusBadge status={b.status} />
                    <p className="text-sm font-medium text-ink mt-1.5">{formatCurrency(b.total, b.currency)}</p>
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
