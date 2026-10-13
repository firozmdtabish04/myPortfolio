import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  X,
  ExternalLink,
  Layers,
  Sparkles,
  Filter,
  Grid3X3,
  List,
  Eye,
  CheckCircle2,
  Code2,
  Flame,
  ArrowUpRight,
  Globe,
  Terminal,
  Server,
  Database,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiRedis,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiAngular,
  SiJavascript,
} from "react-icons/si";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJava,
  FaDocker,
  FaLaptopCode,
  FaHospital,
  FaRocket,
  FaCloudSun,
  FaBriefcase,
  FaBookOpen,
  FaUserGraduate,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

// Projects Dataset with rich metadata and categorization
const projectsData = [
  {
    id: "disaster-response",
    title: "Smart Disaster Response Platform",
    tagline: "AI & NASA Incident Tracking Architecture",
    category: "Full Stack",
    badge: "Flagship",
    badgeColor: "bg-red-500 text-white",
    description:
      "AI-powered disaster management platform with live incident tracking, NASA API integration, high-performance Redis caching, and Spring Boot microservices backend.",
    longDescription:
      "An enterprise-grade disaster resilience system designed for rapid crisis response. Features real-time incident mapping, live meteorological and satellite telemetry via NASA APIs, sub-millisecond query performance utilizing Redis caching layers, and a robust Java Spring Boot RESTful backbone.",
    highlights: [
      "Real-time geospatial hazard mapping",
      "NASA EONET / NeoWs API live telemetry integration",
      "Redis distributed caching for high-throughput incidents",
      "Spring Boot RESTful microservices with PostgreSQL",
    ],
    gradient: "from-rose-600 via-red-600 to-amber-600",
    icon: <FaRocket className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://resqueos.vercel.app/login",
    isLive: true,
    tech: ["React", "Spring Boot", "PostgreSQL", "Redis", "Tailwind CSS"],
    architecture: {
      frontend: "React, Tailwind CSS, Lucide Icons",
      backend: "Spring Boot, Java 17, REST APIs",
      database: "PostgreSQL, Redis Cache",
      deployment: "Vercel & Cloud Hosted",
    },
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    tagline: "Clinical Records & Doctor Appointment Portal",
    category: "Full Stack",
    badge: "Enterprise",
    badgeColor: "bg-blue-600 text-white",
    description:
      "Comprehensive healthcare solution featuring digitized electronic medical records (EMR), automated appointment scheduling, role-based authentication, and admin analytics.",
    longDescription:
      "A complete hospital workflow management software streamlining administrative, physician, and patient operations. Built with secure role-based access control, relational database schema design, and seamless appointment booking interfaces.",
    highlights: [
      "Role-based authentication (Admin, Doctor, Patient)",
      "Patient electronic health records & prescription records",
      "Automated slot allocation and appointment scheduling",
      "Optimized MySQL relational schema with indexed queries",
    ],
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    icon: <FaHospital className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://healthcaremanage.vercel.app/",
    isLive: true,
    tech: ["Angular", "Spring Boot", "MySQL", "Java"],
    architecture: {
      frontend: "Angular, TypeScript, Responsive UI",
      backend: "Spring Boot, Spring Security, JPA/Hibernate",
      database: "MySQL Relational DB",
      deployment: "Vercel Production Deployment",
    },
  },
  {
    id: "crm-application",
    title: "Enterprise CRM Application",
    tagline: "Corporate Workflow & Team Analytics Suite",
    category: "Enterprise",
    badge: "Production",
    badgeColor: "bg-emerald-600 text-white",
    description:
      "Full-featured CRM platform featuring employee lifecycle management, operational analytics dashboards, JWT token authentication, and modular React component architecture.",
    longDescription:
      "Engineered during industry internship to power client relations, internal team task pipelines, sales tracking, and operational velocity. Features real-time metric visualization and modular component-driven UX.",
    highlights: [
      "Comprehensive employee records and departmental hierarchy",
      "Interactive analytics dashboards with metrics charts",
      "Secure JWT authentication and session handling",
      "Modular, reusable UI components built for scale",
    ],
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    icon: <FaBriefcase className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://crm.lyient.com/login",
    isLive: true,
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    architecture: {
      frontend: "React, Tailwind CSS, Reusable Components",
      backend: "Spring Boot, REST API, JWT Auth",
      database: "MySQL",
      deployment: "Custom Domain Production Server",
    },
  },
  {
    id: "medifind",
    title: "MediFind Healthcare & Pharmacy",
    tagline: "Full-Stack Medical Store & Inventory Portal",
    category: "Full Stack",
    badge: "MERN Stack",
    badgeColor: "bg-purple-600 text-white",
    description:
      "Full-stack MERN healthcare portal with pharmaceutical store inventory, medicine search, prescription checkout flows, and responsive mobile-first UI.",
    longDescription:
      "An end-to-end medical logistics and store application enabling users to browse available drugs, view dosage requirements, manage shopping carts, and connect with local pharmacy inventories.",
    highlights: [
      "Medicine search with category filtering & details",
      "Secure Express REST API endpoints with MongoDB persistence",
      "Shopping cart, order summaries, and checkout flows",
      "Modern Tailwind CSS styling with mobile-optimized layout",
    ],
    gradient: "from-purple-600 via-indigo-600 to-pink-600",
    icon: <ShieldCheck className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04/Medical-Store-MERN-",
    demo: "https://medifind-jehna.vercel.app/",
    isLive: true,
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    architecture: {
      frontend: "React, Context API, Tailwind CSS",
      backend: "Node.js, Express.js",
      database: "MongoDB Atlas",
      deployment: "Vercel Hosted",
    },
  },
  {
    id: "dev-resources",
    title: "Full-Stack Dev Learning Platform",
    tagline: "Interactive Web Standards & Code Curriculum",
    category: "Education & Tools",
    badge: "Knowledge Hub",
    badgeColor: "bg-amber-600 text-white",
    description:
      "Exhaustive frontend and computer science learning platform with semantic HTML5, modern CSS3 layout engines, JavaScript deep-dives, practice exercises, and accessibility guidelines.",
    longDescription:
      "Created as an educational initiative providing structured study roadmaps, live code snippets, interactive quiz questions, responsive design patterns, and full-stack software development references.",
    highlights: [
      "Comprehensive notes covering HTML5, CSS3, ES6+ JS",
      "Interactive code examples with preview playgrounds",
      "Web accessibility (a11y) and responsive grid mastery",
      "Interview prep questions & algorithmic practice sets",
    ],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    icon: <FaBookOpen className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://lustrous-crostata-7a79d3.netlify.app/",
    isLive: true,
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    architecture: {
      frontend: "Semantic HTML5, CSS3 Modern Flex/Grid, Vanilla JS",
      backend: "Static Jamstack Architecture",
      database: "Local Indexed Storage",
      deployment: "Netlify Edge CDN",
    },
  },
  {
    id: "lyfetech-official",
    title: "LyfeTech Official Corporate Portal",
    tagline: "Corporate Brand Identity & Service Showcase",
    category: "Frontend / UI",
    badge: "Corporate",
    badgeColor: "bg-indigo-600 text-white",
    description:
      "Corporate technology company website featuring modern interactive sections, fluid animations, high-converting typography, and responsive layouts built with React.",
    longDescription:
      "A flagship technology consulting and corporate site created for LyfeTech. Highlights company capabilities, software consulting services, case studies, and interactive contact triggers.",
    highlights: [
      "Dynamic interactive service showcases and team sections",
      "High-speed performance with optimized assets",
      "Full mobile, tablet, and ultra-wide display responsiveness",
      "Modern Tailwind CSS styling with cohesive brand palette",
    ],
    gradient: "from-indigo-600 via-blue-600 to-sky-500",
    icon: <Globe className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://lyfetech.vercel.app/",
    isLive: true,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    architecture: {
      frontend: "React, Tailwind CSS, Modern UI Components",
      backend: "Client-side SPA",
      database: "Dynamic JSON configuration",
      deployment: "Vercel Edge Network",
    },
  },
  {
    id: "lyient-official",
    title: "Lyient Official Digital Platform",
    tagline: "High-Performance Corporate Web Experience",
    category: "Frontend / UI",
    badge: "Live Client",
    badgeColor: "bg-sky-600 text-white",
    description:
      "Production corporate website built with sleek typography, custom UI micro-interactions, responsive layouts, and seamless user experiences.",
    longDescription:
      "Official website for Lyient, emphasizing company offerings, digital solutions, modern UX principles, and lightning-fast loading speeds across global CDNs.",
    highlights: [
      "Custom UI components designed for brand distinction",
      "Fast Core Web Vitals with zero layout shifts",
      "Engaging call-to-action sections and contact pipelines",
      "100% accessible and responsive markup",
    ],
    gradient: "from-sky-600 via-cyan-600 to-blue-700",
    icon: <Layers className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://lyient-official.vercel.app/",
    isLive: true,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    architecture: {
      frontend: "React, Tailwind CSS, Lucide Icons",
      backend: "Serverless Jamstack",
      database: "Static Config",
      deployment: "Vercel Production",
    },
  },
  {
    id: "minute-mind",
    title: "Minute Mind Focus & Flow",
    tagline: "Cognitive Productivity & Timer Suite",
    category: "Productivity",
    badge: "Productivity",
    badgeColor: "bg-violet-600 text-white",
    description:
      "Productivity and deep-work application engineered to maximize concentration using customizable Pomodoro cycles, goal tracking, and distraction-free visual design.",
    longDescription:
      "Designed to help students and developers get into cognitive flow state. Includes session logs, ambient UI modes, customizable intervals, and habit formation metrics.",
    highlights: [
      "Customizable Pomodoro timer with audible notification cues",
      "Streak tracking and daily deep-work metrics",
      "Distraction-free minimalist dark/light visual modes",
      "Smooth micro-animations and zero latency state updates",
    ],
    gradient: "from-violet-600 via-purple-600 to-pink-600",
    icon: <Sparkles className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://minute-mind-psi.vercel.app/",
    isLive: true,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    architecture: {
      frontend: "React, LocalStorage Engine, Tailwind CSS",
      backend: "Client-side Persistence",
      database: "Browser Storage Cache",
      deployment: "Vercel",
    },
  },
  {
    id: "student-hub",
    title: "Student Need Hub",
    tagline: "Academic Study Toolkit & Resource Vault",
    category: "Productivity",
    badge: "Campus",
    badgeColor: "bg-teal-600 text-white",
    description:
      "Integrated productivity suite crafted specifically for engineering students with dedicated focus tools, syllabus vaults, and academic utilities.",
    longDescription:
      "An all-in-one portal tackling student academic disorganization. Houses exam revision notes, subject categorizations, timetable planners, and a dedicated focus study room.",
    highlights: [
      "Dedicated focus mode eliminating digital distractions",
      "Curated engineering course notes and reference links",
      "Interactive student task tracker with local persistence",
      "Clean, modern card-based navigation",
    ],
    gradient: "from-teal-600 via-emerald-600 to-cyan-600",
    icon: <FaUserGraduate className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://student-need-hub.vercel.app/focus",
    isLive: true,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    architecture: {
      frontend: "React, Tailwind CSS, Custom Hooks",
      backend: "Client-side Web Storage",
      database: "Structured JSON Data",
      deployment: "Vercel",
    },
  },
  {
    id: "ai-core",
    title: "AI Core Next-Gen Landing",
    tagline: "Futuristic Artificial Intelligence Showcase",
    category: "AI & Tools",
    badge: "AI Concept",
    badgeColor: "bg-fuchsia-600 text-white",
    description:
      "Futuristic, dark-themed AI platform landing page featuring glowing neon accents, high-tech glassmorphism, responsive grids, and micro-interactions.",
    longDescription:
      "Explores next-generation visual design aesthetics for artificial intelligence startups. Implements gradient meshes, glowing border cards, cybernetic iconography, and fluid responsiveness.",
    highlights: [
      "High-contrast futuristic aesthetic with glow treatments",
      "Interactive feature showcases and model comparison tables",
      "Mobile-responsive grid with smooth CSS transitions",
      "Optimized vector graphics and fast load benchmarks",
    ],
    gradient: "from-fuchsia-600 via-purple-600 to-indigo-600",
    icon: <Cpu className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://aicore-latest.vercel.app/",
    isLive: true,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    architecture: {
      frontend: "React, Tailwind CSS, Lucide Icons",
      backend: "Jamstack",
      database: "Static Meta",
      deployment: "Vercel",
    },
  },
  {
    id: "weather-app",
    title: "Live Atmospheric Weather App",
    tagline: "Real-Time Meteorological Radar & Forecasts",
    category: "AI & Tools",
    badge: "Live API",
    badgeColor: "bg-cyan-600 text-white",
    description:
      "Interactive weather application delivering live forecasts, temperature graphs, atmospheric humidity, wind speed metrics, and responsive location lookup.",
    longDescription:
      "Leverages real-time meteorological weather APIs to deliver accurate 7-day forecasts and hourly atmospheric conditions worldwide with intuitive visual indicators.",
    highlights: [
      "Instant city search with dynamic API data fetching",
      "Dynamic weather condition iconography and backdrop gradients",
      "Metrics for humidity, pressure, wind velocity, and UV index",
      "Graceful error boundaries and loading skeleton states",
    ],
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    icon: <FaCloudSun className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04/UI-UX-Weather-App-",
    demo: "https://firozmdtabish04.github.io/UI-UX-Weather-App-/",
    isLive: true,
    tech: ["React", "Weather API", "Tailwind CSS"],
    architecture: {
      frontend: "React, OpenWeatherMap API, Tailwind CSS",
      backend: "RESTful HTTP Endpoints",
      database: "Client In-Memory Cache",
      deployment: "GitHub Pages",
    },
  },
  {
    id: "cosmic-watch",
    title: "Cosmic Watch NASA Explorer",
    tagline: "Deep Space & Near-Earth Object Analytics",
    category: "AI & Tools",
    badge: "NASA API",
    badgeColor: "bg-orange-600 text-white",
    description:
      "NASA-powered astronomical application displaying Near-Earth Objects (NEOs), trajectory distances, hazardous body alerts, and space imagery.",
    longDescription:
      "Interfacing directly with NASA's Open APIs (NeoWs and APOD) to visualize asteroid fly-bys, orbital velocity vectors, diameter estimations, and daily space photography.",
    highlights: [
      "Live integration with NASA NeoWs REST API",
      "Hazardous asteroid warning metrics and velocity telemetry",
      "Astronomy Picture of the Day (APOD) daily explorer",
      "High-tech astrophysics dashboard interface",
    ],
    gradient: "from-orange-600 via-red-600 to-rose-700",
    icon: <Flame className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "#",
    isLive: false,
    tech: ["React", "NASA API", "Tailwind CSS"],
    architecture: {
      frontend: "React, NASA Open API Suite, Tailwind CSS",
      backend: "NASA NeoWs Public API",
      database: "Static Orbital Data",
      deployment: "Experimental Build",
    },
  },
  {
    id: "portfolio-website",
    title: "Developer Portfolio & Ecosystem",
    tagline: "Personal Engineering Brand & Showcase",
    category: "Frontend / UI",
    badge: "Portfolio",
    badgeColor: "bg-red-600 text-white",
    description:
      "Modern, ultra-responsive portfolio designed with interactive project filters, skills matrices, certifications showcase, and clean component architecture.",
    longDescription:
      "Showcases full-stack software development projects, published engineering literature, hackathons, and technical competencies using contemporary web standards.",
    highlights: [
      "Modular React component design with React Router DOM",
      "Dynamic project search, filter tabs, and detail modals",
      "Clean responsive aesthetics with glassmorphic depth",
      "SEO friendly and optimized performance scores",
    ],
    gradient: "from-red-600 via-rose-600 to-pink-600",
    icon: <Code2 className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://tafi-portfolio.vercel.app/",
    isLive: true,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    architecture: {
      frontend: "React, Tailwind CSS, Lucide Icons, React Router",
      backend: "Client-side SPA",
      database: "Local Static Datasets",
      deployment: "Vercel Global Edge",
    },
  },
  {
    id: "rani-portfolio",
    title: "Rani Firoz Client Portfolio",
    tagline: "Custom Brand Portfolio & Creative Showcase",
    category: "Frontend / UI",
    badge: "Client Work",
    badgeColor: "bg-pink-600 text-white",
    description:
      "Clean, elegant, and responsive portfolio website featuring smooth transitions, aesthetic typography, and custom gallery presentations.",
    longDescription:
      "Client web design and portfolio build featuring personalized branding, smooth interactive sections, mobile responsiveness, and clean aesthetic layouts.",
    highlights: [
      "Custom typographic hierarchy and visual branding",
      "Aesthetic micro-interactions and smooth scroll behavior",
      "Mobile-optimized touch layout and fast image loading",
      "Clean contact and showcase sections",
    ],
    gradient: "from-pink-500 via-rose-500 to-red-500",
    icon: <Sparkles className="text-3xl text-white" />,
    github: "https://github.com/firozmdtabish04",
    demo: "https://rani-firoz.vercel.app/",
    isLive: true,
    tech: ["React", "Tailwind CSS"],
    architecture: {
      frontend: "React, Tailwind CSS, Responsive Design",
      backend: "Static Jamstack",
      database: "Static Config",
      deployment: "Vercel Hosted",
    },
  },
];

