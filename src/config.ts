/**
 * Global site configuration for Men Women Psychology.
 *
 * Values that may change between environments (analytics IDs, the AdSense
 * publisher ID, the canonical URL) are read from environment variables so the
 * codebase stays free of hard-coded secrets and so monetization/analytics can
 * be switched on without touching source.
 */

export const SITE = {
  name: 'Men Women Psychology',
  tagline: 'Understand men. Understand women. Understand yourself.',
  description:
    'Real psychology, honest research, and practical insight into how men and women think, feel, love, and live, without stereotypes and without agenda.',
  url: import.meta.env.SITE_URL || 'https://menwomenpsychology.com',
  locale: 'en',
  // Used for Open Graph / structured data.
  author: 'Daniel Hernandez',
  email: 'hello@menwomenpsychology.com',
  founded: '2026',
} as const;

/**
 * The site's founder and named editor. Every insight is published under his
 * name ("Created by Daniel Hernandez"), and he is responsible for the standards
 * the site is held to. This is the single source of truth for the byline,
 * article cards, the About page, and structured data, so they never drift apart.
 */
export const AUTHOR = {
  name: 'Daniel Hernandez',
  role: 'Founder and editor',
} as const;

/**
 * Primary navigation shown in the header.
 *
 * Items may be a direct link ({ label, href }) or a dropdown group
 * ({ label, children: [...] }). The three topic areas are grouped under a
 * single "Topics" dropdown to keep the top bar uncluttered.
 */
export interface NavLink {
  label: string;
  href: string;
}
export interface NavGroup {
  label: string;
  children: NavLink[];
}
export type NavItem = NavLink | NavGroup;

export const NAV_LINKS: NavItem[] = [
  {
    label: 'Men',
    children: [
      { label: 'Male Psychology', href: '/male-psychology' },
      { label: 'How Men Think', href: '/how-men-think' },
      { label: 'What Men Want', href: '/what-men-want' },
      { label: 'Self Improvement for Men', href: '/self-improvement-men' },
    ],
  },
  {
    label: 'Women',
    children: [
      { label: 'Female Psychology', href: '/female-psychology' },
      { label: 'How Women Think', href: '/how-women-think' },
      { label: 'What Women Want', href: '/what-women-want' },
      { label: 'Self Improvement for Women', href: '/self-improvement-women' },
    ],
  },
  {
    label: 'Relationships',
    children: [
      { label: 'Love & Attraction', href: '/love-and-attraction' },
      { label: 'Relationships & Communication', href: '/relationships-and-communication' },
      { label: 'Dating Psychology', href: '/dating-psychology' },
      { label: 'Happiness & Fulfillment', href: '/happiness-and-fulfillment' },
    ],
  },
  { label: 'Topics', href: '/topics' },
  { label: 'Quizzes', href: '/quizzes' },
];

/**
 * AdSense configuration.
 *
 * Ads are OFF until two conditions are met:
 *   1. PUBLIC_ADSENSE_CLIENT is set (e.g. "ca-pub-0000000000000000")
 *   2. PUBLIC_ADS_ENABLED is the string "true"
 *
 * This guarantees the site never ships fake or empty ad units before approval,
 * while keeping every layout zone wired up so ads can go live with a config
 * change and zero template edits.
 */
export const ADS = {
  client: import.meta.env.PUBLIC_ADSENSE_CLIENT || '',
  enabled:
    (import.meta.env.PUBLIC_ADS_ENABLED || '') === 'true' &&
    !!import.meta.env.PUBLIC_ADSENSE_CLIENT,
} as const;

/**
 * Firebase / Google Analytics configuration.
 *
 * Analytics is OFF unless PUBLIC_ANALYTICS_ENABLED === "true". The default
 * config below is a public web config (these keys are not secrets; they
 * identify the project to Google's client SDK and are safe to ship), but it
 * stays inert until explicitly enabled so local builds and previews collect
 * nothing. All collection is disclosed in the privacy policy.
 */
export const FIREBASE = {
  enabled: (import.meta.env.PUBLIC_ANALYTICS_ENABLED || '') === 'true',
  config: {
    apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY || 'AIzaSyBXa5146Mi9bcvGq3FEp-qBdVvvfTC6RSw',
    authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN || 'man-woman-cae9a.firebaseapp.com',
    projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID || 'man-woman-cae9a',
    storageBucket:
      import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET || 'man-woman-cae9a.firebasestorage.app',
    messagingSenderId: import.meta.env.PUBLIC_FIREBASE_SENDER_ID || '408440393941',
    appId:
      import.meta.env.PUBLIC_FIREBASE_APP_ID ||
      '1:408440393941:web:11c7c9deeace89c06b525c',
    measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-8SDZKYLXMJ',
  },
} as const;

/**
 * The disclaimer text reused across the site. Single source of truth so legal
 * language stays identical everywhere it appears.
 */
export const DISCLAIMER =
  'Men Women Psychology presents psychology research, behavioral science findings, and documented behavioral patterns for educational purposes. All content represents general tendencies observed in research, not universal rules that apply to every individual. This is not therapy, clinical advice, or relationship counseling. Individual variation is always significant.';
