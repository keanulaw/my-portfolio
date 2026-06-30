import React from "react";
import neoCareImage from "../assets/NeoCare.png";
import dImage from "../assets/3d.png";

const projects = [
  {
    title: "AI Automation & AI Edit Workflows",
    description:
      "Built and improved an AI-powered video editing automation pipeline that turns raw client uploads into edited, client-ready deliverables — covering transcription, subtitle generation, hook/title overlays, dead-air and bad-take removal, b-roll selection, ad formatting, long-form clipping, and cloud-based deployment.",
    technologies: ["Claude Code", "Deepgram", "Gemini", "Supabase", "Railway", "HyperFrame"],
    icon: "🎬",
    gradient: "from-indigo-500 to-fuchsia-500",
    featured: true,
  },
  {
    title: "NeoCare – Pregnancy Support App",
    description:
      "React Native mobile application for pregnancy support, tracking, and guidance, with doctor recommendations through a chatbot and a companion React.js website.",
    technologies: ["React Native", "React.js", "Chatbot"],
    image: neoCareImage,
    github: "https://github.com/keanulaw/NeoCare-App.git",
  },
  {
    title: "Personal Development Portfolio",
    description:
      "Designed and deployed a responsive portfolio website showcasing my personal projects and development work — the site you're viewing now.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    icon: "🧑‍💻",
    gradient: "from-sky-500 to-indigo-500",
    github: "https://github.com/keanulaw/my-portfolio",
  },
  {
    title: "Cloud & Infrastructure Projects",
    description:
      "Deployed websites on Google Cloud Platform and hosted/configured a Minecraft server on an Ubuntu virtual machine using Oracle Cloud, SSH, and hands-on server configuration.",
    technologies: ["Google Cloud", "Oracle Cloud", "Ubuntu Linux", "SSH"],
    icon: "☁️",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Galaxy 3D Website",
    description:
      "An interactive 3D web experience powered by Spline and React — an immersive, design-forward landing site for modern creators.",
    technologies: ["React.js", "Spline"],
    image: dImage,
    github: "https://github.com/keanulaw/my-3d-website",
    live: "https://my-3d-website-krqk.vercel.app/",
  },
  {
    title: "Phone Rental App",
    description:
      "A mobile application for phone rentals — list devices, browse available phones, make secure bookings, and manage rentals with verified profiles and in-app messaging.",
    technologies: ["React.js", "Mobile"],
    icon: "📱",
    gradient: "from-fuchsia-500 to-rose-500",
    github: "https://github.com/keanulaw/phone-rental",
  },
];

function ProjectMedia({ project }) {
  if (project.image) {
    return (
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
      </div>
    );
  }
  return (
    <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}>
      <span className="text-6xl drop-shadow-lg">{project.icon}</span>
      <div className="absolute inset-0 bg-zinc-950/10" />
    </div>
  );
}

function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          A mix of real-world AI automation work and projects I&apos;ve built across mobile, web,
          and cloud.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-400/40 ${
              project.featured ? "md:col-span-2 lg:col-span-1 ring-1 ring-indigo-400/40" : ""
            }`}
          >
            <ProjectMedia project={project} />

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                {project.featured && (
                  <span className="rounded-full bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 px-2.5 py-0.5 text-xs font-semibold text-indigo-200 ring-1 ring-inset ring-indigo-400/30">
                    Featured
                  </span>
                )}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.github || project.live) && (
                <div className="mt-5 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-lg border border-white/15 bg-white/5 py-2 text-center text-sm font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/10"
                    >
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 py-2 text-center text-sm font-semibold text-white transition-all hover:scale-[1.03]"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
