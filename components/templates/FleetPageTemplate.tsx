import Link from "next/link";
import { FleetCategory, FaqItem } from "@/lib/types";
import { fleet } from "@/lib/data/fleet";
import { fleet_it } from "@/lib/i18n/data.it";
import { siteConfig } from "@/lib/siteConfig";
import { localePath, type Locale } from "@/lib/i18n/locales";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import LinkedText from "@/components/ui/LinkedText";
import JsonLd from "@/components/ui/JsonLd";
import Icon from "@/components/ui/Icon";
import QuoteForm from "@/components/ui/QuoteForm";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function FleetPageTemplate({
  vehicle,
  locale = "en",
}: {
  vehicle: FleetCategory;
  locale?: Locale;
}) {
  const it = locale === "it";
  const v = it ? fleet_it[vehicle.slug] : undefined;
  const name = v?.name ?? vehicle.name;
  const passengers = v?.passengers ?? vehicle.passengers;
  const luggage = v?.luggage ?? vehicle.luggage;
  const description = v?.description ?? vehicle.description;
  const amenities = v?.amenities ?? vehicle.amenities;
  const idealFor = v?.idealFor ?? vehicle.idealFor;

  const otherVehicles = fleet.filter((f) => f.slug !== vehicle.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${vehicle.name} Chauffeur Service`,
    description: vehicle.metaDescription,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    areaServed: { "@type": "Country", name: "Italy" },
    url: `${siteConfig.domain}/fleet/${vehicle.slug}`,
  };

  const genericFaqs: FaqItem[] = it
    ? [
        {
          question: `Il modello esatto del veicolo per ${name} è garantito?`,
          answer:
            "No. Questa categoria descrive la capacità di passeggeri, bagagli e lo standard generale di presentazione — il modello specifico viene confermato in base alla disponibilità al momento della prenotazione.",
        },
        {
          question: `Posso richiedere ${name} per un transfer aeroportuale o un tour privato?`,
          answer:
            "Sì. Questa categoria è disponibile per transfer aeroportuali, transfer città-città, noleggio orario, tour privati e viaggi aziendali.",
        },
        {
          question: "Come prenoto questo veicolo?",
          answer:
            "Richiedi un preventivo con i dettagli del tuo viaggio e seleziona questa categoria come veicolo preferito — confermeremo disponibilità e prezzo fisso.",
        },
      ]
    : [
        {
          question: `Is the exact vehicle model guaranteed for ${name}?`,
          answer:
            "No. This category describes passenger capacity, luggage capacity and general presentation standard — the specific model is confirmed based on availability at the time of booking.",
        },
        {
          question: `Can I request ${name} for an airport transfer or private tour?`,
          answer:
            "Yes. This category is available for airport transfers, city-to-city transfers, hourly hire, private tours and corporate travel.",
        },
        {
          question: "How do I book this vehicle?",
          answer:
            "Request a quote with your journey details and select this category as your preferred vehicle — we'll confirm availability and a fixed price.",
        },
      ];

  const faqs: FaqItem[] = it ? genericFaqs : vehicle.faqs ?? genericFaqs;

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <Breadcrumbs
        locale={locale}
        items={[{ label: it ? "Flotta" : "Fleet", href: localePath(locale, "/fleet") }, { label: name }]}
      />

      <section className="bg-navy-deep text-ivory">
        <div className="container-luxe py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">{it ? "La Nostra Flotta" : "Our Fleet"}</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">{name}</h1>
            <p className="mt-4 text-sm font-medium text-gold-light">
              {passengers} · {luggage}
            </p>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-ivory-deep/80">{description}</p>
          </div>
          <QuoteForm compact locale={locale} defaultVehicle={name} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <ImageBlock label={name} variant="navy" aspect="aspect-[16/10]" src={vehicle.image} />
          <div>
            <SectionHeading
              eyebrow={it ? "Dotazioni" : "Amenities"}
              title={it ? "Cosa È Incluso" : "What's Included"}
            />
            <ul className="mt-6 space-y-3">
              {amenities.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-stone italic">{it ? "Ideale per" : "Ideal for"}: {idealFor}</p>
          </div>
        </div>
      </section>

      {!it && vehicle.whoFor && (
        <section className="py-16 md:py-24 bg-ivory-deep/40">
          <div className="container-luxe grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading eyebrow="Who It's For" title={`Is the ${name} Right for You?`} />
              <ul className="mt-6 space-y-3">
                {vehicle.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-ink-soft">
                    <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
            {vehicle.capacityNote && (
              <div>
                <SectionHeading eyebrow="Passengers & Luggage" title="Choosing the Right Capacity" />
                <p className="mt-6 text-sm leading-relaxed text-stone">
                  <LinkedText text={vehicle.capacityNote} />
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {!it && vehicle.comparisons && vehicle.comparisons.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-luxe max-w-3xl">
            <SectionHeading eyebrow="Choosing Between Categories" title={`${name}, Compared`} />
            <div className="mt-8 space-y-5">
              {vehicle.comparisons.map((c) => {
                const other = fleet.find((f) => f.slug === c.withSlug);
                return (
                  <div key={c.withSlug} className="rounded-md border border-line bg-ivory p-5">
                    <p className="font-display text-base text-navy mb-2">
                      {name} vs {other?.name ?? c.withSlug}
                    </p>
                    <p className="text-sm leading-relaxed text-stone">
                      <LinkedText text={c.note} />
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={it ? "Altre Categorie" : "Other Fleet Categories"}
            title={it ? "Esplora il Resto della Flotta" : "Explore the Rest of the Fleet"}
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherVehicles.map((f) => {
              const fit = it ? fleet_it[f.slug] : undefined;
              return (
                <Link key={f.slug} href={localePath(locale, `/fleet/${f.slug}`)} className="group block">
                  <ImageBlock
                    label={fit?.name ?? f.name}
                    variant="gold"
                    aspect="aspect-[4/3]"
                    className="group-hover:opacity-90 transition-opacity"
                    src={f.image}
                  />
                  <p className="mt-3 text-sm font-semibold text-navy">{fit?.name ?? f.name}</p>
                  <p className="text-xs text-stone">{fit?.passengers ?? f.passengers}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title={it ? `${name} — Domande Frequenti` : `${name} — Frequently Asked Questions`} />
      <FinalCTA locale={locale} />
    </>
  );
}
