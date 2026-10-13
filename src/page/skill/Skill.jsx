import React, { useState, useMemo } from "react";
import {
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiPostman,
  SiLinux,
  SiPostgresql,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import {
  FaAws,
  FaJava,
  FaProjectDiagram,
  FaSearch,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";
import { Sparkles, Terminal, Cpu, Database, Server, Layers, ShieldCheck } from "lucide-react";

const allSkills = [
  // Backend & Core
  {
    title: "Java 17 / Enterprise",
    category: "Backend & Core",
    icon: <FaJava className="text-orange-500 text-4xl" />,
    level: "Core Specialist",
    levelColor: "bg-orange-100 text-orange-700",
    borderHover: "hover:border-orange-400",
    description:
      "Modern Java development including Collections Framework, Multithreading, Streams API, OOP design patterns, and JVM optimizations.",
    highlights: ["Multithreading & Concurrency", "Streams API & Lambdas", "OOP & Design Patterns", "Author of 858-pg Core Java Book"],
  },
  {
    title: "Spring Boot & REST APIs",
    category: "Backend & Core",
    icon: <SiSpringboot className="text-emerald-600 text-4xl" />,
    level: "Production Ready",
    levelColor: "bg-emerald-100 text-emerald-700",
    borderHover: "hover:border-emerald-400",
    description:
      "Enterprise microservices, robust RESTful APIs, Spring Data JPA, dependency injection, and clean layered architecture.",
    highlights: ["Spring Data JPA / Hibernate", "Layered Controller-Service-DAO", "Spring Security & JWT Tokens", "REST API Versioning & Testing"],
  },
  {
    title: "System Design & Architecture",
    category: "Backend & Core",
    icon: <FaProjectDiagram className="text-purple-500 text-4xl" />,
    level: "Advanced",
    levelColor: "bg-purple-100 text-purple-700",
    borderHover: "hover:border-purple-400",
    description:
      "Designing scalable distributed backends, caching strategies, load balancing, fault tolerance, and database indexing.",
    highlights: ["Horizontal Scaling", "Microservices Communication", "High Availability Design", "Caching & Partitioning"],
  },

  // Databases & In-Memory
  {
    title: "Redis In-Memory Cache",
    category: "Databases & Caching",
    icon: <SiRedis className="text-red-500 text-4xl" />,
    level: "Production Ready",
    levelColor: "bg-red-100 text-red-700",
    borderHover: "hover:border-red-400",
    description:
      "High-throughput caching layer for sub-millisecond query responses, session storage, and telemetry pub/sub.",
    highlights: ["Key-Value In-Memory Storage", "Sub-Millisecond Query Response", "TTL Expiry & Cache Eviction", "Distributed Cache Architecture"],
  },
  {
    title: "MySQL Relational DB",
    category: "Databases & Caching",
    icon: <SiMysql className="text-blue-600 text-4xl" />,
    level: "Advanced",
    levelColor: "bg-blue-100 text-blue-700",
    borderHover: "hover:border-blue-400",
    description:
      "Normalized schema architecture, complex joins, indexing optimization, foreign key constraints, and transactional ACID safety.",
    highlights: ["Schema Normalization (3NF)", "Indexed B-Tree Queries", "ACID Transactions", "Performance Query Profiling"],
  },
  {
    title: "PostgreSQL",
    category: "Databases & Caching",
    icon: <SiPostgresql className="text-indigo-600 text-4xl" />,
    level: "Advanced",
    levelColor: "bg-indigo-100 text-indigo-700",
    borderHover: "hover:border-indigo-400",
    description:
      "Advanced open-source relational database with JSONB support, spatial indexing, and high-concurrency read/write pipelines.",
    highlights: ["Complex Aggregations", "JSONB Document Storing", "Foreign Key Integrity", "Production Cloud DB Setup"],
  },

  // Frontend & UI
  {
    title: "React.js Ecosystem",
    category: "Frontend & UI",
    icon: <SiReact className="text-sky-500 text-4xl" />,
    level: "Core Specialist",
    levelColor: "bg-sky-100 text-sky-700",
    borderHover: "hover:border-sky-400",
    description:
      "Component-driven modern web applications with reusable hooks, state management, lazy loading, and React Router DOM.",
    highlights: ["Custom Hooks & Context API", "React Router DOM v6/v7", "Performance & Code Splitting", "Component Composition"],
  },
  {
    title: "Tailwind CSS & Modern UI",
    category: "Frontend & UI",
    icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
    level: "Expert",
    levelColor: "bg-cyan-100 text-cyan-700",
    borderHover: "hover:border-cyan-400",
    description:
      "Responsive, utility-first design systems with dark/light themes, custom keyframe micro-animations, and mobile-first layouts.",
    highlights: ["Utility-First Architecture", "Fluid Mobile-First Responsive", "Micro-Interactions & Glassmorphism", "Accessible UI Standards"],
  },
  {
    title: "Modern JavaScript (ES6+)",
    category: "Frontend & UI",
    icon: <SiJavascript className="text-yellow-500 text-4xl" />,
    level: "Advanced",
    levelColor: "bg-yellow-100 text-yellow-700",
    borderHover: "hover:border-yellow-400",
    description:
      "Asynchronous programming (Promises, async/await), DOM manipulation, closures, event loop, and modern browser APIs.",
    highlights: ["Async/Await & Fetch APIs", "Destructuring & Modules", "Functional Array Paradigms", "Clean Code Best Practices"],
  },

  // Cloud & DevOps
  {
    title: "Docker Containerization",
    category: "Cloud & DevOps",
    icon: <SiDocker className="text-sky-500 text-4xl" />,
    level: "Advanced",
    levelColor: "bg-sky-100 text-sky-700",
    borderHover: "hover:border-sky-400",
    description:
      "Containerizing full-stack multi-container applications with Dockerfiles, Docker Compose, network bridging, and volume persistence.",
    highlights: ["Multi-Stage Dockerfiles", "Docker Compose Multi-Service", "Container Image Minimization", "Local Dev Environment Mirroring"],
  },
  {
    title: "Kubernetes Orchestration",
    category: "Cloud & DevOps",
    icon: <SiKubernetes className="text-blue-600 text-4xl" />,
    level: "Foundational",
    levelColor: "bg-blue-100 text-blue-700",
    borderHover: "hover:border-blue-400",
    description:
      "Cluster architecture fundamentals, pods, deployments, services, ingress routing, and container orchestration concepts.",
    highlights: ["Pods & Deployment Manifests", "Cluster Services & Networking", "Horizontal Pod Autoscaling", "Container Lifecycle"],
  },
  {
    title: "AWS Cloud Fundamentals",
    category: "Cloud & DevOps",
    icon: <FaAws className="text-orange-500 text-4xl" />,
    level: "Intermediate",
    levelColor: "bg-orange-100 text-orange-700",
    borderHover: "hover:border-orange-400",
    description:
      "Core cloud infrastructure including Amazon EC2 virtual servers, S3 bucket storage, IAM permission policies, and cloud hosting.",
    highlights: ["EC2 Compute Instances", "S3 Storage & Static Hosting", "IAM Roles & Security Groups", "Cloud Deployment Pipelines"],
  },
  {
    title: "Linux & Bash CLI",
    category: "Cloud & DevOps",
    icon: <SiLinux className="text-slate-800 text-4xl" />,
    level: "Advanced",
    levelColor: "bg-slate-100 text-slate-800",
    borderHover: "hover:border-slate-500",
    description:
      "Server administration, shell scripting, SSH remote server deployment, system permissions, and process management.",
    highlights: ["Shell Navigation & Scripting", "Process Management (systemd)", "SSH Server Configuration", "File Permission Security"],
  },
  {
    title: "Git & GitHub Collaboration",
    category: "Tools & Workflow",
    icon: <SiGit className="text-orange-600 text-4xl" />,
    level: "Expert",
    levelColor: "bg-orange-100 text-orange-700",
    borderHover: "hover:border-orange-400",
    description:
      "Version control workflows including feature branching, merge conflict resolution, rebasing, pull request reviews, and CI/CD basics.",
    highlights: ["Branching & Pull Request Workflows", "Interactive Rebase & Cherry-pick", "Git Hooks & Version Tagging", "GitHub Actions Automation"],
  },
  {
    title: "Postman & API Testing",
    category: "Tools & Workflow",
    icon: <SiPostman className="text-orange-500 text-4xl" />,
    level: "Advanced",
    levelColor: "bg-orange-100 text-orange-700",
    borderHover: "hover:border-orange-400",
    description:
      "Automated endpoint testing, collection runners, environment variable configurations, and REST API contract documentation.",
    highlights: ["Automated Test Scripts", "Collection Environment Variables", "Mock Servers & Documentation", "Status Code & Schema Validation"],
  },
];

const categories = [
  "All Technologies",
  "Backend & Core",
  "Databases & Caching",
  "Frontend & UI",
  "Cloud & DevOps",
  "Tools & Workflow",
];

function Skill() {
  const [selectedCategory, setSelectedCategory] = useState("All Technologies");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesCategory =
        selectedCategory === "All Technologies" ||
        skill.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        skill.title.toLowerCase().includes(q) ||
        skill.description.toLowerCase().includes(q) ||
        skill.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="relative min-h-screen py-14 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-red-50/40 bg-mesh-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-red-400/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/90 border border-red-200/80 text-red-600 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm">
            <Cpu className="w-4 h-4 text-red-500" />
            <span>Technical Capabilities & Stack</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Engineering <span className="shimmer-text">Competencies & Tools</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A comprehensive matrix of programming languages, distributed backend
            frameworks, database storage engines, and container virtualization tools I utilize in production.
          </p>
        </div>

        {/* ================= CONTROLS & FILTER TOOLBAR ================= */}
        <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-xl mb-10 transition-all">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills, frameworks, or tools (e.g. Spring, Redis, Docker)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:border-red-400 transition-all shadow-inner"
              />
            </div>

            {/* Counter */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-600 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {filteredSkills.length} of {allSkills.length} Technologies
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <FaLayerGroup className="text-slate-400 text-sm shrink-0 mr-1" />
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-red-500 text-white shadow-md shadow-red-500/20 scale-[1.02]"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= SKILL CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredSkills.map((skill) => (
            <div
              key={skill.title}
              className={`glass-panel p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl ${skill.borderHover} hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                {/* Header Icon + Level Badge */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                    {skill.icon}
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${skill.levelColor}`}
                  >
                    {skill.level}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {skill.category}
                </div>

                <h3 className="mt-1 text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {skill.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-1.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Key Technical Capabilities
                </span>
                {skill.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-700"
                  >
                    <FaCheckCircle className="text-red-500 text-xs shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= ARCHITECTURAL STACK SUMMARY ================= */}
        <div className="mt-20 p-8 sm:p-12 glass-panel rounded-3xl border border-slate-200 shadow-xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 mx-auto flex items-center justify-center text-2xl mb-4">
            <Sparkles className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Full-Stack Architecture Mastery
          </h2>

          <p className="mt-3 text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            From database modeling in MySQL and distributed in-memory caching with Redis, to Spring Boot microservices and reactive React web interfaces, every technology is chosen to build production software that scales.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
              Java 17 (Enterprise)
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
              Spring Boot 3
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
              React 19 & Vite
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
              Docker Containers
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
              Redis Distributed Cache
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
              PostgreSQL & MySQL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
