import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.domain}/blog/${slug}`,
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      <JsonLd data={articleJsonLd} />

      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow eyebrow-invert mb-4">{post.category}</p>
          <h1 className="font-display text-3xl md:text-[2.5rem] leading-tight">{post.title}</h1>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-ivory-deep/80">{post.summary}</p>
        </div>
      </section>

      <article className="py-16 md:py-20 bg-ivory">
        <div className="container-luxe max-w-3xl">
          <Content />
        </div>
      </article>

      <FaqSection items={post.faqs} title={`${post.title.split(":")[0]} — Frequently Asked Questions`} />
      <FinalCTA />
    </>
  );
}
