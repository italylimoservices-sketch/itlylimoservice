import type { Metadata } from "next";
import Link from "next/link";
import { fleet } from "@/lib/data/fleet";
import { fleet_it } from "@/lib/i18n/data.it";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageBlock from "@/components/ui/ImageBlock";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

const faqs = [
  {
    question: "Come faccio a sapere quale categoria di veicolo fa per me?",
    answer:
      "Il numero di passeggeri e bagagli sono i fattori principali. Una [Executive Sedan](/it/fleet/executive-sedan) o [Luxury Sedan](/it/fleet/luxury-sedan) è adatta a 1-3 persone, un [Luxury SUV](/it/fleet/luxury-suv) fino a 5, e un [Executive Van](/it/fleet/executive-van) o [Luxury Van](/it/fleet/luxury-van) fino a 7. Indica i tuoi numeri al momento della richiesta di preventivo e ti consiglieremo una categoria.",
  },
  {
    question: "Qual è la differenza tra la versione Executive e Luxury dello stesso tipo di veicolo?",
    answer:
      "La capacità di passeggeri e bagagli è identica tra la versione Executive e Luxury di ogni categoria: la differenza è nella finitura degli interni e nella presentazione. Scegli Luxury quando l'aspetto conta di più, ad esempio per un'occasione speciale o un viaggio di lavoro con clienti.",
  },
  {
    question: "Posso richiedere un modello di veicolo specifico?",
    answer:
      "Non garantiamo una marca o un modello specifico per nessuna categoria: le categorie descrivono la capacità e uno standard generale di presentazione, con il veicolo esatto assegnato in base alla disponibilità al momento del tuo viaggio.",
  },
  {
    question: "Cosa succede se il mio gruppo è più numeroso di quanto un singolo veicolo possa ospitare?",
    answer:
      "Sette passeggeri, su Executive Van o Luxury Van, è il nostro veicolo singolo più capiente. Per gruppi più numerosi coordiniamo più veicoli che viaggiano insieme — comunicaci il numero totale di passeggeri al momento della richiesta di preventivo.",
  },
];

export const metadata: Metadata = {
  title: "La Nostra Flotta",
  description:
    "Scopri la nostra flotta con autista in tutta Italia — Berlina Executive, Berlina di Lusso, SUV di Lusso, Van Executive e Van di Lusso.",
  alternates: { canonical: "/it/fleet", languages: { en: "/fleet", it: "/it/fleet", "x-default": "/fleet" } },
};

export default function FleetPageIt() {
  return (
    <>
      <Breadcrumbs locale="it" items={[{ label: "Flotta" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">La Nostra Flotta</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Un Veicolo per Ogni Viaggio
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Ogni veicolo della nostra flotta è selezionato e mantenuto per garantire comfort,
            sicurezza e uno standard di presentazione costante. Le categorie qui sotto riflettono
            la capacità di passeggeri e bagagli; il modello specifico del veicolo viene confermato
            al momento della prenotazione in base alla disponibilità.
          </p>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            La capacità è la differenza principale tra le categorie: una Executive Sedan o Luxury
            Sedan ospita comodamente fino a 3 persone con 2 valigie, un Luxury SUV estende questo
            numero a 5 passeggeri e 4 valigie, e un Executive Van o Luxury Van ospita fino a 7
            persone con 6 valigie. La versione Luxury di ogni tipo aggiunge una finitura degli
            interni più raffinata, mantenendo la stessa capacità della sua controparte Executive.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((f, i) => {
            const it = fleet_it[f.slug];
            return (
              <Link
                key={f.slug}
                href={`/it/fleet/${f.slug}`}
                className="group rounded-md border border-line bg-white overflow-hidden block hover:border-gold/50 transition-colors"
              >
                <ImageBlock
                  label={it?.name ?? f.name}
                  variant={i % 2 === 0 ? "navy" : "gold"}
                  aspect="aspect-[16/10]"
                  className="group-hover:opacity-90 transition-opacity"
                  src={f.image}
                />
                <div className="p-6">
                  <h2 className="font-display text-xl text-navy">{it?.name ?? f.name}</h2>
                  <p className="mt-1 text-sm text-gold font-medium">
                    {it?.passengers ?? f.passengers} · {it?.luggage ?? f.luggage}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{it?.description ?? f.description}</p>
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wide text-stone mb-2">Servizi Inclusi</p>
                    <ul className="space-y-1.5">
                      {(it?.amenities ?? f.amenities).map((a) => (
                        <li key={a} className="text-sm text-ink-soft flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-xs text-stone italic">Ideale per: {it?.idealFor ?? f.idealFor}</p>
                  <p className="mt-4 text-sm font-semibold text-gold group-hover:text-gold-light">Scopri di più →</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory-deep/40">
        <div className="container-luxe max-w-2xl">
          <SectionHeading eyebrow="Nota sulla Flotta" title="Veicoli Confermati alla Prenotazione" />
          <p className="mt-4 text-sm leading-relaxed text-stone">
            Non garantiamo una marca o un modello specifico per nessuna categoria di prenotazione:
            le categorie di veicoli descrivono la capacità di passeggeri, la capacità bagagli e lo
            standard generale di presentazione. I veicoli esatti vengono assegnati in base alla
            disponibilità al momento del tuo viaggio.
          </p>
        </div>
      </section>

      <FaqSection items={faqs} title="Flotta — Domande Frequenti" />
      <FinalCTA locale="it" />
    </>
  );
}
