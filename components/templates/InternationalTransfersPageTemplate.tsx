import Link from "next/link";
import { Service } from "@/lib/types";
import { routes } from "@/lib/data/routes";
import { siteConfig } from "@/lib/siteConfig";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import { localePath, type Locale } from "@/lib/i18n/locales";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/ui/JsonLd";
import LinkedText from "@/components/ui/LinkedText";
import QuoteForm from "@/components/ui/QuoteForm";
import HowItWorks from "@/components/sections/HowItWorks";
import FleetSection from "@/components/sections/FleetSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

const countryGroups: {
  slug: "switzerland" | "france" | "austria" | "slovenia";
  name: { en: string; it: string };
  blurb: { en: string; it: string };
}[] = [
  {
    slug: "switzerland",
    name: { en: "Italy → Switzerland", it: "Italia → Svizzera" },
    blurb: {
      en: "From Milan and Lake Como, private transfers cross into Ticino and beyond — to Lugano's lakefront, Zurich's business district or the alpine resort of St. Moritz.",
      it: "Da Milano e dal Lago di Como, i transfer privati attraversano il confine verso il Ticino e oltre — il lungolago di Lugano, il quartiere finanziario di Zurigo o la località alpina di St. Moritz.",
    },
  },
  {
    slug: "france",
    name: { en: "Italy → France", it: "Italia → Francia" },
    blurb: {
      en: "From Milan, Turin and Sanremo, the Ligurian coastal route leads to the French Riviera, with Nice as the main gateway and the Principality of Monaco a short drive further on.",
      it: "Da Milano, Torino e Sanremo, il percorso costiero ligure conduce alla Costa Azzurra, con Nizza come porta d'accesso principale e il Principato di Monaco poco più avanti.",
    },
  },
  {
    slug: "austria",
    name: { en: "Italy → Austria", it: "Italia → Austria" },
    blurb: {
      en: "From Venice and Bolzano, the Brenner Pass and the Tarvisio crossing lead into Austria's Tyrol region, with Innsbruck and Salzburg as popular destinations.",
      it: "Da Venezia e Bolzano, il Passo del Brennero e il valico di Tarvisio conducono in Austria, nella regione del Tirolo, con Innsbruck e Salisburgo come mete più richieste.",
    },
  },
  {
    slug: "slovenia",
    name: { en: "Italy → Slovenia", it: "Italia → Slovenia" },
    blurb: {
      en: "From Venice and Trieste, a short crossing near Trieste leads into Slovenia, connecting to Ljubljana's old town and the alpine lake of Bled.",
      it: "Da Venezia e Trieste, un breve valico nei pressi di Trieste conduce in Slovenia, verso il centro storico di Lubiana e il lago alpino di Bled.",
    },
  },
];

