export const PORTFOLIO_INFO = {
  name: "Tabish Firoz",
  shortName: "Tabish",
  title: "Full Stack Engineer & Core Java Specialist",
  college: "Centurion University of Technology and Management (CUTM)",
  degree: "B.Tech in Computer Science and Engineering (2023 - 2027)",
  cgpa: "9.3 / 10",
  location: "Jehanabad, Bihar, India",
  email: "mdtabishfiroz04@gmail.com",
  phone: "+91 81029 46894",
  github: "https://github.com/firozmdtabish04",
  linkedin: "https://www.linkedin.com/in/tabish-firoz/",
  instagram: "https://www.instagram.com/firozmdtabish/",
  book: {
    title: "Core Java: Beginner to Advanced",
    pages: "858 Pages",
    year: "2026",
    publisher: "Google Books & Independent Publishing",
    description: "Comprehensive guide covering OOP principles, Collections Framework, Multi-threaded Concurrency, JDBC, and Java 8 Streams.",
  },
  gfg: {
    solved: "401+ Problems",
    rank: "Top 10% Problem Solvers Globally",
    breakdown: "87 Basic, 121 Easy, 150 Medium, 43 Hard",
  },
  internship: {
    role: "Full Stack Developer Intern — CRM Engineering",
    company: "Lyient Technologies",
    period: "2024 – Present",
    desc: "Engineered production CRM dashboards, employee data lifecycle modules, JWT role authentication, and high-performance React component systems integrated with Spring Boot REST endpoints.",
  },
  coreTech: [
    "Java 17",
    "Spring Boot",
    "Spring Security & JWT",
    "Hibernate / JPA",
    "React.js",
    "Tailwind CSS",
    "Redis (Distributed Caching)",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "RESTful Microservices",
    "Data Structures & Algorithms",
  ],
  featuredProjects: [
    {
      title: "Smart Disaster Response Platform (ResqueOS)",
      tag: "Flagship / Full Stack",
      desc: "AI-powered disaster management system with real-time hazard mapping, NASA API integration (EONET/NeoWs), Redis caching, and Spring Boot REST microservices.",
      demo: "https://resqueos.vercel.app/login",
      link: "/projects",
    },
    {
      title: "Hospital Management System",
      tag: "Enterprise / Healthcare",
      desc: "Clinical workflow portal with digitized EMR, doctor appointment allocation, role-based auth (Admin, Doctor, Patient), and optimized MySQL relational schema.",
      link: "/projects",
    },
    {
      title: "Lyient CRM Portal",
      tag: "Production CRM",
      desc: "Enterprise employee and lead lifecycle management system built with Spring Boot, JWT role permissions, and React dashboards.",
      link: "/projects",
    },
  ],
};

export const QUICK_SUGGESTIONS = [
  "🚀 Top Projects",
  "💻 Core Skills",
  "📄 Download Resume",
  "📚 Published Book",
  "🏆 Achievements & GfG",
  "🎓 Education & CGPA",
  "💼 Work Experience",
  "📬 Contact Details",
];

