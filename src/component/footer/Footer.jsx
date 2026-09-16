import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Achievement", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br border-t border-gray-200 from-gray-50 via-white to-red-50">
      <div className="px-5 py-14 max-w-7xl mx-auto sm:px-8 lg:px-12">
        <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-xl lg:p-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="text-3xl font-black text-red-500 tracking-wide"
              >
                TaFi
              </Link>

              <p className="mt-4 text-gray-600 leading-7">
                Full Stack Developer passionate about building modern, scalable
                web applications using React, Spring Boot, Java, Docker, and
                cloud technologies.
              </p>

              <div className="gap-3 mt-6 flex">
                <a
                  href="https://github.com/firozmdtabish04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 justify-center rounded-full bg-gray-100 border border-gray-200 group flex items-center hover:bg-gray-900 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaGithub className="text-gray-700 group-hover:text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/tabish-firoz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 justify-center rounded-full bg-blue-50 border border-blue-200 group flex items-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaLinkedinIn className="text-blue-600 group-hover:text-white" />
                </a>

                <a
                  href="https://www.instagram.com/firozmdtabish/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 justify-center rounded-full bg-pink-50 border border-pink-200 group flex items-center hover:bg-pink-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaInstagram className="text-pink-500 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-5 text-xl font-bold text-gray-900">
                Quick Links
              </h3>

              <div className="space-y-3">
                {quickLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-gray-600 block hover:text-red-500 hover:translate-x-1 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-5 text-xl font-bold text-gray-900">Services</h3>

              <div className="text-gray-600 space-y-3">
                <p>Frontend Development</p>
                <p>Backend Development</p>
                <p>React Applications</p>
                <p>Spring Boot APIs</p>
                <p>Cloud Deployment</p>
                <p>UI/UX Design</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 text-xl font-bold text-gray-900">Contact</h3>

              <div className="space-y-4">
                <a
                  href="mailto:mdtabishfiroz04@gmail.com"
                  className="gap-3 text-gray-600 flex items-start hover:text-red-500 transition"
                >
                  <FaEnvelope className="mt-1 text-red-500" />
                  <span className="break-all">mdtabishfiroz04@gmail.com</span>
                </a>

                <a
                  href="tel:+918102946894"
                  className="gap-3 text-gray-600 flex items-center hover:text-red-500 transition"
                >
                  <FaPhoneAlt className="text-red-500" />
                  +91 81029 46894
                </a>

                <div className="gap-3 text-gray-600 flex items-center">
                  <FaMapMarkerAlt className="text-red-500" />
                  Jehanabad, Bihar, India
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200"></div>

          {/* Bottom */}
          <div className="flex-col gap-4 justify-between flex md:flex-row items-center">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {year} <span className="font-semibold text-red-500">TaFi</span>.
              Built with React & Tailwind CSS.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="h-12 w-12 justify-center rounded-full bg-red-500 text-white shadow-lg group flex items-center hover:bg-red-600 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
            >
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
