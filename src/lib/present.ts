import type { CollectionEntry } from 'astro:content';

type Insight = CollectionEntry<'insights'>;

/** Estimate reading time (minutes) from all prose fields. */
export function readingMinutes(d: Insight['data']): number {
  const parts: string[] = [
    d.coreFinding,
    d.quickTake ?? '',
    ...d.whatResearchShows,
    ...d.whyItHappens,
    ...d.realLifeExamples,
    ...d.whatPeopleGetWrong,
    ...d.relationshipImplications,
    ...d.theNuance,
    ...(d.keyTakeaways ?? []),
    ...d.faqs.flatMap((f) => [f.question, f.answer]),
  ];
  const words = parts.join(' ').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 210));
}

export type Layout = 'feature' | 'editorial' | 'data' | 'minimal';
const LAYOUTS: Layout[] = ['feature', 'editorial', 'data', 'minimal'];

/**
 * Pick a stable layout variant for a page. Honors an explicit `layout` field,
 * otherwise derives one from the slug so the choice is deterministic (stable
 * across builds) yet varied from page to page. Pages with a comparison table or
 * rich stats lean toward the "data" variant.
 */
export function pickLayout(d: Insight['data']): Layout {
  if (d.layout) return d.layout;
  let h = 0;
  for (let i = 0; i < d.slug.length; i++) h = (h * 31 + d.slug.charCodeAt(i)) >>> 0;
  return LAYOUTS[h % LAYOUTS.length];
}

/** Rotating accent per section index, kept subtle and on-brand. */
export const SECTION_ACCENTS = ['red', 'teal', 'amber', 'slate'] as const;

/**
 * Normalise an internal path to the trailing-slash form used site-wide (the
 * site builds with Astro's `directory` format, so every page is served at
 * `/path/`). Leaves the root, external links, mailto/anchors/queries, and file
 * URLs (anything with a dot in the final segment, e.g. `/favicon.svg`)
 * untouched so we never break a real asset. Applied at render time in the
 * header, footer, and breadcrumbs so every internal link matches its canonical.
 */
export function trailingSlash(href: string): string {
  if (!href || !href.startsWith('/') || href === '/') return href;
  if (href.endsWith('/') || href.includes('#') || href.includes('?')) return href;
  const last = href.split('/').pop() ?? '';
  if (last.includes('.')) return href;
  return `${href}/`;
}
