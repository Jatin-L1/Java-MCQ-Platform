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
    id: 1,
    question: "Docker was first released in which year?",
    options: [
      "2010",
      "2013",
      "2015",
      "2018"
    ],
    correctAnswer: "B",
    explanation: "Docker was first released in 2013 as an open-source project.",
    topic: "Docker Fundamentals",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Docker is written in which programming language?",
    options: [
      "Python",
      "Ruby",
      "Go",
      "Java"
    ],
    correctAnswer: "C",
    explanation: "Docker is written in the Go programming language, which provides excellent performance and concurrency features.",
    topic: "Docker Fundamentals",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "Docker uses which type of virtualization?",
    options: [
      "Hardware virtualization",
      "OS-level virtualization",
      "Nested virtualization",
      "Full virtualization"
    ],
    correctAnswer: "B",
    explanation: "Docker uses OS-level virtualization, which allows containers to share the host operating system's kernel, making them lightweight and efficient.",
    topic: "Docker Architecture",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Which of the following is not an advantage of Docker?",
    options: [
      "No pre-allocation of RAM",
      "Light-weight",
      "Free built-in data backup",
      "Reusable images"
    ],
    correctAnswer: "C",
    explanation: "Docker does not provide free built-in data backup. While it offers many advantages like efficient resource usage and reusable images, backup solutions need to be implemented separately.",
    topic: "Docker Features",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Docker is not a good solution for applications requiring ______.",
    options: [
      "High CPU",
      "Rich GUI",
      "Network communication",
      "Cloud deployment"
    ],
    correctAnswer: "B",
    explanation: "Docker is not ideal for applications requiring rich graphical user interfaces (GUI) as containers are typically designed for headless, backend, or CLI-based applications.",
    topic: "Docker Use Cases",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "The component responsible for running containers and managing services is ______.",
    options: [
      "Docker Client",
      "Docker Host",
      "Docker Daemon",
      "Docker Image"
    ],
    correctAnswer: "C",
    explanation: "The Docker Daemon (dockerd) is the background service responsible for building, running, and managing Docker containers and services.",
    topic: "Docker Components",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "Docker registry that is publicly available is known as ______.",
    options: [
      "Docker Storage",
      "Docker Hub",
      "Docker Manager",
      "Docker Cloud"
    ],
    correctAnswer: "B",
    explanation: "Docker Hub is the public registry where Docker images are stored and shared. It's the default registry for Docker.",
    topic: "Docker Registry",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Docker images are ______.",
    options: [
      "Running applications",
      "Read-only templates",
      "Backup files",
      "Virtual machines"
    ],
    correctAnswer: "B",
    explanation: "Docker images are read-only templates that contain the application code, runtime, libraries, and dependencies needed to create containers.",
    topic: "Docker Images",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "Which command is used to download an image from Docker Hub?",
    options: [
      "docker fetch",
      "docker pull",
      "docker get",
      "docker image dl"
    ],
    correctAnswer: "B",
    explanation: "The 'docker pull' command is used to download Docker images from a registry like Docker Hub to your local machine.",
    topic: "Docker Commands",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "The Dockerfile instruction that specifies the base image is ______.",
    options: [
      "RUN",
      "FROM",
      "COPY",
      "CMD"
    ],
    correctAnswer: "B",
    explanation: "The FROM instruction in a Dockerfile specifies the base image upon which your Docker image will be built.",
    topic: "Dockerfile",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "Which Dockerfile instruction downloads files from the internet automatically?",
    options: [
      "COPY",
      "ADD",
      "FETCH",
      "LOAD"
    ],
    correctAnswer: "B",
    explanation: "The ADD instruction can download files from URLs and automatically extract compressed files, while COPY only copies local files.",
    topic: "Dockerfile",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "The difference between CMD and ENTRYPOINT is that ENTRYPOINT has ______.",
    options: [
      "Lower priority",
      "Higher priority",
      "No priority",
      "Same priority"
    ],
    correctAnswer: "B",
    explanation: "ENTRYPOINT has higher priority than CMD. ENTRYPOINT defines the main command that will always be executed, while CMD provides default arguments that can be overridden.",
    topic: "Dockerfile",
    difficulty: "hard"
  },
  {
    id: 13,
    question: "Docker Volume is ______.",
    options: [
      "A type of image",
      "A directory inside a container",
      "A backup file",
      "A networking tool"
    ],
    correctAnswer: "B",
    explanation: "A Docker volume is a directory or storage location that exists outside the container's filesystem, used for persistent data storage.",
    topic: "Docker Volumes",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "Which command lists all created Docker volumes?",
    options: [
      "docker volume show",
      "docker volume list",
      "docker volume ls",
      "docker volume info"
    ],
    correctAnswer: "C",
    explanation: "The 'docker volume ls' command lists all Docker volumes that have been created on your system.",
    topic: "Docker Commands",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "docker exec is used to ______.",
    options: [
      "Start a new container",
      "Create a new process inside a running container",
      "Stop a container",
      "Attach to the main process of a container"
    ],
    correctAnswer: "B",
    explanation: "The 'docker exec' command runs a new command or process in an already running container, without affecting the main container process.",
    topic: "Docker Commands",
    difficulty: "medium"
  }
]
