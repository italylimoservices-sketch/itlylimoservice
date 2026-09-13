import type { ServicePageCopyOverrides } from "@/components/templates/ServicePageTemplate";

/**
 * Page-specific section headings and process steps for the service pages
 * that share ServicePageTemplate. Without these, four pages (chauffeur
 * service, airport transfers, private tours, corporate) render identical
 * "Service Benefits" / "Who It's For" headings and an identical 4-step
 * flow, even though their underlying benefits/FAQ content already differs.
 */

export const chauffeurServiceCopy: ServicePageCopyOverrides = {
  benefits: {
    eyebrow: { en: "Your Journey Partner", it: "Il Tuo Compagno di Viaggio" },
    title: { en: "More Than a Driver — Your Journey Partner", it: "Più di un Autista — Il Tuo Compagno di Viaggio" },
  },
  whoFor: {
    eyebrow: { en: "Who Books a Private Chauffeur", it: "Chi Prenota un Autista Privato" },
    title: { en: "Built Around How You Actually Move Through Italy", it: "Pensato per Come Ti Muovi Davvero in Italia" },
  },
  steps: {
    en: [
      { n: "01", title: "Tell Us Your Plans", desc: "Share where you're staying, roughly how you want your days to run, and whether it's one city or several." },
      { n: "02", title: "Receive a Fixed Quote", desc: "We confirm a dedicated chauffeur and vehicle, with pricing agreed before you travel." },
      { n: "03", title: "Meet Your Chauffeur", desc: "One driver, briefed on your plans, ready from your first pickup." },
      { n: "04", title: "Travel On Your Schedule", desc: "Plans shift; your chauffeur adapts rather than sticking to a fixed itinerary." },
    ],
    it: [
      { n: "01", title: "Comunicaci i Tuoi Piani", desc: "Indicaci dove alloggi, come vorresti organizzare le giornate e se si tratta di una città o più di una." },
      { n: "02", title: "Ricevi un Preventivo Fisso", desc: "Confermiamo un autista e un veicolo dedicati, con un prezzo concordato prima del viaggio." },
      { n: "03", title: "Incontra il Tuo Autista", desc: "Un solo autista, informato sui tuoi piani, pronto dal primo ritiro." },
      { n: "04", title: "Viaggia Secondo i Tuoi Tempi", desc: "I piani possono cambiare; il tuo autista si adatta invece di seguire un itinerario fisso." },
    ],
  },
};

export const airportTransfersCopy: ServicePageCopyOverrides = {
  benefits: {
    eyebrow: { en: "From Touchdown to Your Hotel", it: "Dall'Atterraggio al Tuo Hotel" },
    title: { en: "The Arrival Experience", it: "L'Esperienza di Arrivo" },
  },
  whoFor: {
    eyebrow: { en: "Who Books an Airport Transfer", it: "Chi Prenota un Transfer Aeroportuale" },
    title: { en: "Is an Airport Transfer Right for Your Arrival?", it: "Il Transfer Aeroportuale Fa per Te?" },
  },
  steps: {
    en: [
      { n: "01", title: "Share Your Flight Details", desc: "Flight number, arrival airport and passenger count." },
      { n: "02", title: "We Track Your Flight", desc: "Pickup timing adjusts automatically for early or delayed landings." },
      { n: "03", title: "Meet at Arrivals", desc: "Your driver waits in the arrivals hall with a name board." },
      { n: "04", title: "Direct to Your Destination", desc: "No shared shuttle stops — straight to your hotel, villa or onward city." },
    ],
    it: [
      { n: "01", title: "Comunica i Dettagli del Volo", desc: "Numero di volo, aeroporto di arrivo e numero di passeggeri." },
      { n: "02", title: "Monitoriamo il Tuo Volo", desc: "L'orario di ritiro si adatta automaticamente ad arrivi anticipati o in ritardo." },
      { n: "03", title: "Ti Aspettiamo all'Arrivo", desc: "Il tuo autista ti aspetta nella sala arrivi con un cartello con il tuo nome." },
      { n: "04", title: "Diretti alla Tua Destinazione", desc: "Nessuna fermata condivisa — direttamente al tuo hotel, villa o città di proseguimento." },
    ],
  },
};

