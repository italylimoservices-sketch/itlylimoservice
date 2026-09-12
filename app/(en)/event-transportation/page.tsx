import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";

const service = getServiceBySlug("event-transportation")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/event-transportation", languages: { en: "/event-transportation", it: "/it/event-transportation", "x-default": "/event-transportation" } },
};

export default function EventTransportationPage() {
  return <ServicePageTemplate service={service} />;
}
