import Link from "next/link";
import { Service } from "@/lib/types";
import { destinations } from "@/lib/data/destinations";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/siteConfig";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import { services_it, destinationNames_it } from "@/lib/i18n/data.it";
import { localePath, type Locale } from "@/lib/i18n/locales";
import { getDictionary } from "@/lib/i18n/dictionary";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/ui/JsonLd";
import LinkedText from "@/components/ui/LinkedText";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import QuoteForm from "@/components/ui/QuoteForm";

interface Step {
  n: string;
  title: string;
  desc: string;
}

interface LocalizedText {
  en: string;
  it: string;
}

export interface ServicePageCopyOverrides {
  /** Replaces the generic "Service Benefits" / "Why Book This Service" heading. */
  benefits?: { eyebrow: LocalizedText; title: LocalizedText };
  /** Replaces the generic "Who It's For" / "Is This Service Right for You?" heading. */
  whoFor?: { eyebrow: LocalizedText; title: LocalizedText };
  /** Replaces the shared homepage 4-step booking flow with a page-specific process. */
  steps?: { en: Step[]; it: Step[] };
}

export default function ServicePageTemplate({
  service,
  extra,
  destinationSlugs,
  locale = "en",
  copyOverrides,
}: {
  service: Service;
  extra?: React.ReactNode;
  /** Override which destinations appear in "Explore by Destination" — use when the default top 6 wouldn't make sense (e.g. a service only relevant to certain cities). */
  destinationSlugs?: string[];
  locale?: Locale;
  /** Page-specific section headings and process steps, so pages sharing this template don't render identical scaffolding around their (already unique) content. */
  copyOverrides?: ServicePageCopyOverrides;
}) {
  const it = locale === "it";
  const sd = it ? serviceDetails_it[service.slug] : undefined;
  const name = it ? services_it[service.slug]?.name ?? service.name : service.name;
  const heroHeading = sd?.heroHeading ?? service.heroHeading;
  const intro = sd?.intro ?? service.intro;
  const benefits = sd?.benefits ?? service.benefits;
  const whoFor = sd?.whoFor ?? service.whoFor;
  const included = sd?.included ?? service.included;
  const faqs = sd?.faqs ?? service.faqs;

  const benefitsEyebrow = copyOverrides?.benefits ? (it ? copyOverrides.benefits.eyebrow.it : copyOverrides.benefits.eyebrow.en) : (it ? "Vantaggi del Servizio" : "Service Benefits");
  const benefitsTitle = copyOverrides?.benefits ? (it ? copyOverrides.benefits.title.it : copyOverrides.benefits.title.en) : (it ? "Perché Prenotare Questo Servizio" : "Why Book This Service");
  const whoForEyebrow = copyOverrides?.whoFor ? (it ? copyOverrides.whoFor.eyebrow.it : copyOverrides.whoFor.eyebrow.en) : (it ? "A Chi è Rivolto" : "Who It's For");
  const whoForTitle = copyOverrides?.whoFor ? (it ? copyOverrides.whoFor.title.it : copyOverrides.whoFor.title.en) : (it ? "Questo Servizio Fa per Te?" : "Is This Service Right for You?");
  const howItWorksSteps = copyOverrides?.steps ? (it ? copyOverrides.steps.it : copyOverrides.steps.en) : undefined;

  const trustBar = getDictionary(locale).home.trustBar;
  const heroHighlights: { icon: string; title: string; desc: string }[] = [
    { icon: "steering-wheel", ...trustBar[0] },
    { icon: "sparkles", ...trustBar[1] },
    { icon: "shield", ...trustBar[3] },
  ];

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
      <Breadcrumbs locale={locale} items={[{ label: name }]} />

      <section className="bg-navy-deep text-ivory">
        <div className="container-luxe py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">{name}</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">{heroHeading}</h1>
            <div className="mt-6 space-y-4 max-w-xl">
              {intro.map((p, i) => (
                <p key={i} className="text-[0.98rem] leading-relaxed text-ivory-deep/80">
                  <LinkedText text={p} linkClassName="text-gold-light underline underline-offset-2 hover:text-gold" />
                </p>
              ))}
            </div>
          </div>
          <QuoteForm compact locale={locale} />
        </div>

        <div className="container-luxe pb-14 md:pb-16">
          <div className="gold-rule" aria-hidden />
          <div className="mt-8 rounded-sm border border-ivory/15 bg-white/[0.025]">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-ivory/10 md:divide-y-0 md:divide-x md:divide-ivory/10">
              <div className="px-6 py-7 text-center">
                <p className="font-display text-3xl md:text-[2.35rem] leading-none text-gold-light">{destinations.length}</p>
                <p className="mt-2.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ivory-deep/55">
                  {it ? "Destinazioni Coperte" : "Destinations Covered"}
                </p>
              </div>
              <div className="px-6 py-7 text-center">
                <p className="font-display text-3xl md:text-[2.35rem] leading-none text-gold-light">24/7</p>
                <p className="mt-2.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ivory-deep/55">
                  {it ? "Disponibili Tutto l'Anno" : "Available Year-Round"}
                </p>
              </div>
              <a
                href={siteConfig.trustpilotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-7 text-center"
              >
                <p className="font-display text-3xl md:text-[2.35rem] leading-none text-gold-light group-hover:text-gold transition-colors">
                  {it ? "Verificate" : "Verified"}
                </p>
                <p className="mt-2.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ivory-deep/55 group-hover:text-ivory-deep/80 transition-colors">
                  {it ? "Recensioni su Trustpilot" : "Reviews on Trustpilot"}
                </p>
              </a>
              <div className="px-6 py-7 text-center">
                <p className="font-display text-3xl md:text-[2.35rem] leading-none text-gold-light">100%</p>
                <p className="mt-2.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-ivory-deep/55">
                  {it ? "Privato — Solo il Tuo Gruppo" : "Private — Your Group Only"}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid sm:grid-cols-3 gap-4">
            {heroHighlights.map((h) => (
              <div
                key={h.title}
                className="flex items-start gap-4 rounded-sm border border-ivory/10 bg-white/[0.025] p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold-light shrink-0">
                  <Icon name={h.icon} className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ivory">{h.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ivory-deep/60">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow={benefitsEyebrow} title={benefitsTitle} />
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow={whoForEyebrow} title={whoForTitle} />
            <ul className="mt-6 space-y-3">
              {whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {w}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-md border border-line bg-white p-6">
              <h3 className="font-display text-lg text-navy mb-3">{it ? "Cosa È Incluso" : "What's Included"}</h3>
              <ul className="space-y-2">
                {included.map((inc) => (
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

      <HowItWorks locale={locale} steps={howItWorksSteps} />

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={it ? "Esplora per Destinazione" : "Explore by Destination"}
            title={it ? "Disponibile nelle Migliori Destinazioni Italiane" : "Available Across Italy's Top Destinations"}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {featuredDestinations.map((d) => (
              <Link
                key={d.slug}
                href={localePath(locale, `/destinations/${d.slug}`)}
                className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
              >
                {it ? `${name} a ${destinationNames_it[d.slug]?.name ?? d.name}` : `${service.name} in ${d.name}`}
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <SectionHeading eyebrow={it ? "Servizi Correlati" : "Related Services"} title={it ? "Potrebbe Interessarti Anche" : "You Might Also Need"} />
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={localePath(locale, `/${s.slug}`)}
                  className="rounded-md border border-line bg-white p-5 hover:border-gold/50 transition-colors"
                >
                  <p className="font-display text-base text-navy">{it ? services_it[s.slug]?.name ?? s.name : s.name}</p>
                  <p className="mt-1.5 text-xs text-stone leading-relaxed">
                    {it ? services_it[s.slug]?.shortDescription ?? s.shortDescription : s.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title={it ? `${name} — Domande Frequenti` : `${service.name} — Frequently Asked Questions`} />
      <FinalCTA locale={locale} />
    </>
  );
}
