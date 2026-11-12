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
    { value: "9.4", label: "Current CGPA", sub: "Centurion University" },
    { value: "17+", label: "Engineered Projects", sub: "Full Stack & Cloud" },
    { value: "401+", label: "DSA Problems", sub: "Top 10% on GfG" },
    { value: "858 Pg", label: "Published Book", sub: "Author: Core Java" },
  ];

  const timeline = [
    {
      year: "2023 – 2027",
      title: "B.Tech in Computer Science Engineering",
      institution: "Centurion University of Technology and Management",
      badge: "CGPA 9.4 / 10",
      icon: <FaGraduationCap className="text-red-500 text-xl" />,
      desc: "Specializing in Software Engineering, Data Structures & Algorithms, Database Management Systems, Linux OS, and Cloud Computing. Maintaining consistent academic distinction with a 9.4 CGPA.",
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
    <section className="py-14 min-h-screen bg-gradient-to-br bg-mesh-pattern relative sm:py-20 from-slate-50 via-white to-red-50/40">
      {/* Ambient background glows */}
      <div className="top-10 w-80 h-80 bg-red-400/10 rounded-full absolute left-1/3 blur-[130px] pointer-events-none" />
      <div className="bottom-20 w-96 h-96 bg-orange-400/10 rounded-full absolute right-10 blur-[140px] pointer-events-none" />

      <div className="px-4 max-w-7xl mx-auto relative sm:px-6 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mb-14 text-center max-w-3xl mx-auto sm:mb-20">
          <div className="gap-2 px-4 py-1.5 rounded-full bg-red-100/90 border border-red-200/80 text-red-600 text-xs font-semibold shadow-sm inline-flex items-center sm:text-sm tracking-wider uppercase">
            <User className="w-4 h-4 text-red-500" />
            <span>Profile & Professional Background</span>
          </div>

          <h1 className="mt-5 text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Engineering with <span className="shimmer-text">Passion & Precision</span>
          </h1>

          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto sm:text-lg leading-relaxed">
            A dedicated Computer Science engineer with a track record in full-stack
            software development, published literature, and competitive algorithmic problem solving.
          </p>
        </div>

        {/* ================= BIO SECTION ================= */}
        <div className="grid gap-12 mb-20 lg:grid-cols-12 items-center">
          {/* Left Avatar Column */}
          <div className="px-4 justify-center lg:col-span-5 flex">
            <div className="relative">
              <div className="rounded-full bg-gradient-to-tr opacity-40 absolute inset-0 from-red-400 via-rose-300 to-amber-300 blur-2xl scale-110" />

              <div className="w-52 h-52 rounded-full overflow-hidden border-[6px] border-white shadow-2xl bg-white relative sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 sm:border-[8px] group">
                <img
                  src={Profile}
                  alt="Tabish Firoz"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Status pill overlay */}
              <div className="px-4 py-1.5 rounded-2xl border border-slate-200 shadow-xl text-center max-w-[90vw] absolute -bottom-2 left-1/2 -translate-x-1/2 glass-panel sm:px-5 sm:py-2.5 whitespace-nowrap">
                <p className="text-[9px] font-bold text-slate-400 sm:text-[10px] uppercase tracking-widest">
                  Status
                </p>
                <p className="text-[11px] font-black text-red-600 sm:text-xs">
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
            <div className="grid grid-cols-2 gap-2.5 mt-8 sm:grid-cols-4 sm:gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-2xl border border-slate-200/90 shadow-sm text-center glass-panel sm:p-4 hover:border-red-300 hover:-translate-y-1 transition-all"
                >
                  <span className="text-xl font-black text-red-600 sm:text-3xl block">
                    {item.value}
                  </span>
                  <p className="mt-1 text-[11px] font-bold text-slate-800 sm:text-xs">
                    {item.label}
                  </p>
                  <p className="text-[9px] text-slate-500 sm:text-[10px]">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 gap-4 flex items-center">
              <Link
                to="/projects"
                className="px-6 py-3.5 gap-2 rounded-2xl bg-red-500 text-white font-bold text-sm shadow-md shadow-red-500/20 hover:bg-red-600 transition flex items-center"
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
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
              Journey
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">
              Education & Professional Experience
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="flex-col p-7 gap-6 rounded-3xl border border-slate-200 shadow-sm glass-panel sm:p-8 hover:shadow-xl hover:border-red-300 transition-all duration-300 flex sm:flex-row items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 justify-center shadow-xs flex items-center shrink-0">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex-wrap gap-2 justify-between flex items-center">
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

                  <p className="mt-0.5 text-red-500 font-semibold text-sm">
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
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
              Specializations
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">
              Primary Engineering Focus
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 sm:gap-8">
            {competencies.map((comp) => (
              <div
                key={comp.title}
                className="flex-col p-8 rounded-3xl border border-slate-200 shadow-sm justify-between glass-panel hover:shadow-2xl hover:border-red-300 hover:-translate-y-2 transition-all duration-300 flex group"
              >
                <div>
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-red-50 justify-center flex items-center group-hover:scale-110 transition-transform">
                    {comp.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {comp.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {comp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 gap-1.5 border-t border-slate-100 text-xs font-bold text-red-500 flex items-center">
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
