"use client";

import { useActionState } from "react";
import { updateMyProfile, updateMyNotificationPreferences, type FormState } from "@/lib/customer/actions";

type Profile = {
  full_name: string;
  email: string;
  phone: string | null;
  whatsapp: string | null;
  country: string | null;
  billing_address: string | null;
  opt_out_marketing: boolean;
};

export function ProfileForm({ profile }: { profile: Profile }) {
  const [state, formAction, pending] = useActionState<FormState, FormData>(updateMyProfile, undefined);

  return (
    <div className="space-y-8">
      <form action={formAction} className="space-y-4">
        <Field label="Full name" name="full_name" defaultValue={profile.full_name} required />
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Email</label>
          <input value={profile.email} disabled className="input-luxe opacity-60" />
          <p className="text-xs text-stone mt-1">Contact us to change your email address.</p>
        </div>
        <Field label="Phone" name="phone" defaultValue={profile.phone ?? ""} />
        <Field label="WhatsApp" name="whatsapp" defaultValue={profile.whatsapp ?? ""} />
        <Field label="Country" name="country" defaultValue={profile.country ?? ""} />
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Billing address</label>
          <textarea name="billing_address" defaultValue={profile.billing_address ?? ""} rows={2} className="input-luxe" />
        </div>

        {state?.error ? (
          <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-3 py-2">
            {state.error}
          </p>
        ) : null}
        {state?.success ? <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-sm px-3 py-2">Saved.</p> : null}

        <button type="submit" disabled={pending} className="bg-navy text-ivory text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-navy-deep disabled:opacity-60">
          {pending ? "Saving…" : "Save changes"}
        </button>
      </form>

      <form action={updateMyNotificationPreferences} className="border-t border-line pt-6 space-y-3">
        <p className="text-sm font-medium text-ink-soft">Email preferences</p>
        <label className="flex items-center gap-2 text-sm text-stone">
          <input type="checkbox" name="opt_out_marketing" defaultChecked={profile.opt_out_marketing} />
          Don&rsquo;t send me follow-up or review-request emails
        </label>
        <p className="text-xs text-stone">Booking confirmations, invoices, and receipts always send regardless of this setting.</p>
        <button type="submit" className="text-sm border border-line px-4 py-2 rounded-sm hover:bg-ivory-deep">
          Save preference
        </button>
      </form>
    </div>
  );
}

function Field({ label, name, defaultValue, required }: { label: string; name: string; defaultValue?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-soft mb-1">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </label>
      <input id={name} name={name} defaultValue={defaultValue} required={required} className="input-luxe" />
    </div>
  );
}
