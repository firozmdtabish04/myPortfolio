import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-900 text-white">
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3 items-center">
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">Tabish Firoz</h2>
            <p className="mt-2 text-gray-400">
              Full Stack Developer | React • Spring Boot • Java
            </p>
          </div>

          {/* Quick Links */}
          <div className="gap-6 justify-center flex">
            <a href="/" className="hover:text-red-400">
              Home
            </a>
            <a href="/about" className="hover:text-red-400">
              About
            </a>
            <a href="/projects" className="hover:text-red-400">
              Projects
            </a>
            <a href="/contact" className="hover:text-red-400">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="gap-4 justify-center flex md:justify-end">
            <a
              href="https://github.com/firozmdtabish04"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/tabish-firoz/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="https://www.instagram.com/firozmdtabish/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="mailto:tabish@example.com"
              className="hover:text-red-400 transition"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-gray-700 text-center text-gray-400 text-sm">
          © {year} Tabish Firoz. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
