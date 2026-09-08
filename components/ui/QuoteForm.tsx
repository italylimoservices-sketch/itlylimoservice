"use client";

import { useState, FormEvent } from "react";
import { getDictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];

export default function QuoteForm({ compact = false, locale = "en" }: { compact?: boolean; locale?: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const t = getDictionary(locale).quoteForm;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Honeypot: a field real visitors never see or fill, but bots typically do.
    // Silently accept (so the bot gets no signal it was rejected) without
    // actually processing the submission.
    const honeypot = (e.currentTarget.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (honeypot) {
      setSubmitted(true);
      return;
    }
    // Booking requests are handled by connecting this form to your reservations
    // system or inbox (e.g. a form endpoint or CRM integration) before launch.
    setSubmitted(true);
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
          <input required type="date" name="date" className="input-luxe" />
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
          <select name="vehicle" defaultValue={t.vehicleOptions[0]} className="input-luxe">
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
              onClick={() => setTripType(opt.value)}
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

      <div className="mt-4">
        <Field label={t.specialRequirements}>
          <textarea
            name="requirements"
            rows={2}
            placeholder={t.specialRequirementsPlaceholder}
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

      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-gold-light px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-deep hover:bg-gold-pale transition-colors"
      >
        {t.submit}
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
