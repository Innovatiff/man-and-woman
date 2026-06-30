import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './data/categories';

const categorySlugs = CATEGORIES.map((c) => c.slug) as [string, ...string[]];

/**
 * The `insights` collection powers every individual insight page.
 *
 * Each insight is a single JSON file in src/content/insights/. To add a new
 * page, drop in a new JSON file matching this schema — no template edits, no
 * route changes. Long-form fields are arrays of paragraph strings so the prose
 * stays readable in source and renders as clean, separated paragraphs.
 *
 * This is the one place the content shape is enforced; the build fails loudly
 * if any of the 25 (or eventually 1,000) entries drift from the contract.
 */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(categorySlugs),
    focusGender: z.enum(['men', 'women', 'both']),
    metaTitle: z.string(),
    metaDescription: z.string().max(165),

    /** The core finding, stated plainly. Shown first, before any preamble. */
    coreFinding: z.string(),

    whatResearchShows: z.array(z.string()).min(1),
    whyItHappens: z.array(z.string()).min(1),
    realLifeExamples: z.array(z.string()).min(1),
    whatPeopleGetWrong: z.array(z.string()).min(1),
    relationshipImplications: z.array(z.string()).min(1),
    theNuance: z.array(z.string()).min(1),

    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .min(4),

    researchSources: z.array(z.string()).min(2),
    relatedInsights: z.array(z.string()).default([]),

    /** Tags drive the Explorer scoring and cross-topic linking. */
    tags: z.array(z.string()).default([]),

    /** Whether to surface on the homepage "Featured insights" grid. */
    featured: z.boolean().default(false),

    lastReviewed: z.string(),
  }),
});

export const collections = { insights };
