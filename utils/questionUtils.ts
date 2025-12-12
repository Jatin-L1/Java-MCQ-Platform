import type { Question } from '../data/questions';

export const filterQuestionsByUnit = (questions: Question[], unit: string): Question[] => {
  switch (unit) {
    case 'docker-fundamentals':
      return questions.filter(q => q.topic === 'Docker Fundamentals');
    case 'docker-architecture':
      return questions.filter(q => q.topic === 'Docker Architecture' || q.topic === 'Docker Components');
    case 'docker-images':
      return questions.filter(q => q.topic === 'Docker Images' || q.topic === 'Docker Registry');
    case 'dockerfile':
      return questions.filter(q => q.topic === 'Dockerfile');
    case 'docker-commands':
      return questions.filter(q => q.topic === 'Docker Commands');
    case 'docker-volumes':
      return questions.filter(q => q.topic === 'Docker Volumes');
    default:
      return questions;
  }
};

export const getUnitTitle = (unit: string): string => {
  switch (unit) {
    case 'docker-fundamentals':
      return 'Docker Fundamentals: Introduction to Containerization';
    case 'docker-architecture':
      return 'Docker Architecture: Components and System Design';
    case 'docker-images':
      return 'Docker Images & Registry: Image Management and Distribution';
    case 'dockerfile':
      return 'Dockerfile: Building Custom Container Images';
    case 'docker-commands':
      return 'Docker Commands: Essential CLI Operations';
    case 'docker-volumes':
      return 'Docker Volumes: Persistent Data Management';
    default:
      return 'Docker Quiz - Container Technology Assessment';
  }
};

export const getUnitDescription = (unit: string): string => {
  switch (unit) {
    case 'docker-fundamentals':
      return 'Learn the basics of Docker including its history, programming language, virtualization type, and core advantages for modern application development.';
    case 'docker-architecture':
      return 'Understand Docker\'s architecture including Docker Daemon, Docker Client, Docker Host, and how these components work together to manage containers.';
    case 'docker-images':
      return 'Master Docker images, registries like Docker Hub, and learn how to pull, manage, and distribute containerized applications effectively.';
    case 'dockerfile':
      return 'Deep dive into Dockerfile instructions including FROM, RUN, COPY, ADD, CMD, and ENTRYPOINT to build custom container images from scratch.';
    case 'docker-commands':
      return 'Practice essential Docker CLI commands for pulling images, running containers, executing commands, and managing Docker volumes and resources.';
    case 'docker-volumes':
      return 'Explore Docker volumes for persistent data storage, learn volume management commands, and understand how to maintain data across container lifecycles.';
    default:
      return 'Comprehensive Docker quiz covering containerization fundamentals, architecture, image management, Dockerfile syntax, CLI commands, and persistent storage.';
  }
};

export const getAllUnits = () => {
  return [
    {
      id: 'docker-fundamentals',
      title: 'Docker Fundamentals',
      description: 'Introduction to Docker, its history, programming language, and core concepts',
      questionCount: 2,
      difficulty: 'Beginner',
      topics: ['Docker History', 'Go Language', 'Containerization Basics', 'Docker Philosophy']
    },
    {
      id: 'docker-architecture',
      title: 'Docker Architecture',
      description: 'Understanding Docker components and system design',
      questionCount: 2,
      difficulty: 'Intermediate',
      topics: ['OS-level Virtualization', 'Docker Daemon', 'Docker Components', 'Container Management']
    },
    {
      id: 'docker-images',
      title: 'Docker Images & Registry',
      description: 'Working with Docker images and registries',
      questionCount: 3,
      difficulty: 'Beginner to Intermediate',
      topics: ['Docker Hub', 'Image Templates', 'Docker Pull', 'Image Distribution']
    },
    {
      id: 'dockerfile',
      title: 'Dockerfile',
      description: 'Writing Dockerfiles to build custom container images',
      questionCount: 3,
      difficulty: 'Intermediate to Advanced',
      topics: ['FROM Instruction', 'ADD vs COPY', 'CMD vs ENTRYPOINT', 'Image Building']
    },
    {
      id: 'docker-commands',
      title: 'Docker Commands',
      description: 'Essential Docker CLI commands and operations',
      questionCount: 3,
      difficulty: 'Intermediate',
      topics: ['docker pull', 'docker exec', 'docker volume ls', 'CLI Operations']
    },
    {
      id: 'docker-volumes',
      title: 'Docker Volumes',
      description: 'Managing persistent data with Docker volumes',
      questionCount: 2,
      difficulty: 'Intermediate',
      topics: ['Volume Management', 'Persistent Storage', 'Data Persistence', 'Volume Commands']
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