import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";

const GA_MEASUREMENT_ID = "G-VTGGYS382Q";
const AHREFS_ANALYTICS_KEY = "+XsOQ2KW0IjexDtxRY346A";
const CLARITY_PROJECT_ID = "yfxrnqcgda";

/**
 * Organization/WebSite/Service JSON-LD plus the GA, Ahrefs and Clarity tags —
 * shared by the public (en) and it root layouts only. Deliberately not used
 * on admin/the customer portal: those are staff/authenticated tools, not
 * pages marketing analytics or search engines need to see.
 */
export default function SiteScripts() {
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
    <>
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
    </>
  );
}
