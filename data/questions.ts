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
    "id": 1,
    "question": "Which operator is used for concatenating Strings in Java?",
    "options": [
      "&",
      "++'",
      "+'",
      ","
    ],
    "correctAnswer": "C",
    "explanation": "The `+` operator is used for concatenating (joining) Strings in Java.",
    "topic": "String",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "question": "What is the difference between `default` and `static` methods in interfaces in Java?",
    "options": [
      "`default` methods can be overridden by implementing classes, `static` methods cannot.",
      "`default` methods can access instance variables, `static` methods cannot.",
      "`static` methods can be overridden by implementing classes, `default` methods cannot.",
      "`static` methods can access interface constants, `default` methods cannot."
    ],
    "correctAnswer": "D",
    "explanation": "`static` methods in interfaces can access other `static` members including constants defined in the interface, while `default` methods cannot access or modify static fields or constants.",
    "topic": "Abstract and Inteface",
    "difficulty": "easy"
  },
  {
    "id": 3,
    "question": "How can you restrict a method from being overridden?",
    "options": [
      "By declaring it final",
      "By declaring it abstract",
      "By declaring it static",
      "By declaring it private"
    ],
    "correctAnswer": "A",
    "explanation": "Declaring a method final prevents it from being overridden.",
    "topic": "OOPS",
    "difficulty": "easy"
  },
  {
    "id": 4,
    "question": "Which block must be used with try to handle exceptions?",
    "options": [
      "catch",
      "throws",
      "finally",
      "throw"
    ],
    "correctAnswer": "A",
    "explanation": "The catch block follows the try block and handles exceptions.",
    "topic": "Exception Handling",
    "difficulty": "easy"
  },
  {
    "id": 5,
    "question": "Which of the following is a correct generic class definition?",
    "options": [
      "class MyClass<?> {}",
      "class MyClass<T> {}",
      "class MyClass<> {}",
      "class MyClass[] {}"
    ],
    "correctAnswer": "B",
    "explanation": "The correct way to define a generic class is using angle brackets <> with a type parameter, e.g., class MyClass<T>.",
    "topic": "Generics",
    "difficulty": "easy"
  },
  {
    "id": 6,
    "question": "What is the main benefit of inheritance?",
    "options": [
      "Faster execution",
      "Improved performance",
      "Code reuse",
      "Better readability"
    ],
    "correctAnswer": "C",
    "explanation": "The main benefit of inheritance is code reuse.",
    "topic": "Inheritence",
    "difficulty": "easy"
  },
  {
    "id": 7,
    "question": "Which of the following classes is used for handling byte streams in Java?",
    "options": [
      "OutputStream",
      "InputStream",
      "Reader",
      "Writer"
    ],
    "correctAnswer": "B",
    "explanation": "`InputStream` and `OutputStream` are used for handling byte streams, whereas `Reader` and `Writer` are used for character streams",
    "topic": "IO Stream",
    "difficulty": "easy"
  },
  {
    "id": 8,
    "question": "What is the correct way to declare a variable in Java?",
    "options": [
      "int 1x=10;",
      "int x=10;",
      "x int=10;",
      "int x=10;"
    ],
    "correctAnswer": "B",
    "explanation": "Variable names must start with a letter or underscore, not a digit.",
    "topic": "Java Basics",
    "difficulty": "easy"
  },
  {
    "id": 9,
    "question": "How do you create a jagged array in Java?",
    "options": [
      "int[][] jaggedArray = new int[][3];",
      "int[][] jaggedArray = {{1, 2}, {3, 4, 5}, {6}};",
      "int[][] jaggedArray = new int[3][];",
      "Both a and b"
    ],
    "correctAnswer": "D",
    "explanation": "You can create a jagged array by either declaring an array of arrays without specifying the second dimension, or by directly initializing with different-sized subarrays.",
    "topic": "Arrays",
    "difficulty": "easy"
  },
  {
    "id": 10,
    "question": "How do you declare a 3D array in Java?",
    "options": [
      "int[][] array3D[];",
      "int[][][] array3D;",
      "int array3D[][][];",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "In Java, you can declare a 3D array using any of these syntaxes: int[][][] array3D, int array3D[][][], or int[][] array3D[].",
    "topic": "Arrays",
    "difficulty": "easy"
  },
  {
    "id": 11,
    "question": "What happens if you try to access an array element outside its bounds?",
    "options": [
      "It returns 0",
      "It throws an ArrayIndexOutOfBoundsException",
      "It wraps around to the beginning of the array",
      "It returns null"
    ],
    "correctAnswer": "B",
    "explanation": "Attempting to access an array element outside its bounds will result in an ArrayIndexOutOfBoundsException at runtime.",
    "topic": "Arrays",
    "difficulty": "easy"
  },
  {
    "id": 12,
    "question": "Which class in Java implements the List interface and uses a resizable array?",
    "options": [
      "Stack",
      "ArrayList",
      "LinkedList",
      "Vector"
    ],
    "correctAnswer": "B",
    "explanation": "`ArrayList` implements the `List` interface using a dynamic array. It allows fast random access to elements based on index.",
    "topic": "Collection FrameWork",
    "difficulty": "easy"
  },
  {
    "id": 13,
    "question": "What does the `>>>` operator do in Java?",
    "options": [
      "Right shift with zero fill",
      "Right shift with sign extension",
      "Left shift with sign extension",
      "Left shift with zero fill"
    ],
    "correctAnswer": "A",
    "explanation": "The `>>>` operator performs a right shift on its left operand and fills the leftmost bits with zero, regardless of the sign bit.",
    "topic": "Bitwise Operator",
    "difficulty": "easy"
  },
  {
    "id": 14,
    "question": "Which interface is used to execute SQL queries in JDBC?",
    "options": [
      "Connection",
      "PreparedStatement",
      "ResultSet",
      "Statement"
    ],
    "correctAnswer": "D",
    "explanation": "The Statement interface in JDBC is used to execute SQL queries against the database.",
    "topic": "JDBC",
    "difficulty": "easy"
  },
  {
    "id": 15,
    "question": "How do you call a parent class constructor from a subclass?",
    "options": [
      "base()",
      "super()",
      "this()",
      "parent()"
    ],
    "correctAnswer": "B",
    "explanation": "The super() keyword is used to call a parent class constructor.",
    "topic": "Inheritence",
    "difficulty": "easy"
  },
  {
    "id": 16,
    "question": "What is the primary purpose of multithreading?",
    "options": [
      "To use more memory",
      "To increase code complexity",
      "To make use of multiple processors",
      "To handle multiple tasks concurrently"
    ],
    "correctAnswer": "D",
    "explanation": "Multithreading allows multiple tasks to run concurrently, improving the efficiency of programs by making use of idle CPU time.",
    "topic": "Mutiithreading",
    "difficulty": "easy"
  },
  {
    "id": 17,
    "question": "What is the main purpose of a constructor?",
    "options": [
      "To destroy objects",
      "To compare objects",
      "To initialize objects",
      "To perform I/O operations"
    ],
    "correctAnswer": "C",
    "explanation": "The main purpose of a constructor is to initialize objects.",
    "topic": "OOPS",
    "difficulty": "easy"
  },
  {
    "id": 18,
    "question": "How do you declare a method that can be accessed without creating an instance of the class?",
    "options": [
      "static void method()",
      "final void method()",
      "abstract void method()",
      "void method()"
    ],
    "correctAnswer": "A",
    "explanation": "The static keyword allows a method to be accessed without creating an instance of the class.",
    "topic": "OOPS",
    "difficulty": "easy"
  },
  {
    "id": 19,
    "question": "What is the correct syntax for a while loop in Java?",
    "options": [
      "while condition { }",
      "while { condition }",
      "while (condition);",
      "while (condition) { }"
    ],
    "correctAnswer": "D",
    "explanation": "The correct syntax for a while loop includes parentheses around the condition and curly braces for the code block.",
    "topic": "Control Statement",
    "difficulty": "easy"
  },
  {
    "id": 20,
    "question": "Can a constructor be inherited?",
    "options": [
      "Only static constructors",
      "Yes",
      "Only private constructors",
      "No"
    ],
    "correctAnswer": "D",
    "explanation": "Constructors cannot be inherited in Java.",
    "topic": "Inheritence",
    "difficulty": "easy"
  },
  {
    "id": 21,
    "question": "Can a generic class have multiple type parameters?",
    "options": [
      "Yes",
      "Only two parameters",
      "Only three parameters",
      "No"
    ],
    "correctAnswer": "A",
    "explanation": "A generic class can have multiple type parameters, e.g., class MyClass<T, U>.",
    "topic": "Generics",
    "difficulty": "easy"
  },
  {
    "id": 22,
    "question": "Can interfaces be generic in Java?",
    "options": [
      "Only in JDK 11",
      "Yes",
      "Only in JDK 10",
      "No"
    ],
    "correctAnswer": "B",
    "explanation": "Interfaces can be generic in Java, allowing type parameters.",
    "topic": "Generics",
    "difficulty": "easy"
  },
  {
    "id": 23,
    "question": "In Java, can an abstract class extend another abstract class?",
    "options": [
      "No, abstract classes cannot extend other abstract classes.",
      "Yes, but it can only extend one abstract class at a time.",
      "Yes, and it must implement all abstract methods of the superclass.",
      "Yes, and it inherits the abstract methods without implementing them."
    ],
    "correctAnswer": "C",
    "explanation": "Abstract classes in Java can extend other abstract classes, but if they do, they must provide implementations for all inherited abstract methods unless the subclass itself is abstract.",
    "topic": "Abstract and Inteface",
    "difficulty": "easy"
  },
  {
    "id": 24,
    "question": "Which of the following is a correct way to create an empty String object in Java?",
    "options": [
      "`String str = \"\";`",
      "`String str;`",
      "`String str = null;`",
      "`String str = new String();`"
    ],
    "correctAnswer": "A",
    "explanation": "`\"\"` represents an empty String literal in Java.",
    "topic": "Strings",
    "difficulty": "hard"
  },
  {
    "id": 25,
    "question": "Which method is used to extract a substring from a String in Java?",
    "options": [
      "`subString()`",
      "`substring()`",
      "`extract()`",
      "`slice()`"
    ],
    "correctAnswer": "B",
    "explanation": "The `substring()` method extracts a substring from the specified begin index to the end of the String.",
    "topic": "Strings",
    "difficulty": "hard"
  },
  {
    "id": 26,
    "question": "Which method is used to convert all characters in a String to lowercase?",
    "options": [
      "`caseLower()`",
      "`toLowerCase()`",
      "`lowerCase()`",
      "`toLower()`"
    ],
    "correctAnswer": "B",
    "explanation": "The `toLowerCase()` method converts all characters in a String to lowercase.",
    "topic": "Strings",
    "difficulty": "hard"
  },
  {
    "id": 27,
    "question": "Which of the following statements is true about Java packages?",
    "options": [
      "A class can belong to only one package.",
      "Packages are used for code optimization purposes only.",
      "All classes within a package must have the same access modifier.",
      "Two classes in the same package can have the same name."
    ],
    "correctAnswer": "A",
    "explanation": "In Java, each class can belong to only one package. Packages are used to organize classes and prevent naming conflicts.",
    "topic": "Abstract and Inteface",
    "difficulty": "hard"
  },
  {
    "id": 28,
    "question": "Which of the following cannot be marked as `final` in Java?",
    "options": [
      "Constructor",
      "Interface",
      "Method",
      "Abstract class"
    ],
    "correctAnswer": "B",
    "explanation": "Interfaces in Java cannot be marked as `final` because they are meant to be implemented by other classes.",
    "topic": "Abstract and Inteface",
    "difficulty": "hard"
  },
  {
    "id": 29,
    "question": "Which statement can be used to skip the current iteration of a loop?",
    "options": [
      "continue",
      "skip",
      "return",
      "break"
    ],
    "correctAnswer": "A",
    "explanation": "The continue statement is used to skip the rest of the current iteration and move to the next iteration of a loop.",
    "topic": "Control Statement",
    "difficulty": "hard"
  },
  {
    "id": 30,
    "question": "What happens if a superclass and subclass have a static method with the same name and signature?",
    "options": [
      "The subclass method hides the superclass method",
      "The superclass method is called",
      "Runtime error",
      "Compile-time error"
    ],
    "correctAnswer": "A",
    "explanation": "The subclass method hides the superclass method.",
    "topic": "Multithreading",
    "difficulty": "hard"
  },
  {
    "id": 31,
    "question": "Which of the following statements is used to exit from a loop in Java?",
    "options": [
      "break",
      "exit",
      "terminate",
      "stop"
    ],
    "correctAnswer": "A",
    "explanation": "break statement is used to exit from a loop.",
    "topic": "Java Basics",
    "difficulty": "hard"
  },
  {
    "id": 32,
    "question": "Which method is called to handle an exception in Java?",
    "options": [
      "processException",
      "handleException",
      "exceptionHandle",
      "getMessage"
    ],
    "correctAnswer": "A",
    "explanation": "The catch block is used to handle exceptions in Java.",
    "topic": "Exception Handling",
    "difficulty": "hard"
  },
  {
    "id": 33,
    "question": "Which keyword is used to implement decision-making in Java?",
    "options": [
      "for",
      "switch",
      "case",
      "while"
    ],
    "correctAnswer": "B",
    "explanation": "The switch statement is used for decision-making based on multiple possible values of an expression.",
    "topic": "Control Statement",
    "difficulty": "hard"
  },
  {
    "id": 34,
    "question": "Which of the following is true about constructors in Java?",
    "options": [
      "They can be abstract",
      "They can be inherited",
      "They can be overloaded",
      "They must have a return type"
    ],
    "correctAnswer": "C",
    "explanation": "Constructors can be overloaded to allow multiple ways of object initialization.",
    "topic": "OOPs",
    "difficulty": "hard"
  },
  {
    "id": 35,
    "question": "What is the purpose of the `StringBuffer` class in Java?",
    "options": [
      "To represent fixed-size sequences of characters.",
      "To create mutable sequences of characters with synchronized operations.",
      "To handle formatted output of characters.",
      "To create immutable sequences of characters."
    ],
    "correctAnswer": "B",
    "explanation": "`StringBuffer` in Java is used to create mutable sequences of characters, and it is synchronized, making it thread-safe for use in multi-threaded environments.",
    "topic": "String",
    "difficulty": "hard"
  },
  {
    "id": 36,
    "question": "What is the purpose of the wildcard ? in Java generics?",
    "options": [
      "To represent a superclass",
      "To represent an interface",
      "To represent any type",
      "To represent a subclass"
    ],
    "correctAnswer": "C",
    "explanation": "The wildcard ? represents an unknown type in generics, allowing more flexibility.",
    "topic": "Generics",
    "difficulty": "hard"
  },
  {
    "id": 37,
    "question": "Can you handle Error in a catch block in Java?",
    "options": [
      "Only in finally",
      "Only in try",
      "No",
      "Yes"
    ],
    "correctAnswer": "D",
    "explanation": "Error is a subclass of Throwable and can be caught like any other exception.",
    "topic": "Exception Handling",
    "difficulty": "hard"
  },
  {
    "id": 38,
    "question": "Can an interface extend multiple interfaces in Java?",
    "options": [
      "Yes, using the `extends` keyword.",
      "No, interfaces cannot extend other interfaces.",
      "No, interfaces can only extend one interface.",
      "Yes, but only if all extended interfaces are `default`."
    ],
    "correctAnswer": "A",
    "explanation": "Interfaces in Java can extend multiple other interfaces using the `extends` keyword, allowing for multiple inheritance of type.",
    "topic": "Abstract and Interface",
    "difficulty": "hard"
  },
  {
    "id": 39,
    "question": "What will be the output of the following code? public class Test { int x; public Test() { x = 5; } public static void main(String[] args) { Test t = new Test(); System.out.println(t.x); } }",
    "options": [
      "0",
      "Runtime error",
      "5",
      "Compilation error"
    ],
    "correctAnswer": "C",
    "explanation": "The constructor initializes x to 5, which is then printed.",
    "topic": "OOPS",
    "difficulty": "medium"
  },
  {
    "id": 40,
    "question": "What is the output of the following code? int[][] matrix = {{1, 2}, {3, 4}, {5, 6}}; System.out.println(matrix[1][1]);",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctAnswer": "D",
    "explanation": "In the 2D array, matrix[1] refers to the second row {3, 4}, and [1] refers to the second element in that row, which is 4.",
    "topic": "Arrays",
    "difficulty": "medium"
  },
  {
    "id": 41,
    "question": "What will be the output of the following code: int x = 5; System.out.println(x++);",
    "options": [
      "5",
      "4",
      "Error",
      "6"
    ],
    "correctAnswer": "A",
    "explanation": "The x++ operator is post-increment; it returns the value before incrementing.",
    "topic": "Java Basics",
    "difficulty": "medium"
  },
  {
    "id": 42,
    "question": "What is the value of the expression 10 + 20 + \"30\" + 40 in Java?",
    "options": [
      "30",
      "100",
      "303040",
      "10203040"
    ],
    "correctAnswer": "D",
    "explanation": "The numbers are added first, then concatenated with the string.",
    "topic": "Java Basics",
    "difficulty": "medium"
  },
  {
    "id": 43,
    "question": "Which bitwise operator is used to check if a number is odd or even efficiently?",
    "options": [
      "^",
      "&",
      "~",
      "|"
    ],
    "correctAnswer": "B",
    "explanation": "To check if a number is odd or even, use `num & 1`. If the result is `1`, the number is odd; if `0`, the number is even.",
    "topic": "Bitwise Operator",
    "difficulty": "medium"
  },
  {
    "id": 44,
    "question": "Which bitwise operator is used to check if two numbers are equal in Java?",
    "options": [
      "|",
      "^",
      "Operator ==",
      "&"
    ],
    "correctAnswer": "C",
    "explanation": "Unlike other bitwise operators, the `==` operator in Java checks for equality between two values, regardless of their bit representation.",
    "topic": "Bitwise Operator",
    "difficulty": "medium"
  },
  {
    "id": 45,
    "question": "Which bitwise operator is used to toggle specific bits in a number to their opposite values?",
    "options": [
      "~",
      "^",
      "|",
      "&"
    ],
    "correctAnswer": "B",
    "explanation": "The bitwise XOR (`^`) operator can be used to toggle specific bits to their opposite values because `a ^ 1` flips the bit.",
    "topic": "Bitwise Operator",
    "difficulty": "medium"
  },
  {
    "id": 46,
    "question": "Which class represents a mutable sequence of characters in Java?",
    "options": [
      "`CharArray`",
      "`StringBuilder`",
      "`StringBuffer`",
      "`String`"
    ],
    "correctAnswer": "B",
    "explanation": "StringBuilder` is mutable and is used when there is a need to modify Strings frequently.",
    "topic": "Strings",
    "difficulty": "medium"
  },
  {
    "id": 47,
    "question": "What will be the output of the following code? for (int i = 0; i < 5; i++) { System.out.print(i + \" \"); }",
    "options": [
      "0 1 2 3 4",
      "0 1 2 3 4 5",
      "1 2 3 4",
      "1 2 3 4 5"
    ],
    "correctAnswer": "A",
    "explanation": "The for loop starts with i = 0 and continues while i < 5, printing numbers from 0 to 4.",
    "topic": "Control Statement",
    "difficulty": "medium"
  },
  {
    "id": 48,
    "question": "Which keyword is used to define a generic constructor in Java?",
    "options": [
      "<T>",
      "class",
      "method",
      "constructor"
    ],
    "correctAnswer": "A",
    "explanation": "A generic constructor is defined using the <> syntax before the constructor name, e.g., <T> MyClass(T value).",
    "topic": "Generics",
    "difficulty": "medium"
  },
  {
    "id": 49,
    "question": "What is method overriding?",
    "options": [
      "Defining a method with the same name and same parameters in a subclass",
      "Defining a method with the same name but different parameters",
      "Calling a method",
      "Hiding a method"
    ],
    "correctAnswer": "A",
    "explanation": "Method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass.",
    "topic": "Multithreading",
    "difficulty": "medium"
  },
  {
    "id": 50,
    "question": "What are the major challenges in handling transactions across multiple databases using JDBC?",
    "options": [
      "Ensuring atomicity and consistency across databases.",
      "Managing distributed transaction failures.",
      "All of the above",
      "Coordinating rollback operations across multiple databases."
    ],
    "correctAnswer": "C",
    "explanation": "Handling transactions across multiple databases involves ensuring atomicity, consistency, managing failures, and coordinating rollback operations, presenting significant challenges.",
    "topic": "JDBC",
    "difficulty": "medium"
  },
  {
    "id": 51,
    "question": "Which of the following cannot have an implementation in Java?",
    "options": [
      "Concrete class",
      "Method",
      "Interface",
      "Abstract class"
    ],
    "correctAnswer": "C",
    "explanation": "Interfaces cannot have method implementations; they only declare method signatures.",
    "topic": "Abstract and Interface",
    "difficulty": "medium"
  },
  {
    "id": 52,
    "question": "What is the purpose of the `ConcurrentHashMap` class in Java?",
    "options": [
      "It allows null elements.",
      "It maintains elements in sorted order.",
      "It allows concurrent access and modification of elements.",
      "It ensures unique elements in the collection."
    ],
    "correctAnswer": "C",
    "explanation": "`ConcurrentHashMap` is designed for concurrent access by multiple threads without the need for external synchronization.",
    "topic": "Collection FrameWork",
    "difficulty": "medium"
  },
  {
    "id": 53,
    "question": "Which keyword is used to define a method in a class?",
    "options": [
      "method",
      "void",
      "func",
      "def"
    ],
    "correctAnswer": "B",
    "explanation": "Methods are defined using return types, with void indicating no return value.",
    "topic": "OOPs",
    "difficulty": "medium"
  },
  {
    "id": 54,
    "question": "Which Java class is used for reading serialized objects from a file?",
    "options": [
      "ObjectInputStream",
      "Deserializer",
      "ObjectReader",
      "DataInputStream"
    ],
    "correctAnswer": "A",
    "explanation": "`ObjectInputStream` is used for reading serialized objects from a file in Java.",
    "topic": "IO Stream",
    "difficulty": "medium"
  },
  {
    "id": 55,
    "question": "What is the type of inheritance where a class is derived from more than one class?",
    "options": [
      "Multilevel inheritance",
      "Single inheritance",
      "Hierarchical inheritance",
      "Multiple inheritance"
    ],
    "correctAnswer": "D",
    "explanation": "Multiple inheritance refers to a class being derived from more than one base class.",
    "topic": "Inheritence",
    "difficulty": "medium"
  },
  {
    "id": 56,
    "question": "What happens if a thread calls `notify()` on an object, but no thread is waiting on that object?",
    "options": [
      "The notify() call is ignored",
      "An IllegalMonitorStateException is thrown",
      "The JVM crashes",
      "The thread that called `notify()` is terminated"
    ],
    "correctAnswer": "A",
    "explanation": "If no thread is waiting on the object's monitor, the `notify()` call has no effect.",
    "topic": "Mutiithreading",
    "difficulty": "medium"
  },
  {
    "id": 57,
    "question": "Which keyword is used to explicitly throw an exception in Java?",
    "options": [
      "catch",
      "exception",
      "throws",
      "throw"
    ],
    "correctAnswer": "D",
    "explanation": "The throw keyword is used to explicitly throw an exception.",
    "topic": "Exception Handling",
    "difficulty": "medium"
  },
  {
    "id": 58,
    "question": "What is the superclass of all exception classes in Java?",
    "options": [
      "Throwable",
      "Error",
      "Runtime",
      "Exception"
    ],
    "correctAnswer": "A",
    "explanation": "Throwable is the superclass of all exception classes in Java.",
    "topic": "Exception Handling",
    "difficulty": "medium"
  },
  {
    "id": 59,
    "question": "What is the purpose of a generic method in Java?",
    "options": [
      "To define a method",
      "To override methods",
      "To accept any type parameter",
      "To handle multiple exceptions"
    ],
    "correctAnswer": "C",
    "explanation": "A generic method can accept any type parameter, making the method more flexible and reusable.",
    "topic": "Generics",
    "difficulty": "medium"
  },
  {
    "id": 60,
    "question": "What is the purpose of the finally block in exception handling?",
    "options": [
      "To skip exceptions",
      "To throw exceptions",
      "To ensure code always executes",
      "To execute code before catching exceptions"
    ],
    "correctAnswer": "C",
    "explanation": "The finally block ensures that code within it executes regardless of whether an exception is thrown or not.",
    "topic": "Exception Handling",
    "difficulty": "medium"
  },
  {
    "id": 61,
    "question": "PriorityQueue in Java is implemented using:",
    "options": [
      "Tree",
      "Graph",
      "Heap",
      "Stack"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Heap. Tags: heap.",
    "topic": "Heap",
    "difficulty": "easy"
  },
  {
    "id": 62,
    "question": "Time complexity of search in balanced BST?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is O(n). Tags: tree.",
    "topic": "Tree",
    "difficulty": "easy"
  },
  {
    "id": 63,
    "question": "Height of a binary tree with single node?",
    "options": [
      "1",
      "0",
      "n",
      "-1"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 0. Tags: tree.",
    "topic": "Tree",
    "difficulty": "easy"
  },
  {
    "id": 64,
    "question": "Preorder traversal:",
    "options": [
      "LRN",
      "LNR",
      "RLN",
      "NLR"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is NLR. Tags: tree.",
    "topic": "Tree",
    "difficulty": "easy"
  },
  {
    "id": 65,
    "question": "Postorder traversal:",
    "options": [
      "LNR",
      "NLR",
      "LRN",
      "RNL"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is LRN. Tags: tree.",
    "topic": "Tree",
    "difficulty": "easy"
  },
  {
    "id": 66,
    "question": "Inorder traversal of BST gives:",
    "options": [
      "Reverse order",
      "Sorted order",
      "Random",
      "Level order"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Sorted order. Tags: tree.",
    "topic": "Tree",
    "difficulty": "easy"
  },
  {
    "id": 67,
    "question": "Heap is:",
    "options": [
      "BST",
      "Graph",
      "Stack",
      "Complete Binary Tree"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Complete Binary Tree. Tags: heap.",
    "topic": "Heap",
    "difficulty": "easy"
  },
  {
    "id": 68,
    "question": "Prime sieve complexity:",
    "options": [
      "O(n)",
      "O(n log log n)",
      "O(n²)",
      "O(log n)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is O(n log log n). Tags: prime seieve.",
    "topic": "Prime Seieve",
    "difficulty": "easy"
  },
  {
    "id": 69,
    "question": "what is the  output?\r\nint x = 5;\r\nSystem.out.println(x & 1);",
    "options": [
      "5",
      "1",
      "Error",
      "0"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is 0. Tags: bit-masking.",
    "topic": "Bit-masking",
    "difficulty": "easy"
  },
  {
    "id": 70,
    "question": "what is the  output?\r\nint n = 4;\r\nSystem.out.println(1<<n);",
    "options": [
      "16",
      "8",
      "4",
      "2"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 16. Tags: bit-masking.",
    "topic": "Bit-masking",
    "difficulty": "easy"
  },
  {
    "id": 71,
    "question": "What is the postfix form of A+B*C?",
    "options": [
      "AB+C*",
      "ABC+*",
      "ABC*+",
      "A+BC*"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is ABC*+. Tags: stack.",
    "topic": "Stack",
    "difficulty": "easy"
  },
  {
    "id": 72,
    "question": "A full binary tree is one where:",
    "options": [
      "Tree has minimum height",
      "All leaves are at same level",
      "Every node has 0 or 2 children",
      "Every node has exactly 2 children"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Every node has 0 or 2 children. Tags: bst.",
    "topic": "BST",
    "difficulty": "easy"
  },
  {
    "id": 73,
    "question": "Which traversal is used to delete a tree (freeing memory)?",
    "options": [
      "Postorder",
      "Inorder",
      "Level order",
      "Preorder"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Postorder. Tags: bst.",
    "topic": "BST",
    "difficulty": "easy"
  },
  {
    "id": 74,
    "question": "What is the average case time complexity of BST insertion?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is O(log n). Tags: bst.",
    "topic": "BST",
    "difficulty": "easy"
  },
  {
    "id": 75,
    "question": "Successor of a node in BST (node with next greater value) is:",
    "options": [
      "Right child always",
      "Parent of node",
      "Rightmost node in left subtree",
      "Leftmost node in right subtree"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Leftmost node in right subtree. Tags: bst.",
    "topic": "BST",
    "difficulty": "easy"
  },
  {
    "id": 76,
    "question": "A binary heap is stored in an array. For node at index i, its left child is at:",
    "options": [
      "i-1",
      "2i",
      "2i+1",
      "2i+2"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 2i+1. Tags: heap.",
    "topic": "Heap",
    "difficulty": "easy"
  },
  {
    "id": 77,
    "question": "For node at index i in a 1-indexed heap array, its parent is at:",
    "options": [
      "(i-1)/2",
      "2i",
      "i/2",
      "i-1"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is i/2. Tags: heap.",
    "topic": "Heap",
    "difficulty": "easy"
  },
  {
    "id": 78,
    "question": "What are the two key properties required for a problem to be solvable by DP?",
    "options": [
      "Greedy choice and local optimality",
      "Divide and conquer and recursion",
      "Optimal substructure and overlapping subproblems",
      "Backtracking and pruning"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Optimal substructure and overlapping subproblems. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "easy"
  },
  {
    "id": 79,
    "question": "What is tabulation in DP?",
    "options": [
      "Top-down approach with recursion",
      "Using hash maps for memoization",
      "Greedy table filling",
      "Bottom-up approach filling table iteratively"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Bottom-up approach filling table iteratively. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "easy"
  },
  {
    "id": 80,
    "question": "What does the dp state dp[i][w] represent in 0/1 knapsack?",
    "options": [
      "Maximum value using first w items with capacity i",
      "Minimum weight using i items",
      "Total items selected",
      "Maximum value using first i items with capacity w"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Maximum value using first i items with capacity w. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "easy"
  },
  {
    "id": 81,
    "question": "What is a max-heap?",
    "options": [
      "Heap where root is minimum",
      "Heap where every parent is greater than or equal to its children",
      "Sorted descending array",
      "Heap with maximum height"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Heap where every parent is greater than or equal to its children. Tags: heap.",
    "topic": "Heap",
    "difficulty": "easy"
  },
  {
    "id": 82,
    "question": "What is heapify operation?",
    "options": [
      "Sorting a heap",
      "Deleting all elements",
      "Restoring heap property after insertion or deletion",
      "Building a heap from scratch"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Restoring heap property after insertion or deletion. Tags: heap.",
    "topic": "Heap",
    "difficulty": "easy"
  },
  {
    "id": 83,
    "question": "What is the time complexity of Fibonacci using simple recursion without DP?",
    "options": [
      "O(n)",
      "O(n²)",
      "O(2^n)",
      "O(n log n)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is O(2^n). Tags: dyanamic pogramming.",
    "topic": "Dyanamic Pogramming",
    "difficulty": "easy"
  },
  {
    "id": 84,
    "question": "What is the time complexity of Fibonacci using DP?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(2^n)",
      "O(n²)"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is O(n). Tags: dyanamic pogramming.",
    "topic": "Dyanamic Pogramming",
    "difficulty": "easy"
  },
  {
    "id": 85,
    "question": "What is tabulation in DP?",
    "options": [
      "Bottom-up approach filling a table iteratively from smallest subproblems",
      "Creating a table of random values",
      "Top-down recursive approach",
      "Sorting data in a table"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Bottom-up approach filling a table iteratively from smallest subproblems. Tags: dyanamic pogramming.",
    "topic": "Dyanamic Pogramming",
    "difficulty": "easy"
  },
  {
    "id": 86,
    "question": "In activity selection problem, we sort activities by:",
    "options": [
      "Finish time",
      "Duration",
      "Priority",
      "Start time"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Finish time. Tags: greedy.",
    "topic": "Greedy",
    "difficulty": "easy"
  },
  {
    "id": 87,
    "question": "What is the time complexity of activity selection problem after sorting?",
    "options": [
      "O(log n)",
      "O(n log n) for sorting + O(n) for selection",
      "O(n²)",
      "O(n)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is O(n log n) for sorting + O(n) for selection. Tags: greedy.",
    "topic": "Greedy",
    "difficulty": "easy"
  },
  {
    "id": 88,
    "question": "What is the result of 5 AND 3 (bitwise)?",
    "options": [
      "6",
      "7",
      "1",
      "8"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 1. Tags: bit-masking.",
    "topic": "Bit-masking",
    "difficulty": "easy"
  },
  {
    "id": 89,
    "question": "What is the result of left shift (n << 1)?",
    "options": [
      "n * 2",
      "n / 2",
      "n - 1",
      "n + 1"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is n * 2. Tags: bit-masking.",
    "topic": "Bit-masking",
    "difficulty": "easy"
  },
  {
    "id": 90,
    "question": "What is the result of right shift (n >> 1)?",
    "options": [
      "n / 2",
      "n - 1",
      "n + 1",
      "n * 2"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is n / 2. Tags: bit-masking.",
    "topic": "Bit-masking",
    "difficulty": "easy"
  },
  {
    "id": 91,
    "question": "When does method overloading is determined?",
    "options": [
      "At execution time",
      "At compile time",
      "At coding time",
      "At run time"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is At compile time. Tags: Polymorphism.",
    "topic": "polmorphism",
    "difficulty": "easy"
  },
  {
    "id": 92,
    "question": "Method Overloading occurs when",
    "options": [
      "Same method name with same parameters",
      "Different classes",
      "Different method names",
      "Same method name with different parameters"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Same method name with different parameters. Tags: Polymorphism.",
    "topic": "polmorphism",
    "difficulty": "easy"
  },
  {
    "id": 93,
    "question": "Which concept of Java is achieved by combining methods and attribute into a class?",
    "options": [
      "Encapsulation",
      "Polymorphism",
      "Abstraction",
      "Inheritance"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Encapsulation. Tags: Encapsulation.",
    "topic": "encpsulation",
    "difficulty": "easy"
  },
  {
    "id": 94,
    "question": "Which keyword is used in Java to inherit a class?",
    "options": [
      "extends",
      "implements",
      "inherits",
      "super"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is extends. Tags: Inheritance.",
    "topic": "inhritance",
    "difficulty": "easy"
  },
  {
    "id": 95,
    "question": "What is an \"abstract class\" in Java?",
    "options": [
      "A class that cannot be instantiated and must be inherited",
      "A final class that cannot be extended",
      "A class without any implementation",
      "A class that can only contain abstract methods"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is A class that cannot be instantiated and must be inherited. Tags: Abstraction.",
    "topic": "absraction",
    "difficulty": "easy"
  },
  {
    "id": 96,
    "question": "Rabin-Karp has a worst case complexity of O(nm) due to:",
    "options": [
      "Slow hashing",
      "String comparison at every step",
      "Large alphabet size",
      "Hash collisions causing repeated full comparisons"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Hash collisions causing repeated full comparisons. Tags: Rabin-Karp.",
    "topic": "rabin-karp",
    "difficulty": "easy"
  },
  {
    "id": 97,
    "question": "In KMP, if a mismatch occurs at pattern index j, we set j to:",
    "options": [
      "j - 1",
      "j + 1",
      "0",
      "lps[j-1]"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is lps[j-1]. Tags: KMP.",
    "topic": "kmp",
    "difficulty": "easy"
  },
  {
    "id": 98,
    "question": "In the Sieve of Eratosthenes, why do we start marking multiples from p²",
    "options": [
      "Multiples below p² are even",
      "To reduce array size",
      "p² is always prime",
      "All smaller multiples of p are already marked by previous primes"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is All smaller multiples of p are already marked by previous primes. Tags: Prime Sieve.",
    "topic": "prime sieve",
    "difficulty": "easy"
  },
  {
    "id": 99,
    "question": "What is the output of Kadane's algorithm on array [-2, -3, -1, -4]?",
    "options": [
      "-1",
      "-10",
      "-2",
      "0"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is -1. Tags: Kadane's.",
    "topic": "kadane's",
    "difficulty": "easy"
  },
  {
    "id": 100,
    "question": "Using a prefix sum array, the sum of elements from index l to r can be computed in:",
    "options": [
      "O(log n)",
      "O(r - l)",
      "O(n)",
      "O(1)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is O(1). Tags: KMP.",
    "topic": "kmp",
    "difficulty": "easy"
  },
  {
    "id": 101,
    "question": "Dynamic binding happens at:",
    "options": [
      "Edit time",
      "Compile time",
      "Link time",
      "Run time"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Run time. Tags: Dynamic Blinding.",
    "topic": "dynamic blinding",
    "difficulty": "easy"
  },
  {
    "id": 102,
    "question": "Message passing means:",
    "options": [
      "Object communicates with another object",
      "Function return",
      "Variable declaration",
      "Memory allocation"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Object communicates with another object. Tags: Message Passing.",
    "topic": "message passing",
    "difficulty": "easy"
  },
  {
    "id": 103,
    "question": "Copy constructor receives parameter of type:",
    "options": [
      "Integer",
      "Same class object reference",
      "String",
      "Float"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Same class object reference. Tags: Copy constructor.",
    "topic": "copy constructor",
    "difficulty": "easy"
  },
  {
    "id": 104,
    "question": "Method overriding requires:",
    "options": [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Inheritance. Tags: Destructor.",
    "topic": "desructor",
    "difficulty": "easy"
  },
  {
    "id": 105,
    "question": "Order of destructor execution:",
    "options": [
      "Derived → Base",
      "Base → Derived",
      "Random",
      "Parallel"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Derived → Base. Tags: Destructor.",
    "topic": "desructor",
    "difficulty": "easy"
  },
  {
    "id": 106,
    "question": "Deep copy avoids:",
    "options": [
      "Shared memory issues",
      "Memory allocation",
      "Duplicate objects",
      "Constructors"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Shared memory issues. Tags: Deep Copy.",
    "topic": "deep copy",
    "difficulty": "easy"
  },
  {
    "id": 107,
    "question": "Abstract class can have:",
    "options": [
      "Only constructors",
      "Both abstract and concrete methods",
      "Only abstract methods",
      "Only variables"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Both abstract and concrete methods. Tags: Abstraction.",
    "topic": "absraction",
    "difficulty": "medium"
  },
  {
    "id": 108,
    "question": "Late binding is also called:",
    "options": [
      "Early binding",
      "Dynamic binding",
      "Static binding",
      "Compile binding"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Dynamic binding. Tags: Dynamic Blinding.",
    "topic": "dynamic blinding",
    "difficulty": "medium"
  },
  {
    "id": 109,
    "question": "In KMP, LPS array stores?",
    "options": [
      "Longest prefix-suffix",
      "Last position",
      "Longest palindrome",
      "Loop count"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Longest prefix-suffix. Tags: KMP.",
    "topic": "dynamic blinding",
    "difficulty": "medium"
  },
  {
    "id": 110,
    "question": "Recursion base case prevents?",
    "options": [
      "Memory leak",
      "Binary search",
      "Infinite calls",
      "Sorting"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Infinite calls. Tags: Recursion.",
    "topic": "recrsion",
    "difficulty": "medium"
  },
  {
    "id": 111,
    "question": "In the Z-Algorithm, what does the variable R (the right boundary of the Z-box) signify?",
    "options": [
      "The total length of the string.",
      "The index of the last character of the pattern.",
      "The rightmost index of a substring that is also a prefix of the entire string.",
      "The number of unique characters in the window."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is The rightmost index of a substring that is also a prefix of the entire string.. Tags: Z Funtiion.",
    "topic": "z fntiion",
    "difficulty": "easy"
  },
  {
    "id": 112,
    "question": "What makes the Z-algorithm more efficient than a naive O(N^2) prefix search?",
    "options": [
      "It sorts the string before searching.",
      "It only checks the first and last characters of the string.",
      "It maintains a \"Z-box\" [L, R] to reuse previously computed match lengths.",
      "t uses a frequency array to skip characters."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is It maintains a \"Z-box\" [L, R] to reuse previously computed match lengths.. Tags: Z Funtiion.",
    "topic": "z fntiion",
    "difficulty": "easy"
  },
  {
    "id": 113,
    "question": "In the \"Sliding Window Maximum\" problem, which element is always at the front of the Deque?",
    "options": [
      "The smallest element in the current window.",
      "The largest element in the current window.",
      "The element that entered the window most recently.",
      "The element at the exact middle of the window."
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is The largest element in the current window.. Tags: Sliding Window.",
    "topic": "sliding window",
    "difficulty": "easy"
  },
  {
    "id": 114,
    "question": "In a \"Rotated Sorted Array,\" how do you decide which half to discard during Binary Search?",
    "options": [
      "Identify which half is \"normally sorted\" by comparing arr[low] and arr[mid]",
      "Use a linear search to find the pivot first.",
      "Always discard the left half.",
      "Discard the half that contains the largest number."
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Identify which half is \"normally sorted\" by comparing arr[low] and arr[mid]. Tags: Array.",
    "topic": "arry",
    "difficulty": "medium"
  },
  {
    "id": 115,
    "question": "In the \"Prime Sieve\" implementation, up to what value do we need to iterate the outer loop to mark multiples up to N",
    "options": [
      "N/2",
      "sqrt{N}",
      "N",
      "log N"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is sqrt{N}. Tags: Prime Sieve.",
    "topic": "Prime Seieve",
    "difficulty": "medium"
  },
  {
    "id": 116,
    "question": "The LPS array value for the string \"ABCAB\" at the last index is:",
    "options": [
      "2",
      "1",
      "3",
      "0"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 2. Tags: KMP.",
    "topic": "kmp",
    "difficulty": "medium"
  },
  {
    "id": 117,
    "question": ". How does the Z-Algorithm handle the case where i + Z[i - L] < R?",
    "options": [
      "It starts a new character-by-character comparison.",
      "It resets the Z-box to [0, 0].",
      "It sets Z[i] = Z[i - L] and moves to the next index without any comparisons.",
      "t increments R immediately."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is It sets Z[i] = Z[i - L] and moves to the next index without any comparisons.. Tags: Z Funtiion.",
    "topic": "z fntiion",
    "difficulty": "easy"
  },
  {
    "id": 118,
    "question": "In the KMP algorithm, what is the maximum possible value of any element in the LPS (Longest Prefix Suffix) array for a string of length N",
    "options": [
      "N-1",
      "N/2",
      "N",
      "log N"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is N-1. Tags: KMP.",
    "topic": "kmp",
    "difficulty": "easy"
  },
  {
    "id": 119,
    "question": "The Z-algorithm constructs the Z-array in O(N) time. What is the core reason for this efficiency?",
    "options": [
      "It uses a Hash Map to store substrings.",
      "it sorts the string first.",
      "It maintains a \"Z-box\" [L, R] to reuse previously computed match lengths.",
      "It only checks every second character."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is It maintains a \"Z-box\" [L, R] to reuse previously computed match lengths.. Tags: Z Funtiion.",
    "topic": "z fntiion",
    "difficulty": "easy"
  },
  {
    "id": 120,
    "question": "In a fixed sliding window of size K, how many windows exist in an array of size N?",
    "options": [
      "N – K + 1",
      "N + K",
      "K",
      "N"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is N – K + 1. Tags: Sliding Window.",
    "topic": "sliding window",
    "difficulty": "medium"
  },
  {
    "id": 121,
    "question": "In an undirected graph, cycle detection can be done using:",
    "options": [
      "DFS only",
      "Topological Sort",
      "BFS/DFS with parent tracking",
      "BFS only"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is BFS/DFS with parent tracking. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 122,
    "question": "Time complexity of DFS in graph:",
    "options": [
      "O(V + E)",
      "O(E log V)",
      "O(V²)",
      "O(V log E)"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is O(V + E). Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 123,
    "question": "A graph with V vertices and V-1 edges is always:",
    "options": [
      "Bipartite only",
      "Complete",
      "Cyclic",
      "Tree (if connected)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Tree (if connected). Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 124,
    "question": "Shortest cycle in an unweighted graph can be found using",
    "options": [
      "Dijkstra",
      "DFS",
      "Kruskal",
      "BFS"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is BFS. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 125,
    "question": ". Cycle detection in undirected graph using DFS requires:",
    "options": [
      "Parent node tracking",
      "Queue",
      "Priority Queue",
      "Stack"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Parent node tracking. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 126,
    "question": "Topological sort is applicable only for:",
    "options": [
      "Tree",
      "DAG",
      "Weighted Graph",
      "Undirected Graph"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is DAG. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 127,
    "question": "Which algorithm detects cycle in directed graph?",
    "options": [
      "Prim",
      "DFS with recursion stack",
      "BFS",
      "Kruskal"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is DFS with recursion stack. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 128,
    "question": "Kosaraju algorithm is used for:",
    "options": [
      "Shortest Path",
      ") Cycle detection",
      "MST",
      "Strongly Connected Components"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Strongly Connected Components. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 129,
    "question": "DSU stands for:",
    "options": [
      "Disjoint Set Union",
      "Dynamic Set Utility",
      "Data Set Union",
      "Directed Set Union"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Disjoint Set Union. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 130,
    "question": "DSU uses which techniques for optimization?",
    "options": [
      "DP",
      "Backtracking",
      "Greedy",
      "Path compression & union by rank"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Path compression & union by rank. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 131,
    "question": "Kruskal algorithm is based on:",
    "options": [
      "Greedy",
      "DFS",
      "DP",
      "Backtracking"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Greedy. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 132,
    "question": "Kruskal uses:",
    "options": [
      "Heap",
      "Stack",
      "DSU",
      "Queue"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is DSU. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 133,
    "question": "Prim’s algorithm uses:",
    "options": [
      "DSU",
      "Priority Queue",
      "Stack",
      "Array only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Priority Queue. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 134,
    "question": ". MST exists only for:",
    "options": [
      "Directed Graph",
      "Cyclic Graph",
      "Connected Undirected Graph",
      "DAG"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Connected Undirected Graph. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 135,
    "question": "Time complexity of Kruskal:",
    "options": [
      "O(V²)",
      "O(E log E)",
      "O(V log V)",
      "O(E²)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is O(E log E). Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 136,
    "question": "Dijkstra fails for:",
    "options": [
      "Positive weights",
      "Zero weights",
      "Negative weights",
      "Directed graphs"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Negative weights. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 137,
    "question": "Bellman-Ford detects:",
    "options": [
      "SCC",
      "MST",
      "Negative cycle",
      "Bipartite"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Negative cycle. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 138,
    "question": "Time complexity of Bellman-Ford:",
    "options": [
      "O(V²)",
      "O(VE)",
      "O(V + E)",
      "O(E log V)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is O(VE). Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 139,
    "question": "Dijkstra uses:",
    "options": [
      "DSU",
      "Min Heap",
      "Stack",
      "Queue"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Min Heap. Tags: Graph.",
    "topic": "graph",
    "difficulty": "easy"
  },
  {
    "id": 140,
    "question": "Trie is mainly used for:",
    "options": [
      "DP",
      "Searching strings efficiently",
      "Graph traversal",
      "Sorting"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Searching strings efficiently. Tags: Trie.",
    "topic": "tri",
    "difficulty": "easy"
  },
  {
    "id": 141,
    "question": "Time complexity of inserting a word of length L in Trie:",
    "options": [
      "O(log L)",
      "O(L²)",
      "O(L)",
      "O(1)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is O(L). Tags: Trie.",
    "topic": "tri",
    "difficulty": "easy"
  },
  {
    "id": 142,
    "question": "Which problem is best solved using Trie?",
    "options": [
      "Shortest path",
      "Word dictionary search",
      "Cycle detection",
      "MST"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Word dictionary search. Tags: Trie.",
    "topic": "tri",
    "difficulty": "easy"
  },
  {
    "id": 143,
    "question": "Given two classes, Base and Derived, where Derived extends Base and both classes have a method show() with different implementations.\r\nHow is polymorphic behavior achieved when calling show() on a Derived object referenced by a Base type?",
    "options": [
      "error",
      "By marking show() in Base as final",
      "By using the static keyword in Derived's show() method",
      "By overriding show() in Derived"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is By overriding show() in Derived. Tags: Polymorphism.",
    "topic": "polmorphism",
    "difficulty": "easy"
  },
  {
    "id": 144,
    "question": "What is the difference between encapsulation and abstraction?",
    "options": [
      "There is no significant difference",
      "Encapsulation is about hiding the details, abstraction is about showing only essential features",
      "Encapsulation deals with data, and abstraction deals with classes",
      "Encapsulation is a design guideline, whereas abstraction is a programming concept"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Encapsulation is about hiding the details, abstraction is about showing only essential features. Tags: Encapsulation.",
    "topic": "encpsulation",
    "difficulty": "easy"
  },
  {
    "id": 145,
    "question": "Constructor is used to:",
    "options": [
      "Destroy objec",
      "Initialize object",
      "Delete memory",
      "Copy object"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Initialize object. Tags: Constructor.",
    "topic": "contructor",
    "difficulty": "easy"
  },
  {
    "id": 146,
    "question": "Real-world example of abstraction:",
    "options": [
      "Memory allocation",
      "Calculator showing result only",
      "Compiler",
      "Pointer"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Calculator showing result only. Tags: Abstraction.",
    "topic": "absraction",
    "difficulty": "easy"
  },
  {
    "id": 147,
    "question": "Runtime polymorphism uses:",
    "options": [
      "Function overloading",
      "Constructors",
      "Arrays",
      "Function overriding"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Function overriding. Tags: Polymorphism.",
    "topic": "polmorphism",
    "difficulty": "medium"
  },
  {
    "id": 148,
    "question": "Time complexity of sliding window approach?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(n log n)"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is O(n). Tags: Sliding Window.",
    "topic": "sliding window",
    "difficulty": "medium"
  },
  {
    "id": 149,
    "question": "Rabin Karp uses?",
    "options": [
      "Graph",
      "Stack",
      "Hashing",
      "Tree"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Hashing. Tags: Rabin Karp.",
    "topic": "rabin karp",
    "difficulty": "medium"
  },
  {
    "id": 150,
    "question": "Sieve of Eratosthenes used for?",
    "options": [
      "Sorting",
      "Recursion",
      "Searching",
      "Prime generation"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Prime generation. Tags: Prime Sieve.",
    "topic": "prime sieve",
    "difficulty": "medium"
  },
  {
    "id": 151,
    "question": "Prefix sum array for [1,2,3] is?",
    "options": [
      "[1,3,6]",
      "[0,1,3]",
      "[1,2,3]",
      "[6,5,3]"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is [1,3,6]. Tags: Prefix Sum.",
    "topic": "prefix sum",
    "difficulty": "medium"
  },
  {
    "id": 152,
    "question": "Frequency array size for lowercase letters?",
    "options": [
      "256",
      "26",
      "128",
      "52"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 26. Tags: Frequency.",
    "topic": "freuency",
    "difficulty": "medium"
  },
  {
    "id": 153,
    "question": "What does n >> 1 compute?",
    "options": [
      "n mod 2",
      "n+1",
      "n / 2 (integer)",
      "n * 2"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is n / 2 (integer). Tags: bit-masking.",
    "topic": "Bit-masking",
    "difficulty": "easy"
  },
  {
    "id": 154,
    "question": "Fractional knapsack vs 0/1 knapsack: why does greedy work for fractional?",
    "options": [
      "Items can be split, so taking highest value/weight ratio is always optimal",
      "0/1 can also be solved greedily",
      "Fractional has fewer items",
      "Both are solved by greedy"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Items can be split, so taking highest value/weight ratio is always optimal. Tags: greedy.",
    "topic": "Greedy",
    "difficulty": "easy"
  },
  {
    "id": 155,
    "question": "Job sequencing with deadlines: greedy strategy?",
    "options": [
      "Sort by duration asc",
      "FIFO scheduling",
      "Sort by profit desc, schedule each job in latest possible slot",
      "Sort by deadline asc"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Sort by profit desc, schedule each job in latest possible slot. Tags: greedy.",
    "topic": "Greedy",
    "difficulty": "easy"
  },
  {
    "id": 156,
    "question": "What is the key difference between top-down and bottom-up DP?",
    "options": [
      "Top-down uses memoized recursion; bottom-up uses iterative tabulation",
      "They produce different answers",
      "Top-down is faster always",
      "Bottom-up uses recursion"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Top-down uses memoized recursion; bottom-up uses iterative tabulation. Tags: dyanamic pogramming.",
    "topic": "Dyanamic Pogramming",
    "difficulty": "easy"
  },
  {
    "id": 157,
    "question": "DP on trees typically uses which traversal",
    "options": [
      "Level order",
      "Preorder only",
      "BFS",
      "DFS with post-order processing"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is DFS with post-order processing. Tags: dyanamic pogramming.",
    "topic": "Dyanamic Pogramming",
    "difficulty": "easy"
  },
  {
    "id": 158,
    "question": "In the coin change problem (minimum coins), what is the recurrence?",
    "options": [
      "dp[i] = dp[i] * coin",
      "dp[i] = dp[i-1] - coin",
      "dp[i] = dp[i-1] + 1",
      "dp[i] = min(dp[i - coin] + 1) for all coins <= i"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is dp[i] = min(dp[i - coin] + 1) for all coins <= i. Tags: dyanamic pogramming.",
    "topic": "Dyanamic Pogramming",
    "difficulty": "easy"
  },
  {
    "id": 159,
    "question": "Task scheduling with deadlines and profits: best approach?",
    "options": [
      "Greedy + max-heap",
      "FIFO queue",
      "BFS",
      "Dynamic programming only"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Greedy + max-heap. Tags: greedy.",
    "topic": "Greedy",
    "difficulty": "easy"
  },
  {
    "id": 160,
    "question": "Convert a sorted array to a height-balanced BST by:",
    "options": [
      "Inserting left to right",
      "Choosing the middle element as root recursively",
      "Inserting right to left",
      "Using BFS"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Choosing the middle element as root recursively. Tags: bst.",
    "topic": "BST",
    "difficulty": "easy"
  },
  {
    "id": 161,
    "question": "What is the time complexity of accessing an element in an array?",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is O(1). Tags: Array Indexing.",
    "topic": "Arrays",
    "difficulty": "easy"
  },
  {
    "id": 162,
    "question": "Which technique is used to find sum of subarray of size k efficiently?",
    "options": [
      "DFS",
      "Sorting",
      "Recursion",
      "Sliding Window"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Sliding Window. Tags: Fixed Window Sum.",
    "topic": "Sliding Window",
    "difficulty": "easy"
  },
  {
    "id": 163,
    "question": "Binary search works correctly only on?",
    "options": [
      "Tree",
      "Sorted array",
      "Unsorted array",
      "Graph"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Sorted array. Tags: Sorted Array Requirement.",
    "topic": "Binary Search",
    "difficulty": "easy"
  },
  {
    "id": 164,
    "question": "What does prefix sum array help compute?",
    "options": [
      "Range sum queries",
      "Sorting",
      "Deleting",
      "Searching"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Range sum queries. Tags: Prefix Range Query.",
    "topic": "Prefix Array",
    "difficulty": "easy"
  },
  {
    "id": 165,
    "question": "Kadane’s algorithm is used to find?",
    "options": [
      "Minimum subarray",
      "Maximum element",
      "Sorting",
      "Maximum subarray sum"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Maximum subarray sum. Tags: Maximum Subarray Sum.",
    "topic": "Subarray",
    "difficulty": "easy"
  },
  {
    "id": 166,
    "question": "What stops recursion from infinite calls?",
    "options": [
      "Base case",
      "Variable",
      "Loop",
      "Condition"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Base case. Tags: Recursion Base Case.",
    "topic": "Recursion",
    "difficulty": "easy"
  },
  {
    "id": 167,
    "question": "Which data structure is used in BFS traversal?",
    "options": [
      "Queue",
      "Heap",
      "Stack",
      "Set"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Queue. Tags: BFS Queue Usage.",
    "topic": "Trees",
    "difficulty": "easy"
  },
  {
    "id": 168,
    "question": "What is the maximum number of children in a binary tree node?",
    "options": [
      "Infinite",
      "2",
      "1",
      "3"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 2. Tags: Binary Tree Property.",
    "topic": "Trees",
    "difficulty": "easy"
  },
  {
    "id": 169,
    "question": "Average time complexity of searching in hash map?",
    "options": [
      "O(n log n)",
      "O(log n)",
      "O(1)",
      "O(n)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is O(1). Tags: HashMap Lookup.",
    "topic": "Hashing",
    "difficulty": "easy"
  },
  {
    "id": 170,
    "question": "Trie data structure is mainly used for?",
    "options": [
      "DP",
      "Prefix search",
      "Sorting",
      "Graph traversal"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Prefix search. Tags: Trie Prefix Search.",
    "topic": "Tries",
    "difficulty": "easy"
  },
  {
    "id": 171,
    "question": "Which technique is used to find longest substring without repeating characters?",
    "options": [
      "Greedy",
      "Sliding Window",
      "Binary Search",
      "DFS"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Sliding Window. Tags: Variable Window Unique Substring.",
    "topic": "Sliding Window",
    "difficulty": "easy"
  },
  {
    "id": 172,
    "question": "What does two pointer technique mainly optimize?",
    "options": [
      "Recursion",
      "Memory",
      "Sorting",
      "Time complexity"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Time complexity. Tags: Two Pointer Optimization.",
    "topic": "Arrays",
    "difficulty": "easy"
  },
  {
    "id": 173,
    "question": "What is the worst-case time complexity of binary search?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n log n)",
      "O(n)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is O(log n). Tags: Binary Search Complexity.",
    "topic": "Binary Search",
    "difficulty": "easy"
  },
  {
    "id": 174,
    "question": "Which case in binary search may cause infinite loop if not handled?",
    "options": [
      "Left shift",
      "Mid calculation",
      "Overflow condition",
      "Right shift"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Mid calculation. Tags: Binary Search Overflow Case.",
    "topic": "Binary Search",
    "difficulty": "easy"
  },
  {
    "id": 175,
    "question": "What happens if base case is missing in recursion?",
    "options": [
      "Correct output",
      "Faster execution",
      "Sorted output",
      "Infinite recursion"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Infinite recursion. Tags: Missing Base Case Effect.",
    "topic": "Recursion",
    "difficulty": "easy"
  },
  {
    "id": 176,
    "question": "Which problem is commonly solved using backtracking?",
    "options": [
      "Searching",
      "Prefix sum",
      "Permutation generation",
      "Sorting"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Permutation generation. Tags: Backtracking Permutations.",
    "topic": "Recursion",
    "difficulty": "easy"
  },
  {
    "id": 177,
    "question": "Height of a balanced binary tree is approximately?",
    "options": [
      "1",
      "n",
      "n^2",
      "log n"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is log n. Tags: Balanced Tree Height.",
    "topic": "Trees",
    "difficulty": "easy"
  },
  {
    "id": 178,
    "question": "Which traversal gives sorted output in BST?",
    "options": [
      "Postorder",
      "Level order",
      "Preorder",
      "Inorder"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Inorder. Tags: BST Inorder Traversal.",
    "topic": "Trees",
    "difficulty": "easy"
  },
  {
    "id": 179,
    "question": "Which hashing technique reduces collisions?",
    "options": [
      "Sorting",
      "DFS",
      "Chaining",
      "Recursion"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Chaining. Tags: Collision Resolution Chaining.",
    "topic": "Hashing",
    "difficulty": "easy"
  },
  {
    "id": 180,
    "question": "Which graph algorithm is used to find shortest path in unweighted graph?",
    "options": [
      "Kruskal",
      "Dijkstra",
      "BFS",
      "DFS"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is BFS. Tags: Unweighted Shortest Path BFS.",
    "topic": "Graphs",
    "difficulty": "easy"
  },
  {
    "id": 181,
    "question": "What is the output of the following code snippet in Java?\r\nclass Animal {\r\npublic void sound() {\r\nSystem.out.println(\"Animal sound\");\r\n}\r\n}\r\nclass Dog extends Animal {\r\npublic void sound() {\r\nSystem.out.println(\"Bark\");\r\n}\r\n}\r\npublic class Test {\r\npublic static void main(String[] args) {\r\nAnimal myAnimal = new Dog();\r\nmyAnimal.sound();\r\n}\r\n}",
    "options": [
      "Runtime error",
      "Bark",
      "Compilation error",
      "Animal sound"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Bark. Tags: Inheritance.",
    "topic": "inheritance",
    "difficulty": "medium"
  },
  {
    "id": 182,
    "question": "What is the output of this two pointer code?\r\nint[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};\r\n\r\nint left = 0, right = arr.length - 1;\r\n\r\nwhile (left < right) {\r\n\r\n    int temp = arr[left];\r\n\r\n    arr[left] = arr[right];\r\n\r\n    arr[right] = temp;\r\n\r\n    left++;\r\n\r\n    right--;\r\n\r\n}\r\n\r\nSystem.out.println(arr[0] + \" \" + arr[4] + \" \" + arr[8]);",
    "options": [
      "1 4 9",
      "9 4 1",
      "1 5 9",
      "9 5 1"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is 9 5 1. Tags: Window Sliding.",
    "topic": "window sliding",
    "difficulty": "medium"
  },
  {
    "id": 183,
    "question": "What does this print?\r\nint[] arr = {2, -1, 2, 3, 4, -1};\r\nint currSum = 0, maxSum = Integer.MIN_VALUE;\r\nint start = 0, end = 0, tempStart = 0;\r\nfor (int i = 0; i < arr.length; i++) {\r\n    currSum += arr[i];\r\n    if (currSum > maxSum) {\r\n        maxSum = currSum;\r\n        start = tempStart;\r\n        end = i;\r\n    }\r\n    if (currSum < 0) { currSum = 0; tempStart = i + 1; }\r\n}\r\nSystem.out.println(maxSum + \" \" + start + \" \" + end);",
    "options": [
      "8 2 5",
      "9 0 4",
      "10 1 4",
      "9 0 4"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 9 0 4. Tags: Window Sliding.",
    "topic": "window sliding",
    "difficulty": "medium"
  },
  {
    "id": 184,
    "question": "What does this Z-function snippet print?\r\nString s = \"aabxaa\";\r\nint n = s.length();\r\nint[] z = new int[n];\r\nint l = 0, r = 0;\r\nfor (int i = 1; i < n; i++) {\r\n    if (i < r) z[i] = Math.min(r - i, z[i - l]);\r\n    while (i + z[i] < n && s.charAt(z[i]) == s.charAt(i + z[i])) z[i]++;\r\n    if (i + z[i] > r) { l = i; r = i + z[i]; }\r\n}\r\nSystem.out.println(z[4] + \" \" + z[5]);",
    "options": [
      "1 2",
      "1 1",
      "0 0",
      "2 1"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is 2 1. Tags: Z Function.",
    "topic": "z function",
    "difficulty": "medium"
  },
  {
    "id": 185,
    "question": "What does this OOP polymorphism code print?\r\nclass Shape {\r\n\r\n    public void draw() { System.out.println(\"Drawing Shape\"); }\r\n\r\n}\r\n\r\nclass Circle extends Shape {\r\n\r\n    public void draw() { System.out.println(\"Drawing Circle\"); }\r\n\r\n}\r\n\r\nclass Square extends Shape {\r\n\r\n    public void draw() { System.out.println(\"Drawing Square\"); }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Shape s = new Circle();\r\n\r\n        s.draw();\r\n\r\n        s = new Square();\r\n\r\n        s.draw();\r\n\r\n    }\r\n\r\n}",
    "options": [
      "Compile error",
      "Drawing Circle, Drawing Square",
      "Drawing Circle, Drawing Circle",
      "Drawing Shape, Drawing Shape"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Drawing Circle, Drawing Square. Tags: Polymorphism.",
    "topic": "polymorphism",
    "difficulty": "medium"
  },
  {
    "id": 186,
    "question": "In KMP, what is the LPS (Longest Prefix Suffix) array for the string \"ABABAC\"?",
    "options": [
      "[0, 0, 1, 2, 1, 2]",
      "[0, 0, 1, 2, 3, 0]",
      "[0, 0, 1, 2, 1, 0]",
      "[0, 1, 2, 3, 4, 5]"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is [0, 0, 1, 2, 3, 0]. Tags: KMP.",
    "topic": "kmp",
    "difficulty": "medium"
  },
  {
    "id": 187,
    "question": "Consider a Prefix Sum array P for array A = [2, 4, 6, 8, 10]. What is the value of P[3] - P[0]?",
    "options": [
      "14",
      "20",
      "10",
      "18"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is 18. Tags: Prefix Sum.",
    "topic": "prefix sum",
    "difficulty": "medium"
  },
  {
    "id": 188,
    "question": "What is the maximum value in the lps array for the string abcabcabc?",
    "options": [
      "0",
      "3",
      "6",
      "9"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 6. Tags: KMP.",
    "topic": "kmp",
    "difficulty": "medium"
  },
  {
    "id": 189,
    "question": "For the string S = \"aabcaabx\", what is the value of Z[4]?",
    "options": [
      "1",
      "0",
      "4",
      "3"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is 3. Tags: Z Function.",
    "topic": "z function",
    "difficulty": "medium"
  },
  {
    "id": 190,
    "question": "What is the Z-array for the string aaaaa?",
    "options": [
      "[0, 5, 5, 5, 5]",
      "[0, 1, 2, 3, 4]",
      "[0, 4, 3, 2, 1]",
      "[5, 4, 3, 2, 1]"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is [0, 4, 3, 2, 1]. Tags: Z Function.",
    "topic": "z function",
    "difficulty": "medium"
  },
  {
    "id": 191,
    "question": "What is the lps value at the last index for P = \"AAAAA\"?",
    "options": [
      "4",
      "1",
      "5",
      "0"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 4. Tags: KMP.",
    "topic": "kmp",
    "difficulty": "medium"
  },
  {
    "id": 192,
    "question": "What is printed?\r\ninterface Printable {\r\n\r\n    void print();\r\n\r\n}\r\n\r\ninterface Showable {\r\n\r\n    void show();\r\n\r\n}\r\n\r\nclass Document implements Printable, Showable {\r\n\r\n    public void print() { System.out.println(\"Printing Document\"); }\r\n\r\n    public void show() { System.out.println(\"Showing Document\"); }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Document d = new Document();\r\n\r\n        Printable p = d;\r\n\r\n        Showable s = d;\r\n\r\n        p.print();\r\n\r\n        s.show();\r\n\r\n    }\r\n\r\n}",
    "options": [
      "Showing Document only",
      "Printing Document only",
      "Printing Document, Showing Document",
      "Compile error"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Printing Document, Showing Document. Tags: Inhertiance.",
    "topic": "inhertiance",
    "difficulty": "medium"
  },
  {
    "id": 193,
    "question": "What is the output?\r\nclass Sender {\r\n\r\n    void sendMessage(Receiver r, String msg) {\r\n\r\n        System.out.println(\"Sending: \" + msg);\r\n\r\n        r.receiveMessage(msg);\r\n\r\n    }\r\n\r\n}\r\n\r\nclass Receiver {\r\n\r\n    void receiveMessage(String msg) {\r\n\r\n        System.out.println(\"Received: \" + msg);\r\n\r\n    }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Sender s = new Sender();\r\n\r\n        Receiver r = new Receiver();\r\n\r\n        s.sendMessage(r, \"Hello OOP\");\r\n\r\n    }\r\n\r\n}",
    "options": [
      "Compile error",
      "Sending: Hello OOP, Received: Hello OOP",
      "Received: Hello OOP only",
      "Sending: Hello OOP only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Sending: Hello OOP, Received: Hello OOP. Tags: Inhertiance.",
    "topic": "inhertiance",
    "difficulty": "medium"
  },
  {
    "id": 194,
    "question": "What is printed?\r\nclass Calculator {\r\n\r\n    int add(int a, int b) { return a + b; }\r\n\r\n    double add(double a, double b) { return a + b; }\r\n\r\n    int add(int a, int b, int c) { return a + b + c; }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Calculator c = new Calculator();\r\n\r\n        System.out.println(c.add(2, 3));\r\n\r\n        System.out.println(c.add(2.5, 3.5));\r\n\r\n        System.out.println(c.add(1, 2, 3));\r\n\r\n    }\r\n\r\n}",
    "options": [
      "5, 5.0, 5",
      "5, 5, 6",
      "5, 6.0, 6",
      "5.0, 6.0, 6"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 5, 6.0, 6. Tags: Polymorphism.",
    "topic": "polymorphism",
    "difficulty": "medium"
  },
  {
    "id": 195,
    "question": "What is the output?\r\nclass Shape {\r\n    void draw() { System.out.println(\"Drawing Shape\"); }\r\n}\r\nclass Triangle extends Shape {\r\n    void draw() { System.out.println(\"Drawing Triangle\"); }\r\n}\r\nclass Rectangle extends Shape {\r\n    void draw() { System.out.println(\"Drawing Rectangle\"); }\r\n}\r\npublic class Test {\r\n    public static void main(String[] args) {\r\n        Shape[] shapes = {new Triangle(), new Rectangle(), new Shape()};\r\n        for (Shape s : shapes) s.draw();\r\n    }\r\n}",
    "options": [
      "Drawing Triangle, Drawing Rectangle, Drawing Shape",
      "Drawing Shape, Drawing Shape, Drawing Shape",
      "Drawing Triangle, Drawing Triangle, Drawing Rectangle",
      "Compile error"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Drawing Triangle, Drawing Rectangle, Drawing Shape. Tags: Inhertiance.",
    "topic": "inhertiance",
    "difficulty": "medium"
  },
  {
    "id": 196,
    "question": "What is the output?\r\nclass A {\r\n\r\n    void display() { System.out.println(\"Class A\"); }\r\n\r\n}\r\n\r\nclass B extends A {\r\n\r\n    void display() {\r\n\r\n        super.display();\r\n\r\n        System.out.println(\"Class B\");\r\n\r\n    }\r\n\r\n}\r\n\r\nclass C extends B {\r\n\r\n    void display() {\r\n\r\n        super.display();\r\n\r\n        System.out.println(\"Class C\");\r\n\r\n    }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        C obj = new C();\r\n\r\n        obj.display();\r\n\r\n    }\r\n\r\n}",
    "options": [
      "Class A, Class B, Class C",
      "Class C, Class B, Class A",
      "Class C only",
      "Class A, Class C"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Class A, Class B, Class C. Tags: Inheritance.",
    "topic": "inheritance",
    "difficulty": "medium"
  },
  {
    "id": 197,
    "question": "What does this multilevel inheritance print?\r\nclass Vehicle {\r\n\r\n    void move() { System.out.println(\"Vehicle moves\"); }\r\n\r\n}\r\n\r\nclass Car extends Vehicle {\r\n\r\n    void move() { System.out.println(\"Car drives\"); }\r\n\r\n}\r\n\r\nclass SportsCar extends Car {\r\n\r\n    void move() { System.out.println(\"SportsCar races\"); }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Vehicle v = new SportsCar();\r\n\r\n        v.move();\r\n\r\n        Car c = new SportsCar();\r\n\r\n        c.move();\r\n\r\n    }\r\n\r\n}",
    "options": [
      "SportsCar races, Car drives",
      "SportsCar races, SportsCar races",
      "Car drives, SportsCar races",
      "Vehicle moves, Car drives"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is SportsCar races, SportsCar races. Tags: Inheritance.",
    "topic": "inheritance",
    "difficulty": "medium"
  },
  {
    "id": 198,
    "question": "What is printed?\r\nclass A {\r\n    int x = 10;\r\n    void show() { System.out.println(\"A: \" + x); }\r\n}\r\nclass B extends A {\r\n    int x = 20;\r\n    void show() { System.out.println(\"B: \" + x); }\r\n}\r\nclass C extends B {\r\n    int x = 30;\r\n    void show() { System.out.println(\"C: \" + x); }\r\n}\r\npublic class Test {\r\n    public static void main(String[] args) {\r\n        A obj = new C();\r\n        obj.show();\r\n    }\r\n}",
    "options": [
      "A: 30",
      "B: 20",
      "A: 10",
      "C: 30"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is C: 30. Tags: Enacapsulation.",
    "topic": "enacapsulation",
    "difficulty": "medium"
  },
  {
    "id": 199,
    "question": "What is the output?\r\nclass Person {\r\n    String name;\r\n    Person(String n) {\r\n        name = n;\r\n        System.out.println(\"Person: \" + name);\r\n    }\r\n}\r\nclass Teacher extends Person {\r\n    String subject;\r\n    Teacher(String n, String s) {\r\n        super(n);\r\n        subject = s;\r\n        System.out.println(\"Teacher: \" + subject);\r\n    }\r\n}\r\npublic class Test {\r\n    public static void main(String[] args) {\r\n        Teacher t = new Teacher(\"Alice\", \"Math\");\r\n    }\r\n}",
    "options": [
      "Teacher: Alice, Person: Math",
      "Person: Alice only",
      "Person: Alice, Teacher: Math",
      "Teacher: Math, Person: Alice"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Person: Alice, Teacher: Math. Tags: Enacapsulation.",
    "topic": "enacapsulation",
    "difficulty": "medium"
  },
  {
    "id": 200,
    "question": "What does this abstraction code print?\r\ninterface Vehicle {\r\n\r\n    void start();\r\n\r\n    void stop();\r\n\r\n    default void fuel() {\r\n\r\n        System.out.println(\"Fueling Vehicle\");\r\n\r\n    }\r\n\r\n}\r\n\r\nclass Bike implements Vehicle {\r\n\r\n    public void start() { System.out.println(\"Bike Started\"); }\r\n\r\n    public void stop() { System.out.println(\"Bike Stopped\"); }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Vehicle v = new Bike();\r\n\r\n        v.start();\r\n\r\n        v.fuel();\r\n\r\n        v.stop();\r\n\r\n    }\r\n\r\n}",
    "options": [
      "Bike Started, Fueling Vehicle, Bike Stopped",
      "Bike Started, Bike Stopped only",
      "Compile error",
      "Fueling Vehicle, Bike Started, Bike Stopped"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Bike Started, Fueling Vehicle, Bike Stopped. Tags: Inheritance.",
    "topic": "inheritance",
    "difficulty": "medium"
  },
  {
    "id": 201,
    "question": "What is printed?\r\nabstract class Shape {\r\n\r\n    abstract double area();\r\n\r\n    void display() {\r\n\r\n        System.out.println(\"Area = \" + area());\r\n\r\n    }\r\n\r\n}\r\n\r\nclass Circle extends Shape {\r\n\r\n    double r;\r\n\r\n    Circle(double r) { this.r = r; }\r\n\r\n    double area() { return 3.14 * r * r; }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Shape s = new Circle(5);\r\n\r\n        s.display();\r\n\r\n    }\r\n\r\n}",
    "options": [
      "Compile error",
      "Area = 15.7",
      "Area = 25.0",
      "Area = 78.5"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Area = 78.5. Tags: Inheritance.",
    "topic": "inheritance",
    "difficulty": "medium"
  },
  {
    "id": 202,
    "question": "What is printed?\r\nclass Person {\r\n\r\n    String name;\r\n\r\n    int age;\r\n\r\n    Person(String n, int a) { name = n; age = a; }\r\n\r\n    boolean isAdult() { return age >= 18; }\r\n\r\n    void greet(Person other) {\r\n\r\n        System.out.println(name + \" greets \" + other.name);\r\n\r\n    }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Person p1 = new Person(\"Alice\", 20);\r\n\r\n        Person p2 = new Person(\"Bob\", 15);\r\n\r\n        System.out.println(p1.isAdult() + \" \" + p2.isAdult());\r\n\r\n        p1.greet(p2);\r\n\r\n    }\r\n\r\n}",
    "options": [
      "true false, Alice greets Bob",
      "false false, Bob greets Alice",
      "false true, Alice greets Bob",
      "true true, Bob greets Alice"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is true false, Alice greets Bob. Tags: Polymorphism.",
    "topic": "polymorphism",
    "difficulty": "medium"
  },
  {
    "id": 203,
    "question": "What is printed?\r\nclass Mobile {\r\n\r\n    String brand;\r\n\r\n    int price;\r\n\r\n    static String company = \"TechCorp\";\r\n\r\n    Mobile(String b, int p) {\r\n\r\n        brand = b;\r\n\r\n        price = p;\r\n\r\n    }\r\n\r\n    static void showCompany() {\r\n\r\n        System.out.println(\"Company: \" + company);\r\n\r\n    }\r\n\r\n    void showDetails() {\r\n\r\n        System.out.println(brand + \" costs \" + price);\r\n\r\n    }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Mobile m = new Mobile(\"XPhone\", 15000);\r\n\r\n        Mobile.showCompany();\r\n\r\n        m.showDetails();\r\n\r\n    }\r\n\r\n}",
    "options": [
      "Company: TechCorp only",
      "Compile error",
      "Company: TechCorp, XPhone costs 15000",
      "XPhone costs 15000, Company: TechCorp"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Company: TechCorp, XPhone costs 15000. Tags: Inheritance.",
    "topic": "inheritance",
    "difficulty": "medium"
  },
  {
    "id": 204,
    "question": "What is the output?\r\nabstract class Appliance {\r\n    String brand;\r\n    Appliance(String b) { brand = b; }\r\n    abstract void operate();\r\n    void powerOn() { System.out.println(brand + \" is ON\"); }\r\n}\r\nclass WashingMachine extends Appliance {\r\n    WashingMachine(String b) { super(b); }\r\n    void operate() { System.out.println(brand + \" is washing clothes\"); }\r\n}\r\npublic class Test {\r\n    public static void main(String[] args) {\r\n        Appliance a = new WashingMachine(\"Samsung\");\r\n        a.powerOn();\r\n        a.operate();\r\n    }\r\n}",
    "options": [
      "Compile error",
      "Samsung is washing clothes, Samsung is ON",
      "Samsung is ON only",
      "Samsung is ON, Samsung is washing clothes"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Samsung is ON, Samsung is washing clothes. Tags: Inhertiance.",
    "topic": "inhertiance",
    "difficulty": "medium"
  },
  {
    "id": 205,
    "question": "What is printed?\r\ninterface Drawable { void draw(); }\r\ninterface Resizable { void resize(int factor); }\r\nclass Square implements Drawable, Resizable {\r\n    int side;\r\n    Square(int s) { side = s; }\r\n    public void draw() {\r\n        System.out.println(\"Square with side \" + side);\r\n    }\r\n    public void resize(int factor) {\r\n        side *= factor;\r\n        System.out.println(\"Resized to \" + side);\r\n    }\r\n}\r\npublic class Test {\r\n    public static void main(String[] args) {\r\n        Square sq = new Square(4);\r\n        sq.draw();\r\n        sq.resize(3);\r\n        sq.draw();\r\n    }\r\n}",
    "options": [
      "Resized to 12, Square with side 4, Square with side 12",
      "Compile error",
      "Square with side 4, Resized to 4, Square with side 4",
      "Square with side 4, Resized to 12, Square with side 12"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Square with side 4, Resized to 12, Square with side 12. Tags: Inheritance.",
    "topic": "inheritance",
    "difficulty": "medium"
  },
  {
    "id": 206,
    "question": "What is the output?\r\ninterface Flyable {\r\n\r\n    default void land() { System.out.println(\"Landing\"); }\r\n\r\n    void fly();\r\n\r\n}\r\n\r\nclass Bird implements Flyable {\r\n\r\n    public void fly() { System.out.println(\"Bird flying\"); }\r\n\r\n}\r\n\r\nclass Airplane implements Flyable {\r\n\r\n    public void fly() { System.out.println(\"Airplane flying\"); }\r\n\r\n    public void land() { System.out.println(\"Airplane landing on runway\"); }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Flyable f1 = new Bird();\r\n\r\n        Flyable f2 = new Airplane();\r\n\r\n        f1.fly(); f1.land();\r\n\r\n        f2.fly(); f2.land();\r\n\r\n    }\r\n\r\n}",
    "options": [
      "Compile error",
      "Bird flying, Landing, Airplane flying, Landing",
      "Bird flying, Landing, Airplane flying, Airplane landing on runway",
      "Bird flying, Airplane landing on runway, Airplane flying, Landing"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Bird flying, Landing, Airplane flying, Airplane landing on runway. Tags: Inhertiance.",
    "topic": "inhertiance",
    "difficulty": "medium"
  },
  {
    "id": 207,
    "question": "What is the output?\r\nclass Printer {\r\n    void print(int x) { System.out.println(\"Int: \" + x); }\r\n    void print(double x) { System.out.println(\"Double: \" + x); }\r\n    void print(String x) { System.out.println(\"String: \" + x); }\r\n    void print(int x, int y) { System.out.println(\"Two Ints: \" + x + \" \" + y); }\r\n}\r\npublic class Test {\r\n    public static void main(String[] args) {\r\n        Printer p = new Printer();\r\n        p.print(5);\r\n        p.print(3.14);\r\n        p.print(\"Hello\");\r\n        p.print(2, 3);\r\n    }\r\n}",
    "options": [
      "Int: 5, Double: 3.14, String: Hello, Two Ints: 2 3",
      "Compile error",
      "String: Hello, Int: 5, Double: 3.14, Two Ints: 2 3",
      "Int: 5, Double: 3, String: Hello, Two Ints: 2 3"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Int: 5, Double: 3.14, String: Hello, Two Ints: 2 3. Tags: Polymorphism.",
    "topic": "polymorphism",
    "difficulty": "medium"
  },
  {
    "id": 208,
    "question": "What is printed?\r\nclass Base {\r\n    int value = 100;\r\n    void show() { System.out.println(\"Base: \" + value); }\r\n}\r\nclass Derived extends Base {\r\n    int value = 200;\r\n    void show() { System.out.println(\"Derived: \" + value); }\r\n    void showBoth() {\r\n        System.out.println(super.value + \" \" + this.value);\r\n    }\r\n}\r\npublic class Test {\r\n    public static void main(String[] args) {\r\n        Derived d = new Derived();\r\n        d.show();\r\n        d.showBoth();\r\n    }\r\n}",
    "options": [
      "Base: 200, 100 100",
      "Derived: 100, 100 200",
      "Derived: 200, 100 200",
      "Base: 100, 200 200"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Derived: 200, 100 200. Tags: Inhertiance.",
    "topic": "inhertiance",
    "difficulty": "medium"
  },
  {
    "id": 209,
    "question": "What is the output?\r\nclass Animal {\r\n    String name;\r\n    Animal(String n) { name = n; }\r\n    void speak() { System.out.println(name + \" makes a sound\"); }\r\n}\r\nclass Lion extends Animal {\r\n    Lion(String n) { super(n); }\r\n    void speak() { System.out.println(name + \" roars\"); }\r\n}\r\nclass Parrot extends Animal {\r\n    Parrot(String n) { super(n); }\r\n    void speak() { System.out.println(name + \" talks\"); }\r\n}\r\npublic class Test {\r\n    public static void main(String[] args) {\r\n        Animal[] animals = {\r\n            new Lion(\"Simba\"),\r\n            new Parrot(\"Polly\"),\r\n            new Animal(\"Unknown\")\r\n        };\r\n        for (Animal a : animals) a.speak();\r\n    }\r\n}",
    "options": [
      "Compile error",
      "Simba makes a sound, Polly talks, Unknown makes a sound",
      "Simba roars, Polly talks, Unknown roars",
      "Simba roars, Polly talks, Unknown makes a sound"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Simba roars, Polly talks, Unknown makes a sound. Tags: Dynamic Binding.",
    "topic": "dynamic binding",
    "difficulty": "medium"
  },
  {
    "id": 210,
    "question": "What is the output?\r\nclass Vehicle {\r\n\r\n    String type;\r\n\r\n    Vehicle(String t) { type = t; }\r\n\r\n    String getType() { return type; }\r\n\r\n}\r\n\r\nclass ElectricCar extends Vehicle {\r\n\r\n    int batteryLevel;\r\n\r\n    ElectricCar(String t, int b) {\r\n\r\n        super(t);\r\n\r\n        batteryLevel = b;\r\n\r\n    }\r\n\r\n    String getType() {\r\n\r\n        return super.getType() + \" (Electric, Battery: \" + batteryLevel + \"%)\";\r\n\r\n    }\r\n\r\n}\r\n\r\npublic class Test {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        Vehicle v = new ElectricCar(\"Car\", 80);\r\n\r\n        System.out.println(v.getType());\r\n\r\n    }\r\n\r\n}",
    "options": [
      "Car",
      "Car (Electric, Battery: 0%)",
      "Car (Electric, Battery: 80%)",
      "Compile error"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Car (Electric, Battery: 80%). Tags: Encapsulation.",
    "topic": "encapsulation",
    "difficulty": "medium"
  },
  {
    "id": 211,
    "question": "0/1 knapsack complexity:",
    "options": [
      "O(n)",
      "O(W²)",
      "O(n²)",
      "O(nW)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is O(nW). Tags: greedy.",
    "topic": "Greedy",
    "difficulty": "medium"
  },
  {
    "id": 212,
    "question": "Greedy fails when:",
    "options": [
      "Optimal substructure missing",
      "Small data",
      "Binary data",
      "Sorted data"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Optimal substructure missing. Tags: greedy.",
    "topic": "Greedy",
    "difficulty": "medium"
  },
  {
    "id": 213,
    "question": "What is the output of evaluating postfix: 5 1 2 + 4 * + 3 -?",
    "options": [
      "16",
      "14",
      "12",
      "10"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 14. Tags: stack.",
    "topic": "Stack",
    "difficulty": "medium"
  },
  {
    "id": 214,
    "question": "When deleting a node with two children in BST, which node replaces it?",
    "options": [
      "Right child",
      "Root",
      "Left child",
      "Inorder successor"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Inorder successor. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 215,
    "question": "Longest Common Subsequence (LCS) of strings of length m and n has complexity:",
    "options": [
      "O(2^n)",
      "O(m log n)",
      "O(m+n)",
      "O(mn)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is O(mn). Tags: dp.",
    "topic": "Dynamic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 216,
    "question": "Evaluate this postfix using stack: what does this return for \"231*+9-\"?\r\nint evalPostfix(String exp) {\r\n\r\n    Stack<Integer> s = new Stack<>();\r\n\r\n    for(char c : exp.toCharArray()){\r\n\r\n        if(Character.isDigit(c)) s.push(c-'0');\r\n\r\n        else {\r\n\r\n            int b=s.pop(), a=s.pop();\r\n\r\n            if(c=='+') s.push(a+b);\r\n\r\n            else if(c=='-') s.push(a-b);\r\n\r\n            else if(c=='*') s.push(a*b);\r\n\r\n        }\r\n\r\n    }\r\n\r\n    return s.pop();\r\n\r\n}",
    "options": [
      "0",
      "-4",
      "2",
      "4"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is -4. Tags: stack.",
    "topic": "Stack",
    "difficulty": "medium"
  },
  {
    "id": 217,
    "question": "What is the output of inorder traversal?\r\nclass Node { int val; Node left,right;\r\n\r\n    Node(int v){val=v;} }\r\n\r\nNode root = new Node(4);\r\n\r\nroot.left = new Node(2);\r\n\r\nroot.right = new Node(6);\r\n\r\nroot.left.left = new Node(1);\r\n\r\nroot.left.right = new Node(3);\r\n\r\n// inorder traversal prints?",
    "options": [
      "4 2 6 1 3",
      "1 2 3 4 6",
      "4 2 1 3 6",
      "1 3 2 6 4"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 1 2 3 4 6. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 218,
    "question": "What does this function return for BST with values 1,2,3,4,5 and k=3?\r\nint k, result;\r\nvoid kthSmallest(Node r, int target){\r\n    if(r==null) return;\r\n    kthSmallest(r.left, target);\r\n    k++;\r\n    if(k==target) { result=r.val; return; }\r\n    kthSmallest(r.right, target);\r\n}",
    "options": [
      "4",
      "2",
      "3",
      "1"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 3. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 219,
    "question": "What does this LCA function return for nodes 1 and 3 in BST 4,2,6,1,3,5,7?\r\nNode lca(Node r, int p, int q){\r\n    if(r==null) return null;\r\n    if(p<r.val && q<r.val) return lca(r.left,p,q);\r\n    if(p>r.val && q>r.val) return lca(r.right,p,q);\r\n    return r;\r\n}",
    "options": [
      "4",
      "2",
      "1",
      "6"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 2. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 220,
    "question": "What does this kth largest return for arr={3,2,1,5,6,4}, k=2?\r\nint kthLargest(int[] nums, int k){\r\n\r\n    PriorityQueue<Integer> pq = new PriorityQueue<>();\r\n\r\n    for(int n:nums){\r\n\r\n        pq.add(n);\r\n\r\n        if(pq.size()>k) pq.poll();\r\n\r\n    }\r\n\r\n    return pq.peek();\r\n\r\n}",
    "options": [
      "3",
      "6",
      "4",
      "5"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is 5. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 221,
    "question": "What does this 0/1 knapsack return for weights={1,3,4,5}, values={1,4,5,7}, capacity=7?\r\nint knapsack(int[] w, int[] v, int W){\r\n\r\n    int n=w.length;\r\n\r\n    int[][] dp=new int[n+1][W+1];\r\n\r\n    for(int i=1;i<=n;i++)\r\n\r\n        for(int j=0;j<=W;j++){\r\n\r\n            dp[i][j]=dp[i-1][j];\r\n\r\n            if(w[i-1]<=j) dp[i][j]=Math.max(dp[i][j],dp[i-1][j-w[i-1]]+v[i-1]);\r\n\r\n        }\r\n\r\n    return dp[n][W];\r\n\r\n}",
    "options": [
      "9",
      "7",
      "10",
      "11"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 9. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 222,
    "question": "What does this return for arr={4,1,2,1,2}?\r\nint singleNumber(int[] nums){\r\n    int result=0;\r\n    for(int n:nums) result^=n;\r\n    return result;\r\n}",
    "options": [
      "0",
      "4",
      "2",
      "1"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 4. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 223,
    "question": "What is the output?\r\nint a=5,b=3;\r\n\r\na=a^b; b=a^b; a=a^b;\r\n\r\nSystem.out.println(a+\" \"+b);",
    "options": [
      "0 0",
      "8 8",
      "3 5",
      "5 3"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 3 5. Tags: bit-masking.",
    "topic": "Bit-masking",
    "difficulty": "medium"
  },
  {
    "id": 224,
    "question": "What does this BST insert return as inorder after inserting 5,3,7,1,4?\r\nNode insert(Node r, int val){\r\n    if(r==null) return new Node(val);\r\n    if(val<r.val) r.left=insert(r.left,val);\r\n    else if(val>r.val) r.right=insert(r.right,val);\r\n    return r;\r\n}",
    "options": [
      "1 4 3 7 5",
      "5 3 7 1 4",
      "1 3 4 5 7",
      "7 5 4 3 1"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 1 3 4 5 7. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 225,
    "question": "What does this return for coins={1,2,5}, amount=11?\r\nint coinChange(int[] coins, int amount){\r\n\r\n    int[] dp=new int[amount+1];\r\n\r\n    Arrays.fill(dp,amount+1);\r\n\r\n    dp[0]=0;\r\n\r\n    for(int i=1;i<=amount;i++)\r\n\r\n        for(int c:coins)\r\n\r\n            if(c<=i) dp[i]=Math.min(dp[i],dp[i-c]+1);\r\n\r\n    return dp[amount]>amount?-1:dp[amount];\r\n\r\n}",
    "options": [
      "5",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 3. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 226,
    "question": "What does this perfect squares return for n=12?\r\nint numSquares(int n){\r\n\r\n    int[] dp=new int[n+1];\r\n\r\n    Arrays.fill(dp,Integer.MAX_VALUE);\r\n\r\n    dp[0]=0;\r\n\r\n    for(int i=1;i<=n;i++)\r\n\r\n        for(int j=1;j*j<=i;j++)\r\n\r\n            dp[i]=Math.min(dp[i],dp[i-j*j]+1);\r\n\r\n    return dp[n];\r\n\r\n}",
    "options": [
      "2",
      "3",
      "5",
      "4"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 3. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 227,
    "question": "What is the output?\r\nString s1=\"AGGTAB\", s2=\"GXTXAYB\";\r\n\r\nint m=s1.length(), n=s2.length();\r\n\r\nint[][] dp=new int[m+1][n+1];\r\n\r\nfor(int i=1;i<=m;i++)\r\n\r\n    for(int j=1;j<=n;j++)\r\n\r\n        if(s1.charAt(i-1)==s2.charAt(j-1)) dp[i][j]=dp[i-1][j-1]+1;\r\n\r\n        else dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);\r\n\r\nSystem.out.println(dp[m][n]);",
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is 4. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 228,
    "question": "What is the output?\r\nint[] prices={1,3,4,5,8,9};\r\n\r\nint maxProfit=0;\r\n\r\nfor(int i=1;i<prices.length;i++)\r\n\r\n    if(prices[i]>prices[i-1]) maxProfit+=prices[i]-prices[i-1];\r\n\r\nSystem.out.println(maxProfit);",
    "options": [
      "9",
      "7",
      "8",
      "6"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 8. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 229,
    "question": "What does this non-overlapping intervals return for intervals={{1,2},{2,3},{3,4},{1,3}}?\r\nint eraseOverlapIntervals(int[][] intervals){\r\n\r\n    Arrays.sort(intervals,(a,b)->a[1]-b[1]);\r\n\r\n    int count=0, end=intervals[0][1];\r\n\r\n    for(int i=1;i<intervals.length;i++){\r\n\r\n        if(intervals[i][0]<end) count++;\r\n\r\n        else end=intervals[i][1];\r\n\r\n    }\r\n\r\n    return count;\r\n\r\n}",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 1. Tags: greedy.",
    "topic": "Greedy",
    "difficulty": "medium"
  },
  {
    "id": 230,
    "question": "What is the output?\r\nint x=10, y=3;\r\n\r\nSystem.out.println(x&y);\r\n\r\nSystem.out.println(x|y);\r\n\r\nSystem.out.println(x^y);\r\n\r\nSystem.out.println(~x);",
    "options": [
      "2,11,9,-11",
      "2,11,9,-10",
      "3,10,9,-10",
      "2,10,8,-11"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 2,11,9,-11. Tags: bit-masking.",
    "topic": "Bit-masking",
    "difficulty": "medium"
  },
  {
    "id": 231,
    "question": "What is the output of postorder traversal for tree with root=1, left=2, right=3?\r\nvoid postorder(Node r) {\r\n\r\n    if(r == null) return;\r\n\r\n    postorder(r.left);\r\n\r\n    postorder(r.right);\r\n\r\n    System.out.print(r.val + \" \");\r\n\r\n}",
    "options": [
      "3 2 1",
      "1 3 2",
      "2 3 1",
      "1 2 3"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 2 3 1. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 232,
    "question": "What is the output?\r\nNode root = new Node(10);\r\nroot.left = new Node(5);\r\nroot.right = new Node(15);\r\nroot.left.left = new Node(3);\r\nroot.left.right = new Node(7);\r\n\r\nint sum = 0;\r\nQueue<Node> q = new LinkedList<>();\r\nq.add(root);\r\nwhile(!q.isEmpty()) {\r\n    Node n = q.poll();\r\n    sum += n.val;\r\n    if(n.left != null) q.add(n.left);\r\n    if(n.right != null) q.add(n.right);\r\n}\r\nSystem.out.println(sum);",
    "options": [
      "45",
      "35",
      "40",
      "30"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 40. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 233,
    "question": "What does this function return for root=4, left=2, right=6?\r\nNode findMin(Node root) {\r\n\r\n    if(root == null) return null;\r\n\r\n    if(root.left == null) return root;\r\n\r\n    return findMin(root.left);\r\n\r\n}\r\n\r\n// findMin(root).val = ?",
    "options": [
      "2",
      "null",
      "6",
      "4"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 2. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 234,
    "question": "What is the output?\r\nNode root = new Node(1);\r\n\r\nroot.left = new Node(2);\r\n\r\nroot.right = new Node(3);\r\n\r\nroot.left.left = new Node(4);\r\n\r\nroot.left.right = new Node(5);\r\n\r\nList<Integer> leaves = new ArrayList<>();\r\n\r\nfindLeaves(root, leaves);\r\n\r\nSystem.out.println(leaves);\r\n\r\nvoid findLeaves(Node r, List<Integer> list) {\r\n\r\n    if(r == null) return;\r\n\r\n    if(r.left == null && r.right == null) { list.add(r.val); return; }\r\n\r\n    findLeaves(r.left, list);\r\n\r\n    findLeaves(r.right, list);\r\n\r\n}",
    "options": [
      "[1, 2]",
      "[2, 3]",
      "[3, 4, 5]",
      "[4, 5, 3]"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is [4, 5, 3]. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 235,
    "question": "What is the output after inserting 5, 3, 7, 1, 4 into BST and doing inorder?\r\nNode insert(Node r, int val) {\r\n\r\n    if(r == null) return new Node(val);\r\n\r\n    if(val < r.val) r.left = insert(r.left, val);\r\n\r\n    else if(val > r.val) r.right = insert(r.right, val);\r\n\r\n    return r;\r\n\r\n}\r\n\r\n// inorder traversal output?",
    "options": [
      "7 5 4 3 1",
      "1 4 3 7 5",
      "1 3 4 5 7",
      "5 3 7 1 4"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 1 3 4 5 7. Tags: bst.",
    "topic": "BsT",
    "difficulty": "medium"
  },
  {
    "id": 236,
    "question": "What does this function return for BST {1,2,3,4,5} and k=2?\r\nint count = 0;\r\n\r\nint kthSmallest(Node r, int k) {\r\n\r\n    if(r == null) return -1;\r\n\r\n    int left = kthSmallest(r.left, k);\r\n\r\n    if(left != -1) return left;\r\n\r\n    count++;\r\n\r\n    if(count == k) return r.val;\r\n\r\n    return kthSmallest(r.right, k);\r\n\r\n}",
    "options": [
      "4",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 2. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 237,
    "question": "What does this return for BST with root=8, left=3, right=10 and key=10?\r\nNode deleteNode(Node r, int key) {\r\n    if(r == null) return null;\r\n    if(key < r.val) r.left = deleteNode(r.left, key);\r\n    else if(key > r.val) r.right = deleteNode(r.right, key);\r\n    else {\r\n        if(r.left == null) return r.right;\r\n        if(r.right == null) return r.left;\r\n        Node min = findMin(r.right);\r\n        r.val = min.val;\r\n        r.right = deleteNode(r.right, min.val);\r\n    }\r\n    return r;\r\n}\r\n// After delete, inorder of tree?",
    "options": [
      "[3, 8, 10]",
      "[3, 10]",
      "[8, 10]",
      "[3, 8]"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is [3, 8]. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 238,
    "question": "What does this LCS return for s1=\"ABC\", s2=\"AC\"?\r\nint lcs(String s1, String s2) {\r\n\r\n    int m = s1.length(), n = s2.length();\r\n\r\n    int[][] dp = new int[m+1][n+1];\r\n\r\n    for(int i = 1; i <= m; i++)\r\n\r\n        for(int j = 1; j <= n; j++)\r\n\r\n            if(s1.charAt(i-1) == s2.charAt(j-1))\r\n\r\n                dp[i][j] = dp[i-1][j-1] + 1;\r\n\r\n            else\r\n\r\n                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\r\n\r\n    return dp[m][n];\r\n\r\n}",
    "options": [
      "1",
      "3",
      "0",
      "2"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is 2. Tags: dyanamic pogramming.",
    "topic": "Dyanamic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 239,
    "question": "What does this return for nums={10,9,2,5,3,7}?\r\nint lis(int[] nums) {\r\n\r\n    int n = nums.length;\r\n\r\n    int[] dp = new int[n];\r\n\r\n    Arrays.fill(dp, 1);\r\n\r\n    for(int i = 1; i < n; i++)\r\n\r\n        for(int j = 0; j < i; j++)\r\n\r\n            if(nums[j] < nums[i])\r\n\r\n                dp[i] = Math.max(dp[i], dp[j]+1);\r\n\r\n    int max = 0;\r\n\r\n    for(int x : dp) max = Math.max(max, x);\r\n\r\n    return max;\r\n\r\n}",
    "options": [
      "4",
      "2",
      "5",
      "3"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is 3. Tags: dyanamic pogramming.",
    "topic": "Dyanamic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 240,
    "question": "What does this return for nums={3,4,2,1,2,3,7}, k=2?\r\nint maxSumAfterKOps(int[] nums, int k) {\r\n\r\n    Arrays.sort(nums);\r\n\r\n    for(int i = 0; i < k; i++)\r\n\r\n        if(nums[i] < 0) nums[i] = -nums[i];\r\n\r\n    int sum = 0;\r\n\r\n    for(int n : nums) sum += n;\r\n\r\n    return sum;\r\n\r\n}",
    "options": [
      "26",
      "20",
      "22",
      "24"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 22. Tags: dyanamic pogramming.",
    "topic": "Dyanamic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 241,
    "question": "Kadane’s algorithm handles negative numbers by?",
    "options": [
      "Using recursion",
      "Resetting sum to 0",
      "Sorting array",
      "Binary search"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Resetting sum to 0. Tags: Kadanes.",
    "topic": "kadens",
    "difficulty": "medium"
  },
  {
    "id": 242,
    "question": "Given an array arr = [1, 2, 3, 4], what is the value of the Prefix Sum array at index 2 (0-indexed)?",
    "options": [
      "2",
      "5",
      "6",
      "4"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 6. Tags: Prefix Sum.",
    "topic": "prefix sum",
    "difficulty": "medium"
  },
  {
    "id": 243,
    "question": "In the Rabin-Karp algorithm, if the hash values of the pattern and the current window match, what is the next step?",
    "options": [
      "Move the window by 2 positions.",
      "Declare a match immediately.",
      "Re-hash the entire string with a different prime number.",
      "Perform a character-by-character comparison to handle potential collisions."
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Perform a character-by-character comparison to handle potential collisions.. Tags: Rabin-Karp.",
    "topic": "rabin-karp",
    "difficulty": "medium"
  },
  {
    "id": 244,
    "question": "Which constructor is called when an object is initialized using another existing object of the same class (e.g., Class obj2 = obj1;)?",
    "options": [
      "Copy Constructor",
      "Parameterized Constructor",
      "Destructor",
      "Default Constructor"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Copy Constructor. Tags: Constructor.",
    "topic": "constructor",
    "difficulty": "medium"
  },
  {
    "id": 245,
    "question": "In the KMP algorithm, what does the LPS (Longest Prefix Suffix) array store?",
    "options": [
      "The index of the first character of the pattern.",
      "The length of the longest proper prefix which is also a suffix.",
      "The frequency of each character in the text.",
      "The total number of unique characters in the pattern."
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is The length of the longest proper prefix which is also a suffix.. Tags: KMP.",
    "topic": "kmp",
    "difficulty": "medium"
  },
  {
    "id": 246,
    "question": "In the \"Two Sum\" problem with a sorted array, if arr[left] + arr[right] > target, what is the move?",
    "options": [
      "left++",
      "right--",
      "right++",
      "left--"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is right--. Tags: Two Pointer.",
    "topic": "two pointer",
    "difficulty": "medium"
  },
  {
    "id": 247,
    "question": "Overriding occurs at:",
    "options": [
      "Runtime",
      "Link time",
      "Compile time",
      "Preprocessing"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Runtime. Tags: Destructor.",
    "topic": "destructor",
    "difficulty": "medium"
  },
  {
    "id": 248,
    "question": "What is the main logic of the \"Prime Sieve\" (Sieve of Eratosthenes) implementation?",
    "options": [
      "Checking every number from 2 to  N using a nested loop.",
      "Dividing the number by all integers up to N/2.",
      "Marking multiples of every discovered prime number as non-prime",
      "Using the Fibonacci sequence to find primes."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Marking multiples of every discovered prime number as non-prime. Tags: Prime Seive.",
    "topic": "Prime seieve",
    "difficulty": "medium"
  },
  {
    "id": 249,
    "question": "In the Rabin-Karp algorithm, if a \"Spurious Hit\" occurs, it means:",
    "options": [
      "The prime number used for the modulo was too small.",
      "The pattern was found correctly.",
      "The hash values match, but the actual strings do not.",
      "The rolling hash calculation resulted in a negative value."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is The hash values match, but the actual strings do not.. Tags: Rabin-Karp.",
    "topic": "rabin-karp",
    "difficulty": "medium"
  },
  {
    "id": 250,
    "question": "The \"Z-box\" [L, R] in the Z-algorithm is used to:",
    "options": [
      "Perform bitwise operations on the characters.",
      "Store the frequency of characters in the window.",
      "Represent the rightmost interval where a substring matches a prefix of the string.",
      "Store the final result of the string matching."
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Represent the rightmost interval where a substring matches a prefix of the string.. Tags: Z funtion.",
    "topic": "z function",
    "difficulty": "medium"
  },
  {
    "id": 251,
    "question": "What data structure is used in the sliding window maximum problem to achieve O(n) time?",
    "options": [
      "Deque",
      "Stack",
      "Set",
      "Priority Queue"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Deque. Tags: Window Sliding.",
    "topic": "window sliding",
    "difficulty": "medium"
  },
  {
    "id": 252,
    "question": ". The Sieve of Eratosthenes runs in time complexity:",
    "options": [
      "O(n log n)",
      "O(n log log n)",
      "O(n²)",
      "O(√n)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is O(n log log n). Tags: Prime Seive.",
    "topic": "Prime seieve",
    "difficulty": "medium"
  },
  {
    "id": 253,
    "question": "The KMP algorithm achieves string matching in:",
    "options": [
      "O(n²)",
      "O(n + m)",
      "O(n log n)",
      "O(n * m)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is O(n + m). Tags: KMP.",
    "topic": "kmp",
    "difficulty": "medium"
  },
  {
    "id": 254,
    "question": "Tail recursion is special because:",
    "options": [
      "It uses two stacks",
      "It has no base case",
      "The recursive call is the last operation, allowing optimization",
      "It runs in O(1)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is The recursive call is the last operation, allowing optimization. Tags: Recursion.",
    "topic": "recursion",
    "difficulty": "medium"
  },
  {
    "id": 255,
    "question": "Dynamic binding means:",
    "options": [
      "Binding constructors",
      "Linking at compile time",
      "Static memory allocation",
      "Linking function calls to definitions at runtime"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Linking function calls to definitions at runtime. Tags: Dynamic Binding.",
    "topic": "dynamic binding",
    "difficulty": "medium"
  },
  {
    "id": 256,
    "question": "In \"Count of subarrays with exactly K distinct integers,\" the standard trick is:",
    "options": [
      "Prefix sum with hashing",
      "Binary search on K",
      "Direct sliding window with exact count",
      "atMost(K) – atMost(K-1)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is atMost(K) – atMost(K-1). Tags: Window Sliding.",
    "topic": "window sliding",
    "difficulty": "medium"
  },
  {
    "id": 257,
    "question": "In the KMP failure function (LPS), what is lps[0] always equal to?",
    "options": [
      "-1",
      "1",
      "Length of string",
      "0"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is 0. Tags: KMP.",
    "topic": "kmp",
    "difficulty": "medium"
  },
  {
    "id": 258,
    "question": "In Rabin-Karp, to avoid negative hash values during rolling hash computation, we:",
    "options": [
      "Reverse the string",
      "Use absolute value",
      "Skip negative characters",
      "Add MOD before taking modulo"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Add MOD before taking modulo. Tags: Rabin-Karp.",
    "topic": "rabin-karp",
    "difficulty": "medium"
  },
  {
    "id": 259,
    "question": "Which of the following is TRUE about the Z-function compared to KMP",
    "options": [
      "Z-function only works on binary strings",
      "Both solve the same class of problems but with different auxiliary arrays",
      "Z-function is slower",
      "KMP uses less memory"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Both solve the same class of problems but with different auxiliary arrays. Tags: Z-Function.",
    "topic": "z function",
    "difficulty": "medium"
  },
  {
    "id": 260,
    "question": "Two pointer approach for \"4-Sum\" problem has time complexity:",
    "options": [
      "O(n⁴)",
      "O(n³)",
      "O(n²)",
      "O(n)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is O(n³). Tags: Two Pointer.",
    "topic": "two pointer",
    "difficulty": "medium"
  },
  {
    "id": 261,
    "question": "What is the relationship between the number of nodes at level i and total nodes in a complete binary tree?",
    "options": [
      "Every level has exactly n/height nodes",
      "Level i has exactly i nodes",
      "Last level always fully filled",
      "Level i has at most 2^i nodes; last level may be partially filled"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Level i has at most 2^i nodes; last level may be partially filled. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 262,
    "question": "What is a stack?",
    "options": [
      "Linear data structure following LIFO",
      "Non-linear data structure",
      "Circular data structure",
      "Linear data structure following FIFO"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Linear data structure following LIFO. Tags: stack.",
    "topic": "Stack",
    "difficulty": "medium"
  },
  {
    "id": 263,
    "question": "What is the time complexity of push and pop in a stack?",
    "options": [
      "O(n²)",
      "O(1)",
      "O(log n)",
      "O(n)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is O(1). Tags: stack.",
    "topic": "Stack",
    "difficulty": "medium"
  },
  {
    "id": 264,
    "question": "What is the depth of the root node?",
    "options": [
      "-1",
      "1",
      "0",
      "It depends on tree"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 0. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 265,
    "question": "In preorder traversal, which node is visited first?",
    "options": [
      "Leaf",
      "Right child",
      "Root",
      "Left child"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Root. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 266,
    "question": "In postorder traversal, which node is visited last?",
    "options": [
      "Right child",
      "Root",
      "Left child",
      "Leaf"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Root. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 267,
    "question": "Which traversal visits nodes level by level?",
    "options": [
      "Postorder",
      "Preorder",
      "Level order (BFS)",
      "Inorder"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Level order (BFS). Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 268,
    "question": "What is the inorder traversal output of a BST?",
    "options": [
      "Random order",
      "Level order",
      "Reverse sorted",
      "Sorted ascending order"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Sorted ascending order. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 269,
    "question": "Which Java collection uses hashing internally?",
    "options": [
      "TreeMap",
      "LinkedList",
      "ArrayList",
      "HashMap"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is HashMap. Tags: heap.",
    "topic": "Heap",
    "difficulty": "medium"
  },
  {
    "id": 270,
    "question": "What is a min-heap?",
    "options": [
      "Heap where root is minimum and parent <= children",
      "Balanced BST",
      "Heap where root is maximum",
      "Sorted array"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Heap where root is minimum and parent <= children. Tags: heap.",
    "topic": "Heap",
    "difficulty": "medium"
  },
  {
    "id": 271,
    "question": "What is the result of XOR of a number with itself?",
    "options": [
      "1",
      "-1",
      "0",
      "The number doubled"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 0. Tags: bit-masking.",
    "topic": "Bit-masking",
    "difficulty": "medium"
  },
  {
    "id": 272,
    "question": "Number of edges in tree with n nodes",
    "options": [
      "n²",
      "n-1",
      "n+1",
      "n"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is n-1. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 273,
    "question": "Leaf node has:",
    "options": [
      "1 child",
      "2 child",
      "3 child",
      "0 child"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 2 child. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 274,
    "question": "Memoization is:",
    "options": [
      "Sorting",
      "Random",
      "Bottom-up",
      "Top-down"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Top-down. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 275,
    "question": "Tabulation is:",
    "options": [
      "Bottom-up",
      "Recursive",
      "Random",
      "Top-down"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Bottom-up. Tags: dyanmic pogramming.",
    "topic": "Dyanmic Pogramming",
    "difficulty": "medium"
  },
  {
    "id": 276,
    "question": "GCD using Euclid complexity:",
    "options": [
      "O(1)",
      "O(n²)",
      "O(n)",
      "O(log n)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is O(log n). Tags: gcd.",
    "topic": "GCD",
    "difficulty": "medium"
  },
  {
    "id": 277,
    "question": "Sieve of Eratosthenes is used for:",
    "options": [
      "Prime numbers",
      "Graph",
      "Sorting",
      "Searching"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Prime numbers. Tags: prime seieve.",
    "topic": "Prime seieve",
    "difficulty": "medium"
  },
  {
    "id": 278,
    "question": "Duplicate keys in BST:",
    "options": [
      "Allowed left",
      "Always allowed",
      "Not allowed",
      "Allowed right"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Not allowed. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 279,
    "question": "Predecessor:",
    "options": [
      "leaf",
      "Root",
      "Right subtree max",
      "Left subtree max"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Left subtree max. Tags: bst.",
    "topic": "BST",
    "difficulty": "medium"
  },
  {
    "id": 280,
    "question": "Greedy requires sorting:",
    "options": [
      "Random",
      "Always no",
      "Never",
      "Often"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Often. Tags: greedy.",
    "topic": "Greedy",
    "difficulty": "medium"
  },
  {
    "id": 281,
    "question": "Why does sliding window fail when elements are negative?",
    "options": [
      "Recursion issue",
      "Memory issue",
      "Sorting issue",
      "Window sum not monotonic"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Window sum not monotonic. Tags: Negative Window Limitation.",
    "topic": "Sliding Window",
    "difficulty": "easy"
  },
  {
    "id": 282,
    "question": "Why is two pointer technique efficient for sorted arrays?",
    "options": [
      "Uses hashing",
      "Avoids nested loops",
      "Uses recursion",
      "Sorts data"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Avoids nested loops. Tags: Two Pointer Nested Avoidance.",
    "topic": "Arrays",
    "difficulty": "easy"
  },
  {
    "id": 283,
    "question": "Why does binary search have log n complexity?",
    "options": [
      "Uses recursion",
      "Halves search space",
      "Uses stack",
      "Sorts array"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Halves search space. Tags: Logarithmic Reduction.",
    "topic": "Binary Search",
    "difficulty": "easy"
  },
  {
    "id": 284,
    "question": "What error occurs if mid calculation overflows?",
    "options": [
      "Memory leak",
      "Sorting error",
      "Recursion failure",
      "Wrong index access"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Wrong index access. Tags: Mid Overflow Bug.",
    "topic": "Binary Search",
    "difficulty": "easy"
  },
  {
    "id": 285,
    "question": "Why is tail recursion optimized by compilers?",
    "options": [
      "Reduces stack usage",
      "Sorts faster",
      "Uses heap",
      "Avoids loops"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Reduces stack usage. Tags: Tail Recursion Optimization.",
    "topic": "Recursion",
    "difficulty": "easy"
  },
  {
    "id": 286,
    "question": "Why is backtracking slower than DP?",
    "options": [
      "Sorts data",
      "Explores all possibilities",
      "Uses queue",
      "Uses stack"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Explores all possibilities. Tags: Backtracking Exhaustive Nature.",
    "topic": "Recursion",
    "difficulty": "easy"
  },
  {
    "id": 287,
    "question": "Why does BFS use queue instead of stack?",
    "options": [
      "Avoids recursion",
      "Uses less memory",
      "Maintains level order",
      "Sorts nodes"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Maintains level order. Tags: Queue Level Maintenance.",
    "topic": "Graphs",
    "difficulty": "easy"
  },
  {
    "id": 288,
    "question": "Why does DFS use stack (or recursion)?",
    "options": [
      "Queue behavior",
      "Heap usage",
      "Depth exploration",
      "Sorting"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Depth exploration. Tags: DFS Depth Exploration.",
    "topic": "Graphs",
    "difficulty": "easy"
  },
  {
    "id": 289,
    "question": "Why is balanced BST efficient for search?",
    "options": [
      "Uses recursion",
      "Sorts faster",
      "Height is log n",
      "Uses stack"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Height is log n. Tags: Balanced BST Efficiency.",
    "topic": "Trees",
    "difficulty": "easy"
  },
  {
    "id": 290,
    "question": "Why is complete binary tree used in heaps?",
    "options": [
      "Uses hashing",
      "Maintains structure",
      "Sorts data",
      "Uses less memory"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Maintains structure. Tags: Heap Structure Property.",
    "topic": "Trees",
    "difficulty": "easy"
  },
  {
    "id": 291,
    "question": "Why does hash map degrade in worst case?",
    "options": [
      "Recursion fails",
      "Collisions increase",
      "Sorting fails",
      "Memory overflow"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Collisions increase. Tags: Hash Collision Impact.",
    "topic": "Hashing",
    "difficulty": "easy"
  },
  {
    "id": 292,
    "question": "Why is load factor important in hashing?",
    "options": [
      "Sorts keys",
      "Controls performance",
      "Uses recursion",
      "Avoids loops"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Controls performance. Tags: Load Factor Impact.",
    "topic": "Hashing",
    "difficulty": "easy"
  },
  {
    "id": 293,
    "question": "Why does trie use more space than hash map?",
    "options": [
      "Stores all prefixes",
      "Uses recursion",
      "Sorts data",
      "Uses stack"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Stores all prefixes. Tags: Trie Space Overhead.",
    "topic": "Tries",
    "difficulty": "easy"
  },
  {
    "id": 294,
    "question": "Why is adjacency list preferred over matrix for sparse graphs?",
    "options": [
      "Uses recursion",
      "Faster sorting",
      "Uses stack",
      "Less space"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Less space. Tags: Sparse Graph Representation.",
    "topic": "Graphs",
    "difficulty": "easy"
  },
  {
    "id": 295,
    "question": "Why does Bellman-Ford detect negative cycles?",
    "options": [
      "DFS",
      "Repeated relaxation",
      "Sorting",
      "Greedy"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Repeated relaxation. Tags: Negative Cycle Detection.",
    "topic": "Graphs",
    "difficulty": "easy"
  },
  {
    "id": 296,
    "question": "Why does sliding window require shrinking condition?",
    "options": [
      "Memory",
      "Maintain constraint",
      "Sorting",
      "Recursion"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Maintain constraint. Tags: Window Shrinking Logic.",
    "topic": "Sliding Window",
    "difficulty": "easy"
  },
  {
    "id": 297,
    "question": "How does prefix sum detect subarray sum?",
    "options": [
      "Sorting",
      "DFS",
      "Cumulative addition",
      "Recursion"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Cumulative addition. Tags: Prefix Sum Detection.",
    "topic": "Prefix",
    "difficulty": "easy"
  },
  {
    "id": 298,
    "question": "Why binary search faster than linear?",
    "options": [
      "Halves search",
      "Recursion",
      "Memory",
      "Sorting"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Halves search. Tags: Binary Efficiency.",
    "topic": "Binary Search",
    "difficulty": "easy"
  },
  {
    "id": 299,
    "question": "Why recursion uses extra memory?",
    "options": [
      "Sorting",
      "Queue",
      "Heap",
      "Call stack"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Call stack. Tags: Recursion Memory.",
    "topic": "Recursion",
    "difficulty": "easy"
  },
  {
    "id": 300,
    "question": "Why BFS finds shortest path?",
    "options": [
      "Sorting",
      "Greedy",
      "Level traversal",
      "Stack"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Level traversal. Tags: BFS Shortest Path.",
    "topic": "Graphs",
    "difficulty": "easy"
  }
];
