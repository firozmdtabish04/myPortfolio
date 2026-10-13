import React from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaTools,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Briefcase, Layers, Cpu, ShieldCheck, Zap, Sparkles } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    icon: <FaMobileAlt className="text-red-500 text-4xl" />,
    badge: "End-to-End",
    description:
      "Turnkey web platforms built with React, Spring Boot, and relational databases. From conceptual architecture to live CDN deployment.",
    deliverables: [
      "Custom React 19 Frontend with Tailwind CSS",
      "Spring Boot RESTful backend microservices",
      "Secure user authentication (JWT & Spring Security)",
      "Continuous deployment pipelines (Vercel, Docker)",
    ],
  },
  {
    title: "Scalable Backend & REST APIs",
    icon: <FaServer className="text-blue-500 text-4xl" />,
    badge: "High Performance",
    description:
      "Enterprise-grade Java backend systems designed with high concurrency, clean layered architecture, and robust error handling.",
    deliverables: [
      "Spring Boot REST API contracts & documentation",
      "Layered Controller-Service-Repository pattern",
      "Role-based access control and token authorization",
      "Postman automated test suites",
    ],
  },
  {
    title: "Database Modeling & Redis Caching",
    icon: <FaDatabase className="text-emerald-500 text-4xl" />,
    badge: "Sub-Millisecond",
    description:
      "Relational schema architecture in MySQL & PostgreSQL combined with distributed Redis in-memory caching to eliminate bottlenecks.",
    deliverables: [
      "Normalized 3NF relational schemas",
      "Redis distributed in-memory cache layer",
      "Indexed queries for high-speed retrieval",
      "ACID transactional data integrity",
    ],
  },
  {
    title: "Modern Reactive UI / UX",
    icon: <FaLaptopCode className="text-sky-500 text-4xl" />,
    badge: "Pixel Perfect",
    description:
      "Accessible, fast, and responsive user interfaces created with React, modern CSS grid engines, and fluid micro-interactions.",
    deliverables: [
      "Mobile-first responsive across all screen breakpoints",
      "Interactive data charts and visual dashboards",
      "Custom UI components and design systems",
      "Zero layout shifts and fast Core Web Vitals",
    ],
  },
  {
    title: "Docker Containerization & Cloud",
    icon: <FaCloud className="text-purple-500 text-4xl" />,
    badge: "Cloud Ready",
    description:
      "Containerizing application stacks with Docker and Docker Compose for identical local and production runtime environments.",
    deliverables: [
      "Optimized multi-stage Dockerfiles",
      "Docker Compose multi-container networks",
      "AWS EC2, S3, and cloud platform setups",
      "Environment isolation and secret configurations",
    ],
  },
  {
    title: "Code Optimization & Maintenance",
    icon: <FaTools className="text-amber-500 text-4xl" />,
    badge: "Refactoring",
    description:
      "Refactoring legacy codebases, resolving algorithmic bottlenecks, fixing security vulnerabilities, and adding modern features.",
    deliverables: [
      "Backend query profiling and latency reduction",
      "Frontend bundle minimization and code splitting",
      "Security patching and dependency upgrades",
      "Bug resolution and regression testing",
    ],
  },
];

const workflow = [
  {
    step: "01",
    phase: "Architecture & Planning",
    desc: "Understanding functional requirements, modeling database schemas, and mapping REST endpoint contracts.",
  },
  {
    step: "02",
    phase: "Full-Stack Development",
    desc: "Writing clean, type-safe frontend components and robust Spring Boot backend services in parallel.",
  },
  {
    step: "03",
    phase: "Testing & Benchmarking",
    desc: "Verifying edge cases with Postman collections, latency profiling, and cross-device responsiveness checks.",
  },
  {
    step: "04",
    phase: "Deployment & Delivery",
    desc: "Launching containers, setting up DNS routing, and delivering production-ready source code with full documentation.",
  },
];

function Service() {
  return (
    <section className="relative min-h-screen py-14 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-red-50/40 bg-mesh-pattern">
      {/* Background ambient glows */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-red-400/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/90 border border-red-200/80 text-red-600 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm">
            <Briefcase className="w-4 h-4 text-red-500" />
            <span>Offerings & Development Services</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Engineering Solutions <span className="shimmer-text">Built to Scale</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From single-page web applications and interactive dashboards to high-throughput
            REST microservices with distributed in-memory caching.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-red-300 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
                    {service.icon}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-[11px] font-bold uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Key Deliverables
                  </span>
                  {service.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <FaCheckCircle className="text-red-500 text-xs shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/contact"
                  className="text-xs font-bold text-red-500 group-hover:text-red-600 flex items-center gap-1.5"
                >
                  <span>Request for Project</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ================= WORKFLOW SECTION ================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
              Methodology
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Production Engineering Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="glass-panel p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-red-500 font-mono block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.phase}
                  </h3>
                  <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Phase Milestone Complete
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA BANNER ================= */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Have a Problem to Solve or a Product to Build?
          </h2>
          <p className="mt-4 text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Let's discuss requirements, architectural design, and launch your next high-impact web project.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-500/25 hover:bg-red-600 hover:scale-105 transition-all duration-300"
          >
            <span>Start a Conversation</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Service;
