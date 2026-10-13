import React from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaServer,
  FaLaptopCode,
  FaAward,
  FaBookOpen,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { SiGeeksforgeeks, SiSpringboot, SiReact, SiRedis } from "react-icons/si";
import { User, Award, BookCheck, ShieldCheck, Cpu } from "lucide-react";
import Profile from "../../assets/profile.jpg";

function About() {
  const stats = [
    { value: "9.3", label: "Current CGPA", sub: "Centurion University" },
    { value: "14+", label: "Engineered Projects", sub: "Full Stack & Cloud" },
    { value: "401+", label: "DSA Problems", sub: "Top 10% on GfG" },
    { value: "858 Pg", label: "Published Book", sub: "Author: Core Java" },
  ];

  const timeline = [
    {
      year: "2023 – 2027",
      title: "B.Tech in Computer Science Engineering",
      institution: "Centurion University of Technology and Management",
      badge: "CGPA 9.3 / 10",
      icon: <FaGraduationCap className="text-red-500 text-xl" />,
      desc: "Specializing in Software Engineering, Data Structures & Algorithms, Database Management Systems, Linux OS, and Cloud Computing. Maintaining consistent academic distinction with a 9.3 CGPA.",
    },
    {
      year: "2024 – Present",
      title: "Full Stack Developer Intern — CRM Engineering",
      institution: "Lyient Technologies",
      badge: "Industry Internship",
      icon: <FaBriefcase className="text-blue-500 text-xl" />,
      desc: "Engineered production CRM dashboards, employee data lifecycle modules, JWT role authentication, and high-performance React component systems integrated with Spring Boot REST endpoints.",
    },
    {
      year: "2026",
      title: "Author & Publisher — 'Core Java: Beginner to Advanced'",
      institution: "Google Books & Independent Publishing",
      badge: "858 Pages Published",
      icon: <FaBookOpen className="text-purple-500 text-xl" />,
      desc: "Authored an 858-page comprehensive computer science text covering object-oriented architecture, collections framework, multi-threaded concurrency, JDBC, and Java 8 lambda streams.",
    },
    {
      year: "2026",
      title: "Competitive Programming Milestone — Top 10% Solver",
      institution: "GeeksforGeeks",
      badge: "401 Problems Solved",
      icon: <SiGeeksforgeeks className="text-emerald-500 text-xl" />,
      desc: "Ranked among the Top 10% problem solvers globally after solving 401 algorithmic problems across arrays, trees, dynamic programming, and greedy algorithms.",
    },
  ];

  const competencies = [
    {
      title: "High-Throughput Backends",
      icon: <FaServer className="text-red-500 text-3xl" />,
      desc: "Developing secure REST microservices using Spring Boot, Spring Security, JWT authentication, and Hibernate ORM.",
    },
    {
      title: "Sub-Millisecond In-Memory Caching",
      icon: <SiRedis className="text-red-500 text-3xl" />,
      desc: "Architecting Redis caching strategies to minimize database query latency and withstand high concurrent traffic.",
    },
    {
      title: "Modern Reactive Frontends",
      icon: <SiReact className="text-sky-500 text-3xl" />,
      desc: "Building accessible, fast, and responsive user interfaces with React, Tailwind CSS, custom hooks, and React Router.",
    },
  ];

  return (
    <section className="relative min-h-screen py-14 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-red-50/40 bg-mesh-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-red-400/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/90 border border-red-200/80 text-red-600 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm">
            <User className="w-4 h-4 text-red-500" />
            <span>Profile & Professional Background</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Engineering with <span className="shimmer-text">Passion & Precision</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A dedicated Computer Science engineer with a track record in full-stack
            software development, published literature, and competitive algorithmic problem solving.
          </p>
        </div>

        {/* ================= BIO SECTION ================= */}
        <div className="grid gap-12 lg:grid-cols-12 items-center mb-20">
          {/* Left Avatar Column */}
          <div className="lg:col-span-5 flex justify-center px-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-400 via-rose-300 to-amber-300 blur-2xl opacity-40 scale-110" />

              <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-[6px] sm:border-[8px] border-white shadow-2xl bg-white group">
                <img
                  src={Profile}
                  alt="Tabish Firoz"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Status pill overlay */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-panel px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-2xl border border-slate-200 shadow-xl text-center max-w-[90vw] whitespace-nowrap">
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Status
                </p>
                <p className="text-[11px] sm:text-xs font-black text-red-600">
                  Full Stack Engineer • Centurion '27
                </p>
              </div>
            </div>
          </div>

          {/* Right Bio Column */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Hi, I'm Tabish Firoz
            </h2>

            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              I am pursuing my Bachelor of Technology in Computer Science & Engineering
              at Centurion University. I combine strong foundational knowledge in
              <strong> Core Java, algorithms, and database systems</strong> with real-world experience
              building web applications with <strong>Spring Boot, React, and Redis</strong>.
            </p>

            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether designing emergency response platforms integrated with NASA APIs or engineering scalable enterprise CRM portals for active businesses, I prioritize clean architecture, maintainable modular code, and sub-millisecond responsiveness.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-8">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel p-3 sm:p-4 rounded-2xl border border-slate-200/90 shadow-sm text-center hover:border-red-300 hover:-translate-y-1 transition-all"
                >
                  <span className="text-xl sm:text-3xl font-black text-red-600 block">
                    {item.value}
                  </span>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-800 mt-1">
                    {item.label}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-slate-500">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/projects"
                className="px-6 py-3.5 rounded-2xl bg-red-500 text-white font-bold text-sm shadow-md shadow-red-500/20 hover:bg-red-600 transition flex items-center gap-2"
              >
                <span>View Projects</span>
                <FaArrowRight className="text-xs" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-2xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* ================= EXPERIENCE & EDUCATION TIMELINE ================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
              Journey
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Education & Professional Experience
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-xs">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {item.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-red-500 font-semibold text-sm mt-0.5">
                    {item.institution}
                  </p>

                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CORE PILLARS ================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
              Specializations
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Primary Engineering Focus
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {competencies.map((comp) => (
              <div
                key={comp.title}
                className="glass-panel p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-red-300 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {comp.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {comp.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {comp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-red-500">
                  <FaCheckCircle />
                  <span>Production Competency</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
