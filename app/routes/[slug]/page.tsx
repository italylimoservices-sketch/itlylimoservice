import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes, getRouteBySlug } from "@/lib/data/routes";
import RoutePageTemplate from "@/components/templates/RoutePageTemplate";

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return {};
  return {
    title: route.metaTitle,
    description: route.metaDescription,
    alternates: { canonical: `/routes/${route.slug}` },
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  return <RoutePageTemplate route={route} />;
}
