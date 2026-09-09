import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

export function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: ["/admin/:path*", "/my-bookings/:path*", "/my-invoices/:path*", "/my-profile/:path*", "/my-login", "/my-auth/:path*"],
};
