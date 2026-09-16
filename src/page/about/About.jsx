import React from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaServer,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

function About() {
  const stats = [
    { value: "9.3", label: "CGPA" },
    { value: "20+", label: "Projects" },
    { value: "2+", label: "Internships" },
    { value: "2027", label: "Graduation" },
  ];

  const services = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode className="text-red-500 text-4xl" />,
      desc: "Building responsive and modern user interfaces using Angular, React and Tailwind CSS.",
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-red-500 text-4xl" />,
      desc: "Creating secure REST APIs using Spring Boot, Java, and MySQL.",
    },
    {
      title: "Full Stack Solutions",
      icon: <FaCode className="text-red-500 text-4xl" />,
      desc: "Developing complete web applications with scalable architecture.",
    },
  ];

  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="px-5 max-w-7xl mx-auto sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 font-semibold inline-block uppercase tracking-wider">
            About Me
          </span>

          <h1 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
            Passionate Full Stack Developer
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Computer Science Engineering student dedicated to building scalable
            software and beautiful user experiences.
          </p>
        </div>

        {/* About Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Image */}
          <div className="justify-center flex">
            <div className="relative">
              <div className="bg-red-300 rounded-full opacity-30 absolute inset-0 blur-3xl scale-110"></div>

              <div className="w-72 h-72 rounded-full overflow-hidden border-[8px] border-white shadow-2xl relative md:w-96 md:h-96">
                <img
                  src="/src/assets/profile.jpg"
                  alt="Tabish Firoz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Hi, I'm Tabish Firoz
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              I'm pursuing a Bachelor's in Computer Science Engineering at
              Centurion University. I enjoy building modern full-stack
              applications using React, Spring Boot, Java, MySQL, Docker, and
              cloud technologies.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              My goal is to become a software engineer who builds impactful,
              scalable products while continuously learning new technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 text-center hover:-translate-y-1 hover:shadow-lg transition"
                >
                  <h3 className="text-3xl font-black text-red-500">
                    {item.value}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12">
            Education & Experience
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 hover:shadow-xl transition">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                  <FaGraduationCap className="text-red-500 text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    B.Tech Computer Science Engineering
                  </h3>
                  <p className="text-red-500 font-medium mt-1">
                    Centurion University (2023–2027)
                  </p>
                  <p className="text-gray-600 mt-3">
                    Current CGPA: <strong>9.3</strong>. Focused on Java, React,
                    Spring Boot, DBMS, Linux, and System Design.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 hover:shadow-xl transition">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                  <FaBriefcase className="text-red-500 text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-red-500 font-medium mt-1">
                    CRM Application Development
                  </p>
                  <p className="text-gray-600 mt-3">
                    Built reusable React components, integrated REST APIs, and
                    worked with Spring Boot backend services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-500 font-semibold uppercase tracking-wider">
              What I Do
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-black text-gray-900">
              My Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:border-red-300 transition-all duration-300 p-8"
              >
                <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">{service.desc}</p>

                <div className="mt-6 h-1 w-0 bg-red-500 rounded-full group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Banner */}
        <div className="mt-20 bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
              <FaAward className="text-red-500 text-4xl" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Always Learning & Building
              </h3>
              <p className="mt-2 text-gray-600 leading-7">
                I enjoy exploring Docker, Kubernetes, AWS, Redis, System Design,
                and modern development practices to build scalable and
                production-ready applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
