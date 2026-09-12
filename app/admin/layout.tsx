import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { playfair, inter } from "@/lib/fonts";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ivory text-ink">{children}</body>
    </html>
  );
}
