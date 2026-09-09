import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth/dal";
import { canManageOps, canManageFinance } from "@/lib/auth/roles";
import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/admin/ui/PageHeader";
import { Section } from "@/components/admin/ui/Section";
import { StatusBadge } from "@/components/admin/ui/Badge";
import { EntityPicker } from "@/components/admin/ui/EntityPicker";
import { BookingForm } from "@/components/admin/bookings/BookingForm";
import { formatDateTime, formatCurrency, formatDate, formatTime } from "@/lib/admin/format";
import { updateBooking, setBookingStatus, assignDriverAndVehicle } from "@/lib/admin/actions/bookings";
import { createInvoiceForBooking } from "@/lib/admin/actions/invoices";
import { buildWhatsAppLink } from "@/lib/notifications/whatsapp";

export const metadata: Metadata = { title: "Booking" };

const STATUS_FLOW = [
  "PENDING",
  "CONFIRMED",
  "ASSIGNED",
  "DRIVER_EN_ROUTE",
  "PASSENGER_PICKED_UP",
  "IN_PROGRESS",
  "COMPLETED",
] as const;

export default async function BookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = await requireUser();
  const supabase = await createClient();

  const { data: booking } = await supabase
    .from("bookings")
    .select("*, customers(id, full_name, phone, email), vehicles(id, name), drivers(id, full_name, phone)")
    .eq("id", id)
    .maybeSingle();
  if (!booking) notFound();

  const [{ data: invoice }, { data: history }] = await Promise.all([
    supabase.from("invoices").select("id, invoice_number, status, balance_due").eq("booking_id", id).maybeSingle(),
    supabase.from("booking_status_history").select("id, from_status, to_status, changed_at").eq("booking_id", id).order("changed_at", { ascending: false }),
  ]);

  const canEdit = canManageOps(profile.role);

  return (
    <div>
      <PageHeader
        title={booking.booking_reference}
        description={(booking as any).customers?.full_name}
        actions={
          <div className="flex items-center gap-2">
            <StatusBadge status={booking.payment_status} />
            <StatusBadge status={booking.status} />
            <Link href={`/admin/bookings/${id}/confirmation`} target="_blank" className="text-sm border border-line px-3 py-2 rounded-sm hover:bg-white">
              Confirmation PDF
            </Link>
          </div>
        }
      />

      {invoice ? (
        <Link href={`/admin/invoices/${invoice.id}`} className="inline-block mb-4 text-sm text-gold hover:underline">
          View invoice {invoice.invoice_number} →
        </Link>
      ) : canManageFinance(profile.role) ? (
        <form action={createInvoiceForBooking.bind(null, id)} className="mb-4">
          <button type="submit" className="text-sm border border-line px-3 py-1.5 rounded-sm hover:bg-white">
            Create invoice
          </button>
        </form>
      ) : null}

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Section title="Booking details">
            <div className="p-4">
              {canEdit ? (
                <BookingForm
                  action={updateBooking.bind(null, id)}
                  submitLabel="Save changes"
                  defaults={{
                    customer_id: (booking as any).customers?.id,
                    customer_label: (booking as any).customers?.full_name,
                    pickup: booking.pickup,
                    dropoff: booking.dropoff,
                    trip_date: booking.trip_date,
                    trip_time: booking.trip_time,
                    passengers: booking.passengers ?? undefined,
                    luggage: booking.luggage ?? undefined,
                    vehicle_id: (booking as any).vehicles?.id,
                    vehicle_label: (booking as any).vehicles?.name,
                    driver_id: (booking as any).drivers?.id,
                    driver_label: (booking as any).drivers?.full_name,
                    flight_number: booking.flight_number ?? undefined,
                    special_requests: booking.special_requests ?? undefined,
                    price: Number(booking.price),
                    discount: Number(booking.discount),
                    tax_amount: Number(booking.tax_amount),
                    currency: booking.currency,
                    internal_notes: booking.internal_notes ?? undefined,
                    customer_notes: booking.customer_notes ?? undefined,
                  }}
                />
              ) : (
                <p className="text-sm text-stone">
                  {booking.pickup} → {booking.dropoff} · {booking.trip_date} {booking.trip_time}
                </p>
              )}
            </div>
          </Section>

          <Section title="Status history">
            <ul className="divide-y divide-line">
              {(history ?? []).length === 0 ? (
                <li className="px-4 py-3 text-sm text-stone">No history yet.</li>
              ) : (
                history!.map((h) => (
                  <li key={h.id} className="px-4 py-3 text-sm flex items-center justify-between">
                    <span>{h.from_status ? `${h.from_status} → ${h.to_status}` : `Created as ${h.to_status}`}</span>
                    <span className="text-xs text-stone">{formatDateTime(h.changed_at)}</span>
                  </li>
                ))
              )}
            </ul>
          </Section>
        </div>

        {canEdit ? (
          <div className="space-y-4">
            <Section title="Trip status">
              <div className="p-4 flex flex-wrap gap-1.5">
                {STATUS_FLOW.map((s) => (
                  <form key={s} action={setBookingStatus.bind(null, id, s)}>
                    <button
                      type="submit"
                      disabled={booking.status === s}
                      className={`text-xs px-2.5 py-1.5 rounded-sm border ${
                        booking.status === s ? "border-navy bg-navy text-ivory" : "border-line hover:bg-ivory-deep"
                      }`}
                    >
                      {s.replaceAll("_", " ")}
                    </button>
                  </form>
                ))}
                <form action={setBookingStatus.bind(null, id, "NO_SHOW")}>
                  <button type="submit" className="text-xs px-2.5 py-1.5 rounded-sm border border-line hover:bg-red-50 hover:text-red-700">
                    No-show
                  </button>
                </form>
                <form action={setBookingStatus.bind(null, id, "CANCELLED")}>
                  <button type="submit" className="text-xs px-2.5 py-1.5 rounded-sm border border-line hover:bg-red-50 hover:text-red-700">
                    Cancel
                  </button>
                </form>
              </div>
            </Section>

            <Section title="Assign driver &amp; vehicle">
              <form action={assignDriverAndVehicle.bind(null, id)} className="p-4 space-y-3">
                <div>
                  <label className="block text-xs text-stone mb-1">Driver</label>
                  <EntityPicker entity="drivers" name="driver_id" defaultValue={(booking as any).drivers?.id} defaultLabel={(booking as any).drivers?.full_name} placeholder="Search drivers…" />
                </div>
                <div>
                  <label className="block text-xs text-stone mb-1">Vehicle</label>
                  <EntityPicker entity="vehicles" name="vehicle_id" defaultValue={(booking as any).vehicles?.id} defaultLabel={(booking as any).vehicles?.name} placeholder="Search vehicles…" />
                </div>
                <button type="submit" className="w-full text-sm bg-navy text-ivory px-3 py-2 rounded-sm hover:bg-navy-deep">
                  Assign
                </button>
              </form>
            </Section>

            {(booking as any).customers?.phone ? (
              <Section title="WhatsApp">
                <div className="p-4 space-y-2 text-sm">
                  <a
                    href={buildWhatsAppLink("booking_confirmation", (booking as any).customers.phone, {
                      customer_name: (booking as any).customers.full_name ?? "",
                      booking_reference: booking.booking_reference,
                      date: formatDate(booking.trip_date),
                      time: formatTime(booking.trip_time),
                      pickup: booking.pickup,
                      dropoff: booking.dropoff,
                      total: formatCurrency(booking.total, booking.currency),
                    })}
                    target="_blank"
                    rel="noreferrer"
                    className="block border border-line px-3 py-2 rounded-sm hover:bg-ivory-deep"
                  >
                    Send booking confirmation
                  </a>
                  {(booking as any).drivers ? (
                    <a
                      href={buildWhatsAppLink("driver_details", (booking as any).customers.phone, {
                        customer_name: (booking as any).customers.full_name ?? "",
                        booking_reference: booking.booking_reference,
                        driver_name: (booking as any).drivers.full_name ?? "",
                        driver_phone: (booking as any).drivers.phone ?? "",
                        vehicle: (booking as any).vehicles?.name ?? "",
                      })}
                      target="_blank"
                      rel="noreferrer"
                      className="block border border-line px-3 py-2 rounded-sm hover:bg-ivory-deep"
                    >
                      Send driver details
                    </a>
                  ) : null}
                  <a
                    href={buildWhatsAppLink("pickup_reminder", (booking as any).customers.phone, {
                      customer_name: (booking as any).customers.full_name ?? "",
                      booking_reference: booking.booking_reference,
                      pickup: booking.pickup,
                      date: formatDate(booking.trip_date),
                      time: formatTime(booking.trip_time),
                    })}
                    target="_blank"
                    rel="noreferrer"
                    className="block border border-line px-3 py-2 rounded-sm hover:bg-ivory-deep"
                  >
                    Send pickup reminder
                  </a>
                </div>
              </Section>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
