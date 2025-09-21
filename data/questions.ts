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
    "question": "What is system design?",
    "options": [
      "The process of coding a single module of a software system.",
      "The process of testing software components.",
      "The process of designing the architecture and components of a software system to meet specific business requirements.",
      "A method for maintaining a database."
    ],
    "correctAnswer": "C",
    "explanation": "System design is the process of designing the architecture and components of a software system to meet specific business requirements.",
    "topic": "System Design Fundamentals",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "question": "What does horizontal scaling (scaling out) mean in system design?",
    "options": [
      "Increasing the processing power (CPU/RAM) of an existing machine.",
      "Adding additional nodes or machines to handle increased demand.",
      "Improving code quality to reduce latency.",
      "Partitioning a database into shards."
    ],
    "correctAnswer": "B",
    "explanation": "Horizontal scaling means adding additional nodes or machines to handle increased demand.",
    "topic": "Scalability",
    "difficulty": "medium"
  },
  {
    "id": 3,
    "question": "What does vertical scaling (scaling up) mean in system design?",
    "options": [
      "Adding additional machines to distribute load.",
      "Dividing data across multiple databases.",
      "Adding more resources (CPU/memory) to the existing machine.",
      "Increasing network bandwidth only."
    ],
    "correctAnswer": "C",
    "explanation": "Vertical scaling means adding more resources (CPU/memory) to the existing machine.",
    "topic": "Scalability",
    "difficulty": "medium"
  },
  {
    "id": 4,
    "question": "Which system design characteristic refers to the delay experienced in processing a request?",
    "options": [
      "Throughput",
      "Latency",
      "Availability",
      "Reliability"
    ],
    "correctAnswer": "B",
    "explanation": "Latency refers to the delay experienced in processing a request.",
    "topic": "Performance Metrics",
    "difficulty": "easy"
  },
  {
    "id": 5,
    "question": "Which system design characteristic refers to the amount of data processed per unit time?",
    "options": [
      "Consistency",
      "Throughput",
      "Maintainability",
      "Fault Tolerance"
    ],
    "correctAnswer": "B",
    "explanation": "Throughput refers to the amount of data processed per unit time.",
    "topic": "Performance Metrics",
    "difficulty": "easy"
  },
  {
    "id": 6,
    "question": "Which practice improves maintainability of a software system?",
    "options": [
      "Monolithic codebase with many interdependencies.",
      "Complex and undocumented modules.",
      "Modular design with clear documentation.",
      "Dynamic, unpredictable architecture."
    ],
    "correctAnswer": "C",
    "explanation": "Modular design with clear documentation improves maintainability of a software system.",
    "topic": "System Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 7,
    "question": "Which consistency model guarantees that after a write, all subsequent reads will see that write immediately?",
    "options": [
      "Weak Consistency",
      "Eventual Consistency",
      "Strong Consistency",
      "Causal Consistency"
    ],
    "correctAnswer": "C",
    "explanation": "Strong consistency guarantees that after a write, all subsequent reads will see that write immediately.",
    "topic": "Consistency Models",
    "difficulty": "medium"
  },
  {
    "id": 8,
    "question": "Which consistency model ensures that if no new updates are made, all replicas will eventually converge to the same state?",
    "options": [
      "Strong Consistency",
      "Eventual Consistency",
      "Immediate Consistency",
      "Final Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "Eventual consistency ensures that if no new updates are made, all replicas will eventually converge to the same state.",
    "topic": "Consistency Models",
    "difficulty": "medium"
  },
  {
    "id": 9,
    "question": "Which consistency model provides no guarantee of immediate consistency or eventual convergence?",
    "options": [
      "Weak Consistency",
      "Eventual Consistency",
      "Strong Consistency",
      "Transactional Consistency"
    ],
    "correctAnswer": "A",
    "explanation": "Weak consistency provides no guarantee of immediate consistency or eventual convergence.",
    "topic": "Consistency Models",
    "difficulty": "medium"
  },
  {
    "id": 10,
    "question": "What does the CAP theorem state for distributed systems?",
    "options": [
      "A system can guarantee all three: consistency, availability, and partition tolerance simultaneously.",
      "A system can guarantee any two out of consistency, availability, and partition tolerance.",
      "A system can only guarantee consistency and availability, but not partition tolerance.",
      "It applies only to non-distributed systems."
    ],
    "correctAnswer": "B",
    "explanation": "The CAP theorem states that a system can guarantee any two out of consistency, availability, and partition tolerance.",
    "topic": "CAP Theorem",
    "difficulty": "hard"
  },
  {
    "id": 11,
    "question": "Which statement correctly describes the difference between performance and scalability?",
    "options": [
      "Performance focuses on handling increased load; scalability focuses on optimizing response time.",
      "Performance focuses on optimizing speed and responsiveness; scalability focuses on handling increased load.",
      "Performance and scalability are the same.",
      "Performance requires horizontal scaling; scalability requires vertical scaling."
    ],
    "correctAnswer": "B",
    "explanation": "Performance focuses on optimizing speed and responsiveness; scalability focuses on handling increased load.",
    "topic": "Performance vs Scalability",
    "difficulty": "medium"
  },
  {
    "id": 12,
    "question": "Which of the following best describes latency and throughput?",
    "options": [
      "Latency is the number of operations per second; throughput is the delay per operation.",
      "Latency is measured in bytes; throughput is measured in seconds.",
      "Latency is the delay (time) for a request; throughput is the amount of data processed per time.",
      "Latency and throughput are identical metrics."
    ],
    "correctAnswer": "C",
    "explanation": "Latency is the delay (time) for a request; throughput is the amount of data processed per time.",
    "topic": "Performance Metrics",
    "difficulty": "medium"
  },
  {
    "id": 13,
    "question": "What does availability mean in system design?",
    "options": [
      "All requests are guaranteed to see the latest write.",
      "Every request receives a (possibly stale) response, even under failure.",
      "The system never has downtime even if all servers fail.",
      "System always processes requests in order."
    ],
    "correctAnswer": "B",
    "explanation": "Availability means every request receives a (possibly stale) response, even under failure.",
    "topic": "System Reliability",
    "difficulty": "medium"
  },
  {
    "id": 14,
    "question": "Which system design characteristic focuses on minimal downtime and fault-free operation?",
    "options": [
      "Scalability",
      "Reliability",
      "Security",
      "Latency"
    ],
    "correctAnswer": "B",
    "explanation": "Reliability focuses on minimal downtime and fault-free operation.",
    "topic": "System Reliability",
    "difficulty": "easy"
  },
  {
    "id": 15,
    "question": "Which best describes functional vs non-functional requirements?",
    "options": [
      "Functional: how the system should perform; Non-functional: what tasks it should do.",
      "Functional: the business requirements; Non-functional: user interface design.",
      "Functional: what the system should do (features); Non-functional: how the system should be (performance, reliability).",
      "Functional and non-functional are interchangeable terms."
    ],
    "correctAnswer": "C",
    "explanation": "Functional requirements describe what the system should do (features); Non-functional requirements describe how the system should be (performance, reliability).",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 16,
    "question": "Which of the following best describes low-level design (LLD) in software architecture?",
    "options": [
      "It outlines the overall system architecture and major components.",
      "It specifies database schemas only.",
      "It covers how each part of the system is implemented internally.",
      "It deals exclusively with network topology."
    ],
    "correctAnswer": "C",
    "explanation": "Low-level design covers how each part of the system is implemented internally.",
    "topic": "System Design Phases",
    "difficulty": "medium"
  },
  {
    "id": 17,
    "question": "Which of the following best describes high-level design (HLD)?",
    "options": [
      "It details the code of individual classes.",
      "It outlines the overall architecture of the system, including major components and data flows.",
      "It focuses on database table schemas.",
      "It specifies the encryption algorithms to be used."
    ],
    "correctAnswer": "B",
    "explanation": "High-level design outlines the overall architecture of the system, including major components and data flows.",
    "topic": "System Design Phases",
    "difficulty": "medium"
  },
  {
    "id": 18,
    "question": "Which architecture pattern describes an application built as a single unified unit?",
    "options": [
      "Microservices Architecture",
      "Monolithic Architecture",
      "Event-Driven Architecture",
      "Layered Architecture"
    ],
    "correctAnswer": "B",
    "explanation": "Monolithic architecture describes an application built as a single unified unit.",
    "topic": "Architecture Patterns",
    "difficulty": "easy"
  },
  {
    "id": 19,
    "question": "Which architecture pattern is characterized by a collection of small, independently deployable services?",
    "options": [
      "Monolithic Architecture",
      "Event-Driven Architecture",
      "Microservices Architecture",
      "Layered Architecture"
    ],
    "correctAnswer": "C",
    "explanation": "Microservices architecture is characterized by a collection of small, independently deployable services.",
    "topic": "Architecture Patterns",
    "difficulty": "easy"
  },
  {
    "id": 20,
    "question": "Which architecture paradigm involves system components communicating by producing and responding to events?",
    "options": [
      "Layered Architecture",
      "Microservices Architecture",
      "Event-Driven Architecture",
      "Client-Server Architecture"
    ],
    "correctAnswer": "C",
    "explanation": "Event-Driven Architecture involves system components communicating by producing and responding to events.",
    "topic": "Architecture Patterns",
    "difficulty": "medium"
  },
  {
    "id": 21,
    "question": "According to CAP theorem, if a system chooses to be CP (Consistency & Partition tolerance), which guarantee is weakened?",
    "options": [
      "Consistency",
      "Availability",
      "Partition Tolerance",
      "None, all are maintained"
    ],
    "correctAnswer": "B",
    "explanation": "If a system chooses CP, availability is weakened as the system may become unavailable during network partitions to maintain consistency.",
    "topic": "CAP Theorem",
    "difficulty": "hard"
  },
  {
    "id": 22,
    "question": "According to CAP theorem, if a system chooses to prioritize Availability and Partition tolerance (AP), which aspect is compromised?",
    "options": [
      "Performance",
      "Fault tolerance",
      "Consistency",
      "Latency"
    ],
    "correctAnswer": "C",
    "explanation": "If a system chooses AP, consistency is compromised as the system remains available during partitions but data may be inconsistent.",
    "topic": "CAP Theorem",
    "difficulty": "hard"
  },
  {
    "id": 23,
    "question": "Which type of consistency model guarantees eventual convergence of data if updates stop?",
    "options": [
      "Strong Consistency",
      "Eventual Consistency",
      "Weak Consistency",
      "Transactional Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "Eventual consistency guarantees eventual convergence of data if updates stop.",
    "topic": "Consistency Models",
    "difficulty": "medium"
  },
  {
    "id": 24,
    "question": "What system design practice improves code maintainability?",
    "options": [
      "Writing a single large monolithic class.",
      "Modular design with well-organized, documented code.",
      "Avoiding documentation entirely.",
      "Using global variables everywhere."
    ],
    "correctAnswer": "B",
    "explanation": "Modular design with well-organized, documented code improves maintainability.",
    "topic": "System Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 25,
    "question": "Which approach is used to ensure software is automatically built, tested, and deployed upon code changes?",
    "options": [
      "Manual deployment",
      "Continuous Integration/Continuous Deployment (CI/CD) pipeline",
      "Ad-hoc scripting",
      "None of the above"
    ],
    "correctAnswer": "B",
    "explanation": "CI/CD pipeline ensures software is automatically built, tested, and deployed upon code changes.",
    "topic": "DevOps Practices",
    "difficulty": "medium"
  },
  {
    "id": 26,
    "question": "Which of the following best describes functional vs non-functional requirements?",
    "options": [
      "Functional requirements describe how the system should perform.",
      "Functional requirements describe what the system should do; non-functional describe how it should perform (e.g., performance, security).",
      "They are the same concept.",
      "Non-functional requirements include features and operations."
    ],
    "correctAnswer": "B",
    "explanation": "Functional requirements describe what the system should do; non-functional requirements describe how it should perform.",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 27,
    "question": "Which is NOT an example of a functional requirement?",
    "options": [
      "User can log into the system.",
      "System shall respond to queries within 2 seconds.",
      "System must be available 99.9% of the time.",
      "Inventory updates when new items are added."
    ],
    "correctAnswer": "C",
    "explanation": "System availability is a non-functional requirement related to reliability.",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 28,
    "question": "What is horizontal scaling?",
    "options": [
      "Adding more machines to a system.",
      "Upgrading CPU on a machine.",
      "Reducing latency.",
      "Increasing concurrency."
    ],
    "correctAnswer": "A",
    "explanation": "Horizontal scaling involves adding more machines to a system.",
    "topic": "Scalability",
    "difficulty": "easy"
  },
  {
    "id": 29,
    "question": "What is vertical scaling?",
    "options": [
      "Adding more machines.",
      "Upgrading resources of an existing machine (CPU/memory).",
      "Splitting a database table.",
      "Lowering response time."
    ],
    "correctAnswer": "B",
    "explanation": "Vertical scaling involves upgrading resources of an existing machine (CPU/memory).",
    "topic": "Scalability",
    "difficulty": "easy"
  },
  {
    "id": 30,
    "question": "Which architecture is typically easier to deploy in parts and update independently?",
    "options": [
      "Monolithic",
      "Layered",
      "Microservices",
      "None of these"
    ],
    "correctAnswer": "C",
    "explanation": "Microservices architecture allows independent deployment and updates of individual services.",
    "topic": "Architecture Patterns",
    "difficulty": "medium"
  },
  {
    "id": 31,
    "question": "What is a key disadvantage of microservices compared to a monolith?",
    "options": [
      "Harder to scale independently",
      "More complex to manage many independent services",
      "No network overhead",
      "All code must be in one language"
    ],
    "correctAnswer": "B",
    "explanation": "Microservices are more complex to manage due to the distributed nature of many independent services.",
    "topic": "Architecture Patterns",
    "difficulty": "medium"
  },
  {
    "id": 32,
    "question": "Which scenario would violate the Isolation property of transactions?",
    "options": [
      "Two transactions updating different tables concurrently.",
      "One transaction reading uncommitted data from another (dirty read).",
      "A transaction failing mid-way and rolling back.",
      "All transactions running serially."
    ],
    "correctAnswer": "B",
    "explanation": "Dirty reads violate isolation as one transaction sees uncommitted changes from another.",
    "topic": "ACID Properties",
    "difficulty": "hard"
  },
  {
    "id": 33,
    "question": "What does the 'C' in ACID stand for, and what does it ensure?",
    "options": [
      "Consistency; it ensures data remains in a valid state respecting all constraints.",
      "Compression; it ensures data is compressed for storage.",
      "Concurrency; it ensures multiple transactions can run.",
      "Centralization; it ensures data is centralized."
    ],
    "correctAnswer": "A",
    "explanation": "Consistency ensures data remains in a valid state respecting all constraints.",
    "topic": "ACID Properties",
    "difficulty": "medium"
  },
  {
    "id": 34,
    "question": "What does Atomicity ensure in database transactions?",
    "options": [
      "Transactions can commit partially.",
      "All operations in a transaction are completed, or none are applied.",
      "Only one transaction runs at a time.",
      "Data is stored atomically in memory."
    ],
    "correctAnswer": "B",
    "explanation": "Atomicity ensures all operations in a transaction are completed, or none are applied.",
    "topic": "ACID Properties",
    "difficulty": "medium"
  },
  {
    "id": 35,
    "question": "What does Durability ensure after a transaction commits?",
    "options": [
      "Changes are temporary.",
      "Changes are permanently saved and not lost even if the system crashes.",
      "Changes are available only in memory.",
      "Changes can be rolled back anytime."
    ],
    "correctAnswer": "B",
    "explanation": "Durability ensures changes are permanently saved and not lost even if the system crashes.",
    "topic": "ACID Properties",
    "difficulty": "medium"
  },
  {
    "id": 36,
    "question": "What does BASE stand for in NoSQL databases?",
    "options": [
      "Basic Availability, Single-State, Eventually Consistent.",
      "Basically Available, Soft state, Eventually consistent.",
      "Binary ACID, Standards Enforced.",
      "Backup Available, Sequential Execution."
    ],
    "correctAnswer": "B",
    "explanation": "BASE stands for Basically Available, Soft state, Eventually consistent.",
    "topic": "NoSQL Principles",
    "difficulty": "medium"
  },
  {
    "id": 37,
    "question": "What does a savepoint in a database transaction do?",
    "options": [
      "Commits the entire transaction.",
      "Marks a point within a transaction that you can rollback to without aborting the entire transaction.",
      "Creates a save for backup.",
      "Ends the transaction."
    ],
    "correctAnswer": "B",
    "explanation": "A savepoint marks a point within a transaction that you can rollback to without aborting the entire transaction.",
    "topic": "Database Transactions",
    "difficulty": "medium"
  },
  {
    "id": 38,
    "question": "What is a correlated subquery?",
    "options": [
      "A subquery executed only once.",
      "A subquery that references columns from the outer query and runs for each row.",
      "A subquery in the ORDER BY clause.",
      "A non-existent SQL feature."
    ],
    "correctAnswer": "B",
    "explanation": "A correlated subquery references columns from the outer query and runs for each row.",
    "topic": "Database Queries",
    "difficulty": "hard"
  },
  {
    "id": 39,
    "question": "What is a nested (non-correlated) subquery?",
    "options": [
      "A query inside another where the inner query runs once and its result is used by the outer query.",
      "A query that references the outer query.",
      "A join operation by another name.",
      "A query in a stored procedure."
    ],
    "correctAnswer": "A",
    "explanation": "A nested subquery runs once and its result is used by the outer query.",
    "topic": "Database Queries",
    "difficulty": "medium"
  },
  {
    "id": 40,
    "question": "Which architecture uses asynchronous event passing between components?",
    "options": [
      "Monolithic",
      "Layered",
      "Event-Driven",
      "Client-Server"
    ],
    "correctAnswer": "C",
    "explanation": "Event-Driven architecture uses asynchronous event passing between components.",
    "topic": "Architecture Patterns",
    "difficulty": "medium"
  },
  {
    "id": 41,
    "question": "Which approach prioritizes a system's ability to serve requests even if some data might be stale?",
    "options": [
      "CP (Consistency + Partition tolerance)",
      "AP (Availability + Partition tolerance)",
      "CA (Consistency + Availability)",
      "AC (Atomicity + Consistency)"
    ],
    "correctAnswer": "B",
    "explanation": "AP systems prioritize availability and partition tolerance, potentially serving stale data.",
    "topic": "CAP Theorem",
    "difficulty": "hard"
  },
  {
    "id": 42,
    "question": "Which CAP combination focuses on serving every request (even if data is not fully consistent)?",
    "options": [
      "CA",
      "CP",
      "AP",
      "None"
    ],
    "correctAnswer": "C",
    "explanation": "AP (Availability + Partition tolerance) focuses on serving every request even if data is not fully consistent.",
    "topic": "CAP Theorem",
    "difficulty": "medium"
  },
  {
    "id": 43,
    "question": "What is a monolithic application?",
    "options": [
      "Multiple small services.",
      "A single large application where all components are interwoven.",
      "A database cluster.",
      "A cloud microservice."
    ],
    "correctAnswer": "B",
    "explanation": "A monolithic application is a single large application where all components are interwoven.",
    "topic": "Architecture Patterns",
    "difficulty": "easy"
  },
  {
    "id": 44,
    "question": "What is the main idea of a microservices architecture?",
    "options": [
      "One huge deployable unit.",
      "Services are independent, small, and communicate over a network.",
      "Database sharding.",
      "Shared disk architecture."
    ],
    "correctAnswer": "B",
    "explanation": "Microservices architecture consists of independent, small services that communicate over a network.",
    "topic": "Architecture Patterns",
    "difficulty": "medium"
  },
  {
    "id": 45,
    "question": "Which of the following does not describe high-level design (HLD)?",
    "options": [
      "High-level architecture overview.",
      "Detailed class and method implementations.",
      "Core components and data flow.",
      "Overall system modules."
    ],
    "correctAnswer": "B",
    "explanation": "HLD does not include detailed class and method implementations - that's part of low-level design.",
    "topic": "System Design Phases",
    "difficulty": "medium"
  },
  {
    "id": 46,
    "question": "Which of the following does not describe low-level design (LLD)?",
    "options": [
      "Detailed class design and algorithms.",
      "Database schema details.",
      "Sequence diagrams of interactions.",
      "Hardware rack placement."
    ],
    "correctAnswer": "D",
    "explanation": "Hardware rack placement is part of physical infrastructure, not low-level design.",
    "topic": "System Design Phases",
    "difficulty": "medium"
  },
  {
    "id": 47,
    "question": "What is fault tolerance in system design?",
    "options": [
      "Graceful handling of failures without complete system crash.",
      "Guaranteed 100% uptime.",
      "Fixing bugs in code.",
      "Disabling error logging."
    ],
    "correctAnswer": "A",
    "explanation": "Fault tolerance is the graceful handling of failures without complete system crash.",
    "topic": "System Reliability",
    "difficulty": "medium"
  },
  {
    "id": 48,
    "question": "Which property ensures that a system can continue operating even if some components fail?",
    "options": [
      "Latency",
      "Fault Tolerance",
      "Security",
      "Throughput"
    ],
    "correctAnswer": "B",
    "explanation": "Fault tolerance ensures that a system can continue operating even if some components fail.",
    "topic": "System Reliability",
    "difficulty": "easy"
  },
  {
    "id": 49,
    "question": "What is a typical strategy to improve system availability?",
    "options": [
      "Removing redundancies.",
      "Adding redundancy (e.g., replication, failover).",
      "Using outdated hardware.",
      "Disabling automatic restarts."
    ],
    "correctAnswer": "B",
    "explanation": "Adding redundancy through replication and failover improves system availability.",
    "topic": "System Reliability",
    "difficulty": "medium"
  },
  {
    "id": 50,
    "question": "What is the difference between data persistence and latency?",
    "options": [
      "Persistence refers to saving data long-term; latency refers to response time.",
      "Persistence is the same as throughput.",
      "Persistence means system availability.",
      "Latency means data accuracy."
    ],
    "correctAnswer": "A",
    "explanation": "Persistence refers to saving data long-term; latency refers to response time.",
    "topic": "System Design Concepts",
    "difficulty": "easy"
  },
  {
    "id": 51,
    "question": "What is a database?",
    "options": [
      "A programming language for data.",
      "An organized collection of data managed by a database management system.",
      "A user interface for data entry.",
      "A network protocol for data transfer."
    ],
    "correctAnswer": "B",
    "explanation": "A database is an organized collection of data managed by a database management system.",
    "topic": "Database Fundamentals",
    "difficulty": "easy"
  },
  {
    "id": 52,
    "question": "Which of the following is NOT a common database model?",
    "options": [
      "Relational Model",
      "Network Model",
      "Hierarchical Model",
      "Bitmap Model"
    ],
    "correctAnswer": "D",
    "explanation": "Bitmap Model is not a common database model. The main models are Relational, Network, and Hierarchical.",
    "topic": "Database Models",
    "difficulty": "medium"
  },
  {
    "id": 53,
    "question": "Which database schema level provides a high-level overview of the structure without technical details?",
    "options": [
      "Physical Schema",
      "Logical Schema",
      "Conceptual Schema",
      "External Schema"
    ],
    "correctAnswer": "C",
    "explanation": "Conceptual schema provides a high-level overview without technical implementation details.",
    "topic": "Database Schema",
    "difficulty": "medium"
  },
  {
    "id": 54,
    "question": "What is the purpose of a physical database schema?",
    "options": [
      "To define tables and relationships without implementation detail.",
      "To specify how data is stored on disk (file structures, indexes).",
      "To model business requirements.",
      "To encrypt data before storage."
    ],
    "correctAnswer": "B",
    "explanation": "Physical schema specifies how data is stored on disk including file structures and indexes.",
    "topic": "Database Schema",
    "difficulty": "medium"
  },
  {
    "id": 55,
    "question": "Which key uniquely identifies each record in a table and cannot contain NULL values?",
    "options": [
      "Foreign Key",
      "Candidate Key",
      "Primary Key",
      "Super Key"
    ],
    "correctAnswer": "C",
    "explanation": "Primary key uniquely identifies each record in a table and cannot contain NULL values.",
    "topic": "Database Keys",
    "difficulty": "easy"
  },
  {
    "id": 56,
    "question": "What is a super key?",
    "options": [
      "A minimal set of columns that uniquely identify a row.",
      "A set of columns (possibly with extras) that uniquely identify a row.",
      "The primary key of another table.",
      "A temporary key for queries."
    ],
    "correctAnswer": "B",
    "explanation": "A super key is a set of columns (possibly with extras) that uniquely identify a row.",
    "topic": "Database Keys",
    "difficulty": "medium"
  },
  {
    "id": 57,
    "question": "What is a candidate key?",
    "options": [
      "Any key chosen as primary key.",
      "A key with redundant columns.",
      "A minimal set of columns that uniquely identify a record.",
      "A foreign key with unique constraint."
    ],
    "correctAnswer": "C",
    "explanation": "A candidate key is a minimal set of columns that uniquely identify a record.",
    "topic": "Database Keys",
    "difficulty": "medium"
  },
  {
    "id": 58,
    "question": "What is an alternate key?",
    "options": [
      "The chosen primary key of a table.",
      "A candidate key not selected as the primary key.",
      "A composite key for indexing.",
      "A foreign key with unique index."
    ],
    "correctAnswer": "B",
    "explanation": "An alternate key is a candidate key not selected as the primary key.",
    "topic": "Database Keys",
    "difficulty": "medium"
  },
  {
    "id": 59,
    "question": "What is a foreign key?",
    "options": [
      "A key that uniquely identifies a row in the same table.",
      "An attribute referring to the primary key in another table.",
      "Any multi-column key.",
      "A synonym for primary key."
    ],
    "correctAnswer": "B",
    "explanation": "A foreign key is an attribute referring to the primary key in another table.",
    "topic": "Database Keys",
    "difficulty": "easy"
  },
  {
    "id": 60,
    "question": "Which SQL constraint limits the range of allowed values in a column?",
    "options": [
      "PRIMARY KEY",
      "UNIQUE",
      "CHECK",
      "NOT NULL"
    ],
    "correctAnswer": "C",
    "explanation": "CHECK constraint limits the range of allowed values in a column.",
    "topic": "SQL Constraints",
    "difficulty": "medium"
  },
  {
    "id": 61,
    "question": "Which SQL constraint ensures all values in a column are distinct?",
    "options": [
      "FOREIGN KEY",
      "UNIQUE",
      "CHECK",
      "NOT NULL"
    ],
    "correctAnswer": "B",
    "explanation": "UNIQUE constraint ensures all values in a column are distinct.",
    "topic": "SQL Constraints",
    "difficulty": "easy"
  },
  {
    "id": 62,
    "question": "What is the effect of the SQL NOT NULL constraint on a column?",
    "options": [
      "Automatically indexes the column.",
      "Enforces that the column cannot accept NULL values.",
      "Ensures values are unique.",
      "Limits values to a range."
    ],
    "correctAnswer": "B",
    "explanation": "NOT NULL constraint enforces that the column cannot accept NULL values.",
    "topic": "SQL Constraints",
    "difficulty": "easy"
  },
  {
    "id": 63,
    "question": "Which condition must a table satisfy to be in First Normal Form (1NF)?",
    "options": [
      "Every non-key attribute depends on the entire primary key.",
      "No multi-valued attributes; all columns are atomic.",
      "There are no transitive dependencies.",
      "Primary key is composite."
    ],
    "correctAnswer": "B",
    "explanation": "1NF requires no multi-valued attributes; all columns must be atomic.",
    "topic": "Database Normalization",
    "difficulty": "medium"
  },
  {
    "id": 64,
    "question": "Which condition must be met for a table to be in Second Normal Form (2NF)?",
    "options": [
      "It is in 1NF and no non-key attribute is partially dependent on a composite key.",
      "It has no repeating groups.",
      "It satisfies 3NF.",
      "It only has a single-column key."
    ],
    "correctAnswer": "A",
    "explanation": "2NF requires 1NF and no partial dependencies on composite keys.",
    "topic": "Database Normalization",
    "difficulty": "medium"
  },
  {
    "id": 65,
    "question": "Third Normal Form (3NF) requires that a table is in 2NF and what additional condition?",
    "options": [
      "No partial dependencies.",
      "No transitive dependencies among non-key attributes.",
      "Each non-key attribute depends on another non-key attribute.",
      "The primary key is composite."
    ],
    "correctAnswer": "B",
    "explanation": "3NF requires 2NF and no transitive dependencies among non-key attributes.",
    "topic": "Database Normalization",
    "difficulty": "medium"
  },
  {
    "id": 66,
    "question": "What rule does Boyce-Codd Normal Form (BCNF) impose beyond 3NF?",
    "options": [
      "No partial dependencies.",
      "For every functional dependency X → Y, X must be a superkey.",
      "Every non-key attribute must depend on all attributes of a composite key.",
      "Each table must have exactly two columns."
    ],
    "correctAnswer": "B",
    "explanation": "BCNF requires that for every functional dependency X → Y, X must be a superkey.",
    "topic": "Database Normalization",
    "difficulty": "hard"
  },
  {
    "id": 67,
    "question": "If there is a functional dependency A → B in a table, what does it mean?",
    "options": [
      "A is a candidate key for B.",
      "The values of A uniquely determine the values of B.",
      "B is always numeric.",
      "The table must be denormalized."
    ],
    "correctAnswer": "B",
    "explanation": "Functional dependency A → B means the values of A uniquely determine the values of B.",
    "topic": "Database Theory",
    "difficulty": "medium"
  },
  {
    "id": 68,
    "question": "Which SQL command category is used for defining, altering, and deleting database structures like tables?",
    "options": [
      "DML",
      "DCL",
      "DDL",
      "TCL"
    ],
    "correctAnswer": "C",
    "explanation": "DDL (Data Definition Language) is used for defining, altering, and deleting database structures.",
    "topic": "SQL Categories",
    "difficulty": "easy"
  },
  {
    "id": 69,
    "question": "Which SQL command category is primarily used to retrieve data from the database?",
    "options": [
      "DCL",
      "DQL",
      "DML",
      "DDL"
    ],
    "correctAnswer": "B",
    "explanation": "DQL (Data Query Language) is primarily used to retrieve data from the database.",
    "topic": "SQL Categories",
    "difficulty": "easy"
  },
  {
    "id": 70,
    "question": "Which SQL command category includes GRANT and REVOKE statements?",
    "options": [
      "DDL",
      "DML",
      "DCL",
      "TCL"
    ],
    "correctAnswer": "C",
    "explanation": "DCL (Data Control Language) includes GRANT and REVOKE statements for access control.",
    "topic": "SQL Categories",
    "difficulty": "medium"
  },
  {
    "id": 71,
    "question": "Which SQL command category includes COMMIT and ROLLBACK?",
    "options": [
      "DML",
      "DDL",
      "TCL",
      "DQL"
    ],
    "correctAnswer": "C",
    "explanation": "TCL (Transaction Control Language) includes COMMIT and ROLLBACK statements.",
    "topic": "SQL Categories",
    "difficulty": "medium"
  },
  {
    "id": 72,
    "question": "Which SQL keyword is used to remove duplicate rows from the result set?",
    "options": [
      "UNION",
      "DISTINCT",
      "JOIN",
      "UNIQUE"
    ],
    "correctAnswer": "B",
    "explanation": "DISTINCT keyword is used to remove duplicate rows from the result set.",
    "topic": "SQL Operations",
    "difficulty": "easy"
  },
  {
    "id": 73,
    "question": "What does the SQL UNIQUE constraint ensure?",
    "options": [
      "All values in a column are unique.",
      "Values are not NULL.",
      "Column values satisfy a range.",
      "Each column has a primary key."
    ],
    "correctAnswer": "A",
    "explanation": "UNIQUE constraint ensures all values in a column are unique.",
    "topic": "SQL Constraints",
    "difficulty": "easy"
  },
  {
    "id": 74,
    "question": "Which SQL statement would you use to permanently remove a table and all its data?",
    "options": [
      "DELETE TABLE table_name;",
      "DROP TABLE table_name;",
      "TRUNCATE table_name;",
      "ERASE table_name;"
    ],
    "correctAnswer": "B",
    "explanation": "DROP TABLE permanently removes a table and all its data.",
    "topic": "SQL DDL",
    "difficulty": "easy"
  },
  {
    "id": 75,
    "question": "Which SQL statement adds a new column to an existing table?",
    "options": [
      "UPDATE TABLE … ADD COLUMN …;",
      "ALTER TABLE … ADD COLUMN …;",
      "INSERT INTO … ADD COLUMN …;",
      "MODIFY TABLE … ADD COLUMN …;"
    ],
    "correctAnswer": "B",
    "explanation": "ALTER TABLE … ADD COLUMN is used to add a new column to an existing table.",
    "topic": "SQL DDL",
    "difficulty": "medium"
  },
  {
    "id": 76,
    "question": "Which of the following is the correct order of phases in the database design lifecycle?",
    "options": [
      "Logical Design → Physical Design → Requirement Analysis",
      "Requirement Analysis → Logical Design → Physical Design",
      "Physical Design → Logical Design → Requirement Analysis",
      "Implementation → Testing → Maintenance"
    ],
    "correctAnswer": "B",
    "explanation": "The correct order is Requirement Analysis → Logical Design → Physical Design.",
    "topic": "Database Design",
    "difficulty": "medium"
  },
  {
    "id": 77,
    "question": "What is the main purpose of database normalization?",
    "options": [
      "Increase redundancy for backups.",
      "Reduce data redundancy and prevent anomalies.",
      "Speed up queries at the cost of integrity.",
      "Combine tables for performance."
    ],
    "correctAnswer": "B",
    "explanation": "Database normalization reduces data redundancy and prevents anomalies.",
    "topic": "Database Normalization",
    "difficulty": "medium"
  },
  {
    "id": 78,
    "question": "Which SQL command is used to add new records to a table?",
    "options": [
      "INSERT INTO table_name …",
      "UPDATE table_name …",
      "DELETE FROM table_name …",
      "SELECT * FROM table_name;"
    ],
    "correctAnswer": "A",
    "explanation": "INSERT INTO is used to add new records to a table.",
    "topic": "SQL DML",
    "difficulty": "easy"
  },
  {
    "id": 79,
    "question": "What does the SQL CREATE command do?",
    "options": [
      "Inserts data into a table.",
      "Defines or adds new database objects (e.g., CREATE TABLE creates a table).",
      "Deletes a database object.",
      "Updates data."
    ],
    "correctAnswer": "B",
    "explanation": "CREATE command defines or adds new database objects like tables, indexes, etc.",
    "topic": "SQL DDL",
    "difficulty": "easy"
  },
  {
    "id": 80,
    "question": "What is the effect of the SQL TRUNCATE command on a table?",
    "options": [
      "Deletes all rows and resets identity counters.",
      "Deletes specified rows only.",
      "Alters table structure.",
      "Creates a new table."
    ],
    "correctAnswer": "A",
    "explanation": "TRUNCATE deletes all rows and resets identity counters.",
    "topic": "SQL DML",
    "difficulty": "medium"
  },
  {
    "id": 81,
    "question": "Which SQL command is used to permanently apply changes made during a transaction?",
    "options": [
      "ROLLBACK",
      "SAVEPOINT",
      "COMMIT",
      "BEGIN"
    ],
    "correctAnswer": "C",
    "explanation": "COMMIT permanently applies changes made during a transaction.",
    "topic": "SQL TCL",
    "difficulty": "easy"
  },
  {
    "id": 82,
    "question": "Which of the following ensures atomicity in a transaction?",
    "options": [
      "Using COMMIT and ROLLBACK to treat operations as a single unit.",
      "Saving changes automatically.",
      "Running queries one by one.",
      "Always using serial execution."
    ],
    "correctAnswer": "A",
    "explanation": "COMMIT and ROLLBACK ensure atomicity by treating operations as a single unit.",
    "topic": "Database Transactions",
    "difficulty": "medium"
  },
  {
    "id": 83,
    "question": "What does a CHECK constraint do?",
    "options": [
      "Ensures a column has no duplicate values.",
      "Limits the values in a column to a specified condition.",
      "Automatically increments a number.",
      "Defines a foreign key."
    ],
    "correctAnswer": "B",
    "explanation": "CHECK constraint limits the values in a column to a specified condition.",
    "topic": "SQL Constraints",
    "difficulty": "medium"
  },
  {
    "id": 84,
    "question": "Which of the following SQL commands is a DCL (Data Control Language) command?",
    "options": [
      "GRANT",
      "DELETE",
      "CREATE",
      "ALTER"
    ],
    "correctAnswer": "A",
    "explanation": "GRANT is a DCL command used for access control.",
    "topic": "SQL Categories",
    "difficulty": "medium"
  },
  {
    "id": 85,
    "question": "What is a correlated subquery?",
    "options": [
      "A query that executes once for the entire outer query.",
      "A subquery that uses values from the outer query and runs per outer row.",
      "A subquery with no relation to the outer query.",
      "A deprecated SQL feature."
    ],
    "correctAnswer": "B",
    "explanation": "A correlated subquery uses values from the outer query and runs for each outer row.",
    "topic": "SQL Subqueries",
    "difficulty": "hard"
  },
  {
    "id": 86,
    "question": "What is a nested (non-correlated) subquery?",
    "options": [
      "A query in the HAVING clause.",
      "A query inside another query that runs once and feeds its result to the outer query.",
      "A subquery in ORDER BY.",
      "A function call inside a SELECT."
    ],
    "correctAnswer": "B",
    "explanation": "A nested subquery runs once and feeds its result to the outer query.",
    "topic": "SQL Subqueries",
    "difficulty": "medium"
  },
  {
    "id": 87,
    "question": "Which of the following is a Data Query Language (DQL) command?",
    "options": [
      "INSERT",
      "UPDATE",
      "SELECT",
      "DROP"
    ],
    "correctAnswer": "C",
    "explanation": "SELECT is a DQL command used to query data.",
    "topic": "SQL Categories",
    "difficulty": "easy"
  },
  {
    "id": 88,
    "question": "Which of the following is a Data Manipulation Language (DML) command?",
    "options": [
      "CREATE",
      "ALTER",
      "INSERT",
      "GRANT"
    ],
    "correctAnswer": "C",
    "explanation": "INSERT is a DML command used to manipulate data.",
    "topic": "SQL Categories",
    "difficulty": "easy"
  },
  {
    "id": 89,
    "question": "What is database replication?",
    "options": [
      "Dividing data into shards.",
      "Copying and maintaining the same data in multiple locations.",
      "Encrypting the database.",
      "Sharding partitions."
    ],
    "correctAnswer": "B",
    "explanation": "Database replication is copying and maintaining the same data in multiple locations.",
    "topic": "Database Distribution",
    "difficulty": "medium"
  },
  {
    "id": 90,
    "question": "What is database sharding?",
    "options": [
      "Copying the entire database to backups.",
      "Partitioning a database by splitting data across multiple servers.",
      "Encrypting data at rest.",
      "Merging multiple tables."
    ],
    "correctAnswer": "B",
    "explanation": "Database sharding is partitioning a database by splitting data across multiple servers.",
    "topic": "Database Distribution",
    "difficulty": "medium"
  },
  {
    "id": 91,
    "question": "Which scenario best suits replication over sharding?",
    "options": [
      "Managing very large datasets by partitioning (sharding).",
      "Improving read availability and redundancy (replication).",
      "Combining multiple databases.",
      "Reducing data consistency."
    ],
    "correctAnswer": "B",
    "explanation": "Replication is better for improving read availability and redundancy.",
    "topic": "Database Distribution",
    "difficulty": "medium"
  },
  {
    "id": 92,
    "question": "Which is a feature of SQL databases as opposed to NoSQL?",
    "options": [
      "Schema-less design.",
      "ACID compliance (strict transactional consistency).",
      "Eventual consistency model.",
      "Only key-value data model."
    ],
    "correctAnswer": "B",
    "explanation": "SQL databases feature ACID compliance with strict transactional consistency.",
    "topic": "SQL vs NoSQL",
    "difficulty": "medium"
  },
  {
    "id": 93,
    "question": "Which is a feature of NoSQL databases (compared to SQL)?",
    "options": [
      "Fixed schema requirement.",
      "ACID transactions on every operation.",
      "Flexible (schema-less) data models.",
      "Only tabular data storage."
    ],
    "correctAnswer": "C",
    "explanation": "NoSQL databases feature flexible, schema-less data models.",
    "topic": "SQL vs NoSQL",
    "difficulty": "medium"
  },
  {
    "id": 94,
    "question": "Which scaling approach is more naturally associated with NoSQL databases?",
    "options": [
      "Vertical scaling by upgrading hardware.",
      "Horizontal scaling across multiple servers.",
      "No scaling needed for NoSQL.",
      "Cloud-only scaling."
    ],
    "correctAnswer": "B",
    "explanation": "NoSQL databases are designed for horizontal scaling across multiple servers.",
    "topic": "Database Scaling",
    "difficulty": "medium"
  },
  {
    "id": 95,
    "question": "For which scenario would NoSQL typically be chosen over SQL?",
    "options": [
      "Banking systems with strict transactions.",
      "Systems with highly variable unstructured data and need for horizontal scalability.",
      "Systems requiring complex JOIN operations.",
      "Applications with small, fixed schema."
    ],
    "correctAnswer": "B",
    "explanation": "NoSQL is chosen for systems with variable unstructured data needing horizontal scalability.",
    "topic": "SQL vs NoSQL",
    "difficulty": "medium"
  },
  {
    "id": 96,
    "question": "What is a database backup?",
    "options": [
      "A process to normalize tables.",
      "A copy of the database data used to protect against data loss.",
      "An index rebuild operation.",
      "A transaction commit."
    ],
    "correctAnswer": "B",
    "explanation": "A database backup is a copy of the database data used to protect against data loss.",
    "topic": "Database Administration",
    "difficulty": "easy"
  },
  {
    "id": 97,
    "question": "What is database recovery?",
    "options": [
      "Sharding data across servers.",
      "Reconstructing the database after data loss using backups.",
      "Encrypting the database.",
      "Running ANALYZE on tables."
    ],
    "correctAnswer": "B",
    "explanation": "Database recovery is reconstructing the database after data loss using backups.",
    "topic": "Database Administration",
    "difficulty": "medium"
  },
  {
    "id": 98,
    "question": "Which SQL clause is used to combine rows from two queries into one result set?",
    "options": [
      "JOIN",
      "UNION",
      "MERGE",
      "GROUP BY"
    ],
    "correctAnswer": "B",
    "explanation": "UNION is used to combine rows from two queries into one result set.",
    "topic": "SQL Operations",
    "difficulty": "medium"
  },
  {
    "id": 99,
    "question": "Which type of index is typically used for full-text searching?",
    "options": [
      "B-tree index",
      "Bitmap index",
      "Full-text index",
      "Hash index"
    ],
    "correctAnswer": "C",
    "explanation": "Full-text index is specifically designed for full-text searching.",
    "topic": "Database Indexing",
    "difficulty": "medium"
  },
  {
    "id": 100,
    "question": "Which SQL function returns the number of rows?",
    "options": [
      "SUM()",
      "COUNT()",
      "AVG()",
      "MAX()"
    ],
    "correctAnswer": "B",
    "explanation": "COUNT() function returns the number of rows in a result set.",
    "topic": "SQL Functions",
    "difficulty": "easy"
  },
  {
    "id": 101,
    "question": "What is referential integrity?",
    "options": [
      "Each table must have a primary key.",
      "Foreign key values must match primary key values or be NULL.",
      "Data must be encrypted.",
      "All tables must be normalized."
    ],
    "correctAnswer": "B",
    "explanation": "Referential integrity ensures that foreign key values match primary key values or are NULL.",
    "topic": "Database Integrity",
    "difficulty": "medium"
  },
  {
    "id": 102,
    "question": "Which of the following is a transaction control command?",
    "options": [
      "BEGIN TRANSACTION;",
      "COMMIT;",
      "ROLLBACK;",
      "All of the above."
    ],
    "correctAnswer": "D",
    "explanation": "BEGIN TRANSACTION, COMMIT, and ROLLBACK are all transaction control commands.",
    "topic": "SQL TCL",
    "difficulty": "easy"
  },
  {
    "id": 103,
    "question": "Which transaction property is violated if one transaction reads data written by another uncommitted transaction?",
    "options": [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    "correctAnswer": "C",
    "explanation": "Isolation is violated when one transaction reads uncommitted data from another transaction (dirty read).",
    "topic": "ACID Properties",
    "difficulty": "hard"
  },
  {
    "id": 104,
    "question": "Which SQL clause is used to filter groups after aggregation?",
    "options": [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "ORDER BY"
    ],
    "correctAnswer": "B",
    "explanation": "HAVING clause is used to filter groups after aggregation.",
    "topic": "SQL Clauses",
    "difficulty": "medium"
  },
  {
    "id": 105,
    "question": "What is data denormalization?",
    "options": [
      "Converting data to a normalized form.",
      "Introducing redundancy to speed up reads.",
      "Encrypting the database.",
      "Splitting tables further."
    ],
    "correctAnswer": "B",
    "explanation": "Denormalization introduces redundancy to speed up read operations.",
    "topic": "Database Design",
    "difficulty": "medium"
  },
  {
    "id": 106,
    "question": "Which of the following is a NoSQL wide-column store?",
    "options": [
      "MongoDB",
      "Cassandra",
      "Redis",
      "Neo4j"
    ],
    "correctAnswer": "B",
    "explanation": "Cassandra is a NoSQL wide-column store database.",
    "topic": "NoSQL Databases",
    "difficulty": "medium"
  },
  {
    "id": 107,
    "question": "Which of the following is a NoSQL key-value store?",
    "options": [
      "MySQL",
      "Redis",
      "Cassandra",
      "PostgreSQL"
    ],
    "correctAnswer": "B",
    "explanation": "Redis is a NoSQL key-value store database.",
    "topic": "NoSQL Databases",
    "difficulty": "medium"
  },
  {
    "id": 108,
    "question": "Which type of NoSQL database is optimized for relationship queries?",
    "options": [
      "Key-Value",
      "Document",
      "Graph",
      "Columnar"
    ],
    "correctAnswer": "C",
    "explanation": "Graph databases are optimized for relationship queries.",
    "topic": "NoSQL Databases",
    "difficulty": "medium"
  },
  {
    "id": 109,
    "question": "What is a join operation in SQL?",
    "options": [
      "Combining data from two or more tables based on related columns.",
      "Storing data in a joined format.",
      "Deleting duplicate rows.",
      "Summing values."
    ],
    "correctAnswer": "A",
    "explanation": "A join operation combines data from two or more tables based on related columns.",
    "topic": "SQL Operations",
    "difficulty": "easy"
  },
  {
    "id": 110,
    "question": "Which SQL clause groups rows that have the same values?",
    "options": [
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "UNION"
    ],
    "correctAnswer": "A",
    "explanation": "GROUP BY clause groups rows that have the same values.",
    "topic": "SQL Clauses",
    "difficulty": "easy"
  },
  {
    "id": 111,
    "question": "Which SQL clause filters the results of a GROUP BY?",
    "options": [
      "WHERE",
      "HAVING",
      "ORDER BY",
      "LIMIT"
    ],
    "correctAnswer": "B",
    "explanation": "HAVING clause filters the results of a GROUP BY operation.",
    "topic": "SQL Clauses",
    "difficulty": "medium"
  },
  {
    "id": 112,
    "question": "What is two-phase locking (2PL)?",
    "options": [
      "A method to optimize queries.",
      "A concurrency control mechanism ensuring serializability.",
      "A backup strategy.",
      "An encryption method."
    ],
    "correctAnswer": "B",
    "explanation": "Two-phase locking is a concurrency control mechanism ensuring serializability.",
    "topic": "Database Concurrency",
    "difficulty": "hard"
  },
  {
    "id": 113,
    "question": "Which SQL command allows defining a column default value?",
    "options": [
      "NOT NULL",
      "DEFAULT",
      "CHECK",
      "UNIQUE"
    ],
    "correctAnswer": "B",
    "explanation": "DEFAULT command allows defining a column default value.",
    "topic": "SQL DDL",
    "difficulty": "easy"
  },
  {
    "id": 114,
    "question": "Which isolation level prevents dirty reads and non-repeatable reads?",
    "options": [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE"
    ],
    "correctAnswer": "D",
    "explanation": "SERIALIZABLE isolation level prevents dirty reads, non-repeatable reads, and phantom reads.",
    "topic": "Database Isolation",
    "difficulty": "hard"
  },
  {
    "id": 115,
    "question": "What does the SQL clause ORDER BY name ASC do?",
    "options": [
      "Sorts results by name in ascending order.",
      "Filters rows where name is 'ASC'.",
      "Limits results to rows with name 'ASC'.",
      "Reverses the table."
    ],
    "correctAnswer": "A",
    "explanation": "ORDER BY name ASC sorts results by name in ascending order.",
    "topic": "SQL Clauses",
    "difficulty": "easy"
  },
  {
    "id": 116,
    "question": "Which SQL statement would you use to change a table's structure?",
    "options": [
      "ALTER TABLE",
      "UPDATE TABLE",
      "MODIFY TABLE",
      "CHANGE TABLE"
    ],
    "correctAnswer": "A",
    "explanation": "ALTER TABLE is used to change a table's structure.",
    "topic": "SQL DDL",
    "difficulty": "easy"
  },
  {
    "id": 117,
    "question": "What does the term row lock mean?",
    "options": [
      "Locking the entire table.",
      "Locking a single row in a table to prevent concurrent updates.",
      "Locking the database.",
      "A locked cursor."
    ],
    "correctAnswer": "B",
    "explanation": "Row lock means locking a single row in a table to prevent concurrent updates.",
    "topic": "Database Locking",
    "difficulty": "medium"
  },
  {
    "id": 118,
    "question": "Which of the following is an example of a composite primary key?",
    "options": [
      "A primary key that allows NULLs.",
      "A key composed of multiple columns combined to uniquely identify a row.",
      "A foreign key used as a primary key.",
      "A key that uses only one column."
    ],
    "correctAnswer": "B",
    "explanation": "A composite primary key is composed of multiple columns combined to uniquely identify a row.",
    "topic": "Database Keys",
    "difficulty": "medium"
  },
  {
    "id": 119,
    "question": "Which SQL clause is used to limit the number of rows returned?",
    "options": [
      "LIMIT (or TOP)",
      "WHERE",
      "ORDER BY",
      "GROUP BY"
    ],
    "correctAnswer": "A",
    "explanation": "LIMIT (MySQL) or TOP (SQL Server) clause is used to limit the number of rows returned.",
    "topic": "SQL Clauses",
    "difficulty": "easy"
  },
  {
    "id": 120,
    "question": "Which NoSQL model is ideal for storing hierarchical or tree-structured data?",
    "options": [
      "Key-Value Store",
      "Document Store (e.g., MongoDB)",
      "Wide-Column Store",
      "Graph Database"
    ],
    "correctAnswer": "B",
    "explanation": "Document stores like MongoDB are ideal for storing hierarchical or tree-structured data.",
    "topic": "NoSQL Databases",
    "difficulty": "medium"
  },
  {
    "id": 121,
    "question": "What is a materialized view in a database?",
    "options": [
      "A virtual table with no physical storage.",
      "A stored procedure.",
      "A table that contains the result of a query (stored physically).",
      "A backup copy of a view."
    ],
    "correctAnswer": "C",
    "explanation": "A materialized view is a table that contains the result of a query and is stored physically.",
    "topic": "Database Views",
    "difficulty": "medium"
  },
  {
    "id": 122,
    "question": "Which SQL command would you use to start a new transaction explicitly?",
    "options": [
      "BEGIN TRANSACTION;",
      "START;",
      "OPEN TRANSACTION;",
      "None (auto-managed)."
    ],
    "correctAnswer": "A",
    "explanation": "BEGIN TRANSACTION is used to start a new transaction explicitly.",
    "topic": "SQL TCL",
    "difficulty": "easy"
  },
  {
    "id": 123,
    "question": "Which of the following SQL commands is a Data Control Language (DCL) command?",
    "options": [
      "REVOKE",
      "DROP",
      "GRANT",
      "Both A and C"
    ],
    "correctAnswer": "D",
    "explanation": "Both REVOKE and GRANT are DCL commands for access control.",
    "topic": "SQL Categories",
    "difficulty": "medium"
  },
  {
    "id": 124,
    "question": "What does index fragmentation refer to?",
    "options": [
      "A measure of query execution time.",
      "Gaps in index pages due to frequent insert/delete.",
      "Splitting index into multiple columns.",
      "Encrypting index data."
    ],
    "correctAnswer": "B",
    "explanation": "Index fragmentation refers to gaps in index pages due to frequent insert/delete operations.",
    "topic": "Database Indexing",
    "difficulty": "medium"
  },
  {
    "id": 125,
    "question": "Which scenario would most likely require database sharding?",
    "options": [
      "Moderate data size on one server.",
      "Massive data volume that exceeds one server's capacity.",
      "Low read/write requirements.",
      "Only read-only access."
    ],
    "correctAnswer": "B",
    "explanation": "Database sharding is required when data volume exceeds one server's capacity.",
    "topic": "Database Scaling",
    "difficulty": "medium"
  },
  {
    "id": 126,
    "question": "Which is an example of denormalization?",
    "options": [
      "Breaking a table into more tables.",
      "Combining related tables or adding redundant columns to speed up queries.",
      "Removing indexes.",
      "Enforcing stricter constraints."
    ],
    "correctAnswer": "B",
    "explanation": "Denormalization involves combining related tables or adding redundant columns to speed up queries.",
    "topic": "Database Design",
    "difficulty": "medium"
  },
  {
    "id": 127,
    "question": "Which is NOT a typical ACID property?",
    "options": [
      "Atomicity",
      "Invisibility",
      "Consistency",
      "Durability"
    ],
    "correctAnswer": "B",
    "explanation": "Invisibility is not an ACID property. ACID stands for Atomicity, Consistency, Isolation, and Durability.",
    "topic": "ACID Properties",
    "difficulty": "easy"
  },
  {
    "id": 128,
    "question": "What is the purpose of the SQL EXPLAIN command?",
    "options": [
      "Formats the output in a human-readable way.",
      "Shows the query execution plan.",
      "Explains constraints.",
      "It is a joke and does nothing."
    ],
    "correctAnswer": "B",
    "explanation": "EXPLAIN command shows the query execution plan.",
    "topic": "SQL Performance",
    "difficulty": "medium"
  },
  {
    "id": 129,
    "question": "What is the difference between a clustered and non-clustered index?",
    "options": [
      "Clustered index is built on computed columns.",
      "Clustered index defines physical data order; non-clustered is separate.",
      "Non-clustered cannot be unique.",
      "They are the same."
    ],
    "correctAnswer": "B",
    "explanation": "Clustered index defines physical data order; non-clustered index is separate from data storage.",
    "topic": "Database Indexing",
    "difficulty": "hard"
  },
  {
    "id": 130,
    "question": "What is an example of a wide-column store NoSQL database?",
    "options": [
      "MySQL",
      "Cassandra",
      "MongoDB",
      "Oracle"
    ],
    "correctAnswer": "B",
    "explanation": "Cassandra is an example of a wide-column store NoSQL database.",
    "topic": "NoSQL Databases",
    "difficulty": "medium"
  },
  {
    "id": 131,
    "question": "Which of the following SQL clauses can contain a subquery?",
    "options": [
      "SELECT, FROM, WHERE, HAVING (all of these)",
      "Only WHERE clause",
      "Only SELECT clause",
      "Only JOIN clause"
    ],
    "correctAnswer": "A",
    "explanation": "Subqueries can be used in SELECT, FROM, WHERE, and HAVING clauses.",
    "topic": "SQL Subqueries",
    "difficulty": "medium"
  },
  {
    "id": 132,
    "question": "What is referential integrity in a relational database?",
    "options": [
      "Ensuring each primary key is unique.",
      "Ensuring foreign key values match primary key values or are NULL.",
      "Ensuring no nulls in any column.",
      "Ensuring data is encrypted."
    ],
    "correctAnswer": "B",
    "explanation": "Referential integrity ensures foreign key values match primary key values or are NULL.",
    "topic": "Database Integrity",
    "difficulty": "medium"
  },
  {
    "id": 133,
    "question": "Which SQL function would you use to concatenate values from multiple rows into one string?",
    "options": [
      "GROUP_CONCAT (MySQL) or STRING_AGG (PostgreSQL)",
      "CONCAT_WS",
      "MULTI_CONCAT",
      "None, SQL cannot do this."
    ],
    "correctAnswer": "A",
    "explanation": "GROUP_CONCAT (MySQL) or STRING_AGG (PostgreSQL) concatenates values from multiple rows.",
    "topic": "SQL Functions",
    "difficulty": "medium"
  },
  {
    "id": 134,
    "question": "What is a database cursor?",
    "options": [
      "A pointer for iterating through query results row by row.",
      "A graphical element in GUIs.",
      "A type of index.",
      "A trigger."
    ],
    "correctAnswer": "A",
    "explanation": "A database cursor is a pointer for iterating through query results row by row.",
    "topic": "Database Operations",
    "difficulty": "medium"
  },
  {
    "id": 135,
    "question": "What is a serializable isolation level?",
    "options": [
      "Lowest level, allowing most concurrency.",
      "Highest isolation, transactions appear to run sequentially.",
      "Same as read uncommitted.",
      "For reading only."
    ],
    "correctAnswer": "B",
    "explanation": "Serializable is the highest isolation level where transactions appear to run sequentially.",
    "topic": "Database Isolation",
    "difficulty": "hard"
  },
  {
    "id": 136,
    "question": "Which command is used to give a user access permissions in SQL?",
    "options": [
      "SET PERMISSIONS",
      "GRANT",
      "ALLOW",
      "UPDATE USER"
    ],
    "correctAnswer": "B",
    "explanation": "GRANT command is used to give a user access permissions in SQL.",
    "topic": "SQL Security",
    "difficulty": "easy"
  },
  {
    "id": 137,
    "question": "Which SQL clause is used to remove duplicate results?",
    "options": [
      "GROUP BY",
      "HAVING",
      "DISTINCT",
      "LIMIT"
    ],
    "correctAnswer": "C",
    "explanation": "DISTINCT clause is used to remove duplicate results.",
    "topic": "SQL Operations",
    "difficulty": "easy"
  },
  {
    "id": 138,
    "question": "What is the function of a transaction log?",
    "options": [
      "To store data redundantly.",
      "To record all changes for recovery purposes.",
      "To optimize queries.",
      "To lock tables."
    ],
    "correctAnswer": "B",
    "explanation": "Transaction log records all changes for recovery purposes.",
    "topic": "Database Recovery",
    "difficulty": "medium"
  },
  {
    "id": 139,
    "question": "Which of the following is a characteristic of OLAP (Online Analytical Processing)?",
    "options": [
      "Highly normalized schema.",
      "Read-heavy, denormalized star schema.",
      "Write-heavy transactional operations.",
      "No indexes."
    ],
    "correctAnswer": "B",
    "explanation": "OLAP systems are characterized by read-heavy operations with denormalized star schema.",
    "topic": "Database Systems",
    "difficulty": "medium"
  },
  {
    "id": 140,
    "question": "Which is a vertically scalable database solution?",
    "options": [
      "Adding more nodes to a database cluster.",
      "Moving to a bigger server with more RAM/CPU.",
      "Partitioning tables across servers.",
      "Changing database engine."
    ],
    "correctAnswer": "B",
    "explanation": "Vertical scaling involves moving to a bigger server with more RAM/CPU.",
    "topic": "Database Scaling",
    "difficulty": "easy"
  },
  {
    "id": 141,
    "question": "Which SQL clause sorts the result set by one or more columns?",
    "options": [
      "WHERE",
      "ORDER BY",
      "GROUP BY",
      "LIMIT"
    ],
    "correctAnswer": "B",
    "explanation": "ORDER BY clause sorts the result set by one or more columns.",
    "topic": "SQL Clauses",
    "difficulty": "easy"
  },
  {
    "id": 142,
    "question": "Which SQL command would you use to modify data in existing rows?",
    "options": [
      "INSERT",
      "UPDATE",
      "DELETE",
      "ALTER"
    ],
    "correctAnswer": "B",
    "explanation": "UPDATE command is used to modify data in existing rows.",
    "topic": "SQL DML",
    "difficulty": "easy"
  },
  {
    "id": 143,
    "question": "What is an index in a database primarily used for?",
    "options": [
      "Encrypting data.",
      "Improving search performance by enabling quick lookups.",
      "Generating random numbers.",
      "Creating backup copies."
    ],
    "correctAnswer": "B",
    "explanation": "An index is primarily used for improving search performance by enabling quick lookups.",
    "topic": "Database Indexing",
    "difficulty": "easy"
  },
  {
    "id": 144,
    "question": "Which of the following is NOT a NoSQL database category?",
    "options": [
      "Key-Value Store",
      "Document Store",
      "Relational Store",
      "Graph Database"
    ],
    "correctAnswer": "C",
    "explanation": "Relational Store is not a NoSQL category; it's a traditional SQL database model.",
    "topic": "NoSQL Databases",
    "difficulty": "easy"
  },
  {
    "id": 145,
    "question": "Why are ACID properties important in transactional databases?",
    "options": [
      "They ensure reliable and consistent transaction processing.",
      "They make queries faster.",
      "They limit database size.",
      "They enforce read-only mode."
    ],
    "correctAnswer": "A",
    "explanation": "ACID properties ensure reliable and consistent transaction processing.",
    "topic": "ACID Properties",
    "difficulty": "medium"
  },
  {
    "id": 146,
    "question": "Which SQL keyword is used to apply conditions to the rows being selected (filtering)?",
    "options": [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "ORDER BY"
    ],
    "correctAnswer": "A",
    "explanation": "WHERE keyword is used to apply conditions for filtering rows.",
    "topic": "SQL Clauses",
    "difficulty": "easy"
  },
  {
    "id": 147,
    "question": "Which SQL clause would you use to combine two tables by a related column in a query?",
    "options": [
      "WHERE",
      "JOIN",
      "GROUP BY",
      "HAVING"
    ],
    "correctAnswer": "B",
    "explanation": "JOIN clause is used to combine two tables by a related column.",
    "topic": "SQL Operations",
    "difficulty": "easy"
  },
  {
    "id": 148,
    "question": "What is an example of a time when you would use a correlated subquery?",
    "options": [
      "When the subquery result is independent of the outer query.",
      "When the subquery needs to refer to the outer query's current row.",
      "When querying only one table.",
      "Correlated subqueries are deprecated."
    ],
    "correctAnswer": "B",
    "explanation": "Correlated subqueries are used when the subquery needs to refer to the outer query's current row.",
    "topic": "SQL Subqueries",
    "difficulty": "hard"
  },
  {
    "id": 149,
    "question": "Which of the following SQL statements is used to change a user's password?",
    "options": [
      "ALTER USER",
      "GRANT",
      "REVOKE",
      "CREATE USER"
    ],
    "correctAnswer": "A",
    "explanation": "ALTER USER statement is used to change a user's password.",
    "topic": "SQL Security",
    "difficulty": "medium"
  },
  {
    "id": 150,
    "question": "What is a deadlock in databases?",
    "options": [
      "When two transactions wait indefinitely for each other's locks.",
      "When a transaction commits successfully.",
      "When the database is fully locked for no reason.",
      "When all indexes are rebuilt."
    ],
    "correctAnswer": "A",
    "explanation": "A deadlock occurs when two transactions wait indefinitely for each other's locks.",
    "topic": "Database Concurrency",
    "difficulty": "medium"
  },
  {
    "id": 151,
    "question": "Which of the following improves data availability in a distributed database?",
    "options": [
      "Single-point storage.",
      "Replication across nodes.",
      "Only caching data.",
      "Keeping a single backup offline."
    ],
    "correctAnswer": "B",
    "explanation": "Replication across nodes improves data availability in distributed databases.",
    "topic": "Database Distribution",
    "difficulty": "medium"
  },
  {
    "id": 152,
    "question": "Which is a benefit of using stored procedures?",
    "options": [
      "Automatically encrypts all data.",
      "Reduces network traffic by executing code on the database server.",
      "Ensures ACID compliance.",
      "Makes all queries faster by default."
    ],
    "correctAnswer": "B",
    "explanation": "Stored procedures reduce network traffic by executing code on the database server.",
    "topic": "Database Programming",
    "difficulty": "medium"
  },
  {
    "id": 153,
    "question": "Which SQL command could be used to explain a query plan?",
    "options": [
      "EXPLAIN",
      "ANALYZE",
      "DEBUG",
      "DESCRIBE"
    ],
    "correctAnswer": "A",
    "explanation": "EXPLAIN command is used to show query execution plans.",
    "topic": "SQL Performance",
    "difficulty": "medium"
  },
  {
    "id": 154,
    "question": "What is a primary disadvantage of shared-disk architecture?",
    "options": [
      "Only one database can exist.",
      "I/O contention on shared storage.",
      "No redundancy is possible.",
      "It is impossible to scale."
    ],
    "correctAnswer": "B",
    "explanation": "Shared-disk architecture suffers from I/O contention on shared storage.",
    "topic": "Database Architecture",
    "difficulty": "medium"
  },
  {
    "id": 155,
    "question": "Which database normalization form is concerned with eliminating multivalued dependencies?",
    "options": [
      "3NF",
      "4NF",
      "BCNF",
      "2NF"
    ],
    "correctAnswer": "B",
    "explanation": "4NF (Fourth Normal Form) is concerned with eliminating multivalued dependencies.",
    "topic": "Database Normalization",
    "difficulty": "hard"
  },
  {
    "id": 156,
    "question": "What is a SQL injection attack?",
    "options": [
      "An attacker physically injecting data.",
      "Maliciously crafted SQL queries to manipulate a database.",
      "A way to speed up query execution.",
      "Encrypting the database."
    ],
    "correctAnswer": "B",
    "explanation": "SQL injection is an attack using maliciously crafted SQL queries to manipulate a database.",
    "topic": "Database Security",
    "difficulty": "medium"
  },
  {
    "id": 157,
    "question": "Which is NOT a common technique for database backup?",
    "options": [
      "Full backup",
      "Incremental backup",
      "Mirroring data",
      "Full-text backup"
    ],
    "correctAnswer": "D",
    "explanation": "Full-text backup is not a common database backup technique.",
    "topic": "Database Administration",
    "difficulty": "medium"
  },
  {
    "id": 158,
    "question": "Which database model is most suitable for storing time-series sensor data?",
    "options": [
      "Relational",
      "Key-Value",
      "Time-Series",
      "Graph"
    ],
    "correctAnswer": "C",
    "explanation": "Time-series databases are specifically designed for storing time-series sensor data.",
    "topic": "Database Models",
    "difficulty": "medium"
  },
  {
    "id": 159,
    "question": "Which option is NOT a valid transaction outcome?",
    "options": [
      "Commit",
      "Rollback",
      "Partial commit",
      "Abort"
    ],
    "correctAnswer": "C",
    "explanation": "Partial commit is not a valid transaction outcome due to atomicity requirements.",
    "topic": "Database Transactions",
    "difficulty": "medium"
  },
  {
    "id": 160,
    "question": "What is the purpose of the SQL HAVING clause?",
    "options": [
      "Filter individual rows.",
      "Filter aggregated groups.",
      "Combine tables.",
      "Limit results."
    ],
    "correctAnswer": "B",
    "explanation": "HAVING clause is used to filter aggregated groups after GROUP BY.",
    "topic": "SQL Clauses",
    "difficulty": "medium"
  },
  {
    "id": 161,
    "question": "Which of the following isolation levels can prevent phantom reads?",
    "options": [
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE",
      "READ UNCOMMITTED"
    ],
    "correctAnswer": "C",
    "explanation": "SERIALIZABLE isolation level can prevent phantom reads.",
    "topic": "Database Isolation",
    "difficulty": "hard"
  },
  {
    "id": 162,
    "question": "Which of the following would most likely indicate an availability issue in system design?",
    "options": [
      "Elevated response times under load.",
      "Frequent error 503 (Service Unavailable) responses.",
      "Slow query execution.",
      "High data inconsistency."
    ],
    "correctAnswer": "B",
    "explanation": "Frequent 503 Service Unavailable responses indicate availability issues.",
    "topic": "System Reliability",
    "difficulty": "medium"
  },
  {
    "id": 163,
    "question": "What does the SQL clause GROUP_CONCAT (MySQL) or STRING_AGG (PostgreSQL) do?",
    "options": [
      "Concatenates strings from multiple rows into a single result.",
      "Splits a string into multiple rows.",
      "Encrypts a group of columns.",
      "No such function exists."
    ],
    "correctAnswer": "A",
    "explanation": "GROUP_CONCAT/STRING_AGG concatenates strings from multiple rows into a single result.",
    "topic": "SQL Functions",
    "difficulty": "medium"
  },
  {
    "id": 164,
    "question": "What is the advantage of using prepared statements?",
    "options": [
      "Slows down execution.",
      "Avoids SQL injection and can reuse execution plans.",
      "Eliminates the need for indexes.",
      "Requires no database connection."
    ],
    "correctAnswer": "B",
    "explanation": "Prepared statements avoid SQL injection and can reuse execution plans for better performance.",
    "topic": "Database Security",
    "difficulty": "medium"
  },
  {
    "id": 165,
    "question": "Which NoSQL database type is optimized for analytical queries on very large data sets?",
    "options": [
      "Key-Value",
      "Document",
      "Columnar (wide-column)",
      "Graph"
    ],
    "correctAnswer": "C",
    "explanation": "Columnar (wide-column) databases are optimized for analytical queries on large datasets.",
    "topic": "NoSQL Databases",
    "difficulty": "medium"
  },
  {
    "id": 166,
    "question": "What does \"eventual consistency\" imply in a distributed system?",
    "options": [
      "Immediate consistency is guaranteed.",
      "If no new updates occur, all replicas converge over time.",
      "Consistency is never achieved.",
      "It only applies to financial data."
    ],
    "correctAnswer": "B",
    "explanation": "Eventual consistency means all replicas converge over time if no new updates occur.",
    "topic": "Consistency Models",
    "difficulty": "medium"
  },
  {
    "id": 167,
    "question": "Which SQL command would be used to start a read-only transaction in some databases?",
    "options": [
      "BEGIN TRANSACTION READ ONLY;",
      "START READ ONLY;",
      "READ TRANSACTION;",
      "SET TRANSACTION READ ONLY;"
    ],
    "correctAnswer": "D",
    "explanation": "SET TRANSACTION READ ONLY is used to start a read-only transaction.",
    "topic": "SQL TCL",
    "difficulty": "medium"
  },
  {
    "id": 168,
    "question": "What is the outcome if two concurrent transactions deadlock?",
    "options": [
      "Both commit.",
      "Both abort and roll back.",
      "One is chosen as victim and rolled back.",
      "They merge into one."
    ],
    "correctAnswer": "C",
    "explanation": "In a deadlock, one transaction is chosen as victim and rolled back.",
    "topic": "Database Concurrency",
    "difficulty": "medium"
  },
  {
    "id": 169,
    "question": "Which is an example of a System Design trade-off?",
    "options": [
      "Choosing consistency over availability.",
      "Always using more servers for trivial tasks.",
      "Only writing clean code.",
      "Ignoring performance."
    ],
    "correctAnswer": "A",
    "explanation": "Choosing consistency over availability is a classic system design trade-off from CAP theorem.",
    "topic": "System Design Trade-offs",
    "difficulty": "medium"
  },
  {
    "id": 170,
    "question": "Which database index might slow down write operations the most?",
    "options": [
      "No index.",
      "Single index on primary key.",
      "Several secondary indexes (more indexes mean slower writes).",
      "Partitioned table."
    ],
    "correctAnswer": "C",
    "explanation": "Multiple secondary indexes slow down write operations as all indexes need to be updated.",
    "topic": "Database Indexing",
    "difficulty": "medium"
  },
  {
    "id": 171,
    "question": "What happens during an SQL deadlock?",
    "options": [
      "One transaction is aborted and rolled back.",
      "All transactions are committed.",
      "The database crashes immediately.",
      "Nothing; deadlock is a myth."
    ],
    "correctAnswer": "A",
    "explanation": "During a deadlock, one transaction is chosen as victim and aborted/rolled back.",
    "topic": "Database Concurrency",
    "difficulty": "medium"
  },
  {
    "id": 172,
    "question": "Which consistency model does the BASE acronym relate to?",
    "options": [
      "Strong consistency.",
      "Eventual consistency (NoSQL).",
      "Full ACID compliance.",
      "Real-time consistency."
    ],
    "correctAnswer": "B",
    "explanation": "BASE (Basically Available, Soft state, Eventually consistent) relates to eventual consistency in NoSQL.",
    "topic": "NoSQL Principles",
    "difficulty": "medium"
  },
  {
    "id": 173,
    "question": "Which SQL isolation level allows dirty reads?",
    "options": [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE"
    ],
    "correctAnswer": "A",
    "explanation": "READ UNCOMMITTED isolation level allows dirty reads.",
    "topic": "Database Isolation",
    "difficulty": "medium"
  },
  {
    "id": 174,
    "question": "Which SQL command is used to rename a table?",
    "options": [
      "RENAME TABLE old_name TO new_name;",
      "ALTER TABLE old_name RENAME TO new_name;",
      "UPDATE TABLE new_name;",
      "Both A and B (depending on SQL dialect)."
    ],
    "correctAnswer": "D",
    "explanation": "Both RENAME TABLE and ALTER TABLE RENAME TO can be used depending on SQL dialect.",
    "topic": "SQL DDL",
    "difficulty": "medium"
  },
  {
    "id": 175,
    "question": "What is query caching?",
    "options": [
      "Storing frequently accessed queries and results to speed up retrieval.",
      "Keeping queries in memory for logging.",
      "A type of index.",
      "Limiting query size."
    ],
    "correctAnswer": "A",
    "explanation": "Query caching stores frequently accessed queries and results to speed up retrieval.",
    "topic": "Database Performance",
    "difficulty": "medium"
  },
  {
    "id": 176,
    "question": "Which SQL clause combines the result of two SELECT statements (removing duplicates)?",
    "options": [
      "JOIN",
      "UNION",
      "INTERSECT",
      "ALL"
    ],
    "correctAnswer": "B",
    "explanation": "UNION combines the result of two SELECT statements and removes duplicates.",
    "topic": "SQL Operations",
    "difficulty": "easy"
  },
  {
    "id": 177,
    "question": "Which NoSQL model is best for JSON document storage and retrieval?",
    "options": [
      "Key-Value Store",
      "Wide-Column Store",
      "Document Store (e.g., MongoDB)",
      "Relational Store"
    ],
    "correctAnswer": "C",
    "explanation": "Document stores like MongoDB are best for JSON document storage and retrieval.",
    "topic": "NoSQL Databases",
    "difficulty": "easy"
  },
  {
    "id": 178,
    "question": "In databases, what is a hotspot?",
    "options": [
      "A single point of failure.",
      "A node with maximum resources.",
      "A location (or shard) receiving disproportionally high traffic or load.",
      "A backup server."
    ],
    "correctAnswer": "C",
    "explanation": "A hotspot is a location or shard receiving disproportionally high traffic or load.",
    "topic": "Database Performance",
    "difficulty": "medium"
  },
  {
    "id": 179,
    "question": "Which of the following is a typical use case for an OLTP (Online Transaction Processing) system?",
    "options": [
      "Data warehousing.",
      "Real-time transaction processing (e.g., banking).",
      "Scientific computations.",
      "Log aggregation."
    ],
    "correctAnswer": "B",
    "explanation": "OLTP systems are used for real-time transaction processing like banking systems.",
    "topic": "Database Systems",
    "difficulty": "medium"
  },
  {
    "id": 180,
    "question": "Which NoSQL feature allows storing different attributes in each record?",
    "options": [
      "Fixed schema",
      "Flexible schema (schema-less)",
      "ACID transactions",
      "Tabular format"
    ],
    "correctAnswer": "B",
    "explanation": "Flexible schema (schema-less) allows storing different attributes in each record.",
    "topic": "NoSQL Databases",
    "difficulty": "easy"
  },
  {
    "id": 181,
    "question": "Which system design goal does caching typically improve?",
    "options": [
      "Availability",
      "Latency (response time)",
      "Consistency",
      "Security"
    ],
    "correctAnswer": "B",
    "explanation": "Caching typically improves latency by reducing response time.",
    "topic": "System Performance",
    "difficulty": "easy"
  },
  {
    "id": 182,
    "question": "What is the main purpose of horizontal partitioning (sharding)?",
    "options": [
      "Improve write/read scalability by distributing load.",
      "Backup data across servers.",
      "Encrypt data.",
      "Merge databases."
    ],
    "correctAnswer": "A",
    "explanation": "Horizontal partitioning (sharding) improves scalability by distributing load across servers.",
    "topic": "Database Scaling",
    "difficulty": "medium"
  },
  {
    "id": 183,
    "question": "Which of the following is NOT a benefit of database normalization?",
    "options": [
      "Reduced redundancy.",
      "Prevents update anomalies.",
      "Simpler table structure.",
      "Improved data consistency."
    ],
    "correctAnswer": "C",
    "explanation": "Normalization typically makes table structure more complex, not simpler.",
    "topic": "Database Normalization",
    "difficulty": "medium"
  },
  {
    "id": 184,
    "question": "Which SQL statement lists the tables in a database (in many SQL systems)?",
    "options": [
      "SELECT * FROM tables;",
      "SHOW TABLES;",
      "LIST TABLES;",
      "DESCRIBE ALL;"
    ],
    "correctAnswer": "B",
    "explanation": "SHOW TABLES lists the tables in a database in many SQL systems.",
    "topic": "SQL Commands",
    "difficulty": "easy"
  },
  {
    "id": 185,
    "question": "Which of the following is an example of an ACID property scenario?",
    "options": [
      "Transaction fails and no partial change is made (Atomicity).",
      "All clients always see the latest write (Strong Consistency).",
      "Transaction speed is always the same.",
      "Data is backed up every minute."
    ],
    "correctAnswer": "A",
    "explanation": "Transaction failing with no partial changes is an example of Atomicity.",
    "topic": "ACID Properties",
    "difficulty": "medium"
  },
  {
    "id": 186,
    "question": "What is a many-to-many relationship in databases?",
    "options": [
      "One record in Table A relates to many in Table B, and vice versa.",
      "One record in Table A relates to one in Table B.",
      "Many tables relate to one central table.",
      "Many columns in the same table."
    ],
    "correctAnswer": "A",
    "explanation": "Many-to-many relationship means one record in Table A relates to many in Table B, and vice versa.",
    "topic": "Database Relationships",
    "difficulty": "medium"
  },
  {
    "id": 187,
    "question": "Which of the following is NOT a normal form above 1NF?",
    "options": [
      "2NF",
      "3NF",
      "6NF",
      "4NF"
    ],
    "correctAnswer": "C",
    "explanation": "6NF is not a standard normal form. Common forms are 1NF, 2NF, 3NF, BCNF, 4NF, 5NF.",
    "topic": "Database Normalization",
    "difficulty": "medium"
  },
  {
    "id": 188,
    "question": "Which SQL function is used to get the current date and time?",
    "options": [
      "GETDATE() (SQL Server) / NOW() (MySQL)",
      "CURRENT_TIMESTAMP",
      "SYSDATE",
      "All of the above (depending on SQL dialect)"
    ],
    "correctAnswer": "D",
    "explanation": "Different SQL dialects use different functions for current date/time.",
    "topic": "SQL Functions",
    "difficulty": "medium"
  },
  {
    "id": 189,
    "question": "What is a transactional savepoint used for?",
    "options": [
      "To mark a specific point in a transaction to which you can roll back without aborting the whole transaction.",
      "To permanently commit.",
      "To encrypt data.",
      "To isolate tables."
    ],
    "correctAnswer": "A",
    "explanation": "Savepoint marks a point in a transaction for partial rollback without aborting the whole transaction.",
    "topic": "Database Transactions",
    "difficulty": "medium"
  },
  {
    "id": 190,
    "question": "Which NoSQL database uses tables, rows, and columns but without fixed schemas?",
    "options": [
      "Redis",
      "Cassandra",
      "PostgreSQL",
      "Neo4j"
    ],
    "correctAnswer": "B",
    "explanation": "Cassandra uses tables, rows, and columns but without fixed schemas (wide-column store).",
    "topic": "NoSQL Databases",
    "difficulty": "medium"
  },
  {
    "id": 191,
    "question": "Which of the following is NOT a typical component of a CI/CD pipeline?",
    "options": [
      "Version Control (e.g., git).",
      "Automated Testing.",
      "Continuous Integration server.",
      "Manual Deployment by ssh."
    ],
    "correctAnswer": "D",
    "explanation": "Manual deployment by ssh is not typical in CI/CD pipelines which focus on automation.",
    "topic": "DevOps Practices",
    "difficulty": "medium"
  },
  {
    "id": 192,
    "question": "Which of the following best describes failover in system design?",
    "options": [
      "Gracefully handling user errors.",
      "Automatically switching to a redundant component after failure.",
      "Encrypting data in transit.",
      "Increasing resource allocation."
    ],
    "correctAnswer": "B",
    "explanation": "Failover is automatically switching to a redundant component after failure.",
    "topic": "System Reliability",
    "difficulty": "medium"
  },
  {
    "id": 193,
    "question": "What is an example of eventual consistency in CAP?",
    "options": [
      "All nodes reflect the last write immediately.",
      "All nodes eventually see the same data if no new updates come.",
      "Nodes never agree on data.",
      "The system stays offline."
    ],
    "correctAnswer": "B",
    "explanation": "Eventual consistency means all nodes eventually see the same data if no new updates occur.",
    "topic": "CAP Theorem",
    "difficulty": "medium"
  },
  {
    "id": 194,
    "question": "Which SQL clause is used to define the schema of a table?",
    "options": [
      "CREATE TABLE",
      "ALTER TABLE",
      "UPDATE",
      "INSERT"
    ],
    "correctAnswer": "A",
    "explanation": "CREATE TABLE clause is used to define the schema of a table.",
    "topic": "SQL DDL",
    "difficulty": "easy"
  },
  {
    "id": 195,
    "question": "What is database mirroring?",
    "options": [
      "Running the database on two different machines in active/passive mode for high availability.",
      "Using a mirror formula for queries.",
      "Duplicating tables within the same database.",
      "Generating visual reflections."
    ],
    "correctAnswer": "A",
    "explanation": "Database mirroring runs the database on two machines in active/passive mode for high availability.",
    "topic": "Database High Availability",
    "difficulty": "medium"
  },
  {
    "id": 196,
    "question": "Which of the following indicates a violation of atomicity?",
    "options": [
      "Half of a transaction's changes are saved, the other half are not, after a crash.",
      "All or none of a transaction's operations occur.",
      "No transactions can run concurrently.",
      "Transactions are saved instantly."
    ],
    "correctAnswer": "A",
    "explanation": "Partial transaction completion violates atomicity which requires all-or-nothing behavior.",
    "topic": "ACID Properties",
    "difficulty": "medium"
  },
  {
    "id": 197,
    "question": "Which SQL clause can be used to add conditions on aggregated data?",
    "options": [
      "WHERE",
      "HAVING",
      "ORDER BY",
      "LIMIT"
    ],
    "correctAnswer": "B",
    "explanation": "HAVING clause is used to add conditions on aggregated data after GROUP BY.",
    "topic": "SQL Clauses",
    "difficulty": "medium"
  },
  {
    "id": 198,
    "question": "Which NoSQL database model is represented by MongoDB?",
    "options": [
      "Graph",
      "Document",
      "Wide-Column",
      "Key-Value"
    ],
    "correctAnswer": "B",
    "explanation": "MongoDB is a document-based NoSQL database.",
    "topic": "NoSQL Databases",
    "difficulty": "easy"
  },
  {
    "id": 199,
    "question": "Which SQL keyword is used to temporarily select only a portion of query results?",
    "options": [
      "LIMIT (MySQL) or TOP (SQL Server)",
      "PARTITION",
      "SEGMENT",
      "RANGE"
    ],
    "correctAnswer": "A",
    "explanation": "LIMIT (MySQL) or TOP (SQL Server) is used to select only a portion of query results.",
    "topic": "SQL Clauses",
    "difficulty": "easy"
  },
  {
    "id": 200,
    "question": "What is a primary advantage of horizontal scaling over vertical scaling?",
    "options": [
      "It's always cheaper.",
      "It avoids a single point of failure by using multiple machines.",
      "It requires no architecture changes.",
      "It guarantees immediate consistency."
    ],
    "correctAnswer": "B",
    "explanation": "Horizontal scaling avoids single point of failure by distributing load across multiple machines.",
    "topic": "Scalability",
    "difficulty": "medium"
  },
  {
    "id": 201,
    "question": "Cloud computing allows users to store and access data and applications over the ____ (instead of a local computer's hard drive):",
    "options": [
      "Internet",
      "Local Network",
      "USB Drive",
      "Personal Server"
    ],
    "correctAnswer": "A",
    "explanation": "Cloud computing allows users to store and access data and applications over the Internet instead of local storage.",
    "topic": "Cloud Computing Fundamentals",
    "difficulty": "easy"
  },
  {
    "id": 202,
    "question": "Which characteristic of cloud computing refers to the ability to quickly provision and release computing resources on demand?",
    "options": [
      "On-demand self-service",
      "Broad network access",
      "Resource pooling",
      "Resilient computing"
    ],
    "correctAnswer": "A",
    "explanation": "On-demand self-service allows users to quickly provision and release computing resources as needed.",
    "topic": "Cloud Computing Characteristics",
    "difficulty": "easy"
  },
  {
    "id": 203,
    "question": "In cloud computing, \"broad network access\" means services are available _____:",
    "options": [
      "Over the internet via standard devices",
      "Only on private networks",
      "Through telephone lines",
      "Only within data centers"
    ],
    "correctAnswer": "A",
    "explanation": "Broad network access means cloud services are available over the internet via standard devices.",
    "topic": "Cloud Computing Characteristics",
    "difficulty": "easy"
  },
  {
    "id": 204,
    "question": "Which of the following is NOT an advantage of cloud computing?",
    "options": [
      "Scalability",
      "High availability",
      "High upfront hardware cost",
      "Pay-per-use pricing model"
    ],
    "correctAnswer": "C",
    "explanation": "High upfront hardware cost is not an advantage; cloud computing reduces upfront costs.",
    "topic": "Cloud Computing Benefits",
    "difficulty": "easy"
  },
  {
    "id": 205,
    "question": "Which of these is a disadvantage of cloud computing as mentioned in industry discussions?",
    "options": [
      "High initial capital expenditure",
      "Vendor lock-in",
      "Unlimited data security",
      "Lack of internet access"
    ],
    "correctAnswer": "B",
    "explanation": "Vendor lock-in is a common disadvantage where users become dependent on a specific cloud provider.",
    "topic": "Cloud Computing Challenges",
    "difficulty": "medium"
  },
  {
    "id": 206,
    "question": "On-demand self-service in cloud computing means:",
    "options": [
      "Users can provision resources themselves without human intervention.",
      "The cloud provider must manually provision all resources.",
      "Users must request resources through a lengthy approval process.",
      "Resources are pre-allocated in fixed amounts."
    ],
    "correctAnswer": "A",
    "explanation": "On-demand self-service allows users to provision resources automatically without human intervention.",
    "topic": "Cloud Computing Characteristics",
    "difficulty": "easy"
  },
  {
    "id": 207,
    "question": "Which of these is a common characteristic of cloud computing for billing and monitoring purposes?",
    "options": [
      "Multi-tenancy",
      "Measured service",
      "Resilient computing",
      "Sustainability"
    ],
    "correctAnswer": "B",
    "explanation": "Measured service enables billing and monitoring based on actual resource usage.",
    "topic": "Cloud Computing Characteristics",
    "difficulty": "medium"
  },
  {
    "id": 208,
    "question": "Cloud computing typically offers which pricing model?",
    "options": [
      "Pay-per-use",
      "Fixed price per year only",
      "One-time payment",
      "Free for life"
    ],
    "correctAnswer": "A",
    "explanation": "Cloud computing typically uses a pay-per-use pricing model where users pay for consumed resources.",
    "topic": "Cloud Computing Pricing",
    "difficulty": "easy"
  },
  {
    "id": 209,
    "question": "In a public cloud deployment model, who owns and manages the infrastructure?",
    "options": [
      "The customer's organization",
      "A cloud service provider",
      "A government agency",
      "The local IT department"
    ],
    "correctAnswer": "B",
    "explanation": "In public cloud, the cloud service provider owns and manages the infrastructure.",
    "topic": "Cloud Deployment Models",
    "difficulty": "easy"
  },
  {
    "id": 210,
    "question": "In a private cloud deployment model, the cloud infrastructure is used exclusively by:",
    "options": [
      "Multiple unrelated organizations",
      "A single organization",
      "The general public",
      "A community of users with common concerns"
    ],
    "correctAnswer": "B",
    "explanation": "Private cloud infrastructure is used exclusively by a single organization.",
    "topic": "Cloud Deployment Models",
    "difficulty": "easy"
  },
  {
    "id": 211,
    "question": "What type of cloud is formed by combining public and private clouds?",
    "options": [
      "Community cloud",
      "Hybrid cloud",
      "Multi-cloud",
      "Distributed cloud"
    ],
    "correctAnswer": "B",
    "explanation": "Hybrid cloud combines public and private cloud environments.",
    "topic": "Cloud Deployment Models",
    "difficulty": "easy"
  },
  {
    "id": 212,
    "question": "A cloud deployment model where a group of organizations share infrastructure with common concerns is called:",
    "options": [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud"
    ],
    "correctAnswer": "D",
    "explanation": "Community cloud is shared by organizations with common concerns or requirements.",
    "topic": "Cloud Deployment Models",
    "difficulty": "medium"
  },
  {
    "id": 213,
    "question": "Which cloud service model provides virtualized computing resources like servers and storage over the internet?",
    "options": [
      "SaaS",
      "PaaS",
      "IaaS",
      "None of the above"
    ],
    "correctAnswer": "C",
    "explanation": "IaaS (Infrastructure as a Service) provides virtualized computing resources like servers and storage.",
    "topic": "Cloud Service Models",
    "difficulty": "easy"
  },
  {
    "id": 214,
    "question": "Software as a Service (SaaS) provides:",
    "options": [
      "Virtual machines and storage for user control",
      "Complete software applications accessible over the internet",
      "A platform for developing and deploying applications",
      "Only infrastructure components"
    ],
    "correctAnswer": "B",
    "explanation": "SaaS provides complete software applications accessible over the internet.",
    "topic": "Cloud Service Models",
    "difficulty": "easy"
  },
  {
    "id": 215,
    "question": "Which of the following is an example of a SaaS application?",
    "options": [
      "Amazon EC2 (Infrastructure)",
      "AWS Elastic Beanstalk (Platform)",
      "Google Docs (software over the internet)",
      "VMware ESXi (virtualization software)"
    ],
    "correctAnswer": "C",
    "explanation": "Google Docs is a SaaS application providing software functionality over the internet.",
    "topic": "Cloud Service Models",
    "difficulty": "easy"
  },
  {
    "id": 216,
    "question": "Platform as a Service (PaaS) primarily provides:",
    "options": [
      "Application software to end users",
      "Infrastructure components only",
      "Development and deployment tools and runtime environment",
      "Networking and storage without compute"
    ],
    "correctAnswer": "C",
    "explanation": "PaaS provides development and deployment tools and runtime environment for applications.",
    "topic": "Cloud Service Models",
    "difficulty": "medium"
  },
  {
    "id": 217,
    "question": "What is AWS EC2?",
    "options": [
      "A software application for word processing",
      "A platform service to develop applications",
      "Elastic Compute Cloud, providing on-demand scalable virtual servers",
      "A database service for storing structured data"
    ],
    "correctAnswer": "C",
    "explanation": "AWS EC2 (Elastic Compute Cloud) provides on-demand scalable virtual servers.",
    "topic": "AWS Services",
    "difficulty": "easy"
  },
  {
    "id": 218,
    "question": "What is an Amazon Machine Image (AMI)?",
    "options": [
      "A static IP address in AWS",
      "A load balancing service",
      "A template that contains software configuration to launch an EC2 instance",
      "A monitoring dashboard"
    ],
    "correctAnswer": "C",
    "explanation": "An AMI is a template containing software configuration to launch EC2 instances.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 219,
    "question": "What is an Elastic IP address in AWS?",
    "options": [
      "A virtual server",
      "A public static IPv4 address assigned to your AWS account",
      "A DNS service",
      "A type of storage volume"
    ],
    "correctAnswer": "B",
    "explanation": "An Elastic IP is a public static IPv4 address assigned to your AWS account.",
    "topic": "AWS Networking",
    "difficulty": "medium"
  },
  {
    "id": 220,
    "question": "Elastic Load Balancing in AWS is used to:",
    "options": [
      "Secure your AWS account",
      "Distribute incoming traffic across multiple instances",
      "Store objects in the cloud",
      "Manage user identities"
    ],
    "correctAnswer": "B",
    "explanation": "Elastic Load Balancing distributes incoming traffic across multiple instances for high availability.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 221,
    "question": "Amazon S3 is primarily used for:",
    "options": [
      "Object storage in buckets",
      "Relational database services",
      "Virtual machine hosting",
      "Networking"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon S3 is primarily used for object storage in containers called buckets.",
    "topic": "AWS Storage",
    "difficulty": "easy"
  },
  {
    "id": 222,
    "question": "In Amazon S3, data is stored as:",
    "options": [
      "Files on virtual hard drives",
      "Objects in buckets",
      "Tables in a relational database",
      "Streams only"
    ],
    "correctAnswer": "B",
    "explanation": "In Amazon S3, data is stored as objects within containers called buckets.",
    "topic": "AWS Storage",
    "difficulty": "easy"
  },
  {
    "id": 223,
    "question": "What is Amazon EBS used for?",
    "options": [
      "Hosting serverless functions",
      "Block-level storage volumes for EC2 instances",
      "Object storage for large files",
      "Monitoring resources"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon EBS provides block-level storage volumes for EC2 instances.",
    "topic": "AWS Storage",
    "difficulty": "medium"
  },
  {
    "id": 224,
    "question": "Amazon RDS is a service for:",
    "options": [
      "Scaling virtual servers",
      "Relational database management in the cloud",
      "Distributed caching",
      "NoSQL data storage"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon RDS is a managed relational database service in the cloud.",
    "topic": "AWS Databases",
    "difficulty": "easy"
  },
  {
    "id": 225,
    "question": "Amazon DynamoDB is:",
    "options": [
      "A fully managed NoSQL database service",
      "A serverless compute service",
      "A relational database",
      "A machine learning platform"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon DynamoDB is a fully managed NoSQL database service.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 226,
    "question": "Amazon Redshift is designed for:",
    "options": [
      "Storing static websites",
      "Big data analytics and data warehousing",
      "Managing virtual networks",
      "Content distribution"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Redshift is designed for big data analytics and data warehousing.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 227,
    "question": "Which of the following is an example of a real-world application of cloud computing?",
    "options": [
      "On-demand video streaming (e.g., Netflix)",
      "Desktop word processor only",
      "Local-only file storage",
      "Single-user offline games"
    ],
    "correctAnswer": "A",
    "explanation": "On-demand video streaming services like Netflix are excellent examples of cloud computing applications.",
    "topic": "Cloud Computing Applications",
    "difficulty": "easy"
  },
  {
    "id": 228,
    "question": "Cloud-based e-learning platforms for students are an example of cloud computing in:",
    "options": [
      "Education sector",
      "Manufacturing",
      "Agriculture",
      "Automotive"
    ],
    "correctAnswer": "A",
    "explanation": "Cloud-based e-learning platforms demonstrate cloud computing application in the education sector.",
    "topic": "Cloud Computing Applications",
    "difficulty": "easy"
  },
  {
    "id": 229,
    "question": "An example of cloud computing in healthcare (medical field) is:",
    "options": [
      "Electronic health records accessible via the cloud",
      "Writing prescriptions on paper",
      "Using only local hospital servers",
      "None of these"
    ],
    "correctAnswer": "A",
    "explanation": "Electronic health records accessible via the cloud is a common healthcare application of cloud computing.",
    "topic": "Cloud Computing Applications",
    "difficulty": "easy"
  },
  {
    "id": 230,
    "question": "Which of the following is NOT a Cloud data lifecycle phase?",
    "options": [
      "Generation of data",
      "Storage of data",
      "Data encryption policy creation",
      "Destruction of data"
    ],
    "correctAnswer": "C",
    "explanation": "Data encryption policy creation is not a phase in the cloud data lifecycle.",
    "topic": "Cloud Data Management",
    "difficulty": "medium"
  },
  {
    "id": 231,
    "question": "The first phase in the cloud data lifecycle (as a concept) is:",
    "options": [
      "Data Transformation",
      "Data Generation/Collection",
      "Data Archival",
      "Data Deletion"
    ],
    "correctAnswer": "B",
    "explanation": "Data Generation/Collection is the first phase in the cloud data lifecycle.",
    "topic": "Cloud Data Management",
    "difficulty": "medium"
  },
  {
    "id": 232,
    "question": "Which AWS service allows you to automatically increase or decrease EC2 instances based on demand?",
    "options": [
      "Amazon EC2 itself",
      "AWS Auto Scaling",
      "Amazon RDS",
      "Amazon S3"
    ],
    "correctAnswer": "B",
    "explanation": "AWS Auto Scaling automatically adjusts EC2 instances based on demand.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 233,
    "question": "Which of these is NOT an AWS service model type?",
    "options": [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Hardware as a Service (HaaS)"
    ],
    "correctAnswer": "D",
    "explanation": "Hardware as a Service (HaaS) is not a standard cloud service model type.",
    "topic": "Cloud Service Models",
    "difficulty": "easy"
  },
  {
    "id": 234,
    "question": "Public cloud, private cloud, and hybrid cloud are examples of:",
    "options": [
      "Service models",
      "Deployment models",
      "Data storage types",
      "Encryption protocols"
    ],
    "correctAnswer": "B",
    "explanation": "Public, private, and hybrid clouds are examples of cloud deployment models.",
    "topic": "Cloud Deployment Models",
    "difficulty": "easy"
  },
  {
    "id": 235,
    "question": "Which of the following cloud deployment models provides the greatest level of control and security for an organization?",
    "options": [
      "Public cloud",
      "Private cloud",
      "Community cloud",
      "Hybrid cloud"
    ],
    "correctAnswer": "B",
    "explanation": "Private cloud provides the greatest level of control and security for an organization.",
    "topic": "Cloud Deployment Models",
    "difficulty": "medium"
  },
  {
    "id": 236,
    "question": "Which service model would let a company avoid managing the operating system and middleware for their application?",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "DaaS (Desktop as a Service)"
    ],
    "correctAnswer": "C",
    "explanation": "SaaS allows companies to avoid managing operating systems and middleware entirely.",
    "topic": "Cloud Service Models",
    "difficulty": "medium"
  },
  {
    "id": 237,
    "question": "Which cloud characteristic involves multiple customers sharing the same resources?",
    "options": [
      "Multi-tenancy",
      "Resiliency",
      "Customization",
      "Sustainability"
    ],
    "correctAnswer": "A",
    "explanation": "Multi-tenancy involves multiple customers sharing the same cloud resources.",
    "topic": "Cloud Computing Characteristics",
    "difficulty": "medium"
  },
  {
    "id": 238,
    "question": "Which statement is true about AWS Regions?",
    "options": [
      "All regions are physically adjacent",
      "Each region is independent and isolated",
      "Regions are used to specify user permissions",
      "There is only one global region"
    ],
    "correctAnswer": "B",
    "explanation": "Each AWS region is independent and isolated from other regions.",
    "topic": "AWS Infrastructure",
    "difficulty": "medium"
  },
  {
    "id": 239,
    "question": "What does the \"pay-per-use\" model in cloud computing refer to?",
    "options": [
      "Paying a fixed monthly fee regardless of usage",
      "Paying only for the computing resources actually used",
      "Free usage for first year",
      "Purchasing all required hardware upfront"
    ],
    "correctAnswer": "B",
    "explanation": "Pay-per-use model means paying only for the computing resources actually consumed.",
    "topic": "Cloud Computing Pricing",
    "difficulty": "easy"
  },
  {
    "id": 240,
    "question": "AWS Elastic Beanstalk is an example of which cloud service model?",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "None of the above"
    ],
    "correctAnswer": "B",
    "explanation": "AWS Elastic Beanstalk is a Platform as a Service (PaaS) offering.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 241,
    "question": "Amazon S3 provides what type of data storage?",
    "options": [
      "Block storage",
      "File storage",
      "Object storage",
      "Database storage"
    ],
    "correctAnswer": "C",
    "explanation": "Amazon S3 provides object storage for storing and retrieving data.",
    "topic": "AWS Storage",
    "difficulty": "easy"
  },
  {
    "id": 242,
    "question": "True or False: In AWS, an Elastic IP address can be associated with an EC2 instance to give it a static public IP.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "explanation": "True. Elastic IP addresses can be associated with EC2 instances to provide static public IP addresses.",
    "topic": "AWS Networking",
    "difficulty": "easy"
  },
  {
    "id": 243,
    "question": "Which AWS service is designed for long-term archival of data (e.g., seldom accessed data)?",
    "options": [
      "Amazon S3 Standard",
      "Amazon S3 Glacier",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon S3 Glacier is designed for long-term archival of infrequently accessed data.",
    "topic": "AWS Storage",
    "difficulty": "medium"
  },
  {
    "id": 244,
    "question": "Which of the following is NOT typically a benefit of using cloud computing?",
    "options": [
      "Increased IT agility",
      "Reduced capital expenditure",
      "Guaranteed 100% data security",
      "Easy scalability"
    ],
    "correctAnswer": "C",
    "explanation": "100% data security cannot be guaranteed in any system, including cloud computing.",
    "topic": "Cloud Computing Benefits",
    "difficulty": "medium"
  },
  {
    "id": 245,
    "question": "Multi-cloud refers to:",
    "options": [
      "Using multiple cloud service providers simultaneously",
      "A mix of public and private cloud",
      "A cloud deployment for educational institutions",
      "Using cloud services only for backup"
    ],
    "correctAnswer": "A",
    "explanation": "Multi-cloud refers to using multiple cloud service providers simultaneously.",
    "topic": "Cloud Deployment Models",
    "difficulty": "medium"
  },
  {
    "id": 246,
    "question": "Which AWS service automatically handles distributing incoming traffic to multiple EC2 instances?",
    "options": [
      "Amazon Route 53",
      "AWS Lambda",
      "Amazon CloudFront",
      "Elastic Load Balancing"
    ],
    "correctAnswer": "D",
    "explanation": "Elastic Load Balancing automatically distributes incoming traffic across multiple EC2 instances.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 247,
    "question": "Which cloud model allows organizations to use both on-premises infrastructure and public cloud resources in combination?",
    "options": [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud"
    ],
    "correctAnswer": "C",
    "explanation": "Hybrid cloud combines on-premises infrastructure with public cloud resources.",
    "topic": "Cloud Deployment Models",
    "difficulty": "easy"
  },
  {
    "id": 248,
    "question": "Amazon RDS supports which types of databases?",
    "options": [
      "Only NoSQL databases",
      "Relational databases like MySQL, PostgreSQL, etc.",
      "Key-value stores only",
      "Only Redshift"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon RDS supports various relational databases including MySQL, PostgreSQL, Oracle, and SQL Server.",
    "topic": "AWS Databases",
    "difficulty": "easy"
  },
  {
    "id": 249,
    "question": "Which AWS database is best suited for document or key-value data with low latency?",
    "options": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon DynamoDB is best suited for document or key-value data with low latency requirements.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 250,
    "question": "Which AWS database service is specifically built for petabyte-scale data warehousing?",
    "options": [
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB"
    ],
    "correctAnswer": "C",
    "explanation": "Amazon Redshift is specifically built for petabyte-scale data warehousing and analytics.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 251,
    "question": "In cloud computing, \"resource pooling\" refers to:",
    "options": [
      "Grouping similar jobs together",
      "Sharing computing resources among many users dynamically",
      "Saving backup copies of resources",
      "A service for gathering data"
    ],
    "correctAnswer": "B",
    "explanation": "Resource pooling refers to sharing computing resources among many users dynamically.",
    "topic": "Cloud Computing Characteristics",
    "difficulty": "medium"
  },
  {
    "id": 252,
    "question": "The primary benefit of auto-scaling EC2 instances is to:",
    "options": [
      "Reduce security vulnerabilities",
      "Adjust capacity based on demand",
      "Manage user permissions",
      "Secure network traffic"
    ],
    "correctAnswer": "B",
    "explanation": "Auto-scaling primarily adjusts capacity based on demand to optimize performance and costs.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 253,
    "question": "The cloud service model that provides hardware and software tools (e.g., IDE, libraries) for application development is:",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "DaaS (Container as a Service)"
    ],
    "correctAnswer": "B",
    "explanation": "PaaS provides hardware and software tools for application development including IDEs and libraries.",
    "topic": "Cloud Service Models",
    "difficulty": "medium"
  },
  {
    "id": 254,
    "question": "Which AWS concept is an example of SaaS?",
    "options": [
      "AWS WorkSpaces",
      "Amazon EC2",
      "Amazon S3",
      "Google Workspace (though not AWS)"
    ],
    "correctAnswer": "D",
    "explanation": "Google Workspace is an example of SaaS, though it's not an AWS service.",
    "topic": "Cloud Service Models",
    "difficulty": "medium"
  },
  {
    "id": 255,
    "question": "What does S3 stand for in AWS?",
    "options": [
      "Simple Storage Service",
      "Simple Search Service",
      "Scalable Server Service",
      "Secure Storage System"
    ],
    "correctAnswer": "A",
    "explanation": "S3 stands for Simple Storage Service in AWS.",
    "topic": "AWS Services",
    "difficulty": "easy"
  },
  {
    "id": 256,
    "question": "Which of these AWS services is used for object storage?",
    "options": [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "Amazon VPC"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon S3 is the AWS service used for object storage.",
    "topic": "AWS Storage",
    "difficulty": "easy"
  },
  {
    "id": 257,
    "question": "Which cloud deployment model would be most suitable for a university and other educational institutions sharing infrastructure?",
    "options": [
      "Public cloud",
      "Private cloud",
      "Community cloud",
      "Hybrid cloud"
    ],
    "correctAnswer": "C",
    "explanation": "Community cloud is most suitable for organizations with common concerns like educational institutions.",
    "topic": "Cloud Deployment Models",
    "difficulty": "medium"
  },
  {
    "id": 258,
    "question": "AWS Lambda is an example of which cloud computing concept?",
    "options": [
      "Function as a Service (FaaS)",
      "Container orchestration",
      "Serverless computing",
      "All of the above"
    ],
    "correctAnswer": "C",
    "explanation": "AWS Lambda is primarily an example of serverless computing, which includes FaaS concepts.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 259,
    "question": "Which of the following is true about Amazon EC2 Auto Scaling?",
    "options": [
      "It requires manual adjustment of instance count.",
      "It automatically adjusts the number of instances based on load.",
      "It only works with Amazon RDS.",
      "It is only used for networking."
    ],
    "correctAnswer": "B",
    "explanation": "Amazon EC2 Auto Scaling automatically adjusts the number of instances based on load and demand.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 260,
    "question": "Which AWS service provides a fully managed data warehouse solution?",
    "options": [
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon Athena"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Redshift provides a fully managed data warehouse solution.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 261,
    "question": "A bucket in Amazon S3 is:",
    "options": [
      "A virtual server",
      "A container for storing objects",
      "A type of database table",
      "A network resource"
    ],
    "correctAnswer": "B",
    "explanation": "A bucket in Amazon S3 is a container for storing objects (files and data).",
    "topic": "AWS Storage",
    "difficulty": "easy"
  },
  {
    "id": 262,
    "question": "In AWS, which component acts as a firewall to control inbound and outbound traffic to instances?",
    "options": [
      "AWS WAF",
      "Security group",
      "Internet gateway",
      "Network ACL"
    ],
    "correctAnswer": "B",
    "explanation": "Security groups act as virtual firewalls to control inbound and outbound traffic to EC2 instances.",
    "topic": "AWS Security",
    "difficulty": "medium"
  },
  {
    "id": 263,
    "question": "Which AWS offering is used to manage DNS records for domains?",
    "options": [
      "Amazon VPC",
      "Amazon Route 53",
      "AWS CloudFront",
      "AWS SQS"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Route 53 is AWS's DNS service for managing domain records.",
    "topic": "AWS Networking",
    "difficulty": "medium"
  },
  {
    "id": 264,
    "question": "Amazon Aurora is a type of:",
    "options": [
      "NoSQL database",
      "Relational database compatible with MySQL and PostgreSQL",
      "Object storage",
      "Analytics service"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Aurora is a relational database compatible with MySQL and PostgreSQL.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 265,
    "question": "The cloud characteristic that ensures resources are available even if one part fails is:",
    "options": [
      "Rapid elasticity",
      "Resilient computing",
      "Sustainability",
      "Measured service"
    ],
    "correctAnswer": "B",
    "explanation": "Resilient computing ensures resources remain available even if components fail.",
    "topic": "Cloud Computing Characteristics",
    "difficulty": "medium"
  },
  {
    "id": 266,
    "question": "Amazon Simple Notification Service (SNS) primarily deals with:",
    "options": [
      "Sending alerts and notifications",
      "Object storage",
      "Virtual machine management",
      "Relational databases"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon SNS is primarily used for sending alerts and notifications.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 267,
    "question": "Which one of these is not a core component of cloud computing architecture (front-end/back-end)?",
    "options": [
      "Client Infrastructure",
      "Cloud Applications",
      "Cloud Infrastructure",
      "Blockchain network"
    ],
    "correctAnswer": "D",
    "explanation": "Blockchain network is not a core component of traditional cloud computing architecture.",
    "topic": "Cloud Computing Architecture",
    "difficulty": "medium"
  },
  {
    "id": 268,
    "question": "Which AWS database service is most appropriate for transaction processing on relational data?",
    "options": [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon S3",
      "Amazon EMR"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon RDS is most appropriate for transaction processing on relational data.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 269,
    "question": "Cloud computing is often called a \"utility\" because:",
    "options": [
      "It is always free",
      "Users pay only for what they use, like electricity",
      "It cannot be measured",
      "It doesn't use Internet"
    ],
    "correctAnswer": "B",
    "explanation": "Cloud computing is called a utility because users pay only for what they consume, similar to electricity.",
    "topic": "Cloud Computing Fundamentals",
    "difficulty": "easy"
  },
  {
    "id": 270,
    "question": "Which of the following best describes a cloud bursting scenario?",
    "options": [
      "Running two clouds in parallel",
      "Using on-premises resources and bursting into the cloud during peak demand",
      "Data replication across multiple clouds",
      "Canceling cloud services abruptly"
    ],
    "correctAnswer": "B",
    "explanation": "Cloud bursting involves using on-premises resources and extending to cloud during peak demand.",
    "topic": "Cloud Computing Concepts",
    "difficulty": "medium"
  },
  {
    "id": 271,
    "question": "Who first proposed the idea that computing could be delivered as a utility service over a network?",
    "options": [
      "Tim Berners-Lee",
      "John McCarthy (1961)",
      "Vint Cerf",
      "Steve Jobs"
    ],
    "correctAnswer": "B",
    "explanation": "John McCarthy first proposed the idea of computing as a utility service over a network in 1961.",
    "topic": "Cloud Computing History",
    "difficulty": "hard"
  },
  {
    "id": 272,
    "question": "The term \"Software as a Service (SaaS)\" applies to which of the following?",
    "options": [
      "On-premises database software",
      "Web-based applications hosted in the cloud",
      "A virtual server instance",
      "A private network infrastructure"
    ],
    "correctAnswer": "B",
    "explanation": "SaaS applies to web-based applications hosted in the cloud and accessible over the internet.",
    "topic": "Cloud Service Models",
    "difficulty": "medium"
  },
  {
    "id": 273,
    "question": "What does the AWS EC2 instance type define?",
    "options": [
      "The software applications installed",
      "The hardware configuration (CPU, memory, etc.) for the instance",
      "The geographic region of deployment",
      "The network protocol used"
    ],
    "correctAnswer": "B",
    "explanation": "AWS EC2 instance type defines the hardware configuration including CPU, memory, storage, and network capacity.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 274,
    "question": "In AWS, which of these is an example of an Amazon EC2 instance type family?",
    "options": [
      "m5.large",
      "ebs-ssd.medium",
      "s3.object.t2",
      "rds.t3"
    ],
    "correctAnswer": "A",
    "explanation": "m5.large is an example of an Amazon EC2 instance type specifying the instance family and size.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 275,
    "question": "Which AWS service can automatically replace an unhealthy EC2 instance in a group?",
    "options": [
      "Amazon CloudWatch",
      "AWS Auto Scaling",
      "Amazon SNS",
      "AWS Config"
    ],
    "correctAnswer": "B",
    "explanation": "AWS Auto Scaling can automatically replace unhealthy EC2 instances in an Auto Scaling group.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 276,
    "question": "Which characteristic of cloud computing refers to the provider's ability to charge based on measured usage?",
    "options": [
      "Resilient computing",
      "Multi-tenancy",
      "Measured service",
      "Virtualization"
    ],
    "correctAnswer": "C",
    "explanation": "Measured service refers to the cloud provider's ability to charge based on measured resource usage.",
    "topic": "Cloud Computing Characteristics",
    "difficulty": "medium"
  },
  {
    "id": 277,
    "question": "What is a key feature of a hybrid cloud environment?",
    "options": [
      "Resources are owned by no one.",
      "Combines on-premises and public cloud infrastructure",
      "Uses multiple public clouds only.",
      "Only community-shared resources."
    ],
    "correctAnswer": "B",
    "explanation": "Hybrid cloud combines on-premises infrastructure with public cloud resources.",
    "topic": "Cloud Deployment Models",
    "difficulty": "medium"
  },
  {
    "id": 278,
    "question": "Which of the following is true about scalability in cloud computing?",
    "options": [
      "It allows resources to be scaled up or down quickly according to demand",
      "Resources always stay at peak capacity.",
      "Users must manually purchase hardware to scale.",
      "It only applies to storage capacity."
    ],
    "correctAnswer": "A",
    "explanation": "Scalability in cloud computing allows resources to be scaled up or down quickly based on demand.",
    "topic": "Cloud Computing Characteristics",
    "difficulty": "medium"
  },
  {
    "id": 279,
    "question": "Which AWS service provides block-level storage volumes for EC2 that persist independently of instance life?",
    "options": [
      "Amazon S3",
      "Amazon EBS",
      "Amazon Glacier",
      "Amazon DynamoDB"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon EBS provides block-level storage volumes that persist independently of EC2 instance lifecycle.",
    "topic": "AWS Storage",
    "difficulty": "medium"
  },
  {
    "id": 280,
    "question": "When using AWS, what is an Elastic Load Balancer (ELB) mainly used for?",
    "options": [
      "Encrypting data in transit",
      "Distributing network traffic across multiple instances",
      "Monitoring CPU usage",
      "Assigning static IPs"
    ],
    "correctAnswer": "B",
    "explanation": "Elastic Load Balancer is mainly used for distributing network traffic across multiple instances.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 281,
    "question": "What is one possible disadvantage of public cloud services?",
    "options": [
      "Reduced scalability",
      "Lack of custom security controls",
      "High initial investment",
      "Strong integration with legacy systems"
    ],
    "correctAnswer": "B",
    "explanation": "Public cloud services may have limitations in providing custom security controls compared to private clouds.",
    "topic": "Cloud Computing Challenges",
    "difficulty": "medium"
  },
  {
    "id": 282,
    "question": "In IaaS, who is responsible for managing the operating system?",
    "options": [
      "AWS (or cloud provider)",
      "The user (customer)",
      "It is not applicable",
      "Third-party consultants"
    ],
    "correctAnswer": "B",
    "explanation": "In IaaS, the user (customer) is responsible for managing the operating system and applications.",
    "topic": "Cloud Service Models",
    "difficulty": "medium"
  },
  {
    "id": 283,
    "question": "Which of the following is NOT a feature of AWS Auto Scaling?",
    "options": [
      "Scaling compute capacity in response to demand",
      "Replacing unhealthy instances",
      "Automating application code deployment",
      "Maintaining desired instance count during spikes"
    ],
    "correctAnswer": "C",
    "explanation": "AWS Auto Scaling does not automate application code deployment; it focuses on scaling infrastructure.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 284,
    "question": "Which is an example of a PaaS offering on AWS?",
    "options": [
      "Amazon RDS",
      "AWS Lambda",
      "AWS Elastic Beanstalk",
      "Amazon EC2"
    ],
    "correctAnswer": "C",
    "explanation": "AWS Elastic Beanstalk is a Platform as a Service (PaaS) offering for deploying applications.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 285,
    "question": "Which of these services is considered serverless on AWS?",
    "options": [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon S3",
      "Amazon Aurora"
    ],
    "correctAnswer": "B",
    "explanation": "AWS Lambda is considered a serverless service where you don't manage servers.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 286,
    "question": "The AWS shared responsibility model states that AWS manages:",
    "options": [
      "Data and applications",
      "Security of the cloud (hardware, OS patching, etc.)",
      "User access permissions",
      "Encryption keys for customer data"
    ],
    "correctAnswer": "B",
    "explanation": "AWS manages security of the cloud including hardware, infrastructure, and OS patching.",
    "topic": "AWS Security",
    "difficulty": "medium"
  },
  {
    "id": 287,
    "question": "Amazon S3 Standard-Infrequent Access (Standard-IA) is best used for:",
    "options": [
      "Frequently accessed data",
      "Infrequently accessed data with rapid access requirements",
      "Long-term archive only",
      "Running database instances"
    ],
    "correctAnswer": "B",
    "explanation": "S3 Standard-IA is designed for infrequently accessed data that still needs rapid access when required.",
    "topic": "AWS Storage",
    "difficulty": "medium"
  },
  {
    "id": 288,
    "question": "What does \"cloud bursting\" refer to?",
    "options": [
      "Sending data bursts through a VPN",
      "Dynamically moving workload from private cloud to public cloud during peak demand",
      "Data replication across multiple clouds",
      "Breaking a cloud into smaller regions"
    ],
    "correctAnswer": "B",
    "explanation": "Cloud bursting refers to dynamically extending workloads from private to public cloud during peak demand.",
    "topic": "Cloud Computing Concepts",
    "difficulty": "medium"
  },
  {
    "id": 289,
    "question": "What is the difference between IaaS, PaaS, and SaaS in terms of user control?",
    "options": [
      "SaaS gives the user full control over infrastructure.",
      "IaaS gives the user control over OS and applications, SaaS does not.",
      "PaaS requires the user to manage hardware.",
      "There is no difference."
    ],
    "correctAnswer": "B",
    "explanation": "IaaS gives users control over OS and applications, while SaaS provides complete applications without user control over infrastructure.",
    "topic": "Cloud Service Models",
    "difficulty": "medium"
  },
  {
    "id": 290,
    "question": "In cloud computing, what is \"elasticity\"?",
    "options": [
      "The ability to adapt and change configurations",
      "The ability to scale resources up and down automatically",
      "The capability to integrate with Elastic Search",
      "The cost of cloud services over time"
    ],
    "correctAnswer": "B",
    "explanation": "Elasticity in cloud computing refers to the ability to scale resources up and down automatically based on demand.",
    "topic": "Cloud Computing Characteristics",
    "difficulty": "medium"
  },
  {
    "id": 291,
    "question": "Which AWS service is used for object-level data archiving and retrieval?",
    "options": [
      "Amazon Redshift",
      "Amazon S3 Glacier",
      "Amazon EFS",
      "Amazon CloudFront"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon S3 Glacier is used for object-level data archiving and long-term storage.",
    "topic": "AWS Storage",
    "difficulty": "medium"
  },
  {
    "id": 292,
    "question": "Which of the following is NOT a common cloud service deployment model?",
    "options": [
      "Public cloud",
      "Private cloud",
      "Community cloud",
      "Personal cloud"
    ],
    "correctAnswer": "D",
    "explanation": "Personal cloud is not a standard cloud deployment model. The common models are public, private, community, and hybrid.",
    "topic": "Cloud Deployment Models",
    "difficulty": "medium"
  },
  {
    "id": 293,
    "question": "Which AWS service provides a managed NoSQL database with single-digit millisecond response times?",
    "options": [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon ElastiCache"
    ],
    "correctAnswer": "C",
    "explanation": "Amazon DynamoDB provides managed NoSQL database with single-digit millisecond response times.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 294,
    "question": "\"Infrastructure as Code\" (IaC) in cloud computing refers to:",
    "options": [
      "Writing code to manage application logic only",
      "Managing and provisioning infrastructure through machine-readable definition files",
      "Automated code compilation",
      "A deprecated cloud practice"
    ],
    "correctAnswer": "B",
    "explanation": "Infrastructure as Code refers to managing and provisioning infrastructure through machine-readable definition files.",
    "topic": "Cloud Computing Concepts",
    "difficulty": "medium"
  },
  {
    "id": 295,
    "question": "If an organization wants full administrative control over their cloud environment, which model is most appropriate?",
    "options": [
      "Public cloud",
      "Private cloud",
      "Community cloud",
      "Hybrid cloud"
    ],
    "correctAnswer": "B",
    "explanation": "Private cloud provides the most administrative control over the cloud environment.",
    "topic": "Cloud Deployment Models",
    "difficulty": "medium"
  },
  {
    "id": 296,
    "question": "Which AWS concept refers to billing customers based on resource consumption over time?",
    "options": [
      "Reserved Instances only",
      "Elastic pricing model",
      "Pay-as-you-go pricing",
      "Subscription model"
    ],
    "correctAnswer": "C",
    "explanation": "Pay-as-you-go pricing bills customers based on actual resource consumption over time.",
    "topic": "Cloud Computing Pricing",
    "difficulty": "medium"
  },
  {
    "id": 297,
    "question": "What is a \"bucket policy\" in Amazon S3?",
    "options": [
      "A rule for EC2 instances",
      "A set of permissions attached to an S3 bucket to manage access",
      "A retention policy for backups",
      "A network security feature"
    ],
    "correctAnswer": "B",
    "explanation": "A bucket policy is a set of permissions attached to an S3 bucket to manage access control.",
    "topic": "AWS Security",
    "difficulty": "medium"
  },
  {
    "id": 298,
    "question": "In AWS, where are AMIs specific to?",
    "options": [
      "Region, OS, architecture, and root device type",
      "Only the OS",
      "Only instance type",
      "Only AWS account ID"
    ],
    "correctAnswer": "A",
    "explanation": "AMIs are specific to the region, operating system, architecture, and root device type.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 299,
    "question": "Which best describes the term \"pay-per-use\" cloud model?",
    "options": [
      "Users pay a flat rate regardless of usage",
      "Users are billed only for the resources and time they consume",
      "Vendors pay users for usage",
      "Billing is not available in cloud models"
    ],
    "correctAnswer": "B",
    "explanation": "Pay-per-use model means users are billed only for the resources and time they actually consume.",
    "topic": "Cloud Computing Pricing",
    "difficulty": "easy"
  },
  {
    "id": 300,
    "question": "A company needs a scalable database that can automatically replicate across multiple Availability Zones for high availability. Which AWS service should they consider?",
    "options": [
      "Amazon RDS with Multi-AZ",
      "Amazon DynamoDB (global tables option)",
      "Amazon Redshift",
      "Amazon EC2 with local storage"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon RDS with Multi-AZ provides automatic replication across multiple Availability Zones for high availability.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 301,
    "question": "Which of the following statements about AWS Regions and Availability Zones (AZs) is true?",
    "options": [
      "AZs are completely isolated from each other with no private connectivity.",
      "AZs within a Region are connected by low-latency links.",
      "A Region always contains exactly two AZs.",
      "Data stored in one AZ is automatically accessible from any other Region."
    ],
    "correctAnswer": "B",
    "explanation": "AZs within a Region are connected by low-latency links and are designed to provide high availability and fault tolerance.",
    "topic": "AWS Infrastructure",
    "difficulty": "medium"
  },
  {
    "id": 302,
    "question": "What is Amazon CloudFront?",
    "options": [
      "A managed NoSQL database",
      "A global content delivery network (CDN) service",
      "An identity and access management service",
      "A monitoring dashboard service"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon CloudFront is a global content delivery network (CDN) service that delivers content with low latency.",
    "topic": "AWS Services",
    "difficulty": "easy"
  },
  {
    "id": 303,
    "question": "AWS IAM is used for:",
    "options": [
      "Managing compute resources",
      "Provisioning virtual networks",
      "Managing user access and permissions within AWS",
      "Data encryption on S3"
    ],
    "correctAnswer": "C",
    "explanation": "AWS IAM (Identity and Access Management) is used for managing user access and permissions within AWS.",
    "topic": "AWS Security",
    "difficulty": "easy"
  },
  {
    "id": 304,
    "question": "True or False: Amazon S3 automatically distributes its data across multiple Availability Zones.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "explanation": "True. Amazon S3 automatically replicates data across multiple Availability Zones for durability and availability.",
    "topic": "AWS Storage",
    "difficulty": "medium"
  },
  {
    "id": 305,
    "question": "Which AWS service is used for serverless event bus (routing events between sources and targets)?",
    "options": [
      "Amazon SNS",
      "AWS EventBridge",
      "Amazon CloudWatch",
      "AWS Batch"
    ],
    "correctAnswer": "B",
    "explanation": "AWS EventBridge is a serverless event bus service for routing events between sources and targets.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 306,
    "question": "Which cloud model type typically requires the least technical expertise from the consumer?",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "CaaS (Container as a Service)"
    ],
    "correctAnswer": "C",
    "explanation": "SaaS requires the least technical expertise as the provider manages everything except the application usage.",
    "topic": "Cloud Service Models",
    "difficulty": "easy"
  },
  {
    "id": 307,
    "question": "What is \"vertical scaling\" in cloud computing?",
    "options": [
      "Increasing the number of machines",
      "Increasing the power (CPU, RAM) of a single machine",
      "Scaling storage but not compute",
      "Using more cloud regions"
    ],
    "correctAnswer": "B",
    "explanation": "Vertical scaling means increasing the power (CPU, RAM) of a single machine.",
    "topic": "Cloud Computing Concepts",
    "difficulty": "easy"
  },
  {
    "id": 308,
    "question": "What is \"horizontal scaling\" in cloud computing?",
    "options": [
      "Increasing the power of a single machine",
      "Adding more machines (instances) to distribute load",
      "Scaling storage only",
      "Improving network bandwidth"
    ],
    "correctAnswer": "B",
    "explanation": "Horizontal scaling means adding more machines (instances) to distribute load across multiple systems.",
    "topic": "Cloud Computing Concepts",
    "difficulty": "easy"
  },
  {
    "id": 309,
    "question": "In AWS, which feature allows running containers without managing servers or clusters?",
    "options": [
      "Amazon ECS",
      "Amazon EKS",
      "AWS Fargate",
      "AWS Batch"
    ],
    "correctAnswer": "C",
    "explanation": "AWS Fargate is a serverless compute engine that allows running containers without managing servers or clusters.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 310,
    "question": "What is a VPC in AWS?",
    "options": [
      "Virtual Private Cloud, a logically isolated network for AWS resources",
      "Volume Provisioning Controller",
      "Video Processing Cloud",
      "Very Private Cluster"
    ],
    "correctAnswer": "A",
    "explanation": "VPC stands for Virtual Private Cloud, providing a logically isolated network section for AWS resources.",
    "topic": "AWS Networking",
    "difficulty": "easy"
  },
  {
    "id": 311,
    "question": "Which of the following best describes Amazon Aurora?",
    "options": [
      "A cold storage service",
      "A fully managed relational database compatible with MySQL/PostgreSQL",
      "A container orchestration service",
      "A machine learning service"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Aurora is a fully managed relational database compatible with MySQL and PostgreSQL.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 312,
    "question": "Amazon Redshift best describes:",
    "options": [
      "A distributed key-value store",
      "A fully managed data warehousing service",
      "A streaming data service",
      "A content delivery network"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Redshift is a fully managed data warehousing service for analytics workloads.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 313,
    "question": "AWS CloudFormation is used for:",
    "options": [
      "Monitoring resource usage",
      "Automatically provisioning and managing stacks of AWS resources via templates",
      "Encrypting data",
      "Subscribing to cloud resources"
    ],
    "correctAnswer": "B",
    "explanation": "AWS CloudFormation automatically provisions and manages AWS resources using infrastructure-as-code templates.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 314,
    "question": "Which of the following is an example of Platform as a Service (PaaS) in AWS?",
    "options": [
      "Amazon EC2",
      "Amazon S3",
      "AWS Elastic Beanstalk",
      "Amazon SQS"
    ],
    "correctAnswer": "C",
    "explanation": "AWS Elastic Beanstalk is a PaaS offering that handles deployment and management of applications.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 315,
    "question": "Which of these AWS services is used for caching in-memory data?",
    "options": [
      "Amazon ElastiCache",
      "Amazon QLDB",
      "Amazon Kinesis",
      "AWS Glue"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon ElastiCache is a managed in-memory caching service supporting Redis and Memcached.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 316,
    "question": "In AWS billing, what is a \"Reserved Instance\"?",
    "options": [
      "Instance reserved for system use",
      "A discounted pricing model for EC2 when committing to a fixed term",
      "A special type of AMI",
      "A spot instance"
    ],
    "correctAnswer": "B",
    "explanation": "Reserved Instances provide discounted pricing when you commit to using EC2 for a fixed term (1 or 3 years).",
    "topic": "AWS Pricing",
    "difficulty": "medium"
  },
  {
    "id": 317,
    "question": "AWS Identity and Access Management (IAM) primarily handles:",
    "options": [
      "Encrypting storage volumes",
      "Managing user identities, roles, and permissions",
      "Backing up databases",
      "Automating infrastructure"
    ],
    "correctAnswer": "B",
    "explanation": "IAM primarily manages user identities, roles, and permissions for AWS resources.",
    "topic": "AWS Security",
    "difficulty": "easy"
  },
  {
    "id": 318,
    "question": "Which of these is NOT a storage class in Amazon S3?",
    "options": [
      "Standard",
      "Infrequent Access (IA)",
      "Glacier",
      "Transactional (not a real S3 class)"
    ],
    "correctAnswer": "D",
    "explanation": "Transactional is not a real S3 storage class. Valid classes include Standard, IA, Glacier, etc.",
    "topic": "AWS Storage",
    "difficulty": "medium"
  },
  {
    "id": 319,
    "question": "Which AWS service is designed for orchestration of complex workflows and stateful serverless processes?",
    "options": [
      "AWS Step Functions",
      "AWS S3",
      "Amazon RDS",
      "AWS Direct Connect"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Step Functions orchestrates complex workflows and coordinates multiple AWS services in serverless applications.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 320,
    "question": "What is the main benefit of AWS multi-AZ deployments?",
    "options": [
      "Lower cost",
      "Higher performance",
      "Fault tolerance and high availability",
      "Increased storage capacity"
    ],
    "correctAnswer": "C",
    "explanation": "Multi-AZ deployments provide fault tolerance and high availability by replicating resources across multiple Availability Zones.",
    "topic": "AWS Architecture",
    "difficulty": "medium"
  },
  {
    "id": 321,
    "question": "In a cloud context, what is a \"tenant\"?",
    "options": [
      "A security mechanism",
      "A user or organization that shares resources with others on the cloud",
      "A type of storage unit",
      "An AWS service name"
    ],
    "correctAnswer": "B",
    "explanation": "A tenant is a user or organization that shares cloud resources with others in a multi-tenant environment.",
    "topic": "Cloud Computing Concepts",
    "difficulty": "medium"
  },
  {
    "id": 322,
    "question": "What does AWS CloudTrail provide?",
    "options": [
      "Data storage",
      "Log of API calls and user activity for an account",
      "Database performance insights",
      "DNS management"
    ],
    "correctAnswer": "B",
    "explanation": "AWS CloudTrail provides logging and auditing of API calls and user activity across your AWS account.",
    "topic": "AWS Security",
    "difficulty": "medium"
  },
  {
    "id": 323,
    "question": "Which is true about Amazon Elastic Container Service (ECS)?",
    "options": [
      "It is a container service that requires self-managed EC2 instances by default",
      "It is a managed Kubernetes service",
      "It cannot integrate with other AWS services",
      "It only runs on-premises"
    ],
    "correctAnswer": "A",
    "explanation": "ECS is a container orchestration service that can run on self-managed EC2 instances or serverless Fargate.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 324,
    "question": "The concept of \"loose coupling\" in cloud systems typically means:",
    "options": [
      "Components depend heavily on each other",
      "Components have minimal dependencies and can scale independently",
      "Everything is on a single server",
      "Using outdated APIs"
    ],
    "correctAnswer": "B",
    "explanation": "Loose coupling means components have minimal dependencies and can operate and scale independently.",
    "topic": "Cloud Architecture",
    "difficulty": "medium"
  },
  {
    "id": 325,
    "question": "Amazon SQS and Amazon SNS are used for:",
    "options": [
      "Relational database",
      "Message queuing and notifications",
      "Block storage",
      "Real-time streaming"
    ],
    "correctAnswer": "B",
    "explanation": "SQS provides message queuing and SNS provides notification services for decoupling applications.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 326,
    "question": "Which AWS storage option would you choose for a file system accessible by multiple EC2 instances?",
    "options": [
      "Amazon EBS",
      "Amazon EFS",
      "Amazon S3",
      "Amazon Glacier"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon EFS (Elastic File System) provides a shared file system accessible by multiple EC2 instances.",
    "topic": "AWS Storage",
    "difficulty": "medium"
  },
  {
    "id": 327,
    "question": "What AWS service would you use to set up a private connection between your data center and AWS?",
    "options": [
      "AWS VPN",
      "AWS Direct Connect",
      "Amazon Route 53",
      "Amazon VPC Peering"
    ],
    "correctAnswer": "B",
    "explanation": "AWS Direct Connect provides a dedicated private connection between your data center and AWS.",
    "topic": "AWS Networking",
    "difficulty": "medium"
  },
  {
    "id": 328,
    "question": "Which term describes the approach of running workloads in multiple different clouds (AWS, Azure, GCP) at the same time?",
    "options": [
      "Hybrid cloud",
      "Multi-cloud",
      "Edge computing",
      "Community cloud"
    ],
    "correctAnswer": "B",
    "explanation": "Multi-cloud refers to using multiple cloud providers simultaneously for different workloads or redundancy.",
    "topic": "Cloud Deployment Models",
    "difficulty": "medium"
  },
  {
    "id": 329,
    "question": "Which AWS service can store JSON, key-value, and document data natively?",
    "options": [
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Timestream"
    ],
    "correctAnswer": "C",
    "explanation": "Amazon DynamoDB is a NoSQL database that natively supports JSON, key-value, and document data models.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 330,
    "question": "Amazon Kinesis is primarily used for:",
    "options": [
      "Real-time streaming data processing",
      "Batch data warehousing",
      "Traditional web hosting",
      "Physical data transfer"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon Kinesis is primarily used for real-time streaming data ingestion and processing.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 331,
    "question": "AWS Step Functions are used to:",
    "options": [
      "Orchestrate serverless workflows and microservices",
      "Secure user credentials",
      "Accelerate graphics rendering",
      "Manage virtual servers"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Step Functions orchestrate serverless workflows and coordinate multiple AWS services and microservices.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 332,
    "question": "Which AWS feature allows fine-grained IAM permissions on AWS resources?",
    "options": [
      "Tags",
      "Roles and policies",
      "Security groups",
      "EC2 instance metadata"
    ],
    "correctAnswer": "B",
    "explanation": "IAM roles and policies provide fine-grained permissions control for AWS resources and users.",
    "topic": "AWS Security",
    "difficulty": "medium"
  },
  {
    "id": 333,
    "question": "Which AWS service provides a high-speed file storage service in the cloud for use with POSIX file system interfaces?",
    "options": [
      "Amazon EBS",
      "Amazon EFS",
      "Amazon S3",
      "Amazon Glacier"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon EFS provides high-speed file storage with POSIX file system interfaces for multiple EC2 instances.",
    "topic": "AWS Storage",
    "difficulty": "medium"
  },
  {
    "id": 334,
    "question": "True or False: In AWS, data stored in S3 is automatically replicated across multiple Availability Zones.",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "explanation": "True. Amazon S3 automatically replicates data across multiple Availability Zones for durability and availability.",
    "topic": "AWS Storage",
    "difficulty": "medium"
  },
  {
    "id": 335,
    "question": "AWS offers \"Reserved Instances\" primarily to:",
    "options": [
      "Reserve IP addresses",
      "Reduce costs for predictable usage of EC2",
      "Store long-term backups",
      "Launch instances faster"
    ],
    "correctAnswer": "B",
    "explanation": "Reserved Instances offer significant cost savings for predictable EC2 usage with term commitments.",
    "topic": "AWS Pricing",
    "difficulty": "medium"
  },
  {
    "id": 336,
    "question": "What does the Amazon RDS Multi-AZ feature provide?",
    "options": [
      "Encryption of data at rest",
      "Automatic replication of data to a standby in another Availability Zone for failover",
      "Read-only replicas in other Regions",
      "Performance optimization"
    ],
    "correctAnswer": "B",
    "explanation": "RDS Multi-AZ provides automatic replication to a standby instance in another AZ for high availability and failover.",
    "topic": "AWS Databases",
    "difficulty": "medium"
  },
  {
    "id": 337,
    "question": "Which AWS pricing option can give you the lowest cost for instance usage if you can be flexible with start/stop times?",
    "options": [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Savings Plans"
    ],
    "correctAnswer": "C",
    "explanation": "Spot Instances offer the lowest cost but can be interrupted when AWS needs the capacity back.",
    "topic": "AWS Pricing",
    "difficulty": "medium"
  },
  {
    "id": 338,
    "question": "Amazon Athena is used for:",
    "options": [
      "Running relational databases",
      "Querying data in S3 using SQL",
      "Monitoring AWS resources",
      "Hosting containerized applications"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Athena is a serverless service for querying data stored in S3 using standard SQL.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 339,
    "question": "Which AWS service is a managed search service (like Elasticsearch)?",
    "options": [
      "Amazon Kendra",
      "Amazon OpenSearch Service",
      "Amazon Neptune",
      "Amazon Redshift"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon OpenSearch Service (formerly Elasticsearch Service) is a managed search and analytics service.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 340,
    "question": "In AWS, a \"Load Balancer\" can distribute traffic across which of the following?",
    "options": [
      "EC2 instances only",
      "EC2 instances and Lambda functions",
      "RDS databases",
      "IAM users"
    ],
    "correctAnswer": "B",
    "explanation": "AWS Load Balancers can distribute traffic across EC2 instances, Lambda functions, and other targets.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 341,
    "question": "Which of the following is NOT a benefit of cloud storage?",
    "options": [
      "High scalability",
      "Accessibility from anywhere",
      "Automatic hardware maintenance for the user",
      "No need to manage hardware infrastructure"
    ],
    "correctAnswer": "C",
    "explanation": "While cloud providers maintain hardware, 'automatic hardware maintenance for the user' is misleading - users still need to manage their applications and data.",
    "topic": "Cloud Computing Benefits",
    "difficulty": "medium"
  },
  {
    "id": 342,
    "question": "What is Amazon SageMaker used for?",
    "options": [
      "Building and deploying machine learning models",
      "Database migration",
      "Video streaming",
      "IoT device management"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon SageMaker is a fully managed service for building, training, and deploying machine learning models.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 343,
    "question": "In AWS IAM, a \"role\" is used to:",
    "options": [
      "Assign permissions to AWS services or users",
      "Create a new AWS account",
      "Backup data",
      "Monitor performance"
    ],
    "correctAnswer": "A",
    "explanation": "IAM roles are used to assign permissions to AWS services, applications, or users temporarily.",
    "topic": "AWS Security",
    "difficulty": "medium"
  },
  {
    "id": 344,
    "question": "Which AWS tool helps visualize the architecture and cost estimate of AWS resources in a diagram?",
    "options": [
      "AWS X-Ray",
      "AWS Pricing Calculator",
      "AWS CloudFormation Designer",
      "AWS Simple Icons set"
    ],
    "correctAnswer": "C",
    "explanation": "AWS CloudFormation Designer helps visualize CloudFormation templates and architecture diagrams.",
    "topic": "AWS Tools",
    "difficulty": "medium"
  },
  {
    "id": 345,
    "question": "What does Amazon CloudWatch do?",
    "options": [
      "Provides monitoring and observability of AWS resources and applications",
      "Encrypts data at rest",
      "Manages DNS entries",
      "Distributes content globally"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon CloudWatch provides monitoring, logging, and observability for AWS resources and applications.",
    "topic": "AWS Services",
    "difficulty": "easy"
  },
  {
    "id": 346,
    "question": "Which AWS certification is intended for individuals in security roles?",
    "options": [
      "AWS Certified Solutions Architect – Associate",
      "AWS Certified Security – Specialty",
      "AWS Certified Developer – Associate",
      "AWS Certified SysOps Administrator – Associate"
    ],
    "correctAnswer": "B",
    "explanation": "AWS Certified Security – Specialty is specifically designed for individuals working in security roles.",
    "topic": "AWS Certifications",
    "difficulty": "easy"
  },
  {
    "id": 347,
    "question": "Which of the following is NOT a type of load balancer in AWS?",
    "options": [
      "Application Load Balancer",
      "Network Load Balancer",
      "Internet Load Balancer",
      "Classic Load Balancer"
    ],
    "correctAnswer": "C",
    "explanation": "Internet Load Balancer is not a real AWS load balancer type. AWS offers Application, Network, and Classic Load Balancers.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 348,
    "question": "Which of these AWS services would you use to automate text-to-speech and speech-to-text conversions?",
    "options": [
      "Amazon Polly",
      "Amazon Comprehend",
      "Amazon Transcribe",
      "Amazon Lex"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon Polly provides text-to-speech, while Amazon Transcribe provides speech-to-text services.",
    "topic": "AWS AI/ML Services",
    "difficulty": "medium"
  },
  {
    "id": 349,
    "question": "AWS Global Accelerator is a service that:",
    "options": [
      "Accelerates database queries",
      "Improves global application availability and performance using static IP addresses and the AWS global network",
      "Accelerates the launch of EC2 instances",
      "Speeds up AWS CLI commands"
    ],
    "correctAnswer": "B",
    "explanation": "AWS Global Accelerator improves application performance using anycast IP addresses and the AWS global network.",
    "topic": "AWS Services",
    "difficulty": "medium"
  },
  {
    "id": 350,
    "question": "What does VPC peering allow?",
    "options": [
      "Direct network connectivity between two VPCs in the same or different AWS accounts",
      "Peer-to-peer communication between two users",
      "Automatic scaling of VPC resources",
      "Managed database replication"
    ],
    "correctAnswer": "A",
    "explanation": "VPC peering enables direct network connectivity between two VPCs, allowing resources to communicate as if they're in the same network.",
    "topic": "AWS Networking",
    "difficulty": "medium"
  },
  {
    "id": 351,
    "question": "In the cloud data lifecycle, which phase addresses controlling where and for how long data is archived and retained?",
    "options": [
      "Generation of the information",
      "Storage of data",
      "Archival",
      "Destruction of data"
    ],
    "correctAnswer": "C",
    "explanation": "The archival phase of the cloud data lifecycle addresses controlling where and for how long data is archived and retained.",
    "topic": "Cloud Data Management",
    "difficulty": "hard"
  },
  {
    "id": 352,
    "question": "Which of the following AWS RDS features allows read-scaling for high-throughput applications?",
    "options": [
      "Multi-AZ deployments",
      "Read Replicas",
      "Standby instances",
      "Elastic cache integration"
    ],
    "correctAnswer": "B",
    "explanation": "RDS Read Replicas allow read-scaling by creating read-only copies of your database for high-throughput applications.",
    "topic": "AWS Databases",
    "difficulty": "hard"
  },
  {
    "id": 353,
    "question": "During which phase of the data lifecycle should the organization ensure proper encryption of data in transit over public networks?",
    "options": [
      "Generation of the information",
      "Transfer of the data",
      "Transformation of data",
      "Archival"
    ],
    "correctAnswer": "B",
    "explanation": "During the transfer phase, organizations must ensure proper encryption of data in transit over public networks.",
    "topic": "Cloud Data Security",
    "difficulty": "hard"
  },
  {
    "id": 354,
    "question": "Which AWS offering provides a fully managed, petabyte-scale data warehouse?",
    "options": [
      "Amazon RDS for Aurora",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Neptune"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Redshift provides a fully managed, petabyte-scale data warehouse service for analytics workloads.",
    "topic": "AWS Databases",
    "difficulty": "hard"
  },
  {
    "id": 355,
    "question": "What is a primary advantage of virtualization in cloud computing?",
    "options": [
      "It prevents multi-tenancy",
      "It abstracts hardware to allow multiple virtual machines on one physical server",
      "It only applies to storage",
      "It is unrelated to cloud computing"
    ],
    "correctAnswer": "B",
    "explanation": "Virtualization abstracts hardware resources, allowing multiple virtual machines to run on one physical server, enabling efficient resource utilization.",
    "topic": "Cloud Computing Concepts",
    "difficulty": "hard"
  },
  {
    "id": 356,
    "question": "A cloud application is designed so that failure of any single component does not cause system failure. This describes:",
    "options": [
      "Multitenancy",
      "Elasticity",
      "Loose coupling and resiliency",
      "On-demand service"
    ],
    "correctAnswer": "C",
    "explanation": "Loose coupling and resiliency ensure that failure of any single component does not cause overall system failure.",
    "topic": "Cloud Architecture",
    "difficulty": "hard"
  },
  {
    "id": 357,
    "question": "Amazon Redshift is built to handle:",
    "options": [
      "Online Transaction Processing (OLTP)",
      "Online Analytical Processing (OLAP)",
      "NoSQL document storage",
      "GPU-accelerated workloads"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Redshift is designed for OLAP (Online Analytical Processing) workloads and data warehousing.",
    "topic": "AWS Databases",
    "difficulty": "hard"
  },
  {
    "id": 358,
    "question": "What best describes the relationship between virtualization and cloud computing?",
    "options": [
      "Virtualization is a technology that cloud computing often relies on to provide resource pooling and isolation.",
      "Virtualization and cloud computing are unrelated.",
      "Cloud computing is a subset of virtualization.",
      "Virtualization is required for edge computing only."
    ],
    "correctAnswer": "A",
    "explanation": "Virtualization is a foundational technology that cloud computing relies on for resource pooling, isolation, and multi-tenancy.",
    "topic": "Cloud Computing Concepts",
    "difficulty": "hard"
  },
  {
    "id": 359,
    "question": "Which of the following AWS services can facilitate a hybrid cloud connection (private link) between on-premises network and AWS?",
    "options": [
      "AWS Direct Connect",
      "Amazon Aurora",
      "Amazon CloudWatch",
      "AWS Elastic Beanstalk"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Direct Connect provides a dedicated private connection between on-premises networks and AWS for hybrid cloud architectures.",
    "topic": "AWS Networking",
    "difficulty": "hard"
  },
  {
    "id": 360,
    "question": "What happens to data on an EC2 instance store volume if the instance is stopped?",
    "options": [
      "It is automatically backed up to S3.",
      "It is deleted/erased.",
      "It remains intact for 7 days.",
      "It is converted to an EBS snapshot."
    ],
    "correctAnswer": "B",
    "explanation": "Instance store volumes are ephemeral storage - data is lost when the instance is stopped or terminated.",
    "topic": "AWS Storage",
    "difficulty": "hard"
  },
  {
    "id": 361,
    "question": "Which AWS storage option is suitable for low-latency, frequent access file shares across multiple instances?",
    "options": [
      "Amazon EBS",
      "Amazon S3 Standard",
      "Amazon EFS",
      "Amazon Glacier"
    ],
    "correctAnswer": "C",
    "explanation": "Amazon EFS provides low-latency, shared file storage accessible across multiple EC2 instances simultaneously.",
    "topic": "AWS Storage",
    "difficulty": "hard"
  },
  {
    "id": 362,
    "question": "AWS CloudTrail helps with:",
    "options": [
      "Monitoring network traffic",
      "Logging and auditing API calls in your AWS account",
      "Encrypting data at rest",
      "Automatic scaling of EC2 instances"
    ],
    "correctAnswer": "B",
    "explanation": "AWS CloudTrail provides comprehensive logging and auditing of API calls and user activity across your AWS account.",
    "topic": "AWS Security",
    "difficulty": "hard"
  },
  {
    "id": 363,
    "question": "In the shared responsibility model, which of these is AWS NOT responsible for?",
    "options": [
      "Physical security of data centers",
      "Patching the hypervisor and host OS",
      "Configuring security groups",
      "Managing the virtualization layer"
    ],
    "correctAnswer": "C",
    "explanation": "Configuring security groups is a customer responsibility in the AWS shared responsibility model.",
    "topic": "AWS Security",
    "difficulty": "hard"
  },
  {
    "id": 364,
    "question": "If an application requires a relational database with cross-region replication and Aurora Serverless option, which AWS service is appropriate?",
    "options": [
      "Amazon RDS for MySQL",
      "Amazon DynamoDB",
      "Amazon Aurora Global Database",
      "Amazon Redshift"
    ],
    "correctAnswer": "C",
    "explanation": "Amazon Aurora Global Database provides cross-region replication with Aurora Serverless capabilities.",
    "topic": "AWS Databases",
    "difficulty": "hard"
  },
  {
    "id": 365,
    "question": "Which AWS service can be used to centrally manage billing and usage for multiple AWS accounts?",
    "options": [
      "AWS Organizations",
      "AWS IAM",
      "AWS CloudFormation",
      "AWS Trusted Advisor"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Organizations provides centralized management of billing, policies, and compliance across multiple AWS accounts.",
    "topic": "AWS Management",
    "difficulty": "hard"
  },
  {
    "id": 366,
    "question": "What is an AWS \"Spot Instance\"?",
    "options": [
      "An instance with no downtime guarantee",
      "A spare EC2 instance offered at a lower price that can be reclaimed by AWS when needed",
      "An instance that must run continuously",
      "A free tier instance type"
    ],
    "correctAnswer": "B",
    "explanation": "Spot Instances are spare EC2 capacity offered at reduced prices but can be interrupted when AWS needs the capacity.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 367,
    "question": "Amazon S3 versioning allows you to:",
    "options": [
      "Store multiple variants of an object in the same bucket",
      "Increase bucket storage automatically",
      "Encrypt objects at rest",
      "Restrict access to a bucket"
    ],
    "correctAnswer": "A",
    "explanation": "S3 versioning allows storing multiple variants of the same object in a bucket, enabling recovery from accidental deletions or modifications.",
    "topic": "AWS Storage",
    "difficulty": "hard"
  },
  {
    "id": 368,
    "question": "Which AWS construct provides a logically isolated section of the AWS Cloud?",
    "options": [
      "Amazon EC2",
      "Virtual Private Cloud (VPC)",
      "AWS IAM",
      "AWS Lambda"
    ],
    "correctAnswer": "B",
    "explanation": "VPC (Virtual Private Cloud) provides a logically isolated section of AWS where you can launch resources in a defined virtual network.",
    "topic": "AWS Networking",
    "difficulty": "hard"
  },
  {
    "id": 369,
    "question": "AWS Fargate is a service for:",
    "options": [
      "Running containers without managing servers",
      "Managing NoSQL databases",
      "Distributing content globally",
      "Large-scale analytics"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Fargate is a serverless compute engine for containers, allowing you to run containers without managing servers or clusters.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 370,
    "question": "A multi-tenant cloud environment means:",
    "options": [
      "A single customer uses all resources.",
      "Multiple customers share the same infrastructure securely.",
      "Resources are dedicated to one tenant per region.",
      "There are multiple physical tenants in the data center."
    ],
    "correctAnswer": "B",
    "explanation": "Multi-tenancy means multiple customers securely share the same physical infrastructure while maintaining logical separation.",
    "topic": "Cloud Computing Concepts",
    "difficulty": "hard"
  },
  {
    "id": 371,
    "question": "Which of the following is a key difference between horizontal and vertical scaling?",
    "options": [
      "Horizontal adds more servers, vertical adds more power to a server",
      "Horizontal is AWS only, vertical is Azure only",
      "They are the same",
      "Horizontal can only scale storage"
    ],
    "correctAnswer": "A",
    "explanation": "Horizontal scaling adds more servers/instances, while vertical scaling increases the power (CPU/RAM) of existing servers.",
    "topic": "Scalability",
    "difficulty": "hard"
  },
  {
    "id": 372,
    "question": "AWS Security Token Service (STS) is used for:",
    "options": [
      "Issuing temporary security credentials for AWS services",
      "Storing encryption keys",
      "Managing IAM roles",
      "Logging user activity"
    ],
    "correctAnswer": "A",
    "explanation": "AWS STS provides temporary, limited-privilege credentials for accessing AWS resources securely.",
    "topic": "AWS Security",
    "difficulty": "hard"
  },
  {
    "id": 373,
    "question": "Amazon Simple Queue Service (SQS) is a:",
    "options": [
      "Push notification service",
      "Message queuing service that decouples components",
      "Database migration service",
      "File storage service"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon SQS is a message queuing service that enables decoupling of application components through asynchronous communication.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 374,
    "question": "Which AWS storage class is lowest-cost for long-term archival (with retrieval time in hours)?",
    "options": [
      "S3 Standard",
      "S3 Glacier Deep Archive",
      "S3 One Zone-IA",
      "S3 Intelligent-Tiering"
    ],
    "correctAnswer": "B",
    "explanation": "S3 Glacier Deep Archive offers the lowest cost for long-term archival with retrieval times of 12+ hours.",
    "topic": "AWS Storage",
    "difficulty": "hard"
  },
  {
    "id": 375,
    "question": "AWS Kinesis Data Streams is designed for:",
    "options": [
      "Real-time streaming data ingestion",
      "Static website hosting",
      "Traditional backup storage",
      "Container orchestration"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Kinesis Data Streams is designed for real-time ingestion and processing of streaming data at scale.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 376,
    "question": "Amazon EMR is typically used for:",
    "options": [
      "Running Hadoop/Spark big data processing on AWS",
      "Relational databases",
      "Web hosting",
      "Video streaming"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon EMR (Elastic MapReduce) is used for running big data frameworks like Hadoop and Spark on AWS.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 377,
    "question": "Amazon Aurora is compatible with which database engines?",
    "options": [
      "MySQL and PostgreSQL",
      "Oracle and DB2",
      "SQL Server and Sybase",
      "MongoDB and Cassandra"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon Aurora is compatible with MySQL and PostgreSQL database engines with enhanced performance and availability.",
    "topic": "AWS Databases",
    "difficulty": "hard"
  },
  {
    "id": 378,
    "question": "What AWS feature allows time-based or event-based automation of actions (like shutting down EC2 at night)?",
    "options": [
      "AWS CloudWatch Events (EventBridge)",
      "AWS Auto Scaling",
      "AWS Config",
      "AWS CloudTrail"
    ],
    "correctAnswer": "A",
    "explanation": "AWS CloudWatch Events (now EventBridge) enables time-based or event-based automation of AWS resources.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 379,
    "question": "AWS Config is used for:",
    "options": [
      "Continuous monitoring of resource configuration changes for compliance",
      "Configuring network ACLs",
      "Managing container clusters",
      "Streaming analytics"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Config continuously monitors and records AWS resource configurations and evaluates them against compliance rules.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 380,
    "question": "A \"resource policy\" in AWS is:",
    "options": [
      "A policy that you attach to an AWS resource to control access",
      "A health check",
      "A type of EC2 instance",
      "An encryption key"
    ],
    "correctAnswer": "A",
    "explanation": "A resource policy is attached directly to AWS resources (like S3 buckets) to define who can access the resource and how.",
    "topic": "AWS Security",
    "difficulty": "hard"
  },
  {
    "id": 381,
    "question": "AWS Billing alerts are set up using:",
    "options": [
      "Amazon SNS and CloudWatch",
      "Amazon RDS",
      "AWS Lambda",
      "AWS IAM"
    ],
    "correctAnswer": "A",
    "explanation": "AWS billing alerts are configured using CloudWatch billing metrics and SNS notifications to monitor costs.",
    "topic": "AWS Billing",
    "difficulty": "hard"
  },
  {
    "id": 382,
    "question": "AWS SSM (Systems Manager) is often used for:",
    "options": [
      "Automated patching and configuration of EC2 instances",
      "High-performance computing",
      "Game server hosting",
      "Content delivery"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Systems Manager provides automated patching, configuration management, and operational tasks for EC2 instances.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 383,
    "question": "If you require an AWS service for sending SMS or email messages to multiple subscribers, you should use:",
    "options": [
      "Amazon S3",
      "Amazon SNS",
      "Amazon SES",
      "Amazon SWF"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon SNS (Simple Notification Service) is designed for sending messages to multiple subscribers via SMS, email, or other endpoints.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 384,
    "question": "Amazon CloudWatch Logs is used to:",
    "options": [
      "Stream and store log files from AWS resources",
      "Improve network speed",
      "Deploy cloud infrastructure",
      "Analyze large datasets"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon CloudWatch Logs collects, monitors, and stores log files from AWS resources and applications.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 385,
    "question": "AWS Service that provides a managed Git-compatible repository is:",
    "options": [
      "AWS CodeCommit",
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodePipeline"
    ],
    "correctAnswer": "A",
    "explanation": "AWS CodeCommit is a fully managed Git-compatible source control service for hosting private repositories.",
    "topic": "AWS Developer Tools",
    "difficulty": "hard"
  },
  {
    "id": 386,
    "question": "Which AWS IoT service provides message brokering between devices and AWS?",
    "options": [
      "AWS IoT Core",
      "Amazon MQ",
      "AWS Greengrass",
      "AWS IoT Analytics"
    ],
    "correctAnswer": "A",
    "explanation": "AWS IoT Core provides secure, bi-directional communication between IoT devices and AWS services.",
    "topic": "AWS IoT Services",
    "difficulty": "hard"
  },
  {
    "id": 387,
    "question": "What is the AWS Well-Architected Framework used for?",
    "options": [
      "Guidelines to build secure, high-performing, resilient and efficient infrastructure in the cloud",
      "Designing on-premise data centers",
      "Visualizing AWS costs",
      "Automating deployments"
    ],
    "correctAnswer": "A",
    "explanation": "The AWS Well-Architected Framework provides best practices for building secure, high-performing, resilient, and efficient cloud infrastructure.",
    "topic": "AWS Best Practices",
    "difficulty": "hard"
  },
  {
    "id": 388,
    "question": "AWS Personal Health Dashboard provides:",
    "options": [
      "Personalized and timely information about AWS service events that may affect you",
      "Health monitoring for EC2 instances",
      "Medical records storage",
      "Health check for your code"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Personal Health Dashboard provides personalized information about AWS service events and planned maintenance affecting your resources.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 389,
    "question": "Which of the following is a multi-region, multi-master database service?",
    "options": [
      "Amazon RDS",
      "Amazon Aurora Global Database",
      "Amazon DynamoDB global tables",
      "AWS Database Migration Service"
    ],
    "correctAnswer": "C",
    "explanation": "Amazon DynamoDB global tables provide multi-region, multi-master replication with automatic failover capabilities.",
    "topic": "AWS Databases",
    "difficulty": "hard"
  },
  {
    "id": 390,
    "question": "AWS CloudTrail Insights are used for:",
    "options": [
      "Automatically detecting unusual API activity in your AWS account",
      "Predictive scaling for EC2",
      "Database replication",
      "Real-time analytics"
    ],
    "correctAnswer": "A",
    "explanation": "AWS CloudTrail Insights automatically detects unusual API activity patterns in your AWS account for security analysis.",
    "topic": "AWS Security",
    "difficulty": "hard"
  },
  {
    "id": 391,
    "question": "The AWS Nitro System is related to:",
    "options": [
      "Next-generation infrastructure for EC2 instances (security and performance)",
      "Improved networking for RDS",
      "Data transfer acceleration",
      "Machine learning optimization"
    ],
    "correctAnswer": "A",
    "explanation": "The AWS Nitro System is next-generation infrastructure providing enhanced security and performance for EC2 instances.",
    "topic": "AWS Infrastructure",
    "difficulty": "hard"
  },
  {
    "id": 392,
    "question": "AWS Trusted Advisor provides:",
    "options": [
      "Recommendations on cost optimization, security, fault tolerance and performance",
      "Automated backups",
      "Identity and access management",
      "Content distribution"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Trusted Advisor provides real-time recommendations to optimize AWS infrastructure for cost, security, performance, and fault tolerance.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 393,
    "question": "Which AWS database service uses a node-based data model with edges and vertices?",
    "options": [
      "Amazon Neptune",
      "Amazon ElastiCache",
      "Amazon Aurora",
      "Amazon RDS"
    ],
    "correctAnswer": "A",
    "explanation": "Amazon Neptune is a graph database service that uses nodes (vertices) and relationships (edges) to store and query connected data.",
    "topic": "AWS Databases",
    "difficulty": "hard"
  },
  {
    "id": 394,
    "question": "AWS Lambda functions can be triggered by:",
    "options": [
      "Amazon S3 events",
      "API Gateway calls",
      "DynamoDB streams",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "AWS Lambda functions can be triggered by various AWS services including S3 events, API Gateway calls, DynamoDB streams, and many others.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 395,
    "question": "AWS Cost Explorer helps you:",
    "options": [
      "Visualize and manage your AWS costs and usage over time",
      "Encrypt S3 buckets",
      "Schedule EC2 instances",
      "Create IAM policies"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Cost Explorer provides visualization and analysis tools to understand and manage your AWS costs and usage patterns over time.",
    "topic": "AWS Billing",
    "difficulty": "hard"
  },
  {
    "id": 396,
    "question": "AWS Auto Scaling groups can scale based on:",
    "options": [
      "CPU utilization",
      "Network traffic",
      "Custom metrics (via CloudWatch)",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "AWS Auto Scaling can scale based on various metrics including CPU utilization, network traffic, custom CloudWatch metrics, and more.",
    "topic": "AWS Services",
    "difficulty": "hard"
  },
  {
    "id": 397,
    "question": "VPC peering cannot be used to:",
    "options": [
      "Connect VPCs within a single AWS region",
      "Connect VPCs across different AWS accounts",
      "Connect on-premises network to AWS directly",
      "Route traffic privately between VPCs"
    ],
    "correctAnswer": "C",
    "explanation": "VPC peering connects VPCs to each other but cannot directly connect on-premises networks to AWS - that requires VPN or Direct Connect.",
    "topic": "AWS Networking",
    "difficulty": "hard"
  },
  {
    "id": 398,
    "question": "AWS Secrets Manager is designed to:",
    "options": [
      "Store and rotate database credentials, API keys, and other secrets",
      "Backup secrets in S3",
      "Manage encryption keys",
      "Publish secrets to the public"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Secrets Manager helps store, retrieve, and rotate database credentials, API keys, and other secrets securely.",
    "topic": "AWS Security",
    "difficulty": "hard"
  },
  {
    "id": 399,
    "question": "Which AWS service can deliver analytics on real-time streaming video feeds?",
    "options": [
      "Amazon Rekognition",
      "Amazon Kinesis Video Streams",
      "Amazon Transcribe",
      "Amazon Bedrock"
    ],
    "correctAnswer": "B",
    "explanation": "Amazon Kinesis Video Streams enables real-time processing and analytics of streaming video data.",
    "topic": "AWS Media Services",
    "difficulty": "hard"
  },
  {
    "id": 400,
    "question": "AWS Elemental MediaConvert is a service for:",
    "options": [
      "Converting live video streams to multiple formats on the cloud",
      "Database schema conversions",
      "Converting objects to JSON",
      "Encrypting storage volumes"
    ],
    "correctAnswer": "A",
    "explanation": "AWS Elemental MediaConvert is a file-based video transcoding service for converting video content to multiple formats.",
    "topic": "AWS Media Services",
    "difficulty": "hard"
  }
]