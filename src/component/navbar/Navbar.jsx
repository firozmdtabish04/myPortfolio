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
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative flex flex-col items-center justify-center w-20 lg:w-24 h-20 overflow-hidden transition-all duration-300 ${
                        isActive ? "text-red-500" : "text-gray-700"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* Top Line */}
                        <span
                          className={`absolute top-0 left-0 h-1 w-full bg-red-500 origin-left transition-transform duration-300 ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />

                        {/* Icon */}
                        <Icon
                          size={24}
                          className={`absolute top-3 transition-all duration-300 ${
                            isActive
                              ? "opacity-100 translate-y-0 text-red-500"
                              : "opacity-0 -translate-y-8 text-red-500 group-hover:opacity-100 group-hover:translate-y-0"
                          }`}
                        />

                        {/* Text */}
                        <span
                          className={`text-sm lg:text-base font-medium transition-all duration-300 ${
                            isActive
                              ? "translate-y-6 opacity-0"
                              : "group-hover:translate-y-6 group-hover:opacity-0"
                          }`}
                        >
                          {item.name}
                        </span>
                      </>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>

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
              href="https://github.com/firozmdtabish04"
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
