import Link from "next/link";
import { Destination, FaqItem } from "@/lib/types";
import { airports } from "@/lib/data/airports";
import { routes } from "@/lib/data/routes";
import { destinations } from "@/lib/data/destinations";
import { destinationDetails_it } from "@/lib/i18n/data.it.destinations";
import { destinationNames_it, airportNames_it } from "@/lib/i18n/data.it";
import { localePath, type Locale } from "@/lib/i18n/locales";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import LinkedText from "@/components/ui/LinkedText";
import QuoteForm from "@/components/ui/QuoteForm";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function DestinationPageTemplate({
  destination,
  locale = "en",
}: {
  destination: Destination;
  locale?: Locale;
}) {
  const it = locale === "it";
  const d = it ? destinationDetails_it[destination.slug] : undefined;
  const name = it ? destinationNames_it[destination.slug]?.name ?? destination.name : destination.name;
  const region = it ? destinationNames_it[destination.slug]?.region ?? destination.region : destination.region;
  const heading = d?.heading ?? destination.heading;
  const intro = d?.intro ?? destination.intro;
  const highlights = d?.highlights ?? destination.highlights;
  const popularPickups = d?.popularPickups ?? destination.popularPickups;
  const internationalNote = d?.internationalNote ?? destination.internationalNote;

  const linkedAirports = airports.filter((a) => destination.nearestAirports.includes(a.slug));
  const linkedRoutes = routes.filter((r) => destination.relatedRoutes.includes(r.slug));
  const linkedDestinations = destinations.filter((d) => destination.relatedDestinations.includes(d.slug));

  const faqs: FaqItem[] = it
    ? [
        {
          question: `Come posso prenotare un autista privato a ${name}?`,
          answer: `Richiedi un preventivo indicando luogo di ritiro, data e numero di passeggeri: confermeremo la disponibilità e un prezzo fisso per il tuo transfer o tour a ${name}.`,
        },
        {
          question: `Qual è l'aeroporto più vicino a ${name}?`,
          answer:
            linkedAirports.length > 0
              ? `L'opzione più comoda è generalmente ${airportNames_it[linkedAirports[0].slug]?.name ?? linkedAirports[0].name} (${linkedAirports[0].code}).`
              : `Consulta il nostro elenco completo dei transfer aeroportuali per le opzioni più vicine a ${name}.`,
        },
        {
          question: `Posso combinare ${name} con altre città nello stesso viaggio?`,
          answer: `Sì, organizziamo regolarmente itinerari multi-città. Consulta le tratte e le destinazioni correlate qui sotto per le combinazioni più comuni.`,
        },
      ]
    : [
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
      <Breadcrumbs
        locale={locale}
        items={[
          { label: it ? "Destinazioni" : "Destinations", href: localePath(locale, "/destinations") },
          { label: name },
        ]}
      />

      <section className="bg-navy-deep text-ivory">
        <div className="container-luxe py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">{region}</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">{heading}</h1>
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
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              eyebrow={it ? "In Evidenza" : "Highlights"}
              title={it ? `Perché Prenotare un Autista a ${name}` : `Why Book a Chauffeur in ${destination.name}`}
            />
            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <LinkedText text={h} />
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="font-display text-lg text-navy mb-3">
                {it ? "Punti di Ritiro e Consegna Popolari" : "Popular Pickup & Drop-off Points"}
              </h3>
              <ul className="space-y-2">
                {popularPickups.map((p) => (
                  <li key={p} className="text-sm text-stone flex items-start gap-2">
                    <span className="text-gold">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {internationalNote && (
              <div className="mt-8 rounded-md border border-line bg-white p-6">
                <h3 className="font-display text-lg text-navy mb-2">
                  {it ? `Trasferimenti Internazionali da ${name}` : `International Transfers from ${name}`}
                </h3>
                <p className="text-sm text-stone leading-relaxed">
                  <LinkedText text={internationalNote} linkClassName="text-gold hover:underline" />
                </p>
              </div>
            )}
          </div>

          <ImageBlock label={name} variant="gold" aspect="aspect-[4/5]" src={destination.image || undefined} />
        </div>
      </section>

      {(linkedAirports.length > 0 || linkedRoutes.length > 0) && (
        <section className="py-16 md:py-24 bg-ivory-deep/40">
          <div className="container-luxe grid md:grid-cols-2 gap-12">
            {linkedAirports.length > 0 && (
              <div>
                <SectionHeading
                  eyebrow={it ? "Transfer Aeroportuali" : "Airport Transfers"}
                  title={it ? "Aeroporti più Vicini" : "Nearest Airports"}
                />
                <div className="mt-6 flex flex-wrap gap-3">
                  {linkedAirports.map((a) => (
                    <Link
                      key={a.slug}
                      href={localePath(locale, `/airport-transfers/${a.slug}`)}
                      className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
                    >
                      {it ? `Transfer ${airportNames_it[a.slug]?.name ?? a.name}` : `${a.name} Transfer`}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {linkedRoutes.length > 0 && (
              <div>
                <SectionHeading
                  eyebrow={it ? "Tratte Popolari" : "Popular Routes"}
                  title={it ? "Transfer Privati" : "Private Transfers"}
                />
                <div className="mt-6 flex flex-wrap gap-3">
                  {linkedRoutes.map((r) => (
                    <Link
                      key={r.slug}
                      href={localePath(locale, `/routes/${r.slug}`)}
                      className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
                    >
                      {it
                        ? `${destinationNames_it[r.fromSlug]?.name ?? r.from} → ${destinationNames_it[r.toSlug]?.name ?? r.to}`
                        : `${r.from} → ${r.to}`}
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
            <SectionHeading
              eyebrow={it ? "Destinazioni Vicine" : "Nearby Destinations"}
              title={it ? "Continua il Tuo Viaggio" : "Continue Your Journey"}
            />
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {linkedDestinations.map((ld) => (
                <Link key={ld.slug} href={localePath(locale, `/destinations/${ld.slug}`)} className="group block">
                  <ImageBlock label={it ? destinationNames_it[ld.slug]?.name ?? ld.name : ld.name} variant="navy" src={ld.image || undefined} />
                  <p className="mt-3 text-sm font-semibold text-navy">
                    {it ? destinationNames_it[ld.slug]?.name ?? ld.name : ld.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <HowItWorks locale={locale} />
      <FaqSection items={faqs} title={it ? `${name} — Domande Frequenti` : `${destination.name} — Frequently Asked Questions`} />
      <FinalCTA locale={locale} />
    </>
  );
}
