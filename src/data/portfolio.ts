export const metadata = {
  name: "Rohith Sai Ganesh",
  title: "AI Full Stack Developer",
  description: "Architecting intelligent, scalable web applications powered by generative AI.",
  email: "gangarapurohith4@gmail.com",
  github: "https://github.com/RohithGangarapu",
  linkedin: "https://linkedin.com/in/rohithgangarapu",
  leetcode: "https://leetcode.com/RohithGangarapu1",
  resume: "https://drive.google.com/file/d/1peMWVPih8EHag_MP-79JcvHZ5lPr53dO/view?usp=drive_link", // Add actual resume link here later
};

export const skills = {
  "Languages": [
    { name: "Python", percentage: 95 },
    { name: "Java", percentage: 85 },
    { name: "C", percentage: 80 },
    { name: "JavaScript", percentage: 75 }
  ],
  "AI/GenAI": [
    { name: "LangChain", percentage: 90 },
    { name: "LangGraph", percentage: 85 },
    { name: "RAG", percentage: 95 },
    { name: "LLMs", percentage: 90 },
    { name: "Vector Databases", percentage: 85 },
    { name: "OpenRouter", percentage: 80 }
  ],
  "Backend": [
    { name: "Django", percentage: 95 },
    { name: "Django REST Framework", percentage: 90 },
    { name: "FastAPI", percentage: 85 }
  ],
  "Frontend": [
    { name: "React.js", percentage: 80 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 }
  ],
  "Databases": [
    { name: "PostgreSQL", percentage: 90 },
    { name: "Oracle", percentage: 85 },
    { name: "MongoDB", percentage: 80 }
  ],
  "Automation": [
    { name: "Selenium", percentage: 85 },
    { name: "Playwright", percentage: 80 }
  ],
  "Cloud/DevOps": [
    { name: "AWS", percentage: 80 },
    { name: "Docker", percentage: 85 },
    { name: "Git", percentage: 90 },
    { name: "Linux", percentage: 85 },
    { name: "Windows", percentage: 90 }
  ]
};

export const experience = [
  {
    company: "Cyethack Solutions Pvt Ltd.",
    role: "Python Developer (Full-time)",
    period: "Sep 2025 - Present",
    points: [
      "Architected a remote-first auditing platform designed for 100K+ endpoints, prioritizing highly efficient codebase structures.",
      "Designed and optimized high-throughput backend services using Django, Django REST Framework, and WebSockets.",
      "Developed a high-performance, multi-threaded audit parsing engine, improving system responsiveness.",
      "Optimized database architecture and queries, driving a 6.7× improvement in throughput (30K to 200K+ audits/day)."
    ],
  },
  {
    company: "BYTO",
    role: "Python Developer (Remote Intern)",
    period: "May 2025 - Aug 2025",
    points: [
      "Engineered scalable Django REST Framework APIs to support complex logistics workflows for 200+ clients.",
      "Utilized best practices for clean, efficient backend development.",
      "Enhanced PostgreSQL database performance by 30% through strategic indexing and query optimization.",
      "Directly improved API response latency in a remote-distributed environment."
    ],
  },
];

export const projects = [
  {
    id: "01",
    title: "IoT Assisted Pothole Detection System",
    description: "Automated road hazard tracking via machine learning.",
    problem: "Inefficient manual road hazard reporting.",
    solution: "YOLOv8 & OpenCV computer vision pipeline detecting anomalies on live map views.",
    technologies: ["React Native", "Django", "YOLOv8", "OpenCV"],
    results: "Real-time automated incident tracking.",
    link: "#",
    github: "https://github.com/RohithGangarapu/IOT-Assisted-RealTime-PotholeDetection-System",
    video: "/projects/roadguard.mp4" // Placeholder path for user
  },
  {
    id: "02",
    title: "Reddit Review Analyzer",
    description: "AI-powered product review aggregator & synthesis engine.",
    problem: "High-latency synthesis of unstructured Reddit discussions.",
    solution: "High-speed Playwright crawler backed by a localized RAG system.",
    technologies: ["FastAPI", "React", "LangChain", "Playwright"],
    results: "Interactive multi-turn QA via serverless Hugging Face.",
    link: "#",
    github: "https://github.com/RohithGangarapu/Reddit-Review-Analyzer-AI",
    video: "/projects/reddit.mp4" // Placeholder path for user
  },
  {
    id: "03",
    title: "LLM Form Automator",
    description: "Intelligent auto-filling for complex online forms.",
    problem: "Manual, error-prone data entry from unstructured resumes.",
    solution: "Full-stack resume parser utilizing DOM scraping and multi-LLM consensus voting.",
    technologies: ["FastAPI", "Selenium", "Docker", "OpenRouter"],
    results: "Highly accurate auto-extraction and submission.",
    link: "#",
    github: "https://github.com/RohithGangarapu/LLM-based-FormAutomation.git",
    video: "/projects/automator.mp4" // Placeholder path for user
  }
];

export const achievements = [
  {
    title: "3rd Place – Brainovision 24-Hour Hackathon",
    category: "Hackathon",
    date: "2024",
    description: "Built AI Tutor using GPT for personalized learning."
  }
];

export const certifications = [
  {
    title: "Python Basic",
    issuer: "Hackerrank"
  },
  {
    title: "Geodata Analysis using AI & ML",
    issuer: "ISRO"
  },
  {
    title: "Introduction to Programming Using Python",
    issuer: "Udemy"
  },
  {
    title: "Introduction to Programming Using Java",
    issuer: "Scaler"
  },
  {
    title: "Machine Learning",
    issuer: "Internshala"
  }
];
