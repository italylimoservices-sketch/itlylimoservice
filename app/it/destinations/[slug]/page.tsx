import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/lib/data/destinations";
import { destinationDetails_it } from "@/lib/i18n/data.it.destinations";
import DestinationPageTemplate from "@/components/templates/DestinationPageTemplate";
import { translatedPaths } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return destinations.filter((d) => translatedPaths.has(`/destinations/${d.slug}`)).map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  const d = destinationDetails_it[slug];
  return {
    title: d?.metaTitle ?? destination.metaTitle,
    description: d?.metaDescription ?? destination.metaDescription,
    alternates: { canonical: `/it/destinations/${destination.slug}`, languages: { en: `/destinations/${destination.slug}`, it: `/it/destinations/${destination.slug}` } },
  };
}

export default async function DestinationPageIt({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  return <DestinationPageTemplate destination={destination} locale="it" />;
}
