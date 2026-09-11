"use client";

import { useEffect, useState } from "react";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Rome",
  weekday: "short",
  day: "2-digit",
  month: "short",
});

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Rome",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/**
 * Live Italy (Europe/Rome) clock — starts blank so the server-rendered
 * markup and the client's first paint match (avoids a hydration mismatch
 * from the visitor's local clock), then fills in and ticks every second
 * once mounted.
 */
export default function ItalyClock({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  // `className` (passed by the caller) controls display/visibility — don't
  // hardcode a competing "inline-flex" here, or a caller's "hidden" at
  // narrow widths loses to it (both are single-class, equal-specificity
  // utilities, so whichever Tailwind happens to emit last in the stylesheet
  // wins regardless of the order they're written in this string).
  return (
    <span className={`items-center gap-1.5 text-xs font-medium tabular-nums ${className}`}>
      <span className="text-gold-light">Italy</span>
      <span>{dateFormatter.format(now)}</span>
      <span aria-hidden>·</span>
      <span>{timeFormatter.format(now)}</span>
    </span>
  );
}
