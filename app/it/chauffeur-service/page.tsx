import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const service = getServiceBySlug("chauffeur-service")!;
const sd = serviceDetails_it["chauffeur-service"];

export const metadata: Metadata = {
  title: sd?.metaTitle ?? service.metaTitle,
  description: sd?.metaDescription ?? service.metaDescription,
  alternates: { canonical: "/it/chauffeur-service", languages: { en: "/chauffeur-service", it: "/it/chauffeur-service", "x-default": "/chauffeur-service" } },
};

export default function ChauffeurServicePageIt() {
  return <ServicePageTemplate service={service} locale="it" />;
}
