import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import QuoteForm from "@/components/ui/QuoteForm";
import HowItWorks from "@/components/sections/HowItWorks";

export const metadata: Metadata = {
  title: "Book Your Private Chauffeur",
  description: `Book a private chauffeur with ${siteConfig.name} — share your journey details and receive a fixed-price quote for airport transfers, city-to-city travel, tours and corporate journeys across Italy.`,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Book Now" }]} />

      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">Book Now</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">
              Book Your Private Chauffeur
            </h1>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
              Share your pickup, destination and travel dates below and our team will confirm
              availability and a fixed price — usually within a few hours.
            </p>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
              Prefer to talk it through first? Email us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold-light hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      <HowItWorks />
    </>
  );
}
