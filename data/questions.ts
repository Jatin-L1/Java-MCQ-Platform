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
    "question": "What is the primary difference between system software and application software?",
    "options": [
      "System software is used by end-users, while application software manages hardware.",
      "System software manages hardware, while application software is used by end-users.",
      "System software and application software are the same.",
      "Application software is used to develop system software."
    ],
    "correctAnswer": "B",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "question": "Which of the following is not a characteristic of software?",
    "options": [
      "Reliability", 
      "Usability", 
      "Inflexibility", 
      "Efficiency"
    ],
    "correctAnswer": "C",
    "topic": "Software Characteristics",
    "difficulty": "medium"
  },
  {
    "id": 3,
    "question": "Why is software evolution necessary?",
    "options": [
      "To maintain hardware compatibility",
      "To reduce the size of software",
      "To adapt to changing requirements and environments",
      "To eliminate the need for testing"
    ],
    "correctAnswer": "C",
    "topic": "Software Evolution",
    "difficulty": "easy"
  },
  {
    "id": 4,
    "question": "What does encapsulation refer to in software engineering?",
    "options": [
      "Hiding the data and methods within an object",
      "Breaking down software into smaller components",
      "Creating reusable components",
      "Continuous integration and deployment"
    ],
    "correctAnswer": "A",
    "topic": "Software Engineering Principles",
    "difficulty": "medium"
  },
  {
    "id": 5,
    "question": "Which of the following is not a type of software mentioned in the document?",
    "options": [
      "Middleware",
      "Firmware",
      "Engineering and Scientific Software",
      "Financial Software"
    ],
    "correctAnswer": "D",
    "topic": "Software Types",
    "difficulty": "medium"
  },
  {
    "id": 6,
    "question": "What is the role of middleware?",
    "options": [
      "To manage hardware resources",
      "To provide a platform for application software",
      "To sit between system software and applications",
      "To act as an operating system"
    ],
    "correctAnswer": "C",
    "topic": "Software Types",
    "difficulty": "medium"
  },
  {
    "id": 7,
    "question": "Which of the following principles is not part of software engineering?",
    "options": [
      "Modularity",
      "Abstraction",
      "Encapsulation",
      "Centralization"
    ],
    "correctAnswer": "D",
    "topic": "Software Engineering Principles",
    "difficulty": "medium"
  },
  {
    "id": 8,
    "question": "What does 'software scope' refer to?",
    "options": [
      "The size of the software",
      "The performance requirements of the software",
      "The functionality and features of the software",
      "The cost of developing the software"
    ],
    "correctAnswer": "C",
    "topic": "Software Requirements",
    "difficulty": "easy"
  },
  {
    "id": 9,
    "question": "In the context of software engineering, what is 'agile methodology'?",
    "options": [
      "A method focusing on fixed requirements",
      "A method focusing on iterative and incremental development",
      "A method for hardware development",
      "A method for final product testing"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Methodologies",
    "difficulty": "easy"
  },
  {
    "id": 10,
    "question": "What is 'continuous integration' in software development?",
    "options": [
      "Regularly integrating changes into the software",
      "Developing software without testing",
      "Ensuring software runs on multiple platforms",
      "Rewriting the software from scratch"
    ],
    "correctAnswer": "A",
    "topic": "Software Development Practices",
    "difficulty": "medium"
  },
  {
    "id": 11,
    "question": "Which type of software is specifically designed to operate computer devices and peripherals?",
    "options": [
      "System Software",
      "Application Software",
      "Driver Software",
      "Programming Software"
    ],
    "correctAnswer": "C",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 12,
    "question": "Which attribute of software measures its capability to provide failure-free service?",
    "options": [
      "Usability",
      "Reliability",
      "Efficiency",
      "Maintainability"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality Attributes",
    "difficulty": "medium"
  },
  {
    "id": 13,
    "question": "What is the main focus of embedded software?",
    "options": [
      "To perform scientific calculations",
      "To manage database systems",
      "To control features and functions of a product or system",
      "To facilitate business operations"
    ],
    "correctAnswer": "C",
    "topic": "Software Types",
    "difficulty": "medium"
  },
  {
    "id": 14,
    "question": "What is the purpose of software testing?",
    "options": [
      "To add new features",
      "To verify that software meets its requirements and is free of bugs",
      "To reduce software size",
      "To increase the software cost"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 15,
    "question": "Which software classification is based on deployment?",
    "options": [
      "Native software and cross-platform software",
      "Installed software and cloud-based software",
      "Proprietary software and open-source software",
      "Small-scale software and enterprise software"
    ],
    "correctAnswer": "B",
    "topic": "Software Classifications",
    "difficulty": "medium"
  },
  {
    "id": 16,
    "question": "What does 'maintainability' in software refer to?",
    "options": [
      "The ability to be used by multiple users",
      "The capability to be modified for corrections, improvements, or adaptations",
      "The ability to run on multiple platforms",
      "The efficiency in resource usage"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality Attributes",
    "difficulty": "easy"
  },
  {
    "id": 17,
    "question": "What is 'web application software' primarily characterized by?",
    "options": [
      "Running on client browsers",
      "Controlling embedded systems",
      "Managing hardware resources",
      "Facilitating scientific research"
    ],
    "correctAnswer": "A",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 18,
    "question": "What does the 'efficiency' attribute of software measure?",
    "options": [
      "The performance relative to the amount of resources used",
      "The ability to be understood and used",
      "The ease of modifying the software",
      "The software's ability to adapt to different environments"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality Attributes",
    "difficulty": "medium"
  },
  {
    "id": 19,
    "question": "Which software development model is known for its iterative and adaptive approach?",
    "options": [
      "Waterfall model",
      "V-model",
      "Agile model",
      "Spiral model"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 20,
    "question": "What is 'portability' in software?",
    "options": [
      "The capability to be used by multiple users simultaneously",
      "The ability to be adapted for different environments without changes",
      "The efficiency in executing commands",
      "The ease of debugging"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality Attributes",
    "difficulty": "medium"
  },
  {
    "id": 21,
    "question": "What is the main goal of software engineering?",
    "options": [
      "To develop hardware components",
      "To create high-quality, reliable, and maintainable software",
      "To increase the complexity of software",
      "To eliminate the need for user feedback"
    ],
    "correctAnswer": "B",
    "topic": "Software Engineering",
    "difficulty": "easy"
  },
  {
    "id": 22,
    "question": "Which of the following is a nonnumerical algorithm used in Artificial Intelligence software?",
    "options": [
      "Sorting algorithms",
      "Numerical integration",
      "Pattern recognition",
      "Matrix multiplication"
    ],
    "correctAnswer": "C",
    "topic": "Software Algorithms",
    "difficulty": "hard"
  },
  {
    "id": 23,
    "question": "Which type of software is designed for a specific operating system?",
    "options": [
      "Cross-platform software",
      "Native software",
      "Cloud-based software",
      "Enterprise software"
    ],
    "correctAnswer": "B",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 24,
    "question": "What is a 'design pattern' in software engineering?",
    "options": [
      "A template for solving recurring problems in software design",
      "A method for hardware design",
      "A type of software license",
      "A security measure"
    ],
    "correctAnswer": "A",
    "topic": "Software Design",
    "difficulty": "medium"
  },
  {
    "id": 25,
    "question": "What does 'usability' of software refer to?",
    "options": [
      "The software's ability to run efficiently",
      "The software's ability to be understood, learned, and used",
      "The software's resistance to security threats",
      "The software's portability across different platforms"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality Attributes",
    "difficulty": "easy"
  },
  {
    "id": 26,
    "question": "Which software is primarily used to fulfill specific business needs?",
    "options": [
      "System software",
      "Application software",
      "Middleware",
      "Driver software"
    ],
    "correctAnswer": "B",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 27,
    "question": "What does the term 'release planning' involve in software evolution?",
    "options": [
      "Analyzing and planning for changes, and implementing them in new software versions",
      "Testing the software for bugs",
      "Documenting software requirements",
      "Designing the software architecture"
    ],
    "correctAnswer": "A",
    "topic": "Software Development Process",
    "difficulty": "medium"
  },
  {
    "id": 28,
    "question": "Which of the following is not an example of system software?",
    "options": [
      "Operating system",
      "Device drivers",
      "Web browser",
      "Utility software"
    ],
    "correctAnswer": "C",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 29,
    "question": "What does 'abstraction' mean in the context of software engineering?",
    "options": [
      "Hiding the implementation details of a component and exposing only necessary functionality",
      "Wrapping data and methods into a single unit",
      "Creating multiple instances of an object",
      "Testing the software for bugs"
    ],
    "correctAnswer": "A",
    "topic": "Software Engineering Principles",
    "difficulty": "medium"
  },
  {
    "id": 30,
    "question": "Why is security an important factor in software evolution?",
    "options": [
      "To reduce software size",
      "To ensure software compatibility with old hardware",
      "To prevent software-based cyberattacks and protect confidential data",
      "To increase the complexity of the software"
    ],
    "correctAnswer": "C",
    "topic": "Software Security",
    "difficulty": "medium"
  },
  {
    "id": 31,
    "question": "Which of the following is NOT a key process activity common to all software processes?",
    "options": [
      "Software specifications",
      "Software development",
      "Software validation",
      "Software marketing"
    ],
    "correctAnswer": "D",
    "topic": "Software Process",
    "difficulty": "medium"
  },
  {
    "id": 32,
    "question": "The process model that shows the series of activities in the process along with their inputs, outputs, and dependencies is known as:",
    "options": [
      "Workflow model",
      "Dataflow model",
      "Role/action model",
      "Object model"
    ],
    "correctAnswer": "A",
    "topic": "Software Process Models",
    "difficulty": "medium"
  },
  {
    "id": 33,
    "question": "In which phase of the software process are the functionality and constraints on software operation defined?",
    "options": [
      "Software specification",
      "Software development",
      "Software validation",
      "Software evolution"
    ],
    "correctAnswer": "A",
    "topic": "Software Process",
    "difficulty": "easy"
  },
  {
    "id": 34,
    "question": "A role/action model primarily focuses on:",
    "options": [
      "The data transformations within the process",
      "The roles of people and their responsibilities",
      "The sequence of activities in the process",
      "The software architecture"
    ],
    "correctAnswer": "B",
    "topic": "Software Process Models",
    "difficulty": "medium"
  },
  {
    "id": 35,
    "question": "Which software process model represents the process as a set of activities, each of which carries out some data transformations?",
    "options": [
      "Workflow model",
      "Dataflow or activity model",
      "Role/action model",
      "Incremental model"
    ],
    "correctAnswer": "B",
    "topic": "Software Process Models",
    "difficulty": "hard"
  },
  {
    "id": 36,
    "question": "Which of the following is a primary reason for using a software process model?",
    "options": [
      "To increase marketing potential",
      "To ensure systematic software product development",
      "To minimize the need for documentation",
      "To ensure software is free of bugs"
    ],
    "correctAnswer": "B",
    "topic": "Software Process Models",
    "difficulty": "easy"
  },
  {
    "id": 37,
    "question": "What is a key consequence of not following a process model in software development?",
    "options": [
      "Reduced software cost",
      "Increased team discipline",
      "Development chaos",
      "Faster development"
    ],
    "correctAnswer": "C",
    "topic": "Software Process Models",
    "difficulty": "medium"
  },
  {
    "id": 38,
    "question": "Which model was introduced by Winston Royce in 1970?",
    "options": [
      "Spiral model",
      "Waterfall model",
      "V-Model",
      "Incremental model"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 39,
    "question": "In the Waterfall Model, which phase follows after the Design phase?",
    "options": [
      "Requirements analysis",
      "Implementation and unit testing",
      "Integration and system testing",
      "Operation and maintenance"
    ],
    "correctAnswer": "B",
    "topic": "Waterfall Model",
    "difficulty": "easy"
  },
  {
    "id": 40,
    "question": "Which phase of the Waterfall Model involves creating a detailed Software Requirement Specification (SRS) document?",
    "options": [
      "Requirements analysis and specification",
      "Design",
      "Implementation and unit testing",
      "Integration and system testing"
    ],
    "correctAnswer": "A",
    "topic": "Waterfall Model",
    "difficulty": "easy"
  },
  {
    "id": 41,
    "question": "Which of the following is NOT an advantage of the Waterfall Model?",
    "options": [
      "Suitable for smaller projects with well-understood requirements",
      "High customer interaction during development",
      "Fixed start and end points for each phase",
      "Easy to manage due to phase rigidity"
    ],
    "correctAnswer": "B",
    "topic": "Waterfall Model",
    "difficulty": "medium"
  },
  {
    "id": 42,
    "question": "One of the disadvantages of the Waterfall Model is:",
    "options": [
      "Overlapping phases",
      "High customer interaction",
      "Inflexibility to requirement changes",
      "Continuous delivery of working software"
    ],
    "correctAnswer": "C",
    "topic": "Waterfall Model",
    "difficulty": "medium"
  },
  {
    "id": 43,
    "question": "The phase where the quality of the end product is determined by the effectiveness of testing carried out is known as:",
    "options": [
      "Requirements analysis",
      "Implementation and unit testing",
      "Integration and system testing",
      "Operation and maintenance"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 44,
    "question": "In which scenario is the Waterfall Model MOST suitable?",
    "options": [
      "Projects with ambiguous requirements",
      "Projects with well-known, fixed requirements",
      "Projects requiring high customer interaction",
      "Projects with a high risk of changing requirements"
    ],
    "correctAnswer": "B",
    "topic": "Waterfall Model",
    "difficulty": "medium"
  },
  {
    "id": 45,
    "question": "Which SDLC model is described as an evolutionary model suitable for projects with high-risk analysis?",
    "options": [
      "Waterfall model",
      "V-Model",
      "Spiral model",
      "Incremental model"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 46,
    "question": "Which phase is NOT typically part of the SDLC?",
    "options": [
      "Feasibility study",
      "Marketing analysis",
      "Implementation",
      "Maintenance"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Lifecycle",
    "difficulty": "easy"
  },
  {
    "id": 47,
    "question": "The Spiral Model combines elements of which two types of process models?",
    "options": [
      "Waterfall and Agile",
      "Incremental and Iterative",
      "Waterfall and Prototyping",
      "Agile and V-Model"
    ],
    "correctAnswer": "C",
    "topic": "Spiral Model",
    "difficulty": "hard"
  },
  {
    "id": 48,
    "question": "In the Spiral Model, what is the primary focus during the Risk Analysis phase?",
    "options": [
      "Defining system requirements",
      "Designing system architecture",
      "Identifying and mitigating project risks",
      "Testing and validation"
    ],
    "correctAnswer": "C",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 49,
    "question": "Agile methodologies prioritize:",
    "options": [
      "Comprehensive documentation",
      "Following a strict plan",
      "Customer collaboration and response to change",
      "Long-term contracts"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 50,
    "question": "Which Agile framework focuses on iterative development and frequent releases with fixed time intervals called Sprints?",
    "options": [
      "Scrum",
      "Kanban",
      "Extreme Programming (XP)",
      "Lean"
    ],
    "correctAnswer": "A",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 51,
    "question": "The V-Model is also known as:",
    "options": [
      "Verification and Validation model",
      "Evolutionary model",
      "Incremental model",
      "Iterative model"
    ],
    "correctAnswer": "A",
    "topic": "V-Model",
    "difficulty": "medium"
  },
  {
    "id": 52,
    "question": "In the V-Model, which phase directly follows System Design?",
    "options": [
      "Acceptance Testing",
      "Unit Testing",
      "Integration Testing",
      "Implementation"
    ],
    "correctAnswer": "D",
    "topic": "V-Model",
    "difficulty": "medium"
  },
  {
    "id": 53,
    "question": "Which of the following is a key characteristic of the Incremental Model?",
    "options": [
      "Single-phase completion",
      "High customer interaction",
      "Stepwise refinement",
      "Continuous integration"
    ],
    "correctAnswer": "C",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 54,
    "question": "Incremental Model is most suitable for:",
    "options": [
      "Small projects with fixed requirements",
      "Large projects with changing requirements",
      "Short-term projects with fixed timelines",
      "Projects with minimal user interaction"
    ],
    "correctAnswer": "B",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 55,
    "question": "Which type of testing is performed to ensure that individual modules function correctly?",
    "options": [
      "Integration Testing",
      "System Testing",
      "Unit Testing",
      "Acceptance Testing"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 56,
    "question": "In which SDLC phase is user acceptance testing (UAT) performed?",
    "options": [
      "Design",
      "Implementation",
      "Testing",
      "Maintenance"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 57,
    "question": "What is the primary goal of the maintenance phase in SDLC?",
    "options": [
      "To create the system architecture",
      "To correct faults and improve system performance",
      "To gather system requirements",
      "To train users on the new system"
    ],
    "correctAnswer": "B",
    "topic": "Software Maintenance",
    "difficulty": "easy"
  },
  {
    "id": 58,
    "question": "Which type of maintenance involves modifying the system to cope with changes in the software environment?",
    "options": [
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance"
    ],
    "correctAnswer": "B",
    "topic": "Software Maintenance",
    "difficulty": "medium"
  },
  {
    "id": 59,
    "question": "In the context of SDLC, what does SRS stand for?",
    "options": [
      "Software Review System",
      "System Requirements Specification",
      "Software Requirements Specification",
      "Systematic Review Specification"
    ],
    "correctAnswer": "C",
    "topic": "Software Requirements",
    "difficulty": "easy"
  },
  {
    "id": 60,
    "question": "Which SDLC model allows phases to overlap and exhibit a flexible, iterative process?",
    "options": [
      "Waterfall model",
      "V-Model",
      "Spiral model",
      "Agile model"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 61,
    "question": "Which software development model combines both iterative and incremental approaches?",
    "options": [
      "Waterfall Model",
      "Evolutionary Model",
      "V-Model",
      "RAD Model"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 62,
    "question": "In the Evolutionary Model, how is user feedback utilized?",
    "options": [
      "Only at the end of the development cycle",
      "After each incremental delivery",
      "Only during the initial planning phase",
      "Feedback is not considered"
    ],
    "correctAnswer": "B",
    "topic": "Evolutionary Model",
    "difficulty": "medium"
  },
  {
    "id": 63,
    "question": "Which model is best suited for projects where requirements are expected to change frequently?",
    "options": [
      "Waterfall Model",
      "Spiral Model",
      "Prototype Model",
      "Evolutionary Model"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 64,
    "question": "What is the main advantage of the Iterative Waterfall Model over the classical Waterfall Model?",
    "options": [
      "It requires less documentation.",
      "It provides feedback paths for error correction.",
      "It does not need a feasibility study.",
      "It skips the testing phase."
    ],
    "correctAnswer": "B",
    "topic": "Waterfall Model",
    "difficulty": "medium"
  },
  {
    "id": 65,
    "question": "What is the Incremental Process Model also known as?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Successive Version Model",
      "RAD Model"
    ],
    "correctAnswer": "C",
    "topic": "Incremental Model",
    "difficulty": "hard"
  },
  {
    "id": 66,
    "question": "Which phase is not part of the Spiral Model?",
    "options": [
      "Planning",
      "Risk Analysis",
      "Development",
      "Maintenance"
    ],
    "correctAnswer": "D",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 67,
    "question": "Which of the following is not an advantage of the Spiral Model?",
    "options": [
      "Flexibility in Requirements",
      "High Cost",
      "Emphasis on Risk Management",
      "Improved Communication"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 68,
    "question": "Which SDLC model is typically used when the customer does not know the exact project requirements beforehand?",
    "options": [
      "Waterfall Model",
      "Prototype Model",
      "V-Model",
      "Incremental Model"
    ],
    "correctAnswer": "B",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 69,
    "question": "In the Prototyping Model, which step comes immediately after building a prototype?",
    "options": [
      "Requirement Gathering and Analysis",
      "Quick Design",
      "Initial User Evaluation",
      "Refining Prototype"
    ],
    "correctAnswer": "C",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 70,
    "question": "Which model divides the development cycle into smaller incremental waterfall models?",
    "options": [
      "Evolutionary Model",
      "Spiral Model",
      "Incremental Model",
      "Prototype Model"
    ],
    "correctAnswer": "A",
    "topic": "Evolutionary Model",
    "difficulty": "hard"
  },
  {
    "id": 71,
    "question": "Which model is best suited for large projects that can be easily divided into smaller modules?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Evolutionary Model",
      "Prototype Model"
    ],
    "correctAnswer": "C",
    "topic": "Evolutionary Model",
    "difficulty": "medium"
  },
  {
    "id": 72,
    "question": "In the Spiral Model, what is the focus of the first loop?",
    "options": [
      "Final product delivery",
      "Requirement gathering and risk analysis",
      "System testing",
      "Maintenance planning"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 73,
    "question": "Which of the following is a disadvantage of the Prototyping Model?",
    "options": [
      "Early feedback from customers",
      "Costly with respect to time and money",
      "Easy to accommodate new requirements",
      "Errors can be detected early"
    ],
    "correctAnswer": "B",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 74,
    "question": "What is the primary goal of risk analysis in the Spiral Model?",
    "options": [
      "To reduce the development cost",
      "To manage and mitigate potential risks",
      "To speed up the development process",
      "To eliminate the need for testing"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 75,
    "question": "Which SDLC model is recommended for projects with many unknown risks?",
    "options": [
      "Waterfall Model",
      "Incremental Model",
      "Spiral Model",
      "Prototype Model"
    ],
    "correctAnswer": "C",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 76,
    "question": "In the Incremental Process Model, what is developed and delivered in successive iterations?",
    "options": [
      "Complete software system",
      "Simple working systems with core features",
      "Final product only",
      "Documentation"
    ],
    "correctAnswer": "B",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 77,
    "question": "Which model provides a working prototype early in the development cycle to gather user feedback?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Incremental Model",
      "Prototype Model"
    ],
    "correctAnswer": "D",
    "topic": "Prototype Model",
    "difficulty": "easy"
  },
  {
    "id": 78,
    "question": "What is the main disadvantage of the Spiral Model?",
    "options": [
      "It handles risks effectively.",
      "It is simple to use.",
      "It can be very complex and costly.",
      "It provides customer satisfaction."
    ],
    "correctAnswer": "C",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 79,
    "question": "What does the Incremental Process Model focus on during each iteration?",
    "options": [
      "Delivering the entire system",
      "Developing core features first",
      "Skipping the testing phase",
      "Completing the entire design phase"
    ],
    "correctAnswer": "B",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 80,
    "question": "Which of the following is a key characteristic of the Prototype Model?",
    "options": [
      "Rigid requirements",
      "Limited user involvement",
      "Iterative refinement based on user feedback",
      "No need for testing"
    ],
    "correctAnswer": "C",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 81,
    "question": "Which SDLC model emphasizes regular evaluations and reviews?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Spiral Model",
      "RAD Model"
    ],
    "correctAnswer": "C",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 82,
    "question": "In the Prototyping Model, which step involves improving the design based on user feedback?",
    "options": [
      "Initial User Evaluation",
      "Quick Design",
      "Requirement Gathering and Analysis",
      "Refining Prototype"
    ],
    "correctAnswer": "D",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 83,
    "question": "What is the main purpose of the engineering phase in the Spiral Model?",
    "options": [
      "Gathering requirements",
      "Developing the software",
      "Analyzing risks",
      "Evaluating the project"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 84,
    "question": "Which model allows for early user interaction and feedback?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Incremental Model",
      "Prototype Model"
    ],
    "correctAnswer": "D",
    "topic": "Prototype Model",
    "difficulty": "easy"
  },
  {
    "id": 85,
    "question": "What is a significant advantage of using the Evolutionary Model?",
    "options": [
      "Fixed requirements",
      "No user feedback required",
      "Increased customer confidence",
      "Single-phase development"
    ],
    "correctAnswer": "C",
    "topic": "Evolutionary Model",
    "difficulty": "medium"
  },
  {
    "id": 86,
    "question": "Which SDLC model is known for its systematic and iterative approach?",
    "options": [
      "Waterfall Model",
      "Spiral Model",
      "Prototype Model",
      "Incremental Model"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 87,
    "question": "In the Prototyping Model, what is created during the Quick Design phase?",
    "options": [
      "Final product",
      "Detailed design",
      "Basic design of the requirement",
      "Complete system"
    ],
    "correctAnswer": "C",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 88,
    "question": "Which model breaks down work into smaller chunks that are delivered incrementally to the customer?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Evolutionary Model",
      "Prototype Model"
    ],
    "correctAnswer": "C",
    "topic": "Evolutionary Model",
    "difficulty": "easy"
  },
  {
    "id": 89,
    "question": "In the Incremental Process Model, what is the main benefit of developing core features first?",
    "options": [
      "Reduced documentation",
      "Easier modification of the system",
      "Faster final delivery",
      "Elimination of the testing phase"
    ],
    "correctAnswer": "B",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 90,
    "question": "What is the focus of the evaluation phase in the Spiral Model?",
    "options": [
      "Developing software",
      "Analyzing risks",
      "Determining if the software meets customer requirements",
      "Gathering requirements"
    ],
    "correctAnswer": "C",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 91,
    "question": "Which SDLC model is particularly useful for large and complex projects?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Spiral Model",
      "Prototype Model"
    ],
    "correctAnswer": "C",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 92,
    "question": "In the Prototyping Model, what is the purpose of the initial user evaluation?",
    "options": [
      "Gathering final requirements",
      "Refining the prototype based on feedback",
      "Finalizing the design",
      "Delivering the final product"
    ],
    "correctAnswer": "B",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 93,
    "question": "Which model is described as having loops representing complete software development cycles?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Spiral Model",
      "Incremental Model"
    ],
    "correctAnswer": "C",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 94,
    "question": "What is a disadvantage of the Prototyping Model related to customer expectations?",
    "options": [
      "Customers may lose interest if not satisfied with the initial prototype.",
      "Prototypes are too detailed.",
      "Requirements are fixed early on.",
      "There is no user feedback."
    ],
    "correctAnswer": "A",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 95,
    "question": "Which phase is not explicitly part of the Spiral Model's typical phases?",
    "options": [
      "Planning",
      "Risk Analysis",
      "Engineering",
      "Deployment"
    ],
    "correctAnswer": "D",
    "topic": "Spiral Model",
    "difficulty": "hard"
  },
  {
    "id": 96,
    "question": "What is a benefit of using the Evolutionary Model for software development?",
    "options": [
      "Reduced customer involvement",
      "Quick delivery of the final product",
      "Continuous feedback and improvement",
      "Fixed requirements from the start"
    ],
    "correctAnswer": "C",
    "topic": "Evolutionary Model",
    "difficulty": "medium"
  },
  {
    "id": 97,
    "question": "In the Incremental Process Model, which phase typically follows the delivery of each iteration?",
    "options": [
      "Final testing",
      "Requirement gathering",
      "Planning for the next increment",
      "Complete system redesign"
    ],
    "correctAnswer": "C",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 98,
    "question": "Which SDLC model allows for incorporating changes even at later stages of development?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Prototype Model",
      "Incremental Model"
    ],
    "correctAnswer": "D",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 99,
    "question": "What is a common risk associated with the Spiral Model?",
    "options": [
      "Lack of user involvement",
      "High dependency on risk analysis",
      "Fixed project duration",
      "No documentation"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "hard"
  },
  {
    "id": 100,
    "question": "Which model is suitable when the customer wants to start using the core features early?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Evolutionary Model",
      "Incremental Model"
    ],
    "correctAnswer": "C",
    "topic": "Evolutionary Model",
    "difficulty": "medium"
  },
  {
    "id": 101,
    "question": "In the Prototyping Model, what happens if the user is not satisfied with the initial prototype?",
    "options": [
      "The project is canceled.",
      "The prototype is refined based on feedback.",
      "Development moves to the next phase.",
      "The requirements are fixed."
    ],
    "correctAnswer": "B",
    "topic": "Prototype Model",
    "difficulty": "easy"
  },
  {
    "id": 102,
    "question": "What is a key difference between the Spiral Model and the Waterfall Model?",
    "options": [
      "Spiral Model does not include risk analysis.",
      "Waterfall Model includes iterative development.",
      "Spiral Model focuses on risk management.",
      "Waterfall Model is more flexible to changes."
    ],
    "correctAnswer": "C",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 103,
    "question": "Which model is particularly beneficial for projects with high risks?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Prototype Model",
      "Spiral Model"
    ],
    "correctAnswer": "D",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 104,
    "question": "In the Incremental Process Model, how is the system developed?",
    "options": [
      "All at once",
      "In increments with core features first",
      "By gathering all requirements upfront",
      "With no user feedback"
    ],
    "correctAnswer": "B",
    "topic": "Incremental Model",
    "difficulty": "easy"
  },
  {
    "id": 105,
    "question": "Which phase in the Spiral Model is repeated in every cycle?",
    "options": [
      "Planning",
      "Risk Analysis",
      "Engineering",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Spiral Model",
    "difficulty": "hard"
  },
  {
    "id": 106,
    "question": "In the Prototyping Model, what is the main advantage of building a prototype early?",
    "options": [
      "It speeds up final delivery.",
      "It helps in understanding user requirements better.",
      "It reduces the need for testing.",
      "It fixes all requirements early."
    ],
    "correctAnswer": "B",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 107,
    "question": "What is a disadvantage of using the Incremental Process Model?",
    "options": [
      "Reduced flexibility",
      "Higher initial costs",
      "Potential for incomplete system integration",
      "Lack of customer feedback"
    ],
    "correctAnswer": "C",
    "topic": "Incremental Model",
    "difficulty": "hard"
  },
  {
    "id": 108,
    "question": "Which model emphasizes continuous user involvement and feedback?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Prototype Model",
      "Incremental Model"
    ],
    "correctAnswer": "C",
    "topic": "Prototype Model",
    "difficulty": "easy"
  },
  {
    "id": 109,
    "question": "Which model uses a cyclic approach for software development?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Spiral Model",
      "Incremental Model"
    ],
    "correctAnswer": "C",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 110,
    "question": "What is the main purpose of the Quick Design phase in the Prototyping Model?",
    "options": [
      "To finalize the design",
      "To gather detailed requirements",
      "To create a simple initial version of the system",
      "To complete the entire system"
    ],
    "correctAnswer": "C",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 111,
    "question": "Which of the following is a critical activity during the risk analysis phase of the Spiral Model?",
    "options": [
      "Coding the system",
      "Identifying potential project risks",
      "Finalizing user requirements",
      "Integrating system components"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 112,
    "question": "In the context of the Evolutionary Model, what is the primary goal of each iteration?",
    "options": [
      "Complete system development",
      "Thorough testing",
      "Delivering a working subset of the system",
      "Gathering requirements"
    ],
    "correctAnswer": "C",
    "topic": "Evolutionary Model",
    "difficulty": "medium"
  },
  {
    "id": 113,
    "question": "Which model is characterized by a focus on iterative development with a series of prototypes?",
    "options": [
      "Waterfall Model",
      "RAD Model",
      "Incremental Model",
      "Spiral Model"
    ],
    "correctAnswer": "B",
    "topic": "RAD Model",
    "difficulty": "medium"
  },
  {
    "id": 114,
    "question": "In the V-Model, which phase corresponds to the System Design phase in the development lifecycle?",
    "options": [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing"
    ],
    "correctAnswer": "C",
    "topic": "V-Model",
    "difficulty": "hard"
  },
  {
    "id": 115,
    "question": "What is the key objective of the Planning phase in the Spiral Model?",
    "options": [
      "Risk mitigation",
      "Development of the final product",
      "Requirement analysis",
      "Scheduling and resource allocation"
    ],
    "correctAnswer": "D",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 116,
    "question": "Which of the following is not a benefit of using the Prototype Model?",
    "options": [
      "Improved user involvement",
      "Early identification of misunderstandings",
      "Reduction in overall development time",
      "Flexible design accommodating changes"
    ],
    "correctAnswer": "C",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
  {
    "id": 117,
    "question": "How does the Spiral Model handle high-risk projects compared to the Waterfall Model?",
    "options": [
      "It avoids risk analysis.",
      "It includes risk analysis and management in each iteration.",
      "It postpones risk analysis until the end.",
      "It eliminates the need for risk management."
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 118,
    "question": "In the Incremental Model, what typically follows the delivery of an increment?",
    "options": [
      "Complete project closure",
      "Maintenance phase",
      "Customer evaluation and feedback",
      "Full system deployment"
    ],
    "correctAnswer": "C",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 119,
    "question": "Which SDLC model is best suited for projects with well-understood and unchanging requirements?",
    "options": [
      "Waterfall Model",
      "Incremental Model",
      "Prototype Model",
      "Spiral Model"
    ],
    "correctAnswer": "A",
    "topic": "Waterfall Model",
    "difficulty": "easy"
  },
  {
    "id": 120,
    "question": "What is a major drawback of using the Waterfall Model for software development?",
    "options": [
      "High flexibility in requirements",
      "Inability to handle changes well",
      "Lack of documentation",
      "Early user involvement"
    ],
    "correctAnswer": "B",
    "topic": "Waterfall Model",
    "difficulty": "medium"
  },
  {
    "id": 121,
    "question": "Which phase in the V-Model is directly related to verifying the design specifications?",
    "options": [
      "Coding phase",
      "Unit Testing phase",
      "Integration Testing phase",
      "Validation phase"
    ],
    "correctAnswer": "C",
    "topic": "V-Model",
    "difficulty": "medium"
  },
  {
    "id": 122,
    "question": "In the context of the Spiral Model, which of the following best describes the purpose of a risk assessment?",
    "options": [
      "To complete the coding phase",
      "To identify and mitigate potential project risks",
      "To finalize user documentation",
      "To conduct system testing"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 123,
    "question": "What is the main focus during the Engineering phase of the Spiral Model?",
    "options": [
      "Planning the project schedule",
      "Developing the software and system components",
      "Conducting risk analysis",
      "Gathering user requirements"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 124,
    "question": "Which model allows developers to start with simple implementations and gradually add features until the final system is complete?",
    "options": [
      "Waterfall Model",
      "Incremental Model",
      "Prototype Model",
      "V-Model"
    ],
    "correctAnswer": "B",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 125,
    "question": "In the Prototyping Model, what is the result of the quick design phase?",
    "options": [
      "Final product",
      "Fully detailed design",
      "Basic design of the system's core features",
      "Comprehensive user documentation"
    ],
    "correctAnswer": "C",
    "topic": "Prototype Model",
    "difficulty": "medium"
  },
    {
    "id": 126,
    "question": "Why is the Spiral Model considered more flexible than the Waterfall Model?",
    "options": [
      "It has no documentation requirements.",
      "It integrates risk management and iterative refinement.",
      "It eliminates the need for testing.",
      "It finalizes all requirements at the start."
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 127,
    "question": "Which of the following is not a key characteristic of the RAD Model?",
    "options": [
      "Prototyping",
      "Rapid development",
      "Limited user involvement",
      "Incremental delivery"
    ],
    "correctAnswer": "C",
    "topic": "RAD Model",
    "difficulty": "medium"
  },
  {
    "id": 128,
    "question": "In the Incremental Model, what is the purpose of delivering the core features first?",
    "options": [
      "To ensure complete system testing",
      "To provide users with a working product early",
      "To reduce overall project cost",
      "To finalize the requirements"
    ],
    "correctAnswer": "B",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 129,
    "question": "What is a primary disadvantage of using the Spiral Model for small projects?",
    "options": [
      "Lack of user involvement",
      "Overhead due to extensive risk management",
      "Inflexibility in accommodating changes",
      "Inadequate for handling risks"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 130,
    "question": "Which model is designed to be adaptable to changes and iterations throughout the development process?",
    "options": [
      "Waterfall Model",
      "V-Model",
      "Incremental Model",
      "Spiral Model"
    ],
    "correctAnswer": "D",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 131,
    "question": "In the Prototyping Model, what should be done if the user is not satisfied with the initial prototype?",
    "options": [
      "Move on to the next phase",
      "Ignore user feedback",
      "Refine the prototype based on user feedback",
      "Finalize the requirements as they are"
    ],
    "correctAnswer": "C",
    "topic": "Prototype Model",
    "difficulty": "easy"
  },
  {
    "id": 132,
    "question": "What is a significant benefit of the RAD Model?",
    "options": [
      "Reduced cost",
      "High flexibility",
      "Rapid application development",
      "Minimal user involvement"
    ],
    "correctAnswer": "C",
    "topic": "RAD Model",
    "difficulty": "easy"
  },
  {
    "id": 133,
    "question": "Which phase in the Spiral Model involves assessing the feasibility of the project?",
    "options": [
      "Planning",
      "Risk Analysis",
      "Engineering",
      "Customer Evaluation"
    ],
    "correctAnswer": "B",
    "topic": "Spiral Model",
    "difficulty": "medium"
  },
  {
    "id": 134,
    "question": "In the V-Model, what is the relationship between development and testing activities?",
    "options": [
      "Development and testing activities are performed sequentially.",
      "Development activities are performed after all testing activities.",
      "Testing activities correspond directly to each development activity.",
      "Development activities are independent of testing activities."
    ],
    "correctAnswer": "C",
    "topic": "V-Model",
    "difficulty": "hard"
  },
  {
    "id": 135,
    "question": "Why is the Incremental Model particularly effective for large projects?",
    "options": [
      "It reduces documentation requirements.",
      "It allows for the system to be developed and tested in small, manageable increments.",
      "It eliminates the need for planning.",
      "It requires all requirements to be defined upfront."
    ],
    "correctAnswer": "B",
    "topic": "Incremental Model",
    "difficulty": "medium"
  },
  {
    "id": 136,
    "question": "Which principle emphasizes the continuous delivery of valuable software in Agile?",
    "options": [
      "Technical Excellence",
      "Customer Satisfaction",
      "Sustainable Development",
      "Frequent Delivery"
    ],
    "correctAnswer": "D",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 137,
    "question": "What is the primary measure of progress in Agile?",
    "options": [
      "Completed tasks",
      "Working software",
      "Customer feedback",
      "Documentation"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 138,
    "question": "In Scrum, who is responsible for maximizing the value of the product?",
    "options": [
      "Scrum Master",
      "Development Team",
      "Product Owner",
      "Stakeholders"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 139,
    "question": "What does ASD stand for in Agile methodologies?",
    "options": [
      "Adaptive Software Development",
      "Advanced System Design",
      "Agile Software Delivery",
      "Application Software Development"
    ],
    "correctAnswer": "A",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 140,
    "question": "Which phase of the ASD lifecycle involves actual development?",
    "options": [
      "Speculation",
      "Collaboration",
      "Learning",
      "Planning"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "hard"
  },
  {
    "id": 141,
    "question": "Which Agile concept involves fabricated biographies of hypothetical users?",
    "options": [
      "Personas",
      "User Stories",
      "Daily Meeting",
      "Incremental Development"
    ],
    "correctAnswer": "A",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 142,
    "question": "What is a common artifact in Scrum that shows the remaining work in a sprint?",
    "options": [
      "Product Backlog",
      "Sprint Backlog",
      "Burndown Chart",
      "Increment"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 143,
    "question": "Which role in Scrum is responsible for removing impediments?",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Stakeholder"
    ],
    "correctAnswer": "A",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 144,
    "question": "In Extreme Programming (XP), what value emphasizes the importance of simple solutions?",
    "options": [
      "Communication",
      "Simplicity",
      "Feedback",
      "Courage"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 145,
    "question": "Which Agile principle focuses on sustainable development?",
    "options": [
      "Good Design",
      "Constant Pace",
      "Working Software",
      "Reflect and Adjust"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 146,
    "question": "In Scrum, what event is a 15-minute daily meeting for the team to synchronize activities?",
    "options": [
      "Sprint Planning",
      "Sprint Review",
      "Daily Scrum",
      "Sprint Retrospective"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 147,
    "question": "Which XP value involves delivering working software early and receiving feedback?",
    "options": [
      "Communication",
      "Simplicity",
      "Feedback",
      "Courage"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 148,
    "question": "Which Agile principle is about maximizing the amount of work not done?",
    "options": [
      "Simplicity",
      "Self-Organization",
      "Good Design",
      "Reflect and Adjust"
    ],
    "correctAnswer": "A",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 149,
    "question": "What term is used for functional increments of work in Agile?",
    "options": [
      "Personas",
      "User Stories",
      "Daily Meeting",
      "Incremental Development"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 150,
    "question": "Which event in Scrum is held at the end of the sprint to inspect the increment and adapt the backlog?",
    "options": [
      "Sprint Planning",
      "Sprint Review",
      "Daily Scrum",
      "Sprint Retrospective"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 151,
    "question": "In ASD, what phase involves defining the project mission statement and adaptive planning?",
    "options": [
      "Speculation",
      "Collaboration",
      "Learning",
      "Development"
    ],
    "correctAnswer": "A",
    "topic": "Agile Development",
    "difficulty": "hard"
  },
  {
    "id": 152,
    "question": "Which Agile practice involves reflecting on how to become more effective and adjusting accordingly?",
    "options": [
      "Self-Organization",
      "Simplicity",
      "Reflect and Adjust",
      "Good Design"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 153,
    "question": "What is the role of the Product Owner in Scrum?",
    "options": [
      "Ensures the team follows agile principles",
      "Defines the product backlog and priorities",
      "Removes impediments for the team",
      "Conducts sprint retrospectives"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 154,
    "question": "Which principle states that the best architectures, requirements, and designs emerge from self-organizing teams?",
    "options": [
      "Simplicity",
      "Good Design",
      "Self-Organization",
      "Reflect and Adjust"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 155,
    "question": "Which phase in ASD focuses on enhancing knowledge through practices such as technical reviews?",
    "options": [
      "Speculation",
      "Collaboration",
      "Learning",
      "Development"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "hard"
  },
  {
    "id": 156,
    "question": "Which of the following best describes Agile?",
    "options": [
      "A method for sequential software development",
      "A project management framework focusing on adaptability and customer satisfaction",
      "A tool for automating testing",
      "A database management system"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 157,
    "question": "Which Agile principle emphasizes the importance of face-to-face communication?",
    "options": [
      "Simplicity",
      "Good Design",
      "Face-to-Face Interaction",
      "Reflect and Adjust"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 158,
    "question": "Which principle ensures that Agile teams deliver working software frequently?",
    "options": [
      "Deliver Frequently",
      "Motivated Team",
      "Customer Satisfaction",
      "Simplicity"
    ],
    "correctAnswer": "A",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 159,
    "question": "In Agile, what is a 'user story'?",
    "options": [
      "A detailed project plan",
      "A fictional representation of a user's goals",
      "A functional unit of work to add value",
      "A test case"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 160,
    "question": "What is an 'incremental development' in Agile?",
    "options": [
      "Developing the entire system at once",
      "Adding user-visible functionality in each iteration",
      "Testing all features simultaneously",
      "Developing software without any customer feedback"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 161,
    "question": "Who is responsible for creating the product backlog in Scrum?",
    "options": [
      "Scrum Master",
      "Development Team",
      "Product Owner",
      "Stakeholders"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 162,
    "question": "What is the main responsibility of the Scrum Master?",
    "options": [
      "Defining the product backlog",
      "Managing team workload",
      "Ensuring Scrum practices are followed",
      "Writing code"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 163,
    "question": "During a sprint, who is responsible for selecting tasks from the sprint backlog?",
    "options": [
      "Product Owner",
      "Scrum Master",
      "Development Team",
      "Project Manager"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 164,
    "question": "What is the purpose of the daily scrum meeting?",
    "options": [
      "To review the project budget",
      "To update team members on progress and obstacles",
      "To finalize the product backlog",
      "To train new team members"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 165,
    "question": "Which value is NOT part of Extreme Programming (XP)?",
    "options": [
      "Communication",
      "Courage",
      "Respect",
      "Efficiency"
    ],
    "correctAnswer": "D",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 166,
    "question": "What is the goal of the 'small releases' practice in XP?",
    "options": [
      "To reduce project costs",
      "To release the MVP quickly and iterate based on feedback",
      "To avoid customer involvement",
      "To complete the entire project in one release"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 167,
    "question": "Which XP practice involves two developers working together on the same code?",
    "options": [
      "Continuous Integration",
      "Pair Programming",
      "Test-Driven Development",
      "On-Site Customer"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 168,
    "question": "What is a 'spike' in XP?",
    "options": [
      "A defect in the code",
      "A research activity to reduce uncertainty",
      "An unplanned sprint",
      "A performance test"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 169,
    "question": "Which of the following is a major difference between Agile and Waterfall models?",
    "options": [
      "Waterfall is iterative; Agile is linear",
      "Agile emphasizes customer collaboration; Waterfall emphasizes contract negotiation",
      "Waterfall allows for frequent changes; Agile does not",
      "Agile involves detailed upfront planning; Waterfall does not"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 170,
    "question": "In which model is the project scope typically defined at the beginning?",
    "options": [
      "Agile",
      "Waterfall",
      "Both Agile and Waterfall",
      "Neither Agile nor Waterfall"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "easy"
  },
  {
    "id": 171,
    "question": "What is the primary focus of Agile testing?",
    "options": [
      "Ensuring all requirements are met",
      "Finding and fixing bugs quickly",
      "Detailed test documentation",
      "Testing only at the end of the development process"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 172,
    "question": "Which of the following is a key characteristic of Agile testing?",
    "options": [
      "It is done only by testers",
      "It is performed continuously throughout the project",
      "It follows a strict plan",
      "It focuses on testing only after the coding phase"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 173,
    "question": "Which of the following is NOT an obstacle to Agile adoption?",
    "options": [
      "Resistance to change",
      "Lack of management support",
      "Fixed mindset towards processes",
      "Frequent customer feedback"
    ],
    "correctAnswer": "D",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 174,
    "question": "What is often the biggest challenge when transitioning from Waterfall to Agile?",
    "options": [
      "Learning new programming languages",
      "Adjusting to the need for more frequent customer interactions",
      "Implementing automated testing",
      "Finding suitable project management tools"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 175,
    "question": "What is a 'burndown chart' used for in Scrum?",
    "options": [
      "Tracking project budget",
      "Showing remaining work in a sprint",
      "Displaying team productivity",
      "Planning future sprints"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 176,
    "question": "Which Agile framework involves continuous integration and testing?",
    "options": [
      "Scrum",
      "Kanban",
      "Extreme Programming (XP)",
      "Lean"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 177,
    "question": "What does the 'inspect and adapt' principle refer to in Agile?",
    "options": [
      "Regularly reviewing and adjusting processes and practices",
      "Developing detailed specifications",
      "Focusing solely on coding",
      "Avoiding changes during the project"
    ],
    "correctAnswer": "A",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 178,
    "question": "In Agile, what is the role of 'personas'?",
    "options": [
      "Real user profiles",
      "Hypothetical user biographies to guide development",
      "Project stakeholders",
      "Team members responsible for testing"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 179,
    "question": "Which of the following is NOT a characteristic of a motivated team according to Agile principles?",
    "options": [
      "They are trusted to complete the project",
      "They require constant supervision",
      "They are given the necessary support and resources",
      "They are self-organizing"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 180,
    "question": "What is the purpose of the 'planning game' in XP?",
    "options": [
      "To develop a detailed project plan",
      "To create a release and iteration plan",
      "To test the software",
      "To manage project risks"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "hard"
  },
  {
    "id": 181,
    "question": "How does XP ensure simplicity in design?",
    "options": [
      "By using complex architectures",
      "By continuously refactoring code",
      "By avoiding feedback loops",
      "By minimizing customer involvement"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 182,
    "question": "In Scrum, what is a 'product increment'?",
    "options": [
      "A component of the project budget",
      "A part of the project scope",
      "The sum of all completed work in a sprint",
      "A plan for future sprints"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 183,
    "question": "Which Agile concept involves adapting processes based on team reflections?",
    "options": [
      "Self-organization",
      "Iterative development",
      "Reflect and Adjust",
      "Daily meeting"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 184,
    "question": "What is a key benefit of pair programming in XP?",
    "options": [
      "Reduced project costs",
      "Higher-quality code with fewer bugs",
      "Faster project completion",
      "Less need for customer feedback"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 185,
    "question": "In Agile, what is a 'sprint review'?",
    "options": [
      "A meeting to plan the next sprint",
      "A meeting to demonstrate completed work to stakeholders",
      "A retrospective meeting to discuss process improvements",
      "An internal team meeting to allocate tasks"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 186,
    "question": "Which practice in XP involves having a real user available full-time to answer questions?",
    "options": [
      "Metaphor",
      "On-Site Customer",
      "Refactoring",
      "Continuous Integration"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 187,
    "question": "What does 'Kanban' focus on in Agile project management?",
    "options": [
      "Sequential development",
      "Limiting work in progress and managing flow",
      "Detailed upfront planning",
      "Monthly releases"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 188,
    "question": "Which Agile framework uses a visual board to track work items?",
    "options": [
      "Scrum",
      "XP",
      "Kanban",
      "Waterfall"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 189,
    "question": "In Agile, what is the purpose of 'backlog grooming'?",
    "options": [
      "To finalize the project scope",
      "To ensure the backlog is well-ordered and ready for sprint planning",
      "To create a detailed project plan",
      "To review completed tasks"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 190,
    "question": "Which of the following is a principle of Lean software development?",
    "options": [
      "Maximize completed work",
      "Deliver as late as possible",
      "Eliminate waste",
      "Focus on individual performance"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 191,
    "question": "What does 'velocity' measure in Scrum?",
    "options": [
      "Team speed in delivering software",
      "Number of bugs found",
      "Project budget usage",
      "Customer satisfaction"
    ],
    "correctAnswer": "A",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 192,
    "question": "What is a 'burn-up chart' used for?",
    "options": [
      "Tracking remaining work",
      "Showing the total work completed over time",
      "Monitoring team attendance",
      "Planning future sprints"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 193,
    "question": "Which tool is commonly used for Agile project management?",
    "options": [
      "Microsoft Word",
      "JIRA",
      "Notepad",
      "Visual Studio"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 194,
    "question": "In Agile, what is a 'spike'?",
    "options": [
      "A major bug in the system",
      "A research activity to understand a requirement or technology",
      "A task completed by the Product Owner",
      "A sudden increase in workload"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 195,
    "question": "Who facilitates the daily stand-up meeting in Scrum?",
    "options": [
      "Product Owner",
      "Development Team",
      "Scrum Master",
      "Project Manager"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 196,
    "question": "What is the main function of the 'definition of done' in Scrum?",
    "options": [
      "To specify the project's end date",
      "To ensure all work meets agreed-upon quality standards",
      "To define the project budget",
      "To list tasks for the development team"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 197,
    "question": "What is a 'sprint retrospective'?",
    "options": [
      "A meeting to plan the next sprint",
      "A review of work completed during the sprint",
      "A meeting to reflect on the past sprint and suggest improvements",
      "A detailed project status report"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 198,
    "question": "In Agile, what is 'refactoring'?",
    "options": [
      "Adding new features to the software",
      "Revising the software architecture",
      "Improving the internal structure of the code without changing its behavior",
      "Changing project requirements"
    ],
    "correctAnswer": "C",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 199,
    "question": "Which Agile practice focuses on frequent releases and customer feedback?",
    "options": [
      "Continuous Integration",
      "Small Releases",
      "Pair Programming",
      "On-Site Customer"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 200,
    "question": "What is the main purpose of a 'sprint backlog'?",
    "options": [
      "To outline the project timeline",
      "To detail the tasks and user stories for the current sprint",
      "To track overall project progress",
      "To manage the project budget"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "easy"
  },
  {
    "id": 201,
    "question": "In Agile, what is the role of 'test-driven development' (TDD)?",
    "options": [
      "To write tests after coding",
      "To write tests before writing the actual code",
      "To conduct user acceptance testing",
      "To focus solely on performance testing"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 202,
    "question": "Which Agile framework is known for using 'story points' for estimating effort?",
    "options": [
      "Waterfall",
      "Scrum",
      "Lean",
      "Kanban"
    ],
    "correctAnswer": "B",
    "topic": "Agile Development",
    "difficulty": "medium"
  },
  {
    "id": 203,
    "question": "Which UML diagram is primarily used to model the dynamic behavior of a system?",
    "options": [
      "Class Diagram",
      "Use Case Diagram",
      "Sequence Diagram",
      "Component Diagram"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 204,
    "question": "What year was UML adopted as a standard by the Object Management Group (OMG)?",
    "options": [
      "1994",
      "1995",
      "1997",
      "1999"
    ],
    "correctAnswer": "C",
    "topic": "UML",
    "difficulty": "hard"
  },
  {
    "id": 205,
    "question": "Who are the three main contributors to the initial development of UML?",
    "options": [
      "James Gosling, Linus Torvalds, Bjarne Stroustrup",
      "Grady Booch, Ivar Jacobson, James Rumbaugh",
      "Ken Thompson, Dennis Ritchie, Brian Kernighan",
      "Tim Berners-Lee, Robert Cailliau, Marc Andreessen"
    ],
    "correctAnswer": "B",
    "topic": "UML",
    "difficulty": "hard"
  },
  {
    "id": 206,
    "question": "Which goal of UML involves the ability to extend the core concepts?",
    "options": [
      "Provide formal basis for understanding the modeling language",
      "Be independent of particular programming languages",
      "Provide extensibility and specialization mechanisms",
      "Integrate best practices"
    ],
    "correctAnswer": "C",
    "topic": "UML",
    "difficulty": "medium"
  },
  {
    "id": 207,
    "question": "What is NOT a primary goal of UML?",
    "options": [
      "To be language and process independent",
      "To provide a means for visualizing software design",
      "To generate code directly from diagrams",
      "To support higher-level development concepts such as collaborations, frameworks, and patterns"
    ],
    "correctAnswer": "C",
    "topic": "UML",
    "difficulty": "medium"
  },
  {
    "id": 208,
    "question": "Which of the following statements is true about UML?",
    "options": [
      "It is a programming language.",
      "It is only used for modeling the static aspects of systems.",
      "It can be used to model both the structure and behavior of systems.",
      "It is primarily used for database schema design."
    ],
    "correctAnswer": "C",
    "topic": "UML",
    "difficulty": "easy"
  },
  {
    "id": 209,
    "question": "Which UML building block represents the static parts of a model?",
    "options": [
      "Behavioral Things",
      "Structural Things",
      "Grouping Things",
      "Annotational Things"
    ],
    "correctAnswer": "B",
    "topic": "UML",
    "difficulty": "medium"
  },
  {
    "id": 210,
    "question": "Which UML building block is used to organize elements of the UML model?",
    "options": [
      "Structural Things",
      "Behavioral Things",
      "Grouping Things",
      "Annotational Things"
    ],
    "correctAnswer": "C",
    "topic": "UML",
    "difficulty": "medium"
  },
  {
    "id": 211,
    "question": "Which type of UML diagram would you use to show interactions among a set of objects?",
    "options": [
      "Class Diagram",
      "Use Case Diagram",
      "Sequence Diagram",
      "State Machine Diagram"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 212,
    "question": "Which UML diagram type is primarily used to illustrate the internal structure of a class?",
    "options": [
      "Component Diagram",
      "Deployment Diagram",
      "Object Diagram",
      "Class Diagram"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 213,
    "question": "Which UML relationship represents a whole-part hierarchy where parts can exist independently of the whole?",
    "options": [
      "Dependency",
      "Association",
      "Aggregation",
      "Composition"
    ],
    "correctAnswer": "C",
    "topic": "UML",
    "difficulty": "hard"
  },
  {
    "id": 214,
    "question": "Which relationship in UML is used to represent that one class inherits from another?",
    "options": [
      "Realization",
      "Dependency",
      "Association",
      "Generalization"
    ],
    "correctAnswer": "D",
    "topic": "UML",
    "difficulty": "medium"
  },
  {
    "id": 215,
    "question": "In a use case diagram, which element represents the functionalities offered by the system?",
    "options": [
      "Actor",
      "Use Case",
      "Component",
      "Node"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 216,
    "question": "Which of the following best describes an actor in a use case diagram?",
    "options": [
      "A user or any other system that interacts with the system being modeled",
      "The internal component of the system",
      "A static entity within the system",
      "A deployment unit of the system"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 217,
    "question": "In UML, what does the term 'extend' mean in a use case diagram?",
    "options": [
      "A relationship where one use case is a variant of another",
      "A relationship where one use case includes the behavior of another",
      "A relationship where one class is a subclass of another",
      "A relationship where one actor uses the system"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "hard"
  },
  {
    "id": 218,
    "question": "What is an 'include' relationship in a use case diagram?",
    "options": [
      "A relationship where one use case includes the behavior of another",
      "A relationship where one use case extends another",
      "A relationship where one actor performs multiple use cases",
      "A relationship where a use case is divided into smaller use cases"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 219,
    "question": "Which UML diagram focuses on showing the system's runtime instances and their interactions?",
    "options": [
      "Class Diagram",
      "Sequence Diagram",
      "Component Diagram",
      "Object Diagram"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 220,
    "question": "What does an association relationship between classes in UML signify?",
    "options": [
      "Generalization/Specialization",
      "Interaction between instances of the classes",
      "Inheritance",
      "State transitions"
    ],
    "correctAnswer": "B",
    "topic": "UML",
    "difficulty": "medium"
  },
  {
    "id": 221,
    "question": "Which UML diagram would you use to model the sequence of activities in a system?",
    "options": [
      "Sequence Diagram",
      "State Machine Diagram",
      "Activity Diagram",
      "Use Case Diagram"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 222,
    "question": "Which UML diagram is used to model the lifecycle of an object?",
    "options": [
      "Activity Diagram",
      "Sequence Diagram",
      "State Machine Diagram",
      "Use Case Diagram"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 223,
    "question": "What is the purpose of a package in UML?",
    "options": [
      "To define the physical components of a system",
      "To group related elements together",
      "To model dynamic behaviors",
      "To represent external interfaces"
    ],
    "correctAnswer": "B",
    "topic": "UML",
    "difficulty": "medium"
  },
  {
    "id": 224,
    "question": "Which UML element is used to add explanatory notes to the diagram?",
    "options": [
      "Annotation",
      "Comment",
      "Note",
      "Text Box"
    ],
    "correctAnswer": "C",
    "topic": "UML",
    "difficulty": "easy"
  },
  {
    "id": 225,
    "question": "Which diagram would best show the physical deployment of artifacts on nodes?",
    "options": [
      "Component Diagram",
      "Deployment Diagram",
      "Use Case Diagram",
      "Sequence Diagram"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 226,
    "question": "In a sequence diagram, what does a lifeline represent?",
    "options": [
      "A class in the system",
      "An interaction between objects",
      "The lifespan of an object during an interaction",
      "The flow of control in the system"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 227,
    "question": "In a state machine diagram, what triggers a transition between states?",
    "options": [
      "A class operation",
      "An event",
      "A message",
      "An activity"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 228,
    "question": "Which UML diagram is used to show the overall structure of the system at a high level?",
    "options": [
      "Sequence Diagram",
      "Class Diagram",
      "Use Case Diagram",
      "Component Diagram"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 229,
    "question": "Which structural thing in UML represents a physical entity that exists at runtime?",
    "options": [
      "Class",
      "Object",
      "Node",
      "Component"
    ],
    "correctAnswer": "C",
    "topic": "UML",
    "difficulty": "hard"
  },
  {
    "id": 230,
    "question": "What is a stereotype in UML?",
    "options": [
      "A type of relationship between classes",
      "A predefined class in the system",
      "A way to extend UML to create new model elements",
      "A type of diagram in UML"
    ],
    "correctAnswer": "C",
    "topic": "UML",
    "difficulty": "hard"
  },
  {
    "id": 231,
    "question": "What is a primary advantage of using use case diagrams in system modeling?",
    "options": [
      "They help in detailing the internal workings of the system",
      "They provide a high-level overview of the system's functional requirements",
      "They model the hardware configuration of the system",
      "They are used to write the system's code"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 232,
    "question": "Which UML concept involves defining the software architecture and includes components and their interactions?",
    "options": [
      "Class Diagram",
      "Component Diagram",
      "Activity Diagram",
      "Use Case Diagram"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 233,
    "question": "Which of the following is NOT a type of feasibility study?",
    "options": [
      "Technical feasibility",
      "Operational feasibility",
      "Financial feasibility",
      "User feasibility"
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 234,
    "question": "What is the primary goal of the requirement elicitation process?",
    "options": [
      "To gather information about stakeholders' needs and expectations",
      "To analyze the gathered requirements",
      "To document the requirements",
      "To validate the requirements"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "easy"
  },
  {
    "id": 235,
    "question": "Which of the following is NOT a technique used for requirement elicitation?",
    "options": [
      "Interviews",
      "Surveys",
      "Focus groups",
      "Prototyping"
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 236,
    "question": "Which of the following is NOT a problem associated with requirement elicitation and analysis?",
    "options": [
      "Stakeholders may have conflicting requirements",
      "Requirements may change during the analysis process",
      "Organizational and political factors may influence system requirements",
      "Stakeholders always know what they want"
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 237,
    "question": "What is the primary purpose of a Software Requirement Specification (SRS) document?",
    "options": [
      "To document the requirements in technical language for the development team",
      "To gather requirements from stakeholders",
      "To validate the requirements",
      "To manage changing requirements during development"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "easy"
  },
  {
    "id": 238,
    "question": "Which of the following models is used to show the flow of data through a system?",
    "options": [
      "Data Flow Diagrams (DFDs)",
      "Entity-Relationship Diagrams (ERDs)",
      "State Transition Diagrams",
      "Function Decomposition Diagrams (FDDs)"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 239,
    "question": "What is the purpose of a data dictionary in the context of requirement specification?",
    "options": [
      "To store information about all data items defined in DFDs",
      "To model the data flow in the system",
      "To model the behavior of the system",
      "To model the relationships between data objects"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 240,
    "question": "Which of the following diagrams is used to represent the relationships between data entities and their associated attributes?",
    "options": [
      "Data Flow Diagrams (DFDs)",
      "State Transition Diagrams",
      "Entity-Relationship Diagrams (ERDs)",
      "Function Decomposition Diagrams (FDDs)"
    ],
    "correctAnswer": "C",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 241,
    "question": "Which of the following is NOT a component of a use case model?",
    "options": [
      "System",
      "Actors",
      "Use cases",
      "Sequence diagrams"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 242,
    "question": "What is the primary purpose of a use case diagram?",
    "options": [
      "To model the system architecture",
      "To represent the dynamic behavior of the system",
      "To capture the functional requirements of the system",
      "To design the user interface"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 243,
    "question": "Which of the following statements about actors is FALSE?",
    "options": [
      "An actor can be a human or a system",
      "An actor initiates the use cases",
      "An actor must be connected to at least one use case",
      "An actor represents a specific instance of a role"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 244,
    "question": "What is the purpose of the 'include' relationship between use cases?",
    "options": [
      "To indicate that one use case is a part of another use case",
      "To indicate that one use case inherits behavior from another use case",
      "To indicate that one use case is an alternative to another use case",
      "To indicate that one use case is a precondition for another use case"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 245,
    "question": "Which of the following is NOT a valid section in a use case description?",
    "options": [
      "Use case name",
      "Use case number",
      "Use case authors",
      "Use case class diagram"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 246,
    "question": "What is the purpose of the 'extends' relationship between use cases?",
    "options": [
      "To indicate that one use case is a part of another use case",
      "To indicate that one use case inherits behavior from another use case",
      "To indicate that one use case is an alternative to another use case",
      "To indicate that one use case is a precondition for another use case"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 247,
    "question": "Which of the following is NOT a valid approach to finding actors in a system?",
    "options": [
      "Identifying who or what interacts with the system",
      "Identifying the roles played by users of the system",
      "Identifying the classes in the system design",
      "Identifying the devices or other systems that interact with the system"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 248,
    "question": "What is the purpose of the 'generalization' relationship between actors?",
    "options": [
      "To indicate that one actor inherits behavior from another actor",
      "To indicate that one actor is a specialization of another actor",
      "To indicate that one actor is a part of another actor",
      "To indicate that one actor is an alternative to another actor"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "hard"
  },
  {
    "id": 249,
    "question": "Which of the following is NOT a valid approach to finding use cases in a system?",
    "options": [
      "Identifying the functions required by each actor",
      "Identifying the events that the system must handle",
      "Identifying the problems with existing systems",
      "Identifying the classes in the system design"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 250,
    "question": "What is the purpose of the 'association' relationship between actors and use cases?",
    "options": [
      "To indicate that an actor initiates a use case",
      "To indicate that an actor inherits behavior from a use case",
      "To indicate that an actor is a part of a use case",
      "To indicate that an actor is an alternative to a use case"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
    {
    "id": 251,
    "question": "Which of the following is NOT a valid section in a use case description?",
    "options": [
      "Related use cases",
      "Typical process description",
      "Exceptions and how to handle them",
      "Use case class diagram"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 252,
    "question": "What is the purpose of the \"system\" component in a use case diagram?",
    "options": [
      "To represent the boundaries of the system being modeled",
      "To represent the actors interacting with the system",
      "To represent the use cases of the system",
      "To represent the relationships between actors and use cases"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 253,
    "question": "Which of the following statements about use cases is FALSE?",
    "options": [
      "A use case must always be initiated by an actor",
      "A use case must provide value to at least one actor",
      "A use case must be connected to at least one actor",
      "A use case must be a complete description of a single scenario"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 254,
    "question": "What is the purpose of the \"stimulus\" component in a use case model?",
    "options": [
      "To represent the event that triggers a use case",
      "To represent the actor that initiates a use case",
      "To represent the system being modeled",
      "To represent the process description of a use case"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 255,
    "question": "Which of the following is NOT a valid approach to identifying use cases?",
    "options": [
      "Asking what events the system must handle",
      "Asking what inputs and outputs the system has",
      "Asking what classes the system should have",
      "Asking what problems the existing systems have"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 256,
    "question": "What is the purpose of the \"overview\" section in a use case description?",
    "options": [
      "To provide a brief statement about the use case",
      "To describe the typical process flow of the use case",
      "To list the exceptions and how to handle them",
      "To list the related use cases"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 257,
    "question": "Which of the following statements about actors is TRUE?",
    "options": [
      "An actor must always be a human",
      "An actor can be ranked as primary or secondary",
      "An actor must be connected to all use cases",
      "An actor represents a specific instance of a role"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 258,
    "question": "What is the purpose of the \"event\" section in a use case description?",
    "options": [
      "To describe the stimulus that initiates the use case",
      "To describe the typical process flow of the use case",
      "To list the exceptions and how to handle them",
      "To list the related use cases"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 259,
    "question": "Which of the following is NOT a valid approach to identifying actors?",
    "options": [
      "Identifying who will use the functionality of the system",
      "Identifying who will maintain the system",
      "Identifying the use cases of the system",
      "Identifying the devices or other systems that interact with the system"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 260,
    "question": "Which of the following statements about use cases is TRUE?",
    "options": [
      "A use case can be initiated by the system itself",
      "A use case must always have a single actor",
      "A use case can be connected to multiple actors",
      "A use case must always have a single scenario"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 261,
    "question": "What is the purpose of the \"related use cases\" section in a use case description?",
    "options": [
      "To list the use cases that are included or extended by the current use case",
      "To list the use cases that are alternatives to the current use case",
      "To list the use cases that are preconditions for the current use case",
      "To list the use cases that are related to the current use case in some way"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 262,
    "question": "Which of the following is NOT a valid approach to describing use cases?",
    "options": [
      "Providing a use case name and number",
      "Listing the authors of the use case",
      "Describing the typical process flow of the use case",
      "Providing the sequence diagram for the use case"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 263,
    "question": "What is the purpose of the \"authors\" section in a use case description?",
    "options": [
      "To list the people who wrote the use case description",
      "To list the actors involved in the use case",
      "To list the related use cases",
      "To list the exceptions and how to handle them"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 264,
    "question": "Which of the following statements about use case diagrams is FALSE?",
    "options": [
      "A use case diagram shows the system, actors, use cases, and their relationships",
      "A use case diagram can consist of multiple diagrams",
      "A use case diagram must have at least one actor and one use case",
      "A use case diagram can have multiple systems"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 265,
    "question": "What is the purpose of the \"typical process description\" section in a use case description?",
    "options": [
      "To describe the stimulus that initiates the use case",
      "To describe the typical process flow of the use case",
      "To list the exceptions and how to handle them",
      "To list the related use cases"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 266,
    "question": "Which of the following is NOT a valid approach to identifying use cases?",
    "options": [
      "Identifying the scenarios that the system must support",
      "Identifying the user goals or tasks that the system must facilitate",
      "Identifying the sequence of steps to be performed by the system",
      "Identifying the classes and objects in the system design"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 267,
    "question": "What is the purpose of the \"preconditions\" section in a use case description?",
    "options": [
      "To describe the conditions that must be met before the use case can start",
      "To describe the typical process flow of the use case",
      "To list the exceptions and how to handle them",
      "To list the related use cases"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 268,
    "question": "Which of the following statements about use case diagrams is TRUE?",
    "options": [
      "A use case diagram can have multiple systems",
      "A use case diagram must have at least one actor and one use case",
      "A use case diagram can consist of multiple diagrams",
      "All of the above are true"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 269,
    "question": "What is the purpose of the \"postconditions\" section in a use case description?",
    "options": [
      "To describe the conditions that must be met after the use case has completed",
      "To describe the typical process flow of the use case",
      "To list the exceptions and how to handle them",
      "To list the related use cases"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 270,
    "question": "Which of the following is NOT a valid approach to identifying actors?",
    "options": [
      "Identifying who will use the functionality of the system",
      "Identifying who will maintain the system",
      "Identifying the devices or other systems that interact with the system",
      "Identifying the classes and objects in the system design"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 271,
    "question": "What is the purpose of the \"alternate flows\" section in a use case description?",
    "options": [
      "To describe alternative scenarios or paths that the use case can take",
      "To describe the typical process flow of the use case",
      "To list the exceptions and how to handle them",
      "To list the related use cases"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 272,
    "question": "Which of the following is NOT a valid relationship between use cases in a use case diagram?",
    "options": [
      "Include",
      "Extends",
      "Inheritance",
      "Association"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 273,
    "question": "What is the purpose of the \"success guarantees\" section in a use case description?",
    "options": [
      "To describe the conditions that must be met for the use case to be considered successful",
      "To describe the typical process flow of the use case",
      "To list the exceptions and how to handle them",
      "To list the related use cases"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 274,
    "question": "Which of the following statements about actors is TRUE?",
    "options": [
      "An actor must always be a human",
      "An actor can be ranked as primary or secondary",
      "An actor must be connected to all use cases",
      "An actor represents a specific instance of a role"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 275,
    "question": "What is the purpose of the \"minimal guarantees\" section in a use case description?",
    "options": [
      "To describe the minimal conditions that must be met for the use case to be considered successful",
      "To describe the typical process flow of the use case",
      "To list the exceptions and how to handle them",
      "To list the related use cases"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 276,
    "question": "Which of the following is NOT a primary task of requirements analysis?",
    "options": [
      "Specifying software's operational characteristics",
      "Indicating software's interface with other system elements",
      "Establishing constraints that software must meet",
      "Writing the actual code for the software"
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "easy"
  },
  {
    "id": 277,
    "question": "In the context of software specification guidelines, what do the persuasive connectors like \"certainly,\" \"therefore,\" and \"clearly\" indicate?",
    "options": [
      "The specification is well-written and easy to understand",
      "The specification needs to be scrutinized for potential assumptions or biases",
      "The specification is following industry-standard guidelines",
      "The specification is using technical jargon that needs to be simplified"
    ],
    "correctAnswer": "B",
    "topic": "Requirements Engineering",
    "difficulty": "hard"
  },
  {
    "id": 278,
    "question": "What is the primary purpose of domain analysis?",
    "options": [
      "To define the domain to be investigated",
      "To collect a representative sample of applications in the domain",
      "To analyze each application in the sample",
      "To develop an analysis model for the objects in the domain"
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 279,
    "question": "In the context of data modeling, what is the primary purpose of an Entity-Relationship Diagram (ERD)?",
    "options": [
      "To examine data objects independently of processing",
      "To focus attention on the data domain",
      "To create a model at the customer's level of abstraction",
      "To indicate how data objects relate to one another"
    ],
    "correctAnswer": "D",
    "topic": "Data Modeling",
    "difficulty": "medium"
  },
  {
    "id": 280,
    "question": "Which of the following is NOT a key concept in object-oriented analysis?",
    "options": [
      "Classes and objects",
      "Attributes and operations",
      "Encapsulation and instantiation",
      "Normalization and denormalization"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Analysis",
    "difficulty": "medium"
  },
  {
    "id": 281,
    "question": "In the context of object-oriented analysis, what is the purpose of a metaclass (or superclass)?",
    "options": [
      "To define a template for a class",
      "To establish a hierarchy of classes",
      "To identify specific instances of a class",
      "Both a) and b)"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Analysis",
    "difficulty": "hard"
  },
  {
    "id": 282,
    "question": "Which of the following statements is TRUE about encapsulation in object-oriented analysis?",
    "options": [
      "It separates data from the methods that operate on the data",
      "It exposes both data and methods to other parts of the system",
      "It achieves \"information hiding\" by encapsulating data and methods within a class",
      "It allows direct access to data members from outside the class"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Analysis",
    "difficulty": "medium"
  },
  {
    "id": 283,
    "question": "In the context of flow-oriented modeling, what is the primary purpose of a Data Flow Diagram (DFD)?",
    "options": [
      "To represent how data objects are transformed as they move through the system",
      "To model the control flow and events in the system",
      "To depict the class hierarchy and inheritance relationships",
      "To show the sequence of operations and their dependencies"
    ],
    "correctAnswer": "A",
    "topic": "Data Flow Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 284,
    "question": "Which of the following is NOT a valid notation used in a Data Flow Diagram (DFD)?",
    "options": [
      "External entity",
      "Process",
      "Data flow",
      "Control flow"
    ],
    "correctAnswer": "D",
    "topic": "Data Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 285,
    "question": "In the context of Data Flow Diagramming, what is the purpose of the \"level 0\" or \"context level\" diagram?",
    "options": [
      "To show all the external entities interacting with the system",
      "To provide a detailed view of the internal processes and data flows",
      "To represent the highest level of abstraction for the system",
      "Both a) and c)"
    ],
    "correctAnswer": "D",
    "topic": "Data Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 286,
    "question": "Which of the following statements is TRUE about the Process Specification (PSPEC) in Data Flow Diagrams?",
    "options": [
      "It provides a narrative description of the process",
      "It can include pseudocode, equations, tables, and diagrams",
      "It helps refine each process bubble until it does just one thing",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Data Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 287,
    "question": "In the context of Control Flow Diagrams, what is the purpose of a \"control flow\"?",
    "options": [
      "To represent data flows between processes",
      "To represent events and control items that manage processes",
      "To depict the sequence of operations in the system",
      "To model the class hierarchy and relationships"
    ],
    "correctAnswer": "B",
    "topic": "Control Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 288,
    "question": "Which of the following statements is TRUE about the Control Specification (CSPEC) in Control Flow Diagrams?",
    "options": [
      "It describes how control is handled in the system",
      "It can be represented using state diagrams, state transition tables, or decision tables",
      "It lists all the sensors, interrupt conditions, and switches that are relevant to the system",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Control Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 289,
    "question": "In the context of Control Flow Diagrams, what does a vertical bar notation represent?",
    "options": [
      "An input to or output from a control spec (CSPEC)",
      "A data flow between processes",
      "An external entity interacting with the system",
      "A process that transforms data"
    ],
    "correctAnswer": "A",
    "topic": "Control Flow Diagrams",
    "difficulty": "hard"
  },
  {
    "id": 290,
    "question": "Which of the following statements is FALSE regarding the guidelines for building a Control Specification (CSPEC)?",
    "options": [
      "List all sensors that are \"read\" by the software",
      "List all interrupt conditions",
      "List all \"switches\" that are actuated by an operator",
      "Describe the behavior of the system using only state diagrams"
    ],
    "correctAnswer": "D",
    "topic": "Control Flow Diagrams",
    "difficulty": "hard"
  },
  {
    "id": 291,
    "question": "In the context of object-oriented analysis, what is the purpose of generalization?",
    "options": [
      "To represent the \"is-a\" relationship between classes",
      "To model the logical or physical containment of one object by another",
      "To represent the dependency between two classes",
      "To model the realization of an interface or abstract class by a concrete class"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Analysis",
    "difficulty": "medium"
  },
  {
    "id": 292,
    "question": "Which of the following statements best describes the difference between association and aggregation in object-oriented analysis?",
    "options": [
      "Association represents a \"has-a\" relationship, while aggregation represents a \"part-of\" relationship",
      "Association represents a \"part-of\" relationship, while aggregation represents a \"has-a\" relationship",
      "Association is a unidirectional relationship, while aggregation is bidirectional",
      "There is no difference between association and aggregation"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Analysis",
    "difficulty": "medium"
  },
  {
    "id": 293,
    "question": "In the context of object-oriented analysis, what is the primary difference between structured analysis and object-oriented analysis?",
    "options": [
      "Structured analysis focuses on data flow, while object-oriented analysis focuses on objects and their interactions",
      "Structured analysis is based on procedural programming, while object-oriented analysis is based on object-oriented programming",
      "Structured analysis uses functional decomposition, while object-oriented analysis uses class decomposition",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Analysis",
    "difficulty": "medium"
  },
  {
    "id": 294,
    "question": "Under what conditions would you decompose a process on a Data Flow Diagram (DFD)?",
    "options": [
      "When the process is too complex and needs to be broken down into smaller, more manageable processes",
      "When the process is interacting with multiple external entities",
      "When the process is consuming or producing multiple data flows",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Data Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 295,
    "question": "Which of the following is NOT a specific benefit of using Data Flow Models?",
    "options": [
      "They provide a graphical representation of the system's data flow",
      "They help identify potential data redundancies and inconsistencies",
      "They facilitate the identification of system boundaries and interfaces",
      "They automatically generate the system's code from the model"
    ],
    "correctAnswer": "D",
    "topic": "Data Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 296,
    "question": "In the context of data modeling, what does the notation \"(0, m)\" represent in an Entity-Relationship Diagram (ERD)?",
    "options": [
      "Exactly one instance of the object must exist",
      "Zero or more instances of the object can exist",
      "The object is optional and can have multiple instances",
      "The object is mandatory and can have multiple instances"
    ],
    "correctAnswer": "B",
    "topic": "Data Modeling",
    "difficulty": "medium"
  },
  {
    "id": 297,
    "question": "Which of the following is NOT a valid approach for a Control Specification (CSPEC) in Control Flow Diagrams?",
    "options": [
      "State diagram",
      "State transition table",
      "Decision tables",
      "Use case diagram"
    ],
    "correctAnswer": "D",
    "topic": "Control Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 298,
    "question": "In the context of object-oriented analysis, what is the purpose of a dependency relationship?",
    "options": [
      "To represent the \"is-a\" relationship between classes",
      "To model the logical or physical containment of one object by another",
      "To represent a semantic relationship between two classes",
      "To model the realization of an interface or abstract class by a concrete class"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Analysis",
    "difficulty": "medium"
  },
  {
    "id": 299,
    "question": "Which of the following statements is TRUE about the Process Specification (PSPEC) in Data Flow Diagrams?",
    "options": [
      "It is used to refine each process bubble until it does just one thing",
      "It provides a narrative description of the data flow",
      "It represents the control flow and events in the system",
      "It shows the sequence of operations and their dependencies"
    ],
    "correctAnswer": "A",
    "topic": "Data Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 300,
    "question": "In the context of object-oriented analysis, what is the purpose of a realization relationship?",
    "options": [
      "To represent the \"is-a\" relationship between classes",
      "To model the logical or physical containment of one object by another",
      "To represent a semantic relationship between two classes",
      "To model the realization of an interface or abstract class by a concrete class"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Analysis",
    "difficulty": "hard"
  },
  {
    "id": 301,
    "question": "Which of the following statements is FALSE regarding the guidelines for Data Flow Diagramming?",
    "options": [
      "All icons must be labeled with meaningful names",
      "The DFD evolves through a number of levels of detail",
      "Always begin with a level 1 DFD",
      "Always show external entities at level 0"
    ],
    "correctAnswer": "C",
    "topic": "Data Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 302,
    "question": "In the context of object-oriented analysis, what is the purpose of a package?",
    "options": [
      "To represent a collection of related classes and interfaces",
      "To model the logical or physical containment of one object by another",
      "To represent a semantic relationship between two classes",
      "To model the realization of an interface or abstract class by a concrete class"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Analysis",
    "difficulty": "medium"
  },
  {
    "id": 303,
    "question": "Which of the following statements is TRUE about the relationship between Data Flow Diagrams (DFDs) and the analysis model?",
    "options": [
      "DFDs are not related to the analysis model",
      "DFDs are used to construct the analysis model",
      "DFDs are derived from the analysis model",
      "DFDs and the analysis model are completely independent"
    ],
    "correctAnswer": "B",
    "topic": "Data Flow Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 304,
    "question": "In the context of object-oriented analysis, what is the primary difference between composition and aggregation?",
    "options": [
      "Composition represents a stronger form of association than aggregation",
      "Aggregation represents a stronger form of association than composition",
      "There is no difference between composition and aggregation",
      "Composition represents a \"has-a\" relationship, while aggregation represents a \"part-of\" relationship"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Analysis",
    "difficulty": "hard"
  },
  {
    "id": 305,
    "question": "Which of the following statements is TRUE about the guidelines for building a Control Specification (CSPEC)?",
    "options": [
      "Focus on possible omissions and ask if there are any other ways to reach or exit a particular state",
      "Only consider the sensors and interrupt conditions, not the switches or data conditions",
      "Describe the behavior of the system using only state diagrams or state transition tables",
      "Do not consider the noun-verb parse applied to the software statement of scope"
    ],
    "correctAnswer": "A",
    "topic": "Control Flow Diagrams",
    "difficulty": "hard"
  },
  {
    "id": 306,
    "question": "Which of the following is NOT a characteristic of a good design?",
    "options": [
      "Implement explicit requirements",
      "Accommodate implicit requirements",
      "Provide an incomplete picture of the software",
      "Be a readable and understandable guide"
    ],
    "correctAnswer": "C",
    "topic": "Software Design",
    "difficulty": "easy"
  },
  {
    "id": 307,
    "question": "What is the primary benefit of abstraction?",
    "options": [
      "It allows for the suppression of low-level details",
      "It facilitates a top-down approach to software design",
      "It improves code readability",
      "It enhances software maintainability"
    ],
    "correctAnswer": "A",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 308,
    "question": "Which of the following is the best type of cohesion?",
    "options": [
      "Logical cohesion",
      "Temporal cohesion",
      "Procedural cohesion",
      "Functional or informational cohesion"
    ],
    "correctAnswer": "D",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 309,
    "question": "What is the worst type of coupling?",
    "options": [
      "Data coupling",
      "Stamp coupling",
      "Control coupling",
      "Content coupling"
    ],
    "correctAnswer": "D",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 310,
    "question": "Which of the following architectural views shows how the software is decomposed for development?",
    "options": [
      "Logical view",
      "Process view",
      "Development view",
      "Physical view"
    ],
    "correctAnswer": "C",
    "topic": "Software Architecture",
    "difficulty": "medium"
  },
  {
    "id": 311,
    "question": "Which of the following is NOT a design principle for user interfaces?",
    "options": [
      "User familiarity",
      "Consistency",
      "Minimal surprise",
      "High complexity"
    ],
    "correctAnswer": "D",
    "topic": "User Interface Design",
    "difficulty": "easy"
  },
  {
    "id": 312,
    "question": "What is the primary advantage of direct manipulation interfaces?",
    "options": [
      "Users feel in control of the computer",
      "Users get immediate feedback on their actions",
      "Both a) and b)",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 313,
    "question": "Which of the following interaction styles is best suited for occasional users?",
    "options": [
      "Direct manipulation",
      "Menu selection",
      "Command language",
      "Natural language"
    ],
    "correctAnswer": "D",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 314,
    "question": "What is the primary disadvantage of command interfaces?",
    "options": [
      "Users have to learn and remember a command language",
      "Commands of arbitrary complexity cannot be created",
      "System interaction requires typing ability",
      "Both a) and c)"
    ],
    "correctAnswer": "D",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 315,
    "question": "Which of the following is NOT a criterion for good design?",
    "options": [
      "Be traceable back to analysis",
      "Accommodate change",
      "Degrade gently",
      "Reinvent the wheel"
    ],
    "correctAnswer": "D",
    "topic": "Software Design",
    "difficulty": "easy"
  },
  {
    "id": 316,
    "question": "What is the purpose of stepwise refinement?",
    "options": [
      "To decompose a high-level statement of function until low-level programming language statements are reached",
      "To abstract away low-level details",
      "To partition a system into modules",
      "To enhance cohesion and reduce coupling"
    ],
    "correctAnswer": "A",
    "topic": "Software Design",
    "difficulty": "medium"
  },
  {
    "id": 317,
    "question": "Which of the following is the best type of coupling?",
    "options": [
      "Data coupling",
      "Stamp coupling",
      "Control coupling",
      "Common coupling"
    ],
    "correctAnswer": "A",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 318,
    "question": "What is the primary purpose of architectural design?",
    "options": [
      "To identify the sub-systems making up a system and the framework for sub-system control and communication",
      "To create a detailed design specification for each module",
      "To define the user interface of the system",
      "To optimize the performance of the system"
    ],
    "correctAnswer": "A",
    "topic": "Software Architecture",
    "difficulty": "medium"
  },
  {
    "id": 319,
    "question": "Which of the following architectural views shows the system hardware and how software components are distributed across the processors?",
    "options": [
      "Logical view",
      "Process view",
      "Development view",
      "Physical view"
    ],
    "correctAnswer": "D",
    "topic": "Software Architecture",
    "difficulty": "medium"
  },
  {
    "id": 320,
    "question": "Which of the following interaction styles is best suited for video games and CAD systems?",
    "options": [
      "Direct manipulation",
      "Menu selection",
      "Form fill-in",
      "Command language"
    ],
    "correctAnswer": "A",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 321,
    "question": "What is the primary advantage of menu systems?",
    "options": [
      "Users need not remember command names",
      "Typing effort is minimal",
      "User errors are trapped by the interface",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "User Interface Design",
    "difficulty": "easy"
  },
  {
    "id": 322,
    "question": "Which of the following is a disadvantage of form-based interfaces?",
    "options": [
      "Simple data entry",
      "Easy to learn",
      "Causes problems where user options do not match the form fields",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 323,
    "question": "What is the primary purpose of information presentation in user interface design?",
    "options": [
      "To present system information to system users",
      "To transform information for presentation in graphical form",
      "Both a) and b)",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 324,
    "question": "Which of the following is NOT a design principle for user interfaces?",
    "options": [
      "Recoverability",
      "User guidance",
      "User diversity",
      "High complexity"
    ],
    "correctAnswer": "D",
    "topic": "User Interface Design",
    "difficulty": "easy"
  },
  {
    "id": 325,
    "question": "Which of the following is a disadvantage of natural language interfaces?",
    "options": [
      "They require too much typing for experienced users",
      "The vocabulary is unlimited",
      "They are not suitable for casual users",
      "Both a) and c)"
    ],
    "correctAnswer": "A",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 326,
    "question": "Which of the following is NOT a benefit of modularity?",
    "options": [
      "Easier to build",
      "Easier to change",
      "Easier to fix",
      "Increases the cost of software development"
    ],
    "correctAnswer": "D",
    "topic": "Software Design Principles",
    "difficulty": "easy"
  },
  {
    "id": 327,
    "question": "What is the primary goal of cohesion in software design?",
    "options": [
      "To minimize the interaction between modules",
      "To maximize the functional strength of a module",
      "To enhance reusability of modules",
      "To improve the readability of code"
    ],
    "correctAnswer": "B",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 328,
    "question": "Which of the following types of coupling is associated with the use of global variables?",
    "options": [
      "Data coupling",
      "Stamp coupling",
      "Control coupling",
      "Common coupling"
    ],
    "correctAnswer": "D",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 329,
    "question": "What is the primary disadvantage of temporal cohesion?",
    "options": [
      "It makes modules difficult to understand",
      "It reduces the reusability of modules",
      "It increases the coupling between modules",
      "It decreases the functional strength of modules"
    ],
    "correctAnswer": "B",
    "topic": "Software Design Principles",
    "difficulty": "hard"
  },
  {
    "id": 330,
    "question": "Which of the following architectural patterns is NOT typically used for security purposes?",
    "options": [
      "Layered architecture",
      "Client-server architecture",
      "Peer-to-peer architecture",
      "Microservices architecture"
    ],
    "correctAnswer": "C",
    "topic": "Software Architecture",
    "difficulty": "hard"
  },
  {
    "id": 331,
    "question": "Which of the following is the primary purpose of the \"4+1\" view model of software architecture?",
    "options": [
      "To provide a comprehensive understanding of the system from different perspectives",
      "To identify the sub-systems making up a system",
      "To define the framework for sub-system control and communication",
      "To optimize the performance of the system"
    ],
    "correctAnswer": "A",
    "topic": "Software Architecture",
    "difficulty": "medium"
  },
  {
    "id": 332,
    "question": "Which of the following interaction styles is best suited for stock control and personal loan processing?",
    "options": [
      "Direct manipulation",
      "Menu selection",
      "Form fill-in",
      "Command language"
    ],
    "correctAnswer": "C",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 333,
    "question": "What is the primary disadvantage of command interfaces for occasional users?",
    "options": [
      "They require users to learn and remember a command language",
      "They are not suitable for presenting a small number of choices",
      "They are difficult to program",
      "They make heavy demands on the computer system"
    ],
    "correctAnswer": "A",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 334,
    "question": "Which of the following is a disadvantage of menu systems?",
    "options": [
      "Users need to remember command names",
      "Typing effort is minimal",
      "Actions involving logical conjunction or disjunction are awkward to represent",
      "Context-dependent help cannot be provided"
    ],
    "correctAnswer": "C",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 335,
    "question": "Which of the following is NOT a design principle for user interfaces?",
    "options": [
      "Minimal surprise",
      "User guidance",
      "User diversity",
      "High cohesion"
    ],
    "correctAnswer": "D",
    "topic": "User Interface Design",
    "difficulty": "easy"
  },
  {
    "id": 336,
    "question": "Which of the following is NOT a purpose of a Class Diagram?",
    "options": [
      "Analysis and design of the static view of an application",
      "Describe responsibilities of a system",
      "Base for component and deployment diagrams",
      "Testing the dynamic behavior of the system"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 337,
    "question": "Which of the following relationships represents the \"has-a\" relationship?",
    "options": [
      "Inheritance",
      "Aggregation",
      "Composition",
      "Both b) and c)"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 338,
    "question": "In a Unidirectional Association relationship, if Class A can call Class B, then which statement is true?",
    "options": [
      "Class B can call Class A",
      "Class B cannot call Class A",
      "Class A cannot call Class B",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 339,
    "question": "Which of the following is NOT a valid multiplicity notation?",
    "options": [
      "1..*",
      "0..1",
      "2..5",
      "*"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 340,
    "question": "Which of the following relationships is represented by a solid line with a diamond at one end?",
    "options": [
      "Inheritance",
      "Aggregation",
      "Composition",
      "Association"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 341,
    "question": "Which of the following is NOT a valid attribute type in a Class Diagram?",
    "options": [
      "int",
      "double",
      "String",
      "void"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 342,
    "question": "Which of the following is a static diagram in UML?",
    "options": [
      "Use Case Diagram",
      "Sequence Diagram",
      "Class Diagram",
      "Activity Diagram"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 343,
    "question": "What does the notation \"1..*\" represent in a Class Diagram?",
    "options": [
      "One or more instances",
      "Exactly one instance",
      "Zero or more instances",
      "One instance only"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 344,
    "question": "Which of the following relationships is represented by a solid line with an open arrowhead?",
    "options": [
      "Inheritance",
      "Aggregation",
      "Composition",
      "Association"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 345,
    "question": "Which of the following is NOT a valid cardinality notation in a Class Diagram?",
    "options": [
      "0..1",
      "1..*",
      "0..0",
      "2..5"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 346,
    "question": "Which of the following relationships is represented by a dashed line with an open arrowhead?",
    "options": [
      "Inheritance",
      "Aggregation",
      "Composition",
      "Dependency"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 347,
    "question": "Which of the following notations represents the multiplicity of \"zero or one\" in a Class Diagram?",
    "options": [
      "0..1",
      "1",
      "*",
      "0..*"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 348,
    "question": "Which of the following is NOT a valid syntax for representing a method in a Class Diagram?",
    "options": [
      "methodName()",
      "methodName(parameterList)",
      "returnType methodName(parameterList)",
      "methodName(): returnType"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 349,
    "question": "Which of the following is a valid notation for representing a private attribute in a Class Diagram?",
    "options": [
      "-attributeName",
      "+attributeName",
      "#attributeName",
      "~attributeName"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 350,
    "question": "Which of the following is NOT a valid notation for representing a protected method in a Class Diagram?",
    "options": [
      "-methodName()",
      "+methodName()",
      "#methodName()",
      "~methodName()"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 351,
    "question": "Which of the following is a valid notation for representing a static attribute in a Class Diagram?",
    "options": [
      "attributeName",
      "{static} attributeName",
      "underline attributeName",
      "italicize attributeName"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 352,
    "question": "What is the primary goal of the software design process?",
    "options": [
      "Implementing low-level functions",
      "Translating the requirements model into a blueprint for construction",
      "Conducting software testing",
      "Ensuring user interface consistency"
    ],
    "correctAnswer": "B",
    "topic": "Software Design",
    "difficulty": "easy"
  },
  {
    "id": 353,
    "question": "Which of the following is not a characteristic of good software design?",
    "options": [
      "Explicit requirements implementation",
      "Readability",
      "Ambiguity",
      "Completeness"
    ],
    "correctAnswer": "C",
    "topic": "Software Design",
    "difficulty": "easy"
  },
  {
    "id": 354,
    "question": "In the context of software design, what does \"refinement\" refer to?",
    "options": [
      "Increasing modularity",
      "Elaborating on details iteratively",
      "Ensuring high cohesion",
      "Reducing coupling"
    ],
    "correctAnswer": "B",
    "topic": "Software Design",
    "difficulty": "medium"
  },
  {
    "id": 355,
    "question": "Which type of cohesion is considered the weakest?",
    "options": [
      "Functional cohesion",
      "Temporal cohesion",
      "Procedural cohesion",
      "Coincidental cohesion"
    ],
    "correctAnswer": "D",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 356,
    "question": "Which of the following best describes \"low coupling\"?",
    "options": [
      "Modules are highly dependent on each other",
      "Modules have minimal interdependencies",
      "Modules have a high degree of similarity",
      "Modules share global data"
    ],
    "correctAnswer": "B",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 357,
    "question": "Which principle involves using a higher-level description without worrying about lower-level details initially?",
    "options": [
      "Modularity",
      "Abstraction",
      "Refinement",
      "Encapsulation"
    ],
    "correctAnswer": "B",
    "topic": "Software Design Principles",
    "difficulty": "easy"
  },
  {
    "id": 358,
    "question": "What is the primary purpose of architectural design in software engineering?",
    "options": [
      "Coding the software",
      "Creating detailed module specifications",
      "Establishing the overall structure of the system",
      "Writing user documentation"
    ],
    "correctAnswer": "C",
    "topic": "Software Architecture",
    "difficulty": "easy"
  },
  {
    "id": 359,
    "question": "Which view in the 4+1 architectural view model represents the runtime behavior of the system?",
    "options": [
      "Logical view",
      "Process view",
      "Development view",
      "Physical view"
    ],
    "correctAnswer": "B",
    "topic": "Software Architecture",
    "difficulty": "medium"
  },
  {
    "id": 360,
    "question": "Which architectural style is characterized by a set of cooperating processes interconnected by message-passing communication?",
    "options": [
      "Layered",
      "Client-server",
      "Event-driven",
      "Microservices"
    ],
    "correctAnswer": "D",
    "topic": "Software Architecture",
    "difficulty": "hard"
  },
  {
    "id": 361,
    "question": "Which principle of UI design emphasizes making the interface familiar to users by leveraging their prior experiences?",
    "options": [
      "Consistency",
      "User familiarity",
      "Recoverability",
      "Minimal surprise"
    ],
    "correctAnswer": "B",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 362,
    "question": "In which interaction style does the user interact with the system by manipulating visual representations on the screen?",
    "options": [
      "Command language",
      "Menu selection",
      "Direct manipulation",
      "Form fill-in"
    ],
    "correctAnswer": "C",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 363,
    "question": "Which of the following is NOT an advantage of using graphical user interfaces (GUIs)?",
    "options": [
      "Intuitive interaction",
      "High learning curve",
      "Immediate feedback",
      "Easier navigation"
    ],
    "correctAnswer": "B",
    "topic": "User Interface Design",
    "difficulty": "medium"
  },
  {
    "id": 364,
    "question": "Which relationship in class diagrams indicates a \"has-a\" relationship where the existence of the contained class depends on the containing class?",
    "options": [
      "Inheritance",
      "Association",
      "Aggregation",
      "Composition"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 365,
    "question": "What does multiplicity in a class diagram specify?",
    "options": [
      "The number of operations in a class",
      "The number of attributes in a class",
      "The number of instances one class can have relative to another",
      "The number of classes in the diagram"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 366,
    "question": "In a class diagram, which symbol represents a private attribute?",
    "options": [
      "+",
      "#",
      "-",
      "/"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 367,
    "question": "In a library management system, which class is likely to have attributes such as Title, Author, ISBN?",
    "options": [
      "User",
      "Librarian",
      "Book",
      "Account"
    ],
    "correctAnswer": "C",
    "topic": "Class Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 368,
    "question": "Which method would most likely be found in the Librarian class in a library management system?",
    "options": [
      "Search()",
      "Calculate_fine()",
      "Verify()",
      "Add()"
    ],
    "correctAnswer": "A",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 369,
    "question": "In a library management system, which attribute would not logically belong to the Account class?",
    "options": [
      "no_borrowed_books",
      "fine_amount",
      "Password",
      "no_reserved_books"
    ],
    "correctAnswer": "C",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 370,
    "question": "In a college information system, which class would contain the attribute HODName?",
    "options": [
      "CollegeInformation",
      "Department",
      "Student",
      "Staff"
    ],
    "correctAnswer": "B",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 371,
    "question": "What is the relationship between the classes Student and UGStudent in a college information system?",
    "options": [
      "Association",
      "Aggregation",
      "Inheritance",
      "Composition"
    ],
    "correctAnswer": "C",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 372,
    "question": "Which method would be part of the Classroom class in a college information system?",
    "options": [
      "PayFees()",
      "IsOccupied()",
      "ShowEvents()",
      "StaffDetails()"
    ],
    "correctAnswer": "B",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 373,
    "question": "Which class in a hospital management system would likely have attributes such as DoctorID, Specialization, and Department?",
    "options": [
      "Patient",
      "Doctor",
      "Appointment",
      "Prescription"
    ],
    "correctAnswer": "B",
    "topic": "Class Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 374,
    "question": "In a hospital management system, which class relationship would best describe a doctor being assigned to multiple patients?",
    "options": [
      "One-to-one",
      "One-to-many",
      "Many-to-one",
      "Many-to-many"
    ],
    "correctAnswer": "B",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 375,
    "question": "Which method would you expect to find in a Patient class in a hospital management system?",
    "options": [
      "ScheduleAppointment()",
      "CalculateDosage()",
      "UpdateMedicalRecord()",
      "VerifyInsurance()"
    ],
    "correctAnswer": "C",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 376,
    "question": "In an online shopping system, which class would contain the attributes ProductID, ProductName, and Price?",
    "options": [
      "Customer",
      "Order",
      "Product",
      "Cart"
    ],
    "correctAnswer": "C",
    "topic": "Class Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 377,
    "question": "Which method would most likely belong to the Order class in an online shopping system?",
    "options": [
      "AddToCart()",
      "ProcessPayment()",
      "CheckOut()",
      "TrackShipment()"
    ],
    "correctAnswer": "C",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 378,
    "question": "What type of relationship exists between the classes Customer and Order in an online shopping system?",
    "options": [
      "Association",
      "Aggregation",
      "Inheritance",
      "Composition"
    ],
    "correctAnswer": "A",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 379,
    "question": "In a banking system, which class would likely include methods such as Deposit() and Withdraw()?",
    "options": [
      "Customer",
      "Account",
      "Transaction",
      "Loan"
    ],
    "correctAnswer": "B",
    "topic": "Class Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 380,
    "question": "What attribute is essential for the Transaction class in a banking system?",
    "options": [
      "AccountNumber",
      "TransactionID",
      "Balance",
      "InterestRate"
    ],
    "correctAnswer": "B",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 381,
    "question": "In a banking system, which method would belong to the Loan class?",
    "options": [
      "CalculateInterest()",
      "GenerateStatement()",
      "ApproveLoan()",
      "CloseAccount()"
    ],
    "correctAnswer": "A",
    "topic": "Class Diagrams",
    "difficulty": "medium"
  },
    {
    "id": 382,
    "question": "Which of the following is not a step in unit testing?",
    "options": [
      "Planning",
      "Writing test cases",
      "Performing the unit test",
      "Integration testing"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 383,
    "question": "What is the main objective of unit testing?",
    "options": [
      "To isolate and test the smallest testable parts of an application",
      "To test the entire application",
      "To perform integration testing",
      "To perform system testing"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 384,
    "question": "Which of the following is not an advantage of unit testing?",
    "options": [
      "Easier debugging processes",
      "Developers can quickly make changes to the codebase",
      "Developers can reuse code and migrate it to new projects",
      "Unit tests can uncover every bug"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 385,
    "question": "Which of the following is a disadvantage of unit testing?",
    "options": [
      "Tests will not uncover every bug",
      "Fixing problems early is usually cheaper than fixing them later in development",
      "Easier debugging processes",
      "Developers can quickly make changes to the codebase"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 386,
    "question": "Which testing methodology requires developers to first write failing unit tests before writing the actual code?",
    "options": [
      "Unit testing",
      "Integration testing",
      "Test-driven development (TDD)",
      "Behavior-driven development (BDD)"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 387,
    "question": "Which of the following is a component of test-driven development (TDD)?",
    "options": [
      "Unit testing",
      "Integration testing",
      "System testing",
      "Acceptance testing"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 388,
    "question": "Which of the following is the first level of software testing, performed before other testing methods?",
    "options": [
      "Unit testing",
      "Integration testing",
      "System testing",
      "Acceptance testing"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 389,
    "question": "Which of the following statements is true about unit testing?",
    "options": [
      "Unit tests should be created for every line of code",
      "Unit tests should focus on code that could affect the behavior of the software being developed",
      "Unit tests should test the entire application",
      "Unit tests should test the integration of different components"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 390,
    "question": "What is the difference between verification and validation in software testing?",
    "options": [
      "Verification ensures that the software correctly implements a specific function, while validation ensures that the software meets customer requirements",
      "Verification ensures that the software meets customer requirements, while validation ensures that the software correctly implements a specific function",
      "There is no difference between verification and validation",
      "Verification and validation are the same process"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "hard"
  },
  {
    "id": 391,
    "question": "Which of the following is not an importance of software testing mentioned?",
    "options": [
      "Defects can be identified early",
      "Improves quality of software",
      "Increased customer satisfaction",
      "Ensures 100% bug-free software"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 392,
    "question": "What is the purpose of test cases in software testing?",
    "options": [
      "To verify the functionality of the software",
      "To validate the software against customer requirements",
      "To identify defects and bugs",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 393,
    "question": "Which of the following is a disadvantage of manual unit testing?",
    "options": [
      "Lack of consistency",
      "Time-consuming",
      "Prone to human errors",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 394,
    "question": "Which of the following is an advantage of automated unit testing?",
    "options": [
      "Faster execution",
      "Consistent results",
      "Reusable test cases",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 395,
    "question": "What is the purpose of non-functional testing in software testing?",
    "options": [
      "To identify scalability issues",
      "To test the user interface",
      "To test the integration of different components",
      "To test the functionality of the software"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 396,
    "question": "What is the purpose of a testing framework in unit testing?",
    "options": [
      "To develop test cases",
      "To flag and report any failed test cases",
      "To provide a summary of test cases",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 397,
    "question": "Which of the following statements is true about unit testing?",
    "options": [
      "Unit tests should test the integration of different components",
      "Unit tests should test the entire application",
      "Unit tests should be performed in an isolated environment to ensure a lack of dependencies in the code",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 398,
    "question": "Which of the following is a real-time scenario where unit testing is used?",
    "options": [
      "Testing the user interface of a web application",
      "Testing the performance of a database system",
      "Testing the functionality of a calculator application",
      "Testing the integration of different modules in a software system"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 399,
    "question": "Which of the following is a characteristic of test-driven development (TDD)?",
    "options": [
      "Tests are written before the code",
      "Tests are written after the code",
      "Tests are not required",
      "Tests are written during the coding process"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 400,
    "question": "What is the purpose of unit testing in software development?",
    "options": [
      "To test the entire application",
      "To test the integration of different components",
      "To test the smallest testable parts of an application",
      "To perform acceptance testing"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 401,
    "question": "What is the purpose of verification in software testing?",
    "options": [
      "To ensure that the software meets customer requirements",
      "To ensure that the software correctly implements a specific function",
      "To perform integration testing",
      "To perform system testing"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 402,
    "question": "Which of the following is an advantage of unit testing?",
    "options": [
      "Tests will uncover every bug",
      "Easier integration testing",
      "Developers can reuse code and migrate it to new projects",
      "Tests can be performed without an isolated environment"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 403,
    "question": "Which of the following is a disadvantage of manual unit testing?",
    "options": [
      "Faster execution",
      "Consistent results",
      "Time-consuming",
      "Reusable test cases"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 404,
    "question": "What is the purpose of a testing framework in automated unit testing?",
    "options": [
      "To develop test cases",
      "To perform manual testing",
      "To perform integration testing",
      "To perform system testing"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 405,
    "question": "Which of the following statements is true about unit testing?",
    "options": [
      "Unit tests should test the entire application",
      "Unit tests should test the integration of different components",
      "Unit tests should be performed in an environment with dependencies",
      "Unit tests should be performed in an isolated environment to ensure a lack of dependencies in the code"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 406,
    "question": "Which of the following is NOT an advantage of Big Bang Integration Testing?",
    "options": [
      "Simple and straightforward approach",
      "Can be completed quickly",
      "Good for long projects",
      "Convenient for small systems"
    ],
    "correctAnswer": "C",
    "topic": "Integration Testing",
    "difficulty": "medium"
  },
  {
    "id": 407,
    "question": "In Bottom-Up Integration Testing, what is used to drive and pass appropriate data to the lower-level modules?",
    "options": [
      "Drivers",
      "Stubs",
      "Modules",
      "Test cases"
    ],
    "correctAnswer": "A",
    "topic": "Integration Testing",
    "difficulty": "medium"
  },
  {
    "id": 408,
    "question": "Which of the following is a disadvantage of Top-Down Integration Testing?",
    "options": [
      "Needs many Stubs",
      "Separately debugged module",
      "Easier isolation of interface errors",
      "Few or no drivers needed"
    ],
    "correctAnswer": "A",
    "topic": "Integration Testing",
    "difficulty": "medium"
  },
  {
    "id": 409,
    "question": "What is the primary purpose of Bottom-Up Integration Testing?",
    "options": [
      "To test each subsystem's interfaces among various modules",
      "To test high-level modules first",
      "To test low-level modules first",
      "To test the entire system at once"
    ],
    "correctAnswer": "A",
    "topic": "Integration Testing",
    "difficulty": "medium"
  },
  {
    "id": 410,
    "question": "Which of the following is NOT an advantage of Mixed Integration Testing?",
    "options": [
      "Parallel tests can be performed in top and bottom layers",
      "It is useful for very large projects with several sub-projects",
      "It overcomes the shortcomings of Top-Down and Bottom-Up approaches",
      "It can be used for smaller systems with huge interdependence between modules"
    ],
    "correctAnswer": "D",
    "topic": "Integration Testing",
    "difficulty": "hard"
  },
  {
    "id": 411,
    "question": "Validation Testing ensures that the product:",
    "options": [
      "Meets the client's needs",
      "Is free from bugs",
      "Passes all test cases",
      "Follows coding standards"
    ],
    "correctAnswer": "A",
    "topic": "Validation Testing",
    "difficulty": "medium"
  },
  {
    "id": 412,
    "question": "Which type of testing is performed after Integration Testing and before Acceptance Testing?",
    "options": [
      "Unit Testing",
      "System Testing",
      "Validation Testing",
      "Performance Testing"
    ],
    "correctAnswer": "B",
    "topic": "System Testing",
    "difficulty": "medium"
  },
  {
    "id": 413,
    "question": "Which of the following is NOT a type of System Testing?",
    "options": [
      "Performance Testing",
      "Load Testing",
      "Stress Testing",
      "Unit Testing"
    ],
    "correctAnswer": "D",
    "topic": "System Testing",
    "difficulty": "easy"
  },
  {
    "id": 414,
    "question": "In Object-Oriented Testing Strategies, what is the smallest testable unit?",
    "options": [
      "The module",
      "The class or object",
      "The operation",
      "The subprogram"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 415,
    "question": "Which of the following is NOT a characteristic of Class Testing in the Object-Oriented context?",
    "options": [
      "Driven by the operations encapsulated by the class",
      "Driven by the state behavior of the class",
      "Focuses on the algorithmic detail of a module",
      "Focuses on the data that flow across the module interface"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 416,
    "question": "In Object-Oriented Integration Testing, what is meant by \"thread-based testing\"?",
    "options": [
      "Integrating the set of classes required to respond to one input or event for the system",
      "Testing each class individually",
      "Integrating classes based on their dependencies",
      "Integrating classes based on their use of server classes"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 417,
    "question": "In Object-Oriented Integration Testing, what is meant by \"use-based testing\"?",
    "options": [
      "Integrating the set of classes required to respond to one input or event for the system",
      "Testing each class individually",
      "Integrating classes based on their dependencies on other classes",
      "Integrating classes based on their use of server classes"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 418,
    "question": "What is the purpose of \"cluster testing\" in Object-Oriented Integration Testing?",
    "options": [
      "To test the collaborations between a cluster of collaborating classes",
      "To test each class individually",
      "To test the threads of the system",
      "To test the use of server classes"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 419,
    "question": "Which of the following is an advantage of Bottom-Up Integration Testing?",
    "options": [
      "Several disjoint subsystems can be tested simultaneously",
      "Driver modules must be produced",
      "It is difficult to observe the test results",
      "Modules at lower levels are tested inadequately"
    ],
    "correctAnswer": "A",
    "topic": "Integration Testing",
    "difficulty": "medium"
  },
  {
    "id": 420,
    "question": "Which of the following is a disadvantage of Top-Down Integration Testing?",
    "options": [
      "Separately debugged module",
      "Easier isolation of interface errors",
      "Few or no drivers needed",
      "Modules at lower level are tested inadequately"
    ],
    "correctAnswer": "D",
    "topic": "Integration Testing",
    "difficulty": "medium"
  },
  {
    "id": 421,
    "question": "What is the primary goal of System Testing?",
    "options": [
      "To test individual modules",
      "To test the overall functionality and performance of the complete system",
      "To test the integration between modules",
      "To test the user interface"
    ],
    "correctAnswer": "B",
    "topic": "System Testing",
    "difficulty": "easy"
  },
  {
    "id": 422,
    "question": "In Object-Oriented Testing Strategies, what is the purpose of testing an operation X in the context of each subclass that inherits it?",
    "options": [
      "To ensure that the operation works correctly in different contexts",
      "To test the algorithmic detail of the operation",
      "To test the data flow across the module interface",
      "To test the state behavior of the class"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 423,
    "question": "Which of the following is a disadvantage of using drivers and stubs as replacement operations in Object-Oriented Integration Testing?",
    "options": [
      "It is difficult to create drivers and stubs",
      "It can lead to inaccurate test results",
      "It is time-consuming",
      "It should be avoided whenever possible"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 424,
    "question": "Which of the following is a characteristic of Class Testing in the Object-Oriented context?",
    "options": [
      "It focuses on the algorithmic detail of a module",
      "It focuses on the data that flow across the module interface",
      "It is driven by the operations encapsulated by the class",
      "It is driven by the state behavior of the class"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 425,
    "question": "What is the purpose of Validation Testing?",
    "options": [
      "To ensure the product meets the client's needs",
      "To test the performance of the system",
      "To test the integration between modules",
      "To test individual classes"
    ],
    "correctAnswer": "A",
    "topic": "Validation Testing",
    "difficulty": "medium"
  },
  {
    "id": 426,
    "question": "Which type of testing is performed to check the robustness of the system under varying loads?",
    "options": [
      "Performance Testing",
      "Load Testing",
      "Stress Testing",
      "Scalability Testing"
    ],
    "correctAnswer": "C",
    "topic": "System Testing",
    "difficulty": "medium"
  },
  {
    "id": 427,
    "question": "In Object-Oriented Testing Strategies, what is the issue with testing an operation X in isolation (traditional unit testing approach)?",
    "options": [
      "It may not accurately represent the operation's behavior in different contexts",
      "It is time-consuming",
      "It requires the creation of stubs",
      "It is not possible in the Object-Oriented context"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 428,
    "question": "Which of the following is NOT a disadvantage of Big Bang Integration Testing?",
    "options": [
      "High risk of integration problems",
      "Difficult to localize errors",
      "Simple and straightforward approach",
      "Long and complex debugging efforts"
    ],
    "correctAnswer": "C",
    "topic": "Integration Testing",
    "difficulty": "medium"
  },
  {
    "id": 429,
    "question": "Which type of testing is carried out to determine the behavior of a system or software product under extreme load?",
    "options": [
      "Performance Testing",
      "Load Testing",
      "Stress Testing",
      "Scalability Testing"
    ],
    "correctAnswer": "B",
    "topic": "System Testing",
    "difficulty": "medium"
  },
  {
    "id": 430,
    "question": "In Object-Oriented Integration Testing, what is meant by \"independent classes\"?",
    "options": [
      "Classes that do not depend on any other classes",
      "Classes that depend on many other classes",
      "Classes that are part of the core functionality",
      "Classes that are not related to the main system"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 431,
    "question": "Which of the following is a disadvantage of Mixed Integration Testing?",
    "options": [
      "It requires a high cost",
      "It is useful for very large projects",
      "It overcomes the shortcomings of Top-Down and Bottom-Up approaches",
      "Parallel tests can be performed in top and bottom layers"
    ],
    "correctAnswer": "A",
    "topic": "Integration Testing",
    "difficulty": "hard"
  },
  {
    "id": 432,
    "question": "Which type of testing is carried out to check the performance of a software application in terms of its capability to scale up or down the number of user request load?",
    "options": [
      "Performance Testing",
      "Load Testing",
      "Stress Testing",
      "Scalability Testing"
    ],
    "correctAnswer": "D",
    "topic": "System Testing",
    "difficulty": "medium"
  },
  {
    "id": 433,
    "question": "In Object-Oriented Integration Testing, what is the purpose of \"use-based testing\"?",
    "options": [
      "To test the threads of the system",
      "To test the collaborations between classes",
      "To test the classes based on their dependencies on other classes",
      "To test the independent classes first"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 434,
    "question": "Which of the following is a characteristic of System Testing?",
    "options": [
      "It tests individual modules",
      "It tests the integration between modules",
      "It tests the overall functionality and performance of the complete system",
      "It tests the user interface"
    ],
    "correctAnswer": "C",
    "topic": "System Testing",
    "difficulty": "easy"
  },
  {
    "id": 435,
    "question": "Which of the following is NOT a white-box testing technique?",
    "options": [
      "Statement coverage",
      "Branch coverage",
      "Equivalence partitioning",
      "Condition coverage"
    ],
    "correctAnswer": "C",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 436,
    "question": "What is the purpose of basis path testing?",
    "options": [
      "To test all possible paths in the code",
      "To test a minimum number of paths to achieve maximum coverage",
      "To test only the most critical paths",
      "To test all nested loops in the code"
    ],
    "correctAnswer": "B",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 437,
    "question": "Which of the following is NOT a step in basis path testing?",
    "options": [
      "Create a control flow graph",
      "Calculate cyclomatic complexity",
      "Find independent paths",
      "Design test cases for each path and each condition"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "hard"
  },
  {
    "id": 438,
    "question": "What is the formula to calculate cyclomatic complexity using the number of edges (E) and nodes (N) in a control flow graph?",
    "options": [
      "V(G) = E - N + 1",
      "V(G) = E - N + 2",
      "V(G) = E + N",
      "V(G) = E / N"
    ],
    "correctAnswer": "B",
    "topic": "White-Box Testing",
    "difficulty": "hard"
  },
  {
    "id": 439,
    "question": "Which of the following is NOT a type of loop testing?",
    "options": [
      "Simple loops",
      "Nested loops",
      "Concatenated loops",
      "Recursive loops"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 440,
    "question": "In simple loop testing, which of the following test cases is NOT required?",
    "options": [
      "Skip the loop entirely",
      "Only one pass through the loop",
      "n passes, where n is the loop bound",
      "n+2 passes, where n is the loop bound"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 441,
    "question": "Which of the following is NOT a feature of white-box testing?",
    "options": [
      "Code coverage analysis",
      "Identifying logical errors",
      "Verifying the user interface",
      "Optimization of code"
    ],
    "correctAnswer": "C",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 442,
    "question": "Which of the following is NOT an advantage of white-box testing?",
    "options": [
      "Early detection of defects",
      "Detection of complex defects",
      "No need for programming knowledge",
      "Integration with SDLC"
    ],
    "correctAnswer": "C",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 443,
    "question": "Which of the following is NOT a disadvantage of white-box testing?",
    "options": [
      "Overemphasis on internal workings",
      "Inability to detect missing functionalities",
      "No need for source code access",
      "Increased production errors"
    ],
    "correctAnswer": "C",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 444,
    "question": "Which of the following is a tool used for white-box testing?",
    "options": [
      "JUnit",
      "Selenium",
      "LoadRunner",
      "Rational Functional Tester"
    ],
    "correctAnswer": "A",
    "topic": "White-Box Testing",
    "difficulty": "easy"
  },
  {
    "id": 445,
    "question": "What is the purpose of multiple condition coverage testing?",
    "options": [
      "To test all possible combinations of conditions",
      "To test only the true or false outcomes of conditions",
      "To test only the most critical conditions",
      "To test only the nested conditions"
    ],
    "correctAnswer": "A",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 446,
    "question": "Which of the following is NOT a type of white-box testing technique?",
    "options": [
      "Statement coverage",
      "Branch coverage",
      "Condition coverage",
      "Usability testing"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "easy"
  },
  {
    "id": 447,
    "question": "What is the advantage of using white-box testing for integration testing?",
    "options": [
      "It allows testing of individual components",
      "It verifies that different components work together as expected",
      "It tests the user interface",
      "It tests the external behavior of the system"
    ],
    "correctAnswer": "B",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 448,
    "question": "Which of the following is NOT a tool used for white-box testing?",
    "options": [
      "PyUnit",
      "Sqlmap",
      "Nmap",
      "Selenium"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 449,
    "question": "In nested loop testing, which approach is used?",
    "options": [
      "Test the innermost loop first, then work outwards",
      "Test the outermost loop first, then work inwards",
      "Test each loop independently",
      "Test all loops simultaneously"
    ],
    "correctAnswer": "A",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 450,
    "question": "Which of the following is a disadvantage of white-box testing?",
    "options": [
      "Inability to detect missing functionalities",
      "Early detection of defects",
      "Comprehensive test cases",
      "Detection of complex defects"
    ],
    "correctAnswer": "A",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 451,
    "question": "What is the purpose of statement coverage testing?",
    "options": [
      "To test all statements in the code",
      "To test all branches in the code",
      "To test all conditions in the code",
      "To test all paths in the code"
    ],
    "correctAnswer": "A",
    "topic": "White-Box Testing",
    "difficulty": "easy"
  },
  {
    "id": 452,
    "question": "Which of the following is NOT a step in the process of white-box testing?",
    "options": [
      "Input: Requirements, specifications, design documents, source code",
      "Processing: Performing risk analysis, test planning, and execution",
      "Output: Preparing final report",
      "Usability testing"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 453,
    "question": "What is the purpose of using control flow graphs in white-box testing?",
    "options": [
      "To calculate cyclomatic complexity",
      "To identify independent paths",
      "To design test cases",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 454,
    "question": "In simple loop testing, which test case is used to test the loop bound condition?",
    "options": [
      "Skip the loop entirely",
      "Only one pass through the loop",
      "n-1 passes, where n is the loop bound",
      "n+1 passes, where n is the loop bound"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 455,
    "question": "Which white-box testing technique focuses on testing individual units of code?",
    "options": [
      "Statement coverage",
      "Branch coverage",
      "Unit testing",
      "Condition coverage"
    ],
    "correctAnswer": "C",
    "topic": "White-Box Testing",
    "difficulty": "easy"
  },
  {
    "id": 456,
    "question": "What is the purpose of calculating cyclomatic complexity in basis path testing?",
    "options": [
      "To find the number of independent paths",
      "To design test cases for each path",
      "To create a control flow graph",
      "Both a) and b)"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 457,
    "question": "Which of the following is a disadvantage of white-box testing?",
    "options": [
      "Early detection of defects",
      "Comprehensive test cases",
      "Detection of complex defects",
      "Bias in testing"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 458,
    "question": "What is the purpose of using tools like PyUnit and NUnit in white-box testing?",
    "options": [
      "To perform code coverage analysis",
      "To automate unit testing",
      "To create control flow graphs",
      "To calculate cyclomatic complexity"
    ],
    "correctAnswer": "B",
    "topic": "White-Box Testing",
    "difficulty": "easy"
  },
  {
    "id": 459,
    "question": "Which of the following is NOT a feature of white-box testing?",
    "options": [
      "Access to the source code",
      "Knowledge of programming languages",
      "Identifying logical errors",
      "Testing user interface"
    ],
    "correctAnswer": "D",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 460,
    "question": "In concatenated loop testing, how are the loops tested?",
    "options": [
      "All loops are tested together",
      "Each loop is tested independently",
      "Innermost loop is tested first, then work outwards",
      "Outermost loop is tested first, then work inwards"
    ],
    "correctAnswer": "B",
    "topic": "White-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 461,
    "question": "Which of the following is NOT a black-box testing technique?",
    "options": [
      "Equivalence partitioning",
      "Boundary value analysis",
      "Cause-effect graphing",
      "Basis path testing"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 462,
    "question": "In equivalence partitioning, what is the purpose of creating equivalence classes?",
    "options": [
      "To identify valid and invalid inputs",
      "To reduce the number of test cases",
      "To test boundary values",
      "Both a) and b)"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 463,
    "question": "Which of the following is NOT a step in equivalence partitioning?",
    "options": [
      "Identification of equivalence classes",
      "Generating test cases",
      "Boundary value analysis",
      "Cause-effect graphing"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 464,
    "question": "In boundary value analysis, which of the following values should be tested?",
    "options": [
      "Minimum valid value",
      "Maximum valid value",
      "Just above the maximum valid value",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 465,
    "question": "What is the purpose of cause-effect graphing?",
    "options": [
      "To identify valid and invalid inputs",
      "To establish a relationship between inputs (causes) and outputs (effects)",
      "To generate test cases based on boundary values",
      "To reduce the number of test cases"
    ],
    "correctAnswer": "B",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 466,
    "question": "Which of the following is NOT a step in cause-effect graphing?",
    "options": [
      "Identify inputs (causes) and outputs (effects)",
      "Develop a cause-effect graph",
      "Transform the graph into a decision table",
      "Perform boundary value analysis"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "hard"
  },
  {
    "id": 467,
    "question": "Which of the following is a feature of black-box testing?",
    "options": [
      "Discovers missing functions",
      "Discovers errors in internal code structure",
      "Requires knowledge of programming languages",
      "Requires access to source code"
    ],
    "correctAnswer": "A",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 468,
    "question": "Which of the following is NOT an advantage of black-box testing?",
    "options": [
      "No need for programming skills",
      "Tests are executed from the user's perspective",
      "Test cases are easily reproducible",
      "Reveals errors in control structure"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 469,
    "question": "Which of the following is a disadvantage of black-box testing?",
    "options": [
      "Difficult to execute test cases with complex inputs",
      "Reveals the reason for test failure",
      "Tests all programs in the application",
      "Works with a small sample space of inputs"
    ],
    "correctAnswer": "A",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 470,
    "question": "Which of the following is NOT a type of compatibility testing?",
    "options": [
      "Testing with different processors",
      "Testing with different machine architectures",
      "Testing with different operating systems",
      "Testing with different programming languages"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 471,
    "question": "In syntax-driven testing, what is the purpose of generating test cases based on grammar rules?",
    "options": [
      "To test the syntax of the input",
      "To test the functionality of the system",
      "To identify valid and invalid inputs",
      "To establish a relationship between inputs and outputs"
    ],
    "correctAnswer": "A",
    "topic": "Black-Box Testing",
    "difficulty": "hard"
  },
  {
    "id": 472,
    "question": "Which of the following is NOT a step in requirement-based testing?",
    "options": [
      "Validate the requirements given in the SRS",
      "Identify test cases based on requirements",
      "Execute test cases",
      "Perform code coverage analysis"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 473,
    "question": "Which of the following is a feature of black-box testing?",
    "options": [
      "Independent testing",
      "Testing from a user's perspective",
      "No knowledge of internal code",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "easy"
  },
  {
    "id": 474,
    "question": "Which of the following is NOT a black-box testing technique?",
    "options": [
      "Equivalence partitioning",
      "Boundary value analysis",
      "Cause-effect graphing",
      "Statement coverage"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "easy"
  },
  {
    "id": 475,
    "question": "In compatibility testing, which of the following is NOT a parameter that affects compatibility?",
    "options": [
      "Processor type",
      "Machine architecture",
      "Programming language used",
      "Backend components like database servers"
    ],
    "correctAnswer": "C",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 476,
    "question": "Which of the following is an advantage of black-box testing?",
    "options": [
      "Reveals errors in control structure",
      "Requires access to source code",
      "Tests are easily reproducible",
      "Requires knowledge of programming languages"
    ],
    "correctAnswer": "C",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 477,
    "question": "Which of the following is a disadvantage of black-box testing?",
    "options": [
      "Without clear functional specifications, test cases are difficult to implement",
      "Test cases are easily reproducible",
      "Reveals errors in control structure",
      "Discovers missing functions"
    ],
    "correctAnswer": "A",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 478,
    "question": "In equivalence partitioning, which of the following is NOT a valid equivalence class for testing the square root function?",
    "options": [
      "Positive integers",
      "Negative integers",
      "Non-numeric characters",
      "Loops"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 479,
    "question": "Which of the following is a feature of black-box testing?",
    "options": [
      "Limited knowledge of the application",
      "Access to the internal code structure",
      "Testing based on programming languages",
      "Reveals errors in control flow"
    ],
    "correctAnswer": "A",
    "topic": "Black-Box Testing",
    "difficulty": "easy"
  },
  {
    "id": 480,
    "question": "In cause-effect graphing, what is the purpose of the decision table?",
    "options": [
      "To identify inputs and outputs",
      "To develop the cause-effect graph",
      "To convert rules into test cases",
      "To perform boundary value analysis"
    ],
    "correctAnswer": "C",
    "topic": "Black-Box Testing",
    "difficulty": "hard"
  },
  {
    "id": 481,
    "question": "Which of the following is NOT a criterion for a good test case in black-box testing?",
    "options": [
      "Tests the boundary values",
      "Tests valid and invalid inputs",
      "Covers all code paths",
      "Tests from the user's perspective"
    ],
    "correctAnswer": "C",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 482,
    "question": "In compatibility testing, which of the following is NOT a factor that affects compatibility?",
    "options": [
      "Processor type",
      "Machine architecture",
      "Programming language used",
      "Backend components like database servers"
    ],
    "correctAnswer": "C",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 483,
    "question": "Which of the following is a disadvantage of black-box testing?",
    "options": [
      "Tests are executed from the user's perspective",
      "Some programs in the application are not tested",
      "Test cases are easily reproducible",
      "Discovers missing functions"
    ],
    "correctAnswer": "B",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 484,
    "question": "In equivalence partitioning, which of the following is NOT a valid equivalence class for testing a password validation function?",
    "options": [
      "Passwords with minimum length",
      "Passwords with maximum length",
      "Passwords with special characters",
      "Passwords with loops"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 485,
    "question": "Which of the following is a feature of black-box testing?",
    "options": [
      "Requires knowledge of programming languages",
      "Reveals errors in control structure",
      "Requirements-based testing",
      "Access to internal code"
    ],
    "correctAnswer": "C",
    "topic": "Black-Box Testing",
    "difficulty": "easy"
  },
  {
    "id": 486,
    "question": "In cause-effect graphing, what is the purpose of the cause-effect graph?",
    "options": [
      "To identify inputs and outputs",
      "To establish a relationship between inputs and outputs",
      "To convert rules into test cases",
      "To perform boundary value analysis"
    ],
    "correctAnswer": "B",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 487,
    "question": "Which of the following is NOT a step in black-box testing?",
    "options": [
      "Identification of equivalence classes",
      "Generating test cases",
      "Boundary value analysis",
      "Calculate cyclomatic complexity"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "easy"
  },
  {
    "id": 488,
    "question": "In syntax-driven testing, which of the following is NOT a valid grammar rule?",
    "options": [
      "Identifiers must start with a letter or underscore",
      "Identifiers can contain digits after the first character",
      "Identifiers cannot contain special characters",
      "Identifiers can contain loops"
    ],
    "correctAnswer": "D",
    "topic": "Black-Box Testing",
    "difficulty": "hard"
  },
  {
    "id": 489,
    "question": "Which of the following is an advantage of black-box testing?",
    "options": [
      "Reveals errors in control structure",
      "Requires knowledge of internal code structure",
      "Easy to automate",
      "Performs code coverage analysis"
    ],
    "correctAnswer": "C",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
  {
    "id": 490,
    "question": "In compatibility testing, which of the following is NOT a factor that affects compatibility?",
    "options": [
      "Processor type",
      "Machine architecture",
      "Programming language used",
      "Backend components like database servers"
    ],
    "correctAnswer": "C",
    "topic": "Black-Box Testing",
    "difficulty": "medium"
  },
    {
    "id": 491,
    "question": "Which of the following is NOT one of the purposes of object-oriented testing?",
    "options": [
      "Object interaction validation",
      "Determining design errors",
      "Finding integration problems",
      "Verifying functional requirements"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 492,
    "question": "Which of the following is NOT an Object-Oriented Testing Technique?",
    "options": [
      "Fault-based testing",
      "Class testing based on method testing",
      "Random testing",
      "Use case testing"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 493,
    "question": "Which layer of the Object-Oriented Design (OOD) pyramid represents the subsystem that enables software to achieve user requirements?",
    "options": [
      "The Subsystem Layer",
      "The Class and Object Layer",
      "The Message Layer",
      "The Responsibilities Layer"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Design",
    "difficulty": "hard"
  },
  {
    "id": 494,
    "question": "Which of the following is NOT a step in analyzing and designing an object-oriented system?",
    "options": [
      "Create a use case model",
      "Draw an activity diagram",
      "Draw an interaction diagram",
      "Perform code refactoring"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Design",
    "difficulty": "medium"
  },
  {
    "id": 495,
    "question": "Which of the following is a stronger form of association that shows the relationship between a whole and its parts in a class diagram?",
    "options": [
      "Association",
      "Dependency",
      "Aggregation",
      "Generalization"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 496,
    "question": "Which of the following testing strategies begins the construction of the system by testing independent classes first, followed by dependent classes?",
    "options": [
      "Thread-based testing",
      "Use-based testing",
      "Cluster testing",
      "Validation testing"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 497,
    "question": "Which of the following is NOT a type of system testing mentioned?",
    "options": [
      "Recovery testing",
      "Security testing",
      "Stress testing",
      "Regression testing"
    ],
    "correctAnswer": "D",
    "topic": "System Testing",
    "difficulty": "medium"
  },
  {
    "id": 498,
    "question": "Which of the following is a method of class testing that focuses on reducing the number of test cases required to exercise the class?",
    "options": [
      "Random testing",
      "Partition testing",
      "State-based partitioning",
      "Attribute-based partitioning"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 499,
    "question": "In object-oriented analysis (OOA), which principle states that early models represent the essence of the problem, while later ones provide implementation details?",
    "options": [
      "The information domain is modeled",
      "Behavior is represented",
      "The function is described",
      "Data, functional, and behavioral models are divided to uncover greater detail"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Analysis",
    "difficulty": "hard"
  },
  {
    "id": 500,
    "question": "Which of the following is a type of relationship in a class diagram that connects two classes and is always unidirectional in nature?",
    "options": [
      "Association",
      "Dependency",
      "Aggregation",
      "Generalization"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 501,
    "question": "Which of the following testing strategies exercises a cluster of collaborating classes by designing test cases that attempt to uncover errors in the collaborations?",
    "options": [
      "Thread-based testing",
      "Use-based testing",
      "Cluster testing",
      "Validation testing"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 502,
    "question": "Which of the following is a method of class testing that categorizes class operations based on their ability to change the state of the class?",
    "options": [
      "Random testing",
      "Partition testing",
      "State-based partitioning",
      "Category-based partitioning"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 503,
    "question": "Which of the following is NOT an advantage of Object-Oriented Analysis and Design (OOAD)?",
    "options": [
      "Reusability",
      "Scalability",
      "Maintainability",
      "Simplicity"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Design",
    "difficulty": "medium"
  },
  {
    "id": 504,
    "question": "In object-oriented testing, what is the smallest testable unit?",
    "options": [
      "Module",
      "Method",
      "Class",
      "Use case"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 505,
    "question": "Which of the following is a type of system testing that verifies that protection mechanisms built into the system will protect from unauthorized access?",
    "options": [
      "Recovery testing",
      "Security testing",
      "Stress testing",
      "Performance testing"
    ],
    "correctAnswer": "B",
    "topic": "System Testing",
    "difficulty": "medium"
  },
  {
    "id": 506,
    "question": "Which of the following is a disadvantage of Object-Oriented Analysis and Design (OOAD)?",
    "options": [
      "Flexibility",
      "Complexity",
      "Maintainability",
      "Scalability"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Design",
    "difficulty": "medium"
  },
  {
    "id": 507,
    "question": "In object-oriented design (OOD), which layer represents the data structure and algorithmic design for all the attributes and operations for each object?",
    "options": [
      "The Subsystem Layer",
      "The Class and Object Layer",
      "The Message Layer",
      "The Responsibilities Layer"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Design",
    "difficulty": "hard"
  },
  {
    "id": 508,
    "question": "Which of the following testing strategies focuses on user-visible actions and user-recognizable output from the system?",
    "options": [
      "Integration testing",
      "Validation testing",
      "System testing",
      "Class testing"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 509,
    "question": "Which of the following is a type of relationship in a class diagram that is used to display an inheritance relationship between two classes?",
    "options": [
      "Association",
      "Dependency",
      "Aggregation",
      "Generalization"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 510,
    "question": "Which of the following is a type of system testing that investigates the run-time performance of the software within the context of an integrated system?",
    "options": [
      "Recovery testing",
      "Security testing",
      "Stress testing",
      "Performance testing"
    ],
    "correctAnswer": "D",
    "topic": "System Testing",
    "difficulty": "medium"
  },
  {
    "id": 511,
    "question": "Which method of class testing involves identifying operations applicable to a class, defining constraints on their use, identifying a minimum test sequence, and generating a variety of random test sequences?",
    "options": [
      "Random testing",
      "Partition testing",
      "State-based partitioning",
      "Category-based partitioning"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 512,
    "question": "In object-oriented analysis (OOA), which principle states that the function of the system is described?",
    "options": [
      "The information domain is modeled",
      "Behavior is represented",
      "The function is described",
      "Data, functional, and behavioral models are divided to uncover greater detail"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Analysis",
    "difficulty": "medium"
  },
  {
    "id": 513,
    "question": "Which layer of the Object-Oriented Design (OOD) pyramid represents the design details that enable each object to communicate with its partners and establishes internal and external interfaces for the system?",
    "options": [
      "The Subsystem Layer",
      "The Class and Object Layer",
      "The Message Layer",
      "The Responsibilities Layer"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Design",
    "difficulty": "hard"
  },
  {
    "id": 514,
    "question": "Which type of system testing involves placing an abnormal load on the system?",
    "options": [
      "Recovery testing",
      "Security testing",
      "Stress testing",
      "Performance testing"
    ],
    "correctAnswer": "C",
    "topic": "System Testing",
    "difficulty": "medium"
  },
  {
    "id": 515,
    "question": "Which method of class testing categorizes class operations based on the generic function that each performs, such as initialization, computational, queries, and termination operations?",
    "options": [
      "Random testing",
      "Partition testing",
      "State-based partitioning",
      "Category-based partitioning"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 516,
    "question": "In object-oriented analysis (OOA), which principle states that behavior is represented?",
    "options": [
      "The information domain is modeled",
      "Behavior is represented",
      "The function is described",
      "Data, functional, and behavioral models are divided to uncover greater detail"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Analysis",
    "difficulty": "medium"
  },
  {
    "id": 517,
    "question": "Which type of relationship in a class diagram is a semantic connection between classes, where each class can send messages to the other in sequence or collaboration diagrams?",
    "options": [
      "Association",
      "Dependency",
      "Aggregation",
      "Generalization"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 518,
    "question": "Which testing strategy involves designing test cases that attempt to uncover errors in the user interaction requirements, based on the use-cases from the analysis model?",
    "options": [
      "Integration testing",
      "Validation testing",
      "System testing",
      "Class testing"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 519,
    "question": "In object-oriented design (OOD), which layer represents the class hierarchies that enable the system to develop using generalization and specialization, as well as representing each object?",
    "options": [
      "The Subsystem Layer",
      "The Class and Object Layer",
      "The Message Layer",
      "The Responsibilities Layer"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Design",
    "difficulty": "hard"
  },
  {
    "id": 520,
    "question": "Which method of class testing categorizes class operations based on those that use an attribute, those that modify an attribute, and those that do not use or modify the attribute?",
    "options": [
      "Random testing",
      "Partition testing",
      "State-based partitioning",
      "Attribute-based partitioning"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 521,
    "question": "Which of the following is NOT a type of Interaction Diagram in UML?",
    "options": [
      "Sequence Diagram",
      "Collaboration Diagram",
      "Activity Diagram",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 522,
    "question": "The main purpose of Interaction Diagrams is to:",
    "options": [
      "Capture the static structure of the system",
      "Capture the dynamic behavior of the system",
      "Model the use cases",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 523,
    "question": "In a Sequence Diagram, which of the following represents an object?",
    "options": [
      "A vertical dashed line",
      "A vertical solid line",
      "A horizontal solid line",
      "A horizontal dashed line"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 524,
    "question": "Which of the following diagrams emphasizes the time sequence of messages?",
    "options": [
      "Sequence Diagram",
      "Collaboration Diagram",
      "Both a and b",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 525,
    "question": "Which of the following diagrams emphasizes the structural organization of objects?",
    "options": [
      "Sequence Diagram",
      "Collaboration Diagram",
      "Both a and b",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 526,
    "question": "In a Collaboration Diagram, how is the message flow represented?",
    "options": [
      "By numbering the messages",
      "By arrows between objects",
      "Both a and b",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 527,
    "question": "Which of the following is NOT a step in drawing an Interaction Diagram?",
    "options": [
      "Identify objects taking part in the interaction",
      "Identify message flows among the objects",
      "Identify the sequence of message flows",
      "Identify the class diagram"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 528,
    "question": "Which of the following is NOT a use of Interaction Diagrams?",
    "options": [
      "To model the flow of control by time sequence",
      "To model the flow of control by structural organizations",
      "For forward engineering",
      "For database design"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 529,
    "question": "In a Sequence Diagram, what does a horizontal dashed line represent?",
    "options": [
      "An object",
      "A message",
      "A lifeline",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 530,
    "question": "Which of the following statements is TRUE about Interaction Diagrams?",
    "options": [
      "A single diagram is sufficient to describe the dynamic aspect of an entire system",
      "A set of diagrams is used to capture the dynamic aspect of a system as a whole",
      "Both a and b",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 531,
    "question": "In a Collaboration Diagram, how are objects represented?",
    "options": [
      "As rectangles",
      "As ellipses",
      "As lines",
      "As circles"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 532,
    "question": "Which of the following is NOT represented in a Sequence Diagram?",
    "options": [
      "Objects",
      "Messages",
      "Lifelines",
      "Object organization"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 533,
    "question": "What is the purpose of numbering messages in a Collaboration Diagram?",
    "options": [
      "To show the order of message flow",
      "To indicate the sender and receiver of the message",
      "To show the method call sequence",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 534,
    "question": "In a Sequence Diagram, what does a solid horizontal arrow represent?",
    "options": [
      "An object",
      "A message",
      "A lifeline",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "UML Diagrams",
    "difficulty": "easy"
  },
  {
    "id": 535,
    "question": "Which of the following diagrams is better suited for reverse engineering?",
    "options": [
      "Sequence Diagram",
      "Collaboration Diagram",
      "Both a and b",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "hard"
  },
  {
    "id": 536,
    "question": "In a Collaboration Diagram, how are messages represented?",
    "options": [
      "As arrows between objects",
      "By numbering",
      "Both a and b",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 537,
    "question": "Which of the following statements is TRUE about Sequence Diagrams?",
    "options": [
      "They show the order of message flow between objects",
      "They do not show the structural organization of objects",
      "They are suitable for forward engineering",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 538,
    "question": "Which of the following is NOT a purpose of Interaction Diagrams?",
    "options": [
      "To capture the dynamic behavior of a system",
      "To describe the message flow in the system",
      "To describe the structural organization of objects",
      "To design the user interface"
    ],
    "correctAnswer": "D",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 539,
    "question": "In a Collaboration Diagram, what does a self-loop arrow represent?",
    "options": [
      "A message sent from an object to itself",
      "A recursive function call",
      "Both a and b",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "UML Diagrams",
    "difficulty": "hard"
  },
  {
    "id": 540,
    "question": "Which of the following statements is TRUE about Interaction Diagrams?",
    "options": [
      "They are suitable for both forward and reverse engineering",
      "They are used only during the design phase",
      "They are used only during the implementation phase",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "UML Diagrams",
    "difficulty": "medium"
  },
  {
    "id": 541,
    "question": "Which of the following is NOT one of the 4P's in software project planning?",
    "options": [
      "People",
      "Product",
      "Process",
      "Prioritization"
    ],
    "correctAnswer": "D",
    "topic": "Software Project Management",
    "difficulty": "medium"
  },
  {
    "id": 542,
    "question": "Which of the following is responsible for guiding the team members to achieve the project's target and objectives?",
    "options": [
      "Team Leader",
      "Project Manager",
      "Stakeholders",
      "Analysts"
    ],
    "correctAnswer": "B",
    "topic": "Software Project Management",
    "difficulty": "easy"
  },
  {
    "id": 543,
    "question": "What is the primary intent of collecting process metrics?",
    "options": [
      "To assess the status of an ongoing project",
      "To provide a set of process indicators that lead to long-term software process improvement",
      "To evaluate the project team's ability to control quality",
      "To track potential risks"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 544,
    "question": "Which of the following is NOT a factor that has a profound influence on software quality and organizational performance?",
    "options": [
      "Skill and motivation of people",
      "Complexity of the product",
      "Technology and software engineering methods used",
      "Software design patterns"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 545,
    "question": "Which of the following metrics measures the user-friendliness of the software?",
    "options": [
      "Reliability",
      "Performance",
      "Usability",
      "Correctness"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "easy"
  },
  {
    "id": 546,
    "question": "What is the primary purpose of measuring quality metrics at the project level?",
    "options": [
      "To measure errors and defects",
      "To measure code quality",
      "To measure maintainability",
      "To measure security"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 547,
    "question": "Which of the following is NOT a type of software quality metric?",
    "options": [
      "Code Quality",
      "Reliability",
      "Performance",
      "Cost Estimation"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 548,
    "question": "What does the acronym MTBF stand for?",
    "options": [
      "Mean Time Between Failures",
      "Minimum Time Between Failures",
      "Maximum Time Between Failures",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 549,
    "question": "Which of the following metrics measures the ease of integrating the software with other required software?",
    "options": [
      "Integrity",
      "Maintainability",
      "Security",
      "Correctness"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 550,
    "question": "Which of the following is NOT a step in the software metrics etiquette?",
    "options": [
      "Use common sense and organizational sensitivity when interpreting metrics data",
      "Provide regular feedback to individuals and teams who collect measures",
      "Never use metrics to threaten individuals or teams",
      "Use metrics to appraise individuals"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 551,
    "question": "What does the acronym MTTC stand for?",
    "options": [
      "Maximum Time to Change",
      "Minimum Time to Change",
      "Mean Time to Change",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 552,
    "question": "Which of the following metrics measures the time required to adapt the software to new features or functionality?",
    "options": [
      "Maintainability",
      "Reliability",
      "Performance",
      "Usability"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 553,
    "question": "Which of the following is NOT a determinant for software quality?",
    "options": [
      "Development environment",
      "Business conditions",
      "Customer characteristics",
      "Programming language"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 554,
    "question": "Which of the following metrics measures the degree of service each function provides as per its development?",
    "options": [
      "Correctness",
      "Reliability",
      "Security",
      "Integrity"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 555,
    "question": "What is the purpose of using software metrics etiquette?",
    "options": [
      "To ensure metrics are used correctly and ethically",
      "To improve the software process",
      "To evaluate the project team's performance",
      "To measure software quality"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 556,
    "question": "Which of the following is not a characteristic of a good software metric?",
    "options": [
      "Quantitative",
      "Language-dependent",
      "Understandable",
      "Repeatable"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 557,
    "question": "Which of the following is not a category of software metrics?",
    "options": [
      "Product metrics",
      "Process metrics",
      "Project metrics",
      "Performance metrics"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 558,
    "question": "The function point (FP) metric is used to measure:",
    "options": [
      "Code complexity",
      "System functionality",
      "Testing effort",
      "Project schedule"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 559,
    "question": "Which of the following is not a type of function used in calculating function points?",
    "options": [
      "External Inputs (EIs)",
      "External Outputs (EOs)",
      "Internal Logical Files (ILFs)",
      "Database Tables (DBTs)"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "hard"
  },
  {
    "id": 560,
    "question": "The cyclomatic complexity metric is used to measure:",
    "options": [
      "Code readability",
      "Code maintainability",
      "Code complexity",
      "Code efficiency"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 561,
    "question": "Which of the following is not a testing metric category?",
    "options": [
      "Error Discovery Rate",
      "Defect Fix Rate",
      "Defect Density",
      "Customer Satisfaction"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 562,
    "question": "The metric \"Defect Leakage\" is used to measure:",
    "options": [
      "The efficiency of the testing process before UAT",
      "The efficiency of the testing process after UAT",
      "The number of defects found in UAT",
      "The number of defects found after UAT"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 563,
    "question": "The \"Mean Time to Failure\" metric is commonly used for:",
    "options": [
      "Safety-critical systems",
      "Commercial software systems",
      "Customer satisfaction",
      "Project management"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 564,
    "question": "The \"Problems per User-Month\" (PUM) metric measures:",
    "options": [
      "Defects reported by customers",
      "Non-defect problems reported by customers",
      "Both defects and non-defect problems reported by customers",
      "Customer satisfaction"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 565,
    "question": "Which of the following is not an in-process quality metric?",
    "options": [
      "Defect density during machine testing",
      "Defect arrival pattern during machine testing",
      "Phase-based defect removal pattern",
      "Customer satisfaction"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 566,
    "question": "The \"Backlog Management Index\" (BMI) is used to:",
    "options": [
      "Manage the backlog of open and unresolved problems",
      "Measure customer satisfaction",
      "Measure fix quality",
      "Measure fix response time"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 567,
    "question": "The \"Fix response time\" metric is calculated as:",
    "options": [
      "The mean time from problem reporting to problem resolution",
      "The median time from problem reporting to problem resolution",
      "The maximum time from problem reporting to problem resolution",
      "The minimum time from problem reporting to problem resolution"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 568,
    "question": "Which of the following metrics measures the percentage of fixes that did not fix the reported problem or introduced new defects?",
    "options": [
      "Percent delinquent fixes",
      "Fix quality",
      "Fix responsiveness",
      "Backlog Management Index"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 569,
    "question": "The \"Defect Removal Effectiveness\" metric is calculated for:",
    "options": [
      "The entire development process",
      "The front-end before code integration",
      "Each phase of the development process",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "hard"
  },
  {
    "id": 570,
    "question": "Which of the following is not an advantage of using software metrics?",
    "options": [
      "Helps identify areas for improvement",
      "Increases product quality",
      "Reduces overall time and cost",
      "Provides accurate performance evaluation of individuals"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
    {
    "id": 571,
    "question": "Which of the following is the first activity in software project planning?",
    "options": [
      "Resource allocation",
      "Risk analysis",
      "Scope definition",
      "Schedule estimation"
    ],
    "correctAnswer": "C",
    "topic": "Project Planning",
    "difficulty": "medium"
  },
  {
    "id": 572,
    "question": "The primary objective of software project planning is to provide a framework for managers to make reasonable estimates of:",
    "options": [
      "Quality and performance",
      "Resources, costs, and schedules",
      "Risk and uncertainties",
      "Team composition"
    ],
    "correctAnswer": "B",
    "topic": "Project Planning",
    "difficulty": "easy"
  },
  {
    "id": 573,
    "question": "Software scope describes all the following EXCEPT:",
    "options": [
      "Functions",
      "Performance constraints",
      "Interfaces",
      "Team members"
    ],
    "correctAnswer": "D",
    "topic": "Project Planning",
    "difficulty": "easy"
  },
  {
    "id": 574,
    "question": "In the development resource pyramid, which layer represents the foundational resources required for development?",
    "options": [
      "People",
      "Reusable software components",
      "Hardware and software tools",
      "Project management tools"
    ],
    "correctAnswer": "C",
    "topic": "Project Planning",
    "difficulty": "medium"
  },
  {
    "id": 575,
    "question": "Which metric is used to measure the size of a software project by counting the number of lines in the source code?",
    "options": [
      "Function Points (FP)",
      "Lines of Code (LOC)",
      "Use Case Points (UCP)",
      "Story Points"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "easy"
  },
  {
    "id": 576,
    "question": "In the context of software project estimation, what does FP stand for?",
    "options": [
      "Functional Programming",
      "Future Planning",
      "Function Points",
      "Feature Points"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "easy"
  },
  {
    "id": 577,
    "question": "Which of the following is NOT a component considered in Function Point (FP) estimation?",
    "options": [
      "External Inputs (EI)",
      "Internal Logical Files (ILF)",
      "System Testing (ST)",
      "External Outputs (EO)"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 578,
    "question": "What is the formula to compute the estimated LOC using optimistic, most likely, and pessimistic estimates?",
    "options": [
      "(sopt+sm+spess)/3",
      "(sopt+4×sm+spess)/6",
      "(sopt×sm×spess)/3",
      "(sopt+2×sm+spess)/4"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "hard"
  },
  {
    "id": 579,
    "question": "In the basic COCOMO model, the formula for effort estimation is:",
    "options": [
      "E=A+B×X",
      "E=A×X",
      "E=A+B×XC",
      "E=A×X+B"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 580,
    "question": "Which technique is considered an indirect method for software size estimation?",
    "options": [
      "Lines of Code (LOC)",
      "Function Points (FP)",
      "Use Case Points (UCP)",
      "Story Points"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 581,
    "question": "Which factor is NOT included in the Value Adjustment Factor (VAF) for Function Point calculation?",
    "options": [
      "Data communications",
      "Performance critical",
      "Team experience",
      "Online data entry"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 582,
    "question": "In Function Point analysis, the weight factor for a complex External Output (EO) is:",
    "options": [
      "3",
      "4",
      "5",
      "7"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "hard"
  },
  {
    "id": 583,
    "question": "The estimated effort for a software project using LOC-based estimation is calculated as:",
    "options": [
      "Total estimated LOC / average productivity in person-months",
      "Total estimated LOC × average productivity in person-month",
      "Total estimated LOC / labor rate per month",
      "Total estimated LOC × cost per line of code"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 584,
    "question": "In the context of project estimation, what does the acronym KLOC stand for?",
    "options": [
      "Knowledge Line of Code",
      "Kinetic Lines of Code",
      "Thousand Lines of Code",
      "Key Lines of Code"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "easy"
  },
  {
    "id": 585,
    "question": "A software project has an estimated size of 58000 LOC and is developed with an effort of 3 person-years. What is the productivity in person-months?",
    "options": [
      "1600 LOC/pm",
      "5800 LOC/pm",
      "1600 KLOC",
      "1.6 KLOC"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "hard"
  },
  {
    "id": 586,
    "question": "Which of the following activities is part of decomposition techniques for project estimation?",
    "options": [
      "Code refactoring",
      "Scope definition",
      "Problem-based estimation",
      "Risk analysis"
    ],
    "correctAnswer": "C",
    "topic": "Project Planning",
    "difficulty": "medium"
  },
  {
    "id": 587,
    "question": "Which of the following is a direct estimation technique?",
    "options": [
      "Function Points (FP)",
      "Use Case Points (UCP)",
      "Lines of Code (LOC)",
      "Story Points"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 588,
    "question": "What does the acronym COCOMO stand for?",
    "options": [
      "Complete Cost Model",
      "Constructive Cost Model",
      "Comprehensive Cost Model",
      "Computational Cost Model"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 589,
    "question": "In Function Point estimation, which information domain value represents the number of user data inputs?",
    "options": [
      "External Inputs (EI)",
      "External Outputs (EO)",
      "External Inquiries (EQ)",
      "Internal Logical Files (ILF)"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 590,
    "question": "The empirical estimation model formula E=A+B×XC is used to predict effort based on which variable?",
    "options": [
      "Project scope",
      "Resource availability",
      "LOC or FP",
      "Team size"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 591,
    "question": "Which of the following is NOT a step in the software project estimation process?",
    "options": [
      "Estimate the size of the development product",
      "Estimate the schedule in calendar months",
      "Estimate the team members' skill levels",
      "Estimate the project cost in agreed currency"
    ],
    "correctAnswer": "C",
    "topic": "Project Planning",
    "difficulty": "medium"
  },
  {
    "id": 592,
    "question": "Which complexity adjustment factor is NOT considered in Function Point Analysis?",
    "options": [
      "Performance critical",
      "Conversion and installation",
      "User interface complexity",
      "Multiple installations"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "hard"
  },
  {
    "id": 593,
    "question": "Which project type in the COCOMO model typically requires the highest level of complexity and experience?",
    "options": [
      "Organic",
      "Semi-detached",
      "Embedded",
      "Hybrid"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 594,
    "question": "In the basic COCOMO model, what does 'a' represent in the effort estimation equation E = a(KLOC)^b?",
    "options": [
      "A constant specific to the project type",
      "The number of lines of code",
      "A cost adjustment factor",
      "The project duration in months"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 595,
    "question": "What is the formula for calculating the total function points (FP) in Function Point Analysis?",
    "options": [
      "FP = Count Total × VAF",
      "FP = Count Total + VAF",
      "FP = Count Total / VAF",
      "FP = Count Total - VAF"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 596,
    "question": "Which is NOT a factor in the value adjustment factor (VAF) for Function Point Analysis?",
    "options": [
      "System requires reliable backup",
      "High transaction volume",
      "Multiple screen operations",
      "Number of lines of code"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 597,
    "question": "In the COCOMO model, what does EAF stand for?",
    "options": [
      "Effort Adjustment Factor",
      "Effort Allocation Factor",
      "Estimation Adjustment Factor",
      "Estimation Allocation Factor"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 598,
    "question": "Which statement about Lines of Code (LOC) estimation is TRUE?",
    "options": [
      "LOC estimation is less accurate with higher decomposition",
      "LOC is always a more reliable measure than Function Points",
      "LOC estimates require detailed decomposition for accuracy",
      "LOC estimates do not consider software complexity"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 599,
    "question": "Which of the following is NOT a type of project in the COCOMO model?",
    "options": [
      "Organic",
      "Inorganic",
      "Semi-detached",
      "Embedded"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 600,
    "question": "Which phase is NOT explicitly considered in Detailed COCOMO?",
    "options": [
      "Planning and requirements",
      "User acceptance testing",
      "Detailed design",
      "Integration and test"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "hard"
  },
  {
    "id": 601,
    "question": "Which of the following is NOT a basic principle of project scheduling?",
    "options": [
      "Compartmentalization",
      "Interdependency",
      "Time allocation",
      "Risk management"
    ],
    "correctAnswer": "D",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 602,
    "question": "The critical path in a project schedule represents:",
    "options": [
      "The set of activities that can be delayed without affecting the project completion date",
      "The set of activities that have the most resources allocated",
      "The set of activities that determine the minimum project duration",
      "The set of activities that have the highest cost"
    ],
    "correctAnswer": "C",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 603,
    "question": "In the Earned Value Analysis, what does the abbreviation SPI stand for?",
    "options": [
      "Scheduled Performance Index",
      "Schedule Performance Indicator",
      "Schedule Performance Index",
      "Scheduled Progress Indicator"
    ],
    "correctAnswer": "C",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 604,
    "question": "Which of the following techniques is NOT used for duration compression in project scheduling?",
    "options": [
      "Fast tracking",
      "Crashing",
      "PERT",
      "Both a and b"
    ],
    "correctAnswer": "C",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 605,
    "question": "The Gantt chart is a tool used for:",
    "options": [
      "Risk analysis",
      "Resource allocation",
      "Schedule visualization",
      "Cost estimation"
    ],
    "correctAnswer": "C",
    "topic": "Project Scheduling",
    "difficulty": "easy"
  },
  {
    "id": 606,
    "question": "In the Critical Path Method (CPM), which of the following is NOT a valid assumption?",
    "options": [
      "Activity times are deterministic",
      "Resources are unlimited",
      "Activities cannot be overlapped",
      "A network of activities can be constructed"
    ],
    "correctAnswer": "B",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 607,
    "question": "Which of the following is NOT a step in the Earned Value Analysis process?",
    "options": [
      "Determine the Budgeted Cost of Work Scheduled (BCWS)",
      "Calculate the Budgeted Cost of Work Performed (BCWP)",
      "Compute the Actual Cost of Work Performed (ACWP)",
      "Estimate the probability of project completion"
    ],
    "correctAnswer": "D",
    "topic": "Project Scheduling",
    "difficulty": "hard"
  },
  {
    "id": 608,
    "question": "In the Program Evaluation and Review Technique (PERT), what does the term 'event' refer to?",
    "options": [
      "A specific task or activity",
      "A milestone or checkpoint",
      "A project constraint",
      "A resource allocation"
    ],
    "correctAnswer": "B",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 609,
    "question": "Which of the following is a disadvantage of using the task list technique for project scheduling?",
    "options": [
      "It is not suitable for large and complex projects",
      "It does not provide a visual representation",
      "It cannot handle task dependencies",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 610,
    "question": "The 'crashing' technique in project scheduling involves:",
    "options": [
      "Adding more resources to shorten the project duration",
      "Overlapping activities to save time",
      "Prioritizing activities based on their criticality",
      "Reducing the project scope to meet the deadline"
    ],
    "correctAnswer": "A",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 611,
    "question": "In the Earned Value Analysis, what does the Cost Performance Index (CPI) indicate?",
    "options": [
      "The efficiency of schedule execution",
      "The cost efficiency of the project",
      "The percentage of work completed",
      "The variance from the planned schedule"
    ],
    "correctAnswer": "B",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 612,
    "question": "Which of the following is NOT a step in the process of project scheduling?",
    "options": [
      "Identify all required activities",
      "Break down large activities into smaller tasks",
      "Determine dependencies between activities",
      "Perform risk analysis"
    ],
    "correctAnswer": "D",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 613,
    "question": "In the Critical Path Method (CPM), what is the purpose of identifying the critical path?",
    "options": [
      "To identify the activities that can be delayed without affecting the project duration",
      "To identify the activities that have the most resources allocated",
      "To identify the activities that cannot be delayed without affecting the project duration",
      "To identify the activities that have the highest cost"
    ],
    "correctAnswer": "C",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 614,
    "question": "What is the primary advantage of using the Gantt chart for project scheduling?",
    "options": [
      "It provides a visual representation of the project schedule",
      "It allows for resource leveling",
      "It identifies the critical path",
      "It calculates the earned value metrics"
    ],
    "correctAnswer": "A",
    "topic": "Project Scheduling",
    "difficulty": "easy"
  },
  {
    "id": 615,
    "question": "In the Earned Value Analysis, what does the Schedule Variance (SV) represent?",
    "options": [
      "The difference between the planned and actual cost",
      "The difference between the planned and actual schedule",
      "The percentage of work completed",
      "The efficiency of resource utilization"
    ],
    "correctAnswer": "B",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 616,
    "question": "Which of the following is NOT a step in the Program Evaluation and Review Technique (PERT)?",
    "options": [
      "Identify all activities and their dependencies",
      "Estimate the optimistic, pessimistic, and most likely durations for each activity",
      "Calculate the critical path",
      "Perform risk analysis"
    ],
    "correctAnswer": "D",
    "topic": "Project Scheduling",
    "difficulty": "hard"
  },
  {
    "id": 617,
    "question": "The 'fast tracking' technique in project scheduling involves:",
    "options": [
      "Adding more resources to shorten the project duration",
      "Overlapping activities to save time",
      "Prioritizing activities based on their criticality",
      "Reducing the project scope to meet the deadline"
    ],
    "correctAnswer": "B",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 618,
    "question": "In the Earned Value Analysis, what does the Budget at Completion (BAC) represent?",
    "options": [
      "The total planned cost for the project",
      "The total actual cost incurred for the project",
      "The total earned value for the project",
      "The total cost variance for the project"
    ],
    "correctAnswer": "A",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 619,
    "question": "Which of the following is a disadvantage of using the Critical Path Method (CPM) for project scheduling?",
    "options": [
      "It assumes that activity durations are deterministic",
      "It cannot handle project constraints",
      "It does not provide a visual representation",
      "It cannot handle resource constraints"
    ],
    "correctAnswer": "A",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 620,
    "question": "In the Gantt chart, what do the horizontal bars represent?",
    "options": [
      "Activities or tasks",
      "Resources",
      "Dependencies",
      "Milestones"
    ],
    "correctAnswer": "A",
    "topic": "Project Scheduling",
    "difficulty": "easy"
  },
  {
    "id": 621,
    "question": "In the Earned Value Analysis, what is the purpose of calculating the Percent Complete metric?",
    "options": [
      "To determine the percentage of work completed",
      "To identify the critical path",
      "To calculate the cost variance",
      "To assess the schedule performance"
    ],
    "correctAnswer": "A",
    "topic": "Project Scheduling",
    "difficulty": "easy"
  },
  {
    "id": 622,
    "question": "Which of the following is NOT a benefit of using project scheduling techniques?",
    "options": [
      "Improved resource allocation",
      "Better coordination among team members",
      "Increased project visibility",
      "Reduced project risk"
    ],
    "correctAnswer": "D",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 623,
    "question": "In the Program Evaluation and Review Technique (PERT), what does the term 'activity' refer to?",
    "options": [
      "A specific task or work package",
      "A milestone or checkpoint",
      "A project constraint",
      "A resource allocation"
    ],
    "correctAnswer": "A",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 624,
    "question": "In the Critical Path Method (CPM), what is the purpose of identifying the earliest and latest start/finish times for each activity?",
    "options": [
      "To determine the critical path",
      "To allocate resources",
      "To calculate the project duration",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 625,
    "question": "Which of the following is NOT a metric used in the Earned Value Analysis?",
    "options": [
      "Planned Value (PV)",
      "Earned Value (EV)",
      "Actual Cost (AC)",
      "Risk Exposure (RE)"
    ],
    "correctAnswer": "D",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 626,
    "question": "In the Gantt chart, what does the term 'milestone' refer to?",
    "options": [
      "A specific task or activity",
      "A significant event or checkpoint",
      "A project constraint",
      "A resource allocation"
    ],
    "correctAnswer": "B",
    "topic": "Project Scheduling",
    "difficulty": "easy"
  },
  {
    "id": 627,
    "question": "Which of the following is a disadvantage of using the Program Evaluation and Review Technique (PERT) for project scheduling?",
    "options": [
      "It assumes that activity durations are deterministic",
      "It cannot handle project constraints",
      "It does not provide a visual representation",
      "It cannot handle resource constraints"
    ],
    "correctAnswer": "A",
    "topic": "Project Scheduling",
    "difficulty": "hard"
  },
  {
    "id": 628,
    "question": "In the Critical Path Method (CPM), what is the purpose of the 'forward pass' calculation?",
    "options": [
      "To identify the critical path",
      "To determine the earliest start and finish times for each activity",
      "To allocate resources",
      "To calculate the project duration"
    ],
    "correctAnswer": "B",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 629,
    "question": "Which of the following is a benefit of using the Earned Value Analysis technique?",
    "options": [
      "It provides a quantitative measure of project progress",
      "It allows for early detection of project performance issues",
      "It facilitates cost and schedule performance tracking",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Project Scheduling",
    "difficulty": "medium"
  },
  {
    "id": 630,
    "question": "Which of the following is an example of a size-oriented metric for software estimation?",
    "options": [
      "Function Points (FP)",
      "Story Points",
      "Lines of Code (LOC)",
      "Use Case Points (UCP)"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
    {
    "id": 631,
    "question": "Which of the following is NOT a characteristic of a risk?",
    "options": [
      "It is an expectation of loss",
      "It is a potential problem that may or may not occur in the future",
      "It has already occurred",
      "It is caused due to lack of information, control, or time"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 632,
    "question": "Which type of risk is within the control of the project manager?",
    "options": [
      "External risk",
      "Internal risk",
      "Business risk",
      "Technical risk"
    ],
    "correctAnswer": "B",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 633,
    "question": "Which of the following is NOT an example of a project risk?",
    "options": [
      "Budgetary problems",
      "Schedule slippage",
      "Design issues",
      "Stakeholder issues"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 634,
    "question": "Which of the following is an example of a technical risk?",
    "options": [
      "Market risk",
      "Strategic risk",
      "Verification problems",
      "Budget risks"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 635,
    "question": "What is the primary objective of a proactive risk strategy?",
    "options": [
      "To avoid risk and have a contingency plan",
      "To correct problems rapidly",
      "To identify risks after they occur",
      "To rely on crisis management"
    ],
    "correctAnswer": "A",
    "topic": "Risk Management",
    "difficulty": "easy"
  },
  {
    "id": 636,
    "question": "Which of the following is NOT a step in risk projection?",
    "options": [
      "Establish a scale for risk likelihood",
      "Describe the consequences of the risk",
      "Estimate the impact of the risk",
      "Implement risk mitigation steps"
    ],
    "correctAnswer": "D",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 637,
    "question": "What is the best strategy for risk mitigation if a software team adopts a proactive approach?",
    "options": [
      "Reactive measures",
      "Risk avoidance",
      "Risk transfer",
      "Risk acceptance"
    ],
    "correctAnswer": "B",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 638,
    "question": "Which of the following is NOT a recommended step for risk mitigation in case of high staff turnover?",
    "options": [
      "Meet with current staff to determine causes",
      "Mitigate causes under your control before the project starts",
      "Assume turnover will occur and develop techniques for continuity",
      "Dismiss staff members who express dissatisfaction"
    ],
    "correctAnswer": "D",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 639,
    "question": "What is the primary objective of risk monitoring?",
    "options": [
      "To identify new risks",
      "To assess if predicted risks occur and if mitigation steps are effective",
      "To develop contingency plans",
      "To avoid risks"
    ],
    "correctAnswer": "B",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 640,
    "question": "Which of the following is NOT a recommended action in risk management and contingency planning?",
    "options": [
      "Refocus resources to fully staffed functions",
      "Initiate knowledge transfer activities for leaving staff",
      "Terminate the project",
      "Adjust the project schedule"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 641,
    "question": "What is the purpose of the Risk Mitigation, Monitoring, and Management (RMMM) plan?",
    "options": [
      "To document the risk identification process",
      "To outline the risk projection methods",
      "To describe the risk mitigation, monitoring, and management activities",
      "To prioritize the identified risks"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 642,
    "question": "Which of the following statements about the Risk Information Sheet (RIS) is NOT correct?",
    "options": [
      "It is used to document individual risks",
      "It is typically maintained in a database system",
      "It is a mandatory component of the RMMM plan",
      "It allows for priority ordering and analysis of risks"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "hard"
  },
  {
    "id": 643,
    "question": "Which of the following is NOT a characteristic of an unpredictable risk, according to Charette's categorization?",
    "options": [
      "It is extremely difficult to identify in advance",
      "It can occur during the project",
      "It is a known risk that can be uncovered after careful evaluation",
      "It is a joker in the deck"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "hard"
  },
  {
    "id": 644,
    "question": "Which of the following is an example of a known risk, according to Charette's categorization?",
    "options": [
      "Staff turnover",
      "Poor communication with the customer",
      "Unrealistic delivery date",
      "Dilution of staff effort due to maintenance requests"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 645,
    "question": "Which of the following is NOT a recommended step in risk identification?",
    "options": [
      "Create a risk item checklist",
      "Examine the project plan and statement of scope",
      "Identify only generic risks",
      "Identify product-specific risks"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 646,
    "question": "Which of the following is NOT a generic subcategory for risk identification?",
    "options": [
      "Product size",
      "Business impact",
      "Stakeholder characteristics",
      "Risk mitigation strategies"
    ],
    "correctAnswer": "D",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 647,
    "question": "What is the primary goal of all risk analysis activities?",
    "options": [
      "To identify potential risks",
      "To develop a strategy for dealing with risk",
      "To monitor the effectiveness of mitigation steps",
      "To create contingency plans"
    ],
    "correctAnswer": "B",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 648,
    "question": "Which of the following is NOT a recommended step for risk mitigation in case of high staff turnover?",
    "options": [
      "Conduct peer reviews of all work",
      "Assign a backup staff member for every critical technologist",
      "Terminate underperforming staff members",
      "Organize project teams for knowledge dispersal"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 649,
    "question": "Which of the following is NOT an objective of risk monitoring?",
    "options": [
      "To assess whether predicted risks occur",
      "To ensure risk avoidance steps are properly applied",
      "To collect information for future risk analysis",
      "To develop new risk mitigation strategies"
    ],
    "correctAnswer": "D",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 650,
    "question": "What is the primary purpose of risk management and contingency planning?",
    "options": [
      "To identify potential risks",
      "To mitigate risks before they occur",
      "To handle risks that have become a reality",
      "To prioritize risks based on their impact"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 651,
    "question": "Which of the following is NOT a product operation factor of software quality?",
    "options": [
      "Correctness",
      "Reliability",
      "Efficiency",
      "Maintainability"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 652,
    "question": "Which of the following factors is related to the ease of making changes required because of changes in the operating environment?",
    "options": [
      "Usability",
      "Flexibility",
      "Portability",
      "Interoperability"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 653,
    "question": "The effort required to locate and fix a fault in a program is related to which software quality factor?",
    "options": [
      "Reliability",
      "Maintainability",
      "Efficiency",
      "Testability"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 654,
    "question": "Which of the following is NOT a product transition factor of software quality?",
    "options": [
      "Portability",
      "Reusability",
      "Interoperability",
      "Correctness"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 655,
    "question": "The ease of testing the program to ensure that it is error-free and meets its specification is related to which software quality factor?",
    "options": [
      "Testability",
      "Maintainability",
      "Flexibility",
      "Interoperability"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 656,
    "question": "Quality Control (QC) is primarily focused on which of the following?",
    "options": [
      "Management level actions to improve the chances of success",
      "Techniques used to assure that a product or service meets requirements or goals",
      "A formalized system that documents the structure, responsibilities, and procedures",
      "The overall quality intentions and direction of an organization"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 657,
    "question": "Which of the following is NOT a component of Software Quality Management (SQM)?",
    "options": [
      "Quality Assurance",
      "Quality Planning",
      "Quality Execution",
      "Quality Control"
    ],
    "correctAnswer": "C",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 658,
    "question": "The stage of SQM that encourages documentation process standards and mentors standard processes is:",
    "options": [
      "Quality Assurance",
      "Quality Planning",
      "Quality Control",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 659,
    "question": "In the Quality Planning stage of SQM, which of the following activities is NOT typically performed?",
    "options": [
      "Defining quality attributes to be associated with the project output",
      "Assigning existing organizational standards to the project",
      "Release testing of software",
      "Defining how quality attributes should be assessed"
    ],
    "correctAnswer": "C",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 660,
    "question": "Which of the following is NOT an activity typically performed in the Quality Control stage of SQM?",
    "options": [
      "Release testing of software",
      "Examination of software and documentation for non-conformance with standards",
      "Follow-up review of software to ensure required changes are addressed",
      "Defining quality attributes to be associated with the project output"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 661,
    "question": "According to software quality principles, which requirements serve as the foundation from which software quality is measured?",
    "options": [
      "Hardware requirements",
      "Software requirements",
      "Programmer requirements",
      "None of the mentioned requirements"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "easy"
  },
  {
    "id": 662,
    "question": "Which of the following is NOT a part of an SQA plan for a project?",
    "options": [
      "Evaluations to be performed",
      "Amount of technical work",
      "Audits and reviews to be performed",
      "Documents to be produced by the SQA group"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 663,
    "question": "Which of the following is NOT considered an appraisal cost in SQA?",
    "options": [
      "Inter-process inspection",
      "Maintenance",
      "Quality planning",
      "Testing"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "hard"
  },
  {
    "id": 664,
    "question": "What is the primary objective of formal technical reviews?",
    "options": [
      "To find errors during the process so that they do not become defects after release",
      "To find equivalent faults during the process so that they do not become defects after release",
      "To find failure causes during the process so that they do not become defects after release",
      "None of the mentioned"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 665,
    "question": "Which of the following is a product revision factor of software quality?",
    "options": [
      "Correctness",
      "Reliability",
      "Maintainability",
      "Integrity"
    ],
    "correctAnswer": "C",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 666,
    "question": "What is the primary document of a Quality Management System (QMS)?",
    "options": [
      "Quality Policy",
      "Quality Plan",
      "Quality Assurance Plan",
      "Quality Control Plan"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 667,
    "question": "Which of the following factors is related to the ease of re-using software in a different context?",
    "options": [
      "Portability",
      "Reusability",
      "Interoperability",
      "Flexibility"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 668,
    "question": "Which of the following is NOT a factor related to software quality?",
    "options": [
      "Correctness",
      "Reliability",
      "Efficiency",
      "Performance"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 669,
    "question": "The 'overall quality intentions and direction of an organization with regard to quality' is referred to as:",
    "options": [
      "Quality Control",
      "Quality Assurance",
      "Quality Management System",
      "Quality Policy"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 670,
    "question": "Which of the following is a product operation factor of software quality?",
    "options": [
      "Maintainability",
      "Testability",
      "Usability",
      "Flexibility"
    ],
    "correctAnswer": "C",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 671,
    "question": "What is the primary goal of Quality Assurance (QA) in Software Quality Management?",
    "options": [
      "To directly improve the chances that Quality Control actions will be successful",
      "To perform release testing of software",
      "To define quality attributes to be associated with the project output",
      "To examine software and documentation for non-conformance with standards"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 672,
    "question": "Which of the following is NOT a responsibility of the Quality Control stage in Software Quality Management?",
    "options": [
      "Release testing of software",
      "Examination of software and documentation for non-conformance with standards",
      "Follow-up review of software to ensure required changes are addressed",
      "Defining quality attributes to be associated with the project output"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 673,
    "question": "Which of the following is a factor related to the effort required to transfer a program from one environment to another system?",
    "options": [
      "Portability",
      "Reusability",
      "Interoperability",
      "Flexibility"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 674,
    "question": "Which of the following is NOT a product transition factor of software quality?",
    "options": [
      "Portability",
      "Reusability",
      "Interoperability",
      "Efficiency"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 675,
    "question": "The effort required to couple a system to another system is related to which software quality factor?",
    "options": [
      "Interoperability",
      "Portability",
      "Reusability",
      "Maintainability"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 676,
    "question": "Which of the following is a responsibility of the Quality Planning stage in Software Quality Management?",
    "options": [
      "Release testing of software",
      "Defining quality attributes to be associated with the project output",
      "Examination of software and documentation for non-conformance with standards",
      "Follow-up review of software to ensure required changes are addressed"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 677,
    "question": "Which of the following is a product operation factor of software quality?",
    "options": [
      "Flexibility",
      "Maintainability",
      "Integrity",
      "Testability"
    ],
    "correctAnswer": "C",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 678,
    "question": "What is the purpose of a Quality Management System (QMS)?",
    "options": [
      "To document the structure, responsibilities, and procedures required to achieve effective quality management",
      "To perform release testing of software",
      "To define quality attributes to be associated with the project output",
      "To examine software and documentation for non-conformance with standards"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 679,
    "question": "Which of the following is NOT a factor related to the ease of use of the software?",
    "options": [
      "Usability",
      "Portability",
      "Interoperability",
      "Flexibility"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 680,
    "question": "Which of the following is a responsibility of the Quality Assurance stage in Software Quality Management?",
    "options": [
      "Release testing of software",
      "Encouraging documentation process standards",
      "Defining quality attributes to be associated with the project output",
      "Examination of software and documentation for non-conformance with standards"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 681,
    "question": "Which of the following statements about risk appetite is NOT correct?",
    "options": [
      "It refers to an organization's willingness to take risks",
      "It is determined by the potential benefits of risk-taking",
      "It should be communicated to stakeholders",
      "It is a technique for risk identification"
    ],
    "correctAnswer": "D",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 682,
    "question": "Which of the following is NOT a recommended method for communicating risk-related information to stakeholders?",
    "options": [
      "Regular meetings and progress reports",
      "Risk dashboards or visualizations",
      "Withholding information to avoid causing concern",
      "Transparent and timely communication"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 683,
    "question": "Why is it important to stay updated on risk management trends and best practices?",
    "options": [
      "To identify new risk categories",
      "To learn about emerging risks and mitigation techniques",
      "To comply with industry regulations",
      "To develop contingency plans"
    ],
    "correctAnswer": "B",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 684,
    "question": "Which of the following statements about risk management is NOT correct?",
    "options": [
      "It helps organizations achieve their objectives",
      "It increases the chances of project success",
      "It eliminates all risks from a project",
      "It is an ongoing process throughout the project lifecycle"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 685,
    "question": "Which of the following is NOT a recommended technique for risk prioritization?",
    "options": [
      "Assessing the likelihood and potential impact of risks",
      "Using a risk matrix or heat map",
      "Relying solely on the project manager's intuition",
      "Involving stakeholders and subject matter experts"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 686,
    "question": "Which of the following is NOT a potential consequence of poor risk management?",
    "options": [
      "Schedule delays",
      "Cost overruns",
      "Quality issues",
      "Increased productivity"
    ],
    "correctAnswer": "D",
    "topic": "Risk Management",
    "difficulty": "easy"
  },
  {
    "id": 687,
    "question": "Which of the following is NOT a recommended step in risk identification?",
    "options": [
      "Reviewing lessons learned from previous projects",
      "Conducting brainstorming sessions with the project team",
      "Relying solely on historical data",
      "Involving subject matter experts"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 688,
    "question": "Which of the following is NOT a recommended practice for risk monitoring?",
    "options": [
      "Establishing clear metrics and indicators",
      "Regular risk review meetings",
      "Updating risk registers or logs",
      "Waiting until the end of the project to assess risks"
    ],
    "correctAnswer": "D",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 689,
    "question": "Which of the following is NOT a potential benefit of effective risk management?",
    "options": [
      "Improved decision-making",
      "Enhanced stakeholder confidence",
      "Better resource allocation",
      "Guaranteed project success"
    ],
    "correctAnswer": "D",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 690,
    "question": "Which of the following is NOT a recommended action in risk management and contingency planning for high staff turnover?",
    "options": [
      "Refocus resources to fully staffed functions",
      "Initiate knowledge transfer activities for leaving staff",
      "Terminate the project",
      "Hire new staff without providing proper onboarding"
    ],
    "correctAnswer": "D",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
    {
    "id": 691,
    "question": "The most important feature of spiral model is",
    "options": [
      "requirement analysis",
      "risk management",
      "quality management",
      "configuration management"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 692,
    "question": "The worst type of coupling is",
    "options": [
      "Data coupling",
      "control coupling",
      "stamp coupling",
      "content coupling"
    ],
    "correctAnswer": "D",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 693,
    "question": "IEEE 830-1993 is an IEEE recommended standard for",
    "options": [
      "Software requirement specification",
      "Software design",
      "Testing",
      "Both (A) and (B)"
    ],
    "correctAnswer": "A",
    "topic": "Software Standards",
    "difficulty": "medium"
  },
  {
    "id": 694,
    "question": "One of the fault-based testing techniques is",
    "options": [
      "unit testing",
      "beta testing",
      "Stress testing",
      "mutation testing"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 695,
    "question": "Changes made to an information system to add the desired but not necessarily the required features is called",
    "options": [
      "Preventative maintenance",
      "Adaptive maintenance",
      "Corrective maintenance",
      "Perfective maintenance"
    ],
    "correctAnswer": "D",
    "topic": "Software Maintenance",
    "difficulty": "medium"
  },
  {
    "id": 696,
    "question": "All the modules of the system are integrated and tested as a complete system in the case of",
    "options": [
      "Bottom-up testing",
      "Top-down testing",
      "Sandwich testing",
      "Big-Bang testing"
    ],
    "correctAnswer": "D",
    "topic": "Integration Testing",
    "difficulty": "medium"
  },
  {
    "id": 697,
    "question": "If every requirement stated in the Software Requirement Specification (SRS) has only one interpretation, SRS is said to be",
    "options": [
      "correct",
      "unambiguous",
      "consistent",
      "verifiable"
    ],
    "correctAnswer": "B",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 698,
    "question": "A fault simulation testing technique is",
    "options": [
      "Mutation testing",
      "Stress testing",
      "Black box testing",
      "White box testing"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 699,
    "question": "Modules X and Y operate on the same input and output data, then the cohesion is",
    "options": [
      "Sequential",
      "Communicational",
      "Procedural",
      "Logical"
    ],
    "correctAnswer": "B",
    "topic": "Software Design Principles",
    "difficulty": "hard"
  },
  {
    "id": 700,
    "question": "If the objects focus on the problem domain, then we are concerned with",
    "options": [
      "Object-Oriented Analysis",
      "Object-Oriented Design",
      "Object-Oriented Analysis & Design",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Analysis",
    "difficulty": "medium"
  },
  {
    "id": 701,
    "question": "SRS is also known as a specification of",
    "options": [
      "White box testing",
      "Stress testing",
      "Integrated testing",
      "Black box testing"
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 702,
    "question": "The model in which the requirements are implemented by category is",
    "options": [
      "Evolutionary Development Model",
      "Waterfall Model",
      "Prototyping",
      "Iterative Enhancement Model"
    ],
    "correctAnswer": "A",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 703,
    "question": "SRD stands for",
    "options": [
      "Software requirements definition",
      "Structured requirements definition",
      "Software requirements diagram",
      "Structured requirements diagram"
    ],
    "correctAnswer": "B",
    "topic": "Requirements Engineering",
    "difficulty": "easy"
  },
  {
    "id": 704,
    "question": "A COCOMO model is",
    "options": [
      "Common Cost Estimation Model",
      "Constructive Cost Estimation Model",
      "Complete Cost Estimation Model",
      "Comprehensive Cost Estimation Model"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 705,
    "question": "Which of the following statements is true",
    "options": [
      "Abstract data types are the same as classes",
      "Abstract data types do not allow inheritance",
      "Classes cannot inherit from the same base class",
      "Objects have state and behavior"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Design",
    "difficulty": "medium"
  },
  {
    "id": 706,
    "question": "The desired level of coupling is",
    "options": [
      "No coupling",
      "Control coupling",
      "Common coupling",
      "Data coupling"
    ],
    "correctAnswer": "D",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 707,
    "question": "In the spiral model, 'risk analysis' is performed",
    "options": [
      "In the first loop",
      "In the first and second loop",
      "In every loop",
      "Before using the spiral model"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 708,
    "question": "For a well-understood data processing application, it is best to use",
    "options": [
      "The waterfall model",
      "Prototyping model",
      "The evolutionary model",
      "The spiral model"
    ],
    "correctAnswer": "A",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 709,
    "question": "Coupling and cohesion can be represented using a",
    "options": [
      "Cause-effect graph",
      "Dependence matrix",
      "Structure chart",
      "SRS"
    ],
    "correctAnswer": "B",
    "topic": "Software Design Principles",
    "difficulty": "hard"
  },
  {
    "id": 710,
    "question": "The symbol represents",
    "options": [
      "Mandatory 1 cardinality",
      "Mandatory many cardinality",
      "Optional 0 or 1 cardinality",
      "Optional zero-many cardinality"
    ],
    "correctAnswer": "D",
    "topic": "Data Modeling",
    "difficulty": "medium"
  },
  {
    "id": 711,
    "question": "Each time a defect gets detected and fixed, the reliability of a software product",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Cannot say anything"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 712,
    "question": "Output comparators are used in",
    "options": [
      "Static testing of a single module",
      "Dynamic testing of a single module",
      "Static testing of single and multiple modules",
      "Dynamic testing of single and multiple modules"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 713,
    "question": "The feature of the object-oriented paradigm that helps code reuse is",
    "options": [
      "Object",
      "Class",
      "Inheritance",
      "Aggregation"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Programming",
    "difficulty": "easy"
  },
  {
    "id": 714,
    "question": "The level at which the software uses scarce resources is",
    "options": [
      "Reliability",
      "Efficiency",
      "Portability",
      "All of the above"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 715,
    "question": "If every requirement can be checked by a cost-effective process, then the SRS is",
    "options": [
      "Verifiable",
      "Traceable",
      "Modifiable",
      "Complete"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 716,
    "question": "Modifying the software to match changes in the ever-changing environment is called",
    "options": [
      "Adaptive maintenance",
      "Corrective maintenance",
      "Perfective maintenance",
      "Preventive maintenance"
    ],
    "correctAnswer": "A",
    "topic": "Software Maintenance",
    "difficulty": "medium"
  },
  {
    "id": 717,
    "question": "All activities lying on the critical path have slack time equal to",
    "options": [
      "0",
      "1",
      "2",
      "None of above"
    ],
    "correctAnswer": "A",
    "topic": "Project Management",
    "difficulty": "medium"
  },
  {
    "id": 718,
    "question": "Alpha and Beta Testing are forms of",
    "options": [
      "Acceptance testing",
      "Integration testing",
      "System Testing",
      "Unit testing"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 719,
    "question": "An object encapsulates",
    "options": [
      "Data",
      "Behavior",
      "State",
      "Both Data and behavior"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Programming",
    "difficulty": "easy"
  },
  {
    "id": 720,
    "question": "In function point analysis, the number of general system characteristics used to rate the system are",
    "options": [
      "10",
      "14",
      "20",
      "12"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 721,
    "question": "Aggregation represents",
    "options": [
      "Is_a relationship",
      "Part_of relationship",
      "Composed_of relationship",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Design",
    "difficulty": "medium"
  },
  {
    "id": 722,
    "question": "If P is risk probability, L is loss, then Risk Exposure (RE) is computed as",
    "options": [
      "RE = P/L",
      "RE = P + L",
      "RE = P*L",
      "RE = 2* P *L"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 723,
    "question": "The number of clauses used in ISO 9001 to specify quality system requirements is",
    "options": [
      "15",
      "20",
      "25",
      "28"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "hard"
  },
  {
    "id": 724,
    "question": "ER model shows the",
    "options": [
      "Static view",
      "Functional view",
      "Dynamic view",
      "All the above"
    ],
    "correctAnswer": "A",
    "topic": "Data Modeling",
    "difficulty": "medium"
  },
  {
    "id": 725,
    "question": "The tools that support different stages of the software development life cycle are called",
    "options": [
      "CASE Tools",
      "CAME tools",
      "CAQE tools",
      "CARE tools"
    ],
    "correctAnswer": "A",
    "topic": "Software Engineering Tools",
    "difficulty": "easy"
  },
  {
    "id": 726,
    "question": "Changes made to the system to reduce the future system failure chances are called",
    "options": [
      "Preventive Maintenance",
      "Adaptive Maintenance",
      "Corrective Maintenance",
      "Perfective Maintenance"
    ],
    "correctAnswer": "A",
    "topic": "Software Maintenance",
    "difficulty": "medium"
  },
  {
    "id": 727,
    "question": "Requirements can be refined using",
    "options": [
      "The waterfall model",
      "Prototyping model",
      "The evolutionary model",
      "The spiral model"
    ],
    "correctAnswer": "B",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 728,
    "question": "The model that assumes that effort and development time are functions of product size alone is",
    "options": [
      "Basic COCOMO model",
      "Intermediate COCOMO model",
      "Detailed COCOMO model",
      "All the three COCOMO models"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 729,
    "question": "Structured charts are a product of",
    "options": [
      "Requirements gathering",
      "Requirements analysis",
      "Design",
      "Coding"
    ],
    "correctAnswer": "C",
    "topic": "Software Design",
    "difficulty": "medium"
  },
  {
    "id": 730,
    "question": "The problem that threatens the success of a project but which has not yet happened is a",
    "options": [
      "Bug",
      "Error",
      "Risk",
      "Failure"
    ],
    "correctAnswer": "C",
    "topic": "Risk Management",
    "difficulty": "easy"
  },
  {
    "id": 731,
    "question": "The main purpose of integration testing is to find",
    "options": [
      "Design errors",
      "Analysis errors",
      "Procedure errors",
      "Interface errors"
    ],
    "correctAnswer": "D",
    "topic": "Integration Testing",
    "difficulty": "medium"
  },
  {
    "id": 732,
    "question": "Pseudocode can replace",
    "options": [
      "Flowcharts",
      "Structure charts",
      "Decision tables",
      "Cause-effect graphs"
    ],
    "correctAnswer": "A",
    "topic": "Software Design",
    "difficulty": "medium"
  },
  {
    "id": 733,
    "question": "If a program in its functioning has not met user requirements is some way, then it is",
    "options": [
      "An error",
      "A failure",
      "A fault",
      "A defect"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 734,
    "question": "The testing that focuses on the variables is called",
    "options": [
      "Black box testing",
      "White box testing",
      "Data variable testing",
      "Data flow testing"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 735,
    "question": "CASE Tool is",
    "options": [
      "Computer-Aided Software Engineering",
      "Component Aided Software Engineering",
      "Constructive Aided Software Engineering",
      "Computer Analysis Software Engineering"
    ],
    "correctAnswer": "A",
    "topic": "Software Engineering Tools",
    "difficulty": "easy"
  },
  {
    "id": 736,
    "question": "Software consists of",
    "options": [
      "Set of instructions + operating procedures",
      "Programs + documentation + operating procedures",
      "Programs + hardware manuals",
      "Set of programs"
    ],
    "correctAnswer": "B",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 737,
    "question": "Which is the most important feature of the spiral model?",
    "options": [
      "Quality management",
      "Risk management",
      "Performance management",
      "Efficiency management"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 738,
    "question": "Which phase is not available in the software life cycle?",
    "options": [
      "Coding",
      "Testing",
      "Maintenance",
      "Abstraction"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Lifecycle",
    "difficulty": "easy"
  },
  {
    "id": 739,
    "question": "Which is not a step of requirement engineering?",
    "options": [
      "Requirements elicitation",
      "Requirements analysis",
      "Requirements design",
      "Requirements documentation"
    ],
    "correctAnswer": "C",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 740,
    "question": "FAST stands for",
    "options": [
      "Functional Application Specification Technique",
      "Fast Application Specification Technique",
      "Facilitated Application Specification Technique",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 741,
    "question": "For a function of two variables, boundary value analysis yields",
    "options": [
      "4n + 3 test cases",
      "4n + 1 test cases",
      "n + 4",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "hard"
  },
  {
    "id": 742,
    "question": "Site for Alpha Testing is",
    "options": [
      "Software Company",
      "Installation place",
      "Anywhere",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 743,
    "question": "Which is not a size metric?",
    "options": [
      "LOC",
      "Function count",
      "Program length",
      "Cyclomatic complexity"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 744,
    "question": "As the reliability increases, failure intensity",
    "options": [
      "Decreases",
      "Increases",
      "No effect",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 745,
    "question": "Software deteriorates rather than wears out because",
    "options": [
      "Software suffers from exposure to hostile environments",
      "Defects are more likely to arise after software has been used often",
      "Multiple change requests introduce errors in component interactions",
      "Software spare parts become harder to order"
    ],
    "correctAnswer": "B",
    "topic": "Software Maintenance",
    "difficulty": "medium"
  },
  {
    "id": 746,
    "question": "What are the three generic phases of software engineering?",
    "options": [
      "Definition, development, support",
      "What, how, where",
      "Programming, debugging, maintenance",
      "Analysis, design, testing"
    ],
    "correctAnswer": "A",
    "topic": "Software Engineering",
    "difficulty": "medium"
  },
  {
    "id": 747,
    "question": "The spiral model of software development",
    "options": [
      "Ends with the delivery of the software product",
      "Is more chaotic than the incremental model",
      "Includes project risks evaluation during each iteration",
      "All of the above"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 748,
    "question": "Which of these terms is a level name in the Capability Maturity Model?",
    "options": [
      "Ad hoc",
      "Repeatable",
      "Reusable",
      "Organized"
    ],
    "correctAnswer": "C",
    "topic": "Software Process",
    "difficulty": "medium"
  },
  {
    "id": 749,
    "question": "Which of the items listed below is not one of the software engineering layers?",
    "options": [
      "Process",
      "Manufacturing",
      "Methods",
      "Tools"
    ],
    "correctAnswer": "B",
    "topic": "Software Engineering",
    "difficulty": "medium"
  },
  {
    "id": 750,
    "question": "Which of the following are advantages of using LOC (lines of code) as a size-oriented metric?",
    "options": [
      "LOC is easily computed",
      "LOC is a language-dependent measure",
      "LOC is a language-independent measure",
      "LOC can be computed before a design is completed"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 751,
    "question": "Top-down approach is used for",
    "options": [
      "Development",
      "Identification of faults",
      "Testing and validation",
      "Reverse engineering"
    ],
    "correctAnswer": "A",
    "topic": "Software Development",
    "difficulty": "medium"
  },
  {
    "id": 752,
    "question": "Which of the following is not an attribute of software engineering?",
    "options": [
      "Efficiency",
      "Scalability",
      "Dependability",
      "Usability"
    ],
    "correctAnswer": "C",
    "topic": "Software Engineering",
    "difficulty": "medium"
  },
  {
    "id": 753,
    "question": "A key concept of quality control is that all work products",
    "options": [
      "Are delivered on time and under budget",
      "Have complete documentation",
      "Have measurable specification for process outputs",
      "Are thoroughly tested before delivery to the customer"
    ],
    "correctAnswer": "C",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 754,
    "question": "The ISO quality assurance standard that applies to software engineering is",
    "options": [
      "ISO 9000",
      "ISO 9001",
      "ISO 9002",
      "ISO 9003"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 755,
    "question": "What types of models are created during software requirements analysis?",
    "options": [
      "Functional and behavioral",
      "Algorithmic and data structure",
      "Architectural and structural",
      "Usability and reliability"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 756,
    "question": "What is the normal order of activities in which software testing is organized?",
    "options": [
      "Unit, integration, system, validation",
      "System, integration, unit, validation",
      "Unit, integration, validation, system",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 757,
    "question": "Software feasibility is based on which of the following?",
    "options": [
      "Business and marketing concerns",
      "Scope, constraints, market",
      "Technology, finance, time, resources",
      "Technical prowess of the developers"
    ],
    "correctAnswer": "C",
    "topic": "Project Planning",
    "difficulty": "medium"
  },
  {
    "id": 758,
    "question": "FP-based estimation techniques require problem decomposition based on",
    "options": [
      "Information domain values",
      "Project schedule",
      "Software functions",
      "Process activities"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 759,
    "question": "The software metrics chosen by an organization are driven by the business or technical goals an organization wishes to accomplish",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "easy"
  },
  {
    "id": 760,
    "question": "The goal of quality assurance is to provide management with the data needed to determine which software engineers are producing the most defects",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 761,
    "question": "In the context of requirements analysis, partitioning results in the elaboration of data, function, or behavior",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 762,
    "question": "Units and stubs are not needed for unit testing because the modules are tested independently of one another",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 763,
    "question": "Software is",
    "options": [
      "Superset of programs",
      "Subset of programs",
      "Set of programs",
      "None"
    ],
    "correctAnswer": "A",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 764,
    "question": "Which is NOT the part of operating procedure Manuals?",
    "options": [
      "User Manuals",
      "Documentation Manuals",
      "Operational Manual",
      "Installation Manual"
    ],
    "correctAnswer": "B",
    "topic": "Software Documentation",
    "difficulty": "medium"
  },
  {
    "id": 765,
    "question": "Product is",
    "options": [
      "Deliverables",
      "User Expectations",
      "Organization's effort in development",
      "None"
    ],
    "correctAnswer": "A",
    "topic": "Software Engineering",
    "difficulty": "easy"
  },
  {
    "id": 766,
    "question": "To produce a good quality product, process should be",
    "options": [
      "Complex",
      "Efficient",
      "Rigorous",
      "None"
    ],
    "correctAnswer": "B",
    "topic": "Software Process",
    "difficulty": "easy"
  },
  {
    "id": 767,
    "question": "During software development which factor is most crucial?",
    "options": [
      "People",
      "Product",
      "Process",
      "All of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Development",
    "difficulty": "medium"
  },
  {
    "id": 768,
    "question": "UML Stands for",
    "options": [
      "Uniform modeling language",
      "Unit Modeling Language",
      "Unified modeling language",
      "Universal Modeling Language"
    ],
    "correctAnswer": "C",
    "topic": "UML",
    "difficulty": "easy"
  },
  {
    "id": 769,
    "question": "Software Consists of",
    "options": [
      "set of instructions + operating system",
      "Programs + documentation + operating procedure",
      "Programs + hardware",
      "Set of programs"
    ],
    "correctAnswer": "B",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 770,
    "question": "Software Engineering approach is used to achieve",
    "options": [
      "Better performance of hardware",
      "Error free software",
      "Reusable software",
      "Quality software product"
    ],
    "correctAnswer": "D",
    "topic": "Software Engineering",
    "difficulty": "easy"
  },
  {
    "id": 771,
    "question": "Which is not a software life cycle model",
    "options": [
      "Water fall",
      "Spiral",
      "Prototype",
      "Capability Maturity Model"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Lifecycle",
    "difficulty": "medium"
  },
  {
    "id": 772,
    "question": "Project Risk Factor is considered in",
    "options": [
      "Water fall",
      "Spiral",
      "Prototype",
      "Iterative enhancement model"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 773,
    "question": "If requirements are understandable, easy, defined, which model is best suited",
    "options": [
      "Water fall",
      "Spiral",
      "Prototype",
      "None"
    ],
    "correctAnswer": "A",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 774,
    "question": "If requirements are frequently changing, which model is best suited",
    "options": [
      "Water fall",
      "Spiral",
      "Prototype",
      "RAD"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 775,
    "question": "Which one is the most important feature of spiral model?",
    "options": [
      "Quality management",
      "Risk Management",
      "Performance Management",
      "Efficiency management"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "easy"
  },
  {
    "id": 776,
    "question": "Statistically, the maximum percentage of errors belong to the following phase of SDLC",
    "options": [
      "Coding",
      "Design",
      "Specifications",
      "Installation and maintenance"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Lifecycle",
    "difficulty": "medium"
  },
  {
    "id": 777,
    "question": "Most suitable model for new technology that is not well understood is",
    "options": [
      "Waterfall model",
      "RAD Model",
      "Iterative enhancement model",
      "Evolutionary development model"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 778,
    "question": "Which phase is not available in software life cycle?",
    "options": [
      "Coding",
      "Design",
      "Specifications",
      "Installation & Maintenance"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Lifecycle",
    "difficulty": "medium"
  },
  {
    "id": 779,
    "question": "The development is supposed to proceed linearly through the phases in",
    "options": [
      "Spiral model",
      "Waterfall model",
      "Prototyping model",
      "None"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "easy"
  },
  {
    "id": 780,
    "question": "Process of generating analysis and design documents is called",
    "options": [
      "Inverse Engineering",
      "Reverse Engineering",
      "Software Engineering",
      "Re-Engineering"
    ],
    "correctAnswer": "B",
    "topic": "Software Engineering",
    "difficulty": "medium"
  },
  {
    "id": 781,
    "question": "Regression testing is primarily related to",
    "options": [
      "functional testing",
      "data flow testing",
      "Development testing",
      "Maintenance Testing"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 782,
    "question": "Which one is not a category of maintenance?",
    "options": [
      "Corrective maintenance",
      "Effective maintenance",
      "Adaptive Maintenance",
      "Perfective maintenance"
    ],
    "correctAnswer": "B",
    "topic": "Software Maintenance",
    "difficulty": "medium"
  },
  {
    "id": 783,
    "question": "The maintained initiated by defects in the software is called",
    "options": [
      "Corrective maintenance",
      "Effective maintenance",
      "Adaptive Maintenance",
      "Perfective maintenance"
    ],
    "correctAnswer": "A",
    "topic": "Software Maintenance",
    "difficulty": "medium"
  },
  {
    "id": 784,
    "question": "Patch is known as",
    "options": [
      "Emergency fixes",
      "Routine fixes",
      "Critical fixes",
      "None"
    ],
    "correctAnswer": "A",
    "topic": "Software Maintenance",
    "difficulty": "medium"
  },
  {
    "id": 785,
    "question": "The following software process model can be represented schematically as a series of major technical activities and there associated state?",
    "options": [
      "Incremental model",
      "Component assembly",
      "Concurrent development model",
      "All of the above"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 786,
    "question": "A data model consists of the following information?",
    "options": [
      "Data Object",
      "The attributes that describe data object",
      "Relationship that connect data object to one another",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Data Modeling",
    "difficulty": "medium"
  },
  {
    "id": 787,
    "question": "What is the modality of relationship, if there is no explicit need for relationship to occur?",
    "options": [
      "One",
      "Two",
      "Three",
      "four"
    ],
    "correctAnswer": "A",
    "topic": "Data Modeling",
    "difficulty": "hard"
  },
  {
    "id": 788,
    "question": "The object relationship pair of data model is represented graphically by using",
    "options": [
      "Data flow diagram",
      "Flow chart",
      "Entity relationship diagram",
      "All of the above"
    ],
    "correctAnswer": "C",
    "topic": "Data Modeling",
    "difficulty": "medium"
  },
  {
    "id": 789,
    "question": "Which architecture provide framework for information needs of a business function?",
    "options": [
      "Application architecture",
      "Technology infrastructure",
      "Data structure",
      "All of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Architecture",
    "difficulty": "medium"
  },
  {
    "id": 790,
    "question": "Which life cycle mode suggests a systematic, sequential, approach to software development that begins at system level and proceeds through analysis, design, coding and maintenance",
    "options": [
      "Waterfall model",
      "Prototype model",
      "Sequential model",
      "RAD model"
    ],
    "correctAnswer": "A",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
    {
    "id": 791,
    "question": "Which s/w package model composes application from prepackaged s/w components",
    "options": [
      "Component assembly model",
      "Concurrent development model",
      "Incremental model",
      "None"
    ],
    "correctAnswer": "A",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 792,
    "question": "The primary aim of the s/w engg. Is to provide",
    "options": [
      "Reliable s/w",
      "According to requirement a complete s/w",
      "Cost- effective s/w",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Engineering",
    "difficulty": "easy"
  },
  {
    "id": 793,
    "question": "A good requirement specification should be",
    "options": [
      "Unambiguous",
      "Distinctly specific",
      "Functional",
      "None"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "easy"
  },
  {
    "id": 794,
    "question": "Related to object oriented design of s/w, which of the following is not true",
    "options": [
      "Object inherit the properties of a class",
      "Classes are defined based on attributes of objects",
      "An object can belongs to two classes",
      "None"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Design",
    "difficulty": "medium"
  },
  {
    "id": 795,
    "question": "Design phase include",
    "options": [
      "Data architectural and procedural design only",
      "Architectural, procedural, and interface design only",
      "Data, Architectural, and interface design only",
      "Data, architectural, interface and procedural design only"
    ],
    "correctAnswer": "D",
    "topic": "Software Design",
    "difficulty": "medium"
  },
  {
    "id": 796,
    "question": "In s/w engineering approach the design phase is",
    "options": [
      "Top down",
      "Bottom up",
      "Random",
      "Centre fringing"
    ],
    "correctAnswer": "A",
    "topic": "Software Design",
    "difficulty": "medium"
  },
  {
    "id": 797,
    "question": "Following are the categories of the automated system",
    "options": [
      "Online system",
      "Real time system",
      "Decision support system",
      "None"
    ],
    "correctAnswer": "D",
    "topic": "System Types",
    "difficulty": "medium"
  },
  {
    "id": 798,
    "question": "The main difference between program testing and system testing is",
    "options": [
      "Program testing is more comprehensive that system testing",
      "System testing focuses on testing the interface between program and program testing focuses on individual programs",
      "System testing is tough and program testing is easy",
      "None"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 799,
    "question": "The largest percentage of total life cycle cost of s/w is",
    "options": [
      "Design cost",
      "Maintenance cost",
      "Coding cost",
      "Testing cost"
    ],
    "correctAnswer": "A",
    "topic": "Software Lifecycle",
    "difficulty": "medium"
  },
  {
    "id": 800,
    "question": "The static system model exhibits which type of relationship?",
    "options": [
      "Time cost",
      "Activity time",
      "Quantity time",
      "None"
    ],
    "correctAnswer": "B",
    "topic": "System Modeling",
    "difficulty": "hard"
  },
  {
    "id": 801,
    "question": "System implementation phase consists of",
    "options": [
      "System checkout",
      "Pilot run",
      "Parallel run",
      "All of the above"
    ],
    "correctAnswer": "B",
    "topic": "System Implementation",
    "difficulty": "medium"
  },
  {
    "id": 802,
    "question": "The computer programs produced by structural design are",
    "options": [
      "Easily maintained",
      "Easily understood",
      "Tested in a bottom –up fashion",
      "a and b only"
    ],
    "correctAnswer": "D",
    "topic": "Software Design",
    "difficulty": "medium"
  },
  {
    "id": 803,
    "question": "Increase in profits caused by a new system. Select the best fit for this answer",
    "options": [
      "Cost/benefit analysis",
      "Costs",
      "Regrets",
      "Benefits"
    ],
    "correctAnswer": "A",
    "topic": "System Analysis",
    "difficulty": "medium"
  },
  {
    "id": 804,
    "question": "Determines the organization's economic, technical and operational feasibility of a proposed informative system. Select the best fit for this answer",
    "options": [
      "Benefits",
      "System development life cycle",
      "System investigation",
      "Feasibility study"
    ],
    "correctAnswer": "D",
    "topic": "System Development",
    "difficulty": "medium"
  },
  {
    "id": 805,
    "question": "The technique which is used to totally remove existing system and immediately implementing new system is called",
    "options": [
      "Crash conversion",
      "Phased conversion",
      "Pilot conversion",
      "Parallel conversion"
    ],
    "correctAnswer": "A",
    "topic": "System Implementation",
    "difficulty": "medium"
  },
  {
    "id": 806,
    "question": "Which of the following is not considered a tool at system design phase?",
    "options": [
      "Data flow diagram",
      "Decision table",
      "Pie charts",
      "System flow chart"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 807,
    "question": "Coding & testing is done in following manner",
    "options": [
      "Adhoc",
      "Cross sectional",
      "Bottom up",
      "Top-down"
    ],
    "correctAnswer": "D",
    "topic": "Software Development",
    "difficulty": "medium"
  },
  {
    "id": 808,
    "question": "Checking quality of s/w in both simulated and live environments is known as",
    "options": [
      "Checking",
      "Usability",
      "Validity",
      "Validation"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 809,
    "question": "The most creative and challenging phase of system life cycle is",
    "options": [
      "Feasibility study",
      "Maintenance",
      "Design",
      "None"
    ],
    "correctAnswer": "C",
    "topic": "System Development Lifecycle",
    "difficulty": "medium"
  },
  {
    "id": 810,
    "question": "Which of the following is not a component of object oriented s/w engineering?",
    "options": [
      "Process",
      "Method",
      "Architecture",
      "None"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Engineering",
    "difficulty": "medium"
  },
  {
    "id": 811,
    "question": "The largest percentage of total life cycle cost of s/w is",
    "options": [
      "Design cost",
      "Maintenance cost",
      "Coding cost",
      "Testing cost"
    ],
    "correctAnswer": "A",
    "topic": "Software Lifecycle",
    "difficulty": "medium"
  },
  {
    "id": 812,
    "question": "With thorough testing it is possible to remove all defects from a program prior to delivery to the customer",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 813,
    "question": "Which of the following are characteristics of testable software?",
    "options": [
      "observability",
      "simplicity",
      "stability",
      "all of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 814,
    "question": "The testing technique that requires devising test cases to demonstrate that each program function is operational is called",
    "options": [
      "black-box testing",
      "glass-box testing",
      "grey-box testing",
      "white-box testing"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 815,
    "question": "The testing technique that requires devising test cases to exercise the internal logic of a software module is called",
    "options": [
      "behavioral testing",
      "black-box testing",
      "grey-box testing",
      "white-box testing"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 816,
    "question": "What types of errors are missed by black-box testing and can be uncovered by white-box testing?",
    "options": [
      "behavioral errors",
      "logic errors",
      "typographical errors",
      "both B and C"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 817,
    "question": "Program flow graphs are identical to program flowcharts",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 818,
    "question": "The cyclomatic complexity metric provides the designer with information regarding the number of",
    "options": [
      "cycles in the program",
      "errors in the program",
      "independent logic paths in the program",
      "statements in the program"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 819,
    "question": "The cyclomatic complexity of a program can be computed directly from a PDL representation of an algorithm without drawing a program flow graph",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "hard"
  },
  {
    "id": 820,
    "question": "Condition testing is a control structure testing technique where the criteria used to design test cases is that they",
    "options": [
      "rely on basis path testing",
      "exercise the logical conditions in a program module",
      "select test paths based on the locations and uses of variables",
      "focus on testing the validity of loop constructs"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 821,
    "question": "Data flow testing is a control structure testing technique where the criteria used to design test cases is that they",
    "options": [
      "rely on basis path testing",
      "exercise the logical conditions in a program module",
      "select test paths based on the locations and uses of variables",
      "focus on testing the validity of loop constructs"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 822,
    "question": "Loop testing is a control structure testing technique where the criteria used to design test cases is that they",
    "options": [
      "rely basis path testing",
      "exercise the logical conditions in a program module",
      "select test paths based on the locations and uses of variables",
      "focus on testing the validity of loop constructs"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 823,
    "question": "Black-box testing attempts to find errors in which of the following categories",
    "options": [
      "incorrect or missing functions",
      "interface errors",
      "performance errors",
      "all of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 824,
    "question": "Graph-based testing methods can only be used for object-oriented systems",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 825,
    "question": "Equivalence testing divides the input domain into classes of data from which test cases can be derived to reduce the total number of test cases that must be developed",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 826,
    "question": "Boundary value analysis can only be used to do white-box testing",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 827,
    "question": "Comparison testing is typically done to test two competing products as part of customer market analysis prior to product release",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 828,
    "question": "Orthogonal array testing enables the test designer to maximize the coverage of the test cases devised for relatively small input domains",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 829,
    "question": "Test case design \"in the small\" for OO software is driven by the algorithmic detail of the individual operations",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 830,
    "question": "Encapsulation of attributes and operations inside objects makes it easy to obtain object state information during testing",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 831,
    "question": "Use-cases can provide useful input into the design of black-box and state-based tests of OO software",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 832,
    "question": "Fault-based testing is best reserved for",
    "options": [
      "conventional software testing",
      "operations and classes that are critical or suspect",
      "use-case validation",
      "white-box testing of operator algorithms"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 833,
    "question": "Testing OO class operations is made more difficult by",
    "options": [
      "encapsulation",
      "inheritance",
      "polymorphism",
      "both b and c"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 834,
    "question": "Scenario-based testing",
    "options": [
      "concentrates on actor and software interaction",
      "misses errors in specifications",
      "misses errors in subsystem interactions",
      "both a and b"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 835,
    "question": "Deep structure testing is not designed to",
    "options": [
      "examine object behaviors",
      "exercise communication mechanisms",
      "exercise object dependencies",
      "exercise structure observable by the user"
    ],
    "correctAnswer": "D",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 836,
    "question": "Random order tests are conducted to exercise different class instance life histories",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 837,
    "question": "Which of these techniques is not useful for partition testing at the class level",
    "options": [
      "attribute-based partitioning",
      "category-based partitioning",
      "equivalence class partitioning",
      "state-based partitioning"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Testing",
    "difficulty": "hard"
  },
  {
    "id": 838,
    "question": "Multiple class testing is too complex to be tested using random test cases",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 839,
    "question": "Tests derived from behavioral class models should be based on the",
    "options": [
      "data flow diagram",
      "object-relation diagram",
      "state diagram",
      "use-case diagram"
    ],
    "correctAnswer": "C",
    "topic": "Object-Oriented Testing",
    "difficulty": "medium"
  },
  {
    "id": 840,
    "question": "Client/server architectures cannot be properly tested because network load is highly variable",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 841,
    "question": "Real-time applications add a new and potentially difficult element to the testing mix",
    "options": [
      "performance",
      "reliability",
      "security",
      "time"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 842,
    "question": "What is the meaning of COSO?",
    "options": [
      "Common Sponsoring Organizations",
      "Committee Of Sponsoring Organizations",
      "Committee Of Standard Organizations",
      "Common Standard Organization"
    ],
    "correctAnswer": "B",
    "topic": "IT Governance",
    "difficulty": "medium"
  },
  {
    "id": 843,
    "question": "Which one is not key term used in internal control and security",
    "options": [
      "Threat",
      "Risk Control",
      "Vulnerability",
      "Exposure"
    ],
    "correctAnswer": "B",
    "topic": "IT Security",
    "difficulty": "medium"
  },
  {
    "id": 844,
    "question": "Management is not responsible for an organization internal control system",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "IT Governance",
    "difficulty": "easy"
  },
  {
    "id": 845,
    "question": "Who is ultimate responsible for the internal control system",
    "options": [
      "CEO",
      "Project Manager",
      "Technical Manager",
      "Developer"
    ],
    "correctAnswer": "A",
    "topic": "IT Governance",
    "difficulty": "easy"
  },
  {
    "id": 846,
    "question": "The sole purpose of the Risk Control is to avoid risk",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Risk Management",
    "difficulty": "medium"
  },
  {
    "id": 847,
    "question": "Management controls involves limiting access to computer resources",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "IT Security",
    "difficulty": "medium"
  },
  {
    "id": 848,
    "question": "Software developed by contractors who are not part of the organization is referred to as in sourcing organizations",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Software Development",
    "difficulty": "medium"
  },
  {
    "id": 849,
    "question": "Which one is not tester responsibilities?",
    "options": [
      "Assure the process for contracting software is adequate",
      "Review the adequacy of the contractors test plan",
      "Perform acceptance testing on the software",
      "Assure the ongoing operation and maintenance of the contracted software"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 850,
    "question": "The software tester may or may not be involved in the actual acceptance testing",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 851,
    "question": "In the client systems, testing should focus on performance and compatibility",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 852,
    "question": "A database access applications typically consists of following elements except",
    "options": [
      "User Interface code",
      "Business login code",
      "Data-access service code",
      "Data Driven code"
    ],
    "correctAnswer": "D",
    "topic": "Database Applications",
    "difficulty": "medium"
  },
  {
    "id": 853,
    "question": "Wireless technologies represent a rapidly emerging area of growth and importance for providing ever-present access to the internet and email",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Mobile Technologies",
    "difficulty": "easy"
  },
  {
    "id": 854,
    "question": "Acceptance testing involves procedures for identifying acceptance criteria for interim life cycle products and for accepting them",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 855,
    "question": "Acceptance testing is designed whether or not the software is \"fit\" for the user to use. The concept of \"fit\" is important in both design and testing. There are four components of \"fit\"",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 856,
    "question": "Acceptance testing occurs only at the end point of the development process; it should be an ongoing activity that test both interim and final products",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 857,
    "question": "Acceptance requirement that a system must meet can be divided into ________ categories",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "hard"
  },
  {
    "id": 858,
    "question": "_______ categories of testing techniques can be used in acceptance testing",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 859,
    "question": "_____________ define the objectives of the acceptance activities and a plan for meeting them",
    "options": [
      "Project Manager",
      "IT Manager",
      "Acceptance Manager",
      "ICO"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 860,
    "question": "Software Acceptance testing is the last opportunity for the user to examine the software for functional, interface, performance, and quality features prior to the final acceptance review",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 861,
    "question": "_________ categories of data will be collected during testing",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 862,
    "question": "______________ is normally a reverse of the test development process. In other words, it begins at the very lowest level and the results are rolled up to the highest levels",
    "options": [
      "Conducting testing",
      "Resuming testing",
      "Acceptance testing",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 863,
    "question": "Which one is called as most common test report?",
    "options": [
      "Test Summary Report",
      "Check List",
      "Spreadsheet",
      "Cause-Effect Graphing"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 864,
    "question": "Verification that the process deliverables/phases are meeting the user's true needs is called as",
    "options": [
      "Inspections",
      "Reviews",
      "Acceptance testing",
      "Acceptance criteria"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 865,
    "question": "_____________ the reporting process is very important because software tools are being upgraded, and manual supporting activities sometimes break down",
    "options": [
      "Analyzing",
      "Monitoring",
      "Both A & B",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 866,
    "question": "_______________ report provides information related to a specific project component",
    "options": [
      "Individual Project Status Report",
      "Major Project Status Report",
      "Both A & B",
      "None of the Above"
    ],
    "correctAnswer": "B",
    "topic": "Project Management",
    "difficulty": "medium"
  },
  {
    "id": 867,
    "question": "________________ report provides general information about all projects",
    "options": [
      "Individual Project Status Report",
      "Major Project Status Report",
      "Both A & B",
      "None of the Above"
    ],
    "correctAnswer": "D",
    "topic": "Project Management",
    "difficulty": "medium"
  },
  {
    "id": 868,
    "question": "The Project Status Report contains the project activities information and give a history of the project over a 16-month period",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Project Management",
    "difficulty": "medium"
  },
  {
    "id": 869,
    "question": "The test reports are for use by the testers, the test manager, and the software development team",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "easy"
  },
  {
    "id": 870,
    "question": "_________ is a risk-oriented activity in which resources should be expended to minimize the major risks",
    "options": [
      "Testing",
      "Development",
      "Quality Control",
      "Quality Assurance"
    ],
    "correctAnswer": "A",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 871,
    "question": "_______________ measure the characteristics of the documentation and code",
    "options": [
      "Process metric",
      "Product metric",
      "Software quality metric",
      "Software metric"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 872,
    "question": "Software is",
    "options": [
      "Superset of programs",
      "subset of programs",
      "Set of programs",
      "none of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 873,
    "question": "Which is NOT the part of operating procedure manuals?",
    "options": [
      "User manuals",
      "Operational manuals",
      "Documentation manuals",
      "Installation manuals"
    ],
    "correctAnswer": "C",
    "topic": "Software Documentation",
    "difficulty": "medium"
  },
  {
    "id": 874,
    "question": "Which is NOT a software characteristic?",
    "options": [
      "Software does not wear out",
      "Software is flexible",
      "Software is not manufactured",
      "Software is always correct"
    ],
    "correctAnswer": "D",
    "topic": "Software Characteristics",
    "difficulty": "easy"
  },
  {
    "id": 875,
    "question": "Product is",
    "options": [
      "Deliverables",
      "User expectations",
      "Organization's effort in development",
      "none of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Engineering",
    "difficulty": "easy"
  },
  {
    "id": 876,
    "question": "To produce a good quality product, process should be",
    "options": [
      "Complex",
      "Efficient",
      "Rigorous",
      "none of the above"
    ],
    "correctAnswer": "B",
    "topic": "Software Process",
    "difficulty": "easy"
  },
  {
    "id": 877,
    "question": "Which is not a product metric?",
    "options": [
      "Size",
      "Reliability",
      "Productivity",
      "Functionality"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 878,
    "question": "Which is NOT a process metric?",
    "options": [
      "Productivity",
      "Functionality",
      "Quality",
      "Efficiency"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 879,
    "question": "Effort is measured in terms of:",
    "options": [
      "Person-months",
      "Rupees",
      "Persons",
      "Months"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "easy"
  },
  {
    "id": 880,
    "question": "UML stands for",
    "options": [
      "Uniform modeling language",
      "Unified modeling language",
      "Unit modeling language",
      "Universal modeling language"
    ],
    "correctAnswer": "B",
    "topic": "UML",
    "difficulty": "easy"
  },
  {
    "id": 881,
    "question": "An independently deliverable piece of functionality providing access to its services through interface is called",
    "options": [
      "Software measurement",
      "Software composition",
      "Software measure",
      "Software component"
    ],
    "correctAnswer": "D",
    "topic": "Software Components",
    "difficulty": "medium"
  },
  {
    "id": 882,
    "question": "Infrastructure software are covered under",
    "options": [
      "Generic products",
      "Customized products",
      "Generic and Customized products",
      "none of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Types",
    "difficulty": "medium"
  },
  {
    "id": 883,
    "question": "Management of software development is dependent on",
    "options": [
      "People",
      "product",
      "Process",
      "all of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Development",
    "difficulty": "medium"
  },
  {
    "id": 884,
    "question": "During software development, which factor is most crucial?",
    "options": [
      "People",
      "Product",
      "Process",
      "Project"
    ],
    "correctAnswer": "A",
    "topic": "Software Development",
    "difficulty": "easy"
  },
  {
    "id": 885,
    "question": "Program is",
    "options": [
      "Subset of software",
      "super set of software",
      "Software",
      "none of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 886,
    "question": "Milestones are used to",
    "options": [
      "Know the cost of the project",
      "know the status of the project",
      "Know user expectations",
      "none of the above"
    ],
    "correctAnswer": "B",
    "topic": "Project Management",
    "difficulty": "easy"
  },
  {
    "id": 887,
    "question": "The term module used during design phase refers to",
    "options": [
      "Function",
      "Procedure",
      "Sub program",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Design",
    "difficulty": "medium"
  },
  {
    "id": 888,
    "question": "Software consists of",
    "options": [
      "Set of instructions + operating system",
      "Programs + documentation + operating procedures",
      "Programs + hardware manuals",
      "Set of programs"
    ],
    "correctAnswer": "B",
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 889,
    "question": "Software engineering approach is used to achieve:",
    "options": [
      "Better performance of hardware",
      "Error free software",
      "Reusable software",
      "Quality software product"
    ],
    "correctAnswer": "D",
    "topic": "Software Engineering",
    "difficulty": "easy"
  },
  {
    "id": 890,
    "question": "Concept of software engineering is applicable to",
    "options": [
      "FORTRAN language only",
      "Pascal language only",
      "'C' language only",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Engineering",
    "difficulty": "easy"
  },
  {
    "id": 891,
    "question": "CASE Tool is",
    "options": [
      "Computer Aided Software Engineering",
      "Component Aided Software Engineering",
      "Constructive Aided Software Engineering",
      "Computer Analysis Software Engineering"
    ],
    "correctAnswer": "A",
    "topic": "Software Engineering Tools",
    "difficulty": "easy"
  },
  {
    "id": 892,
    "question": "Spiral Model was developed by",
    "options": [
      "Bev Little wood",
      "Barry Boehm",
      "Roger Pressman",
      "Victor Basili"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 893,
    "question": "Which model is most popular for student's small projects?",
    "options": [
      "Waterfall model",
      "Spiral model",
      "Quick and fix model",
      "Prototyping model"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 894,
    "question": "Which is not a software life cycle model?",
    "options": [
      "Waterfall model",
      "Spiral model",
      "Prototyping model",
      "Capability maturity model"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Lifecycle",
    "difficulty": "medium"
  },
  {
    "id": 895,
    "question": "Project risk factor is considered in",
    "options": [
      "Waterfall model",
      "Prototyping model",
      "Spiral model",
      "Iterative enhancement model"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 896,
    "question": "SDLC stands for",
    "options": [
      "Software design life cycle",
      "Software development life cycle",
      "System development life cycle",
      "System design life cycle"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Lifecycle",
    "difficulty": "easy"
  },
  {
    "id": 897,
    "question": "Build and fix model has",
    "options": [
      "3 phases",
      "1 phase",
      "2 phases",
      "4 phases"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 898,
    "question": "Which of the following is a type of software?",
    "options": [
      "System Software",
      "Embedded Software",
      "Application",
      "all of the above"
    ],
    "correctAnswer": "D", // Note: Corrected from "A" in the source to "D" based on the option "all of the above"
    "topic": "Software Types",
    "difficulty": "easy"
  },
  {
    "id": 899,
    "question": "Waterfall model is not suitable for",
    "options": [
      "small projects",
      "accommodating change",
      "complex projects",
      "none of the above"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 900,
    "question": "RAD stands for",
    "options": [
      "Rapid application development",
      "Relative application development",
      "Ready application development",
      "Repeated application development"
    ],
    "correctAnswer": "A",
    "topic": "Software Development Models",
    "difficulty": "easy"
  },
  {
    "id": 901,
    "question": "RAD model was proposed by",
    "options": [
      "Lucent Technologies",
      "Motorola",
      "IBM",
      "Microsoft"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 902,
    "question": "If requirements are easily understandable and defined, which model is best suited?",
    "options": [
      "Waterfall model",
      "Prototyping model",
      "Spiral model",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 903,
    "question": "If requirements are frequently changing, which model is to be selected?",
    "options": [
      "Waterfall model",
      "Prototyping model",
      "RAD model",
      "Iterative enhancement model"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 904,
    "question": "If user participation is available, which model is to be chosen?",
    "options": [
      "Waterfall model",
      "Iterative enhancement model",
      "Spiral model",
      "RAD model"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 905,
    "question": "If limited user participation is available, which model is to be selected?",
    "options": [
      "Waterfall model",
      "Spiral model",
      "Iterative enhancement model",
      "any of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 906,
    "question": "If project is the enhancement of existing system, which model is best suited?",
    "options": [
      "Waterfall model",
      "Prototyping model",
      "Iterative enhancement model",
      "Spiral model"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 907,
    "question": "Which one is the most important feature of spiral model?",
    "options": [
      "Quality management",
      "Risk management",
      "Performance management",
      "Efficiency management"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 908,
    "question": "Most suitable model for new technology that is not well understood is:",
    "options": [
      "Waterfall model",
      "RAD model",
      "Iterative enhancement model",
      "Evolutionary development model"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 909,
    "question": "Statistically, the maximum percentage of errors belong to the following phase of SDLC",
    "options": [
      "Coding",
      "Design",
      "Specifications",
      "Installation and maintenance"
    ],
    "correctAnswer": "C",
    "topic": "Software Development Lifecycle",
    "difficulty": "medium"
  },
  {
    "id": 910,
    "question": "Which phase is not available in software life cycle?",
    "options": [
      "Coding",
      "Testing",
      "Maintenance",
      "Abstraction"
    ],
    "correctAnswer": "D",
    "topic": "Software Development Lifecycle",
    "difficulty": "easy"
  },
  {
    "id": 911,
    "question": "The development is supposed to proceed linearly through the phase in",
    "options": [
      "Spiral model",
      "Waterfall model",
      "Prototyping model",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Models",
    "difficulty": "medium"
  },
  {
    "id": 912,
    "question": "The outcome of construction phase can be treated as:",
    "options": [
      "Product release",
      "Beta release",
      "Alpha release",
      "All of the above"
    ],
    "correctAnswer": "B",
    "topic": "Software Development Lifecycle",
    "difficulty": "medium"
  },
  {
    "id": 913,
    "question": "Which one is not a step of requirement engineering?",
    "options": [
      "Requirements elicitation",
      "Requirements analysis",
      "Requirements design",
      "Requirements documentation"
    ],
    "correctAnswer": "C",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 914,
    "question": "Requirements elicitation means",
    "options": [
      "Gathering of requirements",
      "Capturing of requirements",
      "Understanding of requirements",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 915,
    "question": "SRS stands for",
    "options": [
      "Software requirements specification",
      "System requirements specification",
      "Systematic requirements specifications",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "easy"
  },
  {
    "id": 916,
    "question": "SRS document is for",
    "options": [
      "\"What\" of a system?",
      "How to design the system?",
      "Costing and scheduling of a system",
      "System's requirement."
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 917,
    "question": "Requirements review process is carried out to",
    "options": [
      "Spend time in requirements gathering",
      "Improve the quality of SRS",
      "Document the requirements",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 918,
    "question": "Which one of the statements is not correct during requirements engineering?",
    "options": [
      "Requirements are difficult to uncover",
      "Requirements are subject to change",
      "Requirements should be consistent",
      "Requirements are always precisely known."
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 919,
    "question": "Which one is not a type of requirements?",
    "options": [
      "Known requirements",
      "Unknown requirements",
      "Undreamt requirements",
      "Complex requirements"
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 920,
    "question": "Which one is not a requirements elicitation technique?",
    "options": [
      "Interviews",
      "The use case approach",
      "FAST",
      "Data flow diagram."
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 921,
    "question": "QFD in requirement engineering stands for",
    "options": [
      "Quality function design",
      "Quality factor design",
      "Quality function development",
      "Quality function deployment"
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 922,
    "question": "Which is not a type of requirements under quality function deployment?",
    "options": [
      "Normal requirements",
      "Abnormal requirements",
      "Expected requirements",
      "Exciting requirements"
    ],
    "correctAnswer": "B",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 923,
    "question": "Use case approach was developed by",
    "options": [
      "I. Jacobson and others",
      "J.D. Musa and others",
      "B. Littlewood",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 924,
    "question": "Context diagram explains",
    "options": [
      "The overview of the system",
      "The internal view of the system",
      "The entities of the system",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 925,
    "question": "DFD stands for",
    "options": [
      "Data Flow design",
      "Descriptive functional design",
      "Data flow diagram",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "System Design",
    "difficulty": "easy"
  },
  {
    "id": 926,
    "question": "ERD stands for",
    "options": [
      "Entity relationship diagram",
      "Exit related diagram",
      "Entity relationship design",
      "Exit related design"
    ],
    "correctAnswer": "A",
    "topic": "Data Modeling",
    "difficulty": "easy"
  },
  {
    "id": 927,
    "question": "Which is not a characteristic of a good SRS?",
    "options": [
      "Correct",
      "Complete",
      "Consistent",
      "Brief"
    ],
    "correctAnswer": "D",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 928,
    "question": "Outcome of requirements specification phase is",
    "options": [
      "Design Document",
      "SRS Document",
      "Test Document",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 929,
    "question": "The basic concepts of ER model are:",
    "options": [
      "Entity and relationship",
      "Relationships and keys",
      "Entity, effects and relationship",
      "Entity, relationship and attribute"
    ],
    "correctAnswer": "D",
    "topic": "Data Modeling",
    "difficulty": "medium"
  },
  {
    "id": 930,
    "question": "The DFD depicts",
    "options": [
      "Flow of data",
      "Flow of control",
      "Both (a) & (b)",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "System Design",
    "difficulty": "medium"
  },
  {
    "id": 931,
    "question": "Product features are related to:",
    "options": [
      "Functional requirements",
      "Non functional requirements",
      "Interface requirement",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 932,
    "question": "Which one is a quality attribute?",
    "options": [
      "Reliability",
      "Availability",
      "Security",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 933,
    "question": "IEEE standard for SRS is:",
    "options": [
      "IEEE Standard 837-1998",
      "IEEE Standard 830-1998",
      "IEEE Standard 832-1998",
      "IEEE Standard 839-1998"
    ],
    "correctAnswer": "B",
    "topic": "Software Standards",
    "difficulty": "medium"
  },
  {
    "id": 934,
    "question": "Which one is not a functional requirement?",
    "options": [
      "Efficiency",
      "Reliability",
      "Product features",
      "Stability"
    ],
    "correctAnswer": "C",
    "topic": "Requirements Engineering",
    "difficulty": "medium"
  },
  {
    "id": 935,
    "question": "APIs stand for:",
    "options": [
      "Application performance interfaces",
      "Application programming interfaces",
      "Application programming integration",
      "Application performance integration"
    ],
    "correctAnswer": "B",
    "topic": "Software Development",
    "difficulty": "easy"
  },
  {
    "id": 936,
    "question": "After the finalization of SRS, we may like to estimate",
    "options": [
      "Size",
      "Cost",
      "Development time",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Project Management",
    "difficulty": "medium"
  },
  {
    "id": 937,
    "question": "Which one is not a size measure for software",
    "options": [
      "LOC",
      "Function Count",
      "Cyclomatic Complexity",
      "Halstead's program length"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 938,
    "question": "Function count method was developed by",
    "options": [
      "B.Beizer",
      "B.Boehm",
      "M.halstead",
      "Alan Albrecht"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 939,
    "question": "Function point analysis (FPA) method decomposes the system into functional units. The total numbers of functional units are",
    "options": [
      "2",
      "5",
      "4",
      "1"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 940,
    "question": "COCOMO was developed initially by",
    "options": [
      "B.W.Bohem",
      "Gregg Rothermal",
      "B.Beizer",
      "Rajiv Gupta"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 941,
    "question": "Estimation of software development effort for organic software is COCOMO is",
    "options": [
      "E=2.4(KLOC)1.05PM",
      "E=3.4(KLOC)1.06PM",
      "E=2.0(KLOC)1.05PM",
      "E-2.4(KLOC)1.07PM"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "hard"
  },
  {
    "id": 942,
    "question": "Estimation of size for a project is dependent on",
    "options": [
      "Cost",
      "Schedule",
      "Time",
      "None of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Project Management",
    "difficulty": "medium"
  },
  {
    "id": 943,
    "question": "In function point analysis, number of Complexity adjustment factor is",
    "options": [
      "10",
      "20",
      "14",
      "12"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 944,
    "question": "COCOMO-II estimation model is based on",
    "options": [
      "Complex approach",
      "Algorithm approach",
      "Bottom up approach",
      "Top down approach"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 945,
    "question": "Cost estimation for a project may include",
    "options": [
      "Software Cost",
      "Hardware Cost",
      "Personnel Costs",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Project Management",
    "difficulty": "medium"
  },
  {
    "id": 946,
    "question": "In COCOMO model, if project size is typically 2-50 KLOC, then which mode is to be selected?",
    "options": [
      "Organic",
      "Semidetached",
      "Embedded",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 947,
    "question": "COCOMO-II was developed at",
    "options": [
      "University of Maryland",
      "University of Southern California",
      "IBM",
      "AT & T Bell labs"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 948,
    "question": "Which one is not a Category of COCOMO-II?",
    "options": [
      "End User Programming",
      "Infrastructure Sector",
      "Requirement Sector",
      "System Integration"
    ],
    "correctAnswer": "C",
    "topic": "Software Metrics",
    "difficulty": "hard"
  },
  {
    "id": 949,
    "question": "Which one is not infrastructure software?",
    "options": [
      "Operating system",
      "Database management system",
      "Compilers",
      "Result management system"
    ],
    "correctAnswer": "D",
    "topic": "Software Types",
    "difficulty": "medium"
  },
  {
    "id": 950,
    "question": "How many stages are in COCOMO-II?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": "B",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 951,
    "question": "Which one is not a stage of COCOMO-II?",
    "options": [
      "Application Composition estimation model",
      "Early design estimation model",
      "Post architecture estimation model",
      "Comprehensive cost estimation model"
    ],
    "correctAnswer": "D",
    "topic": "Software Metrics",
    "difficulty": "medium"
  },
  {
    "id": 952,
    "question": "The most desirable form of coupling is",
    "options": [
      "Control",
      "Data",
      "Common",
      "Content"
    ],
    "correctAnswer": "B",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 953,
    "question": "The worst type of coupling is",
    "options": [
      "Content",
      "Common",
      "External",
      "Data coupling"
    ],
    "correctAnswer": "A",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 954,
    "question": "The most desirable form of cohesion is",
    "options": [
      "Logical cohesion",
      "Procedural cohesion",
      "Functional cohesion",
      "Temporal cohesion"
    ],
    "correctAnswer": "C",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 955,
    "question": "The worst type of cohesion is",
    "options": [
      "Temporal cohesion",
      "Coincidental cohesion",
      "Logical cohesion",
      "Sequential cohesion"
    ],
    "correctAnswer": "B",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 956,
    "question": "Which one is not a strategy for design?",
    "options": [
      "Bottom up design",
      "Top down design",
      "Embedded design",
      "Hybrid design"
    ],
    "correctAnswer": "C",
    "topic": "Software Design",
    "difficulty": "medium"
  },
  {
    "id": 957,
    "question": "Software testing is:",
    "options": [
      "The process of demonstrating that errors are not present",
      "The process of establishing confidence that a program does what it is supposed to do",
      "The process of executing a program to show it is working as per specifications",
      "The process of executing a program with the intent of finding errors"
    ],
    "correctAnswer": "D",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 958,
    "question": "Software mistakes during coding are known as:",
    "options": [
      "Failures",
      "Defects",
      "Bugs",
      "Errors"
    ],
    "correctAnswer": "C",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 959,
    "question": "Functional testing is known as:",
    "options": [
      "Structural testing",
      "Behavior testing",
      "Regression testing",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "Software Testing",
    "difficulty": "medium"
  },
  {
    "id": 960,
    "question": "The relationship of data elements in a module is called",
    "options": [
      "Coupling",
      "Cohesion",
      "Modularity",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 961,
    "question": "The extent to which different modules are dependent upon each other is called",
    "options": [
      "Coupling",
      "Cohesion",
      "Modularity",
      "Stability"
    ],
    "correctAnswer": "A",
    "topic": "Software Design Principles",
    "difficulty": "medium"
  },
  {
    "id": 962,
    "question": "A system that does not interact with external environment is called",
    "options": [
      "Closed system",
      "Logical system",
      "Open system",
      "Hierarchical system"
    ],
    "correctAnswer": "A",
    "topic": "System Types",
    "difficulty": "medium"
  },
  {
    "id": 963,
    "question": "Which one is not a phase of the \"bathtub curve\" of hardware reliability",
    "options": [
      "Burn-in",
      "Useful life",
      "Wear-out",
      "Test-out"
    ],
    "correctAnswer": "D",
    "topic": "Hardware Reliability",
    "difficulty": "medium"
  },
  {
    "id": 964,
    "question": "Software reliability is",
    "options": [
      "The probability of failure free operation of a program for a specified time in a specified environment",
      "The probability of failure of a program for a specified time in a specified environment",
      "The probability of success of a program for a specified time in any environment",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 965,
    "question": "Fault is",
    "options": [
      "Defect in the program",
      "Mistake in the program",
      "Error in the program",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 966,
    "question": "One fault may lead to",
    "options": [
      "One failure",
      "Two failures",
      "Many failures",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 967,
    "question": "Which 'time' unit is not used in reliability studies?",
    "options": [
      "Execution time",
      "Machine time",
      "Clock time",
      "Calendar time"
    ],
    "correctAnswer": "B",
    "topic": "Software Reliability",
    "difficulty": "medium"
  },
  {
    "id": 968,
    "question": "Failure occurrences can be represented as",
    "options": [
      "Time to failure",
      "Time interval between failures",
      "Failures experienced in a time interval",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Reliability",
    "difficulty": "medium"
  },
  {
    "id": 969,
    "question": "As the reliability increases, failure intensity",
    "options": [
      "decreases",
      "increases",
      "no effect",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Reliability",
    "difficulty": "medium"
  },
  {
    "id": 970,
    "question": "Maximum possible value of reliability is",
    "options": [
      "100",
      "10",
      "1",
      "0"
    ],
    "correctAnswer": "C",
    "topic": "Software Reliability",
    "difficulty": "medium"
  },
  {
    "id": 971,
    "question": "Minimum possible value of reliability is",
    "options": [
      "100",
      "10",
      "1",
      "0"
    ],
    "correctAnswer": "D",
    "topic": "Software Reliability",
    "difficulty": "medium"
  },
  {
    "id": 972,
    "question": "Software Quality is",
    "options": [
      "Conformance to requirements",
      "Fitness for the purpose",
      "Level of satisfaction",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 973,
    "question": "Defect rate is",
    "options": [
      "Number of defects per million lines of source code",
      "Number of defects per function point",
      "Number of defects per unit of size of software",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 974,
    "question": "How many product quality factors have been proposed in McCall quality model?",
    "options": [
      "2",
      "3",
      "11",
      "6"
    ],
    "correctAnswer": "C", // Note: Changed from "D" to "C" based on research on McCall model
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 975,
    "question": "Which one is not a product quality factor of McCall quality model?",
    "options": [
      "Product revision",
      "Product operation",
      "Product specification",
      "Product transition"
    ],
    "correctAnswer": "C",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 976,
    "question": "The second level of quality attributes in McCall quality model are termed as",
    "options": [
      "quality criteria",
      "quality factors",
      "quality guidelines",
      "quality specifications"
    ],
    "correctAnswer": "A",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 977,
    "question": "Which one is not a level in Boehm software quality model?",
    "options": [
      "Primary uses",
      "Intermediate constructs",
      "Primitive constructs",
      "Final constructs"
    ],
    "correctAnswer": "D",
    "topic": "Software Quality",
    "difficulty": "hard"
  },
  {
    "id": 978,
    "question": "Which one is not a software quality model?",
    "options": [
      "McCall model",
      "Boehm model",
      "ISO 9000",
      "ISO 9126"
    ],
    "correctAnswer": "C",
    "topic": "Software Quality",
    "difficulty": "medium"
  },
  {
    "id": 979,
    "question": "Basic execution time model was developed by",
    "options": [
      "Bev.Littlewood",
      "J.D.Musa",
      "R.Pressman",
      "Victor Baisili"
    ],
    "correctAnswer": "B", // Corrected from "D" to "B" based on research
    "topic": "Software Reliability",
    "difficulty": "hard"
  },
  {
    "id": 980,
    "question": "NHPP stands for",
    "options": [
      "Non Homogeneous Poisson Process",
      "Non Heterogeneous Poisson Process",
      "Non Homogeneous Poisson Product",
      "Non Heterogeneous Poisson Product"
    ],
    "correctAnswer": "A",
    "topic": "Software Reliability",
    "difficulty": "medium"
  },
  {
    "id": 981,
    "question": "In Basic execution time model, failure intensity is given by",
    "options": [
      "λ(µ)=λ0(1-µ²/V0)",
      "λ(µ)=λ0(1-µ/V0)",
      "λ(µ)=λ0(1-V0/µ²)",
      "λ(µ)=λ0(1- V0/µ)"
    ],
    "correctAnswer": "B",
    "topic": "Software Reliability",
    "difficulty": "hard"
  },
  {
    "id": 982,
    "question": "In Basic execution time model, additional number of failures required to achieve a failure intensity objective is expressed as",
    "options": [
      "0/λ0(λP - λF)",
      "0/λ0(λF – λP)",
      "λ0 0(λF – λP)",
      "λ0/0 (λP - λF)"
    ],
    "correctAnswer": "A",
    "topic": "Software Reliability",
    "difficulty": "hard"
  },
  {
    "id": 983,
    "question": "In Logarithmic Poisson execution model, 'θ' is known as",
    "options": [
      "Failure intensity function parameter",
      "Failure intensity decay parameter",
      "Failure intensity measurement",
      "Failure intensity increment parameter"
    ],
    "correctAnswer": "B",
    "topic": "Software Reliability",
    "difficulty": "hard"
  },
  {
    "id": 984,
    "question": "Failure intensity function of Logarithmic Poisson execution model is given as",
    "options": [
      "λ(µ)= λ0LN(-θµ)",
      "λ(µ)= λ0exp(θµ)",
      "λ(µ)= λ0exp(-θµ)",
      "λ(µ)= λ0log(-θµ)"
    ],
    "correctAnswer": "C",
    "topic": "Software Reliability",
    "difficulty": "hard"
  },
  {
    "id": 985,
    "question": "CMM level 1 has",
    "options": [
      "6 KPAs",
      "2 KPAs",
      "0 KPAs",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "Software Process",
    "difficulty": "medium"
  },
  {
    "id": 986,
    "question": "MTBF stands for",
    "options": [
      "Mean time between failure",
      "Maximum time between failures",
      "Minimum time between failures",
      "Many time between failures"
    ],
    "correctAnswer": "A",
    "topic": "Software Reliability",
    "difficulty": "easy"
  },
  {
    "id": 987,
    "question": "CMM model is a technique to",
    "options": [
      "Improve the software process",
      "Automatically develop the software",
      "Test the software",
      "All of the above"
    ],
    "correctAnswer": "A",
    "topic": "Software Process",
    "difficulty": "medium"
  },
  {
    "id": 988,
    "question": "Total numbers of maturing levels in CMM are",
    "options": [
      "1",
      "3",
      "5",
      "7"
    ],
    "correctAnswer": "C",
    "topic": "Software Process",
    "difficulty": "medium"
  }
]