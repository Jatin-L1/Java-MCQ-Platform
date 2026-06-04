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
    "question": "Your company wants to build a global content delivery platform that serves video to users in different continents with minimal delay. Which of the following is the most critical first step in the system design process?",
    "options": [
      "Choosing the database technology",
      "Establishing performance and availability requirements (SLAs)",
      "Designing the UI mockups",
      "Deciding on a programming language"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Establishing performance and availability requirements (SLAs)",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 2,
    "question": "A startup needs to design a booking system that must scale from 1,000 to 1 million daily users rapidly. The product manager has given vague requirements. What is the best way to proceed?",
    "options": [
      "Begin by implementing all features to attract users quickly",
      "Design for the peak scale immediately to avoid future rework",
      "Gather and clarify core use cases, define prioritised requirements, then iterate with capacity planning",
      "Outsource the entire system to a third-party provider"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Gather and clarify core use cases, define prioritised requirements, then iterate with capacity planning",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 3,
    "question": "You are designing a messaging service. The business wants 'eventual delivery' but also needs to know if messages failed. Which design trade-off should you clarify in requirements?",
    "options": [
      "Consistency versus partition tolerance",
      "Latency versus throughput",
      "Availability versus exact-once delivery guarantees",
      "Vertical scaling versus horizontal scaling"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Availability versus exact-once delivery guarantees",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 4,
    "question": "During the design of an e-commerce checkout, the team realizes different stakeholders have conflicting priorities (speed, data accuracy, auditability). What structured approach best helps reconcile and prioritize these during design?",
    "options": [
      "Implement all options and let users choose",
      "Rely on engineering intuition",
      "Document non-functional requirements, assign weights, and apply decision matrix for trade-offs",
      "Ignore non-critical stakeholders"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Document non-functional requirements, assign weights, and apply decision matrix for trade-offs",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 5,
    "question": "You inherit a legacy system with no design docs. Before making changes, which of the following should you do first to avoid breaking existing behavior?",
    "options": [
      "Refactor immediately for modern stack",
      "Write a full test suite and capture current system behavior",
      "Replace the database",
      "Add a new UI theme"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Write a full test suite and capture current system behavior",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 6,
    "question": "A team is designing a high-throughput analytics pipeline and assumes all data will arrive in order. Later, they discover out-of-order delivery from sources. What design principle did they violate?",
    "options": [
      "Fail-safe defaults",
      "Designing for expected happy path only instead of real-world variability",
      "KISS (keep it simple)",
      "Modular decomposition"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Designing for expected happy path only instead of real-world variability",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 7,
    "question": "While sketching the high-level architecture for a social network, you decide to postpone capacity planning until after launch. What risk does this decision introduce?",
    "options": [
      "Overengineered security",
      "Cost overruns due to unnecessary early scaling",
      "Unexpected outages or inability to handle sudden growth",
      "Improved agility"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Unexpected outages or inability to handle sudden growth",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 8,
    "question": "Your product requires integration with third-party payment providers. At design time, you model these as a tightly coupled module. Later you need to swap providers quickly. What design flaw is evident?",
    "options": [
      "Violation of single responsibility",
      "Lack of abstraction leading to low flexibility",
      "Insufficient throughput planning",
      "Over-specification of consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Lack of abstraction leading to low flexibility",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 9,
    "question": "A global SaaS application is experiencing downtime when one of its regional datacenters fails. The system was designed with a single active region and a cold standby. What change would improve availability with minimal user-visible impact?",
    "options": [
      "Switch to a monolithic architecture",
      "Implement active-active replication across regions",
      "Decrease logging verbosity",
      "Upgrade the database version"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Implement active-active replication across regions",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 10,
    "question": "An API service using a single load balancer becomes unavailable during peak traffic despite autoscaling backend instances. Which single point of failure is causing reduced availability?",
    "options": [
      "Backend instances",
      "Load balancer",
      "Client application",
      "Database schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Load balancer",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 11,
    "question": "Your system uses a distributed cache for session data. If the cache goes down, all users are logged out. What pattern improves availability of session storage?",
    "options": [
      "Couple session directly with UI",
      "Use sticky sessions only",
      "Fallback to a persistent store with graceful degradation",
      "Remove sessions entirely"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Fallback to a persistent store with graceful degradation",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 12,
    "question": "The SLAs require 99.99% uptime. You designed the system with a single database replica in one zone. During a zone outage user writes fail. Which availability strategy was underutilized?",
    "options": [
      "Caching",
      "Read replicas",
      "Multi-zone redundancy",
      "Sharding"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Multi-zone redundancy",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 13,
    "question": "Your microservices architecture uses synchronous calls between services. A downstream service outage causes upstream services to fail. Which improvement increases overall system availability?",
    "options": [
      "Increase timeout values indefinitely",
      "Switch to batch processing only",
      "Introduce circuit breakers and fallback mechanisms",
      "Remove service boundaries"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Introduce circuit breakers and fallback mechanisms",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 14,
    "question": "A distributed system loses availability during network partition, but the design prioritizes consistency. Which consistency/availability trade-off model does this reflect?",
    "options": [
      "BASE over ACID",
      "CAP theorem choosing consistency over availability",
      "Eventual consistency",
      "CQRS pattern"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is CAP theorem choosing consistency over availability",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 15,
    "question": "To meet high availability for a critical payment gateway, the team deploys redundant service instances and uses health checks with automatic failover. What else should they add to detect degraded availability before full failure?",
    "options": [
      "Better UI design",
      "Real-time latency and error rate monitoring with alerting",
      "Disable logging to reduce noise",
      "Increase batch job frequency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Real-time latency and error rate monitoring with alerting",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 16,
    "question": "A region-wide outage affects your user authentication service, causing login failures globally. What is the best mitigation to preserve availability of authentication?",
    "options": [
      "Have a secondary, geographically separated authentication cluster with eventual sync",
      "Require users to reset passwords every time",
      "Disable authentication temporarily",
      "Use single-factor authentication only"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Have a secondary, geographically separated authentication cluster with eventual sync",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 17,
    "question": "A batch job pipeline sporadically fails due to transient network errors. Users complain about inconsistent results. Which design change improves reliability without human intervention?",
    "options": [
      "Add manual retry instructions in documentation",
      "Implement exponential backoff with retries and idempotent processing",
      "Run the job less frequently",
      "Ignore failures if they are rare"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Implement exponential backoff with retries and idempotent processing",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 18,
    "question": "Your service randomly returns inconsistent data due to partial updates across services. Which pattern helps ensure multi-step updates are reliable?",
    "options": [
      "Two-phase commit or sagas for distributed transactions",
      "Use client-side caching only",
      "Increase load balancer timeout",
      "Throttle users manually"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Two-phase commit or sagas for distributed transactions",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 19,
    "question": "A database occasionally returns stale reads causing business logic errors. Which approach improves data reliability for read-after-write scenarios?",
    "options": [
      "Disable caching globally",
      "Use read-your-writes consistency or session consistency guarantees",
      "Limit users to one request per minute",
      "Move the database to a slower region"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Use read-your-writes consistency or session consistency guarantees",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 20,
    "question": "Your application crashes when a dependent third-party service is down. What strategy reduces the impact on your system’s reliability?",
    "options": [
      "Fail open without notifications",
      "Implement graceful degradation with cached fallback data",
      "Shut down the entire application",
      "Remove dependency entirely"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Implement graceful degradation with cached fallback data",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 21,
    "question": "A microservice occasionally deadlocks due to shared resource contention. Which approach improves reliability of concurrent access?",
    "options": [
      "Introduce optimistic concurrency control or proper locking with timeouts",
      "Disable concurrency completely",
      "Increase hardware specs only",
      "Log and ignore deadlocks"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Introduce optimistic concurrency control or proper locking with timeouts",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 22,
    "question": "Your distributed system fails to recover cleanly after a crash because partial state was persisted inconsistently. What addition ensures reliable recovery?",
    "options": [
      "Disable persistence",
      "Use write-ahead logs and checkpointing",
      "Increase system uptime expectations",
      "Keep data only in memory"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Use write-ahead logs and checkpointing",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 23,
    "question": "To measure reliability over time, which metric gives insight into the proportion of successful transactions versus failures in the recent period?",
    "options": [
      "Error budget burn rate",
      "CPU utilization",
      "UI response time",
      "Number of developers"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Error budget burn rate",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 24,
    "question": "A database is hitting resource limits during traffic spikes. The team increases the machine CPU and RAM (vertical scaling), but gains are limited. What intrinsic limitation are they facing?",
    "options": [
      "Network partition tolerance",
      "Single-node bottleneck and diminishing returns (scale-up ceiling)",
      "Data normalization issues",
      "Increased consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Single-node bottleneck and diminishing returns (scale-up ceiling)",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 25,
    "question": "You choose vertical scaling for your cache layer to reduce latency. Traffic doubles unexpectedly. Why might performance not double as well?",
    "options": [
      "Because of Amdahl’s Law and shared contention on internal resources",
      "Because vertical scaling reduces throughput",
      "Because network latency increases automatically",
      "Because storage is irrelevant"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Because of Amdahl’s Law and shared contention on internal resources",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 26,
    "question": "A finance platform uses a single powerful server for transaction processing. During peak, lock contention prevents further gains. Which scaling move is advisable next?",
    "options": [
      "Add more CPU to the existing server",
      "Refactor to partition workload and move toward horizontal scaling",
      "Decrease transaction logging",
      "Disable auditing"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Refactor to partition workload and move toward horizontal scaling",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 27,
    "question": "You’re running a single-instance search index on a beefy machine. Users demand more throughput. What is a downside of continuing to only scale vertically?",
    "options": [
      "Improved fault tolerance",
      "Higher cost curve and potential single point of failure",
      "Automatic sharding",
      "Simplified consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Higher cost curve and potential single point of failure",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 28,
    "question": "A critical logging pipeline is vertically scaled to handle bursts, but the system occasionally stalls when GC pauses spike. What kind of problem is this illustrating?",
    "options": [
      "Distributed deadlock",
      "Resource contention and saturation at single node causing unpredictable latency",
      "Improper API versioning",
      "Network partitioning issues"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Resource contention and saturation at single node causing unpredictable latency",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 29,
    "question": "When vertical scaling is exhausted, what architectural shift usually follows to handle further growth?",
    "options": [
      "Monolithization",
      "Horizontal partitioning (sharding) and distributed design",
      "Reducing feature set",
      "Moving to a desktop app"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Horizontal partitioning (sharding) and distributed design",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 30,
    "question": "An online retailer adds more application servers behind a load balancer but sees user sessions lost between requests. What must be addressed to scale horizontally correctly?",
    "options": [
      "Sticky sessions or shared session store",
      "Increasing vertical specs of each server",
      "Reducing database size",
      "Shutting down extra servers during off-peak"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Sticky sessions or shared session store",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 31,
    "question": "Your search service scales horizontally but each instance queries the database directly causing contention. Which pattern decouples scaling concerns?",
    "options": [
      "Client-side rendering",
      "Introduce read replicas or a caching layer in front of the database",
      "Disable search features",
      "Single-threaded processing"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Introduce read replicas or a caching layer in front of the database",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 32,
    "question": "As traffic grows, new stateless service instances are spun up but service discovery becomes inconsistent. What service design aspect must be added?",
    "options": [
      "Hardcode IPs of instances",
      "Dynamic service registry with health checks",
      "Disable autoscaling",
      "Use a single instance only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Dynamic service registry with health checks",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 33,
    "question": "During a DDoS attack, more instances are scaled out but request amplification overwhelms the origin. What complementary design improves scalability under hostile load?",
    "options": [
      "Rate limiting and edge throttling",
      "Disable autoscaling",
      "Force synchronous calls",
      "Increase session timeouts"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Rate limiting and edge throttling",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 34,
    "question": "Your horizontally scaled service has inconsistent configuration across instances causing bugs. What process ensures uniformity when scaling out?",
    "options": [
      "Manual copying of configs",
      "Immutable infrastructure and configuration management",
      "Hardcode values in code",
      "Restart only one instance at a time"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Immutable infrastructure and configuration management",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 35,
    "question": "You need to scale a write-heavy leaderboard service. Horizontal scaling of the database is challenging due to strong consistency needs. Which approach balances scale and correctness?",
    "options": [
      "Use eventual consistency without versioning",
      "Partition users and aggregate leaderboards with periodic reconciliation",
      "Use a single master write node only",
      "Limit the number of users manually"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Partition users and aggregate leaderboards with periodic reconciliation",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 36,
    "question": "A critical service becomes hard to update because logic is tangled across modules. Which design principle would most improve maintainability going forward?",
    "options": [
      "Tight coupling",
      "Single responsibility and modular separation",
      "Obfuscation",
      "Performance tuning first"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Single responsibility and modular separation",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 37,
    "question": "During onboarding, new engineers spend weeks understanding the codebase because of poor documentation and no clear interfaces. What immediate change would improve maintainability?",
    "options": [
      "Add comprehensive API contracts and inline high-level README summaries",
      "Remove all comments from code",
      "Merge all modules into one file",
      "Delay onboarding"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Add comprehensive API contracts and inline high-level README summaries",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 38,
    "question": "A subsystem fails when a shared utility is updated because many services depend on its internal behavior. What practice would help avoid this in the future?",
    "options": [
      "Encapsulate utility behind stable, versioned interfaces and use semantic versioning",
      "Allow everyone to edit utility directly",
      "Copy the utility into each service",
      "Ignore backward compatibility"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Encapsulate utility behind stable, versioned interfaces and use semantic versioning",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 39,
    "question": "Frequent production bugs stem from developers modifying shared state without understanding side effects. Which practice would most reduce this risk?",
    "options": [
      "Introduce code ownership and better automated testing with mocks/stubs",
      "Eliminate tests to speed development",
      "Disable peer reviews",
      "Centralize all state into one global variable"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Introduce code ownership and better automated testing with mocks/stubs",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 40,
    "question": "Refactoring is avoided because there is no measurement of its risk. What addition to the development process improves maintainability confidence?",
    "options": [
      "Implement automated regression test suites and canary deployments",
      "Remove all automated tests",
      "Deploy changes directly to production",
      "Have developers guess impact manually"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Implement automated regression test suites and canary deployments",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 41,
    "question": "You notice repeated logic in multiple services for input validation. What refactor increases maintainability?",
    "options": [
      "Duplicate the logic further for speed",
      "Extract common validation into shared library with clear contract",
      "Remove validation",
      "Hardcode values client-side"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Extract common validation into shared library with clear contract",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 42,
    "question": "Your distributed cache sometimes returns stale values, leading to user confusion. The system was designed for high availability. Which consistency model was likely sacrificed?",
    "options": [
      "Eventual consistency",
      "Read-your-writes consistency",
      "Session consistency",
      "Strong consistency"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Strong consistency",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 43,
    "question": "An online document editor allows multiple users to edit but sometimes later edits override earlier ones unexpectedly. What technique would help maintain consistency while allowing concurrent edits?",
    "options": [
      "Last write wins without transformation",
      "Operational Transformation or CRDTs",
      "Disable concurrent edits",
      "Use separate documents per user"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Operational Transformation or CRDTs",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 44,
    "question": "A banking system processes withdrawal and balance checks. Sometimes a user sees their balance before a recent withdrawal due to replication lag. Which improvement increases read consistency?",
    "options": [
      "Use eventual consistency for reads",
      "Implement read-after-write consistency for that user session",
      "Duplicate the withdrawal logic",
      "Make all operations asynchronous without ordering"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Implement read-after-write consistency for that user session",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 45,
    "question": "To ensure global strong consistency across geo-distributed writes, the team introduces high write latencies. What trade-off are they accepting per CAP theorem?",
    "options": [
      "Availability for consistency",
      "Partition tolerance for availability",
      "Throughput for latency",
      "Maintainability for scalability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Availability for consistency",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 46,
    "question": "A distributed shopping cart system allows cart updates on one region to appear later in another. Business requires users to always see their own recent modifications when they return. What consistency guarantee should be added?",
    "options": [
      "Eventual consistency only",
      "Session consistency",
      "No consistency",
      "Write unavailability during replication"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Session consistency",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 47,
    "question": "Team A wants to prioritize availability under network partition; Team B demands strong consistency for some critical reads. What pattern can satisfy both for different use cases?",
    "options": [
      "Use single global lock",
      "Read-your-writes consistency selectively with fallback to eventual for less-critical data",
      "Drop consistency entirely",
      "Disable partition tolerance"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Read-your-writes consistency selectively with fallback to eventual for less-critical data",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 48,
    "question": "A microservice fails and causes its dependent services to cascade failure. What mechanism would isolate and contain faults?",
    "options": [
      "Increase logging level",
      "Introduce circuit breakers and bulkheads",
      "Use synchronous tight coupling",
      "Disable retries"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Introduce circuit breakers and bulkheads",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 49,
    "question": "A critical service is deployed without redundancy. During failure, traffic is dropped entirely. Which design change most directly adds fault tolerance?",
    "options": [
      "Add a secondary failover instance with health checks",
      "Reduce feature scope",
      "Increase media assets",
      "Consolidate logs"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Add a secondary failover instance with health checks",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 50,
    "question": "Your distributed queue sometimes loses messages when a worker crashes mid-processing. What design feature adds fault tolerance here?",
    "options": [
      "Use at-most-once delivery",
      "Implement persistent queue with acknowledgment and retry semantics",
      "Disable visibility timeouts",
      "Process messages only during low load"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Implement persistent queue with acknowledgment and retry semantics",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 51,
    "question": "A database shard failure causes data loss in your analytics system. What measure could have reduced impact?",
    "options": [
      "Single-point replication",
      "Regular backups and cross-region replication",
      "Increased query complexity",
      "UI caching"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Regular backups and cross-region replication",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 52,
    "question": "To simulate outages and validate fault tolerance, the engineering team introduces random service terminations in production-like environment. What practice is this?",
    "options": [
      "Load testing",
      "Chaos engineering",
      "Unit testing",
      "Code review"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Chaos engineering",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 53,
    "question": "An e-commerce site experiences high page load time because the recommendation service takes 300ms per call. Which technique reduces perceived latency for users?",
    "options": [
      "Synchronous blocking calls on every page load",
      "Client-side prefetching and caching recommendations",
      "Dropping recommendations entirely",
      "Adding more form fields"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Client-side prefetching and caching recommendations",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 54,
    "question": "A geodistributed application suffers from 150ms round-trip latency for user requests due to long distances. What architectural change best reduces worst-case latency?",
    "options": [
      "Centralize all logic in one region",
      "Introduce regional edge caching and read replicas closer to users",
      "Increase database normalization",
      "Batch all user requests"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Introduce regional edge caching and read replicas closer to users",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 55,
    "question": "Your analytics dashboard loads slowly because it performs expensive aggregation on every request. What optimization reduces latency without sacrificing correctness?",
    "options": [
      "Precompute results and serve from materialized views",
      "Remove dashboard features",
      "Do nothing and wait",
      "Require manual refresh"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Precompute results and serve from materialized views",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 56,
    "question": "Your synchronous microservice chain introduces cumulative latency. Which pattern helps reduce end-to-end latency under load?",
    "options": [
      "Convert some calls to asynchronous event-driven communication with eventual consistency",
      "Increase synchronous retries",
      "Add more layers",
      "Block user requests"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Convert some calls to asynchronous event-driven communication with eventual consistency",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 57,
    "question": "A service returns critical data but takes too long because it always waits for fresh data. What trade-off can reduce latency while still providing timely results?",
    "options": [
      "Use stale-while-revalidate caching strategy",
      "Only serve stale data without updates",
      "Double the polling frequency",
      "Drop data validation"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Use stale-while-revalidate caching strategy",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 58,
    "question": "Your order ingestion system can process 100 orders/sec but upstream spikes push 500 orders/sec, causing a backlog. What design change increases throughput resilience?",
    "options": [
      "Implement write buffering with backpressure and horizontal scaling of workers",
      "Reject all incoming orders",
      "Throttle UI refresh rate",
      "Decrease order size"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Implement write buffering with backpressure and horizontal scaling of workers",
    "topic": "Fundamentals of System Design",
    "difficulty": "hard"
  },
  {
    "id": 59,
    "question": "You measured peak throughput of a service and find CPU is underutilized while latency spikes. What bottleneck is likely limiting throughput?",
    "options": [
      "Network I/O or serialization overhead",
      "Insufficient CPU",
      "Too many developers",
      "Database schema complexity only"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Network I/O or serialization overhead",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 60,
    "question": "A logging ingestion pipeline processes logs individually, limiting throughput. What change significantly increases throughput?",
    "options": [
      "Batch log entries and process in bulk",
      "Process each log with synchronous acknowledgment",
      "Discard half the logs",
      "Store logs on client side"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Batch log entries and process in bulk",
    "topic": "Fundamentals of System Design",
    "difficulty": "medium"
  },
  {
    "id": 61,
    "question": "A system uses aggressive in-memory caching to speed up responses, but it becomes hard to scale when load increases. What trade-off is being illustrated?",
    "options": [
      "Optimizing for scalability at cost of performance",
      "Optimizing for performance at cost of scalability",
      "Eliminating fault tolerance",
      "Improving consistency without impact"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Optimizing for performance at cost of scalability",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 62,
    "question": "Your initial design tuned a monolith for low latency. When user base grew tenfold, you hit a wall and have to rearchitect. What would have addressed long-term scalability earlier?",
    "options": [
      "Early decomposition into microservices with horizontal scaling in mind",
      "Use a bigger single machine only",
      "Avoid monitoring",
      "Disable logging for speed"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Early decomposition into microservices with horizontal scaling in mind",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 63,
    "question": "A database index improves query speed (performance) but slows down writes as data grows. What common design tension does this represent?",
    "options": [
      "Latency vs Availability",
      "Performance (read) vs Scalability (write)",
      "Consistency vs Partition tolerance",
      "Modularity vs Coupling"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Performance (read) vs Scalability (write)",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 64,
    "question": "A streaming platform batches messages to increase throughput but users complain about delay in fresher content. Which trade-off is happening?",
    "options": [
      "Latency increasing to gain higher throughput",
      "Availability decreasing for consistency",
      "Scalability reducing performance",
      "Maintainability vs modularity"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Latency increasing to gain higher throughput",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 65,
    "question": "To minimize round-trip delay for interactive queries, you limit concurrent requests per user, reducing aggregate throughput. What design choice did you make?",
    "options": [
      "Favoring throughput over latency",
      "Favoring latency over throughput",
      "Choosing eventual consistency",
      "Sacrificing availability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Favoring latency over throughput",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 66,
    "question": "During a network partition, your user profile service continues serving reads but occasionally returns slightly outdated info. Which guarantee was chosen?",
    "options": [
      "Consistency over availability",
      "Availability over strict consistency",
      "Partition tolerance dropped",
      "Throughput increased"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Availability over strict consistency",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 67,
    "question": "A financial application requires every transaction read to reflect the latest write even under partition, accepting downtime during network issues. Which CAP trade-off is it making?",
    "options": [
      "Availability over consistency",
      "Consistency over availability",
      "Partition tolerance over everything",
      "Scalability over reliability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Consistency over availability",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 68,
    "question": "You have a large codebase with services tightly interwoven, so changes ripple unpredictably. Which design change most improves maintainability?",
    "options": [
      "Break the system into well-defined modules with clear interfaces",
      "Merge all modules into a single file for simplicity",
      "Hide all architecture documentation",
      "Reduce code comments"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Break the system into well-defined modules with clear interfaces",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 69,
    "question": "A team struggles to test components independently because business logic and data access are mixed. Which refactor aligns with modular design?",
    "options": [
      "Introduce separation of concerns and layer abstraction",
      "Increase coupling for performance",
      "Use global state everywhere",
      "Eliminate interfaces"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Introduce separation of concerns and layer abstraction",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 70,
    "question": "You inherit a system with long functions doing multiple things, making bugs frequent. Which principle would most directly reduce complexity?",
    "options": [
      "Single Responsibility Principle (SRP)",
      "YAGNI (You Aren't Gonna Need It)",
      "Premature optimization",
      "Copy-paste coding"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Single Responsibility Principle (SRP)",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 71,
    "question": "The team uses ambiguous variable names and unclear logic. Which clean code practice would immediately help new developers understand code faster?",
    "options": [
      "Use descriptive naming and small functions",
      "Obfuscate logic to prevent misuse",
      "Remove all comments and documentation",
      "Write everything in a single line"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Use descriptive naming and small functions",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 72,
    "question": "A feature requires multiple scattered changes; developers keep breaking unrelated parts. Which principle would help isolate changes?",
    "options": [
      "Encapsulation and modularization",
      "Global state sharing",
      "Hardcoding values",
      "Duplicating logic"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Encapsulation and modularization",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 73,
    "question": "A team manually deploys code and often introduces regressions. What CI/CD practice would prevent this?",
    "options": [
      "Automated testing with gated merges and continuous deployment",
      "Deploy directly from developer laptops",
      "Avoid version control",
      "Increase manual approval steps with no automation"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Automated testing with gated merges and continuous deployment",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 74,
    "question": "After each merge, code is automatically built, tested, and deployed to staging, but production rollout is delayed for weeks. What pipeline improvement shortens time to production safely?",
    "options": [
      "Introduce canary deployments with automated rollback on anomalies",
      "Skip staging entirely",
      "Deploy only monthly",
      "Disable automated tests in production"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Introduce canary deployments with automated rollback on anomalies",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 75,
    "question": "Your real-time chat application delays delivery to maintain ordering, but high volume causes slowness. What optimization can retain ordering while improving throughput?",
    "options": [
      "Partition chats and use per-partition ordering with parallelism",
      "Drop ordering completely",
      "Serialize all traffic through one node",
      "Throttle all users equally"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Partition chats and use per-partition ordering with parallelism",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 76,
    "question": "A distributed key-value store allows stale reads during partitions to stay available. Later it reconciles updates. Which consistency model is in effect?",
    "options": [
      "Strong consistency",
      "Eventual consistency",
      "Immediate consistency",
      "No consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Eventual consistency",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 77,
    "question": "An application routes traffic through a centralized cache for speed, but it becomes the bottleneck as user count grows. What principle was overlooked?",
    "options": [
      "Avoid early scaling",
      "Design for distributed caching to enable scalability",
      "Use a single thread",
      "Ignore monitoring"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Design for distributed caching to enable scalability",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 78,
    "question": "A legacy module has nested conditionals making it hard to reason about. Which refactor aligns with clean code to improve readability?",
    "options": [
      "Replace nested conditionals with strategy or polymorphism",
      "Add more comments inside the nested blocks",
      "Compress into one line",
      "Hide logic behind magic strings"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Replace nested conditionals with strategy or polymorphism",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 79,
    "question": "Deployments frequently fail live because last-minute changes bypass the pipeline. What enforcement prevents this?",
    "options": [
      "Require all deployments to go through automated pipeline with signed artifacts",
      "Allow developers to push directly to prod",
      "Remove version control",
      "Disable rollbacks"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Require all deployments to go through automated pipeline with signed artifacts",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 80,
    "question": "A monolithic service is hard to test because a small change requires spinning up entire stack. What modular decomposition improves this?",
    "options": [
      "Split into independent services with clear contracts and test each in isolation",
      "Combine more layers into one",
      "Remove interface boundaries",
      "Reduce test coverage"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Split into independent services with clear contracts and test each in isolation",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 81,
    "question": "Your API is highly optimized for single-request latency but cannot handle concurrent spikes. What strategy helps improve scalability without sacrificing critical performance?",
    "options": [
      "Introduce request queuing with priority and auto-scaling of worker pools",
      "Remove all optimization",
      "Limit user base artificially",
      "Use a slower language runtime"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Introduce request queuing with priority and auto-scaling of worker pools",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 82,
    "question": "In a video conferencing system, you must choose between sending every frame (high throughput) or dropping some to keep latency low. What is this trade-off?",
    "options": [
      "Availability vs Consistency",
      "Latency vs Throughput",
      "Modularity vs Performance",
      "Reliability vs Fault Tolerance"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Latency vs Throughput",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 83,
    "question": "Your client display shows slightly stale stock prices but never fails to show anything. What design choice does this reflect?",
    "options": [
      "Strict consistency with downtime",
      "Availability prioritized over immediate consistency",
      "No partition tolerance",
      "High latency preference"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Availability prioritized over immediate consistency",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 84,
    "question": "Repeated logic exists in several modules causing maintenance burden. What principle eliminates this duplication?",
    "options": [
      "DRY (Don't Repeat Yourself)",
      "YAGNI",
      "Premature optimization",
      "God object pattern"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DRY (Don't Repeat Yourself)",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 85,
    "question": "A bug introduced in staging goes to production because the test suite does not run on feature branches. What improvement ensures this does not recur?",
    "options": [
      "Run full CI pipeline including tests on every feature branch before merge",
      "Only test on main branch",
      "Remove tests",
      "Deploy untested code during weekends"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Run full CI pipeline including tests on every feature branch before merge",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 86,
    "question": "Your microservice uses expensive CPU-bound computation for each request. To scale, you decide to cache results. What are you trading off?",
    "options": [
      "Staleness (consistency) for performance and effective scalability",
      "Latency for throughput",
      "Availability for consistency",
      "Modularity for reliability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Staleness (consistency) for performance and effective scalability",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 87,
    "question": "A telemetry ingestion service batches for throughput; clients want real-time metrics. What hybrid approach helps both?",
    "options": [
      "Send critical metrics immediately and batch the rest",
      "Only batch everything",
      "Delay all metrics by fixed window",
      "Drop non-critical metrics entirely"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Send critical metrics immediately and batch the rest",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 88,
    "question": "You need to roll back a feature but cannot isolate its changes because modules are interdependent. What design principle would prevent this entanglement?",
    "options": [
      "Loose coupling and clear interface boundaries",
      "Tight coupling for speed",
      "Store everything in global variables",
      "Avoid unit tests"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Loose coupling and clear interface boundaries",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 89,
    "question": "You find a function with 200 lines and nested logic. What clean code recommendation applies?",
    "options": [
      "Refactor into smaller functions with descriptive names",
      "Add more comments instead of refactoring",
      "Leave it as-is",
      "Obfuscate it further"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Refactor into smaller functions with descriptive names",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 90,
    "question": "Deployments cause regressions because there is no rollback mechanism. What pipeline feature directly addresses this?",
    "options": [
      "Blue-green or canary deployments with automatic rollback",
      "Manual deployment only",
      "Single environment for all",
      "Disable monitoring"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Blue-green or canary deployments with automatic rollback",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 91,
    "question": "You build a messaging queue that always accepts writes during partitions even if some messages may duplicate later. Which CAP property did you prioritize?",
    "options": [
      "Consistency over availability",
      "Availability over consistency",
      "Partition tolerance removed",
      "Throughput over latency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Availability over consistency",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 92,
    "question": "A system that scales horizontally by adding more nodes also increases coordination overhead, reducing per-node performance. What phenomenon is this?",
    "options": [
      "Amdahl’s Law / diminishing returns due to synchronization overhead",
      "CAP theorem violation",
      "Single responsibility breach",
      "Code smell"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Amdahl’s Law / diminishing returns due to synchronization overhead",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 93,
    "question": "Your system introduces small delays per request to batch more efficiently, dramatically increasing total processed data. Which goal was favored?",
    "options": [
      "Latency over throughput",
      "Throughput over latency",
      "Consistency over availability",
      "Maintainability over modularity"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Throughput over latency",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 94,
    "question": "Developers avoid touching certain modules because changes have unknown side effects. Which practice would reduce this fear and improve maintainability?",
    "options": [
      "Introduce comprehensive test harnesses and clear module contracts",
      "Hide modules from team",
      "Remove documentation",
      "Lock code permanently"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Introduce comprehensive test harnesses and clear module contracts",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 95,
    "question": "A function has deep nesting and many branches. Which refactor reduces complexity while preserving behavior?",
    "options": [
      "Apply early returns and extract helper functions",
      "Add more nested ifs",
      "Hardcode values",
      "Duplicate the function"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Apply early returns and extract helper functions",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 96,
    "question": "A feature branch is merged without running its tests due to lack of enforcement. Which gating mechanism should be applied?",
    "options": [
      "Require passing CI checks before merge (branch protection)",
      "Merge first, test later",
      "Disable tests on feature branches",
      "Use manual approvals only"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Require passing CI checks before merge (branch protection)",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 97,
    "question": "You choose a complex algorithm for minimal latency per request, but CPU usage skyrockets under load making it hard to support many concurrent users. What could help balance both?",
    "options": [
      "Introduce adaptive algorithms or degrade gracefully under load",
      "Remove concurrency completely",
      "Fix the algorithm regardless of cost",
      "Add forced delays"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Introduce adaptive algorithms or degrade gracefully under load",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 98,
    "question": "Developers copy-paste similar logic across services to accelerate delivery. What principle is violated, and what's the correct remedy?",
    "options": [
      "Violates DRY; extract shared logic into a common library",
      "Violates KISS; make logic more complex",
      "Violates YAGNI; remove the logic",
      "Violates SOLID; merge services"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Violates DRY; extract shared logic into a common library",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 99,
    "question": "Deployments are unpredictable because configuration changes live only in prod. Which best practice avoids this?",
    "options": [
      "Store configuration as code alongside application and promote through pipeline",
      "Edit prod config manually",
      "Embed configs in binary only",
      "Avoid config versioning"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Store configuration as code alongside application and promote through pipeline",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 100,
    "question": "A globally distributed datastore accepts writes in any region and later reconciles conflicts, occasionally showing divergent data briefly. What model does this represent?",
    "options": [
      "Strong consistency",
      "Eventual consistency with conflict resolution",
      "Immediate consistency",
      "No partition tolerance"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Eventual consistency with conflict resolution",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 101,
    "question": "A payment gateway batches transactions to reduce load but some users experience delay in confirmation. What design optimization can reduce perceived latency while keeping batching?",
    "options": [
      "Acknowledge receipt immediately and process batch asynchronously",
      "Stop batching entirely",
      "Disable acknowledgments",
      "Increase batch size indefinitely"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Acknowledge receipt immediately and process batch asynchronously",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 102,
    "question": "A module’s internal implementation leaks into multiple clients, making replacements risky. Which abstraction principle would fix this?",
    "options": [
      "Define a clear interface and hide implementation details (encapsulation)",
      "Expose all internals to clients",
      "Copy code into clients",
      "Avoid versioning"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Define a clear interface and hide implementation details (encapsulation)",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 103,
    "question": "Team uses magic numbers scattered through code making changes error-prone. What practice improves maintainability?",
    "options": [
      "Replace magic numbers with named constants",
      "Use more magic numbers",
      "Hide numbers in comments only",
      "Remove all numbers"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Replace magic numbers with named constants",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 104,
    "question": "Testing is skipped on weekends causing accumulating bugs. What scheduling improvement ensures continuous quality?",
    "options": [
      "Ensure pipeline triggers on every commit including weekends with automated test runs",
      "Disable weekend work",
      "Merge without tests",
      "Manual testing only"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Ensure pipeline triggers on every commit including weekends with automated test runs",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 105,
    "question": "Your system caches aggressively per node, improving latency but causing inconsistent state across the cluster. What architectural pattern can reconcile data freshness and scalability?",
    "options": [
      "Cache invalidation with versioning and distributed coherence protocols",
      "Disable caching",
      "Consistency over availability always",
      "Use a single node"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Cache invalidation with versioning and distributed coherence protocols",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 106,
    "question": "During a partition, your search index still serves queries but some results are slightly outdated. Which CAP decision was made?",
    "options": [
      "Sacrificing availability",
      "Sacrificing consistency",
      "Removing partition tolerance",
      "Improving throughput"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Sacrificing consistency",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 107,
    "question": "A new feature requires changes across 7 modules, leading to coordination cost. What design improvement reduces coupling?",
    "options": [
      "Introduce a shared service or domain-specific API to encapsulate cross-cutting logic",
      "Copy logic into each module again",
      "Drop the feature",
      "Disable code reviews"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Introduce a shared service or domain-specific API to encapsulate cross-cutting logic",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 108,
    "question": "Developers frequently commit large changes mixing refactor and feature code making reviews hard. What practice separates concerns for clarity?",
    "options": [
      "Separate refactors from feature additions in different commits/PRs",
      "Merge everything into one big PR",
      "Avoid PRs altogether",
      "Use unclear commit messages"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Separate refactors from feature additions in different commits/PRs",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 109,
    "question": "Production incidents happen because staging and production environments differ. What CI/CD best practice addresses this?",
    "options": [
      "Use environment-as-code to keep parity between staging and production",
      "Change production manually",
      "Ignore environment differences",
      "Only test in dev"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Use environment-as-code to keep parity between staging and production",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 110,
    "question": "Your microservice performs complex validation inline causing high latency; moving validations asynchronous speeds throughput but delays error feedback. What is the trade-off?",
    "options": [
      "Immediate consistency vs eventual throughput improvement",
      "Availability vs partition tolerance",
      "Maintainability vs modularity",
      "Strong consistency vs fault tolerance"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Immediate consistency vs eventual throughput improvement",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 111,
    "question": "Your telemetry backend buffers metrics for 5 seconds to send in bulk, but real-time alerting needs lower delay. What compromise can you implement?",
    "options": [
      "Split traffic: immediate alerts on critical signals, batch the rest",
      "Buffer everything longer",
      "Disable alerts",
      "Drop non-critical metrics"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Split traffic: immediate alerts on critical signals, batch the rest",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 112,
    "question": "Multiple teams edit shared code unknowingly causing integration breaks. What structural change improves this?",
    "options": [
      "Introduce clear module ownership boundaries and versioned interfaces",
      "Allow anyone to edit any module without coordination",
      "Merge all modules weekly",
      "Centralize all changes to one developer"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Introduce clear module ownership boundaries and versioned interfaces",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 113,
    "question": "Code reviews flag complex conditional logic with no tests. What two improvements paired together align with clean code?",
    "options": [
      "Refactor into clarity (small functions) and add unit tests",
      "Add more nested ifs and reduce comments",
      "Remove tests and keep complexity",
      "Increase coupling"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Refactor into clarity (small functions) and add unit tests",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 114,
    "question": "Production deployments sometimes fail due to unknown dependency changes. What CI practice can catch this early?",
    "options": [
      "Dependency scanning and reproducible builds in pipeline",
      "Ignore dependency updates",
      "Deploy without builds",
      "Manual dependency editing"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Dependency scanning and reproducible builds in pipeline",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 115,
    "question": "Your global key-value store accepts conflicting writes and later resolves them with last-write-wins, sometimes losing earlier data. Which trade-off does this illustrate?",
    "options": [
      "Consistency sacrificed for availability",
      "Availability sacrificed for consistency",
      "Partition tolerance removed",
      "Throughput reduced"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Consistency sacrificed for availability",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 116,
    "question": "A service uses per-request encryption which slows individual calls, but the system cannot scale due to CPU costs. What combined approach improves scalability while retaining security?",
    "options": [
      "Offload encryption to edge gateway and reuse secure tokens",
      "Remove encryption",
      "Encrypt twice",
      "Use a single central encryptor synchronous call"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Offload encryption to edge gateway and reuse secure tokens",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 117,
    "question": "Developers frequently commit large swaths of unrelated code making blame tracking hard. What process practice improves this?",
    "options": [
      "Encourage small, focused commits with clear messages",
      "Commit everything once a month",
      "Use ambiguous commit titles",
      "Avoid version control"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Encourage small, focused commits with clear messages",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 118,
    "question": "A hotfix is applied manually in production and not propagated back to source. What break in pipeline discipline does this cause?",
    "options": [
      "Configuration drift and source-of-truth divergence",
      "Improved reliability",
      "Clean code compliance",
      "Better modularity"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Configuration drift and source-of-truth divergence",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 119,
    "question": "You batch user analytics to increase throughput, but several dependent downstream systems need near real-time data. What architectural refinement helps both?",
    "options": [
      "Publish events for critical data immediately, batch less critical data",
      "Batch everything with large window",
      "Disable downstream systems",
      "Increase user wait time"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Publish events for critical data immediately, batch less critical data",
    "topic": "Comparison",
    "difficulty": "hard"
  },
  {
    "id": 120,
    "question": "You want to enable rapid independent deployment of features. Which combination of practices best supports this goal?",
    "options": [
      "Modular design with well-defined APIs and semantic versioning",
      "Tight coupling with shared monoliths",
      "Manual integration only",
      "No testing"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Modular design with well-defined APIs and semantic versioning",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 121,
    "question": "In a ride-hailing system, users often complain that the app is down during peak hours. Which System Design characteristic directly addresses this problem?",
    "options": [
      "Availability",
      "Consistency",
      "Latency",
      "Throughput"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Availability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 122,
    "question": "A banking application must ensure no two transactions on the same account can result in inconsistent balance updates. Which characteristic ensures this?",
    "options": [
      "Fault Tolerance",
      "Reliability",
      "Throughput",
      "Latency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Reliability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 123,
    "question": "An e-commerce site doubles its CPU and memory capacity on a single server to handle growing traffic. Which type of scalability is being applied?",
    "options": [
      "Vertical Scaling (Scaling Up)",
      "Horizontal Scaling (Scaling Out)",
      "Fault Tolerance",
      "Consistency Pattern"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Vertical Scaling (Scaling Up)",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 124,
    "question": "A social media platform adds more servers to handle an increasing number of active users. What is this an example of?",
    "options": [
      "Fault Tolerance",
      "Consistency",
      "Horizontal Scaling (Scaling Out)",
      "Vertical Scaling (Scaling Up)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Horizontal Scaling (Scaling Out)",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 125,
    "question": "In an online exam system, the requirement is that once a student submits an answer, it must always remain stored accurately even if a server fails. Which property ensures this?",
    "options": [
      "Availability",
      "Durability",
      "Scalability",
      "Modularity"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Durability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 126,
    "question": "An airline booking system must reject double bookings for the same seat even during peak load. Which property of ACID transactions ensures this?",
    "options": [
      "Isolation",
      "Consistency",
      "Availability",
      "Reliability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Isolation",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 127,
    "question": "If a distributed system prioritizes Availability and Partition Tolerance from the CAP theorem, which consistency model will it likely follow?",
    "options": [
      "Strong Consistency",
      "Weak Consistency",
      "Eventual Consistency",
      "Strict Serializability"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Eventual Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 128,
    "question": "During Black Friday sales, an e-commerce app ensures the system responds quickly to each request even if fewer items can be processed. Which metric is being prioritized?",
    "options": [
      "Throughput",
      "Latency",
      "Reliability",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Latency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 129,
    "question": "A financial trading system must ensure no message is ever lost even if a server crashes. Which system design property guarantees this?",
    "options": [
      "Scalability",
      "Fault Tolerance",
      "Latency",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Fault Tolerance",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 130,
    "question": "Which of the following best describes Vertical Scaling in system design?",
    "options": [
      "Adding more servers to distribute load",
      "Increasing resources (CPU, RAM) of an existing server",
      "Replicating data across multiple data centers",
      "Dividing database tables across shards"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Increasing resources (CPU, RAM) of an existing server",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 131,
    "question": "In microservices architecture, what ensures that one failing service does not crash the entire system?",
    "options": [
      "Fault Isolation",
      "Latency Management",
      "Consistency",
      "Throughput"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Fault Isolation",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 132,
    "question": "A video streaming service ensures that even if servers in one region go down, users can still stream from another region. This is an example of?",
    "options": [
      "Sharding",
      "Replication",
      "Normalization",
      "Vertical Scaling"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Replication",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 133,
    "question": "Which of the following is an example of Event-Driven Architecture?",
    "options": [
      "User submits form → server saves record immediately",
      "User clicks checkout → order service publishes event → payment & inventory subscribe",
      "A single server handles all requests",
      "Database triggers auto-backup daily"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is User clicks checkout → order service publishes event → payment & inventory subscribe",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 134,
    "question": "Which normalization form removes partial dependencies of attributes on part of a candidate key?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 2NF",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 135,
    "question": "Which ACID property ensures that once a transaction is committed, it remains even in case of system crash?",
    "options": [
      "Atomicity",
      "Durability",
      "Isolation",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Durability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 136,
    "question": "An online store increases database partitions to improve read/write speed. What concept is this?",
    "options": [
      "Sharding",
      "Replication",
      "Vertical Scaling",
      "Normalization"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Sharding",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 137,
    "question": "Which type of consistency model ensures that once a user reads a value, subsequent reads will always return the same value until updated?",
    "options": [
      "Strong Consistency",
      "Eventual Consistency",
      "Weak Consistency",
      "Monotonic Read Consistency"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Monotonic Read Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 138,
    "question": "Which architectural pattern tightly couples all components into one codebase and deployment unit?",
    "options": [
      "Microservices",
      "Monolithic Architecture",
      "Event-Driven Architecture",
      "Layered Architecture"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Monolithic Architecture",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 139,
    "question": "Which SQL command is used to remove a table permanently from a database?",
    "options": [
      "DELETE",
      "DROP",
      "REMOVE",
      "TRUNCATE"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is DROP",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 140,
    "question": "Which indexing structure is most commonly used in relational databases?",
    "options": [
      "B+ Tree",
      "Hash Table",
      "Bitmap Index",
      "Skip List"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is B+ Tree",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 141,
    "question": "A travel booking site ensures that duplicate booking references are never created. Which database constraint enforces this?",
    "options": [
      "PRIMARY KEY",
      "UNIQUE",
      "NOT NULL",
      "CHECK"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is UNIQUE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 142,
    "question": "Which SQL statement is used to add a new row to a table?",
    "options": [
      "INSERT",
      "UPDATE",
      "ALTER",
      "SELECT"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is INSERT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 143,
    "question": "In system design, which metric measures the maximum number of requests a system can process per second?",
    "options": [
      "Latency",
      "Throughput",
      "Availability",
      "Scalability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Throughput",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 144,
    "question": "Which database design phase translates ER diagrams into relational schemas with tables, attributes, and relationships?",
    "options": [
      "Conceptual Design",
      "Logical Design",
      "Physical Design",
      "Requirement Analysis"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Logical Design",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 145,
    "question": "Which principle of clean code ensures that functions and classes have only one reason to change?",
    "options": [
      "Open/Closed Principle",
      "Single Responsibility Principle",
      "Dependency Inversion",
      "Interface Segregation"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Single Responsibility Principle",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 146,
    "question": "Which consistency pattern allows temporary stale reads but guarantees all replicas eventually synchronize?",
    "options": [
      "Weak Consistency",
      "Eventual Consistency",
      "Strong Consistency",
      "Monotonic Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Eventual Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 147,
    "question": "Which SQL clause is used to filter records after aggregation functions like COUNT or SUM?",
    "options": [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "ORDER BY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is HAVING",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 148,
    "question": "In CI/CD pipelines, which stage ensures the application is deployed to a staging environment before production?",
    "options": [
      "Build",
      "Test",
      "Release",
      "Deploy"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Deploy",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 149,
    "question": "Which functional dependency property ensures that if A → B and B → C, then A → C?",
    "options": [
      "Reflexivity",
      "Augmentation",
      "Transitivity",
      "Union"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Transitivity",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 150,
    "question": "Which database recovery technique restores data using a transaction log after a crash?",
    "options": [
      "Checkpointing",
      "Rollforward",
      "Rollback",
      "Snapshot"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Rollforward",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 151,
    "question": "Which SQL command is part of TCL (Transaction Control Language)?",
    "options": [
      "COMMIT",
      "ALTER",
      "CREATE",
      "UPDATE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is COMMIT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 152,
    "question": "Which database design phase deals with physical storage structures, indexes, and file organization?",
    "options": [
      "Conceptual Design",
      "Logical Design",
      "Physical Design",
      "Requirement Analysis"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Physical Design",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 153,
    "question": "Which transaction property ensures that either all operations are performed or none are?",
    "options": [
      "Durability",
      "Atomicity",
      "Consistency",
      "Isolation"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Atomicity",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 154,
    "question": "Which SQL query retrieves all unique job titles from an employee table?",
    "options": [
      "SELECT job_title FROM employee;",
      "SELECT DISTINCT job_title FROM employee;",
      "SELECT UNIQUE job_title FROM employee;",
      "SELECT job_title, COUNT(*) FROM employee;"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is SELECT DISTINCT job_title FROM employee;",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 155,
    "question": "Which architectural style is best when services must communicate asynchronously using events?",
    "options": [
      "Layered Architecture",
      "Event-Driven Architecture",
      "Microservices",
      "Monolithic"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Event-Driven Architecture",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 156,
    "question": "Which form of normalization eliminates transitive dependencies?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 3NF",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 157,
    "question": "Which SQL keyword is used to sort query results in ascending or descending order?",
    "options": [
      "GROUP BY",
      "SORT",
      "ORDER BY",
      "RANK BY"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is ORDER BY",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 158,
    "question": "Which CAP theorem tradeoff allows partition tolerance and consistency but sacrifices availability?",
    "options": [
      "AP System",
      "CA System",
      "CP System",
      "ACID System"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is CP System",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 159,
    "question": "Which database backup strategy involves copying only data modified since the last full backup?",
    "options": [
      "Incremental Backup",
      "Differential Backup",
      "Hot Backup",
      "Cold Backup"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Incremental Backup",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 160,
    "question": "Which join returns all rows from two tables, matching where possible and filling NULLs otherwise?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is FULL OUTER JOIN",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 161,
    "question": "Which constraint ensures that column values must not be left empty in a table?",
    "options": [
      "PRIMARY KEY",
      "UNIQUE",
      "NOT NULL",
      "CHECK"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is NOT NULL",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 162,
    "question": "Which design approach provides a bird’s-eye view of the entire system before detailing components?",
    "options": [
      "Low-Level Design (LLD)",
      "High-Level Design (HLD)",
      "Physical Design",
      "Conceptual Design"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is High-Level Design (HLD)",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 163,
    "question": "Which SQL statement is used to modify existing data in a table?",
    "options": [
      "UPDATE",
      "ALTER",
      "INSERT",
      "DELETE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is UPDATE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 164,
    "question": "Which property of functional dependency ensures every determinant is a candidate key in BCNF?",
    "options": [
      "Dependency Preservation",
      "Lossless Decomposition",
      "Canonical Cover",
      "Boyce-Codd Condition"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Boyce-Codd Condition",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 165,
    "question": "Which replication technique synchronizes data across multiple servers to improve read availability?",
    "options": [
      "Master-Slave Replication",
      "Sharding",
      "Partitioning",
      "Normalization"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Master-Slave Replication",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 166,
    "question": "Which SQL keyword is used to combine results from two queries while removing duplicates?",
    "options": [
      "UNION",
      "JOIN",
      "MERGE",
      "INTERSECT"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is UNION",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 167,
    "question": "Which architectural pattern is best when independent services need to scale separately?",
    "options": [
      "Monolithic",
      "Microservices",
      "Event-Driven",
      "Layered"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Microservices",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 168,
    "question": "Which SQL command is used to permanently remove all rows from a table but keep the structure?",
    "options": [
      "DELETE",
      "TRUNCATE",
      "DROP",
      "ALTER"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is TRUNCATE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 169,
    "question": "Which database integrity constraint ensures values in one table correspond to values in another?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE",
      "CHECK"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is FOREIGN KEY",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 170,
    "question": "Which SQL feature allows storing a query inside another query?",
    "options": [
      "Nested Query",
      "Correlated Subquery",
      "Stored Procedure",
      "View"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Nested Query",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 171,
    "question": "Which SQL statement is used to define a new table in a database?",
    "options": [
      "CREATE TABLE",
      "ALTER TABLE",
      "INSERT INTO",
      "SELECT"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CREATE TABLE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 172,
    "question": "Which consistency model ensures that all users see the same data at the same time?",
    "options": [
      "Weak Consistency",
      "Eventual Consistency",
      "Strong Consistency",
      "Causal Consistency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Strong Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 173,
    "question": "Which SQL command removes specific rows from a table based on a condition?",
    "options": [
      "DELETE",
      "DROP",
      "TRUNCATE",
      "REMOVE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DELETE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 174,
    "question": "Which normalization form ensures no multivalued attributes exist in a relation?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 1NF",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 175,
    "question": "Which architectural pattern uses services that communicate through lightweight APIs?",
    "options": [
      "Event-Driven Architecture",
      "Microservices",
      "Monolithic Architecture",
      "Layered Architecture"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Microservices",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 176,
    "question": "Which SQL statement is used to rename a table or column?",
    "options": [
      "ALTER",
      "RENAME",
      "UPDATE",
      "MODIFY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is RENAME",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 177,
    "question": "Which system design metric measures the probability that a system will perform without failure for a given time?",
    "options": [
      "Availability",
      "Reliability",
      "Consistency",
      "Fault Tolerance"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Reliability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 178,
    "question": "Which SQL operator is used to retrieve rows that meet either of two conditions?",
    "options": [
      "AND",
      "OR",
      "BETWEEN",
      "LIKE"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is OR",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 179,
    "question": "Which property of ACID ensures that the database moves from one valid state to another after a transaction?",
    "options": [
      "Atomicity",
      "Consistency",
      "Durability",
      "Isolation"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 180,
    "question": "Which SQL aggregate function counts the number of rows in a table?",
    "options": [
      "COUNT()",
      "SUM()",
      "AVG()",
      "MAX()"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is COUNT()",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 181,
    "question": "Which database design goal ensures that the schema avoids redundancy and anomalies?",
    "options": [
      "Denormalization",
      "Normalization",
      "Sharding",
      "Replication"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Normalization",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 182,
    "question": "Which SQL statement undoes all changes made by a transaction?",
    "options": [
      "ROLLBACK",
      "COMMIT",
      "SAVEPOINT",
      "TRUNCATE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is ROLLBACK",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 183,
    "question": "Which indexing method is most efficient for range queries?",
    "options": [
      "Hash Index",
      "B+ Tree Index",
      "Bitmap Index",
      "Clustered Index"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is B+ Tree Index",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 184,
    "question": "Which CAP theorem tradeoff allows high availability but only eventual consistency?",
    "options": [
      "CA System",
      "AP System",
      "CP System",
      "Strong Consistency System"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is AP System",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 185,
    "question": "Which SQL clause is used to group rows that have the same values in specified columns?",
    "options": [
      "ORDER BY",
      "GROUP BY",
      "HAVING",
      "DISTINCT"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is GROUP BY",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 186,
    "question": "Which database constraint ensures that each row in a table is uniquely identified?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "CHECK",
      "UNIQUE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is PRIMARY KEY",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 187,
    "question": "Which SQL keyword is used to search for a specified pattern in a column?",
    "options": [
      "IN",
      "LIKE",
      "BETWEEN",
      "EXISTS"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is LIKE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 188,
    "question": "Which property of system design ensures that a system can continue operating even after some components fail?",
    "options": [
      "Availability",
      "Fault Tolerance",
      "Reliability",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Fault Tolerance",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 189,
    "question": "Which SQL command is used to permanently save all changes in the current transaction?",
    "options": [
      "COMMIT",
      "SAVEPOINT",
      "ROLLBACK",
      "ALTER"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is COMMIT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 190,
    "question": "Which form of normalization ensures that every non-prime attribute is fully functionally dependent on the primary key?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 2NF",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 191,
    "question": "Which SQL command creates a virtual table based on the result of a query?",
    "options": [
      "VIEW",
      "TRIGGER",
      "PROCEDURE",
      "FUNCTION"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is VIEW",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 192,
    "question": "Which metric measures the time taken to respond to a single request in a system?",
    "options": [
      "Throughput",
      "Latency",
      "Availability",
      "Scalability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Latency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 193,
    "question": "Which SQL command is used to change an existing record in a table?",
    "options": [
      "UPDATE",
      "ALTER",
      "INSERT",
      "DELETE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is UPDATE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 194,
    "question": "Which database backup method copies all data regardless of whether it has changed?",
    "options": [
      "Incremental Backup",
      "Differential Backup",
      "Full Backup",
      "Cold Backup"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Full Backup",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 195,
    "question": "Which system design principle suggests dividing functionality into independent, reusable modules?",
    "options": [
      "Loose Coupling",
      "High Cohesion",
      "Modularity",
      "Encapsulation"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Modularity",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 196,
    "question": "Which SQL function returns the highest value in a column?",
    "options": [
      "MIN()",
      "MAX()",
      "AVG()",
      "COUNT()"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is MAX()",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 197,
    "question": "Which architectural style is recommended for independent deployment and scaling of services?",
    "options": [
      "Monolithic",
      "Microservices",
      "Event-Driven",
      "Client-Server"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Microservices",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 198,
    "question": "Which SQL clause restricts the number of rows returned in a query?",
    "options": [
      "TOP / LIMIT",
      "ORDER BY",
      "DISTINCT",
      "HAVING"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is TOP / LIMIT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 199,
    "question": "Which ACID property ensures that concurrent transactions do not interfere with each other?",
    "options": [
      "Durability",
      "Isolation",
      "Consistency",
      "Atomicity"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Isolation",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 200,
    "question": "Which SQL statement is used to remove a view?",
    "options": [
      "DROP VIEW",
      "DELETE VIEW",
      "TRUNCATE VIEW",
      "ALTER VIEW"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DROP VIEW",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 201,
    "question": "Which consistency pattern allows stale reads but guarantees eventual synchronization of replicas?",
    "options": [
      "Strong Consistency",
      "Eventual Consistency",
      "Weak Consistency",
      "Causal Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Eventual Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 202,
    "question": "Which SQL keyword is used to ensure unique values across a column?",
    "options": [
      "PRIMARY KEY",
      "UNIQUE",
      "CHECK",
      "NOT NULL"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is UNIQUE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 203,
    "question": "Which type of scaling is preferred when horizontal distribution of load across multiple servers is required?",
    "options": [
      "Vertical Scaling",
      "Horizontal Scaling",
      "Partitioning",
      "Replication"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Horizontal Scaling",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 204,
    "question": "Which SQL keyword is used to return only different values from a query result?",
    "options": [
      "UNIQUE",
      "DISTINCT",
      "FILTER",
      "GROUP BY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is DISTINCT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 205,
    "question": "Which database design approach starts with business requirements and creates ER diagrams?",
    "options": [
      "Physical Design",
      "Logical Design",
      "Conceptual Design",
      "Denormalization"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Conceptual Design",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 206,
    "question": "Which SQL command is used to assign a temporary name to a table or column?",
    "options": [
      "ALIAS",
      "AS",
      "RENAME",
      "MODIFY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is AS",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 207,
    "question": "Which transaction isolation level prevents dirty reads but allows non-repeatable reads?",
    "options": [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is READ COMMITTED",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 208,
    "question": "Which SQL constraint ensures that values in a column must satisfy a given condition?",
    "options": [
      "CHECK",
      "PRIMARY KEY",
      "FOREIGN KEY",
      "NOT NULL"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CHECK",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 209,
    "question": "Which system design metric ensures that response time remains predictable under varying load?",
    "options": [
      "Consistency",
      "Scalability",
      "Reliability",
      "Latency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Scalability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 210,
    "question": "Which SQL keyword is used to check the existence of rows in a subquery?",
    "options": [
      "IN",
      "ANY",
      "EXISTS",
      "ALL"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is EXISTS",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 211,
    "question": "Which normalization form ensures that no non-prime attribute depends transitively on the primary key?",
    "options": [
      "2NF",
      "3NF",
      "BCNF",
      "1NF"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 3NF",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 212,
    "question": "Which SQL function calculates the average value of a numeric column?",
    "options": [
      "SUM()",
      "AVG()",
      "COUNT()",
      "MAX()"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is AVG()",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 213,
    "question": "Which system design property ensures that even if one replica fails, another can serve the request?",
    "options": [
      "Fault Tolerance",
      "Consistency",
      "Latency",
      "Durability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Fault Tolerance",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 214,
    "question": "Which SQL operator checks whether a value matches any value in a list?",
    "options": [
      "IN",
      "EXISTS",
      "ANY",
      "BETWEEN"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is IN",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 215,
    "question": "Which backup method copies all changes since the last full backup, regardless of incremental backups?",
    "options": [
      "Differential Backup",
      "Incremental Backup",
      "Full Backup",
      "Hot Backup"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Differential Backup",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 216,
    "question": "Which SQL statement is used to create a named query stored in the database?",
    "options": [
      "VIEW",
      "TRIGGER",
      "STORED PROCEDURE",
      "FUNCTION"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is VIEW",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 217,
    "question": "Which design approach details algorithms, data structures, and class diagrams for components?",
    "options": [
      "High-Level Design (HLD)",
      "Low-Level Design (LLD)",
      "Physical Design",
      "Conceptual Design"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Low-Level Design (LLD)",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 218,
    "question": "Which SQL feature automatically executes code in response to specific table events?",
    "options": [
      "VIEW",
      "TRIGGER",
      "PROCEDURE",
      "INDEX"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is TRIGGER",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 219,
    "question": "Which backup strategy allows data to be backed up without shutting down the database?",
    "options": [
      "Cold Backup",
      "Hot Backup",
      "Incremental Backup",
      "Differential Backup"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Hot Backup",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 220,
    "question": "Which SQL command is used to enforce referential integrity between two tables?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE",
      "CHECK"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is FOREIGN KEY",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 221,
    "question": "Which SQL command is used to add a new column to an existing table?",
    "options": [
      "ALTER TABLE",
      "ADD COLUMN",
      "UPDATE",
      "INSERT"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is ALTER TABLE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 222,
    "question": "Which system design principle ensures changes in one module have minimal impact on others?",
    "options": [
      "Encapsulation",
      "Loose Coupling",
      "Single Responsibility",
      "High Cohesion"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Loose Coupling",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 223,
    "question": "Which SQL function returns the smallest value in a column?",
    "options": [
      "MIN()",
      "MAX()",
      "COUNT()",
      "AVG()"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is MIN()",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 224,
    "question": "Which database schema level describes entities and relationships without implementation details?",
    "options": [
      "Logical Schema",
      "Conceptual Schema",
      "Physical Schema",
      "External Schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Conceptual Schema",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 225,
    "question": "Which SQL statement is used to save partial changes and return to it later within a transaction?",
    "options": [
      "SAVEPOINT",
      "ROLLBACK",
      "COMMIT",
      "TRUNCATE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is SAVEPOINT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 226,
    "question": "Which property of a distributed system ensures it can handle sudden spikes in user traffic?",
    "options": [
      "Consistency",
      "Scalability",
      "Reliability",
      "Durability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Scalability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 227,
    "question": "Which SQL keyword is used to combine rows from two or more tables based on a related column?",
    "options": [
      "JOIN",
      "UNION",
      "MERGE",
      "INTERSECT"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is JOIN",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 228,
    "question": "Which type of join returns only the matching rows from both tables?",
    "options": [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is INNER JOIN",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 229,
    "question": "Which property of transactions ensures effects of committed transactions are never lost?",
    "options": [
      "Atomicity",
      "Durability",
      "Isolation",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Durability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 230,
    "question": "Which SQL function returns the total sum of a numeric column?",
    "options": [
      "COUNT()",
      "SUM()",
      "AVG()",
      "MAX()"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is SUM()",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 231,
    "question": "Which consistency model ensures users always read the most recent write?",
    "options": [
      "Weak Consistency",
      "Eventual Consistency",
      "Strong Consistency",
      "Monotonic Read"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Strong Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 232,
    "question": "Which SQL command deletes all rows from a table but allows rollback?",
    "options": [
      "TRUNCATE",
      "DELETE",
      "DROP",
      "ALTER"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is DELETE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 233,
    "question": "Which database schema describes indexes, file structures, and storage allocation?",
    "options": [
      "Logical Schema",
      "Physical Schema",
      "Conceptual Schema",
      "External Schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Physical Schema",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 234,
    "question": "Which SQL clause is used to filter rows before grouping?",
    "options": [
      "HAVING",
      "WHERE",
      "GROUP BY",
      "ORDER BY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is WHERE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 235,
    "question": "Which ACID property ensures that a transaction is all-or-nothing?",
    "options": [
      "Isolation",
      "Atomicity",
      "Durability",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Atomicity",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 236,
    "question": "Which SQL statement modifies the structure of a table?",
    "options": [
      "ALTER TABLE",
      "UPDATE",
      "MODIFY",
      "RENAME"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is ALTER TABLE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 237,
    "question": "Which database backup method takes a full snapshot of the database at a point in time?",
    "options": [
      "Incremental Backup",
      "Full Backup",
      "Differential Backup",
      "Hot Backup"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Full Backup",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 238,
    "question": "Which SQL clause restricts results returned to only those satisfying a condition?",
    "options": [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "ORDER BY"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is WHERE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 239,
    "question": "Which functional dependency rule allows attributes to be added on both sides without affecting equivalence?",
    "options": [
      "Reflexivity",
      "Augmentation",
      "Transitivity",
      "Union"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Augmentation",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 240,
    "question": "Which SQL command is used to remove a database permanently?",
    "options": [
      "DROP DATABASE",
      "DELETE DATABASE",
      "TRUNCATE DATABASE",
      "REMOVE DATABASE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DROP DATABASE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 241,
    "question": "Which design approach ensures detailed class diagrams, database schemas, and algorithms are created?",
    "options": [
      "High-Level Design",
      "Low-Level Design",
      "Physical Design",
      "Requirement Analysis"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Low-Level Design",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 242,
    "question": "Which SQL operator checks if a value lies within a given range?",
    "options": [
      "BETWEEN",
      "LIKE",
      "IN",
      "EXISTS"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is BETWEEN",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 243,
    "question": "Which system design metric focuses on how quickly the system recovers after a failure?",
    "options": [
      "Fault Tolerance",
      "Availability",
      "Reliability",
      "Recoverability"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Recoverability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 244,
    "question": "Which SQL command removes duplicate rows from a query result?",
    "options": [
      "DISTINCT",
      "UNIQUE",
      "GROUP BY",
      "FILTER"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DISTINCT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 245,
    "question": "Which type of replication allows multiple nodes to accept writes simultaneously?",
    "options": [
      "Master-Slave",
      "Multi-Master",
      "Log Shipping",
      "Sharding"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Multi-Master",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 246,
    "question": "Which SQL command is used to enforce a condition at the time of data insertion?",
    "options": [
      "CHECK",
      "NOT NULL",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CHECK",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 247,
    "question": "Which CAP theorem property ensures the system continues operating despite network partition?",
    "options": [
      "Consistency",
      "Availability",
      "Partition Tolerance",
      "Durability"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Partition Tolerance",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 248,
    "question": "Which SQL keyword is used to check if a subquery returns at least one row?",
    "options": [
      "EXISTS",
      "ANY",
      "ALL",
      "IN"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is EXISTS",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 249,
    "question": "Which ACID property ensures concurrent transactions produce results consistent with serial execution?",
    "options": [
      "Durability",
      "Isolation",
      "Atomicity",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Isolation",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 250,
    "question": "Which SQL command permanently deletes a table structure and its data?",
    "options": [
      "TRUNCATE",
      "DROP",
      "DELETE",
      "REMOVE"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is DROP",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 251,
    "question": "Which architectural pattern uses a single deployable unit for all business logic?",
    "options": [
      "Monolithic",
      "Microservices",
      "Event-Driven",
      "Client-Server"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Monolithic",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 252,
    "question": "Which SQL aggregate function finds the average of a column?",
    "options": [
      "SUM()",
      "AVG()",
      "COUNT()",
      "MAX()"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is AVG()",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 253,
    "question": "Which consistency pattern ensures that once a value is read, it will never return an older value?",
    "options": [
      "Monotonic Read Consistency",
      "Strong Consistency",
      "Eventual Consistency",
      "Weak Consistency"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Monotonic Read Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 254,
    "question": "Which SQL command is used to remove all rows from a table without logging each row deletion?",
    "options": [
      "DELETE",
      "TRUNCATE",
      "DROP",
      "ALTER"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is TRUNCATE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 255,
    "question": "Which normalization form ensures that every determinant is a candidate key?",
    "options": [
      "2NF",
      "3NF",
      "BCNF",
      "1NF"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is BCNF",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 256,
    "question": "Which SQL keyword is used to combine the results of two queries including duplicates?",
    "options": [
      "UNION ALL",
      "JOIN",
      "INTERSECT",
      "UNION"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is UNION ALL",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 257,
    "question": "Which transaction control command sets a marker to roll back part of a transaction?",
    "options": [
      "SAVEPOINT",
      "ROLLBACK",
      "COMMIT",
      "SET TRANSACTION"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is SAVEPOINT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 258,
    "question": "Which SQL command is used to define access rights and privileges?",
    "options": [
      "GRANT",
      "REVOKE",
      "ALTER",
      "UPDATE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is GRANT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 259,
    "question": "Which property of system design ensures the system is easy to update, extend, and fix?",
    "options": [
      "Maintainability",
      "Reliability",
      "Consistency",
      "Scalability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Maintainability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 260,
    "question": "Which SQL statement creates a new database user with specific permissions?",
    "options": [
      "CREATE USER",
      "GRANT USER",
      "ADD USER",
      "ALTER USER"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CREATE USER",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 261,
    "question": "Which type of indexing is particularly efficient for columns with low cardinality?",
    "options": [
      "Bitmap Index",
      "B+ Tree Index",
      "Hash Index",
      "Clustered Index"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Bitmap Index",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 262,
    "question": "Which SQL keyword checks whether a value matches all values returned by a subquery?",
    "options": [
      "EXISTS",
      "ALL",
      "ANY",
      "IN"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is ALL",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 263,
    "question": "Which CAP theorem combination ensures a system remains consistent and available if no partitions occur?",
    "options": [
      "CA",
      "AP",
      "CP",
      "ACID"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CA",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 264,
    "question": "Which SQL keyword is used to rename a column in a query result?",
    "options": [
      "AS",
      "RENAME",
      "ALIAS",
      "MODIFY"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is AS",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 265,
    "question": "Which recovery technique undoes incomplete transactions after a system crash?",
    "options": [
      "Rollback",
      "Rollforward",
      "Checkpointing",
      "Backup Restore"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Rollback",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 266,
    "question": "Which SQL clause restricts grouped results to meet a condition?",
    "options": [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "FILTER"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is HAVING",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 267,
    "question": "Which database design phase involves identifying entities, attributes, and relationships?",
    "options": [
      "Requirement Analysis",
      "Logical Design",
      "Physical Design",
      "Normalization"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Requirement Analysis",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 268,
    "question": "Which SQL operator is used to combine rows returned by two queries and return only matching rows?",
    "options": [
      "INTERSECT",
      "UNION",
      "JOIN",
      "EXCEPT"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is INTERSECT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 269,
    "question": "Which system design characteristic measures the percentage of time a system is operational?",
    "options": [
      "Latency",
      "Throughput",
      "Availability",
      "Reliability"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Availability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 270,
    "question": "Which SQL command is used to permanently revoke privileges from a user?",
    "options": [
      "REMOVE",
      "DROP",
      "REVOKE",
      "DENY"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is REVOKE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 271,
    "question": "Which SQL clause is used to arrange query results in ascending or descending order?",
    "options": [
      "GROUP BY",
      "ORDER BY",
      "HAVING",
      "SORT BY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is ORDER BY",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 272,
    "question": "Which consistency model guarantees that once a write is acknowledged, all future reads will return that value?",
    "options": [
      "Eventual Consistency",
      "Strong Consistency",
      "Causal Consistency",
      "Weak Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Strong Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 273,
    "question": "Which SQL function returns the number of distinct values in a column?",
    "options": [
      "COUNT(DISTINCT ...)",
      "SUM(DISTINCT ...)",
      "UNIQUE()",
      "AVG(DISTINCT ...)"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is COUNT(DISTINCT ...)",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 274,
    "question": "Which architectural style is best when different services are owned by separate teams?",
    "options": [
      "Monolithic",
      "Microservices",
      "Layered",
      "Client-Server"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Microservices",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 275,
    "question": "Which SQL command creates a backup copy of a table’s structure without copying data?",
    "options": [
      "CREATE TABLE ... LIKE",
      "BACKUP TABLE",
      "COPY STRUCTURE",
      "CLONE TABLE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CREATE TABLE ... LIKE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 276,
    "question": "Which property of ACID ensures transactions leave the database in a valid state?",
    "options": [
      "Consistency",
      "Atomicity",
      "Isolation",
      "Durability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 277,
    "question": "Which SQL operator matches a value against multiple possible values?",
    "options": [
      "BETWEEN",
      "LIKE",
      "IN",
      "ANY"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is IN",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 278,
    "question": "Which recovery method uses checkpoints to speed up crash recovery?",
    "options": [
      "Rollback",
      "Rollforward",
      "Checkpointing",
      "Hot Backup"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Checkpointing",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 279,
    "question": "Which SQL keyword is used to return rows that are present in the first query but not in the second?",
    "options": [
      "EXCEPT",
      "INTERSECT",
      "UNION",
      "JOIN"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is EXCEPT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 280,
    "question": "Which architectural pattern handles high-throughput event streams?",
    "options": [
      "Event-Driven",
      "Monolithic",
      "Layered",
      "Client-Server"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Event-Driven",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 281,
    "question": "Which SQL command removes all rows from a table and cannot be rolled back?",
    "options": [
      "DELETE",
      "DROP",
      "TRUNCATE",
      "ALTER"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is TRUNCATE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 282,
    "question": "Which system design property ensures that users experience minimal downtime during failures?",
    "options": [
      "Fault Tolerance",
      "Availability",
      "Reliability",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Availability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 283,
    "question": "Which SQL keyword removes duplicate rows from a result set?",
    "options": [
      "DISTINCT",
      "UNIQUE",
      "FILTER",
      "GROUP BY"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DISTINCT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 284,
    "question": "Which type of normalization eliminates redundancy and ensures no partial dependency?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is 2NF",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 285,
    "question": "Which SQL operator is used to compare a value against every value in a subquery?",
    "options": [
      "ALL",
      "ANY",
      "EXISTS",
      "IN"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is ALL",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 286,
    "question": "Which CAP theorem tradeoff allows consistency and availability but no partition tolerance?",
    "options": [
      "CA",
      "AP",
      "CP",
      "BASE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CA",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 287,
    "question": "Which SQL keyword creates a shortcut name for a table or column?",
    "options": [
      "AS",
      "RENAME",
      "ALIAS",
      "MODIFY"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is AS",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 288,
    "question": "Which database design principle suggests tables should store data about only one entity type?",
    "options": [
      "Entity Integrity",
      "Referential Integrity",
      "Single Responsibility",
      "Atomicity"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Single Responsibility",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 289,
    "question": "Which SQL keyword returns the number of rows matching a condition?",
    "options": [
      "COUNT()",
      "SUM()",
      "AVG()",
      "MIN()"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is COUNT()",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 290,
    "question": "Which architectural pattern organizes code into presentation, business, and data layers?",
    "options": [
      "Layered",
      "Microservices",
      "Monolithic",
      "Event-Driven"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Layered",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 291,
    "question": "Which SQL clause groups rows and applies aggregate functions to them?",
    "options": [
      "HAVING",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is GROUP BY",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 292,
    "question": "Which consistency model guarantees eventual convergence but not immediate synchronization?",
    "options": [
      "Strong Consistency",
      "Eventual Consistency",
      "Causal Consistency",
      "Weak Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Eventual Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 293,
    "question": "Which SQL constraint ensures that a column cannot have NULL values?",
    "options": [
      "PRIMARY KEY",
      "NOT NULL",
      "UNIQUE",
      "CHECK"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is NOT NULL",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 294,
    "question": "Which recovery strategy involves rolling forward using logs after restoring from a backup?",
    "options": [
      "Rollforward",
      "Rollback",
      "Checkpointing",
      "Hot Backup"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Rollforward",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 295,
    "question": "Which SQL clause restricts grouped rows after an aggregate function is applied?",
    "options": [
      "WHERE",
      "HAVING",
      "ORDER BY",
      "FILTER"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is HAVING",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 296,
    "question": "Which property of distributed systems allows dividing a database into smaller, faster parts?",
    "options": [
      "Replication",
      "Sharding",
      "Denormalization",
      "Partition Tolerance"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Sharding",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 297,
    "question": "Which SQL command defines a new database schema?",
    "options": [
      "CREATE SCHEMA",
      "CREATE DATABASE",
      "CREATE TABLE",
      "CREATE INDEX"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CREATE SCHEMA",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 298,
    "question": "Which normalization form ensures there are no transitive dependencies?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is 3NF",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 299,
    "question": "Which SQL keyword is used to eliminate duplicates and show only different values?",
    "options": [
      "UNIQUE",
      "DISTINCT",
      "GROUP BY",
      "FILTER"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is DISTINCT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 300,
    "question": "Which consistency pattern ensures that if one process reads a value, later reads by the same process will not return older values?",
    "options": [
      "Causal Consistency",
      "Monotonic Read",
      "Strong Consistency",
      "Eventual Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Monotonic Read",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 301,
    "question": "Which SQL function calculates the total number of rows including duplicates?",
    "options": [
      "COUNT(*)",
      "COUNT(DISTINCT ...)",
      "SUM()",
      "AVG()"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is COUNT(*)",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 302,
    "question": "Which architectural style uses event brokers to decouple producers and consumers?",
    "options": [
      "Event-Driven",
      "Layered",
      "Monolithic",
      "Microservices"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Event-Driven",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 303,
    "question": "Which SQL command removes an index from a table?",
    "options": [
      "DROP INDEX",
      "DELETE INDEX",
      "TRUNCATE INDEX",
      "ALTER INDEX"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DROP INDEX",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 304,
    "question": "Which system design property ensures that the system delivers consistent performance as demand increases?",
    "options": [
      "Scalability",
      "Reliability",
      "Consistency",
      "Availability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Scalability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 305,
    "question": "Which SQL keyword allows a query to check if a value is greater or smaller than any returned by a subquery?",
    "options": [
      "IN",
      "ANY",
      "ALL",
      "EXISTS"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is ANY",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 306,
    "question": "Which backup method copies only the data changed since the last backup of any type?",
    "options": [
      "Differential Backup",
      "Incremental Backup",
      "Full Backup",
      "Cold Backup"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Incremental Backup",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 307,
    "question": "Which SQL clause is used to restrict the number of rows returned in a result?",
    "options": [
      "LIMIT / TOP",
      "OFFSET",
      "ROWNUM",
      "FETCH"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is LIMIT / TOP",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 308,
    "question": "Which design phase ensures data models meet business requirements before physical design?",
    "options": [
      "Logical Design",
      "Physical Design",
      "Conceptual Design",
      "Requirement Analysis"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Logical Design",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 309,
    "question": "Which SQL command defines rules that execute automatically in response to data modifications?",
    "options": [
      "TRIGGER",
      "VIEW",
      "PROCEDURE",
      "FUNCTION"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is TRIGGER",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 310,
    "question": "Which system design property ensures the system continues operating correctly even during component failures?",
    "options": [
      "Fault Tolerance",
      "Durability",
      "Consistency",
      "Availability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Fault Tolerance",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 311,
    "question": "Which SQL aggregate function returns the largest value in a column?",
    "options": [
      "MIN()",
      "MAX()",
      "AVG()",
      "SUM()"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is MAX()",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 312,
    "question": "Which normalization form ensures elimination of redundancy by ensuring each table describes one topic?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is 1NF",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 313,
    "question": "Which SQL command is used to combine results of two queries and include duplicates?",
    "options": [
      "UNION ALL",
      "UNION",
      "INTERSECT",
      "JOIN"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is UNION ALL",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 314,
    "question": "Which consistency model ensures causally related operations are seen in the same order by all processes?",
    "options": [
      "Causal Consistency",
      "Eventual Consistency",
      "Strong Consistency",
      "Weak Consistency"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Causal Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 315,
    "question": "Which SQL statement removes all records from a table and resets identity values?",
    "options": [
      "DELETE",
      "DROP",
      "TRUNCATE",
      "ALTER"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is TRUNCATE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 316,
    "question": "Which CAP theorem combination ensures availability and partition tolerance but sacrifices consistency?",
    "options": [
      "CA",
      "AP",
      "CP",
      "ACID"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is AP",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 317,
    "question": "Which SQL command creates a stored subroutine that can be executed on demand?",
    "options": [
      "PROCEDURE",
      "TRIGGER",
      "VIEW",
      "FUNCTION"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is PROCEDURE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 318,
    "question": "Which design principle emphasizes making code simple, readable, and easy to maintain?",
    "options": [
      "Clean Code",
      "Scalability",
      "Modularization",
      "Encapsulation"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Clean Code",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 319,
    "question": "Which SQL keyword is used to merge results of two queries and remove duplicates?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "EXCEPT"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is UNION",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 320,
    "question": "Which property of ACID ensures multiple transactions executed together maintain database correctness?",
    "options": [
      "Isolation",
      "Durability",
      "Consistency",
      "Atomicity"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 321,
    "question": "Which SQL command removes a database user from the system?",
    "options": [
      "DROP USER",
      "DELETE USER",
      "REMOVE USER",
      "REVOKE USER"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DROP USER",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 322,
    "question": "Which architectural pattern ensures components communicate only via events, not direct calls?",
    "options": [
      "Event-Driven",
      "Layered",
      "Monolithic",
      "Microservices"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Event-Driven",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 323,
    "question": "Which SQL keyword is used to create an index on one or more columns?",
    "options": [
      "CREATE INDEX",
      "ALTER INDEX",
      "ADD INDEX",
      "INDEX ON"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CREATE INDEX",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 324,
    "question": "Which property of ACID ensures partial transactions are not saved in the database?",
    "options": [
      "Atomicity",
      "Isolation",
      "Consistency",
      "Durability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Atomicity",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 325,
    "question": "Which SQL statement is used to copy data from one table to another?",
    "options": [
      "INSERT INTO ... SELECT",
      "COPY",
      "CLONE",
      "MERGE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is INSERT INTO ... SELECT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 326,
    "question": "Which consistency model provides guarantees only within a single user session?",
    "options": [
      "Causal Consistency",
      "Session Consistency",
      "Strong Consistency",
      "Eventual Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Session Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 327,
    "question": "Which SQL function returns the rounded average value of a column?",
    "options": [
      "AVG()",
      "ROUND(AVG())",
      "CEIL(AVG())",
      "FLOOR(AVG())"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is ROUND(AVG())",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 328,
    "question": "Which architectural pattern is simple to deploy but difficult to scale independently?",
    "options": [
      "Monolithic",
      "Microservices",
      "Event-Driven",
      "Layered"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Monolithic",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 329,
    "question": "Which SQL statement is used to remove a specific column from a table?",
    "options": [
      "ALTER TABLE ... DROP COLUMN",
      "DELETE COLUMN",
      "REMOVE COLUMN",
      "DROP FIELD"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is ALTER TABLE ... DROP COLUMN",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 330,
    "question": "Which system design metric focuses on how many requests a system can process per second?",
    "options": [
      "Latency",
      "Throughput",
      "Availability",
      "Scalability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Throughput",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 331,
    "question": "Which SQL clause is used to combine results of two queries and include only distinct rows?",
    "options": [
      "UNION",
      "UNION ALL",
      "INTERSECT",
      "EXCEPT"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is UNION",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 332,
    "question": "Which design phase identifies what the system must achieve without detailing how?",
    "options": [
      "Requirement Analysis",
      "Logical Design",
      "Physical Design",
      "Low-Level Design"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Requirement Analysis",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 333,
    "question": "Which SQL keyword creates a temporary table available only for the current session?",
    "options": [
      "TEMP TABLE",
      "CREATE TEMPORARY TABLE",
      "SESSION TABLE",
      "CREATE TABLE TEMP"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is CREATE TEMPORARY TABLE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 334,
    "question": "Which type of replication improves read performance by distributing copies across multiple servers?",
    "options": [
      "Master-Slave",
      "Multi-Master",
      "Synchronous",
      "Asynchronous"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Master-Slave",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 335,
    "question": "Which SQL command is used to enforce referential integrity automatically?",
    "options": [
      "FOREIGN KEY",
      "PRIMARY KEY",
      "CHECK",
      "UNIQUE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is FOREIGN KEY",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 336,
    "question": "Which architectural pattern processes events asynchronously for scalability?",
    "options": [
      "Event-Driven",
      "Monolithic",
      "Microservices",
      "Layered"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Event-Driven",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 337,
    "question": "Which SQL command deletes a stored procedure from the database?",
    "options": [
      "DROP PROCEDURE",
      "DELETE PROCEDURE",
      "REMOVE PROCEDURE",
      "ALTER PROCEDURE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DROP PROCEDURE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 338,
    "question": "Which consistency pattern ensures that if one process sees an update, all future processes will also see it?",
    "options": [
      "Monotonic Read",
      "Strong Consistency",
      "Eventual Consistency",
      "Causal Consistency"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Monotonic Read",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 339,
    "question": "Which SQL statement is used to create a named group of SQL statements that can be reused?",
    "options": [
      "CREATE PROCEDURE",
      "CREATE FUNCTION",
      "CREATE VIEW",
      "CREATE TRIGGER"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CREATE PROCEDURE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 340,
    "question": "Which property of database design prevents inserting records without matching references?",
    "options": [
      "Entity Integrity",
      "Referential Integrity",
      "Normalization",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Referential Integrity",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 341,
    "question": "Which SQL keyword is used to combine query results and include only rows present in both queries?",
    "options": [
      "INTERSECT",
      "UNION",
      "EXCEPT",
      "UNION ALL"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is INTERSECT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 342,
    "question": "Which system design property ensures that a system can handle sudden increases in workload?",
    "options": [
      "Consistency",
      "Scalability",
      "Availability",
      "Durability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Scalability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 343,
    "question": "Which SQL keyword restricts rows in a query result based on a condition?",
    "options": [
      "WHERE",
      "HAVING",
      "FILTER",
      "CONSTRAINT"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is WHERE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 344,
    "question": "Which design phase converts logical schema into actual implementation details?",
    "options": [
      "Physical Design",
      "Logical Design",
      "Requirement Analysis",
      "Conceptual Design"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Physical Design",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 345,
    "question": "Which SQL command grants privileges to a user?",
    "options": [
      "GRANT",
      "REVOKE",
      "AUTHORIZE",
      "ALLOW"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is GRANT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 346,
    "question": "Which CAP theorem property ensures the system provides the same data to all clients?",
    "options": [
      "Consistency",
      "Availability",
      "Partition Tolerance",
      "Durability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 347,
    "question": "Which SQL keyword is used to return rows from the first query not found in the second?",
    "options": [
      "EXCEPT",
      "UNION",
      "INTERSECT",
      "JOIN"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is EXCEPT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 348,
    "question": "Which architectural pattern is used when services need to scale independently?",
    "options": [
      "Microservices",
      "Monolithic",
      "Event-Driven",
      "Layered"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Microservices",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 349,
    "question": "Which SQL command creates a reusable compiled query stored in the database?",
    "options": [
      "STORED PROCEDURE",
      "FUNCTION",
      "TRIGGER",
      "VIEW"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is STORED PROCEDURE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 350,
    "question": "Which system design metric measures the likelihood of uninterrupted service over time?",
    "options": [
      "Reliability",
      "Availability",
      "Latency",
      "Throughput"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Reliability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 351,
    "question": "Which SQL command removes all privileges previously granted to a user?",
    "options": [
      "REVOKE",
      "DROP",
      "DENY",
      "REMOVE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is REVOKE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 352,
    "question": "Which consistency pattern allows stale data but guarantees it will eventually synchronize?",
    "options": [
      "Weak Consistency",
      "Eventual Consistency",
      "Strong Consistency",
      "Causal Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Eventual Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 353,
    "question": "Which SQL keyword removes a constraint from a table?",
    "options": [
      "ALTER TABLE ... DROP CONSTRAINT",
      "DELETE CONSTRAINT",
      "REMOVE CONSTRAINT",
      "DROP KEY"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is ALTER TABLE ... DROP CONSTRAINT",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 354,
    "question": "Which system design principle ensures developers integrate changes frequently with automated testing?",
    "options": [
      "CI/CD",
      "Loose Coupling",
      "Fault Tolerance",
      "Reliability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CI/CD",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 355,
    "question": "Which SQL command deletes a function from the database?",
    "options": [
      "DROP FUNCTION",
      "DELETE FUNCTION",
      "REMOVE FUNCTION",
      "ALTER FUNCTION"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DROP FUNCTION",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 356,
    "question": "Which database design process ensures that data redundancy and anomalies are minimized?",
    "options": [
      "Denormalization",
      "Normalization",
      "Partitioning",
      "Replication"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Normalization",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 357,
    "question": "Which SQL clause filters rows after grouping?",
    "options": [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "ORDER BY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is HAVING",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 358,
    "question": "Which ACID property ensures completed transactions persist even if the system crashes?",
    "options": [
      "Atomicity",
      "Consistency",
      "Durability",
      "Isolation"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Durability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 359,
    "question": "Which SQL command is used to modify the definition of an existing view?",
    "options": [
      "ALTER VIEW",
      "UPDATE VIEW",
      "MODIFY VIEW",
      "CHANGE VIEW"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is ALTER VIEW",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 360,
    "question": "Which system design metric measures how fast the system recovers after downtime?",
    "options": [
      "Recoverability",
      "Availability",
      "Reliability",
      "Latency"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Recoverability",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 361,
    "question": "Which SQL statement permanently deletes a database?",
    "options": [
      "DROP DATABASE",
      "DELETE DATABASE",
      "REMOVE DATABASE",
      "TRUNCATE DATABASE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is DROP DATABASE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 362,
    "question": "Which architectural style is easiest for small teams but becomes harder to manage as the codebase grows?",
    "options": [
      "Monolithic",
      "Microservices",
      "Layered",
      "Event-Driven"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Monolithic",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 363,
    "question": "Which SQL constraint ensures that values in a column are unique and not NULL?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE",
      "CHECK"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is PRIMARY KEY",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 364,
    "question": "Which system design principle reduces dependency between services for easier scaling?",
    "options": [
      "Loose Coupling",
      "High Cohesion",
      "Encapsulation",
      "Normalization"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Loose Coupling",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 365,
    "question": "Which SQL keyword is used to create a database?",
    "options": [
      "CREATE DATABASE",
      "NEW DATABASE",
      "INIT DATABASE",
      "ADD DATABASE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CREATE DATABASE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 366,
    "question": "Which consistency pattern ensures operations that are causally related are observed in order?",
    "options": [
      "Strong Consistency",
      "Causal Consistency",
      "Eventual Consistency",
      "Weak Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Causal Consistency",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 367,
    "question": "Which SQL keyword is used to delete rows quickly without logging each deletion?",
    "options": [
      "DELETE",
      "TRUNCATE",
      "DROP",
      "REMOVE"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is TRUNCATE",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 368,
    "question": "Which system design property ensures changes can be deployed automatically to production with confidence?",
    "options": [
      "Fault Tolerance",
      "CI/CD",
      "Scalability",
      "Reliability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is CI/CD",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 369,
    "question": "Which SQL command defines a reusable computation that returns a single value?",
    "options": [
      "FUNCTION",
      "PROCEDURE",
      "TRIGGER",
      "VIEW"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is FUNCTION",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 370,
    "question": "Which architectural style is best suited for systems requiring real-time event notifications?",
    "options": [
      "Event-Driven",
      "Monolithic",
      "Layered",
      "Client-Server"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Event-Driven",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 371,
    "question": "EduSphere plans to replace scattered CSV/Excel files for course enrollments. The CTO wants a system that supports structured storage, efficient queries, and controlled updates. What best describes a **database** in this context?",
    "options": [
      "A GUI toolkit for building dashboards",
      "A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates",
      "A compressed archive of CSV files on a file server",
      "A background service for sending emails"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 372,
    "question": "RideGo plans to replace scattered CSV/Excel files for ride bookings. The CTO wants a system that supports structured storage, efficient queries, and controlled updates. What best describes a **database** in this context?",
    "options": [
      "A compressed archive of CSV files on a file server",
      "A background service for sending emails",
      "A GUI toolkit for building dashboards",
      "A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 373,
    "question": "PayZ plans to replace scattered CSV/Excel files for payments & refunds. The CTO wants a system that supports structured storage, efficient queries, and controlled updates. What best describes a **database** in this context?",
    "options": [
      "A background service for sending emails",
      "A compressed archive of CSV files on a file server",
      "A GUI toolkit for building dashboards",
      "A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 374,
    "question": "RideGo plans to replace scattered CSV/Excel files for ride bookings. The CTO wants a system that supports structured storage, efficient queries, and controlled updates. What best describes a **database** in this context?",
    "options": [
      "A GUI toolkit for building dashboards",
      "A compressed archive of CSV files on a file server",
      "A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates",
      "A background service for sending emails"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 375,
    "question": "Streamly plans to replace scattered CSV/Excel files for video streams & subscriptions. The CTO wants a system that supports structured storage, efficient queries, and controlled updates. What best describes a **database** in this context?",
    "options": [
      "A background service for sending emails",
      "A GUI toolkit for building dashboards",
      "A compressed archive of CSV files on a file server",
      "A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 376,
    "question": "ShopKart plans to replace scattered CSV/Excel files for e‑commerce orders. The CTO wants a system that supports structured storage, efficient queries, and controlled updates. What best describes a **database** in this context?",
    "options": [
      "A GUI toolkit for building dashboards",
      "A background service for sending emails",
      "A compressed archive of CSV files on a file server",
      "A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS enabling efficient storage, retrieval, and updates",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 377,
    "question": "In MedLogix, patient records require handling concurrent writes and crash recovery. Which **database characteristic** directly addresses this?",
    "options": [
      "Cron-based CSV exports",
      "Client-side caching only",
      "Static HTML rendering",
      "ACID properties and transaction logging"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is ACID properties and transaction logging",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 378,
    "question": "In PayZ, payments & refunds require handling schema evolution over time. Which **database characteristic** directly addresses this?",
    "options": [
      "Cron-based CSV exports",
      "Static HTML rendering",
      "data independence between logical and physical layers",
      "Client-side caching only"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is data independence between logical and physical layers",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 379,
    "question": "In EduSphere, course enrollments require handling controlling access to sensitive fields. Which **database characteristic** directly addresses this?",
    "options": [
      "Client-side caching only",
      "Cron-based CSV exports",
      "Static HTML rendering",
      "access control and authorization"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is access control and authorization",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 380,
    "question": "In TripNest, hotel & flight bookings require handling ensuring integrity constraints are enforced. Which **database characteristic** directly addresses this?",
    "options": [
      "integrity enforcement via constraints & triggers",
      "Static HTML rendering",
      "Client-side caching only",
      "Cron-based CSV exports"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is integrity enforcement via constraints & triggers",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 381,
    "question": "In TripNest, hotel & flight bookings require handling query optimization for large tables. Which **database characteristic** directly addresses this?",
    "options": [
      "Cron-based CSV exports",
      "cost‑based optimization and indexes",
      "Client-side caching only",
      "Static HTML rendering"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is cost‑based optimization and indexes",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 382,
    "question": "In Foodly, food delivery orders require handling reliable backup and restore. Which **database characteristic** directly addresses this?",
    "options": [
      "Static HTML rendering",
      "Cron-based CSV exports",
      "backup/restore and point‑in‑time recovery",
      "Client-side caching only"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is backup/restore and point‑in‑time recovery",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 383,
    "question": "PayZ must store payments & refunds with a requirement focused on complex joins across normalized entities (orders, customers, items). Which **data model** best fits this workload?",
    "options": [
      "Key‑value model",
      "Graph model",
      "Time‑series model",
      "Relational model"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Relational model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 384,
    "question": "Foodly must store food delivery orders with a requirement focused on flexible, nested records with varying attributes per record. Which **data model** best fits this workload?",
    "options": [
      "Relational model",
      "Key‑value model",
      "Graph model",
      "Document model"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Document model",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 385,
    "question": "EduSphere must store course enrollments with a requirement focused on simple session tokens with O(1) lookup. Which **data model** best fits this workload?",
    "options": [
      "Time‑series model",
      "Wide‑column (column‑family) model",
      "Key‑value model",
      "Graph model"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Key‑value model",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 386,
    "question": "MedLogix must store patient records with a requirement focused on highly connected data like followers/mentions/paths. Which **data model** best fits this workload?",
    "options": [
      "Graph model",
      "Relational model",
      "Time‑series model",
      "Key‑value model"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Graph model",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 387,
    "question": "EduSphere must store course enrollments with a requirement focused on massive sparse tables and column families for analytics. Which **data model** best fits this workload?",
    "options": [
      "Graph model",
      "Key‑value model",
      "Relational model",
      "Wide‑column (column‑family) model"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Wide‑column (column‑family) model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 388,
    "question": "Streamly must store video streams & subscriptions with a requirement focused on metrics with time‑based retention and rollups. Which **data model** best fits this workload?",
    "options": [
      "Key‑value model",
      "Document model",
      "Time‑series model",
      "Graph model"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Time‑series model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 389,
    "question": "HomeIoT must store device telemetry with a requirement focused on complex joins across normalized entities (orders, customers, items). Which **data model** best fits this workload?",
    "options": [
      "Relational model",
      "Graph model",
      "Wide‑column (column‑family) model",
      "Key‑value model"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Relational model",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 390,
    "question": "NewsPulse must store article publishing with a requirement focused on flexible, nested records with varying attributes per record. Which **data model** best fits this workload?",
    "options": [
      "Graph model",
      "Time‑series model",
      "Document model",
      "Key‑value model"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Document model",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 391,
    "question": "Foodly must store food delivery orders with a requirement focused on simple session tokens with O(1) lookup. Which **data model** best fits this workload?",
    "options": [
      "Key‑value model",
      "Time‑series model",
      "Relational model",
      "Document model"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Key‑value model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 392,
    "question": "ShopKart must store e‑commerce orders with a requirement focused on highly connected data like followers/mentions/paths. Which **data model** best fits this workload?",
    "options": [
      "Document model",
      "Key‑value model",
      "Graph model",
      "Wide‑column (column‑family) model"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Graph model",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 393,
    "question": "HomeIoT must store device telemetry with a requirement focused on massive sparse tables and column families for analytics. Which **data model** best fits this workload?",
    "options": [
      "Time‑series model",
      "Graph model",
      "Wide‑column (column‑family) model",
      "Relational model"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Wide‑column (column‑family) model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 394,
    "question": "RideGo must store ride bookings with a requirement focused on metrics with time‑based retention and rollups. Which **data model** best fits this workload?",
    "options": [
      "Document model",
      "Graph model",
      "Relational model",
      "Time‑series model"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Time‑series model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 395,
    "question": "After stakeholder sign‑off, TripNest maps entities into tables/columns with keys and constraints, independent of storage engine specifics. Which **schema level** is this?",
    "options": [
      "Physical schema (storage, indexes, partitions)",
      "Network topology diagram",
      "Conceptual schema (pure business domain view)",
      "Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 396,
    "question": "After stakeholder sign‑off, RideGo maps entities into tables/columns with keys and constraints, independent of storage engine specifics. Which **schema level** is this?",
    "options": [
      "Physical schema (storage, indexes, partitions)",
      "Conceptual schema (pure business domain view)",
      "Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
      "Network topology diagram"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 397,
    "question": "After stakeholder sign‑off, EduSphere maps entities into tables/columns with keys and constraints, independent of storage engine specifics. Which **schema level** is this?",
    "options": [
      "Conceptual schema (pure business domain view)",
      "Physical schema (storage, indexes, partitions)",
      "Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
      "Network topology diagram"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 398,
    "question": "After stakeholder sign‑off, HomeIoT maps entities into tables/columns with keys and constraints, independent of storage engine specifics. Which **schema level** is this?",
    "options": [
      "Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
      "Physical schema (storage, indexes, partitions)",
      "Conceptual schema (pure business domain view)",
      "Network topology diagram"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 399,
    "question": "After stakeholder sign‑off, MedLogix maps entities into tables/columns with keys and constraints, independent of storage engine specifics. Which **schema level** is this?",
    "options": [
      "Network topology diagram",
      "Conceptual schema (pure business domain view)",
      "Physical schema (storage, indexes, partitions)",
      "Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 400,
    "question": "After stakeholder sign‑off, MedLogix maps entities into tables/columns with keys and constraints, independent of storage engine specifics. Which **schema level** is this?",
    "options": [
      "Network topology diagram",
      "Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
      "Physical schema (storage, indexes, partitions)",
      "Conceptual schema (pure business domain view)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 401,
    "question": "After stakeholder sign‑off, Streamly maps entities into tables/columns with keys and constraints, independent of storage engine specifics. Which **schema level** is this?",
    "options": [
      "Conceptual schema (pure business domain view)",
      "Network topology diagram",
      "Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
      "Physical schema (storage, indexes, partitions)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 402,
    "question": "After stakeholder sign‑off, PayZ maps entities into tables/columns with keys and constraints, independent of storage engine specifics. Which **schema level** is this?",
    "options": [
      "Network topology diagram",
      "Conceptual schema (pure business domain view)",
      "Physical schema (storage, indexes, partitions)",
      "Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Logical schema (tables/columns, keys, constraints; DB‑agnostic structure)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 403,
    "question": "While starting PayZ's payments & refunds revamp, architects need a technology‑agnostic view of entities and relationships to align with stakeholders. Which **schema level** is this?",
    "options": [
      "Physical schema (partitions, indexes, file groups)",
      "Conceptual schema (business view: entities/relationships, tech‑agnostic)",
      "UI wireframes for the web app",
      "Logical schema (tables, keys, constraints)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Conceptual schema (business view: entities/relationships, tech‑agnostic)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 404,
    "question": "While starting PayZ's payments & refunds revamp, architects need a technology‑agnostic view of entities and relationships to align with stakeholders. Which **schema level** is this?",
    "options": [
      "Logical schema (tables, keys, constraints)",
      "Conceptual schema (business view: entities/relationships, tech‑agnostic)",
      "UI wireframes for the web app",
      "Physical schema (partitions, indexes, file groups)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Conceptual schema (business view: entities/relationships, tech‑agnostic)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 405,
    "question": "While starting TripNest's hotel & flight bookings revamp, architects need a technology‑agnostic view of entities and relationships to align with stakeholders. Which **schema level** is this?",
    "options": [
      "Physical schema (partitions, indexes, file groups)",
      "UI wireframes for the web app",
      "Conceptual schema (business view: entities/relationships, tech‑agnostic)",
      "Logical schema (tables, keys, constraints)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Conceptual schema (business view: entities/relationships, tech‑agnostic)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 406,
    "question": "While starting Streamly's video streams & subscriptions revamp, architects need a technology‑agnostic view of entities and relationships to align with stakeholders. Which **schema level** is this?",
    "options": [
      "Physical schema (partitions, indexes, file groups)",
      "Conceptual schema (business view: entities/relationships, tech‑agnostic)",
      "Logical schema (tables, keys, constraints)",
      "UI wireframes for the web app"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Conceptual schema (business view: entities/relationships, tech‑agnostic)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 407,
    "question": "While starting ShopKart's e‑commerce orders revamp, architects need a technology‑agnostic view of entities and relationships to align with stakeholders. Which **schema level** is this?",
    "options": [
      "Physical schema (partitions, indexes, file groups)",
      "Conceptual schema (business view: entities/relationships, tech‑agnostic)",
      "Logical schema (tables, keys, constraints)",
      "UI wireframes for the web app"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Conceptual schema (business view: entities/relationships, tech‑agnostic)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 408,
    "question": "While starting TripNest's hotel & flight bookings revamp, architects need a technology‑agnostic view of entities and relationships to align with stakeholders. Which **schema level** is this?",
    "options": [
      "Conceptual schema (business view: entities/relationships, tech‑agnostic)",
      "Logical schema (tables, keys, constraints)",
      "Physical schema (partitions, indexes, file groups)",
      "UI wireframes for the web app"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Conceptual schema (business view: entities/relationships, tech‑agnostic)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 409,
    "question": "While starting EduSphere's course enrollments revamp, architects need a technology‑agnostic view of entities and relationships to align with stakeholders. Which **schema level** is this?",
    "options": [
      "Physical schema (partitions, indexes, file groups)",
      "Logical schema (tables, keys, constraints)",
      "UI wireframes for the web app",
      "Conceptual schema (business view: entities/relationships, tech‑agnostic)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Conceptual schema (business view: entities/relationships, tech‑agnostic)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 410,
    "question": "While starting Streamly's video streams & subscriptions revamp, architects need a technology‑agnostic view of entities and relationships to align with stakeholders. Which **schema level** is this?",
    "options": [
      "Logical schema (tables, keys, constraints)",
      "Conceptual schema (business view: entities/relationships, tech‑agnostic)",
      "Physical schema (partitions, indexes, file groups)",
      "UI wireframes for the web app"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Conceptual schema (business view: entities/relationships, tech‑agnostic)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 411,
    "question": "HomeIoT is planning index selection, partition keys, tablespaces, and storage parameters for device telemetry. Which **schema level** defines these details?",
    "options": [
      "Conceptual schema (entities and relationships)",
      "Physical schema (storage layout, indexes, partitions, file groups)",
      "Use‑case diagrams for the app",
      "Logical schema (tables and constraints)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Physical schema (storage layout, indexes, partitions, file groups)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 412,
    "question": "RideGo is planning index selection, partition keys, tablespaces, and storage parameters for ride bookings. Which **schema level** defines these details?",
    "options": [
      "Logical schema (tables and constraints)",
      "Physical schema (storage layout, indexes, partitions, file groups)",
      "Use‑case diagrams for the app",
      "Conceptual schema (entities and relationships)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Physical schema (storage layout, indexes, partitions, file groups)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 413,
    "question": "NewsPulse is planning index selection, partition keys, tablespaces, and storage parameters for article publishing. Which **schema level** defines these details?",
    "options": [
      "Use‑case diagrams for the app",
      "Conceptual schema (entities and relationships)",
      "Physical schema (storage layout, indexes, partitions, file groups)",
      "Logical schema (tables and constraints)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Physical schema (storage layout, indexes, partitions, file groups)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 414,
    "question": "HomeIoT is planning index selection, partition keys, tablespaces, and storage parameters for device telemetry. Which **schema level** defines these details?",
    "options": [
      "Conceptual schema (entities and relationships)",
      "Use‑case diagrams for the app",
      "Logical schema (tables and constraints)",
      "Physical schema (storage layout, indexes, partitions, file groups)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Physical schema (storage layout, indexes, partitions, file groups)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 415,
    "question": "Foodly is planning index selection, partition keys, tablespaces, and storage parameters for food delivery orders. Which **schema level** defines these details?",
    "options": [
      "Logical schema (tables and constraints)",
      "Conceptual schema (entities and relationships)",
      "Use‑case diagrams for the app",
      "Physical schema (storage layout, indexes, partitions, file groups)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Physical schema (storage layout, indexes, partitions, file groups)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 416,
    "question": "Foodly is planning index selection, partition keys, tablespaces, and storage parameters for food delivery orders. Which **schema level** defines these details?",
    "options": [
      "Physical schema (storage layout, indexes, partitions, file groups)",
      "Conceptual schema (entities and relationships)",
      "Logical schema (tables and constraints)",
      "Use‑case diagrams for the app"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Physical schema (storage layout, indexes, partitions, file groups)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 417,
    "question": "Foodly is planning index selection, partition keys, tablespaces, and storage parameters for food delivery orders. Which **schema level** defines these details?",
    "options": [
      "Use‑case diagrams for the app",
      "Logical schema (tables and constraints)",
      "Physical schema (storage layout, indexes, partitions, file groups)",
      "Conceptual schema (entities and relationships)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Physical schema (storage layout, indexes, partitions, file groups)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 418,
    "question": "RideGo is planning index selection, partition keys, tablespaces, and storage parameters for ride bookings. Which **schema level** defines these details?",
    "options": [
      "Logical schema (tables and constraints)",
      "Physical schema (storage layout, indexes, partitions, file groups)",
      "Use‑case diagrams for the app",
      "Conceptual schema (entities and relationships)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Physical schema (storage layout, indexes, partitions, file groups)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 419,
    "question": "Streamly needs each video streams & subscriptions record to be uniquely identifiable and non‑null (e.g., order_id). Which constraint should be used to enforce this at the table level?",
    "options": [
      "CHECK (value between range)",
      "PRIMARY KEY (unique and NOT NULL)",
      "UNIQUE allowing nulls",
      "FOREIGN KEY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is PRIMARY KEY (unique and NOT NULL)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 420,
    "question": "TripNest needs each hotel & flight bookings record to be uniquely identifiable and non‑null (e.g., order_id). Which constraint should be used to enforce this at the table level?",
    "options": [
      "FOREIGN KEY",
      "CHECK (value between range)",
      "PRIMARY KEY (unique and NOT NULL)",
      "UNIQUE allowing nulls"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is PRIMARY KEY (unique and NOT NULL)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 421,
    "question": "EduSphere needs each course enrollments record to be uniquely identifiable and non‑null (e.g., order_id). Which constraint should be used to enforce this at the table level?",
    "options": [
      "FOREIGN KEY",
      "PRIMARY KEY (unique and NOT NULL)",
      "CHECK (value between range)",
      "UNIQUE allowing nulls"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is PRIMARY KEY (unique and NOT NULL)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 422,
    "question": "PayZ needs each payments & refunds record to be uniquely identifiable and non‑null (e.g., order_id). Which constraint should be used to enforce this at the table level?",
    "options": [
      "CHECK (value between range)",
      "UNIQUE allowing nulls",
      "FOREIGN KEY",
      "PRIMARY KEY (unique and NOT NULL)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is PRIMARY KEY (unique and NOT NULL)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 423,
    "question": "TripNest needs each hotel & flight bookings record to be uniquely identifiable and non‑null (e.g., order_id). Which constraint should be used to enforce this at the table level?",
    "options": [
      "UNIQUE allowing nulls",
      "CHECK (value between range)",
      "PRIMARY KEY (unique and NOT NULL)",
      "FOREIGN KEY"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is PRIMARY KEY (unique and NOT NULL)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 424,
    "question": "HomeIoT needs each device telemetry record to be uniquely identifiable and non‑null (e.g., order_id). Which constraint should be used to enforce this at the table level?",
    "options": [
      "FOREIGN KEY",
      "UNIQUE allowing nulls",
      "CHECK (value between range)",
      "PRIMARY KEY (unique and NOT NULL)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is PRIMARY KEY (unique and NOT NULL)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 425,
    "question": "EduSphere needs each course enrollments record to be uniquely identifiable and non‑null (e.g., order_id). Which constraint should be used to enforce this at the table level?",
    "options": [
      "FOREIGN KEY",
      "CHECK (value between range)",
      "PRIMARY KEY (unique and NOT NULL)",
      "UNIQUE allowing nulls"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is PRIMARY KEY (unique and NOT NULL)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 426,
    "question": "Streamly needs each video streams & subscriptions record to be uniquely identifiable and non‑null (e.g., order_id). Which constraint should be used to enforce this at the table level?",
    "options": [
      "CHECK (value between range)",
      "FOREIGN KEY",
      "UNIQUE allowing nulls",
      "PRIMARY KEY (unique and NOT NULL)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is PRIMARY KEY (unique and NOT NULL)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 427,
    "question": "In PayZ, user accounts have both email and phone uniquely identifying a user. Either could act as the primary key. What are email and phone in key theory?",
    "options": [
      "Surrogate keys only",
      "Foreign keys",
      "Super keys but not candidate keys",
      "Candidate keys (minimal unique sets eligible to be primary)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Candidate keys (minimal unique sets eligible to be primary)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 428,
    "question": "In TripNest, user accounts have both email and phone uniquely identifying a user. Either could act as the primary key. What are email and phone in key theory?",
    "options": [
      "Candidate keys (minimal unique sets eligible to be primary)",
      "Surrogate keys only",
      "Foreign keys",
      "Super keys but not candidate keys"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Candidate keys (minimal unique sets eligible to be primary)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 429,
    "question": "In HomeIoT, user accounts have both email and phone uniquely identifying a user. Either could act as the primary key. What are email and phone in key theory?",
    "options": [
      "Super keys but not candidate keys",
      "Candidate keys (minimal unique sets eligible to be primary)",
      "Foreign keys",
      "Surrogate keys only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Candidate keys (minimal unique sets eligible to be primary)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 430,
    "question": "In PayZ, user accounts have both email and phone uniquely identifying a user. Either could act as the primary key. What are email and phone in key theory?",
    "options": [
      "Super keys but not candidate keys",
      "Candidate keys (minimal unique sets eligible to be primary)",
      "Surrogate keys only",
      "Foreign keys"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Candidate keys (minimal unique sets eligible to be primary)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 431,
    "question": "In HomeIoT, user accounts have both email and phone uniquely identifying a user. Either could act as the primary key. What are email and phone in key theory?",
    "options": [
      "Surrogate keys only",
      "Foreign keys",
      "Super keys but not candidate keys",
      "Candidate keys (minimal unique sets eligible to be primary)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Candidate keys (minimal unique sets eligible to be primary)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 432,
    "question": "In EduSphere, user accounts have both email and phone uniquely identifying a user. Either could act as the primary key. What are email and phone in key theory?",
    "options": [
      "Foreign keys",
      "Candidate keys (minimal unique sets eligible to be primary)",
      "Surrogate keys only",
      "Super keys but not candidate keys"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Candidate keys (minimal unique sets eligible to be primary)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 433,
    "question": "Streamly considers (email + user_id) as a unique identifier although user_id alone is unique. In key terminology, (email + user_id) is what kind of key?",
    "options": [
      "A foreign key",
      "A candidate key",
      "A composite primary key only",
      "A super key (superset of a candidate key)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is A super key (superset of a candidate key)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 434,
    "question": "Foodly considers (email + user_id) as a unique identifier although user_id alone is unique. In key terminology, (email + user_id) is what kind of key?",
    "options": [
      "A foreign key",
      "A super key (superset of a candidate key)",
      "A composite primary key only",
      "A candidate key"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is A super key (superset of a candidate key)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 435,
    "question": "RideGo considers (email + user_id) as a unique identifier although user_id alone is unique. In key terminology, (email + user_id) is what kind of key?",
    "options": [
      "A candidate key",
      "A foreign key",
      "A super key (superset of a candidate key)",
      "A composite primary key only"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is A super key (superset of a candidate key)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 436,
    "question": "Foodly considers (email + user_id) as a unique identifier although user_id alone is unique. In key terminology, (email + user_id) is what kind of key?",
    "options": [
      "A super key (superset of a candidate key)",
      "A foreign key",
      "A candidate key",
      "A composite primary key only"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is A super key (superset of a candidate key)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 437,
    "question": "Streamly considers (email + user_id) as a unique identifier although user_id alone is unique. In key terminology, (email + user_id) is what kind of key?",
    "options": [
      "A composite primary key only",
      "A candidate key",
      "A foreign key",
      "A super key (superset of a candidate key)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is A super key (superset of a candidate key)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 438,
    "question": "ShopKart needs to ensure discount_percent is between 0 and 50 for e‑commerce orders. Which constraint enforces this rule at the column/table level?",
    "options": [
      "FOREIGN KEY",
      "CHECK (discount_percent BETWEEN 0 AND 50)",
      "UNIQUE",
      "PRIMARY KEY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is CHECK (discount_percent BETWEEN 0 AND 50)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 439,
    "question": "NewsPulse needs to ensure discount_percent is between 0 and 50 for article publishing. Which constraint enforces this rule at the column/table level?",
    "options": [
      "UNIQUE",
      "CHECK (discount_percent BETWEEN 0 AND 50)",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is CHECK (discount_percent BETWEEN 0 AND 50)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 440,
    "question": "RideGo needs to ensure discount_percent is between 0 and 50 for ride bookings. Which constraint enforces this rule at the column/table level?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "CHECK (discount_percent BETWEEN 0 AND 50)",
      "UNIQUE"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is CHECK (discount_percent BETWEEN 0 AND 50)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 441,
    "question": "MedLogix needs to ensure discount_percent is between 0 and 50 for patient records. Which constraint enforces this rule at the column/table level?",
    "options": [
      "FOREIGN KEY",
      "CHECK (discount_percent BETWEEN 0 AND 50)",
      "PRIMARY KEY",
      "UNIQUE"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is CHECK (discount_percent BETWEEN 0 AND 50)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 442,
    "question": "NewsPulse needs to ensure discount_percent is between 0 and 50 for article publishing. Which constraint enforces this rule at the column/table level?",
    "options": [
      "PRIMARY KEY",
      "CHECK (discount_percent BETWEEN 0 AND 50)",
      "UNIQUE",
      "FOREIGN KEY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is CHECK (discount_percent BETWEEN 0 AND 50)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 443,
    "question": "In PayZ, usernames must be unique but can be NULL for service accounts. Which constraint suits this requirement in most RDBMS?",
    "options": [
      "UNIQUE constraint (allows NULLs depending on RDBMS semantics)",
      "PRIMARY KEY (disallows NULL)",
      "FOREIGN KEY",
      "CHECK only"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is UNIQUE constraint (allows NULLs depending on RDBMS semantics)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 444,
    "question": "In RideGo, usernames must be unique but can be NULL for service accounts. Which constraint suits this requirement in most RDBMS?",
    "options": [
      "FOREIGN KEY",
      "UNIQUE constraint (allows NULLs depending on RDBMS semantics)",
      "CHECK only",
      "PRIMARY KEY (disallows NULL)"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is UNIQUE constraint (allows NULLs depending on RDBMS semantics)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 445,
    "question": "In MedLogix, usernames must be unique but can be NULL for service accounts. Which constraint suits this requirement in most RDBMS?",
    "options": [
      "FOREIGN KEY",
      "CHECK only",
      "PRIMARY KEY (disallows NULL)",
      "UNIQUE constraint (allows NULLs depending on RDBMS semantics)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is UNIQUE constraint (allows NULLs depending on RDBMS semantics)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 446,
    "question": "In TripNest, usernames must be unique but can be NULL for service accounts. Which constraint suits this requirement in most RDBMS?",
    "options": [
      "FOREIGN KEY",
      "CHECK only",
      "PRIMARY KEY (disallows NULL)",
      "UNIQUE constraint (allows NULLs depending on RDBMS semantics)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is UNIQUE constraint (allows NULLs depending on RDBMS semantics)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 447,
    "question": "In HomeIoT, usernames must be unique but can be NULL for service accounts. Which constraint suits this requirement in most RDBMS?",
    "options": [
      "FOREIGN KEY",
      "UNIQUE constraint (allows NULLs depending on RDBMS semantics)",
      "PRIMARY KEY (disallows NULL)",
      "CHECK only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is UNIQUE constraint (allows NULLs depending on RDBMS semantics)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 448,
    "question": "In ShopKart, usernames must be unique but can be NULL for service accounts. Which constraint suits this requirement in most RDBMS?",
    "options": [
      "CHECK only",
      "FOREIGN KEY",
      "UNIQUE constraint (allows NULLs depending on RDBMS semantics)",
      "PRIMARY KEY (disallows NULL)"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is UNIQUE constraint (allows NULLs depending on RDBMS semantics)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 449,
    "question": "MedLogix requires that every patient records row must have a created_at timestamp populated. Which constraint enforces that the column cannot be left empty?",
    "options": [
      "NOT NULL constraint",
      "FOREIGN KEY",
      "DEFAULT only",
      "UNIQUE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is NOT NULL constraint",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 450,
    "question": "PayZ requires that every payments & refunds row must have a created_at timestamp populated. Which constraint enforces that the column cannot be left empty?",
    "options": [
      "DEFAULT only",
      "NOT NULL constraint",
      "UNIQUE",
      "FOREIGN KEY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is NOT NULL constraint",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 451,
    "question": "MedLogix requires that every patient records row must have a created_at timestamp populated. Which constraint enforces that the column cannot be left empty?",
    "options": [
      "FOREIGN KEY",
      "DEFAULT only",
      "UNIQUE",
      "NOT NULL constraint"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is NOT NULL constraint",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 452,
    "question": "ShopKart requires that every e‑commerce orders row must have a created_at timestamp populated. Which constraint enforces that the column cannot be left empty?",
    "options": [
      "NOT NULL constraint",
      "DEFAULT only",
      "FOREIGN KEY",
      "UNIQUE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is NOT NULL constraint",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 453,
    "question": "Streamly requires that every video streams & subscriptions row must have a created_at timestamp populated. Which constraint enforces that the column cannot be left empty?",
    "options": [
      "DEFAULT only",
      "UNIQUE",
      "FOREIGN KEY",
      "NOT NULL constraint"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is NOT NULL constraint",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 454,
    "question": "HomeIoT needs to prevent orphan rows when parent is deleted for device telemetry. Which referential rule applies?",
    "options": [
      "FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
      "CHECK constraint on child only",
      "PRIMARY KEY on child table",
      "UNIQUE index on random column"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 455,
    "question": "Streamly needs to cascade delete child rows when parent is removed for video streams & subscriptions. Which referential rule applies?",
    "options": [
      "CHECK constraint on child only",
      "UNIQUE index on random column",
      "FOREIGN KEY with ON DELETE CASCADE",
      "PRIMARY KEY on child table"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE CASCADE",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 456,
    "question": "NewsPulse needs to set child ref to NULL when parent deleted for article publishing. Which referential rule applies?",
    "options": [
      "CHECK constraint on child only",
      "PRIMARY KEY on child table",
      "UNIQUE index on random column",
      "FOREIGN KEY with ON DELETE SET NULL"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE SET NULL",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 457,
    "question": "RideGo needs to ensure referenced value exists in parent table for ride bookings. Which referential rule applies?",
    "options": [
      "UNIQUE index on random column",
      "FOREIGN KEY constraint referencing parent key",
      "CHECK constraint on child only",
      "PRIMARY KEY on child table"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is FOREIGN KEY constraint referencing parent key",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 458,
    "question": "ShopKart needs to prevent orphan rows when parent is deleted for e‑commerce orders. Which referential rule applies?",
    "options": [
      "FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
      "CHECK constraint on child only",
      "PRIMARY KEY on child table",
      "UNIQUE index on random column"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 459,
    "question": "TripNest needs to cascade delete child rows when parent is removed for hotel & flight bookings. Which referential rule applies?",
    "options": [
      "UNIQUE index on random column",
      "CHECK constraint on child only",
      "FOREIGN KEY with ON DELETE CASCADE",
      "PRIMARY KEY on child table"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE CASCADE",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 460,
    "question": "Foodly needs to set child ref to NULL when parent deleted for food delivery orders. Which referential rule applies?",
    "options": [
      "PRIMARY KEY on child table",
      "CHECK constraint on child only",
      "FOREIGN KEY with ON DELETE SET NULL",
      "UNIQUE index on random column"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE SET NULL",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 461,
    "question": "EduSphere needs to ensure referenced value exists in parent table for course enrollments. Which referential rule applies?",
    "options": [
      "CHECK constraint on child only",
      "UNIQUE index on random column",
      "FOREIGN KEY constraint referencing parent key",
      "PRIMARY KEY on child table"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is FOREIGN KEY constraint referencing parent key",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 462,
    "question": "MedLogix needs to prevent orphan rows when parent is deleted for patient records. Which referential rule applies?",
    "options": [
      "PRIMARY KEY on child table",
      "UNIQUE index on random column",
      "FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
      "CHECK constraint on child only"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 463,
    "question": "NewsPulse needs to cascade delete child rows when parent is removed for article publishing. Which referential rule applies?",
    "options": [
      "CHECK constraint on child only",
      "FOREIGN KEY with ON DELETE CASCADE",
      "UNIQUE index on random column",
      "PRIMARY KEY on child table"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE CASCADE",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 464,
    "question": "Streamly is kicking off a new video streams & subscriptions platform. What best describes **database design** in this setting?",
    "options": [
      "Scheduling sprints only",
      "Writing UI mockups",
      "Setting up OS firewalls",
      "Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 465,
    "question": "RideGo is kicking off a new ride bookings platform. What best describes **database design** in this setting?",
    "options": [
      "Scheduling sprints only",
      "Setting up OS firewalls",
      "Writing UI mockups",
      "Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 466,
    "question": "MedLogix is kicking off a new patient records platform. What best describes **database design** in this setting?",
    "options": [
      "Setting up OS firewalls",
      "Scheduling sprints only",
      "Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance",
      "Writing UI mockups"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 467,
    "question": "TripNest is kicking off a new hotel & flight bookings platform. What best describes **database design** in this setting?",
    "options": [
      "Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance",
      "Writing UI mockups",
      "Setting up OS firewalls",
      "Scheduling sprints only"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 468,
    "question": "Foodly is kicking off a new food delivery orders platform. What best describes **database design** in this setting?",
    "options": [
      "Scheduling sprints only",
      "Setting up OS firewalls",
      "Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance",
      "Writing UI mockups"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 469,
    "question": "PayZ is kicking off a new payments & refunds platform. What best describes **database design** in this setting?",
    "options": [
      "Writing UI mockups",
      "Setting up OS firewalls",
      "Scheduling sprints only",
      "Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas ensuring integrity and performance",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 470,
    "question": "Which of the following is a **recommended step** to ensure good DB design for RideGo's ride bookings?",
    "options": [
      "Capture requirements & constraints (use cases, data volume, SLAs)",
      "Avoid indexing any column to reduce storage",
      "Defer integrity constraints until after launch",
      "Skip stakeholder validation to save time"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Capture requirements & constraints (use cases, data volume, SLAs)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 471,
    "question": "Which of the following is a **recommended step** to ensure good DB design for RideGo's ride bookings?",
    "options": [
      "Skip stakeholder validation to save time",
      "Create conceptual ER model and validate with stakeholders",
      "Defer integrity constraints until after launch",
      "Avoid indexing any column to reduce storage"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Create conceptual ER model and validate with stakeholders",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 472,
    "question": "Which of the following is a **recommended step** to ensure good DB design for ShopKart's e‑commerce orders?",
    "options": [
      "Derive logical schema with normalization to appropriate normal form",
      "Defer integrity constraints until after launch",
      "Avoid indexing any column to reduce storage",
      "Skip stakeholder validation to save time"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Derive logical schema with normalization to appropriate normal form",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 473,
    "question": "Which of the following is a **recommended step** to ensure good DB design for ShopKart's e‑commerce orders?",
    "options": [
      "Skip stakeholder validation to save time",
      "Avoid indexing any column to reduce storage",
      "Defer integrity constraints until after launch",
      "Define keys, constraints, and relationships"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Define keys, constraints, and relationships",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 474,
    "question": "Which of the following is a **recommended step** to ensure good DB design for PayZ's payments & refunds?",
    "options": [
      "Defer integrity constraints until after launch",
      "Plan indexing strategy for critical queries",
      "Skip stakeholder validation to save time",
      "Avoid indexing any column to reduce storage"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Plan indexing strategy for critical queries",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 475,
    "question": "Which of the following is a **recommended step** to ensure good DB design for MedLogix's patient records?",
    "options": [
      "Defer integrity constraints until after launch",
      "Avoid indexing any column to reduce storage",
      "Evaluate partitioning/archival strategies",
      "Skip stakeholder validation to save time"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Evaluate partitioning/archival strategies",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 476,
    "question": "Which of the following is a **recommended step** to ensure good DB design for HomeIoT's device telemetry?",
    "options": [
      "Avoid indexing any column to reduce storage",
      "Defer integrity constraints until after launch",
      "Skip stakeholder validation to save time",
      "Map to physical schema with storage and security plans"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Map to physical schema with storage and security plans",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 477,
    "question": "Which of the following is a **recommended step** to ensure good DB design for ShopKart's e‑commerce orders?",
    "options": [
      "Avoid indexing any column to reduce storage",
      "Defer integrity constraints until after launch",
      "Prepare migration/seed and testing strategy",
      "Skip stakeholder validation to save time"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Prepare migration/seed and testing strategy",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 478,
    "question": "In the DB design lifecycle for EduSphere's course enrollments, the team interviews stakeholders, defines entities, usage patterns, volumes, and SLAs. Which phase is this?",
    "options": [
      "Logical Design",
      "Requirement Analysis",
      "Deployment/Monitoring",
      "Physical Design"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Requirement Analysis",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 479,
    "question": "In the DB design lifecycle for ShopKart's e‑commerce orders, the team interviews stakeholders, defines entities, usage patterns, volumes, and SLAs. Which phase is this?",
    "options": [
      "Physical Design",
      "Requirement Analysis",
      "Logical Design",
      "Deployment/Monitoring"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Requirement Analysis",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 480,
    "question": "In the DB design lifecycle for Streamly's video streams & subscriptions, the team interviews stakeholders, defines entities, usage patterns, volumes, and SLAs. Which phase is this?",
    "options": [
      "Requirement Analysis",
      "Logical Design",
      "Deployment/Monitoring",
      "Physical Design"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Requirement Analysis",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 481,
    "question": "After requirements, HomeIoT transforms the conceptual model to tables, columns, keys, and constraints, and chooses normalization levels. Which phase is this?",
    "options": [
      "Requirement Analysis",
      "Operations",
      "Physical Design",
      "Logical Design"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Logical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 482,
    "question": "After requirements, MedLogix transforms the conceptual model to tables, columns, keys, and constraints, and chooses normalization levels. Which phase is this?",
    "options": [
      "Physical Design",
      "Requirement Analysis",
      "Logical Design",
      "Operations"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Logical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 483,
    "question": "After requirements, HomeIoT transforms the conceptual model to tables, columns, keys, and constraints, and chooses normalization levels. Which phase is this?",
    "options": [
      "Logical Design",
      "Physical Design",
      "Requirement Analysis",
      "Operations"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Logical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 484,
    "question": "Streamly selects storage parameters, indexing, partitions, materialized views, and backup strategies for video streams & subscriptions. Which phase is this?",
    "options": [
      "Conceptual Modeling",
      "Logical Design",
      "Physical Design",
      "Requirement Analysis"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Physical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 485,
    "question": "Foodly selects storage parameters, indexing, partitions, materialized views, and backup strategies for food delivery orders. Which phase is this?",
    "options": [
      "Conceptual Modeling",
      "Physical Design",
      "Requirement Analysis",
      "Logical Design"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Physical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 486,
    "question": "TripNest selects storage parameters, indexing, partitions, materialized views, and backup strategies for hotel & flight bookings. Which phase is this?",
    "options": [
      "Conceptual Modeling",
      "Requirement Analysis",
      "Physical Design",
      "Logical Design"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Physical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 487,
    "question": "In Streamly's ORM for video streams & subscriptions, engineers face this issue: Entity classes mixing persistence, validation, and business logic. Which OO design principle/pattern best addresses it for database‑backed models?",
    "options": [
      "Global mutable state for convenience",
      "Apply Single Responsibility Principle; separate concerns",
      "Tight coupling of all layers in one class",
      "Disable tests to move faster"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Apply Single Responsibility Principle; separate concerns",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 488,
    "question": "In Foodly's ORM for food delivery orders, engineers face this issue: Frequent schema changes when adding new use‑cases. Which OO design principle/pattern best addresses it for database‑backed models?",
    "options": [
      "Use Open/Closed Principle with extensible mappings or subtype tables",
      "Tight coupling of all layers in one class",
      "Global mutable state for convenience",
      "Disable tests to move faster"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Use Open/Closed Principle with extensible mappings or subtype tables",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 489,
    "question": "In NewsPulse's ORM for article publishing, engineers face this issue: Deep inheritance hierarchies for entities. Which OO design principle/pattern best addresses it for database‑backed models?",
    "options": [
      "Prefer composition over inheritance for evolving attributes",
      "Global mutable state for convenience",
      "Disable tests to move faster",
      "Tight coupling of all layers in one class"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Prefer composition over inheritance for evolving attributes",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 490,
    "question": "In NewsPulse's ORM for article publishing, engineers face this issue: Inconsistent creation of related aggregates. Which OO design principle/pattern best addresses it for database‑backed models?",
    "options": [
      "Disable tests to move faster",
      "Tight coupling of all layers in one class",
      "Use Factory/Builder and enforce invariants in aggregate roots",
      "Global mutable state for convenience"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Use Factory/Builder and enforce invariants in aggregate roots",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 491,
    "question": "NewsPulse needs a controlled system for defining, storing, querying, and updating data. Which option best defines a database?",
    "options": [
      "A structured collection of data managed by a DBMS for efficient storage, retrieval, and update",
      "A group of spreadsheets",
      "A BI dashboard tool",
      "Any CSV folder"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS for efficient storage, retrieval, and update",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 492,
    "question": "ShopKart needs a controlled system for defining, storing, querying, and updating data. Which option best defines a database?",
    "options": [
      "Any CSV folder",
      "A BI dashboard tool",
      "A structured collection of data managed by a DBMS for efficient storage, retrieval, and update",
      "A group of spreadsheets"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS for efficient storage, retrieval, and update",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 493,
    "question": "HomeIoT needs a controlled system for defining, storing, querying, and updating data. Which option best defines a database?",
    "options": [
      "A structured collection of data managed by a DBMS for efficient storage, retrieval, and update",
      "A group of spreadsheets",
      "A BI dashboard tool",
      "Any CSV folder"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS for efficient storage, retrieval, and update",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 494,
    "question": "TripNest needs a controlled system for defining, storing, querying, and updating data. Which option best defines a database?",
    "options": [
      "Any CSV folder",
      "A group of spreadsheets",
      "A BI dashboard tool",
      "A structured collection of data managed by a DBMS for efficient storage, retrieval, and update"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS for efficient storage, retrieval, and update",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 495,
    "question": "MedLogix needs a controlled system for defining, storing, querying, and updating data. Which option best defines a database?",
    "options": [
      "A group of spreadsheets",
      "A BI dashboard tool",
      "A structured collection of data managed by a DBMS for efficient storage, retrieval, and update",
      "Any CSV folder"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS for efficient storage, retrieval, and update",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 496,
    "question": "Foodly needs a controlled system for defining, storing, querying, and updating data. Which option best defines a database?",
    "options": [
      "A BI dashboard tool",
      "Any CSV folder",
      "A group of spreadsheets",
      "A structured collection of data managed by a DBMS for efficient storage, retrieval, and update"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is A structured collection of data managed by a DBMS for efficient storage, retrieval, and update",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 497,
    "question": "Which **DB characteristic** addresses: Concurrent updates safely?",
    "options": [
      "UI validation",
      "CSV exports",
      "Isolation & Concurrency control",
      "Denormalization only"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Isolation & Concurrency control",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 498,
    "question": "Which **DB characteristic** addresses: Apps unaffected by storage changes?",
    "options": [
      "Denormalization only",
      "UI validation",
      "Data independence",
      "CSV exports"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Data independence",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 499,
    "question": "Which **DB characteristic** addresses: Concurrent updates safely?",
    "options": [
      "CSV exports",
      "Isolation & Concurrency control",
      "UI validation",
      "Denormalization only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Isolation & Concurrency control",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 500,
    "question": "Which **DB characteristic** addresses: Apps unaffected by storage changes?",
    "options": [
      "Data independence",
      "CSV exports",
      "UI validation",
      "Denormalization only"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Data independence",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 501,
    "question": "Which **DB characteristic** addresses: Automatic plan selection?",
    "options": [
      "CSV exports",
      "Denormalization only",
      "Cost-based optimizer/indexing",
      "UI validation"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Cost-based optimizer/indexing",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 502,
    "question": "Which **DB characteristic** addresses: Prevent partial updates after crash?",
    "options": [
      "CSV exports",
      "UI validation",
      "Atomicity/Durability (ACID)",
      "Denormalization only"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Atomicity/Durability (ACID)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 503,
    "question": "Which **data model** best fits: Time-stamped metrics?",
    "options": [
      "File-based model",
      "Time-series model",
      "Spreadsheet model",
      "Key-value model"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Time-series model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 504,
    "question": "Which **data model** best fits: Highly connected traversals?",
    "options": [
      "Relational model",
      "File-based model",
      "Spreadsheet model",
      "Graph model"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Graph model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 505,
    "question": "Which **data model** best fits: Strict relationships and joins?",
    "options": [
      "File-based model",
      "Spreadsheet model",
      "Wide-column (column-family) model",
      "Relational model"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Relational model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 506,
    "question": "Which **data model** best fits: Strict relationships and joins?",
    "options": [
      "File-based model",
      "Relational model",
      "Spreadsheet model",
      "Time-series model"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Relational model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 507,
    "question": "Which **data model** best fits: Highly connected traversals?",
    "options": [
      "File-based model",
      "Graph model",
      "Spreadsheet model",
      "Relational model"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Graph model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 508,
    "question": "Which **data model** best fits: Low-latency key lookups?",
    "options": [
      "Spreadsheet model",
      "Relational model",
      "File-based model",
      "Key-value model"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Key-value model",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 509,
    "question": "Which **data model** best fits: Highly connected traversals?",
    "options": [
      "File-based model",
      "Graph model",
      "Spreadsheet model",
      "Relational model"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Graph model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 510,
    "question": "Which **data model** best fits: Highly connected traversals?",
    "options": [
      "Spreadsheet model",
      "Graph model",
      "Relational model",
      "File-based model"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Graph model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 511,
    "question": "Which **data model** best fits: Time-stamped metrics?",
    "options": [
      "Time-series model",
      "File-based model",
      "Wide-column (column-family) model",
      "Spreadsheet model"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Time-series model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 512,
    "question": "Which **data model** best fits: Strict relationships and joins?",
    "options": [
      "Time-series model",
      "File-based model",
      "Relational model",
      "Spreadsheet model"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Relational model",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 513,
    "question": "Which **data model** best fits: Wide, sparse analytics?",
    "options": [
      "Wide-column (column-family) model",
      "Document model",
      "File-based model",
      "Spreadsheet model"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Wide-column (column-family) model",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 514,
    "question": "Which **data model** best fits: Highly connected traversals?",
    "options": [
      "Document model",
      "Graph model",
      "File-based model",
      "Spreadsheet model"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Graph model",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 515,
    "question": "An ER diagram shows **Invoice** and relationships; no column types or indexes. Which schema level is this?",
    "options": [
      "Conceptual schema",
      "Physical schema",
      "Logical schema",
      "External schema"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Conceptual schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 516,
    "question": "An ER diagram shows **Shipment** and relationships; no column types or indexes. Which schema level is this?",
    "options": [
      "Logical schema",
      "External schema",
      "Physical schema",
      "Conceptual schema"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Conceptual schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 517,
    "question": "An ER diagram shows **Order** and relationships; no column types or indexes. Which schema level is this?",
    "options": [
      "External schema",
      "Physical schema",
      "Logical schema",
      "Conceptual schema"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Conceptual schema",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 518,
    "question": "An ER diagram shows **Patient** and relationships; no column types or indexes. Which schema level is this?",
    "options": [
      "Conceptual schema",
      "Physical schema",
      "Logical schema",
      "External schema"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Conceptual schema",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 519,
    "question": "An ER diagram shows **Invoice** and relationships; no column types or indexes. Which schema level is this?",
    "options": [
      "Physical schema",
      "Conceptual schema",
      "Logical schema",
      "External schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Conceptual schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 520,
    "question": "An ER diagram shows **Customer** and relationships; no column types or indexes. Which schema level is this?",
    "options": [
      "External schema",
      "Logical schema",
      "Conceptual schema",
      "Physical schema"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Conceptual schema",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 521,
    "question": "An ER diagram shows **Patient** and relationships; no column types or indexes. Which schema level is this?",
    "options": [
      "Physical schema",
      "Logical schema",
      "External schema",
      "Conceptual schema"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Conceptual schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 522,
    "question": "An ER diagram shows **Product** and relationships; no column types or indexes. Which schema level is this?",
    "options": [
      "Logical schema",
      "Conceptual schema",
      "External schema",
      "Physical schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Conceptual schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 523,
    "question": "Tables/columns/keys/constraints for **Device** are defined (engine-agnostic). Which level is this?",
    "options": [
      "Physical schema",
      "Logical schema",
      "Network schema",
      "Conceptual schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Logical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 524,
    "question": "Tables/columns/keys/constraints for **Shipment** are defined (engine-agnostic). Which level is this?",
    "options": [
      "Conceptual schema",
      "Logical schema",
      "Physical schema",
      "Network schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Logical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 525,
    "question": "Tables/columns/keys/constraints for **Invoice** are defined (engine-agnostic). Which level is this?",
    "options": [
      "Conceptual schema",
      "Network schema",
      "Physical schema",
      "Logical schema"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Logical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 526,
    "question": "Tables/columns/keys/constraints for **Course** are defined (engine-agnostic). Which level is this?",
    "options": [
      "Logical schema",
      "Conceptual schema",
      "Network schema",
      "Physical schema"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Logical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 527,
    "question": "Tables/columns/keys/constraints for **Customer** are defined (engine-agnostic). Which level is this?",
    "options": [
      "Conceptual schema",
      "Physical schema",
      "Network schema",
      "Logical schema"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Logical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 528,
    "question": "Tables/columns/keys/constraints for **Course** are defined (engine-agnostic). Which level is this?",
    "options": [
      "Network schema",
      "Physical schema",
      "Conceptual schema",
      "Logical schema"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Logical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 529,
    "question": "Tables/columns/keys/constraints for **Restaurant** are defined (engine-agnostic). Which level is this?",
    "options": [
      "Physical schema",
      "Logical schema",
      "Network schema",
      "Conceptual schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Logical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 530,
    "question": "Tables/columns/keys/constraints for **Order** are defined (engine-agnostic). Which level is this?",
    "options": [
      "Conceptual schema",
      "Logical schema",
      "Physical schema",
      "Network schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Logical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 531,
    "question": "Indexes, partitions, tablespaces, and filegroups for **Product** are finalized. Which level is this?",
    "options": [
      "Physical schema",
      "Security schema",
      "Conceptual schema",
      "Logical schema"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Physical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 532,
    "question": "Indexes, partitions, tablespaces, and filegroups for **Invoice** are finalized. Which level is this?",
    "options": [
      "Logical schema",
      "Security schema",
      "Physical schema",
      "Conceptual schema"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Physical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 533,
    "question": "Indexes, partitions, tablespaces, and filegroups for **Driver** are finalized. Which level is this?",
    "options": [
      "Physical schema",
      "Conceptual schema",
      "Logical schema",
      "Security schema"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Physical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 534,
    "question": "Indexes, partitions, tablespaces, and filegroups for **Patient** are finalized. Which level is this?",
    "options": [
      "Conceptual schema",
      "Logical schema",
      "Security schema",
      "Physical schema"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Physical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 535,
    "question": "Indexes, partitions, tablespaces, and filegroups for **Shipment** are finalized. Which level is this?",
    "options": [
      "Security schema",
      "Logical schema",
      "Physical schema",
      "Conceptual schema"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Physical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 536,
    "question": "Indexes, partitions, tablespaces, and filegroups for **Customer** are finalized. Which level is this?",
    "options": [
      "Security schema",
      "Physical schema",
      "Logical schema",
      "Conceptual schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Physical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 537,
    "question": "Indexes, partitions, tablespaces, and filegroups for **Invoice** are finalized. Which level is this?",
    "options": [
      "Security schema",
      "Logical schema",
      "Physical schema",
      "Conceptual schema"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Physical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 538,
    "question": "Indexes, partitions, tablespaces, and filegroups for **Device** are finalized. Which level is this?",
    "options": [
      "Security schema",
      "Physical schema",
      "Conceptual schema",
      "Logical schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Physical schema",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 539,
    "question": "Which constraint uniquely identifies a row and disallows NULLs?",
    "options": [
      "UNIQUE",
      "FOREIGN KEY",
      "CHECK",
      "PRIMARY KEY"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is PRIMARY KEY",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 540,
    "question": "Which constraint uniquely identifies a row and disallows NULLs?",
    "options": [
      "UNIQUE",
      "CHECK",
      "FOREIGN KEY",
      "PRIMARY KEY"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is PRIMARY KEY",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 541,
    "question": "Which constraint uniquely identifies a row and disallows NULLs?",
    "options": [
      "PRIMARY KEY",
      "CHECK",
      "UNIQUE",
      "FOREIGN KEY"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is PRIMARY KEY",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 542,
    "question": "Which constraint uniquely identifies a row and disallows NULLs?",
    "options": [
      "FOREIGN KEY",
      "PRIMARY KEY",
      "CHECK",
      "UNIQUE"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is PRIMARY KEY",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 543,
    "question": "Which constraint uniquely identifies a row and disallows NULLs?",
    "options": [
      "PRIMARY KEY",
      "UNIQUE",
      "FOREIGN KEY",
      "CHECK"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is PRIMARY KEY",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 544,
    "question": "Which constraint uniquely identifies a row and disallows NULLs?",
    "options": [
      "CHECK",
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is PRIMARY KEY",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 545,
    "question": "Which constraint uniquely identifies a row and disallows NULLs?",
    "options": [
      "CHECK",
      "FOREIGN KEY",
      "PRIMARY KEY",
      "UNIQUE"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is PRIMARY KEY",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 546,
    "question": "Which constraint uniquely identifies a row and disallows NULLs?",
    "options": [
      "FOREIGN KEY",
      "PRIMARY KEY",
      "UNIQUE",
      "CHECK"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is PRIMARY KEY",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 547,
    "question": "A minimal unique attribute set eligible to be the primary key is called:",
    "options": [
      "Candidate key",
      "Super key",
      "Surrogate key",
      "Foreign key"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Candidate key",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 548,
    "question": "A minimal unique attribute set eligible to be the primary key is called:",
    "options": [
      "Foreign key",
      "Super key",
      "Candidate key",
      "Surrogate key"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Candidate key",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 549,
    "question": "A minimal unique attribute set eligible to be the primary key is called:",
    "options": [
      "Surrogate key",
      "Super key",
      "Candidate key",
      "Foreign key"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Candidate key",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 550,
    "question": "A minimal unique attribute set eligible to be the primary key is called:",
    "options": [
      "Super key",
      "Foreign key",
      "Candidate key",
      "Surrogate key"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Candidate key",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 551,
    "question": "A minimal unique attribute set eligible to be the primary key is called:",
    "options": [
      "Super key",
      "Surrogate key",
      "Foreign key",
      "Candidate key"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Candidate key",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 552,
    "question": "A minimal unique attribute set eligible to be the primary key is called:",
    "options": [
      "Surrogate key",
      "Super key",
      "Foreign key",
      "Candidate key"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Candidate key",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 553,
    "question": "If (id, email) is unique while id alone is unique, (id, email) is a:",
    "options": [
      "Composite primary key by default",
      "Super key",
      "Foreign key",
      "Candidate key"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Super key",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 554,
    "question": "If (id, email) is unique while id alone is unique, (id, email) is a:",
    "options": [
      "Super key",
      "Candidate key",
      "Foreign key",
      "Composite primary key by default"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Super key",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 555,
    "question": "If (id, email) is unique while id alone is unique, (id, email) is a:",
    "options": [
      "Candidate key",
      "Super key",
      "Foreign key",
      "Composite primary key by default"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Super key",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 556,
    "question": "If (id, email) is unique while id alone is unique, (id, email) is a:",
    "options": [
      "Composite primary key by default",
      "Super key",
      "Candidate key",
      "Foreign key"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Super key",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 557,
    "question": "Column `age` must be between 1 and 120. Which constraint enforces this?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE",
      "CHECK (age BETWEEN 1 AND 120)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is CHECK (age BETWEEN 1 AND 120)",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 558,
    "question": "Column `age` must be between 1 and 120. Which constraint enforces this?",
    "options": [
      "UNIQUE",
      "PRIMARY KEY",
      "CHECK (age BETWEEN 1 AND 120)",
      "FOREIGN KEY"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is CHECK (age BETWEEN 1 AND 120)",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 559,
    "question": "Column `age` must be between 1 and 120. Which constraint enforces this?",
    "options": [
      "CHECK (age BETWEEN 1 AND 120)",
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CHECK (age BETWEEN 1 AND 120)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 560,
    "question": "Column `age` must be between 1 and 120. Which constraint enforces this?",
    "options": [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "CHECK (age BETWEEN 1 AND 120)",
      "UNIQUE"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is CHECK (age BETWEEN 1 AND 120)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 561,
    "question": "Which constraint enforces uniqueness but may allow NULLs (DBMS-dependent)?",
    "options": [
      "UNIQUE",
      "DEFAULT",
      "PRIMARY KEY",
      "FOREIGN KEY"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is UNIQUE",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 562,
    "question": "Which constraint enforces uniqueness but may allow NULLs (DBMS-dependent)?",
    "options": [
      "FOREIGN KEY",
      "UNIQUE",
      "PRIMARY KEY",
      "DEFAULT"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is UNIQUE",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 563,
    "question": "Which constraint enforces uniqueness but may allow NULLs (DBMS-dependent)?",
    "options": [
      "DEFAULT",
      "UNIQUE",
      "FOREIGN KEY",
      "PRIMARY KEY"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is UNIQUE",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 564,
    "question": "Which constraint enforces uniqueness but may allow NULLs (DBMS-dependent)?",
    "options": [
      "FOREIGN KEY",
      "PRIMARY KEY",
      "UNIQUE",
      "DEFAULT"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is UNIQUE",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 565,
    "question": "Which constraint enforces uniqueness but may allow NULLs (DBMS-dependent)?",
    "options": [
      "FOREIGN KEY",
      "DEFAULT",
      "UNIQUE",
      "PRIMARY KEY"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is UNIQUE",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 566,
    "question": "Which constraint enforces uniqueness but may allow NULLs (DBMS-dependent)?",
    "options": [
      "DEFAULT",
      "PRIMARY KEY",
      "UNIQUE",
      "FOREIGN KEY"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is UNIQUE",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 567,
    "question": "Which constraint enforces that a column cannot contain missing/unknown values?",
    "options": [
      "CHECK",
      "UNIQUE",
      "FOREIGN KEY",
      "NOT NULL"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is NOT NULL",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 568,
    "question": "Which constraint enforces that a column cannot contain missing/unknown values?",
    "options": [
      "UNIQUE",
      "CHECK",
      "NOT NULL",
      "FOREIGN KEY"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is NOT NULL",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 569,
    "question": "Which constraint enforces that a column cannot contain missing/unknown values?",
    "options": [
      "UNIQUE",
      "CHECK",
      "NOT NULL",
      "FOREIGN KEY"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is NOT NULL",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 570,
    "question": "Which constraint enforces that a column cannot contain missing/unknown values?",
    "options": [
      "CHECK",
      "UNIQUE",
      "FOREIGN KEY",
      "NOT NULL"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is NOT NULL",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 571,
    "question": "Referential integrity rule to **Set child to NULL when parent deleted** is:",
    "options": [
      "PRIMARY KEY on child",
      "FOREIGN KEY with ON DELETE SET NULL",
      "CHECK on child only",
      "UNIQUE on random column"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE SET NULL",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 572,
    "question": "Referential integrity rule to **Delete child rows when parent deleted** is:",
    "options": [
      "PRIMARY KEY on child",
      "FOREIGN KEY with ON DELETE CASCADE",
      "UNIQUE on random column",
      "CHECK on child only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE CASCADE",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 573,
    "question": "Referential integrity rule to **Set child to NULL when parent deleted** is:",
    "options": [
      "PRIMARY KEY on child",
      "FOREIGN KEY with ON DELETE SET NULL",
      "CHECK on child only",
      "UNIQUE on random column"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE SET NULL",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 574,
    "question": "Referential integrity rule to **Ensure child references parent** is:",
    "options": [
      "PRIMARY KEY on child",
      "CHECK on child only",
      "FOREIGN KEY referencing parent key",
      "UNIQUE on random column"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is FOREIGN KEY referencing parent key",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 575,
    "question": "Referential integrity rule to **Prevent parent delete while child exists** is:",
    "options": [
      "UNIQUE on random column",
      "CHECK on child only",
      "PRIMARY KEY on child",
      "FOREIGN KEY with ON DELETE RESTRICT/NO ACTION"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 576,
    "question": "Referential integrity rule to **Prevent parent delete while child exists** is:",
    "options": [
      "UNIQUE on random column",
      "PRIMARY KEY on child",
      "FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
      "CHECK on child only"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 577,
    "question": "Referential integrity rule to **Ensure child references parent** is:",
    "options": [
      "CHECK on child only",
      "FOREIGN KEY referencing parent key",
      "PRIMARY KEY on child",
      "UNIQUE on random column"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is FOREIGN KEY referencing parent key",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 578,
    "question": "Referential integrity rule to **Prevent parent delete while child exists** is:",
    "options": [
      "UNIQUE on random column",
      "PRIMARY KEY on child",
      "FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
      "CHECK on child only"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 579,
    "question": "Referential integrity rule to **Prevent parent delete while child exists** is:",
    "options": [
      "UNIQUE on random column",
      "CHECK on child only",
      "PRIMARY KEY on child",
      "FOREIGN KEY with ON DELETE RESTRICT/NO ACTION"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is FOREIGN KEY with ON DELETE RESTRICT/NO ACTION",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 580,
    "question": "Referential integrity rule to **Ensure child references parent** is:",
    "options": [
      "CHECK on child only",
      "UNIQUE on random column",
      "FOREIGN KEY referencing parent key",
      "PRIMARY KEY on child"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is FOREIGN KEY referencing parent key",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 581,
    "question": "Best exam definition of **database design** is:",
    "options": [
      "Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
      "Writing SQL queries",
      "Drawing UI wireframes",
      "Tuning the OS kernel"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 582,
    "question": "Best exam definition of **database design** is:",
    "options": [
      "Writing SQL queries",
      "Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
      "Tuning the OS kernel",
      "Drawing UI wireframes"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 583,
    "question": "Best exam definition of **database design** is:",
    "options": [
      "Tuning the OS kernel",
      "Drawing UI wireframes",
      "Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
      "Writing SQL queries"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 584,
    "question": "Best exam definition of **database design** is:",
    "options": [
      "Tuning the OS kernel",
      "Drawing UI wireframes",
      "Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
      "Writing SQL queries"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 585,
    "question": "Best exam definition of **database design** is:",
    "options": [
      "Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
      "Drawing UI wireframes",
      "Writing SQL queries",
      "Tuning the OS kernel"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 586,
    "question": "Best exam definition of **database design** is:",
    "options": [
      "Drawing UI wireframes",
      "Writing SQL queries",
      "Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
      "Tuning the OS kernel"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Translating requirements into conceptual, logical, and physical schemas with integrity and performance considerations",
    "topic": "Fundamentals of Database",
    "difficulty": "easy"
  },
  {
    "id": 587,
    "question": "Which is a **recommended** step to ensure good DB design?",
    "options": [
      "Decide partitioning/archival and retention strategy",
      "Skip constraints until after go-live",
      "Avoid indexes to save space",
      "Mix conceptual and physical in one step"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Decide partitioning/archival and retention strategy",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 588,
    "question": "Which is a **recommended** step to ensure good DB design?",
    "options": [
      "Elicit requirements and constraints (entities, volumes, SLAs)",
      "Skip constraints until after go-live",
      "Avoid indexes to save space",
      "Mix conceptual and physical in one step"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Elicit requirements and constraints (entities, volumes, SLAs)",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 589,
    "question": "Which is a **recommended** step to ensure good DB design?",
    "options": [
      "Skip constraints until after go-live",
      "Map logical to physical with storage/security plans",
      "Avoid indexes to save space",
      "Mix conceptual and physical in one step"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Map logical to physical with storage/security plans",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 590,
    "question": "Which is a **recommended** step to ensure good DB design?",
    "options": [
      "Normalize logical schema appropriately",
      "Skip constraints until after go-live",
      "Avoid indexes to save space",
      "Mix conceptual and physical in one step"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Normalize logical schema appropriately",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 591,
    "question": "Which is a **recommended** step to ensure good DB design?",
    "options": [
      "Skip constraints until after go-live",
      "Avoid indexes to save space",
      "Mix conceptual and physical in one step",
      "Define keys, constraints, and relationships"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Define keys, constraints, and relationships",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 592,
    "question": "Which is a **recommended** step to ensure good DB design?",
    "options": [
      "Skip constraints until after go-live",
      "Avoid indexes to save space",
      "Define keys, constraints, and relationships",
      "Mix conceptual and physical in one step"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Define keys, constraints, and relationships",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 593,
    "question": "Which is a **recommended** step to ensure good DB design?",
    "options": [
      "Avoid indexes to save space",
      "Skip constraints until after go-live",
      "Define keys, constraints, and relationships",
      "Mix conceptual and physical in one step"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Define keys, constraints, and relationships",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 594,
    "question": "Which is a **recommended** step to ensure good DB design?",
    "options": [
      "Decide partitioning/archival and retention strategy",
      "Mix conceptual and physical in one step",
      "Avoid indexes to save space",
      "Skip constraints until after go-live"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Decide partitioning/archival and retention strategy",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 595,
    "question": "Phase focused on gathering stakeholders, entities, usage patterns, volumes, and SLAs:",
    "options": [
      "Requirement Analysis",
      "Operations",
      "Physical Design",
      "Logical Design"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Requirement Analysis",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 596,
    "question": "Phase focused on gathering stakeholders, entities, usage patterns, volumes, and SLAs:",
    "options": [
      "Requirement Analysis",
      "Logical Design",
      "Operations",
      "Physical Design"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Requirement Analysis",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 597,
    "question": "Phase focused on gathering stakeholders, entities, usage patterns, volumes, and SLAs:",
    "options": [
      "Operations",
      "Logical Design",
      "Requirement Analysis",
      "Physical Design"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Requirement Analysis",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 598,
    "question": "Phase focused on gathering stakeholders, entities, usage patterns, volumes, and SLAs:",
    "options": [
      "Operations",
      "Logical Design",
      "Requirement Analysis",
      "Physical Design"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Requirement Analysis",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 599,
    "question": "Phase converting conceptual model to tables/columns/keys/constraints with normalization:",
    "options": [
      "Deployment",
      "Requirement Analysis",
      "Logical Design",
      "Physical Design"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Logical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 600,
    "question": "Phase converting conceptual model to tables/columns/keys/constraints with normalization:",
    "options": [
      "Logical Design",
      "Deployment",
      "Requirement Analysis",
      "Physical Design"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Logical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "hard"
  },
  {
    "id": 601,
    "question": "Phase converting conceptual model to tables/columns/keys/constraints with normalization:",
    "options": [
      "Logical Design",
      "Physical Design",
      "Deployment",
      "Requirement Analysis"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Logical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 602,
    "question": "Phase converting conceptual model to tables/columns/keys/constraints with normalization:",
    "options": [
      "Logical Design",
      "Requirement Analysis",
      "Deployment",
      "Physical Design"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Logical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 603,
    "question": "Phase selecting indexes, partitions, storage layout, and backup strategies:",
    "options": [
      "Conceptual Modeling",
      "Physical Design",
      "Requirement Analysis",
      "Logical Design"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Physical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 604,
    "question": "Phase selecting indexes, partitions, storage layout, and backup strategies:",
    "options": [
      "Physical Design",
      "Conceptual Modeling",
      "Logical Design",
      "Requirement Analysis"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Physical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 605,
    "question": "Phase selecting indexes, partitions, storage layout, and backup strategies:",
    "options": [
      "Conceptual Modeling",
      "Physical Design",
      "Requirement Analysis",
      "Logical Design"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Physical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 606,
    "question": "Phase selecting indexes, partitions, storage layout, and backup strategies:",
    "options": [
      "Physical Design",
      "Logical Design",
      "Conceptual Modeling",
      "Requirement Analysis"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Physical Design",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 607,
    "question": "In DB-backed design, what does **Dependency Inversion** imply?",
    "options": [
      "Global mutable state",
      "Depend on abstractions, not concretions",
      "A single God-object for everything",
      "Tight coupling to DB schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Depend on abstractions, not concretions",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 608,
    "question": "In DB-backed design, what does **Composition over Inheritance** imply?",
    "options": [
      "Use composition or separate tables for variation",
      "A single God-object for everything",
      "Tight coupling to DB schema",
      "Global mutable state"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Use composition or separate tables for variation",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 609,
    "question": "In DB-backed design, what does **Dependency Inversion** imply?",
    "options": [
      "Global mutable state",
      "Tight coupling to DB schema",
      "A single God-object for everything",
      "Depend on abstractions, not concretions"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Depend on abstractions, not concretions",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 610,
    "question": "In DB-backed design, what does **Dependency Inversion** imply?",
    "options": [
      "Depend on abstractions, not concretions",
      "Tight coupling to DB schema",
      "Global mutable state",
      "A single God-object for everything"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Depend on abstractions, not concretions",
    "topic": "Fundamentals of Database",
    "difficulty": "medium"
  },
  {
    "id": 611,
    "question": "Which of the following BEST defines System Design?",
    "options": [
      "The process of writing production code",
      "The process of defining the architecture, modules, interfaces, and data of a system",
      "The process of testing software",
      "The process of drawing UI screens only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is The process of defining the architecture, modules, interfaces, and data of a system",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 612,
    "question": "Which system characteristic ensures the system performs correctly under stress without crashing?",
    "options": [
      "Reliability",
      "Availability",
      "Consistency",
      "Maintainability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Reliability",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 613,
    "question": "Which is an example of vertical scaling?",
    "options": [
      "Adding more servers to a cluster",
      "Upgrading a server from 16GB RAM to 64GB RAM",
      "Using a CDN for static content",
      "Splitting databases by sharding"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Upgrading a server from 16GB RAM to 64GB RAM",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 614,
    "question": "Which system design principle deals with the system’s ability to continue functioning despite component failures?",
    "options": [
      "Fault Tolerance",
      "Scalability",
      "Maintainability",
      "Consistency"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Fault Tolerance",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 615,
    "question": "Which metric measures the number of operations a system can process per unit of time?",
    "options": [
      "Availability",
      "Latency",
      "Throughput",
      "Scalability"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Throughput",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 616,
    "question": "What is the tradeoff described by the CAP theorem?",
    "options": [
      "Consistency, Availability, Partition Tolerance",
      "Scalability, Reliability, Fault Tolerance",
      "Performance, Maintainability, Scalability",
      "Latency, Throughput, Consistency"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Consistency, Availability, Partition Tolerance",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 617,
    "question": "Which consistency model guarantees that a read always returns the latest write?",
    "options": [
      "Weak Consistency",
      "Eventual Consistency",
      "Strong Consistency",
      "Causal Consistency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Strong Consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 618,
    "question": "Eventual consistency is MOST useful in which scenario?",
    "options": [
      "Banking transaction systems",
      "E-commerce product recommendations",
      "Airline reservation systems",
      "Payment processing"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is E-commerce product recommendations",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 619,
    "question": "Which is NOT a non-functional requirement?",
    "options": [
      "Scalability",
      "Availability",
      "Business Logic",
      "Reliability"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Business Logic",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 620,
    "question": "Which design approach focuses on breaking down the system into smaller modules and defining their relationships?",
    "options": [
      "High Level Design",
      "Low Level Design",
      "Functional Analysis",
      "Requirement Gathering"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is High Level Design",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 621,
    "question": "Which design approach provides detailed descriptions of class diagrams, database schema, and data flow?",
    "options": [
      "High Level Design",
      "Low Level Design",
      "Functional Decomposition",
      "Modular Design"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Low Level Design",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 622,
    "question": "Which of the following is the BEST benefit of modular design?",
    "options": [
      "Tight coupling between components",
      "Ease of maintenance and scalability",
      "Code redundancy",
      "No need for documentation"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Ease of maintenance and scalability",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 623,
    "question": "CI/CD pipelines mainly help in:",
    "options": [
      "Code compilation speed",
      "Automating build, test, and deployment processes",
      "Avoiding system monitoring",
      "Creating system diagrams"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Automating build, test, and deployment processes",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 624,
    "question": "Which of the following is an example of a monolithic architecture?",
    "options": [
      "A single application handling UI, business logic, and database",
      "Multiple independent services deployed separately",
      "Services communicating via events",
      "Serverless functions"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is A single application handling UI, business logic, and database",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 625,
    "question": "Which is the main advantage of microservices over monolithic systems?",
    "options": [
      "Less network latency",
      "Independent deployment and scalability",
      "Centralized database access only",
      "Fewer APIs required"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Independent deployment and scalability",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 626,
    "question": "Event-driven architecture is MOST useful for:",
    "options": [
      "Tightly coupled systems",
      "Real-time processing and asynchronous communication",
      "Batch processing only",
      "Reducing system modularity"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Real-time processing and asynchronous communication",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 627,
    "question": "Which performance metric is MOST impacted by network latency?",
    "options": [
      "Throughput",
      "Consistency",
      "Response Time",
      "Fault Tolerance"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Response Time",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 628,
    "question": "Which type of scaling is easier to automate in cloud-native environments?",
    "options": [
      "Vertical Scaling",
      "Horizontal Scaling",
      "Static Scaling",
      "Manual Scaling"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Horizontal Scaling",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 629,
    "question": "In system design, clean code principles primarily improve:",
    "options": [
      "Availability",
      "Maintainability",
      "Latency",
      "Throughput"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Maintainability",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 630,
    "question": "Which of the following is an example of Availability vs Consistency tradeoff?",
    "options": [
      "Amazon DynamoDB favoring availability",
      "A banking transaction system favoring consistency",
      "CDN edge servers returning cached responses",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is All of the above",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 631,
    "question": "Which factor MOST influences system reliability?",
    "options": [
      "Hardware uptime",
      "Error handling mechanisms",
      "Database indexing",
      "UI responsiveness"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Error handling mechanisms",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 632,
    "question": "What is the MAIN drawback of vertical scaling?",
    "options": [
      "Higher latency",
      "Limited by single machine capacity",
      "More network partitions",
      "Difficult deployment pipelines"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Limited by single machine capacity",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 633,
    "question": "Which of the following BEST describes fault tolerance?",
    "options": [
      "Ability to restart automatically after a crash",
      "Ability to scale horizontally",
      "Ability to deploy without downtime",
      "Ability to maintain correct behavior despite component failures"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Ability to maintain correct behavior despite component failures",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 634,
    "question": "Throughput in system design refers to:",
    "options": [
      "The amount of data processed per second",
      "The time taken for one request",
      "The number of servers in the cluster",
      "The redundancy factor of storage"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is The amount of data processed per second",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 635,
    "question": "Which tradeoff is MOST common between latency and throughput?",
    "options": [
      "Higher latency reduces throughput",
      "Higher throughput may increase latency",
      "Latency and throughput are always independent",
      "Throughput is unaffected by latency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Higher throughput may increase latency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 636,
    "question": "Which is a PRIMARY goal of maintainability?",
    "options": [
      "Faster query execution",
      "Ease of future modifications",
      "Lower storage requirements",
      "High network bandwidth usage"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Ease of future modifications",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 637,
    "question": "Which design principle supports modular maintainability MOST?",
    "options": [
      "Tight coupling",
      "Code duplication",
      "Separation of concerns",
      "Centralized logging"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Separation of concerns",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 638,
    "question": "In the context of CAP theorem, what does 'P' stand for?",
    "options": [
      "Performance",
      "Partition Tolerance",
      "Processing Power",
      "Parallelism"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Partition Tolerance",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 639,
    "question": "Eventual consistency guarantees:",
    "options": [
      "Immediate data accuracy",
      "Temporary stale reads are possible",
      "No network partitions",
      "Synchronous replication always"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Temporary stale reads are possible",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 640,
    "question": "Which design approach involves abstract diagrams focusing on major components and interactions?",
    "options": [
      "Low Level Design",
      "High Level Design",
      "Unit Testing",
      "Code Refactoring"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is High Level Design",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 641,
    "question": "Low Level Design (LLD) focuses primarily on:",
    "options": [
      "System-wide architecture",
      "Individual classes and methods",
      "Deployment strategies",
      "Business case modeling"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Individual classes and methods",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 642,
    "question": "Which of the following is NOT a functional requirement?",
    "options": [
      "System shall authenticate users",
      "System shall store customer records",
      "System shall process payments",
      "System shall be available 99.9% of the time"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is System shall be available 99.9% of the time",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 643,
    "question": "In system design, which is MOST aligned with non-functional requirements?",
    "options": [
      "Data encryption",
      "User login feature",
      "Shopping cart management",
      "Order tracking system"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Data encryption",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 644,
    "question": "Which architectural pattern is MOST prone to tight coupling?",
    "options": [
      "Monolithic",
      "Microservices",
      "Event-Driven",
      "Serverless"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Monolithic",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 645,
    "question": "Which architectural style enables independent deployment of services?",
    "options": [
      "Layered Architecture",
      "Microservices Architecture",
      "Monolithic Architecture",
      "File-based Systems"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Microservices Architecture",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 646,
    "question": "Event-Driven Architecture is BEST suited for:",
    "options": [
      "Batch processing of data only",
      "Tightly coupled components",
      "Asynchronous communication",
      "Single-threaded applications"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Asynchronous communication",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 647,
    "question": "Which is MOST challenging in a microservices environment?",
    "options": [
      "Service discovery",
      "Code reusability",
      "Shared logging",
      "Deployment to a single server"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Service discovery",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 648,
    "question": "Which of the following MOST reduces system latency?",
    "options": [
      "Caching frequently accessed data",
      "Increasing disk capacity",
      "Adding more documentation",
      "Decreasing modularity"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Caching frequently accessed data",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 649,
    "question": "Which BEST explains horizontal scaling?",
    "options": [
      "Upgrading a single machine with more CPU",
      "Adding more machines to distribute load",
      "Refactoring existing code modules",
      "Improving database queries"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Adding more machines to distribute load",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 650,
    "question": "Which pipeline practice improves maintainability the MOST?",
    "options": [
      "Continuous Deployment",
      "Continuous Integration",
      "Ad-hoc manual testing",
      "Unstructured code reviews"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Continuous Integration",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 651,
    "question": "Which of the following BEST demonstrates fault tolerance in a distributed system?",
    "options": [
      "Adding more servers to handle increased traffic",
      "Automatic rerouting of requests to healthy nodes during a failure",
      "Compressing data to reduce latency",
      "Designing modular code for maintainability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Automatic rerouting of requests to healthy nodes during a failure",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 652,
    "question": "In CAP theorem, if a system prefers consistency and partition tolerance, what is sacrificed?",
    "options": [
      "Latency",
      "Availability",
      "Scalability",
      "Throughput"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Availability",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 653,
    "question": "What is the PRIMARY goal of modular design in system maintainability?",
    "options": [
      "Reduce cost of hardware",
      "Encapsulate changes within small components",
      "Improve latency performance",
      "Increase server throughput"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Encapsulate changes within small components",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 654,
    "question": "Which approach allows scaling different modules of an application independently?",
    "options": [
      "Monolithic architecture",
      "Microservices architecture",
      "Layered architecture",
      "Event-driven programming"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Microservices architecture",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 655,
    "question": "Which metric is MOST affected by introducing caching in a system?",
    "options": [
      "Availability",
      "Consistency",
      "Latency",
      "Fault Tolerance"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Latency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 656,
    "question": "What does eventual consistency guarantee?",
    "options": [
      "Data is always consistent across replicas",
      "Data becomes consistent across replicas after some delay",
      "Data consistency depends on user preference",
      "Data is never lost even after partition"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Data becomes consistent across replicas after some delay",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 657,
    "question": "Which design approach focuses on translating business requirements into conceptual models before implementation?",
    "options": [
      "Low Level Design",
      "High Level Design",
      "Agile methodology",
      "CI/CD pipeline"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is High Level Design",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 658,
    "question": "What is a MAJOR drawback of vertical scaling?",
    "options": [
      "Complex debugging",
      "Limited by single machine capacity",
      "Difficult to implement caching",
      "Increased consistency problems"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Limited by single machine capacity",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 659,
    "question": "In system design, which is considered a NON-functional requirement?",
    "options": [
      "User login functionality",
      "Product catalog search",
      "System response time under 200 ms",
      "Checkout process flow"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is System response time under 200 ms",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 660,
    "question": "Which scenario BEST reflects strong consistency?",
    "options": [
      "A user reads old balance after a deposit",
      "All nodes immediately show updated data after a transaction",
      "System guarantees availability during partition",
      "Updates may take minutes but converge eventually"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is All nodes immediately show updated data after a transaction",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 661,
    "question": "Which of the following BEST explains throughput in system design?",
    "options": [
      "Time taken for one request",
      "Total number of requests processed per unit time",
      "System response delay in milliseconds",
      "Ability of system to scale vertically"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Total number of requests processed per unit time",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 662,
    "question": "What is the PRIMARY challenge when adopting microservices?",
    "options": [
      "Increased modularity",
      "Simpler deployments",
      "Managing inter-service communication and data consistency",
      "Easier scaling of monolith"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Managing inter-service communication and data consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 663,
    "question": "Which BEST describes weak consistency?",
    "options": [
      "System ensures reads always reflect latest writes",
      "Reads may return stale data without guarantee of eventual consistency",
      "System guarantees immediate synchronization across replicas",
      "System delays responses until strong consistency is reached"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Reads may return stale data without guarantee of eventual consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 664,
    "question": "Which system design principle reduces time-to-market by enabling frequent safe releases?",
    "options": [
      "Microservices",
      "CI/CD Pipelines",
      "Monolithic Architecture",
      "Vertical Scaling"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is CI/CD Pipelines",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 665,
    "question": "Which architectural style is MOST suitable for real-time data streaming applications?",
    "options": [
      "Monolithic Architecture",
      "Event-Driven Architecture",
      "Microservices without messaging",
      "Layered MVC Architecture"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Event-Driven Architecture",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 666,
    "question": "What is a key limitation of horizontal scaling?",
    "options": [
      "Hardware upgrade cost",
      "Complexity in distributed coordination",
      "Single point of failure risk",
      "Fixed memory and CPU"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Complexity in distributed coordination",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 667,
    "question": "Which tradeoff is at the core of the CAP theorem?",
    "options": [
      "Latency vs Throughput",
      "Performance vs Scalability",
      "Consistency vs Availability during partition",
      "Reliability vs Maintainability"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Consistency vs Availability during partition",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 668,
    "question": "In high availability systems, which design element is CRITICAL?",
    "options": [
      "Single data center",
      "Manual failover",
      "Redundancy and automated failover",
      "Strong consistency only"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Redundancy and automated failover",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 669,
    "question": "Which performance measure directly impacts user experience?",
    "options": [
      "Throughput",
      "Latency",
      "Scalability",
      "Fault Tolerance"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Latency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 670,
    "question": "Which scenario BEST demonstrates a non-functional requirement?",
    "options": [
      "System must support adding new friends",
      "Users should reset password via email",
      "System must process 10,000 requests per second",
      "Allow product search by category"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is System must process 10,000 requests per second",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 671,
    "question": "Which is a PRIMARY benefit of using microservices?",
    "options": [
      "Reduced inter-service communication",
      "Independent scaling and deployments",
      "Simpler debugging than monoliths",
      "No need for API gateways"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Independent scaling and deployments",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 672,
    "question": "Which approach BEST fits low latency trading systems requiring strong consistency?",
    "options": [
      "Eventual consistency with caching",
      "Weak consistency with replication",
      "Strong consistency with synchronous replication",
      "Horizontal scaling without replication"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Strong consistency with synchronous replication",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 673,
    "question": "What does high reliability in a system indicate?",
    "options": [
      "System scales easily",
      "System responds quickly",
      "System performs correctly over long periods",
      "System always prioritizes availability"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is System performs correctly over long periods",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 674,
    "question": "Which CI/CD practice reduces risk of large failures?",
    "options": [
      "Manual deployments every 3 months",
      "Frequent small automated releases",
      "Ignoring automated testing",
      "Using monolithic build pipelines"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Frequent small automated releases",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 675,
    "question": "Which is a drawback of monolithic architecture?",
    "options": [
      "Simpler debugging",
      "Independent service scaling",
      "Single codebase tightly coupled",
      "Centralized data consistency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Single codebase tightly coupled",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 676,
    "question": "Which measure ensures fault tolerance in cloud deployments?",
    "options": [
      "Using only one availability zone",
      "Replication across multiple regions",
      "Reducing logging overhead",
      "Scaling CPU vertically"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Replication across multiple regions",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 677,
    "question": "Which BEST demonstrates low maintainability?",
    "options": [
      "Tightly coupled code modules",
      "Clean code principles",
      "Modular components",
      "Automated test coverage"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Tightly coupled code modules",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 678,
    "question": "Which is a FUNCTIONAL requirement?",
    "options": [
      "System must allow users to reset password",
      "System must support 99.99% uptime",
      "System must respond in under 200 ms",
      "System must tolerate node failures"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is System must allow users to reset password",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 679,
    "question": "Which factor primarily impacts scalability?",
    "options": [
      "Hardware cost",
      "Application design architecture",
      "User interface responsiveness",
      "Data encryption algorithms"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Application design architecture",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 680,
    "question": "Which is an EXAMPLE of low fault tolerance?",
    "options": [
      "Cluster of nodes with redundancy",
      "Single server running entire system",
      "Multi-zone replicated databases",
      "Load balanced API servers"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Single server running entire system",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 681,
    "question": "Which strategy BEST handles high throughput workloads?",
    "options": [
      "Add caching and asynchronous queues",
      "Limit number of client requests",
      "Vertical scaling only",
      "Strong consistency without replication"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Add caching and asynchronous queues",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 682,
    "question": "In availability vs consistency tradeoff, banking systems usually prioritize:",
    "options": [
      "Consistency",
      "Availability",
      "Throughput",
      "Latency"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 683,
    "question": "Which of the following is a scalability bottleneck in monolithic systems?",
    "options": [
      "Independent deployment",
      "Shared database tightly coupled",
      "Stateless services",
      "Asynchronous processing"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Shared database tightly coupled",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 684,
    "question": "Which characteristic MOST improves system reliability?",
    "options": [
      "Graceful degradation on failures",
      "Adding features quickly",
      "Vertical scaling",
      "Ignoring error handling"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Graceful degradation on failures",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 685,
    "question": "Which architectural style allows decoupled services to communicate via events?",
    "options": [
      "Monolithic",
      "Layered",
      "Event-Driven Architecture",
      "Client-Server"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Event-Driven Architecture",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 686,
    "question": "Which practice in CI/CD pipelines reduces integration issues?",
    "options": [
      "Continuous Integration with automated testing",
      "Rare batch deployments",
      "Manual code merges",
      "Skipping regression testing"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Continuous Integration with automated testing",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 687,
    "question": "Which system characteristic is MOST tied to user satisfaction in interactive apps?",
    "options": [
      "Throughput",
      "Latency",
      "Maintainability",
      "Scalability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Latency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 688,
    "question": "Which of the following is NOT typically improved by horizontal scaling?",
    "options": [
      "Fault tolerance",
      "Availability",
      "Vertical CPU capacity",
      "Throughput"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Vertical CPU capacity",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 689,
    "question": "Which consistency model is MOST acceptable for social media newsfeeds?",
    "options": [
      "Strong Consistency",
      "Weak Consistency",
      "Eventual Consistency",
      "Linearizability"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Eventual Consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 690,
    "question": "Which MOST improves maintainability in large-scale systems?",
    "options": [
      "Monolithic deployments",
      "Tight coupling between modules",
      "Following clean code principles",
      "Skipping automated tests"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Following clean code principles",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 691,
    "question": "In system design, what does 'throughput' primarily measure?",
    "options": [
      "Time per request",
      "Number of requests per unit time",
      "System fault tolerance",
      "Code readability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Number of requests per unit time",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 692,
    "question": "Which of these is a non-functional requirement?",
    "options": [
      "Database schema",
      "System availability 99.99%",
      "User registration workflow",
      "API endpoints"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is System availability 99.99%",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 693,
    "question": "Which CAP property is sacrificed when prioritizing availability over consistency?",
    "options": [
      "Partition tolerance",
      "Consistency",
      "Latency",
      "Throughput"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 694,
    "question": "What is the main drawback of a monolithic architecture?",
    "options": [
      "Simple deployments",
      "Code reuse",
      "Tightly coupled components hinder scaling",
      "Unified logging"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Tightly coupled components hinder scaling",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 695,
    "question": "Which consistency pattern allows temporary stale reads but guarantees eventual correctness?",
    "options": [
      "Strong consistency",
      "Weak consistency",
      "Eventual consistency",
      "Serializability"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Eventual consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 696,
    "question": "In CI/CD pipelines, which practice ensures small, frequent releases?",
    "options": [
      "Waterfall model",
      "Continuous delivery",
      "Batch deployment",
      "Manual testing only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Continuous delivery",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 697,
    "question": "Which system characteristic ensures a system can handle growing user load by adding more servers?",
    "options": [
      "Vertical scalability",
      "Horizontal scalability",
      "Maintainability",
      "Latency reduction"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Horizontal scalability",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 698,
    "question": "Which property of distributed systems is always assumed in CAP theorem?",
    "options": [
      "Scalability",
      "Partition tolerance",
      "Availability",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Partition tolerance",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 699,
    "question": "Which architectural pattern best supports real-time stock trading platforms?",
    "options": [
      "Monolithic",
      "Microservices",
      "Event-driven architecture",
      "Layered architecture"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Event-driven architecture",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 700,
    "question": "Which factor primarily affects system latency?",
    "options": [
      "Response time per request",
      "Total requests handled per second",
      "System modularity",
      "Database normalization"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Response time per request",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 701,
    "question": "Which of these BEST describes high-level design?",
    "options": [
      "Detailed class diagram",
      "Technology stack decisions",
      "Database schema design",
      "Low-level coding tasks"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Technology stack decisions",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 702,
    "question": "Which consistency model guarantees reads always return the most recent write?",
    "options": [
      "Weak consistency",
      "Eventual consistency",
      "Strong consistency",
      "Causal consistency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Strong consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 703,
    "question": "Which architectural style MOST improves modularity and deployment independence?",
    "options": [
      "Monolithic",
      "Microservices",
      "Layered",
      "Client-server"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Microservices",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 704,
    "question": "Which is NOT a benefit of CI/CD pipelines?",
    "options": [
      "Faster releases",
      "Early bug detection",
      "Increased manual testing effort",
      "Reduced integration issues"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Increased manual testing effort",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 705,
    "question": "Which scaling approach requires stronger hardware upgrades?",
    "options": [
      "Horizontal scaling",
      "Vertical scaling",
      "Fault tolerance",
      "Load balancing"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Vertical scaling",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 706,
    "question": "Which system design characteristic ensures recovery from component failures without data loss?",
    "options": [
      "Latency",
      "Throughput",
      "Fault tolerance",
      "Maintainability"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Fault tolerance",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 707,
    "question": "Which term in system design refers to modifying a system with minimal effort?",
    "options": [
      "Scalability",
      "Maintainability",
      "Reliability",
      "Availability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Maintainability",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 708,
    "question": "Which is an example of a functional requirement?",
    "options": [
      "User login feature",
      "99.9% uptime",
      "Low latency responses",
      "System scalability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is User login feature",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 709,
    "question": "Which of the following systems MOST needs strong consistency?",
    "options": [
      "E-commerce checkout system",
      "Social media comments",
      "Search engine indexing",
      "Video streaming recommendations"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is E-commerce checkout system",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 710,
    "question": "Which design approach focuses on module-level details like classes and methods?",
    "options": [
      "High-level design",
      "Low-level design",
      "Monolithic design",
      "Microservices"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Low-level design",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 711,
    "question": "Which consistency model guarantees that once a value is written, all future reads will return that value?",
    "options": [
      "Weak Consistency",
      "Eventual Consistency",
      "Strong Consistency",
      "Causal Consistency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Strong Consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 712,
    "question": "Which architectural pattern is MOST suitable for a payment processing system requiring high decoupling?",
    "options": [
      "Monolithic",
      "Layered Architecture",
      "Event-Driven Architecture",
      "Microservices"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Event-Driven Architecture",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 713,
    "question": "In system design, which metric BEST describes the system’s ability to continue working during component failures?",
    "options": [
      "Scalability",
      "Maintainability",
      "Fault Tolerance",
      "Consistency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Fault Tolerance",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 714,
    "question": "Which system design characteristic is MOST impacted by vertical scaling?",
    "options": [
      "Latency",
      "Fault Tolerance",
      "Throughput",
      "Consistency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Throughput",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 715,
    "question": "Which CAP theorem trade-off occurs when a system prioritizes availability during a network partition?",
    "options": [
      "Loses scalability",
      "Sacrifices consistency",
      "Increases latency",
      "Sacrifices throughput"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Sacrifices consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 716,
    "question": "What is the PRIMARY drawback of a monolithic architecture?",
    "options": [
      "Low throughput",
      "Difficult to scale independently",
      "No consistency guarantees",
      "Requires event-driven design"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Difficult to scale independently",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 717,
    "question": "Which consistency model is MOST suitable for a chat application where slight delays are acceptable?",
    "options": [
      "Strong Consistency",
      "Eventual Consistency",
      "Weak Consistency",
      "Causal Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Eventual Consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 718,
    "question": "Which of the following is an example of a functional requirement?",
    "options": [
      "System must process 1000 transactions per second",
      "System must support user login with 2FA",
      "System must recover from crash in 5 minutes",
      "System response time < 200ms"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is System must support user login with 2FA",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 719,
    "question": "Which design approach provides detailed specifications for database schemas and API endpoints?",
    "options": [
      "High-Level Design",
      "Low-Level Design",
      "Functional Requirement",
      "Event-Driven Design"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Low-Level Design",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 720,
    "question": "Which system design principle ensures the codebase is modular and reusable?",
    "options": [
      "Scalability",
      "Clean Code Principles",
      "Throughput",
      "Fault Tolerance"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Clean Code Principles",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 721,
    "question": "Which type of scalability involves adding more servers to distribute load?",
    "options": [
      "Vertical Scaling",
      "Horizontal Scaling",
      "Diagonal Scaling",
      "Database Sharding"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Horizontal Scaling",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 722,
    "question": "Which of the following BEST explains modular design?",
    "options": [
      "Breaking system into independent, reusable components",
      "Optimizing database queries",
      "Improving consistency with strong models",
      "Scaling hardware resources vertically"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Breaking system into independent, reusable components",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 723,
    "question": "Which system characteristic is MOST related to user-perceived responsiveness?",
    "options": [
      "Latency",
      "Throughput",
      "Reliability",
      "Consistency"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Latency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 724,
    "question": "Which pipeline ensures frequent integration and automatic deployments?",
    "options": [
      "CI/CD Pipeline",
      "ETL Pipeline",
      "Data Pipeline",
      "Message Queue"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CI/CD Pipeline",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 725,
    "question": "Which design principle improves testability by reducing dependencies between modules?",
    "options": [
      "Scalability",
      "Loose Coupling",
      "Vertical Scaling",
      "Consistency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Loose Coupling",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 726,
    "question": "Which consistency pattern allows stale data reads but guarantees data will eventually be updated across replicas?",
    "options": [
      "Weak Consistency",
      "Eventual Consistency",
      "Strong Consistency",
      "Strict Serializability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Eventual Consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 727,
    "question": "Which system design approach ensures detailed class diagrams and database normalization rules?",
    "options": [
      "Low-Level Design",
      "High-Level Design",
      "CI/CD Design",
      "Event-Driven Architecture"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Low-Level Design",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 728,
    "question": "Which system design characteristic ensures the system can recover gracefully from software bugs or hardware crashes?",
    "options": [
      "Reliability",
      "Fault Tolerance",
      "Consistency",
      "Throughput"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Fault Tolerance",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 729,
    "question": "Which is MOST suitable for systems that require immediate consistency, such as financial transactions?",
    "options": [
      "Eventual Consistency",
      "Weak Consistency",
      "Strong Consistency",
      "Causal Consistency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Strong Consistency",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 730,
    "question": "Which architectural pattern is MOST suitable for Netflix-style streaming where services must scale independently?",
    "options": [
      "Monolithic",
      "Microservices",
      "Event-Driven",
      "Layered"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Microservices",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 731,
    "question": "What is the primary objective of system design?",
    "options": [
      "To write efficient code",
      "To create scalable and maintainable architecture",
      "To debug systems effectively",
      "To test software units"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is To create scalable and maintainable architecture",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 732,
    "question": "Which of the following best describes a monolithic system?",
    "options": [
      "A system broken into microservices",
      "A distributed network of computers",
      "A single, tightly-coupled codebase",
      "A multi-threaded application"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is A single, tightly-coupled codebase",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 733,
    "question": "What is the formula for calculating system availability?",
    "options": [
      "MTTF / (MTTF + MTTR)",
      "MTTR / MTTF",
      "MTBF / MTTR",
      "Uptime / Downtime"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is MTTF / (MTTF + MTTR)",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 734,
    "question": "Which component is crucial to ensure high availability in a distributed system?",
    "options": [
      "Code readability",
      "Load Balancer",
      "Source control",
      "CI/CD pipeline"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Load Balancer",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 735,
    "question": "Which of the following contributes to a system’s reliability?",
    "options": [
      "Automatic failover mechanisms",
      "High latency operations",
      "Weak authentication",
      "Use of monolithic design"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Automatic failover mechanisms",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 736,
    "question": "Which of the following best describes horizontal scaling?",
    "options": [
      "Adding more RAM to a server",
      "Adding more CPUs to a machine",
      "Adding more machines to the system",
      "Adding more threads to a process"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Adding more machines to the system",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 737,
    "question": "Which architecture supports better fault isolation: Vertical or Horizontal scaling?",
    "options": [
      "Vertical",
      "Horizontal",
      "Neither",
      "Depends on load balancer"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Horizontal",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 738,
    "question": "Which of the following is a drawback of vertical scaling?",
    "options": [
      "Complex deployment",
      "High cost and hardware limits",
      "Slower data processing",
      "Poor readability"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is High cost and hardware limits",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 739,
    "question": "Why is maintainability important in system design?",
    "options": [
      "It improves UI responsiveness",
      "It allows easier feature enhancements and bug fixes",
      "It reduces testing time",
      "It helps in vertical scaling"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is It allows easier feature enhancements and bug fixes",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 740,
    "question": "Which of the following supports better maintainability?",
    "options": [
      "Hardcoded values",
      "Modular architecture",
      "Long methods",
      "Nested loops"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Modular architecture",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 741,
    "question": "Which of the following ensures consistency in a distributed system?",
    "options": [
      "Load balancing",
      "Data replication with synchronous writes",
      "Asynchronous event handling",
      "Vertical scaling"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Data replication with synchronous writes",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 742,
    "question": "Which of the following trade-offs is described by the CAP theorem?",
    "options": [
      "Consistency vs Latency",
      "Availability vs Throughput",
      "Consistency vs Availability vs Partition Tolerance",
      "Scalability vs Cost"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Consistency vs Availability vs Partition Tolerance",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 743,
    "question": "Which mechanism is often used to detect faults in distributed systems?",
    "options": [
      "Reverse proxies",
      "Health checks and heartbeat signals",
      "Database sharding",
      "Session caching"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Health checks and heartbeat signals",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 744,
    "question": "What is a failover system?",
    "options": [
      "A backup system that takes over when the main system fails",
      "A data recovery algorithm",
      "A type of firewall",
      "A method for optimizing code"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is A backup system that takes over when the main system fails",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 745,
    "question": "Which of the following would most likely reduce system latency?",
    "options": [
      "Using SSDs instead of HDDs",
      "Writing logs to a file",
      "Adding more users",
      "Using synchronous requests"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Using SSDs instead of HDDs",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 746,
    "question": "Throughput in system design typically refers to:",
    "options": [
      "Time taken to return a single request",
      "Number of requests processed per unit time",
      "Size of request payloads",
      "Database size"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Number of requests processed per unit time",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 747,
    "question": "Which approach increases throughput?",
    "options": [
      "Serial processing",
      "Parallel processing",
      "Thread sleeping",
      "Limiting user access"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Parallel processing",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 748,
    "question": "What is a characteristic of one-tier architecture?",
    "options": [
      "Database and application layers are separated",
      "All components reside on the same machine",
      "Distributed across multiple networks",
      "Uses cloud-native services"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is All components reside on the same machine",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 749,
    "question": "In a two-tier architecture, which two components are typically separated?",
    "options": [
      "Client and Business Logic",
      "Database and Network",
      "UI and Operating System",
      "Frontend and Load Balancer"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Client and Business Logic",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 750,
    "question": "Which of the following layers is NOT typically part of a three-tier architecture?",
    "options": [
      "Presentation Layer",
      "Application Layer",
      "Database Layer",
      "Firewall Layer"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Firewall Layer",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 751,
    "question": "Which of the following is a key goal of system design?",
    "options": [
      "To develop mobile apps",
      "To enhance code indentation",
      "To define system structure and behavior",
      "To create test cases"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is To define system structure and behavior",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 752,
    "question": "Why is scalability important in system design?",
    "options": [
      "To reduce UI complexity",
      "To allow systems to handle increased loads efficiently",
      "To manage CSS styles",
      "To avoid memory leaks"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is To allow systems to handle increased loads efficiently",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 753,
    "question": "Which scenario best highlights the need for a scalable system?",
    "options": [
      "When a system is accessed by one user only",
      "When traffic surges during a flash sale",
      "During deployment of code",
      "During database backup"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is When traffic surges during a flash sale",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 754,
    "question": "Which factor enhances system reliability?",
    "options": [
      "Single point of failure",
      "Redundancy and backup strategies",
      "High latency operations",
      "Randomized algorithms"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Redundancy and backup strategies",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 755,
    "question": "In eventual consistency, which of the following is true?",
    "options": [
      "All nodes are always in sync",
      "Data may be temporarily inconsistent",
      "Data is lost after write",
      "No data replication occurs"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Data may be temporarily inconsistent",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 756,
    "question": "Which practice promotes system maintainability?",
    "options": [
      "Tightly coupled components",
      "Code duplication",
      "Separation of concerns",
      "Using global variables"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Separation of concerns",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 757,
    "question": "Which of the following adds to system latency?",
    "options": [
      "In-memory caching",
      "CDN implementation",
      "Network congestion",
      "Load balancing"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Network congestion",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 758,
    "question": "To increase throughput, one should:",
    "options": [
      "Increase database read replicas",
      "Add delays in code",
      "Reduce thread count",
      "Introduce single-threaded processing"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Increase database read replicas",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 759,
    "question": "What does fault tolerance ensure in system design?",
    "options": [
      "High SEO ranking",
      "Continued operation despite failures",
      "Manual rebooting",
      "System debugging"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Continued operation despite failures",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 760,
    "question": "What is the best approach to handle millions of users in real-time?",
    "options": [
      "Vertical scaling",
      "Horizontal scaling with load balancer",
      "Data compression",
      "Shared hosting"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Horizontal scaling with load balancer",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 761,
    "question": "Which of the following is the best strategy to improve system availability?",
    "options": [
      "Add more client machines",
      "Introduce failover and redundancy",
      "Use a slower but more stable server",
      "Avoid caching mechanisms"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Introduce failover and redundancy",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 762,
    "question": "What does a reliable system guarantee?",
    "options": [
      "Minimum memory usage",
      "Accurate performance benchmarking",
      "Correct operation under expected conditions",
      "No need for backups"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Correct operation under expected conditions",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 763,
    "question": "Which of these tools help measure system reliability?",
    "options": [
      "New Relic",
      "Google Analytics",
      "Heap Analytics",
      "Figma"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is New Relic",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 764,
    "question": "Which of the following is a scalability bottleneck?",
    "options": [
      "Stateless services",
      "Single database writes",
      "Load balancer setup",
      "Message queues"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Single database writes",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 765,
    "question": "What challenge is typically associated with horizontal scaling?",
    "options": [
      "Excessive cost per server",
      "Distributed state management",
      "Data compression",
      "Frequent server reboots"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Distributed state management",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 766,
    "question": "Which principle improves maintainability the most?",
    "options": [
      "KISS - Keep It Simple Stupid",
      "DRY - Don't Repeat Yourself",
      "YAGNI - You Aren't Gonna Need It",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is All of the above",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 767,
    "question": "Which design pattern helps improve maintainability?",
    "options": [
      "Singleton",
      "Observer",
      "Modular",
      "Cyclic dependency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Modular",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 768,
    "question": "In the context of databases, what does strong consistency mean?",
    "options": [
      "Eventually all nodes will sync",
      "All nodes show same data instantly after a write",
      "Reads may show outdated values",
      "Data will never change"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is All nodes show same data instantly after a write",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 769,
    "question": "Which consistency model allows stale reads temporarily?",
    "options": [
      "Strong consistency",
      "Eventual consistency",
      "Linearizability",
      "Snapshot isolation"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Eventual consistency",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 770,
    "question": "Redundancy in system design contributes to which characteristic?",
    "options": [
      "Latency",
      "Throughput",
      "Fault Tolerance",
      "UI rendering"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Fault Tolerance",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 771,
    "question": "Which approach is used for ensuring fault tolerance in cloud services?",
    "options": [
      "Single server dependency",
      "Data mirroring and backups",
      "Single availability zone",
      "Disable logging"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Data mirroring and backups",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 772,
    "question": "Which protocol is faster and often used to reduce latency in modern web apps?",
    "options": [
      "HTTP",
      "HTTPS",
      "HTTP/2",
      "FTP"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is HTTP/2",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 773,
    "question": "Which factor negatively affects latency?",
    "options": [
      "Edge caching",
      "High network hops",
      "CDN usage",
      "DNS prefetching"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is High network hops",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 774,
    "question": "How can a message queue like Kafka improve throughput?",
    "options": [
      "By increasing CPU speed",
      "By enabling asynchronous processing",
      "By disabling logs",
      "By adding DNS servers"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is By enabling asynchronous processing",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 775,
    "question": "Which database operation improves write throughput in NoSQL databases?",
    "options": [
      "Joins",
      "Transactions",
      "Denormalization",
      "Foreign key constraints"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Denormalization",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 776,
    "question": "Which application scenario is best suited for one-tier architecture?",
    "options": [
      "Large-scale e-commerce system",
      "Mobile social network",
      "Personal desktop app",
      "Microservice platform"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Personal desktop app",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 777,
    "question": "Which is a key limitation of two-tier architecture?",
    "options": [
      "Low latency",
      "Poor scalability",
      "High fault tolerance",
      "Support for microservices"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Poor scalability",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 778,
    "question": "What is the main benefit of three-tier architecture?",
    "options": [
      "Data processing is faster",
      "Improved security and separation of concerns",
      "It works without a database",
      "Supports embedded systems"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Improved security and separation of concerns",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 779,
    "question": "Which layer in three-tier architecture handles business logic?",
    "options": [
      "Presentation",
      "Application",
      "Data",
      "UI"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Application",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 780,
    "question": "Which of these is the most common reason for poor scalability?",
    "options": [
      "Decoupled services",
      "Stateful session handling",
      "Loose coupling",
      "Stateless API design"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Stateful session handling",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 781,
    "question": "What does system design primarily help with?",
    "options": [
      "Algorithm optimization",
      "Planning scalable and reliable applications",
      "Writing test cases",
      "API documentation"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Planning scalable and reliable applications",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 782,
    "question": "What is the goal of redundancy in a reliable system?",
    "options": [
      "Reduce latency",
      "Avoid data duplication",
      "Ensure continuous service in case of failure",
      "Improve CSS rendering"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Ensure continuous service in case of failure",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 783,
    "question": "Which layer in network communication introduces the most latency?",
    "options": [
      "Application Layer",
      "Transport Layer",
      "Network Layer",
      "Physical Layer"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Application Layer",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 784,
    "question": "Which of the following best describes 99.99% system availability?",
    "options": [
      "System is down 8.76 hours/year",
      "System is down 52.56 minutes/year",
      "System is down 4 hours/month",
      "System never fails"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is System is down 52.56 minutes/year",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 785,
    "question": "High throughput systems are ideal for which use case?",
    "options": [
      "Static websites",
      "File sharing platforms",
      "Blogging platforms",
      "Landing pages"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is File sharing platforms",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 786,
    "question": "Which of the following is true for scaling a database horizontally?",
    "options": [
      "Add indexes",
      "Increase IOPS",
      "Shard the data",
      "Use single instance with large RAM"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Shard the data",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 787,
    "question": "Which storage system provides strong consistency by default?",
    "options": [
      "Cassandra",
      "MongoDB",
      "Redis (single node)",
      "Amazon S3"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Redis (single node)",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 788,
    "question": "Which of the following is NOT a fault tolerance strategy?",
    "options": [
      "Circuit breakers",
      "Rate limiting",
      "Failover",
      "Replication"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Rate limiting",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 789,
    "question": "Which method improves code maintainability in a large system?",
    "options": [
      "Using monoliths",
      "Separating logic into reusable modules",
      "Inline scripting",
      "Global exception handlers everywhere"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Separating logic into reusable modules",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 790,
    "question": "How does using multiple availability zones affect availability?",
    "options": [
      "It decreases fault tolerance",
      "It increases deployment time",
      "It increases system uptime and resilience",
      "It removes the need for backups"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is It increases system uptime and resilience",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 791,
    "question": "What aspect of a system does system design primarily deal with?",
    "options": [
      "Implementation syntax",
      "Architectural structure and component interactions",
      "Frontend animations",
      "Database password encryption"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Architectural structure and component interactions",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 792,
    "question": "Which database technique improves write scalability?",
    "options": [
      "Master-slave replication",
      "Database normalization",
      "Vertical partitioning",
      "Log shipping"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Master-slave replication",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 793,
    "question": "Refactoring code helps in achieving which system design characteristic?",
    "options": [
      "Fault tolerance",
      "Throughput",
      "Maintainability",
      "Latency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Maintainability",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 794,
    "question": "What type of architecture improves availability by eliminating single points of failure?",
    "options": [
      "Single node setup",
      "Clustered and replicated architecture",
      "Monolithic design",
      "Event loop blocking"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Clustered and replicated architecture",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 795,
    "question": "How does a CDN help reduce latency?",
    "options": [
      "By compressing media files",
      "By storing data near users",
      "By reducing request headers",
      "By slowing down DNS resolution"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is By storing data near users",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 796,
    "question": "What is the purpose of a retry mechanism in fault-tolerant systems?",
    "options": [
      "It introduces more latency",
      "It ensures high consistency",
      "It reattempts operations that failed due to temporary issues",
      "It avoids logging"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is It reattempts operations that failed due to temporary issues",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 797,
    "question": "Which layer in 3-tier architecture is responsible for data access?",
    "options": [
      "Presentation",
      "Application",
      "Database",
      "Service"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Database",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 798,
    "question": "Which of the following best describes BASE in NoSQL databases?",
    "options": [
      "Basically Available, Soft state, Eventually consistent",
      "Binary Access Soft Encoding",
      "Basic Algorithmic Storage Engine",
      "Balanced Application State Engine"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Basically Available, Soft state, Eventually consistent",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 799,
    "question": "A system that serves 1000 requests/sec is optimized for which metric?",
    "options": [
      "Latency",
      "Availability",
      "Throughput",
      "Consistency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Throughput",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 800,
    "question": "What is a common downside of horizontal scaling?",
    "options": [
      "Requires less physical infrastructure",
      "Adds complexity in synchronization and consistency",
      "Limited storage per node",
      "Harder to virtualize"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Adds complexity in synchronization and consistency",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 801,
    "question": "In two-tier architecture, where does the client directly interact?",
    "options": [
      "With the service layer",
      "With the backend database",
      "With the middleware API",
      "With the message queue"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is With the backend database",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 802,
    "question": "What does graceful degradation mean in fault-tolerant systems?",
    "options": [
      "System stops immediately when failure occurs",
      "System switches to read-only mode or reduced functionality",
      "Users are redirected to login page",
      "System avoids caching"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is System switches to read-only mode or reduced functionality",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 803,
    "question": "Sharding helps scalability by:",
    "options": [
      "Duplicating records",
      "Dividing data across nodes",
      "Backing up tables",
      "Removing indexes"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Dividing data across nodes",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 804,
    "question": "Which of these makes software harder to maintain?",
    "options": [
      "Proper documentation",
      "Automated testing",
      "Spaghetti code",
      "Separation of concerns"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Spaghetti code",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 805,
    "question": "Which load balancing strategy improves availability during spikes?",
    "options": [
      "Static routing",
      "Round-robin",
      "Single node fallback",
      "Overflow caching"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Round-robin",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 806,
    "question": "What does quorum mean in distributed system consistency?",
    "options": [
      "Majority of replicas must agree to proceed",
      "All nodes must write simultaneously",
      "No node can fail",
      "Only reads are consistent"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Majority of replicas must agree to proceed",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 807,
    "question": "Which DNS optimization reduces latency?",
    "options": [
      "TTL set to 0",
      "DNS prefetching and caching",
      "Round-robin domains",
      "Multiple CNAME entries"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is DNS prefetching and caching",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 808,
    "question": "Which of these is an example of vertical scaling?",
    "options": [
      "Adding more application instances",
      "Migrating to microservices",
      "Upgrading the CPU of an existing server",
      "Using distributed cache"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Upgrading the CPU of an existing server",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 809,
    "question": "What strategy can help scale throughput during peak traffic?",
    "options": [
      "Introducing synchronous API calls",
      "Buffering incoming traffic using queues",
      "Increasing read replicas",
      "Disabling multithreading"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Buffering incoming traffic using queues",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 810,
    "question": "Which of the following is true about one-tier applications?",
    "options": [
      "They have the highest scalability",
      "They are easy to deploy and maintain for small apps",
      "They support distributed services",
      "They enforce separation of concerns"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is They are easy to deploy and maintain for small apps",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 811,
    "question": "Which tier handles user interface rendering?",
    "options": [
      "Presentation Tier",
      "Data Tier",
      "Service Tier",
      "Middleware"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Presentation Tier",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 812,
    "question": "Which component detects system health automatically?",
    "options": [
      "Database triggers",
      "Health check service",
      "DNS server",
      "Reverse proxy"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Health check service",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 813,
    "question": "Continuous Integration (CI) improves maintainability by:",
    "options": [
      "Reducing deployment frequency",
      "Automating repetitive tasks and testing",
      "Blocking version control",
      "Merging everything at once"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Automating repetitive tasks and testing",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 814,
    "question": "Which factor does NOT directly improve availability?",
    "options": [
      "Auto-scaling",
      "Failover systems",
      "Redundant resources",
      "Minifying CSS"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Minifying CSS",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 815,
    "question": "Which of these will help reduce backend latency?",
    "options": [
      "Using synchronous DB writes",
      "Optimizing SQL queries",
      "Ignoring indexes",
      "Increasing session timeout"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Optimizing SQL queries",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 816,
    "question": "Which protocol provides strong consistency for distributed data?",
    "options": [
      "HTTP",
      "gRPC",
      "Two-phase commit",
      "UDP"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Two-phase commit",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 817,
    "question": "Which tier contains the business logic in a typical 3-tier system?",
    "options": [
      "Database tier",
      "Application tier",
      "Presentation tier",
      "Network tier"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Application tier",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 818,
    "question": "Why is scalability essential for modern systems?",
    "options": [
      "To reduce backend bugs",
      "To manage increasing user traffic efficiently",
      "To simplify deployment",
      "To reduce load balancer cost"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is To manage increasing user traffic efficiently",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 819,
    "question": "What makes two-tier architecture less scalable than three-tier?",
    "options": [
      "Direct client-database interaction increases bottleneck risk",
      "It requires cloud infrastructure",
      "It does not use frontend frameworks",
      "It can’t handle databases"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Direct client-database interaction increases bottleneck risk",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 820,
    "question": "Which of the following helps reduce client-to-server latency?",
    "options": [
      "Using HTTP 1.0",
      "Increasing the request payload size",
      "Implementing persistent connections",
      "Switching to FTP protocol"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Implementing persistent connections",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 821,
    "question": "In horizontal scaling, which component becomes critical to prevent bottlenecks?",
    "options": [
      "Frontend framework",
      "Load balancer",
      "RAM size",
      "Database schema"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Load balancer",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 822,
    "question": "Which of these best represents high availability?",
    "options": [
      "System works only during peak hours",
      "System uptime of 99.999%",
      "Manual server restart during crash",
      "Hourly backup to USB"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is System uptime of 99.999%",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 823,
    "question": "Which approach is least effective in reducing latency?",
    "options": [
      "Edge caching",
      "In-memory databases",
      "Polling every 100ms",
      "Content Delivery Network"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Polling every 100ms",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 824,
    "question": "Which method allows a system to continue functioning after partial failure?",
    "options": [
      "Hard reset",
      "Failover",
      "Schema migration",
      "Code minification"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Failover",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 825,
    "question": "What is one key benefit of modular code architecture?",
    "options": [
      "Increases execution time",
      "Improves maintainability and testability",
      "Avoids dependency injection",
      "Reduces version control usage"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Improves maintainability and testability",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 826,
    "question": "Which type of database guarantees immediate consistency after a transaction?",
    "options": [
      "Eventually consistent DBs",
      "Strongly consistent DBs",
      "Flat-file DBs",
      "Time-series DBs"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Strongly consistent DBs",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 827,
    "question": "Three-tier architecture allows for better:",
    "options": [
      "Global variables",
      "Scalability and separation of concerns",
      "Hard-coded configuration",
      "Monolithic design reuse"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Scalability and separation of concerns",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 828,
    "question": "Which format is optimal for reducing latency in API response?",
    "options": [
      "XML",
      "CSV",
      "JSON",
      "Binary Protocols (e.g., Protobuf)"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Binary Protocols (e.g., Protobuf)",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 829,
    "question": "A system that scales with increasing users without changing architecture is considered:",
    "options": [
      "Stable",
      "Modular",
      "Scalable",
      "Decoupled"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Scalable",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 830,
    "question": "Which AWS feature provides zonal fault tolerance?",
    "options": [
      "S3 Versioning",
      "CloudFront",
      "Auto Scaling Groups with Multi-AZ",
      "Lambda Triggers"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Auto Scaling Groups with Multi-AZ",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 831,
    "question": "Which of the following would most likely improve API throughput?",
    "options": [
      "Using REST over GraphQL",
      "Caching frequent responses",
      "Serving requests synchronously",
      "Increasing CPU utilization"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Caching frequent responses",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 832,
    "question": "What does 'tech debt' refer to in system design?",
    "options": [
      "Unpaid hosting charges",
      "Bug reports from testers",
      "Compromises in code that make future changes harder",
      "Outdated UI libraries"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Compromises in code that make future changes harder",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 833,
    "question": "A horizontally scalable application requires:",
    "options": [
      "Stateful sessions",
      "Centralized caching",
      "Stateless server components",
      "Vertical partitioning"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Stateless server components",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 834,
    "question": "What is the impact of using retry logic excessively?",
    "options": [
      "Reduces system latency",
      "Improves throughput",
      "May cause cascading failures",
      "Eliminates fault tolerance"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is May cause cascading failures",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 835,
    "question": "What is a major limitation of one-tier applications?",
    "options": [
      "Easy testing",
      "Increased hardware dependency",
      "Good fault isolation",
      "Ideal for distributed apps"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Increased hardware dependency",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 836,
    "question": "Which strategy increases availability without modifying code?",
    "options": [
      "Edge caching",
      "Auto restart policies",
      "Changing DNS TTL",
      "Applying code freeze"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Auto restart policies",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 837,
    "question": "Which of the following is an example of eventual consistency?",
    "options": [
      "Banking transactions",
      "Social media likes",
      "Inventory deduction in flash sale",
      "Real-time bidding"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Social media likes",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 838,
    "question": "Which of the following contributes the most to cold start latency?",
    "options": [
      "Using REST APIs",
      "Serverless architecture initialization",
      "CDN caching",
      "HTML rendering"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Serverless architecture initialization",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 839,
    "question": "How do asynchronous operations impact throughput?",
    "options": [
      "They reduce reliability",
      "They decrease consistency",
      "They improve throughput by non-blocking execution",
      "They slow down the frontend"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is They improve throughput by non-blocking execution",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 840,
    "question": "System design helps in creating a roadmap for:",
    "options": [
      "Testing edge cases",
      "Team hiring decisions",
      "Software architecture planning",
      "Version control"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Software architecture planning",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 841,
    "question": "Which practice is encouraged to improve maintainability?",
    "options": [
      "Hard-coded logic",
      "Coupled services",
      "Unit testing",
      "Circular dependencies"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Unit testing",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 842,
    "question": "Which of the following adds least latency?",
    "options": [
      "Network hops",
      "CDN edge server fetch",
      "TCP handshakes",
      "Cold start of serverless function"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is CDN edge server fetch",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 843,
    "question": "Which is a drawback of two-tier architecture?",
    "options": [
      "UI and database tightly coupled",
      "It supports large-scale distributed systems",
      "Good for real-time systems",
      "Cost-effective"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is UI and database tightly coupled",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 844,
    "question": "Which component increases reliability by retrying failed network requests?",
    "options": [
      "Queue handler",
      "Circuit breaker",
      "Retry mechanism with backoff",
      "Load tester"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Retry mechanism with backoff",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 845,
    "question": "Which service is preferred for infinite horizontal scaling in cloud?",
    "options": [
      "Monolithic API server",
      "Serverless functions (e.g., AWS Lambda)",
      "FTP server",
      "Bare metal servers"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Serverless functions (e.g., AWS Lambda)",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 846,
    "question": "Which concept ensures that system resources are available under stress?",
    "options": [
      "Load balancing",
      "Rate limiting",
      "Backpressure mechanism",
      "Round-robin DNS"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Backpressure mechanism",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 847,
    "question": "Which of the following is most likely to prioritize availability over consistency?",
    "options": [
      "Relational databases",
      "CAP-consistent systems",
      "NoSQL databases like Cassandra",
      "ACID transactions"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is NoSQL databases like Cassandra",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 848,
    "question": "Increasing thread pool size improves throughput until:",
    "options": [
      "Memory is saturated",
      "All CPU cores are idle",
      "Threads are blocked",
      "All logs are flushed"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Memory is saturated",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 849,
    "question": "Which tier should contain data validation logic?",
    "options": [
      "Presentation Tier",
      "Application Tier",
      "Data Tier",
      "Deployment Tier"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Application Tier",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 850,
    "question": "Why is automated testing important for maintainability?",
    "options": [
      "It improves performance",
      "It removes security risks",
      "It prevents regressions during future code changes",
      "It improves logging"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is It prevents regressions during future code changes",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 851,
    "question": "Which cloud-native feature increases fault tolerance?",
    "options": [
      "Infrastructure as Code",
      "Auto Healing Groups",
      "GitOps",
      "DNS over HTTPS"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Auto Healing Groups",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 852,
    "question": "Which storage choice is better for scalability?",
    "options": [
      "Flat files",
      "In-memory DB",
      "Distributed storage systems",
      "Local SSDs"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Distributed storage systems",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 853,
    "question": "Which of the following minimizes latency in REST API calls?",
    "options": [
      "Using HTTPS over HTTP",
      "Disabling response headers",
      "HTTP/2 multiplexing",
      "Long polling"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is HTTP/2 multiplexing",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 854,
    "question": "Which of the following best fits a system requiring strong consistency?",
    "options": [
      "Online banking app",
      "News feed timeline",
      "Live chat app",
      "Video streaming service"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Online banking app",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 855,
    "question": "Which of the following systems needs the highest reliability?",
    "options": [
      "E-commerce recommendation engine",
      "Real-time multiplayer game",
      "Air traffic control system",
      "Online quiz app"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Air traffic control system",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 856,
    "question": "What is a common application of one-tier architecture?",
    "options": [
      "Enterprise cloud systems",
      "Personal accounting software",
      "Streaming platform",
      "Real-time auctioning platform"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Personal accounting software",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 857,
    "question": "To measure API throughput, we typically calculate:",
    "options": [
      "Total users per day",
      "Response time for each call",
      "Requests per second (RPS)",
      "Total latency in ms"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Requests per second (RPS)",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 858,
    "question": "Which database design helps with write scalability?",
    "options": [
      "3NF normalization",
      "Denormalized wide-column store",
      "Flat schema with joins",
      "Global secondary indexes"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Denormalized wide-column store",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 859,
    "question": "Which of the following ensures fault tolerance in microservices?",
    "options": [
      "Monolithic deployment",
      "Service registry and discovery",
      "Database joins",
      "TLS handshakes"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Service registry and discovery",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 860,
    "question": "What does a layered architecture enable?",
    "options": [
      "Hardcoded endpoints",
      "Loose coupling and better maintainability",
      "Faster monolithic execution",
      "Improved DNS resolution"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Loose coupling and better maintainability",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 861,
    "question": "What is a characteristic of maintainable code?",
    "options": [
      "Repeated logic blocks",
      "Descriptive naming conventions",
      "Tightly-coupled services",
      "Hardcoded values"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Descriptive naming conventions",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 862,
    "question": "A system that can double its performance when resources are doubled is considered:",
    "options": [
      "Fault tolerant",
      "Vertically scalable",
      "Linearly scalable",
      "Fully consistent"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Linearly scalable",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 863,
    "question": "Which transport layer protocol is more suitable for low-latency apps?",
    "options": [
      "TCP",
      "UDP",
      "SMTP",
      "FTP"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is UDP",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 864,
    "question": "How is reliability different from availability?",
    "options": [
      "Reliability measures uptime; availability measures correctness",
      "Reliability is about uptime over long periods; availability is instant access",
      "Reliability ensures UI responsiveness",
      "They are interchangeable"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Reliability is about uptime over long periods; availability is instant access",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 865,
    "question": "Which kind of application benefits the most from horizontal scaling?",
    "options": [
      "CPU-bound data processing pipeline",
      "Simple calculator",
      "Static web server",
      "Single-user database"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CPU-bound data processing pipeline",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 866,
    "question": "Which layer is absent in two-tier architecture?",
    "options": [
      "Application logic",
      "Frontend",
      "Business logic layer",
      "Database"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Business logic layer",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 867,
    "question": "CAP theorem says a system can have at most two of:",
    "options": [
      "Consistency, Availability, Partition Tolerance",
      "Latency, Throughput, Cost",
      "Reliability, Consistency, UI",
      "Design, Cost, Scalability"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Consistency, Availability, Partition Tolerance",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 868,
    "question": "Which architectural style promotes high maintainability?",
    "options": [
      "Microservices",
      "Monolith",
      "Multithreading",
      "Single-page architecture"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Microservices",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 869,
    "question": "What helps fault tolerance in containerized environments?",
    "options": [
      "High CPU allocation",
      "Orchestrators like Kubernetes",
      "Static IP assignment",
      "Hardcoding DNS"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Orchestrators like Kubernetes",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 870,
    "question": "Which cloud feature improves latency for global users?",
    "options": [
      "Vertical scaling",
      "Global CDN",
      "SSH tunneling",
      "Load shedding"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Global CDN",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 871,
    "question": "Which is NOT a purpose of system design?",
    "options": [
      "Creating maintainable architecture",
      "Planning fault-tolerant systems",
      "Improving database indexing",
      "Ensuring scalable architecture"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Improving database indexing",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 872,
    "question": "Which cache strategy improves throughput?",
    "options": [
      "Write-through cache",
      "Write-behind cache",
      "Read-through cache",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is All of the above",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 873,
    "question": "Which component typically connects the Presentation and Data layers?",
    "options": [
      "Business Logic Layer",
      "Proxy Server",
      "Load Balancer",
      "Client SDK"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Business Logic Layer",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 874,
    "question": "Which of the following harms maintainability?",
    "options": [
      "Using design patterns",
      "Avoiding code reviews",
      "Following naming conventions",
      "Adding inline documentation"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Avoiding code reviews",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 875,
    "question": "What is one consequence of ignoring scalability in early-stage design?",
    "options": [
      "Faster initial deployment",
      "Lower hosting cost",
      "System crashes at scale",
      "Tighter team collaboration"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is System crashes at scale",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 876,
    "question": "What is a quick win to improve system availability?",
    "options": [
      "Deploy to a single availability zone",
      "Add retries to DB queries",
      "Use a health-checking load balancer",
      "Avoid CI/CD tools"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Use a health-checking load balancer",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 877,
    "question": "A faster DNS response reduces which component of latency?",
    "options": [
      "Data access latency",
      "Load balancing latency",
      "Name resolution latency",
      "Memory allocation latency"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Name resolution latency",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 878,
    "question": "What is a good practice to improve reliability in microservices?",
    "options": [
      "Tightly couple services",
      "Use synchronous chaining",
      "Implement circuit breakers and bulkheads",
      "Centralize all logic"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Implement circuit breakers and bulkheads",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 879,
    "question": "What causes inconsistency in distributed systems?",
    "options": [
      "Eventual sync",
      "Centralized cache",
      "Monolithic services",
      "Client-side load balancing"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Eventual sync",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 880,
    "question": "System design helps a developer to:",
    "options": [
      "Focus only on frontend logic",
      "Prepare for scalability and failure handling",
      "Avoid version control",
      "Skip test cases"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Prepare for scalability and failure handling",
    "topic": "System Design Fundamentals",
    "difficulty": "medium"
  },
  {
    "id": 881,
    "question": "What is the main difference between performance and scalability?",
    "options": [
      "Performance is about how much load a system can handle; scalability is about how fast it is.",
      "Performance refers to how efficiently a system works; scalability refers to how well it handles growth.",
      "Scalability is only applicable to databases.",
      "Performance is about cost optimization."
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Performance refers to how efficiently a system works; scalability refers to how well it handles growth.",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 882,
    "question": "A system that performs well under current load but fails under increased load is:",
    "options": [
      "Highly scalable",
      "Performance-optimized but not scalable",
      "Highly available",
      "Distributed system"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Performance-optimized but not scalable",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 883,
    "question": "Latency is best described as:",
    "options": [
      "Total users per day",
      "Time taken to complete a single operation",
      "Operations per second",
      "Network retry delay"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Time taken to complete a single operation",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 884,
    "question": "Which of the following best defines throughput?",
    "options": [
      "Delay before a system starts responding",
      "Rate of successful message delivery over a network",
      "Size of a single API call",
      "CPU cache time"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Rate of successful message delivery over a network",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 885,
    "question": "Which system will return stale data during partition but remain online?",
    "options": [
      "Consistent system",
      "Available system",
      "Fault-tolerant system",
      "Strongly coupled system"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Available system",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 886,
    "question": "In CAP theorem, a system can guarantee:",
    "options": [
      "All three - Consistency, Availability, and Partition Tolerance",
      "Only Consistency and Availability",
      "At most two of the three - CAP",
      "Only Availability and Performance"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is At most two of the three - CAP",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 887,
    "question": "Which of the following is a benefit of modular design?",
    "options": [
      "Reduced code readability",
      "Improved testability and maintainability",
      "Increased code duplication",
      "Harder code deployment"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Improved testability and maintainability",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 888,
    "question": "Modular architecture supports which principle?",
    "options": [
      "Tight coupling",
      "Single Responsibility",
      "Global accessibility",
      "Monolithic structure"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Single Responsibility",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 889,
    "question": "Which of the following aligns with clean code principles?",
    "options": [
      "Meaningful variable names",
      "Hard-coded values",
      "Long functions with nested loops",
      "Ignoring edge cases"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Meaningful variable names",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 890,
    "question": "According to clean code principles, functions should be:",
    "options": [
      "Long and all-inclusive",
      "Independent and short",
      "Wrapped inside other functions",
      "Written without comments"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Independent and short",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 891,
    "question": "What does CI/CD stand for?",
    "options": [
      "Code Inspection and Control Deployment",
      "Continuous Integration and Continuous Deployment",
      "Control Integrity and Code Development",
      "Cluster Integration and Code Delivery"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Continuous Integration and Continuous Deployment",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 892,
    "question": "Which tool is commonly used in CI/CD?",
    "options": [
      "Webpack",
      "Postman",
      "Jenkins",
      "MongoDB"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Jenkins",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 893,
    "question": "A highly performant system with poor scalability will:",
    "options": [
      "Handle increasing load gracefully",
      "Break down when load increases",
      "Always provide high availability",
      "Replicate data accurately"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Break down when load increases",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 894,
    "question": "Which metric is more important for video streaming?",
    "options": [
      "Latency",
      "Throughput",
      "Consistency",
      "Disk I/O"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Throughput",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 895,
    "question": "A strongly consistent system is most appropriate for:",
    "options": [
      "Social media likes",
      "Shopping cart price display",
      "Bank transactions",
      "Video content delivery"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Bank transactions",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 896,
    "question": "Modular code allows:",
    "options": [
      "Easier testing and debugging",
      "Slower execution",
      "Bigger memory usage",
      "All code in a single function"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Easier testing and debugging",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 897,
    "question": "Which principle helps improve readability?",
    "options": [
      "YAGNI",
      "DRY",
      "KISS",
      "All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is All of the above",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 898,
    "question": "Which phase comes first in a CI/CD pipeline?",
    "options": [
      "Deployment",
      "Testing",
      "Integration",
      "Monitoring"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Integration",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 899,
    "question": "Which statement is true?",
    "options": [
      "A scalable system is always performant",
      "A performant system is always scalable",
      "Scalability and performance are always inversely related",
      "A system can be scalable but not performant under load"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is A system can be scalable but not performant under load",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 900,
    "question": "Which scenario requires low latency?",
    "options": [
      "Video buffering",
      "Online gaming",
      "Blog content loading",
      "Email sync"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Online gaming",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 901,
    "question": "Eventual consistency favors:",
    "options": [
      "Latency",
      "Data freshness",
      "Availability during network partitions",
      "Strict locking"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Availability during network partitions",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 902,
    "question": "A modular project is typically:",
    "options": [
      "Hard to refactor",
      "Easier to scale and maintain",
      "Only for mobile apps",
      "Better in monolithic systems"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Easier to scale and maintain",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 903,
    "question": "What does 'DRY' stand for?",
    "options": [
      "Don't Repeat Yourself",
      "Debug Ready YAML",
      "Dynamic Runtime Yielding",
      "Deploy Recurring Yarns"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Don't Repeat Yourself",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 904,
    "question": "CI/CD helps teams by:",
    "options": [
      "Reducing deployment risks",
      "Avoiding automated testing",
      "Disabling rollback",
      "Avoiding version control"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Reducing deployment risks",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 905,
    "question": "A codebase that follows clean code principles is:",
    "options": [
      "Hard to change and test",
      "Simple, understandable, and testable",
      "Usually undocumented",
      "Only readable by author"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Simple, understandable, and testable",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 906,
    "question": "Which of these is not a CI/CD tool?",
    "options": [
      "CircleCI",
      "GitHub Actions",
      "Selenium",
      "Travis CI"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Selenium",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 907,
    "question": "Which one scales horizontally better?",
    "options": [
      "Tightly coupled systems",
      "Stateless systems",
      "Procedural codebases",
      "Single-node applications"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Stateless systems",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 908,
    "question": "A benefit of modular design in microservices is:",
    "options": [
      "Single point of failure",
      "Independent deployment of features",
      "Global state management",
      "Shared global variables"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Independent deployment of features",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 909,
    "question": "Which metric is most important for API responsiveness?",
    "options": [
      "Latency",
      "Throughput",
      "Uptime",
      "Bandwidth"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Latency",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 910,
    "question": "Which describes a highly scalable system?",
    "options": [
      "Performance reduces as users increase",
      "Performs consistently as load increases",
      "Slow but steady under high load",
      "Fails under minimal load"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Performs consistently as load increases",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 911,
    "question": "A high-latency system may still be acceptable if:",
    "options": [
      "It provides very low throughput",
      "Users are offline",
      "Throughput remains high and stable",
      "It’s hosted on a CDN"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Throughput remains high and stable",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 912,
    "question": "Which system characteristic ensures it can grow with increased demand?",
    "options": [
      "Scalability",
      "Latency",
      "Performance",
      "Bandwidth"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Scalability",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 913,
    "question": "What does KISS stand for in software design?",
    "options": [
      "Keep It Super Simple",
      "Keep It Secure and Safe",
      "Keep It Simple, Stupid",
      "Keep In System Scope"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Keep It Simple, Stupid",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 914,
    "question": "Which of these is an advantage of CI/CD pipelines?",
    "options": [
      "Faster production releases with fewer bugs",
      "Manual deployment only",
      "Increased human dependency",
      "Code changes deployed yearly"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Faster production releases with fewer bugs",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 915,
    "question": "Which system prioritizes consistency but sacrifices availability under partition?",
    "options": [
      "CP System",
      "AP System",
      "CA System",
      "RTOS"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is CP System",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 916,
    "question": "Which type of system is harder to scale and maintain?",
    "options": [
      "Layered system",
      "Modular system",
      "Monolithic system",
      "Microservices"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Monolithic system",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 917,
    "question": "Which of these helps in avoiding 'code smells'?",
    "options": [
      "Global variables",
      "Tightly coupled functions",
      "Modular and well-documented code",
      "Single large method"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Modular and well-documented code",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 918,
    "question": "Which of the following is a benefit of using automated tests in CI/CD?",
    "options": [
      "Increases manual test efforts",
      "Speeds up feedback cycle",
      "Adds deployment delay",
      "Requires no testing"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Speeds up feedback cycle",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 919,
    "question": "Which metric is more critical for real-time chat applications?",
    "options": [
      "Throughput",
      "Latency",
      "Consistency",
      "Storage"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Latency",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 920,
    "question": "Which of the following scenarios reflects a lack of scalability?",
    "options": [
      "Performance improves after adding nodes",
      "System response time increases with user load",
      "Memory usage remains constant",
      "More traffic leads to faster responses"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is System response time increases with user load",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 921,
    "question": "What makes modules easier to manage?",
    "options": [
      "Global access",
      "Isolation and clear interface contracts",
      "Hardcoded routing",
      "Mixed responsibilities"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Isolation and clear interface contracts",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 922,
    "question": "Why do companies prefer using CI/CD pipelines?",
    "options": [
      "They reduce cost by removing test teams",
      "They automate the release process",
      "They reduce code review quality",
      "They increase rollback risks"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is They automate the release process",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 923,
    "question": "Which one is a sign of good code maintainability?",
    "options": [
      "Functions with more than 100 lines",
      "Functions doing multiple unrelated tasks",
      "Code that follows SRP (Single Responsibility Principle)",
      "Deeply nested blocks"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Code that follows SRP (Single Responsibility Principle)",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 924,
    "question": "What does an AP system emphasize in CAP?",
    "options": [
      "Accuracy and durability",
      "Availability and Partition Tolerance",
      "Consistency and Accuracy",
      "Cost-efficiency"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Availability and Partition Tolerance",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 925,
    "question": "Loose coupling between modules helps by:",
    "options": [
      "Increasing dependencies",
      "Reducing change impact",
      "Avoiding version control",
      "Introducing technical debt"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Reducing change impact",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 926,
    "question": "Which best represents a scalable architecture?",
    "options": [
      "Performance drops after new users join",
      "Scales up or down with demand",
      "Depends on centralized DB",
      "Runs on a single thread"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Scales up or down with demand",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 927,
    "question": "CI/CD pipelines promote which DevOps practice?",
    "options": [
      "Waterfall",
      "Big Bang Integration",
      "Continuous delivery of features",
      "Manual test cycles"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Continuous delivery of features",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 928,
    "question": "Which practice supports 'DRY' coding?",
    "options": [
      "Copy-pasting logic across files",
      "Using reusable helper methods",
      "Manual loops with duplication",
      "Long switch-case blocks"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Using reusable helper methods",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 929,
    "question": "Why are modular services preferred in microservices?",
    "options": [
      "Because they share database schemas",
      "They reduce deployment complexity",
      "They eliminate interface definitions",
      "They avoid refactoring"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is They reduce deployment complexity",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 930,
    "question": "Which optimization lowers latency?",
    "options": [
      "Adding load balancers",
      "Pre-warming caches",
      "Adding retries",
      "Increasing payload size"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Pre-warming caches",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 931,
    "question": "Which of the following tasks can CI/CD automate?",
    "options": [
      "Code indentation",
      "UI design",
      "Deployment to production",
      "Team collaboration"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Deployment to production",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 932,
    "question": "Commenting code is important for:",
    "options": [
      "Making code longer",
      "Explaining complex logic clearly",
      "Adding HTML tags",
      "Hiding syntax errors"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Explaining complex logic clearly",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 933,
    "question": "Which service likely prefers availability over consistency?",
    "options": [
      "Flight booking system",
      "E-commerce product listing",
      "Banking core system",
      "Tax-filing portal"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is E-commerce product listing",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 934,
    "question": "High throughput can sometimes increase:",
    "options": [
      "Scalability",
      "Latency",
      "Availability",
      "Code quality"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Latency",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 935,
    "question": "Which architecture is most modular?",
    "options": [
      "Monolith",
      "Client-server",
      "Microservices",
      "Layered monolith"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Microservices",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 936,
    "question": "Which one breaks CI/CD pipelines?",
    "options": [
      "Failed unit tests",
      "Green builds",
      "Git commits",
      "Docker containers"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Failed unit tests",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 937,
    "question": "Which term is used for scaling by adding more machines?",
    "options": [
      "Vertical scaling",
      "Horizontal scaling",
      "Runtime scaling",
      "Code optimization"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Horizontal scaling",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 938,
    "question": "Which naming convention enhances maintainability?",
    "options": [
      "i, j, k for all variables",
      "Descriptive and meaningful names",
      "Mixed language names",
      "Single character names"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Descriptive and meaningful names",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 939,
    "question": "Which workload benefits most from high throughput?",
    "options": [
      "Payment gateway",
      "Bulk image uploads",
      "Real-time chat",
      "Online game"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Bulk image uploads",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 940,
    "question": "What is the final step in a CD pipeline?",
    "options": [
      "Source code commit",
      "Code review",
      "Deploy to production",
      "Integration tests"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Deploy to production",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 941,
    "question": "A system that handles 10,000 users efficiently but fails at 1,00,000 users lacks:",
    "options": [
      "Performance",
      "Concurrency",
      "Scalability",
      "Storage"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Scalability",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 942,
    "question": "Which best describes a high-throughput and low-latency system?",
    "options": [
      "Processes many requests slowly",
      "Processes few requests quickly",
      "Processes many requests quickly",
      "Processes few requests slowly"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Processes many requests quickly",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 943,
    "question": "Refactoring code improves:",
    "options": [
      "Performance only",
      "Maintainability and readability",
      "Execution time",
      "Memory usage"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Maintainability and readability",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 944,
    "question": "If every function performs one specific task, the system follows:",
    "options": [
      "Multi-responsibility principle",
      "Single Responsibility Principle",
      "Dependency Injection",
      "Encapsulation"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Single Responsibility Principle",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 945,
    "question": "Which tool is used to define CI/CD workflows using YAML?",
    "options": [
      "GitHub Actions",
      "MySQL",
      "Nginx",
      "Figma"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is GitHub Actions",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 946,
    "question": "During a network partition, which system still serves data (even if outdated)?",
    "options": [
      "Consistent-first system",
      "Available-first system",
      "Strict transactional system",
      "Stateful load balancer"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Available-first system",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 947,
    "question": "Which of the following will increase scalability but not necessarily performance?",
    "options": [
      "Optimizing database joins",
      "Horizontal scaling with stateless APIs",
      "Refactoring loops into recursion",
      "Adding more RAM to a single node"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Horizontal scaling with stateless APIs",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 948,
    "question": "A codebase with repeated logic in multiple files violates which principle?",
    "options": [
      "KISS",
      "DRY",
      "OCP",
      "LSP"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is DRY",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 949,
    "question": "Rollback mechanisms in CI/CD are useful when:",
    "options": [
      "New features are unstable",
      "Code is perfectly tested",
      "No tests are needed",
      "Code runs locally"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is New features are unstable",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 950,
    "question": "Reusability of modules increases when:",
    "options": [
      "They share global state",
      "They are tightly coupled",
      "They have single, independent logic",
      "They use long method chains"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is They have single, independent logic",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 951,
    "question": "Which of the following is true?",
    "options": [
      "High throughput guarantees low latency",
      "High latency always means poor performance",
      "Low latency doesn’t guarantee high throughput",
      "Throughput is measured in milliseconds"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Low latency doesn’t guarantee high throughput",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 952,
    "question": "Which code structure supports clean design?",
    "options": [
      "Magic numbers everywhere",
      "Short methods with descriptive names",
      "Deeply nested if-else blocks",
      "One method per class"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Short methods with descriptive names",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 953,
    "question": "Continuous deployment pushes code:",
    "options": [
      "To version control only",
      "To production after passing tests",
      "To staging only",
      "To the design board"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is To production after passing tests",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 954,
    "question": "Breaking code into self-contained units improves:",
    "options": [
      "Latency",
      "Availability",
      "Maintainability",
      "Partition tolerance"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Maintainability",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 955,
    "question": "A consistent system ensures:",
    "options": [
      "All users see the same data immediately",
      "System is always online",
      "No partition tolerance",
      "Zero data replication"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is All users see the same data immediately",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 956,
    "question": "Improving algorithm efficiency affects:",
    "options": [
      "Scalability only",
      "Performance primarily",
      "CI/CD pipelines",
      "Version control"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Performance primarily",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 957,
    "question": "Which is NOT a clean code practice?",
    "options": [
      "Small functions",
      "Commented complex logic",
      "Meaningful names",
      "Copy-pasted logic"
    ],
    "correctAnswer": "D",
    "explanation": "The correct answer is Copy-pasted logic",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 958,
    "question": "A build fails during CI. What should happen next?",
    "options": [
      "Deploy to production anyway",
      "Notify team and halt pipeline",
      "Skip tests",
      "Rollback to a prior Git commit"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Notify team and halt pipeline",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 959,
    "question": "What kind of app is most sensitive to latency?",
    "options": [
      "PDF viewer",
      "Stock trading dashboard",
      "Blogging tool",
      "Data warehouse"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Stock trading dashboard",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 960,
    "question": "Which project is easier to unit test?",
    "options": [
      "Tightly coupled monolith",
      "Modular microservice",
      "Flat code with repeated logic",
      "All-in-one script"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Modular microservice",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 961,
    "question": "What happens in a CP system during network partition?",
    "options": [
      "Returns stale data",
      "Becomes unavailable temporarily",
      "Ignores write conflicts",
      "Serves cached data only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Becomes unavailable temporarily",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 962,
    "question": "What can be used for CI in GitHub repositories?",
    "options": [
      "GitHub Pages",
      "GitHub Issues",
      "GitHub Actions",
      "GitHub Wiki"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is GitHub Actions",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 963,
    "question": "Which change improves performance but not scalability?",
    "options": [
      "Using a faster sorting algorithm",
      "Distributing workload across servers",
      "Using sharded databases",
      "Stateless design with horizontal scaling"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Using a faster sorting algorithm",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 964,
    "question": "Code that is readable and modifiable by any team member is called:",
    "options": [
      "Technical debt",
      "Hacky patch",
      "Clean code",
      "Legacy code"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Clean code",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 965,
    "question": "Loose coupling and high cohesion lead to:",
    "options": [
      "Better maintainability",
      "Harder debugging",
      "Slower performance",
      "Brittle code"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Better maintainability",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 966,
    "question": "Which choice improves throughput in batch jobs?",
    "options": [
      "Parallel processing",
      "Single thread queues",
      "Input throttling",
      "Hardcoding delays"
    ],
    "correctAnswer": "A",
    "explanation": "The correct answer is Parallel processing",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 967,
    "question": "CI/CD ensures code is always:",
    "options": [
      "Merged without review",
      "Compiled without errors and tested",
      "Written in Java",
      "Tested manually"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Compiled without errors and tested",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 968,
    "question": "Clean code avoids:",
    "options": [
      "Code reuse",
      "Commenting functions",
      "Side effects and ambiguity",
      "Readable logic"
    ],
    "correctAnswer": "C",
    "explanation": "The correct answer is Side effects and ambiguity",
    "topic": "Maintainability",
    "difficulty": "medium"
  },
  {
    "id": 969,
    "question": "In distributed DBs, what ensures consistency?",
    "options": [
      "Async replication",
      "Majority quorum reads and writes",
      "Disabling logging",
      "Master-slave replication only"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Majority quorum reads and writes",
    "topic": "Comparison",
    "difficulty": "medium"
  },
  {
    "id": 970,
    "question": "A system that adds instances dynamically based on CPU load is:",
    "options": [
      "Performance optimized",
      "Horizontally scalable",
      "Vertically tuned",
      "Low-latency bound"
    ],
    "correctAnswer": "B",
    "explanation": "The correct answer is Horizontally scalable",
    "topic": "Comparison",
    "difficulty": "medium"
  }
];
