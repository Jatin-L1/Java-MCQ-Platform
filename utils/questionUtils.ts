import type { Question } from '../data/questions';

export const filterQuestionsByUnit = (questions: Question[], unit: string): Question[] => {
  switch (unit) {
    case 'complexity-analysis':
      return questions.filter(q => q.topic === 'Complexity Analysis' || q.topic === 'Space Complexity' || q.topic === 'Asymptotic Analysis');
    case 'recursion-iteration':
      return questions.filter(q => q.topic === 'Iterative vs Recursive Approaches');
    case 'number-theory':
      return questions.filter(q => q.topic === 'Prime Factorization' || q.topic === 'GCD of Two Numbers' || q.topic === 'Distribute in Circle');
    case 'brute-force-greedy':
      return questions.filter(q => q.topic === 'Brute Force Algorithms' || q.topic === 'Greedy Algorithms');
    case 'divide-conquer-dp':
      return questions.filter(q => q.topic === 'Divide and Conquer' || q.topic === 'Dynamic Programming');
    case 'backtracking-randomized':
      return questions.filter(q => q.topic === 'Backtracking' || q.topic === 'Randomized Algorithms');
    case 'two-pointer-sliding':
      return questions.filter(q => q.topic === 'Two-Pointer Technique' || q.topic === 'Sliding Window Technique');
    case 'data-structures':
      return questions.filter(q => q.topic === 'Data Structures' || q.topic === 'Tree Data Structures' || q.topic === 'Java Collections');
    case 'sorting-algorithms':
      return questions.filter(q => q.topic === 'Sorting Algorithms' || q.topic === 'Java Fundamentals');
    default:
      return questions;
  }
};

export const getUnitTitle = (unit: string): string => {
  switch (unit) {
    case 'complexity-analysis':
      return 'Complexity Analysis & Big-O Notation: Time and Space Complexity Fundamentals';
    case 'recursion-iteration':
      return 'Recursion vs Iteration: Comparative Analysis and Implementation Strategies';
    case 'number-theory':
      return 'Number Theory & Mathematical Algorithms: Prime Numbers, GCD, and Distribution';
    case 'brute-force-greedy':
      return 'Brute Force & Greedy Algorithms: Basic to Advanced Problem-Solving Approaches';
    case 'divide-conquer-dp':
      return 'Divide & Conquer and Dynamic Programming: Advanced Algorithmic Paradigms';
    case 'backtracking-randomized':
      return 'Backtracking & Randomized Algorithms: Exploration and Probabilistic Methods';
    case 'two-pointer-sliding':
      return 'Two-Pointer & Sliding Window Techniques: Efficient Array and String Processing';
    case 'data-structures':
      return 'Data Structures & Trees: Fundamental Storage and Organization Concepts';
    case 'sorting-algorithms':
      return 'Sorting Algorithms & Collections: Ordering and Java Framework Integration';
    default:
      return 'Data Structures & Algorithms - ADI Exam Preparation';
  }
};

export const getUnitDescription = (unit: string): string => {
  switch (unit) {
    case 'complexity-analysis':
      return 'Master fundamental concepts of algorithm analysis including Big-O notation, time complexity, space complexity, best/worst/average case scenarios, and asymptotic behavior understanding.';
    case 'recursion-iteration':
      return 'Compare and contrast recursive vs iterative approaches, understand when to use each method, analyze performance implications, and master implementation strategies for various problems.';
    case 'number-theory':
      return 'Explore mathematical algorithms including prime number generation, factorization techniques, GCD calculation methods, modular arithmetic, and circular distribution problems.';
    case 'brute-force-greedy':
      return 'Learn brute force methodology for exhaustive search solutions and greedy algorithm principles for optimal local choice strategies in various computational problems.';
    case 'divide-conquer-dp':
      return 'Master advanced paradigms: divide and conquer for problem decomposition and dynamic programming for optimal substructure and overlapping subproblems optimization.';
    case 'backtracking-randomized':
      return 'Understand backtracking algorithms for constraint satisfaction and exploration of solution spaces, plus randomized algorithms for probabilistic problem-solving approaches.';
    case 'two-pointer-sliding':
      return 'Master efficient array and string processing techniques using two-pointer methods for sorted arrays and sliding window techniques for substring and subarray problems.';
    case 'data-structures':
      return 'Comprehensive coverage of fundamental data structures including trees, binary trees, tree traversals, and their applications in solving complex algorithmic problems.';
    case 'sorting-algorithms':
      return 'Deep understanding of various sorting algorithms, their complexity analysis, practical applications, and integration with Java Collections Framework for efficient data processing.';
    default:
      return 'Comprehensive Data Structures & Algorithms preparation covering fundamental concepts, advanced techniques, and practical problem-solving skills for technical assessments.';
  }
};

