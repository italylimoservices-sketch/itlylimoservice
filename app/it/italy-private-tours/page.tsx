import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import { italyPrivateToursCopy } from "@/lib/data/servicePageCopy";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import ToursSection from "@/components/sections/ToursSection";
import BuildYourDaySection from "@/components/sections/BuildYourDaySection";

const service = getServiceBySlug("italy-private-tours")!;
const sd = serviceDetails_it["italy-private-tours"];

export const metadata: Metadata = {
  title: sd?.metaTitle ?? service.metaTitle,
  description: sd?.metaDescription ?? service.metaDescription,
  alternates: { canonical: "/it/italy-private-tours", languages: { en: "/italy-private-tours", it: "/it/italy-private-tours", "x-default": "/italy-private-tours" } },
};

export default function ItalyPrivateToursPageIt() {
  return (
    <ServicePageTemplate
      service={service}
      extra={<><BuildYourDaySection locale="it" /><ToursSection locale="it" /></>}
      locale="it"
      copyOverrides={italyPrivateToursCopy}
    />
  );
}
