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
    "question": "What is an embedded system?",
    "options": [
      "A combination of hardware and software designed for general-purpose tasks",
      "A system embedded into a device to perform specific tasks",
      "A large-scale system managing multiple tasks simultaneously",
      "A system with minimal reliability and stability"
    ],
    "correctAnswer": "B",
    "topic": "Embedded Systems",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "question": "Which of the following is NOT a characteristic of embedded systems?",
    "options": [
      "Task-specific",
      "High cost",
      "Low power consumption",
      "Highly reliable"
    ],
    "correctAnswer": "B",
    "topic": "Embedded Systems",
    "difficulty": "easy"
  },
  {
    "id": 3,
    "question": "Embedded systems are commonly found in which of the following industries?",
    "options": [
      "Automotive",
      "Consumer electronics",
      "Medical devices",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Embedded Systems",
    "difficulty": "easy"
  },
  {
    "id": 4,
    "question": "What is a common feature of embedded processors?",
    "options": [
      "High power consumption",
      "Small size and low power",
      "Complex user interfaces",
      "Lack of stability"
    ],
    "correctAnswer": "B",
    "topic": "Embedded Systems",
    "difficulty": "medium"
  },
  {
    "id": 5,
    "question": "In the Von Neumann architecture, the data and instructions share the same:",
    "options": [
      "Memory",
      "CPU",
      "Input/Output devices",
      "Power source"
    ],
    "correctAnswer": "A",
    "topic": "Computer Architecture",
    "difficulty": "medium"
  },
  {
    "id": 6,
    "question": "What differentiates Harvard architecture from Von Neumann architecture?",
    "options": [
      "Single memory for data and instructions",
      "Separate memory for data and instructions",
      "Lower efficiency",
      "No use of microprocessors"
    ],
    "correctAnswer": "B",
    "topic": "Computer Architecture",
    "difficulty": "medium"
  },
  {
    "id": 7,
    "question": "Which of the following is an advantage of Harvard architecture?",
    "options": [
      "Simplified hardware",
      "Simultaneous access to data and instructions",
      "Low power consumption",
      "Reduced processing speed"
    ],
    "correctAnswer": "B",
    "topic": "Computer Architecture",
    "difficulty": "medium"
  },
  {
    "id": 8,
    "question": "What does ASIC stand for?",
    "options": [
      "Advanced Software Integration Circuit",
      "Application Specific Integrated Circuit",
      "Automated Signal Integration Circuit",
      "All System Integration Chip"
    ],
    "correctAnswer": "B",
    "topic": "Integrated Circuits",
    "difficulty": "easy"
  },
  {
    "id": 9,
    "question": "Which of the following is NOT a type of ASIC?",
    "options": [
      "Full Custom ASIC",
      "Semi-Custom ASIC",
      "Standard Cell ASIC",
      "Random Access ASIC"
    ],
    "correctAnswer": "D",
    "topic": "Integrated Circuits",
    "difficulty": "medium"
  },
  {
    "id": 10,
    "question": "What is a major application of ASICs in modern technology?",
    "options": [
      "Bitcoin mining",
      "Word processing software",
      "Basic arithmetic calculations",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "Integrated Circuits",
    "difficulty": "medium"
  },
  {
    "id": 11,
    "question": "Which communication interface is used for short-distance communication within an embedded system?",
    "options": [
      "I2C",
      "Ethernet",
      "Bluetooth",
      "Zigbee"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 12,
    "question": "Which protocol is widely used for connecting USB devices to computers?",
    "options": [
      "RS232",
      "I2C",
      "SPI",
      "USB"
    ],
    "correctAnswer": "D",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 13,
    "question": "What is the maximum theoretical data transfer speed of USB 3.2 Generation 2x2?",
    "options": [
      "480 Mbps",
      "5 Gbps",
      "20 Gbps",
      "40 Gbps"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 14,
    "question": "Which of the following is a key characteristic of real-time embedded systems?",
    "options": [
      "High latency",
      "Constant response",
      "Variable accuracy",
      "Minimal reliability"
    ],
    "correctAnswer": "B",
    "topic": "Real-Time Systems",
    "difficulty": "medium"
  },
  {
    "id": 15,
    "question": "Hard real-time systems are used in applications where:",
    "options": [
      "Occasional delays are acceptable",
      "Deadlines must always be met",
      "Cost is the primary concern",
      "Timing is irrelevant"
    ],
    "correctAnswer": "B",
    "topic": "Real-Time Systems",
    "difficulty": "medium"
  },
  {
    "id": 16,
    "question": "Which of these is an example of a hard real-time system?",
    "options": [
      "Music streaming app",
      "Airbag deployment system",
      "Online shopping cart",
      "Photo editing software"
    ],
    "correctAnswer": "B",
    "topic": "Real-Time Systems",
    "difficulty": "medium"
  },
  {
    "id": 17,
    "question": "Which scheduling algorithm assigns priorities based on task periods?",
    "options": [
      "Earliest Deadline First (EDF)",
      "Least Laxity First (LLF)",
      "Rate Monotonic Scheduling (RMS)",
      "Priority-based Scheduling"
    ],
    "correctAnswer": "C",
    "topic": "Real-Time Systems",
    "difficulty": "hard"
  },
  {
    "id": 18,
    "question": "What is the maximum data transfer speed of Zigbee?",
    "options": [
      "250 kbps",
      "1 Mbps",
      "3 Mbps",
      "20 Mbps"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 19,
    "question": "What topology does Zigbee primarily support?",
    "options": [
      "Star",
      "Ring",
      "Mesh",
      "Both A and C"
    ],
    "correctAnswer": "D",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 20,
    "question": "Bluetooth networks are commonly referred to as:",
    "options": [
      "Zigbee clusters",
      "Piconets",
      "Star networks",
      "Grid systems"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 21,
    "question": "Which of the following is NOT a characteristic of an embedded system?",
    "options": [
      "High efficiency",
      "Minimal user interface",
      "Designed for multitasking general-purpose operations",
      "Low power consumption"
    ],
    "correctAnswer": "C",
    "topic": "Embedded Systems",
    "difficulty": "easy"
  },
  {
    "id": 22,
    "question": "Embedded systems typically operate on:",
    "options": [
      "Unlimited power sources",
      "High-capacity batteries",
      "Low power consumption for energy efficiency",
      "Renewable energy only"
    ],
    "correctAnswer": "C",
    "topic": "Embedded Systems",
    "difficulty": "easy"
  },
  {
    "id": 23,
    "question": "The stability of an embedded system is critical for:",
    "options": [
      "Enhanced multitasking abilities",
      "Reliable long-term operations",
      "Ensuring the system can handle user interfaces",
      "Allowing power-intensive features"
    ],
    "correctAnswer": "B",
    "topic": "Embedded Systems",
    "difficulty": "medium"
  },
  {
    "id": 24,
    "question": "Embedded systems with high reliability are commonly used in:",
    "options": [
      "Basic household appliances",
      "Critical medical devices like pacemakers",
      "Entertainment systems",
      "Educational software"
    ],
    "correctAnswer": "B",
    "topic": "Embedded Systems",
    "difficulty": "easy"
  },
  {
    "id": 25,
    "question": "A unique feature of embedded systems compared to general-purpose computers is:",
    "options": [
      "Their ability to operate autonomously without complex user interfaces",
      "Their low production cost",
      "Unlimited power usage",
      "Compatibility with all external hardware"
    ],
    "correctAnswer": "A",
    "topic": "Embedded Systems",
    "difficulty": "medium"
  },
  {
    "id": 26,
    "question": "Which architecture uses a single bus for both data and instructions?",
    "options": [
      "Harvard",
      "Von Neumann",
      "Modified Harvard",
      "Multi-core architecture"
    ],
    "correctAnswer": "B",
    "topic": "Computer Architecture",
    "difficulty": "medium"
  },
  {
    "id": 27,
    "question": "What is the main disadvantage of Von Neumann architecture?",
    "options": [
      "High cost",
      "Slow processing due to shared data and instruction bus",
      "Incompatibility with embedded systems",
      "Complex hardware requirements"
    ],
    "correctAnswer": "B",
    "topic": "Computer Architecture",
    "difficulty": "medium"
  },
  {
    "id": 28,
    "question": "The Harvard architecture allows:",
    "options": [
      "Data and instructions to be fetched simultaneously",
      "A single memory for both instructions and data",
      "Slower execution of programs",
      "Time sharing between data and instruction access"
    ],
    "correctAnswer": "A",
    "topic": "Computer Architecture",
    "difficulty": "medium"
  },
  {
    "id": 29,
    "question": "In which type of architecture is memory divided into two separate modules for data and instructions?",
    "options": [
      "Harvard architecture",
      "RISC architecture",
      "Von Neumann architecture",
      "Parallel architecture"
    ],
    "correctAnswer": "A",
    "topic": "Computer Architecture",
    "difficulty": "medium"
  },
  {
    "id": 30,
    "question": "The main advantage of the Harvard architecture is its ability to:",
    "options": [
      "Execute complex tasks",
      "Perform parallel computations",
      "Fetch data and instructions simultaneously",
      "Use a single memory module"
    ],
    "correctAnswer": "C",
    "topic": "Computer Architecture",
    "difficulty": "medium"
  },
  {
    "id": 31,
    "question": "Which type of ASIC is most customizable?",
    "options": [
      "Semi-Custom ASIC",
      "Full Custom ASIC",
      "Programmable ASIC",
      "Standard Cell ASIC"
    ],
    "correctAnswer": "B",
    "topic": "Integrated Circuits",
    "difficulty": "medium"
  },
  {
    "id": 32,
    "question": "Semi-Custom ASICs include:",
    "options": [
      "FPGA",
      "Standard Cell and Gate Array ASICs",
      "ROM-based chips",
      "General-purpose processors"
    ],
    "correctAnswer": "B",
    "topic": "Integrated Circuits",
    "difficulty": "medium"
  },
  {
    "id": 33,
    "question": "What is the main advantage of Full Custom ASICs?",
    "options": [
      "Low cost",
      "High performance and low power consumption",
      "Rapid development time",
      "Flexibility for multiple uses"
    ],
    "correctAnswer": "B",
    "topic": "Integrated Circuits",
    "difficulty": "medium"
  },
  {
    "id": 34,
    "question": "Which type of ASIC is reprogrammable and commonly used for various applications?",
    "options": [
      "Gate Array ASIC",
      "FPGA",
      "Full Custom ASIC",
      "Standard Cell ASIC"
    ],
    "correctAnswer": "B",
    "topic": "Integrated Circuits",
    "difficulty": "medium"
  },
  {
    "id": 35,
    "question": "Gate Array ASICs allow customization at which level?",
    "options": [
      "Transistor level",
      "Interconnection level",
      "Software level",
      "Operating system level"
    ],
    "correctAnswer": "B",
    "topic": "Integrated Circuits",
    "difficulty": "hard"
  },
  {
    "id": 36,
    "question": "Which communication protocol is synchronous and multi-master capable?",
    "options": [
      "SPI",
      "I2C",
      "RS232",
      "USB"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 37,
    "question": "Which of the following protocols is used for point-to-point communication?",
    "options": [
      "I2C",
      "SPI",
      "RS232",
      "Zigbee"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 38,
    "question": "What is the main advantage of SPI over I2C?",
    "options": [
      "Higher speed and simplicity",
      "Reduced wiring complexity",
      "Longer communication range",
      "Better error handling"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 39,
    "question": "The maximum length for USB without a hub is:",
    "options": [
      "3 meters",
      "5 meters",
      "40 meters",
      "100 meters"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 40,
    "question": "Which protocol uses a piconet topology?",
    "options": [
      "Zigbee",
      "Bluetooth",
      "USB",
      "RS485"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 41,
    "question": "A soft real-time system allows:",
    "options": [
      "No deadline misses",
      "Occasional deadline misses",
      "No task prioritization",
      "Constant hardware updates"
    ],
    "correctAnswer": "B",
    "topic": "Real-Time Systems",
    "difficulty": "medium"
  },
  {
    "id": 42,
    "question": "Which type of scheduling is optimal for preemptive task sets?",
    "options": [
      "Rate Monotonic Scheduling",
      "Earliest Deadline First",
      "Priority-based Scheduling",
      "Least Laxity First"
    ],
    "correctAnswer": "B",
    "topic": "Real-Time Systems",
    "difficulty": "hard"
  },
  {
    "id": 43,
    "question": "What defines a firm real-time system?",
    "options": [
      "Strict deadlines with no flexibility",
      "Flexible deadlines without impact",
      "Deadlines where occasional misses degrade performance",
      "No deadlines required for tasks"
    ],
    "correctAnswer": "C",
    "topic": "Real-Time Systems",
    "difficulty": "medium"
  },
  {
    "id": 44,
    "question": "Which is an example of a hard real-time embedded system?",
    "options": [
      "Online gaming platform",
      "Missile control system",
      "Mobile messaging application",
      "Digital photography"
    ],
    "correctAnswer": "B",
    "topic": "Real-Time Systems",
    "difficulty": "easy"
  },
  {
    "id": 45,
    "question": "Which algorithm schedules tasks based on remaining execution time?",
    "options": [
      "Least Laxity First",
      "Earliest Deadline First",
      "Rate Monotonic Scheduling",
      "Priority-based Scheduling"
    ],
    "correctAnswer": "A",
    "topic": "Real-Time Systems",
    "difficulty": "hard"
  },
  {
    "id": 46,
    "question": "In a real-time system, what happens if a deadline is missed in a hard real-time system?",
    "options": [
      "It is acceptable as long as the next task meets its deadline",
      "It leads to catastrophic consequences",
      "The system adjusts the deadline dynamically",
      "The task is ignored without any consequences"
    ],
    "correctAnswer": "B",
    "topic": "Real-Time Systems",
    "difficulty": "medium"
  },
  {
    "id": 47,
    "question": "Which of the following real-time systems allows occasional deadline misses without catastrophic outcomes?",
    "options": [
      "Hard real-time systems",
      "Soft real-time systems",
      "Firm real-time systems",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "Real-Time Systems",
    "difficulty": "medium"
  },
  {
    "id": 48,
    "question": "What is a critical characteristic of an RTOS (Real-Time Operating System)?",
    "options": [
      "High computational overhead",
      "Task scheduler to ensure deadline adherence",
      "Extensive user interfaces",
      "No support for real-time constraints"
    ],
    "correctAnswer": "B",
    "topic": "Real-Time Systems",
    "difficulty": "medium"
  },
  {
    "id": 49,
    "question": "Examples of soft real-time systems include:",
    "options": [
      "Air traffic control systems",
      "Multimedia streaming services",
      "Pacemakers",
      "Missile guidance systems"
    ],
    "correctAnswer": "B",
    "topic": "Real-Time Systems",
    "difficulty": "easy"
  },
  {
    "id": 50,
    "question": "Which scheduling algorithm assigns the shortest periods to higher-priority tasks?",
    "options": [
      "Rate Monotonic Scheduling (RMS)",
      "Earliest Deadline First (EDF)",
      "Priority-based Scheduling",
      "First Come First Serve (FCFS)"
    ],
    "correctAnswer": "A",
    "topic": "Real-Time Systems",
    "difficulty": "hard"
  },
  {
    "id": 51,
    "question": "What is the primary use of RS485 over RS232?",
    "options": [
      "Higher speed",
      "Better noise immunity and longer distances",
      "Simplicity in design",
      "Lower power requirements"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 52,
    "question": "Which protocol supports multi-slave communication?",
    "options": [
      "SPI",
      "I2C",
      "RS232",
      "Ethernet"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 53,
    "question": "What is a key feature of Zigbee networks?",
    "options": [
      "Long-range, high-speed data transfer",
      "Low-power, short-range communication",
      "Complex user management",
      "Extensive wiring requirements"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 54,
    "question": "What is the main advantage of Bluetooth communication?",
    "options": [
      "Low cost and short-range wireless communication",
      "High speed and reliability over long distances",
      "Compatibility with Zigbee",
      "Use of multiple antennas"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 55,
    "question": "Zigbee is most suitable for:",
    "options": [
      "Video streaming",
      "Home automation",
      "High-speed internet access",
      "Industrial long-distance networking"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 56,
    "question": "Which protocol is based on a master-slave configuration?",
    "options": [
      "USB",
      "I2C",
      "Bluetooth",
      "RS485"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 57,
    "question": "The polling principle is used in which communication protocol?",
    "options": [
      "USB",
      "RS232",
      "SPI",
      "Zigbee"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "hard"
  },
  {
    "id": 58,
    "question": "The typical speed of RS232 is:",
    "options": [
      "480 Mbps",
      "20 kbps",
      "1 Mbps",
      "250 kbps"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 59,
    "question": "The architecture unit of a Bluetooth network is called:",
    "options": [
      "Zigbee mesh",
      "Piconet",
      "Star topology",
      "Scatternet"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 60,
    "question": "Which topology is used for Zigbee smart energy networks?",
    "options": [
      "Tree topology",
      "Star topology",
      "Ring topology",
      "Mesh topology"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 61,
    "question": "Scalability in embedded systems ensures:",
    "options": [
      "Fixed functionality without updates",
      "Easy future updates and enhancements",
      "Limited memory usage",
      "Reduced performance for multitasking"
    ],
    "correctAnswer": "B",
    "topic": "Embedded Systems Design",
    "difficulty": "medium"
  },
  {
    "id": 62,
    "question": "What is a major design consideration for embedded systems in mission-critical applications?",
    "options": [
      "Low cost",
      "Reliability and fault tolerance",
      "Complex user interfaces",
      "Extensive hardware resources"
    ],
    "correctAnswer": "B",
    "topic": "Embedded Systems Design",
    "difficulty": "medium"
  },
  {
    "id": 63,
    "question": "Security in embedded systems is crucial for:",
    "options": [
      "Preventing unauthorized access and data breaches",
      "Reducing system performance overhead",
      "Managing user preferences",
      "Eliminating hardware redundancy"
    ],
    "correctAnswer": "A",
    "topic": "Embedded Systems Security",
    "difficulty": "medium"
  },
  {
    "id": 64,
    "question": "Which power management technique is commonly used in embedded systems?",
    "options": [
      "Dynamic voltage scaling",
      "Constant power supply",
      "Overclocking processors",
      "Disabling sleep modes"
    ],
    "correctAnswer": "A",
    "topic": "Embedded Systems Design",
    "difficulty": "medium"
  },
  {
    "id": 65,
    "question": "Testing in embedded systems is crucial to:",
    "options": [
      "Ensure system reliability under real-time conditions",
      "Avoid hardware design validation",
      "Reduce manufacturing costs",
      "Eliminate user interface complexity"
    ],
    "correctAnswer": "A",
    "topic": "Embedded Systems Testing",
    "difficulty": "medium"
  },
  {
    "id": 66,
    "question": "Which of these is NOT an application of embedded systems?",
    "options": [
      "Automotive airbag systems",
      "Flight navigation systems",
      "Desktop software applications",
      "Home automation systems"
    ],
    "correctAnswer": "C",
    "topic": "Embedded Systems Applications",
    "difficulty": "easy"
  },
  {
    "id": 67,
    "question": "In industrial automation, embedded systems are used for:",
    "options": [
      "Entertainment purposes",
      "Process control and robotics",
      "Graphic design applications",
      "Social networking"
    ],
    "correctAnswer": "B",
    "topic": "Embedded Systems Applications",
    "difficulty": "easy"
  },
  {
    "id": 68,
    "question": "Which embedded system application is critical in medical devices?",
    "options": [
      "Air conditioning units",
      "Pacemakers",
      "Home lighting systems",
      "Video editing software"
    ],
    "correctAnswer": "B",
    "topic": "Embedded Systems Applications",
    "difficulty": "easy"
  },
  {
    "id": 69,
    "question": "Smartphones are an example of:",
    "options": [
      "Standalone embedded systems",
      "Networked embedded systems",
      "Mobile embedded systems",
      "Reactive embedded systems"
    ],
    "correctAnswer": "C",
    "topic": "Embedded Systems Applications",
    "difficulty": "medium"
  },
  {
    "id": 70,
    "question": "Which of the following uses a real-time embedded system?",
    "options": [
      "Digital cameras",
      "Heart rate monitors",
      "Smart thermostats",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Real-Time Systems",
    "difficulty": "medium"
  },
  {
    "id": 71,
    "question": "RS232 is primarily used for:",
    "options": [
      "High-speed wireless communication",
      "Serial communication between devices",
      "Ethernet-based networking",
      "Multi-master communication"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 72,
    "question": "What type of communication does RS232 support?",
    "options": [
      "Half-duplex",
      "Full-duplex",
      "Broadcast",
      "Multicast"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 73,
    "question": "The maximum standard speed of RS232 is:",
    "options": [
      "20 kbps",
      "100 Mbps",
      "250 kbps",
      "480 Mbps"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 74,
    "question": "Which pins are used for data transmission in RS232?",
    "options": [
      "RTS and CTS",
      "RX and TX",
      "GND and VCC",
      "SCL and SDA"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 75,
    "question": "What is a limitation of RS232 communication?",
    "options": [
      "Limited to two devices",
      "Low noise immunity",
      "Short communication distance",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 76,
    "question": "SPI communication is based on a:",
    "options": [
      "Master-slave architecture",
      "Peer-to-peer architecture",
      "Broadcast network",
      "Multi-master bus"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 77,
    "question": "How many wires does a basic SPI connection require?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 78,
    "question": "Which line in SPI is used for synchronization between master and slave devices?",
    "options": [
      "MOSI",
      "MISO",
      "SCK",
      "CS"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 79,
    "question": "In SPI, the role of the CS (Chip Select) line is to:",
    "options": [
      "Control data speed",
      "Indicate the end of communication",
      "Select the active slave device",
      "Initiate power management"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 80,
    "question": "What is the primary advantage of SPI over I2C?",
    "options": [
      "Longer communication range",
      "Higher speed and full-duplex communication",
      "Simpler wiring",
      "Multi-master support"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 81,
    "question": "I2C supports:",
    "options": [
      "Single master only",
      "Multi-master and multi-slave communication",
      "Broadcast only",
      "Full-duplex communication"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 82,
    "question": "How many lines are required for I2C communication?",
    "options": [
      "1",
      "2",
      "4",
      "6"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 83,
    "question": "The lines used in I2C communication are:",
    "options": [
      "SDA and SCL",
      "MOSI and MISO",
      "RX and TX",
      "D+ and D-"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 84,
    "question": "Which device generates the clock signal in I2C communication?",
    "options": [
      "Slave device",
      "Master device",
      "Intermediate device",
      "Both master and slave"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 85,
    "question": "I2C is most suitable for:",
    "options": [
      "Long-distance communication",
      "High-speed data transfer",
      "Onboard communication in embedded systems",
      "Wireless communication"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 86,
    "question": "Which of the following is a feature of USB communication?",
    "options": [
      "High speed and plug-and-play support",
      "Point-to-point communication only",
      "Multi-master configuration",
      "High latency"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 87,
    "question": "What is the data transfer speed of USB 2.0?",
    "options": [
      "1.5 Mbps",
      "12 Mbps",
      "480 Mbps",
      "5 Gbps"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 88,
    "question": "The differential pair in USB is responsible for:",
    "options": [
      "Power delivery",
      "Data transfer",
      "Clock synchronization",
      "Signal amplification"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 89,
    "question": "Which type of USB supports 20 Gbps data transfer speed?",
    "options": [
      "USB 3.2 Generation 2x2",
      "USB 2.0",
      "USB 1.1",
      "USB 3.0"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 90,
    "question": "What is the primary drawback of USB?",
    "options": [
      "Limited broadcast capability",
      "High cost",
      "Lack of compatibility with embedded systems",
      "No support for short-distance communication"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 91,
    "question": "Bluetooth operates in which frequency band?",
    "options": [
      "1 GHz to 2 GHz",
      "2.4 GHz to 2.485 GHz",
      "3 GHz to 4 GHz",
      "868 MHz"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 92,
    "question": "The basic network unit in Bluetooth is called a:",
    "options": [
      "Mesh network",
      "Piconet",
      "Star topology",
      "Cluster"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 93,
    "question": "Bluetooth is primarily designed for:",
    "options": [
      "Long-range high-speed communication",
      "Short-range voice and data communication",
      "Industrial automation",
      "Satellite communication"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 94,
    "question": "What is the transmission capacity of Bluetooth?",
    "options": [
      "720 kbps",
      "480 Mbps",
      "1 Mbps",
      "3 Mbps"
    ],
    "correctAnswer": "D",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 95,
    "question": "A group of interconnected Bluetooth piconets is called a:",
    "options": [
      "Scatternet",
      "Zigbee cluster",
      "Point-to-point network",
      "Star topology"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 96,
    "question": "Zigbee is based on which IEEE standard?",
    "options": [
      "IEEE 802.15.4",
      "IEEE 802.11",
      "IEEE 802.3",
      "IEEE 802.16"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 97,
    "question": "Zigbee is most suitable for:",
    "options": [
      "High-speed data transfer",
      "Long-distance networking",
      "Low-power, low-data rate applications",
      "Multi-master communication"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 98,
    "question": "Which topology is NOT supported by Zigbee?",
    "options": [
      "Star topology",
      "Ring topology",
      "Mesh topology",
      "Tree topology"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 99,
    "question": "The range of Zigbee communication is typically:",
    "options": [
      "10 meters",
      "75-100 meters",
      "1 km",
      "5 km"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 100,
    "question": "What is a major application of Zigbee?",
    "options": [
      "Medical imaging systems",
      "Home automation systems",
      "Real-time video streaming",
      "High-speed computing clusters"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 100,
    "question": "What is a major application of Zigbee?",
    "options": [
      "Medical imaging systems",
      "Home automation systems",
      "Real-time video streaming",
      "High-speed computing clusters"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 101,
    "question": "Which protocol uses clock pulses for synchronization in data transfer?",
    "options": [
      "RS232",
      "I2C",
      "Zigbee",
      "USB"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 102,
    "question": "In SPI communication, which pin is NOT used?",
    "options": [
      "MOSI",
      "MISO",
      "SCL",
      "SCK"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 103,
    "question": "RS232 can be classified as a type of:",
    "options": [
      "Parallel communication",
      "Serial communication",
      "Wireless communication",
      "Synchronous communication"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 104,
    "question": "What is the typical range of Bluetooth communication?",
    "options": [
      "10-100 meters",
      "1-10 kilometers",
      "75-100 meters",
      "1-2 meters"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 105,
    "question": "Which communication protocol is widely used in battery-powered IoT devices for low power consumption?",
    "options": [
      "USB",
      "SPI",
      "Zigbee",
      "RS232"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 106,
    "question": "What is the main purpose of the Start and Stop bits in RS232 communication?",
    "options": [
      "To identify data type",
      "To enable error correction",
      "To frame the data bytes for transmission",
      "To control data flow speed"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 107,
    "question": "Which of the following uses the polling mechanism for communication?",
    "options": [
      "Zigbee",
      "USB",
      "I2C",
      "Bluetooth"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 108,
    "question": "In I2C communication, the role of the master device is to:",
    "options": [
      "Respond to commands",
      "Generate clock pulses and initiate data transfer",
      "Act only as a transmitter",
      "Generate power supply for the bus"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 109,
    "question": "Which protocol operates at the highest speed among these?",
    "options": [
      "USB 3.2",
      "RS232",
      "Zigbee",
      "I2C"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 110,
    "question": "In Zigbee networks, which device coordinates the entire network?",
    "options": [
      "End device",
      "Router",
      "Coordinator",
      "Gateway"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 111,
    "question": "If you are designing a system to communicate with sensors on a short-range, low-power network, which protocol would you choose?",
    "options": [
      "USB",
      "Zigbee",
      "RS232",
      "SPI"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 112,
    "question": "A device needs to exchange data with multiple peripherals at high speed. Which protocol is most suitable?",
    "options": [
      "SPI",
      "RS232",
      "Zigbee",
      "Bluetooth"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 113,
    "question": "In a project requiring communication between multiple microcontrollers, which protocol would you recommend for simplicity and flexibility?",
    "options": [
      "RS232",
      "I2C",
      "Bluetooth",
      "USB"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 114,
    "question": "You need to transmit data over long distances with high noise immunity. Which protocol fits this requirement?",
    "options": [
      "SPI",
      "RS485 (based on RS232)",
      "USB 2.0",
      "Bluetooth"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 115,
    "question": "An IoT application requires short-range wireless communication for multiple devices. Which protocol is the best choice?",
    "options": [
      "RS232",
      "Zigbee",
      "I2C",
      "USB"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 116,
    "question": "Which protocol enables simultaneous bidirectional communication?",
    "options": [
      "USB",
      "I2C",
      "SPI",
      "RS232"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 117,
    "question": "In SPI communication, what does full-duplex mean?",
    "options": [
      "Data can be transmitted and received simultaneously",
      "Only one device communicates at a time",
      "Communication is half-duplex by default",
      "Multiple masters control the communication"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 118,
    "question": "What is the primary role of the SCL line in I2C communication?",
    "options": [
      "Sending data",
      "Receiving data",
      "Generating clock pulses",
      "Powering the bus"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 119,
    "question": "Which protocol is commonly used for real-time video or multimedia transmission?",
    "options": [
      "RS232",
      "USB",
      "Zigbee",
      "I2C"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 120,
    "question": "Which feature makes Bluetooth suitable for wearable devices?",
    "options": [
      "High-speed communication",
      "Short-range and low power consumption",
      "Complex configuration",
      "Multi-hop networking"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 121,
    "question": "What differentiates I2C from SPI?",
    "options": [
      "I2C is faster than SPI",
      "I2C requires fewer lines than SPI",
      "SPI supports longer distances than I2C",
      "SPI operates in multi-master mode by default"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 122,
    "question": "Zigbee is preferred over Bluetooth for:",
    "options": [
      "Long-distance and low-power communication",
      "High-speed file transfer",
      "Real-time gaming applications",
      "Video streaming"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 123,
    "question": "USB is a better choice than RS232 for:",
    "options": [
      "Long-distance communication",
      "High-speed data transfer and plug-and-play compatibility",
      "Low-cost applications",
      "Communication between microcontrollers"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 124,
    "question": "Bluetooth is more suitable than Zigbee when:",
    "options": [
      "High data transfer speeds are required",
      "Long-range communication is needed",
      "Energy consumption is critical",
      "Multi-device communication is required"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 125,
    "question": "I2C communication is limited in speed compared to SPI because:",
    "options": [
      "It uses only two lines",
      "It supports multiple masters",
      "It is half-duplex",
      "The clock line synchronization limits its speed"
    ],
    "correctAnswer": "D",
    "topic": "Communication Protocols",
    "difficulty": "hard"
  }
]