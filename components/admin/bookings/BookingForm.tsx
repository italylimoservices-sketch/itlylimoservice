"use client";

import { useActionState } from "react";
import { EntityPicker } from "@/components/admin/ui/EntityPicker";
import type { FormState } from "@/lib/admin/actions/bookings";

type BookingDefaults = {
  customer_id?: string;
  customer_label?: string;
  quotation_id?: string;
  pickup?: string;
  dropoff?: string;
  trip_date?: string;
  trip_time?: string;
  passengers?: number;
  luggage?: number;
  vehicle_id?: string;
  vehicle_label?: string;
  driver_id?: string;
  driver_label?: string;
  flight_number?: string;
  special_requests?: string;
  price?: number;
  discount?: number;
  tax_amount?: number;
  currency?: string;
  internal_notes?: string;
  customer_notes?: string;
};

export function BookingForm({
  action,
  defaults,
  submitLabel = "Save booking",
}: {
  action: (state: FormState, formData: FormData) => Promise<FormState>;
  defaults?: BookingDefaults;
  submitLabel?: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="space-y-4 max-w-2xl">
      {defaults?.quotation_id ? <input type="hidden" name="quotation_id" value={defaults.quotation_id} /> : null}

      <div>
        <label className="block text-sm font-medium text-ink-soft mb-1">
          Customer <span className="text-red-600">*</span>
        </label>
        <EntityPicker entity="customers" name="customer_id" defaultValue={defaults?.customer_id} defaultLabel={defaults?.customer_label} placeholder="Search customers…" required />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Pickup" name="pickup" defaultValue={defaults?.pickup} required />
        <Field label="Drop-off" name="dropoff" defaultValue={defaults?.dropoff} required />
        <Field label="Trip date" name="trip_date" type="date" defaultValue={defaults?.trip_date} required />
        <Field label="Trip time" name="trip_time" type="time" defaultValue={defaults?.trip_time} required />
        <Field label="Passengers" name="passengers" type="number" defaultValue={defaults?.passengers?.toString()} />
        <Field label="Luggage" name="luggage" type="number" defaultValue={defaults?.luggage?.toString()} />
        <Field label="Flight number" name="flight_number" defaultValue={defaults?.flight_number} />
        <Field label="Currency" name="currency" defaultValue={defaults?.currency ?? "EUR"} />

        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Vehicle</label>
          <EntityPicker entity="vehicles" name="vehicle_id" defaultValue={defaults?.vehicle_id} defaultLabel={defaults?.vehicle_label} placeholder="Search vehicles…" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Driver</label>
          <EntityPicker entity="drivers" name="driver_id" defaultValue={defaults?.driver_id} defaultLabel={defaults?.driver_label} placeholder="Search drivers…" />
        </div>

        <Field label="Price" name="price" type="number" defaultValue={defaults?.price?.toString() ?? "0"} />
        <Field label="Discount" name="discount" type="number" defaultValue={defaults?.discount?.toString() ?? "0"} />
        <Field label="Tax amount" name="tax_amount" type="number" defaultValue={defaults?.tax_amount?.toString() ?? "0"} />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink-soft mb-1">Special requests</label>
        <textarea name="special_requests" defaultValue={defaults?.special_requests ?? ""} rows={2} className="input-luxe" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink-soft mb-1">Internal notes</label>
        <textarea name="internal_notes" defaultValue={defaults?.internal_notes ?? ""} rows={2} className="input-luxe" />
      </div>
      <div>
        <label className="block text-sm font-medium text-ink-soft mb-1">Customer-facing notes</label>
        <textarea name="customer_notes" defaultValue={defaults?.customer_notes ?? ""} rows={2} className="input-luxe" />
      </div>

      {state?.error ? (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-3 py-2">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="bg-navy text-ivory text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-navy-deep transition-colors disabled:opacity-60"
      >
        {pending ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-soft mb-1">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>
      <input id={name} name={name} type={type} defaultValue={defaultValue} required={required} className="input-luxe" />
    </div>
  );
}
