import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="px-5 max-w-7xl mx-auto sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="px-4 py-2 rounded-full bg-red-100 text-sm font-semibold text-red-500 inline-block uppercase tracking-widest">
            Contact
          </span>

          <h1 className="mt-5 text-4xl font-black text-gray-900 sm:text-5xl">
            Let's Build Something Amazing
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-base sm:text-lg leading-7">
            Feel free to reach out for collaborations, internships, freelance
            projects, or software development opportunities.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Side */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>

            <p className="mt-4 leading-8 text-gray-600">
              I'm always interested in discussing new ideas, internships,
              full-stack development opportunities, and exciting collaborations.
            </p>

            {/* Email */}
            <div className="mt-8 gap-4 p-4 rounded-2xl bg-red-50 flex items-center">
              <div className="h-14 w-14 justify-center rounded-full bg-red-100 flex items-center">
                <FaEnvelope className="text-xl text-red-500" />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>

                <a
                  href="mailto:mdtabishfiroz04@gmail.com"
                  className="font-semibold text-gray-800 hover:text-red-500 transition"
                >
                  mdtabishfiroz04@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              <h3 className="mb-5 text-xl font-semibold text-gray-900">
                Connect with Me
              </h3>

              <div className="flex-wrap gap-4 flex">
                <a
                  href="https://github.com/firozmdtabish04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 justify-center rounded-full border bg-white shadow-md group flex items-center hover:-translate-y-1 hover:bg-gray-900 transition-all duration-300"
                >
                  <FaGithub className="text-xl text-gray-700 group-hover:text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/tabish-firoz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 justify-center rounded-full border bg-white shadow-md group flex items-center hover:-translate-y-1 hover:bg-blue-600 transition-all duration-300"
                >
                  <FaLinkedinIn className="text-xl text-blue-600 group-hover:text-white" />
                </a>

                <a
                  href="https://www.instagram.com/firozmdtabish/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 justify-center rounded-full border bg-white shadow-md group flex items-center hover:-translate-y-1 hover:bg-pink-500 transition-all duration-300"
                >
                  <FaInstagram className="text-xl text-pink-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-6 rounded-3xl border border-gray-200 bg-white shadow-lg sm:p-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="mb-2 font-medium text-gray-700 block">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="px-4 py-3 w-full rounded-xl border border-gray-300 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="mb-2 font-medium text-gray-700 block">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 w-full rounded-xl border border-gray-300 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="mb-2 font-medium text-gray-700 block">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="px-4 py-3 w-full rounded-xl border border-gray-300 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="mb-2 font-medium text-gray-700 block">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="px-4 py-3 w-full rounded-xl border border-gray-300 resize-none outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-400"
                />
              </div>

              <button
                type="submit"
                className="gap-2 py-3 w-full justify-center rounded-xl bg-red-500 font-semibold text-white shadow-md flex items-center hover:scale-[1.02] hover:bg-red-600 transition-all duration-300"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Contact Cards */}
        <div className="grid grid-cols-1 mt-16 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center shadow-sm group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="mx-auto h-14 w-14 justify-center rounded-full bg-red-100 flex items-center">
              <FaPhoneAlt className="text-xl text-red-500" />
            </div>

            <h3 className="mt-4 font-bold text-gray-900">Phone</h3>

            <a
              href="tel:+918102946894"
              className="mt-2 text-gray-600 block hover:text-red-500"
            >
              +91 81029 46894
            </a>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center shadow-sm group hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="mx-auto h-14 w-14 justify-center rounded-full bg-red-100 flex items-center">
              <FaEnvelope className="text-xl text-red-500" />
            </div>

            <h3 className="mt-4 font-bold text-gray-900">Email</h3>

            <a
              href="mailto:mdtabishfiroz04@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Tabish,"
              className="gap-2 px-7 py-3 justify-center rounded-full border border-red-300 text-red-500 font-semibold flex items-center hover:bg-red-50 hover:scale-105 transition-all duration-300"
            >
              <FaEnvelope />
              mdtabishfiroz04@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 bg-white text-center shadow-sm group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="mx-auto h-14 w-14 justify-center rounded-full bg-red-100 flex items-center">
              <FaMapMarkerAlt className="text-xl text-red-500" />
            </div>

            <h3 className="mt-4 font-bold text-gray-900">Location</h3>

            <p className="mt-2 text-gray-600">Jehanabad, Bihar, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
