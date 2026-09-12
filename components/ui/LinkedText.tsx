import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Renders plain body copy (destination/route intros, highlights, FAQ
 * answers) that may contain inline [label](/path) markers as real links —
 * these data files are plain strings with no JSX, so this is the bridge
 * that lets specific words in existing sentences link to other pages
 * without turning every data file into JSX.
 */
export default function LinkedText({
  text,
  linkClassName = "text-gold hover:underline",
}: {
  text: string;
  linkClassName?: string;
}) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  // Matches a lightweight inline-markdown link: [label](/path)
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    }
    parts.push(
      <Link key={key++} href={match[2]} className={linkClassName}>
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return <>{parts}</>;
}
