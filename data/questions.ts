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
    "question": "Which component of the Java platform is responsible for converting bytecode into native machine code at runtime?",
    "options": [
      "JRE",
      "JDK",
      "JVM",
      "javac"
    ],
    "correctAnswer": "C",
    "topic": "Java Platform",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "question": "Which year was Java first released by Sun Microsystems?",
    "options": [
      "1991",
      "1995",
      "1998",
      "2000"
    ],
    "correctAnswer": "B",
    "topic": "Java History",
    "difficulty": "easy"
  },
  {
    "id": 3,
    "question": "Which feature introduced in Java 5 improved performance by allowing multiple primitive values to be stored in a Collection?",
    "options": [
      "Generics",
      "Autoboxing",
      "Enhanced for-loop",
      "Enum types"
    ],
    "correctAnswer": "B",
    "topic": "Java Features",
    "difficulty": "medium"
  },
  {
    "id": 4,
    "question": "What’s the primary role of the JRE?",
    "options": [
      "Compile Java source files",
      "Run Java programs",
      "Debug Java applications",
      "Document Java APIs"
    ],
    "correctAnswer": "B",
    "topic": "Java Platform",
    "difficulty": "easy"
  },
  {
    "id": 5,
    "question": "Which of these is not a feature added in Java 8?",
    "options": [
      "Lambda expressions",
      "Stream API",
      "Modules",
      "Default methods in interfaces"
    ],
    "correctAnswer": "C",
    "topic": "Java Features",
    "difficulty": "medium"
  },
  {
    "id": 6,
    "question": "The “Write Once, Run Anywhere” slogan refers to Java’s use of:",
    "options": [
      "Native compilation",
      "Virtual machine",
      "Platform-specific libraries",
      "Bytecode obfuscation"
    ],
    "correctAnswer": "B",
    "topic": "Java Platform",
    "difficulty": "easy"
  },
  {
    "id": 7,
    "question": "Which part of the JDK includes tools like javac, javadoc, and jar?",
    "options": [
      "JRE",
      "JVM",
      "Development tools",
      "Runtime libraries"
    ],
    "correctAnswer": "C",
    "topic": "Java Platform",
    "difficulty": "easy"
  },
  {
    "id": 8,
    "question": "What’s the signature of the entry-point method in Java?",
    "options": [
      "public static void main()",
      "public void main(String args[])",
      "public static void main(String[] args)",
      "static public void main(String args[])"
    ],
    "correctAnswer": "C",
    "topic": "Java Basics",
    "difficulty": "easy"
  },
  {
    "id": 9,
    "question": "How do you pass three command-line arguments to a Java program?",
    "options": [
      "java MyApp 1 2 3",
      "javac MyApp 1 2 3",
      "java MyApp \"1 2 3\"",
      "run MyApp 1 2 3"
    ],
    "correctAnswer": "A",
    "topic": "Java Basics",
    "difficulty": "easy"
  },
  {
    "id": 10,
    "question": "What happens if you omit String[] args in main?",
    "options": [
      "Program compiles but won't run",
      "Compile-time error",
      "Runtime error",
      "JVM picks default args"
    ],
    "correctAnswer": "B",
    "topic": "Java Basics",
    "difficulty": "medium"
  },
  {
    "id": 11,
    "question": "Which command both compiles and runs a single-file Java program in Java 11+?",
    "options": [
      "java -compile MyApp.java",
      "javac MyApp.java && java MyApp",
      "java MyApp.java",
      "run MyApp.java"
    ],
    "correctAnswer": "C",
    "topic": "Java Basics",
    "difficulty": "medium"
  },
  {
    "id": 12,
    "question": "In public static void main(String... args), args is treated as:",
    "options": [
      "Array of arrays",
      "Varargs of String",
      "Two-dimensional array",
      "Linked list"
    ],
    "correctAnswer": "B",
    "topic": "Java Basics",
    "difficulty": "medium"
  },
  {
    "id": 13,
    "question": "Which of these is a valid Java identifier?",
    "options": [
      "_value",
      "2ndValue",
      "value-2",
      "class"
    ],
    "correctAnswer": "A",
    "topic": "Java Basics",
    "difficulty": "easy"
  },
  {
    "id": 14,
    "question": "What is the default value of a boolean field in a class?",
    "options": [
      "true",
      "false",
      "null",
      "0"
    ],
    "correctAnswer": "B",
    "topic": "Java Basics",
    "difficulty": "easy"
  },
  {
    "id": 15,
    "question": "Which operator has the highest precedence?",
    "options": [
      "*",
      "+",
      "==",
      "&&"
    ],
    "correctAnswer": "A",
    "topic": "Java Operators",
    "difficulty": "easy"
  },
  {
    "id": 16,
    "question": "What's the size of an int in Java?",
    "options": [
      "16 bits",
      "32 bits",
      "64 bits",
      "Platform-dependent"
    ],
    "correctAnswer": "B",
    "topic": "Java Data Types",
    "difficulty": "easy"
  },
  {
    "id": 17,
    "question": "Which keyword reserves space but doesn't initialize a variable?",
    "options": [
      "var",
      "new",
      "None (all locals must be initialized before use)",
      "reserve"
    ],
    "correctAnswer": "C",
    "topic": "Java Basics",
    "difficulty": "medium"
  },
  {
    "id": 18,
    "question": "What's the result of 5 + 2 * 3?",
    "options": [
      "21",
      "11",
      "16",
      "35"
    ],
    "correctAnswer": "B",
    "topic": "Java Operators",
    "difficulty": "easy"
  },
  {
    "id": 19,
    "question": "What's the default value of a local object reference?",
    "options": [
      "null",
      "New instance of the type",
      "Zeroed memory",
      "Compiler error if uninitialized"
    ],
    "correctAnswer": "D",
    "topic": "Java Variables",
    "difficulty": "medium"
  },
  {
    "id": 20,
    "question": "Which literal denotes a long value?",
    "options": [
      "1234",
      "1234L",
      "1234.0",
      "(long)1234"
    ],
    "correctAnswer": "B",
    "topic": "Java Data Types",
    "difficulty": "easy"
  },
  {
    "id": 21,
    "question": "What's the output? int x = 5; if (x > 5) System.out.println(\"A\"); else if (x == 5) System.out.println(\"B\"); else System.out.println(\"C\");",
    "options": [
      "A",
      "B",
      "C",
      "Compilation error"
    ],
    "correctAnswer": "B",
    "topic": "Java Control Flow",
    "difficulty": "easy"
  },
  {
    "id": 22,
    "question": "Which switch types are allowed in Java 7+?",
    "options": [
      "int, enum, String",
      "int, double, String",
      "char, boolean, String",
      "long, float, String"
    ],
    "correctAnswer": "A",
    "topic": "Java Control Flow",
    "difficulty": "medium"
  },
  {
    "id": 23,
    "question": "How many times will this loop print? for(int i=0; i<3; i++) { System.out.println(i); }",
    "options": [
      "2",
      "3",
      "Infinite",
      "1"
    ],
    "correctAnswer": "B",
    "topic": "Java Loops",
    "difficulty": "easy"
  },
  {
    "id": 24,
    "question": "What does continue do inside a loop?",
    "options": [
      "Exits loop",
      "Jumps to next iteration",
      "Skips loop entirely",
      "Jumps out two levels"
    ],
    "correctAnswer": "B",
    "topic": "Java Control Flow",
    "difficulty": "easy"
  },
  {
    "id": 25,
    "question": "Which keyword can terminate a method immediately?",
    "options": [
      "break",
      "exit",
      "return",
      "stop"
    ],
    "correctAnswer": "C",
    "topic": "Java Methods",
    "difficulty": "easy"
  },
  {
    "id": 26,
    "question": "What's the result of falling off the end of a non-void method?",
    "options": [
      "Returns default value",
      "Compile-time error",
      "Runtime exception",
      "Returns null"
    ],
    "correctAnswer": "B",
    "topic": "Java Methods",
    "difficulty": "medium"
  },
  {
    "id": 27,
    "question": "How many branches in this if chain can execute? if(cond1) {...} if(cond2) {...}",
    "options": [
      "Only one",
      "Zero or more",
      "Exactly two",
      "Always one"
    ],
    "correctAnswer": "B",
    "topic": "Java Control Flow",
    "difficulty": "medium"
  },
  {
    "id": 28,
    "question": "Declare a 2×3 int array named m",
    "options": [
      "int[][] m = new int[2][3];",
      "int m[][] = new int(2,3);",
      "int[][] m = new int[2,3];",
      "int m = new int[2][3][];"
    ],
    "correctAnswer": "A",
    "topic": "Java Arrays",
    "difficulty": "easy"
  },
  {
    "id": 29,
    "question": "Which index is out of bounds? int[] a = new int[5]; a[5] = 10;",
    "options": [
      "0",
      "4",
      "5",
      "None"
    ],
    "correctAnswer": "C",
    "topic": "Java Arrays",
    "difficulty": "easy"
  },
  {
    "id": 30,
    "question": "Jagged array in Java is:",
    "options": [
      "Array of different types",
      "Array of arrays with varying lengths",
      "3D array",
      "Irregular matrix"
    ],
    "correctAnswer": "B",
    "topic": "Java Arrays",
    "difficulty": "medium"
  },
  {
    "id": 31,
    "question": "What's the length of new int[2][3]?",
    "options": [
      "2",
      "3",
      "6",
      "0"
    ],
    "correctAnswer": "A",
    "topic": "Java Arrays",
    "difficulty": "easy"
  },
  {
    "id": 32,
    "question": "How to iterate over a 1D array via enhanced for?",
    "options": [
      "for(int i : arr)",
      "for(int i = 0; i < arr.length; i++)",
      "for(arr : int i)",
      "foreach(int i in arr)"
    ],
    "correctAnswer": "A",
    "topic": "Java Arrays",
    "difficulty": "easy"
  },
  {
    "id": 33,
    "question": "What's the default value in an int[]?",
    "options": [
      "null",
      "0",
      "-1",
      "Compiler error"
    ],
    "correctAnswer": "B",
    "topic": "Java Arrays",
    "difficulty": "easy"
  },
  {
    "id": 34,
    "question": "Which prints diagonal of 2D array? int[][] m = {{1,2},{3,4}}; for(int i=0;i<m.length;i++) System.out.print(m[i][i]);",
    "options": [
      "1 4",
      "1 2",
      "3 4",
      "2 3"
    ],
    "correctAnswer": "A",
    "topic": "Java Arrays",
    "difficulty": "medium"
  },
  {
    "id": 35,
    "question": "Which class would you use to split a string into tokens based on delimiters?",
    "options": [
      "String",
      "StringBuilder",
      "StringTokenizer",
      "Scanner"
    ],
    "correctAnswer": "C",
    "topic": "Java Strings",
    "difficulty": "easy"
  },
  {
    "id": 36,
    "question": "What's the output? StringBuilder sb = new StringBuilder(\"Hello\"); sb.append(\" World\"); System.out.println(sb);",
    "options": [
      "Hello",
      "World",
      "Hello World",
      "Compilation error"
    ],
    "correctAnswer": "C",
    "topic": "Java Strings",
    "difficulty": "easy"
  },
  {
    "id": 37,
    "question": "Which is not true about String?",
    "options": [
      "Immutable",
      "Can use + to concatenate",
      "Thread-safe",
      "Implements CharSequence"
    ],
    "correctAnswer": "C",
    "topic": "Java Strings",
    "difficulty": "medium"
  },
  {
    "id": 38,
    "question": "What does new String(\"abc\") == \"abc\" evaluate to?",
    "options": [
      "true",
      "false",
      "Compile-time error",
      "Runtime exception"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "medium"
  },
  {
    "id": 39,
    "question": "Which method of String tests content equality?",
    "options": [
      "==",
      "equals()",
      "compareTo()",
      "contentEquals()"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "easy"
  },
  {
    "id": 40,
    "question": "How do you reverse a string using StringBuilder?",
    "options": [
      "sb.reverse()",
      "sb.invert()",
      "StringUtils.reverse(sb)",
      "new StringBuilder(sb).flip()"
    ],
    "correctAnswer": "A",
    "topic": "Java Strings",
    "difficulty": "medium"
  },
  {
    "id": 41,
    "question": "Which wrapper class represents a double?",
    "options": [
      "Double",
      "double",
      "Float",
      "BigDecimal"
    ],
    "correctAnswer": "A",
    "topic": "Java Wrapper Classes",
    "difficulty": "easy"
  },
  {
    "id": 42,
    "question": "What is the default constructor?",
    "options": [
      "Provided only if no other constructors exist",
      "Always provided",
      "Only for abstract classes",
      "Only for classes without fields"
    ],
    "correctAnswer": "A",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 43,
    "question": "Which throws NumberFormatException? Integer i = Integer.valueOf(\"abc\");",
    "options": [
      "true",
      "false"
    ],
    "correctAnswer": "A",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 44,
    "question": "Copy constructor purpose is to:",
    "options": [
      "Prevent copying",
      "Duplicate object state",
      "Initialize defaults",
      "Enforce immutability"
    ],
    "correctAnswer": "B",
    "topic": "Java Classes",
    "difficulty": "medium"
  },
  {
    "id": 45,
    "question": "Autoboxing converts:",
    "options": [
      "int → Integer",
      "Integer → int",
      "int[] → Integer[]",
      "long → Long[]"
    ],
    "correctAnswer": "A",
    "topic": "Java Wrapper Classes",
    "difficulty": "easy"
  },
  {
    "id": 46,
    "question": "Which is true about wrapper classes?",
    "options": [
      "Mutable",
      "Immutable",
      "Neither",
      "Both"
    ],
    "correctAnswer": "B",
    "topic": "Java Wrapper Classes",
    "difficulty": "easy"
  },
  {
    "id": 47,
    "question": "Which keyword disambiguates a field from a parameter?",
    "options": [
      "self",
      "this",
      "super",
      "current"
    ],
    "correctAnswer": "B",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 48,
    "question": "Can you overload main?",
    "options": [
      "Yes",
      "No"
    ],
    "correctAnswer": "A",
    "topic": "Java Methods",
    "difficulty": "medium"
  },
  {
    "id": 49,
    "question": "Which is a static member?",
    "options": [
      "Instance method",
      "Field declared with static",
      "Constructor",
      "Final method"
    ],
    "correctAnswer": "B",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 50,
    "question": "What's method overloading?",
    "options": [
      "Same name, different signature",
      "Same signature, different return",
      "Duplicate method",
      "Runtime dispatch"
    ],
    "correctAnswer": "A",
    "topic": "Java Methods",
    "difficulty": "easy"
  },
  // ...existing code with questions 1-50...

  {
    "id": 51,
    "question": "Can a static method use this?",
    "options": [
      "Yes",
      "No"
    ],
    "correctAnswer": "B",
    "topic": "Java Static Members",
    "difficulty": "easy"
  },
  {
    "id": 52,
    "question": "Which allows reuse of parent behavior?",
    "options": [
      "this",
      "super",
      "base",
      "parent"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "easy"
  },
  {
    "id": 53,
    "question": "What's true about method overriding?",
    "options": [
      "Same signature, same return type",
      "Different signature",
      "Private methods",
      "Static methods"
    ],
    "correctAnswer": "A",
    "topic": "Java Inheritance",
    "difficulty": "medium"
  },
  {
    "id": 54,
    "question": "Can you extend multiple classes?",
    "options": [
      "Yes",
      "No"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "easy"
  },
  {
    "id": 55,
    "question": "Which call invokes parent constructor? class B extends A { B() { super(); } }",
    "options": [
      "this()",
      "super()",
      "parent()",
      "base()"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "easy"
  },
  {
    "id": 56,
    "question": "Overriding a final method results in:",
    "options": [
      "Compile error",
      "Runtime error",
      "Silent ignore",
      "New method"
    ],
    "correctAnswer": "A",
    "topic": "Java Inheritance",
    "difficulty": "medium"
  },
  {
    "id": 57,
    "question": "Which binding occurs at runtime?",
    "options": [
      "Static binding",
      "Dynamic binding",
      "Early binding",
      "Link-time binding"
    ],
    "correctAnswer": "B",
    "topic": "Java Polymorphism",
    "difficulty": "medium"
  },
  {
    "id": 58,
    "question": "Declaring class final prevents:",
    "options": [
      "Instantiation",
      "Extension",
      "Method overriding",
      "Field access"
    ],
    "correctAnswer": "B",
    "topic": "Java Classes",
    "difficulty": "medium"
  },
  {
    "id": 59,
    "question": "Which call uses polymorphism? A obj = new B(); obj.method();",
    "options": [
      "No",
      "Yes"
    ],
    "correctAnswer": "B",
    "topic": "Java Polymorphism",
    "difficulty": "easy"
  },
  {
    "id": 60,
    "question": "Can you declare a final variable without initialization?",
    "options": [
      "Yes, in constructor",
      "No"
    ],
    "correctAnswer": "A",
    "topic": "Java Variables",
    "difficulty": "medium"
  },
  {
    "id": 61,
    "question": "Abstract class may contain:",
    "options": [
      "Only abstract methods",
      "Both abstract and concrete methods",
      "No methods",
      "Only static methods"
    ],
    "correctAnswer": "B",
    "topic": "Java Abstract Classes",
    "difficulty": "easy"
  },
  {
    "id": 62,
    "question": "Can you instantiate an abstract class?",
    "options": [
      "Yes",
      "No"
    ],
    "correctAnswer": "B",
    "topic": "Java Abstract Classes",
    "difficulty": "easy"
  },
  {
    "id": 63,
    "question": "Abstract method signature must end with:",
    "options": [
      "{}",
      ";",
      "()",
      "throw"
    ],
    "correctAnswer": "B",
    "topic": "Java Abstract Classes",
    "difficulty": "medium"
  },
  {
    "id": 64,
    "question": "Subclass must override all abstract methods unless:",
    "options": [
      "It's final",
      "It's abstract",
      "It's static",
      "It's private"
    ],
    "correctAnswer": "B",
    "topic": "Java Abstract Classes",
    "difficulty": "medium"
  },
  {
    "id": 65,
    "question": "Default access in a package is:",
    "options": [
      "Public",
      "Protected",
      "Package-private",
      "Private"
    ],
    "correctAnswer": "C",
    "topic": "Java Packages",
    "difficulty": "easy"
  },
  {
    "id": 66,
    "question": "Interfaces may contain:",
    "options": [
      "Instance fields",
      "Default methods",
      "Constructors",
      "Static initializers"
    ],
    "correctAnswer": "B",
    "topic": "Java Interfaces",
    "difficulty": "medium"
  },
  {
    "id": 67,
    "question": "Can an interface extend multiple interfaces?",
    "options": [
      "Yes",
      "No"
    ],
    "correctAnswer": "A",
    "topic": "Java Interfaces",
    "difficulty": "easy"
  },
  {
    "id": 68,
    "question": "Which keyword implements an interface?",
    "options": [
      "extends",
      "implements",
      "uses",
      "imports"
    ],
    "correctAnswer": "B",
    "topic": "Java Interfaces",
    "difficulty": "easy"
  },
  {
    "id": 69,
    "question": "Which is checked exception?",
    "options": [
      "NullPointerException",
      "IOException",
      "ArithmeticException",
      "ArrayIndexOutOfBoundsException"
    ],
    "correctAnswer": "B",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 70,
    "question": "What must you do with a checked exception?",
    "options": [
      "Catch or declare",
      "Ignore",
      "Only catch",
      "Only declare"
    ],
    "correctAnswer": "A",
    "topic": "Java Exceptions",
    "difficulty": "easy"
  },
  {
    "id": 71,
    "question": "finally block executes if:",
    "options": [
      "Exception thrown",
      "No exception",
      "Both",
      "Only on return"
    ],
    "correctAnswer": "C",
    "topic": "Java Exceptions",
    "difficulty": "easy"
  },
  {
    "id": 72,
    "question": "Throwing custom exception uses:",
    "options": [
      "throw new MyEx();",
      "throws MyEx;",
      "try MyEx;",
      "catch MyEx;"
    ],
    "correctAnswer": "A",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 73,
    "question": "Uncaught runtime exception leads to:",
    "options": [
      "Compile error",
      "Default handler prints stack trace",
      "Silent ignore",
      "JVM crash"
    ],
    "correctAnswer": "B",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 74,
    "question": "Which enum method returns names?",
    "options": [
      "name()",
      "toString()",
      "values()",
      "ordinal()"
    ],
    "correctAnswer": "A",
    "topic": "Java Utilities",
    "difficulty": "easy"
  },
  {
    "id": 75,
    "question": "Annotations start with:",
    "options": [
      "#",
      "@",
      "!",
      "&"
    ],
    "correctAnswer": "B",
    "topic": "Java Annotations",
    "difficulty": "easy"
  },
  {
    "id": 76,
    "question": "Which API handles dates in Java 8+?",
    "options": [
      "java.util.Date",
      "java.time",
      "java.sql.Date",
      "java.text.DateFormat"
    ],
    "correctAnswer": "B",
    "topic": "Java Date API",
    "difficulty": "easy"
  },
  {
    "id": 77,
    "question": "Regex pattern compilation class?",
    "options": [
      "Pattern",
      "Matcher",
      "RegEx",
      "Scanner"
    ],
    "correctAnswer": "A",
    "topic": "Java Regular Expressions",
    "difficulty": "medium"
  },
  {
    "id": 78,
    "question": "Random number generator class?",
    "options": [
      "Math.random()",
      "java.util.Random",
      "ThreadLocalRandom",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Java Utilities",
    "difficulty": "medium"
  },
  {
    "id": 79,
    "question": "To read bytes from a file use:",
    "options": [
      "FileInputStream",
      "BufferedReader",
      "Scanner",
      "FileReader"
    ],
    "correctAnswer": "A",
    "topic": "Java IO",
    "difficulty": "easy"
  },
  {
    "id": 80,
    "question": "Which writes objects to stream?",
    "options": [
      "ObjectInputStream",
      "ObjectOutputStream",
      "DataOutputStream",
      "FileWriter"
    ],
    "correctAnswer": "B",
    "topic": "Java Serialization",
    "difficulty": "medium"
  },
  {
    "id": 81,
    "question": "Closing streams best practice is using:",
    "options": [
      "try-finally",
      "try-with-resources",
      "finally-only",
      "Explicit close() only"
    ],
    "correctAnswer": "B",
    "topic": "Java IO",
    "difficulty": "medium"
  },
  {
    "id": 82,
    "question": "Serializable marker interface has:",
    "options": [
      "Methods",
      "No methods",
      "One method",
      "Two methods"
    ],
    "correctAnswer": "B",
    "topic": "Java Serialization",
    "difficulty": "easy"
  },
  {
    "id": 83,
    "question": "transient keyword prevents:",
    "options": [
      "Method execution",
      "Field serialization",
      "Class loading",
      "Stream closing"
    ],
    "correctAnswer": "B",
    "topic": "Java Serialization",
    "difficulty": "medium"
  },
  {
    "id": 84,
    "question": "To check file existence use: File f = new File(\"test.txt\"); f.exists();",
    "options": [
      "true",
      "false"
    ],
    "correctAnswer": "A",
    "topic": "Java IO",
    "difficulty": "easy"
  },
  {
    "id": 85,
    "question": "Appending to a file requires:",
    "options": [
      "new FileOutputStream(file, true)",
      "new FileWriter(file)",
      "new PrintStream(file)",
      "new BufferedOutputStream(file)"
    ],
    "correctAnswer": "A",
    "topic": "Java IO",
    "difficulty": "medium"
  },
  {
    "id": 86,
    "question": "Which reads text lines?",
    "options": [
      "FileInputStream",
      "BufferedReader",
      "DataInputStream",
      "ObjectInputStream"
    ],
    "correctAnswer": "B",
    "topic": "Java IO",
    "difficulty": "easy"
  },
  {
    "id": 87,
    "question": "Serialization UID is:",
    "options": [
      "Optional",
      "Mandatory",
      "Compile error without",
      "Runtime error without"
    ],
    "correctAnswer": "A",
    "topic": "Java Serialization",
    "difficulty": "medium"
  },
  {
    "id": 88,
    "question": "Explain how the JVM class loader architecture works.",
    "options": [
      "Bootstrap, Extension, Application",
      "Preloader, Verifier, Executor",
      "Loader, Linker, Initializer",
      "Compiler, Interpreter, JIT"
    ],
    "correctAnswer": "A",
    "topic": "JVM Architecture",
    "difficulty": "hard"
  },
  {
    "id": 89,
    "question": "Given this code, what's printed? class A { static { System.out.print(\"A\"); } } class B extends A { static { System.out.print(\"B\"); } } public class Test { public static void main(String[] args) { new B(); } }",
    "options": [
      "AB",
      "BA",
      "A",
      "B"
    ],
    "correctAnswer": "A",
    "topic": "Java Classes",
    "difficulty": "hard"
  },
  {
    "id": 90,
    "question": "What optimizations does HotSpot perform?",
    "options": [
      "Inlining, escape analysis, JIT compilation",
      "Bytecode weaving",
      "AOT only",
      "None"
    ],
    "correctAnswer": "A",
    "topic": "JVM",
    "difficulty": "hard"
  },
  {
    "id": 91,
    "question": "Concurrency: What's the effect of volatile?",
    "options": [
      "Atomicity",
      "Visibility",
      "Ordering and atomicity",
      "None"
    ],
    "correctAnswer": "B",
    "topic": "Java Concurrency",
    "difficulty": "hard"
  },
  {
    "id": 92,
    "question": "Which collection is thread-safe by default?",
    "options": [
      "HashMap",
      "ConcurrentHashMap",
      "ArrayList",
      "HashSet"
    ],
    "correctAnswer": "B",
    "topic": "Java Collections",
    "difficulty": "hard"
  },
  {
    "id": 93,
    "question": "Explain diamond problem in Java and how interfaces solve it.",
    "options": [
      "Impossible, interfaces allow default methods resolution by class",
      "Occurs with classes only",
      "Causes runtime error",
      "Only in C++"
    ],
    "correctAnswer": "A",
    "topic": "Java Interfaces",
    "difficulty": "hard"
  },
  {
    "id": 94,
    "question": "What's the difference between Checked vs Unchecked exceptions?",
    "options": [
      "Compile-time vs runtime checking",
      "Both same",
      "Only custom exceptions",
      "Only system exceptions"
    ],
    "correctAnswer": "A",
    "topic": "Java Exceptions",
    "difficulty": "hard"
  },
  {
    "id": 95,
    "question": "ByteBuffer vs Stream I/O—advantages?",
    "options": [
      "Non-blocking, channels",
      "Same",
      "Stream is faster",
      "ByteBuffer deprecated"
    ],
    "correctAnswer": "A",
    "topic": "Java IO",
    "difficulty": "hard"
  },
  {
    "id": 96,
    "question": "Generics: Type erasure implications?",
    "options": [
      "No runtime type info",
      "Invariant only",
      "Both",
      "Covariant"
    ],
    "correctAnswer": "A",
    "topic": "Java Generics",
    "difficulty": "hard"
  },
  {
    "id": 97,
    "question": "What's CompletableFuture used for?",
    "options": [
      "Synchronous tasks",
      "Asynchronous, non-blocking computations",
      "GUI framework",
      "File I/O only"
    ],
    "correctAnswer": "B",
    "topic": "Java Concurrency",
    "difficulty": "hard"
  },
  {
    "id": 98,
    "question": "Describe difference between StringBuffer and StringBuilder.",
    "options": [
      "Thread-safe vs not",
      "Both thread-safe",
      "Only methods differ",
      "No difference"
    ],
    "correctAnswer": "A",
    "topic": "Java Strings",
    "difficulty": "hard"
  },
  {
    "id": 99,
    "question": "Explain how HashMap handles collisions.",
    "options": [
      "Chaining with linked lists/balanced trees",
      "Open addressing",
      "Linear probing only",
      "No collision handling"
    ],
    "correctAnswer": "A",
    "topic": "Java Collections",
    "difficulty": "hard"
  },
  {
    "id": 100,
    "question": "What does the transient keyword do during serialization?",
    "options": [
      "Excludes field from serialization",
      "Marks method",
      "Pauses thread",
      "Nothing"
    ],
    "correctAnswer": "A",
    "topic": "Java Serialization",
    "difficulty": "hard"
  },
  {
    "id": 101,
    "question": "Which method of String returns a new String object representing the concatenation of this string and the argument?",
    "options": [
      "concat()",
      "append()",
      "plus()",
      "join()"
    ],
    "correctAnswer": "A",
    "topic": "Java Strings",
    "difficulty": "easy"
  },
  {
    "id": 102,
    "question": "What's the output? String s = \"abc\"; s.toUpperCase(); System.out.println(s);",
    "options": [
      "ABC",
      "abc",
      "Compilation error",
      "Runtime exception"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "easy"
  },
  {
    "id": 103,
    "question": "Which class is unsynchronized and therefore faster when thread safety is not needed?",
    "options": [
      "StringBuffer",
      "StringBuilder",
      "String",
      "StringTokenizer"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "medium"
  },
  {
    "id": 104,
    "question": "What does StringTokenizer st = new StringTokenizer(\"a,b,c\", \",\"); produce?",
    "options": [
      "Tokens a,b,c",
      "Tokens a b c",
      "Tokens , ,",
      "Single token a,b,c"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "medium"
  },
  {
    "id": 105,
    "question": "Which method of String checks if it starts with the specified prefix?",
    "options": [
      "isStart()",
      "startsWith()",
      "beginWith()",
      "prefixOf()"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "easy"
  },
  {
    "id": 106,
    "question": "What's the time complexity of substring() in Java 7+?",
    "options": [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n²)"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "hard"
  },
  {
    "id": 107,
    "question": "Which of these operations does not modify the existing object but returns a new one?",
    "options": [
      "StringBuilder.append()",
      "StringBuffer.reverse()",
      "String.toLowerCase()",
      "StringBuilder.insert()"
    ],
    "correctAnswer": "C",
    "topic": "Java Strings",
    "difficulty": "hard"
  },
  {
    "id": 108,
    "question": "Which constructor is provided by default if no constructors are defined?",
    "options": [
      "Parameterized constructor",
      "Copy constructor",
      "No-arg (default) constructor",
      "Private constructor"
    ],
    "correctAnswer": "C",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 109,
    "question": "Given Integer i = new Integer(5); Integer j = new Integer(5);, what does i == j evaluate to?",
    "options": [
      "true",
      "false",
      "Compile-time error",
      "Runtime exception"
    ],
    "correctAnswer": "B",
    "topic": "Java Wrapper Classes",
    "difficulty": "easy"
  },
  {
    "id": 110,
    "question": "Which of these creates an immutable object?",
    "options": [
      "StringBuilder sb = new StringBuilder(\"x\");",
      "String s = new String(\"x\");",
      "StringBuffer sbf = new StringBuffer(\"x\");",
      "All of the above"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "medium"
  },
  {
    "id": 111,
    "question": "What's the result of Double.parseDouble(\"NaN\")?",
    "options": [
      "0.0",
      "NaN",
      "Throws NumberFormatException",
      "Infinity"
    ],
    "correctAnswer": "B",
    "topic": "Java Wrapper Classes",
    "difficulty": "medium"
  },
  {
    "id": 112,
    "question": "Which constructor signature is not legal?",
    "options": [
      "public MyClass()",
      "MyClass(int x)",
      "private MyClass(MyClass other)",
      "void MyClass()"
    ],
    "correctAnswer": "D",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 113,
    "question": "What does new Integer(128) == new Integer(128) return?",
    "options": [
      "true",
      "false",
      "Compiler error",
      "Depends on JVM"
    ],
    "correctAnswer": "B",
    "topic": "Java Wrapper Classes",
    "difficulty": "hard"
  },
  {
    "id": 114,
    "question": "Which wrapper class caches values in the range -128 to 127?",
    "options": [
      "Long",
      "Integer",
      "Short",
      "Byte"
    ],
    "correctAnswer": "B",
    "topic": "Java Wrapper Classes",
    "difficulty": "hard"
  },
  {
    "id": 115,
    "question": "Which keyword refers to the current class instance?",
    "options": [
      "static",
      "super",
      "this",
      "self"
    ],
    "correctAnswer": "C",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 116,
    "question": "What's printed? class A { static int x = 1; int y = 2; } System.out.println(A.x);",
    "options": [
      "1",
      "2",
      "Compilation error",
      "Runtime exception"
    ],
    "correctAnswer": "A",
    "topic": "Java Static Members",
    "difficulty": "easy"
  },
  {
    "id": 117,
    "question": "Which is valid method overloading?",
    "options": [
      "void m(int a) and int m(int a)",
      "void m(int a) and void m(int b, int c)",
      "void m(int a) and void m(Integer a)",
      "Both B and C"
    ],
    "correctAnswer": "D",
    "topic": "Java Methods",
    "difficulty": "medium"
  },
  {
    "id": 118,
    "question": "Which cannot be overloaded?",
    "options": [
      "Methods",
      "Constructors",
      "static initializer blocks",
      "main method"
    ],
    "correctAnswer": "C",
    "topic": "Java Methods",
    "difficulty": "medium"
  },
  {
    "id": 119,
    "question": "What does this() call invoke?",
    "options": [
      "Parent class constructor",
      "Overloaded constructor in same class",
      "Current method",
      "Default constructor of Object"
    ],
    "correctAnswer": "B",
    "topic": "Java Classes",
    "difficulty": "medium"
  },
  {
    "id": 120,
    "question": "Can you overload on return type alone?",
    "options": [
      "Yes",
      "No",
      "Only for constructors",
      "Only for main"
    ],
    "correctAnswer": "B",
    "topic": "Java Methods",
    "difficulty": "easy"
  },
  {
    "id": 121,
    "question": "Which is not a valid use of super?",
    "options": [
      "super() in constructor",
      "super.field in method",
      "super() in instance initializer",
      "super.method() in overriding method"
    ],
    "correctAnswer": "C",
    "topic": "Java Inheritance",
    "difficulty": "hard"
  },
  {
    "id": 122,
    "question": "What's the effect of declaring a method final?",
    "options": [
      "Cannot be overloaded",
      "Cannot be overridden",
      "Cannot be called",
      "Cannot use this inside"
    ],
    "correctAnswer": "B",
    "topic": "Java Methods",
    "difficulty": "easy"
  },
  {
    "id": 123,
    "question": "If class B extends A, which call invokes A's constructor?",
    "options": [
      "this()",
      "super()",
      "parent()",
      "Implicit call to Object()"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "easy"
  },
  {
    "id": 124,
    "question": "What's printed? class A { void m() { System.out.print(\"A\"); } } class B extends A { void m() { System.out.print(\"B\"); } } new B().m();",
    "options": [
      "A",
      "B",
      "Compilation error",
      "Runtime error"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "easy"
  },
  {
    "id": 125,
    "question": "Which scenario is not method overriding?",
    "options": [
      "Same name, same signature in subclass",
      "Covariant return type",
      "Different access modifier in subclass",
      "Same name, different parameters"
    ],
    "correctAnswer": "D",
    "topic": "Java Inheritance",
    "difficulty": "medium"
  },
  {
    "id": 126,
    "question": "Can a subclass constructor invoke a different superclass constructor with parameters?",
    "options": [
      "Yes, via this()",
      "Yes, via super(args)",
      "No",
      "Only in interfaces"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "medium"
  },
  {
    "id": 127,
    "question": "What's the default superclass of every Java class?",
    "options": [
      "java.lang.Object",
      "java.util.Object",
      "java.lang.Class",
      "None"
    ],
    "correctAnswer": "A",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 128,
    "question": "Which gives a compile error? class A { private void m() {} } class B extends A { void m() {} }",
    "options": [
      "No error",
      "Compile-time error",
      "Runtime exception",
      "Linkage error"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "hard"
  },
  {
    "id": 129,
    "question": "How many times is the superclass constructor called in multi-level inheritance?",
    "options": [
      "Once per level",
      "Only once at top",
      "Depends on super() calls",
      "Never automatically"
    ],
    "correctAnswer": "A",
    "topic": "Java Inheritance",
    "difficulty": "medium"
  },
  {
    "id": 130,
    "question": "What type of polymorphism is method overloading?",
    "options": [
      "Compile-time (static)",
      "Runtime (dynamic)",
      "Hybrid",
      "No polymorphism"
    ],
    "correctAnswer": "A",
    "topic": "Java Polymorphism",
    "difficulty": "easy"
  },
  {
    "id": 131,
    "question": "What type of polymorphism is method overriding?",
    "options": [
      "Compile-time",
      "Runtime",
      "Neither",
      "Both"
    ],
    "correctAnswer": "B",
    "topic": "Java Polymorphism",
    "difficulty": "easy"
  },
  {
    "id": 132,
    "question": "Which declaration prevents a class from being subclassed?",
    "options": [
      "abstract class",
      "final class",
      "static class",
      "sealed class"
    ],
    "correctAnswer": "B",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 133,
    "question": "Which method call is resolved at runtime? A a = new B(); a.m();",
    "options": [
      "A.m() always",
      "B.m() if overridden",
      "Compile-time error",
      "Depends on final"
    ],
    "correctAnswer": "B",
    "topic": "Java Polymorphism",
    "difficulty": "medium"
  },
  {
    "id": 134,
    "question": "Can a final method be overridden?",
    "options": [
      "Yes",
      "No",
      "Only in subclasses",
      "Only if static"
    ],
    "correctAnswer": "B",
    "topic": "Java Methods",
    "difficulty": "easy"
  },
  {
    "id": 135,
    "question": "Which is not true of polymorphism in Java?",
    "options": [
      "A reference variable can refer to object of any subclass",
      "Overloaded methods exhibit polymorphism",
      "Final methods support polymorphism",
      "Interfaces enable polymorphism"
    ],
    "correctAnswer": "C",
    "topic": "Java Polymorphism",
    "difficulty": "hard"
  },
  {
    "id": 136,
    "question": "What happens if you declare a class final and attempt to extend it?",
    "options": [
      "Compile-time error",
      "Runtime exception",
      "It works if in same package",
      "It works if subclass is final too"
    ],
    "correctAnswer": "A",
    "topic": "Java Classes",
    "difficulty": "medium"
  },
  {
    "id": 137,
    "question": "Which statement is true?",
    "options": [
      "Abstract class cannot have concrete methods",
      "Abstract class must have at least one abstract method",
      "Abstract class can be instantiated",
      "Abstract class may have constructors"
    ],
    "correctAnswer": "D",
    "topic": "Java Abstract Classes",
    "difficulty": "easy"
  },
  {
    "id": 138,
    "question": "Which is legal?",
    "options": [
      "abstract class A { abstract void m() {} }",
      "abstract class A { abstract void m(); }",
      "class A { abstract void m(); }",
      "interface A { void m(); }"
    ],
    "correctAnswer": "B",
    "topic": "Java Abstract Classes",
    "difficulty": "medium"
  },
  {
    "id": 139,
    "question": "Can an abstract class implement an interface without implementing its methods?",
    "options": [
      "Yes",
      "No",
      "Only if marked final",
      "Only if in same package"
    ],
    "correctAnswer": "A",
    "topic": "Java Abstract Classes",
    "difficulty": "medium"
  },
  {
    "id": 140,
    "question": "What must a concrete subclass of an abstract class do?",
    "options": [
      "Override all abstract methods",
      "Declare itself abstract",
      "Provide no constructors",
      "Nothing"
    ],
    "correctAnswer": "A",
    "topic": "Java Abstract Classes",
    "difficulty": "easy"
  },
  {
    "id": 141,
    "question": "Which constructor calls are allowed in abstract classes?",
    "options": [
      "this() only",
      "super() only",
      "Both this() and super()",
      "Neither"
    ],
    "correctAnswer": "C",
    "topic": "Java Abstract Classes",
    "difficulty": "hard"
  },
  {
    "id": 142,
    "question": "Which is not true about abstract classes?",
    "options": [
      "Can contain fields",
      "Can have static methods",
      "Cannot extend another class",
      "Can implement interfaces"
    ],
    "correctAnswer": "C",
    "topic": "Java Abstract Classes",
    "difficulty": "medium"
  },
  {
    "id": 143,
    "question": "Which keyword is used to declare an interface?",
    "options": [
      "interface",
      "implements",
      "extends",
      "package"
    ],
    "correctAnswer": "A",
    "topic": "Java Interfaces",
    "difficulty": "easy"
  },
  {
    "id": 144,
    "question": "Can interfaces have static methods?",
    "options": [
      "Yes",
      "No",
      "Only in Java 7",
      "Only if default"
    ],
    "correctAnswer": "A",
    "topic": "Java Interfaces",
    "difficulty": "medium"
  },
  {
    "id": 145,
    "question": "Which is true of multiple inheritance in Java?",
    "options": [
      "Classes can extend multiple classes",
      "Interfaces can extend multiple interfaces",
      "Classes can implement multiple interfaces",
      "Both B and C"
    ],
    "correctAnswer": "D",
    "topic": "Java Interfaces",
    "difficulty": "medium"
  },
  {
    "id": 146,
    "question": "What's the default access of members in an interface?",
    "options": [
      "public",
      "protected",
      "private",
      "Package-private"
    ],
    "correctAnswer": "A",
    "topic": "Java Interfaces",
    "difficulty": "easy"
  },
  {
    "id": 147,
    "question": "Which file must begin with a package statement if present?",
    "options": [
      "First non-comment line",
      "Immediately after imports",
      "After class declaration",
      "Anywhere in file"
    ],
    "correctAnswer": "A",
    "topic": "Java Packages",
    "difficulty": "hard"
  },
  {
    "id": 148,
    "question": "What must a class declare to use an interface?",
    "options": [
      "extends",
      "implements",
      "imports",
      "uses"
    ],
    "correctAnswer": "B",
    "topic": "Java Interfaces",
    "difficulty": "easy"
  },
  {
    "id": 149,
    "question": "Can interfaces contain instance fields?",
    "options": [
      "Yes",
      "No",
      "Only if static",
      "Only in Java 8+"
    ],
    "correctAnswer": "B",
    "topic": "Java Interfaces",
    "difficulty": "medium"
  },
  {
    "id": 150,
    "question": "Which is legal in interfaces?",
    "options": [
      "private void helper() {}",
      "default void m() {}",
      "protected void m();",
      "static abstract void m();"
    ],
    "correctAnswer": "B",
    "topic": "Java Interfaces",
    "difficulty": "hard"
  },
  {
    "id": 151,
    "question": "Which block always executes?",
    "options": [
      "try",
      "catch",
      "finally",
      "throw"
    ],
    "correctAnswer": "C",
    "topic": "Java Exceptions",
    "difficulty": "easy"
  },
  {
    "id": 152,
    "question": "How do you explicitly throw an exception?",
    "options": [
      "throw new Exception();",
      "throws new Exception();",
      "throw Exception();",
      "throws Exception;"
    ],
    "correctAnswer": "A",
    "topic": "Java Exceptions",
    "difficulty": "easy"
  },
  {
    "id": 153,
    "question": "What must a method declare if it throws a checked exception?",
    "options": [
      "throw clause",
      "throws clause",
      "try block",
      "finally block"
    ],
    "correctAnswer": "B",
    "topic": "Java Exceptions",
    "difficulty": "easy"
  },
  {
    "id": 154,
    "question": "Which exception is unchecked?",
    "options": [
      "IOException",
      "SQLException",
      "NullPointerException",
      "ClassNotFoundException"
    ],
    "correctAnswer": "C",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 155,
    "question": "What happens if an exception isn't caught or declared?",
    "options": [
      "Compile-time error",
      "Runtime error",
      "Default handler prints stack trace",
      "JVM ignores it"
    ],
    "correctAnswer": "A",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 156,
    "question": "Can finally block suppress an exception?",
    "options": [
      "Yes, if it returns",
      "No",
      "Only for RuntimeException",
      "Only in Java 9+"
    ],
    "correctAnswer": "A",
    "topic": "Java Exceptions",
    "difficulty": "hard"
  },
  {
    "id": 157,
    "question": "Which keyword rethrows the same exception?",
    "options": [
      "throw",
      "throws",
      "rethrow",
      "catch"
    ],
    "correctAnswer": "A",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 158,
    "question": "What type of exception is Error?",
    "options": [
      "Checked",
      "Unchecked",
      "Compile-time only",
      "Deprecated"
    ],
    "correctAnswer": "B",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 159,
    "question": "Which is true of multi-catch?",
    "options": [
      "Order doesn't matter",
      "You can catch exception hierarchies together",
      "Only for checked exceptions",
      "Cannot have a finally"
    ],
    "correctAnswer": "B",
    "topic": "Java Exceptions",
    "difficulty": "hard"
  },
  {
    "id": 160,
    "question": "Which package contains the Pattern class?",
    "options": [
      "java.util.regex",
      "java.lang.regex",
      "java.regex",
      "java.util"
    ],
    "correctAnswer": "A",
    "topic": "Java Regular Expressions",
    "difficulty": "easy"
  },
  {
    "id": 161,
    "question": "How do you define an enum?",
    "options": [
      "enum Day { MON, TUE }",
      "class Day enum { MON, TUE }",
      "enum Day();",
      "interface Day { MON, TUE }"
    ],
    "correctAnswer": "A",
    "topic": "Java Enums",
    "difficulty": "easy"
  },
  {
    "id": 162,
    "question": "Which annotation marks a method as deprecated?",
    "options": [
      "@Deprecated",
      "@DeprecatedMethod",
      "@Old",
      "@Outdated"
    ],
    "correctAnswer": "A",
    "topic": "Java Annotations",
    "difficulty": "easy"
  },
  {
    "id": 163,
    "question": "Which class represents a date without time in Java 8+?",
    "options": [
      "java.time.LocalDate",
      "java.util.Date",
      "java.sql.Date",
      "java.time.Date"
    ],
    "correctAnswer": "A",
    "topic": "Java Date API",
    "difficulty": "medium"
  },
  {
    "id": 164,
    "question": "What's the method to generate a random int?",
    "options": [
      "Random.next()",
      "Random.nextInt()",
      "Math.randomInt()",
      "ThreadLocalRandom.getInt()"
    ],
    "correctAnswer": "B",
    "topic": "Java Utilities",
    "difficulty": "medium"
  },
  {
    "id": 165,
    "question": "Which element is required in a custom annotation definition?",
    "options": [
      "@interface",
      "@Annotation",
      "@Custom",
      "@Define"
    ],
    "correctAnswer": "A",
    "topic": "Java Annotations",
    "difficulty": "hard"
  },
  {
    "id": 166,
    "question": "What does Pattern.compile(\"a*b\").matcher(\"aaab\").matches() return?",
    "options": [
      "true",
      "false",
      "Compile-time error",
      "Runtime exception"
    ],
    "correctAnswer": "A",
    "topic": "Java Regular Expressions",
    "difficulty": "hard"
  },
  // Adding new questions after the existing ones

  {
    "id": 167,
    "question": "What does JVM stand for in Java?",
    "options": [
      "Java Virtual Machine",
      "Java Visual Manager", 
      "Java Variable Method", 
      "Java Version Manager"
    ],
    "correctAnswer": "A",
    "topic": "Java Platform",
    "difficulty": "easy"
  },
  {
    "id": 168,
    "question": "Which component is responsible for converting bytecode to machine code in Java?",
    "options": [
      "JRE", 
      "JDK", 
      "JIT Compiler", 
      "Java Compiler"
    ],
    "correctAnswer": "C",
    "topic": "Java Platform",
    "difficulty": "medium"
  },
  {
    "id": 169,
    "question": "What is the relationship between JDK, JRE, and JVM?",
    "options": [
      "JDK contains JRE, JRE contains JVM", 
      "JRE contains JDK, JDK contains JVM", 
      "JVM contains JRE, JRE contains JDK", 
      "All are independent components"
    ],
    "correctAnswer": "A",
    "topic": "Java Platform",
    "difficulty": "easy"
  },
  {
    "id": 170,
    "question": "Which feature of Java makes it platform independent?",
    "options": [
      "Object-oriented programming", 
      "Bytecode compilation", 
      "Multi-threading", 
      "Dynamic memory allocation"
    ],
    "correctAnswer": "B",
    "topic": "Java Platform",
    "difficulty": "easy"
  },
  {
    "id": 171,
    "question": "In which year was Java first released by Sun Microsystems?",
    "options": [
      "1991", 
      "1995", 
      "1996", 
      "1998"
    ],
    "correctAnswer": "B",
    "topic": "Java History",
    "difficulty": "medium"
  },
  {
    "id": 172,
    "question": "What happens when you try to run a Java program without installing JRE?",
    "options": [
      "Program runs normally", 
      "Compilation error occurs", 
      "Runtime error - JRE not found", 
      "Program runs with warnings"
    ],
    "correctAnswer": "C",
    "topic": "Java Platform",
    "difficulty": "hard"
  },
  {
    "id": 173,
    "question": "Which of the following main method declarations is valid?",
    "options": [
      "public static void main(String args){}", 
      "public static synchronized final strictfp void main(String... args){}", 
      "public static int main(String[] args){}", 
      "public synchronized final strictfp void main(String[] args){}"
    ],
    "correctAnswer": "B",
    "topic": "Java Basics",
    "difficulty": "medium"
  },
  {
    "id": 174,
    "question": "What is the correct way to compile a Java file named 'Test.java'?",
    "options": [
      "java Test.java", 
      "javac Test.java", 
      "compile Test.java", 
      "jvm Test.java"
    ],
    "correctAnswer": "B",
    "topic": "Java Basics",
    "difficulty": "easy"
  },
  {
    "id": 175,
    "question": "How do you access command line arguments in a Java program?",
    "options": [
      "args.length", 
      "args[0]", 
      "String[] args parameter", 
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Java Basics",
    "difficulty": "easy"
  },
  {
    "id": 176,
    "question": "What happens if you don't provide command line arguments but try to access args[0]?",
    "options": [
      "Returns null", 
      "ArrayIndexOutOfBoundsException", 
      "Compilation error", 
      "Returns empty string"
    ],
    "correctAnswer": "B",
    "topic": "Java Basics",
    "difficulty": "medium"
  },
  {
    "id": 177,
    "question": "Which command is used to run a compiled Java program?",
    "options": [
      "javac", 
      "java", 
      "run", 
      "execute"
    ],
    "correctAnswer": "B",
    "topic": "Java Basics",
    "difficulty": "easy"
  },
  {
    "id": 178,
    "question": "What is the file extension of Java bytecode?",
    "options": [
      ".java", 
      ".class", 
      ".byte", 
      ".jvm"
    ],
    "correctAnswer": "B",
    "topic": "Java Basics",
    "difficulty": "easy"
  },
  {
    "id": 179,
    "question": "Which of the following is a valid Java identifier?",
    "options": [
      "2variable", 
      "_myVar", 
      "class", 
      "my-var"
    ],
    "correctAnswer": "B",
    "topic": "Java Basics",
    "difficulty": "easy"
  },
  {
    "id": 180,
    "question": "What is the range of boolean data type in Java?",
    "options": [
      "-128 to 127", 
      "-32768 to 32767", 
      "0 to 65535", 
      "Not Applicable"
    ],
    "correctAnswer": "D",
    "topic": "Java Data Types",
    "difficulty": "easy"
  },
  {
    "id": 181,
    "question": "Which operator has the highest precedence in Java?",
    "options": [
      "++", 
      "*", 
      "+", 
      "[]"
    ],
    "correctAnswer": "D",
    "topic": "Java Operators",
    "difficulty": "medium"
  },
  {
    "id": 182,
    "question": "What is the size of int data type in Java?",
    "options": [
      "16 bits", 
      "32 bits", 
      "64 bits", 
      "Platform dependent"
    ],
    "correctAnswer": "B",
    "topic": "Java Data Types",
    "difficulty": "easy"
  },
  {
    "id": 183,
    "question": "Which of the following is NOT a Java keyword?",
    "options": [
      "final", 
      "finally", 
      "finalize", 
      "friend"
    ],
    "correctAnswer": "D",
    "topic": "Java Basics",
    "difficulty": "medium"
  },
  {
    "id": 184,
    "question": "What happens when you perform 'int a = 130; byte b = (byte)a;'?",
    "options": [
      "b = 130", 
      "b = -126", 
      "Compilation error", 
      "Runtime error"
    ],
    "correctAnswer": "B",
    "topic": "Java Data Types",
    "difficulty": "hard"
  },
  {
    "id": 185,
    "question": "Which control statement is used to exit from a loop?",
    "options": [
      "continue", 
      "break", 
      "return", 
      "exit"
    ],
    "correctAnswer": "B",
    "topic": "Java Control Flow",
    "difficulty": "easy"
  },
  {
    "id": 186,
    "question": "What is the default value in a switch statement if no case matches?",
    "options": [
      "First case executes", 
      "Last case executes", 
      "Nothing happens if no default", 
      "Compilation error"
    ],
    "correctAnswer": "C",
    "topic": "Java Control Flow",
    "difficulty": "medium"
  },
  {
    "id": 187,
    "question": "Which of the following data types can be used in a switch statement in Java 8?",
    "options": [
      "int, char, String", 
      "float, double", 
      "boolean", 
      "All primitive types"
    ],
    "correctAnswer": "A",
    "topic": "Java Control Flow",
    "difficulty": "medium"
  },
  {
    "id": 188,
    "question": "What does the continue statement do in a loop?",
    "options": [
      "Exits the loop", 
      "Skips current iteration", 
      "Restarts the loop", 
      "Does nothing"
    ],
    "correctAnswer": "B",
    "topic": "Java Control Flow",
    "difficulty": "easy"
  },
  {
    "id": 189,
    "question": "In a nested loop, what does 'break' do?",
    "options": [
      "Breaks all loops", 
      "Breaks innermost loop only", 
      "Breaks outermost loop only", 
      "Compilation error"
    ],
    "correctAnswer": "B",
    "topic": "Java Control Flow",
    "difficulty": "medium"
  },
  {
    "id": 190,
    "question": "What happens when you use return statement in a try block with finally?",
    "options": [
      "Finally doesn't execute", 
      "Finally executes after return", 
      "Finally executes before return", 
      "Compilation error"
    ],
    "correctAnswer": "C",
    "topic": "Java Control Flow",
    "difficulty": "hard"
  },
  {
    "id": 191,
    "question": "How do you declare a single-dimensional array in Java?",
    "options": [
      "int arr[] = new int[5];", 
      "int[] arr = new int[5];", 
      "Both A and B", 
      "int arr = new int[5];"
    ],
    "correctAnswer": "C",
    "topic": "Java Arrays",
    "difficulty": "easy"
  },
  {
    "id": 192,
    "question": "What is the default value of elements in an int array?",
    "options": [
      "0", 
      "null", 
      "1", 
      "undefined"
    ],
    "correctAnswer": "A",
    "topic": "Java Arrays",
    "difficulty": "easy"
  },
  {
    "id": 193,
    "question": "How do you declare a jagged array in Java?",
    "options": [
      "int[][] arr = new int[3][4];", 
      "int[][] arr = new int[3][];", 
      "int[] arr[] = new int[][3];", 
      "int arr[][] = new int[3,4];"
    ],
    "correctAnswer": "B",
    "topic": "Java Arrays",
    "difficulty": "medium"
  },
  {
    "id": 194,
    "question": "What is the length of array 'int[][] arr = {{1,2},{3,4,5}};'?",
    "options": [
      "2", 
      "5", 
      "3", 
      "Cannot determine"
    ],
    "correctAnswer": "A",
    "topic": "Java Arrays",
    "difficulty": "medium"
  },
  {
    "id": 195,
    "question": "Which exception is thrown when accessing an invalid array index?",
    "options": [
      "IndexOutOfBoundsException", 
      "ArrayIndexOutOfBoundsException", 
      "InvalidIndexException", 
      "NullPointerException"
    ],
    "correctAnswer": "B",
    "topic": "Java Arrays",
    "difficulty": "easy"
  },
  {
    "id": 196,
    "question": "What happens when you declare 'int[] arr = new int[5]; System.out.println(arr[-1]);'?",
    "options": [
      "Prints 0", 
      "ArrayIndexOutOfBoundsException", 
      "Compilation error", 
      "Prints null"
    ],
    "correctAnswer": "B",
    "topic": "Java Arrays",
    "difficulty": "hard"
  },
  {
    "id": 197,
    "question": "Which class is immutable in Java?",
    "options": [
      "StringBuffer", 
      "StringBuilder", 
      "String", 
      "StringTokenizer"
    ],
    "correctAnswer": "C",
    "topic": "Java Strings",
    "difficulty": "easy"
  },
  {
    "id": 198,
    "question": "What is the difference between String and StringBuffer?",
    "options": [
      "String is mutable, StringBuffer is immutable", 
      "String is immutable, StringBuffer is mutable", 
      "Both are mutable", 
      "Both are immutable"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "easy"
  },
  {
    "id": 199,
    "question": "Which method is used to convert StringBuffer to String?",
    "options": [
      "convert()", 
      "toString()", 
      "getString()", 
      "valueOf()"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "easy"
  },
  {
    "id": 200,
    "question": "What is the key difference between StringBuffer and StringBuilder?",
    "options": [
      "StringBuffer is faster", 
      "StringBuilder is thread-safe", 
      "StringBuffer is thread-safe", 
      "No difference"
    ],
    "correctAnswer": "C",
    "topic": "Java Strings",
    "difficulty": "medium"
  },
  {
    "id": 201,
    "question": "Which constructor does StringTokenizer use by default for delimiters?",
    "options": [
      "Space only", 
      "Space, tab, newline, carriage return, form feed", 
      "Comma", 
      "Semicolon"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "medium"
  },
  {
    "id": 202,
    "question": "What happens when you execute 'String s1 = \"hello\"; String s2 = \"hello\"; System.out.println(s1 == s2);'?",
    "options": [
      "false", 
      "true", 
      "Compilation error", 
      "Runtime error"
    ],
    "correctAnswer": "B",
    "topic": "Java Strings",
    "difficulty": "hard"
  },
  {
    "id": 203,
    "question": "What is a constructor in Java?",
    "options": [
      "A method that returns a value", 
      "A special method to initialize objects", 
      "A method that destroys objects", 
      "A static method"
    ],
    "correctAnswer": "B",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 204,
    "question": "Which wrapper class is used for primitive type 'char'?",
    "options": [
      "Char", 
      "Character", 
      "String", 
      "CharWrapper"
    ],
    "correctAnswer": "B",
    "topic": "Java Wrapper Classes",
    "difficulty": "easy"
  },
  {
    "id": 205,
    "question": "Can a constructor be private in Java?",
    "options": [
      "Yes", 
      "No", 
      "Only in abstract classes", 
      "Only with static keyword"
    ],
    "correctAnswer": "A",
    "topic": "Java Classes",
    "difficulty": "medium"
  },
  {
    "id": 206,
    "question": "What happens if you don't define any constructor in a class?",
    "options": [
      "Compilation error", 
      "Runtime error", 
      "Java provides default constructor", 
      "Cannot create objects"
    ],
    "correctAnswer": "C",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 207,
    "question": "Which method is automatically called when an object is garbage collected?",
    "options": [
      "finalize()", 
      "dispose()", 
      "destroy()", 
      "delete()"
    ],
    "correctAnswer": "A",
    "topic": "Java Classes",
    "difficulty": "medium"
  },
  {
    "id": 208,
    "question": "What is autoboxing in Java?",
    "options": [
      "Converting wrapper to primitive", 
      "Converting primitive to wrapper automatically", 
      "Boxing objects", 
      "Creating boxes"
    ],
    "correctAnswer": "B",
    "topic": "Java Wrapper Classes",
    "difficulty": "hard"
  },
  {
    "id": 209,
    "question": "What does the 'this' keyword refer to?",
    "options": [
      "Current class", 
      "Current object", 
      "Parent class", 
      "Parent object"
    ],
    "correctAnswer": "B",
    "topic": "Java Classes",
    "difficulty": "easy"
  },
  {
    "id": 210,
    "question": "Can static methods access instance variables directly?",
    "options": [
      "Yes", 
      "No", 
      "Only with this keyword", 
      "Only if they are public"
    ],
    "correctAnswer": "B",
    "topic": "Java Static Members",
    "difficulty": "easy"
  },
  {
    "id": 211,
    "question": "What is method overloading?",
    "options": [
      "Same method name, different parameters", 
      "Same method name, same parameters", 
      "Different method name, same parameters", 
      "Changing method implementation"
    ],
    "correctAnswer": "A",
    "topic": "Java Methods",
    "difficulty": "easy"
  },
  {
    "id": 212,
    "question": "Can you overload constructors in Java?",
    "options": [
      "Yes", 
      "No", 
      "Only with different access modifiers", 
      "Only in abstract classes"
    ],
    "correctAnswer": "A",
    "topic": "Java Classes",
    "difficulty": "medium"
  },
  {
    "id": 213,
    "question": "Which keyword is used to call another constructor in the same class?",
    "options": [
      "super()", 
      "this()", 
      "call()", 
      "invoke()"
    ],
    "correctAnswer": "B",
    "topic": "Java Classes",
    "difficulty": "medium"
  },
  {
    "id": 214,
    "question": "What happens when you try to access a static variable using an object reference?",
    "options": [
      "Compilation error", 
      "Runtime error", 
      "Works but gives warning", 
      "Works normally"
    ],
    "correctAnswer": "C",
    "topic": "Java Static Members",
    "difficulty": "hard"
  },
  {
    "id": 215,
    "question": "What is inheritance in Java?",
    "options": [
      "Creating new classes", 
      "Acquiring properties of parent class", 
      "Deleting classes", 
      "Copying classes"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "easy"
  },
  {
    "id": 216,
    "question": "Which keyword is used to inherit a class in Java?",
    "options": [
      "inherit", 
      "extends", 
      "implements", 
      "super"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "easy"
  },
    {
    "id": 217,
    "question": "What does the 'super' keyword do?",
    "options": [
      "Refers to current object", 
      "Refers to parent class", 
      "Creates new object", 
      "Destroys object"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "easy"
  },
  {
    "id": 218,
    "question": "What is method overriding?",
    "options": [
      "Same method in different classes", 
      "Redefining parent method in child class", 
      "Creating new methods", 
      "Deleting methods"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "medium"
  },
  {
    "id": 219,
    "question": "Can you override static methods in Java?",
    "options": [
      "Yes", 
      "No", 
      "Only in abstract classes", 
      "Only with super keyword"
    ],
    "correctAnswer": "B",
    "topic": "Java Inheritance",
    "difficulty": "medium"
  },
  {
    "id": 220,
    "question": "Which annotation is used to indicate method overriding?",
    "options": [
      "@Override", 
      "@Overrides", 
      "@Inherit", 
      "@Super"
    ],
    "correctAnswer": "A",
    "topic": "Java Inheritance",
    "difficulty": "hard"
  },
  {
    "id": 221,
    "question": "What is polymorphism in Java?",
    "options": [
      "Multiple forms of same entity", 
      "Single form of entity", 
      "Creating objects", 
      "Destroying objects"
    ],
    "correctAnswer": "A",
    "topic": "Java Polymorphism",
    "difficulty": "easy"
  },
  {
    "id": 222,
    "question": "What is dynamic method dispatch?",
    "options": [
      "Compile-time method binding", 
      "Runtime method binding", 
      "Static method calling", 
      "Constructor calling"
    ],
    "correctAnswer": "B",
    "topic": "Java Polymorphism",
    "difficulty": "medium"
  },
  {
    "id": 223,
    "question": "What does the 'final' keyword prevent when applied to a class?",
    "options": [
      "Instantiation", 
      "Inheritance", 
      "Method calling", 
      "Variable declaration"
    ],
    "correctAnswer": "B",
    "topic": "Java Polymorphism",
    "difficulty": "easy"
  },
  {
    "id": 224,
    "question": "Can a final method be overridden?",
    "options": [
      "Yes", 
      "No", 
      "Only in child classes", 
      "Only with super keyword"
    ],
    "correctAnswer": "B",
    "topic": "Java Polymorphism",
    "difficulty": "medium"
  },
  {
    "id": 225,
    "question": "What happens when you declare a variable as final?",
    "options": [
      "Can be reassigned", 
      "Cannot be reassigned", 
      "Becomes static", 
      "Becomes private"
    ],
    "correctAnswer": "B",
    "topic": "Java Variables",
    "difficulty": "easy"
  },
  {
    "id": 226,
    "question": "Which type of polymorphism is achieved through method overloading?",
    "options": [
      "Runtime polymorphism", 
      "Compile-time polymorphism", 
      "Dynamic polymorphism", 
      "Late binding"
    ],
    "correctAnswer": "B",
    "topic": "Java Polymorphism",
    "difficulty": "hard"
  },
  {
    "id": 227,
    "question": "What is an abstract class in Java?",
    "options": [
      "Class with all concrete methods", 
      "Class with at least one abstract method", 
      "Interface", 
      "Final class"
    ],
    "correctAnswer": "B",
    "topic": "Java Abstract Classes",
    "difficulty": "easy"
  },
  {
    "id": 228,
    "question": "Can you instantiate an abstract class?",
    "options": [
      "Yes", 
      "No", 
      "Only with super keyword", 
      "Only in child classes"
    ],
    "correctAnswer": "B",
    "topic": "Java Abstract Classes",
    "difficulty": "easy"
  },
  {
    "id": 229,
    "question": "What keyword is used to declare an abstract method?",
    "options": [
      "abstract", 
      "virtual", 
      "pure", 
      "override"
    ],
    "correctAnswer": "A",
    "topic": "Java Abstract Classes",
    "difficulty": "easy"
  },
  {
    "id": 230,
    "question": "Can an abstract class have constructor?",
    "options": [
      "Yes", 
      "No", 
      "Only default constructor", 
      "Only private constructor"
    ],
    "correctAnswer": "A",
    "topic": "Java Abstract Classes",
    "difficulty": "medium"
  },
  {
    "id": 231,
    "question": "Can an abstract class have static methods?",
    "options": [
      "Yes", 
      "No", 
      "Only abstract static methods", 
      "Only final static methods"
    ],
    "correctAnswer": "A",
    "topic": "Java Abstract Classes",
    "difficulty": "medium"
  },
  {
    "id": 232,
    "question": "What happens if a child class doesn't implement all abstract methods of parent?",
    "options": [
      "Compilation error", 
      "Runtime error", 
      "Child must be abstract", 
      "Works normally"
    ],
    "correctAnswer": "C",
    "topic": "Java Abstract Classes",
    "difficulty": "hard"
  },
  {
    "id": 233,
    "question": "What is a package in Java?",
    "options": [
      "Collection of classes", 
      "Single class", 
      "Method group", 
      "Variable group"
    ],
    "correctAnswer": "A",
    "topic": "Java Packages",
    "difficulty": "easy"
  },
  {
    "id": 234,
    "question": "Which keyword is used to import a package?",
    "options": [
      "include", 
      "import", 
      "package", 
      "using"
    ],
    "correctAnswer": "B",
    "topic": "Java Packages",
    "difficulty": "easy"
  },
  {
    "id": 235,
    "question": "What is an interface in Java?",
    "options": [
      "Class with all concrete methods", 
      "Contract with abstract methods", 
      "Abstract class", 
      "Final class"
    ],
    "correctAnswer": "B",
    "topic": "Java Interfaces",
    "difficulty": "easy"
  },
  {
    "id": 236,
    "question": "How does Java achieve multiple inheritance?",
    "options": [
      "Through classes", 
      "Through interfaces", 
      "Through abstract classes", 
      "Not possible"
    ],
    "correctAnswer": "B",
    "topic": "Java Interfaces",
    "difficulty": "medium"
  },
  {
    "id": 237,
    "question": "Which keyword is used to implement an interface?",
    "options": [
      "extends", 
      "implements", 
      "inherit", 
      "override"
    ],
    "correctAnswer": "B",
    "topic": "Java Interfaces",
    "difficulty": "medium"
  },
  {
    "id": 238,
    "question": "Can an interface have static methods in Java 8?",
    "options": [
      "Yes", 
      "No", 
      "Only default methods", 
      "Only abstract methods"
    ],
    "correctAnswer": "A",
    "topic": "Java Interfaces",
    "difficulty": "hard"
  },
  {
    "id": 239,
    "question": "What is exception handling in Java?",
    "options": [
      "Preventing errors", 
      "Handling runtime errors gracefully", 
      "Debugging code", 
      "Optimizing performance"
    ],
    "correctAnswer": "B",
    "topic": "Java Exceptions",
    "difficulty": "easy"
  },
  {
    "id": 240,
    "question": "Which block always executes in exception handling?",
    "options": [
      "try", 
      "catch", 
      "finally", 
      "throw"
    ],
    "correctAnswer": "C",
    "topic": "Java Exceptions",
    "difficulty": "easy"
  },
  {
    "id": 241,
    "question": "What is the difference between throw and throws?",
    "options": [
      "No difference", 
      "throw is for methods, throws for statements", 
      "throw creates exception, throws declares", 
      "throws creates exception, throw declares"
    ],
    "correctAnswer": "C",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 242,
    "question": "Which class is the parent of all exception classes?",
    "options": [
      "Exception", 
      "RuntimeException", 
      "Throwable", 
      "Error"
    ],
    "correctAnswer": "C",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 243,
    "question": "How do you create a custom exception?",
    "options": [
      "Extend Exception class", 
      "Implement Exception interface", 
      "Use throw keyword", 
      "Use new keyword"
    ],
    "correctAnswer": "A",
    "topic": "Java Exceptions",
    "difficulty": "medium"
  },
  {
    "id": 244,
    "question": "What happens if an exception occurs in finally block?",
    "options": [
      "Original exception is thrown", 
      "Finally exception is thrown", 
      "Both exceptions are thrown", 
      "Program terminates"
    ],
    "correctAnswer": "B",
    "topic": "Java Exceptions",
    "difficulty": "hard"
  },
  {
    "id": 245,
    "question": "Which package contains the Pattern class for regex?",
    "options": [
      "java.util", 
      "java.util.regex", 
      "java.text", 
      "java.lang"
    ],
    "correctAnswer": "B",
    "topic": "Java Regular Expressions",
    "difficulty": "easy"
  },
  {
    "id": 246,
    "question": "What is an enum in Java?",
    "options": [
      "Special class for constants", 
      "Interface", 
      "Abstract class", 
      "Final class"
    ],
    "correctAnswer": "A",
    "topic": "Java Enums",
    "difficulty": "easy"
  },
  {
    "id": 247,
    "question": "Which annotation indicates a method parameter cannot be null?",
    "options": [
      "@NotNull", 
      "@NonNull", 
      "@Required", 
      "@NotEmpty"
    ],
    "correctAnswer": "B",
    "topic": "Java Annotations",
    "difficulty": "medium"
  },
  {
    "id": 248,
    "question": "Which class replaced Date class in Java 8?",
    "options": [
      "DateTime", 
      "LocalDateTime", 
      "Calendar", 
      "Time"
    ],
    "correctAnswer": "B",
    "topic": "Java Date API",
    "difficulty": "medium"
  },
  {
    "id": 249,
    "question": "Which method generates random integers in a specific range?",
    "options": [
      "Random.nextInt()", 
      "Random.nextInt(bound)", 
      "Random.randomInt()", 
      "Random.getInt()"
    ],
    "correctAnswer": "B",
    "topic": "Java Utilities",
    "difficulty": "easy"
  },
  {
    "id": 250,
    "question": "What does the regex pattern '\\d+' match?",
    "options": [
      "One digit", 
      "One or more digits", 
      "Any character", 
      "Word characters"
    ],
    "correctAnswer": "B",
    "topic": "Java Regular Expressions",
    "difficulty": "hard"
  },
  {
    "id": 251,
    "question": "Which class is used to read from files in Java?",
    "options": [
      "FileReader", 
      "BufferedReader", 
      "Scanner", 
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Java IO",
    "difficulty": "easy"
  },
  {
    "id": 252,
    "question": "What interface must a class implement to be serializable?",
    "options": [
      "Cloneable", 
      "Serializable", 
      "Comparable", 
      "Runnable"
    ],
    "correctAnswer": "B",
    "topic": "Java Serialization",
    "difficulty": "easy"
  },
  {
    "id": 253,
    "question": "Which method is used to write objects to a file?",
    "options": [
      "writeObject()", 
      "serialize()", 
      "write()", 
      "save()"
    ],
    "correctAnswer": "A",
    "topic": "Java Serialization",
    "difficulty": "medium"
  },
  {
    "id": 254,
    "question": "What is the difference between FileInputStream and FileReader?",
    "options": [
      "No difference", 
      "FileInputStream for bytes, FileReader for characters", 
      "FileReader for bytes, FileInputStream for characters", 
      "FileInputStream is faster"
    ],
    "correctAnswer": "B",
    "topic": "Java IO",
    "difficulty": "medium"
  },
  {
    "id": 255,
    "question": "Which keyword prevents a field from being serialized?",
    "options": [
      "static", 
      "final", 
      "transient", 
      "volatile"
    ],
    "correctAnswer": "C",
    "topic": "Java Serialization",
    "difficulty": "medium"
  },
  {
    "id": 256,
    "question": "What happens if you try to serialize an object whose class doesn't implement Serializable?",
    "options": [
      "Compilation error", 
      "NotSerializableException", 
      "Works normally", 
      "Returns null"
    ],
    "correctAnswer": "B",
    "topic": "Java Serialization",
    "difficulty": "hard"
  }
]