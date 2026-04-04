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
  }
]
