import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Termini e Condizioni",
  description: `Termini e condizioni per la prenotazione di servizi con autista privato con ${siteConfig.name}.`,
  alternates: { canonical: "/it/terms-conditions", languages: { en: "/terms-conditions", it: "/it/terms-conditions" } },
};

export default function TermsPageIt() {
  return (
    <>
      <Breadcrumbs locale="it" items={[{ label: "Termini e Condizioni" }]} />
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-4">Legale</p>
          <h1 className="font-display text-4xl text-navy">Termini e Condizioni</h1>
          <p className="mt-4 text-sm text-stone">
            Ultimo aggiornamento: [Data da confermare]. Questo è un modello e deve essere rivisto
            da un professionista qualificato prima della pubblicazione per assicurarsi che
            rifletta le tue effettive condizioni di prenotazione, cancellazione e responsabilità.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
            <div>
              <h2 className="font-display text-xl text-navy mb-2">1. Prenotazioni e Preventivi</h2>
              <p>
                I preventivi forniti tramite questo sito sono stime in attesa di conferma. Una
                prenotazione è confermata una volta ricevuta la conferma scritta dal nostro team.
                [Confermare il processo esatto di conferma e pagamento prima del lancio.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">2. Prezzi</h2>
              <p>
                I prezzi sono concordati in anticipo e sono fissi per il viaggio descritto al
                momento della prenotazione. Costi aggiuntivi possono essere applicati per
                modifiche come tempi di attesa prolungati, soste aggiuntive o cambi di percorso
                richiesti dopo la conferma. [Confermare le specifiche politiche di supplemento
                prima del lancio.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">3. Cancellazioni e Modifiche</h2>
              <p>
                [I termini di cancellazione, l&apos;idoneità al rimborso ed eventuali costi applicabili
                devono essere confermati e pubblicati qui prima del lancio.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">4. Ritardi di Volo e Tempi di Attesa</h2>
              <p>
                Per i transfer aeroportuali, monitoriamo il tuo volo e adattiamo gli orari di
                ritiro per ritardi ragionevoli. [Confermare il periodo di attesa gratuito specifico
                ed eventuali costi per ritardi prolungati prima del lancio.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">5. Comportamento e Sicurezza dei Passeggeri</h2>
              <p>
                Ai passeggeri si richiede di comportarsi con rispetto verso gli autisti e di
                seguire ragionevoli istruzioni di sicurezza, incluso l&apos;uso delle cinture di
                sicurezza. Ci riserviamo il diritto di interrompere un viaggio in anticipo in caso
                di comportamento non sicuro o offensivo.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">6. Bagagli ed Effetti Personali</h2>
              <p>
                Ti preghiamo di assicurarti che il volume dei bagagli corrisponda alla categoria
                di veicolo prenotata. Non siamo responsabili per oggetti lasciati nel veicolo dopo
                la consegna. [Confermare i termini di responsabilità per oggetti smarriti o
                danneggiati prima del lancio.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">7. Responsabilità</h2>
              <p>
                [Le limitazioni di responsabilità, i dettagli della copertura assicurativa e la
                giurisdizione applicabile devono essere redatti con un professionista legale
                qualificato e inseriti qui prima del lancio.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">8. Legge Applicabile</h2>
              <p>
                Questi termini sono disciplinati dalle leggi italiane. [Confermare la giurisdizione
                specifica e il processo di risoluzione delle controversie prima del lancio.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-navy mb-2">9. Contatti</h2>
              <p>
                {siteConfig.name}
                <br />
                {siteConfig.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
