import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import CorporateUseCases from "@/components/sections/CorporateUseCases";

const service = getServiceBySlug("corporate-chauffeur")!;
const sd = serviceDetails_it["corporate-chauffeur"];

export const metadata: Metadata = {
  title: sd?.metaTitle ?? service.metaTitle,
  description: sd?.metaDescription ?? service.metaDescription,
  alternates: { canonical: "/it/corporate-chauffeur", languages: { en: "/corporate-chauffeur", it: "/it/corporate-chauffeur", "x-default": "/corporate-chauffeur" } },
};

export default function CorporateChauffeurPageIt() {
  return <ServicePageTemplate service={service} extra={<CorporateUseCases locale="it" />} locale="it" />;
}
