import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-display text-3xl md:text-4xl text-navy mt-2 mb-5 leading-tight">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-display text-2xl md:text-3xl text-navy mt-12 mb-4 leading-tight">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-lg md:text-xl text-navy mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => <p className="text-[0.98rem] leading-relaxed text-stone mb-4">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc pl-5 space-y-1.5 text-[0.98rem] leading-relaxed text-stone mb-4">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 space-y-1.5 text-[0.98rem] leading-relaxed text-stone mb-4">{children}</ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-gold pl-4 italic text-ink-soft my-6">{children}</blockquote>
  ),
  hr: () => <hr className="border-line my-10" />,
  a: ({ href, children }) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");
    if (isInternal && href) {
      return (
        <Link href={href} className="text-gold font-medium underline underline-offset-2 hover:text-gold-light">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold font-medium underline underline-offset-2 hover:text-gold-light"
      >
        {children}
      </a>
    );
  },
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6 rounded-sm border border-line">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-ivory-deep/50">{children}</thead>,
  th: ({ children }) => (
    <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-navy whitespace-nowrap">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2.5 border-t border-line text-stone align-top">{children}</td>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
