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

const allUnits = buildUnits(questions);

export const filterQuestionsByUnit = (questions: Question[], unit: string): Question[] => {
  if (unit === 'all') return questions;
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