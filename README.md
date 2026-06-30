# Men Women Psychology

**Understand men. Understand women. Understand yourself.**

A research-driven, psychologically intelligent reference that helps people genuinely understand
men, women, and human relationships through real science, honest research, and practical insight —
without stereotypes and without agenda.

This is **one website with many pages**, built to scale from the first 25 insight pages to a planned
1,000 evergreen psychology pages, all generated from a single content system.

---

## Tech stack

- **[Astro](https://astro.build)** — static site generation, excellent SEO, content collections.
- **Content collections** — every insight page is a JSON file in `src/content/insights/`, validated
  against a Zod schema in `src/content.config.ts`.
- **Zero-runtime by default** — ships static HTML/CSS; the only client JS is the Psychology Explorer
  and the mobile nav toggle.
- Self-hosted variable fonts (Fraunces for display, Inter for body) for speed and privacy.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

Copy `.env.example` to `.env` to configure the canonical URL, AdSense, and analytics. Everything has
safe defaults — the site builds with no configuration, and **ads and analytics are OFF until you turn
them on**.

## Project structure

```
src/
  config.ts                 Global site config (nav, ads, analytics, disclaimer)
  content.config.ts         Zod schema for the insights collection
  content/insights/*.json   One JSON file per insight page (the content system)
  data/
    categories.ts           The 14-category taxonomy + 1,000-page roadmap
    explorer.ts             Explorer questions + "browse by focus" data
  lib/insights.ts           Helpers to query insights
  layouts/                  BaseLayout, TextPage
  components/               Header, Footer, CoreFinding, InsightCard, AdSlot, Faq, ...
  pages/
    index.astro             Homepage
    explore.astro           Psychology Explorer tool
    [category].astro        Category page template (14 pages)
    insights/[slug].astro   Individual insight page template
    about/contact/privacy-policy/terms/disclaimer/research-methodology/data-sources
public/
  robots.txt  ads.txt  favicon.svg  og-default.svg
```

## Adding a new insight page

Drop a new JSON file into `src/content/insights/` matching the schema in `src/content.config.ts`.
No template edits, no route changes — the page, its breadcrumbs, FAQ schema, sitemap entry, and
Explorer scoring are all generated automatically. The build fails loudly if any field is missing or
malformed.

Long-form fields (`whatResearchShows`, `whyItHappens`, etc.) are **arrays of paragraph strings**.

## Editorial standards

- **Patterns, not rules.** Always hedged: "research suggests", "on average", "tends to".
- **Real research only.** Every page cites genuine, established psychology. See
  `/research-methodology` and `/data-sources`.
- **Equal depth and respect** for men and women. No stereotyping, no gender-war framing, no
  manipulation tactics.

## Monetization & compliance

The site is built AdSense-ready but ships **policy-safe**: ad slots render nothing until a publisher
ID is set and ads are explicitly enabled, ads never appear inside the Explorer tool, and there are no
fake ad units. `public/ads.txt` is ready to be filled in after approval.

## License

Content © Men Women Psychology. Cited research belongs to its respective authors and publishers.
