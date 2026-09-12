// Italian translations for the per-route detail fields (metaTitle,
// metaDescription, summary, intro, highlights) defined in lib/data/routes.ts.
// Keyed by the same route slugs as the English data file, so lookups stay a
// simple slug match regardless of locale. City names, durations and other
// cross-referenced fields are handled separately in routes_it (data.it.ts)
// and are intentionally not repeated here.

export const routeDetails_it: Record<
  string,
  {
    metaTitle: string;
    metaDescription: string;
    summary: string;
    intro: string[];
    highlights: string[];
  }
> = {
  "rome-to-florence": {
    metaTitle: "Transfer da Roma a Firenze",
    metaDescription: "Prenota un transfer privato con autista da Roma a Firenze. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Roma e Firenze.",
    intro: [
      "Il tragitto da Roma a Firenze è uno dei transfer privati più richiesti in Italia, e collega due delle città più visitate del paese senza gli orari fissi del treno.",
      "Un transfer privato è particolarmente utile con i bagagli, per un volo in coincidenza al mattino presto, o quando desideri spezzare il viaggio con una sosta a Orvieto o nella campagna toscana lungo il percorso.",
    ],
    highlights: ["Percorso diretto in autostrada con soste panoramiche facoltative", "Servizio porta a porta, senza cambi in stazione", "Orari di partenza flessibili"],
  },
  "florence-to-rome": {
    metaTitle: "Transfer da Firenze a Roma",
    metaDescription: "Prenota un transfer privato con autista da Firenze a Roma. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Firenze e Roma.",
    intro: [
      "Viaggiare da Firenze a Roma con un autista privato è un'alternativa confortevole al treno, soprattutto se sei diretto all'aeroporto di Fiumicino o a Civitavecchia per l'imbarco su una crociera.",
      "Il tuo autista organizza il viaggio in base al tuo volo o all'orario di imbarco, calcolando un margine di sicurezza per il traffico, così non devi preoccuparti di rispettare un orario fisso del treno.",
    ],
    highlights: ["Percorso diretto in autostrada con soste panoramiche facoltative", "Ideale per proseguire verso un volo o una crociera", "Orari di partenza flessibili"],
  },
  "florence-to-venice": {
    metaTitle: "Transfer da Firenze a Venezia",
    metaDescription: "Prenota un transfer privato con autista da Firenze a Venezia. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Firenze e Venezia.",
    intro: [
      "Il transfer da Firenze a Venezia attraversa alcuni dei paesaggi più vari d'Italia, e un autista privato ti permette facilmente di interrompere il viaggio per una sosta caffè o una deviazione attraverso Bologna.",
      "Questo percorso è molto richiesto da chi combina Toscana e Venezia in un unico itinerario e preferisce evitare i cambi di treno con i bagagli.",
    ],
    highlights: ["Percorso diretto attraverso il nord della Toscana e il Veneto", "Un'alternativa confortevole al treno quando viaggi con i bagagli", "Sosta facoltativa a Bologna"],
  },
  "venice-to-florence": {
    metaTitle: "Transfer da Venezia a Firenze",
    metaDescription: "Prenota un transfer privato con autista da Venezia a Firenze. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Venezia e Firenze.",
    intro: [
      "Dirigendoti verso sud da Venezia a Firenze, un transfer privato ti evita di dover prima raggiungere la stazione in terraferma per prendere il treno: il tuo autista ti viene a prendere direttamente in hotel.",
      "È una scelta molto apprezzata da chi, dopo aver visitato Venezia, prosegue per esplorare la Toscana.",
    ],
    highlights: ["Percorso diretto attraverso il Veneto e il nord della Toscana", "Comodo per le partenze mattutine", "Sosta facoltativa a Bologna"],
  },
  "rome-to-naples": {
    metaTitle: "Transfer da Roma a Napoli",
    metaDescription: "Prenota un transfer privato con autista da Roma a Napoli. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Roma e Napoli.",
    intro: [
      "Il transfer da Roma a Napoli è una soluzione pratica per chi prosegue verso sud, in direzione di Pompei, Sorrento o la Costiera Amalfitana, evitando il cambio in stazione nel centro di Napoli con i bagagli.",
      "Possiamo anche organizzare il tragitto con una sosta a Pompei o Ercolano lungo il percorso, trasformando il transfer in una giornata privata all'insegna della scoperta.",
    ],
    highlights: ["Collegamento diretto in autostrada", "Ideale per proseguire verso Pompei o la Costiera Amalfitana", "Capacità bagagli flessibile"],
  },
  "naples-to-rome": {
    metaTitle: "Transfer da Napoli a Roma",
    metaDescription: "Prenota un transfer privato con autista da Napoli a Roma. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Napoli e Roma.",
    intro: [
      "Tornare a nord da Napoli a Roma con un autista privato è un modo comodo per raggiungere l'aeroporto di Fiumicino o il centro di Roma senza doverti orientare nella stazione di Napoli con i bagagli.",
      "Questo percorso può includere anche una sosta a Pompei per chi desidera visitare il sito lungo il tragitto.",
    ],
    highlights: ["Collegamento diretto in autostrada", "Comodo per le coincidenze con i voli da Fiumicino", "Sosta facoltativa a Pompei"],
  },
  "rome-to-sorrento": {
    metaTitle: "Transfer da Roma a Sorrento",
    metaDescription: "Prenota un transfer privato con autista da Roma a Sorrento. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Roma e Sorrento.",
    intro: [
      "Sorrento non è servita direttamente dai treni ad alta velocità, il che rende un transfer privato da Roma un'opzione decisamente più comoda rispetto a un viaggio in treno con più cambi e coincidenze locali.",
      "Includiamo regolarmente una sosta a Pompei per chi desidera abbinare il transfer a una visita guidata o autonoma agli scavi.",
    ],
    highlights: ["Transfer diretto, senza i numerosi cambi di treno", "Sosta facoltativa a Pompei lungo il percorso", "Comodo per famiglie e gruppi"],
  },
  "sorrento-to-rome": {
    metaTitle: "Transfer da Sorrento a Roma",
    metaDescription: "Prenota un transfer privato con autista da Sorrento a Roma. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Sorrento e Roma.",
    intro: [
      "Lasciando Sorrento per Roma, un autista privato ti evita di dover prima raggiungere Napoli con un treno locale per poi prendere una coincidenza verso nord: ti viene a prendere direttamente in hotel.",
      "Il transfer viene organizzato in base al tuo volo o all'orario di check-in in hotel, con la possibilità di una sosta facoltativa a Pompei lungo il percorso.",
    ],
    highlights: ["Transfer diretto verso il centro di Roma o l'aeroporto di Fiumicino", "Sosta facoltativa a Pompei lungo il percorso", "Comodo per famiglie e gruppi"],
  },
  "rome-to-amalfi-coast": {
    metaTitle: "Transfer Roma - Costiera Amalfitana",
    metaDescription: "Prenota un transfer privato con autista da Roma alla Costiera Amalfitana. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Roma e la Costiera Amalfitana.",
    intro: [
      "Il tragitto da Roma alla Costiera Amalfitana si conclude su alcune delle strade più strette e panoramiche d'Italia, dove un autista con esperienza locale fa davvero la differenza in termini di comfort e sicurezza.",
      "Ti accompagniamo direttamente al tuo hotel a Positano, Amalfi o Ravello, con la possibilità di fare una sosta a Pompei lungo il percorso.",
    ],
    highlights: ["Autisti esperti sulle strade strette della costiera", "Servizio diretto verso Positano, Amalfi o Ravello", "Sosta facoltativa a Pompei lungo il percorso"],
  },
  "florence-to-pisa": {
    metaTitle: "Transfer da Firenze a Pisa",
    metaDescription: "Prenota un transfer privato con autista da Firenze a Pisa. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Firenze e Pisa.",
    intro: [
      "Il transfer da Firenze a Pisa viene prenotato più spesso in vista di un volo dall'aeroporto di Pisa, e un autista privato ti garantisce di arrivare con un comodo margine di anticipo, senza dover dipendere dagli orari dei treni.",
      "Molti viaggiatori sfruttano questo percorso anche per fare una sosta alla Torre Pendente e a Piazza dei Miracoli lungo la strada verso l'aeroporto.",
    ],
    highlights: ["Transfer breve e diretto, ideale per le coincidenze aeree", "Comodo per le partenze dall'aeroporto di Pisa", "Sosta facoltativa alla Torre Pendente"],
  },
  "pisa-to-florence": {
    metaTitle: "Transfer da Pisa a Firenze",
    metaDescription: "Prenota un transfer privato con autista da Pisa a Firenze. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Pisa e Firenze.",
    intro: [
      "Se arrivi all'aeroporto di Pisa e sei diretto a Firenze, un transfer privato è il modo più rapido e semplice per iniziare un itinerario in Toscana senza doverti orientare nelle stazioni ferroviarie appena sceso dall'aereo.",
      "Il tuo autista può anche passare dalla Torre Pendente per una breve sosta, se i tempi lo consentono.",
    ],
    highlights: ["Transfer breve e diretto dall'aeroporto", "Ideale come primo tratto di un itinerario in Toscana", "Assistenza bagagli inclusa"],
  },
  "milan-to-lake-como": {
    metaTitle: "Transfer da Milano al Lago di Como",
    metaDescription: "Prenota un transfer privato con autista da Milano al Lago di Como. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Milano e il Lago di Como.",
    intro: [
      "Il Lago di Como è una meta facilmente raggiungibile da Milano per una gita privata in giornata, e questo percorso è disponibile sia come semplice transfer punto a punto, sia come itinerario turistico di un'intera giornata tra i paesi che si affacciano sul lago.",
      "Possiamo inserire soste a Bellagio, Varenna e Como, a seconda di quanto tempo desideri dedicare a ciascuna località.",
    ],
    highlights: ["Transfer diretto o opzione tour di un'intera giornata", "Accesso a Bellagio, Como e Varenna", "Orario di rientro flessibile"],
  },
  "milan-to-venice": {
    metaTitle: "Transfer da Milano a Venezia",
    metaDescription: "Prenota un transfer privato con autista da Milano a Venezia. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Milano e Venezia.",
    intro: [
      "Il transfer da Milano a Venezia attraversa direttamente la Lombardia e il Veneto, ed è una scelta molto apprezzata da chi si sposta tra la capitale economica d'Italia e la sua città sui canali più iconica.",
      "Il viaggio può includere una sosta a Verona per chi desidera visitare la città lungo il tragitto.",
    ],
    highlights: ["Collegamento diretto in autostrada attraverso il nord Italia", "Un'alternativa confortevole al treno quando viaggi con i bagagli", "Sosta facoltativa a Verona"],
  },
  "venice-to-milan": {
    metaTitle: "Transfer da Venezia a Milano",
    metaDescription: "Prenota un transfer privato con autista da Venezia a Milano. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Venezia e Milano.",
    intro: [
      "Dirigendoti verso ovest da Venezia a Milano, il transfer privato viene organizzato in base al tuo volo in partenza da Malpensa o Linate, con la flessibilità di fare una sosta a Verona lungo il percorso.",
      "Questo percorso è molto richiesto dai viaggiatori d'affari che si spostano tra i due maggiori poli commerciali d'Italia.",
    ],
    highlights: ["Collegamento diretto in autostrada", "Ideale per le coincidenze con i voli da Malpensa o Linate", "Sosta facoltativa a Verona"],
  },
  "florence-to-siena": {
    metaTitle: "Transfer da Firenze a Siena",
    metaDescription: "Prenota un transfer privato con autista da Firenze a Siena. Viaggio diretto e confortevole, porta a porta, senza cambi di veicolo.",
    summary: "Transfer privato porta a porta con autista tra Firenze e Siena.",
    intro: [
      "Il tragitto da Firenze a Siena attraversa direttamente il Chianti, e molti viaggiatori trasformano questo breve transfer in un itinerario di mezza giornata o di un'intera giornata nella campagna, con soste tra i vigneti.",
      "Questo percorso funziona altrettanto bene come semplice transfer punto a punto per chi ha poco tempo a disposizione.",
    ],
    highlights: ["Breve transfer attraverso la campagna del Chianti", "Facilmente trasformabile in una gita di un giorno nella zona vinicola", "Partenza e rientro flessibili"],
  },
};
