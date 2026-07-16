/**
 * Cross-cutting topic hubs.
 *
 * Categories organise the library by *area* (how men think, love and
 * attraction, …). Topics cut *across* categories to cluster every page about a
 * single theme — attachment, trust, commitment — regardless of which category
 * it lives in. Each topic becomes a hub page at /topics/<slug>/ that links to
 * every matching insight, which strengthens internal linking (Google reads
 * these clusters as topical authority) and gives readers a second way to browse.
 *
 * A topic matches an insight when they share at least one tag in `tags`. Only
 * specific, coherent themes are topics — broad tags like "emotions" or
 * "behavior" would just mirror the whole site and are deliberately excluded.
 */

export type TopicFocus = 'men' | 'women' | 'both';

export interface Topic {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line summary for cards, chips, and the topics index. */
  blurb: string;
  /** 2–3 short paragraphs of real, on-topic intro copy (keeps hubs non-thin). */
  intro: string[];
  /** An insight belongs to this topic if it carries any of these tags. */
  tags: string[];
  focus: TopicFocus;
}

export const TOPICS: Topic[] = [
  {
    slug: 'attachment-styles',
    title: 'Attachment Styles',
    metaTitle: 'Attachment Styles — How They Shape Love & Connection',
    metaDescription:
      'How secure, anxious, avoidant, and disorganized attachment shape the way we love, argue, and seek closeness — and how attachment can change over time.',
    blurb: 'How the bonds we form early shape the way we love, argue, and seek closeness as adults.',
    intro: [
      'Attachment theory is one of the most useful lenses in all of relationship psychology. The patterns we form early in life — broadly grouped as secure, anxious, avoidant, and disorganized — tend to shape how we pursue closeness, read our partners, and respond to conflict and distance as adults.',
      'These styles are tendencies, not fixed labels or diagnoses, and the overlap between people is large. Research on "earned security" shows that attachment can shift over time through safe relationships, self-awareness, and sometimes therapy. The pages below explore how each pattern shows up and what actually helps it move toward security.',
    ],
    tags: ['attachment'],
    focus: 'both',
  },
  {
    slug: 'commitment',
    title: 'Commitment',
    metaTitle: 'The Psychology of Commitment in Relationships',
    metaDescription:
      'What draws people toward lasting commitment, why some hesitate or fear it, and how men and women tend to think about it — grounded in relationship science.',
    blurb: 'What draws people toward lasting commitment, what makes them hesitate, and how it deepens.',
    intro: [
      'Commitment is less a single decision than a slow process, shaped by attachment, timing, shared values, and a felt sense of a future together. People differ in how quickly they move toward it and how openly they put it into words.',
      'These pages look at how men and women tend to think about commitment, why some people fear it, what makes someone ready for it, and what research suggests actually deepens a lasting bond rather than just prolonging one.',
    ],
    tags: ['commitment'],
    focus: 'both',
  },
  {
    slug: 'falling-in-love',
    title: 'Falling in Love',
    metaTitle: 'The Psychology of Falling in Love — Stages & Science',
    metaDescription:
      'How love actually develops: the stages of falling in love, what sparks attraction, how men and women differ on average, and where infatuation ends.',
    blurb: 'How love actually develops — the stages, the science, and what deepens early attraction.',
    intro: [
      'Falling in love follows recognisable patterns, from the arousal-driven rush of early passion to the slower growth of attachment and companionate love. The timeline is different for everyone, and the average differences between men and women are smaller than the clichés suggest.',
      'These pages trace how attraction sparks, how love develops and deepens, and how to tell the difference between infatuation, limerence, and something built to last.',
    ],
    tags: ['falling-in-love'],
    focus: 'both',
  },
  {
    slug: 'conflict-and-repair',
    title: 'Conflict & Repair',
    metaTitle: 'Conflict & Repair — The Psychology of Fighting Well',
    metaDescription:
      'Why couples fight, what actually predicts trouble, and how repair works. On conflict styles, flooding, the Four Horsemen, and communicating without damage.',
    blurb: 'Why couples fight, what actually predicts trouble, and how repair rebuilds connection.',
    intro: [
      "Conflict itself does not doom a relationship — decades of research find it is how couples handle disagreement that matters. Contempt, defensiveness, stonewalling, and harsh start-ups predict trouble; repair, softness, and staying engaged protect the bond.",
      'These pages cover conflict styles, physiological flooding, the difference between anger and contempt, and the concrete skills that turn a fight into a repair instead of a wound.',
    ],
    tags: ['conflict'],
    focus: 'both',
  },
  {
    slug: 'emotional-intimacy',
    title: 'Emotional Intimacy & Connection',
    metaTitle: 'Emotional Intimacy & Connection — The Psychology',
    metaDescription:
      'What builds real closeness: responsiveness, emotional safety, self-disclosure, and the small daily moments that deepen connection between partners.',
    blurb: 'What builds real closeness — safety, responsiveness, and the small moments that bond us.',
    intro: [
      'Emotional intimacy is the sense of being known, accepted, and responded to. Research on perceived partner responsiveness finds it is one of the strongest ingredients of a satisfying relationship — and it is built far more in small daily moments than in grand gestures.',
      'These pages explore how emotional safety, vulnerability, physical affection, and everyday bids for connection combine into the kind of closeness that lasts.',
    ],
    tags: ['connection', 'intimacy', 'emotional-safety'],
    focus: 'both',
  },
  {
    slug: 'trust',
    title: 'Trust',
    metaTitle: 'The Psychology of Trust in Relationships',
    metaDescription:
      'How trust is built and broken, why betrayal cuts so deep, and what it actually takes to rebuild it — consistency, accountability, responsiveness, and time.',
    blurb: 'How trust is built and broken — and what it really takes to rebuild it after a rupture.',
    intro: [
      'Trust is the willingness to be vulnerable with someone based on their predictability, dependability, and care. It is built slowly through consistency and small kept promises, and it can be broken quickly by betrayal or repeated small letdowns.',
      'These pages look at how trust forms, why betrayal is so painful, where "trust issues" come from, and what genuinely rebuilds trust after it has been damaged.',
    ],
    tags: ['trust'],
    focus: 'both',
  },
  {
    slug: 'vulnerability',
    title: 'Vulnerability',
    metaTitle: 'The Psychology of Vulnerability & Opening Up',
    metaDescription:
      'Why opening up feels risky but builds connection, why many men are taught to hide it, and how gradual, mutual disclosure deepens intimacy and trust.',
    blurb: 'Why opening up feels risky, and why it is the birthplace of real connection.',
    intro: [
      'Vulnerability — letting yourself be seen without a guarantee of how it will be received — is often mistaken for weakness. Research points the other way: gradual, mutual self-disclosure is one of the most reliable ways two people grow close.',
      'These pages explore why vulnerability feels so risky, how socialization teaches many men to hide it, and how to open up in a way that is paced, safe, and met with care.',
    ],
    tags: ['vulnerability'],
    focus: 'both',
  },
  {
    slug: 'self-worth-and-self-compassion',
    title: 'Self-Worth & Self-Compassion',
    metaTitle: 'Self-Worth & Self-Compassion — The Psychology',
    metaDescription:
      'Why self-compassion beats self-criticism for resilience and follow-through, how self-worth forms, and how to quiet a harsh inner critic — for men and women.',
    blurb: 'Why treating yourself kindly builds more resilience than self-criticism ever does.',
    intro: [
      "How we treat ourselves shapes almost everything else. Research finds self-compassion is more strongly linked to resilience and well-being than self-esteem — and, contrary to the fear, it raises follow-through rather than lowering standards, because it removes the harsh self-criticism that fuels avoidance.",
      'These pages look at where self-worth comes from, how the inner critic forms, and practical, evidence-based ways for both men and women to build a steadier, kinder relationship with themselves.',
    ],
    tags: ['self-worth', 'self-compassion'],
    focus: 'both',
  },
  {
    slug: 'boundaries',
    title: 'Boundaries',
    metaTitle: 'The Psychology of Healthy Boundaries',
    metaDescription:
      'What boundaries really are, why saying no can feel so hard, and how clear limits protect your energy and actually strengthen relationships rather than harm them.',
    blurb: 'What boundaries really are, and why clear limits strengthen relationships instead of straining them.',
    intro: [
      'Boundaries are the limits that protect your time, energy, and values — not walls that push people away. Setting them is a learnable skill that sits between over-accommodation and control, and it often improves relationships rather than threatening them.',
      'These pages cover why boundaries can feel so hard to set, how people-pleasing and guilt get in the way, and how to hold limits with warmth for both men and women.',
    ],
    tags: ['boundaries'],
    focus: 'both',
  },
  {
    slug: 'empathy',
    title: 'Empathy',
    metaTitle: 'The Psychology of Empathy & Understanding',
    metaDescription:
      'How empathy works, the difference between feeling with someone and feeling for them, and how understanding — not fixing — builds connection.',
    blurb: 'How understanding others really works — and where empathy tips into taking on too much.',
    intro: [
      'Empathy is the capacity to understand and share what another person feels. It comes in different forms — sensing an emotion, understanding it, and being moved to care — and it is a skill that can be strengthened at any age.',
      'These pages explore how empathy works, the difference between empathy and compassion, why listening to understand beats rushing to fix, and how to stay caring without absorbing everyone else’s distress.',
    ],
    tags: ['empathy'],
    focus: 'both',
  },
  {
    slug: 'identity',
    title: 'Identity',
    metaTitle: 'The Psychology of Identity — Self, Roles & Change',
    metaDescription:
      'How identity forms and shifts across life — through masculinity and femininity, work, parenthood, and aging — and how to stay yourself inside your relationships.',
    blurb: 'How who-we-are is shaped by roles, socialization, and change across a lifetime.',
    intro: [
      'Identity is the evolving sense of who we are — shaped by temperament, socialization, the roles we take on, and the stories we tell about ourselves. Masculinity, femininity, work, parenthood, and aging all reshape it over time.',
      'These pages look at how male and female identity are constructed, how a sense of self can be lost or reclaimed inside relationships and caregiving, and how identity keeps changing across a life.',
    ],
    tags: ['identity'],
    focus: 'both',
  },
  {
    slug: 'meaning-and-purpose',
    title: 'Meaning & Purpose',
    metaTitle: 'The Psychology of Meaning & Purpose',
    metaDescription:
      'What gives life meaning, how it differs from happiness, and why purpose, contribution, and close relationships predict a life that feels worth living.',
    blurb: 'What makes a life feel worth living — and how meaning differs from mere happiness.',
    intro: [
      'Meaning and happiness overlap but are not the same. Happiness tends to track having your needs met in the present; meaning grows from purpose, contribution, connection, and a sense that your life fits into something larger.',
      'These pages draw on well-being science and the longest-running studies of adult life to explore what actually makes an existence feel worthwhile — and why close relationships sit near the centre of it.',
    ],
    tags: ['meaning', 'purpose'],
    focus: 'both',
  },
  {
    slug: 'loneliness-and-belonging',
    title: 'Loneliness & Belonging',
    metaTitle: 'The Psychology of Loneliness & Belonging',
    metaDescription:
      'Why belonging is a core human need, why loneliness hurts and is rising — especially among men — and how connection and solitude differ from isolation.',
    blurb: 'Why belonging is a basic human need, and why loneliness is rising — especially for men.',
    intro: [
      'The need to belong is one of the most fundamental human motivations, and its absence registers in the body much like physical pain. Loneliness is not the same as being alone — chosen solitude can be restorative, while loneliness is the painful gap between the connection we have and the connection we want.',
      'These pages examine why belonging matters so much for health and mood, why loneliness has been rising — particularly among men — and what genuinely rebuilds connection.',
    ],
    tags: ['loneliness', 'belonging'],
    focus: 'both',
  },
];

export const TOPIC_BY_SLUG: Record<string, Topic> = Object.fromEntries(
  TOPICS.map((t) => [t.slug, t]),
);
