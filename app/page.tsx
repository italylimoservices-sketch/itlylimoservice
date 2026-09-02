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
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { generalFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "Italy Chauffeur Service | Private Drivers & Airport Transfers",
  description:
    "Premium private chauffeur service across Italy. Airport transfers, city-to-city transportation, hourly hire and private tours with English-speaking drivers and transparent pricing.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AirportsSection />
      <DestinationsSection />
      <RoutesSection />
      <WhyChooseUs />
      <FleetSection />
      <ToursSection />
      <CorporateSection />
      <CruiseSection />
      <TestimonialsSection />
      <HowItWorks />
      <FaqSection items={generalFaqs} eyebrow="FAQ" title="Frequently Asked Questions" />
      <FinalCTA />
    </>
  );
}
