import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import AirportsSection from "@/components/sections/AirportsSection";

const service = getServiceBySlug("airport-transfers")!;
const sd = serviceDetails_it["airport-transfers"];

export const metadata: Metadata = {
  title: sd?.metaTitle ?? service.metaTitle,
  description: sd?.metaDescription ?? service.metaDescription,
  alternates: { canonical: "/it/airport-transfers", languages: { en: "/airport-transfers", it: "/it/airport-transfers" } },
};

export default function AirportTransfersPageIt() {
  return <ServicePageTemplate service={service} extra={<AirportsSection locale="it" />} locale="it" />;
}
