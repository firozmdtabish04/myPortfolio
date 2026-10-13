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
  FaHeart,
} from "react-icons/fa";
import { Terminal, ShieldCheck, Sparkles } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="mt-12 bg-gradient-to-b border-t border-slate-200/80 relative from-transparent via-slate-50 to-slate-100">
      <div className="px-4 py-14 max-w-7xl mx-auto sm:px-6 lg:px-12">
        <div className="p-8 rounded-3xl border border-slate-200 shadow-xl glass-panel sm:p-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link to="/" className="gap-2 inline-flex items-center group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br justify-center text-white font-black text-xl shadow-md shadow-red-500/25 from-red-500 to-rose-600 flex items-center">
                  T
                </div>
                <span className="text-2xl font-black text-slate-900 tracking-tight">
                  TaFi<span className="text-red-500">.</span>
                </span>
              </Link>

              <p className="text-slate-600 text-sm leading-relaxed">
                Full-Stack Software Engineer specializing in high-throughput
                backends with Spring Boot & Java, in-memory caching with Redis,
                and modern reactive frontends with React.
              </p>

              {/* Social Channels */}
              <div className="gap-2 pt-2 flex items-center">
                <a
                  href="https://github.com/firozmdtabish04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 justify-center shadow-xs hover:bg-slate-900 hover:text-white flex items-center transition"
                  title="GitHub"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/tabish-firoz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 justify-center shadow-xs hover:bg-blue-600 hover:text-white flex items-center transition"
                  title="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="https://www.instagram.com/firozmdtabish/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 justify-center shadow-xs hover:bg-pink-600 hover:text-white flex items-center transition"
                  title="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Navigation
              </h3>

              <div className="space-y-2.5">
                {quickLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-slate-600 text-sm font-medium hover:text-red-600 block hover:translate-x-1 transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tech Competencies */}
            <div>
              <h3 className="mb-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Core Stack
              </h3>

              <div className="text-slate-600 text-sm font-medium space-y-2.5">
                <p>Spring Boot & Java 17</p>
                <p>React 19 & Tailwind CSS</p>
                <p>Redis Distributed Cache</p>
                <p>PostgreSQL & MySQL</p>
                <p>Docker Containerization</p>
                <p>RESTful Microservices</p>
              </div>
            </div>

            {/* Direct Contact */}
            <div>
              <h3 className="mb-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Contact & Details
              </h3>

              <div className="text-sm text-slate-600 space-y-3.5">
                <a
                  href="mailto:mdtabishfiroz04@gmail.com"
                  className="gap-3 flex items-center hover:text-red-600 transition truncate"
                >
                  <FaEnvelope className="text-red-500 shrink-0" />
                  <span className="truncate">mdtabishfiroz04@gmail.com</span>
                </a>

                <a
                  href="tel:+918102946894"
                  className="gap-3 flex items-center hover:text-red-600 transition"
                >
                  <FaPhoneAlt className="text-red-500 shrink-0" />
                  <span>+91 81029 46894</span>
                </a>

                <div className="gap-3 flex items-center">
                  <FaMapMarkerAlt className="text-red-500 shrink-0" />
                  <span>Jehanabad, Bihar, India</span>
                </div>

                
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-slate-200/80" />

          {/* Bottom Bar */}
          <div className="flex-col gap-4 justify-between flex sm:flex-row items-center">
            <p className="text-slate-500 text-xs text-center sm:text-left">
              © {year} <span className="font-bold text-slate-800">Tabish Firoz</span> (TaFi). Built with modern React 19, Tailwind CSS & Vite.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-11 h-11 rounded-2xl bg-red-500 text-white shadow-lg shadow-red-500/25 justify-center flex items-center hover:bg-red-600 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              title="Back to Top"
            >
              <FaArrowUp className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