// Tech stack icon and color mapper
const iconMap = {
  React: <FaReact className="text-sky-400" />,
  "Spring Boot": <SiSpringboot className="text-emerald-500" />,
  MySQL: <SiMysql className="text-blue-500" />,
  PostgreSQL: <SiPostgresql className="text-indigo-400" />,
  Redis: <SiRedis className="text-red-500" />,
  Docker: <FaDocker className="text-sky-400" />,
  Java: <FaJava className="text-orange-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  Angular: <SiAngular className="text-red-600" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "Express.js": <SiExpress className="text-gray-700" />,
  MongoDB: <SiMongodb className="text-emerald-600" />,
  HTML5: <FaHtml5 className="text-orange-500" />,
  CSS3: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  "NASA API": <span className="text-red-500 font-extrabold text-xs">NASA</span>,
  "Weather API": <span className="text-cyan-500 font-bold text-xs">API</span>,
  API: <span className="text-purple-500 font-bold text-xs">API</span>,
  "Responsive Design": <span className="text-amber-500 font-bold text-xs">UI</span>,
};

// Available categories
const categories = [
  "All Projects",
  "Full Stack",
  "Enterprise",
  "Frontend / UI",
  "AI & Tools",
  "Productivity",
  "Education & Tools",
];

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedTech, setSelectedTech] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Compute distinct tech tags for quick filter chips
  const allTechTags = useMemo(() => {
    const set = new Set();
    projectsData.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category match
      const matchesCategory =
        selectedCategory === "All Projects" ||
        project.category === selectedCategory;

      // Tech match
      const matchesTech =
        selectedTech === "All" || project.tech.includes(selectedTech);

      // Search match
      const searchLower = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !searchLower ||
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tagline.toLowerCase().includes(searchLower) ||
        project.tech.some((t) => t.toLowerCase().includes(searchLower));

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [searchTerm, selectedCategory, selectedTech]);

  // Project statistics
  const stats = useMemo(() => {
    const total = projectsData.length;
    const fullStackCount = projectsData.filter(
      (p) => p.category === "Full Stack" || p.category === "Enterprise"
    ).length;
    const liveDeployments = projectsData.filter((p) => p.isLive).length;
    return { total, fullStackCount, liveDeployments };
  }, []);

  const handleTechClick = (e, tech) => {
    e.stopPropagation();
    setSelectedTech(tech === selectedTech ? "All" : tech);
  };

  return (
    <section className="relative min-h-screen py-14 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-red-50/40 bg-mesh-pattern">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-80 bg-red-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-96 right-10 w-80 h-80 bg-orange-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/90 border border-red-200/80 text-red-600 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-red-500 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Interactive Engineering Portfolio</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Featured <span className="shimmer-text">Projects & Systems</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Production-grade full-stack architectures, enterprise solutions, and
            interactive web platforms engineered with Spring Boot, React, Redis,
            and scalable modern cloud tools.
          </p>

          {/* Quick Stats Pill Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 max-w-xl mx-auto">
            <div className="glass-panel p-3.5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center hover:border-red-300 transition-all">
              <span className="text-2xl sm:text-3xl font-black text-red-600">
                {stats.total}+
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-0.5">
                Total Projects
              </span>
            </div>

            <div className="glass-panel p-3.5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center hover:border-red-300 transition-all">
              <span className="text-2xl sm:text-3xl font-black text-slate-900">
                {stats.liveDeployments}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-0.5">
                Live Production
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 glass-panel p-3.5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center hover:border-red-300 transition-all">
              <span className="text-2xl sm:text-3xl font-black text-red-500">
                {stats.fullStackCount}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-0.5">
                Full-Stack / CRM
              </span>
            </div>
          </div>
        </div>

        {/* ================= CONTROLS & FILTER TOOLBAR ================= */}
        <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-xl mb-10 transition-all duration-300">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects by name, description, or stack (e.g., Redis, NASA, Spring)..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50/80 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm sm:text-base font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:border-red-400 transition-all shadow-inner"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* View Mode Toggle & Status Indicator */}
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 text-xs font-semibold text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  {filteredProjects.length}{" "}
                  {filteredProjects.length === 1 ? "Project" : "Projects"}
                </span>
              </div>

              {/* View switch buttons */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-red-500 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  title="Grid View"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-white text-red-500 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  title="Detailed List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-5 pt-5 border-t border-slate-200/70 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
            {categories.map((category) => {
              const count =
                category === "All Projects"
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === category).length;
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-red-500 text-white shadow-md shadow-red-500/20 scale-[1.02]"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Technology Filter Pills */}
          <div className="mt-3 flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-medium text-slate-400 mr-1">
              Stack filter:
            </span>
            {allTechTags.map((tech) => {
              const isSelected = selectedTech === tech;
              return (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-50 border border-slate-200 text-slate-600 hover:border-red-300 hover:text-red-600"
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= NO RESULTS FALLBACK ================= */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white/80 rounded-3xl border border-slate-200 p-8 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 mx-auto flex items-center justify-center text-2xl mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">
              No matching projects found
            </h3>
            <p className="mt-2 text-slate-500 text-sm max-w-md mx-auto">
              We couldn't find any projects matching "{searchTerm}" under the selected filters. Try clearing your search query or choosing another category.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Projects");
                setSelectedTech("All");
              }}
              className="mt-6 px-5 py-2.5 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ================= PROJECTS GRID VIEW ================= */}
        {viewMode === "grid" && (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-red-300/80 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
              >
                {/* Visual Header Banner */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Decorative background geometry */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-black/10 blur-xl pointer-events-none" />
                  <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

                  {/* Top Bar inside Banner: Badge + Status */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm ${project.badgeColor}`}
                    >
                      {project.badge}
                    </span>

                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md text-[11px] font-semibold text-white">
                      {project.isLive ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Live</span>
                        </>
                      ) : (
                        <>
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span>Prototype</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Banner Center Domain Icon + Category */}
                  <div className="relative z-10 flex items-center justify-between mt-auto pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-white/80 text-xs font-medium uppercase tracking-wider block">
                          {project.category}
                        </span>
                        <h4 className="text-white font-bold text-sm tracking-wide truncate max-w-[180px]">
                          {project.tagline}
                        </h4>
                      </div>
                    </div>

                    {/* Quick View Icon Button */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md flex items-center justify-center transition-all shadow-md"
                      title="Quick Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights list */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                    {project.highlights.slice(0, 2).map((h, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-600"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills (Clickable) */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <button
                        key={t}
                        onClick={(e) => handleTechClick(e, t)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                          selectedTech === t
                            ? "bg-red-500 text-white shadow-sm"
                            : "bg-slate-50 border border-slate-200/90 text-slate-700 hover:border-red-300 hover:text-red-600 hover:bg-red-50/50"
                        }`}
                        title={`Filter by ${t}`}
                      >
                        <span className="text-sm">{iconMap[t]}</span>
                        <span>{t}</span>
                      </button>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition shadow-sm group/btn truncate"
                    >
                      <FaGithub className="text-xs sm:text-sm shrink-0 group-hover/btn:scale-110 transition-transform" />
                      <span className="truncate">Code</span>
                    </a>

                    {project.demo && project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-2.5 rounded-xl bg-red-500 text-white text-xs sm:text-sm font-semibold hover:bg-red-600 transition shadow-md shadow-red-500/20 group/btn truncate"
                      >
                        <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0 group-hover/btn:scale-110 transition-transform" />
                        <span className="truncate">Live Demo</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition truncate"
                      >
                        <Eye className="w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0" />
                        <span className="truncate">Inspect</span>
                      </button>
                    )}

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-red-600 hover:border-red-300 hover:bg-red-50/50 transition shrink-0"
                      title="Architecture Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= DETAILED LIST VIEW ================= */}
        {viewMode === "list" && (
          <div className="space-y-5">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300/80 transition-all p-5 sm:p-7 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between"
              >
                {/* Left: Icon & Core Details */}
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} shrink-0 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}
                  >
                    {project.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase ${project.badgeColor}`}
                      >
                        {project.badge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
                        {project.category}
                      </span>
                    </div>

                    <p className="mt-2 text-slate-600 text-sm leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <button
                          key={t}
                          onClick={(e) => handleTechClick(e, t)}
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium transition ${
                            selectedTech === t
                              ? "bg-red-500 text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          <span>{iconMap[t]}</span>
                          <span>{t}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex sm:flex-col lg:flex-row gap-2.5 w-full lg:w-auto shrink-0 justify-end pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:border-red-300 hover:text-red-500 hover:bg-red-50/50 transition flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Details</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition flex items-center justify-center gap-1.5"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-red-500 text-white text-xs sm:text-sm font-semibold hover:bg-red-600 transition flex items-center justify-center gap-1.5 shadow-md shadow-red-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live App</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= GITHUB COLLABORATION & CTA ================= */}
        <div className="mt-20 p-8 sm:p-12 glass-panel rounded-3xl border border-slate-200/90 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/10 via-orange-400/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>Open Source & Enterprise Code</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Want to Explore More Architectures or Collaborate?
              </h2>

              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Explore 20+ additional repositories on GitHub, including Spring
                Security prototypes, Dockerized microservices, Redis caching
                benchmarks, and responsive design systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href="https://github.com/firozmdtabish04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-2xl bg-slate-900 text-white font-semibold shadow-lg inline-flex items-center gap-3 hover:bg-black hover:scale-105 transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                  <span>Visit GitHub Profile</span>
                </a>

                <a
                  href="/contact"
                  className="px-7 py-3.5 rounded-2xl bg-red-500 text-white font-semibold shadow-lg shadow-red-500/25 inline-flex items-center gap-2 hover:bg-red-600 hover:scale-105 transition-all duration-300"
                >
                  <span>Discuss a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Terminal Preview Card */}
            <div className="lg:col-span-4 bg-slate-900 text-slate-200 p-5 rounded-2xl border border-slate-800 shadow-2xl font-mono text-xs">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-slate-500 text-[10px] ml-auto">
                  developer@tabish:~
                </span>
              </div>
              <p className="text-emerald-400">$ git status</p>
              <p className="text-slate-400 mt-1">
                On branch main • Everything up to date
              </p>
              <p className="text-emerald-400 mt-2">$ npx tabish-firoz --skills</p>
              <p className="text-slate-300 mt-1">
                Java 17, Spring Boot, React, MySQL, Redis, Docker, Tailwind
              </p>
              <p className="text-emerald-400 mt-2">$ echo "Let's build!"</p>
              <p className="text-red-400 font-bold mt-1">
                🚀 Ready for high-impact roles & builds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= INTERACTIVE PROJECT DETAILS MODAL ================= */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`p-6 sm:p-8 bg-gradient-to-br ${activeModalProject.gradient} text-white relative flex items-start justify-between`}
            >
              <div className="relative z-10 max-w-xl">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-3">
                  {activeModalProject.category} • {activeModalProject.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  {activeModalProject.title}
                </h3>
                <p className="text-white/90 text-sm mt-1">
                  {activeModalProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition backdrop-blur-md cursor-pointer shrink-0"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Detailed Overview */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Project Deep Dive
                </h4>
                <p className="mt-2 text-slate-700 text-base leading-relaxed">
                  {activeModalProject.longDescription}
                </p>
              </div>

              {/* Architectural Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  System Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <Laptop className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800">Frontend:</span>
                      <p className="text-slate-600">
                        {activeModalProject.architecture.frontend}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Server className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800">Backend:</span>
                      <p className="text-slate-600">
                        {activeModalProject.architecture.backend}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Database className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800">Database & Cache:</span>
                      <p className="text-slate-600">
                        {activeModalProject.architecture.database}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800">Deployment:</span>
                      <p className="text-slate-600">
                        {activeModalProject.architecture.deployment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Technical Capabilities
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activeModalProject.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-red-50/50 border border-red-100 flex items-start gap-2 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold"
                    >
                      <span>{iconMap[t]}</span>
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-200 transition text-center"
              >
                Close
              </button>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>

                {activeModalProject.demo && activeModalProject.demo !== "#" && (
                  <a
                    href={activeModalProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-red-500 text-white text-xs sm:text-sm font-semibold hover:bg-red-600 transition flex items-center justify-center gap-2 shadow-md shadow-red-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Live Application</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Simple fallback icon component
function Laptop(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="12" x="3" y="4" rx="2" />
      <line x1="2" x2="22" y1="20" y2="20" />
    </svg>
  );
}

export default Projects;
