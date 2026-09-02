import Link from "next/link";
import { Service } from "@/lib/types";
import { destinations } from "@/lib/data/destinations";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/ui/JsonLd";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import QuoteForm from "@/components/ui/QuoteForm";

export default function ServicePageTemplate({
  service,
  extra,
  destinationSlugs,
}: {
  service: Service;
  extra?: React.ReactNode;
  /** Override which destinations appear in "Explore by Destination" — use when the default top 6 wouldn't make sense (e.g. a service only relevant to certain cities). */
  destinationSlugs?: string[];
}) {
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const featuredDestinations = destinationSlugs
    ? destinations.filter((d) => destinationSlugs.includes(d.slug))
    : destinations.slice(0, 6);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    areaServed: { "@type": "Country", name: "Italy" },
    url: `${siteConfig.domain}/${service.slug}`,
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <Breadcrumbs items={[{ label: service.name }]} />

      <section className="bg-navy-deep text-ivory">
        <div className="container-luxe py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">{service.name}</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">
              {service.heroHeading}
            </h1>
            <div className="mt-6 space-y-4 max-w-xl">
              {service.intro.map((p, i) => (
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
            <SectionHeading eyebrow="Service Benefits" title="Why Book This Service" />
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Who It's For" title="Is This Service Right for You?" />
            <ul className="mt-6 space-y-3">
              {service.whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {w}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-md border border-line bg-white p-6">
              <h3 className="font-display text-lg text-navy mb-3">What&apos;s Included</h3>
              <ul className="space-y-2">
                {service.included.map((inc) => (
                  <li key={inc} className="text-sm text-stone flex items-start gap-2">
                    <span className="text-gold">·</span>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {extra}

      <HowItWorks />

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe">
          <SectionHeading eyebrow="Explore by Destination" title="Available Across Italy's Top Destinations" />
          <div className="mt-8 flex flex-wrap gap-3">
            {featuredDestinations.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
              >
                {service.name} in {d.name}
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <SectionHeading eyebrow="Related Services" title="You Might Also Need" />
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="rounded-md border border-line bg-white p-5 hover:border-gold/50 transition-colors"
                >
                  <p className="font-display text-base text-navy">{s.name}</p>
                  <p className="mt-1.5 text-xs text-stone leading-relaxed">{s.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={service.faqs} title={`${service.name} — Frequently Asked Questions`} />
      <FinalCTA />
    </>
  );
}
