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
    "question": "When does Exceptions in Java arise in code sequence?",
    "options": [
      "Run Time",
      "Compilation Time",
      "Can Occur Any Time",
      "None of the mentioned"
    ],
    "correctAnswer": "A",
    "explanation": "Exceptions are runtime errors, not compile-time issues.",
    "topic": "Exception Handling",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "question": "Which of these keywords is not a part of exception handling?",
    "options": [
      "try",
      "finally",
      "thrown",
      "catch"
    ],
    "correctAnswer": "C",
    "explanation": "The keyword is 'throw', not 'thrown'.",
    "topic": "Exception Handling",
    "difficulty": "easy"
  },
  {
    "id": 3,
    "question": "Which of these keywords must be used to monitor for exceptions?",
    "options": [
      "try",
      "finally",
      "throw",
      "catch"
    ],
    "correctAnswer": "A",
    "explanation": "Try block encloses code that might throw exceptions.",
    "topic": "Exception Handling",
    "difficulty": "easy"
  },
  {
    "id": 4,
    "question": "Which of these keywords must be used to handle the exception thrown by try block?",
    "options": [
      "try",
      "finally",
      "throw",
      "catch"
    ],
    "correctAnswer": "D",
    "explanation": "Catch handles the exception type.",
    "topic": "Exception Handling",
    "difficulty": "easy"
  },
  {
    "id": 5,
    "question": "Which of these keywords is used to manually throw an exception?",
    "options": [
      "try",
      "finally",
      "throw",
      "catch"
    ],
    "correctAnswer": "C",
    "explanation": "Throw explicitly raises an exception.",
    "topic": "Exception Handling",
    "difficulty": "easy"
  },
  {
    "id": 6,
    "question": "What is the output of: try { System.out.print(\"Hello\" + \" \" + 1 / 0); } catch(ArithmeticException e) { System.out.print(\"World\"); }",
    "options": [
      "Hello",
      "World",
      "HelloWorld",
      "Hello World"
    ],
    "correctAnswer": "B",
    "explanation": "Division by zero triggers ArithmeticException, caught by catch.",
    "topic": "Exception Handling",
    "difficulty": "medium"
  },
  {
    "id": 7,
    "question": "What is the output of: try { int a, b; b = 0; a = 5 / b; System.out.print(\"A\"); } catch(ArithmeticException e) { System.out.print(\"B\"); } finally { System.out.print(\"C\"); }",
    "options": [
      "A",
      "B",
      "AC",
      "BC"
    ],
    "correctAnswer": "D",
    "explanation": "Exception caught (B), finally always executes (C).",
    "topic": "Exception Handling",
    "difficulty": "medium"
  },
  {
    "id": 8,
    "question": "Which of these exception is thrown when file for writing is not found?",
    "options": [
      "IOException",
      "FileException",
      "FileNotFoundException",
      "FileInputException"
    ],
    "correctAnswer": "C",
    "explanation": "Specific to missing files in I/O operations.",
    "topic": "File I/O",
    "difficulty": "medium"
  },
  {
    "id": 9,
    "question": "Which method reads from a file?",
    "options": [
      "get()",
      "read()",
      "scan()",
      "readFileInput()"
    ],
    "correctAnswer": "B",
    "explanation": "Standard method in InputStream/Reader classes.",
    "topic": "File I/O",
    "difficulty": "easy"
  },
  {
    "id": 10,
    "question": "What does read() return at EOF?",
    "options": [
      "0",
      "1",
      "-1",
      "Null"
    ],
    "correctAnswer": "C",
    "explanation": "Indicates end of stream.",
    "topic": "File I/O",
    "difficulty": "medium"
  },
  {
    "id": 11,
    "question": "What is a lambda expression in Java?",
    "options": [
      "A named function",
      "An anonymous function",
      "A static function",
      "A function with a return type"
    ],
    "correctAnswer": "B",
    "explanation": "Concise way to implement functional interfaces.",
    "topic": "Lambda Expressions",
    "difficulty": "medium"
  },
  {
    "id": 12,
    "question": "Which functional interface represents a supplier?",
    "options": [
      "Consumer",
      "Function",
      "Supplier",
      "Predicate"
    ],
    "correctAnswer": "C",
    "explanation": "Provides values without input.",
    "topic": "Lambda Expressions",
    "difficulty": "medium"
  },
  {
    "id": 13,
    "question": "How are lambda expressions denoted?",
    "options": [
      "->",
      "=>",
      "<>",
      "::"
    ],
    "correctAnswer": "A",
    "explanation": "Arrow operator separates parameters from body.",
    "topic": "Lambda Expressions",
    "difficulty": "easy"
  },
  {
    "id": 14,
    "question": "Which interface accepts input and produces a result?",
    "options": [
      "Consumer",
      "Function",
      "Supplier",
      "Predicate"
    ],
    "correctAnswer": "B",
    "explanation": "Maps input to output.",
    "topic": "Lambda Expressions",
    "difficulty": "medium"
  },
  {
    "id": 15,
    "question": "Which returns a boolean?",
    "options": [
      "Consumer",
      "Function",
      "Supplier",
      "Predicate"
    ],
    "correctAnswer": "D",
    "explanation": "For filtering conditions.",
    "topic": "Lambda Expressions",
    "difficulty": "medium"
  },
  {
    "id": 16,
    "question": "What is a target type for lambdas?",
    "options": [
      "Lambda type",
      "Functional interface type",
      "Argument type",
      "Return type"
    ],
    "correctAnswer": "B",
    "explanation": "Lambda infers from context.",
    "topic": "Lambda Expressions",
    "difficulty": "hard"
  },
  {
    "id": 17,
    "question": "Purpose of Consumer?",
    "options": [
      "Produce results",
      "Consume values",
      "Filter elements",
      "Transform values"
    ],
    "correctAnswer": "B",
    "explanation": "Takes input, no output.",
    "topic": "Lambda Expressions",
    "difficulty": "medium"
  },
  {
    "id": 18,
    "question": "Which takes no args but produces result?",
    "options": [
      "Consumer",
      "Supplier",
      "Function",
      "Runnable"
    ],
    "correctAnswer": "B",
    "explanation": "Generates values on demand.",
    "topic": "Lambda Expressions",
    "difficulty": "medium"
  },
  {
    "id": 19,
    "question": "Purpose of Predicate?",
    "options": [
      "Produce results",
      "Consume values",
      "Filter elements",
      "Transform values"
    ],
    "correctAnswer": "C",
    "explanation": "Tests conditions.",
    "topic": "Lambda Expressions",
    "difficulty": "medium"
  },
  {
    "id": 20,
    "question": "Which consumes two inputs?",
    "options": [
      "BiConsumer",
      "BiFunction",
      "BiPredicate",
      "Comparator"
    ],
    "correctAnswer": "A",
    "explanation": "Binary version of Consumer.",
    "topic": "Lambda Expressions",
    "difficulty": "medium"
  },
  {
    "id": 21,
    "question": "Which Java version introduced annotations?",
    "options": [
      "Java 5",
      "Java 6",
      "Java 7",
      "Java 8"
    ],
    "correctAnswer": "A",
    "explanation": "For compile-time processing.",
    "topic": "Annotations",
    "difficulty": "medium"
  },
  {
    "id": 22,
    "question": "Annotation definition similar to?",
    "options": [
      "Method",
      "Class",
      "Interface",
      "Field"
    ],
    "correctAnswer": "C",
    "explanation": "Annotations are interface-like.",
    "topic": "Annotations",
    "difficulty": "medium"
  },
  {
    "id": 23,
    "question": "Not a predefined annotation?",
    "options": [
      "@Deprecated",
      "@Overriden",
      "@SafeVarargs",
      "@FunctionalInterface"
    ],
    "correctAnswer": "B",
    "explanation": "It's @Override.",
    "topic": "Annotations",
    "difficulty": "medium"
  },
  {
    "id": 24,
    "question": "Annotations on annotations called?",
    "options": [
      "Meta annotations",
      "False"
    ],
    "correctAnswer": "A",
    "explanation": "Like @Target, @Retention.",
    "topic": "Annotations",
    "difficulty": "hard"
  },
  {
    "id": 25,
    "question": "Parent class of annotation?",
    "options": [
      "Class",
      "Object",
      "Main",
      "Super"
    ],
    "correctAnswer": "B",
    "explanation": "All extend Object indirectly.",
    "topic": "Annotations",
    "difficulty": "medium"
  },
  {
    "id": 26,
    "question": "What is a Java Module?",
    "options": [
      "Self-contained package",
      "Organize code into units",
      "Compiled files",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "Encapsulates related code.",
    "topic": "Modules",
    "difficulty": "medium"
  },
  {
    "id": 27,
    "question": "Main benefit of modules?",
    "options": [
      "Performance",
      "Organization",
      "Security",
      "All"
    ],
    "correctAnswer": "D",
    "explanation": "Improves modularity.",
    "topic": "Modules",
    "difficulty": "medium"
  },
  {
    "id": 28,
    "question": "Declare module with?",
    "options": [
      "module keyword",
      ".module file",
      "package keyword",
      "None"
    ],
    "correctAnswer": "A",
    "explanation": "module-info.java file.",
    "topic": "Modules",
    "difficulty": "medium"
  },
  {
    "id": 29,
    "question": "Purpose of Optional class?",
    "options": [
      "Represent optional values",
      "Handle nulls",
      "Collection of optionals",
      "Functional ops"
    ],
    "correctAnswer": "A",
    "explanation": "Avoids NullPointerException.",
    "topic": "Optionals",
    "difficulty": "medium"
  },
  {
    "id": 30,
    "question": "Difference between of and ofNullable?",
    "options": [
      "of non-null, ofNullable nullable",
      "of empty on null, ofNullable wraps null",
      "of throws on null, ofNullable empty",
      "No difference"
    ],
    "correctAnswer": "C",
    "explanation": "Safe null handling.",
    "topic": "Optionals",
    "difficulty": "hard"
  },
  {
    "id": 31,
    "question": "Import ArrayList?",
    "options": [
      "java.util.ArrayList",
      "java.util.List",
      "java.collection.ArrayList",
      "java.array.ArrayList"
    ],
    "correctAnswer": "A",
    "explanation": "Standard import.",
    "topic": "Collections",
    "difficulty": "easy"
  },
  {
    "id": 32,
    "question": "Create ArrayList?",
    "options": [
      "new ArrayList()",
      "new ArrayList<>()",
      "ArrayList<>()",
      "All"
    ],
    "correctAnswer": "B",
    "explanation": "Generic with diamond.",
    "topic": "Collections",
    "difficulty": "easy"
  },
  {
    "id": 33,
    "question": "Add to ArrayList?",
    "options": [
      "add()",
      "append()",
      "[index]=",
      "insert()"
    ],
    "correctAnswer": "A",
    "explanation": "Dynamic addition.",
    "topic": "Collections",
    "difficulty": "easy"
  },
  {
    "id": 34,
    "question": "Size of ArrayList?",
    "options": [
      "length()",
      "size()",
      "count()",
      "getSize()"
    ],
    "correctAnswer": "B",
    "explanation": "Returns element count.",
    "topic": "Collections",
    "difficulty": "easy"
  },
  {
    "id": 35,
    "question": "Remove from ArrayList?",
    "options": [
      "remove(element)",
      "delete()",
      "removeAt(index)",
      "Both a&c"
    ],
    "correctAnswer": "D",
    "explanation": "Flexible removal.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 36,
    "question": "ArrayList vs Array?",
    "options": [
      "ArrayList fixed",
      "Array dynamic",
      "Array faster access",
      "ArrayList allows nulls only"
    ],
    "correctAnswer": "C",
    "explanation": "Arrays have direct indexing.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 37,
    "question": "Interface for sequences?",
    "options": [
      "Set",
      "List",
      "Comparator",
      "Collection"
    ],
    "correctAnswer": "B",
    "explanation": "Ordered collections.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 38,
    "question": "Must contain unique elements?",
    "options": [
      "Set",
      "List",
      "Array",
      "Collection"
    ],
    "correctAnswer": "A",
    "explanation": "No duplicates.",
    "topic": "Collections",
    "difficulty": "easy"
  },
  {
    "id": 39,
    "question": "Basic interface all inherit?",
    "options": [
      "Set",
      "Array",
      "List",
      "Collection"
    ],
    "correctAnswer": "D",
    "explanation": "Root interface.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 40,
    "question": "Static empty collections?",
    "options": [
      "EMPTY_SET",
      "EMPTY_LIST",
      "EMPTY_MAP",
      "All"
    ],
    "correctAnswer": "D",
    "explanation": "Utility constants.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 41,
    "question": "Which stores key-value?",
    "options": [
      "Hash table",
      "Map",
      "Array",
      "String"
    ],
    "correctAnswer": "B",
    "explanation": "Associates keys to values.",
    "topic": "Maps",
    "difficulty": "easy"
  },
  {
    "id": 42,
    "question": "Map implementation?",
    "options": [
      "ArrayList",
      "HashMap",
      "LinkedList",
      "DynamicList"
    ],
    "correctAnswer": "B",
    "explanation": "Common unordered map.",
    "topic": "Maps",
    "difficulty": "easy"
  },
  {
    "id": 43,
    "question": "Remove all from map?",
    "options": [
      "delete()",
      "remove()",
      "clear()",
      "removeAll()"
    ],
    "correctAnswer": "C",
    "explanation": "Empties the map.",
    "topic": "Maps",
    "difficulty": "easy"
  },
  {
    "id": 44,
    "question": "Get element by key?",
    "options": [
      "search()",
      "get()",
      "set()",
      "look()"
    ],
    "correctAnswer": "B",
    "explanation": "Retrieves value.",
    "topic": "Maps",
    "difficulty": "easy"
  },
  {
    "id": 45,
    "question": "Set of all keys?",
    "options": [
      "getAll()",
      "getKeys()",
      "keyall()",
      "keySet()"
    ],
    "correctAnswer": "D",
    "explanation": "Returns key view.",
    "topic": "Maps",
    "difficulty": "medium"
  },
  {
    "id": 46,
    "question": "Add key-value?",
    "options": [
      "put()",
      "set()",
      "redo()",
      "add()"
    ],
    "correctAnswer": "A",
    "explanation": "Inserts or updates.",
    "topic": "Maps",
    "difficulty": "easy"
  },
  {
    "id": 47,
    "question": "Output of HashMap print? HashMap obj = new HashMap(); obj.put(\"A\", 1); obj.put(\"B\", 2); obj.put(\"C\", 3); System.out.println(obj);",
    "options": [
      "{A 1, B 1, C 1}",
      "{A, B, C}",
      "{A-1, B-1, C-1}",
      "{A=1, B=2, C=3}"
    ],
    "correctAnswer": "D",
    "explanation": "Standard toString format.",
    "topic": "Maps",
    "difficulty": "medium"
  },
  {
    "id": 48,
    "question": "keySet() output?",
    "options": [
      "[A, B, C]",
      "{A, B, C}",
      "{1,2,3}",
      "[1,2,3]"
    ],
    "correctAnswer": "A",
    "explanation": "Array-like set.",
    "topic": "Maps",
    "difficulty": "medium"
  },
  {
    "id": 49,
    "question": "get(\"B\")?",
    "options": [
      "1",
      "2",
      "3",
      "null"
    ],
    "correctAnswer": "B",
    "explanation": "Matches key.",
    "topic": "Maps",
    "difficulty": "easy"
  },
  {
    "id": 50,
    "question": "TreeMap entrySet()?",
    "options": [
      "[A,B,C]",
      "[1,2,3]",
      "{A=1,B=2,C=3}",
      "[A=1,B=2,C=3]"
    ],
    "correctAnswer": "D",
    "explanation": "Sorted entries.",
    "topic": "Maps",
    "difficulty": "medium"
  },
  {
    "id": 51,
    "question": "hasNext() return type?",
    "options": [
      "Integer",
      "double",
      "boolean",
      "Collections"
    ],
    "correctAnswer": "C",
    "explanation": "Checks next existence.",
    "topic": "Iterators",
    "difficulty": "easy"
  },
  {
    "id": 52,
    "question": "Iterator start?",
    "options": [
      "start()",
      "begin()",
      "iteratorSet()",
      "iterator()"
    ],
    "correctAnswer": "D",
    "explanation": "Collection method.",
    "topic": "Iterators",
    "difficulty": "easy"
  },
  {
    "id": 53,
    "question": "Move to next?",
    "options": [
      "next()",
      "move()",
      "shuffle()",
      "hasNext()"
    ],
    "correctAnswer": "A",
    "explanation": "Retrieves next.",
    "topic": "Iterators",
    "difficulty": "easy"
  },
  {
    "id": 54,
    "question": "Iterator only for List?",
    "options": [
      "Setiterator",
      "ListIterator",
      "Literator",
      "None"
    ],
    "correctAnswer": "B",
    "explanation": "Bidirectional for lists.",
    "topic": "Iterators",
    "difficulty": "medium"
  },
  {
    "id": 55,
    "question": "previousIndex()?",
    "options": [
      "previous()",
      "previousIndex()",
      "back()",
      "goBack()"
    ],
    "correctAnswer": "B",
    "explanation": "Index of prior element.",
    "topic": "Iterators",
    "difficulty": "medium"
  },
  {
    "id": 56,
    "question": "Keywords for synchronization?",
    "options": [
      "synchronize",
      "syn",
      "synch",
      "synchronized"
    ],
    "correctAnswer": "D",
    "explanation": "Blocks or methods.",
    "topic": "Concurrency",
    "difficulty": "easy"
  },
  {
    "id": 57,
    "question": "Avoid polling?",
    "options": [
      "wait()",
      "notify()",
      "notifyAll()",
      "All"
    ],
    "correctAnswer": "D",
    "explanation": "Wait/notify for coordination.",
    "topic": "Concurrency",
    "difficulty": "medium"
  },
  {
    "id": 58,
    "question": "Go to sleep on monitor?",
    "options": [
      "wait()",
      "notify()",
      "notifyAll()",
      "sleep()"
    ],
    "correctAnswer": "A",
    "explanation": "Releases lock temporarily.",
    "topic": "Concurrency",
    "difficulty": "medium"
  },
  {
    "id": 59,
    "question": "Wake first thread?",
    "options": [
      "wake()",
      "notify()",
      "start()",
      "notifyAll()"
    ],
    "correctAnswer": "B",
    "explanation": "Wakes one waiting thread.",
    "topic": "Concurrency",
    "difficulty": "medium"
  },
  {
    "id": 60,
    "question": "Wake all threads?",
    "options": [
      "wakeAll()",
      "notify()",
      "start()",
      "notifyAll()"
    ],
    "correctAnswer": "D",
    "explanation": "Wakes all waiters.",
    "topic": "Concurrency",
    "difficulty": "medium"
  },
  {
    "id": 61,
    "question": "Synchronization definition?",
    "options": [
      "Handle shared resource access",
      "Simultaneous access",
      "Method multi-thread access",
      "Many threads info access"
    ],
    "correctAnswer": "A",
    "explanation": "Prevents race conditions.",
    "topic": "Concurrency",
    "difficulty": "medium"
  },
  {
    "id": 62,
    "question": "Thread priority method?",
    "options": [
      "get()",
      "ThreadPriority()",
      "getPriority()",
      "getThreadPriority()"
    ],
    "correctAnswer": "C",
    "explanation": "Returns 1-10 value.",
    "topic": "Threads",
    "difficulty": "medium"
  },
  {
    "id": 63,
    "question": "Suspend thread?",
    "options": [
      "sleep()",
      "terminate()",
      "suspend()",
      "stop()"
    ],
    "correctAnswer": "A",
    "explanation": "Pauses for time.",
    "topic": "Threads",
    "difficulty": "medium"
  },
  {
    "id": 64,
    "question": "Check if running?",
    "options": [
      "isAlive()",
      "Join()",
      "isRunning()",
      "Alive()"
    ],
    "correctAnswer": "A",
    "explanation": "Active status.",
    "topic": "Threads",
    "difficulty": "medium"
  },
  {
    "id": 65,
    "question": "Current thread name set? t.setName(\"New\"); System.out.println(t);",
    "options": [
      "[5,main]",
      "[New,5]",
      "[main,5,main]",
      "[New,5,main]"
    ],
    "correctAnswer": "D",
    "explanation": "Format: [name,priority,group].",
    "topic": "Threads",
    "difficulty": "medium"
  },
  {
    "id": 66,
    "question": "getName()? t.setName(\"New\"); print(t.getName())",
    "options": [
      "main",
      "Thread",
      "New",
      "Full"
    ],
    "correctAnswer": "C",
    "explanation": "Updated name.",
    "topic": "Threads",
    "difficulty": "easy"
  },
  {
    "id": 67,
    "question": "getPriority()? print(t.getPriority())",
    "options": [
      "0",
      "1",
      "4",
      "5"
    ],
    "correctAnswer": "D",
    "explanation": "Default normal.",
    "topic": "Threads",
    "difficulty": "easy"
  },
  {
    "id": 68,
    "question": "isAlive()? print(t.isAlive())",
    "options": [
      "0",
      "1",
      "true",
      "false"
    ],
    "correctAnswer": "C",
    "explanation": "Main thread active.",
    "topic": "Threads",
    "difficulty": "easy"
  },
  {
    "id": 69,
    "question": "Output of interrupted thread?",
    "options": [
      "true",
      "false",
      "Main thread interrupted",
      "None"
    ],
    "correctAnswer": "C",
    "explanation": "Detects flag.",
    "topic": "Threads",
    "difficulty": "medium"
  },
  {
    "id": 70,
    "question": "Non-interrupted?",
    "options": [
      "true",
      "false",
      "Interrupted",
      "None"
    ],
    "correctAnswer": "B",
    "explanation": "No flag set.",
    "topic": "Threads",
    "difficulty": "medium"
  },
  {
    "id": 71,
    "question": "Volatile purpose?",
    "options": [
      "Thread-safe variable",
      "Prevent compiler optimization",
      "Both",
      "None"
    ],
    "correctAnswer": "C",
    "explanation": "No caching, visibility guarantee.",
    "topic": "Concurrency",
    "difficulty": "hard"
  },
  {
    "id": 72,
    "question": "What is Maven?",
    "options": [
      "Library",
      "Framework",
      "Build Tool",
      "IDE"
    ],
    "correctAnswer": "C",
    "explanation": "Build automation tool for Java projects.",
    "topic": "Maven",
    "difficulty": "easy"
  },
  {
    "id": 73,
    "question": "Core config file?",
    "options": [
      "mvn.xml",
      "pom.xml",
      "project.xml",
      "config.xml"
    ],
    "correctAnswer": "B",
    "explanation": "Project Object Model file.",
    "topic": "Maven",
    "difficulty": "easy"
  },
  {
    "id": 74,
    "question": "mvn clean?",
    "options": [
      "Delete target/",
      "Compile",
      "Download deps",
      "Deploy"
    ],
    "correctAnswer": "A",
    "explanation": "Removes build artifacts.",
    "topic": "Maven",
    "difficulty": "easy"
  },
  {
    "id": 75,
    "question": "Packaging phase?",
    "options": [
      "compile",
      "install",
      "package",
      "validate"
    ],
    "correctAnswer": "C",
    "explanation": "Creates JAR/WAR files.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 76,
    "question": "Maven repository?",
    "options": [
      "Class storage",
      "Version tool",
      "Doc place",
      "Binary storage"
    ],
    "correctAnswer": "D",
    "explanation": "Stores project artifacts.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 77,
    "question": "Compile and install?",
    "options": [
      "mvn clean install",
      "mvn compile",
      "mvn package",
      "mvn deploy"
    ],
    "correctAnswer": "A",
    "explanation": "Cleans, compiles, and installs.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 78,
    "question": "Default resources dir?",
    "options": [
      "/src/main/resources",
      "/src/main/java",
      "/src/resources",
      "/resources"
    ],
    "correctAnswer": "A",
    "explanation": "Standard Maven directory layout.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 79,
    "question": "Compiler plugin?",
    "options": [
      "maven-compiler-plugin",
      "maven-source",
      "maven-build",
      "maven-java"
    ],
    "correctAnswer": "A",
    "explanation": "Compiles Java source code.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 80,
    "question": "Not a repo type?",
    "options": [
      "Local",
      "Central",
      "Remote",
      "Distributed"
    ],
    "correctAnswer": "D",
    "explanation": "Maven has local, central, and remote repos.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 81,
    "question": "mvn validate?",
    "options": [
      "Check project info",
      "Compile",
      "Run tests",
      "Package"
    ],
    "correctAnswer": "A",
    "explanation": "Validates project structure.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 82,
    "question": "Pure function?",
    "options": [
      "Depends on externals",
      "Same input/output, no side effects",
      "Modifies state",
      "No return"
    ],
    "correctAnswer": "B",
    "explanation": "Deterministic with no side effects.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 83,
    "question": "Immutability?",
    "options": [
      "Data unchangeable",
      "Variables free",
      "One function change",
      "Functions immutable"
    ],
    "correctAnswer": "A",
    "explanation": "Objects cannot be modified after creation.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 84,
    "question": "Key feature?",
    "options": [
      "Inheritance",
      "Mutable state",
      "Higher-order functions",
      "Imperative loops"
    ],
    "correctAnswer": "C",
    "explanation": "Functions as first-class citizens.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 85,
    "question": "Higher-order function?",
    "options": [
      "Max value",
      "Takes/returns function",
      "Infinite run",
      "Global vars"
    ],
    "correctAnswer": "B",
    "explanation": "Functions that operate on other functions.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 86,
    "question": "Side effect?",
    "options": [
      "Returns value",
      "State change/external interaction",
      "No return",
      "Never ends"
    ],
    "correctAnswer": "B",
    "explanation": "Modifies state outside function scope.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 87,
    "question": "Recursion?",
    "options": [
      "Self-call",
      "Global mod",
      "Loop",
      "Infinite"
    ],
    "correctAnswer": "A",
    "explanation": "Function calling itself.",
    "topic": "Functional Programming",
    "difficulty": "easy"
  },
  {
    "id": 88,
    "question": "Referential transparency?",
    "options": [
      "Global ref",
      "Same result same inputs",
      "No return",
      "OO in functions"
    ],
    "correctAnswer": "B",
    "explanation": "Expressions can be replaced with their values.",
    "topic": "Functional Programming",
    "difficulty": "hard"
  },
  {
    "id": 89,
    "question": "Discouraged?",
    "options": [
      "Immutable",
      "Side effects",
      "HOF",
      "Pure"
    ],
    "correctAnswer": "B",
    "explanation": "Side effects make code unpredictable.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 90,
    "question": "Currying?",
    "options": [
      "Multi-arg to single sequence",
      "Modify behavior",
      "Memo",
      "Multi recursion"
    ],
    "correctAnswer": "A",
    "explanation": "Transforming multi-argument functions.",
    "topic": "Functional Programming",
    "difficulty": "hard"
  },
  {
    "id": 91,
    "question": "Loops in FP?",
    "options": [
      "Common",
      "Recursion/HOF replace",
      "Global mod",
      "Side effects"
    ],
    "correctAnswer": "B",
    "explanation": "FP uses recursion instead of loops.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 92,
    "question": "HOF example?",
    "options": [
      "String input",
      "Number return",
      "Function arg",
      "Global mod"
    ],
    "correctAnswer": "C",
    "explanation": "Taking function as parameter.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 93,
    "question": "Map function?",
    "options": [
      "Transform list",
      "Filter",
      "Sort",
      "Modify in place"
    ],
    "correctAnswer": "A",
    "explanation": "Applies function to each element.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 94,
    "question": "Return type of lambda?",
    "options": [
      "String",
      "Object",
      "void",
      "Function"
    ],
    "correctAnswer": "D",
    "explanation": "Lambdas implement functional interfaces.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 95,
    "question": "New iteration method Java 8?",
    "options": [
      "for each",
      "foreach",
      "forEach()",
      "List.for()"
    ],
    "correctAnswer": "C",
    "explanation": "Stream API forEach method.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 96,
    "question": "SAM in Functional Interface?",
    "options": [
      "Single Ambivalue",
      "Single Abstract Method",
      "Simple Active",
      "Simple Abstract"
    ],
    "correctAnswer": "B",
    "explanation": "Functional interfaces have exactly one abstract method.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 97,
    "question": "When do exceptions in Java arise in code sequence?",
    "options": [
      "Run Time",
      "Compilation Time",
      "Can Occur Any Time",
      "None of the mentioned"
    ],
    "correctAnswer": "A",
    "explanation": "Exceptions in Java are run-time errors.",
    "topic": "Exception Handling",
    "difficulty": "easy"
  },
  {
    "id": 98,
    "question": "Which of these keywords is not a part of exception handling?",
    "options": [
      "try",
      "finally",
      "thrown",
      "catch"
    ],
    "correctAnswer": "C",
    "explanation": "Exception handling is managed via 5 keywords – try, catch, throws, throw and finally.",
    "topic": "Exception Handling",
    "difficulty": "easy"
  },
  {
    "id": 99,
    "question": "Which keyword is used to handle an exception in Java?",
    "options": [
      "try",
      "catch",
      "throw",
      "finally"
    ],
    "correctAnswer": "B",
    "explanation": "The 'catch' block is used to handle the exception.",
    "topic": "Exception Handling",
    "difficulty": "easy"
  },
  {
    "id": 100,
    "question": "Which of these is a superclass of all exception types in Java?",
    "options": [
      "Exception",
      "RuntimeException",
      "Throwable",
      "Error"
    ],
    "correctAnswer": "C",
    "explanation": "Throwable is the superclass of all errors and exceptions in the Java language.",
    "topic": "Exception Handling",
    "difficulty": "medium"
  },
  {
    "id": 101,
    "question": "Which of these is not a checked exception?",
    "options": [
      "IOException",
      "SQLException",
      "ArithmeticException",
      "ClassNotFoundException"
    ],
    "correctAnswer": "C",
    "explanation": "ArithmeticException is an unchecked exception, as it is derived from RuntimeException.",
    "topic": "Exception Handling",
    "difficulty": "medium"
  },
  {
    "id": 102,
    "question": "Which Java version introduced lambda expressions?",
    "options": [
      "Java 7",
      "Java 8",
      "Java 9",
      "Java 11"
    ],
    "correctAnswer": "B",
    "explanation": "Lambda expressions were introduced in Java 8.",
    "topic": "Lambda Expressions",
    "difficulty": "easy"
  },
  {
    "id": 103,
    "question": "What is the syntax for a basic lambda expression in Java?",
    "options": [
      "(parameter) -> expression",
      "(parameter) => expression",
      "lambda parameter: expression",
      "function(parameter) { expression }"
    ],
    "correctAnswer": "A",
    "explanation": "The basic lambda expression syntax is (parameter) -> expression.",
    "topic": "Lambda Expressions",
    "difficulty": "easy"
  },
  {
    "id": 104,
    "question": "Which functional interface is commonly used with lambda expressions?",
    "options": [
      "Runnable",
      "Callable",
      "Predicate",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "All these are functional interfaces commonly used with lambda expressions.",
    "topic": "Lambda Expressions",
    "difficulty": "medium"
  },
  {
    "id": 105,
    "question": "What is the purpose of the Optional class in Java?",
    "options": [
      "To handle exceptions",
      "To represent nullable values safely",
      "To perform IO operations",
      "To enable concurrent programming"
    ],
    "correctAnswer": "B",
    "explanation": "Optional class is used to represent nullable values safely and prevent null pointer exceptions.",
    "topic": "Optionals",
    "difficulty": "medium"
  },
  {
    "id": 106,
    "question": "Which annotation is used to suppress compiler warnings in Java?",
    "options": [
      "@Override",
      "@Deprecated",
      "@SuppressWarnings",
      "@FunctionalInterface"
    ],
    "correctAnswer": "C",
    "explanation": "@SuppressWarnings is used to suppress compiler warnings.",
    "topic": "Annotations",
    "difficulty": "easy"
  },
  {
    "id": 107,
    "question": "Which interface is at the root of the collection hierarchy?",
    "options": [
      "List",
      "Set",
      "Collection",
      "Map"
    ],
    "correctAnswer": "C",
    "explanation": "Collection is the root interface in the collection hierarchy.",
    "topic": "Collections",
    "difficulty": "easy"
  },
  {
    "id": 108,
    "question": "Which collection allows duplicate elements?",
    "options": [
      "Set",
      "List",
      "Map",
      "TreeSet"
    ],
    "correctAnswer": "B",
    "explanation": "List allows duplicate elements and maintains insertion order.",
    "topic": "Collections",
    "difficulty": "easy"
  },
  {
    "id": 109,
    "question": "Which of these is not a part of Java Collection framework?",
    "options": [
      "ArrayList",
      "Vector",
      "Hashtable",
      "Array"
    ],
    "correctAnswer": "D",
    "explanation": "Array is not part of the Java Collection framework.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 110,
    "question": "What is the difference between ArrayList and Array?",
    "options": [
      "ArrayList is resizable, Array is fixed size",
      "Array is resizable, ArrayList is fixed size",
      "Both are same",
      "None of the above"
    ],
    "correctAnswer": "A",
    "explanation": "ArrayList can grow and shrink dynamically, while arrays have fixed size.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 111,
    "question": "Which collection does not allow null values?",
    "options": [
      "ArrayList",
      "LinkedList",
      "TreeSet",
      "HashMap"
    ],
    "correctAnswer": "C",
    "explanation": "TreeSet does not allow null values as it needs to compare elements for sorting.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 112,
    "question": "Which interface provides LIFO (Last In First Out) operations?",
    "options": [
      "Queue",
      "Deque",
      "Stack",
      "List"
    ],
    "correctAnswer": "C",
    "explanation": "Stack provides LIFO operations with push() and pop() methods.",
    "topic": "Collections",
    "difficulty": "easy"
  },
  {
    "id": 113,
    "question": "Which method is used to iterate over a collection?",
    "options": [
      "iterator()",
      "listIterator()",
      "forEach()",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "All these methods can be used to iterate over collections.",
    "topic": "Iterators",
    "difficulty": "medium"
  },
  {
    "id": 114,
    "question": "Which collection maintains insertion order?",
    "options": [
      "HashSet",
      "TreeSet",
      "LinkedHashSet",
      "Set"
    ],
    "correctAnswer": "C",
    "explanation": "LinkedHashSet maintains insertion order while providing Set semantics.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 115,
    "question": "Which of these classes implement the Map interface?",
    "options": [
      "HashMap",
      "TreeMap",
      "LinkedHashMap",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "HashMap, TreeMap, and LinkedHashMap all implement the Map interface.",
    "topic": "Maps",
    "difficulty": "easy"
  },
  {
    "id": 116,
    "question": "Which method removes and returns the head of the queue?",
    "options": [
      "poll()",
      "remove()",
      "Both poll() and remove()",
      "peek()"
    ],
    "correctAnswer": "C",
    "explanation": "Both poll() and remove() methods remove and return the head of the queue.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 117,
    "question": "What is the purpose of the volatile keyword in Java?",
    "options": [
      "To make variables thread-safe",
      "To ensure visibility of changes across threads",
      "To synchronize methods",
      "To create immutable objects"
    ],
    "correctAnswer": "B",
    "explanation": "volatile ensures that changes to a variable are visible to all threads.",
    "topic": "Concurrency",
    "difficulty": "medium"
  },
  {
    "id": 118,
    "question": "Which method is used to start a thread in Java?",
    "options": [
      "run()",
      "start()",
      "execute()",
      "init()"
    ],
    "correctAnswer": "B",
    "explanation": "The start() method is used to start a new thread.",
    "topic": "Threads",
    "difficulty": "easy"
  },
  {
    "id": 119,
    "question": "What is synchronization in Java?",
    "options": [
      "A way to control thread access to shared resources",
      "A method to create threads",
      "A technique to improve performance",
      "A way to handle exceptions"
    ],
    "correctAnswer": "A",
    "explanation": "Synchronization controls access to shared resources to prevent thread interference.",
    "topic": "Concurrency",
    "difficulty": "medium"
  },
  {
    "id": 120,
    "question": "Which keyword is used for synchronization in Java?",
    "options": [
      "sync",
      "synchronized",
      "volatile",
      "atomic"
    ],
    "correctAnswer": "B",
    "explanation": "The synchronized keyword is used for synchronization in Java.",
    "topic": "Concurrency",
    "difficulty": "easy"
  },
  {
    "id": 121,
    "question": "Virtual threads were introduced in which Java version?",
    "options": [
      "Java 17",
      "Java 19",
      "Java 21",
      "Java 11"
    ],
    "correctAnswer": "B",
    "explanation": "Virtual threads were introduced as a preview feature in Java 19.",
    "topic": "Threads",
    "difficulty": "medium"
  },
  {
    "id": 122,
    "question": "What is the default Maven directory structure for Java source files?",
    "options": [
      "src/java",
      "src/main/java",
      "java/src",
      "main/src/java"
    ],
    "correctAnswer": "B",
    "explanation": "Maven follows the convention src/main/java for source files.",
    "topic": "Maven",
    "difficulty": "easy"
  },
  {
    "id": 123,
    "question": "Which file contains Maven project configuration?",
    "options": [
      "build.xml",
      "pom.xml",
      "maven.xml",
      "config.xml"
    ],
    "correctAnswer": "B",
    "explanation": "pom.xml (Project Object Model) contains Maven project configuration.",
    "topic": "Maven",
    "difficulty": "easy"
  },
  {
    "id": 124,
    "question": "What command is used to compile a Maven project?",
    "options": [
      "mvn build",
      "mvn compile",
      "mvn make",
      "mvn run"
    ],
    "correctAnswer": "B",
    "explanation": "mvn compile is used to compile a Maven project.",
    "topic": "Maven",
    "difficulty": "easy"
  },
  {
    "id": 125,
    "question": "Which Maven phase runs tests?",
    "options": [
      "compile",
      "test",
      "package",
      "install"
    ],
    "correctAnswer": "B",
    "explanation": "The test phase runs the unit tests.",
    "topic": "Maven",
    "difficulty": "easy"
  },
  {
    "id": 126,
    "question": "What is Maven's default packaging type?",
    "options": [
      "war",
      "ear",
      "jar",
      "zip"
    ],
    "correctAnswer": "C",
    "explanation": "Maven's default packaging type is jar.",
    "topic": "Maven",
    "difficulty": "easy"
  },
  {
    "id": 127,
    "question": "What is a pure function in functional programming?",
    "options": [
      "A function with no parameters",
      "A function that always returns the same output for the same input and has no side effects",
      "A function that modifies global state",
      "A function that uses loops"
    ],
    "correctAnswer": "B",
    "explanation": "A pure function has no side effects and always produces the same output for the same input.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 128,
    "question": "What is a higher-order function?",
    "options": [
      "A function with high complexity",
      "A function that takes other functions as arguments or returns them",
      "A function that runs faster",
      "A function with many parameters"
    ],
    "correctAnswer": "B",
    "explanation": "Higher-order functions can take functions as parameters or return functions.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 129,
    "question": "What does the map function do?",
    "options": [
      "Creates a new map",
      "Applies a function to each element and returns a new collection",
      "Sorts elements",
      "Filters elements"
    ],
    "correctAnswer": "B",
    "explanation": "map transforms each element by applying a function and returns a new collection.",
    "topic": "Functional Programming",
    "difficulty": "medium"
  },
  {
    "id": 130,
    "question": "What is currying in functional programming?",
    "options": [
      "A way to cook functions",
      "Transforming a function with multiple arguments into a series of functions with single arguments",
      "A way to optimize functions",
      "A debugging technique"
    ],
    "correctAnswer": "B",
    "explanation": "Currying transforms a function that takes multiple arguments into a series of functions each taking a single argument.",
    "topic": "Functional Programming",
    "difficulty": "hard"
  },
  {
    "id": 131,
    "question": "What does JDBC stand for?",
    "options": [
      "Java Database Connectivity",
      "Java Data Base Connection",
      "Java Database Connection",
      "Java Direct Base Connection"
    ],
    "correctAnswer": "A",
    "explanation": "JDBC stands for Java Database Connectivity.",
    "topic": "JDBC",
    "difficulty": "easy"
  },
  {
    "id": 132,
    "question": "Which interface is used to execute SQL queries in JDBC?",
    "options": [
      "Connection",
      "Statement",
      "ResultSet",
      "DriverManager"
    ],
    "correctAnswer": "B",
    "explanation": "Statement interface is used to execute SQL queries.",
    "topic": "JDBC",
    "difficulty": "medium"
  },
  {
    "id": 133,
    "question": "Which method is used to establish a database connection?",
    "options": [
      "DriverManager.getConnection()",
      "Connection.connect()",
      "Database.connect()",
      "JDBC.connect()"
    ],
    "correctAnswer": "A",
    "explanation": "DriverManager.getConnection() is used to establish a database connection.",
    "topic": "JDBC",
    "difficulty": "medium"
  },
  {
    "id": 134,
    "question": "Which interface represents the result of a database query?",
    "options": [
      "Statement",
      "Connection",
      "ResultSet",
      "PreparedStatement"
    ],
    "correctAnswer": "C",
    "explanation": "ResultSet interface represents the result of a database query.",
    "topic": "JDBC",
    "difficulty": "medium"
  },
  {
    "id": 135,
    "question": "What is the advantage of PreparedStatement over Statement?",
    "options": [
      "Better performance",
      "Prevents SQL injection",
      "Supports parameterized queries",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "PreparedStatement offers better performance, prevents SQL injection, and supports parameterized queries.",
    "topic": "JDBC",
    "difficulty": "medium"
  },
  {
    "id": 136,
    "question": "What is the Spring Framework?",
    "options": [
      "A web framework",
      "An application framework and inversion of control container",
      "A database framework",
      "A testing framework"
    ],
    "correctAnswer": "B",
    "explanation": "Spring is an application framework that provides inversion of control container.",
    "topic": "Spring Framework",
    "difficulty": "medium"
  },
  {
    "id": 137,
    "question": "What does IoC stand for in Spring?",
    "options": [
      "Internet of Code",
      "Inversion of Control",
      "Integration of Components",
      "Input Output Control"
    ],
    "correctAnswer": "B",
    "explanation": "IoC stands for Inversion of Control, a core principle of Spring.",
    "topic": "Spring Framework",
    "difficulty": "medium"
  },
  {
    "id": 138,
    "question": "Which annotation is used for dependency injection in Spring?",
    "options": [
      "@Inject",
      "@Autowired",
      "@Resource",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "All these annotations can be used for dependency injection in Spring.",
    "topic": "Spring Framework",
    "difficulty": "medium"
  },
  {
    "id": 139,
    "question": "What does AOP stand for?",
    "options": [
      "Aspect Oriented Programming",
      "Application Object Programming",
      "Abstract Object Programming",
      "Advanced Object Programming"
    ],
    "correctAnswer": "A",
    "explanation": "AOP stands for Aspect Oriented Programming.",
    "topic": "Spring Framework",
    "difficulty": "medium"
  },
  {
    "id": 140,
    "question": "Which annotation is used to create a REST controller in Spring?",
    "options": [
      "@Controller",
      "@RestController",
      "@RequestMapping",
      "@Component"
    ],
    "correctAnswer": "B",
    "explanation": "@RestController is specifically used for REST controllers.",
    "topic": "Spring Framework",
    "difficulty": "medium"
  },
  {
    "id": 141,
    "question": "What is the default scope of a Spring bean?",
    "options": [
      "prototype",
      "singleton",
      "request",
      "session"
    ],
    "correctAnswer": "B",
    "explanation": "The default scope of a Spring bean is singleton.",
    "topic": "Spring Framework",
    "difficulty": "medium"
  },
  {
    "id": 142,
    "question": "Which annotation is used to define a Spring configuration class?",
    "options": [
      "@Configuration",
      "@Component",
      "@Service",
      "@Repository"
    ],
    "correctAnswer": "A",
    "explanation": "@Configuration annotation is used to define configuration classes.",
    "topic": "Spring Framework",
    "difficulty": "medium"
  },
  {
    "id": 143,
    "question": "Which of the following is not a core interface of Hibernate?",
    "options": [
      "Configuration",
      "Criteria",
      "SessionManagement",
      "Session"
    ],
    "correctAnswer": "C",
    "explanation": "SessionManagement is not a core interface of Hibernate.",
    "topic": "Hibernate",
    "difficulty": "medium"
  },
  {
    "id": 144,
    "question": "SessionFactory is a thread-safe object.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "correctAnswer": "A",
    "explanation": "SessionFactory is a thread-safe object that can be accessed by multiple threads.",
    "topic": "Hibernate",
    "difficulty": "medium"
  },
  {
    "id": 145,
    "question": "Which method returns a proxy object in Hibernate?",
    "options": [
      "get()",
      "load()",
      "find()",
      "retrieve()"
    ],
    "correctAnswer": "B",
    "explanation": "load() method returns a proxy object in Hibernate.",
    "topic": "Hibernate",
    "difficulty": "medium"
  },
  {
    "id": 146,
    "question": "Which method always hits the database in Hibernate?",
    "options": [
      "load()",
      "get()",
      "Both",
      "Neither"
    ],
    "correctAnswer": "B",
    "explanation": "get() method always hits the database in Hibernate.",
    "topic": "Hibernate",
    "difficulty": "medium"
  },
  {
    "id": 147,
    "question": "What are the states of an object in Hibernate?",
    "options": [
      "Transient, Persistent, Detached",
      "New, Modified, Deleted",
      "Active, Inactive, Removed",
      "Created, Updated, Destroyed"
    ],
    "correctAnswer": "A",
    "explanation": "Hibernate objects have three states: Transient, Persistent, and Detached.",
    "topic": "Hibernate",
    "difficulty": "medium"
  },
  {
    "id": 148,
    "question": "Which annotation is used to mark a method as transactional in Hibernate?",
    "options": [
      "@Transaction",
      "@Transactional",
      "@Tx",
      "@TransactionScope"
    ],
    "correctAnswer": "B",
    "explanation": "@Transactional annotation is used to mark methods as transactional.",
    "topic": "Hibernate",
    "difficulty": "medium"
  },
  {
    "id": 149,
    "question": "What is the primary feature of Spring Boot?",
    "options": [
      "Simplifies data access",
      "Automates code generation",
      "Simplifies project setup",
      "Enhances UI design"
    ],
    "correctAnswer": "C",
    "explanation": "Spring Boot's primary feature is simplifying project setup with auto-configuration.",
    "topic": "Spring Boot",
    "difficulty": "medium"
  },
  {
    "id": 150,
    "question": "What does the @SpringBootApplication annotation do?",
    "options": [
      "Enables JDBC",
      "Configures a web application",
      "Combines @Configuration, @EnableAutoConfiguration, and @ComponentScan",
      "Starts a Spring context"
    ],
    "correctAnswer": "C",
    "explanation": "@SpringBootApplication combines three important annotations.",
    "topic": "Spring Boot",
    "difficulty": "medium"
  },
  {
    "id": 151,
    "question": "What are Spring Boot Starters?",
    "options": [
      "Dependency descriptors",
      "Configuration files",
      "Test utilities",
      "Database connections"
    ],
    "correctAnswer": "A",
    "explanation": "Spring Boot Starters are dependency descriptors that simplify adding dependencies.",
    "topic": "Spring Boot",
    "difficulty": "medium"
  },
  {
    "id": 152,
    "question": "What is the advantage of Spring Boot Actuator?",
    "options": [
      "Managing app profiles",
      "Enhancing app security",
      "Monitoring and managing app",
      "Application logging"
    ],
    "correctAnswer": "C",
    "explanation": "Spring Boot Actuator provides monitoring and management capabilities.",
    "topic": "Spring Boot",
    "difficulty": "medium"
  },
  {
    "id": 153,
    "question": "How does Spring Boot auto-configuration work?",
    "options": [
      "By scanning classpath and configuring beans automatically",
      "By reading XML files",
      "By manual configuration",
      "By environment variables"
    ],
    "correctAnswer": "A",
    "explanation": "Spring Boot auto-configuration works by scanning the classpath and configuring beans automatically.",
    "topic": "Spring Boot",
    "difficulty": "medium"
  },
  {
    "id": 154,
    "question": "Which embedded servers does Spring Boot support?",
    "options": [
      "Tomcat",
      "Jetty",
      "Undertow",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "Spring Boot supports Tomcat, Jetty, and Undertow as embedded servers.",
    "topic": "Spring Boot",
    "difficulty": "medium"
  },
  {
    "id": 155,
    "question": "What is Spring Data JPA?",
    "options": [
      "A database",
      "A framework that simplifies JPA usage",
      "An ORM tool",
      "A query language"
    ],
    "correctAnswer": "B",
    "explanation": "Spring Data JPA simplifies the use of JPA for data access.",
    "topic": "Spring Data",
    "difficulty": "medium"
  },
  {
    "id": 156,
    "question": "Which annotation is used to mark a class as a JPA repository?",
    "options": [
      "@Repository",
      "@JpaRepository",
      "@Entity",
      "@Table"
    ],
    "correctAnswer": "A",
    "explanation": "@Repository annotation is used to mark JPA repository classes.",
    "topic": "Spring Data",
    "difficulty": "medium"
  },
  {
    "id": 157,
    "question": "Which template class is used for MongoDB operations in Spring Data?",
    "options": [
      "MongoTemplate",
      "MongoOperations",
      "MongoDbTemplate",
      "MongoClient"
    ],
    "correctAnswer": "A",
    "explanation": "MongoTemplate is the main template class for MongoDB operations.",
    "topic": "Spring Data",
    "difficulty": "medium"
  },
  {
    "id": 158,
    "question": "What is the main difference between Spring Data JPA and Spring Data JDBC?",
    "options": [
      "JPA uses ORM, JDBC is simpler without ORM complexity",
      "JDBC is faster",
      "JPA is newer",
      "No difference"
    ],
    "correctAnswer": "A",
    "explanation": "Spring Data JDBC is simpler and doesn't have the complexity of ORM that JPA has.",
    "topic": "Spring Data",
    "difficulty": "medium"
  },
  {
    "id": 159,
    "question": "Which of the following is a primary advantage of using microservices?",
    "options": [
      "Centralized data management",
      "Scalability",
      "Simplified deployment",
      "Reduced network calls"
    ],
    "correctAnswer": "B",
    "explanation": "One of the primary advantages of microservices is scalability.",
    "topic": "Microservices",
    "difficulty": "medium"
  },
  {
    "id": 160,
    "question": "What is the purpose of Spring Cloud Gateway?",
    "options": [
      "Service discovery",
      "API gateway and routing",
      "Configuration management",
      "Circuit breaking"
    ],
    "correctAnswer": "B",
    "explanation": "Spring Cloud Gateway provides API gateway functionality and routing.",
    "topic": "Microservices",
    "difficulty": "medium"
  },
  {
    "id": 161,
    "question": "What is the primary purpose of Spring Cloud Config Server?",
    "options": [
      "Service discovery",
      "Centralized configuration management",
      "Load balancing",
      "Circuit breaking"
    ],
    "correctAnswer": "B",
    "explanation": "Spring Cloud Config Server provides centralized configuration management.",
    "topic": "Microservices",
    "difficulty": "medium"
  },
  {
    "id": 162,
    "question": "Which pattern helps prevent system failures from cascading?",
    "options": [
      "Singleton",
      "Circuit Breaker",
      "Observer",
      "Factory"
    ],
    "correctAnswer": "B",
    "explanation": "Circuit Breaker pattern helps prevent cascading failures.",
    "topic": "Microservices",
    "difficulty": "medium"
  },
  {
    "id": 163,
    "question": "What is Spring Cloud OpenFeign used for?",
    "options": [
      "Service discovery",
      "Declarative REST clients",
      "Configuration management",
      "Load balancing"
    ],
    "correctAnswer": "B",
    "explanation": "Spring Cloud OpenFeign is used for creating declarative REST clients.",
    "topic": "Microservices",
    "difficulty": "medium"
  },
  {
    "id": 164,
    "question": "For service discovery in Spring Boot microservices, which tool is commonly used?",
    "options": [
      "Eureka",
      "Zookeeper",
      "Consul",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "Eureka, Zookeeper, and Consul can all be used for service discovery.",
    "topic": "Microservices",
    "difficulty": "medium"
  },
  {
    "id": 165,
    "question": "Which of the following is not introduced with Java 8?",
    "options": [
      "Stream API",
      "Serialization",
      "Spliterator",
      "Lambda Expression"
    ],
    "correctAnswer": "B",
    "explanation": "Serialization was introduced in earlier versions of Java, not Java 8.",
    "topic": "Java 8 Features",
    "difficulty": "medium"
  },
  {
    "id": 166,
    "question": "What are the two types of Streams offered by Java 8?",
    "options": [
      "sequential and parallel",
      "sequential and random",
      "parallel and random",
      "random and synchronized"
    ],
    "correctAnswer": "A",
    "explanation": "Java 8 provides sequential and parallel streams for processing collections.",
    "topic": "Streams",
    "difficulty": "medium"
  },
  {
    "id": 167,
    "question": "Which method is used to create an infinite stream?",
    "options": [
      "Stream.infinite()",
      "Stream.generate()",
      "Stream.iterate()",
      "Both Stream.generate() and Stream.iterate()"
    ],
    "correctAnswer": "D",
    "explanation": "Both Stream.generate() and Stream.iterate() can create infinite streams.",
    "topic": "Streams",
    "difficulty": "medium"
  },
  {
    "id": 168,
    "question": "Which functional interface returns a boolean value?",
    "options": [
      "Consumer",
      "Supplier",
      "Function",
      "Predicate"
    ],
    "correctAnswer": "D",
    "explanation": "Predicate functional interface returns a boolean value based on some condition.",
    "topic": "Functional Interfaces",
    "difficulty": "medium"
  },
  {
    "id": 169,
    "question": "What is the use of the Supplier functional interface?",
    "options": [
      "To consume values",
      "To supply values without taking any input",
      "To transform values",
      "To test conditions"
    ],
    "correctAnswer": "B",
    "explanation": "Supplier functional interface provides values without taking any input parameters.",
    "topic": "Functional Interfaces",
    "difficulty": "medium"
  },
  {
    "id": 170,
    "question": "Which symbol is used to define a method reference in Java?",
    "options": [
      "->",
      "::",
      "=>",
      "//"
    ],
    "correctAnswer": "B",
    "explanation": "The :: (double colon) operator is used for method references in Java 8.",
    "topic": "Method References",
    "difficulty": "easy"
  },
  {
    "id": 171,
    "question": "Which method in Stream API is used to perform a reduction?",
    "options": [
      "reduce()",
      "accumulate()",
      "collect()",
      "gather()"
    ],
    "correctAnswer": "A",
    "explanation": "The reduce() method performs a reduction on stream elements using an associative accumulation function.",
    "topic": "Streams",
    "difficulty": "medium"
  },
  {
    "id": 172,
    "question": "Which of the following is a terminal operation?",
    "options": [
      "map()",
      "filter()",
      "forEach()",
      "peek()"
    ],
    "correctAnswer": "C",
    "explanation": "forEach() is a terminal operation that consumes the stream.",
    "topic": "Streams",
    "difficulty": "medium"
  },
  {
    "id": 173,
    "question": "Which lifecycle phase packages the compiled source code?",
    "options": [
      "compile",
      "install",
      "package",
      "validate"
    ],
    "correctAnswer": "C",
    "explanation": "The package phase takes compiled code and packages it into distributable format like JAR.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 174,
    "question": "What are the three built-in build lifecycles in Maven?",
    "options": [
      "Clean, Build, Deploy",
      "Clean, Default, Site",
      "Validate, Compile, Test",
      "Build, Package, Install"
    ],
    "correctAnswer": "B",
    "explanation": "Maven has three built-in lifecycles: Clean (project cleaning), Default (project deployment), Site (documentation).",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 175,
    "question": "Which Maven plugin is used for compiling Java sources?",
    "options": [
      "maven-compile-plugin",
      "maven-compiler-plugin",
      "maven-java-plugin",
      "maven-source-plugin"
    ],
    "correctAnswer": "B",
    "explanation": "The maven-compiler-plugin is used to compile Java source files.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 176,
    "question": "Which of the following is NOT a type of Maven repository?",
    "options": [
      "Local",
      "Central",
      "Remote",
      "Global"
    ],
    "correctAnswer": "D",
    "explanation": "Maven has Local, Central, and Remote repositories. There's no Global repository type.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 177,
    "question": "In which directory are resource files placed by default?",
    "options": [
      "src/resources",
      "src/main/resources",
      "resources/main",
      "main/resources"
    ],
    "correctAnswer": "B",
    "explanation": "Maven follows standard directory layout with resources in src/main/resources.",
    "topic": "Maven",
    "difficulty": "medium"
  },
  {
    "id": 178,
    "question": "Which annotation is used to create a Spring MVC controller class?",
    "options": [
      "@Component",
      "@Service",
      "@Controller",
      "@Repository"
    ],
    "correctAnswer": "C",
    "explanation": "@Controller annotation indicates that a class is a Spring MVC controller.",
    "topic": "Spring MVC",
    "difficulty": "easy"
  },
  {
    "id": 179,
    "question": "Which of the following handles HTTP requests in Spring MVC?",
    "options": [
      "HandlerMapping",
      "DispatcherServlet",
      "ViewResolver",
      "Controller"
    ],
    "correctAnswer": "B",
    "explanation": "DispatcherServlet is responsible for dispatching incoming HTTP requests to appropriate controllers.",
    "topic": "Spring MVC",
    "difficulty": "medium"
  },
  {
    "id": 180,
    "question": "Which annotation binds a method parameter to a named attribute?",
    "options": [
      "@RequestParam",
      "@PathVariable",
      "@ModelAttribute",
      "@RequestBody"
    ],
    "correctAnswer": "C",
    "explanation": "@ModelAttribute binds a method parameter to a named attribute.",
    "topic": "Spring MVC",
    "difficulty": "medium"
  },
  {
    "id": 181,
    "question": "How can you handle exceptions in Spring MVC?",
    "options": [
      "@ExceptionHandler",
      "@ErrorHandler",
      "@HandleException",
      "@CatchException"
    ],
    "correctAnswer": "A",
    "explanation": "@ExceptionHandler annotation is used to handle exceptions in Spring MVC.",
    "topic": "Spring MVC",
    "difficulty": "medium"
  },
  {
    "id": 182,
    "question": "What does the @ResponseBody annotation do?",
    "options": [
      "Reads request body",
      "Writes return value to HTTP response body",
      "Maps request parameters",
      "Handles file uploads"
    ],
    "correctAnswer": "B",
    "explanation": "@ResponseBody tells controller that return value should be written directly to HTTP response body.",
    "topic": "Spring MVC",
    "difficulty": "medium"
  },
  {
    "id": 183,
    "question": "Which annotation indicates a method should handle HTTP POST requests?",
    "options": [
      "@PostMapping",
      "@RequestMapping",
      "@Post",
      "@HandlePost"
    ],
    "correctAnswer": "A",
    "explanation": "@PostMapping is a shortcut for @RequestMapping(method = RequestMethod.POST).",
    "topic": "Spring MVC",
    "difficulty": "easy"
  },
  {
    "id": 184,
    "question": "How do you access request parameters in a controller method?",
    "options": [
      "@RequestParam",
      "@Param",
      "@Parameter",
      "@RequestParameter"
    ],
    "correctAnswer": "A",
    "explanation": "@RequestParam annotation binds request parameter value to method parameter.",
    "topic": "Spring MVC",
    "difficulty": "easy"
  },
  {
    "id": 185,
    "question": "Which collection provides constant time performance for basic operations?",
    "options": [
      "ArrayList",
      "LinkedList",
      "HashMap",
      "TreeMap"
    ],
    "correctAnswer": "C",
    "explanation": "HashMap provides constant time O(1) performance for basic operations like get and put.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 186,
    "question": "Which collection is synchronized in Java?",
    "options": [
      "ArrayList",
      "HashMap",
      "Vector",
      "HashSet"
    ],
    "correctAnswer": "C",
    "explanation": "Vector is synchronized and thread-safe, unlike ArrayList.",
    "topic": "Collections",
    "difficulty": "medium"
  },
  {
    "id": 187,
    "question": "Which method is used to sort a collection?",
    "options": [
      "Collections.sort()",
      "Collection.sort()",
      "Arrays.sort()",
      "List.sort()"
    ],
    "correctAnswer": "A",
    "explanation": "Collections.sort() is used to sort collections like Lists.",
    "topic": "Collections",
    "difficulty": "easy"
  },
  {
    "id": 188,
    "question": "What is the difference between fail-fast and fail-safe iterators?",
    "options": [
      "No difference",
      "Fail-fast throws exception on modification, fail-safe doesn't",
      "Fail-safe is faster",
      "Fail-fast works only with Lists"
    ],
    "correctAnswer": "B",
    "explanation": "Fail-fast iterators throw ConcurrentModificationException if collection is modified during iteration.",
    "topic": "Iterators",
    "difficulty": "medium"
  },
  {
    "id": 189,
    "question": "What is the purpose of Hibernate Configuration file?",
    "options": [
      "Define entity mappings",
      "Configure database connection and Hibernate properties",
      "Define queries",
      "Handle transactions"
    ],
    "correctAnswer": "B",
    "explanation": "Hibernate configuration file contains database connection and Hibernate-specific properties.",
    "topic": "Hibernate",
    "difficulty": "medium"
  },
  {
    "id": 190,
    "question": "What is HQL?",
    "options": [
      "Hibernate Query Language",
      "HTML Query Language",
      "HTTP Query Language",
      "Hybrid Query Language"
    ],
    "correctAnswer": "A",
    "explanation": "HQL stands for Hibernate Query Language, used for database queries in Hibernate.",
    "topic": "Hibernate",
    "difficulty": "easy"
  },
  {
    "id": 191,
    "question": "Which annotation is used to mark a class as Hibernate entity?",
    "options": [
      "@Entity",
      "@Table",
      "@Hibernate",
      "@Persistent"
    ],
    "correctAnswer": "A",
    "explanation": "@Entity annotation marks a class as a Hibernate entity.",
    "topic": "Hibernate",
    "difficulty": "easy"
  },
  {
    "id": 192,
    "question": "What is the difference between get() and load() methods?",
    "options": [
      "No difference",
      "get() returns proxy, load() hits database",
      "load() returns proxy, get() hits database",
      "Both are same"
    ],
    "correctAnswer": "C",
    "explanation": "load() returns proxy object while get() always hits the database.",
    "topic": "Hibernate",
    "difficulty": "medium"
  },
  {
    "id": 193,
    "question": "What is the purpose of @ConditionalOnProperty annotation?",
    "options": [
      "Define properties",
      "Conditionally enable beans based on property",
      "Read properties",
      "Validate properties"
    ],
    "correctAnswer": "B",
    "explanation": "@ConditionalOnProperty conditionally enables or disables beans based on property values.",
    "topic": "Spring Boot",
    "difficulty": "medium"
  },
  {
    "id": 194,
    "question": "Which Spring Boot starter is used for web applications?",
    "options": [
      "spring-boot-starter-web",
      "spring-boot-starter-mvc",
      "spring-boot-starter-http",
      "spring-boot-starter-rest"
    ],
    "correctAnswer": "A",
    "explanation": "spring-boot-starter-web is used for building web applications including RESTful services.",
    "topic": "Spring Boot",
    "difficulty": "easy"
  },
  {
    "id": 195,
    "question": "What is the purpose of @Profile annotation?",
    "options": [
      "Performance profiling",
      "Specify which beans should be loaded in different environments",
      "Security profiling",
      "Memory profiling"
    ],
    "correctAnswer": "B",
    "explanation": "@Profile annotation conditionally loads beans based on active profiles.",
    "topic": "Spring Framework",
    "difficulty": "medium"
  },
  {
    "id": 196,
    "question": "Which class is used for reading character streams in Java?",
    "options": [
      "FileInputStream",
      "FileReader",
      "BufferedInputStream",
      "DataInputStream"
    ],
    "correctAnswer": "B",
    "explanation": "FileReader is used for reading character streams from files.",
    "topic": "File I/O",
    "difficulty": "easy"
  },
  {
    "id": 197,
    "question": "What does Files.lines(Path path) do in Java 8?",
    "options": [
      "Reads filenames",
      "Reads all lines as Stream",
      "Counts lines",
      "Creates files"
    ],
    "correctAnswer": "B",
    "explanation": "Files.lines() reads all lines from a file as a Stream in Java 8.",
    "topic": "File I/O",
    "difficulty": "medium"
  },
  {
    "id": 198,
    "question": "Which package contains NIO.2 file operations?",
    "options": [
      "java.io",
      "java.nio",
      "java.nio.file",
      "java.util.file"
    ],
    "correctAnswer": "C",
    "explanation": "java.nio.file package contains NIO.2 file operations introduced in Java 7.",
    "topic": "File I/O",
    "difficulty": "medium"
  }
]