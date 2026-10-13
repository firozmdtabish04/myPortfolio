import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Info,
  Phone,
  Briefcase,
  Code2,
  FolderKanban,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

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
    <div className="mt-3 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden lg:hidden animate-in slide-in-from-top-4 duration-300">
      {/* Availability Status Header */}
      <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-bold text-slate-700">
            Full Stack Developer • Available
          </span>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-600">
          CSE 2027
        </span>
      </div>

      {/* Navigation Items */}
      <div className="p-2 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? "bg-red-500 text-white font-bold shadow-md shadow-red-500/20"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon size={20} />
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
              <ArrowRight size={16} className="opacity-60" />
            </NavLink>
          );
        })}
      </div>

      {/* Social Links & Resume Footer */}
      <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">
          Connect with Tabish
        </span>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/firozmdtabish04"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white flex items-center justify-center transition shadow-xs"
            title="GitHub"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/tabish-firoz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition shadow-xs"
            title="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>

          <a
            href="https://www.instagram.com/firozmdtabish/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-pink-600 hover:bg-pink-600 hover:text-white flex items-center justify-center transition shadow-xs"
            title="Instagram"
          >
            <FaInstagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
