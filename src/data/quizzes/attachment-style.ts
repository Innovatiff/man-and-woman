/**
 * Attachment-style quiz.
 *
 * Modelled on how attachment is actually measured: the two dimensions of the
 * Experiences in Close Relationships tradition (Brennan, Clark & Shaver):
 * attachment ANXIETY (fear of abandonment, need for reassurance) and attachment
 * AVOIDANCE (discomfort with closeness and depending on others). The four styles
 * are the quadrants of those two axes. This is an educational self-reflection
 * tool, not a clinical diagnosis, and attachment can shift over time.
 */

export type Dimension = 'anxiety' | 'avoidance';
export type StyleId = 'secure' | 'anxious' | 'avoidant' | 'fearful';

export interface QuizQuestion {
  id: string;
  text: string;
  dimension: Dimension;
  /** If true, agreement indicates LOWER of the dimension (reverse-scored). */
  reverse?: boolean;
}

export interface ScalePoint {
  value: number;
  label: string;
}

export interface QuizResult {
  id: StyleId;
  name: string;
  tagline: string;
  /** e.g. "Higher anxiety · lower avoidance" */
  axes: string;
  description: string[];
  strengths: string[];
  growth: string[];
  links: { label: string; href: string }[];
}

export const SCALE: ScalePoint[] = [
  { value: 1, label: 'Strongly disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly agree' },
];

/** 16 items, balanced across the two dimensions, with several reverse-keyed. */
export const QUESTIONS: QuizQuestion[] = [
  { id: 'a1', dimension: 'anxiety', text: 'I often worry that a partner will stop caring about me.' },
  { id: 'v1', dimension: 'avoidance', text: 'I find it hard to fully depend on a romantic partner.' },
  { id: 'a2', dimension: 'anxiety', text: 'I need a lot of reassurance that I am loved.' },
  { id: 'v2', dimension: 'avoidance', text: 'I prefer to keep some emotional distance, even when I am close to someone.' },
  { id: 'a3', dimension: 'anxiety', text: 'When someone I care about is distant, I quickly assume the worst.' },
  { id: 'v3', dimension: 'avoidance', text: 'I find it difficult to open up about my deeper feelings.' },
  { id: 'a4', dimension: 'anxiety', text: 'My mood rises and falls a lot with how a relationship is going.' },
  { id: 'v4', dimension: 'avoidance', text: 'When things get emotionally intense, I tend to pull back.' },
  { id: 'a5', dimension: 'anxiety', reverse: true, text: 'I rarely worry about being abandoned or left.' },
  { id: 'v5', dimension: 'avoidance', reverse: true, text: 'I feel comfortable relying on a partner for support.' },
  { id: 'a6', dimension: 'anxiety', text: 'I tend to overthink small changes in a partner’s tone or messages.' },
  { id: 'v6', dimension: 'avoidance', text: 'I value my independence more than being very close.' },
  { id: 'a7', dimension: 'anxiety', text: 'I get very unsettled when a partner wants time apart.' },
  { id: 'v7', dimension: 'avoidance', reverse: true, text: 'It feels natural to share my inner world with someone I trust.' },
  { id: 'a8', dimension: 'anxiety', reverse: true, text: 'I can stay fairly calm and secure when a partner is unavailable for a while.' },
  { id: 'v8', dimension: 'avoidance', text: 'I often feel that partners want more closeness than I am comfortable with.' },
];

