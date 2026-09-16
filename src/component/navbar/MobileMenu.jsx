import React from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  const menuItems = [
    { name: "Home", to: "/", icon: Home },
    { name: "About", to: "/about", icon: Info },
    { name: "Skills", to: "/skills", icon: Code2 },
    { name: "Projects", to: "/projects", icon: FolderKanban },
    { name: "Achievement", to: "/achievements", icon: Trophy },
    { name: "Contact", to: "/contact", icon: Phone },
    { name: "Service", to: "/service", icon: Briefcase },
  ];
  return (
    <div className="mt-3 bg-white rounded-2xl shadow-2xl overflow-hidden md:hidden animate-in slide-in-from-top duration-300">
      {/* Menu Items */}
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className="gap-3 px-5 py-4 border-b border-gray-100 text-gray-700 group flex items-center hover:bg-red-50 hover:text-red-500 transition-all duration-300"
          >
            <Icon
              size={22}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <span className="font-medium">{item.name}</span>
          </Link>
        );
      })}

      {/* Search */}
      <div className="p-4">
        {/* Social Icons */}
        <div className="gap-2 flex items-center lg:gap-3">
          <a
            href="https://www.instagram.com/firozmdtabish/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 w-11 justify-center rounded-full border border-pink-200 bg-pink-50 group flex items-center transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:shadow-lg"
          >
            <FaInstagram
              className="text-pink-500 group-hover:text-white"
              size={20}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/tabish-firoz/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 w-11 justify-center rounded-full border border-blue-200 bg-blue-50 group flex items-center transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg"
          >
            <FaLinkedinIn
              className="text-blue-600 group-hover:text-white"
              size={20}
            />
          </a>

          <a
            href="https:https://github.com/firozmdtabish04"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 w-11 justify-center rounded-full border border-gray-300 bg-gray-100 group flex items-center transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:shadow-lg"
          >
            <FaGithub
              className="text-gray-700 group-hover:text-white"
              size={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
