import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/lib/data/routes";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import HubHero from "@/components/sections/HubHero";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

const faqs = [
  {
    question: "Is pricing for these routes fixed, or does it change with traffic?",
    answer:
      "Every route is priced as a fixed quote agreed before you travel, regardless of traffic or road conditions on the day.",
  },
  {
    question: "Can I add a stop along one of these routes?",
    answer:
      "Yes, scenic or practical stops can usually be arranged on most routes — mention them when requesting your quote.",
  },
  {
    question: "What's the difference between a route and a private tour?",
    answer:
      "A route is a direct transfer between two points. A [private tour](/italy-private-tours) is built around exploring a region at your own pace, often with multiple stops along the way.",
  },
  {
    question: "Do international routes include help with border formalities?",
    answer:
      "No, border authorities handle their own entry and exit procedures. Our chauffeur provides the transportation but cannot guarantee the absence of checks or delays — see our [international border crossing transfers](/international-border-crossing-transfers) page for details.",
  },
];

export const metadata: Metadata = {
  title: "Private Transfer Routes in Italy",
  description:
    "Browse Italy's most popular private chauffeur transfer routes between major cities, with fixed pricing and door-to-door service.",
  alternates: { canonical: "/routes", languages: { en: "/routes", it: "/it/routes", "x-default": "/routes" } },
};

export default function RoutesIndexPage() {
  const domesticRoutes = routes.filter((r) => !r.international);
  const internationalRoutes = routes.filter((r) => r.international);

  return (
    <>
      <Breadcrumbs items={[{ label: "Routes" }]} />
      <HubHero
        eyebrow="Popular Routes"
        heading="City-to-City Private Transfer Routes"
        intro={[
          "Direct, door-to-door private transfers between Italy's most visited cities. Don't see your exact route below? Request a quote and we'll arrange it.",
          "Domestic routes connect Italy's most visited cities with fixed, pre-agreed pricing, while our international routes extend the same private, door-to-door service across the border into Switzerland, France, Austria and Slovenia.",
        ]}
        image="/images/fleet/luxury-sedan.webp"
        stats={[
          { value: String(domesticRoutes.length), label: "Domestic Routes" },
          { value: String(internationalRoutes.length), label: "International Routes" },
          { value: "Verified", label: "Reviews on Trustpilot", href: siteConfig.trustpilotUrl },
          { value: "Fixed", label: "Pricing Agreed Before You Travel" },
        ]}
      />

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {domesticRoutes.map((r) => (
            <Link
              key={r.slug}
              href={`/routes/${r.slug}`}
              className="group flex flex-col justify-between gap-4 rounded-md border border-line bg-white p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 transition-all"
            >
              <div>
                <p className="font-display text-lg text-navy">
                  {r.from} <span className="text-gold">→</span> {r.to}
                </p>
                <p className="mt-2 text-sm text-stone">{r.distanceApprox} · {r.durationApprox}</p>
              </div>
              <span className="text-sm font-semibold text-gold group-hover:text-gold-light">
                View route details →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">International Routes</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-navy">
                Cross-Border Transfers from Italy
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-stone">
                Private chauffeur routes connecting Italy with Switzerland, France, Austria and
                Slovenia. See our{" "}
                <Link href="/international-border-crossing-transfers" className="text-gold hover:underline">
                  international border crossing transfers
                </Link>{" "}
                page for the full picture.
              </p>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {internationalRoutes.map((r) => (
              <Link
                key={r.slug}
                href={`/routes/${r.slug}`}
                className="group flex flex-col justify-between gap-4 rounded-md border border-line bg-ivory-deep/20 p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 transition-all"
              >
                <div>
                  <p className="font-display text-lg text-navy">
                    {r.from} <span className="text-gold">→</span> {r.to}
                  </p>
                  <p className="mt-2 text-sm text-stone">{r.distanceApprox} · {r.durationApprox}</p>
                </div>
                <span className="text-sm font-semibold text-gold group-hover:text-gold-light">
                  View route details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy-deep text-ivory">
        <div className="container-luxe max-w-2xl text-center mx-auto">
          <p className="eyebrow eyebrow-invert mb-3">Can&apos;t Find Your Route?</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Any City, Any Airport, Any Distance
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-ivory-deep/80">
            The routes above are our most requested, but they are not the only ones we run. We
            arrange private transfers between any two points in Italy, and across the border into
            Switzerland, France, Austria and Slovenia, on request. Tell us your pickup and
            drop-off and we&apos;ll send a fixed quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-navy-deep hover:bg-gold-light transition-colors"
          >
            Request a Custom Route
          </Link>
        </div>
      </section>

      <FaqSection items={faqs} title="Routes — Frequently Asked Questions" />
      <FinalCTA />
    </>
  );
}
