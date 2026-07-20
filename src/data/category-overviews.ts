/**
 * Longer, original editorial content for each category page: a two-paragraph
 * overview plus extra FAQs. This keeps the category (listing) pages content-rich
 * rather than looking like bare link lists, and gives readers real orientation
 * before the insight cards. All claims are hedged and consistent with the
 * research the individual insight pages cite.
 */

export interface CategoryExtra {
  overview: string[];
  faqs: { question: string; answer: string }[];
}

export const CATEGORY_OVERVIEWS: Record<string, CategoryExtra> = {
  'how-men-think': {
    overview: [
      'This category looks at how men, on average, tend to process information, weigh risk, and make decisions, from everyday choices to how they reason about relationships and the future. The emphasis throughout is on documented tendencies and the heavy individual variation around them, not on the idea that there is a single fixed "male brain." Where real average differences appear, they are usually small, and the distributions for men and women overlap far more than they diverge.',
      'The pages here cover topics such as how men approach uncertainty and pressure, why some men compartmentalize, how they process emotions internally, and how they think about commitment, money, and attraction. Read together, they paint a picture that is more nuanced than the stereotypes: many patterns often attributed to a "male way of thinking" turn out to reflect socialization, context, and personality at least as much as anything hard-wired.',
    ],
    faqs: [
      {
        question: 'Is there really a "male brain" that thinks differently?',
        answer:
          'Neuroscience does not support a clean "male brain versus female brain" split. Individual brains are mosaics of features, and on most cognitive measures the sexes overlap heavily. Average differences exist on a few dimensions but are typically small and shaped strongly by experience.',
      },
      {
        question: 'Why do men and women sometimes approach problems differently?',
        answer:
          'Differences in approach often reflect coping style and socialization more than fixed wiring. Some men lean toward task-focused, solution-first strategies, but plenty do not, and plenty of women do. Context, upbringing, and personality usually predict the approach better than sex.',
      },
    ],
  },
  'how-women-think': {
    overview: [
      'This category examines how women, on average, tend to approach decisions, social information, risk, and relationships. As with men, the focus is on patterns observed in research and the large individual variation around them, not on stereotypes about a single "female mind." On most cognitive measures the differences between women and men are small, and where a modest average edge appears, it still describes overlapping groups rather than separate categories.',
      'The insight pages here explore how women process emotions, read social and nonverbal cues, weigh security and risk, and think about love, attraction, money, and commitment. A recurring theme is that tendencies often labelled as "the way women think" (talking things through, noticing subtle cues, considering others) are better understood as flexible, context-dependent strategies than as fixed traits, and they are strengths as often as they are anything else.',
    ],
    faqs: [
      {
        question: 'Are women naturally better at reading people?',
        answer:
          'On average, women score modestly higher on some tests of decoding nonverbal cues, but the gap is small and depends heavily on motivation and context. Many men match or exceed the average woman, and the skill improves with practice for anyone.',
      },
      {
        question: 'Do women think more emotionally than men?',
        answer:
          'Not in the sense of being less rational. Women, on average, tend to express and talk through emotion more, but expression is not the same as being governed by feeling. Research finds men and women reason about as similarly as they differ.',
      },
    ],
  },
  'what-men-want': {
    overview: [
      'This category collects what men most often report needing and wanting in relationships: respect and appreciation, emotional and physical closeness, partnership, and the sense of being genuinely needed and trusted. A consistent finding is that these needs are frequently expressed indirectly, through action rather than words, which is part of why they are so often misread. The stereotype that men mainly want sex badly understates how much most men value feeling valued.',
      'The pages here look at what men need to feel secure and loved, what they want in a long-term partner or marriage, why they crave appreciation and peace, and the things they want but rarely ask for out loud. Taken together they make a simple point: much of what men want in relationships goes unspoken rather than unfelt, and naming it tends to make relationships stronger for both people.',
    ],
    faqs: [
      {
        question: 'Do men really want more than just physical intimacy?',
        answer:
          'Yes. Surveys of relationship satisfaction repeatedly show men rank emotional connection, companionship, and feeling appreciated near the top. For most men physical closeness is intertwined with feeling wanted and accepted, not separate from it.',
      },
      {
        question: 'Why do men struggle to say what they want?',
        answer:
          'Many men are socialized to express needs through action and to avoid appearing dependent. The result is that real needs often go unspoken. Creating emotional safety, rather than pressuring, tends to make it easier for a man to put wants into words.',
      },
    ],
  },
  'what-women-want': {
    overview: [
      'This category covers what women most often report needing in relationships: emotional safety, responsiveness, reliability, and the feeling of being genuinely understood and prioritized. Across relationship research, perceived partner responsiveness (the sense that a partner understands, values, and supports who you really are) is one of the strongest ingredients of intimacy and satisfaction. For many women, that felt security matters more than romance for its own sake.',
      'The insight pages here explore what women want in a long-term partner and marriage, why consistency and effort tend to outweigh grand gestures, why emotional availability and quality time carry so much weight, and the wants that often go unsaid. The through-line is that most of these wants are about security and connection (being known, met, and chosen) rather than about material things.',
    ],
    faqs: [
      {
        question: 'What do women want most in a relationship?',
        answer:
          'Research on intimacy points to perceived partner responsiveness: feeling understood, valued, and supported. Reliability and emotional safety consistently rank above grand romantic gestures. The specifics vary by person, but the underlying need to feel known runs deep.',
      },
      {
        question: 'Why do small consistent gestures matter more than big ones?',
        answer:
          'Because reliability signals security. A steady pattern of attentive, responsive behavior builds trust in a way a single dramatic gesture cannot. Many women read consistency as evidence of genuine investment, which is what deepens closeness over time.',
      },
    ],
  },
  'male-psychology': {
    overview: [
      "This is the broad study of men's emotional lives, identity, stress responses, friendships, and behavior, including how masculine socialization shapes, and sometimes constrains, how men experience and express what they feel. A central finding is that lower emotional expression among men is not the same as lower emotional experience: research on \"normative male alexithymia\" suggests many men are socialized away from naming feelings, not away from having them.",
      'The pages here range across why men pull away or go silent, how they handle anger, grief, shame, and failure, why male friendship and loneliness have become pressing issues, and what really drives male behavior. The picture that emerges is compassionate and evidence-based: many puzzling male behaviors make more sense once you see the norms, pressures, and coping styles underneath them.',
    ],
    faqs: [
      {
        question: 'Are men less emotional than women?',
        answer:
          'No. Physiological studies find men are often equally or more reactive to emotional stress; they are simply more likely to mask or withdraw from it. Lower outward expression is not the same as feeling less.',
      },
      {
        question: 'Why is male loneliness considered a growing problem?',
        answer:
          'Many men report shrinking close friendships in adulthood and lean heavily on a single partner for emotional support. Researchers link this to norms that discourage vulnerability between men, which raises isolation risk after a breakup, move, or loss.',
      },
    ],
  },
  'female-psychology': {
    overview: [
      "This is the broad study of women's emotional lives, identity, stress responses, social bonds, and behavior, including how socialization around relationships and caretaking shapes the way women process and express experience. One well-documented pattern is that, under stress, women on average show a stronger \"tend-and-befriend\" response, seeking social connection alongside the fight-or-flight response shared with men. Connection-seeking is a coping strategy, not a weakness.",
      'The insight pages here cover why women overthink or replay conversations, the mental load many women carry, female friendship, shame and self-criticism, resilience, and how women process breakups and stress. A recurring theme is that behaviors sometimes dismissed as "too emotional" are usually adaptive strategies (ways of processing, bonding, and staying safe) shaped by context and upbringing rather than fixed traits.',
    ],
    faqs: [
      {
        question: 'Do hormones control women’s emotions?',
        answer:
          'Hormones influence mood for both sexes, but the popular idea that they "control" women’s emotions is not supported. Stress, sleep, context, and individual differences explain far more day-to-day variation than the menstrual cycle does.',
      },
      {
        question: 'Why do women talk through problems instead of just solving them?',
        answer:
          'Talking is often the coping strategy, not a request for solutions. Sharing distress helps regulate emotion and strengthens social bonds. Jumping straight to fixing can feel dismissive precisely because the goal was connection.',
      },
    ],
  },
  'relationships-and-communication': {
    overview: [
      "This category covers how couples build, maintain, and sometimes damage connection: conflict styles, repair, listening, trust, and the everyday habits that research links to relationships that last. Decades of observational work, most famously John Gottman's, find that what predicts a breakup is not the presence of conflict but how couples handle it: criticism, contempt, defensiveness, and stonewalling corrode a bond, with contempt the single strongest predictor of divorce.",
      'The pages here explore what makes relationships last, how to communicate needs without fighting, how trust is built and broken, why couples drift apart, how to repair after conflict, and the outsized power of small gestures. The encouraging finding running through them is that most of these are skills, learnable habits of turning toward each other, not fixed traits you either have or lack.',
    ],
    faqs: [
      {
        question: 'What is the biggest predictor of a relationship failing?',
        answer:
          'In Gottman’s research, contempt, treating a partner with disgust or superiority, is the most corrosive factor and the strongest single predictor of divorce. Its absence matters more than the absence of disagreement.',
      },
      {
        question: 'Can communication skills actually be learned?',
        answer:
          'Yes. Soft start-ups, repair attempts, and turning toward a partner’s bids for connection are habits that improve with practice. Many couples see real change by focusing on how they handle conflict rather than trying to avoid it.',
      },
    ],
  },
  'love-and-attraction': {
    overview: [
      'This category explores how attraction sparks, how love develops and deepens, and what actually predicts who we fall for. A striking finding from speed-dating research is that people’s stated mate preferences barely predict who they are attracted to in person. What we say we want and what moves us in the moment are often different things. Early passionate love, driven by real neurochemical arousal, gradually gives way to the attachment and companionate love that lasting relationships are built on.',
      'The insight pages here cover how men and women fall in love, the stages of love, lust versus love, chemistry and the "spark," why we are drawn to certain types, and how attraction really works beyond looks. The consistent message is that ordinary factors (proximity, familiarity, similarity, reciprocal liking, kindness) predict real attraction far better than any technique or game.',
    ],
    faqs: [
      {
        question: 'Do men or women fall in love faster?',
        answer:
          'Several studies find men tend to fall in love somewhat faster and say "I love you" first more often, while women are typically more deliberate early on. The popular image of women as the more romantic sex is only half right.',
      },
      {
        question: 'Is lasting love just chemistry?',
        answer:
          'Early passionate love involves real arousal, but lasting love depends far more on attachment, responsiveness, and shared investment. Chemistry opens the door; compatibility and care decide whether anyone stays.',
      },
    ],
  },
  'happiness-and-fulfillment': {
    overview: [
      "This category draws on well-being science, self-determination theory, and the longest-running studies of adult development to separate what actually predicts a good life from what we assume does. The most consistent finding across long-term research, including the 80-plus-year Harvard Study of Adult Development, is that the quality of close relationships predicts health and happiness more powerfully than wealth, fame, or achievement.",
      'The insight pages here cover the science of lasting happiness, why money buys less than we expect, the role of purpose, gratitude, savoring, optimism, hope, self-compassion, and how sleep, exercise, and helping others shape mood. The recurring, hopeful theme is that a meaningful share of well-being lies in intentional activity, the habits and relationships we choose, rather than in circumstances alone.',
    ],
    faqs: [
      {
        question: 'What makes people happiest over a lifetime?',
        answer:
          'Close, warm relationships are the most consistent predictor in long-running studies. Self-determination research adds three needs that drive fulfillment for everyone: autonomy, competence, and relatedness.',
      },
      {
        question: 'Does money buy happiness?',
        answer:
          'Money reliably improves life beyond poverty, but its effect on day-to-day emotional well-being flattens once basic needs and a comfortable baseline are met. Beyond that point, relationships, purpose, and health matter far more.',
      },
    ],
  },
  'self-improvement-men': {
    overview: [
      'This category gathers evidence-based ways men can build a better life (strengthening friendships, emotional skills, physical health, confidence, and a sense of purpose) grounded in psychology rather than hustle-culture slogans. The changes with the strongest research behind them are unglamorous: investing in close relationships, regular exercise, adequate sleep, and learning to name and share emotions predict well-being far more reliably than status or income beyond a comfortable baseline.',
      'The insight pages here cover building deeper friendships, emotional intelligence and communication, handling rejection and insecurity, managing anger and stress, finding meaning, and building better habits. A theme worth stating plainly: asking for help and being able to express emotion are associated with better mental and physical health for men. Avoidant coping, not vulnerability, is the documented risk factor.',
    ],
    faqs: [
      {
        question: 'What actually improves men’s lives the most?',
        answer:
          'Strong social connection, physical activity, adequate sleep, and a sense of purpose. Longitudinal research consistently ranks the quality of relationships above career success as a predictor of a good life.',
      },
      {
        question: 'Is it weak for a man to seek therapy or support?',
        answer:
          'The evidence argues the opposite. Men who can ask for help and express emotion tend to have better mental and physical health. Seeking support is a skill associated with resilience, not fragility.',
      },
    ],
  },
  'self-improvement-women': {
    overview: [
      'This category collects evidence-based ways women can build a fuller life (self-compassion, boundaries, assertiveness, managing rumination and comparison, and protecting autonomy alongside connection) grounded in psychological research. A key finding is that self-compassion is more strongly linked to resilience and well-being than self-esteem, and it does not lower standards; it raises follow-through by removing the harsh self-criticism that fuels avoidance.',
      'The insight pages here cover building assertiveness and confidence, setting boundaries, quieting the inner critic, letting go of guilt, recovering from burnout, and interrupting the rumination and social comparison that erode well-being. The recurring message is that many of the pressures women describe are learned and changeable, and that caring for oneself is not selfishness but the foundation that makes caring for others sustainable.',
    ],
    faqs: [
      {
        question: 'What helps women’s well-being the most?',
        answer:
          'Self-compassion, strong relationships, autonomy over one’s own life, and skills for interrupting rumination all have solid evidence behind them. Self-criticism, by contrast, tends to predict anxiety and low mood rather than achievement.',
      },
      {
        question: 'How can women stop overthinking?',
        answer:
          'Research suggests rumination responds to action and connection (brief problem-solving, movement, reaching out, or scheduled "worry time") far better than trying to think your way to calm.',
      },
    ],
  },
  'emotions-and-feelings': {
    overview: [
      'This category examines how people experience, regulate, and express emotion: the difference between feeling and showing emotion, why some people shut down, and how emotional skills can be learned at any age. A consistent finding is that the gap between men and women is mostly in expression and strategy, not in how intensely emotions are felt, and that suppression, common in those taught to "stay strong", reliably backfires, raising stress rather than lowering it.',
      'The insight pages here cover regulating emotions, understanding triggers, shame versus guilt, jealousy, anxiety, fear, sadness, emotional numbness, and how to process difficult feelings and heartbreak. The encouraging thread is that emotional intelligence is a set of skills (naming feelings, pausing before reacting, reappraising a situation, choosing expression over suppression) that improve with use rather than fixed traits you are born with.',
    ],
    faqs: [
      {
        question: 'Why do some people shut down emotionally?',
        answer:
          'Shutting down often follows physiological "flooding": a stress response that overwhelms the ability to stay engaged. It is usually a self-protective reflex rather than indifference, and it can be softened with self-soothing and practice.',
      },
      {
        question: 'Can emotional intelligence be improved?',
        answer:
          'Yes. Naming emotions, pausing before reacting, reappraising situations, and practicing honest expression are skills that get stronger with use at any age. They are not fixed traits you simply have or lack.',
      },
    ],
  },
  'behavior-patterns': {
    overview: [
      'This category looks at the recurring behaviors that show up in relationships (pursuing and withdrawing, testing and reassurance-seeking, control, self-sabotage, and conflict cycles) and the psychological mechanisms, especially attachment, that drive them. Many behaviors that look puzzling from the outside make sense through attachment theory: anxious and avoidant strategies, learned early, shape how people seek closeness or distance under stress, and the two can lock into a self-reinforcing loop.',
      'The insight pages here explore the pursue-withdraw pattern, emotional withdrawal, why people self-sabotage or repeat the same relationship patterns, passive aggression, control, and what really drives male and female behavior. The through-line is compassionate: most of these patterns are protective strategies that once made sense, and naming them is the first step toward changing them.',
    ],
    faqs: [
      {
        question: 'What is the pursue-withdraw cycle?',
        answer:
          'It is a common pattern where one partner seeks closeness or resolution while the other needs space, and each reaction intensifies the other. Research links this demand-withdraw loop to lower satisfaction over time, but it can be interrupted once both partners recognize it.',
      },
      {
        question: 'Can you change deep-seated relationship patterns?',
        answer:
          'Yes. Attachment patterns are learned, and research on "earned security" shows they can shift through insight, healthier relationships, and sometimes therapy. Patterns are tendencies, not life sentences.',
      },
    ],
  },
  'dating-psychology': {
    overview: [
      'This category covers the psychology of meeting, attracting, and choosing partners: what genuinely drives attraction, how first impressions form, and how to read early behavior honestly rather than through manipulation tactics. Research points to a few reliable drivers: proximity, familiarity, similarity, and reciprocal liking. These ordinary factors predict real-world attraction far better than any "technique," and manipulation tends to undermine the trust real attraction is built on.',
      'The insight pages here explore first impressions, how to tell if someone is interested, why modern dating can feel harder, online dating, mixed signals, compatibility, and playing hard to get. The consistent message is practical and non-cynical: genuine interest, reliability, and emotional availability beat games, and understanding the psychology of early attraction is about relating more honestly, not gaming anyone.',
    ],
    faqs: [
      {
        question: 'What makes someone attractive beyond looks?',
        answer:
          'Reciprocal liking, warmth, perceived similarity, and signals of kindness and competence all strongly shape attraction. Across cross-cultural research, kindness and intelligence rank near the top of what both sexes look for.',
      },
      {
        question: 'Do dating games and techniques actually work?',
        answer:
          'Manipulation tactics tend to undermine the reciprocal liking and trust real attraction is built on. The evidence favors genuine interest, reliability, and emotional availability over scripted games.',
      },
    ],
  },
};
