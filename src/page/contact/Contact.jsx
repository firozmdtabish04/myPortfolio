import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

import { Clock, MessageSquare, Send } from "lucide-react";

// Replace these values with your EmailJS credentials.
const EMAILJS_SERVICE_ID = "service_xmxal78";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);

      setTimeout(() => {
        setCopiedField(null);
      }, 2500);
    } catch (error) {
      console.error("EmailJS status:", error.status);
      console.error("EmailJS response:", error.text);
      console.error("Full EmailJS error:", error);

      setErrorMessage(
        `Email sending failed (${error.status || "unknown"}): ${
          error.text || "Check your EmailJS configuration."
        }`,
      );

      setFormStatus("idle");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formStatus === "submitting") return;

    setFormStatus("submitting");
    setErrorMessage("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || "Portfolio Inquiry",
          message: formData.message.trim(),
          title: formData.subject.trim() || "Portfolio Inquiry",
          time: new Date().toLocaleString(),
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setFormStatus("submitted");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setErrorMessage(
        "Your message could not be sent. Please try again or contact me directly by email.",
      );

      setFormStatus("idle");
    }
  };

  return (
    <section className="py-14 min-h-screen bg-gradient-to-br relative from-slate-50 via-white to-red-50/40 sm:py-20">
      {/* Background effects */}
      <div className="top-10 h-80 w-80 rounded-full bg-red-400/10 pointer-events-none absolute left-1/4 blur-[130px]" />
      <div className="bottom-20 h-96 w-96 rounded-full bg-orange-400/10 pointer-events-none absolute right-10 blur-[140px]" />

      <div className="px-4 mx-auto max-w-7xl relative sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14 mx-auto max-w-3xl text-center sm:mb-20">
          <div className="gap-2 px-4 py-1.5 rounded-full border border-red-200/80 bg-red-100/90 text-xs font-semibold text-red-600 shadow-sm inline-flex items-center uppercase tracking-wider sm:text-sm">
            <MessageSquare className="h-4 w-4 text-red-500" />
            <span>Connect &amp; Collaborate</span>
          </div>

          <h1 className="mt-5 text-4xl font-black text-slate-900 leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build Something{" "}
            <span className="text-red-500">Exceptional</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Available for software engineering roles, full-stack internships,
            backend development, and technical collaborations.
          </p>
        </div>

        {/* Main contact grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Contact details */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur-md sm:p-8">
              <h2 className="text-2xl font-black text-slate-900">
                Direct Contact &amp; Channels
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Reach out via email, phone, or social channels for engineering
                opportunities and project collaborations.
              </p>

              {/* Response time */}
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs font-semibold text-emerald-800">
                <Clock className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>Response time: Typically within 2–4 hours</span>
              </div>

              {/* Email */}
              <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <FaEnvelope />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <a
                      href="mailto:mdtabishfiroz04@gmail.com"
                      className="block truncate text-xs font-bold text-slate-800 transition hover:text-red-600 sm:text-sm"
                    >
                      mdtabishfiroz04@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleCopy("mdtabishfiroz04@gmail.com", "email")
                  }
                  className="flex shrink-0 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-red-300 hover:text-red-600"
                  aria-label="Copy email address"
                >
                  {copiedField === "email" ? (
                    <>
                      <FaCheck className="text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FaPhoneAlt />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Phone / WhatsApp
                    </p>

                    <a
                      href="tel:+918102946894"
                      className="block truncate text-xs font-bold text-slate-800 transition hover:text-red-600 sm:text-sm"
                    >
                      +91 81029 46894
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy("+918102946894", "phone")}
                  className="flex shrink-0 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-red-300 hover:text-red-600"
                  aria-label="Copy phone number"
                >
                  {copiedField === "phone" ? (
                    <>
                      <FaCheck className="text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="mt-3 flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    Jehanabad, Bihar, India
                  </p>
                </div>
              </div>

              {/* Social profiles */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Professional Profiles
                </h3>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/firozmdtabish04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-100 px-3 py-3 text-xs font-bold text-slate-800 transition hover:bg-slate-900 hover:text-white"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/tabish-firoz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-blue-50 px-3 py-3 text-xs font-bold text-blue-700 transition hover:bg-blue-600 hover:text-white"
                  >
                    <FaLinkedinIn size={16} />
                    LinkedIn
                  </a>

                  <a
                    href="https://www.instagram.com/firozmdtabish/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-pink-50 px-3 py-3 text-xs font-bold text-pink-700 transition hover:bg-pink-600 hover:text-white"
                  >
                    <FaInstagram size={16} />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur-md sm:p-10">
              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                Send an Inquiry
              </h2>

              <p className="mb-6 mt-2 text-sm leading-relaxed text-slate-600">
                Have a project in mind, an engineering opportunity, or just want
                to say hello? Send me a message.
              </p>

              {formStatus === "submitted" ? (
                <div
                  role="status"
                  className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
                    <FaCheck />
                  </div>

                  <h3 className="text-xl font-bold text-emerald-900">
                    Message Sent Successfully!
                  </h3>

                  <p className="mx-auto max-w-md text-sm text-emerald-700">
                    Thank you for reaching out. Your message has been submitted
                    successfully. I'll get back to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 text-xs font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 text-xs font-bold text-slate-700 block uppercase tracking-wider"
                      >
                        Your Name *
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        minLength={2}
                        maxLength={100}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className="px-4 py-3 w-full rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-800 transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-400/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 text-xs font-bold text-slate-700 block uppercase tracking-wider"
                      >
                        Email Address *
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        maxLength={254}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="px-4 py-3 w-full rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-800 transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-400/50"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 text-xs font-bold text-slate-700 block uppercase tracking-wider"
                    >
                      Subject
                    </label>

                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      maxLength={150}
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack Role / Project Inquiry"
                      className="px-4 py-3 w-full rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-800 transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-400/50"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 text-xs font-bold text-slate-700 block uppercase tracking-wider"
                    >
                      Message *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      minLength={10}
                      maxLength={5000}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, or engineering opportunity..."
                      className="px-4 py-3 w-full rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-800 resize-y transition placeholder:text-slate-400 focus:border-red-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-400/50"
                    />
                  </div>

                  {/* Error message */}
                  {errorMessage && (
                    <p
                      role="alert"
                      className="p-3 rounded-xl border border-red-200 bg-red-50 text-sm text-red-700"
                    >
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="gap-2 py-4 w-full justify-center rounded-2xl bg-red-500 text-sm font-bold text-white shadow-lg shadow-red-500/25 flex items-center transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Sending message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Your details will be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
