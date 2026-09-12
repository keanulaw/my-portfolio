import galaxy from "../assets/3d.png";
import neocare from "../assets/NeoCare.png";

export const projects = [
  {
    id: "video",
    title: "Video Editing Portfolio",
    category: "Featured / Creative development",
    role: "Design, development & video editing",
    description:
      "A portfolio for my short-form, long-form, and color grading work. I built an editorial layout with scroll reveals, an interactive toolkit, and on-demand video players that keep the page light.",
    stack: "React · Vite · CSS · IntersectionObserver",
    github: "https://github.com/keanulaw/video-editing-portfolio",
    live: "https://video-editing-portfolio-sooty-gamma.vercel.app/",
  },
  {
    id: "galaxy",
    title: "Galaxy 3D",
    category: "3D on the web",
    role: "Web development & scene integration",
    description:
      "A React landing-page experiment built around an animated Spline galaxy. I brought the scene into a responsive layout and added staggered text entrances and scroll reveals.",
    stack: "React · Spline · Framer Motion · Tailwind CSS · Vite",
    image: galaxy,
    alt: "Galaxy 3D — a luminous spiral galaxy against a dark background",
    github: "https://github.com/keanulaw/my-3d-website",
    live: "https://my-3d-website-krqk.vercel.app/",
  },
  {
    id: "ai",
    title: "AI edit pipeline",
    category: "AI automation / Most recent work",
    role: "AI video workflows & cloud deployment",
    description:
      "I helped build and improve a pipeline that turns raw client uploads into edited video: transcription, captions, overlays, cuts, b-roll, ad formatting, and long-form clipping.",
    stack:
      "Claude Code · Deepgram · Gemini · Supabase · Vercel · Railway · React / Next.js · HyperFrame",
    detail: true,
  },
  {
    id: "neocare",
    title: "NeoCare",
    category: "Pregnancy support app",
    role: "Mobile & web development",
    description:
      "A React Native app for pregnancy support, tracking, and guidance. A chatbot provides doctor recommendations, with a companion React website.",
    stack: "React Native · React.js · Chatbot",
    image: neocare,
    alt: "NeoCare logo — Tender Care for Two",
    github: "https://github.com/keanulaw/NeoCare-App.git",
  },
  {
    id: "rental",
    title: "Phone Rental App",
    category: "Mobile application",
    role: "App development",
    description:
      "List devices, browse available phones, and manage secure bookings and rentals with verified profiles and in-app messaging.",
    stack: "React.js · Mobile",
    github: "https://github.com/keanulaw/phone-rental",
  },
  {
    id: "cloud",
    title: "Cloud & infrastructure",
    category: "Deployment & server configuration",
    role: "Cloud deployment",
    description:
      "Deployed websites on Google Cloud and configured a Minecraft server on an Ubuntu virtual machine with Oracle Cloud and SSH.",
    stack: "Google Cloud · Oracle Cloud · Ubuntu Linux · SSH",
  },
  {
    id: "portfolio",
    title: "Personal development portfolio",
    category: "The site you’re exploring",
    role: "Design & web development",
    description:
      "Designed and deployed a responsive portfolio to bring together my projects and development work.",
    stack: "React · Vite · Tailwind CSS",
    github: "https://github.com/keanulaw/my-portfolio",
  },
];