export const italyPrivateToursCopy: ServicePageCopyOverrides = {
  benefits: {
    eyebrow: { en: "Design Your Itinerary", it: "Progetta il Tuo Itinerario" },
    title: { en: "Why a Private Tour, Not a Group One", it: "Perché un Tour Privato, non di Gruppo" },
  },
  whoFor: {
    eyebrow: { en: "Who Chooses a Private Tour", it: "Chi Sceglie un Tour Privato" },
    title: { en: "Is a Private Tour Right for You?", it: "Il Tour Privato Fa per Te?" },
  },
  steps: {
    en: [
      { n: "01", title: "Choose Your Region", desc: "Tuscany, the Amalfi Coast, Lake Como or another touring region." },
      { n: "02", title: "Shape Your Itinerary", desc: "Stops, pace and duration built around your interests." },
      { n: "03", title: "Receive a Fixed Quote", desc: "A transparent price for your driver, vehicle and route before you book." },
      { n: "04", title: "Explore At Your Own Pace", desc: "Linger where you love it, skip past what doesn't interest you." },
    ],
    it: [
      { n: "01", title: "Scegli la Tua Regione", desc: "Toscana, Costiera Amalfitana, Lago di Como o un'altra regione da esplorare." },
      { n: "02", title: "Definisci il Tuo Itinerario", desc: "Tappe, ritmo e durata costruiti sui tuoi interessi." },
      { n: "03", title: "Ricevi un Preventivo Fisso", desc: "Un prezzo trasparente per autista, veicolo e percorso prima di prenotare." },
      { n: "04", title: "Esplora ai Tuoi Ritmi", desc: "Fermati dove ti piace di più, salta ciò che non ti interessa." },
    ],
  },
};

export const corporateChauffeurCopy: ServicePageCopyOverrides = {
  benefits: {
    eyebrow: { en: "Reliability, First", it: "Affidabilità, Prima di Tutto" },
    title: { en: "Built for Business Travel", it: "Pensato per i Viaggi di Lavoro" },
  },
  whoFor: {
    eyebrow: { en: "Who Relies on Corporate Chauffeur Service", it: "Chi Si Affida al Servizio Auto Aziendale" },
    title: { en: "Is Corporate Chauffeur Right for Your Team?", it: "Il Servizio Auto Aziendale Fa per il Tuo Team?" },
  },
  steps: {
    en: [
      { n: "01", title: "Share Your Itinerary", desc: "Meetings, travellers, cities and timing for the trip or event." },
      { n: "02", title: "We Confirm Vehicles & Drivers", desc: "The right category and coverage for your group, agreed before travel." },
      { n: "03", title: "Receive a Fixed Quote", desc: "Transparent pricing, with corporate billing available on request." },
      { n: "04", title: "Your Team Travels on Schedule", desc: "Punctual pickups between meetings, airports and hotels." },
    ],
    it: [
      { n: "01", title: "Comunica il Tuo Itinerario", desc: "Riunioni, passeggeri, città e tempistiche del viaggio o dell'evento." },
      { n: "02", title: "Confermiamo Veicoli e Autisti", desc: "La categoria e la copertura giuste per il tuo gruppo, concordate prima del viaggio." },
      { n: "03", title: "Ricevi un Preventivo Fisso", desc: "Prezzi trasparenti, con fatturazione aziendale disponibile su richiesta." },
      { n: "04", title: "Il Tuo Team Viaggia negli Orari Previsti", desc: "Ritiri puntuali tra riunioni, aeroporti e hotel." },
    ],
  },
};
