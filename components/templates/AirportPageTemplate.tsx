import Link from "next/link";
import { Airport } from "@/lib/types";
import { destinations } from "@/lib/data/destinations";
import { airports } from "@/lib/data/airports";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import QuoteForm from "@/components/ui/QuoteForm";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { FaqItem } from "@/lib/types";

export default function AirportPageTemplate({ airport }: { airport: Airport }) {
  const linkedDestinations = destinations.filter((d) => airport.nearestDestinations.includes(d.slug));
  const otherAirports = airports.filter((a) => a.slug !== airport.slug).slice(0, 5);

  const faqs: FaqItem[] = [
    {
      question: `How does the meet & greet work at ${airport.name}?`,
      answer: `Your chauffeur waits in the arrivals hall with a name board, tracking your flight so pickup timing adjusts automatically. [Confirm the exact meeting point signage before launch.]`,
    },
    {
      question: `How far is ${airport.name} from the city centre?`,
      answer: airport.distanceInfo,
    },
    {
      question: "Can I book a one-way or round-trip transfer?",
      answer: "Both are available — simply select your preference when requesting a quote.",
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Airport Transfers", href: "/airport-transfers" }, { label: airport.name }]} />

      <section className="bg-navy-deep text-ivory">
        <div className="container-luxe py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">Airport Transfers · {airport.code}</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">
              {airport.name} Chauffeur Transfer
            </h1>
            <div className="mt-6 space-y-4 max-w-xl">
              {airport.intro.map((p, i) => (
                <p key={i} className="text-[0.98rem] leading-relaxed text-ivory-deep/80">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-6 text-sm text-gold-light font-medium">{airport.distanceInfo}</p>
          </div>
          <QuoteForm compact />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What's Included" title="A Smoother Arrival" />
            <ul className="mt-6 space-y-3">
              {[
                "Real-time flight monitoring for delays and early arrivals",
                "Meet & greet at arrivals with a name board",
                "Luggage assistance from terminal to vehicle",
                "Direct, non-shared transportation to your destination",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Onward Destinations" title={`Where to Go From ${airport.name}`} />
            <div className="mt-6 flex flex-wrap gap-3">
              {linkedDestinations.length > 0 ? (
                linkedDestinations.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/destinations/${d.slug}`}
                    className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
                  >
                    Transfer to {d.name}
                  </Link>
                ))
              ) : (
                <p className="text-sm text-stone">
                  See our <Link href="/destinations" className="text-gold hover:underline">full list of destinations</Link> for onward travel options.
                </p>
              )}
            </div>

            <div className="mt-8 rounded-md border border-line bg-white p-6">
              <h3 className="font-display text-lg text-navy mb-3">Other Airport Transfers</h3>
              <ul className="space-y-2">
                {otherAirports.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/airport-transfers/${a.slug}`} className="text-sm text-stone hover:text-gold">
                      {a.name} ({a.code})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <FaqSection items={faqs} title={`${airport.name} — Frequently Asked Questions`} />
      <FinalCTA />
    </>
  );
}