export function getBotResponse(inputMessage) {
  const query = inputMessage.toLowerCase().trim();

  // 1. Greetings
  if (
    /^(hi|hello|hey|hola|sup|good morning|good afternoon|good evening|namaste|greetings)/i.test(
      query
    )
  ) {
    return {
      text: `Hello there! 👋 I'm **Tabish's AI Assistant**.\n\nI can tell you all about Tabish's **engineering projects**, **core Java & Spring Boot expertise**, **academic credentials**, **published book**, or help you get in touch with him.\n\nWhat would you like to explore?`,
      suggestions: ["🚀 Top Projects", "💻 Core Skills", "📄 Download Resume", "📬 Contact Details"],
    };
  }

  // 2. Who is Tabish / Bio / Intro
  if (
    query.includes("who is") ||
    query.includes("who are you") ||
    query.includes("about tabish") ||
    query.includes("introduce") ||
    query.includes("about you") ||
    query.includes("tell me about")
  ) {
    return {
      text: `**Tabish Firoz** is a passionate **Full Stack Engineer & Core Java Specialist** currently pursuing his B.Tech in CSE at Centurion University with an impressive **9.3 CGPA**.\n\n🌟 **Key Highlights:**\n• **Core Stack:** Spring Boot, Java 17, React, Redis, PostgreSQL, MySQL\n• **Author:** Published an **858-page book** on *Core Java: Beginner to Advanced*\n• **DSA Milestone:** Top 10% solver on GeeksforGeeks (401+ problems)\n• **Experience:** Full Stack Developer Intern at *Lyient Technologies*\n• **Flagship Work:** NASA API integrated Disaster Response System (ResqueOS)`,
      links: [
        { label: "Learn More on About Page", to: "/about" },
        { label: "Explore Projects", to: "/projects" },
      ],
      suggestions: ["💻 Core Skills", "🚀 Top Projects", "📄 Download Resume"],
    };
  }

  // 3. Resume / CV
  if (
    query.includes("resume") ||
    query.includes("cv") ||
    query.includes("curriculum vitae") ||
    query.includes("download resume")
  ) {
    return {
      text: `You can download Tabish's latest engineering resume right here! It details his full-stack projects, internship experience, certifications, and technical proficiencies.`,
      action: { type: "download_resume", label: "Download Resume (PDF)" },
      links: [
        { label: "View About Page", to: "/about" },
        { label: "Contact Tabish", to: "/contact" },
      ],
      suggestions: ["🚀 Top Projects", "💻 Core Skills", "📬 Contact Details"],
    };
  }

  // 4. Projects
  if (
    query.includes("project") ||
    query.includes("portfolio") ||
    query.includes("work") ||
    query.includes("resqueos") ||
    query.includes("disaster") ||
    query.includes("hospital") ||
    query.includes("built")
  ) {
    return {
      text: `Tabish has engineered **14+ production-ready projects** spanning full-stack, distributed caching, and microservices.\n\n🔥 **Featured Highlights:**\n\n1. **Smart Disaster Response Platform (ResqueOS)**\n   • Live incident tracking & NASA telemetry (EONET/NeoWs)\n   • High-speed Redis caching & Spring Boot microservices\n   • [Live Demo: resqueos.vercel.app](https://resqueos.vercel.app/login)\n\n2. **Hospital Management System**\n   • Digital Electronic Medical Records (EMR) & doctor scheduling\n   • Role-based authentication (Admin, Doctor, Patient) & MySQL schema\n\n3. **Lyient CRM Engineering**\n   • Enterprise customer & employee lifecycle portal with JWT auth\n\nCheck out the full interactive projects gallery!`,
      links: [
        { label: "View All 14+ Projects", to: "/projects" },
        { label: "Visit ResqueOS Live Demo", href: "https://resqueos.vercel.app/login" },
      ],
      suggestions: ["💻 Core Skills", "📄 Download Resume", "📬 Contact Details"],
    };
  }

  // 5. Skills & Tech Stack
  if (
    query.includes("skill") ||
    query.includes("stack") ||
    query.includes("tech") ||
    query.includes("java") ||
    query.includes("spring") ||
    query.includes("react") ||
    query.includes("redis") ||
    query.includes("database") ||
    query.includes("frontend") ||
    query.includes("backend")
  ) {
    return {
      text: `Tabish's technical repertoire spans both high-throughput backends and reactive frontends:\n\n☕ **Backend & Microservices:**\n• Java 17, Spring Boot, Spring Security, JWT\n• Hibernate / JPA ORM, RESTful API Architecture\n\n⚡ **Database & In-Memory Caching:**\n• Redis (Distributed caching & sub-millisecond queries)\n• PostgreSQL, MySQL, Schema Indexing & Optimization\n\n⚛️ **Frontend & UI/UX:**\n• React.js, Tailwind CSS, JavaScript (ES6+), Responsive UI\n\n🛠️ **DevOps & Tools:**\n• Docker, Git, GitHub, Maven, Postman, Linux`,
      links: [{ label: "Browse Detailed Skills Page", to: "/skills" }],
      suggestions: ["🚀 Top Projects", "📚 Published Book", "📄 Download Resume"],
    };
  }

  // 6. Published Book
  if (
    query.includes("book") ||
    query.includes("author") ||
    query.includes("published") ||
    query.includes("858") ||
    query.includes("core java")
  ) {
    return {
      text: `📖 **Author & Publisher:**\nTabish authored and published an extensive **858-page comprehensive book**: **"Core Java: Beginner to Advanced"** (2026).\n\n📌 **Key Topics Covered:**\n• Object-Oriented Architecture & Design Patterns\n• Deep dive into Collections Framework & Generics\n• Multi-threaded Concurrency & Thread Synchronization\n• JDBC Database Persistence\n• Java 8+ Lambda Expressions & Stream APIs\n\nPublished on Google Books & Independent distribution!`,
      links: [
        { label: "Read in Achievements", to: "/achievements" },
        { label: "Contact for Inquiries", to: "/contact" },
      ],
      suggestions: ["🏆 Achievements & GfG", "💻 Core Skills", "🚀 Top Projects"],
    };
  }

  // 7. Achievements & Competitive Programming / GeeksforGeeks / Hackathons
  if (
    query.includes("achievement") ||
    query.includes("gfg") ||
    query.includes("geeksforgeeks") ||
    query.includes("rank") ||
    query.includes("hackathon") ||
    query.includes("sih") ||
    query.includes("dsa") ||
    query.includes("problems") ||
    query.includes("certificate")
  ) {
    return {
      text: `🏆 **Notable Achievements & Competitive Coding:**\n\n• **Top 10% Globally on GeeksforGeeks:**\n  Solved **401+ Algorithmic Problems** (87 Basic, 121 Easy, 150 Medium, 43 Hard) across Arrays, Trees, Dynamic Programming, and Graphs.\n\n• **Smart India Hackathon (SIH) Finalist:**\n  Selected as Internal Finalist at CUTM for solving high-impact real-world challenges.\n\n• **IIT Bhubaneswar Hackathon:**\n  Competed in the Web Design Sprint Hackathon.\n\n• **858-Page Technical Book Author** (Core Java).`,
      links: [{ label: "View All Achievements & Certs", to: "/achievements" }],
      suggestions: ["📚 Published Book", "🚀 Top Projects", "🎓 Education & CGPA"],
    };
  }

  // 8. Education / College / CGPA
  if (
    query.includes("education") ||
    query.includes("college") ||
    query.includes("university") ||
    query.includes("cgpa") ||
    query.includes("btech") ||
    query.includes("cutm") ||
    query.includes("centurion") ||
    query.includes("degree") ||
    query.includes("study")
  ) {
    return {
      text: `🎓 **Education & Academic Distinction:**\n\n• **Degree:** B.Tech in Computer Science and Engineering\n• **Institution:** Centurion University of Technology and Management (CUTM)\n• **Batch:** 2023 – 2027 (CSE '27)\n• **Academic Record:** **9.3 / 10 CGPA**\n• **Core Coursework:** Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering, Cloud Architecture.`,
      links: [{ label: "View Timeline on About Page", to: "/about" }],
      suggestions: ["💼 Work Experience", "💻 Core Skills", "📄 Download Resume"],
    };
  }

  // 9. Work Experience / Internship
  if (
    query.includes("experience") ||
    query.includes("intern") ||
    query.includes("job") ||
    query.includes("lyient") ||
    query.includes("company") ||
    query.includes("work")
  ) {
    return {
      text: `💼 **Professional Experience:**\n\n**Full Stack Developer Intern — CRM Engineering**\n🏢 *Lyient Technologies* (2024 – Present)\n\n• Built scalable CRM dashboards and employee lifecycle management modules.\n• Implemented secure JWT role-based access control and REST endpoints with Spring Boot.\n• Developed fluid, accessible React interfaces with optimized state and reusable component architectures.`,
      links: [
        { label: "View About Timeline", to: "/about" },
        { label: "Contact Tabish", to: "/contact" },
      ],
      suggestions: ["🚀 Top Projects", "💻 Core Skills", "📄 Download Resume"],
    };
  }

  // 10. Contact / Email / Phone / Social
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("call") ||
    query.includes("whatsapp") ||
    query.includes("reach") ||
    query.includes("hire") ||
    query.includes("opportunity") ||
    query.includes("location") ||
    query.includes("where")
  ) {
    return {
      text: `📬 **Get in Touch with Tabish:**\n\n• 📧 **Email:** [mdtabishfiroz04@gmail.com](mailto:mdtabishfiroz04@gmail.com)\n• 📱 **Phone / WhatsApp:** [+91 81029 46894](tel:+918102946894)\n• 📍 **Location:** Jehanabad, Bihar, India\n• 💼 **LinkedIn:** [linkedin.com/in/tabish-firoz](https://www.linkedin.com/in/tabish-firoz/)\n• 🐙 **GitHub:** [github.com/firozmdtabish04](https://github.com/firozmdtabish04)\n\nTabish typically responds within **2–4 hours**!`,
      links: [
        { label: "Open Contact Form", to: "/contact" },
        { label: "Send Email Directly", href: "mailto:mdtabishfiroz04@gmail.com" },
      ],
      suggestions: ["📄 Download Resume", "🚀 Top Projects", "💼 Work Experience"],
    };
  }

  // 11. Services / Freelance
  if (
    query.includes("service") ||
    query.includes("freelance") ||
    query.includes("offer") ||
    query.includes("consult")
  ) {
    return {
      text: `🛠️ **Engineering Services Offered:**\n\n1. **Full-Stack Web Development:** End-to-end web apps with React and Spring Boot.\n2. **Backend API & Microservices:** High-throughput REST services with JWT security.\n3. **Database & Caching Architecture:** PostgreSQL/MySQL design with Redis caching layers.\n4. **UI/UX Frontend Engineering:** Reactive, modern interfaces with Tailwind CSS.`,
      links: [{ label: "Explore Services Page", to: "/service" }],
      suggestions: ["📬 Contact Details", "🚀 Top Projects", "📄 Download Resume"],
    };
  }

  // 12. Thanks / Bye
  if (
    query.includes("thank") ||
    query.includes("thanks") ||
    query.includes("bye") ||
    query.includes("goodbye") ||
    query.includes("awesome") ||
    query.includes("cool") ||
    query.includes("great")
  ) {
    return {
      text: `You're very welcome! 😊 Feel free to ask anytime, or reach out to Tabish directly for software engineering opportunities and collaborations.\n\nHave a great day! ✨`,
      suggestions: ["🚀 Top Projects", "📬 Contact Details", "📄 Download Resume"],
    };
  }

  // 13. Default fallback
  return {
    text: `I'm here to help you learn all about **Tabish Firoz**! You can ask me about:\n\n• 🚀 **Projects** (ResqueOS, Hospital Management, CRM)\n• 💻 **Technical Skills** (Spring Boot, Java, React, Redis)\n• 📄 **Resume** (Instant download link)\n• 📚 **Published Book** (*Core Java: Beginner to Advanced*)\n• 🏆 **Achievements** (GeeksforGeeks Top 10%, SIH Finalist)\n• 🎓 **Education & CGPA** (Centurion University, 9.3 CGPA)\n• 📬 **Contact information**\n\nWhat can I help you with?`,
    suggestions: [
      "🚀 Top Projects",
      "💻 Core Skills",
      "📄 Download Resume",
      "📬 Contact Details",
    ],
  };
}
