import { getCollection, type CollectionEntry } from 'astro:content';

export type Insight = CollectionEntry<'insights'>;

/** All insights, sorted alphabetically by title for stable output. */
export async function allInsights(): Promise<Insight[]> {
  const items = await getCollection('insights');
  return items.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export function excerpt(insight: Insight): string {
  // Use the meta description as the card excerpt — it is already tuned to be a
  // tight, honest summary of the page.
  return insight.data.metaDescription;
}

export async function insightsByCategory(category: string): Promise<Insight[]> {
  const items = await allInsights();
  return items.filter((i) => i.data.category === category);
}

export async function featuredInsights(slugs: string[]): Promise<Insight[]> {
  const items = await allInsights();
  const bySlug = new Map(items.map((i) => [i.data.slug, i]));
  return slugs.map((s) => bySlug.get(s)).filter((x): x is Insight => Boolean(x));
}

export async function relatedInsights(insight: Insight): Promise<Insight[]> {
  const items = await allInsights();
  const bySlug = new Map(items.map((i) => [i.data.slug, i]));
  return insight.data.relatedInsights
    .map((s) => bySlug.get(s))
    .filter((x): x is Insight => Boolean(x));
}

/**
 * A lightweight index injected into the client-side Explorer. Keeping this in
 * sync with the schema means the tool always scores against real, current pages.
 */
export interface InsightIndexEntry {
  slug: string;
  title: string;
  category: string;
  focusGender: 'men' | 'women' | 'both';
  excerpt: string;
  tags: string[];
}

export async function insightIndex(): Promise<InsightIndexEntry[]> {
  const items = await allInsights();
  return items.map((i) => ({
    slug: i.data.slug,
    title: i.data.title,
    category: i.data.category,
    focusGender: i.data.focusGender,
    excerpt: i.data.metaDescription,
    tags: i.data.tags,
  }));
}
