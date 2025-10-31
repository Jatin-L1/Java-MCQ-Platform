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
    question: "Which of the following correctly compares space complexity of factorial implemented iteratively vs recursively?",
    options: [
      "Iterative uses O(n) stack, recursive uses O(1) auxiliary space",
      "Iterative uses O(1) auxiliary space, recursive uses O(n) stack space",
      "Both use O(n) space",
      "Iterative uses O(n²), recursive uses O(n)"
    ],
    correctAnswer: "B",
    explanation: "Computing factorial iteratively uses only a constant number of variables (O(1) space), while the recursive version uses space proportional to the recursion depth (O(n) space) for the call stack.",
    topic: "Complexity Analysis",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "What are the time complexities of computing the nth Fibonacci number by naive recursion vs iteration?",
    options: [
      "Recursive O(n), Iterative O(2^n)",
      "Recursive O(2^n), Iterative O(n)",
      "Both O(n)",
      "Recursive O(log n), Iterative O(log n)"
    ],
    correctAnswer: "B",
    explanation: "The naive recursive Fibonacci has exponential time complexity (O(2^n)) because it recomputes subproblems, whereas the iterative (or using DP) approach runs in linear time O(n).",
    topic: "Complexity Analysis",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "For a binary search on a sorted array of size n, what are the time and space complexities of the recursive vs iterative implementations?",
    options: [
      "Both time O(n), recursive space O(n), iterative space O(1)",
      "Time O(log n) for both; recursive space O(log n), iterative space O(1)",
      "Recursive time O(n log n), iterative time O(n), both space O(1)",
      "Recursive time O(log n), iterative time O(n); both space O(log n)"
    ],
    correctAnswer: "B",
    explanation: "Both recursive and iterative binary search take O(log n) time. The recursive version uses O(log n) space for the call stack, while the iterative version uses only O(1) extra space.",
    topic: "Complexity Analysis",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Which statement about recursion vs iteration is true?",
    options: [
      "Recursive solutions always run faster than iterative ones",
      "Iterative solutions can be slower due to loop overhead",
      "Recursive solutions incur extra overhead from function calls, making them generally slower",
      "There is no difference in speed between recursion and iteration"
    ],
    correctAnswer: "C",
    explanation: "Recursive calls incur overhead from function invocation and maintaining the call stack, which generally makes recursive solutions slower than their iterative counterparts in practice.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "What happens if a recursive function has no proper base case?",
    options: [
      "The function returns immediately",
      "The recursion stops at a default depth",
      "It causes an infinite loop",
      "It causes a stack overflow or stack limit error"
    ],
    correctAnswer: "D",
    explanation: "Without a proper base case, recursion never terminates and eventually causes a stack overflow, whereas an iterative loop without termination would create an infinite loop.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Which definition best describes space complexity?",
    options: [
      "Amount of time an algorithm takes as a function of input size",
      "Total memory used by the algorithm including input size and auxiliary space",
      "Memory used exclusively for intermediate data (auxiliary space)",
      "The maximum of time and memory usage"
    ],
    correctAnswer: "B",
    explanation: "Space complexity measures the total memory used, including both the input size and any additional (auxiliary) space used by the algorithm.",
    topic: "Complexity Analysis",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "When analyzing a recursive algorithm, which method is commonly used to determine time complexity?",
    options: [
      "Counting loop iterations",
      "Recursion tree or Master Theorem",
      "Amortized analysis",
      "Branch and bound"
    ],
    correctAnswer: "B",
    explanation: "To analyze recursive algorithms, we often use recursion trees or the Master Theorem. Iterative algorithms are typically analyzed by counting loop iterations, while recursion requires handling multiple calls.",
    topic: "Complexity Analysis",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Which of the following is a key difference between recursive and iterative approaches?",
    options: [
      "Iterative methods use a stack data structure implicitly",
      "Recursive methods can always be replaced by iteration without extra space",
      "Recursive approaches use function call stack; iterative do not",
      "Iterative approaches must use more memory than recursive ones"
    ],
    correctAnswer: "C",
    explanation: "Recursive approaches inherently use the function call stack to keep track of state, while iterative methods manage state explicitly without using the call stack.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Consider computing factorial of n. Which of the following is correct?",
    options: [
      "Both recursive and iterative implementations use O(n) space",
      "Recursive uses O(1) space, iterative uses O(n) space",
      "Iterative uses O(1) space, recursive uses O(n) space",
      "Both use O(1) space"
    ],
    correctAnswer: "C",
    explanation: "An iterative factorial uses only constant extra space (O(1)), whereas the recursive version uses O(n) space due to n function calls on the stack.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Which type of problems is naturally suited to a recursive solution?",
    options: [
      "Linear search on unsorted data",
      "Tree traversals (e.g. depth-first search)",
      "Iterating over an array with a fixed step",
      "Matrix multiplication"
    ],
    correctAnswer: "B",
    explanation: "Problems that involve branching structures or divide into similar subproblems (like tree traversals, depth-first search, or divide & conquer sorts) are naturally implemented recursively.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "True or False: Every recursive function can be rewritten iteratively by using an explicit stack.",
    options: ["True", "False"],
    correctAnswer: "A",
    explanation: "It is always possible to convert recursion into iteration by using an explicit stack data structure (which is essentially what the call stack does). However, the iterative version may be more complex to write.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "In the context of recursive algorithms, what does tail recursion refer to?",
    options: [
      "A recursion where the function calls itself after some operations",
      "A recursion where the last operation is the recursive call",
      "A recursion that never terminates",
      "A recursion with multiple recursive calls"
    ],
    correctAnswer: "B",
    explanation: "A tail-recursive function is one in which the last operation of the function is a call to itself, with no further computation after returning. Such recursion can be optimized by compilers to reuse stack frames (tail-call optimization).",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Which of the following statements is true about analyzing recursive versus iterative code?",
    options: [
      "Recursion always yields a simpler Big-O time complexity than iteration",
      "Iterative loops are generally harder to analyze for time complexity",
      "Recursive calls can often be analyzed using a recursion tree or recurrence relation",
      "Iterative solutions cannot be converted to recursion"
    ],
    correctAnswer: "C",
    explanation: "Recursive solutions are typically analyzed by setting up recurrence relations or drawing a recursion tree, whereas iterative solutions are analyzed by counting loop iterations.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Compare the time complexity of binary search when implemented recursively vs iteratively.",
    options: [
      "Recursive O(n), Iterative O(log n)",
      "Recursive O(log n), Iterative O(n)",
      "Both O(n log n)",
      "Both O(log n)"
    ],
    correctAnswer: "D",
    explanation: "Both implementations of binary search perform the same logarithmic number of comparisons (dividing the search range in half each step), so both take O(log n) time. The difference lies in space, not time.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Which of the following is a drawback of using recursion instead of iteration?",
    options: [
      "Increased code complexity",
      "Potential stack overflow on deep recursion",
      "Slower running time due to call overhead",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Recursive solutions can be more complex to reason about, may run slower due to function call overhead, and can cause stack overflow if recursion depth is large without a tail call optimization.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Which method is generally not used to analyze recursive functions?",
    options: [
      "Recursion tree method",
      "Master Theorem",
      "Subtraction method (repeated difference)",
      "Mathematical induction on recursion depth"
    ],
    correctAnswer: "C",
    explanation: "Recursive functions are often analyzed using recursion trees or the Master Theorem, or proven correct using induction. The 'subtraction method' is not a standard technique for analyzing recursion.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "hard"
  },
  {
    id: 17,
    question: "What is the time complexity of the naive prime factorization algorithm (trial division)?",
    options: ["O(n)", "O(n log n)", "O(√n)", "O(log n)"],
    correctAnswer: "C",
    explanation: "The naive approach to prime factorization tries dividing by all integers up to √n, leading to a worst-case time complexity of O(√n).",
    topic: "Prime Factorization",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "If you precompute a smallest-prime-factor (SPF) array up to N using a sieve, what is the time complexity to factorize a number n (≤N)?",
    options: ["O(√n)", "O(n)", "O(log n)", "O(1)"],
    correctAnswer: "C",
    explanation: "With precomputation of the smallest prime factor for each number (using a sieve), any query for factorization can be done in O(log n) time by repeatedly dividing by SPF[n]. This is much faster for multiple queries.",
    topic: "Prime Factorization",
    difficulty: "hard"
  },
  {
    id: 19,
    question: "What is the space complexity of storing the SPF (smallest prime factor) array up to N?",
    options: ["O(log N)", "O(N)", "O(√N)", "O(1)"],
    correctAnswer: "B",
    explanation: "Storing the SPF array of size N requires O(N) space. The sieve to precompute SPF for all numbers up to N uses linear space.",
    topic: "Prime Factorization",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "Which algorithmic technique best describes the naive trial-division method for prime factorization?",
    options: [
      "Brute-force (exhaustive search)",
      "Greedy algorithm",
      "Divide & conquer",
      "Dynamic programming"
    ],
    correctAnswer: "A",
    explanation: "Trial division tries all possible divisors exhaustively until finding factors, which is a brute-force approach – straightforward but not efficient for large n.",
    topic: "Prime Factorization",
    difficulty: "easy"
  },
  {
    id: 21,
    question: "When is the worst-case reached for the naive factorization algorithm?",
    options: [
      "When n is even",
      "When n is a large prime",
      "When n is 1",
      "When n has many small factors"
    ],
    correctAnswer: "B",
    explanation: "The worst case occurs when n is prime, because the algorithm has to test all divisors up to √n and finds none before concluding n itself is prime.",
    topic: "Prime Factorization",
    difficulty: "medium"
  },
  {
    id: 22,
    question: "What is the time complexity of the Euclidean algorithm for GCD of two integers a and b?",
    options: ["O(ab)", "O(a + b)", "O(log(min(a,b)))", "O(n) where n = |a - b|"],
    correctAnswer: "C",
    explanation: "Euclid's algorithm is very efficient; its time complexity is O(log(min(a,b))) because each step reduces the size of the numbers roughly exponentially.",
    topic: "GCD of Two Numbers",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "In Euclid's GCD algorithm, what is the result of gcd(a, 0) for a > 0?",
    options: ["0", "a", "1", "Undefined"],
    correctAnswer: "B",
    explanation: "By definition, gcd(a,0) = a for a > 0, because any number divides 0, and the largest divisor is a itself.",
    topic: "GCD of Two Numbers",
    difficulty: "easy"
  },
  {
    id: 24,
    question: "Which technique best describes the Euclidean GCD algorithm?",
    options: [
      "Brute force",
      "Greedy",
      "Divide & conquer",
      "Dynamic programming"
    ],
    correctAnswer: "C",
    explanation: "Euclid's algorithm recursively reduces the problem by taking gcd(a,b) = gcd(b, a mod b), which is akin to a divide-and-conquer approach of breaking the problem into smaller subproblems.",
    topic: "GCD of Two Numbers",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Which of the following about Euclid's algorithm is true?",
    options: [
      "It is only efficient when a and b are co-prime",
      "It always takes the same number of steps regardless of inputs",
      "It reduces the problem size quickly, making it logarithmic in runtime",
      "It uses dynamic programming to store intermediate results"
    ],
    correctAnswer: "C",
    explanation: "Euclid's algorithm reduces the size of the numbers quickly at each step (taking a mod b), which leads to a logarithmic number of steps in the size of the inputs.",
    topic: "GCD of Two Numbers",
    difficulty: "medium"
  },
  {
    id: 26,
    question: "In the 'distribute in circle' problem, if there are M items, circle size N, and start position K, which formula gives the position of the M-th item?",
    options: [
      "(M + K) mod N",
      "(M + K - 1) mod N (and treat 0 as N)",
      "(M + K - 2) mod N",
      "M mod (N-K+1)"
    ],
    correctAnswer: "B",
    explanation: "The correct formula is (M + K - 1) mod N. If the result is 0, that corresponds to position N (the last position).",
    topic: "Distribute in Circle",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "When using the modulo formula (M + K - 1) mod N in the circle distribution problem, what do you do if the result is 0?",
    options: [
      "Return 0",
      "Return N + 1",
      "Return N",
      "This case never occurs"
    ],
    correctAnswer: "C",
    explanation: "If (M + K - 1) mod N equals 0, it means the last item is placed at position N (the end of the circle). The code handles this by returning N when the modulo result is 0.",
    topic: "Distribute in Circle",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "Example: N = 5, M = 8, K = 2. Where is the 8th item placed?",
    options: ["Position 3", "Position 4", "Position 5", "Position 1"],
    correctAnswer: "B",
    explanation: "Using the formula, (8 + 2 - 1) mod 5 = 9 mod 5 = 4. So the 8th item lands at position 4.",
    topic: "Distribute in Circle",
    difficulty: "easy"
  },
  {
    id: 29,
    question: "What is a primary characteristic of brute-force algorithms?",
    options: [
      "They always find the optimal solution in polynomial time",
      "They examine all possible solutions, often with high time complexity",
      "They never use loops",
      "They always use recursion"
    ],
    correctAnswer: "B",
    explanation: "Brute-force algorithms exhaustively search all possible solutions and are usually straightforward to implement, but this leads to very high time complexity for large inputs.",
    topic: "Brute Force Algorithms",
    difficulty: "easy"
  },
  {
    id: 30,
    question: "Which of these is a brute-force algorithm example?",
    options: [
      "Binary search in a sorted array",
      "Linear search in an unsorted array",
      "Quick sort using divide and conquer",
      "Dynamic programming solution to knapsack"
    ],
    correctAnswer: "B",
    explanation: "Linear search checks each element one by one until a match is found, which is a brute-force approach. It's straightforward but inefficient on large data sets.",
    topic: "Brute Force Algorithms",
    difficulty: "easy"
  },
  {
    id: 31,
    question: "In which scenario is a brute-force solution most suitable?",
    options: [
      "Very large datasets where optimal speed is required",
      "Small datasets or when no optimized solution is known",
      "Problems guaranteed to have a polynomial-time solution",
      "Real-time systems with strict time constraints"
    ],
    correctAnswer: "B",
    explanation: "Brute-force methods are practical only for small datasets or when we don't need an optimal solution. They are often used for educational purposes or small input sizes.",
    topic: "Brute Force Algorithms",
    difficulty: "medium"
  },
  {
    id: 32,
    question: "Which statement about brute-force algorithms is true?",
    options: [
      "They always use divide-and-conquer strategy",
      "They never give a correct answer",
      "They have low space complexity but high time complexity",
      "They prioritize memory usage over time"
    ],
    correctAnswer: "C",
    explanation: "Brute-force algorithms often use little extra space (just loops or recursion stack) but suffer from high time complexity due to exhaustive checking.",
    topic: "Brute Force Algorithms",
    difficulty: "medium"
  },
  {
    id: 33,
    question: "Which of the following is generally not a characteristic of brute-force solutions?",
    options: [
      "Simplicity and ease of implementation",
      "Exhaustive search of solution space",
      "Scalable efficiency for large inputs",
      "Clear correctness (they will find a solution if one exists)"
    ],
    correctAnswer: "C",
    explanation: "Brute-force solutions are simple and exhaustively search all possibilities, so they will find a solution if one exists. However, they are not scalable or efficient for large inputs.",
    topic: "Brute Force Algorithms",
    difficulty: "medium"
  },
  {
    id: 34,
    question: "Which algorithm below is a brute-force approach to sorting?",
    options: ["Merge Sort", "Heap Sort", "Bubble Sort", "Quick Sort"],
    correctAnswer: "C",
    explanation: "Bubble Sort repeatedly swaps adjacent elements and effectively checks many possibilities; it's a simple brute-force sorting algorithm with high time complexity (O(n²)).",
    topic: "Brute Force Algorithms",
    difficulty: "easy"
  },
  {
    id: 35,
    question: "Which of the following problem-solving scenarios most likely uses brute force?",
    options: [
      "Solving Sudoku by trying all possible numbers in each cell",
      "Finding shortest path in a weighted graph with Dijkstra's algorithm",
      "Making greedy choices to maximize profit",
      "Using memoization to solve overlap subproblems"
    ],
    correctAnswer: "A",
    explanation: "Solving Sudoku by trying all possibilities in each empty cell is essentially a brute-force (backtracking) search. It checks all possible number placements exhaustively until it finds a valid solution.",
    topic: "Brute Force Algorithms",
    difficulty: "medium"
  },
  {
    id: 36,
    question: "What is the time complexity of finding the maximum of all subarrays of size k by the naive approach (checking each subarray)?",
    options: ["O(n log k)", "O(n + k)", "O(n×k)", "O(n)"],
    correctAnswer: "C",
    explanation: "The naive way to compute the maximum sum of each subarray of size k is to sum each subarray independently, resulting in O(n×k) time (nested loops). A sliding window can reduce this to O(n).",
    topic: "Brute Force Algorithms",
    difficulty: "medium"
  },
  {
    id: 37,
    question: "Brute-force algorithms are usually: (choose the best answer)",
    options: [
      "Easy to implement but inefficient for large inputs",
      "Hard to implement but very fast for all inputs",
      "Optimal in both time and space for any problem",
      "Always better than greedy approaches"
    ],
    correctAnswer: "A",
    explanation: "Brute-force approaches are straightforward to implement but have high time complexity, making them impractical for large input sizes.",
    topic: "Brute Force Algorithms",
    difficulty: "easy"
  },
  {
    id: 38,
    question: "Which technique is not an example of brute-force approach?",
    options: [
      "Checking each element of an array one by one",
      "Trying all possible subsets of a set",
      "Dividing a sorted array and searching in one half (binary search)",
      "Generating all permutations of a string until a match is found"
    ],
    correctAnswer: "C",
    explanation: "Binary search is a divide-and-conquer approach (not brute-force) since it halves the problem space each step. The other options involve exhaustively checking possibilities, characteristic of brute force.",
    topic: "Brute Force Algorithms",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "Which statement best describes why brute-force methods are often impractical?",
    options: [
      "They always use too much memory",
      "They guarantee too many intermediate solutions",
      "They have exponential or polynomial time that is too large for big n",
      "They cannot be implemented in high-level languages"
    ],
    correctAnswer: "C",
    explanation: "Brute-force methods often lead to exponential or very large polynomial time complexities, making them impractical for large inputs even though they are straightforward to implement.",
    topic: "Brute Force Algorithms",
    difficulty: "medium"
  },
  {
    id: 40,
    question: "Which of the following characterizes a greedy algorithm?",
    options: [
      "It always finds the global optimum by exploring all possibilities",
      "It makes the best local choice at each step, hoping to find a global optimum",
      "It uses memoization to avoid recomputation",
      "It never makes choices that could hurt the current solution"
    ],
    correctAnswer: "B",
    explanation: "Greedy algorithms build a solution step by step by choosing the locally optimal option at each stage, with the hope (but not guarantee) of reaching a global optimum.",
    topic: "Greedy Algorithms",
    difficulty: "medium"
  },
  {
    id: 41,
    question: "Which of these problems can typically be solved with a greedy strategy?",
    options: [
      "0-1 Knapsack problem (optimal)",
      "Minimum spanning tree (e.g. Kruskal's or Prim's algorithm)",
      "Longest Common Subsequence",
      "Matrix chain multiplication"
    ],
    correctAnswer: "B",
    explanation: "Finding a minimum spanning tree (using algorithms like Kruskal's or Prim's) is a classic greedy problem. Greedy algorithms are not optimal for 0-1 knapsack or LCS, which require dynamic programming.",
    topic: "Greedy Algorithms",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "Which statement about greedy algorithms is true?",
    options: [
      "Once a greedy choice is made, it is never reconsidered",
      "Greedy algorithms always use recursion",
      "Greedy solutions always store intermediate results",
      "Greedy algorithms use exhaustive search"
    ],
    correctAnswer: "A",
    explanation: "A key property of greedy algorithms is that once they make a choice, they do not go back or reconsider it ('no backtracking'). They do not necessarily use recursion or store results like DP; rather, they rely on local decisions.",
    topic: "Greedy Algorithms",
    difficulty: "medium"
  },
  {
    id: 43,
    question: "Which of the following is a greedy algorithm example?",
    options: [
      "Dijkstra's shortest path algorithm (with a priority queue)",
      "Dynamic programming solution for Fibonacci numbers",
      "Backtracking solution for N-Queens",
      "Brute-force search of all subsets"
    ],
    correctAnswer: "A",
    explanation: "Dijkstra's algorithm (with a priority queue) is a greedy algorithm that picks the closest vertex at each step. It makes locally optimal choices to find shortest paths.",
    topic: "Greedy Algorithms",
    difficulty: "medium"
  },
  {
    id: 44,
    question: "Greedy algorithms are generally not suitable when:",
    options: [
      "A problem exhibits the optimal substructure property",
      "The best local choice does not lead to the global optimum",
      "A fast (poly-time) solution is needed",
      "The problem size is very small"
    ],
    correctAnswer: "B",
    explanation: "Greedy algorithms may fail when the local optimum choice does not lead to the global optimum. In such cases, greedy is not suitable because it cannot 'correct' earlier choices.",
    topic: "Greedy Algorithms",
    difficulty: "medium"
  },
  {
    id: 45,
    question: "Which description fits greedy algorithms?",
    options: [
      "They solve subproblems once and store the results",
      "They test all possible solutions for the best outcome",
      "They take the best immediate option at each step",
      "They combine solutions of subproblems to form a final solution"
    ],
    correctAnswer: "C",
    explanation: "Greedy algorithms repeatedly make the locally best choice (the 'greedy' choice) at each step, without guaranteeing optimality for the whole problem.",
    topic: "Greedy Algorithms",
    difficulty: "easy"
  },
  {
    id: 46,
    question: "Which problem is typically solved optimally by a greedy algorithm?",
    options: [
      "0-1 Knapsack with integer weights",
      "Fractional Knapsack (items can be divided)",
      "Finding the longest increasing subsequence",
      "Matrix chain multiplication"
    ],
    correctAnswer: "B",
    explanation: "The fractional knapsack problem is solvable optimally by a greedy algorithm (taking items with highest value/weight first). The 0-1 knapsack does not have a greedy solution (needs DP).",
    topic: "Greedy Algorithms",
    difficulty: "medium"
  },
  {
    id: 47,
    question: "Which of the following is not a characteristic of greedy algorithms?",
    options: [
      "Solutions built piece by piece with no backtracking",
      "Simplicity and relatively low time complexity",
      "Always yield a globally optimal solution",
      "Focus on local optimization at each step"
    ],
    correctAnswer: "C",
    explanation: "Greedy algorithms do not always yield a globally optimal solution; they only make the best local choice at each step and hope it leads to a global optimum. In some problems it works, in others it doesn't.",
    topic: "Greedy Algorithms",
    difficulty: "medium"
  },
  {
    id: 48,
    question: "Given activity selection (interval scheduling), what strategy does a greedy solution use?",
    options: [
      "Always pick the shortest interval first",
      "Always pick the longest interval first",
      "Always pick the interval that finishes first",
      "Random selection of intervals"
    ],
    correctAnswer: "C",
    explanation: "The classic greedy solution for activity selection picks the interval with the earliest finish time at each step. This local choice leads to an optimal global solution.",
    topic: "Greedy Algorithms",
    difficulty: "medium"
  },
  {
    id: 49,
    question: "Which best describes when a greedy algorithm is appropriate?",
    options: [
      "When the problem has no overlapping subproblems",
      "When making local choices leads to global optimality",
      "When input size is extremely large and time doesn't matter",
      "When problems can be solved by dynamic programming instead"
    ],
    correctAnswer: "B",
    explanation: "Greedy algorithms work well when the problem satisfies the 'greedy choice property' – that is, making the best local choice at each step yields a globally optimal solution. They often have efficient (e.g., O(n log n)) time complexity.",
    topic: "Greedy Algorithms",
    difficulty: "medium"
  },
  {
    id: 50,
    question: "What is the divide-and-conquer strategy?",
    options: [
      "Breaking a problem into smaller independent subproblems, solving each recursively, and combining the solutions",
      "Solving the problem by trying every possible option",
      "Making a sequence of greedy choices without recursion",
      "Using dynamic programming to store results"
    ],
    correctAnswer: "A",
    explanation: "Divide-and-conquer algorithms split the problem into smaller subproblems, solve each one (often recursively), and then combine the sub-results to solve the original problem.",
    topic: "Divide and Conquer",
    difficulty: "easy"
  },
  {
    id: 51,
    question: "Which of these algorithms is an example of divide-and-conquer?",
    options: [
      "Merge Sort",
      "Bubble Sort",
      "Dijkstra's Algorithm",
      "Brute-force subset generation"
    ],
    correctAnswer: "A",
    explanation: "Merge Sort divides the array in half (divide), recursively sorts each half (conquer), and then merges the sorted halves (combine), exemplifying divide-and-conquer.",
    topic: "Divide and Conquer",
    difficulty: "easy"
  },
  {
    id: 52,
    question: "Which statement about divide-and-conquer is false?",
    options: [
      "It often uses recursion",
      "It can improve efficiency by solving subproblems in parallel",
      "It never requires combining subproblem solutions",
      "It can lead to algorithms like QuickSort and Binary Search"
    ],
    correctAnswer: "C",
    explanation: "In divide-and-conquer, combining the solutions of subproblems is a fundamental step; saying it 'never requires combining' is false. Recursion and combining are core aspects.",
    topic: "Divide and Conquer",
    difficulty: "medium"
  },
  {
    id: 53,
    question: "Which problem is not typically solved by divide-and-conquer?",
    options: [
      "Finding the maximum in an unsorted array",
      "Binary Search on a sorted array",
      "Quick Sort",
      "Computing Fibonacci numbers naively"
    ],
    correctAnswer: "D",
    explanation: "The naive Fibonacci algorithm isn't divide-and-conquer in an efficient way (it repeats work). The other problems (max-finding can be done by splitting, binary search, quicksort) lend themselves to a divide-and-conquer strategy.",
    topic: "Divide and Conquer",
    difficulty: "medium"
  },
  {
    id: 54,
    question: "What is the time complexity of standard merge sort (a divide-and-conquer algorithm) on an array of size n?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: "B",
    explanation: "Merge sort (divide, sort, merge) always does O(n log n) work in the worst case.",
    topic: "Divide and Conquer",
    difficulty: "easy"
  },
  {
    id: 55,
    question: "Which of the following best describes the 'conquer' step of divide-and-conquer?",
    options: [
      "Merging the divided parts back together after solving them",
      "Solving the subproblems (often by recursion)",
      "Splitting the main problem into smaller ones",
      "Randomly selecting parts of the data"
    ],
    correctAnswer: "B",
    explanation: "In divide-and-conquer, 'conquer' refers to solving each of the smaller subproblems (usually by recursion). 'Divide' is splitting, and 'combine' (or merging) is combining solutions.",
    topic: "Divide and Conquer",
    difficulty: "medium"
  },
  {
    id: 56,
    question: "Binary search is an example of which design technique?",
    options: ["Greedy", "Backtracking", "Divide and Conquer", "Brute Force"],
    correctAnswer: "C",
    explanation: "Binary search divides the sorted array in half and discards one half each step (divide) until it finds the element. It fits the divide-and-conquer paradigm.",
    topic: "Divide and Conquer",
    difficulty: "easy"
  },
  {
    id: 57,
    question: "Which of these is not required for a divide-and-conquer algorithm?",
    options: [
      "A base case for small subproblems",
      "Combining results of subproblems",
      "Overlapping subproblems with caching",
      "Recursive splitting of the problem"
    ],
    correctAnswer: "C",
    explanation: "Overlapping subproblems with caching is a concept of dynamic programming, not divide-and-conquer. Divide-and-conquer requires splitting, solving base cases, and combining.",
    topic: "Divide and Conquer",
    difficulty: "medium"
  },
  {
    id: 58,
    question: "The 'divide' step in divide-and-conquer usually results in:",
    options: [
      "Two or more smaller instances of the original problem",
      "A single simpler instance of the problem",
      "No subproblems, just one",
      "Brute-force enumeration"
    ],
    correctAnswer: "A",
    explanation: "The divide step breaks the problem into multiple smaller subproblems (often of roughly half the size) which are then solved recursively.",
    topic: "Divide and Conquer",
    difficulty: "easy"
  },
  {
    id: 59,
    question: "Which sorting algorithm is NOT a divide-and-conquer algorithm?",
    options: ["Merge Sort", "Quick Sort", "Heap Sort", "Binary Insertion Sort"],
    correctAnswer: "C",
    explanation: "Heap Sort is not divide-and-conquer; it uses a heap data structure and repeatedly extracts the maximum. Merge Sort and Quick Sort are classic divide-and-conquer sorts.",
    topic: "Divide and Conquer",
    difficulty: "medium"
  },
  {
    id: 60,
    question: "Which of the following is a key characteristic of dynamic programming?",
    options: [
      "Exploring all possibilities without memoization",
      "Making greedy local choices",
      "Solving overlapping subproblems and storing results",
      "Using only recursion without any optimization"
    ],
    correctAnswer: "C",
    explanation: "Dynamic programming solves problems by breaking them into overlapping subproblems and storing (memoizing) their results to avoid redundant work.",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 61,
    question: "Which problem is typically solved by dynamic programming, not by a simple greedy strategy?",
    options: [
      "Fractional Knapsack",
      "Dijkstra's shortest path",
      "0-1 Knapsack",
      "Activity Selection"
    ],
    correctAnswer: "C",
    explanation: "The 0-1 Knapsack problem is a classic DP problem requiring exploration of combinations (best solution). Fractional knapsack and activity selection have greedy solutions, and Dijkstra's is a greedy graph algorithm.",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 62,
    question: "Which of these uses dynamic programming?",
    options: [
      "Computing the nth Fibonacci number by tabulation",
      "Finding prime factors by trial division",
      "Sorting by bubble sort",
      "Greedy graph shortest path"
    ],
    correctAnswer: "A",
    explanation: "Computing Fibonacci numbers with tabulation (or memoization) uses dynamic programming to store previously computed values, unlike the brute-force recursive method.",
    topic: "Dynamic Programming",
    difficulty: "easy"
  },
  {
    id: 63,
    question: "Why does dynamic programming often yield better performance than naive recursion?",
    options: [
      "It reduces time complexity by using only constant space",
      "It avoids recomputing the same subproblems by storing results",
      "It always uses a greedy choice at each step",
      "It uses a randomization technique"
    ],
    correctAnswer: "B",
    explanation: "Dynamic programming saves the results of subproblems (memoization or tabulation) so each subproblem is solved only once, drastically reducing redundant computation compared to naive recursion.",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 64,
    question: "Which of the following is an example of a problem suitable for dynamic programming?",
    options: [
      "Quick Sort on an array of integers",
      "Calculating Fibonacci numbers with caching",
      "Linear search for an element in a list",
      "Prim's minimum spanning tree algorithm"
    ],
    correctAnswer: "B",
    explanation: "Calculating Fibonacci numbers with caching (either top-down or bottom-up) is a classic DP example, because it exploits overlapping subproblems and stores intermediate results.",
    topic: "Dynamic Programming",
    difficulty: "easy"
  },
  {
    id: 65,
    question: "Dynamic programming solutions must have which property in order to work correctly?",
    options: [
      "Greedy choice property",
      "Optimal substructure (solution built from optimal subsolutions)",
      "No recursion allowed",
      "Only works on integers"
    ],
    correctAnswer: "B",
    explanation: "DP requires the problem to have optimal substructure, meaning the optimal solution can be constructed from optimal solutions of its subproblems.",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 66,
    question: "Which of these is NOT a typical application of dynamic programming?",
    options: [
      "Longest Common Subsequence (LCS)",
      "Fibonacci sequence via memoization",
      "Dijkstra's Algorithm for shortest paths",
      "0-1 Knapsack problem"
    ],
    correctAnswer: "C",
    explanation: "Dijkstra's algorithm is a greedy algorithm for graphs, not DP. The others (LCS, Fibonacci with memo, knapsack) are classic DP problems.",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 67,
    question: "What is the main idea of dynamic programming?",
    options: [
      "Divide the problem into independent subproblems and combine the results",
      "Store and reuse results of subproblems to avoid redundant work",
      "Randomly guess a solution and iteratively improve it",
      "Try all combinations and pick the best"
    ],
    correctAnswer: "B",
    explanation: "Dynamic programming's core idea is to avoid redundant computation by storing the results of subproblems (memoization or tabulation) so each subproblem is solved only once.",
    topic: "Dynamic Programming",
    difficulty: "easy"
  },
  {
    id: 68,
    question: "Which problem-solving technique does dynamic programming most closely share properties with?",
    options: [
      "Brute force (exhaustive search)",
      "Greedy algorithms (local optimization)",
      "Divide and conquer (recursion without overlap)",
      "It is unique from the above, combining recursion with memoization"
    ],
    correctAnswer: "D",
    explanation: "DP can be seen as recursion (divide into subproblems) combined with memoization/storage of results. It differs from plain divide-and-conquer by having overlapping subproblems.",
    topic: "Dynamic Programming",
    difficulty: "hard"
  },
  {
    id: 69,
    question: "When implementing a DP solution, which approach is typically used?",
    options: [
      "Recursion with memoization (top-down)",
      "Nested loops with table filling (bottom-up)",
      "Either A or B, depending on the problem",
      "Neither; DP must be random"
    ],
    correctAnswer: "C",
    explanation: "Dynamic programming can be implemented top-down with memoization (caching) or bottom-up by filling in a table iteratively. Both achieve the goal of storing subproblem results.",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 70,
    question: "Which best describes a backtracking algorithm?",
    options: [
      "It makes choices without ever reconsidering them",
      "It explores possibilities and abandons a path when it leads to a dead end",
      "It uses greedy choice and recursion",
      "It is the same as brute force"
    ],
    correctAnswer: "B",
    explanation: "A backtracking algorithm incrementally builds candidates to the solution and abandons a candidate ('backtracks') as soon as it determines it cannot lead to a valid solution.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 71,
    question: "Which of the following problems is commonly solved by backtracking?",
    options: [
      "Solving a system of linear equations",
      "Finding a path through a maze",
      "Sorting a list of numbers",
      "Searching for an element in a hash table"
    ],
    correctAnswer: "B",
    explanation: "Path-finding in a maze (or problems like Sudoku, N-Queens, etc.) is a classic backtracking scenario, where you try paths recursively and backtrack on walls or dead ends.",
    topic: "Backtracking",
    difficulty: "easy"
  },
  {
    id: 72,
    question: "What is a key component of backtracking?",
    options: [
      "Using memoization to store subproblem results",
      "Randomly guessing the solution",
      "Undoing choices when a dead end is reached",
      "Precomputing all answers"
    ],
    correctAnswer: "C",
    explanation: "Backtracking relies on undoing (backtracking) previous steps when a partial solution cannot be extended to a full solution.",
    topic: "Backtracking",
    difficulty: "easy"
  },
  {
    id: 73,
    question: "Which of the following problems is not typically solved by backtracking?",
    options: [
      "N-Queens",
      "Subset sum (deciding if any subset adds up to a target)",
      "Shortest path in a weighted graph (Dijkstra's algorithm)",
      "Sudoku solving"
    ],
    correctAnswer: "C",
    explanation: "Shortest path in a weighted graph is not solved by backtracking; that's typically Dijkstra's (greedy) or Bellman-Ford. The others are classic backtracking problems.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 74,
    question: "Backtracking is most useful for problems where:",
    options: [
      "A greedy choice property holds",
      "Solutions can be built incrementally with possible dead-ends",
      "Overlapping subproblems can be cached",
      "A fixed-size sliding window applies"
    ],
    correctAnswer: "B",
    explanation: "Backtracking is useful when you build the solution step-by-step and must abandon (backtrack from) a path when it leads to no solution.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 75,
    question: "Which feature distinguishes backtracking from brute force search?",
    options: [
      "Backtracking never explores all possibilities",
      "Backtracking prunes branches as soon as they are invalid",
      "Backtracking always uses less time than brute force",
      "Backtracking always uses no recursion"
    ],
    correctAnswer: "B",
    explanation: "Backtracking is like brute force but with pruning: it abandons a branch of the search tree as soon as it violates constraints (dead end), instead of exploring every possibility fully.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 76,
    question: "What is a randomized algorithm?",
    options: [
      "An algorithm that always finds the exact optimal solution deterministically",
      "An algorithm that incorporates randomness (e.g. random choices) to improve performance or simplicity",
      "A divide-and-conquer algorithm",
      "Another name for a dynamic programming algorithm"
    ],
    correctAnswer: "B",
    explanation: "Randomized algorithms use random choices in their logic to improve efficiency, avoid worst-case patterns, or simplify implementation.",
    topic: "Randomized Algorithms",
    difficulty: "medium"
  },
  {
    id: 77,
    question: "Which of the following is an example of a randomized algorithm?",
    options: [
      "Deterministic Quick Sort (always choosing the first element as pivot)",
      "Deterministic binary search on a sorted array",
      "Quick Sort with a randomly chosen pivot",
      "Memoized Fibonacci calculation"
    ],
    correctAnswer: "C",
    explanation: "Quick Sort that chooses its pivot randomly (or shuffles the array randomly) is a classic example of a randomized algorithm. The random choice prevents worst-case input patterns.",
    topic: "Randomized Algorithms",
    difficulty: "easy"
  },
  {
    id: 78,
    question: "Why might one use randomization in an algorithm like Quick Sort?",
    options: [
      "To guarantee the best-case time complexity",
      "To avoid pathological cases that cause worst-case behavior",
      "To use more memory",
      "To ensure the algorithm is deterministic"
    ],
    correctAnswer: "B",
    explanation: "Using a random pivot in Quick Sort avoids specific input orders that would cause worst-case O(n²) behavior in the deterministic version, yielding more uniform performance.",
    topic: "Randomized Algorithms",
    difficulty: "medium"
  },
  {
    id: 79,
    question: "Which of the following is not typically associated with randomized algorithms?",
    options: [
      "Monte Carlo methods that may have a small error probability",
      "Las Vegas algorithms that always produce correct results but with variable runtime",
      "Algorithms using fixed, deterministic steps only",
      "Approximating difficult problems by random sampling"
    ],
    correctAnswer: "C",
    explanation: "Randomized algorithms by definition use randomness (Monte Carlo or Las Vegas methods). An algorithm that is entirely deterministic and uses no randomness is not classified as randomized.",
    topic: "Randomized Algorithms",
    difficulty: "medium"
  },
  {
    id: 80,
    question: "Which problem-solving strategy might a randomized algorithm use?",
    options: [
      "Iteratively refining a solution using only previously computed results",
      "Random sampling or random choices to break symmetry or avoid worst-case scenarios",
      "Always choosing the best local option",
      "Exhaustive search of all possibilities"
    ],
    correctAnswer: "B",
    explanation: "Randomized algorithms often involve random sampling or making random choices (e.g., random pivot in Quick Sort) to break symmetry or avoid worst-case inputs.",
    topic: "Randomized Algorithms",
    difficulty: "medium"
  },
  {
    id: 81,
    question: "What is the two-pointer technique?",
    options: [
      "Using two indices that move through the data (often from opposite ends or same direction) to solve problems efficiently",
      "Using two nested loops to compare all pairs of elements",
      "A method of randomizing choices in algorithms",
      "A dynamic programming approach with two states"
    ],
    correctAnswer: "A",
    explanation: "The two-pointer technique involves using two indices (or 'pointers') traversing a data structure, often in opposite directions or with one lagging, to solve problems like finding pairs with a given sum in O(n) time.",
    topic: "Two-Pointer Technique",
    difficulty: "easy"
  },
  {
    id: 82,
    question: "In which scenario is the two-pointer technique especially useful?",
    options: [
      "When the array is unsorted",
      "For problems that ask about pairs or subarrays in a sorted array",
      "Only for linked lists",
      "For dynamic programming table traversal"
    ],
    correctAnswer: "B",
    explanation: "Two pointers are often used when the input (like an array) is sorted. For example, to find two numbers that sum to a target, one pointer starts at the beginning and one at the end, moving inward based on the sum.",
    topic: "Two-Pointer Technique",
    difficulty: "medium"
  },
  {
    id: 83,
    question: "Which of these problems can be solved with the two-pointer technique?",
    options: [
      "Finding two elements in a sorted array that add up to a given sum",
      "Finding the k-th smallest element using quickselect",
      "Computing Fibonacci numbers using DP",
      "Partitioning an array around a pivot for quicksort"
    ],
    correctAnswer: "A",
    explanation: "In a sorted array, using two pointers (one at start, one at end) allows finding a pair that adds to a target in O(n) time. The other choices are solved by different methods.",
    topic: "Two-Pointer Technique",
    difficulty: "easy"
  },
  {
    id: 84,
    question: "How does the two-pointer technique reduce complexity for finding a pair with a given sum in a sorted array compared to brute force?",
    options: [
      "It changes O(n²) to O(n log n)",
      "It changes O(n²) to O(n)",
      "It changes O(n log n) to O(n²)",
      "It has no effect; still O(n²)"
    ],
    correctAnswer: "B",
    explanation: "The naive two-loop approach is O(n²). Two pointers allow finding the pair in O(n) time, since each pointer moves at most n steps overall.",
    topic: "Two-Pointer Technique",
    difficulty: "medium"
  },
  {
    id: 85,
    question: "Which of the following is an example of using two pointers on a linked list?",
    options: [
      "Searching each node for a value",
      "Finding the middle of the list with a slow and fast pointer (Floyd's algorithm)",
      "Inserting a new node at the beginning",
      "Reversing the list iteratively"
    ],
    correctAnswer: "B",
    explanation: "The slow–fast pointer technique (Floyd's cycle-finding) uses two pointers moving at different speeds on a linked list to detect cycles or find the middle node.",
    topic: "Two-Pointer Technique",
    difficulty: "medium"
  },
  {
    id: 86,
    question: "Which problem is well-suited for the two-pointer technique on a sorted array?",
    options: [
      "Maximum subarray sum of contiguous elements",
      "Checking for duplicates in an unsorted array",
      "Finding all pairs that sum to zero",
      "Sorting the array"
    ],
    correctAnswer: "C",
    explanation: "Finding all pairs that sum to a target (like zero) in a sorted array can be done using two pointers (one from each end) efficiently in O(n) time. The array must be sorted for this to work.",
    topic: "Two-Pointer Technique",
    difficulty: "medium"
  },
  {
    id: 87,
    question: "What must be true about the input array for a typical two-pointer 'pair sum' algorithm to work efficiently?",
    options: [
      "It must be sorted or able to be sorted quickly",
      "It must contain only positive numbers",
      "It must be implemented as a linked list",
      "It must have an even number of elements"
    ],
    correctAnswer: "A",
    explanation: "The two-pointer sum-finding technique assumes the array is sorted (or sorts it first). This way, moving pointers inward can decide which way to go based on current sum.",
    topic: "Two-Pointer Technique",
    difficulty: "medium"
  },
  {
    id: 88,
    question: "Two pointers moving in the same direction (both forward) is also known as which technique?",
    options: [
      "Merge strategy",
      "Sliding window technique",
      "Branch and bound",
      "Tabulation"
    ],
    correctAnswer: "B",
    explanation: "When two pointers move in the same direction to maintain a 'window' of elements, it is often called the sliding window technique. The two-pointer term often includes sliding window as a special case.",
    topic: "Two-Pointer Technique",
    difficulty: "medium"
  },
  {
    id: 89,
    question: "Which approach is not a variant of the two-pointer technique?",
    options: [
      "One pointer from the left, one from the right of a sorted array",
      "Both pointers moving rightward to maintain a window",
      "Using two recursive calls to iterate through an array",
      "Using one slow and one fast pointer in a linked list"
    ],
    correctAnswer: "C",
    explanation: "Using two recursive calls doesn't fit the 'two pointers' paradigm. The other options (opposite ends, sliding window, slow–fast) are all instances of two-pointer strategies.",
    topic: "Two-Pointer Technique",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "Using two pointers, what is the time complexity to find a pair with sum X in a sorted array of size n?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
    correctAnswer: "C",
    explanation: "With two pointers starting at both ends and moving inward, each element is visited at most once. Thus, the algorithm runs in O(n) time, a significant improvement over the naive O(n²) approach.",
    topic: "Two-Pointer Technique",
    difficulty: "easy"
  },
  {
    id: 91,
    question: "What is the sliding window technique used for?",
    options: [
      "Solving problems involving subsets",
      "Solving problems on subarrays or substrings efficiently",
      "Randomized graph algorithms",
      "Memoization in recursive algorithms"
    ],
    correctAnswer: "B",
    explanation: "The sliding window technique is used for problems that involve finding or optimizing something over contiguous subarrays or substrings, by maintaining a 'window' of elements and moving it through the data.",
    topic: "Sliding Window Technique",
    difficulty: "easy"
  },
  {
    id: 92,
    question: "Which of the following describes the time complexity benefit of the sliding window over a naive approach?",
    options: [
      "From O(n log n) to O(n)",
      "From O(n²) to O(n)",
      "From O(n×k) to O(n) for a fixed-size window of size k",
      "From O(n) to O(1)"
    ],
    correctAnswer: "C",
    explanation: "For example, finding the maximum sum of all subarrays of size k naively takes O(n×k) (two loops), whereas using sliding window it takes O(n).",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 93,
    question: "Which problem is a classic example for sliding window?",
    options: [
      "Finding two-sum pairs in an unsorted array",
      "Finding the maximum sum subarray of fixed size k",
      "Sorting an array",
      "Calculating Fibonacci numbers"
    ],
    correctAnswer: "B",
    explanation: "A textbook sliding window example is finding the maximum sum of any contiguous subarray of size k, improving the naive O(nk) solution to O(n).",
    topic: "Sliding Window Technique",
    difficulty: "easy"
  },
  {
    id: 94,
    question: "For sliding window problems, which of the following is true?",
    options: [
      "The window size always remains constant",
      "You only move the left pointer and keep the right fixed",
      "You maintain a range [left, right] and adjust both pointers based on conditions",
      "Sliding window can only be applied to arrays of positive numbers"
    ],
    correctAnswer: "C",
    explanation: "The sliding window typically maintains two pointers (left and right) defining a current window. Both pointers are adjusted (right moves forward, left moves forward when needed) based on the problem's condition.",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 95,
    question: "Which of these problems can be solved with the sliding window technique?",
    options: [
      "Longest substring without repeating characters",
      "Multiplying all numbers in an array",
      "Computing maximum flow in a network",
      "Recursive depth-first traversal"
    ],
    correctAnswer: "A",
    explanation: "The problem of finding the longest substring with no repeating characters is a classic sliding window problem where the window expands and shrinks as you process the string.",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 96,
    question: "What is the usual space complexity of sliding window algorithms?",
    options: [
      "O(n)",
      "O(k) or O(1), where k is window size",
      "O(n log n)",
      "It depends on input size only"
    ],
    correctAnswer: "B",
    explanation: "Sliding window algorithms typically use O(1) or O(k) additional space (for the window state), not requiring extra space proportional to n, since they only keep track of a few variables as the window slides.",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 97,
    question: "In the sliding window technique, what is the typical approach when adding a new element to the window?",
    options: [
      "Recompute everything from scratch",
      "Update the result using previous window's result in constant time",
      "Always shrink the window first",
      "Only move the left pointer"
    ],
    correctAnswer: "B",
    explanation: "The key idea of sliding window is to update results incrementally using the previous window's computation rather than recomputing from scratch. For example, to update the sum of a window you subtract the element leaving and add the new element.",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 98,
    question: "Which statement is true about how sliding window problems are identified?",
    options: [
      "They generally involve optimizing or computing over contiguous subarrays/substrings",
      "They only occur in sorted arrays",
      "They always require two nested loops",
      "They cannot handle variable-size windows"
    ],
    correctAnswer: "A",
    explanation: "Sliding window problems typically ask for something over all contiguous subarrays (or substrings) meeting a condition (max sum, longest unique substring, etc.). Recognizing that a sliding window can replace nested loops is key. The window can be fixed or variable size.",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 99,
    question: "Consider finding the smallest subarray with sum ≥ S in a positive-number array. Which technique applies?",
    options: [
      "Brute-force by checking all subarrays",
      "Two-pointer / sliding window technique",
      "Dynamic programming",
      "Greedy by sorting the array"
    ],
    correctAnswer: "B",
    explanation: "This is a classic variable-size sliding window problem. You expand the right pointer to increase sum, and contract the left pointer to decrease sum, to find the minimal window satisfying the condition in O(n) time.",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  // ...existing code...
  {
    id: 100,
    question: "What is the time complexity advantage of using a sliding window over the naive approach for many problems?",
    options: [
      "Sliding window increases time complexity to O(n²)",
      "Sliding window often reduces a nested-loop O(n×k) or O(n²) solution to a single-loop O(n)",
      "Sliding window makes the space complexity exponential",
      "It provides no time benefit, only space benefit"
    ],
    correctAnswer: "B",
    explanation: "The sliding window technique often converts a double-loop solution into a single loop with two pointers, reducing time complexity from O(n²) or O(n×k) down to O(n).",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 101,
    question: "What is the worst-case time complexity of searching an element in a balanced binary search tree?",
    options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    correctAnswer: "A",
    explanation: "In a balanced binary search tree, the height is O(log n), so searching takes O(log n) time in the worst case.",
    topic: "Tree Data Structures",
    difficulty: "easy"
  },
  {
    id: 102,
    question: "Consider the function:\n\nvoid func(int n){\n    for(int i = 1; i < n; i *= 2){\n        System.out.println(i);\n    }\n}\n\nWhat is its time complexity?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "B",
    explanation: "The loop variable i is multiplied by 2 each iteration, so the loop runs log n times, giving O(log n) time complexity.",
    topic: "Complexity Analysis",
    difficulty: "medium"
  },
  {
    id: 103,
    question: "Which data structure optimizes space complexity for sparse matrices?",
    options: ["2D Array", "Linked List", "Adjacency Matrix", "ArrayList of LinkedList"],
    correctAnswer: "B",
    explanation: "For sparse matrices (mostly zeros), linked lists or other compressed representations use space proportional to non-zero elements, not the full matrix size.",
    topic: "Data Structures",
    difficulty: "medium"
  },
  {
    id: 104,
    question: "What is the auxiliary space complexity of Merge Sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "Merge Sort requires O(n) additional space for the temporary arrays used during the merge process.",
    topic: "Sorting Algorithms",
    difficulty: "medium"
  },
  {
    id: 105,
    question: "In Java, what is the purpose of the 'final' keyword on a variable when considering memory allocation?",
    options: [
      "It reserves more memory",
      "It protects from garbage collection",
      "Its value can't change, enabling some VM optimizations",
      "It shares the memory"
    ],
    correctAnswer: "C",
    explanation: "The 'final' keyword indicates the variable's value cannot change after initialization, which allows the JVM to make certain optimizations.",
    topic: "Java Fundamentals",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "Which is the correct order of asymptotic complexity from lowest to highest?",
    options: [
      "O(1), O(n), O(log n), O(n log n)",
      "O(n), O(1), O(log n), O(n log n)",
      "O(1), O(log n), O(n), O(n log n)",
      "O(log n), O(n), O(1), O(n log n)"
    ],
    correctAnswer: "C",
    explanation: "The correct order from lowest to highest is: O(1) < O(log n) < O(n) < O(n log n).",
    topic: "Complexity Analysis",
    difficulty: "easy"
  },
  {
    id: 107,
    question: "Which scenario leads to O(n²) space complexity?",
    options: [
      "Nested loops modifying a matrix",
      "Two independent arrays",
      "Storing factors of a number",
      "Using a HashMap"
    ],
    correctAnswer: "A",
    explanation: "Storing or modifying an n×n matrix requires O(n²) space. The other options typically use O(n) or less space.",
    topic: "Space Complexity",
    difficulty: "medium"
  },
  {
    id: 108,
    question: "What describes Amortized complexity?",
    options: [
      "The best case for an operation",
      "Average time per operation in the worst-case sequence",
      "The time taken in real scenarios",
      "The lower bound"
    ],
    correctAnswer: "B",
    explanation: "Amortized complexity is the average time per operation over a worst-case sequence of operations, accounting for occasional expensive operations.",
    topic: "Complexity Analysis",
    difficulty: "hard"
  },
  {
    id: 109,
    question: "Consider a recursive function which divides a list in two and processes both halves recursively. What is its time complexity?",
    options: ["O(n²)", "O(n log n)", "O(log n)", "O(n)"],
    correctAnswer: "B",
    explanation: "This describes divide-and-conquer algorithms like merge sort, which have O(n log n) time complexity due to log n levels of recursion with O(n) work per level.",
    topic: "Divide and Conquer",
    difficulty: "medium"
  },
  {
    id: 110,
    question: "Which data structure offers constant time access and O(n) worst-case insertion in Java?",
    options: ["ArrayList", "HashSet", "LinkedList", "Stack"],
    correctAnswer: "A",
    explanation: "ArrayList provides O(1) random access by index, but insertion can be O(n) in worst case when resizing or inserting at the beginning.",
    topic: "Java Collections",
    difficulty: "medium"
  },
  {
    id: 111,
    question: "What is the time complexity of the recursive Fibonacci algorithm?",
    options: ["O(n)", "O(log n)", "O(2^n)", "O(n²)"],
    correctAnswer: "C",
    explanation: "The naive recursive Fibonacci algorithm has exponential time complexity O(2^n) due to repeated computation of the same subproblems.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "medium"
  },
  {
    id: 112,
    question: "When should you prefer iteration over recursion in Java?",
    options: [
      "When the depth is small",
      "When the depth is large and can cause stack overflow",
      "When backtracking is needed",
      "Never"
    ],
    correctAnswer: "B",
    explanation: "Iteration should be preferred when recursion depth is large to avoid stack overflow, as Java has limited stack space.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "medium"
  },
  {
    id: 113,
    question: "How does recursion affect space complexity in most problems?",
    options: [
      "It always uses constant space",
      "It increases space complexity due to call stack",
      "It reduces stack usage",
      "It has no effect"
    ],
    correctAnswer: "B",
    explanation: "Recursion typically increases space complexity because each recursive call adds a frame to the call stack.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "easy"
  },
  {
    id: 114,
    question: "What is a base case in recursion?",
    options: [
      "The first recursive call",
      "The condition to terminate recursion",
      "When a loop ends",
      "When an exception is thrown"
    ],
    correctAnswer: "B",
    explanation: "A base case is the condition that stops the recursion from continuing, preventing infinite recursive calls.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "easy"
  },
  {
    id: 115,
    question: "Which approach guarantees no stack overflow in Java?",
    options: ["Recursion", "Iteration", "Tail recursion", "Both b and c"],
    correctAnswer: "B",
    explanation: "Iteration uses a constant amount of stack space and won't cause stack overflow, unlike recursion. Java doesn't optimize tail recursion.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "medium"
  },
  {
    id: 116,
    question: "The best iterative solution for Prime Factorization runs in:",
    options: ["O(n)", "O(√n)", "O(n²)", "O(log n)"],
    correctAnswer: "B",
    explanation: "The optimal iterative prime factorization algorithm checks divisors up to √n, giving O(√n) time complexity.",
    topic: "Prime Factorization",
    difficulty: "medium"
  },
  {
    id: 117,
    question: "Considering stack frames for recursion, the max stack frames for GCD of two numbers:",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "C",
    explanation: "The Euclidean GCD algorithm has O(log n) recursive calls, so it uses O(log n) stack frames.",
    topic: "GCD of Two Numbers",
    difficulty: "medium"
  },
  {
    id: 118,
    question: "In Java, tail-recursive functions are NOT optimized by JVM because:",
    options: [
      "They save space",
      "JVM does not provide tail call optimization",
      "Tail recursion is forbidden",
      "JVM treats tail and head recursion the same"
    ],
    correctAnswer: "B",
    explanation: "The JVM does not provide tail call optimization, so tail-recursive functions still use O(n) stack space.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "hard"
  },
  {
    id: 119,
    question: "What is a benefit of iterative prime factorization in Java?",
    options: ["Lower space usage", "Faster in all cases", "More readable", "None"],
    correctAnswer: "A",
    explanation: "Iterative prime factorization uses O(1) space compared to O(log n) space for the recursive version due to call stack.",
    topic: "Prime Factorization",
    difficulty: "medium"
  },
  {
    id: 120,
    question: "What is returned by this recursive GCD function for gcd(30, 20)?\n\nint gcd(int a, int b) {\n  if (b == 0) return a;\n  return gcd(b, a % b);\n}",
    options: ["5", "10", "20", "30"],
    correctAnswer: "B",
    explanation: "gcd(30,20) → gcd(20,10) → gcd(10,0) → return 10. The GCD of 30 and 20 is 10.",
    topic: "GCD of Two Numbers",
    difficulty: "easy"
  },
  {
    id: 121,
    question: "The brute force method for Maximum Subarray Sum has time complexity:",
    options: ["O(n)", "O(n²)", "O(n³)", "O(log n)"],
    correctAnswer: "C",
    explanation: "The brute force approach checks all possible subarrays with three nested loops: start position, end position, and sum calculation, giving O(n³).",
    topic: "Brute Force Algorithms",
    difficulty: "medium"
  },
  {
    id: 122,
    question: "Greedy algorithms always:",
    options: [
      "Produce optimal solutions",
      "Produce suboptimal solutions",
      "Make locally optimal choices at each step",
      "Require recursion"
    ],
    correctAnswer: "C",
    explanation: "Greedy algorithms always make locally optimal choices at each step, though this doesn't guarantee a globally optimal solution.",
    topic: "Greedy Algorithms",
    difficulty: "easy"
  },
  {
    id: 123,
    question: "The 'Divide and Conquer' technique splits problems into:",
    options: [
      "Non-overlapping subproblems",
      "Overlapping subproblems",
      "No subproblems",
      "Linear subproblems only"
    ],
    correctAnswer: "A",
    explanation: "Divide and conquer splits problems into non-overlapping subproblems. Overlapping subproblems are characteristic of dynamic programming.",
    topic: "Divide and Conquer",
    difficulty: "medium"
  },
  {
    id: 124,
    question: "Which Java data structure is ideal for Greedy algorithms?",
    options: ["Stack", "ArrayList", "PriorityQueue", "Map"],
    correctAnswer: "C",
    explanation: "PriorityQueue is ideal for greedy algorithms as it automatically maintains elements in order, allowing easy access to the next best choice.",
    topic: "Greedy Algorithms",
    difficulty: "medium"
  },
  {
    id: 125,
    question: "Which problem is best suited for Dynamic Programming?",
    options: ["Tower of Hanoi", "Fibonacci Sequence", "Binary Search", "Distribute in Circle"],
    correctAnswer: "B",
    explanation: "Fibonacci sequence has overlapping subproblems and optimal substructure, making it ideal for dynamic programming optimization.",
    topic: "Dynamic Programming",
    difficulty: "easy"
  },
  {
    id: 126,
    question: "Dynamic programming uses:",
    options: [
      "Overlapping subproblems and optimal substructure",
      "Only optimal substructure",
      "Only recursion",
      "Only brute force"
    ],
    correctAnswer: "A",
    explanation: "Dynamic programming requires both overlapping subproblems (to benefit from memoization) and optimal substructure (to build optimal solutions from subsolutions).",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 127,
    question: "The best complexity for Matrix Chain Multiplication via DP is:",
    options: ["O(n)", "O(n²)", "O(n³)", "O(log n)"],
    correctAnswer: "C",
    explanation: "Matrix Chain Multiplication using dynamic programming has O(n³) time complexity with three nested loops for different split points.",
    topic: "Dynamic Programming",
    difficulty: "hard"
  },
  {
    id: 128,
    question: "Which 'Divide and Conquer' example is valid in Java?",
    options: [
      "Merging two sorted arrays",
      "Linear search",
      "Insertion sort",
      "Simple recursion"
    ],
    correctAnswer: "A",
    explanation: "Merging two sorted arrays is part of merge sort, a classic divide-and-conquer algorithm. The others don't follow the divide-and-conquer paradigm.",
    topic: "Divide and Conquer",
    difficulty: "easy"
  },
  {
    id: 129,
    question: "Memoization is:",
    options: [
      "Storing computed results to reuse in recursion",
      "A type of brute force",
      "Storing code",
      "Sorting data"
    ],
    correctAnswer: "A",
    explanation: "Memoization is a technique where computed results are stored (cached) to avoid redundant calculations in recursive algorithms.",
    topic: "Dynamic Programming",
    difficulty: "easy"
  },
  {
    id: 130,
    question: "For the 'Coin Change' problem, the Dynamic Programming solution uses:",
    options: [
      "Single loop",
      "Recursion only",
      "2D array or 1D array with loop",
      "HashMap only"
    ],
    correctAnswer: "C",
    explanation: "Coin change DP typically uses a 1D or 2D array with nested loops to build up solutions for different amounts and coin combinations.",
    topic: "Dynamic Programming",
    difficulty: "medium"
  },
  {
    id: 131,
    question: "Backtracking is best described as:",
    options: [
      "Exploring all solutions and undoing choices if needed",
      "Making random choices",
      "Optimizing a single path",
      "No recursion"
    ],
    correctAnswer: "A",
    explanation: "Backtracking systematically explores all possible solutions and undoes (backtracks) choices when they lead to dead ends.",
    topic: "Backtracking",
    difficulty: "easy"
  },
  {
    id: 132,
    question: "The N-Queens problem is a classic example of:",
    options: ["Brute force", "Backtracking", "Divide and conquer", "Greedy"],
    correctAnswer: "B",
    explanation: "N-Queens is solved by placing queens one by one and backtracking when a placement leads to conflicts, making it a classic backtracking problem.",
    topic: "Backtracking",
    difficulty: "easy"
  },
  {
    id: 133,
    question: "Which Java function signature suits backtracking?",
    options: [
      "void backtrack(int[] arr, int index, List<Integer> path)",
      "int brute(int[] arr)",
      "void search(int x)",
      "int sum(int[] a)"
    ],
    correctAnswer: "A",
    explanation: "Backtracking functions typically need the current state (arr), position (index), and current path being built, making option A suitable.",
    topic: "Backtracking",
    difficulty: "medium"
  },
  {
    id: 134,
    question: "Randomized algorithms guarantee:",
    options: [
      "The same output every run",
      "Probabilistic correctness",
      "Optimal result",
      "No difference from deterministic"
    ],
    correctAnswer: "B",
    explanation: "Randomized algorithms provide probabilistic guarantees - they may not always give the same result but have good expected performance or correctness probability.",
    topic: "Randomized Algorithms",
    difficulty: "medium"
  },
  {
    id: 135,
    question: "Which is a correct example of a Java randomized algorithm?",
    options: [
      "Quicksort with random pivot",
      "Merge sort",
      "Bubble sort",
      "Selection sort"
    ],
    correctAnswer: "A",
    explanation: "Quicksort with random pivot selection is a randomized algorithm that avoids worst-case behavior on certain input patterns.",
    topic: "Randomized Algorithms",
    difficulty: "easy"
  },
  {
    id: 136,
    question: "Recursion must always have:",
    options: [
      "Two base cases",
      "An end/exit condition",
      "Only one parameter",
      "An infinite loop"
    ],
    correctAnswer: "B",
    explanation: "Recursion must have a base case (end/exit condition) to prevent infinite recursion and eventual stack overflow.",
    topic: "Iterative vs Recursive Approaches",
    difficulty: "easy"
  },
  {
    id: 137,
    question: "Backtracking's worst-case for Sudoku (using recursion) is:",
    options: ["O(1)", "O(9^m) for m blanks", "O(n)", "O(n²)"],
    correctAnswer: "B",
    explanation: "In Sudoku, each blank cell has at most 9 possible values, so for m blank cells, worst-case is O(9^m) - exponential in the number of blanks.",
    topic: "Backtracking",
    difficulty: "hard"
  },
  {
    id: 138,
    question: "Which is NOT a property of randomized algorithms?",
    options: [
      "Random choices during computation",
      "Different outputs on same input",
      "Always produce the correct answer",
      "Can be used for average-case improvement"
    ],
    correctAnswer: "C",
    explanation: "Randomized algorithms don't always produce the correct answer - they provide probabilistic guarantees or expected good performance.",
    topic: "Randomized Algorithms",
    difficulty: "medium"
  },
  {
    id: 139,
    question: "In Java, to generate a random number between 1 and 10, you use:",
    options: [
      "Math.random() * 10",
      "(int)(Math.random() * 10) + 1",
      "Random.nextInt(9)",
      "Random.rand()"
    ],
    correctAnswer: "B",
    explanation: "Math.random() returns [0,1), so Math.random() * 10 gives [0,10), and (int)(Math.random() * 10) + 1 gives integers from 1 to 10.",
    topic: "Randomized Algorithms",
    difficulty: "medium"
  },
  {
    id: 140,
    question: "What is a drawback of randomized algorithms in Java?",
    options: [
      "Deterministic output",
      "Harder to debug due to variability",
      "Slower always",
      "O(n²) complexity"
    ],
    correctAnswer: "B",
    explanation: "Randomized algorithms can be harder to debug and test because their behavior varies between runs due to random choices.",
    topic: "Randomized Algorithms",
    difficulty: "medium"
  },
  {
    id: 141,
    question: "The 2-pointer strategy is best for:",
    options: [
      "Finding pairs in sorted arrays",
      "Binary search",
      "Hashing",
      "Backtracking"
    ],
    correctAnswer: "A",
    explanation: "The two-pointer technique is particularly effective for finding pairs or elements in sorted arrays, achieving O(n) complexity.",
    topic: "Two-Pointer Technique",
    difficulty: "easy"
  },
  {
    id: 142,
    question: "The sliding window is ideal for:",
    options: [
      "Substring matching",
      "Sorting strings",
      "Tree traversals",
      "Graph coloring"
    ],
    correctAnswer: "A",
    explanation: "Sliding window technique is perfect for substring problems, finding patterns or optimizing over contiguous subarrays/substrings.",
    topic: "Sliding Window Technique",
    difficulty: "easy"
  },
  {
    id: 143,
    question: "What is the time complexity of the sliding window technique for finding the longest substring with k distinct characters in a string of length n?",
    options: ["O(n)", "O(n²)", "O(k)", "O(n log n)"],
    correctAnswer: "A",
    explanation: "Using sliding window with a HashMap to track character counts, we can solve this in O(n) time with a single pass through the string.",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 144,
    question: "In Java, which data structure is typically used with a sliding window on strings?",
    options: ["ArrayList", "Set", "HashMap", "Queue"],
    correctAnswer: "C",
    explanation: "HashMap is commonly used in sliding window string problems to track character frequencies or counts within the current window.",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 145,
    question: "Which best describes the window size in sliding window problems?",
    options: [
      "Fixed or variable depending on requirement",
      "Always 1",
      "Always equals the array length",
      "Only increases"
    ],
    correctAnswer: "A",
    explanation: "Sliding window can have fixed size (like max sum of k elements) or variable size (like longest substring with condition).",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 146,
    question: "For finding all subarrays with sum k in O(n) time:",
    options: [
      "Brute force",
      "Prefix sum + HashMap",
      "Two pointer",
      "Divide and conquer"
    ],
    correctAnswer: "B",
    explanation: "Using prefix sums with a HashMap to store cumulative sums allows finding subarrays with sum k in O(n) time.",
    topic: "Sliding Window Technique",
    difficulty: "hard"
  },
  {
    id: 147,
    question: "In Java, which is fastest for checking if an element exists in a current window?",
    options: ["Linear search", "HashSet", "ArrayList", "Vector"],
    correctAnswer: "B",
    explanation: "HashSet provides O(1) average case lookup time, making it fastest for checking element existence in the current window.",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  },
  {
    id: 148,
    question: "The two pointer technique is most powerful when input is:",
    options: ["Tree", "Sorted array or list", "Random access", "Hash table"],
    correctAnswer: "B",
    explanation: "Two-pointer technique works best on sorted arrays/lists where pointer movement decisions can be made based on comparison with target.",
    topic: "Two-Pointer Technique",
    difficulty: "medium"
  },
  {
    id: 149,
    question: "The maximum sum subarray using a sliding window on positive numbers is achieved by:",
    options: [
      "Greedy expansion",
      "Shrinking from left if sum exceeds target",
      "Both",
      "None"
    ],
    correctAnswer: "C",
    explanation: "For positive numbers, sliding window expands greedily to increase sum and shrinks from left when sum exceeds target or becomes invalid.",
    topic: "Sliding Window Technique",
    difficulty: "medium"
  }
]