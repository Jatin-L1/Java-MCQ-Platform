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
    "question": "Which property of a transaction ensures that either all operations are completed or none are?",
    "options": [
      "Isolation",
      "Consistency",
      "Atomicity",
      "Durability"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 2,
    "question": "Which ACID property ensures data remains valid before and after a transaction?",
    "options": [
      "Isolation",
      "Atomicity",
      "Consistency",
      "Durability"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 3,
    "question": "A banking application transfers money from Account A to B. If the system crashes after deducting from A but before adding to B, which property is violated?",
    "options": [
      "Scalability",
      "Atomicity",
      "Durability",
      "Isolation"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 4,
    "question": "Which ACID property ensures committed data survives system failure?",
    "options": [
      "Durability",
      "Isolation",
      "Consistency",
      "Atomicity"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 5,
    "question": "Which operation marks successful completion of a transaction?",
    "options": [
      "Commit",
      "Abort",
      "Rollback",
      "Lock"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 6,
    "question": "What happens during rollback?",
    "options": [
      "Changes become permanent",
      "Replication starts",
      "Changes are undone",
      "Database is locked"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 7,
    "question": "Which of the following is NOT an ACID property?",
    "options": [
      "Distribution",
      "Consistency",
      "Atomicity",
      "Isolation"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 8,
    "question": "Two transactions execute simultaneously without affecting each other. Which property is maintained?",
    "options": [
      "Atomicity",
      "Isolation",
      "Durability",
      "Availability"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 9,
    "question": "In DBMS, a transaction is:",
    "options": [
      "A network request",
      "A cache operation",
      "A hardware process",
      "A logical unit of work"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 10,
    "question": "Which statement about durability is correct?",
    "options": [
      "Committed data persists permanently",
      "Data can be lost after commit",
      "Transactions execute serially",
      "Transactions never fail"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 11,
    "question": "A transaction reads uncommitted data from another transaction. This problem is called:",
    "options": [
      "Lost Update",
      "Starvation",
      "Dirty Read",
      "Deadlock"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 12,
    "question": "Which isolation level allows dirty reads?",
    "options": [
      "Serializable",
      "Snapshot Isolation",
      "Repeatable Read",
      "Read Uncommitted"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 13,
    "question": "Which schedule executes one transaction completely before another?",
    "options": [
      "Serializable Schedule",
      "Concurrent Schedule",
      "Cascading Schedule",
      "Distributed Schedule"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 14,
    "question": "A transaction that cannot proceed because another transaction holds a resource is experiencing:",
    "options": [
      "Recovery",
      "Commit",
      "Blocking",
      "Replication"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 15,
    "question": "Which command permanently saves changes?",
    "options": [
      "Rollback",
      "Abort",
      "Recover",
      "Commit"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 16,
    "question": "Two operations conflict if they:",
    "options": [
      "Belong to same transaction",
      "Are committed together",
      "Access same data item and at least one is write",
      "Are read operations only"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 17,
    "question": "Which graph is used to test conflict serializability?",
    "options": [
      "Flow Graph",
      "State Diagram",
      "Precedence Graph",
      "Dependency Graph"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 18,
    "question": "A schedule is conflict serializable if the precedence graph is:",
    "options": [
      "Weighted",
      "Acyclic",
      "Cyclic",
      "Empty"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 19,
    "question": "Which schedule may require cascading rollbacks?",
    "options": [
      "Strict Schedule",
      "Non-recoverable Schedule",
      "Recoverable Schedule",
      "Cascadeless Schedule"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 20,
    "question": "In a recoverable schedule:",
    "options": [
      "No locks are used",
      "Transactions never rollback",
      "Dependent transaction commits after source transaction",
      "Transaction commits before dependent transaction"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 21,
    "question": "Which schedule prevents dirty reads?",
    "options": [
      "Basic Schedule",
      "Strict Schedule",
      "Non-recoverable Schedule",
      "Concurrent Schedule"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 22,
    "question": "A cycle in precedence graph indicates:",
    "options": [
      "Distributed execution",
      "Deadlock recovery",
      "Conflict serializable schedule",
      "Non-serializable schedule"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 23,
    "question": "Which schedule is safest?",
    "options": [
      "Concurrent",
      "Recoverable",
      "Cascading",
      "Strict"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 24,
    "question": "What is a dirty write?",
    "options": [
      "Writing logs",
      "Writing over uncommitted data",
      "Reading replicated data",
      "Reading committed data"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 25,
    "question": "Which of these ensures no cascading rollback?",
    "options": [
      "Concurrent Schedule",
      "Recoverable Schedule",
      "Round Robin",
      "Cascadeless Schedule"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 26,
    "question": "If T2 reads data written by T1 before T1 commits, then T2 depends on:",
    "options": [
      "Scheduler",
      "Lock Manager",
      "T1",
      "T3"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 27,
    "question": "A serial schedule means:",
    "options": [
      "Multiple writes occur together",
      "Transactions use distributed nodes",
      "Transactions overlap",
      "Transactions execute one after another"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 28,
    "question": "Which technique helps determine serializability?",
    "options": [
      "Wait-for Graph",
      "Hashing",
      "Token Bucket",
      "Precedence Graph"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 29,
    "question": "Which schedule allows maximum concurrency with safety?",
    "options": [
      "Serializable Schedule",
      "Non-recoverable Schedule",
      "Random Schedule",
      "Dirty Schedule"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 30,
    "question": "If transaction T1 aborts and T2 has read its uncommitted data, T2 must also abort. This is:",
    "options": [
      "Serialization",
      "Cascading Rollback",
      "Replication",
      "Checkpointing"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 31,
    "question": "Which protocol uses locks to maintain concurrency?",
    "options": [
      "FTP",
      "TCP",
      "HTTP",
      "Two-Phase Locking"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 32,
    "question": "In Two-Phase Locking, growing phase means:",
    "options": [
      "Acquiring locks",
      "Replicating data",
      "Aborting transaction",
      "Releasing locks"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 33,
    "question": "Which problem occurs when two transactions wait indefinitely for each other?",
    "options": [
      "Deadlock",
      "Rollback",
      "Dirty Read",
      "Starvation"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 34,
    "question": "Shared lock allows:",
    "options": [
      "Multiple writes",
      "No reads",
      "Multiple reads",
      "One write only"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 35,
    "question": "Exclusive lock allows:",
    "options": [
      "Shared reads",
      "Read only",
      "Multiple writes",
      "Single write access"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 36,
    "question": "Timestamp ordering protocol uses:",
    "options": [
      "Replicas",
      "Queues",
      "Lock tables",
      "Timestamps"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 37,
    "question": "Which concurrency control avoids locks completely?",
    "options": [
      "Shared Locking",
      "2PL",
      "Timestamp Ordering",
      "Mutex"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 38,
    "question": "Optimistic concurrency control assumes:",
    "options": [
      "High conflicts",
      "Low conflicts",
      "Only reads",
      "No transactions"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 39,
    "question": "Which issue can occur in lock-based systems?",
    "options": [
      "Data Mining",
      "Deadlock",
      "Serialization Failure",
      "Replication Lag"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 40,
    "question": "Which lock type is needed before modifying data?",
    "options": [
      "Shared Lock",
      "Exclusive Lock",
      "Intent Lock",
      "Read Lock"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 41,
    "question": "Starvation means:",
    "options": [
      "Log failure",
      "Transaction waits forever",
      "Replication failure",
      "System crash"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 42,
    "question": "Which protocol guarantees conflict serializability?",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "2PL"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 43,
    "question": "Which method validates transaction before commit?",
    "options": [
      "WAL",
      "Validation-based protocol",
      "Shared Lock",
      "Timestamping"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 44,
    "question": "Which lock permits concurrent readers but blocks writers?",
    "options": [
      "Exclusive Lock",
      "Shared Lock",
      "Intent Lock",
      "Binary Lock"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 45,
    "question": "Which technique is mostly used in modern databases?",
    "options": [
      "Single-user execution",
      "Lock-based concurrency control",
      "No isolation",
      "Manual scheduling"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 46,
    "question": "Which mechanism is used for recovery after crash?",
    "options": [
      "Sharding",
      "Logs",
      "Cache",
      "API Gateway"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 47,
    "question": "Write-Ahead Logging means:",
    "options": [
      "Log written before actual data",
      "Data written before log",
      "Transactions are delayed",
      "Logs stored in cache"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 48,
    "question": "A checkpoint helps in:",
    "options": [
      "Replication",
      "Slower commits",
      "Compression",
      "Faster recovery"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 49,
    "question": "Which attack steals sensitive user information?",
    "options": [
      "Phishing",
      "Replication",
      "Sharding",
      "Logging"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 50,
    "question": "Encryption converts plaintext into:",
    "options": [
      "Metadata",
      "Logs",
      "Ciphertext",
      "Cache"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 51,
    "question": "Which security principle gives users only necessary permissions?",
    "options": [
      "Least Privilege",
      "Scalability",
      "Partitioning",
      "Serialization"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 52,
    "question": "Which backup contains all data every time?",
    "options": [
      "Snapshot",
      "Differential Backup",
      "Full Backup",
      "Incremental Backup"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 53,
    "question": "SSL/TLS is mainly used for:",
    "options": [
      "Compression",
      "Secure communication",
      "Sharding",
      "Replication"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 54,
    "question": "Which authentication method uses OTPs and passwords together?",
    "options": [
      "Anonymous login",
      "Single-factor authentication",
      "Multi-factor authentication",
      "Basic authentication"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 55,
    "question": "Which attack overloads a server with requests?",
    "options": [
      "SQL Injection",
      "DDoS",
      "Phishing",
      "XSS"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 56,
    "question": "SQL Injection targets:",
    "options": [
      "APIs",
      "File Systems",
      "Databases",
      "Routers"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 57,
    "question": "Which mechanism restores committed transactions after crash?",
    "options": [
      "Undo",
      "Redo",
      "Locking",
      "Serialization"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 58,
    "question": "Which mechanism removes incomplete transaction effects?",
    "options": [
      "Undo",
      "Partitioning",
      "Replication",
      "Redo"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 59,
    "question": "Which type of encryption uses same key for encryption and decryption?",
    "options": [
      "Asymmetric Encryption",
      "Digital Signature",
      "Symmetric Encryption",
      "Hashing"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 60,
    "question": "Hashing is mainly used for:",
    "options": [
      "Compression",
      "Replication",
      "Password storage",
      "Recovery"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 61,
    "question": "Google Spanner is known for:",
    "options": [
      "No transactions",
      "No replication",
      "Global consistency",
      "Single server architecture"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 62,
    "question": "Cassandra follows which architecture?",
    "options": [
      "Centralized",
      "Sequential",
      "Master-slave",
      "Peer-to-peer"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 63,
    "question": "DynamoDB is developed by:",
    "options": [
      "Amazon",
      "IBM",
      "Google",
      "Microsoft"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 64,
    "question": "Data replication improves:",
    "options": [
      "Availability",
      "Deadlocks",
      "Security only",
      "Complexity only"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 65,
    "question": "Horizontal partitioning is also called:",
    "options": [
      "Sharding",
      "Logging",
      "Encryption",
      "Replication"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 66,
    "question": "Sharding mainly improves:",
    "options": [
      "Encryption",
      "Scalability",
      "Logging",
      "Deadlock"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 67,
    "question": "Which CAP property sacrifices strict consistency for higher availability?",
    "options": [
      "OLTP Systems",
      "CP Systems",
      "AP Systems",
      "ACID Systems"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 68,
    "question": "Replication where all replicas update immediately is:",
    "options": [
      "Synchronous Replication",
      "Static Replication",
      "Lazy Replication",
      "Asynchronous Replication"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 69,
    "question": "Which database is famous for eventual consistency?",
    "options": [
      "PostgreSQL",
      "SQLite",
      "Oracle",
      "Cassandra"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 70,
    "question": "Which technique distributes load across multiple database servers?",
    "options": [
      "Undo",
      "Sharding",
      "Logging",
      "Checkpointing"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 71,
    "question": "Replicas that only serve read requests help improve:",
    "options": [
      "Serialization",
      "Read Scalability",
      "Deadlocks",
      "Write Latency"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 72,
    "question": "Which system is globally distributed with strong consistency?",
    "options": [
      "Spanner",
      "Redis",
      "DynamoDB",
      "Cassandra"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 73,
    "question": "Eventual consistency means:",
    "options": [
      "No replication exists",
      "Data is always immediately same",
      "Replicas become consistent over time",
      "Transactions never fail"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 74,
    "question": "Which partitioning strategy distributes users by region?",
    "options": [
      "Hash Partitioning",
      "Vertical Partitioning",
      "Geographic Sharding",
      "Range Partitioning"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 75,
    "question": "Which database is highly suitable for write-heavy workloads?",
    "options": [
      "Cassandra",
      "SQLite",
      "MS Access",
      "Excel"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 76,
    "question": "Two-Phase Commit protocol is used in:",
    "options": [
      "Monitoring",
      "Distributed Transactions",
      "Logging",
      "Compression"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 77,
    "question": "HDFS stands for:",
    "options": [
      "Hardware Data File System",
      "High Data File System",
      "Hadoop Distributed File System",
      "Hybrid Distributed File System"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 78,
    "question": "Google File System inspired:",
    "options": [
      "Oracle",
      "HDFS",
      "Cassandra",
      "Redis"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 79,
    "question": "Distributed cache reduces:",
    "options": [
      "Security",
      "Logging",
      "Availability",
      "Response Time"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 80,
    "question": "Redis is commonly used as:",
    "options": [
      "Distributed Cache",
      "Operating System",
      "File System",
      "Browser"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 81,
    "question": "Which system stores large files across multiple machines?",
    "options": [
      "Distributed File System",
      "API Gateway",
      "Firewall",
      "DNS"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 82,
    "question": "Which protocol coordinates distributed commit?",
    "options": [
      "HTTP",
      "FTP",
      "TCP",
      "Two-Phase Commit"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 83,
    "question": "Which security technique protects data in transit?",
    "options": [
      "Sharding",
      "TLS",
      "Replication",
      "Caching"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 84,
    "question": "Distributed cache improves:",
    "options": [
      "Read performance",
      "Deadlocks",
      "Serialization failures",
      "Latency"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 85,
    "question": "NameNode in HDFS stores:",
    "options": [
      "APIs",
      "Actual data blocks",
      "Logs only",
      "Metadata"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 86,
    "question": "DataNode in HDFS stores:",
    "options": [
      "Logs",
      "Data blocks",
      "APIs",
      "Metadata"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 87,
    "question": "Which cache eviction policy removes least recently used data?",
    "options": [
      "Random",
      "Round Robin",
      "LRU",
      "FIFO"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 88,
    "question": "Which distributed transaction protocol can block if coordinator fails?",
    "options": [
      "Raft",
      "2PC",
      "Paxos",
      "TCP"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 89,
    "question": "RabbitMQ is an example of:",
    "options": [
      "File System",
      "Database",
      "Distributed Cache",
      "Message Queue"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 90,
    "question": "Kafka is mainly used for:",
    "options": [
      "Recovery",
      "File Storage",
      "Event Streaming",
      "Encryption"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 91,
    "question": "Pub-Sub model means:",
    "options": [
      "Publishers send events to subscribers",
      "No consumers exist",
      "Direct communication only",
      "One server handles everything"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 92,
    "question": "Which technology packages applications with dependencies?",
    "options": [
      "Redis",
      "Cassandra",
      "Docker",
      "Kafka"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 93,
    "question": "API versioning helps in:",
    "options": [
      "Increasing deadlocks",
      "Reducing storage",
      "Encrypting data",
      "Backward compatibility"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 94,
    "question": "Rate limiting prevents:",
    "options": [
      "Excessive API requests",
      "Serialization",
      "Replication",
      "Caching"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 95,
    "question": "API Gateway mainly provides:",
    "options": [
      "Logging only",
      "File storage",
      "Replication",
      "Routing and authentication"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 96,
    "question": "Monitoring tools help detect:",
    "options": [
      "System health issues",
      "Transactions only",
      "APIs only",
      "File systems only"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 97,
    "question": "Logging is mainly used for:",
    "options": [
      "Debugging and auditing",
      "Encryption",
      "Compression",
      "Partitioning"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 98,
    "question": "Distributed tracing helps track:",
    "options": [
      "Encryption keys",
      "Sharding only",
      "Cache misses only",
      "Request flow across services"
    ],
    "correctAnswer": "D",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 99,
    "question": "Capacity planning ensures:",
    "options": [
      "Data corruption",
      "Enough resources for future traffic",
      "More deadlocks",
      "Reduced availability"
    ],
    "correctAnswer": "B",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 100,
    "question": "Incident management focuses on:",
    "options": [
      "Creating logs only",
      "Writing APIs",
      "Detecting and resolving production issues",
      "Building databases"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  }
];
