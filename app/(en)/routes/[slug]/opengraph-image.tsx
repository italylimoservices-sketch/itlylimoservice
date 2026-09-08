import { getRouteBySlug } from "@/lib/data/routes";
import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/ogImage";
import { siteConfig } from "@/lib/siteConfig";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  return renderOgImage(
    "Private Transfer",
    route ? `${route.from} to ${route.to}` : siteConfig.name
  );
}
