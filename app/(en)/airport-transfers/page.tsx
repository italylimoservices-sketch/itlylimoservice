import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import AirportsSection from "@/components/sections/AirportsSection";

const service = getServiceBySlug("airport-transfers")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/airport-transfers", languages: { en: "/airport-transfers", it: "/it/airport-transfers", "x-default": "/airport-transfers" } },
};

export default function AirportTransfersPage() {
  return <ServicePageTemplate service={service} extra={<AirportsSection />} />;
}
