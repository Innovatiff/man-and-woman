#!/usr/bin/env node
/**
 * Content QA for Men Women Psychology insight pages.
 * Validates things the Zod schema can't: cross-link integrity, duplicate
 * titles/slugs, meta lengths, banned absolutist phrasing, and category coverage.
 *
 * Usage: node scripts/qa-content.mjs
 * Exits non-zero if any error-level issue is found.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'src/content/insights');

const CATEGORY_SLUGS = [
  'how-men-think', 'how-women-think', 'what-men-want', 'what-women-want',
  'male-psychology', 'female-psychology', 'relationships-and-communication',
  'love-and-attraction', 'happiness-and-fulfillment', 'self-improvement-men',
  'self-improvement-women', 'emotions-and-feelings', 'behavior-patterns',
  'dating-psychology',
];

// Absolutist phrases that violate the editorial rules (case-insensitive, word-ish).
// Target genuine absolutism. Phrases like "not a script that every man follows"
// are anti-stereotyping and intentionally allowed, so we match the verb forms
// that assert a universal rule rather than the bare "every man".
const BANNED = [
  /\ball men are\b/i, /\ball women are\b/i,
  /\bevery man (is|wants|does|thinks|feels|needs|has)\b/i,
  /\bevery woman (is|wants|does|thinks|feels|needs|has)\b/i,
  /\bmen always\b/i, /\bwomen always\b/i,
  /\bmen never\b/i, /\bwomen never\b/i,
  /\bscience proves\b/i, /\bproven fact\b/i,
];

const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
const insights = [];
const errors = [];
const warnings = [];

for (const f of files) {
  let data;
  try {
    data = JSON.parse(readFileSync(join(dir, f), 'utf8'));
  } catch (e) {
    errors.push(`${f}: invalid JSON: ${e.message}`);
    continue;
  }
  insights.push({ file: f, data });
}

const slugs = new Set(insights.map((i) => i.data.slug));
const titles = new Map();
const categoriesSeen = new Set();

for (const { file, data } of insights) {
  const id = file.replace('.json', '');
  if (data.slug !== id) errors.push(`${file}: slug "${data.slug}" != filename "${id}"`);
  if (!CATEGORY_SLUGS.includes(data.category)) errors.push(`${file}: unknown category "${data.category}"`);
  categoriesSeen.add(data.category);
  if (!['men', 'women', 'both'].includes(data.focusGender)) errors.push(`${file}: bad focusGender`);

  if ((data.metaDescription || '').length > 165) errors.push(`${file}: metaDescription ${data.metaDescription.length} > 165`);
  if ((data.metaDescription || '').length < 80) warnings.push(`${file}: metaDescription short (${data.metaDescription.length})`);

  if (titles.has(data.title)) errors.push(`${file}: duplicate title with ${titles.get(data.title)}`);
  else titles.set(data.title, file);

  if (!Array.isArray(data.faqs) || data.faqs.length < 5) warnings.push(`${file}: only ${data.faqs?.length ?? 0} faqs (want 5-7)`);
  if (!Array.isArray(data.researchSources) || data.researchSources.length < 3) warnings.push(`${file}: < 3 sources`);

  for (const rel of data.relatedInsights || []) {
    if (!slugs.has(rel)) errors.push(`${file}: relatedInsights -> "${rel}" does not exist`);
    if (rel === data.slug) warnings.push(`${file}: links to itself`);
  }

  // banned phrasing scan across all text fields
  const textFields = [
    data.coreFinding,
    ...(data.whatResearchShows || []), ...(data.whyItHappens || []),
    ...(data.realLifeExamples || []), ...(data.whatPeopleGetWrong || []),
    ...(data.relationshipImplications || []), ...(data.theNuance || []),
    ...(data.faqs || []).flatMap((q) => [q.question, q.answer]),
  ].join('\n');
  for (const re of BANNED) {
    if (re.test(textFields)) warnings.push(`${file}: possible absolutist phrasing matching ${re}`);
  }
}

const missingCats = CATEGORY_SLUGS.filter((c) => !categoriesSeen.has(c));

console.log(`\nScanned ${insights.length} insight files.`);
console.log(`Categories with at least one insight: ${categoriesSeen.size}/${CATEGORY_SLUGS.length}`);
if (missingCats.length) console.log(`  (no insights yet in: ${missingCats.join(', ')})`);

if (warnings.length) {
  console.log(`\n⚠️  ${warnings.length} warning(s):`);
  for (const w of warnings) console.log('  - ' + w);
}
if (errors.length) {
  console.log(`\n❌ ${errors.length} error(s):`);
  for (const e of errors) console.log('  - ' + e);
  process.exit(1);
}
console.log('\n✅ No blocking errors.\n');
