import Link from "next/link";
import { Destination, FaqItem } from "@/lib/types";
import { airports } from "@/lib/data/airports";
import { routes } from "@/lib/data/routes";
import { destinations } from "@/lib/data/destinations";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import QuoteForm from "@/components/ui/QuoteForm";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function DestinationPageTemplate({ destination }: { destination: Destination }) {
  const linkedAirports = airports.filter((a) => destination.nearestAirports.includes(a.slug));
  const linkedRoutes = routes.filter((r) => destination.relatedRoutes.includes(r.slug));
  const linkedDestinations = destinations.filter((d) => destination.relatedDestinations.includes(d.slug));

  const faqs: FaqItem[] = [
    {
      question: `How do I book a private chauffeur in ${destination.name}?`,
      answer: `Request a quote with your pickup location, date and passenger details, and we'll confirm availability and a fixed price for your ${destination.name} transfer or tour.`,
    },
    {
      question: `What is the nearest airport to ${destination.name}?`,
      answer:
        linkedAirports.length > 0
          ? `The most convenient option is typically ${linkedAirports[0].name} (${linkedAirports[0].code}).`
          : `See our full list of airport transfer pages for the closest options to ${destination.name}.`,
    },
    {
      question: `Can I combine ${destination.name} with other cities on the same trip?`,
      answer: `Yes, we regularly arrange multi-city itineraries. See our related routes and destinations below for common combinations.`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: destination.name }]} />

      <section className="bg-navy-deep text-ivory">
        <div className="container-luxe py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">{destination.region}</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">
              {destination.heading}
            </h1>
            <div className="mt-6 space-y-4 max-w-xl">
              {destination.intro.map((p, i) => (
                <p key={i} className="text-[0.98rem] leading-relaxed text-ivory-deep/80">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <QuoteForm compact />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Highlights" title={`Why Book a Chauffeur in ${destination.name}`} />
            <ul className="mt-6 space-y-3">
              {destination.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="font-display text-lg text-navy mb-3">Popular Pickup & Drop-off Points</h3>
              <ul className="space-y-2">
                {destination.popularPickups.map((p) => (
                  <li key={p} className="text-sm text-stone flex items-start gap-2">
                    <span className="text-gold">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ImageBlock label={destination.name} variant="gold" aspect="aspect-[4/5]" />
        </div>
      </section>

      {(linkedAirports.length > 0 || linkedRoutes.length > 0) && (
        <section className="py-16 md:py-24 bg-ivory-deep/40">
          <div className="container-luxe grid md:grid-cols-2 gap-12">
            {linkedAirports.length > 0 && (
              <div>
                <SectionHeading eyebrow="Airport Transfers" title="Nearest Airports" />
                <div className="mt-6 flex flex-wrap gap-3">
                  {linkedAirports.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/airport-transfers/${a.slug}`}
                      className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
                    >
                      {a.name} Transfer
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {linkedRoutes.length > 0 && (
              <div>
                <SectionHeading eyebrow="Popular Routes" title="Private Transfers" />
                <div className="mt-6 flex flex-wrap gap-3">
                  {linkedRoutes.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/routes/${r.slug}`}
                      className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
                    >
                      {r.from} → {r.to}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {linkedDestinations.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-luxe">
            <SectionHeading eyebrow="Nearby Destinations" title="Continue Your Journey" />
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {linkedDestinations.map((d) => (
                <Link key={d.slug} href={`/destinations/${d.slug}`} className="group block">
                  <ImageBlock label={d.name} variant="navy" />
                  <p className="mt-3 text-sm font-semibold text-navy">{d.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <HowItWorks />
      <FaqSection items={faqs} title={`${destination.name} — Frequently Asked Questions`} />
      <FinalCTA />
    </>
  );
}
