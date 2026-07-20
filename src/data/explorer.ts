/**
 * Data model for the homepage "Browse by focus" grid and the interactive
 * Psychology Explorer tool (/explore).
 *
 * The Explorer never stores answers and requires no account. All scoring runs
 * client-side against the insight index that the page injects as JSON. Each
 * answer contributes weighted tags; insights are ranked by tag overlap plus a
 * focus-gender match. The wording here is deliberately warm and non-judgmental.
 */

export interface FocusEntry {
  id: string;
  label: string;
  blurb: string;
  href: string;
  /** Tags this focus emphasizes when used as an Explorer seed. */
  tags: string[];
  /** Preferred focus gender for ranking. */
  focus: 'men' | 'women' | 'both';
}

/** Homepage "Browse by focus" cards (also Section 1 of the Explorer). */
export const FOCUSES: FocusEntry[] = [
  {
    id: 'understand-men',
    label: 'I want to understand men better',
    blurb: 'How men think, feel, love, and what they rarely say out loud.',
    href: '/male-psychology',
    tags: ['how-they-think', 'what-they-want', 'emotions', 'falling-in-love', 'behavior'],
    focus: 'men',
  },
  {
    id: 'understand-women',
    label: 'I want to understand women better',
    blurb: 'How women think, feel, love, and what makes them feel secure.',
    href: '/female-psychology',
    tags: ['how-they-think', 'what-they-want', 'emotions', 'falling-in-love', 'behavior'],
    focus: 'women',
  },
  {
    id: 'understand-relationships',
    label: 'I want to understand relationships',
    blurb: 'What makes connection last, and why couples drift or thrive.',
    href: '/relationships-and-communication',
    tags: ['communication', 'conflict', 'what-they-want', 'commitment'],
    focus: 'both',
  },
  {
    id: 'understand-myself',
    label: 'I want to understand myself',
    blurb: 'Your own patterns in how you connect, react, and relate.',
    href: '/emotions-and-feelings',
    tags: ['emotions', 'behavior', 'self-improvement', 'how-they-think'],
    focus: 'both',
  },
  {
    id: 'improve',
    label: 'I want to improve as a person',
    blurb: 'Evidence-based changes that actually move the needle on a good life.',
    href: '/self-improvement-men',
    tags: ['self-improvement', 'happiness', 'emotions'],
    focus: 'both',
  },
  {
    id: 'love-attraction',
    label: 'I want to understand love and attraction',
    blurb: 'How attraction really works and how love develops over time.',
    href: '/love-and-attraction',
    tags: ['falling-in-love', 'attraction', 'commitment'],
    focus: 'both',
  },
];

/** A single Explorer question step. */
export interface ExplorerStep {
  id: string;
  title: string;
  helper: string;
  /** Choosing one option per step (single-select). */
  options: ExplorerOption[];
}

export interface ExplorerOption {
  id: string;
  label: string;
  /** Tags this answer contributes to scoring. */
  tags: string[];
  /** Optional focus-gender nudge. */
  focus?: 'men' | 'women' | 'both';
}

export const EXPLORER_STEPS: ExplorerStep[] = [
  {
    id: 'focus',
    title: 'What are you here to understand?',
    helper: 'There are no wrong answers here: pick what fits you right now.',
    options: [
      { id: 'men', label: 'I want to understand men better', tags: ['how-they-think', 'what-they-want'], focus: 'men' },
      { id: 'women', label: 'I want to understand women better', tags: ['how-they-think', 'what-they-want'], focus: 'women' },
      { id: 'relationship', label: 'I want to understand my relationship', tags: ['communication', 'conflict', 'commitment'], focus: 'both' },
      { id: 'self-man', label: 'I want to understand myself as a man', tags: ['self-improvement', 'emotions', 'behavior'], focus: 'men' },
      { id: 'self-woman', label: 'I want to understand myself as a woman', tags: ['self-improvement', 'emotions', 'behavior'], focus: 'women' },
      { id: 'attraction', label: 'I want to understand attraction and love', tags: ['attraction', 'falling-in-love'], focus: 'both' },
    ],
  },
  {
    id: 'interest',
    title: 'What specifically interests you?',
    helper: 'This helps us point you to the most relevant research first.',
    options: [
      { id: 'think', label: 'How they think and make decisions', tags: ['how-they-think'] },
      { id: 'want', label: 'What they want in relationships', tags: ['what-they-want'] },
      { id: 'love', label: 'How they experience love and attraction', tags: ['falling-in-love', 'attraction'] },
      { id: 'happy', label: 'What makes them happy and fulfilled', tags: ['happiness'] },
      { id: 'emotions', label: 'How they handle emotions', tags: ['emotions'] },
      { id: 'communicate', label: 'How they communicate', tags: ['communication'] },
      { id: 'behavior', label: 'What drives their behavior', tags: ['behavior'] },
      { id: 'conflict', label: 'How they handle conflict', tags: ['conflict', 'communication'] },
      { id: 'attractive', label: 'What they find attractive', tags: ['attraction'] },
      { id: 'fall', label: 'How they fall in love', tags: ['falling-in-love'] },
    ],
  },
  {
    id: 'situation',
    title: 'Where are you right now?',
    helper: 'Whatever your situation, you are welcome here. This stays private: nothing is stored.',
    options: [
      { id: 'single', label: 'Single and want to understand the other gender', tags: ['attraction', 'what-they-want'] },
      { id: 'partnered', label: 'In a relationship and want to understand my partner', tags: ['communication', 'what-they-want', 'commitment'] },
      { id: 'breakup', label: 'Going through a breakup or a hard time', tags: ['breakups', 'emotions'] },
      { id: 'self', label: 'Mainly focused on improving myself', tags: ['self-improvement', 'happiness'] },
      { id: 'curious', label: 'Just curious about psychology', tags: ['how-they-think', 'behavior'] },
      { id: 'specific', label: 'Trying to understand a specific person in my life', tags: ['behavior', 'emotions'] },
    ],
  },
  {
    id: 'priority',
    title: 'What matters most to you?',
    helper: 'Last one. This shapes the order of your reading path.',
    options: [
      { id: 'behavior', label: 'Understanding behavior I have witnessed', tags: ['behavior', 'emotions'] },
      { id: 'improve-rel', label: 'Improving my relationship', tags: ['communication', 'conflict', 'commitment'] },
      { id: 'attract', label: 'Attracting the right person', tags: ['attraction', 'falling-in-love'] },
      { id: 'self', label: 'Understanding myself better', tags: ['self-improvement', 'emotions'] },
      { id: 'general', label: 'General knowledge and curiosity', tags: ['how-they-think', 'happiness'] },
      { id: 'communication', label: 'Improving communication with someone', tags: ['communication'] },
    ],
  },
];
