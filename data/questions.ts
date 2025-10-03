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
  // Exception Handling (1-5)
  {
    id: 1,
    question: "When do exceptions in Java arise in code sequence?",
    options: ["Run Time", "Compilation Time", "Can Occur Any Time", "None of the mentioned"],
    correctAnswer: "A",
    explanation: "Exceptions in Java are run-time errors.",
    topic: "Exception Handling",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Which of these keywords is not a part of exception handling?",
    options: ["try", "finally", "thrown", "catch"],
    correctAnswer: "C",
    explanation: "Exception handling is managed via 5 keywords – try, catch, throws, throw and finally.",
    topic: "Exception Handling",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "Which keyword is used to handle an exception in Java?",
    options: ["try", "catch", "throw", "finally"],
    correctAnswer: "B",
    explanation: "The 'catch' block is used to handle the exception.",
    topic: "Exception Handling",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Which of these is a superclass of all exception types in Java?",
    options: ["Exception", "RuntimeException", "Throwable", "Error"],
    correctAnswer: "C",
    explanation: "Throwable is the superclass of all errors and exceptions in the Java language.",
    topic: "Exception Handling",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Which of these is not a checked exception?",
    options: ["IOException", "SQLException", "ArithmeticException", "ClassNotFoundException"],
    correctAnswer: "C",
    explanation: "ArithmeticException is an unchecked exception, as it is derived from RuntimeException.",
    topic: "Exception Handling",
    difficulty: "medium"
  },

  // Lambda Expressions (6-9)
  {
    id: 6,
    question: "Which Java version introduced lambda expressions?",
    options: ["Java 7", "Java 8", "Java 9", "Java 11"],
    correctAnswer: "B",
    explanation: "Lambda expressions were introduced in Java 8.",
    topic: "Lambda Expressions",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "What is the syntax for a basic lambda expression in Java?",
    options: ["(parameter) -> expression", "(parameter) => expression", "lambda parameter: expression", "function(parameter) { expression }"],
    correctAnswer: "A",
    explanation: "The basic lambda expression syntax is (parameter) -> expression.",
    topic: "Lambda Expressions",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Which functional interface is commonly used with lambda expressions?",
    options: ["Runnable", "Callable", "Predicate", "All of the above"],
    correctAnswer: "D",
    explanation: "All these are functional interfaces commonly used with lambda expressions.",
    topic: "Lambda Expressions",
    difficulty: "medium"
  },

  // Optional (9)
  {
    id: 9,
    question: "What is the purpose of the Optional class in Java?",
    options: ["To handle exceptions", "To represent nullable values safely", "To perform IO operations", "To enable concurrent programming"],
    correctAnswer: "B",
    explanation: "Optional class is used to represent nullable values safely and prevent null pointer exceptions.",
    topic: "Optional",
    difficulty: "medium"
  },

  // Annotations (10)
  {
    id: 10,
    question: "Which annotation is used to suppress compiler warnings in Java?",
    options: ["@Override", "@Deprecated", "@SuppressWarnings", "@FunctionalInterface"],
    correctAnswer: "C",
    explanation: "@SuppressWarnings is used to suppress compiler warnings.",
    topic: "Annotations",
    difficulty: "easy"
  },

  // Collections (11-23)
  {
    id: 11,
    question: "Which interface is at the root of the collection hierarchy?",
    options: ["List", "Set", "Collection", "Map"],
    correctAnswer: "C",
    explanation: "Collection is the root interface in the collection hierarchy.",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "Which collection allows duplicate elements?",
    options: ["Set", "List", "Map", "TreeSet"],
    correctAnswer: "B",
    explanation: "List allows duplicate elements and maintains insertion order.",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 13,
    question: "Which of these is not a part of Java Collection framework?",
    options: ["ArrayList", "Vector", "Hashtable", "Array"],
    correctAnswer: "D",
    explanation: "Array is not part of the Java Collection framework.",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "What is the difference between ArrayList and Array?",
    options: ["ArrayList is resizable, Array is fixed size", "Array is resizable, ArrayList is fixed size", "Both are same", "None of the above"],
    correctAnswer: "A",
    explanation: "ArrayList can grow and shrink dynamically, while arrays have fixed size.",
    topic: "Collections",
    difficulty: "medium"
  },
  {
    id: 15,
    question: "Which collection does not allow null values?",
    options: ["ArrayList", "LinkedList", "TreeSet", "HashMap"],
    correctAnswer: "C",
    explanation: "TreeSet does not allow null values as it needs to compare elements for sorting.",
    topic: "Collections",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Which interface provides LIFO (Last In First Out) operations?",
    options: ["Queue", "Deque", "Stack", "List"],
    correctAnswer: "C",
    explanation: "Stack provides LIFO operations with push() and pop() methods.",
    topic: "Collections",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Which method is used to iterate over a collection?",
    options: ["iterator()", "listIterator()", "forEach()", "All of the above"],
    correctAnswer: "D",
    explanation: "All these methods can be used to iterate over collections.",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "Which collection maintains insertion order?",
    options: ["HashSet", "TreeSet", "LinkedHashSet", "Set"],
    correctAnswer: "C",
    explanation: "LinkedHashSet maintains insertion order while providing Set semantics.",
    topic: "Collections",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Which of these classes implement the Map interface?",
    options: ["HashMap", "TreeMap", "LinkedHashMap", "All of the above"],
    correctAnswer: "D",
    explanation: "HashMap, TreeMap, and LinkedHashMap all implement the Map interface.",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "Which method removes and returns the head of the queue?",
    options: ["poll()", "remove()", "Both poll() and remove()", "peek()"],
    correctAnswer: "C",
    explanation: "Both poll() and remove() methods remove and return the head of the queue.",
    topic: "Collections",
    difficulty: "medium"
  },

  // Concurrency (21-24)
  {
    id: 21,
    question: "What is the purpose of the volatile keyword in Java?",
    options: ["To make variables thread-safe", "To ensure visibility of changes across threads", "To synchronize methods", "To create immutable objects"],
    correctAnswer: "B",
    explanation: "volatile ensures that changes to a variable are visible to all threads.",
    topic: "Concurrency",
    difficulty: "medium"
  },
  {
    id: 22,
    question: "Which method is used to start a thread in Java?",
    options: ["run()", "start()", "execute()", "init()"],
    correctAnswer: "B",
    explanation: "The start() method is used to start a new thread.",
    topic: "Concurrency",
    difficulty: "easy"
  },
  {
    id: 23,
    question: "What is synchronization in Java?",
    options: ["A way to control thread access to shared resources", "A method to create threads", "A technique to improve performance", "A way to handle exceptions"],
    correctAnswer: "A",
    explanation: "Synchronization controls access to shared resources to prevent thread interference.",
    topic: "Concurrency",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "Which keyword is used for synchronization in Java?",
    options: ["sync", "synchronized", "volatile", "atomic"],
    correctAnswer: "B",
    explanation: "The synchronized keyword is used for synchronization in Java.",
    topic: "Concurrency",
    difficulty: "easy"
  },

  // Virtual Threads (25)
  {
    id: 25,
    question: "Virtual threads were introduced in which Java version?",
    options: ["Java 17", "Java 19", "Java 21", "Java 11"],
    correctAnswer: "B",
    explanation: "Virtual threads were introduced as a preview feature in Java 19.",
    topic: "Virtual Threads",
    difficulty: "hard"
  },

  // Maven (26-30)
  {
    id: 26,
    question: "What is the default Maven directory structure for Java source files?",
    options: ["src/java", "src/main/java", "java/src", "main/src/java"],
    correctAnswer: "B",
    explanation: "Maven follows the convention src/main/java for source files.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 27,
    question: "Which file contains Maven project configuration?",
    options: ["build.xml", "pom.xml", "maven.xml", "config.xml"],
    correctAnswer: "B",
    explanation: "pom.xml (Project Object Model) contains Maven project configuration.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "What command is used to compile a Maven project?",
    options: ["mvn build", "mvn compile", "mvn make", "mvn run"],
    correctAnswer: "B",
    explanation: "mvn compile is used to compile a Maven project.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 29,
    question: "Which Maven phase runs tests?",
    options: ["compile", "test", "package", "install"],
    correctAnswer: "B",
    explanation: "The test phase runs the unit tests.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 30,
    question: "What is Maven's default packaging type?",
    options: ["war", "ear", "jar", "zip"],
    correctAnswer: "C",
    explanation: "Maven's default packaging type is jar.",
    topic: "Maven",
    difficulty: "easy"
  },

  // Functional Programming (31-34)
  {
    id: 31,
    question: "What is a pure function in functional programming?",
    options: ["A function with no parameters", "A function that always returns the same output for the same input and has no side effects", "A function that modifies global state", "A function that uses loops"],
    correctAnswer: "B",
    explanation: "A pure function has no side effects and always produces the same output for the same input.",
    topic: "Functional Programming",
    difficulty: "medium"
  },
  {
    id: 32,
    question: "What is a higher-order function?",
    options: ["A function with high complexity", "A function that takes other functions as arguments or returns them", "A function that runs faster", "A function with many parameters"],
    correctAnswer: "B",
    explanation: "Higher-order functions can take functions as parameters or return functions.",
    topic: "Functional Programming",
    difficulty: "medium"
  },
  {
    id: 33,
    question: "What does the map function do?",
    options: ["Creates a new map", "Applies a function to each element and returns a new collection", "Sorts elements", "Filters elements"],
    correctAnswer: "B",
    explanation: "map transforms each element by applying a function and returns a new collection.",
    topic: "Functional Programming",
    difficulty: "medium"
  },
  {
    id: 34,
    question: "What is currying in functional programming?",
    options: ["A way to cook functions", "Transforming a function with multiple arguments into a series of functions with single arguments", "A way to optimize functions", "A debugging technique"],
    correctAnswer: "B",
    explanation: "Currying transforms a function that takes multiple arguments into a series of functions each taking a single argument.",
    topic: "Functional Programming",
    difficulty: "hard"
  },

  // JDBC (35-39)
  {
    id: 35,
    question: "What does JDBC stand for?",
    options: ["Java Database Connectivity", "Java Data Base Connection", "Java Database Connection", "Java Direct Base Connection"],
    correctAnswer: "A",
    explanation: "JDBC stands for Java Database Connectivity.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 36,
    question: "Which interface is used to execute SQL queries in JDBC?",
    options: ["Connection", "Statement", "ResultSet", "DriverManager"],
    correctAnswer: "B",
    explanation: "Statement interface is used to execute SQL queries.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 37,
    question: "Which method is used to establish a database connection?",
    options: ["DriverManager.getConnection()", "Connection.connect()", "Database.connect()", "JDBC.connect()"],
    correctAnswer: "A",
    explanation: "DriverManager.getConnection() is used to establish a database connection.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 38,
    question: "Which interface represents the result of a database query?",
    options: ["Statement", "Connection", "ResultSet", "PreparedStatement"],
    correctAnswer: "C",
    explanation: "ResultSet interface represents the result of a database query.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 39,
    question: "What is the advantage of PreparedStatement over Statement?",
    options: ["Better performance", "Prevents SQL injection", "Supports parameterized queries", "All of the above"],
    correctAnswer: "D",
    explanation: "PreparedStatement offers better performance, prevents SQL injection, and supports parameterized queries.",
    topic: "JDBC",
    difficulty: "medium"
  },

  // Spring Core (40-43)
  {
    id: 40,
    question: "What is the Spring Framework?",
    options: ["A web framework", "An application framework and inversion of control container", "A database framework", "A testing framework"],
    correctAnswer: "B",
    explanation: "Spring is an application framework that provides inversion of control container.",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 41,
    question: "What does IoC stand for in Spring?",
    options: ["Internet of Code", "Inversion of Control", "Integration of Components", "Input Output Control"],
    correctAnswer: "B",
    explanation: "IoC stands for Inversion of Control, a core principle of Spring.",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 42,
    question: "Which annotation is used for dependency injection in Spring?",
    options: ["@Inject", "@Autowired", "@Resource", "All of the above"],
    correctAnswer: "D",
    explanation: "All these annotations can be used for dependency injection in Spring.",
    topic: "Spring Core",
    difficulty: "medium"
  },

  // Spring AOP (43)
  {
    id: 43,
    question: "What does AOP stand for?",
    options: ["Aspect Oriented Programming", "Application Object Programming", "Abstract Object Programming", "Advanced Object Programming"],
    correctAnswer: "A",
    explanation: "AOP stands for Aspect Oriented Programming.",
    topic: "Spring AOP",
    difficulty: "medium"
  },

  // Spring MVC (44)
  {
    id: 44,
    question: "Which annotation is used to create a REST controller in Spring?",
    options: ["@Controller", "@RestController", "@RequestMapping", "@Component"],
    correctAnswer: "B",
    explanation: "@RestController is specifically used for REST controllers.",
    topic: "Spring MVC",
    difficulty: "easy"
  },

  // Spring Bean Scope (45)
  {
    id: 45,
    question: "What is the default scope of a Spring bean?",
    options: ["prototype", "singleton", "request", "session"],
    correctAnswer: "B",
    explanation: "The default scope of a Spring bean is singleton.",
    topic: "Spring Bean Scope",
    difficulty: "easy"
  },

  // Spring Configuration (46)
  {
    id: 46,
    question: "Which annotation is used to define a Spring configuration class?",
    options: ["@Configuration", "@Component", "@Service", "@Repository"],
    correctAnswer: "A",
    explanation: "@Configuration annotation is used to define configuration classes.",
    topic: "Spring Configuration",
    difficulty: "easy"
  },

  // Hibernate (47-51)
  {
    id: 47,
    question: "Which of the following is not a core interface of Hibernate?",
    options: ["Configuration", "Criteria", "SessionManagement", "Session"],
    correctAnswer: "C",
    explanation: "SessionManagement is not a core interface of Hibernate.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 48,
    question: "SessionFactory is a thread-safe object.",
    options: ["TRUE", "FALSE"],
    correctAnswer: "A",
    explanation: "SessionFactory is a thread-safe object that can be accessed by multiple threads.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 49,
    question: "Which method returns a proxy object in Hibernate?",
    options: ["get()", "load()", "find()", "retrieve()"],
    correctAnswer: "B",
    explanation: "load() method returns a proxy object in Hibernate.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 50,
    question: "Which method always hits the database in Hibernate?",
    options: ["load()", "get()", "Both", "Neither"],
    correctAnswer: "B",
    explanation: "get() method always hits the database in Hibernate.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 51,
    question: "What are the states of an object in Hibernate?",
    options: ["Transient, Persistent, Detached", "New, Modified, Deleted", "Active, Inactive, Removed", "Created, Updated, Destroyed"],
    correctAnswer: "A",
    explanation: "Hibernate objects have three states: Transient, Persistent, and Detached.",
    topic: "Hibernate Entity Lifecycle",
    difficulty: "medium"
  },

  // Hibernate Transactions (52)
  {
    id: 52,
    question: "Which annotation is used to mark a method as transactional in Hibernate?",
    options: ["@Transaction", "@Transactional", "@Tx", "@TransactionScope"],
    correctAnswer: "B",
    explanation: "@Transactional annotation is used to mark methods as transactional.",
    topic: "Hibernate Transactions",
    difficulty: "easy"
  },

  // Spring Boot (53-56)
  {
    id: 53,
    question: "What is the primary feature of Spring Boot?",
    options: ["Simplifies data access", "Automates code generation", "Simplifies project setup", "Enhances UI design"],
    correctAnswer: "C",
    explanation: "Spring Boot's primary feature is simplifying project setup with auto-configuration.",
    topic: "Spring Boot",
    difficulty: "easy"
  },
  {
    id: 54,
    question: "What does the @SpringBootApplication annotation do?",
    options: ["Enables JDBC", "Configures a web application", "Combines @Configuration, @EnableAutoConfiguration, and @ComponentScan", "Starts a Spring context"],
    correctAnswer: "C",
    explanation: "@SpringBootApplication combines three important annotations.",
    topic: "Spring Boot",
    difficulty: "medium"
  },
  {
    id: 55,
    question: "What are Spring Boot Starters?",
    options: ["Dependency descriptors", "Configuration files", "Test utilities", "Database connections"],
    correctAnswer: "A",
    explanation: "Spring Boot Starters are dependency descriptors that simplify adding dependencies.",
    topic: "Spring Boot Starters",
    difficulty: "easy"
  },
  {
    id: 56,
    question: "What is the advantage of Spring Boot Actuator?",
    options: ["Managing app profiles", "Enhancing app security", "Monitoring and managing app", "Application logging"],
    correctAnswer: "C",
    explanation: "Spring Boot Actuator provides monitoring and management capabilities.",
    topic: "Spring Boot Actuator",
    difficulty: "medium"
  },

  // Spring Boot AutoConfiguration (57)
  {
    id: 57,
    question: "How does Spring Boot auto-configuration work?",
    options: ["By scanning classpath and configuring beans automatically", "By reading XML files", "By manual configuration", "By environment variables"],
    correctAnswer: "A",
    explanation: "Spring Boot auto-configuration works by scanning the classpath and configuring beans automatically.",
    topic: "Spring Boot AutoConfiguration",
    difficulty: "medium"
  },

  // Embedded Server (58)
  {
    id: 58,
    question: "Which embedded servers does Spring Boot support?",
    options: ["Tomcat", "Jetty", "Undertow", "All of the above"],
    correctAnswer: "D",
    explanation: "Spring Boot supports Tomcat, Jetty, and Undertow as embedded servers.",
    topic: "Embedded Server",
    difficulty: "easy"
  },

  // Spring Data JPA (59-60)
  {
    id: 59,
    question: "What is Spring Data JPA?",
    options: ["A database", "A framework that simplifies JPA usage", "An ORM tool", "A query language"],
    correctAnswer: "B",
    explanation: "Spring Data JPA simplifies the use of JPA for data access.",
    topic: "Spring Data JPA",
    difficulty: "easy"
  },
  {
    id: 60,
    question: "Which annotation is used to mark a class as a JPA repository?",
    options: ["@Repository", "@JpaRepository", "@Entity", "@Table"],
    correctAnswer: "A",
    explanation: "@Repository annotation is used to mark JPA repository classes.",
    topic: "Spring Data JPA",
    difficulty: "easy"
  },

  // Spring Data MongoDB (61)
  {
    id: 61,
    question: "Which template class is used for MongoDB operations in Spring Data?",
    options: ["MongoTemplate", "MongoOperations", "MongoDbTemplate", "MongoClient"],
    correctAnswer: "A",
    explanation: "MongoTemplate is the main template class for MongoDB operations.",
    topic: "Spring Data MongoDB",
    difficulty: "medium"
  },

  // Spring Data JDBC (62)
  {
    id: 62,
    question: "What is the main difference between Spring Data JPA and Spring Data JDBC?",
    options: ["JPA uses ORM, JDBC is simpler without ORM complexity", "JDBC is faster", "JPA is newer", "No difference"],
    correctAnswer: "A",
    explanation: "Spring Data JDBC is simpler and doesn't have the complexity of ORM that JPA has.",
    topic: "Spring Data JDBC",
    difficulty: "medium"
  },

  // Microservices (63)
  {
    id: 63,
    question: "Which of the following is a primary advantage of using microservices?",
    options: ["Centralized data management", "Scalability", "Simplified deployment", "Reduced network calls"],
    correctAnswer: "B",
    explanation: "One of the primary advantages of microservices is scalability.",
    topic: "Microservices",
    difficulty: "medium"
  },

  // Spring Cloud Gateway (64)
  {
    id: 64,
    question: "What is the purpose of Spring Cloud Gateway?",
    options: ["Service discovery", "API gateway and routing", "Configuration management", "Circuit breaking"],
    correctAnswer: "B",
    explanation: "Spring Cloud Gateway provides API gateway functionality and routing.",
    topic: "Spring Cloud Gateway",
    difficulty: "medium"
  },

  // Spring Cloud Config (65)
  {
    id: 65,
    question: "What is the primary purpose of Spring Cloud Config Server?",
    options: ["Service discovery", "Centralized configuration management", "Load balancing", "Circuit breaking"],
    correctAnswer: "B",
    explanation: "Spring Cloud Config Server provides centralized configuration management.",
    topic: "Spring Cloud Config",
    difficulty: "medium"
  },

  // Circuit Breaker (66)
  {
    id: 66,
    question: "Which pattern helps prevent system failures from cascading?",
    options: ["Singleton", "Circuit Breaker", "Observer", "Factory"],
    correctAnswer: "B",
    explanation: "Circuit Breaker pattern helps prevent cascading failures.",
    topic: "Circuit Breaker",
    difficulty: "medium"
  },

  // Spring Cloud OpenFeign (67)
  {
    id: 67,
    question: "What is Spring Cloud OpenFeign used for?",
    options: ["Service discovery", "Declarative REST clients", "Configuration management", "Load balancing"],
    correctAnswer: "B",
    explanation: "Spring Cloud OpenFeign is used for creating declarative REST clients.",
    topic: "Spring Cloud OpenFeign",
    difficulty: "medium"
  },

  // Service Discovery (68)
  {
    id: 68,
    question: "For service discovery in Spring Boot microservices, which tool is commonly used?",
    options: ["Eureka", "Zookeeper", "Consul", "All of the above"],
    correctAnswer: "D",
    explanation: "Eureka, Zookeeper, and Consul can all be used for service discovery.",
    topic: "Service Discovery",
    difficulty: "medium"
  },

  // Java 8 Features (69-73)
  {
    id: 69,
    question: "Which of the following is not introduced with Java 8?",
    options: ["Stream API", "Serialization", "Spliterator", "Lambda Expression"],
    correctAnswer: "B",
    explanation: "Serialization was introduced in earlier versions of Java, not Java 8.",
    topic: "Java 8 Features",
    difficulty: "medium"
  },
  {
    id: 70,
    question: "What are the two types of Streams offered by Java 8?",
    options: ["sequential and parallel", "sequential and random", "parallel and random", "random and synchronized"],
    correctAnswer: "A",
    explanation: "Java 8 provides sequential and parallel streams for processing collections.",
    topic: "Java 8 Features",
    difficulty: "easy"
  },
  {
    id: 71,
    question: "Which method is used to create an infinite stream?",
    options: ["Stream.infinite()", "Stream.generate()", "Stream.iterate()", "Both Stream.generate() and Stream.iterate()"],
    correctAnswer: "D",
    explanation: "Both Stream.generate() and Stream.iterate() can create infinite streams.",
    topic: "Java 8 Features",
    difficulty: "medium"
  },
  {
    id: 72,
    question: "Which functional interface returns a boolean value?",
    options: ["Consumer", "Supplier", "Function", "Predicate"],
    correctAnswer: "D",
    explanation: "Predicate functional interface returns a boolean value based on some condition.",
    topic: "Java 8 Features",
    difficulty: "easy"
  },
  {
    id: 73,
    question: "What is the use of the Supplier functional interface?",
    options: ["To consume values", "To supply values without taking any input", "To transform values", "To test conditions"],
    correctAnswer: "B",
    explanation: "Supplier functional interface provides values without taking any input parameters.",
    topic: "Java 8 Features",
    difficulty: "medium"
  },

  // Method References (74)
  {
    id: 74,
    question: "Which symbol is used to define a method reference in Java?",
    options: ["->", "::", "=>", "//"],
    correctAnswer: "B",
    explanation: "The :: (double colon) operator is used for method references in Java 8.",
    topic: "Method References",
    difficulty: "easy"
  },

  // Stream API (75-76)
  {
    id: 75,
    question: "Which method in Stream API is used to perform a reduction?",
    options: ["reduce()", "accumulate()", "collect()", "gather()"],
    correctAnswer: "A",
    explanation: "The reduce() method performs a reduction on stream elements using an associative accumulation function.",
    topic: "Stream API",
    difficulty: "medium"
  },
  {
    id: 76,
    question: "Which of the following is a terminal operation?",
    options: ["map()", "filter()", "forEach()", "peek()"],
    correctAnswer: "C",
    explanation: "forEach() is a terminal operation that consumes the stream.",
    topic: "Stream API",
    difficulty: "medium"
  },

  // Maven Build Lifecycle (77-78)
  {
    id: 77,
    question: "Which lifecycle phase packages the compiled source code?",
    options: ["compile", "install", "package", "validate"],
    correctAnswer: "C",
    explanation: "The package phase takes compiled code and packages it into distributable format like JAR.",
    topic: "Maven Build Lifecycle",
    difficulty: "easy"
  },
  {
    id: 78,
    question: "What are the three built-in build lifecycles in Maven?",
    options: ["Clean, Build, Deploy", "Clean, Default, Site", "Validate, Compile, Test", "Build, Package, Install"],
    correctAnswer: "B",
    explanation: "Maven has three built-in lifecycles: Clean (project cleaning), Default (project deployment), Site (documentation).",
    topic: "Maven Build Lifecycle",
    difficulty: "medium"
  },

  // Maven Plugins (79)
  {
    id: 79,
    question: "Which Maven plugin is used for compiling Java sources?",
    options: ["maven-compile-plugin", "maven-compiler-plugin", "maven-java-plugin", "maven-source-plugin"],
    correctAnswer: "B",
    explanation: "The maven-compiler-plugin is used to compile Java source files.",
    topic: "Maven Plugins",
    difficulty: "easy"
  },

  // Maven Repository (80)
  {
    id: 80,
    question: "Which of the following is NOT a type of Maven repository?",
    options: ["Local", "Central", "Remote", "Global"],
    correctAnswer: "D",
    explanation: "Maven has Local, Central, and Remote repositories. There's no Global repository type.",
    topic: "Maven Repository",
    difficulty: "easy"
  },

  // Maven Directory Structure (81)
  {
    id: 81,
    question: "In which directory are resource files placed by default?",
    options: ["src/resources", "src/main/resources", "resources/main", "main/resources"],
    correctAnswer: "B",
    explanation: "Maven follows standard directory layout with resources in src/main/resources.",
    topic: "Maven Directory Structure",
    difficulty: "easy"
  },

  // Spring MVC (82-88)
  {
    id: 82,
    question: "Which annotation is used to create a Spring MVC controller class?",
    options: ["@Component", "@Service", "@Controller", "@Repository"],
    correctAnswer: "C",
    explanation: "@Controller annotation indicates that a class is a Spring MVC controller.",
    topic: "Spring MVC",
    difficulty: "easy"
  },
  {
    id: 83,
    question: "Which of the following handles HTTP requests in Spring MVC?",
    options: ["HandlerMapping", "DispatcherServlet", "ViewResolver", "Controller"],
    correctAnswer: "B",
    explanation: "DispatcherServlet is responsible for dispatching incoming HTTP requests to appropriate controllers.",
    topic: "Spring MVC",
    difficulty: "medium"
  },
  {
    id: 84,
    question: "Which annotation binds a method parameter to a named attribute?",
    options: ["@RequestParam", "@PathVariable", "@ModelAttribute", "@RequestBody"],
    correctAnswer: "C",
    explanation: "@ModelAttribute binds a method parameter to a named attribute.",
    topic: "Spring MVC",
    difficulty: "medium"
  },
  {
    id: 85,
    question: "How can you handle exceptions in Spring MVC?",
    options: ["@ExceptionHandler", "@ErrorHandler", "@HandleException", "@CatchException"],
    correctAnswer: "A",
    explanation: "@ExceptionHandler annotation is used to handle exceptions in Spring MVC.",
    topic: "Spring MVC",
    difficulty: "medium"
  },
  {
    id: 86,
    question: "What does the @ResponseBody annotation do?",
    options: ["Reads request body", "Writes return value to HTTP response body", "Maps request parameters", "Handles file uploads"],
    correctAnswer: "B",
    explanation: "@ResponseBody tells controller that return value should be written directly to HTTP response body.",
    topic: "Spring MVC",
    difficulty: "medium"
  },
  {
    id: 87,
    question: "Which annotation indicates a method should handle HTTP POST requests?",
    options: ["@PostMapping", "@RequestMapping", "@Post", "@HandlePost"],
    correctAnswer: "A",
    explanation: "@PostMapping is a shortcut for @RequestMapping(method = RequestMethod.POST).",
    topic: "Spring MVC",
    difficulty: "easy"
  },
  {
    id: 88,
    question: "How do you access request parameters in a controller method?",
    options: ["@RequestParam", "@Param", "@Parameter", "@RequestParameter"],
    correctAnswer: "A",
    explanation: "@RequestParam annotation binds request parameter value to method parameter.",
    topic: "Spring MVC",
    difficulty: "easy"
  },

  // Collections Advanced (89-92)
  {
    id: 89,
    question: "Which collection provides constant time performance for basic operations?",
    options: ["ArrayList", "LinkedList", "HashMap", "TreeMap"],
    correctAnswer: "C",
    explanation: "HashMap provides constant time O(1) performance for basic operations like get and put.",
    topic: "Collections Advanced",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "Which collection is synchronized in Java?",
    options: ["ArrayList", "HashMap", "Vector", "HashSet"],
    correctAnswer: "C",
    explanation: "Vector is synchronized and thread-safe, unlike ArrayList.",
    topic: "Collections Advanced",
    difficulty: "medium"
  },
  {
    id: 91,
    question: "Which method is used to sort a collection?",
    options: ["Collections.sort()", "Collection.sort()", "Arrays.sort()", "List.sort()"],
    correctAnswer: "A",
    explanation: "Collections.sort() is used to sort collections like Lists.",
    topic: "Collections Advanced",
    difficulty: "easy"
  },
  {
    id: 92,
    question: "What is the difference between fail-fast and fail-safe iterators?",
    options: ["No difference", "Fail-fast throws exception on modification, fail-safe doesn't", "Fail-safe is faster", "Fail-fast works only with Lists"],
    correctAnswer: "B",
    explanation: "Fail-fast iterators throw ConcurrentModificationException if collection is modified during iteration.",
    topic: "Collections Advanced",
    difficulty: "hard"
  },

  // Hibernate Advanced (93-96)
  {
    id: 93,
    question: "What is the purpose of Hibernate Configuration file?",
    options: ["Define entity mappings", "Configure database connection and Hibernate properties", "Define queries", "Handle transactions"],
    correctAnswer: "B",
    explanation: "Hibernate configuration file contains database connection and Hibernate-specific properties.",
    topic: "Hibernate Advanced",
    difficulty: "medium"
  },
  {
    id: 94,
    question: "What is HQL?",
    options: ["Hibernate Query Language", "HTML Query Language", "HTTP Query Language", "Hybrid Query Language"],
    correctAnswer: "A",
    explanation: "HQL stands for Hibernate Query Language, used for database queries in Hibernate.",
    topic: "Hibernate Advanced",
    difficulty: "easy"
  },
  {
    id: 95,
    question: "Which annotation is used to mark a class as Hibernate entity?",
    options: ["@Entity", "@Table", "@Hibernate", "@Persistent"],
    correctAnswer: "A",
    explanation: "@Entity annotation marks a class as a Hibernate entity.",
    topic: "Hibernate Advanced",
    difficulty: "easy"
  },
  {
    id: 96,
    question: "What is the difference between get() and load() methods?",
    options: ["No difference", "get() returns proxy, load() hits database", "load() returns proxy, get() hits database", "Both are same"],
    correctAnswer: "C",
    explanation: "load() returns proxy object while get() always hits the database.",
    topic: "Hibernate Advanced",
    difficulty: "medium"
  },

  // Spring Boot Advanced (97-99)
  {
    id: 97,
    question: "What is the purpose of @ConditionalOnProperty annotation?",
    options: ["Define properties", "Conditionally enable beans based on property", "Read properties", "Validate properties"],
    correctAnswer: "B",
    explanation: "@ConditionalOnProperty conditionally enables or disables beans based on property values.",
    topic: "Spring Boot Advanced",
    difficulty: "hard"
  },
  {
    id: 98,
    question: "Which Spring Boot starter is used for web applications?",
    options: ["spring-boot-starter-web", "spring-boot-starter-mvc", "spring-boot-starter-http", "spring-boot-starter-rest"],
    correctAnswer: "A",
    explanation: "spring-boot-starter-web is used for building web applications including RESTful services.",
    topic: "Spring Boot Advanced",
    difficulty: "easy"
  },
  {
    id: 99,
    question: "What is the purpose of @Profile annotation?",
    options: ["Performance profiling", "Specify which beans should be loaded in different environments", "Security profiling", "Memory profiling"],
    correctAnswer: "B",
    explanation: "@Profile annotation conditionally loads beans based on active profiles.",
    topic: "Spring Boot Advanced",
    difficulty: "medium"
  },

  // I/O Operations (100-101)
  {
    id: 100,
    question: "Which class is used for reading character streams in Java?",
    options: ["FileInputStream", "FileReader", "BufferedInputStream", "DataInputStream"],
    correctAnswer: "B",
    explanation: "FileReader is used for reading character streams from files.",
    topic: "I/O Operations",
    difficulty: "easy"
  },
  {
    id: 101,
    question: "What does Files.lines(Path path) do in Java 8?",
    options: ["Reads filenames", "Reads all lines as Stream", "Counts lines", "Creates files"],
    correctAnswer: "B",
    explanation: "Files.lines() reads all lines from a file as a Stream in Java 8.",
    topic: "I/O Operations",
    difficulty: "medium"
  },

  // File Operations (102)
  {
    id: 102,
    question: "Which package contains NIO.2 file operations?",
    options: ["java.io", "java.nio", "java.nio.file", "java.util.file"],
    correctAnswer: "C",
    explanation: "java.nio.file package contains NIO.2 file operations introduced in Java 7.",
    topic: "File Operations",
    difficulty: "medium"
  },

  // Maven (Build Tools) (103-112)
  {
    id: 103,
    question: "Which Maven phase packages the compiled code into a JAR/WAR?",
    options: ["compile", "package", "install", "verify"],
    correctAnswer: "B",
    explanation: "The package phase takes compiled code and packages it into distributable format like JAR/WAR.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 104,
    question: "Which file defines a project's coordinates and dependencies?",
    options: ["settings.xml", "pom.xml", "toolchains.xml", "effective-pom.xml"],
    correctAnswer: "B",
    explanation: "pom.xml (Project Object Model) defines project coordinates, dependencies, and build configuration.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 105,
    question: "What does mvn install do (in addition to packaging)?",
    options: ["Deploys to remote repo", "Installs artifact to local repo", "Runs integration tests only", "Cleans target directory"],
    correctAnswer: "B",
    explanation: "mvn install packages the project and installs the artifact to the local repository.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 106,
    question: "Where do you set repository credentials globally?",
    options: ["pom.xml", "settings.xml", "parent POM", "profiles.xml"],
    correctAnswer: "B",
    explanation: "Global repository credentials are configured in settings.xml file.",
    topic: "Maven",
    difficulty: "medium"
  },
  {
    id: 107,
    question: "What manages versions for child modules without declaring them as dependencies?",
    options: ["<dependencies>", "<dependencyManagement>", "<build>", "<reporting>"],
    correctAnswer: "B",
    explanation: "<dependencyManagement> manages versions for child modules without declaring them as dependencies.",
    topic: "Maven",
    difficulty: "medium"
  },
  {
    id: 108,
    question: "What's a SNAPSHOT version?",
    options: ["A release build", "A mutable development version", "A BOM only", "A site version"],
    correctAnswer: "B",
    explanation: "SNAPSHOT versions are mutable development versions that can change during development.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 109,
    question: "Which scope makes dependency available only at test compile/runtime?",
    options: ["provided", "runtime", "system", "test"],
    correctAnswer: "D",
    explanation: "Test scope makes dependencies available only during test compilation and runtime.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 110,
    question: "\"Effective POM\" means:",
    options: ["Super POM only", "Parent POM only", "Resolved merge of super, parents, and current POM", "Child module overrides only"],
    correctAnswer: "C",
    explanation: "Effective POM is the resolved merge of super POM, parent POMs, and current POM.",
    topic: "Maven",
    difficulty: "medium"
  },
  {
    id: 111,
    question: "Multi-module build order is based on:",
    options: ["Alphabetical names", "<modules> order + dependency graph", "Declared packaging", "Profiles order"],
    correctAnswer: "B",
    explanation: "Maven determines build order based on modules declaration and dependency graph.",
    topic: "Maven",
    difficulty: "medium"
  },
  {
    id: 112,
    question: "A BOM is typically imported using scope:",
    options: ["compile", "runtime", "import", "provided"],
    correctAnswer: "C",
    explanation: "BOM (Bill of Materials) is imported using import scope for dependency management.",
    topic: "Maven",
    difficulty: "medium"
  },

  // Functional Programming (Higher-Order Functions) (113-122)
  {
    id: 113,
    question: "A higher-order function:",
    options: ["Only returns primitives", "Takes/returns functions", "Is a constructor", "Is a class method only"],
    correctAnswer: "B",
    explanation: "Higher-order functions take other functions as parameters or return functions.",
    topic: "Functional Programming",
    difficulty: "medium"
  },
  {
    id: 114,
    question: "In Java, a function type is represented by:",
    options: ["Runnable only", "Functional interfaces (e.g., Function<T,R>)", "Abstract classes", "Records"],
    correctAnswer: "B",
    explanation: "Function types in Java are represented by functional interfaces like Function<T,R>.",
    topic: "Functional Programming",
    difficulty: "easy"
  },
  {
    id: 115,
    question: "Function<A,B>.andThen(C) composes:",
    options: ["C then A", "A then B then C", "B then A", "A then C ignoring B"],
    correctAnswer: "B",
    explanation: "andThen() composes functions sequentially: first applies A→B, then applies the result to C.",
    topic: "Functional Programming",
    difficulty: "medium"
  },
  {
    id: 116,
    question: "Predicate<T>'s negate() returns:",
    options: ["Always true", "Opposite predicate", "Always false", "A consumer"],
    correctAnswer: "B",
    explanation: "negate() returns a predicate that represents the logical negation of the original predicate.",
    topic: "Functional Programming",
    difficulty: "easy"
  },
  {
    id: 117,
    question: "Which is true about pure functions?",
    options: ["Depend on global state", "No side effects; same input ⇒ same output", "Must be static", "Must throw no exceptions"],
    correctAnswer: "B",
    explanation: "Pure functions have no side effects and always return the same output for the same input.",
    topic: "Functional Programming",
    difficulty: "medium"
  },
  {
    id: 118,
    question: "map vs flatMap:",
    options: ["Both return nested structures", "map flattens; flatMap maps", "map transforms; flatMap transforms + flattens", "They're identical"],
    correctAnswer: "C",
    explanation: "map transforms elements, while flatMap transforms and flattens nested structures.",
    topic: "Functional Programming",
    difficulty: "medium"
  },
  {
    id: 119,
    question: "A closure:",
    options: ["Cannot capture variables", "Captures effectively-final vars from enclosing scope", "Only works in static contexts", "Requires reflection"],
    correctAnswer: "B",
    explanation: "Closures capture effectively final variables from their enclosing scope.",
    topic: "Functional Programming",
    difficulty: "hard"
  },
  {
    id: 120,
    question: "Currying transforms:",
    options: ["Many args → one arg at a time", "One arg → many", "Primitives → objects", "Lambdas → methods"],
    correctAnswer: "A",
    explanation: "Currying transforms a function with multiple arguments into functions taking one argument at a time.",
    topic: "Functional Programming",
    difficulty: "hard"
  },
  {
    id: 121,
    question: "Supplier<T>:",
    options: ["Consumes T", "Produces T with no args", "Tests T", "Transforms T→R"],
    correctAnswer: "B",
    explanation: "Supplier<T> is a functional interface that produces values of type T without taking arguments.",
    topic: "Functional Programming",
    difficulty: "easy"
  },
  {
    id: 122,
    question: "Immutability helps by:",
    options: ["Increasing shared mutable state", "Reducing need for equals/hashCode", "Avoiding race conditions & easing reasoning", "Disabling GC"],
    correctAnswer: "C",
    explanation: "Immutability helps avoid race conditions and makes code easier to reason about.",
    topic: "Functional Programming",
    difficulty: "medium"
  },

  // JDBC Advanced (123-132)
  {
    id: 123,
    question: "Preferred for pooling and JNDI:",
    options: ["DriverManager", "DataSource", "Statement", "Savepoint"],
    correctAnswer: "B",
    explanation: "DataSource is preferred for connection pooling and JNDI lookups over DriverManager.",
    topic: "JDBC",
    difficulty: "medium"
  },
  {
    id: 124,
    question: "Prevent SQL injection:",
    options: ["Statement", "PreparedStatement", "ResultSet", "CallableStatement only"],
    correctAnswer: "B",
    explanation: "PreparedStatement prevents SQL injection by using parameterized queries.",
    topic: "JDBC",
    difficulty: "medium"
  },
  {
    id: 125,
    question: "Batch updates use:",
    options: ["addBatch() + executeBatch()", "executeQuery()", "clearWarnings()", "getMetaData()"],
    correctAnswer: "A",
    explanation: "Batch updates use addBatch() to add statements and executeBatch() to execute them.",
    topic: "JDBC",
    difficulty: "medium"
  },
  {
    id: 126,
    question: "Default auto-commit:",
    options: ["true", "false", "depends on driver", "not supported"],
    correctAnswer: "A",
    explanation: "By default, JDBC connections have auto-commit set to true.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 127,
    question: "Scrollable, read-only result set type:",
    options: ["TYPE_FORWARD_ONLY", "TYPE_SCROLL_SENSITIVE", "TYPE_SCROLL_INSENSITIVE", "CONCUR_UPDATABLE"],
    correctAnswer: "C",
    explanation: "TYPE_SCROLL_INSENSITIVE allows scrolling but is read-only and insensitive to changes.",
    topic: "JDBC",
    difficulty: "medium"
  },
  {
    id: 128,
    question: "Concurrency for updating rows:",
    options: ["CONCUR_READ_ONLY", "CONCUR_UPDATABLE", "TYPE_SCROLL_SENSITIVE", "TYPE_FORWARD_ONLY"],
    correctAnswer: "B",
    explanation: "CONCUR_UPDATABLE concurrency mode allows updating rows in the result set.",
    topic: "JDBC",
    difficulty: "medium"
  },
  {
    id: 129,
    question: "Use savepoints to:",
    options: ["Change isolation", "Partially roll back", "Close connections", "Fetch metadata"],
    correctAnswer: "B",
    explanation: "Savepoints allow partial rollback within a transaction.",
    topic: "JDBC",
    difficulty: "medium"
  },
  {
    id: 130,
    question: "Try-with-resources ensures:",
    options: ["Autocommit off", "Automatic close of JDBC resources", "Statement caching", "Connection pooling"],
    correctAnswer: "B",
    explanation: "Try-with-resources automatically closes JDBC resources like connections, statements, and result sets.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 131,
    question: "Isolation levels are set on:",
    options: ["Statement", "ResultSet", "Connection", "DriverManager"],
    correctAnswer: "C",
    explanation: "Transaction isolation levels are set on the Connection object.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 132,
    question: "Fetch size hint:",
    options: ["Statement.setFetchSize(int)", "Connection.setFetchSize(int)", "ResultSet.setFetchSize(int)", "DriverManager.setFetchSize(int)"],
    correctAnswer: "A",
    explanation: "Statement.setFetchSize(int) provides a hint about the number of rows to fetch.",
    topic: "JDBC",
    difficulty: "medium"
  },

  // Spring Core Advanced (133-144)
  {
    id: 133,
    question: "IoC means:",
    options: ["Objects create dependencies", "Container creates/injects dependencies", "No dependencies", "Static factories only"],
    correctAnswer: "B",
    explanation: "IoC (Inversion of Control) means the container creates and injects dependencies instead of objects creating them.",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 134,
    question: "Default Spring bean scope:",
    options: ["prototype", "request", "singleton", "session"],
    correctAnswer: "C",
    explanation: "The default Spring bean scope is singleton - one instance per container.",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 135,
    question: "Which stereotype triggers component scanning?",
    options: ["@Bean", "@Component/@Service/@Repository/@Controller", "@Configuration", "@EnableAutoConfiguration"],
    correctAnswer: "B",
    explanation: "Stereotype annotations like @Component, @Service, @Repository, @Controller trigger component scanning.",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 136,
    question: "@Configuration classes by default:",
    options: ["Are not proxied", "Are proxied (CGLIB) to enforce singleton @Bean methods", "Require XML", "Disable DI"],
    correctAnswer: "B",
    explanation: "@Configuration classes are proxied by CGLIB to enforce singleton behavior of @Bean methods.",
    topic: "Spring Core",
    difficulty: "medium"
  },
  {
    id: 137,
    question: "AOP \"pointcut\" is:",
    options: ["The code to run", "Where to run (expression selecting join points)", "The woven class", "The advisor's order"],
    correctAnswer: "B",
    explanation: "A pointcut is an expression that selects join points where advice should be applied.",
    topic: "Spring Core",
    difficulty: "medium"
  },
  {
    id: 138,
    question: "JDK proxy limitation:",
    options: ["Final classes only", "Interfaces only (methods on interface)", "Requires XML AOP", "Works with private methods"],
    correctAnswer: "B",
    explanation: "JDK proxies work only with interfaces and can only proxy methods declared on the interface.",
    topic: "Spring Core",
    difficulty: "medium"
  },
  {
    id: 139,
    question: "Self-invocation with proxies:",
    options: ["Works always", "Skips advice (same instance call)", "Throws exception", "Requires @Primary"],
    correctAnswer: "B",
    explanation: "Self-invocation skips advice because it's a direct call on the same instance, bypassing the proxy.",
    topic: "Spring Core",
    difficulty: "hard"
  },
  {
    id: 140,
    question: "MVC: Which handles web requests?",
    options: ["@Service", "@Controller / @RestController", "@Repository", "BeanPostProcessor"],
    correctAnswer: "B",
    explanation: "@Controller and @RestController annotations mark classes that handle web requests.",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 141,
    question: "Bean lifecycle callback interface:",
    options: ["InitializingBean / DisposableBean", "Closeable", "InvocationHandler", "ReflectionUtils"],
    correctAnswer: "A",
    explanation: "InitializingBean and DisposableBean are lifecycle callback interfaces for initialization and destruction.",
    topic: "Spring Core",
    difficulty: "medium"
  },
  {
    id: 142,
    question: "Resolve multiple candidates of same type with:",
    options: ["@Autowired only", "@Qualifier or @Primary", "@Lazy only", "@Scope"],
    correctAnswer: "B",
    explanation: "@Qualifier specifies which bean to inject, @Primary marks the preferred bean when multiple candidates exist.",
    topic: "Spring Core",
    difficulty: "medium"
  },
  {
    id: 143,
    question: "Property externalization is read via:",
    options: ["Environment/PropertySources", "BeanFactoryPostProcessor only", "AOP", "DispatcherServlet"],
    correctAnswer: "A",
    explanation: "Properties are externalized and read via Environment and PropertySources.",
    topic: "Spring Core",
    difficulty: "medium"
  },
  {
    id: 144,
    question: "Prototype scope caveat:",
    options: ["Container manages full lifecycle incl. destroy", "Container creates only; destroy not called automatically", "Not injectable", "Singleton by default after first use"],
    correctAnswer: "B",
    explanation: "For prototype scope, the container only creates beans; destroy callbacks are not called automatically.",
    topic: "Spring Core",
    difficulty: "hard"
  },

  // Hibernate Advanced (145-154)
  {
    id: 145,
    question: "Entity states include:",
    options: ["static, final, transient", "transient, persistent, detached, removed", "open, closed", "proxied, unproxied only"],
    correctAnswer: "B",
    explanation: "Hibernate entity states are: transient, persistent, detached, and removed.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 146,
    question: "Owning side of bidirectional relation:",
    options: ["Side with mappedBy", "Side without mappedBy", "Always many-to-many", "Repository side"],
    correctAnswer: "B",
    explanation: "The owning side of a bidirectional relationship is the side without mappedBy attribute.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 147,
    question: "Default fetch type per JPA spec:",
    options: ["*ToOne = LAZY, *ToMany = EAGER", "*ToOne = EAGER, *ToMany = LAZY", "Both LAZY", "Both EAGER"],
    correctAnswer: "B",
    explanation: "JPA default: @OneToOne/@ManyToOne are EAGER, @OneToMany/@ManyToMany are LAZY.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 148,
    question: "Cascade that deletes children with parent removal:",
    options: ["Cascade.PERSIST", "Cascade.MERGE", "orphanRemoval=true (optionally with REMOVE)", "Cascade.DETACH only"],
    correctAnswer: "C",
    explanation: "orphanRemoval=true deletes child entities when they're removed from the parent collection.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 149,
    question: "First-level cache lives in:",
    options: ["Session (per session)", "SessionFactory (global)", "Database", "Second-level cache"],
    correctAnswer: "A",
    explanation: "First-level cache is per Session and automatically manages entity instances within that session.",
    topic: "Hibernate",
    difficulty: "easy"
  },
  {
    id: 150,
    question: "Dirty checking triggers update:",
    options: ["Only on manual flush", "On flush/commit if managed entity changed", "Never", "Only with @Transactional(readOnly=true)"],
    correctAnswer: "B",
    explanation: "Dirty checking automatically triggers updates on flush/commit when managed entities have changed.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 151,
    question: "Optimistic locking uses:",
    options: ["Row locks", "Version/timestamp to detect conflicts", "Database triggers", "Serializable isolation only"],
    correctAnswer: "B",
    explanation: "Optimistic locking uses version fields or timestamps to detect concurrent modification conflicts.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 152,
    question: "N+1 problem occurs when:",
    options: ["Using pagination", "Accessing LAZY collections repeatedly without fetch join", "Using DTOs", "Using Criteria API"],
    correctAnswer: "B",
    explanation: "N+1 problem occurs when accessing lazy collections in a loop, causing additional queries for each access.",
    topic: "Hibernate",
    difficulty: "hard"
  },
  {
    id: 153,
    question: "GenerationType.IDENTITY means:",
    options: ["Sequence table", "Database identity/auto-increment", "UUID only", "Application assigned"],
    correctAnswer: "B",
    explanation: "IDENTITY generation type uses database identity columns or auto-increment features.",
    topic: "Hibernate",
    difficulty: "easy"
  },
  {
    id: 154,
    question: "Flush mode default:",
    options: ["COMMIT", "MANUAL", "AUTO", "NEVER"],
    correctAnswer: "C",
    explanation: "The default flush mode is AUTO, which flushes before queries and on commit.",
    topic: "Hibernate",
    difficulty: "medium"
  },

  // Spring Boot Advanced (155-164)
  {
    id: 155,
    question: "Starters are:",
    options: ["Parent POMs", "Opinionated dependency bundles", "Build plugins", "Profiles"],
    correctAnswer: "B",
    explanation: "Spring Boot starters are opinionated dependency bundles that simplify dependency management.",
    topic: "Spring Boot",
    difficulty: "easy"
  },
  {
    id: 156,
    question: "Auto-config is controlled by:",
    options: ["@EnableAutoConfiguration / spring.factories (internally) + conditions", "@Controller", "beans.xml", "@Repository"],
    correctAnswer: "A",
    explanation: "Auto-configuration is controlled by @EnableAutoConfiguration with conditions defined in spring.factories.",
    topic: "Spring Boot",
    difficulty: "medium"
  },
  {
    id: 157,
    question: "To exclude an auto-config:",
    options: ["Delete dependency", "@SpringBootApplication(exclude=…)", "@DisableAutoConfig", "Cannot exclude"],
    correctAnswer: "B",
    explanation: "Use @SpringBootApplication(exclude=...) or @EnableAutoConfiguration(exclude=...) to exclude auto-configurations.",
    topic: "Spring Boot",
    difficulty: "medium"
  },
  {
    id: 158,
    question: "Actuator web-exposed by default:",
    options: ["All endpoints", "None", "Only health and info", "Only metrics"],
    correctAnswer: "C",
    explanation: "By default, only health and info actuator endpoints are exposed over web.",
    topic: "Spring Boot",
    difficulty: "easy"
  },
  {
    id: 159,
    question: "Change HTTP port:",
    options: ["server.port=8081", "spring.port=8081", "management.port=8081 only", "web.port=8081"],
    correctAnswer: "A",
    explanation: "Use server.port property to change the HTTP port of the embedded server.",
    topic: "Spring Boot",
    difficulty: "easy"
  },
  {
    id: 160,
    question: "Embedded server default:",
    options: ["Jetty", "Netty", "Tomcat", "Undertow"],
    correctAnswer: "C",
    explanation: "Tomcat is the default embedded server in Spring Boot web applications.",
    topic: "Spring Boot",
    difficulty: "easy"
  },
  {
    id: 161,
    question: "Externalized config priority (higher wins):",
    options: ["application.properties over env vars", "Env vars over application.properties", "Random order", "YAML never supported"],
    correctAnswer: "B",
    explanation: "Environment variables have higher priority than application.properties in Spring Boot's configuration hierarchy.",
    topic: "Spring Boot",
    difficulty: "medium"
  },
  {
    id: 162,
    question: "Run method without web server:",
    options: ["spring.main.web-application-type=none", "Remove actuator", "server.none=true", "Must write a CLI"],
    correctAnswer: "A",
    explanation: "Set spring.main.web-application-type=none to run Spring Boot without starting a web server.",
    topic: "Spring Boot",
    difficulty: "medium"
  },
  {
    id: 163,
    question: "View auto-restart in dev:",
    options: ["spring-boot-devtools", "actuator only", "test starter", "profile \"restart\""],
    correctAnswer: "A",
    explanation: "spring-boot-devtools provides automatic restart capabilities during development.",
    topic: "Spring Boot",
    difficulty: "easy"
  },
  {
    id: 164,
    question: "Show autoconfig report (why beans matched/skipped):",
    options: ["/actuator/beans only", "--debug flag or debug=true", "/actuator/env only", "mvn site"],
    correctAnswer: "B",
    explanation: "Use --debug flag or debug=true property to show auto-configuration report.",
    topic: "Spring Boot",
    difficulty: "medium"
  },

  // Spring Security (165-174)
  {
    id: 165,
    question: "Authentication vs Authorization:",
    options: ["Who you are vs what you can do", "What you can do vs who you are", "Both same", "Only passwords"],
    correctAnswer: "A",
    explanation: "Authentication verifies who you are, Authorization determines what you can do.",
    topic: "Spring Security",
    difficulty: "easy"
  },
  {
    id: 166,
    question: "Password storage should use:",
    options: ["Plain text", "NoOpPasswordEncoder", "BCrypt/Argon2", "Base64"],
    correctAnswer: "C",
    explanation: "Passwords should be stored using strong hashing algorithms like BCrypt or Argon2.",
    topic: "Spring Security",
    difficulty: "easy"
  },
  {
    id: 167,
    question: "Stateless JWT APIs typically:",
    options: ["Enable sessions", "Disable/ignore CSRF tokens", "Require form login", "Use JSESSIONID"],
    correctAnswer: "B",
    explanation: "Stateless JWT APIs typically disable CSRF protection since they don't use sessions.",
    topic: "Spring Security",
    difficulty: "medium"
  },
  {
    id: 168,
    question: "SecurityFilterChain bean config:",
    options: ["Replaces WebSecurityConfigurerAdapter (new style)", "Deprecated", "For method security only", "For OAuth2 only"],
    correctAnswer: "A",
    explanation: "SecurityFilterChain bean configuration is the new style replacing WebSecurityConfigurerAdapter.",
    topic: "Spring Security",
    difficulty: "medium"
  },
  {
    id: 169,
    question: "Roles vs authorities:",
    options: ["Identical", "ROLE_* is a convention for roles; authorities are arbitrary strings", "Roles cannot be mapped", "Authorities must start with ROLE_"],
    correctAnswer: "B",
    explanation: "ROLE_ prefix is a convention for roles, while authorities can be any arbitrary strings.",
    topic: "Spring Security",
    difficulty: "medium"
  },
  {
    id: 170,
    question: "OAuth2 roles:",
    options: ["Client, Resource Server, Authorization Server", "Client & Database only", "Basic and Digest", "JWT and JWE"],
    correctAnswer: "A",
    explanation: "OAuth2 defines three main roles: Client, Resource Server, and Authorization Server.",
    topic: "Spring Security",
    difficulty: "medium"
  },
  {
    id: 171,
    question: "Resource server validates JWT via:",
    options: ["Introspection or public key (JWK)", "Database only", "Sessions", "Cookies only"],
    correctAnswer: "A",
    explanation: "Resource servers validate JWTs via token introspection or using public keys (JWK).",
    topic: "Spring Security",
    difficulty: "medium"
  },
  {
    id: 172,
    question: "Method security annotation:",
    options: ["@Secured/@PreAuthorize", "@Autowired", "@Transactional", "@Async"],
    correctAnswer: "A",
    explanation: "@Secured and @PreAuthorize are annotations used for method-level security.",
    topic: "Spring Security",
    difficulty: "easy"
  },
  {
    id: 173,
    question: "To store users programmatically:",
    options: ["In UserDetailsService", "In PasswordEncoder", "In OncePerRequestFilter", "In HandlerInterceptor"],
    correctAnswer: "A",
    explanation: "UserDetailsService is used to store and retrieve user details programmatically.",
    topic: "Spring Security",
    difficulty: "easy"
  },
  {
    id: 174,
    question: "Adding OAuth2 login in Spring Boot usually needs:",
    options: ["spring-security-oauth (legacy)", "spring-boot-starter-oauth2-client + config", "JDBC only", "Actuator only"],
    correctAnswer: "B",
    explanation: "OAuth2 login requires spring-boot-starter-oauth2-client dependency plus configuration.",
    topic: "Spring Security",
    difficulty: "medium"
  },

  // Spring Data Advanced (175-184)
  {
    id: 175,
    question: "Query derivation example:",
    options: ["findByEmailAndStatus", "getUser", "searchAnything", "lookup"],
    correctAnswer: "A",
    explanation: "findByEmailAndStatus is an example of Spring Data query derivation from method names.",
    topic: "Spring Data",
    difficulty: "easy"
  },
  {
    id: 176,
    question: "Pagination interface:",
    options: ["ListableRepository", "PagingAndSortingRepository / Pageable", "MapRepository", "SliceableOnly"],
    correctAnswer: "B",
    explanation: "PagingAndSortingRepository and Pageable provide pagination support in Spring Data.",
    topic: "Spring Data",
    difficulty: "easy"
  },
  {
    id: 177,
    question: "Custom JPQL:",
    options: ["@Query(\"select u from User u where…\")", "@NativeQuery", "@JPQLQuery", "@DeriveQuery"],
    correctAnswer: "A",
    explanation: "@Query annotation is used to define custom JPQL queries in Spring Data JPA.",
    topic: "Spring Data",
    difficulty: "easy"
  },
  {
    id: 178,
    question: "Projection to interface:",
    options: ["Not supported", "Use interface-based projections", "Only DTO constructors", "Only native SQL"],
    correctAnswer: "B",
    explanation: "Spring Data supports interface-based projections for returning partial data.",
    topic: "Spring Data",
    difficulty: "medium"
  },
  {
    id: 179,
    question: "Spring Data JDBC vs JPA:",
    options: ["JDBC supports lazy proxies", "JDBC focuses on aggregates; no lazy, no proxies", "JDBC always EAGER + joins graph automatically", "Identical behavior"],
    correctAnswer: "B",
    explanation: "Spring Data JDBC is simpler, focusing on aggregates without lazy loading or proxies.",
    topic: "Spring Data",
    difficulty: "medium"
  },
  {
    id: 180,
    question: "MongoDB doc mapping:",
    options: ["@Entity", "@Document and @Id", "@Table", "@Column"],
    correctAnswer: "B",
    explanation: "MongoDB documents are mapped using @Document and @Id annotations.",
    topic: "Spring Data",
    difficulty: "easy"
  },
  {
    id: 181,
    question: "Upsert in MongoTemplate:",
    options: ["update().upsert()", "insertOrUpdate()", "saveOrUpdate()", "merge()"],
    correctAnswer: "A",
    explanation: "MongoTemplate supports upsert operations using update().upsert() pattern.",
    topic: "Spring Data",
    difficulty: "medium"
  },
  {
    id: 182,
    question: "Indexing a Mongo field:",
    options: ["@Indexed", "@Index (JPA)", "@MongoKey", "@Constraint"],
    correctAnswer: "A",
    explanation: "@Indexed annotation is used to create indexes on MongoDB fields.",
    topic: "Spring Data",
    difficulty: "easy"
  },
  {
    id: 183,
    question: "Specifications (JPA) live in:",
    options: ["JpaSpecificationExecutor", "CrudRepository only", "MongoRepository", "JdbcAggregateTemplate"],
    correctAnswer: "A",
    explanation: "JPA Specifications are used with JpaSpecificationExecutor for dynamic queries.",
    topic: "Spring Data",
    difficulty: "medium"
  },
  {
    id: 184,
    question: "Transaction demarcation default:",
    options: ["Repository auto-TX always", "Use @Transactional on service layer", "Only at controller", "Mongo doesn't support any TX"],
    correctAnswer: "B",
    explanation: "Best practice is to use @Transactional at the service layer for transaction demarcation.",
    topic: "Spring Data",
    difficulty: "medium"
  },

  // Microservices (185-194)
  {
    id: 185,
    question: "Spring Cloud Gateway routes are defined via:",
    options: ["Controllers", "Predicates & Filters (YAML/Java DSL)", "JPA entities", "Servlet filters only"],
    correctAnswer: "B",
    explanation: "Spring Cloud Gateway routes are defined using predicates and filters in YAML or Java DSL.",
    topic: "Microservices",
    difficulty: "medium"
  },
  {
    id: 186,
    question: "Path-based routing uses predicate:",
    options: ["Host", "Path", "Method", "Header"],
    correctAnswer: "B",
    explanation: "Path predicate is used for path-based routing in Spring Cloud Gateway.",
    topic: "Microservices",
    difficulty: "easy"
  },
  {
    id: 187,
    question: "Centralized external config server provides:",
    options: ["Per-service code", "Config properties from Git/SVN and live refresh", "Only env vars", "Only YAML merging"],
    correctAnswer: "B",
    explanation: "Spring Cloud Config Server provides centralized configuration from Git/SVN with live refresh capabilities.",
    topic: "Microservices",
    difficulty: "medium"
  },
  {
    id: 188,
    question: "Refreshing properties at runtime commonly needs:",
    options: ["/actuator/refresh (+ @RefreshScope)", "Restart app", "Delete config", "Change profile only"],
    correctAnswer: "A",
    explanation: "Runtime property refresh uses /actuator/refresh endpoint with @RefreshScope annotation.",
    topic: "Microservices",
    difficulty: "medium"
  },
  {
    id: 189,
    question: "Circuit breaker states:",
    options: ["Closed → Open → Half-Open", "On → Off", "Idle → Busy", "Red → Green"],
    correctAnswer: "A",
    explanation: "Circuit breaker has three states: Closed (normal), Open (failing), Half-Open (testing).",
    topic: "Microservices",
    difficulty: "medium"
  },
  {
    id: 190,
    question: "Resilience4j annotation:",
    options: ["@HystrixCommand", "@CircuitBreaker(name=\"x\", fallbackMethod=\"y\")", "@Breaker", "@Retryable only"],
    correctAnswer: "B",
    explanation: "Resilience4j uses @CircuitBreaker annotation with name and fallbackMethod parameters.",
    topic: "Microservices",
    difficulty: "medium"
  },
  {
    id: 191,
    question: "Feign enables HTTP clients by:",
    options: ["Implementing interfaces annotated with @FeignClient", "Extending JpaRepository", "Using JdbcTemplate", "Adding controllers"],
    correctAnswer: "A",
    explanation: "Feign creates HTTP clients by implementing interfaces annotated with @FeignClient.",
    topic: "Microservices",
    difficulty: "easy"
  },
  {
    id: 192,
    question: "Timeouts for Feign:",
    options: ["Unconfigurable", "Via feign.client.config.default.connectTimeout/readTimeout or spring.cloud.openfeign…", "Only via code", "Actuator only"],
    correctAnswer: "B",
    explanation: "Feign timeouts are configured via feign.client.config properties or spring.cloud.openfeign properties.",
    topic: "Microservices",
    difficulty: "hard"
  },
  {
    id: 193,
    question: "Propagating auth to downstream from Gateway:",
    options: ["Drop headers", "Pass/validate JWT in Authorization: Bearer", "Cookies always", "Session replication"],
    correctAnswer: "B",
    explanation: "Authentication is typically propagated using JWT tokens in Authorization Bearer headers.",
    topic: "Microservices",
    difficulty: "medium"
  },
  {
    id: 194,
    question: "Discovery + Gateway load-balancing uses:",
    options: ["Spring Cloud LoadBalancer/Eureka (or other)", "JDBC", "Kafka", "Only Nginx"],
    correctAnswer: "A",
    explanation: "Spring Cloud Gateway uses Spring Cloud LoadBalancer with service discovery like Eureka.",
    topic: "Microservices",
    difficulty: "medium"
  },

  // Additional questions to reach closer to 200 for System Design section
  {
    id: 195,
    question: "What is the primary benefit of using design patterns?",
    options: ["Faster code execution", "Reusable solutions to common problems", "Reduced memory usage", "Automatic testing"],
    correctAnswer: "B",
    explanation: "Design patterns provide reusable solutions to commonly occurring problems in software design.",
    topic: "Design Patterns",
    difficulty: "easy"
  },
  {
    id: 196,
    question: "Which pattern ensures a class has only one instance?",
    options: ["Factory", "Singleton", "Builder", "Observer"],
    correctAnswer: "B",
    explanation: "Singleton pattern ensures a class has only one instance and provides global access to it.",
    topic: "Design Patterns",
    difficulty: "easy"
  },
  {
    id: 197,
    question: "What is the main purpose of the Factory pattern?",
    options: ["Create objects without specifying exact class", "Ensure single instance", "Observe state changes", "Build complex objects"],
    correctAnswer: "A",
    explanation: "Factory pattern creates objects without specifying the exact class to create.",
    topic: "Design Patterns",
    difficulty: "easy"
  },
  {
    id: 198,
    question: "Observer pattern is used for:",
    options: ["Creating objects", "Dependency notification", "Data validation", "Memory management"],
    correctAnswer: "B",
    explanation: "Observer pattern defines a dependency between objects so that when one changes, dependents are notified.",
    topic: "Design Patterns",
    difficulty: "medium"
  },
  {
    id: 199,
    question: "What does the Builder pattern help with?",
    options: ["Singleton creation", "Complex object construction", "Event handling", "Data access"],
    correctAnswer: "B",
    explanation: "Builder pattern helps construct complex objects step by step.",
    topic: "Design Patterns",
    difficulty: "medium"
  },
  {
    id: 200,
    question: "Which principle suggests classes should be open for extension but closed for modification?",
    options: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation"],
    correctAnswer: "B",
    explanation: "Open/Closed Principle states that software entities should be open for extension but closed for modification.",
    topic: "SOLID Principles",
    difficulty: "medium"
  },

  // Cloud Computing Section (201-400)
  // Java Core Concepts (201-213)
  {
    id: 201,
    question: "Which of the following statements is correct about the keywords final, finally, and finalize in Java?",
    options: [
      "final is a block that always executes, finally makes a variable constant, finalize is used for garbage collection",
      "final makes a variable constant, finally is a block that always executes, finalize is a method called before garbage collection",
      "final prevents method overrides, finally makes a method final, finalize is the same as finally",
      "final, finally, and finalize are all synonyms and serve the same purpose"
    ],
    correctAnswer: "B",
    explanation: "final makes variables constant/methods non-overridable, finally is always executed, finalize is called before GC.",
    topic: "Java Core",
    difficulty: "medium"
  },
  {
    id: 202,
    question: "Which of these is NOT a keyword used in Java exception handling?",
    options: ["try", "catch", "thrown", "finally"],
    correctAnswer: "C",
    explanation: "The correct keyword is 'throws', not 'thrown'. The keywords are try, catch, throw, throws, and finally.",
    topic: "Exception Handling",
    difficulty: "easy"
  },
  {
    id: 203,
    question: "Which keyword must be used to start a block of code that monitors for exceptions?",
    options: ["try", "catch", "throw", "finally"],
    correctAnswer: "A",
    explanation: "The 'try' keyword starts a block that monitors for exceptions.",
    topic: "Exception Handling",
    difficulty: "easy"
  },
  {
    id: 204,
    question: "Which keyword is used to handle an exception that has been thrown within a try block?",
    options: ["throw", "finally", "retry", "catch"],
    correctAnswer: "D",
    explanation: "The 'catch' keyword is used to handle exceptions thrown in a try block.",
    topic: "Exception Handling",
    difficulty: "easy"
  },
  {
    id: 205,
    question: "Which keyword in Java is used to manually trigger an exception?",
    options: ["throw", "throws", "new", "try"],
    correctAnswer: "A",
    explanation: "The 'throw' keyword is used to manually trigger/throw an exception.",
    topic: "Exception Handling",
    difficulty: "easy"
  },
  {
    id: 206,
    question: "In Java, which block of code is always executed, regardless of whether an exception is thrown or caught?",
    options: ["catch", "final", "finally", "end"],
    correctAnswer: "C",
    explanation: "The 'finally' block always executes, whether an exception occurs or not.",
    topic: "Exception Handling",
    difficulty: "easy"
  },
  {
    id: 207,
    question: "Which annotation is used to indicate that an interface is intended to be a functional interface?",
    options: ["@FunctionInterface", "@FunctionalInterface", "@Lambda", "@Interface"],
    correctAnswer: "B",
    explanation: "@FunctionalInterface indicates an interface is intended for lambda expressions (single abstract method).",
    topic: "Functional Programming",
    difficulty: "easy"
  },
  {
    id: 208,
    question: "What is the purpose of the Optional class in Java?",
    options: [
      "To provide a way to represent optional values that may or may not be present",
      "To throw exceptions if a value is not present",
      "To create a list of possible values",
      "To mark a method as optional"
    ],
    correctAnswer: "A",
    explanation: "Optional provides a container for values that may or may not be present, avoiding null references.",
    topic: "Java 8 Features",
    difficulty: "medium"
  },
  {
    id: 209,
    question: "Which of the following best describes \"dependency injection\"?",
    options: [
      "A pattern where a class provides its own dependencies internally",
      "A feature that injects dependencies into code by bytecode manipulation",
      "A design pattern where an external source provides the required dependencies to a class",
      "A way to encrypt dependencies"
    ],
    correctAnswer: "C",
    explanation: "Dependency injection is a pattern where dependencies are provided by an external source rather than created internally.",
    topic: "Design Patterns",
    difficulty: "medium"
  },
  {
    id: 210,
    question: "Which Java package contains the core classes for file and stream-based I/O operations?",
    options: ["java.nio", "java.util", "java.io", "java.text"],
    correctAnswer: "C",
    explanation: "java.io package contains core classes for input/output operations including File, InputStream, OutputStream.",
    topic: "I/O Operations",
    difficulty: "easy"
  },
  {
    id: 211,
    question: "In the Java module system (introduced in Java 9), which keyword is used to define a module?",
    options: ["package", "module", "import", "requires"],
    correctAnswer: "B",
    explanation: "The 'module' keyword is used to define a module in module-info.java file.",
    topic: "Java 9 Features",
    difficulty: "medium"
  },
  {
    id: 212,
    question: "Which feature introduced in Java 8 allows you to pass behavior as a parameter to methods?",
    options: ["Collections", "Lambdas (lambda expressions)", "Multithreading", "Generics"],
    correctAnswer: "B",
    explanation: "Lambda expressions allow passing behavior (code) as parameters to methods.",
    topic: "Lambda Expressions",
    difficulty: "easy"
  },
  {
    id: 213,
    question: "Which Java collection class preserves elements in insertion order and allows at most one null key/value?",
    options: ["HashMap", "TreeMap", "TreeSet", "LinkedHashMap"],
    correctAnswer: "D",
    explanation: "LinkedHashMap maintains insertion order and allows one null key and multiple null values.",
    topic: "Collections",
    difficulty: "medium"
  },

  // Collections Framework (214-225)
  {
    id: 214,
    question: "A List in Java accesses any element by its:",
    options: ["key", "index", "value", "position"],
    correctAnswer: "B",
    explanation: "List interface provides indexed access to elements using get(index) method.",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 215,
    question: "Which of the following collection classes allows duplicate elements?",
    options: ["ArrayList", "HashSet", "LinkedHashSet", "TreeSet"],
    correctAnswer: "A",
    explanation: "ArrayList (List implementation) allows duplicate elements, while Set implementations don't.",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 216,
    question: "Which class in the Java Collections Framework is implemented using a balanced tree?",
    options: ["HashMap", "LinkedList", "TreeMap", "ArrayList"],
    correctAnswer: "C",
    explanation: "TreeMap is implemented using a red-black tree (balanced binary search tree).",
    topic: "Collections",
    difficulty: "medium"
  },
  {
    id: 217,
    question: "Which collection class maintains insertion order of elements and allows null elements?",
    options: ["HashSet", "LinkedHashSet", "TreeSet", "PriorityQueue"],
    correctAnswer: "B",
    explanation: "LinkedHashSet maintains insertion order and allows null elements, unlike TreeSet.",
    topic: "Collections",
    difficulty: "medium"
  },
  {
    id: 218,
    question: "Which statement about the Collection interface is NOT true?",
    options: [
      "Collection is the root interface of the Java Collections Framework",
      "Collection extends the Iterable interface",
      "Collection provides methods to access elements by index",
      "Collection can represent groups of objects"
    ],
    correctAnswer: "C",
    explanation: "Collection interface doesn't provide indexed access; that's specific to List interface.",
    topic: "Collections",
    difficulty: "medium"
  },
  {
    id: 219,
    question: "Which collection interface in Java does NOT allow duplicate elements?",
    options: ["List", "Queue", "Set", "Deque"],
    correctAnswer: "C",
    explanation: "Set interface defines collections that cannot contain duplicate elements.",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 220,
    question: "You need to store elements in a collection that guarantees no duplicate entries. Which should you use?",
    options: ["ArrayList", "HashSet", "LinkedList", "PriorityQueue"],
    correctAnswer: "B",
    explanation: "HashSet implements Set interface which guarantees no duplicate elements.",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 221,
    question: "Which collection type preserves the insertion order of key-value pairs?",
    options: ["HashMap", "TreeMap", "LinkedHashMap", "HashSet"],
    correctAnswer: "C",
    explanation: "LinkedHashMap maintains the insertion order of key-value pairs.",
    topic: "Collections",
    difficulty: "medium"
  },
  {
    id: 222,
    question: "Which of the following is NOT an interface in the Java Collections Framework?",
    options: ["List", "Set", "ArrayList", "Collection"],
    correctAnswer: "C",
    explanation: "ArrayList is a concrete class that implements List interface, not an interface itself.",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 223,
    question: "Which interface declares the core methods common to all Java collection classes?",
    options: ["List", "Set", "Collection", "Map"],
    correctAnswer: "C",
    explanation: "Collection interface is the root interface that declares core methods like add(), remove(), size().",
    topic: "Collections",
    difficulty: "easy"
  },
  {
    id: 224,
    question: "Which of the following methods is NOT defined in the Collection interface?",
    options: ["add", "remove", "get", "size"],
    correctAnswer: "C",
    explanation: "get() method is specific to List interface for indexed access, not in Collection interface.",
    topic: "Collections",
    difficulty: "medium"
  },
  {
    id: 225,
    question: "Which of the following classes does NOT implement the Map interface?",
    options: ["HashMap", "TreeMap", "LinkedHashMap", "ArrayList"],
    correctAnswer: "D",
    explanation: "ArrayList implements List interface, not Map interface.",
    topic: "Collections",
    difficulty: "easy"
  },

  // Concurrency and Threading (226-231)
  {
    id: 226,
    question: "What does declaring a variable as volatile do in Java?",
    options: [
      "Ensures atomicity of operations on the variable",
      "Keeps a local copy of the variable in each thread",
      "Forces reads/writes to go directly to main memory for visibility",
      "Automatically synchronizes access to the variable"
    ],
    correctAnswer: "C",
    explanation: "volatile ensures visibility by forcing reads/writes to main memory, but doesn't guarantee atomicity.",
    topic: "Concurrency",
    difficulty: "medium"
  },
  {
    id: 227,
    question: "Which keyword in Java ensures that only one thread at a time can execute a block of code?",
    options: ["synchronized", "volatile", "transient", "atomic"],
    correctAnswer: "A",
    explanation: "synchronized keyword provides mutual exclusion, allowing only one thread to execute the code block.",
    topic: "Concurrency",
    difficulty: "easy"
  },
  {
    id: 228,
    question: "Which method should be called to start the execution of a new thread in Java?",
    options: ["run()", "start()", "execute()", "invoke()"],
    correctAnswer: "B",
    explanation: "start() method creates a new thread and calls the run() method in that new thread.",
    topic: "Concurrency",
    difficulty: "easy"
  },
  {
    id: 229,
    question: "Which method causes the current thread to wait until the specified thread terminates?",
    options: ["suspend()", "wait()", "sleep()", "join()"],
    correctAnswer: "D",
    explanation: "join() method causes the current thread to wait until the thread on which it's called terminates.",
    topic: "Concurrency",
    difficulty: "medium"
  },
  {
    id: 230,
    question: "What is a key benefit of using virtual threads (Project Loom) in Java?",
    options: [
      "They are implemented using OS-level native threads",
      "They allow creating many more threads than platform threads with minimal overhead",
      "They do not support concurrent execution",
      "They can only be used with the ExecutorService"
    ],
    correctAnswer: "B",
    explanation: "Virtual threads are lightweight and allow creating millions of threads with minimal overhead.",
    topic: "Virtual Threads",
    difficulty: "hard"
  },

  // Maven Build Tool (231-234)
  {
    id: 231,
    question: "What is Maven primarily used for in Java projects?",
    options: ["Code formatting", "Dependency injection", "Project build and management", "Version control"],
    correctAnswer: "C",
    explanation: "Maven is a build automation and project management tool for Java projects.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 232,
    question: "In a Maven project, what is the core configuration file called?",
    options: ["mvn.xml", "pom.xml", "project.xml", "build.xml"],
    correctAnswer: "B",
    explanation: "pom.xml (Project Object Model) is the core configuration file in Maven projects.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 233,
    question: "Which Maven command removes the target/ directory and its contents?",
    options: ["mvn delete", "mvn remove", "mvn clean", "mvn reset"],
    correctAnswer: "C",
    explanation: "mvn clean removes the target directory and all compiled files.",
    topic: "Maven",
    difficulty: "easy"
  },
  {
    id: 234,
    question: "Which Maven command compiles the code and installs the artifact into the local repository?",
    options: ["mvn clean compile", "mvn test package", "mvn clean install", "mvn package verify"],
    correctAnswer: "C",
    explanation: "mvn clean install cleans, compiles, tests, packages, and installs the artifact to local repository.",
    topic: "Maven",
    difficulty: "easy"
  },

  // Lambda Expressions and Functional Programming (235-239)
  {
    id: 235,
    question: "Can a Java lambda expression have a body with multiple statements?",
    options: [
      "No, it can only be a single expression",
      "Yes, if the statements are enclosed in curly braces",
      "Yes, but it cannot contain any return statement",
      "No, it cannot contain any curly braces"
    ],
    correctAnswer: "B",
    explanation: "Lambda expressions can have multiple statements when enclosed in curly braces { }.",
    topic: "Lambda Expressions",
    difficulty: "medium"
  },
  {
    id: 236,
    question: "Which functional interface in Java returns a boolean result?",
    options: ["Function", "Predicate", "Consumer", "Supplier"],
    correctAnswer: "B",
    explanation: "Predicate<T> functional interface has test() method that returns boolean.",
    topic: "Functional Programming",
    difficulty: "easy"
  },
  {
    id: 237,
    question: "In Java, which symbol is used to create a method reference?",
    options: ["->", "::", "=>", "@@"],
    correctAnswer: "B",
    explanation: "The :: (double colon) operator is used for method references in Java.",
    topic: "Method References",
    difficulty: "easy"
  },
  {
    id: 238,
    question: "What is the use of the Supplier functional interface in Java?",
    options: [
      "It accepts a single argument and returns a boolean",
      "It returns a result without taking any arguments",
      "It accepts two arguments and returns a result",
      "It represents an operation that does not return a value"
    ],
    correctAnswer: "B",
    explanation: "Supplier<T> provides values without taking any input arguments.",
    topic: "Functional Programming",
    difficulty: "easy"
  },
  {
    id: 239,
    question: "Which annotation indicates that an interface is intended to be a functional interface?",
    options: ["@LambdaInterface", "@FunctionalInterface", "@Interface", "@ServiceInterface"],
    correctAnswer: "B",
    explanation: "@FunctionalInterface annotation marks interfaces intended for lambda expressions.",
    topic: "Functional Programming",
    difficulty: "easy"
  },

  // JDBC Database Connectivity (240-248)
  {
    id: 240,
    question: "What is the main purpose of JDBC (Java Database Connectivity) in Java?",
    options: [
      "To manage user authentication",
      "To connect and execute operations on a database",
      "To enhance file I/O operations",
      "To optimize network connections"
    ],
    correctAnswer: "B",
    explanation: "JDBC provides Java API for connecting to and executing operations on databases.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 241,
    question: "Which JDBC method is used to establish a connection to the database?",
    options: [
      "DriverManager.connect()",
      "DriverManager.openConnection()",
      "DriverManager.getConnection()",
      "DriverManager.newConnection()"
    ],
    correctAnswer: "C",
    explanation: "DriverManager.getConnection() is the standard method to establish database connections.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 242,
    question: "In JDBC, which interface represents a connection to the database?",
    options: ["Connection", "Statement", "ResultSet", "DataSource"],
    correctAnswer: "A",
    explanation: "Connection interface represents a session with a specific database.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 243,
    question: "Which JDBC class or interface is used for executing precompiled SQL statements with parameters?",
    options: ["Statement", "PreparedStatement", "CallableStatement", "ResultSet"],
    correctAnswer: "B",
    explanation: "PreparedStatement is used for precompiled SQL statements with parameters.",
    topic: "JDBC",
    difficulty: "medium"
  },
  {
    id: 244,
    question: "What exception does JDBC most commonly throw for database access errors?",
    options: ["IOException", "SQLException", "DatabaseException", "DataAccessException"],
    correctAnswer: "B",
    explanation: "SQLException is the standard exception thrown for database access errors in JDBC.",
    topic: "JDBC",
    difficulty: "easy"
  },
  {
    id: 245,
    question: "Which JDBC interface is used to call stored procedures in the database?",
    options: ["Statement", "PreparedStatement", "CallableStatement", "ResultSet"],
    correctAnswer: "C",
    explanation: "CallableStatement is used to execute stored procedures in the database.",
    topic: "JDBC",
    difficulty: "medium"
  },
  {
    id: 246,
    question: "Arrange the basic JDBC operations in the correct order:",
    options: [
      "Create Statement → Connect → Execute Query → Close Connection",
      "Connect → Create Statement → Execute Query → Close Connection",
      "Connect → Execute Query → Create Statement → Close Connection",
      "Execute Query → Connect → Create Statement → Close Connection"
    ],
    correctAnswer: "B",
    explanation: "Correct order: Connect to database, create statement, execute query, close connection.",
    topic: "JDBC",
    difficulty: "medium"
  },
  {
    id: 247,
    question: "What will this code print if the database connects successfully?\n\nConnection con = DriverManager.getConnection(dbURL, user, pass);\nif (con != null) {\n    System.out.println(\"Connection Successful\");\n}",
    options: ["Connection Failed", "Exception Thrown", "Connection Successful", "No output"],
    correctAnswer: "C",
    explanation: "If connection is successful, con will not be null, so it prints 'Connection Successful'.",
    topic: "JDBC",
    difficulty: "easy"
  },

  // Spring Framework Core (248-253)
  {
    id: 248,
    question: "Which of the following is not a true statement about Spring Core concepts?",
    options: [
      "The Spring Core module provides the IoC container and bean management",
      "The Spring Core module can be used with modules like MVC and AOP",
      "The Spring Core module is not required to build a Spring MVC application",
      "Spring Core supports dependency injection out of the box"
    ],
    correctAnswer: "C",
    explanation: "Spring Core is required for Spring MVC as it provides the fundamental IoC container.",
    topic: "Spring Core",
    difficulty: "medium"
  },
  {
    id: 249,
    question: "Spring's IoC container can inject which types of dependencies?",
    options: [
      "Primitive types (e.g., int, float)",
      "Collection types (e.g., List, Map)",
      "Custom reference types (objects)",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Spring IoC can inject primitive types, collections, and custom objects.",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 250,
    question: "What is the default scope of a Spring bean if no scope is specified?",
    options: ["singleton", "prototype", "request", "session"],
    correctAnswer: "A",
    explanation: "Singleton is the default scope for Spring beans (one instance per container).",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 251,
    question: "How can you implement dependency injection in Spring?",
    options: [
      "Only by using XML configuration",
      "Only by using annotations",
      "By using XML configuration or annotations (both ways)",
      "Spring does not support dependency injection"
    ],
    correctAnswer: "C",
    explanation: "Spring supports both XML-based and annotation-based dependency injection.",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 252,
    question: "What does the @Autowired annotation in Spring do?",
    options: [
      "Marks a method to be run after bean creation",
      "Marks a variable to be injected with a Spring-managed bean by type",
      "Marks a class for component-scanning",
      "Defines the scope of a Spring bean"
    ],
    correctAnswer: "B",
    explanation: "@Autowired enables automatic dependency injection by type.",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 253,
    question: "Which interface should generally be used to get all features of a bean container including internationalization?",
    options: ["BeanFactory", "ApplicationContext", "BeanWrapper", "BeanDefinition"],
    correctAnswer: "B",
    explanation: "ApplicationContext provides advanced features like internationalization and event publication.",
    topic: "Spring Core",
    difficulty: "medium"
  },

  // Hibernate and JPA (254-264)
  {
    id: 254,
    question: "Which of these is not an object state in Hibernate?",
    options: ["Attached (or managed)", "Detached", "Persistent", "Transient"],
    correctAnswer: "A",
    explanation: "The correct state is 'Persistent' or 'Managed', not 'Attached'. States are: transient, persistent, detached, removed.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 255,
    question: "Is SessionFactory in Hibernate thread-safe?",
    options: ["Yes, it is thread-safe", "No, it is not thread-safe", "It depends on configuration", "Only after initialization"],
    correctAnswer: "A",
    explanation: "SessionFactory is thread-safe and can be shared among multiple threads.",
    topic: "Hibernate",
    difficulty: "easy"
  },
  {
    id: 256,
    question: "In JPA/Hibernate, which annotation is used to mark a class as a persistent entity?",
    options: ["@Entity", "@Table", "@Persistent", "@HibernateEntity"],
    correctAnswer: "A",
    explanation: "@Entity annotation marks a class as a JPA entity that can be persisted to database.",
    topic: "Hibernate",
    difficulty: "easy"
  },
  {
    id: 257,
    question: "Which annotation is used to define a many-to-one relationship in Hibernate or JPA?",
    options: ["@OneToMany", "@ManyToOne", "@ManyToMany", "@OneToOne"],
    correctAnswer: "B",
    explanation: "@ManyToOne annotation defines a many-to-one relationship between entities.",
    topic: "Hibernate",
    difficulty: "easy"
  },
  {
    id: 258,
    question: "What is the default fetch type for a @OneToMany association in JPA/Hibernate?",
    options: ["EAGER", "LAZY", "NONE", "DEFAULT"],
    correctAnswer: "B",
    explanation: "@OneToMany associations are LAZY by default to avoid loading large collections unnecessarily.",
    topic: "Hibernate",
    difficulty: "medium"
  },

  // Spring Boot (259-264)
  {
    id: 259,
    question: "What is the primary purpose of Spring Boot starters?",
    options: [
      "To provide project templates",
      "To offer built-in tutorials",
      "To simplify dependency and configuration management (Maven/Gradle)",
      "To expose application metrics"
    ],
    correctAnswer: "C",
    explanation: "Spring Boot starters are opinionated dependency descriptors that simplify dependency management.",
    topic: "Spring Boot",
    difficulty: "easy"
  },
  {
    id: 260,
    question: "Which annotation is equivalent to @Configuration, @EnableAutoConfiguration, and @ComponentScan combined?",
    options: ["@SpringBootConfiguration", "@EnableWebMvc", "@SpringBootApplication", "@AutoConfigure"],
    correctAnswer: "C",
    explanation: "@SpringBootApplication combines @Configuration, @EnableAutoConfiguration, and @ComponentScan.",
    topic: "Spring Boot",
    difficulty: "medium"
  },
  {
    id: 261,
    question: "Which embedded web server is included by default in a Spring Boot web application?",
    options: ["Jetty", "Tomcat", "Undertow", "GlassFish"],
    correctAnswer: "B",
    explanation: "Tomcat is the default embedded web server in Spring Boot web applications.",
    topic: "Spring Boot",
    difficulty: "easy"
  },
  {
    id: 262,
    question: "To enable Actuator endpoints in a Spring Boot application, you need to include which dependency?",
    options: [
      "spring-boot-starter-web",
      "spring-boot-starter-actuator",
      "spring-boot-starter-security",
      "spring-boot-starter-mail"
    ],
    correctAnswer: "B",
    explanation: "spring-boot-starter-actuator dependency enables actuator endpoints for monitoring.",
    topic: "Spring Boot",
    difficulty: "easy"
  },
  {
    id: 263,
    question: "What does Spring Boot's auto-configuration feature do?",
    options: [
      "It automatically detects and configures beans based on classpath settings",
      "It replaces the need for any configuration at all",
      "It only works when running on a cloud platform",
      "It disables user-defined beans"
    ],
    correctAnswer: "A",
    explanation: "Auto-configuration automatically configures beans based on classpath and existing beans.",
    topic: "Spring Boot",
    difficulty: "medium"
  },

  // Spring Data (264-269)
  {
    id: 264,
    question: "Which of the following is not a Spring Data module?",
    options: ["Spring Data JPA", "Spring Data MongoDB", "Spring Data Hibernate", "Spring Data Redis"],
    correctAnswer: "C",
    explanation: "There's no Spring Data Hibernate - Spring Data JPA works with Hibernate as JPA provider.",
    topic: "Spring Data",
    difficulty: "medium"
  },
  {
    id: 265,
    question: "Which annotation is used to mark a Spring Data repository interface?",
    options: ["@Repository", "@Service", "@Controller", "@Component"],
    correctAnswer: "A",
    explanation: "@Repository annotation marks data access components and enables exception translation.",
    topic: "Spring Data",
    difficulty: "easy"
  },
  {
    id: 266,
    question: "Which of the following is NOT a valid prefix for query methods in Spring Data repositories?",
    options: ["findById", "findByFirstName", "countByLastName", "removeByAge"],
    correctAnswer: "D",
    explanation: "removeByAge is not a valid query method prefix - use deleteBy or removeBy for deletion.",
    topic: "Spring Data",
    difficulty: "medium"
  },
  {
    id: 267,
    question: "Which of the following is NOT a valid return type for repository methods in Spring Data?",
    options: ["void", "Iterable", "List", "Optional"],
    correctAnswer: "A",
    explanation: "void is not typically used as return type for query methods - it's used for delete operations.",
    topic: "Spring Data",
    difficulty: "medium"
  },
  {
    id: 268,
    question: "Which statement about Spring Data repositories is NOT true?",
    options: [
      "They can be defined for both entities and value objects",
      "They provide basic CRUD operations by default",
      "Custom query methods can be defined using method names",
      "They can only be used with relational databases"
    ],
    correctAnswer: "D",
    explanation: "Spring Data supports various databases including NoSQL databases like MongoDB, Redis, etc.",
    topic: "Spring Data",
    difficulty: "medium"
  },

  // Spring Cloud and Microservices (269-274)
  {
    id: 269,
    question: "What is Spring Cloud Gateway used for?",
    options: [
      "Storing configuration properties",
      "Service discovery",
      "Routing and filtering requests in a microservice architecture (API Gateway)",
      "Circuit breaking"
    ],
    correctAnswer: "C",
    explanation: "Spring Cloud Gateway provides API gateway functionality for routing and filtering requests.",
    topic: "Spring Cloud",
    difficulty: "medium"
  },
  {
    id: 270,
    question: "What is Spring Cloud Config used for?",
    options: [
      "Centralized storage and serving of application configuration properties",
      "Authenticating microservices",
      "Providing a service registry",
      "Testing microservices performance"
    ],
    correctAnswer: "A",
    explanation: "Spring Cloud Config provides centralized configuration management for microservices.",
    topic: "Spring Cloud",
    difficulty: "medium"
  },
  {
    id: 271,
    question: "What is the Spring Cloud Circuit Breaker feature used for?",
    options: [
      "Encrypting configuration data",
      "Providing a resilient mechanism to handle service failures gracefully (fallback)",
      "Scaling containers",
      "Managing distributed transactions"
    ],
    correctAnswer: "B",
    explanation: "Circuit Breaker provides resilience patterns with fallback mechanisms for service failures.",
    topic: "Spring Cloud",
    difficulty: "medium"
  },
  {
    id: 272,
    question: "Which annotation is used to define a Feign client interface in Spring Cloud OpenFeign?",
    options: ["@RestClient", "@WebClient", "@FeignClient", "@LoadBalanced"],
    correctAnswer: "C",
    explanation: "@FeignClient annotation is used to define declarative REST clients.",
    topic: "Spring Cloud",
    difficulty: "easy"
  },
  {
    id: 273,
    question: "Which statement about Spring Cloud OpenFeign is true?",
    options: [
      "It is used for asynchronous messaging between services",
      "It allows defining HTTP clients via annotated interfaces and integrates with Ribbon/Eureka",
      "It only works with XML configuration",
      "It is a database connectivity tool"
    ],
    correctAnswer: "B",
    explanation: "OpenFeign creates HTTP clients through annotated interfaces with service discovery integration.",
    topic: "Spring Cloud",
    difficulty: "medium"
  },

  // Advanced Collections (274-280)
  {
    id: 274,
    question: "In the Java Collections Framework, which class implements a last-in-first-out (LIFO) stack?",
    options: ["LinkedList", "Vector", "Stack", "ArrayDeque"],
    correctAnswer: "C",
    explanation: "Stack class implements LIFO operations, though ArrayDeque is preferred for stack operations.",
    topic: "Collections Advanced",
    difficulty: "easy"
  },
  {
    id: 275,
    question: "Which interface represents a double-ended queue in Java?",
    options: ["List", "Set", "Deque", "Queue"],
    correctAnswer: "C",
    explanation: "Deque interface allows insertion and removal at both ends of the queue.",
    topic: "Collections Advanced",
    difficulty: "medium"
  },
  {
    id: 276,
    question: "Which functional interface represents an operation that takes an argument and returns no result?",
    options: ["Predicate<T>", "Consumer<T>", "Function<T, R>", "Supplier<T>"],
    correctAnswer: "B",
    explanation: "Consumer<T> accepts one argument and returns no result (void operation).",
    topic: "Functional Programming",
    difficulty: "easy"
  },
  {
    id: 277,
    question: "Which functional interface accepts two arguments and returns no result?",
    options: ["BiFunction<T, U, R>", "BiConsumer<T, U>", "BiPredicate<T, U>", "BiSupplier<T, U>"],
    correctAnswer: "B",
    explanation: "BiConsumer<T, U> accepts two arguments and returns no result.",
    topic: "Functional Programming",
    difficulty: "easy"
  },
  {
    id: 278,
    question: "Which Java collection is thread-safe by default?",
    options: ["ArrayList", "Vector", "HashSet", "LinkedList"],
    correctAnswer: "B",
    explanation: "Vector is synchronized and thread-safe, unlike ArrayList.",
    topic: "Collections Advanced",
    difficulty: "medium"
  },

  // Advanced JDBC (279-285)
  {
    id: 279,
    question: "Which method of Statement is used to execute data manipulation statements like INSERT, UPDATE, or DELETE?",
    options: ["executeQuery()", "executeUpdate()", "execute()", "executeInsert()"],
    correctAnswer: "B",
    explanation: "executeUpdate() is used for DML statements that modify data (INSERT, UPDATE, DELETE).",
    topic: "JDBC",
    difficulty: "medium"
  },
  {
    id: 280,
    question: "Which class is used to manage JDBC drivers and connections in Java?",
    options: ["Driver", "DriverManager", "DriverLoader", "DataSource"],
    correctAnswer: "B",
    explanation: "DriverManager manages JDBC drivers and creates database connections.",
    topic: "JDBC",
    difficulty: "easy"
  },

  // Spring Advanced Concepts (281-295)
  {
    id: 281,
    question: "Which interface in Spring provides advanced features like internationalization and event propagation?",
    options: ["BeanFactory", "ApplicationContext", "BeanWrapper", "BeanDefinition"],
    correctAnswer: "B",
    explanation: "ApplicationContext extends BeanFactory with additional enterprise features.",
    topic: "Spring Core",
    difficulty: "medium"
  },
  {
    id: 282,
    question: "Which annotation is a specialization of @Component for data access classes?",
    options: ["@Service", "@Controller", "@Repository", "@ComponentScan"],
    correctAnswer: "C",
    explanation: "@Repository is specialized for data access objects and enables exception translation.",
    topic: "Spring Core",
    difficulty: "easy"
  },
  {
    id: 283,
    question: "Which Session method in Hibernate will persist a transient instance to the database?",
    options: ["merge()", "save()", "persist()", "update()"],
    correctAnswer: "C",
    explanation: "persist() makes a transient instance persistent (managed) in the current session.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 284,
    question: "Which default fetch type is used for @ManyToOne associations in JPA/Hibernate?",
    options: ["LAZY", "EAGER", "MANUAL", "BATCH"],
    correctAnswer: "B",
    explanation: "@ManyToOne associations are EAGER by default in JPA specification.",
    topic: "Hibernate",
    difficulty: "medium"
  },
  {
    id: 285,
    question: "Which interface in Spring Data JPA provides CRUD operations and JPA-specific methods?",
    options: ["CrudRepository", "JpaRepository", "PagingAndSortingRepository", "MongoRepository"],
    correctAnswer: "B",
    explanation: "JpaRepository extends PagingAndSortingRepository and adds JPA-specific methods.",
    topic: "Spring Data",
    difficulty: "medium"
  },
  {
    id: 286,
    question: "Which interface should you extend to create a MongoDB repository in Spring Data MongoDB?",
    options: ["JpaRepository", "MongoRepository", "CrudRepository", "ReactiveMongoRepository"],
    correctAnswer: "B",
    explanation: "MongoRepository is the specific interface for MongoDB operations in Spring Data.",
    topic: "Spring Data",
    difficulty: "easy"
  },
  {
    id: 287,
    question: "What is the purpose of a service registry such as Eureka in microservices?",
    options: [
      "Distributing configuration properties",
      "Keeping track of service instances and enabling service discovery",
      "Managing database transactions",
      "Handling client-side caching"
    ],
    correctAnswer: "B",
    explanation: "Service registry maintains a list of available service instances for discovery.",
    topic: "Microservices",
    difficulty: "medium"
  },
  {
    id: 288,
    question: "What is Spring Cloud Circuit Breaker's default implementation library?",
    options: ["Hystrix", "Resilience4j", "RxJava", "None, it is application-server dependent"],
    correctAnswer: "B",
    explanation: "Resilience4j is the default circuit breaker implementation in recent Spring Cloud versions.",
    topic: "Spring Cloud",
    difficulty: "medium"
  },

  // Testing Frameworks (289-292)
  {
    id: 289,
    question: "Which annotation represents JUnit 5's annotation to denote a test method?",
    options: ["@Test", "@Before", "@TestCase", "@RunTest"],
    correctAnswer: "A",
    explanation: "@Test annotation marks methods as test methods in JUnit 5.",
    topic: "Testing",
    difficulty: "easy"
  },
  {
    id: 290,
    question: "What is Apache JMeter typically used for in software testing?",
    options: ["Unit testing", "Integration testing", "Performance and load testing", "Security testing"],
    correctAnswer: "C",
    explanation: "JMeter is primarily used for performance and load testing of applications.",
    topic: "Testing",
    difficulty: "easy"
  },

  // Spring MVC (291-295)
  {
    id: 291,
    question: "Which annotation is used in Spring MVC to indicate that a class is a web controller?",
    options: ["@RestController", "@Component", "@Controller", "@WebService"],
    correctAnswer: "C",
    explanation: "@Controller marks a class as a Spring MVC controller for handling web requests.",
    topic: "Spring MVC",
    difficulty: "easy"
  },
  {
    id: 292,
    question: "Which JSP-related technology can be used with Spring MVC to render server-side views?",
    options: [
      "JSTL (JavaServer Pages Standard Tag Library)",
      "JSPX only",
      "No server-side rendering is possible",
      "Only Thymeleaf"
    ],
    correctAnswer: "A",
    explanation: "JSTL can be used with JSP pages for server-side rendering in Spring MVC.",
    topic: "Spring MVC",
    difficulty: "medium"
  },
  {
    id: 293,
    question: "In Spring Boot, which annotation is needed to bind externalized configuration to a class?",
    options: ["@ConfigurationProperties", "@Value", "@Config", "@ExternalConfig"],
    correctAnswer: "A",
    explanation: "@ConfigurationProperties binds external configuration properties to a Java class.",
    topic: "Spring Boot",
    difficulty: "medium"
  },
  {
    id: 294,
    question: "What does the spring.profiles.active property do in a Spring Boot application?",
    options: [
      "Specifies which Spring profile(s) to enable",
      "Sets the active database profile only",
      "Activates the actuator endpoints",
      "Defines the logging level"
    ],
    correctAnswer: "A",
    explanation: "spring.profiles.active determines which Spring profiles are active in the application.",
    topic: "Spring Boot",
    difficulty: "easy"
  },
  {
    id: 295,
    question: "Which of the following is not a type of Spring bean scope?",
    options: ["prototype", "singleton", "transient", "session"],
    correctAnswer: "C",
    explanation: "transient is not a Spring bean scope. Valid scopes include singleton, prototype, request, session.",
    topic: "Spring Core",
    difficulty: "medium"
  },
  {
    id: 296,
    question: "What is Spring Cloud OpenFeign mainly used for in microservices?",
    options: [
      "Declarative REST client for calling other services",
      "Database connectivity",
      "Caching data across services",
      "Service discovery"
    ],
    correctAnswer: "A",
    explanation: "OpenFeign provides declarative REST clients for inter-service communication.",
    topic: "Spring Cloud",
    difficulty: "medium"
  },
  {
    id: 297,
    question: "In JPA, which annotation is used to mark a field as the primary key of an entity?",
    options: ["@Column", "@Id", "@Key", "@PrimaryKey"],
    correctAnswer: "B",
    explanation: "@Id annotation marks a field as the primary key of a JPA entity.",
    topic: "JPA",
    difficulty: "easy"
  },
  {
    id: 298,
    question: "What is Spring Batch mainly designed for?",
    options: [
      "Building batch processing jobs for large-scale data tasks",
      "Real-time web applications",
      "Microservice orchestration",
      "Client-side caching"
    ],
    correctAnswer: "A",
    explanation: "Spring Batch is designed for processing large volumes of data in batch jobs.",
    topic: "Spring Batch",
    difficulty: "medium"
  },
  {
    id: 299,
    question: "What does JUnit stand for, and what is it used for?",
    options: [
      "Java User Interface Testing; for GUI tests",
      "Just Unit; for writing and running unit tests in Java",
      "Java Unity; for integrating services",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "JUnit is a framework for writing and running unit tests in Java applications.",
    topic: "Testing",
    difficulty: "easy"
  },
  {
    id: 300,
    question: "What type of testing is Apache JMeter typically used for?",
    options: ["Unit Testing", "Integration Testing", "Performance and Load Testing", "End-to-End Testing"],
    correctAnswer: "C",
    explanation: "Apache JMeter is primarily used for performance and load testing of applications.",
    topic: "Testing",
    difficulty: "easy"
  },

  // Cloud Computing Section (301-400)
  // Cloud Fundamentals (301-320)
  {
    id: 301,
    question: "What is cloud computing?",
    options: [
      "A type of internet connection",
      "On-demand delivery of IT resources over the internet with pay-as-you-go pricing",
      "A weather prediction system",
      "A type of database"
    ],
    correctAnswer: "B",
    explanation: "Cloud computing provides on-demand access to computing resources over the internet with flexible pricing.",
    topic: "Cloud Fundamentals",
    difficulty: "easy"
  },
  {
    id: 302,
    question: "Which of the following is NOT a cloud service model?",
    options: ["IaaS", "PaaS", "SaaS", "DaaS"],
    correctAnswer: "D",
    explanation: "The three main cloud service models are IaaS (Infrastructure), PaaS (Platform), and SaaS (Software) as a Service.",
    topic: "Cloud Fundamentals",
    difficulty: "easy"
  },
  {
    id: 303,
    question: "What does IaaS stand for?",
    options: [
      "Internet as a Service",
      "Infrastructure as a Service",
      "Integration as a Service",
      "Information as a Service"
    ],
    correctAnswer: "B",
    explanation: "IaaS (Infrastructure as a Service) provides virtualized computing infrastructure over the internet.",
    topic: "Cloud Fundamentals",
    difficulty: "easy"
  },
  {
    id: 304,
    question: "Which cloud deployment model is owned and operated by a single organization?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    correctAnswer: "B",
    explanation: "Private cloud is dedicated to a single organization and can be located on-premises or hosted externally.",
    topic: "Cloud Fundamentals",
    difficulty: "easy"
  },
  {
    id: 305,
    question: "What is the main advantage of cloud computing's elasticity?",
    options: [
      "Fixed resource allocation",
      "Ability to scale resources up or down based on demand",
      "Reduced security",
      "Higher costs"
    ],
    correctAnswer: "B",
    explanation: "Elasticity allows automatic scaling of resources based on demand, optimizing costs and performance.",
    topic: "Cloud Fundamentals",
    difficulty: "medium"
  },
  {
    id: 306,
    question: "Which of the following is a characteristic of cloud computing?",
    options: ["On-demand self-service", "Broad network access", "Resource pooling", "All of the above"],
    correctAnswer: "D",
    explanation: "Cloud computing characteristics include on-demand self-service, broad network access, and resource pooling.",
    topic: "Cloud Fundamentals",
    difficulty: "easy"
  },
  {
    id: 307,
    question: "What does PaaS provide to developers?",
    options: [
      "Only hardware infrastructure",
      "A platform for developing, running, and managing applications",
      "Only software applications",
      "Only network services"
    ],
    correctAnswer: "B",
    explanation: "PaaS provides a complete platform for application development, deployment, and management.",
    topic: "Cloud Fundamentals",
    difficulty: "medium"
  },
  {
    id: 308,
    question: "Which cloud service model gives users the most control over the operating system?",
    options: ["SaaS", "PaaS", "IaaS", "FaaS"],
    correctAnswer: "C",
    explanation: "IaaS provides the most control, including access to virtual machines and operating systems.",
    topic: "Cloud Fundamentals",
    difficulty: "medium"
  },
  {
    id: 309,
    question: "What is a hybrid cloud?",
    options: [
      "A combination of public and private clouds",
      "A cloud that changes providers",
      "A cloud with mixed storage types",
      "A cloud with multiple applications"
    ],
    correctAnswer: "A",
    explanation: "Hybrid cloud combines public and private cloud environments with orchestration between them.",
    topic: "Cloud Fundamentals",
    difficulty: "easy"
  },
  {
    id: 310,
    question: "Which of the following is NOT a benefit of cloud computing?",
    options: ["Cost savings", "Scalability", "Increased capital expenditure", "Global reach"],
    correctAnswer: "C",
    explanation: "Cloud computing typically reduces capital expenditure by converting it to operational expenditure.",
    topic: "Cloud Fundamentals",
    difficulty: "easy"
  },

  // AWS Services (311-350)
  {
    id: 311,
    question: "What does EC2 stand for in AWS?",
    options: [
      "Elastic Compute Cloud",
      "Extended Cloud Computing",
      "Electronic Commerce Cloud",
      "Efficient Computing Cluster"
    ],
    correctAnswer: "A",
    explanation: "EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud.",
    topic: "AWS Services",
    difficulty: "easy"
  },
  {
    id: 312,
    question: "Which AWS service is used for object storage?",
    options: ["EBS", "S3", "EFS", "Glacier"],
    correctAnswer: "B",
    explanation: "S3 (Simple Storage Service) is AWS's object storage service for storing and retrieving data.",
    topic: "AWS Services",
    difficulty: "easy"
  },
  {
    id: 313,
    question: "What is Amazon RDS?",
    options: [
      "A content delivery network",
      "A relational database service",
      "A load balancer",
      "A monitoring service"
    ],
    correctAnswer: "B",
    explanation: "RDS (Relational Database Service) is a managed database service for relational databases.",
    topic: "AWS Services",
    difficulty: "easy"
  },
  {
    id: 314,
    question: "Which AWS service provides a content delivery network (CDN)?",
    options: ["Route 53", "CloudFront", "VPC", "Direct Connect"],
    correctAnswer: "B",
    explanation: "CloudFront is AWS's content delivery network service for fast content delivery globally.",
    topic: "AWS Services",
    difficulty: "easy"
  },
  {
    id: 315,
    question: "What is the purpose of AWS IAM?",
    options: [
      "Infrastructure monitoring",
      "Identity and Access Management",
      "Internet connection management",
      "Image processing"
    ],
    correctAnswer: "B",
    explanation: "IAM (Identity and Access Management) controls access to AWS resources and services.",
    topic: "AWS Services",
    difficulty: "easy"
  },
  {
    id: 316,
    question: "Which AWS service is used for serverless computing?",
    options: ["EC2", "Lambda", "ECS", "Batch"],
    correctAnswer: "B",
    explanation: "Lambda allows running code without provisioning or managing servers (serverless computing).",
    topic: "AWS Services",
    difficulty: "medium"
  },
  {
    id: 317,
    question: "What does VPC stand for in AWS?",
    options: [
      "Virtual Private Cloud",
      "Very Powerful Computing",
      "Verified Public Cloud",
      "Virtual Processing Center"
    ],
    correctAnswer: "A",
    explanation: "VPC (Virtual Private Cloud) provides isolated network environments within AWS.",
    topic: "AWS Services",
    difficulty: "easy"
  },
  {
    id: 318,
    question: "Which AWS service is used for monitoring and observability?",
    options: ["CloudWatch", "CloudTrail", "Config", "Inspector"],
    correctAnswer: "A",
    explanation: "CloudWatch provides monitoring, metrics, and alerting for AWS resources and applications.",
    topic: "AWS Services",
    difficulty: "easy"
  },
  {
    id: 319,
    question: "What is Amazon EBS?",
    options: [
      "Elastic Block Store - block storage for EC2",
      "Elastic Bean Stalk - application deployment",
      "Elastic Buffer Service - data buffering",
      "Elastic Backup Service - data backup"
    ],
    correctAnswer: "A",
    explanation: "EBS (Elastic Block Store) provides persistent block storage for EC2 instances.",
    topic: "AWS Services",
    difficulty: "medium"
  },
  {
    id: 320,
    question: "Which AWS service helps manage containerized applications?",
    options: ["Lambda", "ECS", "RDS", "S3"],
    correctAnswer: "B",
    explanation: "ECS (Elastic Container Service) is a container orchestration service for Docker containers.",
    topic: "AWS Services",
    difficulty: "medium"
  },
  {
    id: 321,
    question: "What is AWS Auto Scaling used for?",
    options: [
      "Automatically adjusting resource capacity based on demand",
      "Automatically backing up data",
      "Automatically updating software",
      "Automatically encrypting data"
    ],
    correctAnswer: "A",
    explanation: "Auto Scaling automatically adjusts the number of EC2 instances based on demand.",
    topic: "AWS Services",
    difficulty: "medium"
  },
  {
    id: 322,
    question: "Which AWS service provides DNS and domain registration?",
    options: ["CloudFront", "Route 53", "Direct Connect", "API Gateway"],
    correctAnswer: "B",
    explanation: "Route 53 is AWS's scalable DNS and domain name registration service.",
    topic: "AWS Services",
    difficulty: "easy"
  },
  {
    id: 323,
    question: "What is Amazon DynamoDB?",
    options: [
      "A relational database",
      "A NoSQL database",
      "A data warehouse",
      "A file storage system"
    ],
    correctAnswer: "B",
    explanation: "DynamoDB is a fully managed NoSQL database service that provides fast performance.",
    topic: "AWS Services",
    difficulty: "easy"
  },
  {
    id: 324,
    question: "Which AWS service is used for API management?",
    options: ["Lambda", "API Gateway", "CloudFront", "Route 53"],
    correctAnswer: "B",
    explanation: "API Gateway enables creation, deployment, and management of REST and WebSocket APIs.",
    topic: "AWS Services",
    difficulty: "medium"
  },
  {
    id: 325,
    question: "What does AWS SNS provide?",
    options: [
      "Simple Notification Service - pub/sub messaging",
      "Simple Network Service - networking",
      "Secure Node Service - security",
      "Smart Navigation Service - routing"
    ],
    correctAnswer: "A",
    explanation: "SNS (Simple Notification Service) provides publish/subscribe messaging and mobile notifications.",
    topic: "AWS Services",
    difficulty: "medium"
  },
  {
    id: 326,
    question: "Which AWS service is used for message queuing?",
    options: ["SNS", "SQS", "SES", "SWF"],
    correctAnswer: "B",
    explanation: "SQS (Simple Queue Service) provides reliable, scalable message queuing.",
    topic: "AWS Services",
    difficulty: "easy"
  },
  {
    id: 327,
    question: "What is AWS Elastic Beanstalk?",
    options: [
      "A storage service",
      "A platform service for deploying applications",
      "A database service",
      "A monitoring service"
    ],
    correctAnswer: "B",
    explanation: "Elastic Beanstalk is a PaaS that makes it easy to deploy and manage applications.",
    topic: "AWS Services",
    difficulty: "medium"
  },
  {
    id: 328,
    question: "Which AWS service provides data warehousing capabilities?",
    options: ["RDS", "DynamoDB", "Redshift", "Neptune"],
    correctAnswer: "C",
    explanation: "Redshift is AWS's data warehousing service for analytics and business intelligence.",
    topic: "AWS Services",
    difficulty: "medium"
  },
  {
    id: 329,
    question: "What is AWS CloudFormation used for?",
    options: [
      "Infrastructure as Code - managing AWS resources",
      "Cloud monitoring",
      "Data backup",
      "Network security"
    ],
    correctAnswer: "A",
    explanation: "CloudFormation allows defining AWS infrastructure using code templates.",
    topic: "AWS Services",
    difficulty: "medium"
  },
  {
    id: 330,
    question: "Which AWS service provides machine learning capabilities?",
    options: ["SageMaker", "Comprehend", "Rekognition", "All of the above"],
    correctAnswer: "D",
    explanation: "AWS offers multiple ML services: SageMaker for ML development, Comprehend for NLP, Rekognition for image analysis.",
    topic: "AWS Services",
    difficulty: "medium"
  },

  // Cloud Security (331-350)
  {
    id: 331,
    question: "What is the shared responsibility model in cloud computing?",
    options: [
      "Cloud provider is responsible for everything",
      "Customer is responsible for everything",
      "Responsibilities are shared between cloud provider and customer",
      "No one is responsible"
    ],
    correctAnswer: "C",
    explanation: "In the shared responsibility model, security responsibilities are divided between the cloud provider and customer.",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 332,
    question: "In AWS shared responsibility model, who is responsible for patching the guest OS?",
    options: ["AWS", "Customer", "Both", "Neither"],
    correctAnswer: "B",
    explanation: "Customers are responsible for managing and patching the guest operating system in EC2 instances.",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 333,
    question: "Which AWS service helps with compliance and governance?",
    options: ["CloudTrail", "Config", "Inspector", "All of the above"],
    correctAnswer: "D",
    explanation: "CloudTrail, Config, and Inspector all help with different aspects of compliance and governance.",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 334,
    question: "What does encryption at rest mean?",
    options: [
      "Data is encrypted while being transmitted",
      "Data is encrypted while stored on disk",
      "Data is never encrypted",
      "Data is compressed"
    ],
    correctAnswer: "B",
    explanation: "Encryption at rest refers to encrypting data when it's stored on disk or in databases.",
    topic: "Cloud Security",
    difficulty: "easy"
  },
  {
    id: 335,
    question: "Which AWS service manages encryption keys?",
    options: ["IAM", "KMS", "CloudHSM", "Both B and C"],
    correctAnswer: "D",
    explanation: "Both KMS (Key Management Service) and CloudHSM provide encryption key management capabilities.",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 336,
    question: "What is a security group in AWS?",
    options: [
      "A group of users",
      "A virtual firewall for EC2 instances",
      "A storage container",
      "A monitoring tool"
    ],
    correctAnswer: "B",
    explanation: "Security groups act as virtual firewalls controlling inbound and outbound traffic to EC2 instances.",
    topic: "Cloud Security",
    difficulty: "easy"
  },
  {
    id: 337,
    question: "Which principle should be followed for IAM permissions?",
    options: [
      "Give maximum permissions",
      "Principle of least privilege",
      "Give no permissions",
      "Give random permissions"
    ],
    correctAnswer: "B",
    explanation: "Principle of least privilege means granting only the minimum permissions necessary to perform tasks.",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 338,
    question: "What is multi-factor authentication (MFA)?",
    options: [
      "Using multiple passwords",
      "Using multiple authentication factors for verification",
      "Using multiple user accounts",
      "Using multiple devices"
    ],
    correctAnswer: "B",
    explanation: "MFA requires multiple authentication factors (something you know, have, or are) for enhanced security.",
    topic: "Cloud Security",
    difficulty: "easy"
  },
  {
    id: 339,
    question: "Which AWS service provides DDoS protection?",
    options: ["WAF", "Shield", "GuardDuty", "Both A and B"],
    correctAnswer: "D",
    explanation: "Both AWS WAF and Shield provide DDoS protection, with Shield offering automatic protection.",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 340,
    question: "What is the purpose of network ACLs in AWS?",
    options: [
      "Instance-level firewall",
      "Subnet-level firewall",
      "Application-level security",
      "Database security"
    ],
    correctAnswer: "B",
    explanation: "Network ACLs (Access Control Lists) provide subnet-level firewall rules.",
    topic: "Cloud Security",
    difficulty: "medium"
  },

  // Cloud Architecture and Best Practices (341-370)
  {
    id: 341,
    question: "What is the benefit of using multiple Availability Zones?",
    options: [
      "Reduced costs",
      "High availability and fault tolerance",
      "Faster performance",
      "Easier management"
    ],
    correctAnswer: "B",
    explanation: "Multiple AZs provide high availability and fault tolerance by distributing resources across data centers.",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },
  {
    id: 342,
    question: "What is a microservices architecture?",
    options: [
      "A single large application",
      "Small, loosely coupled services",
      "A type of database",
      "A monitoring tool"
    ],
    correctAnswer: "B",
    explanation: "Microservices architecture breaks applications into small, independent, loosely coupled services.",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },
  {
    id: 343,
    question: "What does the term 'stateless' mean in cloud applications?",
    options: [
      "Applications that don't work",
      "Applications that don't store session state locally",
      "Applications without databases",
      "Applications without users"
    ],
    correctAnswer: "B",
    explanation: "Stateless applications don't store session state locally, enabling better scalability and reliability.",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },
  {
    id: 344,
    question: "Which design pattern helps handle failures gracefully in distributed systems?",
    options: ["Singleton", "Circuit Breaker", "Observer", "Factory"],
    correctAnswer: "B",
    explanation: "Circuit Breaker pattern prevents cascading failures by detecting and handling service failures.",
    topic: "Cloud Architecture",
    difficulty: "hard"
  },
  {
    id: 345,
    question: "What is the purpose of a load balancer?",
    options: [
      "Store data",
      "Distribute incoming requests across multiple servers",
      "Monitor applications",
      "Encrypt data"
    ],
    correctAnswer: "B",
    explanation: "Load balancers distribute incoming traffic across multiple servers to ensure availability and performance.",
    topic: "Cloud Architecture",
    difficulty: "easy"
  },
  {
    id: 346,
    question: "What is auto-scaling in cloud computing?",
    options: [
      "Manual resource adjustment",
      "Automatic adjustment of resources based on demand",
      "Fixed resource allocation",
      "Resource reduction only"
    ],
    correctAnswer: "B",
    explanation: "Auto-scaling automatically adjusts computing resources based on current demand and predefined policies.",
    topic: "Cloud Architecture",
    difficulty: "easy"
  },
  {
    id: 347,
    question: "Which caching strategy improves application performance?",
    options: ["Write-through", "Write-behind", "Cache-aside", "All of the above"],
    correctAnswer: "D",
    explanation: "All mentioned caching strategies can improve performance depending on the use case.",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },
  {
    id: 348,
    question: "What is the purpose of API versioning?",
    options: [
      "To confuse developers",
      "To maintain backward compatibility while evolving APIs",
      "To increase complexity",
      "To reduce performance"
    ],
    correctAnswer: "B",
    explanation: "API versioning allows evolution of APIs while maintaining backward compatibility for existing clients.",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },
  {
    id: 349,
    question: "What is a CDN (Content Delivery Network)?",
    options: [
      "A type of database",
      "A network of distributed servers that deliver content based on geographic location",
      "A security service",
      "A monitoring tool"
    ],
    correctAnswer: "B",
    explanation: "CDN is a geographically distributed network of servers that delivers content closer to users.",
    topic: "Cloud Architecture",
    difficulty: "easy"
  },
  {
    id: 350,
    question: "What is the benefit of using containerization?",
    options: [
      "Application portability and consistency",
      "Increased resource usage",
      "Complex deployment",
      "Vendor lock-in"
    ],
    correctAnswer: "A",
    explanation: "Containerization provides application portability, consistency, and efficient resource utilization.",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },

  // DevOps and Cloud (351-380)
  {
    id: 351,
    question: "What is Infrastructure as Code (IaC)?",
    options: [
      "Writing application code",
      "Managing infrastructure through code and automation",
      "Manual infrastructure setup",
      "Database programming"
    ],
    correctAnswer: "B",
    explanation: "IaC manages and provisions infrastructure through machine-readable code rather than manual processes.",
    topic: "DevOps",
    difficulty: "medium"
  },
  {
    id: 352,
    question: "Which of the following is a CI/CD tool?",
    options: ["Jenkins", "GitLab CI", "GitHub Actions", "All of the above"],
    correctAnswer: "D",
    explanation: "Jenkins, GitLab CI, and GitHub Actions are all popular CI/CD (Continuous Integration/Continuous Deployment) tools.",
    topic: "DevOps",
    difficulty: "easy"
  },
  {
    id: 353,
    question: "What does Docker provide?",
    options: [
      "Virtual machines",
      "Container platform for application packaging",
      "Database management",
      "Load balancing"
    ],
    correctAnswer: "B",
    explanation: "Docker provides containerization platform for packaging applications with their dependencies.",
    topic: "DevOps",
    difficulty: "easy"
  },
  {
    id: 354,
    question: "What is Kubernetes?",
    options: [
      "A programming language",
      "A container orchestration platform",
      "A database",
      "A monitoring tool"
    ],
    correctAnswer: "B",
    explanation: "Kubernetes is an open-source container orchestration platform for managing containerized applications.",
    topic: "DevOps",
    difficulty: "medium"
  },
  {
    id: 355,
    question: "What is the purpose of blue-green deployment?",
    options: [
      "To use different colors in UI",
      "To enable zero-downtime deployments",
      "To reduce costs",
      "To improve security"
    ],
    correctAnswer: "B",
    explanation: "Blue-green deployment enables zero-downtime deployments by maintaining two identical production environments.",
    topic: "DevOps",
    difficulty: "medium"
  },
  {
    id: 356,
    question: "What is monitoring in cloud environments used for?",
    options: [
      "Tracking application performance and health",
      "Writing code",
      "Managing databases",
      "Creating user interfaces"
    ],
    correctAnswer: "A",
    explanation: "Monitoring tracks application performance, health, and infrastructure metrics in cloud environments.",
    topic: "DevOps",
    difficulty: "easy"
  },
  {
    id: 357,
    question: "Which practice involves automatically testing code changes?",
    options: [
      "Continuous Integration",
      "Continuous Deployment",
      "Continuous Monitoring",
      "Continuous Planning"
    ],
    correctAnswer: "A",
    explanation: "Continuous Integration involves automatically building and testing code changes when they're committed.",
    topic: "DevOps",
    difficulty: "easy"
  },
  {
    id: 358,
    question: "What is the purpose of configuration management tools?",
    options: [
      "To manage application configurations and infrastructure state",
      "To write application code",
      "To design user interfaces",
      "To create databases"
    ],
    correctAnswer: "A",
    explanation: "Configuration management tools automate the configuration and management of infrastructure and applications.",
    topic: "DevOps",
    difficulty: "medium"
  },
  {
    id: 359,
    question: "What is GitOps?",
    options: [
      "A type of database",
      "Using Git repositories as the source of truth for infrastructure and application deployment",
      "A monitoring tool",
      "A programming language"
    ],
    correctAnswer: "B",
    explanation: "GitOps uses Git repositories as the single source of truth for declarative infrastructure and applications.",
    topic: "DevOps",
    difficulty: "hard"
  },
  {
    id: 360,
    question: "What is the benefit of automated testing in CI/CD pipelines?",
    options: [
      "Slower development",
      "Early detection of bugs and consistent quality",
      "Increased manual work",
      "Higher costs"
    ],
    correctAnswer: "B",
    explanation: "Automated testing in CI/CD enables early bug detection and maintains consistent code quality.",
    topic: "DevOps",
    difficulty: "medium"
  },

  // Cloud Cost Optimization (361-380)
  {
    id: 361,
    question: "Which AWS pricing model offers the biggest discount for long-term commitment?",
    options: ["On-Demand", "Reserved Instances", "Spot Instances", "Dedicated Hosts"],
    correctAnswer: "B",
    explanation: "Reserved Instances offer significant discounts (up to 75%) for 1-3 year commitments.",
    topic: "Cloud Cost Optimization",
    difficulty: "medium"
  },
  {
    id: 362,
    question: "What are Spot Instances in AWS?",
    options: [
      "High-priority instances",
      "Unused EC2 capacity available at reduced cost",
      "Dedicated physical servers",
      "Free tier instances"
    ],
    correctAnswer: "B",
    explanation: "Spot Instances use unused EC2 capacity at up to 90% discount but can be terminated by AWS.",
    topic: "Cloud Cost Optimization",
    difficulty: "medium"
  },
  {
    id: 363,
    question: "Which practice helps optimize cloud storage costs?",
    options: [
      "Using lifecycle policies to move data to cheaper storage classes",
      "Keeping all data in premium storage",
      "Duplicating all data",
      "Never deleting old data"
    ],
    correctAnswer: "A",
    explanation: "Lifecycle policies automatically move data to appropriate storage classes based on access patterns.",
    topic: "Cloud Cost Optimization",
    difficulty: "medium"
  },
  {
    id: 364,
    question: "What is the purpose of AWS Cost Explorer?",
    options: [
      "To explore new AWS services",
      "To visualize and analyze AWS costs and usage",
      "To explore storage options",
      "To explore networking options"
    ],
    correctAnswer: "B",
    explanation: "Cost Explorer helps visualize, understand, and manage AWS costs and usage over time.",
    topic: "Cloud Cost Optimization",
    difficulty: "easy"
  },
  {
    id: 365,
    question: "Which AWS service helps set up billing alerts?",
    options: ["CloudWatch", "Billing Dashboard", "Cost Explorer", "All of the above"],
    correctAnswer: "D",
    explanation: "CloudWatch alarms, Billing Dashboard, and Cost Explorer all help monitor and alert on costs.",
    topic: "Cloud Cost Optimization",
    difficulty: "easy"
  },
  {
    id: 366,
    question: "What is rightsizing in cloud cost optimization?",
    options: [
      "Making all instances the same size",
      "Matching instance types and sizes to workload requirements",
      "Using the largest instances available",
      "Using only the smallest instances"
    ],
    correctAnswer: "B",
    explanation: "Rightsizing involves selecting the most cost-effective instance types and sizes for workloads.",
    topic: "Cloud Cost Optimization",
    difficulty: "medium"
  },
  {
    id: 367,
    question: "Which storage class in S3 is most cost-effective for long-term archival?",
    options: ["Standard", "Standard-IA", "Glacier", "Glacier Deep Archive"],
    correctAnswer: "D",
    explanation: "Glacier Deep Archive is the lowest-cost storage class for long-term archival with retrieval times of 12+ hours.",
    topic: "Cloud Cost Optimization",
    difficulty: "medium"
  },
  {
    id: 368,
    question: "What is the benefit of using Reserved Instances?",
    options: [
      "Higher performance",
      "Significant cost savings for predictable workloads",
      "More features",
      "Better security"
    ],
    correctAnswer: "B",
    explanation: "Reserved Instances provide substantial cost savings for steady-state, predictable workloads.",
    topic: "Cloud Cost Optimization",
    difficulty: "easy"
  },
  {
    id: 369,
    question: "Which AWS service can automatically optimize costs by shutting down unused resources?",
    options: ["Auto Scaling", "Lambda", "Instance Scheduler", "All of the above"],
    correctAnswer: "C",
    explanation: "AWS Instance Scheduler can automatically start and stop EC2 and RDS instances based on schedules.",
    topic: "Cloud Cost Optimization",
    difficulty: "medium"
  },
  {
    id: 370,
    question: "What is the AWS Free Tier?",
    options: [
      "A paid service",
      "Limited free usage of AWS services for new accounts",
      "Premium support",
      "Advanced features only"
    ],
    correctAnswer: "B",
    explanation: "AWS Free Tier provides limited free usage of many AWS services for 12 months for new accounts.",
    topic: "Cloud Cost Optimization",
    difficulty: "easy"
  },

  // Emerging Cloud Technologies (371-400)
  {
    id: 371,
    question: "What is serverless computing?",
    options: [
      "Computing without any servers",
      "Running code without managing servers",
      "Using only physical servers",
      "Expensive computing model"
    ],
    correctAnswer: "B",
    explanation: "Serverless computing allows running code without provisioning or managing servers.",
    topic: "Emerging Technologies",
    difficulty: "medium"
  },
  {
    id: 372,
    question: "Which AWS service represents serverless computing?",
    options: ["EC2", "Lambda", "RDS", "S3"],
    correctAnswer: "B",
    explanation: "AWS Lambda is the primary serverless computing service that runs code in response to events.",
    topic: "Emerging Technologies",
    difficulty: "easy"
  },
  {
    id: 373,
    question: "What is edge computing?",
    options: [
      "Computing at data center edges",
      "Processing data closer to where it's generated",
      "Computing on network edges only",
      "A type of database"
    ],
    correctAnswer: "B",
    explanation: "Edge computing processes data closer to its source to reduce latency and bandwidth usage.",
    topic: "Emerging Technologies",
    difficulty: "medium"
  },
  {
    id: 374,
    question: "What is the Internet of Things (IoT) in cloud context?",
    options: [
      "Internet for things only",
      "Connected devices that generate and share data via cloud services",
      "A social network",
      "A type of storage"
    ],
    correctAnswer: "B",
    explanation: "IoT refers to connected devices that collect and share data through cloud services.",
    topic: "Emerging Technologies",
    difficulty: "easy"
  },
  {
    id: 375,
    question: "What is artificial intelligence as a service (AIaaS)?",
    options: [
      "AI that works as a service technician",
      "Cloud-based AI capabilities offered as services",
      "AI for customer service only",
      "Artificial service intelligence"
    ],
    correctAnswer: "B",
    explanation: "AIaaS provides AI capabilities through cloud services without requiring expertise in AI development.",
    topic: "Emerging Technologies",
    difficulty: "medium"
  },
  {
    id: 376,
    question: "What is machine learning in the cloud?",
    options: [
      "Teaching machines to use cloud",
      "Cloud-based services for building and deploying ML models",
      "Learning about machines",
      "Cloud storage for machines"
    ],
    correctAnswer: "B",
    explanation: "Cloud ML services provide tools and infrastructure for developing, training, and deploying ML models.",
    topic: "Emerging Technologies",
    difficulty: "medium"
  },
  {
    id: 377,
    question: "What is a cloud-native application?",
    options: [
      "An application born in the cloud",
      "An application designed specifically for cloud environments",
      "An application that only runs locally",
      "A native mobile application"
    ],
    correctAnswer: "B",
    explanation: "Cloud-native applications are designed to take full advantage of cloud computing characteristics.",
    topic: "Emerging Technologies",
    difficulty: "medium"
  },
  {
    id: 378,
    question: "What is quantum computing in the cloud?",
    options: [
      "Very fast regular computing",
      "Access to quantum computing capabilities via cloud services",
      "Computing with quantum mechanics books",
      "A type of cloud storage"
    ],
    correctAnswer: "B",
    explanation: "Cloud quantum computing provides access to quantum computing resources through cloud platforms.",
    topic: "Emerging Technologies",
    difficulty: "hard"
  },
  {
    id: 379,
    question: "What is blockchain as a service (BaaS)?",
    options: [
      "Banking as a service",
      "Cloud-based blockchain infrastructure and tools",
      "Block storage service",
      "Backup as a service"
    ],
    correctAnswer: "B",
    explanation: "BaaS provides blockchain infrastructure and development tools through cloud services.",
    topic: "Emerging Technologies",
    difficulty: "hard"
  },
  {
    id: 380,
    question: "What is the benefit of using cloud-based analytics services?",
    options: [
      "Process and analyze large datasets without managing infrastructure",
      "Only for small datasets",
      "Requires extensive hardware setup",
      "Limited scalability"
    ],
    correctAnswer: "A",
    explanation: "Cloud analytics services provide scalable data processing and analysis without infrastructure management.",
    topic: "Emerging Technologies",
    difficulty: "medium"
  },

  // Final Cloud Computing Topics (381-400)
  {
    id: 381,
    question: "What is multi-cloud strategy?",
    options: [
      "Using multiple cloud providers",
      "Using only one cloud provider",
      "Using multiple applications",
      "Using multiple databases"
    ],
    correctAnswer: "A",
    explanation: "Multi-cloud strategy involves using services from multiple cloud providers to avoid vendor lock-in.",
    topic: "Cloud Strategy",
    difficulty: "medium"
  },
  {
    id: 382,
    question: "What is cloud migration?",
    options: [
      "Moving birds to cloud",
      "Moving applications and data from on-premises to cloud",
      "Moving cloud to on-premises",
      "Moving between offices"
    ],
    correctAnswer: "B",
    explanation: "Cloud migration is the process of moving applications, data, and infrastructure to cloud environments.",
    topic: "Cloud Strategy",
    difficulty: "easy"
  },
  {
    id: 383,
    question: "What is vendor lock-in in cloud computing?",
    options: [
      "Physical locks on servers",
      "Dependence on a single cloud provider's proprietary technologies",
      "Locking out vendors",
      "Security locks"
    ],
    correctAnswer: "B",
    explanation: "Vendor lock-in occurs when migration from one cloud provider becomes difficult due to proprietary dependencies.",
    topic: "Cloud Strategy",
    difficulty: "medium"
  },
  {
    id: 384,
    question: "What is disaster recovery in the cloud?",
    options: [
      "Preventing natural disasters",
      "Strategies and services for recovering from system failures",
      "Weather prediction",
      "Insurance services"
    ],
    correctAnswer: "B",
    explanation: "Cloud disaster recovery provides strategies and services for business continuity during system failures.",
    topic: "Cloud Strategy",
    difficulty: "medium"
  },
  {
    id: 385,
    question: "What is cloud governance?",
    options: [
      "Government regulations for cloud",
      "Policies and processes for managing cloud resources",
      "Cloud service management",
      "Cloud provider management"
    ],
    correctAnswer: "B",
    explanation: "Cloud governance establishes policies and processes for managing cloud usage, security, and compliance.",
    topic: "Cloud Strategy",
    difficulty: "medium"
  },
  {
    id: 386,
    question: "What is the purpose of cloud service level agreements (SLAs)?",
    options: [
      "Legal documents only",
      "Define expected service quality and availability guarantees",
      "Marketing materials",
      "Pricing information"
    ],
    correctAnswer: "B",
    explanation: "SLAs define the expected level of service quality, availability, and performance guarantees.",
    topic: "Cloud Strategy",
    difficulty: "medium"
  },
  {
    id: 387,
    question: "What is cloud elasticity?",
    options: [
      "Physical flexibility of servers",
      "Ability to quickly scale resources up or down based on demand",
      "Rubber-like properties",
      "Stretching capabilities"
    ],
    correctAnswer: "B",
    explanation: "Cloud elasticity enables automatic and rapid scaling of resources based on changing demand.",
    topic: "Cloud Fundamentals",
    difficulty: "medium"
  },
  {
    id: 388,
    question: "What is the difference between scalability and elasticity?",
    options: [
      "They are the same",
      "Scalability is manual, elasticity is automatic",
      "Scalability is for storage, elasticity is for compute",
      "No difference"
    ],
    correctAnswer: "B",
    explanation: "Scalability can be manual or planned, while elasticity implies automatic and dynamic scaling.",
    topic: "Cloud Fundamentals",
    difficulty: "hard"
  },
  {
    id: 389,
    question: "What is cloud bursting?",
    options: [
      "Cloud servers exploding",
      "Automatically scaling from private to public cloud during peak demand",
      "Sudden cloud outages",
      "Cloud storage overflow"
    ],
    correctAnswer: "B",
    explanation: "Cloud bursting extends private cloud capacity to public cloud during demand spikes.",
    topic: "Cloud Architecture",
    difficulty: "hard"
  },
  {
    id: 390,
    question: "What is the purpose of cloud monitoring?",
    options: [
      "Watching clouds in the sky",
      "Tracking performance, availability, and security of cloud resources",
      "Monitoring weather",
      "Watching videos"
    ],
    correctAnswer: "B",
    explanation: "Cloud monitoring tracks the performance, availability, and security of cloud infrastructure and applications.",
    topic: "Cloud Operations",
    difficulty: "easy"
  },
  {
    id: 391,
    question: "What is cloud orchestration?",
    options: [
      "Musical performances in cloud",
      "Automated coordination and management of cloud services and workflows",
      "Cloud service pricing",
      "Cloud service documentation"
    ],
    correctAnswer: "B",
    explanation: "Cloud orchestration automates the coordination and management of complex cloud services and workflows.",
    topic: "Cloud Operations",
    difficulty: "medium"
  },
  {
    id: 392,
    question: "What is the benefit of using cloud APIs?",
    options: [
      "They are expensive",
      "Programmatic access to cloud services and automation",
      "They are complex",
      "They are slow"
    ],
    correctAnswer: "B",
    explanation: "Cloud APIs enable programmatic access to cloud services, enabling automation and integration.",
    topic: "Cloud Development",
    difficulty: "easy"
  },
  {
    id: 393,
    question: "What is cloud-first strategy?",
    options: [
      "Always choose cloud over on-premises for new initiatives",
      "Cloud is the last option",
      "Only use public cloud",
      "Avoid cloud completely"
    ],
    correctAnswer: "A",
    explanation: "Cloud-first strategy prioritizes cloud solutions for new projects and initiatives.",
    topic: "Cloud Strategy",
    difficulty: "medium"
  },
  {
    id: 394,
    question: "What is the role of cloud architects?",
    options: [
      "Building physical structures",
      "Designing cloud infrastructure and solutions",
      "Drawing blueprints",
      "Construction management"
    ],
    correctAnswer: "B",
    explanation: "Cloud architects design and plan cloud infrastructure, services, and solutions for organizations.",
    topic: "Cloud Roles",
    difficulty: "medium"
  },
  {
    id: 395,
    question: "What is cloud resource tagging used for?",
    options: [
      "Decorating resources",
      "Organizing, tracking, and managing cloud resources",
      "Pricing resources",
      "Securing resources"
    ],
    correctAnswer: "B",
    explanation: "Resource tagging helps organize, track costs, manage, and govern cloud resources effectively.",
    topic: "Cloud Management",
    difficulty: "easy"
  },
  {
    id: 396,
    question: "What is the purpose of cloud automation?",
    options: [
      "Making cloud slower",
      "Reducing manual tasks and improving consistency",
      "Increasing complexity",
      "Reducing reliability"
    ],
    correctAnswer: "B",
    explanation: "Cloud automation reduces manual tasks, improves consistency, and increases operational efficiency.",
    topic: "Cloud Operations",
    difficulty: "easy"
  },
  {
    id: 397,
    question: "What is cloud capacity planning?",
    options: [
      "Planning cloud storage space",
      "Forecasting and planning for future resource needs",
      "Planning office capacity",
      "Planning network capacity only"
    ],
    correctAnswer: "B",
    explanation: "Cloud capacity planning involves forecasting future resource requirements to ensure adequate capacity.",
    topic: "Cloud Management",
    difficulty: "medium"
  },
  {
    id: 398,
    question: "What is the benefit of cloud standardization?",
    options: [
      "Increased complexity",
      "Consistency, interoperability, and reduced vendor lock-in",
      "Higher costs",
      "Reduced functionality"
    ],
    correctAnswer: "B",
    explanation: "Cloud standardization promotes consistency, interoperability, and reduces dependency on specific vendors.",
    topic: "Cloud Strategy",
    difficulty: "medium"
  },
  {
    id: 399,
    question: "What is cloud resource optimization?",
    options: [
      "Making resources slower",
      "Maximizing efficiency and minimizing costs of cloud resources",
      "Using more resources",
      "Ignoring resource usage"
    ],
    correctAnswer: "B",
    explanation: "Cloud resource optimization focuses on maximizing efficiency while minimizing costs and waste.",
    topic: "Cloud Management",
    difficulty: "medium"
  },
  {
    id: 400,
    question: "What is the future trend of cloud computing?",
    options: [
      "Declining adoption",
      "Increased adoption with edge computing, AI/ML integration, and sustainability focus",
      "Replacement by on-premises",
      "Becoming more expensive"
    ],
    correctAnswer: "B",
    explanation: "Cloud computing continues growing with trends toward edge computing, AI/ML integration, and sustainable practices.",
    topic: "Cloud Future",
    difficulty: "medium"
  }
]