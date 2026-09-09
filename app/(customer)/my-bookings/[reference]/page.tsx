import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { requireCustomer } from "@/lib/auth/customer-dal";
import { createClient } from "@/lib/supabase/server";
import { Card } from "@/components/admin/ui/Card";
import { StatusBadge } from "@/components/admin/ui/Badge";
import { ReviewForm } from "@/components/customer/ReviewForm";
import { formatCurrency, formatDate, formatTime, formatDateTime } from "@/lib/admin/format";

export const metadata: Metadata = { title: "Booking details" };

export default async function MyBookingDetailPage({ params }: { params: Promise<{ reference: string }> }) {
  await requireCustomer();
  const { reference } = await params;
  const supabase = await createClient();

  const [{ data: bookings }, { data: history }, { data: reviews }] = await Promise.all([
    supabase.rpc("get_my_booking", { p_reference: reference }),
    supabase.rpc("get_my_booking_status_history", { p_reference: reference }),
    supabase.rpc("get_my_booking_review", { p_reference: reference }),
  ]);
  const booking = bookings?.[0];
  if (!booking) notFound();
  const existingReview = reviews?.[0] ?? null;

  const timeline = [
    { label: "Confirmed", at: booking.confirmed_at },
    { label: "Driver en route", at: booking.driver_en_route_at },
    { label: "Passenger picked up", at: booking.picked_up_at },
    { label: "Trip in progress", at: booking.trip_started_at },
    { label: "Completed", at: booking.completed_at },
    { label: "Cancelled", at: booking.cancelled_at },
  ].filter((t) => t.at);

  return (
    <div>
      <Link href="/my-bookings" className="inline-flex items-center gap-1.5 text-sm text-stone hover:text-ink mb-4">
        <ArrowLeft className="h-4 w-4" /> Back to bookings
      </Link>

      <div className="flex items-start justify-between gap-3 mb-6">
        <div>
          <h1 className="font-display text-xl text-ink">{booking.booking_reference}</h1>
          <p className="text-sm text-stone mt-1">
            {booking.pickup} → {booking.dropoff}
          </p>
        </div>
        <StatusBadge status={booking.status} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card className="p-4">
          <p className="text-xs uppercase tracking-wide text-stone mb-2">Trip details</p>
          <dl className="text-sm space-y-1.5">
            <Row label="Date" value={`${formatDate(booking.trip_date)} · ${formatTime(booking.trip_time)}`} />
            <Row label="Passengers" value={booking.passengers ?? "—"} />
            <Row label="Luggage" value={booking.luggage ?? "—"} />
            <Row label="Vehicle" value={booking.vehicle_name ?? "To be confirmed"} />
            <Row label="Driver" value={booking.driver_name ?? "To be assigned"} />
            {booking.driver_phone ? <Row label="Driver phone" value={booking.driver_phone} /> : null}
          </dl>
        </Card>

        <Card className="p-4">
          <p className="text-xs uppercase tracking-wide text-stone mb-2">Fare</p>
          <dl className="text-sm space-y-1.5">
            <Row label="Price" value={formatCurrency(booking.price, booking.currency)} />
            {booking.discount > 0 ? <Row label="Discount" value={`-${formatCurrency(booking.discount, booking.currency)}`} /> : null}
            <Row label="Tax" value={formatCurrency(booking.tax_amount, booking.currency)} />
            <Row label="Total" value={<strong>{formatCurrency(booking.total, booking.currency)}</strong>} />
            <Row label="Payment status" value={<StatusBadge status={booking.payment_status} />} />
          </dl>
        </Card>

        {booking.is_airport_pickup ? (
          <Card className="p-4 sm:col-span-2">
            <p className="text-xs uppercase tracking-wide text-stone mb-2">Flight details</p>
            <dl className="text-sm space-y-1.5">
              {booking.flight_number ? <Row label="Flight number" value={booking.flight_number} /> : null}
              {booking.flight_terminal ? <Row label="Terminal" value={booking.flight_terminal} /> : null}
              {booking.flight_arrival_time ? <Row label="Arrival" value={formatDateTime(booking.flight_arrival_time)} /> : null}
              {booking.flight_departure_time ? <Row label="Departure" value={formatDateTime(booking.flight_departure_time)} /> : null}
              {booking.meet_and_greet_notes ? <Row label="Meet & greet" value={booking.meet_and_greet_notes} /> : null}
            </dl>
          </Card>
        ) : null}

        {timeline.length > 0 ? (
          <Card className="p-4 sm:col-span-2">
            <p className="text-xs uppercase tracking-wide text-stone mb-2">Trip timeline</p>
            <ul className="text-sm space-y-1.5">
              {timeline.map((t) => (
                <li key={t.label} className="flex justify-between">
                  <span className="text-stone">{t.label}</span>
                  <span>{formatDateTime(t.at)}</span>
                </li>
              ))}
            </ul>
          </Card>
        ) : null}

        {history && history.length > 0 ? (
          <Card className="p-4 sm:col-span-2">
            <p className="text-xs uppercase tracking-wide text-stone mb-2">Status history</p>
            <ul className="text-sm space-y-1.5">
              {history.map((h, i) => (
                <li key={i} className="flex justify-between">
                  <span className="text-stone">{h.from_status ? `${h.from_status} → ${h.to_status}` : `Created as ${h.to_status}`}</span>
                  <span>{formatDateTime(h.changed_at)}</span>
                </li>
              ))}
            </ul>
          </Card>
        ) : null}

        {booking.special_requests ? (
          <Card className="p-4 sm:col-span-2">
            <p className="text-xs uppercase tracking-wide text-stone mb-2">Special requests</p>
            <p className="text-sm">{booking.special_requests}</p>
          </Card>
        ) : null}

        {booking.status === "COMPLETED" ? (
          <Card className="p-4 sm:col-span-2">
            <p className="text-xs uppercase tracking-wide text-stone mb-2">How was your trip?</p>
            <ReviewForm reference={booking.booking_reference} existing={existingReview} />
          </Card>
        ) : null}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-stone">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  );
}
