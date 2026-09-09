"use client";

import { useActionState, useState } from "react";
import { EntityPicker } from "@/components/admin/ui/EntityPicker";
import { LineItemsEditor, type LineItem } from "@/components/admin/quotations/LineItemsEditor";
import type { FormState } from "@/lib/admin/actions/quotations";

type QuotationDefaults = {
  customer_id?: string;
  customer_label?: string;
  lead_id?: string;
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
  discount?: number;
  tax_rate?: number;
  currency?: string;
  valid_until?: string;
  payment_terms?: string;
  terms_and_conditions?: string;
  internal_notes?: string;
  items?: LineItem[];
};

export function QuotationForm({
  action,
  defaults,
  submitLabel = "Save quotation",
}: {
  action: (state: FormState, formData: FormData) => Promise<FormState>;
  defaults?: QuotationDefaults;
  submitLabel?: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const [discount, setDiscount] = useState(defaults?.discount ?? 0);
  const [taxRate, setTaxRate] = useState(defaults?.tax_rate ?? 0);

  return (
    <form action={formAction} className="space-y-6 max-w-3xl">
      {defaults?.lead_id ? <input type="hidden" name="lead_id" value={defaults.lead_id} /> : null}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">
            Customer <span className="text-red-600">*</span>
          </label>
          <EntityPicker
            entity="customers"
            name="customer_id"
            defaultValue={defaults?.customer_id}
            defaultLabel={defaults?.customer_label}
            placeholder="Search customers…"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-ink-soft mb-1">Currency</label>
            <input name="currency" defaultValue={defaults?.currency ?? "EUR"} className="input-luxe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink-soft mb-1">Valid until</label>
            <input type="date" name="valid_until" defaultValue={defaults?.valid_until ?? ""} className="input-luxe" />
          </div>
        </div>

        <Field label="Pickup" name="pickup" defaultValue={defaults?.pickup} />
        <Field label="Drop-off" name="dropoff" defaultValue={defaults?.dropoff} />
        <Field label="Trip date" name="trip_date" type="date" defaultValue={defaults?.trip_date} />
        <Field label="Trip time" name="trip_time" type="time" defaultValue={defaults?.trip_time} />
        <Field label="Passengers" name="passengers" type="number" defaultValue={defaults?.passengers?.toString()} />
        <Field label="Luggage" name="luggage" type="number" defaultValue={defaults?.luggage?.toString()} />

        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Vehicle</label>
          <EntityPicker entity="vehicles" name="vehicle_id" defaultValue={defaults?.vehicle_id} defaultLabel={defaults?.vehicle_label} placeholder="Search vehicles…" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Driver</label>
          <EntityPicker entity="drivers" name="driver_id" defaultValue={defaults?.driver_id} defaultLabel={defaults?.driver_label} placeholder="Search drivers…" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink-soft mb-2">Line items</label>
        <LineItemsEditor
          name="items"
          initialItems={defaults?.items ?? []}
          discount={discount}
          taxRate={taxRate}
          currency={defaults?.currency ?? "EUR"}
          onDiscountChange={setDiscount}
          onTaxRateChange={setTaxRate}
        />
        <input type="hidden" name="discount" value={discount} />
        <input type="hidden" name="tax_rate" value={taxRate} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Payment terms</label>
          <textarea name="payment_terms" defaultValue={defaults?.payment_terms ?? "50% deposit, balance due on the day of travel."} rows={2} className="input-luxe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Terms &amp; conditions</label>
          <textarea name="terms_and_conditions" defaultValue={defaults?.terms_and_conditions ?? ""} rows={2} className="input-luxe" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink-soft mb-1">Internal notes</label>
        <textarea name="internal_notes" defaultValue={defaults?.internal_notes ?? ""} rows={2} className="input-luxe" />
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
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-soft mb-1">
        {label}
      </label>
      <input id={name} name={name} type={type} defaultValue={defaultValue} className="input-luxe" />
    </div>
  );
}