export default function InternationalTransfersPageTemplate({
  service,
  locale = "en",
}: {
  service: Service;
  locale?: Locale;
}) {
  const it = locale === "it";
  const sd = it ? serviceDetails_it[service.slug] : undefined;
  const name = it ? "Trasferimenti Internazionali" : service.name;
  const heroHeading = sd?.heroHeading ?? service.heroHeading;
  const intro = sd?.intro ?? service.intro;
  const benefits = sd?.benefits ?? service.benefits;
  const whoFor = sd?.whoFor ?? service.whoFor;
  const faqs = sd?.faqs ?? service.faqs;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
    areaServed: [
      { "@type": "Country", name: "Italy" },
      { "@type": "Country", name: "Switzerland" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Slovenia" },
    ],
    url: `${siteConfig.domain}/${service.slug}`,
  };

  const processSteps = it
    ? [
        { n: "01", title: "Indica il Tuo Percorso", desc: "Comunicaci ritiro, destinazione, data, orario, numero di passeggeri, bagagli e veicolo preferito." },
        { n: "02", title: "Verifichiamo il Viaggio", desc: "Il nostro team valuta il valico di frontiera, il percorso, il veicolo e le tempistiche più adatte." },
        { n: "03", title: "Ricevi un Preventivo Fisso", desc: "Ti inviamo un preventivo trasparente prima di confermare la prenotazione." },
        { n: "04", title: "Incontra il Tuo Autista", desc: "Il tuo autista ti aspetta nel punto di ritiro concordato in Italia." },
        { n: "05", title: "Attraversa il Confine", desc: "Il viaggio prosegue come transfer privato, non come navetta condivisa, fino alla destinazione oltre confine." },
      ]
    : [
        { n: "01", title: "Tell Us Your Route", desc: "Share your pickup, destination, date, time, passenger count, luggage and preferred vehicle." },
        { n: "02", title: "We Review the Journey", desc: "Our team checks the border crossing, route, vehicle and timing needed for your trip." },
        { n: "03", title: "Receive a Fixed Quote", desc: "We send a transparent price before you confirm your booking." },
        { n: "04", title: "Meet Your Chauffeur", desc: "Your chauffeur collects you at the agreed pickup location in Italy." },
        { n: "05", title: "Cross the Border", desc: "The journey continues as a private transfer, not a shared shuttle, all the way to your destination." },
      ];

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <Breadcrumbs locale={locale} items={[{ label: name }]} />

      <section className="bg-navy-deep text-ivory">
        <div className="container-luxe py-14 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="eyebrow eyebrow-invert mb-4">
              {it ? "Svizzera · Francia · Austria · Slovenia" : "Switzerland · France · Austria · Slovenia"}
            </p>
            <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-xl">{heroHeading}</h1>
            <div className="mt-6 space-y-4 max-w-xl">
              {intro.map((p, i) => (
                <p key={i} className="text-[0.98rem] leading-relaxed text-ivory-deep/80">
                  <LinkedText text={p} linkClassName="text-gold-light underline underline-offset-2 hover:text-gold" />
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex items-center rounded-sm bg-gold-light px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-navy-deep hover:bg-gold-pale transition-colors"
              >
                {it ? "Richiedi un Preventivo per il Confine" : "Get a Cross-Border Transfer Quote"}
              </a>
              <Link
                href={localePath(locale, "/contact")}
                className="inline-flex items-center rounded-sm border border-ivory/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ivory hover:border-gold transition-colors"
              >
                {it ? "Contatta il Nostro Team" : "Contact Our Team"}
              </Link>
            </div>
          </div>
          <div id="quote">
            <QuoteForm
              compact
              locale={locale}
              requirementsPlaceholder={
                it
                  ? "Valico di frontiera, bagagli, dettagli del volo o altre richieste"
                  : "Border crossing, luggage, flight details or other requirements"
              }
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              eyebrow={it ? "Transfer Internazionali Privati" : "Private International Transfers"}
              title={it ? "Un Solo Autista, Confine Compreso" : "One Chauffeur, Border Included"}
            />
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
                  <Icon name="check" className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  <LinkedText text={b} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow={it ? "A Chi è Rivolto" : "Who It's For"}
              title={it ? "Pensato per Chi Viaggia Oltre Confine" : "Built for Cross-Border Travel"}
            />
            <ul className="mt-6 space-y-3">
              {whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={it ? "Paesi che Serviamo" : "Countries We Serve"}
            title={it ? "Confini Italiani Raggiungibili su Strada" : "Italy's Neighbouring Countries by Road"}
            subtitle={
              it
                ? "Ogni scheda mostra alcune delle tratte più richieste. Non trovi il tuo percorso? Richiedi comunque un preventivo: valutiamo ogni richiesta caso per caso."
                : "Each card shows some of our most requested routes. Don't see your exact journey? Request a quote anyway — we review every route on a case-by-case basis."
            }
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {countryGroups.map((group) => {
              const groupRoutes = routes.filter((r) => r.international?.hubGroup === group.slug);
              return (
                <div key={group.slug} className="rounded-md border border-line bg-ivory-deep/20 p-6">
                  <h3 className="font-display text-xl text-navy">{it ? group.name.it : group.name.en}</h3>
                  <p className="mt-2 text-sm text-stone leading-relaxed">{it ? group.blurb.it : group.blurb.en}</p>
                  <ul className="mt-5 space-y-2.5">
                    {groupRoutes.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/routes/${r.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light hover:underline"
                        >
                          {r.from} <span aria-hidden>→</span> {r.to}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks
        locale={locale}
        eyebrow={it ? "Come Funziona" : "How It Works"}
        title={it ? "Come Funzionano i Trasferimenti Internazionali" : "How International Border Crossing Transfers Work"}
        steps={processSteps}
      />

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe max-w-3xl">
          <SectionHeading
            eyebrow={it ? "Documenti e Confine" : "Border & Documentation Information"}
            title={it ? "Attraversare un Confine Internazionale in Auto Privata" : "Crossing an International Border by Private Car"}
            align="center"
          />
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-stone">
            <p>
              {it
                ? "Attraversare un confine internazionale è diverso da un transfer nazionale in Italia. Le autorità di frontiera possono effettuare controlli sui documenti e procedure doganali, ed eventuali attese al confine possono influire sui tempi di viaggio."
                : "Crossing an international border is different from a normal domestic transfer within Italy. Border authorities may carry out document checks and customs procedures, and any waiting time caused by border authorities can affect your journey time."}
            </p>
            <p>
              {it
                ? "I requisiti relativi a documenti di viaggio e visti dipendono dalla tua nazionalità e dalla destinazione. Ti invitiamo a verificare i requisiti più aggiornati con le autorità ufficiali competenti prima del viaggio e a portare con te tutti i documenti necessari."
                : "Travel documentation requirements depend on your nationality and destination. Please check the latest requirements with the relevant official authorities before your journey, and carry all required documents with you."}
            </p>
            <p>
              {it
                ? "Il nostro autista si occupa del trasporto privato per l'intero viaggio; non offriamo servizi di sdoganamento o assistenza per l'immigrazione."
                : "Our chauffeur handles private transportation for the full journey; we do not provide customs clearance or immigration assistance."}
            </p>
          </div>
        </div>
      </section>

      <FleetSection
        locale={locale}
        eyebrow={it ? "Veicoli per Viaggi Internazionali" : "Vehicles for International Journeys"}
        title={it ? "Il Veicolo Giusto per la Tua Tratta" : "The Right Vehicle for Your Route"}
        subtitle={
          it
            ? "Per i viaggi internazionali, più lunghi rispetto a un transfer cittadino, contano soprattutto capacità bagagli e comfort. Indica passeggeri e bagagli quando richiedi il preventivo e ti consiglieremo il veicolo più adatto tra le categorie qui sotto."
            : "International journeys tend to run longer than a city transfer, so luggage capacity and comfort matter most. Tell us your passenger and luggage count when requesting a quote and we'll recommend the right category below."
        }
      />

      <FaqSection
        items={faqs}
        title={it ? "Trasferimenti Internazionali — Domande Frequenti" : "International Transfers — Frequently Asked Questions"}
      />

      <FinalCTA locale={locale} />
    </>
  );
}
