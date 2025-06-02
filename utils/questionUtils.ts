import { Question } from '../data/questions';

export const filterQuestionsByUnit = (questions: Question[], unit: string): Question[] => {
  switch (unit) {
    case 'unit1':
      return questions.filter(q => q.id >= 1 && q.id <= 125);
    case 'unit2':
      return questions.filter(q => q.id >= 126 && q.id <= 226);
    case 'unit3':
      return questions.filter(q => q.id >= 227 && q.id <= 275);
    case 'unit4':
      return questions.filter(q => q.id >= 326 && q.id <= 481);
    case '8051':
      return questions.filter(q => q.id >= 227 && q.id <= 325);
    default:
      return questions;
  }
};

export const getUnitTitle = (unit: string): string => {
  switch (unit) {
    case 'unit1':
      return 'Unit 1: Embedded Systems Fundamentals';
    case 'unit2':
      return 'Unit 2: Microcontrollers and Architecture';
    case 'unit3':
      return 'Unit 3: Communication Protocols';
    case 'unit4':
      return 'Unit 4: Interfacing and Applications';
    case '8051':
      return '8051 Microcontroller';
    default:
      return 'Quiz';
  }
};