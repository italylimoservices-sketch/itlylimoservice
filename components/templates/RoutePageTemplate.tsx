import Link from "next/link";
import { RouteInfo, FaqItem } from "@/lib/types";
import { getDestinationBySlug } from "@/lib/data/destinations";
import { routes } from "@/lib/data/routes";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import QuoteForm from "@/components/ui/QuoteForm";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function RoutePageTemplate({ route }: { route: RouteInfo }) {
  const fromDestination = getDestinationBySlug(route.fromSlug);
  const toDestination = getDestinationBySlug(route.toSlug);
  const otherRoutes = routes.filter((r) => r.slug !== route.slug).slice(0, 5);

  const faqs: FaqItem[] = [
    {
      question: `How long does the transfer from ${route.from} to ${route.to} take?`,
      answer: `The journey takes approximately ${route.durationApprox.toLowerCase()}, covering around ${route.distanceApprox.toLowerCase()}, depending on traffic and any requested stops.`,
    },
    {
      question: "Is this a private, direct transfer?",
      answer: "Yes, this is a private, door-to-door transfer for you and your group only — not a shared shuttle.",
    },
    {
      question: "Can I request a stop along the way?",
      answer: "Yes, scenic or practical stops can usually be arranged — mention them when requesting your quote.",
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Routes", href: "/routes" }, { label: `${route.from} to ${route.to}` }]} />

      <section className="bg-navy-deep text-ivory">
        <div className="container-luxe py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">Private Transfer</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">
              {route.from} to {route.to} Private Chauffeur Transfer
            </h1>
            <div className="mt-6 space-y-4 max-w-xl">
              {route.intro.map((p, i) => (
                <p key={i} className="text-[0.98rem] leading-relaxed text-ivory-deep/80">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-6 flex gap-8">
              <div>
                <p className="text-xs uppercase tracking-wide text-gold-light">Distance</p>
                <p className="text-sm font-semibold mt-1">{route.distanceApprox}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-gold-light">Duration</p>
                <p className="text-sm font-semibold mt-1">{route.durationApprox}</p>
              </div>
            </div>
          </div>
          <QuoteForm compact />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Route Highlights" title="What Makes This Transfer Easy" />
            <ul className="mt-6 space-y-3">
              {route.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Departure & Arrival" title="About Your Destinations" />
            <div className="mt-6 space-y-4">
              {fromDestination && (
                <Link
                  href={`/destinations/${fromDestination.slug}`}
                  className="block rounded-md border border-line bg-white p-5 hover:border-gold/50 transition-colors"
                >
                  <p className="text-xs uppercase tracking-wide text-gold">Departing From</p>
                  <p className="font-display text-lg text-navy mt-1">{fromDestination.name}</p>
                  <p className="text-sm text-stone mt-1">{fromDestination.summary}</p>
                </Link>
              )}
              {toDestination && (
                <Link
                  href={`/destinations/${toDestination.slug}`}
                  className="block rounded-md border border-line bg-white p-5 hover:border-gold/50 transition-colors"
                >
                  <p className="text-xs uppercase tracking-wide text-gold">Arriving In</p>
                  <p className="font-display text-lg text-navy mt-1">{toDestination.name}</p>
                  <p className="text-sm text-stone mt-1">{toDestination.summary}</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe">
          <SectionHeading eyebrow="More Popular Routes" title="Other Private Transfers" />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherRoutes.map((r) => (
              <Link
                key={r.slug}
                href={`/routes/${r.slug}`}
                className="flex items-center justify-between gap-3 rounded-sm border border-line bg-white px-5 py-4 hover:border-gold/50 transition-colors"
              >
                <p className="text-sm font-semibold text-navy">
                  {r.from} <span className="text-gold">→</span> {r.to}
                </p>
                <span className="text-gold text-sm">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <FaqSection items={faqs} title={`${route.from} to ${route.to} — Frequently Asked Questions`} />
      <FinalCTA />
    </>
  );
}
