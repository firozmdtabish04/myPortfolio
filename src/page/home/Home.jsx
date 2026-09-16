import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Home() {
  const skills = [
    "React",
    "Spring Boot",
    "Java",
    "MySQL",
    "Tailwind",
    "Docker",
  ];

  return (
    <section className="min-h-[calc(100vh-90px)] bg-gradient-to-br overflow-hidden from-gray-50 via-white to-red-50 flex items-center">
      <div className="px-5 py-10 max-w-7xl mx-auto w-full ">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 text-sm font-semibold inline-block uppercase tracking-widest">
              Full Stack Developer
            </span>

            <h1 className="mt-6 text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              Hi, I'm <span className="text-red-500">Tabish Firoz</span>
            </h1>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Computer Science Engineering student passionate about building
              scalable web applications using React, Spring Boot, Java, and
              MySQL. I enjoy creating modern UI, CRM systems, and full-stack
              solutions with clean architecture.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white border border-red-200 text-red-500 font-medium shadow-sm hover:bg-red-500 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10">
              <a
                href="/src/assets/Tabish Firoz (Dev).pdf"
                download
                className="flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 hover:scale-105 shadow-lg transition-all duration-300"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mdtabishfiroz04@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Tabish,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-red-300 text-red-500 font-semibold hover:bg-red-50 hover:scale-105 transition-all duration-300"
              >
                <FaEnvelope />
                Mail Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mt-10">
              <a
                href="https://github.com/firozmdtabish04"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center hover:bg-gray-900 hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub className="text-gray-700 group-hover:text-white text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/tabish-firoz/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedinIn className="text-blue-600 group-hover:text-white text-xl" />
              </a>

              <a
                href="https://www.instagram.com/firozmdtabish/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full bg-white border shadow-md flex items-center justify-center hover:bg-pink-500 hover:-translate-y-1 transition-all duration-300"
              >
                <FaInstagram className="text-pink-500 group-hover:text-white text-xl" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mdtabishfiroz04@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Tabish,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-red-300 text-red-500 font-semibold hover:bg-red-50 hover:scale-105 transition-all duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-red-300 blur-3xl opacity-30 scale-110 animate-pulse"></div>

              {/* Image */}
              <div className="relative rounded-full overflow-hidden border-[8px] border-white shadow-2xl w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
                <img
                  src="/src/assets/profile.jpg"
                  alt="Tabish Firoz"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Experience Card */}
              <div className="absolute bottom-3 left-0 sm:-left-6 bg-white rounded-2xl shadow-xl px-4 py-3">
                <p className="text-xs sm:text-sm text-gray-500">Experience</p>
                <p className="font-bold text-red-500 text-sm sm:text-base">
                  Full Stack Developer
                </p>
              </div>

              {/* CGPA Card */}
              <div className="absolute top-3 right-0 sm:-right-6 bg-white rounded-2xl shadow-xl px-4 py-3">
                <p className="text-xs sm:text-sm text-gray-500">CGPA</p>
                <p className="font-bold text-red-500 text-sm sm:text-base">
                  9.3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
