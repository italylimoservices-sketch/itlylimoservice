import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const service = getServiceBySlug("chauffeur-service")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/chauffeur-service", languages: { en: "/chauffeur-service", it: "/it/chauffeur-service", "x-default": "/chauffeur-service" } },
};

export default function ChauffeurServicePage() {
  return <ServicePageTemplate service={service} />;
}
