import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import RoutesSection from "@/components/sections/RoutesSection";

const service = getServiceBySlug("city-to-city-transfers")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/city-to-city-transfers", languages: { en: "/city-to-city-transfers", it: "/it/city-to-city-transfers", "x-default": "/city-to-city-transfers" } },
};

export default function CityToCityPage() {
  return <ServicePageTemplate service={service} extra={<RoutesSection />} />;
}
