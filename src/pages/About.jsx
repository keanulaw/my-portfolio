// src/pages/About.jsx
import React from "react";

const highlights = [
  {
    title: "AI Automation",
    desc: "Building practical AI-driven workflows that automate repetitive, manual tasks end to end.",
    icon: "🤖",
  },
  {
    title: "Web Development",
    desc: "Responsive web apps and sites with React / Next.js and modern tooling.",
    icon: "💻",
  },
  {
    title: "Cloud Deployment",
    desc: "Shipping and hosting projects on Google Cloud, Oracle Cloud, Vercel, and Railway.",
    icon: "☁️",
  },
  {
    title: "Creative Media",
    desc: "AI-assisted video editing pipelines that turn raw footage into client-ready content.",
    icon: "🎬",
  },
];

const stack = [
  "Claude Code",
  "React / Next.js",
  "Supabase",
  "Vercel",
  "Railway",
  "Deepgram",
  "HyperFrame",
  "Gemini",
];

function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          About{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Summary */}
        <div className="lg:col-span-2 space-y-5 text-base sm:text-lg leading-relaxed text-zinc-400">
          <p>
            I&apos;m an{" "}
            <span className="font-semibold text-zinc-200">AI Tools Developer and IT graduate</span>{" "}
            who enjoys turning real-world problems into practical, automated solutions. My work
            sits at the intersection of AI automation, web development, cloud deployment, and
            creative media workflows.
          </p>
          <p>
            Most recently, I&apos;ve had hands-on experience helping build and improve an{" "}
            <span className="font-semibold text-zinc-200">
              AI-powered video editing automation pipeline
            </span>{" "}
            — from transcription and subtitles to clipping, ad formatting, and cloud-based
            deployment. Alongside that, I&apos;ve developed mobile and web applications and
            deployed and configured projects across cloud platforms.
          </p>
          <p>
            I&apos;m a team-oriented, communication-driven developer who values active listening,
            adaptability, and delivering meaningful results — and I&apos;m always learning the next
            tool that makes the work better.
          </p>

          <div className="pt-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Tools I work with
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.06]"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <h4 className="font-semibold text-white">{h.title}</h4>
                  <p className="mt-1 text-sm text-zinc-400">{h.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
