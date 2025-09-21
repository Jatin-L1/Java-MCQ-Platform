import { Question } from '../data/questions';

export const filterQuestionsByUnit = (questions: Question[], unit: string): Question[] => {
  switch (unit) {
    case 'system-design-fundamentals':
      return questions.filter(q => q.id >= 1 && q.id <= 50);
    case 'system-architecture':
      return questions.filter(q => q.id >= 51 && q.id <= 100);
    case 'database-design':
      return questions.filter(q => q.id >= 101 && q.id <= 150);
    case 'scalability-performance':
      return questions.filter(q => q.id >= 151 && q.id <= 200);
    case 'cloud-fundamentals':
      return questions.filter(q => q.id >= 201 && q.id <= 250);
    case 'aws-services':
      return questions.filter(q => q.id >= 251 && q.id <= 300);
    case 'advanced-cloud':
      return questions.filter(q => q.id >= 301 && q.id <= 350);
    case 'cloud-architecture':
      return questions.filter(q => q.id >= 351 && q.id <= 400);
    default:
      return questions;
  }
};

export const getUnitTitle = (unit: string): string => {
  switch (unit) {
    case 'system-design-fundamentals':
      return 'System Design Fundamentals: Architecture Patterns, Performance Metrics & Design Principles';
    case 'system-architecture':
      return 'System Architecture: Microservices, Monolithic Design & Fault Tolerance';
    case 'database-design':
      return 'Database Design: SQL, NoSQL, ACID Properties & Transaction Management';
    case 'scalability-performance':
      return 'Scalability & Performance: Load Balancing, Caching & Distributed Systems';
    case 'cloud-fundamentals':
      return 'Cloud Computing Fundamentals: Service Models, Deployment Models & Core Concepts';
    case 'aws-services':
      return 'AWS Services: EC2, S3, RDS, Lambda & Essential Cloud Services';
    case 'advanced-cloud':
      return 'Advanced Cloud Computing: Security, Networking & Advanced AWS Services';
    case 'cloud-architecture':
      return 'Cloud Architecture: Enterprise Solutions, Best Practices & Complex Scenarios';
    default:
      return 'System Design & Cloud Computing Quiz';
  }
};

export const getUnitDescription = (unit: string): string => {
  switch (unit) {
    case 'system-design-fundamentals':
      return 'Learn the basics of system design including scalability, reliability, and performance metrics.';
    case 'system-architecture':
      return 'Explore different architectural patterns and their trade-offs in large-scale systems.';
    case 'database-design':
      return 'Master database concepts, SQL operations, and data management strategies.';
    case 'scalability-performance':
      return 'Understand how to build systems that can handle high loads and perform efficiently.';
    case 'cloud-fundamentals':
      return 'Get introduced to cloud computing concepts, service models, and deployment strategies.';
    case 'aws-services':
      return 'Learn about core AWS services and how to use them effectively in cloud solutions.';
    case 'advanced-cloud':
      return 'Dive deep into advanced cloud concepts including security, networking, and specialized services.';
    case 'cloud-architecture':
      return 'Master complex cloud architectures and enterprise-level cloud solutions.';
    default:
      return 'Comprehensive quiz covering system design and cloud computing concepts.';
  }
};

export const getAllUnits = () => [
  {
    id: 'system-design-fundamentals',
    title: 'System Design Fundamentals',
    description: 'Architecture patterns, performance metrics & design principles',
    questionCount: 50,
    difficulty: 'Beginner to Intermediate',
    topics: ['Scalability', 'Performance', 'Architecture Patterns', 'Design Principles']
  },
  {
    id: 'system-architecture',
    title: 'System Architecture',
    description: 'Microservices, monolithic design & fault tolerance',
    questionCount: 50,
    difficulty: 'Intermediate',
    topics: ['Microservices', 'Monolithic', 'Fault Tolerance', 'High Availability']
  },
  {
    id: 'database-design',
    title: 'Database Design',
    description: 'SQL, NoSQL, ACID properties & transaction management',
    questionCount: 50,
    difficulty: 'Intermediate',
    topics: ['SQL', 'NoSQL', 'ACID', 'Transactions', 'Data Modeling']
  },
  {
    id: 'scalability-performance',
    title: 'Scalability & Performance',
    description: 'Load balancing, caching & distributed systems',
    questionCount: 50,
    difficulty: 'Intermediate to Advanced',
    topics: ['Load Balancing', 'Caching', 'Distributed Systems', 'Performance Optimization']
  },
  {
    id: 'cloud-fundamentals',
    title: 'Cloud Computing Fundamentals',
    description: 'Service models, deployment models & core concepts',
    questionCount: 50,
    difficulty: 'Beginner to Intermediate',
    topics: ['IaaS/PaaS/SaaS', 'Public/Private/Hybrid Cloud', 'Cloud Benefits', 'Basic AWS']
  },
  {
    id: 'aws-services',
    title: 'AWS Services',
    description: 'EC2, S3, RDS, Lambda & essential cloud services',
    questionCount: 50,
    difficulty: 'Intermediate',
    topics: ['EC2', 'S3', 'RDS', 'Lambda', 'Load Balancing', 'Auto Scaling']
  },
  {
    id: 'advanced-cloud',
    title: 'Advanced Cloud Computing',
    description: 'Security, networking & advanced AWS services',
    questionCount: 50,
    difficulty: 'Intermediate to Advanced',
    topics: ['Cloud Security', 'VPC', 'IAM', 'Advanced Services', 'Cost Optimization']
  },
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture',
    description: 'Enterprise solutions, best practices & complex scenarios',
    questionCount: 50,
    difficulty: 'Advanced',
    topics: ['Enterprise Architecture', 'Best Practices', 'Complex Scenarios', 'Multi-Cloud']
  }
];

export const getTopicsByUnit = (unit: string): string[] => {
  const unitData = getAllUnits().find(u => u.id === unit);
  return unitData?.topics || [];
};

export const getDifficultyByUnit = (unit: string): string => {
  const unitData = getAllUnits().find(u => u.id === unit);
  return unitData?.difficulty || 'Mixed';
};