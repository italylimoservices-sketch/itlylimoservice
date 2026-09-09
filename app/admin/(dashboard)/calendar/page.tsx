import Link from "next/link";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth/dal";
import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/admin/ui/PageHeader";
import { Card } from "@/components/admin/ui/Card";
import { formatTime } from "@/lib/admin/format";
import {
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  addDays,
} from "date-fns";

export const metadata: Metadata = { title: "Calendar" };

export default async function CalendarPage({ searchParams }: { searchParams: Promise<{ month?: string }> }) {
  await requireUser();
  const { month: monthParam } = await searchParams;
  const anchor = monthParam ? new Date(`${monthParam}-01T00:00:00`) : new Date();

  const gridStart = startOfWeek(startOfMonth(anchor), { weekStartsOn: 1 });
  const gridEnd = endOfWeek(endOfMonth(anchor), { weekStartsOn: 1 });

  const days: Date[] = [];
  for (let d = gridStart; d <= gridEnd; d = addDays(d, 1)) days.push(d);

  const supabase = await createClient();
  const { data: bookings } = await supabase
    .from("bookings")
    .select("id, booking_reference, trip_date, trip_time, status, pickup, dropoff, drivers(full_name), vehicles(name)")
    .gte("trip_date", format(gridStart, "yyyy-MM-dd"))
    .lte("trip_date", format(gridEnd, "yyyy-MM-dd"))
    .is("deleted_at", null)
    .order("trip_time", { ascending: true });

  const byDay = new Map<string, typeof bookings>();
  for (const b of bookings ?? []) {
    const key = b.trip_date as string;
    if (!byDay.has(key)) byDay.set(key, [] as any);
    byDay.get(key)!.push(b);
  }

  const prevMonth = format(addMonths(anchor, -1), "yyyy-MM");
  const nextMonth = format(addMonths(anchor, 1), "yyyy-MM");

  return (
    <div>
      <PageHeader
        title="Calendar"
        description={format(anchor, "MMMM yyyy")}
        actions={
          <div className="flex gap-2">
            <Link href={`/admin/calendar?month=${prevMonth}`} className="border border-line px-3 py-2 rounded-sm text-sm hover:bg-white">
              ← Prev
            </Link>
            <Link href={`/admin/calendar?month=${format(new Date(), "yyyy-MM")}`} className="border border-line px-3 py-2 rounded-sm text-sm hover:bg-white">
              Today
            </Link>
            <Link href={`/admin/calendar?month=${nextMonth}`} className="border border-line px-3 py-2 rounded-sm text-sm hover:bg-white">
              Next →
            </Link>
          </div>
        }
      />

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
              <div
                key={key}
                className={`min-h-[110px] border-b border-r border-line p-1.5 ${!isSameMonth(day, anchor) ? "bg-ivory-deep/50" : ""}`}
              >
                <p className={`text-xs mb-1 ${isToday(day) ? "inline-flex h-5 w-5 items-center justify-center rounded-full bg-navy text-ivory" : "text-stone"}`}>
                  {format(day, "d")}
                </p>
                <div className="space-y-1">
                  {dayBookings.slice(0, 3).map((b: any) => (
                    <Link
                      key={b.id}
                      href={`/admin/bookings/${b.id}`}
                      className="block text-[11px] leading-tight px-1.5 py-1 rounded-sm bg-gold-pale/30 hover:bg-gold-pale/60 truncate"
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
    </div>
  );
}
