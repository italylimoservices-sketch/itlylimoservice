"use client";

import { useActionState } from "react";
import { requestPasswordReset } from "@/lib/auth/actions";

export function ForgotPasswordForm() {
  const [state, action, pending] = useActionState(requestPasswordReset, undefined);

  if (state?.success) {
    return (
      <p className="text-sm text-ink-soft">
        If that email has an admin account, we&apos;ve sent a password reset link to it. Check your inbox.
      </p>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-soft mb-1">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required className="input-luxe" />
      </div>

      {state?.error ? (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-3 py-2">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-navy text-ivory text-sm font-semibold py-2.5 rounded-sm hover:bg-navy-deep transition-colors disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send reset link"}
      </button>

      <div className="text-center pt-2">
        <a href="/admin/login" className="text-xs text-stone hover:text-gold">
          Back to sign in
        </a>
      </div>
    </form>
  );
}
