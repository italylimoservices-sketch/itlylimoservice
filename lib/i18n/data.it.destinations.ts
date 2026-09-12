// Italian translations for the destination detail-page fields (heading,
// meta tags, summary, intro paragraphs, highlights and popular pickups).
// Keyed by the same slugs as lib/data/destinations.ts. Name/region fields
// are translated separately in destinationNames_it (lib/i18n/data.it.ts).

export const destinationDetails_it: Record<
  string,
  {
    heading: string;
    metaTitle: string;
    metaDescription: string;
    summary: string;
    intro: string[];
    highlights: string[];
    popularPickups: string[];
  }
> = {
  rome: {
    heading: "Servizio di Autista Privato a Roma",
    metaTitle: "Servizio di Autista Privato a Roma",
    metaDescription:
      "Prenota un autista privato a Roma per transfer aeroportuali, tour della città e gite in giornata, con autisti che parlano inglese e prezzi trasparenti.",
    summary:
      "Trasporto privato con autista nella capitale d'Italia, dai transfer aeroportuali alle giornate intere di visite turistiche.",
    intro: [
      "Roma premia chi riesce a muoversi al suo interno in modo efficiente, e un autista privato è il modo più comodo per farlo. Le strette vie del centro storico, le zone a traffico limitato e il traffico imprevedibile rendono un autista locale esperto davvero utile, non un semplice lusso.",
      "Che tu stia arrivando da Fiumicino, partecipando a riunioni di lavoro vicino al quartiere EUR o esplorando Colosseo, Vaticano e Trastevere ai tuoi ritmi, i nostri autisti si occupano della guida e della logistica, così puoi concentrarti sulla città.",
    ],
    highlights: [
      "Accoglienza diretta in aeroporto da Fiumicino e Ciampino",
      "Conoscenza approfondita delle Zone a Traffico Limitato (ZTL) di Roma",
      "Itinerari turistici flessibili di mezza giornata o giornata intera",
      "Attesa comoda durante visite ai musei e riunioni",
    ],
    popularPickups: [
      "Aeroporto di Roma Fiumicino (FCO)",
      "Aeroporto di Roma Ciampino (CIA)",
      "Hotel della zona di Termini",
      "Città del Vaticano / quartiere Prati",
      "Collegamenti per crociere da Civitavecchia",
    ],
  },
  milan: {
    heading: "Servizio di Autista Privato a Milano",
    metaTitle: "Servizio di Autista Privato a Milano",
    metaDescription:
      "Servizio di autista professionale a Milano per viaggi di lavoro, fashion week, transfer aeroportuali e gite private al Lago di Como.",
    summary:
      "Trasporto con autista di livello executive per i quartieri finanziari, della moda e degli affari di Milano.",
    intro: [
      "Milano si muove al ritmo del business, e il nostro servizio di autista è pensato per starle al passo. Puntualità, discrezione professionale e veicoli adatti ai viaggi corporate lo rendono una scelta naturale per dirigenti, delegazioni e professionisti del settore moda.",
      "Oltre alla città, Milano è anche la base più comoda per gite private in giornata al Lago di Como, al Lago Maggiore e nel resto della Lombardia, tutte raggiungibili con un tragitto agevole.",
    ],
    highlights: [
      "Transfer da Malpensa, Linate e Bergamo",
      "Fatturazione con conto aziendale disponibile per viaggi di lavoro ricorrenti",
      "Autisti privati per fiere ed eventi della fashion week",
      "Gite in giornata al Lago di Como e al Lago Maggiore",
    ],
    popularPickups: [
      "Aeroporto di Milano Malpensa (MXP)",
      "Aeroporto di Milano Linate (LIN)",
      "Zona di Milano Centrale",
      "Quartiere degli affari di Porta Nuova",
      "Polo fieristico di Fiera Milano",
    ],
  },
  florence: {
    heading: "Servizio di Autista Privato a Firenze",
    metaTitle: "Servizio di Autista Privato a Firenze",
    metaDescription:
      "Autista privato a Firenze per transfer aeroportuali, gite in Toscana e spostamenti in città, con autisti che parlano inglese ed esperti del territorio.",
    summary: "Trasporto privato a Firenze e nella campagna toscana circostante.",
    intro: [
      "Firenze si vive al meglio senza lo stress di parcheggiare nel centro storico o districarsi tra le zone a traffico limitato. Un autista privato ti permette di muoverti comodamente tra Uffizi, Ponte Vecchio e Piazzale Michelangelo, per poi proseguire direttamente verso le colline toscane senza cambiare veicolo.",
      "Firenze è anche la porta d'accesso al Chianti, a Siena e all'intera Toscana, il che la rende una base molto richiesta per itinerari privati in campagna e nelle zone vinicole.",
    ],
    highlights: [
      "Transfer dagli aeroporti di Firenze e Pisa",
      "Conoscenza delle zone a traffico limitato di Firenze",
      "Collegamento diretto con i tour enologici in Toscana",
      "Gite private a Siena, Pisa e Cinque Terre",
    ],
    popularPickups: [
      "Aeroporto di Firenze (FLR)",
      "Zona della stazione di Santa Maria Novella",
      "Hotel del centro storico",
      "Piazzale Michelangelo",
    ],
  },
  venice: {
    heading: "Servizio di Autista Privato a Venezia",
    metaTitle: "Servizio di Autista Privato a Venezia",
    metaDescription:
      "Transfer privati con autista da e per Venezia, che collegano l'aeroporto Marco Polo, la terraferma veneta e le destinazioni dell'Italia settentrionale.",
    summary:
      "Transfer privati su strada che collegano la porta d'accesso di Venezia sulla terraferma con l'aeroporto e la regione Veneto.",
    intro: [
      "Il centro storico di Venezia è privo di auto, quindi il nostro compito è rendere il più agevole possibile la parte del viaggio su strada, che si tratti di un transfer dall'aeroporto Marco Polo a Piazzale Roma o di una gita privata verso la campagna veneta.",
      "Per chi combina Venezia con Verona, Padova o un itinerario più ampio nel nord Italia, un autista privato elimina la necessità di coordinare treni e taxi tra una tappa e l'altra.",
    ],
    highlights: [
      "Transfer coordinati dall'aeroporto di Venezia Marco Polo",
      "Passaggio senza interruzioni a taxi acqueo o navetta dell'hotel",
      "Gite private verso Verona e la regione Veneto",
      "Assistenza con i bagagli nel passaggio dalla terraferma alla città",
    ],
    popularPickups: [
      "Aeroporto di Venezia Marco Polo (VCE)",
      "Piazzale Roma / collegamento con la terraferma veneziana",
      "Zona della stazione di Mestre",
    ],
  },
  naples: {
    heading: "Servizio di Autista Privato a Napoli",
    metaTitle: "Servizio di Autista Privato a Napoli",
    metaDescription:
      "Servizio di autista privato a Napoli per transfer aeroportuali, gite a Pompei e collegamenti con Sorrento e la Costiera Amalfitana.",
    summary: "Trasporto privato a Napoli e sulle rotte di accesso verso la Costiera Amalfitana.",
    intro: [
      "Napoli è una città vivace e operosa, oltre che il punto di partenza pratico per Costiera Amalfitana, Sorrento e Pompei. Un autista privato è particolarmente prezioso qui, dove le condizioni di guida locali e le tortuose strade costiere richiedono l'esperienza di un autista del posto.",
      "Offriamo transfer diretti dall'aeroporto, accesso privato a Pompei ed Ercolano, oltre a comodi tragitti a lunga percorrenza lungo la costa.",
    ],
    highlights: [
      "Transfer diretti dall'aeroporto di Napoli",
      "Gite private in giornata a Pompei ed Ercolano",
      "Autisti esperti sulle strade tortuose della Costiera Amalfitana",
      "Collegamenti con il porto crociere di Napoli",
    ],
    popularPickups: [
      "Aeroporto di Napoli (NAP)",
      "Zona della Stazione Centrale di Napoli",
      "Porto crociere di Napoli",
    ],
  },
  bologna: {
    heading: "Servizio di Autista Privato a Bologna",
    metaTitle: "Servizio di Autista Privato a Bologna",
    metaDescription:
      "Servizio di autista privato a Bologna per viaggi di lavoro, transfer aeroportuali e collegamenti in tutta l'Emilia-Romagna.",
    summary: "Trasporto privato per viaggi di lavoro e tempo libero a Bologna.",
    intro: [
      "La posizione centrale di Bologna la rende un hub pratico per raggiungere gran parte del nord e centro Italia, e il suo aeroporto è un punto di ingresso comune per fiere ed eventi di lavoro regionali.",
      "I nostri autisti offrono transfer diretti in città oltre a percorsi verso la campagna dell'Emilia-Romagna e le regioni limitrofe.",
    ],
    highlights: [
      "Transfer dall'aeroporto di Bologna",
      "Supporto logistico per fiere e conferenze",
      "Gite private in tutta l'Emilia-Romagna",
    ],
    popularPickups: ["Aeroporto di Bologna (BLQ)", "Zona della stazione di Bologna Centrale", "Quartiere Fiera"],
  },
  turin: {
    heading: "Servizio di Autista Privato a Torino",
    metaTitle: "Servizio di Autista Privato a Torino",
    metaDescription:
      "Servizio di autista privato a Torino per trasporto di lavoro, transfer aeroportuali e gite in giornata nelle zone vinicole del Piemonte.",
    summary: "Trasporto privato a Torino e nella zona vinicola del Piemonte.",
    intro: [
      "Torino unisce una solida tradizione nel settore automobilistico e degli affari con un facile accesso alle zone vinicole del Piemonte, e un autista privato si adatta perfettamente a entrambi gli aspetti.",
      "Offriamo supporto per i viaggi di lavoro in città, oltre a gite in giornata nelle Langhe e nel Monferrato per chi desidera esplorare oltre il centro.",
    ],
    highlights: [
      "Trasporto corporate nei quartieri d'affari di Torino",
      "Gite in giornata nelle Langhe e nel Monferrato",
      "Transfer da aeroporto e stazione ferroviaria",
    ],
    popularPickups: ["Aeroporto di Torino", "Zona della stazione di Porta Nuova", "Hotel del centro città"],
  },
  verona: {
    heading: "Servizio di Autista Privato a Verona",
    metaTitle: "Servizio di Autista Privato a Verona",
    metaDescription:
      "Servizio di autista privato a Verona per transfer in città, gite in giornata al Lago di Garda e collegamenti con Venezia e Milano.",
    summary: "Trasporto privato a Verona e collegamenti con il Lago di Garda.",
    intro: [
      "Il centro compatto di Verona e la vicinanza al Lago di Garda rendono questa città facile da vivere con un autista privato, sia che tu venga per l'Arena, per il centro storico o come tappa tra Venezia e Milano.",
      "Organizziamo transfer in città, oltre a gite private verso i paesi e i borghi del Lago di Garda.",
    ],
    highlights: [
      "Transfer in città e ritiro in stazione",
      "Gite private in giornata al Lago di Garda",
      "Comoda tappa intermedia tra Venezia e Milano",
    ],
    popularPickups: ["Stazione di Verona Porta Nuova", "Aeroporto di Verona Villafranca", "Hotel del centro città"],
  },
  "lake-como": {
    heading: "Servizio di Autista Privato sul Lago di Como",
    metaTitle: "Autista Privato al Lago di Como",
    metaDescription:
      "Transfer privati e tour in giornata intorno al Lago di Como, tra cui Bellagio, Como e visite alle ville, da Milano o dagli aeroporti.",
    summary: "Transfer privati e autisti per tour intorno alle città e ai borghi del Lago di Como.",
    intro: [
      "Il Lago di Como si esplora al meglio con calma, spostandosi tra Como, Bellagio e i borghi lacustri senza preoccuparsi di parcheggio o orari dei traghetti. Un autista privato rende tutto questo possibile in una sola, comoda giornata.",
      "La maggior parte dei visitatori arriva via Milano o dall'aeroporto di Malpensa, e organizziamo sia transfer diretti sia itinerari turistici di un'intera giornata intorno al lago.",
    ],
    highlights: [
      "Transfer diretti da Milano e dall'aeroporto di Malpensa",
      "Itinerari turistici di un'intera giornata intorno al lago",
      "Conoscenza del territorio di Bellagio, Varenna e Como",
    ],
    popularPickups: ["Centro di Milano", "Aeroporto di Milano Malpensa", "Città di Como"],
  },
  "amalfi-coast": {
    heading: "Servizio di Autista Privato sulla Costiera Amalfitana",
    metaTitle: "Autista Privato Costiera Amalfitana",
    metaDescription:
      "Transfer privati e tour lungo la Costiera Amalfitana, tra cui Positano, Amalfi e Ravello, con autisti locali esperti.",
    summary: "Transfer privati e tour lungo i borghi costieri della Costiera Amalfitana.",
    intro: [
      "Le strade della Costiera Amalfitana sono strette, panoramiche e vanno affidate a un autista che ne conosce ogni curva. Un autista privato trasforma il tragitto stesso in parte dell'esperienza, con soste per foto e punti panoramici inserite nel tuo itinerario.",
      "Offriamo transfer dall'aeroporto di Napoli e da Sorrento, insieme a itinerari turistici di una o più giornate che comprendono Positano, Amalfi e Ravello.",
    ],
    highlights: [
      "Autisti esperti sulle strade strette e tortuose della costiera",
      "Soste flessibili a Positano, Amalfi e Ravello",
      "Transfer dall'aeroporto di Napoli e da Sorrento",
    ],
    popularPickups: ["Aeroporto di Napoli", "Hotel di Sorrento", "Positano", "Città di Amalfi"],
  },
  sorrento: {
    heading: "Servizio di Autista Privato a Sorrento",
    metaTitle: "Servizio di Autista Privato a Sorrento",
    metaDescription:
      "Servizio di autista privato a Sorrento per transfer aeroportuali, gite in giornata sulla Costiera Amalfitana e collegamenti con Roma e Napoli.",
    summary: "Trasporto privato con base a Sorrento, ideale per esplorare la Costiera Amalfitana.",
    intro: [
      "Sorrento è una base molto richiesta per esplorare la Costiera Amalfitana, i collegamenti con Capri e la penisola sorrentina, e un autista privato rende ogni meta facilmente raggiungibile senza dipendere dagli orari dei traghetti o dai tour di gruppo.",
      "Organizziamo transfer dall'aeroporto di Napoli e da Roma, oltre a gite in giornata lungo la costa.",
    ],
    highlights: [
      "Transfer dall'aeroporto di Napoli e da Roma",
      "Gite in giornata lungo la Costiera Amalfitana",
      "Collegamenti con i porti dei traghetti per Capri",
    ],
    popularPickups: ["Centro di Sorrento", "Aeroporto di Napoli", "Hotel di Roma"],
  },
  tuscany: {
    heading: "Servizio di Autista Privato in Toscana",
    metaTitle: "Servizio di Autista Privato in Toscana",
    metaDescription:
      "Servizio di autista privato in tutta la Toscana per tour enologici, gite in campagna e transfer tra Firenze, Siena e Pisa.",
    summary: "Trasporto privato nella campagna, nei vigneti e nei borghi collinari della Toscana.",
    intro: [
      "La Toscana è una regione da esplorare con calma, con il tempo di fermarsi in una cantina, in un borgo collinare o in un punto panoramico che non fa parte di nessun itinerario prestabilito. Un autista privato ti offre questa flessibilità, gestendo al contempo le strade rurali della regione con competenza locale.",
      "Organizziamo itinerari di una o più giornate attraverso il Chianti, la Val d'Orcia e i borghi collinari della Toscana, generalmente con partenza da Firenze, Pisa o Siena.",
    ],
    highlights: [
      "Itinerari flessibili tra zone vinicole e campagna",
      "Conoscenza del territorio del Chianti e della Val d'Orcia",
      "Punti di partenza da Firenze, Pisa o Siena",
    ],
    popularPickups: ["Firenze", "Aeroporto di Pisa", "Siena"],
  },
  "cinque-terre": {
    heading: "Servizio di Autista Privato per le Cinque Terre",
    metaTitle: "Autista Privato alle Cinque Terre",
    metaDescription:
      "Transfer privati e gite in giornata alle Cinque Terre da Firenze, Pisa e la costa toscana, con la conoscenza degli autisti locali.",
    summary: "Transfer privati e gite in giornata ai borghi delle Cinque Terre.",
    intro: [
      "I borghi delle Cinque Terre sono in gran parte pedonali, quindi un autista privato ti accompagna comodamente ai paesi di accesso, prima di proseguire a piedi o con il treno locale tra un borgo e l'altro.",
      "Organizziamo gite in giornata da Firenze e Pisa, oltre a transfer verso La Spezia per i passeggeri delle navi da crociera.",
    ],
    highlights: [
      "Transfer comodi verso i paesi di accesso alle Cinque Terre",
      "Gite in giornata da Firenze e Pisa",
      "Collegamenti con il porto crociere di La Spezia",
    ],
    popularPickups: ["Firenze", "Aeroporto di Pisa", "La Spezia"],
  },
  portofino: {
    heading: "Servizio di Autista Privato a Portofino",
    metaTitle: "Servizio di Autista Privato a Portofino",
    metaDescription:
      "Transfer privati con autista a Portofino da Genova, Milano e la costa ligure, con un trasporto comodo e diretto.",
    summary: "Transfer privati verso Portofino e la costa ligure.",
    intro: [
      "Le strette vie sul porto di Portofino si raggiungono al meglio in auto privata fino al limite del borgo, e i nostri autisti sanno esattamente dove arrivare e attendere durante la tua visita.",
      "Offriamo transfer da Genova, Milano e lungo la costa ligure, spesso abbinati a un itinerario alle Cinque Terre o al porto crociere di Genova.",
    ],
    highlights: [
      "Transfer diretti da Genova e Milano",
      "Comodo abbinamento con itinerari alle Cinque Terre",
      "Soluzioni di attesa comode vicino al borgo",
    ],
    popularPickups: ["Genova", "Milano", "Santa Margherita Ligure"],
  },
  siena: {
    heading: "Servizio di Autista Privato a Siena",
    metaTitle: "Servizio di Autista Privato a Siena",
    metaDescription:
      "Servizio di autista privato a Siena per transfer in città, gite in giornata nella campagna toscana e collegamenti con Firenze.",
    summary: "Trasporto privato a Siena e nella campagna collinare toscana circostante.",
    intro: [
      "Il centro collinare di Siena è chiuso alla maggior parte del traffico, quindi un autista ti accompagna il più vicino possibile prima di proseguire a piedi verso Piazza del Campo e il nucleo storico.",
      "Siena è anche un'ottima base per esplorare la Val d'Orcia e i borghi collinari più piccoli della Toscana meridionale.",
    ],
    highlights: [
      "Comoda discesa vicino al centro storico di Siena",
      "Accesso alla campagna della Val d'Orcia",
      "Collegamento diretto con Firenze",
    ],
    popularPickups: ["Centro storico di Siena", "Firenze"],
  },
  pisa: {
    heading: "Servizio di Autista Privato a Pisa",
    metaTitle: "Servizio di Autista Privato a Pisa",
    metaDescription:
      "Servizio di autista privato a Pisa per transfer aeroportuali, visite in città e collegamenti con Firenze e le Cinque Terre.",
    summary: "Trasporto privato a Pisa, dall'aeroporto alla Torre Pendente e oltre.",
    intro: [
      "Molti visitatori vedono Pisa in una breve sosta, e un autista privato rende tutto efficiente, con un trasporto diretto dall'aeroporto alla Torre Pendente e a Piazza dei Miracoli, per poi proseguire verso la tappa successiva.",
      "L'aeroporto di Pisa è anche un comodo punto di accesso sia per la Toscana sia per le Cinque Terre, il che lo rende un pratico punto di arrivo per un itinerario più ampio.",
    ],
    highlights: [
      "Transfer rapidi dall'aeroporto di Pisa",
      "Itinerari efficienti per brevi soste alla Torre Pendente",
      "Collegamenti successivi con Firenze e le Cinque Terre",
    ],
    popularPickups: ["Aeroporto di Pisa (PSA)", "Zona di Piazza dei Miracoli"],
  },
  sicily: {
    heading: "Servizio di Autista Privato in Sicilia",
    metaTitle: "Servizio di Autista Privato in Sicilia",
    metaDescription:
      "Servizio di autista privato in tutta la Sicilia, tra cui Palermo, Catania e Taormina, con transfer aeroportuali e itinerari turistici di più giorni.",
    summary: "Trasporto privato e autisti per tour in tutta la Sicilia.",
    intro: [
      "La Sicilia premia i viaggiatori che possono muoversi con flessibilità tra costa, campagna e centri storici, e un autista privato è particolarmente adatto alle strade e alle distanze variegate dell'isola.",
      "Organizziamo transfer aeroportuali da Palermo e Catania, oltre a itinerari turistici di più giorni personalizzabili secondo il tuo ritmo, anziché un programma di gruppo fisso.",
    ],
    highlights: [
      "Transfer dagli aeroporti di Palermo e Catania",
      "Itinerari turistici flessibili di più giorni",
      "Autisti locali esperti delle strade costiere e interne della Sicilia",
    ],
    popularPickups: ["Aeroporto di Palermo", "Aeroporto di Catania", "Taormina"],
  },
  sardinia: {
    heading: "Servizio di Autista Privato in Sardegna",
    metaTitle: "Servizio di Autista Privato in Sardegna",
    metaDescription:
      "Servizio di autista privato in Sardegna per transfer aeroportuali, tour costieri e accesso alla Costa Smeralda.",
    summary: "Trasporto privato lungo la costa e nell'entroterra della Sardegna.",
    intro: [
      "Le distanze e le strade costiere della Sardegna si prestano bene al trasporto privato, in particolare per i viaggiatori diretti verso la Costa Smeralda o per chi esplora l'entroterra dell'isola oltre le principali località turistiche.",
      "Organizziamo transfer aeroportuali e itinerari turistici in giornata flessibili, personalizzati in base al tuo percorso.",
    ],
    highlights: [
      "Transfer aeroportuali in tutta l'isola",
      "Accesso alla Costa Smeralda",
      "Tour flessibili lungo la costa e nell'entroterra",
    ],
    popularPickups: ["Aeroporto di Cagliari", "Aeroporto di Olbia"],
  },
  bari: {
    heading: "Servizio di Autista Privato a Bari",
    metaTitle: "Servizio di Autista Privato a Bari",
    metaDescription:
      "Servizio di autista privato a Bari per transfer aeroportuali, collegamenti con il porto crociere e tour in tutta la Puglia.",
    summary: "Trasporto privato a Bari e accesso alla regione Puglia.",
    intro: [
      "Bari è sia una porta d'accesso per le crociere sia il punto di partenza per i trulli, la costa e la campagna della Puglia, e un autista privato rende ogni meta facilmente raggiungibile in tutta comodità.",
      "Organizziamo transfer da aeroporto e porto crociere, oltre a gite in giornata nella regione Puglia.",
    ],
    highlights: [
      "Transfer da porto crociere e aeroporto",
      "Gite in giornata nella campagna pugliese",
      "Accesso ad Alberobello e ai borghi costieri",
    ],
    popularPickups: ["Aeroporto di Bari", "Porto crociere di Bari"],
  },
  genoa: {
    heading: "Servizio di Autista Privato a Genova",
    metaTitle: "Servizio di Autista Privato a Genova",
    metaDescription:
      "Servizio di autista privato a Genova per transfer dal porto crociere, trasporto in città e collegamenti con Portofino e le Cinque Terre.",
    summary: "Trasporto privato a Genova, tra cui collegamenti con il porto crociere e la costa.",
    intro: [
      "Genova è un importante porto crociere della Liguria e una base comoda per raggiungere su strada Portofino e le Cinque Terre, e i nostri autisti gestiscono sia la logistica portuale sia il tragitto costiero successivo.",
      "Organizziamo transfer da crociera, trasporto in città e gite in giornata lungo la Riviera Ligure.",
    ],
    highlights: [
      "Transfer dal porto crociere con assistenza bagagli",
      "Gite in giornata a Portofino e alle Cinque Terre",
      "Trasporto cittadino e di lavoro a Genova",
    ],
    popularPickups: ["Porto crociere di Genova", "Aeroporto di Genova", "Hotel del centro città"],
  },
};
