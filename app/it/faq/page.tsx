import type { Metadata } from "next";
import { generalFaqs_it } from "@/lib/i18n/data.it";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Domande frequenti sulla prenotazione di un autista privato in Italia, inclusi prezzi, transfer aeroportuali, prenotazioni di più giorni e tour privati.",
  alternates: { canonical: "/it/faq", languages: { en: "/faq", it: "/it/faq" } },
};

export default function FaqPageIt() {
  return (
    <>
      <Breadcrumbs locale="it" items={[{ label: "FAQ" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">FAQ</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Domande Frequenti
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Risposte alle domande più comuni sulla prenotazione di un autista privato in Italia.
            Per qualsiasi altra domanda, il nostro team è felice di aiutarti direttamente.
          </p>
        </div>
      </section>

      <FaqSection items={generalFaqs_it} eyebrow="" title="" />
      <FinalCTA locale="it" />
    </>
  );
}
