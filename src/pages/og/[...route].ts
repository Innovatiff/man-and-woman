import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';
import { CATEGORIES } from '../../data/categories';
import { TOPICS } from '../../data/topics';
import { SITE } from '../../config';

/**
 * Build-time social share images.
 *
 * Generates a branded 1200x630 PNG per content page (insights, categories,
 * topics, plus the homepage) at /og/<key>.png. PNG matters — most social
 * platforms will not render an SVG OG image, so shared links previously showed
 * no card at all. Images are generated into dist/ at build (gitignored), so they
 * cost nothing in the repo and always reflect current titles.
 *
 * Fonts are vendored locally (src/assets/og-fonts) because outbound font fetches
 * are blocked in the build environment; this keeps generation fully offline and
 * reproducible on any deploy machine.
 */
const insights = await getCollection('insights');

const pages: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Understand men. Understand women. Understand yourself.',
    description: 'Men Women Psychology · menwomenpsychology.com',
  },
};

for (const i of insights) {
  pages[`insights/${i.data.slug}`] = {
    title: i.data.title,
    description: `Men Women Psychology · menwomenpsychology.com`,
  };
}
for (const c of CATEGORIES) {
  pages[c.slug] = {
    title: c.name,
    description: `Men Women Psychology · menwomenpsychology.com`,
  };
}
for (const t of TOPICS) {
  pages[`topics/${t.slug}`] = {
    title: t.title,
    description: `Men Women Psychology · menwomenpsychology.com`,
  };
}

// Quiz landing cards.
pages['quizzes/attachment-style'] = {
  title: "What's Your Attachment Style?",
  description: 'A free, research-based quiz · Men Women Psychology',
};
pages['quizzes'] = {
  title: 'Psychology Quizzes',
  description: 'Research-based self-reflection · Men Women Psychology',
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    fonts: [
      './src/assets/og-fonts/Lora-Bold.ttf',
      './src/assets/og-fonts/WorkSans-Regular.ttf',
    ],
    bgGradient: [
      [255, 255, 255],
      [254, 242, 242],
    ],
    border: { color: [220, 38, 38], width: 24, side: 'inline-start' },
    padding: 72,
    font: {
      title: {
        families: ['Lora'],
        color: [41, 37, 36],
        size: 64,
        weight: 'Bold',
        lineHeight: 1.15,
      },
      description: {
        families: ['Work Sans'],
        color: [220, 38, 38],
        size: 28,
        weight: 'Normal',
        lineHeight: 1.4,
      },
    },
  }),
});
