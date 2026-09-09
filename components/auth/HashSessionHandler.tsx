"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

/**
 * Supabase-admin-created sessions (invite links, and any link generated via
 * the admin API rather than a browser-initiated resetPasswordForEmail) can't
 * use the `?code=` PKCE exchange in app/admin/auth/confirm/route.ts — there's
 * no browser around to hold a code_verifier when an admin invites someone.
 * Those links carry the session directly in the URL fragment instead
 * (`#access_token=...&refresh_token=...`), which — being a fragment — never
 * reaches the server at all. This runs client-side on every page (mounted in
 * the root layout) specifically to catch that case, wherever Supabase
 * happens to land the user, establish the session, then send them to set
 * their password.
 */
export function HashSessionHandler() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || !hash.includes("access_token")) return;

    const params = new URLSearchParams(hash.slice(1));
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");
    if (!accessToken || !refreshToken) return;

    const supabase = createClient();
    supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken }).then(({ error }) => {
      // Strip the tokens from the address bar/history either way.
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      if (!error) {
        router.replace("/admin/reset-password");
      }
    });
  }, [router]);

  return null;
}
