import React from "react";
import {
  FaTrophy,
  FaCode,
  FaLaptopCode,
  FaBook,
  FaCertificate,
  FaExternalLinkAlt,
  FaJava,
  FaCheckCircle,
} from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import {
  Award,
  BookOpen,
  Star,
  Sparkles,
  Terminal,
  Flame,
  Target,
} from "lucide-react";

function Achievement() {
  const gfgStats = [
    { label: "Basic", count: 87, color: "bg-emerald-100 text-emerald-800" },
    { label: "Easy", count: 121, color: "bg-sky-100 text-sky-800" },
    { label: "Medium", count: 150, color: "bg-amber-100 text-amber-800" },
    { label: "Hard", count: 43, color: "bg-rose-100 text-rose-800" },
  ];

  const milestones = [
    {
      title: "Top 10% Problem Solver on GeeksforGeeks",
      category: "Algorithmic Problem Solving",
      badge: "Top 10% Global",
      badgeColor: "bg-emerald-600 text-white",
      icon: <SiGeeksforgeeks className="text-emerald-600 text-4xl" />,
      year: "2026",
      desc: "Solved 401 data structures and algorithm problems with optimized time and space complexity across Arrays, Dynamic Programming, Graphs, Trees, and Strings.",
    },
    {
      title: "Smart India Hackathon (SIH) Internal Finalist",
      category: "National Hackathon",
      badge: "Finalist",
      badgeColor: "bg-amber-600 text-white",
      icon: <FaTrophy className="text-amber-500 text-4xl" />,
      year: "2026",
      desc: "Designed software solutions addressing national real-world problem statements under high-pressure sprint environments at CUTM Bhubaneswar.",
    },
    {
      title: "IIT Bhubaneswar Web Design Hackathon",
      category: "Competitive Web Engineering",
      badge: "Hackathon Competitor",
      badgeColor: "bg-blue-600 text-white",
      icon: <FaCode className="text-blue-600 text-4xl" />,
      year: "2026",
      desc: "Participated in the rigorous Web Design Internal Hackathon hosted at IIT Bhubaneswar, building responsive and high-converting web applications.",
    },
    {
      title: "CUTM Web Design Sprint Hackathon",
      category: "UI/UX Engineering",
      badge: "Sprint Developer",
      badgeColor: "bg-red-600 text-white",
      icon: <FaLaptopCode className="text-red-500 text-4xl" />,
      year: "2026",
      desc: "Created rapid interactive UI/UX prototypes under timed hackathon constraints, focusing on clean user experiences and accessibility.",
    },
  ];

  return (
    <section className="py-14 min-h-screen bg-gradient-to-br bg-mesh-pattern relative sm:py-20 from-slate-50 via-white to-red-50/40">
      {/* Background ambient glows */}
      <div className="top-10 w-96 h-96 bg-red-400/10 rounded-full absolute left-1/3 blur-[130px] pointer-events-none" />
      <div className="bottom-10 w-96 h-96 bg-amber-400/10 rounded-full absolute right-10 blur-[140px] pointer-events-none" />

      <div className="px-4 max-w-7xl mx-auto relative sm:px-6 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mb-14 text-center max-w-3xl mx-auto sm:mb-20">
          <div className="gap-2 px-4 py-1.5 rounded-full bg-red-100/90 border border-red-200/80 text-red-600 text-xs font-semibold shadow-sm inline-flex items-center sm:text-sm tracking-wider uppercase">
            <TrophyIcon className="w-4 h-4 text-red-500" />
            <span>Milestones, Books & Recognition</span>
          </div>

          <h1 className="mt-5 text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            <span className="shimmer-text">Key Achievements</span>
          </h1>

          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto sm:text-lg leading-relaxed">
            From technical book authorship and algorithmic problem solving
            rankings to competitive engineering hackathons and industry
            credentials.
          </p>
        </div>

        {/* ================= FEATURED SHOWCASE: 858-PAGE BOOK ================= */}
        <div className="mb-16 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden glass-panel relative">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Book Info Column */}
            <div className="p-8 sm:p-12 lg:col-span-7">
              <div className="gap-2 px-3 py-1 mb-4 rounded-full bg-red-100 text-red-600 text-xs font-bold inline-flex items-center uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Featured Engineering Publication</span>
              </div>

              <h2 className="text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">
                Core Java: Beginner to Advanced
              </h2>

              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                Authored and published an authoritative{" "}
                <strong>858-page comprehensive guide</strong> covering Core Java
                fundamentals, Object-Oriented Programming (OOP), Collections
                Framework, Multithreading & Concurrency, JDBC, Java 8 Stream
                APIs, Lambdas, and enterprise interview preparation.
              </p>

              {/* Book Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-2.5 sm:gap-3 text-xs text-slate-700 sm:text-sm">
                <div className="gap-2 flex items-center">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>858 Comprehensive Pages</span>
                </div>
                <div className="gap-2 flex items-center">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Collections & Multithreading</span>
                </div>
                <div className="gap-2 flex items-center">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>JDBC & Java 8 Streams</span>
                </div>
                <div className="gap-2 flex items-center">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Interview-Tested Code Examples</span>
                </div>
              </div>

              <div className="flex-wrap mt-8 gap-4 flex items-center">
                <a
                  href="https://books.google.co.in/books/about?id=53XwEQAAQBAJ&redir_esc=y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 gap-2.5 rounded-2xl bg-red-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-500/25 inline-flex items-center hover:bg-red-600 hover:scale-105 transition-all duration-300"
                >
                  <FaExternalLinkAlt />
                  <span>Read on Google Books</span>
                </a>

                <span className="text-xs font-semibold text-slate-500">
                  Published: June 2026
                </span>
              </div>
            </div>

            {/* Book Visual Mockup Column */}
            <div className="p-6 sm:p-12 bg-gradient-to-br justify-center lg:col-span-5 from-red-500/10 via-orange-400/10 to-transparent flex items-center">
              <div className="relative group max-w-full">
                {/* Book 3D Cover */}
                <div className="flex-col p-6 sm:p-8 w-56 sm:w-72 h-80 sm:h-96 bg-gradient-to-br rounded-2xl shadow-2xl border border-red-500/30 justify-between text-white overflow-hidden from-slate-900 via-slate-800 to-red-950 flex transform -rotate-2 sm:-rotate-3 group-hover:rotate-0 transition-transform duration-500 relative">
                  {/* Subtle spine line */}
                  <div className="top-0 bottom-0 w-3 sm:w-4 bg-white/10 border-r border-white/20 absolute left-0" />

                  <div>
                    <div className="mb-4 sm:mb-6 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500 justify-center shadow-md flex items-center">
                      <FaJava className="text-xl sm:text-2xl text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
                      Author: Tabish Firoz
                    </span>
                    <h3 className="mt-2 text-2xl font-black leading-tight">
                      Core Java
                    </h3>
                    <p className="mt-1 text-xs text-slate-300">
                      Beginner to Advanced
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700/60 justify-between flex items-center">
                    <span className="text-xs font-bold text-amber-400">
                      858 Pages
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase">
                      Java 17 Edition
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= GEEKSFORGEEKS BREAKDOWN CARD ================= */}
        <div className="p-8 mb-16 rounded-3xl border border-slate-200 shadow-xl glass-panel sm:p-12">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <div className="gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold inline-flex items-center uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" />
                <span>Competitive Coding Metric</span>
              </div>

              <h2 className="text-3xl font-black text-slate-900">
                401 Problems Solved on GeeksforGeeks
              </h2>

              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                Ranked in the <strong>Top 10% of problem solvers</strong>.
                Consistently practicing data structures and algorithms including
                binary search trees, dynamic programming memoization, graph
                traversals, and algorithmic complexity analysis.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:col-span-6 sm:grid-cols-4 sm:gap-4">
              {gfgStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-col p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center flex items-center hover:border-red-300 transition-all"
                >
                  <span className="text-2xl font-black text-slate-900 sm:text-3xl">
                    {stat.count}
                  </span>
                  <span
                    className={`mt-2 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${stat.color}`}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= HACKATHONS & RECOGNITION GRID ================= */}
        <div className="mb-16">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Hackathons & Competitions
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Demonstrating high-velocity software engineering under live
              hackathon environments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="flex-col p-8 rounded-3xl border border-slate-200 shadow-sm justify-between glass-panel hover:shadow-xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 flex group"
              >
                <div>
                  <div className="gap-4 mb-4 justify-between flex items-start">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 justify-center flex items-center group-hover:scale-110 transition-transform duration-300">
                      {m.icon}
                    </div>

                    <div className="flex-col gap-1 flex items-end">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${m.badgeColor}`}
                      >
                        {m.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {m.year}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    {m.category}
                  </span>

                  <h3 className="mt-1 text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {m.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 gap-1.5 border-t border-slate-100 text-xs font-bold text-red-500 flex items-center">
                  <FaCheckCircle />
                  <span>Verified Hackathon Participant</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ORACLE CERTIFICATION CARD ================= */}
        <div className="p-8 rounded-3xl border border-slate-200 shadow-xl max-w-4xl mx-auto glass-panel sm:p-12">
          <div className="flex-col gap-6 text-center flex sm:flex-row items-center sm:gap-8 sm:text-left">
            <div className="w-20 h-20 rounded-2xl bg-red-100 text-red-600 justify-center shadow-md shrink-0 flex items-center">
              <FaCertificate className="text-4xl text-red-500" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider">
                Industry Credential
              </span>

              <h3 className="mt-2 text-2xl font-black text-slate-900">
                Oracle Certified Professional: Java SE (OCP)
              </h3>

              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Validates mastery in deep Java syntax, object lifecycle, generic
                collections, multithreaded concurrency, exception safety, and
                enterprise architecture standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fallback trophy icon
function TrophyIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export default Achievement;
