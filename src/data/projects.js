import galaxy from "../assets/3d.png";
import neocare from "../assets/NeoCare.png";

export const projects = [
  {
    id: "video",
    track: "Web",
    title: "Video Editing Portfolio",
    category: "Featured / Creative development",
    role: "Design, development & video editing",
    description:
      "A portfolio for my short-form, long-form, and color grading work. I built an editorial layout with scroll reveals, an interactive toolkit, and on-demand video players that keep the page light.",
    stack: "React · Vite · CSS · IntersectionObserver",
    visual: {
      label: "What's on the site",
      steps: [["Short-form", "Vertical cuts"], ["Long-form", "Story-driven edits"], ["Color grading", "Look development"]],
      caption: "On-demand video players keep the page light",
    },
    github: "https://github.com/keanulaw/video-editing-portfolio",
    live: "https://video-editing-portfolio-sooty-gamma.vercel.app/",
  },
  {
    id: "reel",
    track: "Apps & games",
    title: "Reel & Resist — Stillwater",
    category: "Browser game",
    role: "Game design & web development",
    description:
      "A bird’s-eye fishing game with circular reeling controls, fish fights, and gear progression. Catches earn coins and XP, while equipment and personal bests are saved locally between sessions.",
    stack: "JavaScript · Canvas 2D · Web Audio · localStorage",
    github: "https://github.com/keanulaw/reel-and-resist",
    visual: {
      label: "Fishing gameplay",
      numbered: true,
      steps: [["Cast", "Find a fish & hook"], ["Reel", "Manage tension & fish runs"], ["Upgrade", "Earn coins, XP & gear"]],
      caption: "Canvas artwork / procedural audio / local saves",
    },
  },
  {
    id: "story",
    track: "AI",
    title: "AI Story Video Editor",
    category: "Dialogue-to-video prototype",
    role: "Web development & video tooling",
    description:
      "A local dialogue-to-video editor that turns a script into animated conversation scenes. It detects speakers, applies rule-based reactions and sound effects, previews the story, and renders an MP4 with Remotion.",
    stack: "Next.js · React · TypeScript · Tailwind CSS · Remotion",
    github: "https://github.com/keanulaw/ai-story-video-editor",
    visual: {
      label: "Dialogue to video",
      numbered: true,
      steps: [["Script", "Characters & dialogue"], ["Preview", "Animated scenes & reactions"], ["Export", "Render a local MP4"]],
      caption: "Script → scene data → Remotion video",
    },
  },
  {
    id: "galaxy",
    track: "Web",
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
    track: "AI",
    title: "AI edit pipeline",
    category: "AI automation / Most recent work",
    role: "AI video workflows & cloud deployment",
    description:
      "I helped build and improve a pipeline that turns raw client uploads into edited video: transcription, captions, overlays, cuts, b-roll, ad formatting, and long-form clipping.",
    stack:
      "Claude Code · Deepgram · Gemini · Supabase · Vercel · Railway · React / Next.js · HyperFrame",
    visual: {
      label: "Editing workflow",
      numbered: true,
      steps: [["Transcribe", "Speech → text"], ["Refine", "Captions, cuts & b-roll"], ["Deliver", "Clips & formatted ads"]],
      caption: "Raw uploads → client-ready video",
    },
    detail: true,
  },
  {
    id: "neocare",
    track: "Apps & games",
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
    track: "Apps & games",
    title: "Phone Rental App",
    category: "Mobile application",
    role: "App development",
    description:
      "List devices, browse available phones, and manage secure bookings and rentals with verified profiles and in-app messaging.",
    stack: "React.js · Mobile",
    visual: {
      label: "Rental flow",
      numbered: true,
      steps: [["List", "Add a device"], ["Browse", "Find available phones"], ["Book", "Verified profiles & messaging"]],
      caption: "Verified profiles / bookings / in-app messaging",
    },
    github: "https://github.com/keanulaw/phone-rental",
  },
  {
    id: "cloud",
    track: "Cloud",
    title: "Cloud & infrastructure",
    category: "Deployment & server configuration",
    role: "Cloud deployment",
    description:
      "Deployed websites on Google Cloud and configured a Minecraft server on an Ubuntu virtual machine with Oracle Cloud and SSH.",
    stack: "Google Cloud · Oracle Cloud · Ubuntu Linux · SSH",
    visual: {
      label: "Deployment overview",
      steps: [["Google Cloud", "Websites"], ["Oracle Cloud", "Minecraft server"], ["Ubuntu + SSH", "Server configuration"]],
      caption: "Ubuntu virtual machine / SSH / server configuration",
    },
  },
  {
    id: "portfolio",
    track: "Web",
    title: "Personal development portfolio",
    category: "The site you’re exploring",
    role: "Design & web development",
    description:
      "Designed and deployed a responsive portfolio to bring together my projects and development work.",
    stack: "React · Vite · Tailwind CSS",
    visual: {
      label: "Built with",
      steps: [["React", "Components"], ["Vite", "Dev & build"], ["Tailwind CSS", "Styling"]],
      caption: "Responsive, deployed portfolio",
    },
    github: "https://github.com/keanulaw/my-portfolio",
  },
];

export const tracks = ["AI", "Web", "Apps & games", "Cloud"];
