import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/lib/data/destinations";
import DestinationPageTemplate from "@/components/templates/DestinationPageTemplate";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  return {
    title: destination.metaTitle,
    description: destination.metaDescription,
    alternates: { canonical: `/destinations/${destination.slug}`, languages: { en: `/destinations/${destination.slug}`, it: `/it/destinations/${destination.slug}`, "x-default": `/destinations/${destination.slug}` } },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  return <DestinationPageTemplate destination={destination} />;
}
