"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const supabase = createClient();
    const { error: sendError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/my-auth/confirm`,
        shouldCreateUser: true,
        data: { account_type: "customer" },
      },
    });

    if (sendError) {
      setStatus("error");
      setError(sendError.message);
      return;
    }
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-sm px-3 py-2">
        Check your email — we sent a sign-in link to <strong>{email}</strong>. It expires shortly, so use it soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-soft mb-1">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="input-luxe"
        />
      </div>
      {status === "error" ? (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-sm px-3 py-2">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-navy text-ivory text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-navy-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send me a sign-in link"}
      </button>
      <p className="text-xs text-stone text-center">No password needed — we&rsquo;ll email you a secure one-time link.</p>
    </form>
  );
}
