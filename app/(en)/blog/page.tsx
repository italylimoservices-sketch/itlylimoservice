import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ImageBlock from "@/components/ui/ImageBlock";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Italy Travel Guides & Tips",
  description:
    "Practical guides for planning a trip to Italy — destinations, transportation, itineraries, food and culture, and travel tips from Italy Limo Service.",
  alternates: { canonical: "/blog" },
};

const variants = ["gold", "navy", "ivory"] as const;

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="bg-navy-deep text-ivory py-14 md:py-20">
        <div className="container-luxe">
          <p className="eyebrow eyebrow-invert mb-4">Italy Travel Guides</p>
          <h1 className="font-display text-4xl md:text-[2.75rem] leading-tight max-w-2xl">
            Plan Your Italy Trip
          </h1>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ivory-deep/80">
            Practical guides on Italy&apos;s destinations, transportation, itineraries and travel
            essentials, written to help you plan a smoother trip.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-luxe grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <ImageBlock label={post.category} variant={variants[i % variants.length]} aspect="aspect-[4/3]" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold">{post.category}</p>
              <h2 className="mt-2 font-display text-xl text-navy leading-snug group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-stone leading-relaxed">{post.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
