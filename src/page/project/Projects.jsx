import React from "react";

import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiRedis,
} from "react-icons/si";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJava,
  FaDocker,
  FaLaptopCode,
} from "react-icons/fa";
const projects = [
  {
    title: "Smart Disaster Response Platform",
    description:
      "AI-powered disaster management platform with live incident tracking, NASA integration, Redis caching, and Spring Boot backend.",
    image: "/projects/disaster.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "https://resqueos.vercel.app/login",
    tech: ["React", "Spring Boot", "PostgreSQL", "Redis"],
  },
  {
    title: "Hospital Management System",
    description:
      "Complete hospital management solution with patient records, appointments, authentication, and admin dashboard.",
    image: "/projects/hospital.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "https://healthcaremanage.vercel.app/",
    tech: ["Angular", "Spring Boot", "MySQL"],
  },
  {
    title: "CRM Application",
    description:
      "Enterprise CRM with employee management, dashboard analytics, authentication, and reusable React components.",
    image: "/projects/crm.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "https://crm.lyient.com/login",
    tech: ["React", "Spring Boot", "MySQL"],
  },
  {
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio built with React, Tailwind CSS, animations, and reusable UI components.",
    image: "/projects/portfolio.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "https://tafi-portfolio.vercel.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "LyfeTech Official Website",
    description:
      "Modern company website featuring responsive layouts, premium UI, and interactive sections built with React and Tailwind CSS.",
    image: "/projects/lyfetech.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "https://lyfetech.vercel.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Lyient Official Website",
    description:
      "Professional corporate website with clean UI, responsive design, and modern user experience.",
    image: "/projects/lyient.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "https://lyient-official.vercel.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Minute Mind",
    description:
      "Productivity and focus application designed to improve concentration with a modern responsive interface.",
    image: "/projects/minutemind.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "https://minute-mind-psi.vercel.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Student Need Hub",
    description:
      "Student productivity platform with focus mode and helpful academic resources.",
    image: "/projects/studenthub.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "https://student-need-hub.vercel.app/focus",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "AI Core",
    description:
      "AI-inspired modern landing page featuring sleek UI components and responsive design.",
    image: "/projects/aicore.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "https://aicore-latest.vercel.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Weather App",
    description:
      "Beautiful weather application with an elegant UI and real-time weather information.",
    image: "/projects/weather.jpg",
    github: "https://github.com/firozmdtabish04/UI-UX-Weather-App-",
    demo: "https://firozmdtabish04.github.io/UI-UX-Weather-App-/",
    tech: ["React", "API", "Tailwind CSS"],
  },
  {
    title: "Rani Firoz Portfolio",
    description:
      "A clean, elegant, and responsive portfolio website with modern UI and smooth animations.",
    image: "/projects/rani.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "https://rani-firoz.vercel.app/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Cosmic Watch",
    description:
      "NASA-powered application displaying Near-Earth Objects with interactive UI and API integration.",
    image: "/projects/cosmic.jpg",
    github: "https://github.com/firozmdtabish04",
    demo: "#",
    tech: ["React", "API", "Tailwind CSS"],
  },
];

const iconMap = {
  React: <FaReact className="text-sky-500" />,
  "Spring Boot": <SiSpringboot className="text-green-600" />,
  MySQL: <SiMysql className="text-blue-600" />,
  PostgreSQL: <SiPostgresql className="text-blue-700" />,
  Redis: <SiRedis className="text-red-500" />,
  Docker: <FaDocker className="text-sky-500" />,
  Java: <FaJava className="text-orange-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
  Angular: <span className="text-red-600 font-bold">A</span>,
  API: <span className="text-purple-500 font-bold">API</span>,
};

function Projects() {
  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="px-5 max-w-7xl mx-auto sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 font-semibold inline-block uppercase tracking-wider">
            My Projects
          </span>

          <h1 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
            Featured Work
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of full-stack applications, enterprise solutions, and
            personal projects built using modern technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:border-red-300 transition-all duration-300"
            >
              <div className="h-52 bg-gradient-to-br overflow-hidden justify-center from-red-300 via-red-400 to-orange-300 relative flex items-center">
                {/* Decorative circles */}
                <div className="h-32 w-32 rounded-full bg-white/10 absolute -top-10 -right-10"></div>
                <div className="h-40 w-40 rounded-full bg-white/10 absolute -bottom-12 -left-12"></div>

                {/* Content */}
                <div className="px-6 z-10 text-center relative">
                  <div className="mb-4 mx-auto h-20 w-20 justify-center rounded-2xl bg-white/20 border border-white/20 flex items-center backdrop-blur-md">
                    <FaLaptopCode className="text-white text-4xl" />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/80">
                    Full Stack Project
                  </p>
                </div>
              </div>
              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex-wrap gap-2 mt-6 flex">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="gap-1 px-3 py-1 rounded-full bg-red-50 text-red-500 border border-red-200 text-sm font-medium flex items-center"
                    >
                      {iconMap[tech]}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="gap-3 mt-8 flex">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gap-2 px-4 py-3 justify-center rounded-xl bg-gray-900 text-white font-semibold flex items-center hover:bg-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="flex-1 gap-2 px-4 py-3 justify-center rounded-xl border border-red-300 text-red-500 font-semibold flex items-center hover:bg-red-500 hover:text-white transition"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-20 p-8 bg-white rounded-3xl border border-gray-200 shadow-lg text-center">
          <h2 className="text-3xl font-black text-gray-900">
            Explore More Projects
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Visit my GitHub profile to explore additional repositories,
            experiments, and open-source contributions.
          </p>

          <a
            href="https://github.com/firozmdtabish04"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-3 mt-8 px-8 py-4 rounded-full bg-red-500 text-white font-semibold shadow-lg inline-flex items-center hover:bg-red-600 hover:scale-105 transition-all duration-300"
          >
            <FaGithub />
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
