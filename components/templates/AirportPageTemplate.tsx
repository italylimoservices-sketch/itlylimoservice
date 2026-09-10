import Link from "next/link";
import { Airport } from "@/lib/types";
import { destinations } from "@/lib/data/destinations";
import { airports } from "@/lib/data/airports";
import { airportDetails_it } from "@/lib/i18n/data.it.airports";
import { airportNames_it, destinationNames_it } from "@/lib/i18n/data.it";
import { localePath, type Locale } from "@/lib/i18n/locales";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import QuoteForm from "@/components/ui/QuoteForm";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { FaqItem } from "@/lib/types";

export default function AirportPageTemplate({ airport, locale = "en" }: { airport: Airport; locale?: Locale }) {
  const it = locale === "it";
  const ad = it ? airportDetails_it[airport.slug] : undefined;
  const name = it ? airportNames_it[airport.slug]?.name ?? airport.name : airport.name;
  const intro = ad?.intro ?? airport.intro;
  const distanceInfo = ad?.distanceInfo ?? airport.distanceInfo;

  const linkedDestinations = destinations.filter((d) => airport.nearestDestinations.includes(d.slug));
  const otherAirports = airports.filter((a) => a.slug !== airport.slug).slice(0, 5);

  const faqs: FaqItem[] = it
    ? [
        {
          question: `Come funziona l'accoglienza personalizzata a ${name}?`,
          answer: `Il tuo autista ti aspetta nella sala arrivi con un cartello con il tuo nome, monitorando il tuo volo così l'orario di ritiro si adatta automaticamente ad arrivi anticipati o in ritardo.`,
        },
        {
          question: `Quanto dista ${name} dal centro città?`,
          answer: distanceInfo,
        },
        {
          question: "Posso prenotare un transfer di sola andata o andata e ritorno?",
          answer: "Entrambe le opzioni sono disponibili — scegli semplicemente la tua preferenza al momento della richiesta del preventivo.",
        },
      ]
    : [
        {
          question: `How does the meet & greet work at ${airport.name}?`,
          answer: `Your chauffeur waits in the arrivals hall with a name board, tracking your flight so pickup timing adjusts automatically for early or delayed landings.`,
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
      <Breadcrumbs
        locale={locale}
        items={[{ label: it ? "Transfer Aeroportuali" : "Airport Transfers", href: localePath(locale, "/airport-transfers") }, { label: name }]}
      />

      <section className="bg-navy-deep text-ivory">
        <div className="container-luxe py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">{it ? "Transfer Aeroportuali" : "Airport Transfers"} · {airport.code}</p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">
              {it ? `Transfer con Autista ${name}` : `${airport.name} Chauffeur Transfer`}
            </h1>
            <div className="mt-6 space-y-4 max-w-xl">
              {intro.map((p, i) => (
                <p key={i} className="text-[0.98rem] leading-relaxed text-ivory-deep/80">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-6 text-sm text-gold-light font-medium">{distanceInfo}</p>
          </div>
          <QuoteForm compact locale={locale} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow={it ? "Cosa Include" : "What's Included"} title={it ? "Un Arrivo più Semplice" : "A Smoother Arrival"} />
            <ul className="mt-6 space-y-3">
              {(it
                ? [
                    "Monitoraggio del volo in tempo reale per ritardi e arrivi anticipati",
                    "Accoglienza personalizzata all'arrivo con cartello",
                    "Assistenza bagagli dal terminal al veicolo",
                    "Trasporto diretto e non condiviso verso la tua destinazione",
                  ]
                : [
                    "Real-time flight monitoring for delays and early arrivals",
                    "Meet & greet at arrivals with a name board",
                    "Luggage assistance from terminal to vehicle",
                    "Direct, non-shared transportation to your destination",
                  ]
              ).map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow={it ? "Destinazioni di Proseguimento" : "Onward Destinations"}
              title={it ? `Dove Andare da ${name}` : `Where to Go From ${airport.name}`}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {linkedDestinations.length > 0 ? (
                linkedDestinations.map((d) => (
                  <Link
                    key={d.slug}
                    href={localePath(locale, `/destinations/${d.slug}`)}
                    className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink-soft hover:border-gold hover:text-gold transition-colors"
                  >
                    {it ? `Transfer per ${destinationNames_it[d.slug]?.name ?? d.name}` : `Transfer to ${d.name}`}
                  </Link>
                ))
              ) : (
                <p className="text-sm text-stone">
                  {it ? (
                    <>
                      Consulta il nostro <Link href={localePath(locale, "/destinations")} className="text-gold hover:underline">elenco completo delle destinazioni</Link> per le opzioni di proseguimento.
                    </>
                  ) : (
                    <>
                      See our <Link href="/destinations" className="text-gold hover:underline">full list of destinations</Link> for onward travel options.
                    </>
                  )}
                </p>
              )}
            </div>

            <div className="mt-8 rounded-md border border-line bg-white p-6">
              <h3 className="font-display text-lg text-navy mb-3">{it ? "Altri Transfer Aeroportuali" : "Other Airport Transfers"}</h3>
              <ul className="space-y-2">
                {otherAirports.map((a) => (
                  <li key={a.slug}>
                    <Link href={localePath(locale, `/airport-transfers/${a.slug}`)} className="text-sm text-stone hover:text-gold">
                      {it ? airportNames_it[a.slug]?.name ?? a.name : a.name} ({a.code})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks locale={locale} />
      <FaqSection items={faqs} title={it ? `${name} — Domande Frequenti` : `${airport.name} — Frequently Asked Questions`} />
      <FinalCTA locale={locale} />
    </>
  );
}
