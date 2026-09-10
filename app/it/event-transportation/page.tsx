import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import { serviceDetails_it } from "@/lib/i18n/data.it.services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const service = getServiceBySlug("event-transportation")!;
const sd = serviceDetails_it["event-transportation"];

export const metadata: Metadata = {
  title: sd?.metaTitle ?? service.metaTitle,
  description: sd?.metaDescription ?? service.metaDescription,
  alternates: { canonical: "/it/event-transportation", languages: { en: "/event-transportation", it: "/it/event-transportation" } },
};

export default function EventTransportationPageIt() {
  return <ServicePageTemplate service={service} locale="it" />;
}
