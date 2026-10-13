import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Info,
  Phone,
  Briefcase,
  Code2,
  FolderKanban,
  Trophy,
  Sparkles,
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "/", icon: Home },
    { name: "About", to: "/about", icon: Info },
    { name: "Skills", to: "/skills", icon: Code2 },
    { name: "Projects", to: "/projects", icon: FolderKanban },
    { name: "Achievements", to: "/achievements", icon: Trophy },
    { name: "Services", to: "/service", icon: Briefcase },
    { name: "Contact", to: "/contact", icon: Phone },
  ];

  return (
    <header className="top-0 z-50 w-full sticky transition-all duration-300">
      <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main Desktop Navbar Container */}
        <div className="px-4 rounded-2xl border border-slate-200/90 shadow-lg h-18 justify-between glass-panel sm:px-6 flex items-center transition-all duration-300">
          {/* Logo with Status Beacon */}
          <Link to="/" className="gap-2.5 group flex items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br justify-center text-white font-black text-xl shadow-md shadow-red-500/25 from-red-500 to-rose-600 flex items-center group-hover:scale-105 group-hover:rotate-3 transition-transform">
              T
            </div>
            <div className="flex-col flex">
              <span className="gap-1 text-xl font-black text-slate-900 sm:text-2xl tracking-tight flex items-center group-hover:text-red-500 transition-colors">
                TaFi
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest -mt-1 hidden sm:block">
                Software Dev
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="gap-1 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/60 shadow-inner hidden lg:flex items-center">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-white text-red-600 shadow-sm shadow-slate-200 scale-100 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Right Area: Status Badge & Socials */}
          <div className="gap-3 hidden md:flex items-center">
            {/* Status indicator */}
            

            {/* Social Icons */}
            <div className="gap-1.5 border-l border-slate-200 flex items-center pl-2">
              <a
                href="https://github.com/firozmdtabish04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 justify-center shadow-xs hover:bg-slate-900 hover:text-white flex items-center transition-all duration-200"
                title="GitHub"
              >
                <FaGithub className="text-base" />
              </a>

              <a
                href="https://www.linkedin.com/in/tabish-firoz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 justify-center shadow-xs hover:bg-blue-600 hover:text-white flex items-center transition-all duration-200"
                title="LinkedIn"
              >
                <FaLinkedinIn className="text-base" />
              </a>

              <a
                href="https://www.instagram.com/firozmdtabish/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-50 text-pink-600 justify-center shadow-xs hover:bg-pink-600 hover:text-white flex items-center transition-all duration-200"
                title="Instagram"
              >
                <FaInstagram className="text-base" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-slate-700 border border-slate-200 lg:hidden hover:bg-red-50 hover:text-red-500 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Component */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}

export default Navbar;
