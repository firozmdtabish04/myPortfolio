import React, { useState } from "react";
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
import MobileMenu from "./MobileMenu";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="top-0 z-50 bg-gray-100/80 border-b border-gray-200 sticky backdrop-blur-md">
      <div className="px-3 py-3 max-w-7xl mx-auto sm:px-4 lg:px-6">
        {/* Desktop + Tablet */}
        <div className="px-4 justify-between bg-white rounded-2xl shadow-md h-20 hidden md:flex items-center lg:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-red-500 lg:text-3xl tracking-wide hover:scale-105 transition-transform"
          >
            TaFi
          </Link>

          {/* Menu */}
          <ul className="flex items-center">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="flex-col justify-center w-20 h-20 overflow-hidden group relative flex items-center lg:w-24"
                  >
                    {/* Animated Top Line */}
                    <span className="top-0 h-1 w-full bg-red-500 absolute left-0 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

                    {/* Icon */}
                    <Icon
                      size={24}
                      className="top-3 text-red-500 opacity-0 absolute -translate-y-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                    />

                    {/* Text */}
                    <span className="text-sm font-medium text-gray-700 lg:text-base transition-all duration-300 group-hover:translate-y-6 group-hover:opacity-0">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="gap-2 flex items-center lg:gap-3">
            <a
              href="https://instagram.com/your_username"
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
              href="https://linkedin.com/in/your_username"
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
              href="https://github.com/your_username"
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

        {/* Mobile */}
        <div className="px-4 justify-between bg-white rounded-2xl shadow-md h-16 md:hidden flex items-center">
          <Link to="/" className="text-2xl font-extrabold text-red-500">
            TaFi
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-red-100 transition"
          >
            {isOpen ? (
              <X
                size={28}
                className="text-red-500 rotate-180 transition-transform duration-300"
              />
            ) : (
              <Menu
                size={28}
                className="text-red-500 hover:rotate-90 transition-transform duration-300"
              />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
