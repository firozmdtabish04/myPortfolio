import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaDownload,
  FaReact,
  FaJava,
  FaDocker,
  FaBookOpen,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiRedis,
  SiTailwindcss,
  SiPostgresql,
  SiGeeksforgeeks,
} from "react-icons/si";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Database,
  Server,
  Award,
  Layers,
  Terminal,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";
import resume from "../../assets/Tabish Firoz (Dev).pdf";
import Profile from "../../assets/profile.jpg";

function Home() {
  const coreTech = [
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-emerald-500 text-lg" />,
    },
    { name: "React.js", icon: <FaReact className="text-sky-400 text-lg" /> },
    { name: "Java 17", icon: <FaJava className="text-orange-500 text-lg" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-indigo-400 text-lg" />,
    },
    { name: "Redis Cache", icon: <SiRedis className="text-red-500 text-lg" /> },
    { name: "Docker", icon: <FaDocker className="text-sky-400 text-lg" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 text-lg" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-lg" />,
    },
  ];

  const highlights = [
    {
      value: "9.3",
      label: "B.Tech CGPA",
      sub: "Centurion University",
      icon: <Award className="w-5 h-5 text-red-500" />,
    },
    {
      value: "14+",
      label: "Engineered Projects",
      sub: "Full-Stack & Cloud",
      icon: <Layers className="w-5 h-5 text-blue-500" />,
    },
    {
      value: "401+",
      label: "Problems Solved",
      sub: "Top 10% GeeksforGeeks",
      icon: <SiGeeksforgeeks className="text-lg text-emerald-500" />,
    },
    {
      value: "858 Pg",
      label: "Published Book",
      sub: "Core Java: Author",
      icon: <FaBookOpen className="text-base text-purple-500" />,
    },
  ];

  const pillars = [
    {
      icon: <Server className="w-6 h-6 text-red-500" />,
      title: "Scalable Backend Systems",
      desc: "Robust REST microservices with Spring Boot, Spring Security, JWT authentication, and relational schema optimization.",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "In-Memory Speed & Caching",
      desc: "Sub-millisecond data query performance with Redis distributed caching layers and efficient indexing.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-sky-500" />,
      title: "Modern Fluid UI/UX",
      desc: "Pixel-perfect, accessible, and reactive frontend components built using React, Tailwind CSS, and state management.",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br bg-mesh-pattern relative from-slate-50 via-white to-red-50/40">
      {/* Decorative ambient background glows */}
      <div className="top-12 w-96 h-96 bg-red-400/10 rounded-full absolute left-1/3 blur-[140px] pointer-events-none" />
      <div className="top-80 w-96 h-96 bg-orange-400/10 rounded-full absolute right-10 blur-[140px] pointer-events-none" />
      <div className="bottom-10 w-80 h-80 bg-rose-400/10 rounded-full absolute left-10 blur-[120px] pointer-events-none" />

      {/* ================= HERO SECTION ================= */}
      <section className="px-4 py-12 max-w-7xl mx-auto w-full relative sm:px-6 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* LEFT HERO CONTENT (Col 7) */}
          <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
            {/* Status Pill */}
            <div className="gap-2.5 px-4 py-2 mb-6 rounded-full bg-white/90 border border-slate-200 shadow-sm text-xs font-semibold inline-flex items-center sm:text-sm">
              <span className="h-2.5 w-2.5 relative flex">
                <span className="h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping absolute inline-flex" />
                <span className="rounded-full h-2.5 w-2.5 bg-emerald-500 relative inline-flex" />
              </span>
              <span className="text-slate-800">
                Available for Software Engineering Roles
              </span>
              <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-bold">
                CSE '27
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Hi, I'm <span className="shimmer-text">Tabish Firoz</span>
            </h1>

            <p className="mt-4 text-xl font-bold text-slate-700 sm:text-2xl tracking-tight">
              Full Stack Engineer & Core Java Specialist
            </p>

            <p className="mt-5 text-slate-600 text-base max-w-2xl mx-auto sm:text-lg leading-relaxed lg:mx-0">
              Computer Science Engineering student passionate about engineering
              high-throughput web applications with{" "}
              <strong>Java, Spring Boot, React, and MySQL</strong>. From
              NASA-integrated disaster response systems to enterprise CRMs, I
              build software that balances scalability with pristine user
              experience.
            </p>

            {/* Quick Tech Chips */}
            <div className="flex-wrap mt-8 gap-2 justify-center max-w-xl mx-auto flex lg:justify-start lg:mx-0">
              {coreTech.map((tech) => (
                <div
                  key={tech.name}
                  className="gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-800 inline-flex items-center hover:border-red-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex-col mt-10 gap-4 justify-center flex sm:flex-row lg:justify-start items-center">
              <Link
                to="/projects"
                className="px-8 py-4 gap-2.5 w-full rounded-2xl bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-500/25 justify-center sm:w-auto sm:text-base hover:bg-red-600 hover:scale-105 transition-all duration-300 flex items-center group"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={resume}
                download="Tabish Firoz (Resume)"
                className="px-7 py-4 gap-2.5 w-full rounded-2xl bg-slate-900 text-white font-bold text-sm justify-center shadow-md shadow-slate-900/10 sm:w-auto sm:text-base hover:bg-black hover:scale-105 transition-all duration-300 flex items-center"
              >
                <FaDownload />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="mt-8 gap-3 justify-center flex items-center lg:justify-start">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                Find me on:
              </span>

              <a
                href="https://github.com/firozmdtabish04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 justify-center shadow-xs hover:bg-slate-900 hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1"
                title="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/tabish-firoz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-blue-200 text-blue-600 justify-center shadow-xs hover:bg-blue-600 hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1"
                title="LinkedIn Profile"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.instagram.com/firozmdtabish/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-pink-200 text-pink-600 justify-center shadow-xs hover:bg-pink-600 hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="mailto:mdtabishfiroz04@gmail.com"
                className="w-10 h-10 rounded-xl bg-white border border-red-200 text-red-500 justify-center shadow-xs hover:bg-red-500 hover:text-white flex items-center transition-all duration-300 hover:-translate-y-1"
                title="Direct Email"
              >
                <FaEnvelope size={17} />
              </a>
            </div>
          </div>

          {/* RIGHT HERO AVATAR & ORBITING CARDS (Col 5) */}
          <div className="order-1 px-4 justify-center lg:order-2 lg:col-span-5 flex">
            <div className="relative">
              {/* Outer pulsing atmospheric halo */}
              <div className="rounded-full bg-gradient-to-tr opacity-40 absolute inset-0 from-red-400 via-rose-300 to-amber-300 blur-2xl sm:blur-3xl scale-110 sm:scale-125 animate-pulse-subtle" />

              {/* Main Avatar Container */}
              <div className="w-52 h-52 rounded-full overflow-hidden border-[6px] border-white shadow-2xl bg-white relative sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 sm:border-[8px] group">
                <img
                  src={Profile}
                  alt="Tabish Firoz"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Orbit Pill 1: Spring Boot */}
              <div className="px-3 py-1.5 gap-2 rounded-2xl border border-slate-200/90 shadow-xl absolute -top-2 left-0 sm:-left-4 glass-panel sm:px-4 sm:py-2 flex items-center sm:gap-2.5 animate-float">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 justify-center sm:w-8 sm:h-8 flex items-center shrink-0">
                  <SiSpringboot className="text-emerald-600 text-base sm:text-lg" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 sm:text-[10px] uppercase tracking-wider">
                    Backend
                  </p>
                  <p className="text-[11px] font-black text-slate-800 sm:text-xs">
                    Spring Boot
                  </p>
                </div>
              </div>

              {/* Floating Orbit Pill 2: React */}
              <div className="px-3 py-1.5 gap-2 rounded-2xl border border-slate-200/90 shadow-xl absolute -bottom-2 right-0 sm:-right-4 glass-panel sm:px-4 sm:py-2 flex items-center sm:gap-2.5 animate-float-reverse">
                <div className="w-7 h-7 rounded-xl bg-sky-100 justify-center sm:w-8 sm:h-8 flex items-center shrink-0">
                  <FaReact className="text-sky-500 text-base sm:text-lg" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 sm:text-[10px] uppercase tracking-wider">
                    Frontend
                  </p>
                  <p className="text-[11px] font-black text-slate-800 sm:text-xs">
                    React & Tailwind
                  </p>
                </div>
              </div>

              {/* Floating Orbit Pill 3: CGPA Badge */}
              <div className="px-3 py-1.5 gap-2 top-1/2 rounded-2xl border border-slate-200/90 shadow-xl absolute -right-4 sm:-right-8 -translate-y-1/2 glass-panel sm:px-3.5 sm:py-2 flex items-center hidden md:flex">
                <div className="w-6 h-6 rounded-lg bg-red-100 justify-center sm:w-7 sm:h-7 flex items-center shrink-0">
                  <Award className="w-3.5 h-3.5 text-red-500 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <p className="text-[8px] font-bold text-slate-400 sm:text-[9px] uppercase">
                    CGPA
                  </p>
                  <p className="text-[11px] font-black text-red-600 sm:text-xs">
                    9.3 / 10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= METRIC HIGHLIGHT STRIP ================= */}
        <div className="grid grid-cols-1 mt-12 gap-3 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="p-4 gap-3.5 rounded-3xl border border-slate-200/90 shadow-sm glass-panel sm:p-6 hover:shadow-xl hover:border-red-300 hover:-translate-y-1 transition-all duration-300 flex items-start sm:gap-4"
            >
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 shrink-0">
                {item.icon}
              </div>
              <div>
                <span className="text-2xl font-black text-slate-900 sm:text-3xl tracking-tight">
                  {item.value}
                </span>
                <p className="mt-0.5 text-sm font-bold text-slate-700">
                  {item.label}
                </p>
                <p className="text-xs text-slate-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= ARCHITECTURAL PILLARS ================= */}
        <div className="mt-20">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider">
              Engineering Values
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">
              Architectural Focus & Philosophy
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Committed to building production software with zero compromise on
              code quality, scalability, and UX responsiveness.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 sm:gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex-col p-8 rounded-3xl border border-slate-200/90 shadow-sm justify-between glass-panel hover:shadow-xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 flex"
              >
                <div>
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 justify-center flex items-center">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 gap-1.5 border-t border-slate-100 text-xs font-bold text-red-500 flex items-center">
                  <span>Explore in Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
