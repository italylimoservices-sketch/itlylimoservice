"use client";

import { useActionState, useState } from "react";
import { EntityPicker } from "@/components/admin/ui/EntityPicker";
import { LineItemsEditor, type LineItem } from "@/components/admin/quotations/LineItemsEditor";
import { createManualInvoice, type FormState } from "@/lib/admin/actions/invoices";

export function InvoiceForm({
  defaultCustomerId,
  defaultCustomerLabel,
  defaultBookingId,
  defaultBookingLabel,
}: {
  defaultCustomerId?: string;
  defaultCustomerLabel?: string;
  defaultBookingId?: string;
  defaultBookingLabel?: string;
}) {
  const [state, formAction, pending] = useActionState<FormState, FormData>(createManualInvoice, undefined);
  const [discount, setDiscount] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const initialItems: LineItem[] = [];

  return (
    <form action={formAction} className="space-y-6 max-w-3xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">
            Customer <span className="text-red-600">*</span>
          </label>
          <EntityPicker entity="customers" name="customer_id" defaultValue={defaultCustomerId} defaultLabel={defaultCustomerLabel} placeholder="Search customers…" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Booking (optional)</label>
          <EntityPicker entity="bookings" name="booking_id" defaultValue={defaultBookingId} defaultLabel={defaultBookingLabel} placeholder="Search bookings…" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Currency</label>
          <input name="currency" defaultValue="EUR" className="input-luxe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Due date</label>
          <input type="date" name="due_date" className="input-luxe" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink-soft mb-2">Line items</label>
        <LineItemsEditor
          name="items"
          initialItems={initialItems}
          discount={discount}
          taxRate={taxRate}
          currency="EUR"
          onDiscountChange={setDiscount}
          onTaxRateChange={setTaxRate}
        />
        <input type="hidden" name="discount" value={discount} />
        <input type="hidden" name="tax_rate" value={taxRate} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Payment terms</label>
          <textarea name="payment_terms" rows={2} className="input-luxe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink-soft mb-1">Terms &amp; conditions</label>
          <textarea name="terms_and_conditions" rows={2} className="input-luxe" />
        </div>
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
        {pending ? "Creating…" : "Create invoice"}
      </button>
    </form>
  );
}
