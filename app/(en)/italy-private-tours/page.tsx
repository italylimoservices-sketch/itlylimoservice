import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { italyPrivateToursCopy } from "@/lib/data/servicePageCopy";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import ToursSection from "@/components/sections/ToursSection";
import BuildYourDaySection from "@/components/sections/BuildYourDaySection";

const service = getServiceBySlug("italy-private-tours")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/italy-private-tours", languages: { en: "/italy-private-tours", it: "/it/italy-private-tours", "x-default": "/italy-private-tours" } },
};

export default function ItalyPrivateToursPage() {
  return (
    <ServicePageTemplate
      service={service}
      extra={<><BuildYourDaySection /><ToursSection /></>}
      copyOverrides={italyPrivateToursCopy}
    />
  );
}
