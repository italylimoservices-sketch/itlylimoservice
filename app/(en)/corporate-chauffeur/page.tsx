import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import CorporateUseCases from "@/components/sections/CorporateUseCases";

const service = getServiceBySlug("corporate-chauffeur")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/corporate-chauffeur" },
};

export default function CorporateChauffeurPage() {
  return <ServicePageTemplate service={service} extra={<CorporateUseCases />} />;
}
