import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AirportsSection from "@/components/sections/AirportsSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import RoutesSection from "@/components/sections/RoutesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FleetSection from "@/components/sections/FleetSection";
import ToursSection from "@/components/sections/ToursSection";
import CorporateSection from "@/components/sections/CorporateSection";
import CruiseSection from "@/components/sections/CruiseSection";
import TrustValueSection from "@/components/sections/TrustValueSection";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { generalFaqs_it } from "@/lib/i18n/data.it";

export const metadata: Metadata = {
  title: "Servizio Auto con Autista in Italia | Autisti Privati e Transfer Aeroportuali",
  description:
    "Servizio auto con autista privato di alta gamma in tutta Italia. Transfer aeroportuali, trasporto città-città, noleggio a ore e tour privati con autisti che parlano inglese e prezzi trasparenti.",
  alternates: {
    canonical: "/it",
    languages: { en: "/", it: "/it" },
  },
};

export default function ItalianHomePage() {
  return (
    <>
      <Hero locale="it" />
      <TrustBar locale="it" />
      <ServicesGrid locale="it" />
      <AirportsSection locale="it" />
      <DestinationsSection locale="it" />
      <RoutesSection locale="it" />
      <WhyChooseUs locale="it" />
      <FleetSection locale="it" />
      <ToursSection locale="it" />
      <CorporateSection locale="it" />
      <CruiseSection locale="it" />
      <TrustValueSection locale="it" />
      <HowItWorks locale="it" />
      <FaqSection items={generalFaqs_it} eyebrow="FAQ" title="Domande Frequenti" />
      <FinalCTA locale="it" />
    </>
  );
}
