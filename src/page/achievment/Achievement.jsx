import React from "react";
import {
  FaTrophy,
  FaCode,
  FaLaptopCode,
  FaBook,
  FaCertificate,
  FaExternalLinkAlt,
  FaJava,
} from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";

const achievements = [
  {
    title: "Top 10% GeeksforGeeks Problem Solver",
    icon: <SiGeeksforgeeks className="text-green-600 text-5xl" />,
    description:
      "Solved 401 coding problems (87 Basic, 121 Easy, 150 Medium, 43 Hard), ranking among the Top 10% problem solvers.",
    year: "2026",
  },
  {
    title: "CUTM Web Design Hackathon",
    icon: <FaLaptopCode className="text-red-500 text-5xl" />,
    description:
      "Developed UI/UX solutions under time constraints during the CUTM Web Design Hackathon.",
    year: "2026",
  },
  {
    title: "IIT Bhubaneswar Web Design Hackathon",
    icon: <FaCode className="text-blue-600 text-5xl" />,
    description:
      "Participated in the Web Design Internal Hackathon hosted at IIT Bhubaneswar.",
    year: "2026",
  },
  {
    title: "Smart India Hackathon (SIH) Internal",
    icon: <FaTrophy className="text-yellow-500 text-5xl" />,
    description:
      "Participated in the SIH Internal Hackathon hosted at CUTM Bhubaneswar.",
    year: "2026",
  },
  {
    title: "Published Core Java Book",
    icon: <FaBook className="text-purple-500 text-5xl" />,
    description:
      "Published an 858-page book covering Core Java from beginner to advanced, including OOP, Collections, Multithreading, JDBC, Java 8, and interview preparation.",
    year: "June 2026",
  },
];

function Achievement() {
  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="px-5 max-w-7xl mx-auto sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 font-semibold inline-block uppercase tracking-wider">
            Achievements
          </span>

          <h1 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
            Milestones & Recognition
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            My journey in competitive programming, hackathons, technical
            writing, and professional certifications.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm group hover:-translate-y-2 hover:shadow-2xl hover:border-red-300 transition-all duration-300"
            >
              <div className="mb-6 w-20 h-20 rounded-2xl bg-gray-50 justify-center flex items-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <span className="px-3 py-1 text-sm font-semibold text-red-500 bg-red-50 rounded-full inline-block">
                {item.year}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">{item.description}</p>

              <div className="mt-6 h-1 w-0 bg-red-500 rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Featured Book */}
        <div className="mt-20 bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="p-8 lg:p-10">
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-500 font-semibold inline-block">
                Featured Publication
              </span>

              <h2 className="mt-5 text-3xl font-black text-gray-900 lg:text-4xl">
                Core Java: Beginner to Advanced
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                Authored an <strong>858-page programming book</strong> covering
                Core Java fundamentals, Object-Oriented Programming,
                Collections, Exception Handling, Multithreading, JDBC, Java 8
                features, and interview-focused concepts.
              </p>

              <a
                href="https://books.google.co.in/books/about?id=53XwEQAAQBAJ&redir_esc=y"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 mt-8 px-6 py-3 rounded-full bg-red-500 text-white font-semibold shadow-lg inline-flex items-center hover:bg-red-600 hover:scale-105 transition-all duration-300"
              >
                <FaExternalLinkAlt />
                Read on Google Books
              </a>
            </div>

            {/* Right Illustration */}
            <div className="p-10 bg-gradient-to-br justify-center from-red-100 to-red-50 flex items-center">
              <div className="flex-col p-6 w-56 h-72 bg-white rounded-3xl shadow-2xl border border-gray-200 justify-center text-center flex items-center rotate-3 hover:rotate-0 transition-transform duration-300">
                <FaJava className="mb-4 text-6xl text-red-500" />
                <h3 className="font-bold text-xl text-gray-900">Core Java</h3>
                <p className="mt-2 text-gray-500">Beginner to Advanced</p>
                <span className="mt-4 px-3 py-1 rounded-full bg-red-100 text-red-500 text-sm font-semibold">
                  858 Pages
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 font-semibold inline-block uppercase tracking-wider">
              Certification
            </span>

            <h2 className="mt-4 text-3xl font-black text-gray-900 md:text-4xl">
              Professional Credentials
            </h2>
          </div>

          <div className="p-8 max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="flex-col gap-6 flex sm:flex-row items-center">
              <div className="w-20 h-20 rounded-full bg-red-100 justify-center flex items-center">
                <FaCertificate className="text-red-500 text-4xl" />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900">
                  Oracle Certified Professional
                </h3>

                <p className="mt-1 text-red-500 font-semibold">Java SE (OCP)</p>

                <p className="mt-3 text-gray-600 leading-7">
                  Demonstrates knowledge of Core Java concepts, Object-Oriented
                  Programming, Collections, Multithreading, and enterprise-level
                  Java development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
