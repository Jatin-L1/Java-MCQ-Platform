import { Question } from '../data/questions';

export const filterQuestionsByUnit = (questions: Question[], unit: string): Question[] => {
  switch (unit) {
    case 'java-fundamentals':
      return questions.filter(q => q.id >= 1 && q.id <= 40);
    case 'collections-streams':
      return questions.filter(q => q.id >= 41 && q.id <= 80);
    case 'advanced-java':
      return questions.filter(q => q.id >= 81 && q.id <= 120);
    case 'frameworks':
      return questions.filter(q => q.id >= 121 && q.id <= 160);
    case 'enterprise-java':
      return questions.filter(q => q.id >= 161 && q.id <= 198);
    default:
      return questions;
  }
};

export const getUnitTitle = (unit: string): string => {
  switch (unit) {
    case 'java-fundamentals':
      return 'Java Fundamentals: Exception Handling, File I/O & Lambda Expressions';
    case 'collections-streams':
      return 'Collections & Streams: Collections Framework, Annotations & Functional Programming';
    case 'advanced-java':
      return 'Advanced Java: Concurrency, Threads & Maven Build Tool';
    case 'frameworks':
      return 'Java Frameworks: JDBC, Spring Framework & Hibernate ORM';
    case 'enterprise-java':
      return 'Enterprise Java: Spring Boot, Microservices & Java 8 Features';
    default:
      return 'Java Programming Quiz';
  }
};