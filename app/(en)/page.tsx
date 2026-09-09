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
import { generalFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "Italy Chauffeur Service | Private Drivers & Airport Transfers",
  description:
    "Premium private chauffeur service across Italy. Airport transfers, city-to-city transportation, hourly hire and private tours with English-speaking drivers and transparent pricing.",
  alternates: {
    canonical: "/",
    languages: { en: "/", it: "/it", "x-default": "/" },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero locale="en" />
      <TrustBar locale="en" />
      <ServicesGrid locale="en" />
      <AirportsSection locale="en" />
      <DestinationsSection locale="en" />
      <RoutesSection locale="en" />
      <WhyChooseUs locale="en" />
      <FleetSection locale="en" />
      <ToursSection locale="en" />
      <CorporateSection locale="en" />
      <CruiseSection locale="en" />
      <TrustValueSection locale="en" />
      <HowItWorks locale="en" />
      <FaqSection items={generalFaqs} eyebrow="FAQ" title="Frequently Asked Questions" />
      <FinalCTA locale="en" />
    </>
  );
}
