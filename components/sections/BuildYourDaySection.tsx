import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { localePath, type Locale } from "@/lib/i18n/locales";

const steps = [
  { en: "Choose a region", it: "Scegli una regione", enDesc: "Tuscany, the Amalfi Coast, Lake Como or another below.", itDesc: "Toscana, Costiera Amalfitana, Lago di Como o un'altra qui sotto." },
  { en: "Choose your stops", it: "Scegli le tappe", enDesc: "As few or as many as the day allows.", itDesc: "Poche o tante, in base al tempo a disposizione." },
  { en: "Choose a pace", it: "Scegli il ritmo", enDesc: "A single day or a route across several.", itDesc: "Una sola giornata o un percorso su più giorni." },
  { en: "Choose your vehicle", it: "Scegli il veicolo", enDesc: "From a sedan for two to a van for the group.", itDesc: "Da una berlina per due persone a un van per il gruppo." },
  { en: "Tell us your pickup", it: "Indica il ritiro", enDesc: "Hotel, villa or airport.", itDesc: "Hotel, villa o aeroporto." },
];

export default function BuildYourDaySection({ locale = "en" }: { locale?: Locale }) {
  const it = locale === "it";

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-luxe max-w-3xl">
        <SectionHeading
          eyebrow={it ? "Progetta il Tuo Itinerario" : "Design Your Itinerary"}
          title={it ? "Costruisci la Tua Giornata in Italia" : "Build Your Own Italy Day"}
          subtitle={
            it
              ? "Ogni tour privato parte allo stesso modo, qualunque regione tu scelga."
              : "Every private tour starts the same simple way, whichever region you choose."
          }
        />
        <ol className="mt-8 space-y-4">
          {steps.map((s, i) => (
            <li key={s.en} className="flex items-start gap-4 rounded-md border border-line bg-ivory-deep/20 p-5">
              <span className="font-display text-2xl text-gold shrink-0 w-8">{i + 1}</span>
              <div>
                <p className="font-display text-base text-navy">{it ? s.it : s.en}</p>
                <p className="mt-1 text-sm text-stone">{it ? s.itDesc : s.enDesc}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center">
          <Link
            href={localePath(locale, "/contact")}
            className="inline-flex items-center justify-center rounded-sm bg-navy px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ivory hover:bg-gold-light hover:text-navy-deep transition-colors"
          >
            {it ? "Progetta il Mio Tour Privato" : "Design My Private Tour"}
          </Link>
        </div>
      </div>
    </section>
  );
}
