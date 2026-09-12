import { cruisePorts } from "@/lib/data/ports";
import SectionHeading from "@/components/ui/SectionHeading";
import LinkedText from "@/components/ui/LinkedText";
import { ports_it } from "@/lib/i18n/data.it";
import { type Locale } from "@/lib/i18n/locales";

export default function CruisePortsList({ locale = "en" }: { locale?: Locale }) {
  const it = locale === "it";

  return (
    <section className="py-16 md:py-24 bg-ivory-deep/40">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={it ? "Porti che Serviamo" : "Ports We Serve"}
          title={it ? "Transfer Privati nei Principali Porti Crociera Italiani" : "Private Transfers at Italy's Major Cruise Ports"}
          subtitle={it ? "Ogni porto collega a una parte diversa d'Italia — ecco cosa aspettarti in ciascuno." : "Each port connects to a different part of Italy — here's what to expect at each."}
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cruisePorts.map((p) => {
            const pIt = ports_it[p.slug];
            return (
              <div key={p.slug} className="rounded-md border border-line bg-white p-6">
                <p className="eyebrow mb-2 text-[0.65rem]">{it && pIt ? pIt.region : p.region}</p>
                <h3 className="font-display text-lg text-navy">{it && pIt ? pIt.name : p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {it && pIt ? pIt.description : <LinkedText text={p.description} />}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
