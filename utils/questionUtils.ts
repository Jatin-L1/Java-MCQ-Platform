import { questions, type Question } from '../data/questions';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const getTopicKey = (question: Question) => question.topic?.trim() || 'General';

const formatDifficulty = (levels: Array<Question['difficulty'] | undefined>) => {
  const unique = Array.from(new Set(levels.filter(Boolean)));
  if (unique.length === 0) return 'Mixed';
  if (unique.length === 1) return unique[0] === 'easy' ? 'Easy' : unique[0] === 'medium' ? 'Medium' : 'Hard';
  return 'Mixed';
};

const buildUnits = (questionList: Question[]) => {
  const grouped = new Map<string, Question[]>();

  questionList.forEach((question) => {
    const key = getTopicKey(question);
    const existing = grouped.get(key) || [];
    grouped.set(key, [...existing, question]);
  });

  return Array.from(grouped.entries())
    .map(([topic, topicQuestions]) => ({
      id: slugify(topic),
      title: topic,
      description: `${topicQuestions.length} practice questions`,
      questionCount: topicQuestions.length,
      difficulty: formatDifficulty(topicQuestions.map((q) => q.difficulty)),
      topics: [topic]
    }))
    .sort((a, b) => b.questionCount - a.questionCount);
};

const newCloudSetQuestions = questions.filter((q) => q.id >= 101 && q.id <= 133);
const awsCloudExtendedQuestions = questions.filter((q) => q.id >= 134 && q.id <= 180);
const additionalCloudQuestionsQuestions = questions.filter((q) => q.id >= 181 && q.id <= 263);
const premiumCloudQuestionsQuestions = questions.filter((q) => q.id >= 264 && q.id <= 350);
const eliteCloudQuestionsQuestions = questions.filter((q) => q.id >= 351);

const customUnits = [
  ...(newCloudSetQuestions.length
    ? [
        {
          id: 'cloud-mcq-set',
          title: 'Cloud MCQ Set (New)',
          description: 'Dedicated section for newly added cloud MCQs (Q101-Q133)',
          questionCount: newCloudSetQuestions.length,
          difficulty: formatDifficulty(newCloudSetQuestions.map((q) => q.difficulty)),
          topics: Array.from(new Set(newCloudSetQuestions.map((q) => getTopicKey(q))))
        }
      ]
    : []),
  ...(awsCloudExtendedQuestions.length
    ? [
        {
          id: 'aws-cloud-extended',
          title: 'AWS & Cloud MCQ (Extended)',
          description: 'Comprehensive AWS and cloud computing questions (Q134-Q180)',
          questionCount: awsCloudExtendedQuestions.length,
          difficulty: formatDifficulty(awsCloudExtendedQuestions.map((q) => q.difficulty)),
          topics: Array.from(new Set(awsCloudExtendedQuestions.map((q) => getTopicKey(q))))
        }
      ]
    : []),
  ...(additionalCloudQuestionsQuestions.length
    ? [
        {
          id: 'cloud-advanced-mcq',
          title: 'Cloud Advanced MCQ Set',
          description: 'Advanced cloud and AWS practice questions (Q181-Q263)',
          questionCount: additionalCloudQuestionsQuestions.length,
          difficulty: formatDifficulty(additionalCloudQuestionsQuestions.map((q) => q.difficulty)),
          topics: Array.from(new Set(additionalCloudQuestionsQuestions.map((q) => getTopicKey(q))))
        }
      ]
    : []),
  ...(premiumCloudQuestionsQuestions.length
    ? [
        {
          id: 'cloud-premium-mcq',
          title: 'Cloud Premium MCQ Set',
          description: 'Premium cloud and virtualization practice questions (Q264-Q350)',
          questionCount: premiumCloudQuestionsQuestions.length,
          difficulty: formatDifficulty(premiumCloudQuestionsQuestions.map((q) => q.difficulty)),
          topics: Array.from(new Set(premiumCloudQuestionsQuestions.map((q) => getTopicKey(q))))
        }
      ]
    : []),
  ...(eliteCloudQuestionsQuestions.length
    ? [
        {
          id: 'cloud-elite-mcq',
          title: 'Cloud Elite MCQ Set',
          description: 'Advanced cloud, AWS, and virtualization questions (Q351+)',
          questionCount: eliteCloudQuestionsQuestions.length,
          difficulty: formatDifficulty(eliteCloudQuestionsQuestions.map((q) => q.difficulty)),
          topics: Array.from(new Set(eliteCloudQuestionsQuestions.map((q) => getTopicKey(q))))
        }
      ]
    : [])
];

const allUnits = [...customUnits, ...buildUnits(questions)];

export const filterQuestionsByUnit = (questions: Question[], unit: string): Question[] => {
  if (unit === 'all') return questions;
  if (unit === 'cloud-mcq-set') return questions.filter((q) => q.id >= 101 && q.id <= 133);
  if (unit === 'aws-cloud-extended') return questions.filter((q) => q.id >= 134 && q.id <= 180);
  if (unit === 'cloud-advanced-mcq') return questions.filter((q) => q.id >= 181 && q.id <= 263);
  if (unit === 'cloud-premium-mcq') return questions.filter((q) => q.id >= 264 && q.id <= 350);
  if (unit === 'cloud-elite-mcq') return questions.filter((q) => q.id >= 351);
  return questions.filter((q) => slugify(getTopicKey(q)) === unit);
};

export const getUnitTitle = (unit: string): string => {
  if (unit === 'all') return 'All Topics Practice';
  const unitData = allUnits.find((u) => u.id === unit);
  return unitData?.title || 'Topic Practice';
};

export const getUnitDescription = (unit: string): string => {
  if (unit === 'all') return 'Practice every question in one continuous session.';
  const unitData = allUnits.find((u) => u.id === unit);
  return unitData ? `Focus practice for ${unitData.title.toLowerCase()}.` : 'Practice by topic.';
};

export const getAllUnits = () => {
  return allUnits;
};

export const getTopicsByUnit = (unit: string): string[] => {
  const unitData = getAllUnits().find(u => u.id === unit);
  return unitData?.topics || [];
};

export const getDifficultyByUnit = (unit: string): string => {
  const unitData = getAllUnits().find(u => u.id === unit);
  return unitData?.difficulty || 'Mixed';
};