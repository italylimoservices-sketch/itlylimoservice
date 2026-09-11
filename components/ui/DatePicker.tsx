"use client";

import { useEffect, useRef, useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import Icon from "@/components/ui/Icon";
import type { Locale } from "@/lib/i18n/locales";

const WEEKDAY_LABELS: Record<Locale, string[]> = {
  en: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  it: ["Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"],
};

function toIso(date: Date) {
  return format(date, "yyyy-MM-dd");
}

export default function DatePicker({
  name,
  value,
  onChange,
  minDate,
  placeholder = "Select date",
  locale = "en",
  invalid = false,
}: {
  name: string;
  value: string;
  onChange: (iso: string) => void;
  minDate?: Date;
  placeholder?: string;
  locale?: Locale;
  invalid?: boolean;
}) {
  const floor = minDate ? startOfDay(minDate) : startOfDay(new Date());
  const selected = value ? parseISO(value) : undefined;

  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(selected && !isBefore(selected, floor) ? selected : floor));
  const containerRef = useRef<HTMLDivElement>(null);

  // If the minimum selectable date moves forward past the current selection
  // (e.g. the return-date picker's minDate tracks the pickup date the
  // traveller just changed), clear a now-invalid selection rather than
  // silently submitting a return date before the pickup date.
  useEffect(() => {
    if (selected && isBefore(selected, floor)) {
      onChange("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minDate?.getTime()]);

  // Derived at render time rather than synced via effect: if `floor` has
  // moved past the month the calendar was navigated to, show the floor's
  // month instead (there'd be nothing selectable in the stale one anyway).
  const displayMonth = isBefore(viewMonth, startOfMonth(floor)) ? startOfMonth(floor) : viewMonth;

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const gridStart = startOfWeek(startOfMonth(displayMonth), { weekStartsOn: 1 });
  const gridEnd = endOfWeek(endOfMonth(displayMonth), { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: gridStart, end: gridEnd });

  const monthLabel = new Intl.DateTimeFormat(locale === "it" ? "it-IT" : "en-GB", {
    month: "long",
    year: "numeric",
  }).format(displayMonth);

  const displayLabel = selected
    ? new Intl.DateTimeFormat(locale === "it" ? "it-IT" : "en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(selected)
    : placeholder;

  // Previous month is entirely in the past once the calendar is already
  // showing the floor's month — nothing there could ever be selectable.
  const isPrevMonthDisabled = !isBefore(startOfMonth(floor), startOfMonth(displayMonth));

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`input-luxe flex items-center justify-between gap-2 text-left ${
          !selected ? "text-[#a39d90]" : ""
        } ${invalid ? "border-red-400" : ""}`}
      >
        <span className="truncate">{displayLabel}</span>
        <Icon name="calendar" className="h-4 w-4 shrink-0 text-stone" />
      </button>

      {open && (
        <div
          role="dialog"
          className="absolute left-0 z-50 mt-2 w-[290px] max-w-[calc(100vw-2.5rem)] rounded-md border border-line bg-white p-4 shadow-xl shadow-navy/15"
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous month"
              disabled={isPrevMonthDisabled}
              onClick={() => setViewMonth(subMonths(displayMonth, 1))}
              className="flex h-7 w-7 items-center justify-center rounded-sm text-navy hover:bg-ivory-deep/60 disabled:opacity-25 disabled:hover:bg-transparent"
            >
              <Icon name="chevron-left" className="h-4 w-4" />
            </button>
            <span className="font-display text-sm text-navy capitalize">{monthLabel}</span>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => setViewMonth(addMonths(displayMonth, 1))}
              className="flex h-7 w-7 items-center justify-center rounded-sm text-navy hover:bg-ivory-deep/60"
            >
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-y-1 text-center">
            {WEEKDAY_LABELS[locale].map((w) => (
              <span key={w} className="text-[0.65rem] font-semibold uppercase tracking-wide text-stone">
                {w}
              </span>
            ))}

            {days.map((day) => {
              const disabled = isBefore(day, floor);
              const inMonth = isSameMonth(day, displayMonth);
              const isSelected = selected && isSameDay(day, selected);
              const isTodayDate = isToday(day);

              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    onChange(toIso(day));
                    setOpen(false);
                  }}
                  className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors ${
                    !inMonth ? "text-stone/40" : "text-ink"
                  } ${disabled ? "cursor-not-allowed text-stone/25" : "hover:bg-gold-pale/50"} ${
                    isSelected ? "!bg-navy !text-ivory font-semibold" : ""
                  } ${isTodayDate && !isSelected ? "ring-1 ring-gold ring-inset" : ""}`}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
