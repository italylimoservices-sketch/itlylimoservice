import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "../globals.css";
import { playfair, inter } from "@/lib/fonts";
import { siteConfig } from "@/lib/siteConfig";
import { getCurrentCustomer } from "@/lib/auth/customer-dal";
import { signOutCustomer } from "@/lib/customer/actions";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  robots: { index: false, follow: false },
};

export default async function CustomerPortalLayout({ children }: { children: ReactNode }) {
  const session = await getCurrentCustomer();

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-ivory-deep text-ink">
        <header className="bg-navy text-ivory">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href={session ? "/my-bookings" : "/my-login"} className="font-display text-lg">
              {siteConfig.name}
            </Link>
            {session ? (
              <nav className="flex items-center gap-4 text-sm">
                <Link href="/my-bookings" className="hover:text-gold-light">
                  Bookings
                </Link>
                <Link href="/my-invoices" className="hover:text-gold-light">
                  Invoices
                </Link>
                <Link href="/my-profile" className="hover:text-gold-light">
                  Profile
                </Link>
                <form action={signOutCustomer}>
                  <button type="submit" className="text-ivory/70 hover:text-ivory">
                    Sign out
                  </button>
                </form>
              </nav>
            ) : null}
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
