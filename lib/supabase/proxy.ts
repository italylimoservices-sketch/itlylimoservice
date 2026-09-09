import "server-only";

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "@/lib/supabase/types";
import { supabasePublishableKey, supabaseUrl } from "@/lib/supabase/env";

// Redirected away from once signed in (there's nothing more for them to do here).
const GUEST_ONLY_ROUTES = ["/admin/login", "/admin/forgot-password"];

// Accessible whether signed in or not. /admin/reset-password and
// /admin/auth/confirm are visited *as part of* signing in (a Supabase
// recovery session), so they must never bounce an authenticated visitor away;
// pending-activation/unauthorized are themselves the landing spot for an
// authenticated user who doesn't (yet) qualify for the dashboard.
const ALWAYS_PUBLIC_ROUTES = [
  "/admin/reset-password",
  "/admin/auth/confirm",
  "/admin/pending-activation",
  "/admin/unauthorized",
];

/**
 * Optimistic auth check + session-cookie refresh, run on every request to
 * /admin/*. This is NOT the security boundary — it only prevents obviously
 * unauthenticated requests from reaching admin pages and keeps the Supabase
 * session cookie fresh. Every server action / route handler / RLS policy
 * underneath still performs its own authorization check against the database.
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient<Database>(supabaseUrl(), supabasePublishableKey(), {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value } of cookiesToSet) {
          request.cookies.set(name, value);
        }
        supabaseResponse = NextResponse.next({ request });
        for (const { name, value, options } of cookiesToSet) {
          supabaseResponse.cookies.set(name, value, options);
        }
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isGuestOnly = GUEST_ONLY_ROUTES.some((route) => pathname.startsWith(route));
  const isAlwaysPublic = ALWAYS_PUBLIC_ROUTES.some((route) => pathname.startsWith(route));

  if (!user && pathname.startsWith("/admin") && !isGuestOnly && !isAlwaysPublic) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (user && isGuestOnly) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return supabaseResponse;
}
