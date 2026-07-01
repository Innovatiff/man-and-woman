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
