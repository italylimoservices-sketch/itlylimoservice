import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const service = getServiceBySlug("hourly-chauffeur")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/hourly-chauffeur", languages: { en: "/hourly-chauffeur", it: "/it/hourly-chauffeur", "x-default": "/hourly-chauffeur" } },
};

export default function HourlyChauffeurPage() {
  return <ServicePageTemplate service={service} />;
}
