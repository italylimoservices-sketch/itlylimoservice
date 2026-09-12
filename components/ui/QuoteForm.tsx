"use client";

import { useState, FormEvent } from "react";
import Script from "next/script";
import { parseISO } from "date-fns";
import { getDictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import DatePicker from "@/components/ui/DatePicker";

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];

// Public site key — safe to ship to the browser (that's what it's for).
// The secret key lives only in app/api/booking/route.ts / lib/recaptcha.ts.
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const RECAPTCHA_ACTION = "submit_booking";

declare global {
  interface Window {
    grecaptcha?: {
      enterprise: {
        ready: (cb: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

function getRecaptchaToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha?.enterprise) {
      reject(new Error("reCAPTCHA not loaded"));
      return;
    }
    window.grecaptcha.enterprise.ready(() => {
      window
        .grecaptcha!.enterprise.execute(RECAPTCHA_SITE_KEY!, { action: RECAPTCHA_ACTION })
        .then(resolve)
        .catch(reject);
    });
  });
}

export default function QuoteForm({
  compact = false,
  locale = "en",
  defaultVehicle,
  requirementsPlaceholder,
}: {
  compact?: boolean;
  locale?: Locale;
  /** Pre-selects the vehicle option — e.g. a fleet category page passing its own vehicle name. */
  defaultVehicle?: string;
  /** Overrides the special-requirements placeholder — e.g. international transfer pages prompting for border/flight details. */
  requirementsPlaceholder?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [dateError, setDateError] = useState(false);
  const [returnDateError, setReturnDateError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const t = getDictionary(locale).quoteForm;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: a field real visitors never see or fill, but bots typically do.
    // Silently accept (so the bot gets no signal it was rejected) without
    // actually processing the submission.
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    // The travel date is a hidden input (DatePicker's calendar UI has no
    // native browser validation), so it needs an explicit check here —
    // unlike the plain <input required> fields, which the browser already
    // blocks submission on before this handler even runs.
    const missingDate = !date;
    const missingReturnDate = tripType === "round-trip" && !returnDate;
    setDateError(missingDate);
    setReturnDateError(missingReturnDate);
    if (missingDate || missingReturnDate) return;

    const payload = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    setSubmitting(true);
    setError(false);
    setErrorMessage("");
    try {
      if (RECAPTCHA_SITE_KEY) {
        // Any failure to get a token (blocked script, network issue) is
        // treated the same as a failed verification rather than silently
        // submitting without one — the server would reject it anyway, and
        // this way the visitor gets an explanation instead of a generic error.
        payload.recaptchaToken = await getRecaptchaToken();
      }

      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok) {
        setErrorMessage(body?.code === "recaptcha_failed" ? t.recaptchaError : t.submitError);
        setError(true);
        return;
      }
      setSubmitted(true);
    } catch {
      setErrorMessage(t.submitError);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-md bg-white p-8 text-center shadow-xl shadow-navy/10 border border-line">
        <p className="eyebrow mb-2">{t.requestReceived}</p>
        <h3 className="font-display text-2xl text-navy">{t.thankYou}</h3>
        <p className="mt-3 text-sm text-stone leading-relaxed">{t.confirmMessage}</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-gold hover:text-gold-light"
        >
          {t.submitAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-md bg-white ${compact ? "p-5 md:p-6" : "p-6 md:p-8"} shadow-xl shadow-navy/10 border border-line`}
    >
      {RECAPTCHA_SITE_KEY && (
        <Script
          id="recaptcha-enterprise"
          src={`https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      {/* Honeypot spam trap — hidden from real visitors, left for bots to fill */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.pickupLocation}>
          <input required type="text" name="pickup" placeholder={t.pickupPlaceholder} className="input-luxe" />
        </Field>
        <Field label={t.destination}>
          <input required type="text" name="destination" placeholder={t.destinationPlaceholder} className="input-luxe" />
        </Field>
        <Field label={t.date}>
          <DatePicker
            name="date"
            value={date}
            onChange={(v) => {
              setDate(v);
              if (v) setDateError(false);
            }}
            placeholder={t.selectDatePlaceholder}
            locale={locale}
            invalid={dateError}
          />
          {dateError && <p className="mt-1 text-xs text-red-600">{t.dateRequiredError}</p>}
        </Field>
        <Field label={t.time}>
          <input required type="time" name="time" className="input-luxe" />
        </Field>
        <Field label={t.passengers}>
          <select required name="passengers" defaultValue="" className="input-luxe">
            <option value="" disabled>
              {t.select}
            </option>
            {passengerOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t.vehicleType}>
          <select name="vehicle" defaultValue={defaultVehicle ?? t.vehicleOptions[0]} className="input-luxe">
            {t.vehicleOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-stone">{t.tripType}</span>
        <div className="flex gap-3">
          {(
            [
              { value: "one-way", label: t.oneWay },
              { value: "round-trip", label: t.roundTrip },
            ] as const
          ).map((opt) => (
            <button
              type="button"
              key={opt.value}
              onClick={() => {
                setTripType(opt.value);
                if (opt.value === "one-way") setReturnDateError(false);
              }}
              className={`flex-1 rounded-sm border py-2.5 text-sm font-medium transition-colors ${
                tripType === opt.value
                  ? "border-navy bg-navy text-ivory"
                  : "border-line text-ink-soft hover:border-navy/40"
              }`}
            >
              {opt.label}
            </button>
          ))}
          <input type="hidden" name="tripType" value={tripType} />
        </div>
      </div>

      {tripType === "round-trip" && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={t.returnDate}>
            <DatePicker
              name="returnDate"
              value={returnDate}
              onChange={(v) => {
                setReturnDate(v);
                if (v) setReturnDateError(false);
              }}
              minDate={date ? parseISO(date) : undefined}
              placeholder={t.selectReturnDatePlaceholder}
              locale={locale}
              invalid={returnDateError}
            />
            {returnDateError && <p className="mt-1 text-xs text-red-600">{t.returnDateRequiredError}</p>}
          </Field>
          <Field label={t.returnTime}>
            <input required type="time" name="returnTime" className="input-luxe" />
          </Field>
        </div>
      )}

      <div className="mt-4">
        <Field label={t.specialRequirements}>
          <textarea
            name="requirements"
            rows={2}
            placeholder={requirementsPlaceholder ?? t.specialRequirementsPlaceholder}
            className="input-luxe resize-none"
          />
        </Field>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.fullName}>
          <input required type="text" name="name" placeholder={t.fullNamePlaceholder} className="input-luxe" />
        </Field>
        <Field label={t.contact}>
          <input required type="text" name="contact" placeholder={t.contactPlaceholder} className="input-luxe" />
        </Field>
      </div>

      {error && <p className="mt-4 text-center text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-sm bg-gold-light px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-deep hover:bg-gold-pale transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? t.submitting : t.submit}
      </button>

      <p className="mt-3 text-center text-xs text-stone">{t.disclaimer}</p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone">
        {label}
      </span>
      {children}
    </label>
  );
}
