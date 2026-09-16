import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMobileAlt,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-red-500 text-5xl" />,
    description:
      "Modern, responsive React applications with Tailwind CSS, animations, and optimized performance.",
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-red-500 text-5xl" />,
    description:
      "Secure REST APIs using Spring Boot, Java, Spring Security, and JWT authentication.",
  },
  {
    title: "Database Design",
    icon: <FaDatabase className="text-red-500 text-5xl" />,
    description:
      "Efficient MySQL database design with optimized queries and scalable architecture.",
  },
  {
    title: "Cloud Deployment",
    icon: <FaCloud className="text-red-500 text-5xl" />,
    description:
      "Deploy applications using AWS fundamentals, Docker containers, and cloud hosting platforms.",
  },
  {
    title: "Full Stack Projects",
    icon: <FaMobileAlt className="text-red-500 text-5xl" />,
    description:
      "Complete end-to-end web applications including CRM systems, dashboards, and business solutions.",
  },
  {
    title: "Maintenance & Support",
    icon: <FaTools className="text-red-500 text-5xl" />,
    description:
      "Bug fixing, performance optimization, code refactoring, and feature enhancements.",
  },
];

const process = [
  {
    step: "01",
    title: "Planning",
    desc: "Understanding requirements and designing the project structure.",
  },
  {
    step: "02",
    title: "Development",
    desc: "Building scalable frontend and backend solutions.",
  },
  {
    step: "03",
    title: "Testing",
    desc: "Ensuring quality through debugging and performance optimization.",
  },
  {
    step: "04",
    title: "Deployment",
    desc: "Launching applications with modern deployment practices.",
  },
];

function Service() {
  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="px-5 max-w-7xl mx-auto sm:px-8 lg:px-12">
        {/* Hero */}
        <div className="mb-16 text-center">
          <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 font-semibold inline-block uppercase tracking-wider">
            My Services
          </span>

          <h1 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
            What I Can Build For You
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            I create modern, scalable, and user-friendly web applications using
            React, Spring Boot, Java, MySQL, Docker, and cloud technologies.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm group hover:-translate-y-2 hover:shadow-2xl hover:border-red-300 transition-all duration-300"
            >
              <div className="mb-6 w-20 h-20 rounded-2xl bg-red-50 justify-center flex items-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

              <div className="mt-6 gap-2 text-red-500 font-semibold opacity-0 flex items-center group-hover:opacity-100 transition-opacity duration-300">
                Learn More <FaArrowRight />
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <div className="mb-12 text-center">
            <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 font-semibold inline-block uppercase tracking-wider">
              Workflow
            </span>

            <h2 className="mt-4 text-3xl font-black text-gray-900 md:text-4xl">
              How I Work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm text-center hover:-translate-y-2 hover:shadow-xl hover:border-red-300 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-red-100 text-red-500 text-2xl font-black justify-center mx-auto flex items-center">
                  {item.step}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 p-8 bg-white rounded-3xl border border-gray-200 shadow-xl text-center lg:p-12">
          <h2 className="text-3xl font-black text-gray-900 md:text-4xl">
            Let's Build Your Next Project
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            Whether it's a portfolio, business website, CRM, dashboard, or
            full-stack application, I'm ready to turn ideas into reality.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact Me
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Service;
