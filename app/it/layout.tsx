import type { Metadata, Viewport } from "next";
import "../globals.css";
import { playfair, inter } from "@/lib/fonts";
import { siteConfig } from "@/lib/siteConfig";
import { HashSessionHandler } from "@/components/auth/HashSessionHandler";
import SiteScripts from "@/components/layout/SiteScripts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import CookieNotice from "@/components/layout/CookieNotice";
import LanguageWelcomeModal from "@/components/layout/LanguageWelcomeModal";

const titleIt = `${siteConfig.name} | Servizio Auto con Autista Privato in Italia`;
const descriptionIt =
  "Servizio auto con autista privato di alta gamma in tutta Italia: transfer aeroportuali, trasporto città-città, noleggio a ore e tour privati con autisti che parlano inglese.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: titleIt,
    template: `%s | ${siteConfig.name}`,
  },
  description: descriptionIt,
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: siteConfig.name,
    title: titleIt,
    description: descriptionIt,
  },
  twitter: {
    card: "summary_large_image",
    title: titleIt,
    description: descriptionIt,
  },
  alternates: {
    canonical: "/it",
    languages: { en: "/", it: "/it", "x-default": "/" },
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

export default function ItalianRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-sm focus:bg-navy focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ivory"
        >
          Vai al contenuto
        </a>
        <SiteScripts />
        <HashSessionHandler />
        <Header locale="it" />
        <main id="main-content" className="flex-1 pb-16 xl:pb-0">
          {children}
        </main>
        <Footer locale="it" />
        <StickyMobileCTA locale="it" />
        <CookieNotice locale="it" />
        <LanguageWelcomeModal locale="it" />
      </body>
    </html>
  );
}
