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
    question: "What is cloud computing?",
    options: ["Using offline storage", "Using internet-based servers", "Using only hardware", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Which is an example of cloud storage?",
    options: ["RAM", "Google Drive", "CPU", "Cache"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "Which layer interacts with users?",
    options: ["Backend", "Frontend", "Network", "Storage"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Public cloud is:",
    options: ["Private", "Shared by everyone", "Offline", "Personal"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "Private cloud is used by:",
    options: ["Everyone", "One organization", "Government only", "Students"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Hybrid cloud is:",
    options: ["Only public", "Only private", "Mix of both", "None"],
    correctAnswer: "C",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "IaaS provides:",
    options: ["Software", "Infrastructure", "Only storage", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "SaaS means:",
    options: ["Software as a Service", "Storage as a Service", "System as a Service", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "Example of SaaS:",
    options: ["Gmail", "EC2", "Docker", "VPC"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "Virtualization means:",
    options: ["Physical storage", "Multiple OS on one system", "Internet usage", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "Hypervisor is:",
    options: ["Hardware", "Software to create VMs", "OS", "App"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "Multitenancy means:",
    options: ["Single user", "Multiple users share resources", "No sharing", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 13,
    question: "Elasticity means:",
    options: ["Fixed resources", "Auto scaling up/down", "Manual scaling", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "IAM controls:",
    options: ["Storage", "Access permissions", "CPU", "Network"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Root account has:",
    options: ["Limited access", "Full access", "No access", "Guest access"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 16,
    question: "EC2 is:",
    options: ["Storage", "Virtual server", "Database", "Network"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "S3 is used for:",
    options: ["Compute", "Object storage", "Networking", "Security"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "Bucket in S3 is:",
    options: ["File", "Folder", "CPU", "OS"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "EBS is:",
    options: ["Object storage", "Block storage", "Network", "CPU"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "Docker is used for:",
    options: ["Storage", "Containers", "Network", "Security"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 21,
    question: "Container is:",
    options: ["Heavy", "Lightweight app", "Hardware", "Network"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 22,
    question: "Kubernetes is:",
    options: ["Storage", "Container manager", "OS", "App"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 23,
    question: "VPC is:",
    options: ["Public network", "Private cloud network", "Storage", "App"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 24,
    question: "Subnet is:",
    options: ["Full network", "Part of network", "CPU", "Disk"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 25,
    question: "CIDR is:",
    options: ["Storage type", "IP range", "CPU type", "OS"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 26,
    question: "Route table controls:",
    options: ["Storage", "Traffic routing", "CPU", "IAM"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 27,
    question: "Internet Gateway connects:",
    options: ["CPU", "Internet to VPC", "Storage", "IAM"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "Security group is:",
    options: ["Database", "Firewall", "OS", "Storage"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 29,
    question: "NACL is:",
    options: ["Extra firewall layer", "CPU", "Storage", "App"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 30,
    question: "Route 53 is:",
    options: ["Storage", "DNS service", "CPU", "VM"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 31,
    question: "CloudFront is:",
    options: ["Storage", "CDN", "Compute", "IAM"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 32,
    question: "Glacier is:",
    options: ["Fast storage", "Cheap archival storage", "CPU", "Network"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 33,
    question: "AMI is:",
    options: ["OS template", "Storage", "CPU", "Network"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 34,
    question: "Auto Scaling does:",
    options: ["Deletes data", "Adjusts servers automatically", "Stops instances", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 35,
    question: "Load Balancer:",
    options: ["Stores data", "Distributes traffic", "Creates VM", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 36,
    question: "Type 1 hypervisor runs on:",
    options: ["OS", "Hardware", "App", "Network"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 37,
    question: "Type 2 hypervisor runs on:",
    options: ["Hardware", "OS", "Network", "CPU"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 38,
    question: "Which is NOT a service model?",
    options: ["IaaS", "PaaS", "SaaS", "DaaS"],
    correctAnswer: "D",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "PaaS provides:",
    options: ["Only hardware", "Platform + tools", "Only software", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 40,
    question: "Data lifecycle starts with:",
    options: ["Store", "Create data", "Delete", "Share"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 41,
    question: "Which is NOT virtualization benefit?",
    options: ["Cost saving", "Isolation", "High cost", "Efficiency"],
    correctAnswer: "C",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "IAM policy defines:",
    options: ["Network", "Permissions", "CPU", "Storage"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 43,
    question: "Role is:",
    options: ["Permanent identity", "Temporary permission set", "Storage", "CPU"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 44,
    question: "EC2 instance type depends on:",
    options: ["Color", "Workload", "Internet", "User"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 45,
    question: "Elastic IP is:",
    options: ["Dynamic", "Static IP", "Private IP", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 46,
    question: "EFS is:",
    options: ["Block storage", "Shared file system", "Object storage", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 47,
    question: "Containers share:",
    options: ["Hardware", "OS kernel", "CPU", "Network"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 48,
    question: "VM vs Container:",
    options: ["VM lighter", "Container lighter", "Same", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 49,
    question: "Cloud security ensures:",
    options: ["Speed", "CIA triad", "Storage", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 50,
    question: "CIA stands for:",
    options: ["Confidentiality, Integrity, Availability", "Control, Input, Access", "Compute, Internet, Access", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 51,
    question: "Backup is used for:",
    options: ["Speed", "Data recovery", "CPU", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 52,
    question: "Cost awareness means:",
    options: ["Spend more", "Optimize usage", "Delete everything", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 53,
    question: "VPC is region-specific:",
    options: ["True", "False"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 54,
    question: "Subnet can be:",
    options: ["Public or private", "Only public", "Only private", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 55,
    question: "Public subnet has:",
    options: ["Internet access", "No internet", "Storage", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 56,
    question: "Private subnet has:",
    options: ["Direct internet", "No direct internet", "CPU", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 57,
    question: "Route 53 resolves:",
    options: ["CPU", "Domain to IP", "Storage", "IAM"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 58,
    question: "Direct Connect provides:",
    options: ["Public internet", "Private connection", "Storage", "CPU"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 59,
    question: "Transit Gateway connects:",
    options: ["Users", "Multiple VPCs", "Storage", "CPU"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 60,
    question: "CloudFront improves:",
    options: ["Speed", "Storage", "CPU", "IAM"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 61,
    question: "S3 object includes:",
    options: ["Data + metadata", "CPU", "OS", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 62,
    question: "Glacier is best for:",
    options: ["Frequent access", "Archival", "Compute", "Network"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 63,
    question: "AMI contains:",
    options: ["OS + config", "Only CPU", "Storage", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 64,
    question: "Auto Scaling works with:",
    options: ["Load balancer", "IAM", "Storage", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 65,
    question: "NACL works at:",
    options: ["Subnet level", "Instance level", "User level", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 66,
    question: "Security group works at:",
    options: ["Instance level", "Subnet", "VPC", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 67,
    question: "IAM users belong to:",
    options: ["Groups", "Storage", "CPU", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 68,
    question: "Policies are:",
    options: ["Rules for permissions", "Storage", "CPU", "Network"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 69,
    question: "Kubernetes handles:",
    options: ["Storage", "Container orchestration", "CPU", "IAM"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 70,
    question: "Docker image is:",
    options: ["Running container", "Template for container", "CPU", "Network"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 71,
    question: "Which service ensures high availability?",
    options: ["EC2", "Auto Scaling + ELB", "S3", "IAM"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 72,
    question: "Which is NOT EC2 feature?",
    options: ["Scalability", "Flexibility", "Automatic coding", "Pay-as-you-go"],
    correctAnswer: "C",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 73,
    question: "Which storage is fastest?",
    options: ["Glacier", "S3", "EBS", "None"],
    correctAnswer: "C",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 74,
    question: "Which is cheapest?",
    options: ["EBS", "S3", "Glacier", "EC2"],
    correctAnswer: "C",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 75,
    question: "Stateless firewall:",
    options: ["Security Group", "NACL", "IAM", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 76,
    question: "Stateful firewall:",
    options: ["NACL", "Security Group", "IAM", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 77,
    question: "CIDR example:",
    options: ["192.168.1.0/24", "255.255.255.0", "10.0.0", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 78,
    question: "Which scales automatically?",
    options: ["EC2", "Auto Scaling", "IAM", "VPC"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 79,
    question: "Which distributes load?",
    options: ["EC2", "Load Balancer", "IAM", "S3"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 80,
    question: "IAM role is best for:",
    options: ["Manual login", "Temporary access", "Storage", "CPU"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 81,
    question: "Which is object storage?",
    options: ["EBS", "S3", "EFS", "EC2"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 82,
    question: "Which is block storage?",
    options: ["S3", "EBS", "EFS", "Glacier"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 83,
    question: "Which is file storage?",
    options: ["EFS", "EBS", "S3", "None"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 84,
    question: "Which is NOT container benefit?",
    options: ["Lightweight", "Fast", "Heavy overhead", "Portable"],
    correctAnswer: "C",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 85,
    question: "Kubernetes handles:",
    options: ["One container", "Many containers", "Storage", "CPU"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 86,
    question: "Which is DNS?",
    options: ["Route 53", "VPC", "IAM", "EC2"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 87,
    question: "CloudFront uses:",
    options: ["CDN", "CPU", "Storage", "IAM"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 88,
    question: "Backup strategy ensures:",
    options: ["Security", "Recovery", "Speed", "CPU"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 89,
    question: "Shared responsibility:",
    options: ["AWS does everything", "User does everything", "Both share responsibility", "None"],
    correctAnswer: "C",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 90,
    question: "Which is NOT IAM component?",
    options: ["User", "Group", "Policy", "Bucket"],
    correctAnswer: "D",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 91,
    question: "EC2 pricing model:",
    options: ["Fixed", "Pay-as-you-go", "Free only", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 92,
    question: "Which improves fault tolerance?",
    options: ["Single server", "Multi-AZ deployment", "No scaling", "None"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 93,
    question: "Which ensures low latency globally?",
    options: ["S3", "CloudFront", "IAM", "VPC"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 94,
    question: "Which connects VPC to internet?",
    options: ["Route table", "Internet Gateway", "IAM", "NACL"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 95,
    question: "Which restricts traffic?",
    options: ["Security Group", "S3", "EC2", "IAM"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 96,
    question: "Which handles traffic rules?",
    options: ["Route table", "IAM", "EC2", "S3"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 97,
    question: "Which stores infrequent data?",
    options: ["S3 Standard", "Glacier", "EBS", "EC2"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 98,
    question: "Which service gives global DNS?",
    options: ["Route 53", "VPC", "IAM", "EC2"],
    correctAnswer: "A",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 99,
    question: "Which helps scaling automatically?",
    options: ["Load balancer", "Auto Scaling", "IAM", "S3"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 100,
    question: "Best combo for high availability:",
    options: ["EC2 only", "EC2 + Auto Scaling + ELB", "S3 only", "IAM"],
    correctAnswer: "B",
    topic: "Cloud Computing",
    difficulty: "hard"
  },
  {
    id: 101,
    question: "What does cloud computing basically mean?",
    options: ["Using only your own office servers", "Renting computing resources over the internet on pay-as-you-go", "Buying all hardware permanently", "Only using Microsoft software"],
    correctAnswer: "B",
    topic: "Cloud Architecture",
    difficulty: "easy"
  },
  {
    id: 102,
    question: "Which layer of cloud architecture includes physical servers and networking cables?",
    options: ["Application layer", "Hardware/Infrastructure layer", "Platform layer", "Virtualization layer"],
    correctAnswer: "B",
    topic: "Cloud Architecture",
    difficulty: "easy"
  },
  {
    id: 103,
    question: "Which deployment model is owned and used by a single organization only?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    correctAnswer: "B",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },
  {
    id: 104,
    question: "Hybrid Cloud is best described as:",
    options: ["Only public cloud", "Combination of public and private cloud connected together", "Only community cloud", "Only on-premise servers"],
    correctAnswer: "B",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },
  {
    id: 105,
    question: "Why do most companies prefer Hybrid Cloud today?",
    options: ["It is the cheapest option", "It gives flexibility - sensitive data stays private while scalable workloads use public cloud", "It has no security", "It cannot connect to internet"],
    correctAnswer: "B",
    topic: "Cloud Architecture",
    difficulty: "hard"
  },
  {
    id: 106,
    question: "IaaS, PaaS, and SaaS are examples of:",
    options: ["Deployment models", "Service models", "Hypervisor types", "Storage classes"],
    correctAnswer: "B",
    topic: "Cloud Architecture",
    difficulty: "easy"
  },
  {
    id: 107,
    question: "In which service model does the customer manage only the application code and data?",
    options: ["IaaS", "PaaS", "SaaS", "None"],
    correctAnswer: "B",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },
  {
    id: 108,
    question: "In the Shared Responsibility Model, who is responsible for patching the guest OS in IaaS?",
    options: ["AWS only", "Customer only", "Both AWS and customer", "Neither"],
    correctAnswer: "B",
    topic: "Cloud Architecture",
    difficulty: "hard"
  },
  {
    id: 109,
    question: "Cloud Data Lifecycle is mainly used for:",
    options: ["Only creating data", "Automatically moving old data to cheaper storage and deleting when not needed", "Only deleting data", "Only encrypting data"],
    correctAnswer: "B",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },
  {
    id: 110,
    question: "Which service model is Gmail an example of?",
    options: ["IaaS", "PaaS", "SaaS", "Private Cloud"],
    correctAnswer: "C",
    topic: "Cloud Architecture",
    difficulty: "easy"
  },
  {
    id: 111,
    question: "Virtualization means:",
    options: ["One physical server acting as many virtual servers", "Only using physical servers", "Deleting old data", "Only networking"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 112,
    question: "What is the main benefit of virtualization?",
    options: ["Higher electricity bill", "Better hardware utilization (one server runs many VMs)", "Slower performance", "More hardware purchase"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "medium"
  },
  {
    id: 113,
    question: "Type-1 Hypervisor runs directly on:",
    options: ["Host operating system", "Hardware (Bare Metal)", "Application layer", "Cloud console"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "hard"
  },
  {
    id: 114,
    question: "VirtualBox is an example of which type of hypervisor?",
    options: ["Type-1", "Type-2 (Hosted)", "Both", "None"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 115,
    question: "Multitenancy in cloud means:",
    options: ["Only one customer uses the hardware", "Multiple customers share the same hardware but are isolated", "Only private cloud", "Only public internet"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "medium"
  },
  {
    id: 116,
    question: "AWS Academy Learner Lab gives you:",
    options: ["Permanent free account", "Temporary free lab with fixed budget and time", "Real production account", "Only console access without budget"],
    correctAnswer: "B",
    topic: "AWS Learner Lab",
    difficulty: "easy"
  },
  {
    id: 117,
    question: "What happens when your Learner Lab budget is exhausted?",
    options: ["You pay from your card", "Lab automatically stops", "Nothing happens", "You get unlimited time"],
    correctAnswer: "B",
    topic: "AWS Learner Lab",
    difficulty: "medium"
  },
  {
    id: 118,
    question: "Why should you never use the Root account for daily lab work?",
    options: ["It has no permissions", "It is only for billing and security changes; daily work should use IAM user", "It is free", "It cannot launch EC2"],
    correctAnswer: "B",
    topic: "AWS Learner Lab",
    difficulty: "hard"
  },
  {
    id: 119,
    question: "IAM stands for:",
    options: ["Identity and Access Management", "Internet Access Module", "Instance Access Memory", "None"],
    correctAnswer: "A",
    topic: "IAM",
    difficulty: "easy"
  },
  {
    id: 120,
    question: "Which IAM component is a JSON document that defines Allow or Deny actions?",
    options: ["User", "Group", "Policy", "Role"],
    correctAnswer: "C",
    topic: "IAM",
    difficulty: "medium"
  },
  {
    id: 121,
    question: "In Learner Lab, preconfigured IAM roles are given so that:",
    options: ["You do not have to create policies yourself for basic tasks", "You cannot launch EC2", "Root is always used", "No security is needed"],
    correctAnswer: "A",
    topic: "IAM",
    difficulty: "hard"
  },
  {
    id: 122,
    question: "Amazon EC2 is:",
    options: ["Virtual server in AWS", "Storage only", "DNS service", "Load balancer only"],
    correctAnswer: "A",
    topic: "Compute Services",
    difficulty: "easy"
  },
  {
    id: 123,
    question: "What is an AMI?",
    options: ["Pre-packaged template (OS + software) to launch EC2", "Elastic IP", "Storage class", "Security group"],
    correctAnswer: "A",
    topic: "Compute Services",
    difficulty: "medium"
  },
  {
    id: 124,
    question: "Elastic Load Balancer (ELB) is used to:",
    options: ["Distribute traffic across multiple EC2 instances", "Stop instances automatically", "Store files", "Create VPC"],
    correctAnswer: "A",
    topic: "Compute Services",
    difficulty: "hard"
  },
  {
    id: 125,
    question: "Amazon S3 is used for:",
    options: ["Object storage (files)", "Virtual servers", "DNS", "Containers only"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 126,
    question: "In S3, what is the difference between Bucket and Object?",
    options: ["Bucket is like a folder, Object is the file inside", "Both are same", "Bucket is file, Object is folder", "None"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 127,
    question: "Which S3 storage class is cheapest for long-term archive?",
    options: ["Standard", "Glacier / Deep Archive", "Intelligent-Tiering", "EBS"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "hard"
  },
  {
    id: 128,
    question: "Containers are:",
    options: ["Lightweight packages containing app + libraries (no full OS)", "Full virtual machines", "Only for storage", "Hypervisors"],
    correctAnswer: "A",
    topic: "Containerization",
    difficulty: "easy"
  },
  {
    id: 129,
    question: "Containers vs Virtual Machines - Containers are:",
    options: ["Heavier and slower", "Much lighter and start faster", "Same as VMs", "Only for Kubernetes"],
    correctAnswer: "B",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 130,
    question: "Kubernetes is used to:",
    options: ["Orchestrate (manage) thousands of containers automatically", "Create only one container", "Replace EC2 completely", "Store data only"],
    correctAnswer: "A",
    topic: "Containerization",
    difficulty: "hard"
  },
  {
    id: 131,
    question: "VPC stands for:",
    options: ["Virtual Private Cloud - your own private network in AWS", "Virtual Public Cloud", "Very Private Computer", "None"],
    correctAnswer: "A",
    topic: "Networking Services",
    difficulty: "easy"
  },
  {
    id: 132,
    question: "Security Groups act as:",
    options: ["Firewall at instance level", "Firewall at subnet level only", "DNS", "Load balancer"],
    correctAnswer: "A",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 133,
    question: "Route 53 is AWS service for:",
    options: ["DNS (domain name to IP translation)", "Storage", "Compute", "Containers"],
    correctAnswer: "A",
    topic: "Networking Services",
    difficulty: "hard"
  },
  // AWS & Cloud Computing MCQ Set - New Section
  {
    id: 134,
    question: "A hospital needs to keep patient data on-premises for compliance while using the cloud for analytics. Which deployment model is most suitable?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    correctAnswer: "C",
    topic: "Cloud Deployment Models",
    difficulty: "medium"
  },
  {
    id: 135,
    question: "Multiple cloud tenants share the same physical server. Which NIST cloud characteristic makes this possible?",
    options: ["On-Demand Self-Service", "Resource Pooling", "Rapid Elasticity", "Measured Service"],
    correctAnswer: "B",
    topic: "Cloud Characteristics",
    difficulty: "easy"
  },
  {
    id: 136,
    question: "A business continuity plan involves restoring cloud data following a disaster. Which phase of the cloud data lifecycle does this recovery relate to?",
    options: ["Create", "Store", "Archive", "Destroy"],
    correctAnswer: "A",
    topic: "Cloud Data Lifecycle",
    difficulty: "medium"
  },
  {
    id: 137,
    question: "Which cloud service model gives customers the greatest degree of control over the infrastructure?",
    options: ["SaaS", "PaaS", "IaaS", "FaaS"],
    correctAnswer: "C",
    topic: "Cloud Service Models",
    difficulty: "medium"
  },
  {
    id: 138,
    question: "In cloud architecture, what does 'high availability' mean?",
    options: ["The system is very fast", "The system is always secure", "The system remains accessible even if a component fails", "The system has fixed resource allocation"],
    correctAnswer: "C",
    topic: "Cloud Architecture",
    difficulty: "medium"
  },
  {
    id: 139,
    question: "According to NIST, which of the following is NOT a defining characteristic of cloud computing?",
    options: ["On-Demand Self-Service", "Measured Service", "Fixed Resource Allocation", "Rapid Elasticity"],
    correctAnswer: "C",
    topic: "Cloud Characteristics",
    difficulty: "easy"
  },
  {
    id: 140,
    question: "A data center runs VMware ESXi installed directly on physical servers. What type of hypervisor is this?",
    options: ["Type 1 Hypervisor", "Type 2 Hypervisor", "Type 3 Hypervisor", "Hosted Hypervisor"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 141,
    question: "A virtual machine is a software-based emulation of what?",
    options: ["A physical computer", "A network adapter", "A container", "An IDE"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 142,
    question: "In a virtual machine environment, what is the role of the guest OS?",
    options: ["Manages the hypervisor", "Controls physical hardware", "Provides the user environment within the VM", "Connects VMs to the network"],
    correctAnswer: "C",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 143,
    question: "Which VirtualBox setting allows you to configure how much RAM is allocated to a VM?",
    options: ["VM System Settings", "Audio Settings", "Snapshot Settings", "Network Settings"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 144,
    question: "A developer needs to simultaneously test software on Windows, Linux, and macOS using a single laptop. What is the most practical solution?",
    options: ["Buy 3 laptops", "Use virtual machines", "Use cloud SaaS", "Use containers"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 145,
    question: "Which VirtualBox setting would you modify to enable a shared folder between the host and guest machines?",
    options: ["VM Network Adapter", "Shared Folders", "Audio Settings", "Display Settings"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 146,
    question: "A company notices the AWS Console layout has changed after adjusting a dropdown in the top-right corner. What setting was modified?",
    options: ["Billing plan", "Theme preference", "Region selection", "Language setting"],
    correctAnswer: "C",
    topic: "AWS Learner Lab",
    difficulty: "easy"
  },
  {
    id: 147,
    question: "What does the designation 'us-east-1' represent in AWS?",
    options: ["An AWS Region", "An Availability Zone in the US", "An S3 bucket name", "An IAM group name"],
    correctAnswer: "A",
    topic: "AWS Learner Lab",
    difficulty: "easy"
  },
  {
    id: 148,
    question: "Which IAM best practice requires users to provide two forms of verification before gaining access?",
    options: ["Password Policy", "IAM Groups", "MFA (Multi-Factor Authentication)", "IAM Roles"],
    correctAnswer: "C",
    topic: "IAM",
    difficulty: "medium"
  },
  {
    id: 149,
    question: "A user belongs to two IAM groups: Group A allows S3 access, and Group B explicitly denies it. What is the effective result?",
    options: ["S3 is allowed", "S3 is denied", "S3 is partially allowed", "User can only read resources"],
    correctAnswer: "B",
    topic: "IAM",
    difficulty: "hard"
  },
  {
    id: 150,
    question: "What is the primary purpose of an IAM access key?",
    options: ["To authenticate programmatic access to AWS", "To log into the AWS Console", "To enable MFA", "To manage IAM Roles"],
    correctAnswer: "A",
    topic: "IAM",
    difficulty: "medium"
  },
  {
    id: 151,
    question: "Why should root account credentials be avoided for day-to-day AWS operations?",
    options: ["Root account is slow", "Root account cannot access all resources", "Compromising root account grants unrestricted access to all resources", "Root account has limited permissions"],
    correctAnswer: "C",
    topic: "IAM",
    difficulty: "medium"
  },
  {
    id: 152,
    question: "Which type of IAM policy is created and maintained directly by the customer?",
    options: ["AWS Managed Policy", "Custom IAM Policy", "Service Control Policy", "Resource-Based Policy"],
    correctAnswer: "B",
    topic: "IAM",
    difficulty: "medium"
  },
  {
    id: 153,
    question: "An IAM user has been mistakenly granted AdministratorAccess. What is the primary security concern?",
    options: ["User is slow", "User has full control over AWS resources", "User cannot access S3", "User cannot delete EC2 instances"],
    correctAnswer: "B",
    topic: "IAM",
    difficulty: "hard"
  },
  {
    id: 154,
    question: "A company needs the same EC2 configuration deployed consistently across 20 instances. What should they create?",
    options: ["A CloudFormation template", "A custom AMI", "An Auto Scaling Group", "A Launch Template"],
    correctAnswer: "A",
    topic: "Compute Services",
    difficulty: "medium"
  },
  {
    id: 155,
    question: "A company wants to leverage spare AWS capacity at a reduced cost and can tolerate potential interruptions. Which EC2 option applies?",
    options: ["On-Demand Instances", "Reserved Instances", "Spot Instances", "Dedicated Hosts"],
    correctAnswer: "C",
    topic: "Compute Services",
    difficulty: "medium"
  },
  {
    id: 156,
    question: "What is a required element when defining a Launch Template for an Auto Scaling Group?",
    options: ["S3 bucket name", "AMI ID, Instance type, and security group", "Database connection string", "API endpoint"],
    correctAnswer: "B",
    topic: "Compute Services",
    difficulty: "medium"
  },
  {
    id: 157,
    question: "What charges apply to an Elastic IP address that is allocated but not associated with a running instance?",
    options: ["No charges", "Hourly charges", "One-time fee", "Annual charges"],
    correctAnswer: "B",
    topic: "Compute Services",
    difficulty: "easy"
  },
  {
    id: 158,
    question: "A company requires dedicated physical servers for regulatory compliance. Which EC2 option provides this?",
    options: ["On-Demand Instances", "Reserved Instances", "Dedicated Hosts", "Spot Instances"],
    correctAnswer: "C",
    topic: "Compute Services",
    difficulty: "hard"
  },
  {
    id: 159,
    question: "What does 'Instance type' refer to in the context of EC2?",
    options: ["The OS installed on the instance", "The combination of CPU, memory, storage, and networking capacity", "The AMI used to launch the instance", "The region where the instance is located"],
    correctAnswer: "B",
    topic: "Compute Services",
    difficulty: "easy"
  },
  {
    id: 160,
    question: "What is Amazon S3 Standard storage class primarily designed for?",
    options: ["Long-term archival", "Frequently accessed data requiring high availability", "Infrequently accessed data", "Real-time analytics"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 161,
    question: "What are the naming requirements for an S3 bucket?",
    options: ["Must be globally unique across all AWS accounts", "Can have any name as long as it's within your account", "Must be in uppercase letters", "Must start with 'aws-'"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 162,
    question: "What is the purpose of a bucket policy in Amazon S3?",
    options: ["To set EC2 instance permissions", "To define resource-based access rules for the S3 bucket", "To configure networking options", "To manage database access"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 163,
    question: "How can a company share specific S3 objects with selected AWS accounts?",
    options: ["Use S3 ACLs (Access Control Lists)", "Delete the bucket", "Make bucket public", "Use IAM only"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 164,
    question: "A company wants to host a static website using only HTML, CSS, and JavaScript files on AWS without any servers. Which service is best suited?",
    options: ["EC2", "RDS", "EFS", "S3"],
    correctAnswer: "D",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 165,
    question: "A company stores compliance documents for 7 years and rarely needs to retrieve them. Which S3 storage class is most cost-effective?",
    options: ["S3 Standard", "S3 Standard-IA", "S3 Glacier Deep Archive", "S3 Intelligent-Tiering"],
    correctAnswer: "C",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 166,
    question: "A company wants to run Kubernetes on AWS without managing the EC2 control plane. Which service should they use?",
    options: ["EC2 with Docker", "ECS", "EKS (Elastic Kubernetes Service)", "Lambda"],
    correctAnswer: "C",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 167,
    question: "What does RTO stand for in the context of disaster recovery?",
    options: ["Real-Time Output", "Replication Transfer Operation", "Recovery Time Objective", "Resource Transmission Option"],
    correctAnswer: "C",
    topic: "Disaster Recovery",
    difficulty: "medium"
  },
  {
    id: 168,
    question: "What is a key cost-saving strategy when using EC2 instances on AWS?",
    options: ["Leave all instances running 24/7", "Use Reserved Instances for predictable workloads", "Use only Spot Instances", "Increase instance sizes"],
    correctAnswer: "B",
    topic: "Cost Optimization",
    difficulty: "easy"
  },
  {
    id: 169,
    question: "A company enables automated daily S3 backups. Which cloud practice does this represent?",
    options: ["Scalability", "Cost Optimization", "Containerization", "A backup and recovery strategy"],
    correctAnswer: "D",
    topic: "Cloud Best Practices",
    difficulty: "easy"
  },
  {
    id: 170,
    question: "What does horizontal pod autoscaling do in Kubernetes?",
    options: ["Increases the CPU of each pod", "Increases the number of pod replicas based on CPU or metrics", "Deletes unused pods", "Assigns VM its own IP on LAN"],
    correctAnswer: "B",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 171,
    question: "What is a Network ACL (NACL) in an AWS VPC?",
    options: ["A stateful firewall at the instance level", "A stateless firewall at the subnet level", "A load balancer", "A DNS service"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 172,
    question: "A company registers the domain 'myapp.com' and wants to direct traffic to their AWS resources. Which service manages DNS routing?",
    options: ["CloudFront", "Route 53", "VPC", "IAM"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "easy"
  },
  {
    id: 173,
    question: "A company creates a VPC with a CIDR block of 10.0.0.0/16. How many IP addresses does this range provide?",
    options: ["256", "65,536", "16,777,216", "1,048,576"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "hard"
  },
  {
    id: 174,
    question: "A company wants to establish a secure connection between their on-premises office network and AWS. What should they use?",
    options: ["CloudFront", "VPN or AWS Direct Connect", "S3", "Lambda"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 175,
    question: "When a Route 53 health check identifies that an endpoint is unhealthy, what action does Route 53 take?",
    options: ["Stops routing traffic to the unhealthy endpoint", "Deletes the endpoint", "Sends an SNS alert only", "Restarts the endpoint"],
    correctAnswer: "A",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 176,
    question: "In AWS, NACLs are associated with which resource?",
    options: ["Subnets", "EC2 instances", "Security Groups", "IAM Roles"],
    correctAnswer: "A",
    topic: "Networking Services",
    difficulty: "easy"
  },
  {
    id: 177,
    question: "What is the primary purpose of a VPC endpoint?",
    options: ["To allow public connectivity to AWS services", "To allow private connectivity to AWS services without traversing the internet", "To manage IAM Roles", "To configure network security"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 178,
    question: "Which Route 53 routing policy directs all traffic to a single resource without performing health checks by default?",
    options: ["Weighted routing", "Failover routing", "Geolocation routing", "Simple routing"],
    correctAnswer: "D",
    topic: "Networking Services",
    difficulty: "hard"
  },
  {
    id: 179,
    question: "Amazon S3 offers 11 nines (99.999999999%) durability. What does this level of durability indicate?",
    options: ["Data availability", "Data redundancy", "Data protection against loss", "Data encryption"],
    correctAnswer: "C",
    topic: "Storage Services",
    difficulty: "hard"
  },
  {
    id: 180,
    question: "A cloud provider bills customers based on the actual amount of storage and compute they use. Which cloud characteristic does this represent?",
    options: ["Scalability", "Measured Service", "Resource Pooling", "Rapid Elasticity"],
    correctAnswer: "B",
    topic: "Cloud Characteristics",
    difficulty: "easy"
  },
  {
    id: 181,
    question: "How does cloud elasticity benefit a streaming service in terms of resource management?",
    options: ["They can handle traffic spikes", "They must predict demand manually", "They require fixed resources", "Their costs are always fixed"],
    correctAnswer: "A",
    topic: "Cloud Characteristics",
    difficulty: "easy"
  },
  {
    id: 182,
    question: "How many Availability Zones does a typical AWS Region contain?",
    options: ["1", "Exactly 10", "At least 2-3", "50 or more"],
    correctAnswer: "C",
    topic: "AWS Infrastructure",
    difficulty: "easy"
  },
  {
    id: 183,
    question: "A student sees 'eu-west-1a' in the AWS console. What does the letter 'a' at the end represent?",
    options: ["A specific Availability Zone within the region", "An Instance type", "A data center", "An AWS service"],
    correctAnswer: "A",
    topic: "AWS Infrastructure",
    difficulty: "easy"
  },
  {
    id: 184,
    question: "What is the recommended best practice regarding the AWS root account?",
    options: ["Use it for all daily operations", "Use it only for initial setup then lock it away", "Share root credentials with team members", "Never enable MFA on the root account"],
    correctAnswer: "B",
    topic: "AWS IAM",
    difficulty: "easy"
  },
  {
    id: 185,
    question: "A company needs to grant a contractor temporary access to AWS resources. What is the most appropriate method?",
    options: ["Share root account login", "Create a permanent IAM user", "Assign an IAM Role with temporary credentials", "Send AWS credentials via email"],
    correctAnswer: "C",
    topic: "AWS IAM",
    difficulty: "medium"
  },
  {
    id: 186,
    question: "Which IAM entity is best suited for enabling cross-account access in AWS?",
    options: ["IAM User", "IAM Policy", "IAM Role", "IAM Group"],
    correctAnswer: "C",
    topic: "AWS IAM",
    difficulty: "medium"
  },
  {
    id: 187,
    question: "What is the FIRST security action a startup should take after creating a new AWS account?",
    options: ["Enable billing alerts", "Enable MFA on the root account", "Create IAM users", "Launch EC2 instances"],
    correctAnswer: "B",
    topic: "AWS IAM",
    difficulty: "easy"
  },
  {
    id: 188,
    question: "Which AWS service logs all API calls made within an account for auditing purposes?",
    options: ["CloudWatch", "CloudTrail", "VPC Flow Logs", "AWS Config"],
    correctAnswer: "B",
    topic: "AWS Monitoring",
    difficulty: "easy"
  },
  {
    id: 189,
    question: "How often should IAM access keys be rotated?",
    options: ["Never - they are permanent", "Only when a user leaves the company", "Regularly, as a security practice", "Once per year"],
    correctAnswer: "C",
    topic: "AWS IAM",
    difficulty: "medium"
  },
  {
    id: 190,
    question: "A company wants to launch a virtual server on AWS. Which service should they use?",
    options: ["S3", "EC2", "RDS", "Lambda"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "easy"
  },
  {
    id: 191,
    question: "A web application receives high traffic during business hours and minimal traffic at night. Which AWS feature automatically adjusts the number of EC2 instances based on demand?",
    options: ["Manual Scaling", "Fixed Scheduling", "EC2 Auto Scaling", "Load Balancer"],
    correctAnswer: "C",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 192,
    question: "What is the primary function of an Elastic Load Balancer?",
    options: ["Distributes incoming traffic across multiple EC2 instances", "Creates EC2 snapshots", "Backs up EC2 data to S3", "Launches EC2 instances"],
    correctAnswer: "A",
    topic: "AWS Compute",
    difficulty: "easy"
  },
  {
    id: 193,
    question: "A web application's EC2 instances need to scale out when CPU utilization exceeds 70%. Which service handles this rule-based scaling?",
    options: ["Load Balancer", "Auto Scaling Policies", "Manual Admin input", "CloudWatch only"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 194,
    question: "Which Auto Scaling component defines the minimum, desired, and maximum number of instances in a group?",
    options: ["Scaling Policy", "Auto Scaling Group", "Launch Template", "Elastic IP"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 195,
    question: "An Application Load Balancer routes traffic to different targets based on URL paths such as /images or /api. What is this routing method called?",
    options: ["Round robin routing", "Content-based routing / path-based routing", "IP routing", "Geolocation routing"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 196,
    question: "A company needs to store and retrieve files of any size from anywhere in the world. Which AWS service is the best fit?",
    options: ["EBS", "EFS", "S3", "RDS"],
    correctAnswer: "C",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 197,
    question: "A company needs the lowest possible storage cost for rarely accessed archives. Which S3 storage class should they use?",
    options: ["S3 Standard", "S3 Glacier Deep Archive", "S3 Intelligent-Tiering", "S3 Standard-IA"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 198,
    question: "What type of storage does Amazon EBS provide?",
    options: ["Object storage", "File storage", "Block storage", "ISCSI"],
    correctAnswer: "C",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 199,
    question: "Which protocol does Amazon EFS use, making it compatible with Linux-based EC2 instances?",
    options: ["ISCSI", "SMB", "NFS", "File Transfer Protocol"],
    correctAnswer: "C",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 200,
    question: "Amazon S3 offers 99.99% availability. What does this level of availability mean?",
    options: ["Objects are replicated across regions", "99.99% uptime design for the S3 Standard storage class", "Extremely low chance of data loss", "100% data durability"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 201,
    question: "A company wants to prevent any employee from accidentally making an S3 bucket public. Which feature enforces this restriction?",
    options: ["S3 Versioning", "S3 Block Public Access", "S3 Lifecycle Policy", "S3 Bucket tagging"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 202,
    question: "What is Docker?",
    options: ["A DNS lookup table", "A hypervisor for EC2", "A container runtime and platform for building and running containers", "A cloud provider"],
    correctAnswer: "C",
    topic: "Containerization",
    difficulty: "easy"
  },
  {
    id: 203,
    question: "What is the purpose of a Dockerfile written by a developer?",
    options: ["To act as a DNS server", "To configure IAM policies", "To define the steps to build a Docker image", "To create EC2 instances"],
    correctAnswer: "C",
    topic: "Containerization",
    difficulty: "easy"
  },
  {
    id: 204,
    question: "A company runs 100 containers and needs automatic restarts, load balancing, and scaling. Which tool manages this?",
    options: ["Docker CLI", "Docker Hub", "Kubernetes", "Docker Socket"],
    correctAnswer: "C",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 205,
    question: "A company stores Docker images in a registry to share and reuse across teams. What is a commonly used registry service?",
    options: ["Docker Hub or Amazon ECR", "Kubernetes Hub", "Docker Socket", "Community Docker"],
    correctAnswer: "A",
    topic: "Containerization",
    difficulty: "easy"
  },
  {
    id: 206,
    question: "What does AWS Trusted Advisor provide?",
    options: ["Security group creation", "Recommendations on performance, security, and fault tolerance", "Kubernetes Hub", "DNS setup"],
    correctAnswer: "B",
    topic: "AWS Monitoring",
    difficulty: "medium"
  },
  {
    id: 207,
    question: "For resources in a public subnet to be accessible from the internet, what must be attached to the VPC?",
    options: ["NAT Gateway", "Internet Gateway", "Security Group", "Route Table"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 208,
    question: "What is the purpose of a Route Table in an AWS VPC?",
    options: ["To store container images", "To act as a firewall", "A set of rules that determines where network traffic is directed", "To enable MFA"],
    correctAnswer: "C",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 209,
    question: "What is the key difference between a Security Group and a Network ACL?",
    options: ["NACLs are stateless; Security Groups are stateful", "NACLs are at instance level; Security Groups are at subnet level", "Security Groups are more expensive", "NACLs are only for VPCs"],
    correctAnswer: "A",
    topic: "Networking Services",
    difficulty: "hard"
  },
  {
    id: 210,
    question: "A company's website in the US has slow load times for users in Asia. Which AWS service can help reduce latency?",
    options: ["Auto Scaling", "CloudTrail", "CloudFront", "RDS Read Replicas"],
    correctAnswer: "C",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 211,
    question: "A company runs a web application in two AWS regions. If the primary region fails, which Route 53 routing policy should redirect traffic to the secondary region?",
    options: ["Weighted routing", "Geolocation routing", "Failover routing", "Simple routing"],
    correctAnswer: "C",
    topic: "Networking Services",
    difficulty: "hard"
  },
  {
    id: 212,
    question: "What does it mean for Security Groups to be 'stateful'?",
    options: ["Return traffic is automatically allowed if the outbound request was permitted", "Rules must be manually applied to return traffic", "Both inbound and outbound rules must be specified simultaneously", "No difference from stateless"],
    correctAnswer: "A",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 213,
    question: "What is the purpose of a subnet within an AWS VPC?",
    options: ["To store container images", "To divide a VPC's IP range into smaller segments for organization and control", "To manage EC2 instances", "To enable database replication"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "easy"
  },
  {
    id: 214,
    question: "What does Amazon CloudFront use to cache content closer to users geographically?",
    options: ["S3 Buckets", "Edge Locations", "Availability Zones", "Regions"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 215,
    question: "A company wants to access cloud services from any device over the internet. Which NIST cloud characteristic does this describe?",
    options: ["Resource Pooling", "Broad Network Access", "On-Demand Self-Service", "Measured Service"],
    correctAnswer: "B",
    topic: "Cloud Characteristics",
    difficulty: "medium"
  },
  {
    id: 216,
    question: "A video streaming startup wants to deploy a Node.js application without managing any underlying hardware. Which cloud service model should they choose?",
    options: ["IaaS", "PaaS", "SaaS", "On-Premises"],
    correctAnswer: "B",
    topic: "Cloud Service Models",
    difficulty: "medium"
  },
  {
    id: 217,
    question: "An e-commerce site stores product images in the cloud. Which data lifecycle phase does this represent?",
    options: ["Store", "Create", "Use", "Share"],
    correctAnswer: "A",
    topic: "Cloud Data Lifecycle",
    difficulty: "easy"
  },
  {
    id: 218,
    question: "Which cloud deployment model makes services available to the general public through a third-party provider?",
    options: ["Private Cloud", "Hybrid Cloud", "Community Cloud", "Public Cloud"],
    correctAnswer: "D",
    topic: "Cloud Deployment Models",
    difficulty: "easy"
  },
  {
    id: 219,
    question: "Cloud computing allows IT resources to be consumed like a utility. Which key characteristic enables this model?",
    options: ["Resource Pooling", "On-Demand Self-Service", "Measured Service", "Rapid Elasticity"],
    correctAnswer: "B",
    topic: "Cloud Characteristics",
    difficulty: "medium"
  },
  {
    id: 220,
    question: "An image is uploaded to the cloud, stored, used for rendering, shared with partners, and then deleted. What concept does this sequence represent?",
    options: ["Storage", "Security", "The SLA lifecycle", "The cloud data lifecycle"],
    correctAnswer: "D",
    topic: "Cloud Data Lifecycle",
    difficulty: "medium"
  },
  {
    id: 221,
    question: "Which component is responsible for managing and allocating resources to virtual machines?",
    options: ["Virtual NIC", "Guest OS", "The Hypervisor", "Network adapter"],
    correctAnswer: "C",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 222,
    question: "A cloud provider uses elasticity to automatically scale resources up and down. What typically triggers this scaling?",
    options: ["Manual admin input only", "Demand or workload", "Fixed schedules", "User preferences only"],
    correctAnswer: "B",
    topic: "Cloud Characteristics",
    difficulty: "medium"
  },
  {
    id: 223,
    question: "A company consolidates 10 physical servers into 10 VMs running on a single server. What is the primary benefit?",
    options: ["Reduced cost and resource utilization", "Increased complexity", "Higher hardware cost", "Poor network connectivity"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 224,
    question: "A virtualized server consumes more CPU and RAM overhead compared to a physical server handling the same workload. What is the main cause?",
    options: ["Guest OS inefficiency", "Hypervisor overhead", "Poor network configuration", "Buying more hardware"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "medium"
  },
  {
    id: 225,
    question: "What does 'overcommitment' mean in a virtualized environment?",
    options: ["Allocating more virtual resources than physical resources available", "Buying more hardware than needed", "Shutting down unnecessary instances", "Fixing network issues"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "medium"
  },
  {
    id: 226,
    question: "When VirtualBox is installed on a Mac and a Windows VM is created, which OS is considered the host?",
    options: ["Windows", "Ubuntu", "Mac", "Linux"],
    correctAnswer: "C",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 227,
    question: "What is an AWS Availability Zone?",
    options: ["A single isolated data center within a region", "A geographic area with multiple data centers", "A global edge location for caching", "All regions share the same resources"],
    correctAnswer: "A",
    topic: "AWS Infrastructure",
    difficulty: "easy"
  },
  {
    id: 228,
    question: "Why is it important to select the correct AWS Region before provisioning resources?",
    options: ["Resources created in one region are not automatically available in others", "All regions share the same resources", "Region selection determines billing names", "It affects IAM permissions only"],
    correctAnswer: "A",
    topic: "AWS Infrastructure",
    difficulty: "medium"
  },
  {
    id: 229,
    question: "Under the AWS Shared Responsibility Model, who is responsible for patching the OS on an EC2 instance?",
    options: ["AWS", "The customer", "The IAM admin", "AWS and customer equally"],
    correctAnswer: "B",
    topic: "AWS Security",
    difficulty: "medium"
  },
  {
    id: 230,
    question: "An IAM policy states 'Allow: s3:GetObject on arn:aws:s3:::my-bucket/*'. What does this policy permit?",
    options: ["Allows reading objects from my-bucket", "Allows deleting objects in S3", "Creates a new bucket", "Deletes old objects"],
    correctAnswer: "A",
    topic: "AWS IAM",
    difficulty: "hard"
  },
  {
    id: 231,
    question: "Under the AWS Shared Responsibility Model, which of these is AWS's responsibility?",
    options: ["Application security", "Customer data encryption", "Physical security of data centers", "Network routes"],
    correctAnswer: "C",
    topic: "AWS Security",
    difficulty: "medium"
  },
  {
    id: 232,
    question: "A company hosts a memory-intensive database on EC2. Which EC2 instance type is most appropriate?",
    options: ["T3 (General Purpose)", "C5 (Compute Optimized)", "R5 (Memory Optimized)", "I3 (Storage Optimized)"],
    correctAnswer: "C",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 233,
    question: "A company runs a website on EC2, but the public IP changes every time the server restarts. How can they resolve this?",
    options: ["Use a different instance type", "Assign an Elastic IP to the instance", "Use a different region", "Delete and recreate the instance"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "easy"
  },
  {
    id: 234,
    question: "What is the primary goal of AWS Auto Scaling?",
    options: ["Reduce IAM permissions", "Automatically adjust EC2 capacity to match demand", "Create backup instances", "Manually scale resources"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "easy"
  },
  {
    id: 235,
    question: "What is the purpose of a Security Group in EC2?",
    options: ["A virtual firewall controlling inbound and outbound traffic to an EC2 instance", "To delete instances", "To store container images", "To route traffic"],
    correctAnswer: "A",
    topic: "AWS Security",
    difficulty: "easy"
  },
  {
    id: 236,
    question: "A company stops an EC2 instance and restarts it the next day, finding the public IP has changed. Which feature would have prevented this?",
    options: ["Auto Scaling", "Elastic IP", "IAM Group", "Launch Template"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 237,
    question: "What is the key difference between stopping and terminating an EC2 instance?",
    options: ["Stopping is permanent; terminating is temporary", "Terminating deletes the instance permanently; stopping preserves it", "No difference between them", "Stopping is faster"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 238,
    question: "Which AWS tool allows users to manage cloud resources directly from a web browser without installing any local software?",
    options: ["AWS CloudShell", "EC2 Dashboard", "IAM Console", "S3 Console"],
    correctAnswer: "A",
    topic: "AWS Management",
    difficulty: "easy"
  },
  {
    id: 239,
    question: "What is the default access level of a newly created S3 bucket?",
    options: ["Public read", "Public write", "Private", "Public read/write"],
    correctAnswer: "C",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 240,
    question: "What is the purpose of an EBS snapshot?",
    options: ["To store container images", "A snapshot of a file system used to create containers", "Backup and restore of EBS volumes", "To replace EC2 instances"],
    correctAnswer: "C",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 241,
    question: "Which S3 storage class is best suited for data that is accessed once or twice a month but requires fast retrieval when needed?",
    options: ["S3 Standard", "S3 Glacier Deep Archive", "S3 Intelligent-Tiering", "S3 Standard-IA"],
    correctAnswer: "D",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 242,
    question: "What does S3 Intelligent-Tiering do automatically?",
    options: ["Moves objects between tiers based on changing access patterns", "Replicates data to another region", "Deletes old objects", "Moves objects between tiers based on fixed schedules"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 243,
    question: "A company wants to replicate S3 data to another AWS region for disaster recovery purposes. Which feature should they use?",
    options: ["S3 Versioning", "S3 Replication", "S3 Lifecycle Policy", "S3 + CloudFront"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 244,
    question: "What is a Docker image?",
    options: ["A running container", "A snapshot of a file system used to create containers", "An AMI for AWS", "A hypervisor for EC2"],
    correctAnswer: "B",
    topic: "Containerization",
    difficulty: "easy"
  },
  {
    id: 245,
    question: "What does the security principle of 'defense in depth' mean in a cloud environment?",
    options: ["One strong firewall protects everything", "Using multiple layers of security controls", "Only IAM is needed for security", "To reduce IAM permissions"],
    correctAnswer: "B",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 246,
    question: "What is the purpose of having a cloud backup strategy?",
    options: ["To make the cloud faster", "To ensure data can be recovered after loss or corruption", "To reduce storage costs", "To improve network speed"],
    correctAnswer: "B",
    topic: "Cloud Best Practices",
    difficulty: "easy"
  },
  {
    id: 247,
    question: "A team deploys the same containerized application across development, test, and production environments. What key benefit does containerization provide?",
    options: ["More network bandwidth", "Consistency across environments", "Lower hardware cost", "Better network connection"],
    correctAnswer: "B",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 248,
    question: "What is the function of a Kubernetes Service?",
    options: ["To expose pods to network traffic and provide stable endpoints", "To build Docker images", "To store containers", "To delete containers"],
    correctAnswer: "A",
    topic: "Containerization",
    difficulty: "hard"
  },
  {
    id: 249,
    question: "Which security tool is used to scan container images for known vulnerabilities?",
    options: ["Amazon Inspector", "IAM Analyzer", "CloudTrail", "AWS Config"],
    correctAnswer: "A",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 250,
    question: "A company wants to create an isolated private network in AWS to launch resources. What should they create?",
    options: ["S3 Bucket", "VPC (Virtual Private Cloud)", "Internet Gateway", "CloudFront"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "easy"
  },
  {
    id: 251,
    question: "A private subnet hosts a database that needs to download updates from the internet without being directly accessible. What enables this?",
    options: ["NAT Gateway", "Internet Gateway", "Security Group", "Elastic IP"],
    correctAnswer: "A",
    topic: "Networking Services",
    difficulty: "hard"
  },
  {
    id: 252,
    question: "What is the default VPC in AWS?",
    options: ["A private VPC that must be created manually", "A pre-configured VPC that AWS creates in each region for easy use", "A VPC shared among all accounts", "The VPC for billing purposes only"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "easy"
  },
  {
    id: 253,
    question: "In what order are NACL rules evaluated?",
    options: ["Rules are applied simultaneously", "Only the first matching rule is applied", "Rules are applied alphabetically", "All rules are applied"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 254,
    question: "An internal application should not be accessible from the internet. Which type of subnet should host it?",
    options: ["Public subnet", "Private subnet", "Default subnet", "Hybrid subnet"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "easy"
  },
  {
    id: 255,
    question: "A company wants to reduce latency for global users accessing their static website. What is the best AWS setup?",
    options: ["Single EC2 in one region", "S3 + CloudFront", "RDS Multi-AZ", "Direct Connect"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "hard"
  },
  {
    id: 256,
    question: "A development team wants to deploy an application without managing the underlying infrastructure. Which cloud service model best fits their needs?",
    options: ["IaaS", "PaaS", "SaaS", "Bare-metal"],
    correctAnswer: "B",
    topic: "Cloud Service Models",
    difficulty: "medium"
  },
  {
    id: 257,
    question: "A company uses Gmail for business email and does not manage any servers or software updates. Which cloud service model are they using?",
    options: ["IaaS", "PaaS", "SaaS", "Community Cloud"],
    correctAnswer: "C",
    topic: "Cloud Service Models",
    difficulty: "easy"
  },
  {
    id: 258,
    question: "During which phase of the cloud data lifecycle is data first introduced into the cloud system?",
    options: ["Store", "Create", "Use", "Share"],
    correctAnswer: "B",
    topic: "Cloud Data Lifecycle",
    difficulty: "easy"
  },
  {
    id: 259,
    question: "An organization permanently deletes customer data upon request to comply with GDPR. Which phase of the cloud data lifecycle does this represent?",
    options: ["Archive", "Destroy", "Store", "Delete"],
    correctAnswer: "B",
    topic: "Cloud Data Lifecycle",
    difficulty: "medium"
  },
  {
    id: 260,
    question: "Which cloud deployment model is generally the most cost-effective option for startups?",
    options: ["Private Cloud", "Hybrid Cloud", "Community Cloud", "Public Cloud"],
    correctAnswer: "D",
    topic: "Cloud Deployment Models",
    difficulty: "easy"
  },
  {
    id: 261,
    question: "A company migrating its CRM to the cloud is in the process of moving data to a new location. Which lifecycle phase does this represent?",
    options: ["Store", "Create", "Use", "Share"],
    correctAnswer: "A",
    topic: "Cloud Data Lifecycle",
    difficulty: "medium"
  },
  {
    id: 262,
    question: "A developer installs VirtualBox on a Windows laptop to test a Linux application. What type of hypervisor is VirtualBox?",
    options: ["Type 1 Hypervisor", "Type 2 Hypervisor", "Type 3 Hypervisor", "Bare-metal"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "medium"
  },
  {
    id: 263,
    question: "Multiple customers share the same physical cloud server but remain isolated from one another. What is this arrangement called?",
    options: ["Clustering", "Multitenancy", "Replication", "Bare-metal"],
    correctAnswer: "B",
    topic: "Cloud Characteristics",
    difficulty: "medium"
  },
  {
    id: 264,
    question: "VirtualBox allows a developer to run Ubuntu on a Windows machine simultaneously. What is the Windows machine called in this context?",
    options: ["Guest machine", "Host OS", "Host machine", "Physical machine"],
    correctAnswer: "C",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 265,
    question: "What is the Ubuntu OS running inside VirtualBox referred to as?",
    options: ["Virtual machine", "Physical machine", "Guest OS", "Host system"],
    correctAnswer: "C",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 266,
    question: "A company leverages cloud elasticity to scale from 5 to 50 servers within minutes. Which cloud benefit does this demonstrate?",
    options: ["Agility and flexibility", "Fixed capacity", "Cost increase", "Lower performance"],
    correctAnswer: "A",
    topic: "Cloud Characteristics",
    difficulty: "medium"
  },
  {
    id: 267,
    question: "Which of the following best describes a 'bare-metal hypervisor'?",
    options: ["Runs directly on hardware without a host OS", "Runs on top of a host OS", "Runs inside a virtual machine", "VMs are too slow"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "hard"
  },
  {
    id: 268,
    question: "Which AWS Region should you select to serve customers primarily located in Australia?",
    options: ["us-east-1", "eu-west-1", "ap-southeast-2", "ca-central-1"],
    correctAnswer: "C",
    topic: "AWS Infrastructure",
    difficulty: "easy"
  },
  {
    id: 269,
    question: "Which feature in the AWS Console allows users to quickly search for and navigate to any AWS service?",
    options: ["Search bar / Search", "IAM Dashboard", "CloudWatch", "EC2 Terminal"],
    correctAnswer: "A",
    topic: "AWS Management",
    difficulty: "easy"
  },
  {
    id: 270,
    question: "A new developer joins a company and requires access to AWS. The IAM admin creates an account for them. What is this called?",
    options: ["Root Account", "IAM User", "IAM Dashboard", "EC2 Instance"],
    correctAnswer: "B",
    topic: "AWS IAM",
    difficulty: "easy"
  },
  {
    id: 271,
    question: "An EC2 instance needs to access an S3 bucket without storing credentials on the instance. Which IAM feature should be used?",
    options: ["IAM User", "IAM Groups", "IAM Role", "AdministratorAccess"],
    correctAnswer: "C",
    topic: "AWS IAM",
    difficulty: "hard"
  },
  {
    id: 272,
    question: "Which AWS managed policy grants full access to all AWS services?",
    options: ["ReadOnlyAccess", "PowerUserAccess", "AdministratorAccess", "CustomAccess"],
    correctAnswer: "C",
    topic: "AWS IAM",
    difficulty: "medium"
  },
  {
    id: 273,
    question: "An EC2 instance is assigned an IAM role. Where are the temporary credentials for that role stored?",
    options: ["In the EC2 console", "In the instance metadata", "In the IAM Dashboard", "On the EBS volume"],
    correctAnswer: "B",
    topic: "AWS IAM",
    difficulty: "hard"
  },
  {
    id: 274,
    question: "A company uses AWS Organizations. Which feature can be used to restrict which AWS services member accounts are permitted to use?",
    options: ["IAM Groups", "Service Control Policies (SCPs)", "Security Groups", "Network ACLs"],
    correctAnswer: "B",
    topic: "AWS IAM",
    difficulty: "hard"
  },
  {
    id: 275,
    question: "Under the AWS Shared Responsibility Model, who is responsible for maintaining network connectivity within AWS global infrastructure?",
    options: ["The customer", "AWS", "A third-party vendor", "The IAM admin"],
    correctAnswer: "B",
    topic: "AWS Security",
    difficulty: "medium"
  },
  {
    id: 276,
    question: "Which EC2 instance type is designed for general-purpose workloads requiring a balance of compute, memory, and networking?",
    options: ["T series", "C series", "R series", "G series"],
    correctAnswer: "A",
    topic: "AWS Compute",
    difficulty: "easy"
  },
  {
    id: 277,
    question: "A startup needs EC2 instances with no long-term commitment. Which pricing model is most appropriate?",
    options: ["Reserved Instances", "Spot Instances", "Dedicated Hosts", "On-Demand"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 278,
    question: "At which OSI model layer does a Network Load Balancer (NLB) operate?",
    options: ["Layer 7 (Application)", "Layer 4 (Transport)", "Layer 3 (Network)", "Layer 2 (Data Link)"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "hard"
  },
  {
    id: 279,
    question: "What happens to a Spot Instance when AWS needs to reclaim that capacity?",
    options: ["It is paused automatically", "It is terminated automatically", "It is migrated to a Reserved Instance", "It receives a 2-minute notice"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 280,
    question: "An e-commerce company wants zero downtime during deployments, using a Load Balancer and gradually replacing instances. What deployment pattern is this?",
    options: ["Blue/Green deployment", "Spot deployment", "Batch update", "Rolling deployment"],
    correctAnswer: "A",
    topic: "AWS Deployment",
    difficulty: "hard"
  },
  {
    id: 281,
    question: "Which EC2 feature allows scripts to run automatically when an instance starts?",
    options: ["User Data", "AMI", "Key Pair", "Security Group"],
    correctAnswer: "A",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 282,
    question: "A gaming company requires high compute performance for game servers. Which EC2 instance family is best suited?",
    options: ["T series", "C series (Compute Optimized)", "R series", "I series"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 283,
    question: "An EC2 instance requires persistent block storage, similar to a hard drive. Which AWS service provides this?",
    options: ["S3", "EBS", "EFS", "RDS"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 284,
    question: "A healthcare company needs to archive patient records for 10 years with retrieval required within a few hours. Which S3 storage class fits?",
    options: ["S3 Standard", "S3 Glacier", "S3 Glacier Deep Archive", "Glacier"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "hard"
  },
  {
    id: 285,
    question: "What is the main advantage of Amazon Glacier over S3 Standard for archival storage?",
    options: ["Faster retrieval", "Much lower storage cost", "Higher durability", "Better performance"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 286,
    question: "An EBS volume is automatically deleted when an EC2 instance terminates. What default behavior causes this?",
    options: ["Versioning was disabled", "The 'Delete on Termination' flag was set to true", "The bucket policy enforced deletion", "S3 lifecycle policy"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 287,
    question: "A media company processes large video files on EC2 and needs high-throughput sequential reads. Which EBS volume type is most suitable?",
    options: ["gp2 (General Purpose SSD)", "io1 (Provisioned IOPS SSD)", "st1 (Throughput Optimized HDD)", "sc1 (Cold HDD)"],
    correctAnswer: "C",
    topic: "Storage Services",
    difficulty: "hard"
  },
  {
    id: 288,
    question: "A company encrypts data stored in S3 using AWS-managed keys. Which S3 feature is being used?",
    options: ["S3 Block Public Access", "S3 Server-Side Encryption (SSE-S3)", "S3 ACL", "S3 Bucket policy"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 289,
    question: "A developer packages an application along with all its dependencies into a portable, self-contained unit. What is this unit called?",
    options: ["Virtual Machine", "Container", "AMI", "Instance"],
    correctAnswer: "B",
    topic: "Containerization",
    difficulty: "easy"
  },
  {
    id: 290,
    question: "What does RPO stand for in the context of cloud backups?",
    options: ["Real Processing Output", "Recovery Point Objective", "Replication Process Output", "Resource Pool Optimization"],
    correctAnswer: "B",
    topic: "Cloud Disaster Recovery",
    difficulty: "hard"
  },
  {
    id: 291,
    question: "What is Amazon ECR used for?",
    options: ["Running EC2 containers", "Storing and managing Docker container images", "Building Docker images", "Container orchestration"],
    correctAnswer: "B",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 292,
    question: "Which AWS service is used to run Docker containers as a fully managed service?",
    options: ["Lambda", "EC2 only", "ECS (Elastic Container Service)", "Kubernetes node"],
    correctAnswer: "C",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 293,
    question: "What is the purpose of a Kubernetes Deployment?",
    options: ["Running EC2 instances", "A resource that manages replica sets and ensures desired pod count is maintained", "Building Docker images", "Storing container logs"],
    correctAnswer: "B",
    topic: "Containerization",
    difficulty: "hard"
  },
  {
    id: 294,
    question: "What is the primary purpose of tagging AWS resources?",
    options: ["It speeds up EC2 performance", "It helps with cost allocation, organization, and identifying resource owners", "It encrypts data at rest", "It replaces EC2"],
    correctAnswer: "B",
    topic: "AWS Management",
    difficulty: "medium"
  },
  {
    id: 295,
    question: "What is a Security Group in AWS?",
    options: ["It replaces EC2", "A stateful virtual firewall at the instance level", "A network route", "An IAM permission set"],
    correctAnswer: "B",
    topic: "AWS Security",
    difficulty: "easy"
  },
  {
    id: 296,
    question: "Which Route 53 routing policy directs users to the nearest AWS region based on their geographic location?",
    options: ["Simple routing", "Weighted routing", "Geolocation routing", "Failover routing"],
    correctAnswer: "C",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 297,
    question: "What does 'stateless' mean in the context of NACLs?",
    options: ["NACLs automatically allow return traffic", "NACLs require separate rules for inbound and outbound traffic", "NACLs only apply to instances", "NACL rules are permanent"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "hard"
  },
  {
    id: 298,
    question: "What is the purpose of a VPC Peering connection?",
    options: ["Connecting an on-premises network to AWS", "Connecting two VPCs so they can communicate", "To act as a firewall", "To provide DNS resolution"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 299,
    question: "What does an Internet Gateway do in an AWS VPC?",
    options: ["To act as a firewall", "To allow communication between the VPC and internet", "To provide DNS resolution", "To route traffic through CloudFront"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 300,
    question: "A security engineer needs to block a malicious IP address at the subnet level. Which AWS tool did they use?",
    options: ["Security Group", "Route Table", "NACL", "Internet Gateway"],
    correctAnswer: "C",
    topic: "AWS Security",
    difficulty: "hard"
  },
  {
    id: 301,
    question: "A government agency requires a cloud environment shared only among similar agencies for regulatory compliance. Which deployment model applies?",
    options: ["Public Cloud", "Community Cloud", "Private Cloud", "Hybrid Cloud"],
    correctAnswer: "B",
    topic: "Cloud Deployment Models",
    difficulty: "hard"
  },
  {
    id: 302,
    question: "A small business wants to adopt cloud services quickly with minimal uptime cost and has no significant data sensitivity concerns. Which model is best?",
    options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Community Cloud"],
    correctAnswer: "B",
    topic: "Cloud Deployment Models",
    difficulty: "medium"
  },
  {
    id: 303,
    question: "A large bank wants a cloud environment used exclusively by the bank and hosted internally. Which deployment model applies?",
    options: ["Public Cloud", "Hybrid Cloud", "Private Cloud", "Community Cloud"],
    correctAnswer: "C",
    topic: "Cloud Deployment Models",
    difficulty: "easy"
  },
  {
    id: 304,
    question: "A company transitions from purchasing servers every three years to a monthly cloud bill. What financial shift does this represent?",
    options: ["From CapEx to OpEx", "From OpEx to CapEx", "From SaaS to IaaS", "From Fixed Billing to Variable"],
    correctAnswer: "A",
    topic: "Cloud Economics",
    difficulty: "medium"
  },
  {
    id: 305,
    question: "A retail company scales up cloud servers during Black Friday and reduces them afterward. Which cloud benefit does this illustrate?",
    options: ["Elasticity", "Scalability", "Capital Expenditure", "Community"],
    correctAnswer: "A",
    topic: "Cloud Characteristics",
    difficulty: "easy"
  },
  {
    id: 306,
    question: "A company requires cloud services that comply with HIPAA regulations. Which deployment model offers the most control for compliance?",
    options: ["Public Cloud", "Hybrid", "Private Cloud", "Community Cloud"],
    correctAnswer: "C",
    topic: "Cloud Deployment Models",
    difficulty: "hard"
  },
  {
    id: 307,
    question: "A university shares a cloud environment with other universities for collaborative research. Which deployment model is this?",
    options: ["Public Cloud", "Hybrid Cloud", "Community Cloud", "Private Cloud"],
    correctAnswer: "C",
    topic: "Cloud Deployment Models",
    difficulty: "medium"
  },
  {
    id: 308,
    question: "A company wants to run multiple operating systems on a single physical server. Which technology enables this?",
    options: ["Containerization", "Virtualization", "Replication", "Fixed Provisioning"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 309,
    question: "A developer takes a VM snapshot before applying a patch. What is the main purpose of this snapshot?",
    options: ["To back up to tape", "To restore the VM to previous state if something goes wrong", "To delete the VM", "Monitoring VM performance"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "medium"
  },
  {
    id: 310,
    question: "What is live migration in the context of virtualization?",
    options: ["Deleting a VM at termination", "Copying VM files to a USB", "Moving a running VM from one host to another without downtime", "Deleting old VMs"],
    correctAnswer: "C",
    topic: "Virtualization",
    difficulty: "hard"
  },
  {
    id: 311,
    question: "What is a virtual machine image (or template) used for?",
    options: ["Deleting old VMs", "Quickly deploying pre-configured VMs", "Copying VM files", "Backing up to tape"],
    correctAnswer: "B",
    topic: "Virtualization",
    difficulty: "medium"
  },
  {
    id: 312,
    question: "In VirtualBox, which type of network adapter allows a VM to obtain its own IP address from the home router?",
    options: ["Internal Network", "Host-Only Adapter", "Bridged Adapter", "NAT Adapter"],
    correctAnswer: "C",
    topic: "Virtualization",
    difficulty: "hard"
  },
  {
    id: 313,
    question: "Which term best describes the physical server that hosts and runs the hypervisor?",
    options: ["Guest", "Virtual Machine", "Host", "Instance"],
    correctAnswer: "C",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 314,
    question: "What is a key security concern associated with multitenancy in the cloud?",
    options: ["Hypervisor is too slow", "Data leakage between tenants", "High network latency", "VM performance limitations"],
    correctAnswer: "B",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 315,
    question: "A developer logs into AWS and uses a web interface to launch an EC2 instance. What are they using?",
    options: ["AWS SDK", "AWS CLI", "AWS Management Console", "EC2 Terminal"],
    correctAnswer: "C",
    topic: "AWS Management",
    difficulty: "easy"
  },
  {
    id: 316,
    question: "A company deploys resources across multiple Availability Zones for high availability. What risk does this approach mitigate?",
    options: ["Data center failure", "IAM misconfigurations", "High network latency", "Cost increases"],
    correctAnswer: "A",
    topic: "AWS Reliability",
    difficulty: "medium"
  },
  {
    id: 317,
    question: "Under the AWS Shared Responsibility Model, who is responsible for patching the underlying hypervisor in AWS?",
    options: ["The customer", "AWS", "A third-party vendor", "The IAM admin"],
    correctAnswer: "B",
    topic: "AWS Security",
    difficulty: "hard"
  },
  {
    id: 318,
    question: "Which IAM feature allows administrators to enforce password complexity rules for all users?",
    options: ["IAM Group Rules", "MFA Policy", "IAM Password Policy", "Root Account"],
    correctAnswer: "C",
    topic: "AWS IAM",
    difficulty: "medium"
  },
  {
    id: 319,
    question: "An admin creates an IAM group called 'Developers', attaches a policy, and adds 5 developers to the group. What is the result?",
    options: ["Each developer needs a separate policy", "The policy only applies to the first user added", "All 5 developers get the group's permissions", "IAM Group doesn't work this way"],
    correctAnswer: "C",
    topic: "AWS IAM",
    difficulty: "easy"
  },
  {
    id: 320,
    question: "Which IAM feature enables applications running outside AWS to access AWS resources securely?",
    options: ["Root Account", "IAM Group", "IAM Role with Web Identity Federation", "IAM User"],
    correctAnswer: "C",
    topic: "AWS IAM",
    difficulty: "hard"
  },
  {
    id: 321,
    question: "Which statement accurately describes the difference between IAM roles and IAM users?",
    options: ["Roles have permanent credentials; users don't", "IAM Group Rules apply", "Roles have temporary credentials; users have long-term credentials", "No difference between them"],
    correctAnswer: "C",
    topic: "AWS IAM",
    difficulty: "medium"
  },
  {
    id: 322,
    question: "Which AWS service is used to create and manage IAM users, groups, roles, and policies?",
    options: ["AWS CloudShell", "EC2 Terminal", "IAM (Identity and Access Management)", "AWS CLI"],
    correctAnswer: "C",
    topic: "AWS IAM",
    difficulty: "easy"
  },
  {
    id: 323,
    question: "A data science team requires high GPU performance for machine learning workloads. Which EC2 instance family is most appropriate?",
    options: ["T series (General Purpose)", "C series (Compute Optimized)", "P series or G series (GPU)", "M series (Memory)"],
    correctAnswer: "C",
    topic: "AWS Compute",
    difficulty: "hard"
  },
  {
    id: 324,
    question: "What is an Amazon Machine Image (AMI)?",
    options: ["A physical server configuration", "A pre-configured template used to launch EC2 instances", "A VM template", "An encryption tool"],
    correctAnswer: "B",
    topic: "AWS Compute",
    difficulty: "easy"
  },
  {
    id: 325,
    question: "A company wants to use a browser-based CLI to manage AWS without installing any tools locally. What should they use?",
    options: ["AWS CLI", "AWS CloudShell", "SSH only", "EC2 Terminal"],
    correctAnswer: "B",
    topic: "AWS Management",
    difficulty: "easy"
  },
  {
    id: 326,
    question: "An application needs to handle millions of HTTP requests, with an AWS ALB placed in front of EC2 instances. What does ALB stand for?",
    options: ["Application Load Balancer", "Advanced Layer Balancer", "Auto Load Balancer", "Amazon Lambda Bridge"],
    correctAnswer: "A",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 327,
    question: "An AMI from the AWS Marketplace includes a pre-installed application. What does a developer save by using it?",
    options: ["IAM configuration time", "Network setup time", "Time installing and configuring software from scratch", "It requires a local terminal"],
    correctAnswer: "C",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 328,
    question: "Which feature of AWS CloudShell makes it particularly convenient for AWS management tasks?",
    options: ["It requires a local terminal", "It includes pre-installed AWS CLI and no local setup", "SSH only", "Amazon Linux Base"],
    correctAnswer: "B",
    topic: "AWS Management",
    difficulty: "easy"
  },
  {
    id: 329,
    question: "What is the benefit of deploying an Auto Scaling Group across multiple Availability Zones?",
    options: ["Lower costs", "Higher durability", "Faster CPU performance", "High availability - if one zone fails, others keep running"],
    correctAnswer: "D",
    topic: "AWS Reliability",
    difficulty: "hard"
  },
  {
    id: 330,
    question: "What is the maximum size of a single object that can be uploaded to S3?",
    options: ["1 GB", "5 TB", "10 GB", "100 GB"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 331,
    question: "An EBS volume is attached to an EC2 instance in us-east-1a. Can it be attached simultaneously to an instance in us-east-1b?",
    options: ["No, EBS is specific to an AZ", "Yes, EBS is region-wide", "Only with special configuration", "EBS doesn't work this way"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "hard"
  },
  {
    id: 332,
    question: "What distinguishes Amazon EFS from Amazon EBS?",
    options: ["EFS is cheaper than EBS", "EBS is cheaper than EFS", "EFS can be accessed by multiple EC2 instances simultaneously; EBS is attached to one instance", "Both are the same"],
    correctAnswer: "C",
    topic: "Storage Services",
    difficulty: "hard"
  },
  {
    id: 333,
    question: "What is the difference between S3 Standard-IA and S3 One Zone-IA?",
    options: ["One Zone-IA stores data in only one AZ, making it less resilient but cheaper", "Standard-IA is for rarely accessed data", "Both have the same cost", "One Zone-IA is more expensive"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 334,
    question: "An application stores user-uploaded profile pictures in S3. What type of URL does each stored object receive?",
    options: ["A VPC endpoint", "A unique S3 object URL", "An IP address", "A bucket URL only"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 335,
    question: "Which EBS volume type is most appropriate for boot volumes and general-purpose workloads?",
    options: ["st1 (Throughput Optimized)", "gp2 or gp3 (General Purpose SSD)", "io1 (Provisioned IOPS)", "sc1 (Cold HDD)"],
    correctAnswer: "B",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 336,
    question: "An S3 bucket policy grants 's3:* to Everyone'. What security risk does this create?",
    options: ["Bucket becomes unreadable", "Bucket becomes publicly readable and writable - a major security risk", "Versioning was disabled", "The bucket policy enforced deletion"],
    correctAnswer: "B",
    topic: "AWS Security",
    difficulty: "hard"
  },
  {
    id: 337,
    question: "What is Kubernetes primarily used for?",
    options: ["Building Docker images", "Running EC2 containers", "Orchestrating and managing containerized workloads at scale", "Storing container logs"],
    correctAnswer: "C",
    topic: "Containerization",
    difficulty: "hard"
  },
  {
    id: 338,
    question: "What is the smallest deployable unit in Kubernetes?",
    options: ["Container", "Pod", "Node", "Service"],
    correctAnswer: "B",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 339,
    question: "Which cloud security concept ensures users only have access to the resources they need for their role?",
    options: ["Zero Trust", "Defense in Depth", "Least Privilege", "Security hardening"],
    correctAnswer: "C",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 340,
    question: "What does 'encryption in transit' mean?",
    options: ["Data is encrypted while stored on disk", "Data is encrypted while moving between systems over the network", "Data is encrypted in the database", "Both at rest and in transit"],
    correctAnswer: "B",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 341,
    question: "What does 'immutable infrastructure' mean in the context of containerization?",
    options: ["Containers cannot connect to the internet", "Instead of updating containers, containers are replaced", "Containers are ephemeral", "Containers are encrypted"],
    correctAnswer: "B",
    topic: "Containerization",
    difficulty: "hard"
  },
  {
    id: 342,
    question: "A company reduces cloud costs by deleting unused EBS volumes and releasing unattached Elastic IPs. What practice is this an example of?",
    options: ["Cloud cost optimization", "Backup strategy", "Defense in Depth", "Security hardening"],
    correctAnswer: "A",
    topic: "Cloud Economics",
    difficulty: "medium"
  },
  {
    id: 343,
    question: "A company wants to allow only HTTPS traffic (port 443) to reach their web server EC2 instance. What should they configure?",
    options: ["Route Table", "Security Group", "NACL only", "Internet Gateway"],
    correctAnswer: "B",
    topic: "AWS Security",
    difficulty: "medium"
  },
  {
    id: 344,
    question: "What is Amazon CloudFront primarily used for?",
    options: ["Domain registration", "Content delivery (CDN) to cache content to users", "Relational database hosting", "Security groups"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "easy"
  },
  {
    id: 345,
    question: "What is an Elastic Network Interface (ENI) in the context of an AWS VPC?",
    options: ["A VPN tunnel", "A virtual network card that can be attached to an EC2 instance", "A Route Table", "A security certificate"],
    correctAnswer: "B",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 346,
    question: "A company needs full control over its OS and network configuration but does not want to purchase physical hardware. Which cloud service model should they choose?",
    options: ["SaaS", "PaaS", "IaaS", "Bare-metal"],
    correctAnswer: "C",
    topic: "Cloud Service Models",
    difficulty: "medium"
  },
  {
    id: 347,
    question: "A company moves old records to cold storage after 90 days. Which phase of the cloud data lifecycle does this represent?",
    options: ["Create", "Use", "Archive", "Destroy"],
    correctAnswer: "C",
    topic: "Cloud Data Lifecycle",
    difficulty: "medium"
  },
  {
    id: 348,
    question: "A team is running reports and queries against data stored in the cloud. Which cloud data lifecycle phase are they currently in?",
    options: ["Store", "Create", "Use", "Share"],
    correctAnswer: "C",
    topic: "Cloud Data Lifecycle",
    difficulty: "easy"
  },
  {
    id: 349,
    question: "A company transmits sales data from its cloud database to a partner company's system. Which cloud data lifecycle phase is this?",
    options: ["Store", "Create", "Use", "Share"],
    correctAnswer: "D",
    topic: "Cloud Data Lifecycle",
    difficulty: "medium"
  },
  {
    id: 350,
    question: "Which cloud characteristic enables resources to be dynamically added or removed based on workload demand?",
    options: ["Resource Pooling", "Broad Network Access", "Rapid Elasticity", "Measured Service"],
    correctAnswer: "C",
    topic: "Cloud Characteristics",
    difficulty: "medium"
  },
  {
    id: 351,
    question: "A developer provisions a virtual machine in minutes without contacting IT. What NIST cloud characteristic does this reflect?",
    options: ["On-Demand Self-Service", "Measured Service", "Resource Pooling", "EULA"],
    correctAnswer: "A",
    topic: "Cloud Characteristics",
    difficulty: "easy"
  },
  {
    id: 352,
    question: "A cloud provider guarantees 99.9% uptime in a formal contract. What is this agreement called?",
    options: ["SLA", "EULA", "IAM Policy", "MOU"],
    correctAnswer: "A",
    topic: "Cloud Governance",
    difficulty: "easy"
  },
  {
    id: 353,
    question: "Which type of hypervisor runs directly on physical hardware without requiring a host OS?",
    options: ["Type 1", "Type 2", "Type 3", "Hosted hypervisor"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "easy"
  },
  {
    id: 354,
    question: "An e-commerce site automatically adds virtual servers during a product launch and removes them afterward. Which feature enables this?",
    options: ["Elasticity", "Multitenancy", "Load balancing", "Reservation"],
    correctAnswer: "A",
    topic: "Cloud Characteristics",
    difficulty: "easy"
  },
  {
    id: 355,
    question: "Which of the following is an example of a Type 1 hypervisor?",
    options: ["Microsoft Hyper-V", "VMware Workstation", "VirtualBox", "Docker"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "medium"
  },
  {
    id: 356,
    question: "Which VirtualBox feature allows you to create a copy of a VM for testing purposes without altering the original?",
    options: ["Clone", "Snapshot", "Clustering", "Bridge"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "medium"
  },
  {
    id: 357,
    question: "A hosting company allows multiple businesses to share the same physical server while ensuring they cannot access each other's data. What is this an example of?",
    options: ["Multitenancy", "Clustering", "Cloning", "Vertical scaling"],
    correctAnswer: "A",
    topic: "Cloud Characteristics",
    difficulty: "medium"
  },
  {
    id: 358,
    question: "What is the difference between vertical scaling and horizontal scaling?",
    options: ["Vertical adds more resources to an existing server; horizontal adds more servers", "Vertical adds more servers; horizontal adds more RAM", "They mean the same thing", "Horizontal only applies to storage"],
    correctAnswer: "A",
    topic: "Cloud Characteristics",
    difficulty: "medium"
  },
  {
    id: 359,
    question: "Which virtualization feature enables a failed VM to automatically restart on another physical host?",
    options: ["High Availability (HA)", "Snapshot", "Cloning", "EULA"],
    correctAnswer: "A",
    topic: "Virtualization",
    difficulty: "hard"
  },
  {
    id: 360,
    question: "What is the primary purpose of having multiple Availability Zones within a single AWS Region?",
    options: ["To enable fault tolerance and high availability", "To decrease storage costs", "To improve DNS registration", "To minimize billing complexity"],
    correctAnswer: "A",
    topic: "AWS Infrastructure",
    difficulty: "easy"
  },
  {
    id: 361,
    question: "A company wants to apply the same set of permissions to all developers on their team. Which IAM feature should they use?",
    options: ["IAM Group", "IAM User", "IAM Role", "Root account access"],
    correctAnswer: "A",
    topic: "AWS IAM",
    difficulty: "easy"
  },
  {
    id: 362,
    question: "What is the principle of least privilege in IAM?",
    options: ["Give users only the permissions they need to do their job", "Give all users admin access", "Share root credentials", "Rotate passwords annually"],
    correctAnswer: "A",
    topic: "AWS IAM",
    difficulty: "easy"
  },
  {
    id: 363,
    question: "An IAM policy is attached directly to a user rather than through a group. What is this considered?",
    options: ["IAM Policy", "IAM Group", "IAM Role", "Best practice"],
    correctAnswer: "A",
    topic: "AWS IAM",
    difficulty: "medium"
  },
  {
    id: 364,
    question: "A Lambda function needs to write logs to Amazon CloudWatch. What should be attached to the function to allow this?",
    options: ["IAM Role", "IAM User", "IAM Group", "IAM Policy"],
    correctAnswer: "A",
    topic: "AWS IAM",
    difficulty: "medium"
  },
  {
    id: 365,
    question: "Under the AWS Shared Responsibility Model, which of these is the customer's responsibility when using S3?",
    options: ["S3 bucket permissions and access control", "Durability of S3 infrastructure", "Physical disk management", "AWS network backbone maintenance"],
    correctAnswer: "A",
    topic: "AWS Security",
    difficulty: "hard"
  },
  {
    id: 366,
    question: "What is an Elastic IP address?",
    options: ["A static public IPv4 address associated with your AWS account", "A dynamic IP that changes with each EC2 restart", "A private IP inside the VPC", "An IP used only for S3"],
    correctAnswer: "A",
    topic: "AWS Networking",
    difficulty: "easy"
  },
  {
    id: 367,
    question: "Which EC2 purchasing option provides the largest discount for consistent, long-term workloads?",
    options: ["Reserved Instances", "On-Demand", "Spot Instances", "Dedicated Hosts"],
    correctAnswer: "A",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 368,
    question: "What is the purpose of an EC2 key pair?",
    options: ["To SSH securely into a Linux EC2 instance", "To encrypt S3 data", "To assign an Elastic IP", "To scale EC2 automatically"],
    correctAnswer: "A",
    topic: "AWS Security",
    difficulty: "easy"
  },
  {
    id: 369,
    question: "Which EC2 instance type family is optimized for storage-heavy workloads requiring high disk throughput?",
    options: ["I series (Storage Optimized)", "T series (General Purpose)", "R series (Memory Optimized)", "C series (Compute Optimized)"],
    correctAnswer: "A",
    topic: "AWS Compute",
    difficulty: "medium"
  },
  {
    id: 370,
    question: "A developer uses AWS CloudShell to run CLI commands. Where does CloudShell run?",
    options: ["In AWS-managed infrastructure via browser", "On the developer's laptop", "Inside the EC2 instance", "In a local Docker container"],
    correctAnswer: "A",
    topic: "AWS Management",
    difficulty: "easy"
  },
  {
    id: 371,
    question: "A company wants to test a new application version alongside the existing one and gradually shift traffic to it. Which deployment strategy fits?",
    options: ["Blue/Green deployment", "Spot Instance deployment", "Batch update", "Clustering"],
    correctAnswer: "A",
    topic: "AWS Deployment",
    difficulty: "medium"
  },
  {
    id: 372,
    question: "A company runs 3 EC2 instances behind a Load Balancer. One instance fails its health checks. What does the Load Balancer do?",
    options: ["Stops routing traffic to the unhealthy instance", "Sends traffic equally including the failed one", "Terminates all instances", "Creates a new VPC"],
    correctAnswer: "A",
    topic: "AWS Networking",
    difficulty: "medium"
  },
  {
    id: 373,
    question: "Multiple EC2 instances in different Availability Zones need access to a shared file system. Which AWS storage service supports this?",
    options: ["EFS", "EBS", "S3", "Instance Store"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 374,
    question: "What is the fundamental unit of storage in Amazon S3?",
    options: ["Object", "Block", "File", "Snapshot"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 375,
    question: "An S3 bucket has 'Block Public Access' enabled. What does this setting enforce?",
    options: ["No public internet access to objects is allowed", "The bucket is deleted", "Only IAM users can delete objects", "Versioning is mandatory"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 376,
    question: "A developer stores daily database backups in S3 and wants them to automatically move to Glacier after 30 days. What automates this?",
    options: ["S3 Lifecycle Policy", "S3 Versioning", "S3 Replication", "S3 ACL"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 377,
    question: "Which S3 feature protects against accidental deletion by retaining multiple versions of an object?",
    options: ["S3 Versioning", "S3 Block Public Access", "S3 Intelligent-Tiering", "S3 Server-Side Encryption"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "medium"
  },
  {
    id: 378,
    question: "What does Amazon EFS do automatically when additional storage capacity is needed?",
    options: ["It expands automatically", "It requires manual volume provisioning", "It creates a new bucket", "It deletes unused files"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 379,
    question: "What is the primary use case for Amazon S3 Glacier?",
    options: ["Long-term archival storage", "High-performance database storage", "Real-time application data", "Container image hosting"],
    correctAnswer: "A",
    topic: "Storage Services",
    difficulty: "easy"
  },
  {
    id: 380,
    question: "What is the main distinction between a container and a virtual machine?",
    options: ["Containers share the host OS; VMs include their own OS", "Containers include a full OS; VMs do not", "VMs are always smaller than containers", "They are identical"],
    correctAnswer: "A",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 381,
    question: "Which AWS service runs containers without requiring users to manage the underlying servers?",
    options: ["AWS Fargate", "EC2", "RDS", "CloudTrail"],
    correctAnswer: "A",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 382,
    question: "A company wants to identify where they are spending the most money in AWS. Which tool provides this insight?",
    options: ["AWS Cost Explorer", "AWS Budgets", "CloudWatch", "CloudTrail"],
    correctAnswer: "A",
    topic: "AWS Cost Management",
    difficulty: "easy"
  },
  {
    id: 383,
    question: "A development team accidentally leaves 50 EC2 instances running over a weekend. Which AWS tool can alert them about budget overruns?",
    options: ["AWS Budgets", "CloudWatch", "IAM Alert", "AWS Cost Explorer"],
    correctAnswer: "A",
    topic: "AWS Cost Management",
    difficulty: "easy"
  },
  {
    id: 384,
    question: "What does 'encryption at rest' mean?",
    options: ["Data is encrypted while stored on disk", "Data is encrypted while being sent over the network", "Data is encrypted only in transit", "Data is encrypted inside CloudShell"],
    correctAnswer: "A",
    topic: "Cloud Security",
    difficulty: "medium"
  },
  {
    id: 385,
    question: "What is a key benefit of using serverless containers such as AWS Fargate?",
    options: ["You pay only for vCPU and memory used, no server management required", "You must provision nodes", "You manage the EC2 servers yourself", "It only works with public IPs"],
    correctAnswer: "A",
    topic: "Containerization",
    difficulty: "medium"
  },
  {
    id: 386,
    question: "A VPC has two subnets, one in AZ-1a and one in AZ-1b. What does deploying resources in both AZs provide?",
    options: ["High availability", "Cross-region access", "Better DNS routing", "Lower IAM risk"],
    correctAnswer: "A",
    topic: "AWS Reliability",
    difficulty: "easy"
  },
  {
    id: 387,
    question: "What does the 'outbound rule' of an AWS Security Group control?",
    options: ["Traffic leaving the instance", "Traffic coming into the instance", "Traffic between regions", "Traffic from S3 only"],
    correctAnswer: "A",
    topic: "AWS Security",
    difficulty: "easy"
  },
  {
    id: 388,
    question: "Which Route 53 routing policy distributes traffic across multiple resources based on assigned weight values?",
    options: ["Weighted routing", "Failover routing", "Geolocation routing", "Simple routing"],
    correctAnswer: "A",
    topic: "Networking Services",
    difficulty: "medium"
  },
  {
    id: 389,
    question: "A company needs full control over its OS and network configuration but does not want to purchase physical hardware. Which cloud service model should they choose?",
    options: ["IaaS", "PaaS", "SaaS", "On-Premises"],
    correctAnswer: "A",
    topic: "Cloud Service Models",
    difficulty: "medium"
  },
  {
    id: 390,
    question: "A company moves old records to cold storage after 90 days. Which phase of the cloud data lifecycle does this represent?",
    options: ["Archive", "Create", "Use", "Share"],
    correctAnswer: "A",
    topic: "Cloud Data Lifecycle",
    difficulty: "medium"
  },
  {
    id: 391,
    question: "A team is running reports and queries against data stored in the cloud. Which cloud data lifecycle phase are they currently in?",
    options: ["Use", "Store", "Create", "Share"],
    correctAnswer: "A",
    topic: "Cloud Data Lifecycle",
    difficulty: "easy"
  },
  {
    id: 392,
    question: "A company transmits sales data from its cloud database to a partner company's system. Which cloud data lifecycle phase is this?",
    options: ["Share", "Store", "Use", "Create"],
    correctAnswer: "A",
    topic: "Cloud Data Lifecycle",
    difficulty: "easy"
  },
  {
    id: 393,
    question: "Which cloud characteristic enables resources to be dynamically added or removed based on workload demand?",
    options: ["Rapid Elasticity", "Resource Pooling", "Broad Network Access", "Measured Service"],
    correctAnswer: "A",
    topic: "Cloud Characteristics",
    difficulty: "medium"
  }
]
