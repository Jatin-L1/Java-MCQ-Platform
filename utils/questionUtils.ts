import type { Question } from '../data/questions';

export const filterQuestionsByUnit = (questions: Question[], unit: string): Question[] => {
  switch (unit) {
    case 'complexity-analysis':
      return questions.filter(q => q.topic === 'Complexity' || q.topic === 'Time Complexity' || q.topic === 'Space Complexity');
    case 'advanced-techniques':
      return questions.filter(q => q.topic === 'Techniques' || q.topic === 'Two Pointers' || q.topic === 'Sliding Window');
    case 'backtracking':
      return questions.filter(q => q.topic === 'Backtracking');
    case 'trees':
      return questions.filter(q => q.topic === 'Trees' || q.topic === 'Binary Trees' || q.topic === 'BST' || q.topic === 'AVL');
    case 'heaps':
      return questions.filter(q => q.topic === 'Heaps' || q.topic === 'Priority Queue');
    case 'greedy':
      return questions.filter(q => q.topic === 'Greedy');
    case 'dynamic-programming':
      return questions.filter(q => q.topic === 'DP' || q.topic === 'Dynamic Programming');
    case 'graphs':
      return questions.filter(q => q.topic === 'Graphs' || q.topic === 'BFS' || q.topic === 'DFS');
    case 'hashing':
      return questions.filter(q => q.topic === 'Hashing' || q.topic === 'Hash Tables');
    default:
      return questions;
  }
};

export const getUnitTitle = (unit: string): string => {
  switch (unit) {
    case 'complexity-analysis':
      return 'Complexity Analysis: Time & Space Complexity Fundamentals';
    case 'advanced-techniques':
      return 'Advanced Techniques: Greedy, DP, Divide & Conquer';
    case 'backtracking':
      return 'Backtracking: Permutations, Combinations & Constraint Problems';
    case 'trees':
      return 'Trees: BST, AVL, Traversals & Tree Algorithms';
    case 'heaps':
      return 'Heaps: Priority Queues & Heap Operations';
    case 'greedy':
      return 'Greedy Algorithms: Optimization & Strategy Problems';
    case 'dynamic-programming':
      return 'Dynamic Programming: Memoization & Tabulation';
    case 'graphs':
      return 'Graphs: BFS, DFS, Shortest Paths & Connectivity';
    case 'hashing':
      return 'Hashing: Hash Tables, Collision Handling & Applications';
    default:
      return 'ADI Quiz - Advanced Data Structures & Algorithms';
  }
};

export const getUnitDescription = (unit: string): string => {
  switch (unit) {
    case 'complexity-analysis':
      return 'Master time and space complexity analysis including Big-O notation, Master theorem, amortized analysis, and complexity of common algorithms.';
    case 'advanced-techniques':
      return 'Learn advanced problem-solving techniques including greedy approaches, dynamic programming fundamentals, divide and conquer, two pointers, and sliding window.';
    case 'backtracking':
      return 'Explore backtracking algorithms for permutations, combinations, subsets, N-Queens, Sudoku solver, and pruning strategies for optimization.';
    case 'trees':
      return 'Deep dive into tree data structures including BST operations, AVL rotations, tree traversals (inorder, preorder, postorder), LCA, and tree diameter.';
    case 'heaps':
      return 'Understand heap data structures, min/max heaps, heapify operations, priority queues, and applications like finding median in a stream.';
    case 'greedy':
      return 'Practice greedy algorithms including fractional knapsack, interval scheduling, Dijkstra\'s shortest path, Prim\'s and Kruskal\'s MST algorithms.';
    case 'dynamic-programming':
      return 'Master DP concepts including 0/1 knapsack, LCS, matrix chain multiplication, TSP, overlapping subproblems, and optimal substructure.';
    case 'graphs':
      return 'Explore graph algorithms including BFS, DFS, cycle detection, topological sorting, connected components, bipartite checking, and Union-Find.';
    case 'hashing':
      return 'Learn hash table operations, collision handling (chaining, open addressing, double hashing), load factor, rehashing, and hash table applications.';
    default:
      return 'Comprehensive ADI quiz covering advanced data structures, algorithms, complexity analysis, and problem-solving techniques for technical interviews.';
  }
};

export const getAllUnits = () => {
  return [
    {
      id: 'complexity-analysis',
      title: 'Complexity Analysis',
      description: 'Time & Space Complexity, Big-O, Master Theorem',
      questionCount: 20,
      difficulty: 'Beginner to Intermediate',
      topics: ['Big-O Notation', 'Time Complexity', 'Space Complexity', 'Master Theorem', 'Amortized Analysis']
    },
    {
      id: 'advanced-techniques',
      title: 'Advanced Techniques',
      description: 'Greedy, DP basics, Divide & Conquer, Two Pointers',
      questionCount: 20,
      difficulty: 'Intermediate',
      topics: ['Greedy Approach', 'DP Fundamentals', 'Divide & Conquer', 'Two Pointers', 'Sliding Window']
    },
    {
      id: 'backtracking',
      title: 'Backtracking',
      description: 'Permutations, Combinations, N-Queens, Sudoku',
      questionCount: 25,
      difficulty: 'Intermediate to Advanced',
      topics: ['Permutations', 'Combinations', 'Subsets', 'N-Queens', 'Sudoku Solver', 'Pruning']
    },
    {
      id: 'trees',
      title: 'Trees',
      description: 'BST, AVL, Traversals, Tree Algorithms',
      questionCount: 30,
      difficulty: 'Intermediate to Advanced',
      topics: ['BST Operations', 'AVL Rotations', 'Tree Traversals', 'LCA', 'Tree Diameter', 'Binary Trees']
    },
    {
      id: 'heaps',
      title: 'Heaps',
      description: 'Priority Queues, Heapify, Heap Operations',
      questionCount: 18,
      difficulty: 'Intermediate',
      topics: ['Min Heap', 'Max Heap', 'Heapify', 'Priority Queue', 'Heap Sort', 'Median Stream']
    },
    {
      id: 'greedy',
      title: 'Greedy Algorithms',
      description: 'Optimization problems, MST, Shortest Paths',
      questionCount: 22,
      difficulty: 'Advanced',
      topics: ['Fractional Knapsack', 'Interval Scheduling', 'Dijkstra', 'Prim\'s MST', 'Kruskal\'s MST', 'Huffman Coding']
    },
    {
      id: 'dynamic-programming',
      title: 'Dynamic Programming',
      description: 'Memoization, Tabulation, Classic DP Problems',
      questionCount: 25,
      difficulty: 'Advanced',
      topics: ['0/1 Knapsack', 'LCS', 'LIS', 'MCM', 'TSP', 'Memoization', 'Tabulation']
    },
    {
      id: 'graphs',
      title: 'Graphs',
      description: 'BFS, DFS, Shortest Paths, MST, Connectivity',
      questionCount: 25,
      difficulty: 'Intermediate to Advanced',
      topics: ['BFS', 'DFS', 'Topological Sort', 'Cycle Detection', 'Connected Components', 'Union-Find', 'Bipartite']
    },
    {
      id: 'hashing',
      title: 'Hashing',
      description: 'Hash Tables, Collision Handling, Applications',
      questionCount: 15,
      difficulty: 'Intermediate',
      topics: ['Hash Functions', 'Collision Resolution', 'Chaining', 'Open Addressing', 'Load Factor', 'Perfect Hashing']
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