export const getAllUnits = () => {
  return [
    {
      id: 'complexity-analysis',
      title: 'Complexity Analysis',
      description: 'Big-O notation, time and space complexity, asymptotic analysis fundamentals',
      questionCount: 25,
      difficulty: 'Beginner to Intermediate',
      topics: ['Big-O Notation', 'Time Complexity', 'Space Complexity', 'Asymptotic Analysis', 'Best/Worst Case']
    },
    {
      id: 'recursion-iteration',
      title: 'Recursion vs Iteration',
      description: 'Comparative analysis of recursive and iterative approaches to problem solving',
      questionCount: 25,
      difficulty: 'Intermediate',
      topics: ['Recursive Algorithms', 'Iterative Solutions', 'Performance Analysis', 'Stack Overflow', 'Tail Recursion']
    },
    {
      id: 'number-theory',
      title: 'Number Theory & Mathematical Algorithms',
      description: 'Prime numbers, factorization, GCD algorithms, and mathematical problem solving',
      questionCount: 15,
      difficulty: 'Intermediate',
      topics: ['Prime Numbers', 'Factorization', 'GCD Algorithms', 'Modular Arithmetic', 'Circle Distribution']
    },
    {
      id: 'brute-force-greedy',
      title: 'Brute Force & Greedy Algorithms',
      description: 'Exhaustive search methods and greedy optimization strategies',
      questionCount: 31,
      difficulty: 'Intermediate',
      topics: ['Exhaustive Search', 'Greedy Choice', 'Local Optimization', 'Algorithm Correctness', 'Efficiency Trade-offs']
    },
    {
      id: 'divide-conquer-dp',
      title: 'Divide & Conquer and Dynamic Programming',
      description: 'Advanced algorithmic paradigms for complex problem decomposition',
      questionCount: 25,
      difficulty: 'Advanced',
      topics: ['Problem Decomposition', 'Merge Strategies', 'Optimal Substructure', 'Memoization', 'Bottom-up Approach']
    },
    {
      id: 'backtracking-randomized',
      title: 'Backtracking & Randomized Algorithms',
      description: 'Constraint satisfaction and probabilistic algorithmic approaches',
      questionCount: 15,
      difficulty: 'Advanced',
      topics: ['Constraint Satisfaction', 'Solution Space Exploration', 'Probabilistic Algorithms', 'Monte Carlo Methods', 'Randomization']
    },
    {
      id: 'two-pointer-sliding',
      title: 'Two-Pointer & Sliding Window',
      description: 'Efficient array and string processing techniques for optimization problems',
      questionCount: 24,
      difficulty: 'Intermediate to Advanced',
      topics: ['Two-Pointer Technique', 'Sliding Window', 'Array Processing', 'String Algorithms', 'Optimization Techniques']
    },
    {
      id: 'data-structures',
      title: 'Data Structures & Trees',
      description: 'Fundamental data structures, tree concepts, and traversal algorithms',
      questionCount: 10,
      difficulty: 'Beginner to Advanced',
      topics: ['Tree Structures', 'Binary Trees', 'Tree Traversal', 'Data Organization', 'Structural Algorithms']
    },
    {
      id: 'sorting-algorithms',
      title: 'Sorting & Collections',
      description: 'Sorting algorithms analysis and Java Collections Framework integration',
      questionCount: 5,
      difficulty: 'Intermediate',
      topics: ['Sorting Algorithms', 'Complexity Analysis', 'Java Collections', 'Performance Comparison', 'Algorithm Selection']
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