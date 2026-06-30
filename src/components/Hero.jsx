// src/components/Hero.jsx
import React from "react";
import meImage from "../assets/me.webp";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="space-y-7 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-zinc-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Shannon Keanu A. Yase
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-zinc-300">
                AI Tools Developer <span className="text-zinc-600">|</span> AI Video Automation{" "}
                <span className="text-zinc-600">|</span> Web Developer
              </p>
            </div>

            <p className="mx-auto lg:mx-0 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-400">
              I build practical AI automation workflows, web applications, and creative media
              systems — with recent hands-on experience improving AI-powered video editing
              pipelines for client-ready content.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.03] hover:shadow-indigo-500/40"
              >
                View Projects
              </a>
              <a
                href="https://github.com/keanulaw"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-zinc-100 backdrop-blur transition-all duration-200 hover:border-white/30 hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href="mailto:shannonkeanu1@gmail.com"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-zinc-100 backdrop-blur transition-all duration-200 hover:border-white/30 hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right — portrait */}
          <div className="relative mx-auto">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 blur-2xl opacity-40" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-[3px]">
                <div className="h-full w-full overflow-hidden rounded-full bg-zinc-900">
                  <img
                    src={meImage}
                    alt="Shannon Keanu A. Yase"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
