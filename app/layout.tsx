import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { HashSessionHandler } from "@/components/auth/HashSessionHandler";

const GA_MEASUREMENT_ID = "G-VTGGYS382Q";
const AHREFS_ANALYTICS_KEY = "+XsOQ2KW0IjexDtxRY346A";
const CLARITY_PROJECT_ID = "yfxrnqcgda";

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
  verification: {
    google: "yI7_JvGHmvXsg7pN8bXNJIoabuazfwXDadARxcICcEk",
    other: {
      "msvalidate.01": "470931585FFF31283E1B476672E1A59D",
      "p:domain_verify": "94b45acbd592f0d916b42d0c17377408",
    },
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
        // NOTE: telephone/address are deliberately omitted until a real, confirmed
        // number/registered address exists — structured data is parsed by search
        // engines, so a placeholder here is far more harmful than one in visible
        // copy (nobody reviews JSON-LD by eye before launch). Email is real (the
        // booking inbox) and safe to include.
        "@type": ["Organization", "LocalBusiness", "TaxiService"],
        "@id": `${siteConfig.domain}/#organization`,
        name: siteConfig.name,
        url: siteConfig.domain,
        email: siteConfig.email,
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={AHREFS_ANALYTICS_KEY}
          strategy="afterInteractive"
        />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
        <HashSessionHandler />
        {children}
      </body>
    </html>
  );
}
