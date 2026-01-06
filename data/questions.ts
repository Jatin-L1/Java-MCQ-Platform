export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  explanation?: string
  topic?: string
  difficulty?: "easy" | "medium" | "hard"
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the time complexity of a single loop running n times?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "Time Complexity",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "What is the time complexity of nested loops each running n times?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n^2), Space Complexity: O(1)",
    topic: "Time Complexity",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "What is the space complexity of a recursive function with depth n?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Time Complexity: Depends, Space Complexity: O(n)",
    topic: "Recursion",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Time complexity of Euclidean algorithm?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "GCD",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Worst-case time complexity using trial division?",
    options: ["O(n)", "O(sqrt(n))", "O(log n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(√n), Space Complexity: O(1)",
    topic: "Prime Factorization",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Which approach checks all possibilities?",
    options: ["Greedy", "DP", "Brute Force", "Divide and Conquer"],
    correctAnswer: "C",
    explanation: "Time Complexity: Exponential, Space Complexity: Varies",
    topic: "Problem Solving",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "Greedy algorithms make decisions based on?",
    options: ["Future", "Past", "Local optimum", "Global optimum"],
    correctAnswer: "C",
    explanation: "Time Complexity: Problem dependent, Space Complexity: Problem dependent",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Merge sort follows which paradigm?",
    options: ["Greedy", "DP", "Divide and Conquer", "Backtracking"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(n)",
    topic: "Divide and Conquer",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Two pointer technique is best used when data is?",
    options: ["Unsorted", "Sorted", "Tree-based", "Graph-based"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "Two Pointer",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "Sliding window reduces complexity from?",
    options: ["O(n)", "O(n^2) to O(n)", "O(log n)", "O(1)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "Sliding Window",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Which problem uses backtracking?",
    options: ["Binary Search", "Sudoku", "Heap Sort", "BFS"],
    correctAnswer: "B",
    explanation: "Time Complexity: Exponential, Space Complexity: O(n)",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Time complexity of generating all subsets?",
    options: ["O(n)", "O(n^2)", "O(2^n)", "O(n!)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(2^n), Space Complexity: O(n)",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Worst-case time of permutation generation?",
    options: ["O(n)", "O(n^2)", "O(n!)", "O(2^n)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n!), Space Complexity: O(n)",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "Rat in a maze uses which technique?",
    options: ["Greedy", "DP", "Backtracking", "Heap"],
    correctAnswer: "C",
    explanation: "Time Complexity: Exponential, Space Complexity: O(n^2)",
    topic: "Maze Problem",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Hamiltonian path problem is?",
    options: ["Polynomial", "NP-Complete", "Linear", "Logarithmic"],
    correctAnswer: "B",
    explanation: "Time Complexity: Exponential, Space Complexity: O(n)",
    topic: "Hamiltonian Path",
    difficulty: "hard"
  },
  {
    id: 16,
    question: "Maximum number of children in binary tree?",
    options: ["1", "2", "3", "Unlimited"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "BST property is?",
    options: [
      "Left > Root > Right",
      "Left < Root < Right",
      "Random",
      "Heap property"
    ],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "BST",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "Inorder traversal of BST gives?",
    options: ["Random order", "Sorted order", "Reverse order", "Heap order"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n), Space Complexity: O(n)",
    topic: "Tree Traversal",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "AVL tree is?",
    options: ["Unbalanced", "Height balanced", "Complete", "Full"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "AVL Tree",
    difficulty: "medium"
  },
  {
    id: 20,
    question: "Maximum height of AVL tree?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "AVL Tree",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "Heap is a?",
    options: ["BST", "Complete Binary Tree", "Graph", "Hash"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Heap",
    difficulty: "easy"
  },
  {
    id: 22,
    question: "Insert in heap time complexity?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "Heap",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "Build heap using heapify?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "Heap",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "Worst-case complexity of heap sort?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(1)",
    topic: "Heap Sort",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Priority queue is implemented using?",
    options: ["Array", "Linked List", "Heap", "Graph"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(log n), Space Complexity: O(n)",
    topic: "Priority Queue",
    difficulty: "easy"
  },
  {
    id: 26,
    question: "Fractional knapsack uses?",
    options: ["DP", "Greedy", "Backtracking", "Divide and Conquer"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(1)",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "Job scheduling with deadlines is?",
    options: ["Greedy", "DP", "Backtracking", "Randomized"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(n)",
    topic: "Job Scheduling",
    difficulty: "medium"
  },
  {
    id: 28,
    question: "Bellman Ford detects?",
    options: ["Positive cycle", "Negative cycle", "MST", "Shortest tree"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(VE), Space Complexity: O(V)",
    topic: "Bellman Ford",
    difficulty: "hard"
  },
  {
    id: 29,
    question: "DP requires?",
    options: [
      "Greedy choice",
      "Optimal substructure",
      "Sorting",
      "Hashing"
    ],
    correctAnswer: "B",
    explanation: "Time Complexity: Problem dependent, Space Complexity: Problem dependent",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "Time complexity of 0/1 knapsack DP?",
    options: ["O(n)", "O(W)", "O(nW)", "O(n log W)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(nW), Space Complexity: O(nW)",
    topic: "0/1 Knapsack",
    difficulty: "hard"
  },
  {
    id: 31,
    question: "LCS DP table size?",
    options: ["n", "m", "n+m", "n*m"],
    correctAnswer: "D",
    explanation: "Time Complexity: O(nm), Space Complexity: O(nm)",
    topic: "LCS",
    difficulty: "medium"
  },
  {
    id: 32,
    question: "Matrix chain multiplication minimizes?",
    options: ["Memory", "Multiplications", "Time", "Space"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n^3), Space Complexity: O(n^2)",
    topic: "Matrix Chain",
    difficulty: "hard"
  },
  {
    id: 33,
    question: "TSP using DP time complexity?",
    options: ["O(n^2)", "O(2^n * n)", "O(n!)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(2^n * n), Space Complexity: O(2^n * n)",
    topic: "TSP",
    difficulty: "hard"
  },
  {
    id: 34,
    question: "BFS uses?",
    options: ["Stack", "Queue", "Heap", "Recursion"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "Graph",
    difficulty: "easy"
  },
  {
    id: 35,
    question: "DFS uses?",
    options: ["Queue", "Stack", "Heap", "Array"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "Graph",
    difficulty: "easy"
  },
  {
    id: 36,
    question: "Cycle detection in undirected graph uses?",
    options: ["BFS", "DFS", "DP", "Greedy"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "Graph",
    difficulty: "medium"
  },
  {
    id: 37,
    question: "Prim's algorithm uses?",
    options: ["Queue", "Stack", "Priority Queue", "Array"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(E log V), Space Complexity: O(V)",
    topic: "MST",
    difficulty: "medium"
  },
  {
    id: 38,
    question: "Kruskal algorithm uses?",
    options: ["DFS", "BFS", "Union Find", "DP"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(E log E), Space Complexity: O(V)",
    topic: "Kruskal",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "Dijkstra fails for?",
    options: [
      "Negative weights",
      "Positive weights",
      "Undirected graph",
      "Connected graph"
    ],
    correctAnswer: "A",
    explanation: "Time Complexity: O(E log V), Space Complexity: O(V)",
    topic: "Dijkstra",
    difficulty: "hard"
  },
  {
    id: 40,
    question: "Average case search in hashing?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(1), Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "easy"
  },
  {
    id: 41,
    question: "Collision handling using linked list?",
    options: ["Open addressing", "Chaining", "Rehashing", "Double hashing"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1) avg, Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "Load factor is?",
    options: [
      "size/capacity",
      "capacity/size",
      "n^2",
      "log n"
    ],
    correctAnswer: "A",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Hashing",
    difficulty: "easy"
  },
  {
    id: 43,
    question: "What is the time complexity of a loop where i = i * 2 until i > n?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "Time Complexity",
    difficulty: "medium"
  },
  {
    id: 44,
    question: "What is the recurrence relation of binary search?",
    options: ["T(n)=T(n-1)+1", "T(n)=2T(n/2)", "T(n)=T(n/2)+1", "T(n)=T(n-1)+n"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(log n), Space Complexity: O(log n)",
    topic: "Recursion",
    difficulty: "medium"
  },
  {
    id: 45,
    question: "Which technique guarantees optimal solution but may be slow?",
    options: ["Greedy", "Brute Force", "Two Pointer", "Sliding Window"],
    correctAnswer: "B",
    explanation: "Time Complexity: Exponential, Space Complexity: Varies",
    topic: "Problem Solving",
    difficulty: "medium"
  },
  {
    id: 46,
    question: "Which problem is NOT suitable for sliding window?",
    options: ["Max subarray sum", "Longest substring", "Permutation generation", "Fixed window sum"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "Sliding Window",
    difficulty: "medium"
  },
  {
    id: 47,
    question: "Backtracking is best described as?",
    options: ["Greedy pruning", "DFS with undo", "BFS with queue", "DP table fill"],
    correctAnswer: "B",
    explanation: "Time Complexity: Exponential, Space Complexity: O(n)",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 48,
    question: "Which condition allows pruning in backtracking?",
    options: ["Base case", "Invalid state", "Recursive call", "Iteration"],
    correctAnswer: "B",
    explanation: "Allows for reduced time and space complexity through pruning",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 49,
    question: "Subset sum using backtracking worst-case time?",
    options: ["O(n)", "O(n^2)", "O(2^n)", "O(n!)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(2^n), Space Complexity: O(n)",
    topic: "Subset Sum",
    difficulty: "hard"
  },
  {
    id: 50,
    question: "Maximum nodes at level L in binary tree?",
    options: ["L", "2L", "2^L", "L^2"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 51,
    question: "Height of skewed binary tree with n nodes?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 52,
    question: "Worst-case search time in BST?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "BST",
    difficulty: "medium"
  },
  {
    id: 53,
    question: "Which traversal gives sorted order in BST?",
    options: ["Preorder", "Postorder", "Inorder", "Level order"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n), Space Complexity: O(n)",
    topic: "BST",
    difficulty: "easy"
  },
  {
    id: 54,
    question: "Balance factor of AVL node is?",
    options: ["Left height + Right height", "Left - Right", "Right - Left", "Always 0"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "AVL",
    difficulty: "easy"
  },
  {
    id: 55,
    question: "Maximum allowed balance factor?",
    options: ["0", "1", "-1,0,1", "Any"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "AVL",
    difficulty: "easy"
  },
  {
    id: 56,
    question: "Which is NOT a heap property?",
    options: ["Complete tree", "Heap order", "Sorted structure", "Parent dominance"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Heap",
    difficulty: "easy"
  },
  {
    id: 57,
    question: "Delete max from max-heap complexity?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "Heap",
    difficulty: "medium"
  },
  {
    id: 58,
    question: "Heap sort is?",
    options: ["Stable", "In-place", "Recursive", "Adaptive"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(1)",
    topic: "Heap Sort",
    difficulty: "medium"
  },
  {
    id: 59,
    question: "Best structure for continuous min element retrieval?",
    options: ["Stack", "Queue", "Heap", "Array"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(log n), Space Complexity: O(n)",
    topic: "Priority Queue",
    difficulty: "easy"
  },
  {
    id: 60,
    question: "Which problem CANNOT be solved optimally using greedy?",
    options: ["Fractional knapsack", "Huffman coding", "0/1 knapsack", "Activity selection"],
    correctAnswer: "C",
    explanation: "0/1 knapsack requires dynamic programming for optimal solution",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 61,
    question: "DP is preferred over recursion when?",
    options: ["No overlap", "Large constraints", "Overlapping subproblems", "Small input"],
    correctAnswer: "C",
    explanation: "DP reduces time complexity when subproblems overlap, but increases space complexity",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 62,
    question: "Memoization stores results in?",
    options: ["Stack", "Queue", "Table", "Heap"],
    correctAnswer: "C",
    explanation: "Space Complexity: O(n) for storing results",
    topic: "Memoization",
    difficulty: "easy"
  },
  {
    id: 63,
    question: "Why greedy fails in 0/1 knapsack?",
    options: ["Overlapping", "No fractions", "Time limit", "Memory"],
    correctAnswer: "B",
    explanation: "Items cannot be fractionally included in 0/1 knapsack",
    topic: "0/1 Knapsack",
    difficulty: "medium"
  },
  {
    id: 64,
    question: "LCS differs from substring because it?",
    options: ["Is contiguous", "Allows gaps", "Is sorted", "Uses greedy"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(nm), Space Complexity: O(nm)",
    topic: "LCS",
    difficulty: "medium"
  },
  {
    id: 65,
    question: "Matrix chain DP table dimension?",
    options: ["n", "n^2", "n^3", "2n"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n^3), Space Complexity: O(n^2)",
    topic: "Matrix Chain",
    difficulty: "hard"
  },
  {
    id: 66,
    question: "TSP belongs to which class?",
    options: ["P", "NP", "NP-Hard", "Linear"],
    correctAnswer: "C",
    explanation: "Time Complexity: Exponential, Space Complexity: Exponential",
    topic: "TSP",
    difficulty: "hard"
  },
  {
    id: 67,
    question: "Graph with no cycle is called?",
    options: ["Tree", "DAG", "Forest", "Connected"],
    correctAnswer: "C",
    explanation: "A forest is a collection of trees (disconnected acyclic graph)",
    topic: "Graph",
    difficulty: "medium"
  },
  {
    id: 68,
    question: "DFS traversal order depends on?",
    options: ["Queue", "Stack", "Adjacency list order", "Heap"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "Graph",
    difficulty: "medium"
  },
  {
    id: 69,
    question: "Which traversal finds shortest path in unweighted graph?",
    options: ["DFS", "BFS", "Dijkstra", "Prim"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "Graph",
    difficulty: "medium"
  },
  {
    id: 70,
    question: "Union-Find is used in?",
    options: ["DFS", "BFS", "Kruskal", "Prim"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(E log E), Space Complexity: O(V)",
    topic: "Cycle Detection",
    difficulty: "medium"
  },
  {
    id: 71,
    question: "Prim's algorithm builds?",
    options: ["Shortest path", "MST", "DAG", "Tree"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(E log V), Space Complexity: O(V)",
    topic: "Prim",
    difficulty: "easy"
  },
  {
    id: 72,
    question: "Kruskal sorts?",
    options: ["Vertices", "Edges", "Degrees", "Paths"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(E log E), Space Complexity: O(V)",
    topic: "Kruskal",
    difficulty: "easy"
  },
  {
    id: 73,
    question: "Best data structure for optimized Dijkstra?",
    options: ["Queue", "Stack", "Min Heap", "Array"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(E log V), Space Complexity: O(V)",
    topic: "Dijkstra",
    difficulty: "medium"
  },
  {
    id: 74,
    question: "Bellman-Ford relaxes edges how many times?",
    options: ["V", "E", "V-1", "log V"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(VE), Space Complexity: O(V)",
    topic: "Bellman-Ford",
    difficulty: "medium"
  },
  {
    id: 75,
    question: "Primary clustering occurs in?",
    options: ["Chaining", "Linear probing", "Double hashing", "Separate hashing"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1) avg, Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 76,
    question: "Which reduces clustering?",
    options: ["Linear probing", "Quadratic probing", "Chaining", "Array"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1) avg, Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 77,
    question: "Rehashing is done when?",
    options: ["Collision", "Load factor high", "Search slow", "Always"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n), Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 78,
    question: "Worst-case search in hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n), Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "hard"
  },
  {
    id: 79,
    question: "Which algorithm is stable?",
    options: ["Heap sort", "Quick sort", "Merge sort", "Selection sort"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(n)",
    topic: "Mixed",
    difficulty: "medium"
  },
  {
    id: 80,
    question: "Which algorithm is in-place?",
    options: ["Merge sort", "Heap sort", "Counting sort", "Radix sort"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(1)",
    topic: "Mixed",
    difficulty: "medium"
  },
  {
    id: 81,
    question: "What is the time complexity of a loop where i decreases by half each iteration?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "Time Complexity",
    difficulty: "medium"
  },
  {
    id: 82,
    question: "Which factor mainly increases space complexity in recursion?",
    options: ["Variables", "Input size", "Call stack", "Loop"],
    correctAnswer: "C",
    explanation: "Space complexity depends on the depth of recursion due to call stack",
    topic: "Recursion",
    difficulty: "medium"
  },
  {
    id: 83,
    question: "Brute force algorithms are usually?",
    options: ["Optimal", "Approximate", "Exponential", "Greedy"],
    correctAnswer: "C",
    explanation: "Time Complexity: Exponential, Space Complexity: Varies",
    topic: "Brute Force",
    difficulty: "easy"
  },
  {
    id: 84,
    question: "Greedy algorithms fail when?",
    options: ["Optimal substructure missing", "Local choice not optimal", "No sorting", "Graph large"],
    correctAnswer: "B",
    explanation: "Greedy fails when local optimal choice doesn't lead to global optimum",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 85,
    question: "Which is NOT divide and conquer?",
    options: ["Merge sort", "Quick sort", "Binary search", "Heap sort"],
    correctAnswer: "D",
    explanation: "Heap sort doesn't use divide and conquer paradigm",
    topic: "Divide and Conquer",
    difficulty: "medium"
  },
  {
    id: 86,
    question: "Two pointer reduces complexity mostly from?",
    options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "Two Pointer",
    difficulty: "medium"
  },
  {
    id: 87,
    question: "Sliding window is applicable when window size is?",
    options: ["Fixed or variable", "Only fixed", "Only variable", "Random"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "Sliding Window",
    difficulty: "medium"
  },
  {
    id: 88,
    question: "Which problem is NOT backtracking?",
    options: ["N-Queens", "Sudoku", "Binary Search", "Rat in Maze"],
    correctAnswer: "C",
    explanation: "Binary Search is a divide and conquer algorithm, not backtracking",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 89,
    question: "Total permutations of n distinct elements?",
    options: ["n^2", "2^n", "n!", "n log n"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n!), Space Complexity: O(n)",
    topic: "Permutations",
    difficulty: "easy"
  },
  {
    id: 90,
    question: "Total subsets of a set with n elements?",
    options: ["n!", "n^2", "2^n", "n"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(2^n), Space Complexity: O(n)",
    topic: "Subsets",
    difficulty: "easy"
  },
  {
    id: 91,
    question: "Number of edges in a tree with n nodes?",
    options: ["n", "n-1", "n+1", "2n"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 92,
    question: "Which traversal uses queue?",
    options: ["Inorder", "Preorder", "Postorder", "Level order"],
    correctAnswer: "D",
    explanation: "Time Complexity: O(n), Space Complexity: O(n)",
    topic: "Binary Tree",
    difficulty: "easy"
  },
  {
    id: 93,
    question: "LCA in BST is efficient because?",
    options: ["Balanced", "Ordering property", "Height", "Traversal"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(h), Space Complexity: O(1)",
    topic: "BST",
    difficulty: "medium"
  },
  {
    id: 94,
    question: "Kth smallest in BST uses?",
    options: ["Preorder", "Postorder", "Inorder", "Level order"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n), Space Complexity: O(n)",
    topic: "BST",
    difficulty: "easy"
  },
  {
    id: 95,
    question: "LL rotation occurs when?",
    options: ["Left-Left imbalance", "Left-Right", "Right-Right", "Right-Left"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "AVL",
    difficulty: "medium"
  },
  {
    id: 96,
    question: "AVL rotations are used to?",
    options: ["Sort", "Balance", "Search", "Traverse"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "AVL",
    difficulty: "easy"
  },
  {
    id: 97,
    question: "Min-heap root contains?",
    options: ["Maximum", "Minimum", "Random", "Median"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Heap",
    difficulty: "easy"
  },
  {
    id: 98,
    question: "Height of heap with n nodes?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Heap",
    difficulty: "easy"
  },
  {
    id: 99,
    question: "Heap sort is not stable because?",
    options: ["Swapping", "Heapify", "Extra space", "Recursion"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(1)",
    topic: "Heap Sort",
    difficulty: "medium"
  },
  {
    id: 100,
    question: "Best structure to maintain median in stream?",
    options: ["Array", "BST", "Two heaps", "Queue"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(log n), Space Complexity: O(n)",
    topic: "Priority Queue",
    difficulty: "hard"
  },
  {
    id: 101,
    question: "Greedy works when problem has?",
    options: ["Optimal substructure", "Overlapping subproblems", "Cycles", "Backtracking"],
    correctAnswer: "A",
    explanation: "Greedy requires optimal substructure property",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 102,
    question: "Sorting is done based on?",
    options: ["Weight", "Value", "Value/Weight", "Index"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(1)",
    topic: "Fractional Knapsack",
    difficulty: "medium"
  },
  {
    id: 103,
    question: "Job scheduling maximizes?",
    options: ["Jobs", "Profit", "Time", "Deadline"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(n)",
    topic: "Job Scheduling",
    difficulty: "easy"
  },
  {
    id: 104,
    question: "Bellman-Ford works for?",
    options: ["Negative weights", "MST", "Unweighted graphs", "DAG"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(VE), Space Complexity: O(V)",
    topic: "Bellman-Ford",
    difficulty: "medium"
  },
  {
    id: 105,
    question: "Tabulation is?",
    options: ["Top-down", "Bottom-up", "Recursive", "Greedy"],
    correctAnswer: "B",
    explanation: "Tabulation is a bottom-up DP approach",
    topic: "Dynamic Programming",
    difficulty: "easy"
  },
  {
    id: 106,
    question: "Memoization avoids?",
    options: ["Recursion", "Recomputation", "Memory", "Base case"],
    correctAnswer: "B",
    explanation: "Time Complexity: Reduced, Space Complexity: Increased",
    topic: "Memoization",
    difficulty: "easy"
  },
  {
    id: 107,
    question: "DP table dimension depends on?",
    options: ["n only", "W only", "n and W", "log n"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(nW), Space Complexity: O(nW)",
    topic: "0/1 Knapsack",
    difficulty: "medium"
  },
  {
    id: 108,
    question: "If characters match, DP relation is?",
    options: ["1+dp[i-1][j-1]", "max(dp[i-1][j],dp[i][j-1])", "dp[i][j]=0", "dp[i][j]=1"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(nm), Space Complexity: O(nm)",
    topic: "LCS",
    difficulty: "hard"
  },
  {
    id: 109,
    question: "Optimal substructure exists because?",
    options: ["Associativity", "Overlapping", "Sorting", "Greedy"],
    correctAnswer: "A",
    explanation: "Matrix multiplication is associative, enabling optimal substructure",
    topic: "Matrix Chain",
    difficulty: "hard"
  },
  {
    id: 110,
    question: "TSP brute force time?",
    options: ["O(n^2)", "O(n!)", "O(2^n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n!), Space Complexity: O(n)",
    topic: "TSP",
    difficulty: "medium"
  },
  {
    id: 111,
    question: "Graph with direction is?",
    options: ["Tree", "Undirected", "Directed", "Forest"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Graph",
    difficulty: "easy"
  },
  {
    id: 112,
    question: "Adjacency list is better for?",
    options: ["Dense graph", "Sparse graph", "Matrix ops", "Sorting"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V+E)",
    topic: "Graph",
    difficulty: "medium"
  },
  {
    id: 113,
    question: "BFS is preferred for?",
    options: ["Cycle detection", "Topological sort", "Shortest path (unweighted)", "MST"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "BFS",
    difficulty: "medium"
  },
  {
    id: 114,
    question: "DFS is useful for?",
    options: ["Shortest path", "Cycle detection", "Level order", "Greedy"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "DFS",
    difficulty: "medium"
  },
  {
    id: 115,
    question: "Prim's algorithm grows MST from?",
    options: ["Edges", "Vertices", "Random", "Queue"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(E log V), Space Complexity: O(V)",
    topic: "Prim",
    difficulty: "medium"
  },
  {
    id: 116,
    question: "Kruskal avoids cycles using?",
    options: ["DFS", "BFS", "Union-Find", "Stack"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(E log E), Space Complexity: O(V)",
    topic: "Kruskal",
    difficulty: "medium"
  },
  {
    id: 117,
    question: "Dijkstra gives shortest path from?",
    options: ["All nodes", "Single source", "All pairs", "MST"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(E log V), Space Complexity: O(V)",
    topic: "Dijkstra",
    difficulty: "easy"
  },
  {
    id: 118,
    question: "Negative cycle means?",
    options: ["Shortest path undefined", "Graph invalid", "Cycle ignored", "MST exists"],
    correctAnswer: "A",
    explanation: "Negative cycles make shortest path undefined as you can infinitely reduce path cost",
    topic: "Bellman-Ford",
    difficulty: "medium"
  },
  {
    id: 119,
    question: "Hash function should be?",
    options: ["Simple", "Uniform", "Large", "Recursive"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Hashing",
    difficulty: "easy"
  },
  {
    id: 120,
    question: "Secondary clustering occurs in?",
    options: ["Linear probing", "Quadratic probing", "Double hashing", "Chaining"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1) avg, Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "hard"
  },
  {
    id: 121,
    question: "Best collision resolution for frequent deletions?",
    options: ["Linear probing", "Quadratic probing", "Chaining", "Double hashing"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(1) avg, Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 122,
    question: "Rehashing cost?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n), Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 123,
    question: "Which algorithm is adaptive?",
    options: ["Heap sort", "Merge sort", "Insertion sort", "Selection sort"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n^2), Space Complexity: O(1)",
    topic: "Mixed",
    difficulty: "medium"
  },
  {
    id: 124,
    question: "Which sorting has best worst-case?",
    options: ["Quick sort", "Heap sort", "Merge sort", "Bubble sort"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(n)",
    topic: "Mixed",
    difficulty: "medium"
  },
  {
    id: 125,
    question: "Which algorithm is comparison-based?",
    options: ["Counting sort", "Radix sort", "Heap sort", "Bucket sort"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(1)",
    topic: "Mixed",
    difficulty: "medium"
  },
  {
    id: 126,
    question: "What is the time complexity of a recursive function that makes two calls of size n/2?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(log n)",
    topic: "Time Complexity",
    difficulty: "hard"
  },
  {
    id: 127,
    question: "Tail recursion can be optimized to?",
    options: ["Iteration", "Memoization", "DP", "Backtracking"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "Recursion",
    difficulty: "medium"
  },
  {
    id: 128,
    question: "Which technique explores solution space depth-wise?",
    options: ["BFS", "Greedy", "Backtracking", "Sliding Window"],
    correctAnswer: "C",
    explanation: "Time Complexity: Exponential, Space Complexity: O(depth)",
    topic: "Problem Solving",
    difficulty: "medium"
  },
  {
    id: 129,
    question: "Greedy algorithms generally fail when?",
    options: ["No optimal substructure", "No local choice", "No sorting", "Large input"],
    correctAnswer: "B",
    explanation: "Greedy fails when no optimal local choice exists",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 130,
    question: "Quick sort worst-case occurs when array is?",
    options: ["Random", "Sorted", "Reverse sorted", "All equal"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n^2), Space Complexity: O(log n)",
    topic: "Divide and Conquer",
    difficulty: "medium"
  },
  {
    id: 131,
    question: "Time complexity of N-Queens problem?",
    options: ["O(n)", "O(n^2)", "O(n!)", "O(2^n)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n!), Space Complexity: O(n)",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 132,
    question: "Which technique reduces search space?",
    options: ["Memoization", "Pruning", "Sorting", "Hashing"],
    correctAnswer: "B",
    explanation: "Pruning reduces both time and space complexity",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 133,
    question: "Subset generation is based on which idea?",
    options: ["Binary representation", "Sorting", "Greedy", "Heap"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(2^n), Space Complexity: O(n)",
    topic: "Subset",
    difficulty: "medium"
  },
  {
    id: 134,
    question: "A full binary tree has?",
    options: ["0 or 2 children", "At least 1 child", "At most 1 child", "Any number"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 135,
    question: "Maximum nodes in binary tree of height h?",
    options: ["h", "2^h - 1", "h^2", "2h"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 136,
    question: "Average search time in BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "BST",
    difficulty: "easy"
  },
  {
    id: 137,
    question: "Deletion in BST has worst-case?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "BST",
    difficulty: "medium"
  },
  {
    id: 138,
    question: "Which rotation fixes LR imbalance?",
    options: ["LL", "RR", "LR", "RL"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "AVL",
    difficulty: "medium"
  },
  {
    id: 139,
    question: "AVL insertion worst-case time?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "AVL",
    difficulty: "medium"
  },
  {
    id: 140,
    question: "Heapify operation is?",
    options: ["Top-down", "Bottom-up", "Recursive only", "Greedy"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "Heap",
    difficulty: "medium"
  },
  {
    id: 141,
    question: "Extract-min from min-heap complexity?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "Heap",
    difficulty: "medium"
  },
  {
    id: 142,
    question: "Priority queue supports which operation efficiently?",
    options: ["Search", "Insert", "Median", "Traversal"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(n)",
    topic: "Priority Queue",
    difficulty: "easy"
  },
  {
    id: 143,
    question: "Activity selection selects based on?",
    options: ["Start time", "Duration", "Finish time", "Priority"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(1)",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 144,
    question: "Huffman coding minimizes?",
    options: ["Height", "Time", "Cost", "Memory"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(n)",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 145,
    question: "Bellman-Ford is preferred when?",
    options: ["Negative edges exist", "Graph is DAG", "Graph unweighted", "MST needed"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(VE), Space Complexity: O(V)",
    topic: "Bellman-Ford",
    difficulty: "medium"
  },
  {
    id: 146,
    question: "DP reduces time by trading with?",
    options: ["Accuracy", "Space", "Sorting", "Recursion"],
    correctAnswer: "B",
    explanation: "Time Complexity: Reduced, Space Complexity: Increased",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 147,
    question: "Overlapping subproblems mean?",
    options: ["Same result", "Repeated computation", "Large input", "Sorting needed"],
    correctAnswer: "B",
    explanation: "Overlapping subproblems require repeated computation without DP",
    topic: "DP",
    difficulty: "easy"
  },
  {
    id: 148,
    question: "Space optimized 0/1 knapsack uses?",
    options: ["2D array", "1D array", "Heap", "Recursion"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(nW), Space Complexity: O(W)",
    topic: "Knapsack",
    difficulty: "hard"
  },
  {
    id: 149,
    question: "LCS is different from LIS because?",
    options: ["Sorted", "Two strings", "Contiguous", "Greedy"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(nm), Space Complexity: O(nm)",
    topic: "LCS",
    difficulty: "medium"
  },
  {
    id: 150,
    question: "DP state represents?",
    options: ["Matrix", "Cost", "Indices", "Operations"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n^3), Space Complexity: O(n^2)",
    topic: "Matrix Chain",
    difficulty: "hard"
  },
  {
    id: 151,
    question: "Number of edges in complete graph with n vertices?",
    options: ["n", "n-1", "n(n-1)/2", "2n"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Graph",
    difficulty: "medium"
  },
  {
    id: 152,
    question: "Graph without cycle and connected is?",
    options: ["Forest", "Tree", "DAG", "Complete"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Graph",
    difficulty: "easy"
  },
  {
    id: 153,
    question: "BFS uses extra memory for?",
    options: ["Queue", "Stack", "Heap", "Recursion"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "BFS",
    difficulty: "easy"
  },
  {
    id: 154,
    question: "DFS recursion depth equals?",
    options: ["Edges", "Vertices", "Height", "Degree"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "DFS",
    difficulty: "medium"
  },
  {
    id: 155,
    question: "Prim's algorithm is best for?",
    options: ["Dense graphs", "Sparse graphs", "Negative edges", "Directed graphs"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(V^2), Space Complexity: O(V)",
    topic: "Prim",
    difficulty: "medium"
  },
  {
    id: 156,
    question: "Kruskal works best on?",
    options: ["Dense graphs", "Sparse graphs", "Directed graphs", "Trees"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(E log E), Space Complexity: O(V)",
    topic: "Kruskal",
    difficulty: "medium"
  },
  {
    id: 157,
    question: "Dijkstra complexity with array implementation?",
    options: ["O(V^2)", "O(E log V)", "O(E)", "O(V log V)"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(V^2), Space Complexity: O(V)",
    topic: "Dijkstra",
    difficulty: "hard"
  },
  {
    id: 158,
    question: "If relaxation still improves after V-1 iterations?",
    options: ["Shortest path", "Negative cycle", "Disconnected", "MST"],
    correctAnswer: "B",
    explanation: "Indicates presence of negative cycle in graph",
    topic: "Bellman-Ford",
    difficulty: "hard"
  },
  {
    id: 159,
    question: "Good hash function minimizes?",
    options: ["Memory", "Collisions", "Keys", "Buckets"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(1)",
    topic: "Hashing",
    difficulty: "easy"
  },
  {
    id: 160,
    question: "Double hashing reduces?",
    options: ["Secondary clustering", "Primary clustering", "Memory", "Time"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(1) avg, Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "hard"
  },
  {
    id: 161,
    question: "Worst-case insertion in hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n), Space Complexity: O(n)",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 162,
    question: "Which sort is non-comparison based?",
    options: ["Quick", "Heap", "Merge", "Counting"],
    correctAnswer: "D",
    explanation: "Time Complexity: O(n+k), Space Complexity: O(k)",
    topic: "Sorting",
    difficulty: "medium"
  },
  {
    id: 163,
    question: "Radix sort depends on?",
    options: ["Digits", "Comparisons", "Recursion", "Heap"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(d(n+k)), Space Complexity: O(n+k)",
    topic: "Sorting",
    difficulty: "medium"
  },
  {
    id: 164,
    question: "Bucket sort works best when data is?",
    options: ["Uniformly distributed", "Sorted", "Reverse", "Random"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(n), Space Complexity: O(n)",
    topic: "Sorting",
    difficulty: "medium"
  },
  {
    id: 165,
    question: "Which algorithm guarantees optimal solution?",
    options: ["Greedy", "Brute force", "Heuristic", "Randomized"],
    correctAnswer: "B",
    explanation: "Time Complexity: Exponential, Space Complexity: Varies",
    topic: "Mixed",
    difficulty: "medium"
  },
  {
    id: 166,
    question: "Which technique reduces recursion calls?",
    options: ["Memoization", "Backtracking", "DFS", "Sorting"],
    correctAnswer: "A",
    explanation: "Time Complexity: Reduced, Space Complexity: Increased",
    topic: "Mixed",
    difficulty: "medium"
  },
  {
    id: 167,
    question: "Which structure gives O(1) amortized push?",
    options: ["Array", "Vector", "Stack", "Dynamic array"],
    correctAnswer: "D",
    explanation: "Time Complexity: O(1) amortized, Space Complexity: O(n)",
    topic: "Mixed",
    difficulty: "hard"
  },
  {
    id: 168,
    question: "Which problem is NP-Complete?",
    options: ["LCS", "MST", "TSP", "Binary search"],
    correctAnswer: "C",
    explanation: "Time Complexity: Exponential, Space Complexity: Exponential",
    topic: "Advanced",
    difficulty: "hard"
  },
  {
    id: 169,
    question: "Hamiltonian path existence is?",
    options: ["P", "NP-Complete", "Polynomial", "Linear"],
    correctAnswer: "B",
    explanation: "Time Complexity: Exponential, Space Complexity: O(n)",
    topic: "Advanced",
    difficulty: "hard"
  },
  {
    id: 170,
    question: "Which paradigm uses recursion + pruning?",
    options: ["DP", "Greedy", "Backtracking", "Divide & Conquer"],
    correctAnswer: "C",
    explanation: "Time Complexity: Exponential, Space Complexity: O(depth)",
    topic: "Final",
    difficulty: "medium"
  },
  {
    id: 171,
    question: "Which paradigm reduces exponential to polynomial?",
    options: ["Greedy", "DP", "Brute force", "Random"],
    correctAnswer: "B",
    explanation: "Time Complexity: Polynomial, Space Complexity: Higher",
    topic: "Final",
    difficulty: "medium"
  },
  {
    id: 172,
    question: "Which traversal uses FIFO?",
    options: ["DFS", "BFS", "Inorder", "Postorder"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "Final",
    difficulty: "easy"
  },
  {
    id: 173,
    question: "Worst-case recursion depth in DFS?",
    options: ["O(log V)", "O(V)", "O(E)", "O(1)"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "Final",
    difficulty: "medium"
  },
  {
    id: 174,
    question: "Which algorithm always finds MST?",
    options: ["Dijkstra", "Prim", "Bellman-Ford", "DFS"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(E log V), Space Complexity: O(V)",
    topic: "Final",
    difficulty: "easy"
  },
  {
    id: 175,
    question: "Which algorithm is fastest for dense graph MST?",
    options: ["Prim", "Kruskal", "Dijkstra", "BFS"],
    correctAnswer: "A",
    explanation: "Time Complexity: O(V^2), Space Complexity: O(V)",
    topic: "Final",
    difficulty: "medium"
  },
  {
    id: 176,
    question: "Which hashing technique avoids clustering best?",
    options: ["Linear", "Quadratic", "Double hashing", "Chaining"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(1) avg, Space Complexity: O(n)",
    topic: "Final",
    difficulty: "hard"
  },
  {
    id: 177,
    question: "Which sorting is best for nearly sorted data?",
    options: ["Quick", "Heap", "Insertion", "Selection"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n), Space Complexity: O(1)",
    topic: "Final",
    difficulty: "medium"
  },
  {
    id: 178,
    question: "Which sort has worst-case O(n^2)?",
    options: ["Merge", "Heap", "Quick", "Counting"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n^2), Space Complexity: O(log n)",
    topic: "Final",
    difficulty: "medium"
  },
  {
    id: 179,
    question: "Which algorithm is unstable?",
    options: ["Merge", "Insertion", "Heap", "Bubble"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(1)",
    topic: "Final",
    difficulty: "medium"
  },
  {
    id: 180,
    question: "Which sort uses divide and conquer?",
    options: ["Heap", "Merge", "Insertion", "Counting"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(n)",
    topic: "Final",
    difficulty: "easy"
  },
  {
    id: 181,
    question: "Which algorithm has best average case?",
    options: ["Bubble", "Insertion", "Quick", "Selection"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(log n)",
    topic: "Ultimate",
    difficulty: "medium"
  },
  {
    id: 182,
    question: "Which data structure supports LIFO?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(n)",
    topic: "Ultimate",
    difficulty: "easy"
  },
  {
    id: 183,
    question: "Which structure supports FIFO?",
    options: ["Stack", "Queue", "Heap", "Tree"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(1), Space Complexity: O(n)",
    topic: "Ultimate",
    difficulty: "easy"
  },
  {
    id: 184,
    question: "Which tree guarantees log height?",
    options: ["BST", "AVL", "Binary tree", "Heap"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(log n), Space Complexity: O(1)",
    topic: "Ultimate",
    difficulty: "medium"
  },
  {
    id: 185,
    question: "Which structure is used in recursion?",
    options: ["Queue", "Heap", "Stack", "Tree"],
    correctAnswer: "C",
    explanation: "Call stack is used to manage recursive function calls",
    topic: "Ultimate",
    difficulty: "easy"
  },
  {
    id: 186,
    question: "Which algorithm uses relaxation?",
    options: ["Prim", "Dijkstra", "DFS", "Heap sort"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(E log V), Space Complexity: O(V)",
    topic: "Ultimate",
    difficulty: "medium"
  },
  {
    id: 187,
    question: "Which algorithm finds all-pairs shortest path?",
    options: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Prim"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(V^3), Space Complexity: O(V^2)",
    topic: "Ultimate",
    difficulty: "hard"
  },
  {
    id: 188,
    question: "Which algorithm uses DP on graphs?",
    options: ["DFS", "Prim", "Floyd-Warshall", "BFS"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(V^3), Space Complexity: O(V^2)",
    topic: "Ultimate",
    difficulty: "hard"
  },
  {
    id: 189,
    question: "Which traversal is recursive by nature?",
    options: ["BFS", "DFS", "Level order", "Heapify"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "Ultimate",
    difficulty: "easy"
  },
  {
    id: 190,
    question: "Which problem uses bitmask DP?",
    options: ["LCS", "Knapsack", "TSP", "MST"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(2^n * n), Space Complexity: O(2^n * n)",
    topic: "Ultimate",
    difficulty: "hard"
  },
  {
    id: 191,
    question: "Which algorithm is fastest for shortest path in DAG?",
    options: ["Dijkstra", "Bellman-Ford", "Topological DP", "Prim"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "Ultimate",
    difficulty: "hard"
  },
  {
    id: 192,
    question: "Which sorting algorithm uses buckets?",
    options: ["Merge", "Bucket", "Heap", "Quick"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n), Space Complexity: O(n)",
    topic: "Ultimate",
    difficulty: "easy"
  },
  {
    id: 193,
    question: "Which algorithm is best for external sorting?",
    options: ["Quick", "Heap", "Merge", "Insertion"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(n)",
    topic: "Ultimate",
    difficulty: "medium"
  },
  {
    id: 194,
    question: "Which algorithm guarantees minimum spanning tree?",
    options: ["Dijkstra", "Prim", "Bellman-Ford", "DFS"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(E log V), Space Complexity: O(V)",
    topic: "Ultimate",
    difficulty: "easy"
  },
  {
    id: 195,
    question: "Which data structure is used in BFS?",
    options: ["Stack", "Queue", "Heap", "Recursion"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(V+E), Space Complexity: O(V)",
    topic: "Ultimate",
    difficulty: "easy"
  },
  {
    id: 196,
    question: "Which algorithm uses divide & conquer?",
    options: ["Heap sort", "Quick sort", "Insertion sort", "Counting sort"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(log n)",
    topic: "Ultimate",
    difficulty: "easy"
  },
  {
    id: 197,
    question: "Which algorithm is best average case sorter?",
    options: ["Bubble", "Quick", "Insertion", "Selection"],
    correctAnswer: "B",
    explanation: "Time Complexity: O(n log n), Space Complexity: O(log n)",
    topic: "Ultimate",
    difficulty: "medium"
  },
  {
    id: 198,
    question: "Which structure supports priority-based deletion?",
    options: ["Queue", "Stack", "Heap", "Array"],
    correctAnswer: "C",
    explanation: "Time Complexity: O(log n), Space Complexity: O(n)",
    topic: "Ultimate",
    difficulty: "easy"
  },
  {
    id: 199,
    question: "Which algorithm always finds optimal solution?",
    options: ["Greedy", "DP", "Heuristic", "Randomized"],
    correctAnswer: "B",
    explanation: "Time Complexity: Polynomial, Space Complexity: Higher",
    topic: "Ultimate",
    difficulty: "medium"
  },
  {
    id: 200,
    question: "Which paradigm trades time for space?",
    options: ["Greedy", "DP", "Divide & Conquer", "Brute force"],
    correctAnswer: "B",
    explanation: "Time Complexity: Reduced, Space Complexity: Increased",
    topic: "Ultimate",
    difficulty: "medium"
  },
  {
    id: 201,
    question: "Which notation describes an asymptotic upper bound on running time?",
    options: ["Big-Theta (Θ)", "Big-O (O)", "Big-Omega (Ω)", "Little-o (o)"],
    correctAnswer: "B",
    explanation: "Big-O gives an asymptotic upper bound.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 202,
    question: "Which grows fastest as n → ∞?",
    options: ["O(n log n)", "O(n^2)", "O(2^n)", "O(n^3)"],
    correctAnswer: "C",
    explanation: "Exponential dominates polynomial and n log n.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 203,
    question: "The time complexity of 5n + 20 is:",
    options: ["O(5n + 20)", "O(n)", "O(n^2)", "O(log n)"],
    correctAnswer: "B",
    explanation: "Constants are dropped in asymptotic notation.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 204,
    question: "For binary search on a sorted array, worst-case time complexity is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Binary search halves search space each step.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 205,
    question: "What is the time complexity of: for(i=1;i<=n;i*=2) count++; ?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "B",
    explanation: "i doubles each iteration, number of iterations is log2(n).",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 206,
    question: "Time complexity of two nested loops each running n times is:",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
    correctAnswer: "C",
    explanation: "n * n operations.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 207,
    question: "Recursive factorial(n) = n * factorial(n-1) has stack space:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Depth of recursion is n.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 208,
    question: "T(n) = 2T(n/2) + n has time complexity:",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctAnswer: "B",
    explanation: "Classic mergesort recurrence.",
    topic: "Complexity",
    difficulty: "medium"
  },
  {
    id: 209,
    question: "T(n) = T(n/2) + O(1) has time complexity:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "One subproblem halving each time.",
    topic: "Complexity",
    difficulty: "medium"
  },
  {
    id: 210,
    question: "Which statement about quicksort is correct (standard in-place partition)?",
    options: ["Worst-case O(n log n), average O(n^2)", "Worst-case O(n^2), average O(n log n)", "Worst-case O(n), average O(n log n)", "Worst-case O(n log n), average O(n log n)"],
    correctAnswer: "B",
    explanation: "Bad pivots give O(n^2), random/average gives O(n log n).",
    topic: "Complexity",
    difficulty: "medium"
  },
  {
    id: 211,
    question: "An algorithm that uses an extra array of size n has space complexity:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: "C",
    explanation: "Auxiliary storage grows linearly with n.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 212,
    question: "In a dynamic array (vector) with doubling strategy, append operation is amortized:",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Resizes are rare; cost spreads across many appends.",
    topic: "Complexity",
    difficulty: "medium"
  },
  {
    id: 213,
    question: "Compared to iterative binary search, recursive binary search typically adds:",
    options: ["No extra space", "O(1) extra space", "O(log n) stack space", "O(n) stack space"],
    correctAnswer: "C",
    explanation: "Recursion depth is log n.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 214,
    question: "Euclid's algorithm for GCD(a,b) (iterative) runs in:",
    options: ["O(a+b)", "O(min(a,b))", "O(log min(a,b))", "O(sqrt(min(a,b)))"],
    correctAnswer: "C",
    explanation: "Remainders shrink quickly; logarithmic steps.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 215,
    question: "Trial division prime factorization up to sqrt(n) has time complexity:",
    options: ["O(log n)", "O(sqrt(n))", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Checking divisors up to sqrt(n) suffices.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 216,
    question: "If last position in 'distribute in circle' is computed using (start + chocolates - 1) % n, time complexity is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "A",
    explanation: "Only constant-time arithmetic.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 217,
    question: "If a recursion makes 2 calls on n-1 (T(n)=2T(n-1)+O(1)), time complexity is:",
    options: ["O(n)", "O(n^2)", "O(2^n)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Binary recursion tree with ~2^n nodes.",
    topic: "Complexity",
    difficulty: "medium"
  },
  {
    id: 218,
    question: "If an algorithm is both O(n) and Ω(n), it is:",
    options: ["O(n^2)", "Θ(n)", "o(n)", "ω(n)"],
    correctAnswer: "B",
    explanation: "Tight bound is Theta.",
    topic: "Complexity",
    difficulty: "easy"
  },
  {
    id: 219,
    question: "Dynamic Programming primarily improves performance by:",
    options: ["Avoiding sorting", "Using extra memory to avoid recomputation", "Replacing recursion with iteration always", "Using hashing only"],
    correctAnswer: "B",
    explanation: "Stores overlapping subproblem results (memo/tabulation).",
    topic: "Complexity",
    difficulty: "medium"
  },
  {
    id: 220,
    question: "Which algorithm can have best-case time O(n) but average O(n log n) (comparison sort)?",
    options: ["Selection sort", "Insertion sort", "Merge sort", "Heap sort"],
    correctAnswer: "B",
    explanation: "Insertion sort is O(n) on already sorted input.",
    topic: "Complexity",
    difficulty: "medium"
  },
  {
    id: 221,
    question: "Brute force technique usually means:",
    options: ["Using randomness to guess answer", "Trying all possibilities without pruning", "Always using recursion", "Always using hashing"],
    correctAnswer: "B",
    explanation: "Brute force enumerates possibilities directly.",
    topic: "Techniques",
    difficulty: "easy"
  },
  {
    id: 222,
    question: "A greedy algorithm makes a choice that is:",
    options: ["Globally optimal by proof always", "Locally optimal at each step", "Random at each step", "Based on DP table"],
    correctAnswer: "B",
    explanation: "Greedy picks locally optimal decisions.",
    topic: "Techniques",
    difficulty: "easy"
  },
  {
    id: 223,
    question: "Divide and Conquer typically involves:",
    options: ["One pass only", "Split problem into subproblems, solve recursively, combine", "Try all solutions then pick best", "Use a queue always"],
    correctAnswer: "B",
    explanation: "Split-solve-combine pattern.",
    topic: "Techniques",
    difficulty: "easy"
  },
  {
    id: 224,
    question: "DP is best used when problems have:",
    options: ["No repeated computation", "Optimal substructure and overlapping subproblems", "Only greedy choice property", "Only sorting"],
    correctAnswer: "B",
    explanation: "DP relies on these two properties.",
    topic: "Techniques",
    difficulty: "easy"
  },
  {
    id: 225,
    question: "Backtracking differs from brute force mainly because it:",
    options: ["Never uses recursion", "Prunes partial solutions that cannot lead to valid solutions", "Always runs in polynomial time", "Uses hashing to skip states"],
    correctAnswer: "B",
    explanation: "Backtracking abandons unpromising branches early.",
    topic: "Techniques",
    difficulty: "easy"
  },
  {
    id: 226,
    question: "Two-pointer technique is most commonly used on:",
    options: ["Unsorted arrays only", "Sorted arrays / linked lists / windows over sequences", "Trees only", "Graphs only"],
    correctAnswer: "B",
    explanation: "Sorted order or monotonic movement makes it effective.",
    topic: "Techniques",
    difficulty: "easy"
  },
  {
    id: 227,
    question: "Sliding window is best suited for problems asking:",
    options: ["Shortest path in graph", "Subarray/substring with constraints", "Tree traversal order", "Heap construction"],
    correctAnswer: "B",
    explanation: "Maintain a moving window with invariant.",
    topic: "Techniques",
    difficulty: "easy"
  },
  {
    id: 228,
    question: "Tail recursion can often be optimized to:",
    options: ["Use no memory", "Use iteration (constant stack) by compiler optimization", "Become exponential", "Always become DP"],
    correctAnswer: "B",
    explanation: "Tail call elimination can convert recursion to loop.",
    topic: "Techniques",
    difficulty: "medium"
  },
  {
    id: 229,
    question: "Randomized quicksort achieves expected time O(n log n) mainly because:",
    options: ["It avoids comparisons", "Random pivots reduce probability of worst-case partitions", "It uses a heap internally", "It always picks median pivot deterministically"],
    correctAnswer: "B",
    explanation: "Randomization makes bad pivot sequences unlikely.",
    topic: "Techniques",
    difficulty: "medium"
  },
  {
    id: 230,
    question: "Which problem is NOT correctly solved by a simple greedy choice in general?",
    options: ["Fractional knapsack", "0/1 knapsack", "Interval scheduling (maximize number of non-overlapping intervals)", "Huffman coding"],
    correctAnswer: "B",
    explanation: "0/1 knapsack needs DP; greedy can fail.",
    topic: "Techniques",
    difficulty: "medium"
  },
  {
    id: 231,
    question: "Merge sort follows which paradigm?",
    options: ["Greedy", "Divide and conquer", "Backtracking", "Randomized"],
    correctAnswer: "B",
    explanation: "Splits array, sorts halves, merges.",
    topic: "Techniques",
    difficulty: "medium"
  },
  {
    id: 232,
    question: "Given sorted array, best approach to find if any pair sums to X is:",
    options: ["Nested loops", "Two pointers (low/high)", "DP", "Backtracking permutations"],
    correctAnswer: "B",
    explanation: "Move pointers based on sum comparison.",
    topic: "Techniques",
    difficulty: "medium"
  },
  {
    id: 233,
    question: "For finding maximum sum subarray of fixed size k, best approach is:",
    options: ["Sort array", "Sliding window", "Binary search", "Backtracking"],
    correctAnswer: "B",
    explanation: "Update sum by removing left and adding right.",
    topic: "Techniques",
    difficulty: "medium"
  },
  {
    id: 234,
    question: "A recursion that branches b ways and has depth d has worst-case nodes about:",
    options: ["O(d)", "O(b + d)", "O(b^d)", "O(d^b)"],
    correctAnswer: "C",
    explanation: "Branching factor b over depth d gives b^d nodes.",
    topic: "Techniques",
    difficulty: "medium"
  },
  {
    id: 235,
    question: "In backtracking, a 'pruning condition' is used to:",
    options: ["Increase recursion depth", "Stop exploring branches that cannot produce better/valid solutions", "Sort the input", "Guarantee O(n log n)"],
    correctAnswer: "B",
    explanation: "Pruning cuts off unproductive paths early.",
    topic: "Techniques",
    difficulty: "medium"
  },
  {
    id: 236,
    question: "Memoization is:",
    options: ["Storing results of function calls to avoid recomputation", "Sorting to improve best-case", "Using a queue to avoid recursion", "A greedy technique"],
    correctAnswer: "A",
    explanation: "Memoization caches computed subproblem values.",
    topic: "Techniques",
    difficulty: "medium"
  },
  {
    id: 237,
    question: "A Monte Carlo algorithm differs from a Las Vegas algorithm because Monte Carlo:",
    options: ["Always outputs correct answer but variable time", "May output incorrect answer with small probability", "Never uses randomness", "Is always deterministic"],
    correctAnswer: "B",
    explanation: "Monte Carlo trades correctness probability for speed.",
    topic: "Techniques",
    difficulty: "hard"
  },
  {
    id: 238,
    question: "In recursion, each call typically adds overhead due to:",
    options: ["Heap allocation always", "Stack frame creation (return address, locals)", "Sorting the input", "Hash collisions"],
    correctAnswer: "B",
    explanation: "Function calls push frames onto call stack.",
    topic: "Techniques",
    difficulty: "easy"
  },
  {
    id: 239,
    question: "Which technique is most appropriate for 'minimum coins to make sum' (unbounded coins) in general?",
    options: ["Greedy always works", "Dynamic programming", "Two pointers", "Heap"],
    correctAnswer: "B",
    explanation: "Coin change typically requires DP unless special coin systems.",
    topic: "Techniques",
    difficulty: "hard"
  },
  {
    id: 240,
    question: "For 'find duplicates in array' with expected O(n) time, best general approach is:",
    options: ["Nested loops", "Hashing (hash set/map)", "Heap sort then scan", "Backtracking"],
    correctAnswer: "B",
    explanation: "Hash set detects repeats in expected O(1) per insert.",
    topic: "Techniques",
    difficulty: "medium"
  },
  {
    id: 241,
    question: "Generating all permutations of n distinct elements takes time:",
    options: ["O(n)", "O(n log n)", "O(n!)", "O(2^n)"],
    correctAnswer: "C",
    explanation: "There are n! permutations; output size is n!.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 242,
    question: "If you print each permutation of length n, total work is closer to:",
    options: ["O(n!)", "O(n * n!)", "O(2^n)", "O(n^2)"],
    correctAnswer: "B",
    explanation: "Each permutation has length n to construct/print.",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 243,
    question: "Number of subsets of a set of size n is:",
    options: ["n!", "2^n", "n^2", "n log n"],
    correctAnswer: "B",
    explanation: "Each element chosen or not chosen.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 244,
    question: "Backtracking solution for subset sum (no DP) is worst-case:",
    options: ["O(n)", "O(n log n)", "O(2^n)", "O(n^2)"],
    correctAnswer: "C",
    explanation: "Try include/exclude each element.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 245,
    question: "In grid word search with branching up to 4 directions, worst-case complexity for word length L is about:",
    options: ["O(L)", "O(4^L)", "O(L^4)", "O(mn)"],
    correctAnswer: "B",
    explanation: "At each step up to 4 choices (worst case).",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 246,
    question: "Backtracking for Hamiltonian path in a general graph is typically:",
    options: ["Polynomial time", "Exponential time", "O(V+E)", "O(E log V)"],
    correctAnswer: "B",
    explanation: "Hamiltonian path is NP-complete in general.",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 247,
    question: "A typical 'robot movement' backtracking on grid with visited tracking primarily prevents:",
    options: ["Sorting", "Revisiting the same cell causing infinite loops", "Need for recursion", "Need for adjacency list"],
    correctAnswer: "B",
    explanation: "Visited set avoids cycles.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 248,
    question: "Rat in a maze backtracking explores paths; if only 2 directions (Right, Down) in m x n grid, worst-case paths count is:",
    options: ["O(m+n)", "O(mn)", "Exponential in (m+n)", "O(log(m+n))"],
    correctAnswer: "C",
    explanation: "Number of paths is combinatorial (binomial coefficient).",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 249,
    question: "Sudoku solving by backtracking has worst-case time complexity approximately:",
    options: ["O(n^2)", "O(9^k) where k is number of empty cells", "O(k log k)", "O(2^n)"],
    correctAnswer: "B",
    explanation: "Each empty cell can try up to 9 digits.",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 250,
    question: "Generating all binary strings of length n produces how many strings?",
    options: ["n", "n^2", "2^n", "n!"],
    correctAnswer: "C",
    explanation: "Each position has 2 choices.",
    topic: "Backtracking",
    difficulty: "easy"
  },
  {
    id: 251,
    question: "Time complexity to generate all n-bit binary strings (and store them) is:",
    options: ["O(2^n)", "O(n * 2^n)", "O(n^2)", "O(log n)"],
    correctAnswer: "B",
    explanation: "There are 2^n strings, each of length n.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 252,
    question: "Equal partition problem can be solved using DP in O(n*sum). Backtracking worst-case is:",
    options: ["O(n log n)", "O(n^2)", "O(2^n)", "O(sum)"],
    correctAnswer: "C",
    explanation: "Subset enumeration is exponential.",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 253,
    question: "In subset sum backtracking, sorting and stopping when currentSum > target (positive numbers) is an example of:",
    options: ["Memoization", "Pruning", "Hashing", "BFS"],
    correctAnswer: "B",
    explanation: "Cuts branches that cannot reach target.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 254,
    question: "Backtracking state usually consists of:",
    options: ["Only final answer", "Partial candidate solution + remaining choices", "Sorted input only", "Graph edges only"],
    correctAnswer: "B",
    explanation: "State is a partial solution plus choices to extend it.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 255,
    question: "Sudoku, N-Queens, and graph coloring are classic examples of:",
    options: ["Two-pointer problems", "Constraint satisfaction problems solved via backtracking", "Pure greedy problems", "Heap problems"],
    correctAnswer: "B",
    explanation: "They build solutions under constraints with pruning.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 256,
    question: "Standard backtracking for N-Queens has worst-case time closest to:",
    options: ["O(n)", "O(n^2)", "Exponential / roughly O(n!)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Placing queens row-wise leads to factorial-scale search with pruning.",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 257,
    question: "In word search, using a Trie for multiple words helps mainly by:",
    options: ["Changing DFS to BFS", "Pruning paths that do not match any prefix", "Sorting the board", "Guaranteeing O(mn)"],
    correctAnswer: "B",
    explanation: "Trie stops exploring when prefix not present.",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 258,
    question: "Generating all k-combinations of n elements outputs:",
    options: ["n!", "2^n", "C(n,k)", "n^k"],
    correctAnswer: "C",
    explanation: "Total combinations are n choose k.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 259,
    question: "A typical recursion to generate subsets chooses:",
    options: ["Include/exclude current element", "Always include current element", "Always exclude current element", "Randomly swap elements"],
    correctAnswer: "A",
    explanation: "Binary decision per element.",
    topic: "Backtracking",
    difficulty: "easy"
  },
  {
    id: 260,
    question: "Space complexity of backtracking is often dominated by:",
    options: ["Sorting", "Recursion stack depth and current partial solution", "Number of CPUs", "Input reading time"],
    correctAnswer: "B",
    explanation: "Depth and state storage determine extra space.",
    topic: "Backtracking",
    difficulty: "easy"
  },
  {
    id: 261,
    question: "In Sudoku, the constraint for a valid placement is:",
    options: ["Only row uniqueness", "Row, column, and 3x3 subgrid uniqueness", "Only column uniqueness", "Only diagonal uniqueness"],
    correctAnswer: "B",
    explanation: "All three conditions must hold.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 262,
    question: "In permutation generation using swapping, the space used (excluding output) is:",
    options: ["O(1) always", "O(n) due to recursion depth", "O(n^2)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Recursion depth is n.",
    topic: "Backtracking",
    difficulty: "easy"
  },
  {
    id: 263,
    question: "Branch and Bound differs from plain backtracking mainly by:",
    options: ["Never using recursion", "Using bounds to prune based on best-known objective value", "Always being polynomial time", "Only working on trees"],
    correctAnswer: "B",
    explanation: "Uses objective bounds to cut search space for optimization problems.",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 264,
    question: "A safe pruning rule in Hamiltonian path search is:",
    options: ["If a vertex has degree 0, still continue", "If unvisited vertices include one isolated from remaining graph, prune", "Always prune after visiting 2 vertices", "Prune if graph is connected"],
    correctAnswer: "B",
    explanation: "If remaining unvisited set cannot be connected into a path, no solution.",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 265,
    question: "Using bitmasks for used-elements in permutation/backtracking helps mainly by:",
    options: ["Reducing time of membership checks to O(1)", "Making it non-recursive", "Reducing number of permutations", "Guaranteeing polynomial time"],
    correctAnswer: "A",
    explanation: "Bit operations make checks and updates fast.",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 266,
    question: "In a tree with N nodes, number of edges is:",
    options: ["N", "N-1", "N+1", "2N"],
    correctAnswer: "B",
    explanation: "Connected acyclic graph has N-1 edges.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 267,
    question: "Inorder traversal of a BST produces keys in:",
    options: ["Random order", "Descending order", "Ascending order", "Level order"],
    correctAnswer: "C",
    explanation: "Left-Root-Right yields sorted order for BST.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 268,
    question: "Time complexity of any full tree traversal (pre/in/post order) visiting each node once is:",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"],
    correctAnswer: "B",
    explanation: "Each node processed constant times.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 269,
    question: "Worst-case height of a BST with n nodes (inserting sorted data) is:",
    options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Degenerates to a linked list.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 270,
    question: "Average-case time for search in a reasonably balanced BST is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Height is logarithmic when balanced.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 271,
    question: "Time complexity for inserting into a BST is:",
    options: ["O(1)", "O(h) where h is height", "O(n log n)", "O(n^2)"],
    correctAnswer: "B",
    explanation: "Insertion follows a root-to-leaf path.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 272,
    question: "An AVL tree maintains which property at each node?",
    options: ["Keys in random order", "Height difference (balance factor) between left and right subtree is at most 1", "Exactly 2 children always", "All leaves at same depth"],
    correctAnswer: "B",
    explanation: "AVL is height-balanced with balance factor in {-1,0,1}.",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 273,
    question: "Height of an AVL tree with n nodes is:",
    options: ["O(n)", "O(log n)", "O(sqrt(n))", "O(n log n)"],
    correctAnswer: "B",
    explanation: "AVL keeps height logarithmic.",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 274,
    question: "A single right rotation fixes which imbalance case (at a node X)?",
    options: ["Right-Right", "Left-Left", "Left-Right", "Right-Left"],
    correctAnswer: "B",
    explanation: "LL case is fixed by right rotation.",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 275,
    question: "A left-right (LR) imbalance is fixed by:",
    options: ["One right rotation", "One left rotation", "Left rotation on left child then right rotation on node", "Right rotation on right child then left rotation on node"],
    correctAnswer: "C",
    explanation: "LR requires double rotation: left on child, right on node.",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 276,
    question: "Level-order traversal typically uses which data structure?",
    options: ["Stack", "Queue", "Heap", "Hash map"],
    correctAnswer: "B",
    explanation: "BFS-style traversal uses a queue.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 277,
    question: "A full binary tree is a tree where each node has:",
    options: ["At most 1 child", "Exactly 2 children", "Either 0 or 2 children", "Exactly 1 child"],
    correctAnswer: "C",
    explanation: "Full binary tree nodes have 0 or 2 children.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 278,
    question: "A complete binary tree is:",
    options: ["All levels completely filled always", "All levels filled except possibly last, filled from left to right", "Every node has 0 or 2 children", "Balanced by height difference at most 1"],
    correctAnswer: "B",
    explanation: "Completeness means last level filled left to right.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 279,
    question: "Deleting a node with two children in a BST typically replaces it with:",
    options: ["Any leaf node", "Its inorder predecessor or inorder successor", "The root always", "A random node"],
    correctAnswer: "B",
    explanation: "Replace by predecessor/successor to preserve BST order.",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 280,
    question: "Best time complexity to find LCA of two nodes in a BST (using BST property) is:",
    options: ["O(n)", "O(h)", "O(log n) always", "O(1)"],
    correctAnswer: "B",
    explanation: "Walk down from root based on key comparisons; cost is height.",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 281,
    question: "To find kth smallest in BST using inorder traversal (early stopping), time is:",
    options: ["O(log n)", "O(k)", "O(h + k)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Need to descend height h and visit k nodes in inorder.",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 282,
    question: "If each node stores subtree size, kth smallest query can be answered in:",
    options: ["O(1)", "O(h)", "O(k)", "O(n)"],
    correctAnswer: "B",
    explanation: "Use sizes to decide left/right in one root-to-leaf path.",
    topic: "Trees",
    difficulty: "hard"
  },
  {
    id: 283,
    question: "Correct way to validate a BST is:",
    options: ["Check only each node against its immediate children", "Inorder traversal must be non-decreasing (for distinct keys strictly increasing)", "Check only root value", "Check tree is complete"],
    correctAnswer: "B",
    explanation: "Global ordering is required; inorder property captures it.",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 284,
    question: "Diameter of a tree can be computed in O(n) by:",
    options: ["Sorting nodes", "Two BFS/DFS passes (from any node to farthest, then from farthest again)", "Using binary search", "Using heap"],
    correctAnswer: "B",
    explanation: "Two traversals give longest path length in tree.",
    topic: "Trees",
    difficulty: "hard"
  },
  {
    id: 285,
    question: "AVL insertion worst-case time complexity is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "BST insert O(log n) plus O(1) rotations on the path.",
    topic: "Trees",
    difficulty: "hard"
  },
  {
    id: 286,
    question: "How many rotations are needed at most to rebalance after one AVL insertion (at first unbalanced node)?",
    options: ["0", "1", "2", "O(log n)"],
    correctAnswer: "C",
    explanation: "At most a double rotation (2) at the first unbalanced node.",
    topic: "Trees",
    difficulty: "hard"
  },
  {
    id: 287,
    question: "Preorder traversal order is:",
    options: ["Left, Right, Root", "Left, Root, Right", "Root, Left, Right", "Root, Right, Left only"],
    correctAnswer: "C",
    explanation: "Preorder visits root before subtrees.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 288,
    question: "Postorder traversal order is:",
    options: ["Root, Left, Right", "Left, Right, Root", "Left, Root, Right", "Right, Root, Left"],
    correctAnswer: "B",
    explanation: "Postorder visits root after subtrees.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 289,
    question: "Iterative inorder traversal commonly uses:",
    options: ["Queue", "Stack", "Heap", "Hash set"],
    correctAnswer: "B",
    explanation: "Stack simulates recursion.",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 290,
    question: "A height-balanced binary tree (general definition) requires:",
    options: ["Complete binary tree", "At every node, |height(left) - height(right)| <= 1", "BST property", "All leaves at same depth"],
    correctAnswer: "B",
    explanation: "This is the standard height-balanced definition.",
    topic: "Trees",
    difficulty: "medium"
  },
  {
    id: 291,
    question: "Minimum element in a BST is found by going:",
    options: ["Always right", "Always left until null", "Root only", "Level order traversal"],
    correctAnswer: "B",
    explanation: "Leftmost node contains minimum key.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 292,
    question: "Maximum element in a BST is found by going:",
    options: ["Always left", "Always right until null", "Randomly", "Postorder"],
    correctAnswer: "B",
    explanation: "Rightmost node contains maximum key.",
    topic: "Trees",
    difficulty: "easy"
  },
  {
    id: 293,
    question: "For LCA in a general binary tree (not BST), a common approach uses postorder recursion and returns matches. Time complexity is:",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
    correctAnswer: "B",
    explanation: "May need to scan entire tree in worst case.",
    topic: "Trees",
    difficulty: "hard"
  },
  {
    id: 294,
    question: "A binary tree can be uniquely reconstructed from:",
    options: ["Inorder alone", "Preorder alone", "Preorder and inorder (with distinct keys)", "Level order alone"],
    correctAnswer: "C",
    explanation: "Two traversals (pre+in) uniquely identify structure with unique keys.",
    topic: "Trees",
    difficulty: "hard"
  },
  {
    id: 295,
    question: "Morris inorder traversal achieves O(1) extra space by:",
    options: ["Using a queue", "Using recursion", "Temporarily modifying tree links (threading)", "Storing all nodes in array"],
    correctAnswer: "C",
    explanation: "Creates temporary threads to predecessor to avoid stack.",
    topic: "Trees",
    difficulty: "hard"
  },
  {
    id: 296,
    question: "In a max-heap, the key at the root is:",
    options: ["Minimum", "Maximum", "Median", "Random"],
    correctAnswer: "B",
    explanation: "Max-heap maintains parent >= children.",
    topic: "Heaps",
    difficulty: "easy"
  },
  {
    id: 297,
    question: "Time complexity of inserting an element into a binary heap is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Bubble-up takes at most heap height log n.",
    topic: "Heaps",
    difficulty: "easy"
  },
  {
    id: 298,
    question: "Time complexity of extracting min from a min-heap is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Heapify-down along height.",
    topic: "Heaps",
    difficulty: "easy"
  },
  {
    id: 299,
    question: "Building a heap from an array using bottom-up heapify takes:",
    options: ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "B",
    explanation: "Floyd's build-heap runs in linear time.",
    topic: "Heaps",
    difficulty: "medium"
  },
  {
    id: 300,
    question: "Heap sort time complexity is:",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctAnswer: "B",
    explanation: "n extractions each O(log n).",
    topic: "Heaps",
    difficulty: "medium"
  },
  {
    id: 301,
    question: "A priority queue is commonly implemented using:",
    options: ["Binary heap", "Stack", "Singly linked list only", "Binary search (no DS)"],
    correctAnswer: "A",
    explanation: "Heap supports fast insert and extract-extreme.",
    topic: "Heaps",
    difficulty: "easy"
  },
  {
    id: 302,
    question: "To check if an array represents a max-heap, you must verify:",
    options: ["Array is sorted", "Each parent >= its children", "Tree is BST", "All leaves same level"],
    correctAnswer: "B",
    explanation: "Heap property is parent dominates children.",
    topic: "Heaps",
    difficulty: "easy"
  },
  {
    id: 303,
    question: "To maintain the maximum element in a stream with insertions, best DS is:",
    options: ["Stack", "Max-heap", "Queue", "Sorted array with binary search insertion always"],
    correctAnswer: "B",
    explanation: "Max-heap supports O(log n) insert and O(1) peek max.",
    topic: "Heaps",
    difficulty: "medium"
  },
  {
    id: 304,
    question: "Finding median in a continuous stream is efficiently done using:",
    options: ["One min-heap only", "Two heaps (max-heap for lower half, min-heap for upper half)", "Stack + queue", "Only BST without balancing"],
    correctAnswer: "B",
    explanation: "Two heaps keep halves balanced for O(1) median lookup.",
    topic: "Heaps",
    difficulty: "hard"
  },
  {
    id: 305,
    question: "Heapify-down operation on a heap of size n takes:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "Moves down at most height log n.",
    topic: "Heaps",
    difficulty: "medium"
  },
  {
    id: 306,
    question: "To find k largest elements in an array of size n efficiently, a common approach is:",
    options: ["Sort and take last k", "Maintain min-heap of size k", "Use BFS", "Backtracking all subsets"],
    correctAnswer: "B",
    explanation: "Min-heap of size k keeps current k largest.",
    topic: "Heaps",
    difficulty: "medium"
  },
  {
    id: 307,
    question: "To find kth smallest element using a heap, typical method is:",
    options: ["Build max-heap of all elements and extract k times", "Build min-heap and extract k times", "Use stack", "Use DFS on graph"],
    correctAnswer: "B",
    explanation: "Min-heap gives smallest each extraction.",
    topic: "Heaps",
    difficulty: "medium"
  },
  {
    id: 308,
    question: "In 0-based array representation of heap, children of index i are:",
    options: ["2i and 2i+1", "2i+1 and 2i+2", "i/2 and i/2+1", "i-1 and i+1"],
    correctAnswer: "B",
    explanation: "Standard 0-based heap indexing.",
    topic: "Heaps",
    difficulty: "easy"
  },
  {
    id: 309,
    question: "In a min-heap, decreaseKey operation typically requires:",
    options: ["Heapify-down", "Heapify-up (bubble-up)", "No changes needed", "Full rebuild"],
    correctAnswer: "B",
    explanation: "Decreasing a key may violate parent relation; bubble up fixes.",
    topic: "Heaps",
    difficulty: "medium"
  },
  {
    id: 310,
    question: "In a max-heap, increaseKey operation typically requires:",
    options: ["Heapify-up (bubble-up)", "Heapify-down only", "No changes", "Sorting"],
    correctAnswer: "A",
    explanation: "Increasing may violate parent dominance; bubble up fixes.",
    topic: "Heaps",
    difficulty: "medium"
  },
  {
    id: 311,
    question: "Which statement is correct about heaps vs BSTs?",
    options: ["Heap supports fast search by key like BST", "BST inorder gives sorted order; heap does not", "Heap always has smaller height than AVL", "BST always provides O(1) min"],
    correctAnswer: "B",
    explanation: "Heap only guarantees parent-child relation; not total order.",
    topic: "Heaps",
    difficulty: "hard"
  },
  {
    id: 312,
    question: "Is heap sort stable by default?",
    options: ["Yes, always stable", "No, not stable", "Only stable for integers", "Stable only if array is sorted"],
    correctAnswer: "B",
    explanation: "Heapsort can reorder equal elements.",
    topic: "Heaps",
    difficulty: "hard"
  },
  {
    id: 313,
    question: "In a heap-based priority queue, peek (get max/min) is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "A",
    explanation: "Root stores extreme element.",
    topic: "Heaps",
    difficulty: "easy"
  },
  {
    id: 314,
    question: "Fractional knapsack is optimally solved by sorting items by:",
    options: ["Weight ascending", "Value ascending", "Value/weight ratio descending", "Random order"],
    correctAnswer: "C",
    explanation: "Take highest value density first.",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 315,
    question: "Why does the same greedy ratio strategy fail for 0/1 knapsack?",
    options: ["Because values are negative", "Because items cannot be fractioned; local choices can block optimal set", "Because sorting is not allowed", "Because ratio is undefined"],
    correctAnswer: "B",
    explanation: "Integral constraint breaks greedy optimality.",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 316,
    question: "Max number of non-overlapping intervals is solved greedily by sorting by:",
    options: ["Start time ascending", "Finish time ascending", "Duration descending", "Finish time descending"],
    correctAnswer: "B",
    explanation: "Earliest finishing leaves most room for others.",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 317,
    question: "Classic 'job sequencing with deadlines' (maximize profit, 1 unit time jobs) greedy sorts jobs by:",
    options: ["Deadline ascending", "Profit descending", "Profit/Deadline ratio", "Duration ascending"],
    correctAnswer: "B",
    explanation: "Try to schedule most profitable jobs first into latest free slots.",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 318,
    question: "Dijkstra's algorithm works correctly when edge weights are:",
    options: ["Negative allowed", "All non-negative", "Only 0 or 1", "Only positive integers less than 10"],
    correctAnswer: "B",
    explanation: "Non-negative weights ensure greedy relaxation is safe.",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 319,
    question: "Bellman-Ford can detect negative weight cycle by:",
    options: ["Running BFS once", "Doing one extra relaxation after V-1 iterations and checking changes", "Sorting edges by weight", "Using a heap"],
    correctAnswer: "B",
    explanation: "If distances still improve, a negative cycle exists.",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 320,
    question: "Compared to Dijkstra (binary heap), Bellman-Ford is typically slower because:",
    options: ["It uses recursion", "It relaxes all edges V-1 times", "It cannot store distances", "It requires sorting vertices"],
    correctAnswer: "B",
    explanation: "Repeated relaxations cause O(VE).",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 321,
    question: "Prim's and Kruskal's algorithms are used to find:",
    options: ["Shortest path", "Minimum spanning tree", "Topological order", "Strongly connected components"],
    correctAnswer: "B",
    explanation: "Both compute MST for connected weighted graphs.",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 322,
    question: "Kruskal's algorithm requires which DS to efficiently avoid cycles?",
    options: ["Stack", "Disjoint Set Union (Union-Find)", "Queue", "Hash table"],
    correctAnswer: "B",
    explanation: "Union-Find checks if endpoints are already connected.",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 323,
    question: "Huffman coding uses a greedy choice based on:",
    options: ["Largest frequencies first", "Two smallest frequencies merged repeatedly", "Random merge", "Sort by character code"],
    correctAnswer: "B",
    explanation: "Combine two least frequent symbols each step.",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 324,
    question: "Dijkstra with adjacency list + binary heap runs in:",
    options: ["O(V^2)", "O(E log V)", "O(VE)", "O(E+V)"],
    correctAnswer: "B",
    explanation: "Heap operations per relaxation lead to log V factor.",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 325,
    question: "For graphs with edge weights 0 or 1, faster shortest path than Dijkstra is:",
    options: ["Bellman-Ford", "0-1 BFS using deque", "DFS", "Kruskal"],
    correctAnswer: "B",
    explanation: "Deque supports O(V+E) for 0/1 weights.",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 326,
    question: "The greedy-choice property means:",
    options: ["A globally optimal solution can be reached by choosing a locally optimal choice", "Any local choice is optimal", "Sorting guarantees optimality", "DP is unnecessary"],
    correctAnswer: "A",
    explanation: "There exists an optimal solution beginning with a greedy choice.",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 327,
    question: "Activity selection algorithm selects the next activity with:",
    options: ["Latest start time", "Earliest finish time compatible with selected activities", "Longest duration", "Maximum overlap"],
    correctAnswer: "B",
    explanation: "Earliest finishing is optimal.",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 328,
    question: "If job sequencing with deadlines uses a DSU to find next free slot, overall complexity is closest to:",
    options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
    correctAnswer: "B",
    explanation: "Sorting dominates; DSU ops are near-constant amortized.",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 329,
    question: "Which is a common reason greedy fails?",
    options: ["No optimal substructure", "Local optimal choices do not lead to global optimum", "Input size is small", "Data is sorted"],
    correctAnswer: "B",
    explanation: "Greedy requires greedy-choice property; otherwise fails.",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 330,
    question: "Bellman-Ford relaxes all edges how many times in a graph with V vertices (without early stopping)?",
    options: ["V times", "V-1 times", "E times", "log V times"],
    correctAnswer: "B",
    explanation: "Shortest path can have at most V-1 edges.",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 331,
    question: "If a graph has a negative edge weight but no negative cycles, correct algorithm is:",
    options: ["Dijkstra", "Prim", "Bellman-Ford", "Kruskal"],
    correctAnswer: "C",
    explanation: "Bellman-Ford handles negative weights.",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 332,
    question: "Dijkstra with adjacency matrix (no heap) runs in:",
    options: ["O(E log V)", "O(V^2)", "O(VE)", "O(V+E)"],
    correctAnswer: "B",
    explanation: "Selecting min-distance vertex costs O(V) repeated V times.",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 333,
    question: "Prim's algorithm with binary heap on adjacency list typically runs in:",
    options: ["O(V^2)", "O(E log V)", "O(VE)", "O(E^2)"],
    correctAnswer: "B",
    explanation: "Heap operations per edge relaxation.",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 334,
    question: "Kruskal's algorithm time is dominated by:",
    options: ["Union operations", "Sorting edges", "DFS", "BFS"],
    correctAnswer: "B",
    explanation: "Sorting edges costs O(E log E).",
    topic: "Greedy",
    difficulty: "medium"
  },
  {
    id: 335,
    question: "Which statement is correct?",
    options: ["MST gives shortest path between any two vertices", "Shortest path tree minimizes total edge weight", "MST minimizes sum of edges in spanning tree, not pairwise shortest paths", "Dijkstra finds MST"],
    correctAnswer: "C",
    explanation: "MST objective is total weight of spanning tree, different from shortest paths.",
    topic: "Greedy",
    difficulty: "hard"
  },
  {
    id: 336,
    question: "Tabulation in DP refers to:",
    options: ["Top-down recursion with memo", "Bottom-up filling of a table", "Random guessing", "Sorting"],
    correctAnswer: "B",
    explanation: "Tabulation is bottom-up.",
    topic: "DP",
    difficulty: "easy"
  },
  {
    id: 337,
    question: "0/1 knapsack DP with n items and capacity W has time complexity:",
    options: ["O(n log W)", "O(nW)", "O(2^n)", "O(W log n)"],
    correctAnswer: "B",
    explanation: "DP states (i, w) for i items and capacity w.",
    topic: "DP",
    difficulty: "medium"
  },
  {
    id: 338,
    question: "Space optimization for 0/1 knapsack from O(nW) to O(W) requires iterating weight:",
    options: ["From low to high", "From high to low", "Random order", "Only even weights"],
    correctAnswer: "B",
    explanation: "High-to-low prevents reuse of same item multiple times.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 339,
    question: "Longest Common Subsequence DP for strings of length n and m runs in:",
    options: ["O(n+m)", "O(nm)", "O(n log m)", "O(2^n)"],
    correctAnswer: "B",
    explanation: "DP table has nm entries.",
    topic: "DP",
    difficulty: "medium"
  },
  {
    id: 340,
    question: "If X[i]==Y[j] in LCS DP, then:",
    options: ["dp[i][j]=max(dp[i-1][j],dp[i][j-1])", "dp[i][j]=dp[i-1][j-1]+1", "dp[i][j]=0", "dp[i][j]=dp[i-1][j-1]-1"],
    correctAnswer: "B",
    explanation: "Matching characters extend LCS by 1.",
    topic: "DP",
    difficulty: "medium"
  },
  {
    id: 341,
    question: "Matrix Chain Multiplication DP for n matrices runs in:",
    options: ["O(n^2)", "O(n^3)", "O(2^n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "O(n^2) states and O(n) split choices each.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 342,
    question: "Matrix Chain Multiplication minimizes:",
    options: ["Number of matrices", "Number of scalar multiplications", "Matrix rank", "Determinant value"],
    correctAnswer: "B",
    explanation: "Parenthesization changes scalar operations count.",
    topic: "DP",
    difficulty: "medium"
  },
  {
    id: 343,
    question: "Travelling Salesman Problem using DP with bitmask typically runs in:",
    options: ["O(n^2)", "O(n^3)", "O(n^2 * 2^n)", "O(2^n)"],
    correctAnswer: "C",
    explanation: "DP[mask][i] transitions over j: n * 2^n states and n transitions.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 344,
    question: "Overlapping subproblems means:",
    options: ["Subproblems are independent always", "Same subproblems are solved repeatedly in recursion", "Problem has no recursion", "Only one subproblem exists"],
    correctAnswer: "B",
    explanation: "Repeated subproblems suggest memoization/tabulation.",
    topic: "DP",
    difficulty: "easy"
  },
  {
    id: 345,
    question: "Optimal substructure means:",
    options: ["Optimal solution can be built from optimal solutions to subproblems", "All subproblems have same size", "Greedy always works", "Sorting is needed"],
    correctAnswer: "A",
    explanation: "Key requirement for DP.",
    topic: "DP",
    difficulty: "easy"
  },
  {
    id: 346,
    question: "If you can climb 1,2,3 steps, number of ways to cover distance n with DP is computed in:",
    options: ["O(log n)", "O(n)", "O(n^2)", "O(2^n)"],
    correctAnswer: "B",
    explanation: "dp[i]=dp[i-1]+dp[i-2]+dp[i-3].",
    topic: "DP",
    difficulty: "medium"
  },
  {
    id: 347,
    question: "Memoized recursion for Fibonacci reduces time from O(2^n) to:",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
    correctAnswer: "A",
    explanation: "Each Fibonacci value computed once.",
    topic: "DP",
    difficulty: "medium"
  },
  {
    id: 348,
    question: "In 0/1 knapsack, dp[i][w] usually represents:",
    options: ["Minimum weight to get value i", "Maximum value using first i items with capacity w", "Number of ways to pick items", "Sorted list of items"],
    correctAnswer: "B",
    explanation: "Standard knapsack DP definition.",
    topic: "DP",
    difficulty: "medium"
  },
  {
    id: 349,
    question: "A key advantage of DP over greedy is that DP:",
    options: ["Always uses less memory", "Considers multiple possibilities systematically and guarantees optimality when properties hold", "Never uses loops", "Works only on trees"],
    correctAnswer: "B",
    explanation: "DP evaluates state space to guarantee optimal under assumptions.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 350,
    question: "In MCM, dp[i][j] typically stores:",
    options: ["Maximum matrix value", "Minimum multiplications to compute Ai..Aj", "Number of matrices", "Determinant"],
    correctAnswer: "B",
    explanation: "dp over intervals.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 351,
    question: "To reconstruct LCS string after computing dp table, you typically:",
    options: ["Run BFS on dp table", "Backtrack from dp[n][m] to dp[0][0]", "Sort dp table", "Use heap"],
    correctAnswer: "B",
    explanation: "Follow transitions that formed the optimal value.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 352,
    question: "TSP aims to:",
    options: ["Find MST", "Find shortest Hamiltonian cycle visiting each city once and returning to start", "Find longest path", "Find shortest path between two nodes"],
    correctAnswer: "B",
    explanation: "Classic NP-hard tour optimization.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 353,
    question: "A subsequence differs from a substring because subsequence:",
    options: ["Must be contiguous", "Need not be contiguous but preserves order", "Is always longer", "Cannot repeat characters"],
    correctAnswer: "B",
    explanation: "Subsequence keeps order but can skip characters.",
    topic: "DP",
    difficulty: "medium"
  },
  {
    id: 354,
    question: "0/1 knapsack DP is called pseudo-polynomial because it depends on:",
    options: ["Number of items only", "Capacity W (numeric value), not input length in bits", "Only recursion depth", "Graph edges"],
    correctAnswer: "B",
    explanation: "Runtime scales with W's value, not log(W).",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 355,
    question: "Bellman-Ford can be seen as DP because it computes:",
    options: ["Shortest paths with at most k edges iteratively", "MST", "Topological sort", "Heap property"],
    correctAnswer: "A",
    explanation: "Distances are improved with increasing allowed edges.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 356,
    question: "Memoization is generally:",
    options: ["Bottom-up", "Top-down", "Greedy", "Randomized"],
    correctAnswer: "B",
    explanation: "Memoization wraps recursion (top-down).",
    topic: "DP",
    difficulty: "medium"
  },
  {
    id: 357,
    question: "In DP, base cases are important because they:",
    options: ["Increase time complexity", "Stop recursion/initialize table correctly", "Randomize the solution", "Sort inputs"],
    correctAnswer: "B",
    explanation: "They anchor recurrence computation.",
    topic: "DP",
    difficulty: "easy"
  },
  {
    id: 358,
    question: "In MCM, number of ways to fully parenthesize n matrices is:",
    options: ["n!", "Catalan number C_{n-1}", "2^n", "n^2"],
    correctAnswer: "B",
    explanation: "Parenthesizations correspond to Catalan numbers.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 359,
    question: "Edit distance DP also runs in O(nm). It differs from LCS because it:",
    options: ["Counts matches only", "Allows operations like insert/delete/replace with costs", "Needs heap", "Works only on numbers"],
    correctAnswer: "B",
    explanation: "Edit distance measures transform cost via operations.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 360,
    question: "In TSP bitmask DP, a common state is dp[mask][i] meaning:",
    options: ["Minimum cost to visit cities in mask and end at i", "Maximum cost to visit cities in mask", "Number of cycles in graph", "MST cost"],
    correctAnswer: "A",
    explanation: "Tracks subset visited and current endpoint.",
    topic: "DP",
    difficulty: "hard"
  },
  {
    id: 361,
    question: "In an undirected graph, sum of degrees of all vertices equals:",
    options: ["E", "2E", "V", "V+E"],
    correctAnswer: "B",
    explanation: "Each edge contributes 2 to degree sum.",
    topic: "Graphs",
    difficulty: "easy"
  },
  {
    id: 362,
    question: "BFS uses which data structure?",
    options: ["Stack", "Queue", "Heap", "Hash map"],
    correctAnswer: "B",
    explanation: "Queue ensures level-by-level expansion.",
    topic: "Graphs",
    difficulty: "easy"
  },
  {
    id: 363,
    question: "DFS can be implemented using:",
    options: ["Queue only", "Stack or recursion", "Heap only", "Disjoint set only"],
    correctAnswer: "B",
    explanation: "DFS is stack-based (explicit or recursion).",
    topic: "Graphs",
    difficulty: "easy"
  },
  {
    id: 364,
    question: "Time complexity of BFS/DFS on adjacency list is:",
    options: ["O(V^2)", "O(V+E)", "O(E log V)", "O(VE)"],
    correctAnswer: "B",
    explanation: "Each vertex and edge processed a constant number of times.",
    topic: "Graphs",
    difficulty: "easy"
  },
  {
    id: 365,
    question: "BFS/DFS on adjacency matrix has time complexity:",
    options: ["O(V+E)", "O(V^2)", "O(E log V)", "O(VE)"],
    correctAnswer: "B",
    explanation: "For each vertex, scanning all V possible neighbors.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 366,
    question: "Cycle detection in an undirected graph using DFS requires tracking:",
    options: ["Only visited[]", "Visited[] and parent of each node in DFS", "Only indegree[]", "Only outdegree[]"],
    correctAnswer: "B",
    explanation: "A visited neighbor not equal to parent indicates a cycle.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 367,
    question: "Cycle detection in a directed graph using DFS typically uses:",
    options: ["Parent array only", "Recursion stack (colors: white/gray/black)", "Heap", "Binary search"],
    correctAnswer: "B",
    explanation: "Back-edge to a gray node indicates cycle.",
    topic: "Graphs",
    difficulty: "hard"
  },
  {
    id: 368,
    question: "To find minimum number of edges in an unweighted graph between two vertices, use:",
    options: ["DFS", "BFS", "Dijkstra", "Kruskal"],
    correctAnswer: "B",
    explanation: "BFS gives shortest path in edge count for unweighted graphs.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 369,
    question: "To check if a path exists from s to t in a directed graph, standard method is:",
    options: ["Heap sort", "DFS/BFS from s", "Binary search", "Union-Find only"],
    correctAnswer: "B",
    explanation: "Reachability via traversal.",
    topic: "Graphs",
    difficulty: "easy"
  },
  {
    id: 370,
    question: "Counting number of islands in a grid using DFS/BFS runs in:",
    options: ["O(log(mn))", "O(mn)", "O((mn)^2)", "O(2^(mn))"],
    correctAnswer: "B",
    explanation: "Each cell visited at most once.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 371,
    question: "Prim's algorithm grows MST by repeatedly adding:",
    options: ["The smallest edge in the whole graph", "The smallest edge connecting the current tree to a new vertex", "Random edges", "The largest edge"],
    correctAnswer: "B",
    explanation: "Cut property: min edge crossing cut is safe.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 372,
    question: "Kruskal's algorithm grows MST by repeatedly adding:",
    options: ["Minimum edge overall that does not form a cycle", "Minimum edge adjacent to last added vertex", "Edges in BFS order", "Edges in DFS order"],
    correctAnswer: "A",
    explanation: "Sort edges and add if endpoints in different sets.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 373,
    question: "Adjacency list is most space-efficient for:",
    options: ["Dense graphs", "Sparse graphs", "Complete graphs only", "Only DAGs"],
    correctAnswer: "B",
    explanation: "Stores only existing edges.",
    topic: "Graphs",
    difficulty: "easy"
  },
  {
    id: 374,
    question: "Adjacency matrix uses space:",
    options: ["O(V+E)", "O(V^2)", "O(E^2)", "O(V log V)"],
    correctAnswer: "B",
    explanation: "Matrix of size VxV.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 375,
    question: "Topological sorting is possible only for:",
    options: ["Undirected graphs", "DAG (Directed Acyclic Graph)", "Graphs with negative edges", "Complete graphs only"],
    correctAnswer: "B",
    explanation: "Cycles prevent a valid topological order.",
    topic: "Graphs",
    difficulty: "hard"
  },
  {
    id: 376,
    question: "In an unweighted graph, BFS tree from source gives:",
    options: ["MST always", "Shortest path tree in terms of number of edges", "Maximum spanning tree", "Topological order"],
    correctAnswer: "B",
    explanation: "BFS layers correspond to minimum edge distance.",
    topic: "Graphs",
    difficulty: "hard"
  },
  {
    id: 377,
    question: "Number of connected components in an undirected graph can be found using:",
    options: ["Repeated BFS/DFS from unvisited nodes", "Binary search", "Heapify", "Dijkstra only"],
    correctAnswer: "A",
    explanation: "Each traversal marks one component.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 378,
    question: "Union-Find is particularly useful for:",
    options: ["Shortest path with negative edges", "Cycle detection in undirected graphs and Kruskal MST", "Topological sorting", "BFS queue management"],
    correctAnswer: "B",
    explanation: "Tracks connectivity under unions efficiently.",
    topic: "Graphs",
    difficulty: "hard"
  },
  {
    id: 379,
    question: "A graph is bipartite if it can be colored using:",
    options: ["1 color", "2 colors", "3 colors", "V colors"],
    correctAnswer: "B",
    explanation: "Two-coloring without conflict.",
    topic: "Graphs",
    difficulty: "hard"
  },
  {
    id: 380,
    question: "Checking bipartite using BFS/DFS runs in:",
    options: ["O(V^2)", "O(V+E)", "O(E log V)", "O(2^V)"],
    correctAnswer: "B",
    explanation: "Traverse and assign colors once.",
    topic: "Graphs",
    difficulty: "hard"
  },
  {
    id: 381,
    question: "Prim's algorithm requires the graph to be:",
    options: ["Directed only", "Weighted (typically undirected) and connected to get MST for all vertices", "Unweighted", "A tree already"],
    correctAnswer: "B",
    explanation: "MST is defined for weighted undirected graphs; disconnected yields forest.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 382,
    question: "Worst-case recursion stack depth in DFS on a graph with V vertices is:",
    options: ["O(1)", "O(log V)", "O(V)", "O(E)"],
    correctAnswer: "C",
    explanation: "A path graph causes depth V.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 383,
    question: "An MST of a connected graph with V vertices has how many edges?",
    options: ["V", "V-1", "E", "V+1"],
    correctAnswer: "B",
    explanation: "A spanning tree always has V-1 edges.",
    topic: "Graphs",
    difficulty: "easy"
  },
  {
    id: 384,
    question: "In Dijkstra, a vertex is 'finalized' when:",
    options: ["It is discovered first time", "It is removed from min-priority queue with smallest tentative distance", "All edges are sorted", "Its indegree becomes 0"],
    correctAnswer: "B",
    explanation: "Smallest tentative distance becomes permanent with non-negative edges.",
    topic: "Graphs",
    difficulty: "hard"
  },
  {
    id: 385,
    question: "Using Union-Find, an undirected graph has a cycle if during processing an edge (u,v):",
    options: ["find(u) != find(v)", "find(u) == find(v)", "u==v always", "deg(u)==deg(v)"],
    correctAnswer: "B",
    explanation: "Same set means u and v already connected => cycle formed by adding edge.",
    topic: "Graphs",
    difficulty: "medium"
  },
  {
    id: 386,
    question: "A hash function maps a key to:",
    options: ["A sorted order", "An index/bucket in a table", "A heap node", "A graph edge"],
    correctAnswer: "B",
    explanation: "Hashing maps keys to table indices.",
    topic: "Hashing",
    difficulty: "easy"
  },
  {
    id: 387,
    question: "A collision in hashing occurs when:",
    options: ["Two different keys map to same index", "Two keys map to different indices", "Key is negative", "Table is empty"],
    correctAnswer: "A",
    explanation: "Collision is same hash value for different keys.",
    topic: "Hashing",
    difficulty: "easy"
  },
  {
    id: 388,
    question: "Separate chaining resolves collisions by:",
    options: ["Rehashing until empty slot", "Storing a linked list (or dynamic structure) at each bucket", "Sorting keys", "Using recursion"],
    correctAnswer: "B",
    explanation: "Each bucket holds a chain of entries.",
    topic: "Hashing",
    difficulty: "easy"
  },
  {
    id: 389,
    question: "Linear probing is a form of:",
    options: ["Separate chaining", "Open addressing", "Divide and conquer", "Dynamic programming"],
    correctAnswer: "B",
    explanation: "Probes next slots in same array.",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 390,
    question: "Load factor α in hashing is defined as:",
    options: ["m/n", "n/m where n=keys stored, m=table size", "log(n)", "n!"],
    correctAnswer: "B",
    explanation: "α = number of stored keys divided by number of buckets.",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 391,
    question: "Average-case time complexity of search in a good hash table is:",
    options: ["O(log n)", "O(1)", "O(n)", "O(n log n)"],
    correctAnswer: "B",
    explanation: "With good hashing and controlled load factor, expected O(1).",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 392,
    question: "Worst-case time complexity of search in a hash table (with adversarial collisions) is:",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "All keys can collide into one bucket/cluster.",
    topic: "Hashing",
    difficulty: "hard"
  },
  {
    id: 393,
    question: "Rehashing is typically done to:",
    options: ["Make table smaller always", "Reduce load factor and collisions by resizing and reinserting", "Sort all keys", "Convert hash table to heap"],
    correctAnswer: "B",
    explanation: "Resize + reinsert redistributes keys with new mod.",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 394,
    question: "Double hashing uses:",
    options: ["Two arrays", "Two hash functions to compute probe sequence", "Two linked lists", "Two BFS traversals"],
    correctAnswer: "B",
    explanation: "Probe: h(key,i)=h1(key)+i*h2(key).",
    topic: "Hashing",
    difficulty: "hard"
  },
  {
    id: 395,
    question: "Problems like 'Noise in the Library' are typically solved using hashing to:",
    options: ["Compute MST", "Count/track frequencies quickly (e.g., duplicates, occurrences)", "Perform matrix multiplication", "Balance AVL trees"],
    correctAnswer: "B",
    explanation: "Hash maps are ideal for fast counting and lookup.",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 396,
    question: "To find the winner in a voting array of names, best approach is:",
    options: ["Two pointers", "Hash map frequency count", "Heapify only", "Binary search without sorting"],
    correctAnswer: "B",
    explanation: "Count votes per candidate using hash map.",
    topic: "Hashing",
    difficulty: "medium"
  },
  {
    id: 397,
    question: "Which collision handling method can suffer from primary clustering?",
    options: ["Separate chaining", "Linear probing", "Double hashing", "Quadratic probing (less than linear)"],
    correctAnswer: "B",
    explanation: "Linear probing forms contiguous clusters.",
    topic: "Hashing",
    difficulty: "hard"
  },
  {
    id: 398,
    question: "Which is a correct typical use-case of hashing in DS/Algo?",
    options: ["Maintaining sorted order efficiently without tree", "Fast membership queries (set/dictionary)", "Computing factorial", "Performing inorder traversal"],
    correctAnswer: "B",
    explanation: "Hash sets/maps provide expected O(1) membership checks.",
    topic: "Hashing",
    difficulty: "easy"
  },
  {
    id: 399,
    question: "Perfect hashing refers to hashing with:",
    options: ["Guaranteed no collisions for a fixed key set", "Guaranteed O(log n) lookup", "Always using chaining", "Always using linear probing"],
    correctAnswer: "A",
    explanation: "Perfect hash functions avoid collisions for known key sets.",
    topic: "Hashing",
    difficulty: "hard"
  },
  {
    id: 400,
    question: "'Try balancing the scale' type problems often reduce to:",
    options: ["Sorting only", "Partition / subset-sum style decision", "MST", "Topological sorting"],
    correctAnswer: "B",
    explanation: "Balancing often equals splitting weights into two groups (subset sum/partition).",
    topic: "Hashing",
    difficulty: "hard"
  }
]
