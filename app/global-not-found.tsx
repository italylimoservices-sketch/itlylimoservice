// This bypasses the normal app tree entirely (see Next.js's globalNotFound
// experimental feature), so it imports its own styles/fonts and can't reuse
// Header/Footer or any locale context. It only fires for URLs that don't
// match anything at all (not under /it, not under any known route group) —
// (en)/not-found.tsx and it/not-found.tsx handle the normal in-tree case.
import "./globals.css";
import { playfair, inter } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Italy Limo Service",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex items-center justify-center bg-ivory text-ink">
        <div className="text-center px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone mb-4">404</p>
          <h1 className="font-display text-3xl md:text-4xl text-navy">Page Not Found</h1>
          <p className="mt-4 text-sm text-stone">
            {/* Plain <a>, not next/link: this page bypasses the normal app
                tree entirely, so there's no router context for Link to use. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="text-gold hover:underline">
              Back to Italy Limo Service
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
