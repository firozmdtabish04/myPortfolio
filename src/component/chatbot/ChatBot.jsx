import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RotateCcw,
  Download,
  ExternalLink,
  ChevronRight,
  Bot,
  User,
  CheckCircle,
} from "lucide-react";
import resumePdf from "../../assets/Tabish Firoz (Dev).pdf";
import profileImg from "../../assets/profile.jpg";
import {
  PORTFOLIO_INFO,
  QUICK_SUGGESTIONS,
  getBotResponse,
} from "./chatbotKnowledge";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const [showGreetingTooltip, setShowGreetingTooltip] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome-1",
      sender: "bot",
      text: `Hi there! 👋 I'm **Tabish's AI Portfolio Assistant**.\n\nAsk me anything about Tabish's **projects**, **skills (Java, Spring Boot, React)**, **858-page Core Java book**, **GeeksforGeeks rank**, or get his resume!`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      suggestions: [
        "🚀 Top Projects",
        "💻 Core Skills",
        "📄 Download Resume",
        "📬 Contact Details",
      ],
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isTyping]);

  // Hide greeting banner after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreetingTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    if (!isOpen) {
      setHasOpenedBefore(true);
      setShowGreetingTooltip(false);
    }
    setIsOpen((prev) => !prev);
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsgId = `user-${Date.now()}`;
    const timeStr = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage = {
      id: userMsgId,
      sender: "user",
      text,
      timestamp: timeStr,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate smart thinking delay
    setTimeout(() => {
      const response = getBotResponse(text);
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        action: response.action,
        links: response.links,
        suggestions: response.suggestions,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        text: `Conversation restarted! ✨ How can I assist you with Tabish's portfolio today?`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        suggestions: QUICK_SUGGESTIONS.slice(0, 4),
      },
    ]);
  };

  // Helper to parse simple markdown bold & newlines into elements
  const formatText = (content) => {
    if (!content) return null;

    return content.split("\n").map((line, lineIdx) => {
      // Check for bullet lines
      const isBullet = line.startsWith("• ") || line.startsWith("- ");
      const lineContent = isBullet ? line.substring(2) : line;

      // Parse bold **words**
      const parts = lineContent.split(/(\*\*.*?\*\*)/g);

      return (
        <p
          key={lineIdx}
          className={`${lineIdx > 0 ? "mt-1.5" : ""} ${
            isBullet ? "flex items-start gap-1.5 pl-1" : ""
          }`}
        >
          {isBullet && (
            <span className="text-red-500 font-bold shrink-0 leading-5">•</span>
          )}
          <span>
            {parts.map((part, partIdx) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong
                    key={partIdx}
                    className="font-bold text-slate-900"
                  >
                    {part.slice(2, -2)}
                  </strong>
                );
              }

              // Simple markdown link parser [title](url)
              const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
              if (linkMatch) {
                const [_, label, url] = linkMatch;
                const isInternal = url.startsWith("/");
                return isInternal ? (
                  <Link
                    key={partIdx}
                    to={url}
                    onClick={() => setIsOpen(false)}
                    className="text-red-600 underline font-semibold hover:text-red-700"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    key={partIdx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 underline font-semibold hover:text-red-700 inline-flex items-center gap-0.5"
                  >
                    {label}
                    <ExternalLink className="w-3 h-3 inline-block" />
                  </a>
                );
              }

              return <span key={partIdx}>{part}</span>;
            })}
          </span>
        </p>
      );
    });
  };

  return (
    <aside
      aria-label="Portfolio Chat Assistant"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Friendly Tooltip Greeting on Initial Load */}
      {!isOpen && showGreetingTooltip && !hasOpenedBefore && (
        <div className="mb-3 max-w-xs animate-bounce bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-2xl p-3.5 relative flex items-start gap-2.5 transition-all">
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-red-200 shadow-xs">
            <img
              src={profileImg}
              alt="Tabish"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                Tabish's Assistant <Sparkles className="w-3 h-3 text-red-500" />
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGreetingTooltip(false);
                }}
                className="text-slate-400 hover:text-slate-600 p-0.5"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[11px] text-slate-600 mt-1 leading-snug">
              Have questions about my projects, skills, or resume? Chat with me!
            </p>
          </div>
          {/* Arrow pointing down */}
          <div className="w-3 h-3 bg-white border-b border-r border-slate-200/90 rotate-45 absolute -bottom-1.5 right-7" />
        </div>
      )}

      {/* Main Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Chat with Tabish's Assistant"
          className="w-[calc(100vw-2.5rem)] sm:w-[390px] h-[550px] max-h-[82vh] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl rounded-3xl flex flex-col overflow-hidden mb-3 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-red-500 shadow-sm bg-white">
                  <img
                    src={profileImg}
                    alt="Tabish Firoz"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
              </div>
              <div>
                <h3 className="text-sm font-bold flex items-center gap-1.5">
                  Tabish AI Assistant
                  <span className="px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-[9px] font-bold">
                    ONLINE
                  </span>
                </h3>
                <p className="text-[11px] text-slate-300">
                  Full Stack Portfolio Guide
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition"
                title="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleToggle}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Message History List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/60 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Bot Avatar Icon */}
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-red-100 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-red-600" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-[13px] leading-relaxed shadow-xs transition-all ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-tr-xs"
                      : "bg-white border border-slate-200/90 text-slate-800 rounded-tl-xs"
                  }`}
                >
                  {/* Formatted Text Content */}
                  <div>{formatText(msg.text)}</div>

                  {/* Optional Action Button (e.g. Download Resume) */}
                  {msg.action?.type === "download_resume" && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100">
                      <a
                        href={resumePdf}
                        download="Tabish_Firoz_Resume.pdf"
                        className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-xs shadow-md shadow-red-500/20 transition-all hover:scale-[1.02]"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Resume (PDF)</span>
                      </a>
                    </div>
                  )}

                  {/* Optional Navigation Links */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-3 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {msg.links.map((linkItem, idx) =>
                        linkItem.to ? (
                          <Link
                            key={idx}
                            to={linkItem.to}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 text-[11px] font-semibold transition"
                          >
                            <span>{linkItem.label}</span>
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        ) : (
                          <a
                            key={idx}
                            href={linkItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 text-[11px] font-semibold transition"
                          >
                            <span>{linkItem.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )
                      )}
                    </div>
                  )}

                  {/* Interactive Quick Suggestions Chips */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Suggested questions:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.suggestions.map((suggestion, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSendMessage(suggestion)}
                            className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-red-100 hover:text-red-600 text-slate-700 text-[11px] font-medium transition cursor-pointer border border-slate-200/60"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div
                    className={`text-[9px] mt-1.5 text-right font-medium ${
                      msg.sender === "user"
                        ? "text-red-100"
                        : "text-slate-400"
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {/* User Avatar */}
                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-full bg-red-100 border border-red-200 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-red-600" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-xs px-3.5 py-2.5 shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                  <span className="text-[11px] text-slate-400 ml-1 font-medium">
                    Thinking...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <div className="p-3 bg-white border-t border-slate-200/90">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-3 py-1.5 focus-within:border-red-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-400/20 transition-all">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects, resume..."
                className="flex-1 bg-transparent text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none py-1"
                disabled={isTyping}
              />
              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                className="w-8 h-8 rounded-xl bg-red-500 hover:bg-red-600 disabled:opacity-40 disabled:hover:bg-red-500 text-white flex items-center justify-center transition shrink-0 cursor-pointer shadow-xs"
                title="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-400">
              <span>Press Enter to send</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-red-500" />
                Instant Portfolio Answers
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Launcher Action Button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        className={`relative group w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer ${
          isOpen
            ? "bg-slate-900 text-white hover:bg-slate-800"
            : "bg-gradient-to-tr from-red-600 via-red-500 to-rose-500 text-white shadow-red-500/35 hover:shadow-red-500/50"
        }`}
      >
        {/* Ambient pulse effect when closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-2xl bg-red-500 opacity-40 blur-sm group-hover:opacity-75 animate-pulse-subtle pointer-events-none" />
        )}

        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <div className="relative z-10 flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
          </div>
        )}
      </button>
    </aside>
  );
}

export default ChatBot;
