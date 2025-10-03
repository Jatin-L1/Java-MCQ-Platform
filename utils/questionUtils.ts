import { Question } from '../data/questions';

export const filterQuestionsByUnit = (questions: Question[], unit: string): Question[] => {
  switch (unit) {
    case 'java-fundamentals':
      return questions.filter(q => q.id >= 1 && q.id <= 50);
    case 'collections-concurrency':
      return questions.filter(q => q.id >= 51 && q.id <= 100);
    case 'build-tools-functional':
      return questions.filter(q => q.id >= 101 && q.id <= 150);
    case 'database-jdbc':
      return questions.filter(q => q.id >= 151 && q.id <= 200);
    case 'spring-ecosystem':
      return questions.filter(q => q.id >= 201 && q.id <= 250);
    case 'spring-boot-data':
      return questions.filter(q => q.id >= 251 && q.id <= 300);
    case 'microservices-cloud':
      return questions.filter(q => q.id >= 301 && q.id <= 350);
    case 'testing-deployment':
      return questions.filter(q => q.id >= 351 && q.id <= 400);
    default:
      return questions;
  }
};

export const getUnitTitle = (unit: string): string => {
  switch (unit) {
    case 'java-fundamentals':
      return 'Java Fundamentals: Exception Handling, Lambda Expressions & Core Features (Lectures 1-8)';
    case 'collections-concurrency':
      return 'Collections & Concurrency: Data Structures, Threading & Memory Model (Lectures 9-25)';
    case 'build-tools-functional':
      return 'Build Tools & Functional Programming: Maven & High-Order Functions (Lectures 26-34)';
    case 'database-jdbc':
      return 'Database Access: JDBC Programming & Data Management (Lectures 35-40)';
    case 'spring-ecosystem':
      return 'Spring Framework: Core, IoC, AOP, MVC & Hibernate Integration (Lectures 41-52)';
    case 'spring-boot-data':
      return 'Spring Boot & Data: Auto-configuration, Actuators & Spring Data (Lectures 53-62)';
    case 'microservices-cloud':
      return 'Microservices Architecture: Spring Cloud Gateway, Config & Circuit Breaker (Lectures 63-67)';
    case 'testing-deployment':
      return 'Testing & Web Development: JUnit, JMeter & Spring MVC (Lectures 68-75)';
    default:
      return 'Advanced Programming Concepts - Java Enterprise Development';
  }
};

export const getUnitDescription = (unit: string): string => {
  switch (unit) {
    case 'java-fundamentals':
      return 'Master essential Java features including robust exception handling, lambda expressions, annotations, Java modules, Optional API, dependency injection, and comprehensive I/O operations.';
    case 'collections-concurrency':
      return 'Deep dive into Java Collections Framework (Array, ArrayList, Set, Map, Queue, Stack, Deque), concurrent programming with threads, virtual threads, synchronization, and Java Memory Model.';
    case 'build-tools-functional':
      return 'Learn Maven build automation, project management, dependency resolution, and functional programming paradigms with high-order functions and advanced Stream API techniques.';
    case 'database-jdbc':
      return 'Comprehensive database access using JDBC, connection management, prepared statements, transaction handling, and efficient data access patterns for enterprise applications.';
    case 'spring-ecosystem':
      return 'Master Spring Framework architecture including IoC container, dependency injection, Spring AOP, Spring MVC, and Hibernate integration with advanced ORM concepts and entity lifecycle management.';
    case 'spring-boot-data':
      return 'Advanced Spring Boot development with auto-configuration, custom starters, Spring Boot Actuator for monitoring, embedded servers, and Spring Data modules for JPA, MongoDB, and JDBC.';
    case 'microservices-cloud':
      return 'Enterprise microservices architecture using Spring Cloud ecosystem including Gateway, Config Server, Circuit Breaker patterns, service discovery, and OpenFeign for inter-service communication.';
    case 'testing-deployment':
      return 'Comprehensive testing strategies with JUnit framework, performance testing with JMeter, Spring MVC web development, servlet programming, and JSP-based enterprise web applications.';
    default:
      return 'Advanced Programming Concepts covering enterprise Java development, Spring ecosystem, and modern software architecture patterns following industry best practices.';
  }
};

export const getAllUnits = () => {
  return [
    {
      id: 'java-fundamentals',
      title: 'Java Fundamentals',
      description: 'Core Java features: Exception handling, lambdas, annotations, modules, optionals',
      questionCount: 50,
      difficulty: 'Beginner to Intermediate',
      topics: ['Exception Handling', 'Lambda Expressions', 'Annotations', 'Modules', 'Optional API']
    },
    {
      id: 'collections-concurrency',
      title: 'Collections & Concurrency',
      description: 'Java collections framework, threading, synchronization, and memory model',
      questionCount: 50,
      difficulty: 'Intermediate',
      topics: ['Collections Framework', 'Threading', 'Synchronization', 'Memory Model', 'Virtual Threads']
    },
    {
      id: 'build-tools-functional',
      title: 'Build Tools & Functional Programming',
      description: 'Maven build automation and functional programming with high-order functions',
      questionCount: 50,
      difficulty: 'Intermediate',
      topics: ['Maven', 'Functional Programming', 'High-Order Functions', 'Stream API', 'Build Automation']
    },
    {
      id: 'database-jdbc',
      title: 'Database Access & JDBC',
      description: 'Database connectivity, JDBC programming, and data access patterns',
      questionCount: 50,
      difficulty: 'Intermediate',
      topics: ['JDBC', 'Database Connectivity', 'SQL Programming', 'Connection Pooling', 'Transaction Management']
    },
    {
      id: 'spring-ecosystem',
      title: 'Spring Framework & Hibernate',
      description: 'Spring Core, IoC, AOP, MVC architecture, and Hibernate ORM integration',
      questionCount: 50,
      difficulty: 'Advanced',
      topics: ['Spring IoC', 'Dependency Injection', 'Spring AOP', 'Spring MVC', 'Hibernate ORM']
    },
    {
      id: 'spring-boot-data',
      title: 'Spring Boot & Spring Data',
      description: 'Auto-configuration, Spring Boot starters, actuators, and Spring Data modules',
      questionCount: 50,
      difficulty: 'Advanced',
      topics: ['Spring Boot Starters', 'Auto-configuration', 'Spring Actuator', 'Spring Data JPA', 'Spring Data MongoDB']
    },
    {
      id: 'microservices-cloud',
      title: 'Microservices & Spring Cloud',
      description: 'Microservices architecture patterns with Spring Cloud ecosystem',
      questionCount: 50,
      difficulty: 'Expert',
      topics: ['Spring Cloud Gateway', 'Cloud Config', 'Circuit Breaker', 'Service Discovery', 'OpenFeign']
    },
    {
      id: 'testing-deployment',
      title: 'Testing & Web Development',
      description: 'JUnit testing, JMeter performance testing, and Spring MVC web development',
      questionCount: 50,
      difficulty: 'Advanced',
      topics: ['JUnit Testing', 'JMeter', 'Spring MVC', 'Web Development', 'Performance Testing']
    }
  ];
};

export const getTopicsByUnit = (unit: string): string[] => {
  const unitData = getAllUnits().find(u => u.id === unit);
  return unitData?.topics || [];
};

export const getDifficultyByUnit = (unit: string): string => {
  const unitData = getAllUnits().find(u => u.id === unit);
  return unitData?.difficulty || 'Mixed';
};