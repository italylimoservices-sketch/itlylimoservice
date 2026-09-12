import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const service = getServiceBySlug("hourly-chauffeur")!;
const sd = serviceDetails_it["hourly-chauffeur"];

export const metadata: Metadata = {
  title: sd?.metaTitle ?? service.metaTitle,
  description: sd?.metaDescription ?? service.metaDescription,
  alternates: { canonical: "/it/hourly-chauffeur", languages: { en: "/hourly-chauffeur", it: "/it/hourly-chauffeur", "x-default": "/hourly-chauffeur" } },
};

export default function HourlyChauffeurPageIt() {
  return <ServicePageTemplate service={service} locale="it" />;
}
