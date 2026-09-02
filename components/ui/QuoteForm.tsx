"use client";

import { useState, FormEvent } from "react";

const vehicleOptions = [
  "Not sure yet",
  "Executive Sedan",
  "Luxury Sedan",
  "Luxury SUV",
  "Executive Van",
  "Luxury Van",
];

const passengerOptions = ["1", "2", "3", "4", "5", "6", "7+"];

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Booking requests are handled by connecting this form to your reservations
    // system or inbox (e.g. a form endpoint or CRM integration) before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md bg-white p-8 text-center shadow-xl shadow-navy/10 border border-line">
        <p className="eyebrow mb-2">Request Received</p>
        <h3 className="font-display text-2xl text-navy">Thank you for your request</h3>
        <p className="mt-3 text-sm text-stone leading-relaxed">
          A member of our team will confirm availability and send your fixed quote shortly.
          [This form is a design placeholder — connect it to your booking or CRM system before launch.]
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-gold hover:text-gold-light"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-md bg-white ${compact ? "p-5 md:p-6" : "p-6 md:p-8"} shadow-xl shadow-navy/10 border border-line`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Pickup Location">
          <input
            required
            type="text"
            name="pickup"
            placeholder="e.g. Rome Fiumicino Airport"
            className="input-luxe"
          />
        </Field>
        <Field label="Destination">
          <input
            required
            type="text"
            name="destination"
            placeholder="e.g. Central Rome"
            className="input-luxe"
          />
        </Field>
        <Field label="Date">
          <input required type="date" name="date" className="input-luxe" />
        </Field>
        <Field label="Time">
          <input required type="time" name="time" className="input-luxe" />
        </Field>
        <Field label="Passengers">
          <select required name="passengers" defaultValue="" className="input-luxe">
            <option value="" disabled>
              Select
            </option>
            {passengerOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Vehicle Type">
          <select name="vehicle" defaultValue={vehicleOptions[0]} className="input-luxe">
            {vehicleOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-stone">
          Trip Type
        </span>
        <div className="flex gap-3">
          {(
            [
              { value: "one-way", label: "One-way" },
              { value: "round-trip", label: "Round trip" },
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
        <Field label="Special Requirements (optional)">
          <textarea
            name="requirements"
            rows={2}
            placeholder="Child seat, extra luggage, flight number..."
            className="input-luxe resize-none"
          />
        </Field>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full Name">
          <input required type="text" name="name" placeholder="Your name" className="input-luxe" />
        </Field>
        <Field label="Email or Phone">
          <input
            required
            type="text"
            name="contact"
            placeholder="How should we reach you?"
            className="input-luxe"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-deep hover:bg-gold-light transition-colors"
      >
        Get a Quote
      </button>

      <p className="mt-3 text-center text-xs text-stone">
        No payment required now · Fixed, transparent pricing · Your details are kept private
      </p>
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
