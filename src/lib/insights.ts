import { getCollection, type CollectionEntry } from 'astro:content';
import { TOPICS, type Topic } from '../data/topics';

export type Insight = CollectionEntry<'insights'>;

/** All insights, sorted alphabetically by title for stable output. */
export async function allInsights(): Promise<Insight[]> {
  const items = await getCollection('insights');
  return items.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export function excerpt(insight: Insight): string {
  // Use the meta description as the card excerpt. It is already tuned to be a
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

/**
 * Related insights for the bottom of an article. Starts with the hand-picked
 * `relatedInsights` slugs, then augments up to `target` with the closest pages
 * (same category, ranked by shared tags, then any page sharing tags). More
 * quality internal links per page strengthens crawlability and topical signal.
 */
export async function relatedInsights(insight: Insight, target = 6): Promise<Insight[]> {
  const items = await allInsights();
  const bySlug = new Map(items.map((i) => [i.data.slug, i]));
  const picked: Insight[] = [];
  const seen = new Set<string>([insight.data.slug]);
  const take = (i?: Insight) => {
    if (i && !seen.has(i.data.slug)) {
      picked.push(i);
      seen.add(i.data.slug);
    }
  };

  // 1. Editorially chosen related pages, in order.
  for (const s of insight.data.relatedInsights) take(bySlug.get(s));

  const tagset = new Set(insight.data.tags);
  const bySharedTags = (pool: Insight[]) =>
    pool
      .filter((i) => !seen.has(i.data.slug))
      .map((i) => ({ i, score: i.data.tags.filter((t) => tagset.has(t)).length }))
      .sort((a, b) => b.score - a.score || a.i.data.title.localeCompare(b.i.data.title));

  // 2. Same category, ranked by shared tags.
  if (picked.length < target) {
    for (const { i } of bySharedTags(
      items.filter((i) => i.data.category === insight.data.category),
    )) {
      if (picked.length >= target) break;
      take(i);
    }
  }
  // 3. Anywhere on the site, as long as it shares a tag.
  if (picked.length < target) {
    for (const { i, score } of bySharedTags(items)) {
      if (picked.length >= target) break;
      if (score > 0) take(i);
    }
  }
  return picked.slice(0, target);
}

/** More pages in the same category, for a compact text-link list. */
export async function moreInCategory(
  insight: Insight,
  exclude: Iterable<string> = [],
  limit = 8,
): Promise<Insight[]> {
  const items = await allInsights();
  const skip = new Set<string>([insight.data.slug, ...exclude]);
  return items
    .filter((i) => i.data.category === insight.data.category && !skip.has(i.data.slug))
    .slice(0, limit);
}

/** Topic hubs an insight belongs to (share at least one tag). */
export function topicsForInsight(insight: Insight, limit = 4): Topic[] {
  const tags = new Set(insight.data.tags);
  return TOPICS.filter((t) => t.tags.some((tag) => tags.has(tag))).slice(0, limit);
}

/** All insights that belong to a topic hub (share at least one of its tags). */
export async function insightsForTopic(topic: Topic): Promise<Insight[]> {
  const items = await allInsights();
  const wanted = new Set(topic.tags);
  return items.filter((i) => i.data.tags.some((t) => wanted.has(t)));
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
