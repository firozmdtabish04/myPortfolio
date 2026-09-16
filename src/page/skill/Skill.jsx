import React from "react";
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
} from "react-icons/si";
import { FaAws, FaProjectDiagram, FaJava } from "react-icons/fa";

const skillCards = [
  {
    title: "Docker",
    icon: <SiDocker className="text-sky-500 text-5xl" />,
    description:
      "Containerized applications for consistent development and deployment.",
    color: "hover:border-sky-500",
  },
  {
    title: "Kubernetes",
    icon: <SiKubernetes className="text-blue-600 text-5xl" />,
    description: "Container orchestration, scaling, and workload management.",
    color: "hover:border-blue-600",
  },
  {
    title: "AWS",
    icon: <FaAws className="text-orange-500 text-5xl" />,
    description:
      "Cloud fundamentals including EC2, S3, IAM, and deployment concepts.",
    color: "hover:border-orange-500",
  },
  {
    title: "Redis",
    icon: <SiRedis className="text-red-500 text-5xl" />,
    description: "In-memory caching and high-performance data storage.",
    color: "hover:border-red-500",
  },
  {
    title: "System Design",
    icon: <FaProjectDiagram className="text-purple-500 text-5xl" />,
    description:
      "Scalable architectures, REST APIs, caching, and microservices.",
    color: "hover:border-purple-500",
  },
  {
    title: "Development Stack",
    icon: <SiReact className="text-cyan-500 text-5xl" />,
    description:
      "React, Spring Boot, Java, Linux, MySQL, Tailwind CSS, and REST APIs.",
    color: "hover:border-cyan-500",
  },
];

const expertise = [
  { name: "React.js", icon: <SiReact className="text-cyan-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "REST APIs", icon: <FaProjectDiagram className="text-red-500" /> },
  {
    name: "Spring Security",
    icon: <SiSpringboot className="text-green-700" />,
  },
  { name: "Linux", icon: <SiLinux className="text-black" /> },
  { name: "Git", icon: <SiGit className="text-orange-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "DSA", icon: <FaProjectDiagram className="text-purple-500" /> },
  { name: "DBMS", icon: <SiMysql className="text-blue-700" /> },
];

function Skill() {
  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="px-5 max-w-7xl mx-auto sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 font-semibold inline-block uppercase tracking-wider">
            Technical Skills
          </span>

          <h1 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
            Technologies I Work With
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Building modern full-stack applications using cloud, containers,
            caching, and scalable architecture.
          </p>
        </div>

        {/* 6 Skill Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {skillCards.map((skill) => (
            <div
              key={skill.title}
              className={`group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col ${skill.color}`}
            >
              <div className="mb-6 w-20 h-20 rounded-2xl bg-gray-50 justify-center flex items-center group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {skill.title}
              </h3>

              <p className="flex-1 mt-4 text-gray-600 leading-7">
                {skill.description}
              </p>

              <div className="mt-6 h-1 w-0 bg-red-500 rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Other Expertise */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 font-semibold inline-block uppercase tracking-wider">
              Other Expertise
            </span>

            <h2 className="mt-4 text-3xl font-black text-gray-900 md:text-4xl">
              Tools & Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {expertise.map((item) => (
              <div
                key={item.name}
                className="flex-col p-6 bg-white rounded-2xl border border-gray-200 shadow-sm text-center group flex items-center hover:-translate-y-2 hover:shadow-xl hover:border-red-400 transition-all duration-300"
              >
                <div className="mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-gray-800 text-sm">
                  {item.name}
                </h3>

                <div className="mt-4 h-1 w-0 bg-red-500 rounded-full group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
