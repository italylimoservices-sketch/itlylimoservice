import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { HashSessionHandler } from "@/components/auth/HashSessionHandler";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Private Chauffeur Service in Italy`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Private Chauffeur Service in Italy`,
    description: siteConfig.description,
    url: siteConfig.domain,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Private Chauffeur Service in Italy`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1526",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Types combined per Google's guidance for local/travel service businesses.
        // NOTE: telephone/email/address are deliberately omitted until real values
        // replace the placeholders in lib/siteConfig.ts — structured data is parsed
        // by search engines, so a bracketed placeholder here is far more harmful
        // than one in visible copy (nobody reviews JSON-LD by eye before launch).
        "@type": ["Organization", "LocalBusiness", "TaxiService"],
        "@id": `${siteConfig.domain}/#organization`,
        name: siteConfig.name,
        url: siteConfig.domain,
        description: siteConfig.description,
        areaServed: {
          "@type": "Country",
          name: "Italy",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        name: siteConfig.name,
        url: siteConfig.domain,
        publisher: { "@id": `${siteConfig.domain}/#organization` },
      },
      {
        "@type": "Service",
        serviceType: "Private Chauffeur Service",
        provider: { "@id": `${siteConfig.domain}/#organization` },
        areaServed: {
          "@type": "Country",
          name: "Italy",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-sm focus:bg-navy focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ivory"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HashSessionHandler />
        {children}
      </body>
    </html>
  );
}
