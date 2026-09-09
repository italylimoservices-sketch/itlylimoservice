import Link from "next/link";
import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { requireUser } from "@/lib/auth/dal";
import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/admin/ui/PageHeader";
import { Card } from "@/components/admin/ui/Card";
import { StatusBadge } from "@/components/admin/ui/Badge";
import { EmptyState } from "@/components/admin/ui/EmptyState";
import { formatTime } from "@/lib/admin/format";
import {
  addDays,
  addMonths,
  addWeeks,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export const metadata: Metadata = { title: "Calendar" };

type CalendarBooking = {
  id: string;
  booking_reference: string;
  trip_date: string;
  trip_time: string;
  status: string;
  pickup: string;
  dropoff: string;
  driver_id: string | null;
  vehicle_id: string | null;
  drivers: { full_name: string } | null;
  vehicles: { name: string } | null;
};

const VIEWS = ["month", "week", "day"] as const;
type ViewKey = (typeof VIEWS)[number];

export default async function CalendarPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string; date?: string }>;
}) {
  await requireUser();
  const { view: rawView, date: dateParam } = await searchParams;
  const view: ViewKey = VIEWS.includes(rawView as ViewKey) ? (rawView as ViewKey) : "month";
  const anchor = dateParam ? new Date(`${dateParam}T00:00:00`) : new Date();

  let rangeStart: Date;
  let rangeEnd: Date;
  if (view === "month") {
    rangeStart = startOfWeek(startOfMonth(anchor), { weekStartsOn: 1 });
    rangeEnd = endOfWeek(endOfMonth(anchor), { weekStartsOn: 1 });
  } else if (view === "week") {
    rangeStart = startOfWeek(anchor, { weekStartsOn: 1 });
    rangeEnd = endOfWeek(anchor, { weekStartsOn: 1 });
  } else {
    rangeStart = anchor;
    rangeEnd = anchor;
  }

  const supabase = await createClient();
  const { data: bookings } = await supabase
    .from("bookings")
    .select("id, booking_reference, trip_date, trip_time, status, pickup, dropoff, driver_id, vehicle_id, drivers(full_name), vehicles(name)")
    .gte("trip_date", format(rangeStart, "yyyy-MM-dd"))
    .lte("trip_date", format(rangeEnd, "yyyy-MM-dd"))
    .is("deleted_at", null)
    .order("trip_time", { ascending: true });

  const rows = (bookings ?? []) as unknown as CalendarBooking[];

  // "Obvious" conflict: the same driver or vehicle booked at the same date
  // + time on two different trips (no trip-duration field exists to detect
  // overlaps more precisely than that).
  const conflictKeys = new Set<string>();
  const seen = new Map<string, number>();
  for (const b of rows) {
    for (const key of [b.driver_id && `d:${b.driver_id}:${b.trip_date}:${b.trip_time}`, b.vehicle_id && `v:${b.vehicle_id}:${b.trip_date}:${b.trip_time}`]) {
      if (!key) continue;
      seen.set(key, (seen.get(key) ?? 0) + 1);
    }
  }
  for (const b of rows) {
    for (const key of [b.driver_id && `d:${b.driver_id}:${b.trip_date}:${b.trip_time}`, b.vehicle_id && `v:${b.vehicle_id}:${b.trip_date}:${b.trip_time}`]) {
      if (key && (seen.get(key) ?? 0) > 1) conflictKeys.add(b.id);
    }
  }

  const byDay = new Map<string, CalendarBooking[]>();
  for (const b of rows) {
    const key = b.trip_date;
    if (!byDay.has(key)) byDay.set(key, []);
    byDay.get(key)!.push(b);
  }

  const dateStr = format(anchor, "yyyy-MM-dd");
  const nav =
    view === "month"
      ? { prev: format(addMonths(anchor, -1), "yyyy-MM-dd"), next: format(addMonths(anchor, 1), "yyyy-MM-dd") }
      : view === "week"
        ? { prev: format(addWeeks(anchor, -1), "yyyy-MM-dd"), next: format(addWeeks(anchor, 1), "yyyy-MM-dd") }
        : { prev: format(addDays(anchor, -1), "yyyy-MM-dd"), next: format(addDays(anchor, 1), "yyyy-MM-dd") };

  const heading = view === "month" ? format(anchor, "MMMM yyyy") : view === "week" ? `Week of ${format(rangeStart, "MMM d")}` : format(anchor, "EEEE, MMM d yyyy");

  return (
    <div>
      <PageHeader
        title="Calendar"
        description={heading}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-white border border-line rounded-sm p-1">
              {VIEWS.map((v) => (
                <Link
                  key={v}
                  href={`/admin/calendar?view=${v}&date=${dateStr}`}
                  className={`px-3 py-1.5 text-xs rounded-sm capitalize ${view === v ? "bg-navy text-ivory" : "text-stone hover:bg-ivory-deep"}`}
                >
                  {v}
                </Link>
              ))}
            </div>
            <Link href={`/admin/calendar?view=${view}&date=${nav.prev}`} className="border border-line px-3 py-2 rounded-sm text-sm hover:bg-white">
              ← Prev
            </Link>
            <Link href={`/admin/calendar?view=${view}&date=${format(new Date(), "yyyy-MM-dd")}`} className="border border-line px-3 py-2 rounded-sm text-sm hover:bg-white">
              Today
            </Link>
            <Link href={`/admin/calendar?view=${view}&date=${nav.next}`} className="border border-line px-3 py-2 rounded-sm text-sm hover:bg-white">
              Next →
            </Link>
          </div>
        }
      />

      {conflictKeys.size > 0 ? (
        <div className="mb-4 flex items-center gap-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-3 py-2">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          {conflictKeys.size} trip{conflictKeys.size > 1 ? "s" : ""} share the same driver or vehicle at the same date/time — check assignments.
        </div>
      ) : null}

      {view === "month" ? (
        <MonthView anchor={anchor} rangeStart={rangeStart} byDay={byDay} conflictKeys={conflictKeys} />
      ) : view === "week" ? (
        <WeekView rangeStart={rangeStart} byDay={byDay} conflictKeys={conflictKeys} />
      ) : (
        <DayView day={anchor} bookings={byDay.get(dateStr) ?? []} conflictKeys={conflictKeys} />
      )}
    </div>
  );
}

