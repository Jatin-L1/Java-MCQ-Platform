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
  },
  {
    "id": 326,
    "question": "What is the primary function of an Arduino board?",
    "options": [
      "To act as a microprocessor",
      "To simplify the process of creating control systems",
      "To store large amounts of data",
      "To replace a computer entirely"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 327,
    "question": "Which of the following components is NOT typically found on an Arduino board?",
    "options": [
      "Microcontroller chip",
      "On-board power supply",
      "USB port for communication with PC",
      "High-end graphics processor"
    ],
    "correctAnswer": "D",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 328,
    "question": "What is the key advantage of using an Arduino board in system design?",
    "options": [
      "It eliminates the need for PCB design and implementation",
      "It is a high-performance computing platform",
      "It provides complex software libraries for AI development",
      "It automatically performs advanced signal processing tasks"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 329,
    "question": "What type of chip does the Arduino board typically contain?",
    "options": [
      "Digital signal processor",
      "Microcontroller chip",
      "Graphics processing unit",
      "Analog-to-digital converter"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 330,
    "question": "Which of the following is used to communicate between an Arduino board and a PC?",
    "options": [
      "Bluetooth",
      "Wi-Fi",
      "USB port",
      "Ethernet cable"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 331,
    "question": "Why does Arduino simplify control system creation?",
    "options": [
      "It provides ready-made software applications",
      "It offers an easy-to-use programming environment and hardware platform",
      "It allows for the creation of advanced algorithms",
      "It automatically generates circuit diagrams for you"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 332,
    "question": "Which Arduino board is considered the most used and documented?",
    "options": [
      "Mega",
      "LilyPad",
      "UNO",
      "Nano"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 333,
    "question": "The Mega Arduino board is designed for which type of projects?",
    "options": [
      "Simple, beginner-level projects",
      "More complex projects requiring additional I/O pins",
      "E-textiles and wearable projects",
      "Projects requiring compact size"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 334,
    "question": "What is the main feature of the Mega Arduino board?",
    "options": [
      "54 digital I/O pins and 16 analog inputs",
      "Small size for portability",
      "Compatibility with Bluetooth and Wi-Fi",
      "Integrated display for user interaction"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 335,
    "question": "Which Arduino board is designed for e-textiles and wearable projects?",
    "options": [
      "UNO",
      "Mega",
      "LilyPad",
      "Nano"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 336,
    "question": "What is the primary difference between the Nano and UNO boards?",
    "options": [
      "The Nano is more complex and has more I/O pins than the UNO",
      "The Nano is more compact and has similar functionality to the UNO",
      "The Nano is only for use in wearables",
      "The UNO has more I/O pins than the Nano"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 337,
    "question": "Which of the following is the microcontroller used in the Mega board?",
    "options": [
      "ATmega328",
      "ATmega2560",
      "ATmega32",
      "ATtiny85"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 338,
    "question": "What is a key feature of the LilyPad Arduino board?",
    "options": [
      "It can be sewn to fabric and connected to power supplies for wearable projects",
      "It is designed for large-scale industrial projects",
      "It has more digital and analog I/O pins than the Mega",
      "It supports high-speed data transfer via USB"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 339,
    "question": "Which Arduino board is most suitable for small, space-constrained projects?",
    "options": [
      "LilyPad",
      "Mega",
      "Nano",
      "UNO"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 340,
    "question": "How many digital I/O pins are available on the Arduino UNO?",
    "options": [
      "10",
      "12",
      "14",
      "16"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 341,
    "question": "How many of the digital pins on the Arduino UNO support PWM (Pulse Width Modulation)?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 342,
    "question": "Which of the following digital pins on the Arduino UNO supports PWM?",
    "options": [
      "Pin 2",
      "Pin 4",
      "Pin 6",
      "Pin 12"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 343,
    "question": "How many analog input pins are available on the Arduino UNO?",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 344,
    "question": "What is the range of analog input pins on the Arduino UNO?",
    "options": [
      "A0 to A5",
      "A0 to A7",
      "A1 to A6",
      "A2 to A8"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 345,
    "question": "Which of the following pins on the Arduino UNO is NOT a digital I/O pin?",
    "options": [
      "Pin 0",
      "Pin 5",
      "Pin 12",
      "Pin A4"
    ],
    "correctAnswer": "D",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 346,
    "question": "The analog pins on the Arduino UNO can accept what type of values?",
    "options": [
      "Only digital values",
      "Only PWM values",
      "Only analog voltage values",
      "Both digital and analog values"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 347,
    "question": "Which digital pins on the Arduino UNO are PWM pins?",
    "options": [
      "0, 2, 4, 6, 8, 10",
      "3, 5, 6, 9, 10, 11",
      "2, 4, 6, 8, 10, 12",
      "1, 3, 5, 7, 9, 11"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 348,
    "question": "What does the Reset Button on an Arduino board do?",
    "options": [
      "It restarts the Arduino board's power",
      "It restarts any code that is loaded to the Arduino board",
      "It resets the microcontroller's internal memory",
      "It turns the board on and off"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 349,
    "question": "What is the purpose of the AREF pin on an Arduino board?",
    "options": [
      "It connects to a power source for the board",
      "It is used to set an external reference voltage for analog signals",
      "It resets the Arduino board",
      "It acts as a digital input/output pin"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 350,
    "question": "How many Ground Pins are there on an Arduino board, and what is their function?",
    "options": [
      "One, used to provide power",
      "Two, used for digital inputs",
      "Several, all working the same to provide a common ground reference",
      "Only one, used for communication"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 351,
    "question": "Which pins on the Arduino board are used for Digital Input/Output?",
    "options": [
      "Pins A0 to A5",
      "Pins 0 to 13",
      "Pins 14 to 20",
      "Pins 1 to 6"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 352,
    "question": "What is the function of the PWM pins on the Arduino board?",
    "options": [
      "To provide a fixed voltage output",
      "To simulate analog output using pulse-width modulation",
      "To transmit data to other devices",
      "To connect to external analog sensors"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 353,
    "question": "What is the purpose of the USB Connection on an Arduino board?",
    "options": [
      "To power the Arduino board and upload sketches",
      "To connect external sensors to the board",
      "To transmit data wirelessly",
      "To provide a source of backup power"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 354,
    "question": "What do the TX/RX LEDs indicate on the Arduino board?",
    "options": [
      "Transmission and reception of data",
      "Power status of the board",
      "The voltage supplied to the board",
      "Error in the uploaded code"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 355,
    "question": "Which component on the Arduino board is considered the brains of the board and stores the programs?",
    "options": [
      "Power LED",
      "Voltage Regulator",
      "ATmega Microcontroller",
      "Reset Button"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 356,
    "question": "What does the Power LED Indicator on the Arduino board signify?",
    "options": [
      "The Arduino board is receiving power",
      "The board is actively running a program",
      "The board is in sleep mode",
      "There is an error in the code"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 357,
    "question": "What is the function of the Voltage Regulator on the Arduino board?",
    "options": [
      "It converts analog signals to digital",
      "It adjusts the voltage entering the Arduino board",
      "It supplies power to the connected peripherals",
      "It regulates the clock speed of the microcontroller"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 358,
    "question": "The DC Power Barrel Jack is used for what purpose?",
    "options": [
      "To connect the Arduino to external sensors",
      "To power the Arduino using an external power supply",
      "To upload code to the Arduino",
      "To provide data connections between devices"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 359,
    "question": "Which pin on the Arduino board supplies 3.3V of power?",
    "options": [
      "5V Pin",
      "DC Power Jack",
      "3.3V Pin",
      "Ground Pin"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 360,
    "question": "Which pin on the Arduino board supplies 5V of power?",
    "options": [
      "Ground Pin",
      "5V Pin",
      "3.3V Pin",
      "AREF Pin"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 361,
    "question": "What is the function of the Analog Pins on an Arduino board?",
    "options": [
      "To provide digital input and output",
      "To power external components",
      "To read signals from analog sensors and convert them to digital values",
      "To simulate PWM outputs"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 362,
    "question": "What is the purpose of the Reset Button on an Arduino board?",
    "options": [
      "To restart the Arduino board",
      "To reset the power supply",
      "To restart the uploaded program",
      "To power off the Arduino board"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 363,
    "question": "What does the AREF pin on an Arduino board stand for?",
    "options": [
      "Analog Reference",
      "Analog Reset",
      "Alternative Reference",
      "Analog Reset Enable"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 364,
    "question": "What is the function of the Ground Pin on an Arduino board?",
    "options": [
      "To supply power to the board",
      "To connect the board to an external voltage source",
      "To complete the electrical circuit by providing a reference ground",
      "To regulate the voltage input to the board"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 365,
    "question": "What is the function of the PWM pins on the Arduino board, marked with a (~) symbol?",
    "options": [
      "They are used to measure analog input signals",
      "They simulate analog output signals by modulating the pulse width",
      "They can only handle digital input signals",
      "They act as digital output pins only"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 366,
    "question": "What does the TX/RX section on the Arduino board indicate?",
    "options": [
      "The board's temperature and voltage levels",
      "The status of power supply to the board",
      "The transmission and reception of serial data",
      "The analog signal input/output status"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 367,
    "question": "Which component on the Arduino board is responsible for storing the program code?",
    "options": [
      "TX/RX Pins",
      "ATmega Microcontroller",
      "Voltage Regulator",
      "USB Connection"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 368,
    "question": "What does the Power LED Indicator on the Arduino board signify?",
    "options": [
      "The Arduino is receiving power from an external source",
      "The Arduino has completed uploading code",
      "The Arduino is in sleep mode",
      "The Arduino is receiving input from a sensor"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 369,
    "question": "What is the purpose of the Voltage Regulator on the Arduino board?",
    "options": [
      "To convert the digital signals to analog",
      "To control and regulate the amount of voltage going into the Arduino",
      "To increase the voltage output from the board",
      "To handle input-output communication between devices"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 370,
    "question": "What is the function of the DC Power Barrel Jack on the Arduino board?",
    "options": [
      "To provide a direct connection to the computer for programming",
      "To supply power to the Arduino board from an external power source",
      "To monitor and measure voltage levels",
      "To control the power output to connected sensors"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 371,
    "question": "The 3.3V Pin on the Arduino board supplies:",
    "options": [
      "5V of power to external devices",
      "3.3V of power to external devices",
      "Both 3.3V and 5V depending on the board version",
      "3.3V to power the Arduino itself"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 372,
    "question": "What is the 5V Pin on the Arduino board used for?",
    "options": [
      "To supply 5 volts to power external components or sensors",
      "To output 5 volts for voltage regulation",
      "To provide power for the ATmega Microcontroller",
      "To regulate the incoming USB voltage"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 373,
    "question": "How do the Analog Pins on the Arduino board function?",
    "options": [
      "They can output a digital signal based on input data",
      "They can read the signal from an analog sensor and convert it into a digital value",
      "They are used exclusively for controlling motors",
      "They handle serial communication between the board and external devices"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 374,
    "question": "What is the primary purpose of physical computing?",
    "options": [
      "To design interactive objects that communicate with humans",
      "To build software programs that simulate physical objects",
      "To create sensors that measure environmental conditions",
      "To manufacture hardware components for embedded systems"
    ],
    "correctAnswer": "A",
    "topic": "Physical Computing",
    "difficulty": "medium"
  },
  {
    "id": 375,
    "question": "Which of the following components is controlled by the software running on a microcontroller in a physical computing system?",
    "options": [
      "Actuators",
      "Sensors",
      "Outputs",
      "Both A and B"
    ],
    "correctAnswer": "D",
    "topic": "Physical Computing",
    "difficulty": "medium"
  },
  {
    "id": 376,
    "question": "In the context of physical computing, what role do actuators play?",
    "options": [
      "They convert physical signals into electrical signals",
      "They control the output based on sensor inputs",
      "They collect data from the environment",
      "They store and process data from sensors"
    ],
    "correctAnswer": "B",
    "topic": "Physical Computing",
    "difficulty": "medium"
  },
  {
    "id": 377,
    "question": "Which of the following is an example of an actuator used in physical computing systems?",
    "options": [
      "Temperature sensor",
      "Motor",
      "Light sensor",
      "Thermistor"
    ],
    "correctAnswer": "B",
    "topic": "Physical Computing",
    "difficulty": "easy"
  },
  {
    "id": 378,
    "question": "In a physical computing system, which component is responsible for receiving data from the environment?",
    "options": [
      "Actuator",
      "Sensor",
      "Microcontroller",
      "Output device"
    ],
    "correctAnswer": "B",
    "topic": "Physical Computing",
    "difficulty": "easy"
  },
  {
    "id": 379,
    "question": "Which of the following is an example of an output device in a physical computing system?",
    "options": [
      "Microphone",
      "Servo motor",
      "LED display",
      "Photocell"
    ],
    "correctAnswer": "C",
    "topic": "Physical Computing",
    "difficulty": "easy"
  },
  {
    "id": 380,
    "question": "What is the function of the microcontroller in a physical computing system?",
    "options": [
      "To provide power to the actuators",
      "To control sensors and actuators based on programmed behavior",
      "To collect environmental data",
      "To convert analog signals into digital format"
    ],
    "correctAnswer": "B",
    "topic": "Physical Computing",
    "difficulty": "medium"
  },
  {
    "id": 381,
    "question": "Which of the following is true about the interaction between inputs and outputs in a physical computing system?",
    "options": [
      "Inputs provide data that is processed to control outputs",
      "Outputs collect data from the environment",
      "Inputs directly control outputs without any processing",
      "Inputs and outputs are not connected in a physical computing system"
    ],
    "correctAnswer": "A",
    "topic": "Physical Computing",
    "difficulty": "medium"
  },
  {
    "id": 382,
    "question": "Which of the following best describes a sensor in the context of physical computing?",
    "options": [
      "A device that provides feedback based on user interaction",
      "A device that records and processes signals to control outputs",
      "A device that collects information from the physical world and sends it to the microcontroller",
      "A device that executes the behavior programmed into the microcontroller"
    ],
    "correctAnswer": "C",
    "topic": "Physical Computing",
    "difficulty": "medium"
  },
  {
    "id": 383,
    "question": "In a physical computing system, which part of the system typically interfaces with the human user?",
    "options": [
      "Sensors",
      "Actuators",
      "Software running on the microcontroller",
      "Input and output devices"
    ],
    "correctAnswer": "B",
    "topic": "Physical Computing",
    "difficulty": "medium"
  },
  {
    "id": 384,
    "question": "Which of the following is a main component of the general architecture of an AVR microcontroller?",
    "options": [
      "Analog and digital I/O pins",
      "Bluetooth module",
      "Wi-Fi chip",
      "Camera sensor"
    ],
    "correctAnswer": "A",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 385,
    "question": "In the AVR microcontroller architecture, which component is responsible for storing the program code?",
    "options": [
      "Analog I/O pins",
      "Flash memory",
      "USB port",
      "Power supply"
    ],
    "correctAnswer": "B",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 386,
    "question": "What function does the USB port serve in the AVR microcontroller system?",
    "options": [
      "Provides power to the microcontroller",
      "Allows serial communication between the microcontroller and external devices",
      "Stores program data",
      "Converts digital signals to analog signals"
    ],
    "correctAnswer": "B",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 387,
    "question": "What types of pins are integrated into the AVR microcontroller for interacting with external devices?",
    "options": [
      "Only digital pins",
      "Only analog pins",
      "Both analog and digital I/O pins",
      "Only power supply pins"
    ],
    "correctAnswer": "C",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 388,
    "question": "Where is the program code typically stored in an AVR microcontroller?",
    "options": [
      "In the RAM",
      "In the Flash memory",
      "In the I/O pins",
      "In the CPU registers"
    ],
    "correctAnswer": "B",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 389,
    "question": "Which of the following best describes the role of the analog and digital I/O pins in the AVR microcontroller?",
    "options": [
      "To connect the microcontroller to a power source",
      "To store the program code",
      "To facilitate communication with external devices and sensors",
      "To provide serial communication with the USB port"
    ],
    "correctAnswer": "C",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 390,
    "question": "Which of the following components is typically integrated within an AVR microcontroller to enable it to communicate with a computer?",
    "options": [
      "Flash memory",
      "USB port",
      "Voltage regulator",
      "Oscillator circuit"
    ],
    "correctAnswer": "B",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 391,
    "question": "What type of memory is typically used to store the program in an AVR microcontroller?",
    "options": [
      "ROM",
      "RAM",
      "Flash memory",
      "EEPROM"
    ],
    "correctAnswer": "C",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 392,
    "question": "Which of the following is NOT typically a function of the AVR microcontroller's USB port?",
    "options": [
      "Serial data transfer",
      "Program uploading",
      "Power supply",
      "Communication with external devices"
    ],
    "correctAnswer": "C",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 393,
    "question": "The AVR microcontroller is most commonly used in which of the following applications?",
    "options": [
      "High-performance computing systems",
      "Embedded systems and physical computing platforms",
      "Large-scale data storage systems",
      "Network routing and switching"
    ],
    "correctAnswer": "B",
    "topic": "Microcontrollers",
    "difficulty": "medium"
  },
  {
    "id": 394,
    "question": "What is the clock speed of the Arduino UNO (ATmega 328)?",
    "options": [
      "12.5 MHz",
      "16 MHz",
      "8 MHz",
      "32 MHz"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 395,
    "question": "How much Flash program memory is available on the Arduino UNO (ATmega 328)?",
    "options": [
      "2 KBytes",
      "16 KBytes",
      "32 KBytes",
      "64 KBytes"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 396,
    "question": "What is the size of SRAM available on the Arduino UNO (ATmega 328)?",
    "options": [
      "1 KByte",
      "2 KBytes",
      "4 KBytes",
      "8 KBytes"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 397,
    "question": "How many digital input/output pins are available on the Arduino UNO (ATmega 328)?",
    "options": [
      "6",
      "8",
      "14",
      "16"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 398,
    "question": "How many analog input pins are provided by the Arduino UNO (ATmega 328)?",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "easy"
  },
  {
    "id": 399,
    "question": "How many analog output pins (PWM) does the Arduino UNO (ATmega 328) have?",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 400,
    "question": "Which part of the memory on the Arduino UNO (ATmega 328) is used by the bootloader?",
    "options": [
      "2 KBytes",
      "16 KBytes",
      "32 KBytes",
      "0.5 KBytes"
    ],
    "correctAnswer": "D",
    "topic": "Arduino",
    "difficulty": "hard"
  },
  {
    "id": 401,
    "question": "What is the width of the Arduino UNO (ATmega 328) microcontroller?",
    "options": [
      "8-bit",
      "16-bit",
      "32-bit",
      "64-bit"
    ],
    "correctAnswer": "A",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 402,
    "question": "Which of the following is true about the Arduino UNO (ATmega 328) Flash program memory?",
    "options": [
      "It is completely available for user program storage",
      "0.5 KBytes of it is used by the bootloader",
      "It is used for storing the microcontroller's operating system",
      "It is used for dynamic data storage during program execution"
    ],
    "correctAnswer": "B",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 403,
    "question": "Which component in the Arduino UNO (ATmega 328) defines the processing speed of the microcontroller?",
    "options": [
      "SRAM",
      "Flash memory",
      "Clock speed",
      "Digital input pins"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 404,
    "question": "What happens when the Arduino board is powered ON?",
    "options": [
      "The main program starts running",
      "The microcontroller enters an infinite loop",
      "The setup() function is executed",
      "The board goes into sleep mode"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 405,
    "question": "What is the purpose of the setup() function in Arduino programming?",
    "options": [
      "It is used to execute code repeatedly during program execution",
      "It runs once at the beginning to initialize settings, such as pin modes",
      "It stores global variables",
      "It is used to turn off the Arduino board"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 406,
    "question": "What happens when you press the reset button on an Arduino board?",
    "options": [
      "The program stops running",
      "The board enters a power-saving mode",
      "The setup() function is called again",
      "The Arduino starts a new program from the bootloader"
    ],
    "correctAnswer": "C",
    "topic": "Arduino",
    "difficulty": "medium"
  },
  {
    "id": 407,
    "question": "Which type of variables are declared and initialized outside of functions and can be accessed globally in the Arduino program?",
    "options": [
      "Local variables",
      "Global variables",
      "Static variables",
      "Temporary variables"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 408,
    "question": "In Arduino, how is the loop() function used in the program?",
    "options": [
      "It initializes variables",
      "It runs once at the beginning",
      "It contains the main code and runs repeatedly after the setup() function",
      "It is used to reset the board"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 409,
    "question": "Which of the following statements is true about global variables in Arduino?",
    "options": [
      "Global variables can only be accessed inside the loop() function",
      "Global variables are declared outside of functions and can be accessed throughout the program",
      "Global variables must be initialized inside the setup() function",
      "Global variables are used only for storing data temporarily"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 410,
    "question": "When does the setup() function in an Arduino program get executed?",
    "options": [
      "Once every time the Arduino board is reset",
      "Continuously after the loop() function starts",
      "Only after the loop() function finishes",
      "Only when the Arduino is powered OFF and then ON again"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 411,
    "question": "How can you make a variable accessible throughout your Arduino program?",
    "options": [
      "Declare the variable inside the loop() function",
      "Declare the variable inside the setup() function",
      "Declare the variable outside of both setup() and loop()",
      "Declare the variable as a constant"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 412,
    "question": "What happens after the setup() function finishes executing in an Arduino program?",
    "options": [
      "The program halts and waits for the user to press reset",
      "The loop() function starts and runs repeatedly",
      "The Arduino enters sleep mode",
      "The program resets and re-executes from the setup() function"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 413,
    "question": "Which of the following statements is true about global variables in Arduino programming?",
    "options": [
      "They are only used to store sensor data",
      "They can be initialized within any function but are accessible only within that function",
      "They are stored in flash memory and cannot be changed during program execution",
      "They can be accessed from any function in the program"
    ],
    "correctAnswer": "D",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 414,
    "question": "Which of the following is a key feature of the text editor in the Arduino IDE?",
    "options": [
      "It compiles the code automatically",
      "It contains syntax highlighting and automatic indentation",
      "It provides a GUI for hardware design",
      "It automatically uploads the code to the Arduino board"
    ],
    "correctAnswer": "B",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 415,
    "question": "What is the role of the toolbar in the Arduino IDE?",
    "options": [
      "It allows for real-time debugging of the code",
      "It provides quick access to common functions like compiling, uploading, and opening files",
      "It stores and manages libraries used in the code",
      "It displays the data sent from the Arduino board"
    ],
    "correctAnswer": "B",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 416,
    "question": "Which of the following components in the Arduino IDE is responsible for displaying error messages and other outputs during compilation?",
    "options": [
      "Text editor",
      "Toolbar",
      "Text console",
      "Serial monitor"
    ],
    "correctAnswer": "C",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 417,
    "question": "What is the purpose of the compiler in the Arduino IDE?",
    "options": [
      "To upload the code to the Arduino board",
      "To check the syntax of the code",
      "To convert the written code into machine code that the microcontroller can execute",
      "To debug errors in the code"
    ],
    "correctAnswer": "C",
    "topic": "Arduino IDE",
    "difficulty": "medium"
  },
  {
    "id": 418,
    "question": "What function does the Serial Monitor serve in the Arduino IDE?",
    "options": [
      "It compiles the code before uploading",
      "It allows you to debug the program by displaying data sent to/from the Arduino over the COM serial port",
      "It manages the libraries used in the Arduino code",
      "It uploads the code to the Arduino board"
    ],
    "correctAnswer": "B",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 419,
    "question": "Which part of the Arduino IDE displays real-time data sent by the Arduino board through the COM serial port?",
    "options": [
      "Text editor",
      "Compiler",
      "Serial Monitor",
      "Text Console"
    ],
    "correctAnswer": "C",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 420,
    "question": "In the Arduino IDE, which component is used to check for errors or output information during the compilation process?",
    "options": [
      "Serial Monitor",
      "Text Console",
      "Compiler",
      "Toolbar"
    ],
    "correctAnswer": "B",
    "topic": "Arduino IDE",
    "difficulty": "medium"
  },
  {
    "id": 421,
    "question": "Which of the following is NOT a feature provided by the Arduino IDE?",
    "options": [
      "Text editor with syntax highlighting",
      "Integrated debugger",
      "Toolbar with common actions like upload and compile",
      "Serial Monitor for communication and debugging"
    ],
    "correctAnswer": "B",
    "topic": "Arduino IDE",
    "difficulty": "medium"
  },
  {
    "id": 422,
    "question": "What happens when you press the \"Upload\" button in the Arduino IDE?",
    "options": [
      "The code is compiled and uploaded to the Arduino board",
      "The Serial Monitor opens automatically",
      "The code is compiled but not uploaded",
      "The code is saved in the IDE's memory but not uploaded"
    ],
    "correctAnswer": "A",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 423,
    "question": "What is the primary function of the Serial Monitor in the Arduino IDE?",
    "options": [
      "To compile the code for the Arduino",
      "To monitor and debug data communication between the Arduino and the computer",
      "To change the settings of the Arduino board",
      "To provide an interface for writing and editing the code"
    ],
    "correctAnswer": "B",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 424,
    "question": "What type of programming language is used for writing programs in Arduino?",
    "options": [
      "Proprietary language",
      "Open source computer programming language",
      "Assembly language",
      "Visual programming language"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 425,
    "question": "The Arduino programming language is derived from which of the following languages?",
    "options": [
      "Python",
      "Java",
      "C/C++",
      "Pascal"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
    {
    "id": 426,
    "question": "Which of the following best describes the changes made to the C/C++ language in Arduino programming?",
    "options": [
      "The language remains identical to C/C++ with no changes",
      "There are slight simplifications and modifications to make it easier for hardware control",
      "The language is completely rewritten for embedded systems",
      "The language supports only high-level programming without hardware control"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 427,
    "question": "Which of the following data types is NOT typically used in Arduino programming?",
    "options": [
      "Integer",
      "Float",
      "Long",
      "String (with no limitations)"
    ],
    "correctAnswer": "D",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 428,
    "question": "Which of the following is an example of a control statement used in Arduino programming?",
    "options": [
      "println()",
      "if, switch/case, while, for",
      "delay()",
      "analogWrite()"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 429,
    "question": "What type of operators are included in the Arduino programming language?",
    "options": [
      "Logical and comparison operators",
      "Mathematical, logical, and comparison operators",
      "Only mathematical operators",
      "Only comparison operators"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 430,
    "question": "In Arduino programming, what is the term used to describe a program?",
    "options": [
      "Project",
      "Circuit",
      "Sketch",
      "Code Block"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 431,
    "question": "Which of the following is a characteristic of the Arduino programming language?",
    "options": [
      "It requires complex syntax for hardware interaction",
      "It is designed to offer simple access to I/O devices",
      "It only supports object-oriented programming",
      "It lacks support for data types like integers and floats"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 432,
    "question": "Which of the following is a common data type in Arduino programming?",
    "options": [
      "Byte",
      "Double",
      "Character",
      "String (only for fixed-size strings)"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 433,
    "question": "Which of the following is true about the Arduino programming environment?",
    "options": [
      "It exclusively uses assembly language for all operations",
      "It includes libraries and functions similar to those in classical programming languages",
      "It requires no external hardware to run",
      "It is a purely theoretical language with no practical application"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 434,
    "question": "What does the pinMode(pin, INPUT/OUTPUT) function do in Arduino programming?",
    "options": [
      "It sets the baud rate for serial communication",
      "It initializes a pin as an input or output",
      "It reads the state of a digital pin",
      "It sets the PWM value for a pin"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 435,
    "question": "What is the purpose of the Serial.begin(9600) function in Arduino?",
    "options": [
      "To initiate serial communication with a baud rate of 9600",
      "To set the speed of the Arduino's clock",
      "To turn on the serial monitor at 9600 Hz",
      "To send data to an external sensor"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 436,
    "question": "Which of the following baud rates is NOT supported by the Serial.begin() function in Arduino?",
    "options": [
      "9600",
      "115200",
      "57600",
      "12345"
    ],
    "correctAnswer": "D",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 437,
    "question": "What does the Serial.print(\" \") function do in the Arduino IDE?",
    "options": [
      "It prints text to the Arduino board",
      "It writes text to the serial monitor",
      "It prints text to the screen on the Arduino board",
      "It sends the text to a sensor for processing"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 438,
    "question": "Which of the following functions is used to set the state of a digital pin on the Arduino?",
    "options": [
      "analogWrite()",
      "pinMode()",
      "digitalWrite()",
      "digitalRead()"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 439,
    "question": "What does the digitalRead(pin) function do in Arduino?",
    "options": [
      "It sets a digital pin's state to HIGH or LOW",
      "It reads and returns the state of a digital pin",
      "It initializes a pin as either input or output",
      "It sends data through the serial port"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 440,
    "question": "Which function is used to read the value of an analog pin in Arduino?",
    "options": [
      "digitalRead()",
      "analogWrite()",
      "analogRead()",
      "pinMode()"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 441,
    "question": "What is the purpose of the analogWrite(pin, intValue) function in Arduino?",
    "options": [
      "To set an analog pin to HIGH or LOW",
      "To read an analog value from a pin",
      "To output a PWM (Pulse Width Modulation) value to a pin",
      "To turn off PWM output on an analog pin"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 442,
    "question": "What does the delay(milliseconds) function do in an Arduino program?",
    "options": [
      "It pauses the program for a specified amount of time (in milliseconds)",
      "It reads a value from the serial port after a delay",
      "It adjusts the speed of the microcontroller",
      "It waits for user input through the serial monitor"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 443,
    "question": "Which of the following functions would you use to wait for a specified period in an Arduino program?",
    "options": [
      "delay(milliseconds)",
      "wait(milliseconds)",
      "pause(milliseconds)",
      "sleep(milliseconds)"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 444,
    "question": "What is the purpose of the setup() function in an Arduino sketch?",
    "options": [
      "It runs continuously in a loop",
      "It is used to initialize variables, set pin modes, and start libraries",
      "It reads input from the serial monitor",
      "It handles analog signal processing"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 445,
    "question": "How many times does the setup() function run in an Arduino sketch?",
    "options": [
      "Once after each power-up or reset of the Arduino board",
      "Every time the loop() function is executed",
      "Continuously during the program's runtime",
      "Only when an error occurs in the loop() function"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 446,
    "question": "What is the main purpose of the loop() function in an Arduino sketch?",
    "options": [
      "To initialize the system's hardware components",
      "To read data from the serial monitor",
      "To run code repeatedly, allowing the program to respond and change dynamically",
      "To execute setup code only once"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 447,
    "question": "What happens after the setup() function finishes executing in an Arduino program?",
    "options": [
      "The program halts and waits for user input",
      "The loop() function begins and runs continuously",
      "The Arduino resets",
      "The program starts from the beginning of the setup() function"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 448,
    "question": "Which section of the Arduino sketch allows you to write code that runs repeatedly?",
    "options": [
      "setup()",
      "loop()",
      "initialize()",
      "main()"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 449,
    "question": "What is the relationship between the setup() and loop() functions in an Arduino sketch?",
    "options": [
      "The setup() function runs only once, while the loop() function runs repeatedly",
      "The setup() function runs continuously, while the loop() function runs only once",
      "Both functions run continuously in parallel",
      "The setup() function runs repeatedly after the loop() function finishes"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 450,
    "question": "In the bare minimum Arduino code, where do you typically initialize variables and configure pin modes?",
    "options": [
      "Inside the loop() function",
      "Inside the setup() function",
      "In a separate initialization function",
      "In the main() function"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 451,
    "question": "What is the purpose of the loop() function in an Arduino program?",
    "options": [
      "To set up the initial state of the program",
      "To initialize libraries",
      "To control the board and allow it to interact with hardware components continuously",
      "To exit the program after running once"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 452,
    "question": "Which of the following is true about the execution flow of an Arduino sketch?",
    "options": [
      "The setup() function runs continuously while the loop() function runs once",
      "The setup() function runs once, and then the loop() function runs repeatedly",
      "The loop() function runs once, and then the setup() function runs repeatedly",
      "Both setup() and loop() functions run together in parallel"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 453,
    "question": "What happens if the loop() function contains no code in an Arduino sketch?",
    "options": [
      "The program will not compile",
      "The program will execute the setup() function repeatedly",
      "The program will run but do nothing repeatedly",
      "The program will stop execution after setup() finishes"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 454,
    "question": "Which of the following data types in Arduino is used to store whole numbers?",
    "options": [
      "float",
      "int",
      "char",
      "String"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 455,
    "question": "Which data type would you use to store a value between 0 and 255?",
    "options": [
      "long",
      "byte",
      "short",
      "int"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 456,
    "question": "What is the difference between float and double in Arduino?",
    "options": [
      "float has a smaller range than double",
      "double has more decimal places of precision than float",
      "double uses less memory than float",
      "There is no difference between float and double"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 457,
    "question": "Which of the following data types would you use to store a single character such as 'A' or '1'?",
    "options": [
      "int",
      "char",
      "String",
      "bool"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 458,
    "question": "What is the range of values that a long variable can store in Arduino?",
    "options": [
      "-32,768 to 32,767",
      "-2,147,483,648 to 2,147,483,647",
      "0 to 255",
      "0 to 65,535"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 459,
    "question": "Which of the following data types represents a true/false value in Arduino programming?",
    "options": [
      "char",
      "bool",
      "int",
      "float"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 460,
    "question": "What is the maximum number of elements you can store in an array of int if it is defined as int numbers[5];?",
    "options": [
      "255",
      "32,767",
      "5",
      "0"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 461,
    "question": "Which data type in Arduino is used to store a string of characters?",
    "options": [
      "String",
      "char",
      "bool",
      "long"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 462,
    "question": "Which of the following data types can store decimal numbers in Arduino?",
    "options": [
      "int and long",
      "char and byte",
      "float and double",
      "bool and String"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 463,
    "question": "Which of the following is used to create a custom user-defined data type in Arduino?",
    "options": [
      "int",
      "char",
      "struct or class",
      "float"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 464,
    "question": "What is the range of values that a short variable can store in Arduino?",
    "options": [
      "-32,768 to 32,767",
      "0 to 255",
      "-2,147,483,648 to 2,147,483,647",
      "0 to 65,535"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 465,
    "question": "Which of the following best describes an array in Arduino programming?",
    "options": [
      "A single variable that can hold multiple values of the same type",
      "A variable that can store only one value at a time",
      "A class used to manage text data",
      "A data type used to store a single decimal number"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 466,
    "question": "What is the main advantage of using the String class in Arduino?",
    "options": [
      "It is used to store individual characters efficiently",
      "It allows for dynamic manipulation of text strings in your program",
      "It is faster than using arrays for storing text",
      "It automatically handles memory allocation for integers"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 467,
    "question": "What is the purpose of the bool data type in Arduino?",
    "options": [
      "To store integers",
      "To store floating-point numbers",
      "To store truth values (either true or false)",
      "To store characters"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 468,
    "question": "Which of the following data types uses 1 byte of memory in Arduino?",
    "options": [
      "long",
      "int",
      "byte",
      "double"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 469,
    "question": "What is the primary purpose of the Serial Monitor in Arduino?",
    "options": [
      "To program the Arduino board",
      "To send data from the Arduino to the computer and vice versa",
      "To control hardware devices",
      "To monitor CPU usage on the Arduino board"
    ],
    "correctAnswer": "B",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 470,
    "question": "Which of the following is true about the Serial.begin(baudRate) function in Arduino?",
    "options": [
      "It sets the baud rate for serial communication between the computer and the Arduino",
      "It sends data to the Serial Monitor at the specified baud rate",
      "It initializes the Serial Monitor at a fixed baud rate of 9600",
      "It sets the speed of the Arduino's clock"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 471,
    "question": "What does the Serial.print(data) function do in Arduino?",
    "options": [
      "Sends data followed by a newline character to the Serial Monitor",
      "Sends data to the Serial Monitor without a newline character",
      "Initializes the Serial Monitor at the default baud rate",
      "Reads data from the Serial Monitor"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 472,
    "question": "What is the purpose of the Serial.println(data) function?",
    "options": [
      "Sends data to the Serial Monitor and then prints a newline character",
      "Initializes serial communication at a baud rate",
      "Reads data from the Serial Monitor",
      "Checks the number of bytes available in the serial buffer"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 473,
    "question": "Which function in Arduino is used to check how many bytes are available to read from the serial buffer?",
    "options": [
      "Serial.print()",
      "Serial.read()",
      "Serial.available()",
      "Serial.println()"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 474,
    "question": "Which of the following is NOT a valid baud rate option for Serial.begin() in Arduino?",
    "options": [
      "9600",
      "115200",
      "14400",
      "1000000"
    ],
    "correctAnswer": "C",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 475,
    "question": "What happens when you use the Serial.read() function in Arduino?",
    "options": [
      "It writes data to the Serial Monitor",
      "It reads incoming data from the serial buffer",
      "It checks if there is data available in the serial buffer",
      "It sends data to the Arduino via the serial port"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  },
  {
    "id": 476,
    "question": "How can you send data from the computer to the Arduino using the Serial Monitor?",
    "options": [
      "By typing text in the input field and pressing Enter or clicking the \"Send\" button",
      "By connecting a serial cable to the computer",
      "By using the Serial.write() function in the sketch",
      "By uploading a sketch to the Arduino"
    ],
    "correctAnswer": "A",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 477,
    "question": "Which function would you use to initialize serial communication at a baud rate of 115200?",
    "options": [
      "Serial.begin(9600)",
      "Serial.begin(115200)",
      "Serial.start(115200)",
      "Serial.setBaud(115200)"
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 478,
    "question": "What will the following code do: Serial.print(\"Hello\")?",
    "options": [
      "Send the word \"Hello\" to the Serial Monitor, followed by a newline",
      "Send the word \"Hello\" to the Serial Monitor, without a newline",
      "Read the word \"Hello\" from the Serial Monitor",
      "Initialize serial communication with the word \"Hello\""
    ],
    "correctAnswer": "B",
    "topic": "Arduino Programming",
    "difficulty": "easy"
  },
  {
    "id": 479,
    "question": "What does the Serial Monitor display?",
    "options": [
      "Only the output of the Serial.print() function",
      "Data sent from the Arduino board via the serial port",
      "Only text data sent from the computer to the Arduino",
      "A live view of the Arduino board's memory usage"
    ],
    "correctAnswer": "B",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 480,
    "question": "Which of the following is a common use of the Serial Monitor in Arduino programming?",
    "options": [
      "To display sensor data",
      "To load sketches onto the Arduino board",
      "To store data in EEPROM",
      "To update the Arduino firmware"
    ],
    "correctAnswer": "A",
    "topic": "Arduino IDE",
    "difficulty": "easy"
  },
  {
    "id": 481,
    "question": "Which of the following functions is used to send binary data to the Serial Monitor?",
    "options": [
      "Serial.write()",
      "Serial.print()",
      "Serial.println()",
      "Serial.read()"
    ],
    "correctAnswer": "A",
    "topic": "Arduino Programming",
    "difficulty": "medium"
  }
]