/**
 * The canonical category taxonomy.
 *
 * Each category becomes a top-level page (e.g. /how-men-think) and every
 * insight is assigned to exactly one `slug` here. The long-term 1,000-page
 * plan is encoded in `targetPages` so the structure documents its own roadmap.
 */

export type CategoryFocus = 'men' | 'women' | 'both';

export interface Category {
  slug: string;
  name: string;
  /** Short label for compact nav / cards. */
  shortName: string;
  focus: CategoryFocus;
  /** One honest paragraph describing what the category covers. */
  description: string;
  /** The single most important, plainly-stated research finding in this area. */
  keyFinding: string;
  /** Planned page count in the full 1,000-page build. */
  targetPages: number;
  faqs: { question: string; answer: string }[];
  /** Slugs of related categories for internal linking. */
  related: string[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'how-men-think',
    name: 'How Men Think',
    shortName: 'How Men Think',
    focus: 'men',
    description:
      'How men tend to process decisions, weigh risk, compartmentalize problems, and reason about relationships and the future. The focus is on documented cognitive and behavioral tendencies — not on the idea that any one man thinks a single fixed way.',
    keyFinding:
      'Most measured sex differences in cognition are small and heavily overlapping. Where patterns appear, they tend to reflect socialization, context, and individual temperament far more than any hard-wired "male brain."',
    targetPages: 70,
    faqs: [
      {
        question: 'Do men and women think in fundamentally different ways?',
        answer:
          'Not fundamentally. A large body of work, summarized in Janet Hyde\'s gender similarities hypothesis (2005), finds that on most cognitive and psychological measures men and women are far more alike than different. Real differences exist on a handful of measures, but they are usually small and the distributions overlap heavily.',
      },
      {
        question: 'Why do men sometimes seem to "compartmentalize" problems?',
        answer:
          'Compartmentalization is a coping style, not a male-only trait. It can be reinforced by socialization that rewards task-focus and discourages emotional disclosure, but plenty of men do not do it and plenty of women do.',
      },
    ],
    related: ['male-psychology', 'how-women-think', 'behavior-patterns'],
  },
  {
    slug: 'how-women-think',
    name: 'How Women Think',
    shortName: 'How Women Think',
    focus: 'women',
    description:
      'How women tend to approach decisions, social information, risk, and relationships. As with men, the emphasis is on patterns observed in research and the heavy individual variation around them — not on stereotypes about a single "female mind."',
    keyFinding:
      'On most cognitive measures, differences between women and men are small. Some of the more reliable findings — such as a modest average edge in certain verbal and social-cognition tasks — still describe overlapping distributions, not separate categories.',
    targetPages: 70,
    faqs: [
      {
        question: 'Are women really better at reading emotions?',
        answer:
          'On average, women score modestly higher on some tests of emotion recognition and empathy, but the gap is small and strongly shaped by motivation and context. Many men match or exceed the average woman on these tasks.',
      },
      {
        question: 'Do women overthink relationships more than men?',
        answer:
          'Rumination is somewhat more common among women on average, a pattern Susan Nolen-Hoeksema documented extensively, but it is a coping style influenced by stress and socialization — not evidence that women are less rational.',
      },
    ],
    related: ['female-psychology', 'how-men-think', 'emotions-and-feelings'],
  },
  {
    slug: 'what-men-want',
    name: 'What Men Want',
    shortName: 'What Men Want',
    focus: 'men',
    description:
      'What men commonly report needing and wanting in relationships — respect, partnership, physical and emotional closeness, and the sense of being genuinely needed — and how those needs are often expressed indirectly.',
    keyFinding:
      'Studies of relationship needs find men consistently rank emotional connection, appreciation, and feeling respected near the top — often higher than popular culture assumes. The stereotype that men mainly want sex understates how much they value being valued.',
    targetPages: 80,
    faqs: [
      {
        question: 'Do men only want sex?',
        answer:
          'No. Surveys of relationship satisfaction repeatedly show men rate emotional intimacy, companionship, and feeling appreciated as central. Physical closeness matters, but for most men it is intertwined with feeling wanted and accepted, not separate from it.',
      },
      {
        question: 'Why do men struggle to say what they want?',
        answer:
          'Many men are socialized to express needs through action rather than words, and to avoid appearing dependent. The result is that real needs often go unspoken rather than unfelt.',
      },
    ],
    related: ['male-psychology', 'what-women-want', 'happiness-and-fulfillment'],
  },
  {
    slug: 'what-women-want',
    name: 'What Women Want',
    shortName: 'What Women Want',
    focus: 'women',
    description:
      'What women commonly report needing in relationships — emotional safety, responsiveness, reliability, and being genuinely understood — and why these needs are about security far more than romance for its own sake.',
    keyFinding:
      'Across relationship research, perceived partner responsiveness — feeling understood, validated, and cared for — is one of the strongest predictors of women\'s relationship satisfaction and a core ingredient of intimacy for both sexes.',
    targetPages: 80,
    faqs: [
      {
        question: 'What do women want most in a relationship?',
        answer:
          'Research on intimacy (Reis and Shaver) points to perceived partner responsiveness: the sense that a partner understands, values, and supports who you really are. Reliability and emotional safety consistently rank above grand romantic gestures.',
      },
      {
        question: 'Why do women say "it\'s not about the gift"?',
        answer:
          'Because for many women the gift is a signal of attention and understanding, not the point itself. The underlying need is to feel known and prioritized, which a thoughtful small gesture can meet better than an expensive thoughtless one.',
      },
    ],
    related: ['female-psychology', 'what-men-want', 'relationships-and-communication'],
  },
  {
    slug: 'male-psychology',
    name: 'Male Psychology',
    shortName: 'Male Psychology',
    focus: 'men',
    description:
      'The broad study of men\'s emotional lives, identity, stress responses, friendships, and behavior. It covers how masculine socialization shapes — and sometimes constrains — how men experience and express what they feel.',
    keyFinding:
      'Research on "normative male alexithymia" (Ronald Levant) suggests many men are socialized away from naming emotions, not away from having them. The feelings are present; the practiced vocabulary often is not.',
    targetPages: 120,
    faqs: [
      {
        question: 'Are men less emotional than women?',
        answer:
          'No. Physiological studies find men are often equally or more reactive to emotional stress; they are simply more likely to mask or withdraw from it. Lower expression is not the same as lower feeling.',
      },
      {
        question: 'Why is male loneliness rising?',
        answer:
          'Many men report shrinking close friendships in adulthood and lean heavily on a single partner for emotional support. Researchers link this to norms that discourage vulnerability between men, which raises isolation risk after a breakup or loss.',
      },
    ],
    related: ['how-men-think', 'emotions-and-feelings', 'self-improvement-men'],
  },
  {
    slug: 'female-psychology',
    name: 'Female Psychology',
    shortName: 'Female Psychology',
    focus: 'women',
    description:
      'The broad study of women\'s emotional lives, identity, stress responses, social bonds, and behavior — including how socialization around relationships and caretaking shapes the way women process and express experience.',
    keyFinding:
      'Under stress, women on average show a stronger "tend-and-befriend" response (Shelley Taylor) — seeking social connection — alongside the fight-or-flight response shared with men. Connection-seeking is a documented coping strategy, not a weakness.',
    targetPages: 120,
    faqs: [
      {
        question: 'Why do women talk through problems instead of solving them?',
        answer:
          'Talking is often the coping strategy, not a request for solutions. Sharing distress activates social bonding and helps regulate emotion. Jumping to fix-it mode can feel dismissive precisely because the goal was connection.',
      },
      {
        question: 'Do hormones control women\'s emotions?',
        answer:
          'Hormones influence mood for both sexes, but the popular idea that they "control" women\'s emotions is not supported. Stress, sleep, context, and individual differences explain far more day-to-day variation than the menstrual cycle does.',
      },
    ],
    related: ['how-women-think', 'emotions-and-feelings', 'self-improvement-women'],
  },
  {
    slug: 'relationships-and-communication',
    name: 'Relationships and Communication',
    shortName: 'Relationships',
    focus: 'both',
    description:
      'How couples build, maintain, and sometimes damage connection — covering conflict styles, repair, listening, and the communication habits that research links to relationships that last.',
    keyFinding:
      'John Gottman\'s decades of observational work find that what predicts breakup is not the presence of conflict but how couples handle it — specifically the "Four Horsemen" of criticism, contempt, defensiveness, and stonewalling, with contempt the single strongest predictor of divorce.',
    targetPages: 100,
    faqs: [
      {
        question: 'What is the biggest predictor of divorce?',
        answer:
          'In Gottman\'s research, contempt — treating a partner with disgust or superiority — is the most corrosive and the strongest single predictor of divorce. Its absence matters more than the absence of disagreement.',
      },
      {
        question: 'Do men and women communicate that differently?',
        answer:
          'Less than the popular "Mars and Venus" framing suggests. Linguist Deborah Tannen described average tendencies (rapport-talk vs. report-talk), but meta-analyses find large overlap. Style differences between two individuals usually matter more than their sex.',
      },
    ],
    related: ['love-and-attraction', 'what-women-want', 'what-men-want'],
  },
  {
    slug: 'love-and-attraction',
    name: 'Love and Attraction',
    shortName: 'Love and Attraction',
    focus: 'both',
    description:
      'How attraction sparks, how love develops and deepens, and what actually predicts who we fall for. It covers passionate versus companionate love, attachment, and the gap between what people say they want and who they choose.',
    keyFinding:
      'Speed-dating research by Eastwick and Finkel found that people\'s stated mate preferences barely predict who they are actually attracted to in person. What we say we want and what moves us in the moment are often different things.',
    targetPages: 100,
    faqs: [
      {
        question: 'Do men or women fall in love faster?',
        answer:
          'Several studies, including the classic Boston Couples Study, find men tend to fall in love somewhat faster and say "I love you" first more often, while women are typically more deliberate early on. The popular image of women as the more romantic sex is only half right.',
      },
      {
        question: 'Is love just chemistry?',
        answer:
          'Early passionate love involves real neurochemical arousal, but lasting love depends far more on attachment, responsiveness, and shared investment. Chemistry opens the door; compatibility and care decide whether anyone stays.',
      },
    ],
    related: ['how-men-fall-in-love', 'dating-psychology', 'relationships-and-communication'],
  },
  {
    slug: 'happiness-and-fulfillment',
    name: 'Happiness and Fulfillment',
    shortName: 'Happiness',
    focus: 'both',
    description:
      'What actually makes people content over a lifetime — drawing on well-being science, self-determination theory, and the longest-running studies of adult development to separate what predicts fulfillment from what we assume does.',
    keyFinding:
      'The Harvard Study of Adult Development, tracking lives for over 80 years, found the strongest predictor of long-term health and happiness is not wealth or achievement but the quality of close relationships.',
    targetPages: 80,
    faqs: [
      {
        question: 'What makes people happiest long term?',
        answer:
          'Close, warm relationships are the most consistent predictor in long-running studies. Self-determination theory adds three needs that drive fulfillment for everyone: autonomy, competence, and relatedness.',
      },
      {
        question: 'Does happiness differ for men and women?',
        answer:
          'The core ingredients — connection, purpose, autonomy, competence — are shared. Some sources of happiness are shaped differently by social roles, but the underlying psychological needs are remarkably similar across sexes.',
      },
    ],
    related: ['self-improvement-men', 'self-improvement-women', 'what-men-want'],
  },
  {
    slug: 'self-improvement-men',
    name: 'Self Improvement for Men',
    shortName: 'Self Improvement (Men)',
    focus: 'men',
    description:
      'Evidence-based ways men can build a better life — strengthening friendships, emotional skills, physical health, and purpose — grounded in psychology rather than hustle-culture slogans.',
    keyFinding:
      'The changes with the strongest evidence behind them are unglamorous: investing in close friendships, regular exercise, sleep, and learning to name and share emotions. These predict well-being far more reliably than status or income beyond a comfortable baseline.',
    targetPages: 80,
    faqs: [
      {
        question: 'What actually improves men\'s lives the most?',
        answer:
          'Strong social connection, physical activity, adequate sleep, and a sense of purpose. Longitudinal research consistently ranks the quality of relationships above career success as a predictor of a good life.',
      },
      {
        question: 'Is it weak for men to seek therapy or support?',
        answer:
          'No — and the data argues the opposite. Men who can ask for help and express emotion tend to have better mental and physical health. Avoidant coping, not vulnerability, is the documented risk factor.',
      },
    ],
    related: ['male-psychology', 'happiness-and-fulfillment', 'self-improvement-women'],
  },
  {
    slug: 'self-improvement-women',
    name: 'Self Improvement for Women',
    shortName: 'Self Improvement (Women)',
    focus: 'women',
    description:
      'Evidence-based ways women can build a fuller life — including self-compassion, boundaries, managing rumination, and protecting autonomy alongside connection — grounded in psychological research.',
    keyFinding:
      'Kristin Neff\'s research finds self-compassion is more strongly linked to resilience and well-being than self-esteem, and it does not lower standards — it raises follow-through by removing the harsh self-criticism that fuels avoidance.',
    targetPages: 80,
    faqs: [
      {
        question: 'What helps women\'s well-being the most?',
        answer:
          'Self-compassion, strong relationships, autonomy over one\'s own life, and skills for interrupting rumination all have solid evidence. Self-criticism, by contrast, predicts anxiety and depression rather than achievement.',
      },
      {
        question: 'How can women stop overthinking?',
        answer:
          'Nolen-Hoeksema\'s work suggests rumination responds to action and distraction — brief problem-solving, movement, connection, or scheduled "worry time" — far better than trying to think your way to calm.',
      },
    ],
    related: ['female-psychology', 'happiness-and-fulfillment', 'self-improvement-men'],
  },
  {
    slug: 'emotions-and-feelings',
    name: 'Emotions and Feelings',
    shortName: 'Emotions',
    focus: 'both',
    description:
      'How people experience, regulate, and express emotion — including the difference between feeling and showing emotion, why some people shut down, and how emotional skills can be learned at any age.',
    keyFinding:
      'Emotion-regulation research shows the gap between men and women is mostly in expression and strategy, not in how intensely emotions are felt. Suppression — common in those taught to "stay strong" — reliably backfires, raising stress rather than lowering it.',
    targetPages: 60,
    faqs: [
      {
        question: 'Why do some people shut down emotionally?',
        answer:
          'Shutting down (stonewalling) often follows physiological "flooding" — a stress response that overwhelms the ability to stay engaged. Gottman found men flood more easily in conflict, which makes withdrawal a self-protective reflex rather than indifference.',
      },
      {
        question: 'Can emotional intelligence be learned?',
        answer:
          'Yes. Naming emotions, pausing before reacting, and practicing expression are skills that improve with use at any age. They are not fixed traits you are simply born with or without.',
      },
    ],
    related: ['male-psychology', 'female-psychology', 'relationships-and-communication'],
  },
  {
    slug: 'behavior-patterns',
    name: 'Behavior Patterns',
    shortName: 'Behavior Patterns',
    focus: 'both',
    description:
      'The recurring behaviors that show up in relationships — pursuing and withdrawing, testing and reassurance-seeking, conflict cycles — and the psychological mechanisms, especially attachment, that drive them.',
    keyFinding:
      'Many relationship behaviors that look puzzling make sense through attachment theory: anxious and avoidant strategies, learned early, shape how people seek closeness or distance under stress — and the two can lock into a self-reinforcing pursue-withdraw cycle.',
    targetPages: 60,
    faqs: [
      {
        question: 'What is the pursue-withdraw cycle?',
        answer:
          'It is a common pattern where one partner seeks closeness or resolution (pursues) while the other needs space (withdraws), and each reaction intensifies the other. Christensen\'s research links this demand-withdraw loop to lower satisfaction over time.',
      },
      {
        question: 'Are these patterns about gender?',
        answer:
          'Only loosely. Women slightly more often occupy the "demand" role and men the "withdraw" role on average, but the pattern is driven by the issue, power, and attachment styles — and the roles frequently reverse.',
      },
    ],
    related: ['relationships-and-communication', 'emotions-and-feelings', 'love-and-attraction'],
  },
  {
    slug: 'dating-psychology',
    name: 'Dating Psychology',
    shortName: 'Dating Psychology',
    focus: 'both',
    description:
      'The psychology of meeting, attracting, and choosing partners — what genuinely drives attraction, how first impressions form, and how to read early behavior honestly rather than through manipulation tactics.',
    keyFinding:
      'Research on attraction points to a few reliable drivers — proximity, familiarity, similarity, and reciprocal liking (we tend to like people who like us). These ordinary factors predict real-world attraction better than any "technique."',
    targetPages: 60,
    faqs: [
      {
        question: 'What makes someone attractive beyond looks?',
        answer:
          'Reciprocal liking, warmth, perceived similarity, and signals of kindness and competence all strongly shape attraction. Across Buss\'s cross-cultural work, kindness and intelligence rank near the top of what both sexes look for.',
      },
      {
        question: 'Do dating "techniques" and games work?',
        answer:
          'Manipulation tactics tend to undermine the reciprocal liking and trust that real attraction is built on. The evidence favors genuine interest, reliability, and emotional availability over scripted games.',
      },
    ],
    related: ['love-and-attraction', 'behavior-patterns', 'relationships-and-communication'],
  },
];

export const CATEGORY_BY_SLUG: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c]),
);

export function categoryName(slug: string): string {
  return CATEGORY_BY_SLUG[slug]?.name ?? slug;
}