function MonthView({
  anchor,
  rangeStart,
  byDay,
  conflictKeys,
}: {
  anchor: Date;
  rangeStart: Date;
  byDay: Map<string, CalendarBooking[]>;
  conflictKeys: Set<string>;
}) {
  const days: Date[] = [];
  for (let d = rangeStart; d <= endOfWeek(endOfMonth(anchor), { weekStartsOn: 1 }); d = addDays(d, 1)) days.push(d);

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-7 text-xs uppercase tracking-wide text-stone border-b border-line">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d} className="px-2 py-2 text-center">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {days.map((day) => {
          const key = format(day, "yyyy-MM-dd");
          const dayBookings = byDay.get(key) ?? [];
          return (
            <div key={key} className={`min-h-[110px] border-b border-r border-line p-1.5 ${!isSameMonth(day, anchor) ? "bg-ivory-deep/50" : ""}`}>
              <p className={`text-xs mb-1 ${isToday(day) ? "inline-flex h-5 w-5 items-center justify-center rounded-full bg-navy text-ivory" : "text-stone"}`}>
                {format(day, "d")}
              </p>
              <div className="space-y-1">
                {dayBookings.slice(0, 3).map((b) => (
                  <Link
                    key={b.id}
                    href={`/admin/bookings/${b.id}`}
                    className={`block text-[11px] leading-tight px-1.5 py-1 rounded-sm truncate ${
                      conflictKeys.has(b.id) ? "bg-red-100 hover:bg-red-200 text-red-800" : "bg-gold-pale/30 hover:bg-gold-pale/60"
                    }`}
                    title={`${formatTime(b.trip_time)} · ${b.pickup} → ${b.dropoff} · ${b.drivers?.full_name ?? "Unassigned"}`}
                  >
                    {formatTime(b.trip_time)} {b.booking_reference}
                  </Link>
                ))}
                {dayBookings.length > 3 ? <p className="text-[11px] text-stone">+{dayBookings.length - 3} more</p> : null}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function WeekView({ rangeStart, byDay, conflictKeys }: { rangeStart: Date; byDay: Map<string, CalendarBooking[]>; conflictKeys: Set<string> }) {
  const days: Date[] = Array.from({ length: 7 }, (_, i) => addDays(rangeStart, i));

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
      {days.map((day) => {
        const key = format(day, "yyyy-MM-dd");
        const dayBookings = byDay.get(key) ?? [];
        return (
          <Card key={key} className="overflow-hidden">
            <div className={`px-3 py-2 border-b border-line text-sm font-medium ${isToday(day) ? "bg-navy text-ivory" : "bg-ivory-deep"}`}>
              {format(day, "EEE d MMM")}
            </div>
            <div className="divide-y divide-line min-h-[80px]">
              {dayBookings.length === 0 ? (
                <p className="text-xs text-stone px-3 py-3">No trips</p>
              ) : (
                dayBookings.map((b) => (
                  <Link
                    key={b.id}
                    href={`/admin/bookings/${b.id}`}
                    className={`block px-3 py-2 text-xs hover:bg-ivory-deep ${conflictKeys.has(b.id) ? "bg-red-50" : ""}`}
                  >
                    <p className="font-medium text-ink">
                      {formatTime(b.trip_time)} · {b.booking_reference}
                    </p>
                    <p className="text-stone truncate">{b.pickup} → {b.dropoff}</p>
                    <p className="text-stone truncate">{b.drivers?.full_name ?? "Unassigned"}</p>
                  </Link>
                ))
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

function DayView({ day, bookings, conflictKeys }: { day: Date; bookings: CalendarBooking[]; conflictKeys: Set<string> }) {
  return (
    <Card>
      {bookings.length === 0 ? (
        <EmptyState title="No trips scheduled" description={`Nothing on the calendar for ${format(day, "MMM d, yyyy")}.`} />
      ) : (
        <div className="divide-y divide-line">
          {bookings.map((b) => (
            <Link key={b.id} href={`/admin/bookings/${b.id}`} className={`flex items-center justify-between gap-3 px-4 py-3 hover:bg-ivory-deep ${conflictKeys.has(b.id) ? "bg-red-50" : ""}`}>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-ink w-16">{formatTime(b.trip_time)}</span>
                <div>
                  <p className="text-sm font-medium text-ink">
                    {b.booking_reference} {conflictKeys.has(b.id) ? <span className="text-red-700">⚠ conflict</span> : null}
                  </p>
                  <p className="text-xs text-stone">
                    {b.pickup} → {b.dropoff} · {b.drivers?.full_name ?? "Unassigned driver"} · {b.vehicles?.name ?? "Unassigned vehicle"}
                  </p>
                </div>
              </div>
              <StatusBadge status={b.status} />
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
}
