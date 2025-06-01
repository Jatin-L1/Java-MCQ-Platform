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
  },
  {
    "id": 126,
    "question": "What is the primary component of a microcontroller?",
    "options": [
      "I/O devices only",
      "CPU, memory, and I/O peripherals",
      "Sensors and actuators",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "Microcontrollers",
    "difficulty": "easy"
  },
  {
    "id": 127,
    "question": "Which of the following technologies are used in the fabrication of microcontrollers?",
    "options": [
      "LSI and VLSI",
      "VHDL",
      "System-on-Chip",
      "CMOS only"
    ],
    "correctAnswer": "A",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 128,
    "question": "Microcontrollers are primarily used in which type of systems?",
    "options": [
      "General-purpose computing",
      "Embedded systems",
      "Server systems",
      "High-performance computing"
    ],
    "correctAnswer": "B",
    "topic": "Microcontrollers",
    "difficulty": "easy"
  },
  {
    "id": 129,
    "question": "What differentiates a microprocessor from a microcontroller?",
    "options": [
      "A microprocessor contains peripherals, while a microcontroller does not.",
      "A microcontroller contains peripherals and memory, while a microprocessor does not.",
      "Both are similar in functionality.",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 130,
    "question": "Which is NOT an application of a microcontroller?",
    "options": [
      "Washing machines",
      "Desktop PCs",
      "Robotics",
      "Smart devices"
    ],
    "correctAnswer": "B",
    "topic": "Microcontrollers",
    "difficulty": "easy"
  },
  {
    "id": 131,
    "question": "How many pins does the 8051 microcontroller have?",
    "options": [
      "20",
      "40",
      "24",
      "64"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 132,
    "question": "What is the purpose of Pin 40 in the 8051 microcontroller?",
    "options": [
      "Oscillator input",
      "Power supply",
      "Interrupt input",
      "Serial communication"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 133,
    "question": "Which port in the 8051 microcontroller is used for address and data multiplexing?",
    "options": [
      "Port 1",
      "Port 2",
      "Port 3",
      "Port 0"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 134,
    "question": "Pin 9 (RST) of 8051 microcontroller is active:",
    "options": [
      "High",
      "Low",
      "Bidirectional",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 135,
    "question": "Port 3 pins in 8051 microcontrollers are used for:",
    "options": [
      "General-purpose I/O only",
      "Special functions like serial communication and interrupts",
      "Power supply",
      "Address latch enable"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 136,
    "question": "How many addressing modes are there in the 8051 microcontroller?",
    "options": [
      "3",
      "5",
      "6",
      "8"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 137,
    "question": "Which addressing mode specifies the operand directly in the instruction?",
    "options": [
      "Immediate addressing mode",
      "Direct addressing mode",
      "Register indirect addressing mode",
      "Indexed addressing mode"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 138,
    "question": "What symbol is used for register indirect addressing?",
    "options": [
      "%",
      "@",
      "#",
      "&"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 139,
    "question": "In indexed addressing mode, the source operand is located in the:",
    "options": [
      "Accumulator",
      "Program memory",
      "RAM",
      "Stack memory"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 140,
    "question": "Which addressing mode allows efficient memory access for program instructions?",
    "options": [
      "Register addressing",
      "Indirect addressing",
      "Indexed addressing",
      "Immediate addressing"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 141,
    "question": "Which instruction transfers data from the accumulator to Port 1?",
    "options": [
      "MOV A, P1",
      "MOV P1, A",
      "ADD A, P1",
      "MOVX A, P1"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 142,
    "question": "The instruction MUL AB in the 8051 microcontroller:",
    "options": [
      "Multiplies two 16-bit numbers",
      "Multiplies two 8-bit numbers stored in A and B",
      "Adds two numbers",
      "Divides two numbers"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 143,
    "question": "How many arithmetic instructions are there in the 8051 instruction set?",
    "options": [
      "12",
      "24",
      "18",
      "30"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "hard"
  },
  {
    "id": 144,
    "question": "What does the instruction ADD A, R0 do?",
    "options": [
      "Adds the content of R0 to accumulator",
      "Transfers data from R0 to accumulator",
      "Multiplies the content of R0",
      "Subtracts R0 from accumulator"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 145,
    "question": "Which instruction swaps the nibbles in the accumulator?",
    "options": [
      "SWAP A",
      "RL A",
      "XCHG A",
      "NOP"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 146,
    "question": "How many modes are available in 8051 timers?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 147,
    "question": "What is the function of the TMOD register?",
    "options": [
      "Controls serial communication",
      "Selects timer modes",
      "Enables interrupts",
      "Stores data"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 148,
    "question": "Which register is used for serial communication in the 8051?",
    "options": [
      "TMOD",
      "TCON",
      "SCON",
      "PCON"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 149,
    "question": "What does the term \"baud rate\" refer to?",
    "options": [
      "Clock speed of the microcontroller",
      "Data transfer rate in serial communication",
      "Number of I/O pins",
      "Frequency of interrupts"
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 150,
    "question": "What is a full-duplex serial communication?",
    "options": [
      "Data can only be sent",
      "Data can only be received",
      "Data can be sent and received simultaneously",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 151,
    "question": "How many interrupts (including RESET) are available in 8051?",
    "options": [
      "3",
      "5",
      "6",
      "8"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 152,
    "question": "What is the purpose of the IE register in the 8051?",
    "options": [
      "Enable or disable specific interrupts",
      "Store vector addresses",
      "Configure serial ports",
      "Control timers"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 153,
    "question": "When an interrupt occurs, the 8051 microcontroller:",
    "options": [
      "Completes the current instruction",
      "Saves the program counter on the stack",
      "Jumps to the ISR",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 154,
    "question": "Which interrupt has the highest priority in the 8051?",
    "options": [
      "Timer 0",
      "External Interrupt 1",
      "RESET",
      "Serial Communication"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 155,
    "question": "What instruction is used to return from an ISR?",
    "options": [
      "RET",
      "RETI",
      "JMP",
      "END"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 156,
    "question": "Which of the following is an example of direct addressing mode?",
    "options": [
      "MOV A, #55H",
      "MOV A, 20H",
      "MOV @R0, A",
      "MOVC A, @A+DPTR"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 157,
    "question": "What does the instruction MOV A, #20H do?",
    "options": [
      "Moves the value at memory address 20H to accumulator",
      "Moves the immediate value 20H to accumulator",
      "Transfers data from Port 2 to accumulator",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 158,
    "question": "Which register is used in indexed addressing mode?",
    "options": [
      "Accumulator",
      "DPTR",
      "Program Counter",
      "R0"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 159,
    "question": "In register addressing mode, the operand is:",
    "options": [
      "A memory address",
      "An immediate value",
      "A specific register",
      "Indirectly accessed"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 160,
    "question": "What type of instruction is MOVX A, @DPTR?",
    "options": [
      "Register addressing",
      "Direct addressing",
      "External data memory addressing",
      "Indexed addressing"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 161,
    "question": "Which arithmetic instruction subtracts with borrow?",
    "options": [
      "SUB",
      "SUBB",
      "SUBX",
      "SBB"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 162,
    "question": "What is the result of the instruction MUL AB if A = 5 and B = 3?",
    "options": [
      "A = 15",
      "A = 8",
      "A = 5, B = 3",
      "A = 0"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 163,
    "question": "The DEC instruction in 8051:",
    "options": [
      "Increments a value by 1",
      "Decrements a value by 1",
      "Divides the accumulator by 2",
      "Multiplies two registers"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 164,
    "question": "Which of the following is NOT an arithmetic instruction in 8051?",
    "options": [
      "ADD",
      "ADDC",
      "INC",
      "ORL"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 165,
    "question": "The result of DIV AB is stored in:",
    "options": [
      "Accumulator (A)",
      "Register B",
      "Both A and B",
      "External RAM"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 166,
    "question": "Which logical instruction performs a bitwise AND operation?",
    "options": [
      "ANL",
      "ORL",
      "XRL",
      "SWAP"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 167,
    "question": "The instruction CPL A performs:",
    "options": [
      "Complements the accumulator",
      "Clears the accumulator",
      "Shifts the accumulator left",
      "No operation"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 168,
    "question": "What is the effect of the SWAP A instruction?",
    "options": [
      "Reverses the bits of the accumulator",
      "Exchanges the lower and upper nibbles of the accumulator",
      "Clears the accumulator",
      "Adds the accumulator and B register"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 169,
    "question": "Which instruction rotates the bits of the accumulator left?",
    "options": [
      "RL A",
      "RLC A",
      "RR A",
      "ORL A"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 170,
    "question": "Which of the following is a logical NOT operation in 8051?",
    "options": [
      "ANL",
      "ORL",
      "CPL",
      "XRL"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 171,
    "question": "What is the maximum count value for a 16-bit timer in the 8051?",
    "options": [
      "256",
      "1024",
      "65535",
      "32768"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 172,
    "question": "What does the instruction SETB TR0 do?",
    "options": [
      "Stops Timer 0",
      "Enables Timer 0",
      "Starts Timer 1",
      "Disables interrupts"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 173,
    "question": "Which register is used to configure timer modes in the 8051?",
    "options": [
      "TCON",
      "TMOD",
      "IE",
      "SCON"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 174,
    "question": "In Mode 2, the timer operates as:",
    "options": [
      "A 16-bit timer",
      "A 13-bit timer",
      "An 8-bit auto-reload timer",
      "A counter"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 175,
    "question": "Which bit in the TCON register indicates Timer 0 overflow?",
    "options": [
      "TF0",
      "TF1",
      "IE0",
      "IT1"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 176,
    "question": "What is the vector address for the Timer 1 interrupt in 8051?",
    "options": [
      "0013H",
      "0003H",
      "000BH",
      "001BH"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "hard"
  },
  {
    "id": 177,
    "question": "Which instruction is executed at the end of an ISR?",
    "options": [
      "JMP",
      "RET",
      "RETI",
      "MOV"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 178,
    "question": "What is the function of the IE register in interrupt handling?",
    "options": [
      "Sets interrupt priority",
      "Enables or disables specific interrupts",
      "Configures timer modes",
      "Stores vector table addresses"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 179,
    "question": "Which type of interrupt is triggered by external hardware?",
    "options": [
      "Software interrupt",
      "Hardware interrupt",
      "Reset interrupt",
      "Internal interrupt"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 180,
    "question": "What happens when an interrupt is triggered in 8051?",
    "options": [
      "The processor completes the current instruction.",
      "The program counter is saved on the stack.",
      "The ISR is executed.",
      "All of the above."
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 181,
    "question": "What is the baud rate determined by in the 8051?",
    "options": [
      "Timer configuration",
      "TCON register",
      "Oscillator frequency",
      "SCON register"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 182,
    "question": "Which register in 8051 holds serial data for transmission or reception?",
    "options": [
      "SCON",
      "SBUF",
      "PCON",
      "IE"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 183,
    "question": "How many modes of serial communication are supported by the 8051?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 184,
    "question": "In half-duplex communication:",
    "options": [
      "Data is sent and received simultaneously.",
      "Data is sent in one direction at a time.",
      "Data is always received first.",
      "None of the above."
    ],
    "correctAnswer": "B",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 185,
    "question": "What is the primary difference between synchronous and asynchronous communication?",
    "options": [
      "Synchronous uses a clock; asynchronous does not.",
      "Asynchronous is faster than synchronous.",
      "Synchronous communication is only for short distances.",
      "None of the above."
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 186,
    "question": "Which of the following instructions transfers data from the accumulator to Port 1?",
    "options": [
      "MOV A, P1",
      "MOV P1, A",
      "ADD A, P1",
      "MOVX A, P1"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 187,
    "question": "What does the instruction ADD A, R0 do?",
    "options": [
      "Adds the contents of R0 to the accumulator",
      "Transfers data from R0 to the accumulator",
      "Multiplies the contents of R0",
      "Subtracts R0 from the accumulator"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 188,
    "question": "What is the mnemonic for multiplication in the 8051 instruction set?",
    "options": [
      "MUL",
      "ADDC",
      "SUB",
      "DIV"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 189,
    "question": "How many opcodes are there in the arithmetic group of the 8051?",
    "options": [
      "12",
      "24",
      "18",
      "30"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "hard"
  },
  {
    "id": 190,
    "question": "What does the instruction INC A do?",
    "options": [
      "Increments the contents of the accumulator by 1",
      "Increments the value of the memory location pointed to by DPTR",
      "Adds an immediate value to the accumulator",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 191,
    "question": "How many modes are available in the 8051 timer?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 192,
    "question": "Which timer mode operates as a 16-bit timer?",
    "options": [
      "Mode 0",
      "Mode 1",
      "Mode 2",
      "Mode 3"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 193,
    "question": "What is the function of the TR1 bit in the TCON register?",
    "options": [
      "Starts Timer 0",
      "Starts Timer 1",
      "Enables external interrupts",
      "Clears Timer 1"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 194,
    "question": "Which register is used to set the baud rate in serial communication?",
    "options": [
      "SCON",
      "TMOD",
      "PCON",
      "IE"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 195,
    "question": "What is the default communication mode of the 8051 serial port?",
    "options": [
      "Mode 0",
      "Mode 1",
      "Mode 2",
      "Mode 3"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 196,
    "question": "How many interrupts (including RESET) are available in the 8051?",
    "options": [
      "3",
      "5",
      "6",
      "8"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 197,
    "question": "What happens when an interrupt is triggered in the 8051?",
    "options": [
      "The microcontroller completes the current instruction",
      "The program counter is pushed onto the stack",
      "The ISR executes",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 198,
    "question": "Which interrupt has the lowest priority in the 8051?",
    "options": [
      "Timer 0",
      "Serial communication",
      "External Interrupt 0",
      "Timer 1"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 199,
    "question": "What is the role of the EA bit in the IE register?",
    "options": [
      "Enables or disables all interrupts",
      "Clears the timer flags",
      "Sets the serial communication mode",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 200,
    "question": "What does the instruction RETI do?",
    "options": [
      "Returns from an ISR and restores the program counter",
      "Disables all interrupts",
      "Clears the timer overflow flag",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 201,
    "question": "Which logical operation performs an AND operation on the accumulator?",
    "options": [
      "ANL",
      "ORL",
      "XRL",
      "CPL"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 202,
    "question": "The CPL instruction complements the contents of which register?",
    "options": [
      "PSW",
      "PC",
      "Accumulator",
      "DPTR"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 203,
    "question": "Which instruction interchanges the nibbles of the accumulator?",
    "options": [
      "SWAP A",
      "RL A",
      "MOVC A",
      "XCHG A"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 204,
    "question": "What is the purpose of the XRL instruction in the 8051?",
    "options": [
      "Performs an XOR operation",
      "Performs a shift operation",
      "Rotates the accumulator",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 205,
    "question": "Which of the following instructions is a rotate instruction?",
    "options": [
      "RLC A",
      "XRL A",
      "ORL A",
      "ANL A"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 206,
    "question": "Which pin is used for resetting the 8051 microcontroller?",
    "options": [
      "Pin 31",
      "Pin 9",
      "Pin 20",
      "Pin 40"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 207,
    "question": "What is the function of Port 0 when external memory is connected?",
    "options": [
      "Address and data multiplexing",
      "Timer input",
      "General-purpose I/O",
      "Serial communication"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 208,
    "question": "Which port does not have internal pull-up resistors?",
    "options": [
      "Port 0",
      "Port 1",
      "Port 2",
      "Port 3"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 209,
    "question": "What is the function of the ALE pin in the 8051 microcontroller?",
    "options": [
      "Enables interrupts",
      "Provides the clock signal",
      "Latches the address/data signals",
      "Acts as a reset pin"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 210,
    "question": "Which pins are used to connect an external oscillator to the 8051 microcontroller?",
    "options": [
      "Pin 30 and 31",
      "Pin 18 and 19",
      "Pin 1 and 2",
      "Pin 39 and 40"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 211,
    "question": "Which register is used for indirect addressing in the 8051?",
    "options": [
      "R0 and R1",
      "DPTR",
      "PSW",
      "Accumulator"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 212,
    "question": "What type of addressing mode uses the instruction MOV A, #55H?",
    "options": [
      "Immediate addressing",
      "Direct addressing",
      "Indirect addressing",
      "Indexed addressing"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 213,
    "question": "Indexed addressing is primarily used to access:",
    "options": [
      "External data memory",
      "Program memory",
      "Stack memory",
      "Registers"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 214,
    "question": "Which instruction accesses program memory using the indexed addressing mode?",
    "options": [
      "MOVX A, @DPTR",
      "MOV A, R0",
      "MOVC A, @A+DPTR",
      "MOV @R1, A"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 215,
    "question": "What is the advantage of using indirect addressing?",
    "options": [
      "Requires fewer instructions",
      "Provides flexible data access",
      "Reduces program size",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 216,
    "question": "Which instruction is used to exchange data between the accumulator and a register?",
    "options": [
      "MOV A, R0",
      "XCH A, R0",
      "XRL A, R0",
      "ORL A, R0"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 217,
    "question": "What does the CJNE instruction do?",
    "options": [
      "Clears the accumulator",
      "Jumps if the two values are not equal",
      "Jumps unconditionally",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 218,
    "question": "Which instruction performs bitwise AND operation between the accumulator and a port?",
    "options": [
      "ANL A, P0",
      "ORL A, P0",
      "XRL A, P0",
      "ADD A, P0"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 219,
    "question": "How is the accumulator affected by the RR A instruction?",
    "options": [
      "It is rotated left by one bit",
      "It is rotated right by one bit",
      "It is cleared",
      "None of the above"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 220,
    "question": "Which of the following is NOT a valid data transfer instruction?",
    "options": [
      "MOV A, #55H",
      "MOVX A, @DPTR",
      "DIV AB",
      "XCH A, @R1"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 221,
    "question": "What is the role of the Interrupt Vector Table in the 8051?",
    "options": [
      "Stores the program counter",
      "Holds addresses of ISRs",
      "Configures interrupt priorities",
      "Saves the stack pointer"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 222,
    "question": "Which bit in the IE register must be set to enable all interrupts?",
    "options": [
      "EA",
      "ES",
      "EX0",
      "IT1"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 223,
    "question": "What happens to the program counter when an interrupt occurs?",
    "options": [
      "It resets to 0000H",
      "It is pushed onto the stack",
      "It jumps to the ISR address",
      "Both B and C"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 224,
    "question": "Which interrupt is associated with serial communication in the 8051?",
    "options": [
      "INT0",
      "INT1",
      "Timer 1",
      "RI/TI"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 225,
    "question": "What is the vector address for external interrupt 1 in the 8051?",
    "options": [
      "0003H",
      "000BH",
      "0013H",
      "001BH"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "hard"
  },
  {
    "id": 225,
    "question": "What is the vector address for external interrupt 1 in the 8051?",
    "options": [
      "0003H",
      "000BH",
      "0013H",
      "001BH"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "hard"
  },
  {
    "id": 226,
    "question": "In multiplication of two bytes in 8051 we must place another byte in",
    "options": [
      "A register",
      "B register",
      "D register",
      "E register"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 227,
    "question": "If {A} = 11H and {B}= 22H then, which program line will give multiplication in which product will be in A?",
    "options": [
      "MUL B,A",
      "MUL A,B",
      "MUL A,#11H",
      "MUL A,#22H"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 228,
    "question": "The operation associated with A,#FFH is",
    "options": [
      "[A] = FFH",
      "[A] = FFD",
      "[A] = 255 H",
      "None of the above"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 229,
    "question": "T0 and T1 of 8051 are how many bit wide registers?",
    "options": [
      "Four",
      "Sixteen",
      "Eight",
      "Twenty four"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 230,
    "question": "TMOD register is how many bit wide register?",
    "options": [
      "4",
      "8",
      "12",
      "16"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 231,
    "question": "Timer in 8051 is how many bit wide register?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 232,
    "question": "In the program line MOV DPTR,#00H what is initialized?",
    "options": [
      "Data pointer",
      "Stack pointer",
      "Program counter",
      "Status register"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 233,
    "question": "XRL A,#3FH is associated with which logical operation?",
    "options": [
      "AND",
      "OR",
      "EX-OR",
      "NOT"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 234,
    "question": "Microcontroller has how many timers?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 235,
    "question": "In TMOD register M1,M0 selects",
    "options": [
      "Timer mode operation",
      "Counter mode operation",
      "Power mode operation",
      "Clock mode operation"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 236,
    "question": "When timer/counter is used as a timer what is used as a source of frequency?",
    "options": [
      "External timer IC",
      "External counter IC",
      "External crystal to inbuilt oscillator",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 237,
    "question": "When the microcontroller executes some arithmetic operations, then the flag bits of which register are affected?",
    "options": [
      "PSW",
      "SP",
      "DPTR",
      "PC"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 238,
    "question": "TCON register is how many bit wide?",
    "options": [
      "16",
      "12",
      "04",
      "08"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 239,
    "question": "If the instruction PUSH is used to push data onto the stack then the stack pointer",
    "options": [
      "increases with every push",
      "decreases with every push",
      "increases & decreases with every push",
      "none of the mentioned"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 240,
    "question": "In byte by byte division the quotient is placed in",
    "options": [
      "Program counter",
      "B register",
      "A register",
      "Data pointer"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 241,
    "question": "INC R5 instruction affects",
    "options": [
      "CY flag",
      "AC flag",
      "OV flag",
      "None of the above"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 242,
    "question": "On power up, the 8051 uses which RAM locations for register R0-R7?",
    "options": [
      "00-2F",
      "00-07",
      "00-7F",
      "00-0F"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 243,
    "question": "The ORG directive is used to indicate the",
    "options": [
      "Ending address",
      "Data address",
      "Starting address",
      "Bus address"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 244,
    "question": "How many bytes of bit addressable memory is present in 8051 based microcontrollers?",
    "options": [
      "8 bytes",
      "32 bytes",
      "16 bytes",
      "128 bytes"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 245,
    "question": "The internal RAM memory of the 8051 is",
    "options": [
      "32 bytes",
      "64 bytes",
      "128 bytes",
      "256 bytes"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 246,
    "question": "The 8051 has how many 16-bit counter/timers?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 247,
    "question": "Data transfer from I/O to external data memory can only be done with which command?",
    "options": [
      "MOVC",
      "MOV",
      "MOVX",
      "MOV A"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 248,
    "question": "The 8051 can handle how many interrupt sources?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 249,
    "question": "MOV A, @ R1 will:",
    "options": [
      "copy R1 to the accumulator",
      "copy the accumulator to R1",
      "copy the contents of memory whose address is in R1 to the accumulator",
      "copy the accumulator to the contents of memory whose address is in R1"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 250,
    "question": "Which pin of port 3 has an alternative function as write control signal for external data memory?",
    "options": [
      "P3.8",
      "P3.3",
      "P3.6",
      "P3.1"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 251,
    "question": "Which operations are performed by the bit manipulating instructions of boolean processor?",
    "options": [
      "Complement bit",
      "Set bit",
      "Clear bit",
      "All of the above"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 252,
    "question": "Which register usually store the output generated by ALU in several arithmetic operations?",
    "options": [
      "Accumulator",
      "Special Function Register",
      "Timer Register",
      "Stack Pointer"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 253,
    "question": "Which general purpose register holds eight bit divisor and store the remainder especially after the execution of division operation?",
    "options": [
      "A-Register",
      "B-Register",
      "Registers R0 through R7",
      "All of the above"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 254,
    "question": "Which operations are performed by stack pointer during its incremental phase?",
    "options": [
      "Push",
      "Pop",
      "Return",
      "All of the above"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 255,
    "question": "Which bit/s play/s a significant role in the selection of a bank register of Program Status Word (PSW)?",
    "options": [
      "RS1",
      "RS0",
      "Both a & b",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 256,
    "question": "Which register bank is supposed to get selected if the values of register bank select bits RS1 & Rs0 are detected to be '0' & '1' respectively?",
    "options": [
      "Bank 0",
      "Bank 1",
      "Bank 2",
      "Bank 3"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 257,
    "question": "Which locations of 128 bytes on-chip additional RAM are generally reserved for special functions?",
    "options": [
      "80H to 0FFH",
      "70H to 0FFH",
      "90H to 0FFH",
      "60H to 0FFH"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 258,
    "question": "Which commands are used for addressing the off-chip data and associated codes respectively by data pointer?",
    "options": [
      "MOVX & MOVC",
      "MOVY & MOVB",
      "MOVZ & MOVA",
      "MOVC & MOVY"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 259,
    "question": "Which among the below stated registers does not belong to the category of special function registers?",
    "options": [
      "TCON & TMOD",
      "TH0 & TL0",
      "P0 & P1",
      "SP & PC"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 260,
    "question": "Which port does not represent quasi-bidirectional nature of I/O ports in accordance to the pin configuration of 8051 microcontroller?",
    "options": [
      "Port 0 (Pins 32-39)",
      "Port 1 (Pins 1-8)",
      "Port 2 (Pins 21-28)",
      "Port 3 (Pins 10-17)"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 261,
    "question": "What is the counting rate of a machine cycle in correlation to the oscillator frequency for timers?",
    "options": [
      "1 / 10",
      "1 / 12",
      "1 / 15",
      "1 / 20"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 262,
    "question": "Which special function register play an important role in the timer/counter mode selection process by allocating the bits in it?",
    "options": [
      "TMOD",
      "TCON",
      "SCON",
      "PCON"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 263,
    "question": "8051 has how many math registers?",
    "options": [
      "zero",
      "one",
      "two",
      "three"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 264,
    "question": "Which bit must be set in TCON register in order to start the 'Timer 0' while operating in 'Mode 0'?",
    "options": [
      "TR0",
      "TF0",
      "IT0",
      "IE0"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 265,
    "question": "The I/O ports that are used as address and data for external memory are:",
    "options": [
      "ports 1 and 2",
      "ports 1 and 3",
      "ports 0 and 2",
      "ports 0 and 3"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 266,
    "question": "Which of the following instructions will load the value 35H into the high byte of timer 0?",
    "options": [
      "MOV TH0,35H",
      "MOV TH0,#35H",
      "MOV T0,#35H",
      "MOV T0,35H"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 267,
    "question": "When we add two numbers the destination address must always be.",
    "options": [
      "some immediate data",
      "any register",
      "accumulator",
      "memory"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 268,
    "question": "If SUBB A,R4 is executed, then actually what operation is being applied?",
    "options": [
      "R4+A",
      "R4-A",
      "A-R4",
      "R4+A"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 269,
    "question": "In 8 bit signed number operations, OV flag is set to 1 if:",
    "options": [
      "a carry is generated from D7 bit",
      "a carry is generated from D3 bit",
      "a carry is generated from D7 or D3 bit",
      "a carry is generated from D7 or D6 bit"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "hard"
  },
  {
    "id": 270,
    "question": "Which instructions have no affect on the flags of PSW?",
    "options": [
      "ANL",
      "ORL",
      "XRL",
      "All of the mentioned"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 271,
    "question": "What is the clock source for the timers in 8051?",
    "options": [
      "Flip-flop",
      "crystal applied to the micro-controller",
      "oscillator circuit",
      "LC oscillators"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 272,
    "question": "What is the function of the TMOD register?",
    "options": [
      "TMOD register is used to set different timer's or counter's to their appropriate modes",
      "TMOD register is used to load the count of the timer",
      "Is the destination or the final register where the result is obtained after the operation of the timer",
      "Is used to interrupt the timer"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 273,
    "question": "Auto reload mode is allowed in which mode of the timer?",
    "options": [
      "Mode 0",
      "Mode 1",
      "Mode 2",
      "Mode 3"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 274,
    "question": "What steps are followed when we need to turn on any timer?",
    "options": [
      "load the count, start the timer, keep monitoring it, stop the timer",
      "load the TMOD register, load the count, start the timer, keep monitoring it, stop the timer",
      "load the TMOD register, start the timer, load the count, keep monitoring it, stop the timer",
      "none of the mentioned"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 275,
    "question": "TF1, TR1, TF0, TR0 bits are of which register?",
    "options": [
      "TMOD",
      "SCON",
      "TCON",
      "SMOD"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 276,
    "question": "Which devices are specifically being used for converting serial to parallel and from parallel to serial respectively?",
    "options": [
      "timers",
      "counters",
      "registers",
      "serial communication"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 277,
    "question": "What is the function of SCON register?",
    "options": [
      "to control SBUF registers",
      "to program the start bit, stop bit, and data bits of framing",
      "none of the mentioned",
      "to control the operation of SMOD register"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 278,
    "question": "Which pin of the external hardware is said to exhibit INT0 interrupt?",
    "options": [
      "pin no 10",
      "pin no 11",
      "pin no 12",
      "pin no 13"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 279,
    "question": "8051 microcontroller is of",
    "options": [
      "8 bit",
      "16 bit",
      "32 bit",
      "64 bit"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 280,
    "question": "The 8051 supports",
    "options": [
      "unsigned 8-bit numbers",
      "signed 8-bit numbers",
      "both (a) & (b)",
      "none of the above"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 281,
    "question": "MOV A,R4 is an example for which addressing mode?",
    "options": [
      "direct",
      "indirect",
      "register",
      "implicit"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 282,
    "question": "8051 is a what kind of microcontroller?",
    "options": [
      "bit-addressable",
      "byte addressable",
      "both a & b",
      "none of the above"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 283,
    "question": "The bits RS0 and RS1 in PSW register selects",
    "options": [
      "timer mode",
      "counter mode",
      "register bank",
      "bit addresses"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 284,
    "question": "What changes are to be made to send data to an LCD?",
    "options": [
      "set the R/W bit",
      "set the E bit",
      "set the RS bit",
      "all of the mentioned"
    ],
    "correctAnswer": "D",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 285,
    "question": "What are DPDT relays?",
    "options": [
      "Single pole, single throw",
      "Single pole, double throw",
      "Double pole, double throw",
      "None of the mentioned"
    ],
    "correctAnswer": "C",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 286,
    "question": "When data is transmitted one way at a time then it is called as",
    "options": [
      "simplex",
      "duplex",
      "Half duplex",
      "full duplex"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 287,
    "question": "In LCD pin RS is used for",
    "options": [
      "Selection of Command Register",
      "Selection of Data Register",
      "Selection of Command and Data Register",
      "None of the above"
    ],
    "correctAnswer": "C",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 288,
    "question": "How many rows and columns are present in a 16*2 alphanumeric LCD?",
    "options": [
      "rows=2, columns=32",
      "rows=16, columns=2",
      "rows=16, columns=16",
      "rows=2, columns=16"
    ],
    "correctAnswer": "D",
    "topic": "Interfacing",
    "difficulty": "easy"
  },
  {
    "id": 289,
    "question": "How many data lines are there in a 16*2 alphanumeric LCD?",
    "options": [
      "16",
      "8",
      "1",
      "0"
    ],
    "correctAnswer": "B",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 290,
    "question": "Which pin of the LCD is used for adjusting its contrast?",
    "options": [
      "pin no 1",
      "pin no 2",
      "pin no 3",
      "pin no 4"
    ],
    "correctAnswer": "C",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 291,
    "question": "In Which of the mode timer can operate in the 16 bit condition?",
    "options": [
      "mode 0",
      "mode1",
      "mode2",
      "all of the mentioned"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 292,
    "question": "Bit PX1 in IP register of 8051 is used as",
    "options": [
      "External Interrupt 0 bit",
      "External Interrupt 1 bit",
      "Timer 0 interrupt bit",
      "Timer 2 interrupt bit"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 293,
    "question": "Buffers are used in interfacing a relay with microcontroller 8051, because",
    "options": [
      "Current at microcontroller pin is very low",
      "Current at microcontroller pin is very high",
      "Buffer is compatible with microcontroller",
      "Buffers excites the voltages required for relay"
    ],
    "correctAnswer": "A",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 294,
    "question": "Which out of the four ports of 8051 needs a pull-up resistor for using it is as an input or an output port?",
    "options": [
      "PORT 0",
      "PORT 1",
      "PORT 2",
      "PORT 3"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 295,
    "question": "Which addressing mode is used in pushing or popping any element on or from the stack?",
    "options": [
      "immediate",
      "direct",
      "indirect",
      "register"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 296,
    "question": "How does the processor respond to an occurrence of the interrupt?",
    "options": [
      "By Interrupt Service Subroutine",
      "By Interrupt Status Subroutine",
      "By Interrupt Structure Subroutine",
      "By Interrupt System Subroutine"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 297,
    "question": "Which of the following statements are true about DAC0808?",
    "options": [
      "parallel digital data to analog data conversion",
      "it has current as an output",
      "all of the mentioned",
      "none of the mentioned"
    ],
    "correctAnswer": "C",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 298,
    "question": "What is the principle on which electromagnetic relays operate?",
    "options": [
      "electromagnetic induction",
      "motor control",
      "switching",
      "none of the mentioned"
    ],
    "correctAnswer": "A",
    "topic": "Interfacing",
    "difficulty": "easy"
  },
  {
    "id": 299,
    "question": "How can we control the speed of a stepper motor?",
    "options": [
      "by controlling its switching rate",
      "by controlling its torque",
      "by controlling its wave drive 4 step sequence",
      "cant be controlled"
    ],
    "correctAnswer": "A",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 300,
    "question": "Which pin of LCD is used to latch information presented at input pins?",
    "options": [
      "VEE",
      "W",
      "RS",
      "E"
    ],
    "correctAnswer": "D",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 301,
    "question": "The rotor of a stepper motor has no",
    "options": [
      "Windings",
      "Commutator",
      "Brushes",
      "All of the mentioned"
    ],
    "correctAnswer": "D",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 302,
    "question": "A stepping motor is a what kind of device?",
    "options": [
      "Mechanical",
      "Electrical",
      "Analogue",
      "Incremental"
    ],
    "correctAnswer": "D",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 303,
    "question": "The rotational speed of a given stepper motor is determined solely by the",
    "options": [
      "Shaft load",
      "Step pulse frequency",
      "Polarity of stator current",
      "Magnitude of stator current"
    ],
    "correctAnswer": "B",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 304,
    "question": "The main function of MODEM is",
    "options": [
      "Conversion of Audio tones to 1 and 0",
      "transfering data to microprocessor",
      "controlling the bits",
      "read/write data"
    ],
    "correctAnswer": "A",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 305,
    "question": "In 8051 Microcontroller Program Counter (PC) is how many bit register?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 306,
    "question": "An ALP is saved with which extension filename?",
    "options": [
      "myprogram.asm",
      "myprogram.obj",
      "myprogram.lst",
      "myprogram.hex"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 307,
    "question": "The number of bits transmitted or received per second is defined as",
    "options": [
      "transmission rate",
      "reception rate",
      "transceiver rate",
      "baud rate"
    ],
    "correctAnswer": "D",
    "topic": "Communication Protocols",
    "difficulty": "easy"
  },
  {
    "id": 308,
    "question": "If M1=0 and M0=1 in TMOD Register, the mode operation will be",
    "options": [
      "Mode 0",
      "Mode 1",
      "Mode 2",
      "Mode 3"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 309,
    "question": "The RETURN line comes from what in interfacing SWITCH with 8051?",
    "options": [
      "interrupt of 8051",
      "input port of 8051",
      "output port of 8051",
      "External pin of 8051"
    ],
    "correctAnswer": "B",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 310,
    "question": "The SCAN line comes from what in interfacing SWITCH with 8051?",
    "options": [
      "interrupt of 8051",
      "input port of 8051",
      "output port of 8051",
      "External pin of 8051"
    ],
    "correctAnswer": "C",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 311,
    "question": "The task of converting the byte into serial form and transmitting it bit by bit along with start, stop and parity bits is carried out by",
    "options": [
      "reception unit",
      "serial communication unit",
      "transmission unit",
      "all of the mentioned"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 312,
    "question": "Auto reload mode is allowed in which mode of the timer?",
    "options": [
      "Mode 0",
      "Mode 1",
      "Mode 2",
      "Mode 3"
    ],
    "correctAnswer": "C",
    "topic": "8051 Microcontroller",
    "difficulty": "medium"
  },
  {
    "id": 313,
    "question": "The full form of LCD is",
    "options": [
      "Liquid Crystal Display",
      "Liquid Crystalline Display",
      "Logical Crystal Display",
      "Logical Crystalline Display"
    ],
    "correctAnswer": "A",
    "topic": "Interfacing",
    "difficulty": "easy"
  },
  {
    "id": 314,
    "question": "The CTS pin of RS 232 is used for",
    "options": [
      "Data Carrier detect",
      "ring indicator",
      "clear to send",
      "request to send"
    ],
    "correctAnswer": "C",
    "topic": "Communication Protocols",
    "difficulty": "medium"
  },
  {
    "id": 315,
    "question": "How many pins are there in 8051 microcontroller?",
    "options": [
      "20",
      "40",
      "60",
      "80"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 316,
    "question": "In a Flow chart which shape states Process operation?",
    "options": [
      "Parallelogram",
      "Rectangle",
      "Double sided Rectangle",
      "Oval"
    ],
    "correctAnswer": "B",
    "topic": "Programming Basics",
    "difficulty": "easy"
  },
  {
    "id": 317,
    "question": "The correct method of interfacing a LED to microcontroller is to connect the",
    "options": [
      "anode of LED to Vcc (power) without resistor",
      "cathode of LED to Vcc (power) through resistor",
      "cathode of LED to Vcc (power) without resistor",
      "anode of LED to Vcc (power) through resistor"
    ],
    "correctAnswer": "D",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 318,
    "question": "DAC 0808 is how many Pin IC available in DIP Plastic package?",
    "options": [
      "8",
      "16",
      "20",
      "40"
    ],
    "correctAnswer": "B",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 319,
    "question": "8051 has how many Bytes of internal ROM?",
    "options": [
      "2K",
      "4K",
      "6K",
      "8K"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 320,
    "question": "ADC 0808 is how many Pin IC available in DIP Plastic package?",
    "options": [
      "8",
      "16",
      "20",
      "28"
    ],
    "correctAnswer": "D",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 321,
    "question": "ADC0808, is what kind of A to D converter?",
    "options": [
      "2 bit",
      "4 bit",
      "8 bit",
      "16 bit"
    ],
    "correctAnswer": "C",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 322,
    "question": "DAC0808, has what kind of D to A converter?",
    "options": [
      "2 bit",
      "4 bit",
      "8 bit",
      "16 bit"
    ],
    "correctAnswer": "C",
    "topic": "Interfacing",
    "difficulty": "medium"
  },
  {
    "id": 323,
    "question": "DPTR is a how many bit wide register?",
    "options": [
      "8 bit",
      "16 bit",
      "32 bit",
      "64 bit"
    ],
    "correctAnswer": "B",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 324,
    "question": "The registers R0-R7 are all how many bit register?",
    "options": [
      "8 bit",
      "16 bit",
      "32 bit",
      "64 bit"
    ],
    "correctAnswer": "A",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  },
  {
    "id": 325,
    "question": "The pins XTAL1 and XTAL2 are used to form an",
    "options": [
      "generator",
      "selector",
      "vibrator",
      "oscillator"
    ],
    "correctAnswer": "D",
    "topic": "8051 Microcontroller",
    "difficulty": "easy"
  }
]