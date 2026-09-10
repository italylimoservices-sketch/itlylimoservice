import Link from "next/link";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { localePath, type Locale } from "@/lib/i18n/locales";

const items = [
  { title: "Business Meetings", desc: "Punctual transport between meetings across a city or region." },
  { title: "Executive Travel", desc: "Discreet, comfortable transport for individual executives." },
  { title: "Airport Transfers", desc: "Meet & greet arrivals and departures for business travellers." },
  { title: "Corporate Events", desc: "Coordinated transport for company events and gatherings." },
  { title: "Roadshows", desc: "Multi-city, multi-day itineraries for investor and sales roadshows." },
  { title: "Conferences", desc: "Group transportation for delegations attending conferences." },
  { title: "Multi-Day Business Travel", desc: "A dedicated chauffeur across an extended business trip." },
];

const items_it = [
  { title: "Riunioni di Lavoro", desc: "Trasporto puntuale tra riunioni in città o in tutta la regione." },
  { title: "Viaggi Executive", desc: "Trasporto discreto e confortevole per singoli dirigenti." },
  { title: "Transfer Aeroportuali", desc: "Accoglienza personalizzata in arrivo e partenza per chi viaggia per lavoro." },
  { title: "Eventi Aziendali", desc: "Trasporto coordinato per eventi e incontri aziendali." },
  { title: "Roadshow", desc: "Itinerari multi-città e di più giorni per roadshow di investitori e vendite." },
  { title: "Conferenze", desc: "Trasporto di gruppo per delegazioni che partecipano a conferenze." },
  { title: "Viaggi di Lavoro di Più Giorni", desc: "Un autista dedicato per tutta la durata di un viaggio di lavoro esteso." },
];

export default function CorporateUseCases({ locale = "en" }: { locale?: Locale }) {
  const it = locale === "it";
  const list = it ? items_it : items;

  return (
    <section className="py-16 md:py-24 bg-ivory-deep/40">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={it ? "Casi d'Uso Aziendali" : "Corporate Use Cases"}
          title={it ? "Perché i Nostri Clienti Aziendali Si Affidano a Noi" : "Where Our Corporate Clients Rely On Us"}
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-md border border-line bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-gold shrink-0">
                <Icon name="check" className="h-4 w-4" />
              </div>
              <div>
                <p className="font-display text-base text-navy">{item.title}</p>
                <p className="mt-1 text-sm text-stone leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-gold/30 bg-gold-pale/20 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg text-navy">
              {it ? "Vuoi attivare un account aziendale?" : "Setting up a corporate account?"}
            </p>
            <p className="mt-1 text-sm text-stone">
              {it
                ? "Contattaci e il nostro team ti ricontatterà per la fatturazione e le esigenze di viaggio ricorrenti."
                : "Get in touch and our team will follow up about billing and regular travel needs."}
            </p>
          </div>
          <Link
            href={localePath(locale, "/contact")}
            className="inline-flex shrink-0 items-center justify-center rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-ivory hover:bg-gold-light hover:text-navy-deep transition-colors"
          >
            {it ? "Contatta il Team Vendite" : "Contact Corporate Sales"}
          </Link>
        </div>
      </div>
    </section>
  );
}
