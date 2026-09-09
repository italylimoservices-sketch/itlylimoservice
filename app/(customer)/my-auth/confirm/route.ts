import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Mirrors app/admin/auth/confirm/route.ts for the customer portal's magic-link
// sign-in — exchanges the ?code= Supabase emails for a session, then lands on
// /my-bookings. Supabase Auth's "Redirect URLs" allowlist must include this route.
export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/my-bookings";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/my-login?error=invalid-link`);
}
