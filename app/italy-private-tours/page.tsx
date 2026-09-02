import type { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import ToursSection from "@/components/sections/ToursSection";

const service = getServiceBySlug("italy-private-tours")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/italy-private-tours" },
};

export default function ItalyPrivateToursPage() {
  return <ServicePageTemplate service={service} extra={<ToursSection />} />;
}