export const RESULTS: Record<StyleId, QuizResult> = {
  secure: {
    id: 'secure',
    name: 'Secure',
    tagline: 'Comfortable with closeness and with independence.',
    axes: 'Lower anxiety · lower avoidance',
    description: [
      'You tend to experience closeness as safe and dependable. You can rely on others and let others rely on you, express needs fairly directly, and handle conflict or time apart without it feeling like a threat to the whole relationship.',
      'Around half of people land roughly here. Security is not about being perfect or never anxious. It is a baseline sense that connection is trustworthy, and it is also something people can grow toward over time.',
    ],
    strengths: [
      'Comfortable both depending on a partner and being depended on',
      'Tends to communicate needs directly rather than through hints or tests',
      'Recovers from conflict without long shutdowns or spirals',
    ],
    growth: [
      'Even secure people wobble under stress: keep naming needs out loud',
      'Stay curious about partners whose style differs from yours',
    ],
    links: [
      { label: 'The psychology of secure love', href: '/insights/the-psychology-of-secure-love/' },
      { label: 'Understanding attachment styles', href: '/insights/understanding-attachment-styles/' },
      { label: 'What makes relationships last', href: '/insights/what-makes-relationships-last/' },
    ],
  },
  anxious: {
    id: 'anxious',
    name: 'Anxious (Preoccupied)',
    tagline: 'You value deep closeness, and can fear it slipping away.',
    axes: 'Higher anxiety · lower avoidance',
    description: [
      'You tend to want deep connection and are highly attuned to a partner, a real strength, but you may also worry about being left, seek reassurance, and feel thrown by distance or ambiguity.',
      'This pattern often traces back to inconsistent early caregiving, where care was sometimes there and sometimes not. It is a learned pattern, not a flaw or a life sentence, and it can move toward security in safe, steady relationships.',
    ],
    strengths: [
      'Emotionally attuned and generous with attention and care',
      'Willing to invest in and work on a relationship',
      'Comfortable with emotional expression and intimacy',
    ],
    growth: [
      'Building ways to self-soothe rather than seeking constant reassurance',
      'Practising tolerating uncertainty instead of assuming the worst',
      'Meeting your own worry with self-compassion',
    ],
    links: [
      { label: 'The anxious attachment style', href: '/insights/the-psychology-of-the-anxious-attachment-style/' },
      { label: 'Understanding fear of abandonment', href: '/insights/understanding-fear-of-abandonment/' },
      { label: 'The psychology of reassurance', href: '/insights/the-psychology-of-reassurance-in-relationships/' },
    ],
  },
  avoidant: {
    id: 'avoidant',
    name: 'Avoidant (Dismissive)',
    tagline: 'You prize independence and can find closeness uncomfortable.',
    axes: 'Lower anxiety · higher avoidance',
    description: [
      'You tend to be self-reliant and calm on the surface, but deep emotional closeness, or leaning on someone, can feel uncomfortable, so you may keep a little distance or pull back when things get intense.',
      'The needs for connection are usually still there underneath; the strategy is to turn them down rather than turn them off. This often traces to early experiences that quietly discouraged depending on others, and it can shift with patience and safety.',
    ],
    strengths: [
      'Self-sufficient and steady under everyday pressure',
      'Comfortable with autonomy and giving others space',
      'Not easily thrown by small relational ups and downs',
    ],
    growth: [
      'Letting people in a little at a time rather than pulling back by default',
      'Staying present in emotional moments instead of going quiet or busy',
      'Naming needs and feelings out loud, even when it feels unnecessary',
    ],
    links: [
      { label: 'The avoidant attachment style', href: '/insights/the-psychology-of-the-avoidant-attachment-style/' },
      { label: 'The psychology of emotional withdrawal', href: '/insights/the-psychology-of-emotional-withdrawal/' },
      { label: 'The psychology of vulnerability', href: '/insights/the-psychology-of-vulnerability/' },
    ],
  },
  fearful: {
    id: 'fearful',
    name: 'Fearful-Avoidant (Disorganized)',
    tagline: 'You want closeness and fear it at the same time.',
    axes: 'Higher anxiety · higher avoidance',
    description: [
      'You may long for deep connection yet feel afraid of it, which can create a push-pull: reaching for closeness and then retreating when it arrives. Both the wish for love and the fear of it are strong at once.',
      'This is the least common pattern and often traces to early experiences where the people you needed were also, at times, a source of fear or unpredictability. It can be tender territory, and, like the other patterns, it can change with safety, steadiness, and sometimes support from a professional.',
    ],
    strengths: [
      'Often deeply empathetic and aware of emotional undercurrents',
      'Capable of real depth and insight into your own inner conflict',
      'Highly motivated to understand relationships once you feel safe',
    ],
    growth: [
      'Building safety and consistency, in relationships and with yourself',
      'Noticing the approach-and-retreat swing without acting on it instantly',
      'Being gentle with yourself: this pattern usually formed for good reasons',
    ],
    links: [
      { label: 'The disorganized attachment style', href: '/insights/the-psychology-of-the-disorganized-attachment-style/' },
      { label: 'Understanding attachment styles', href: '/insights/understanding-attachment-styles/' },
      { label: 'How to build emotional resilience', href: '/insights/how-to-build-emotional-resilience/' },
    ],
  },
};

export const STYLE_ORDER: StyleId[] = ['secure', 'anxious', 'avoidant', 'fearful'];
