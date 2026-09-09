"use client";

import { useActionState, useState } from "react";
import { Star } from "lucide-react";
import { submitMyReview, type ReviewFormState } from "@/lib/customer/reviews";

export function ReviewForm({ reference, existing }: { reference: string; existing: { rating: number; comment: string | null } | null }) {
  const action = submitMyReview.bind(null, reference);
  const [state, formAction, pending] = useActionState<ReviewFormState, FormData>(action, undefined);
  const [rating, setRating] = useState(existing?.rating ?? 5);

  if (existing && !state?.success) {
    return (
      <div className="space-y-2">
        <div className="flex text-amber-500">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="h-4 w-4" fill={i < existing.rating ? "currentColor" : "none"} />
          ))}
        </div>
        {existing.comment ? <p className="text-sm text-ink-soft">{existing.comment}</p> : null}
        <p className="text-xs text-stone">Thanks for your feedback.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} type="button" onClick={() => setRating(n)} aria-label={`${n} stars`}>
            <Star className={`h-6 w-6 ${n <= rating ? "text-amber-500" : "text-line"}`} fill={n <= rating ? "currentColor" : "none"} />
          </button>
        ))}
      </div>
      <input type="hidden" name="rating" value={rating} />
      <textarea name="comment" rows={3} defaultValue={existing?.comment ?? ""} placeholder="Tell us about your trip (optional)" className="input-luxe" />
      {state?.error ? (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-3 py-2">
          {state.error}
        </p>
      ) : null}
      {state?.success ? <p className="text-sm text-emerald-700">Thanks for your feedback!</p> : null}
      <button type="submit" disabled={pending} className="bg-navy text-ivory text-sm font-semibold px-4 py-2 rounded-sm hover:bg-navy-deep disabled:opacity-60">
        {pending ? "Submitting…" : "Submit review"}
      </button>
    </form>
  );
}
