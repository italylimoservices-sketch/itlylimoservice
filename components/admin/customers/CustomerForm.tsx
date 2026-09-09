"use client";

import { useActionState } from "react";
import type { FormState } from "@/lib/admin/actions/customers";

type Customer = {
  full_name: string;
  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  country: string | null;
  company_name: string | null;
  billing_address: string | null;
  notes: string | null;
};

export function CustomerForm({
  action,
  customer,
  submitLabel = "Save customer",
}: {
  action: (state: FormState, formData: FormData) => Promise<FormState>;
  customer?: Partial<Customer>;
  submitLabel?: string;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="space-y-4 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name" name="full_name" defaultValue={customer?.full_name} required />
        <Field label="Company" name="company_name" defaultValue={customer?.company_name ?? ""} />
        <Field label="Email" name="email" type="email" defaultValue={customer?.email ?? ""} />
        <Field label="Phone" name="phone" defaultValue={customer?.phone ?? ""} />
        <Field label="WhatsApp" name="whatsapp" defaultValue={customer?.whatsapp ?? ""} />
        <Field label="Country" name="country" defaultValue={customer?.country ?? ""} />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink-soft mb-1">Billing address</label>
        <textarea name="billing_address" defaultValue={customer?.billing_address ?? ""} rows={2} className="input-luxe" />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink-soft mb-1">Notes</label>
        <textarea name="notes" defaultValue={customer?.notes ?? ""} rows={3} className="input-luxe" />
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
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        className="input-luxe"
      />
    </div>
  );
}
