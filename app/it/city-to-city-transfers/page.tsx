import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import RoutesSection from "@/components/sections/RoutesSection";

const service = getServiceBySlug("city-to-city-transfers")!;
const sd = serviceDetails_it["city-to-city-transfers"];

export const metadata: Metadata = {
  title: sd?.metaTitle ?? service.metaTitle,
  description: sd?.metaDescription ?? service.metaDescription,
  alternates: { canonical: "/it/city-to-city-transfers", languages: { en: "/city-to-city-transfers", it: "/it/city-to-city-transfers", "x-default": "/city-to-city-transfers" } },
};

export default function CityToCityPageIt() {
  return <ServicePageTemplate service={service} extra={<RoutesSection locale="it" />} locale="it" />;
}
