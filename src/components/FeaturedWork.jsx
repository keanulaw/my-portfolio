// src/components/FeaturedWork.jsx
import React from "react";

const features = [
  { title: "Transcription", desc: "Accurate speech-to-text from raw client footage." },
  { title: "Subtitle Generation", desc: "Auto-generated, styled captions for every clip." },
  { title: "Hook & Title Overlays", desc: "Attention-grabbing intros and on-screen titles." },
  { title: "Dead-Air Removal", desc: "Trimming silences for tighter, punchier pacing." },
  { title: "Bad-Take Removal", desc: "Detecting and cutting flubbed or repeated takes." },
  { title: "B-Roll Selection", desc: "Matching supporting footage to the narrative." },
  { title: "Ad Formatting", desc: "Reframing and packaging cuts for ad placements." },
  { title: "Long-Form Clipping", desc: "Slicing long videos into short, shareable clips." },
  { title: "Cloud Deployment & Automation", desc: "Running the pipeline on cloud infrastructure end to end." },
];

const tools = [
  "Claude Code",
  "Deepgram",
  "Gemini",
  "Supabase",
  "Vercel",
  "Railway",
  "React / Next.js",
  "HyperFrame",
];

function FeaturedWork() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      {/* Gradient-bordered case-study card */}
      <div className="relative rounded-3xl bg-gradient-to-r from-indigo-500/60 via-fuchsia-500/60 to-sky-500/60 p-[1.5px] shadow-2xl shadow-indigo-900/30">
        <div className="rounded-3xl bg-zinc-950/95 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 px-4 py-1.5 text-sm font-semibold text-indigo-200 ring-1 ring-inset ring-indigo-400/30">
              ⭐ Featured Work · Most Recent
            </span>
            <span className="text-sm font-medium text-zinc-500">
              AI Automation &amp; Creative Media Workflows
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Featured Work:{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI Automation &amp; AI Edit Pipeline
            </span>
          </h2>

          {/* Case study narrative */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4 text-zinc-300 leading-relaxed">
              <p>
                <span className="font-semibold text-white">The problem.</span> Video teams receive
                hours of raw client uploads that need to become polished, client-ready deliverables —
                a slow, repetitive process when done by hand.
              </p>
              <p>
                <span className="font-semibold text-white">What I worked on.</span> I helped build and
                improve an AI-powered video editing automation pipeline that takes those raw uploads
                and moves them through transcription, editing, and packaging toward finished cuts. My
                hands-on contributions spanned the editing workflow end to end — from speech
                processing and captions to clipping, ad formatting, and cloud-based deployment.
              </p>
              <p>
                <span className="font-semibold text-white">The impact.</span> The result is a more
                automated, repeatable workflow that reduces manual editing effort and helps turn
                raw footage into client-ready content faster. This is my most recent and
                strongest hands-on work — real-world AI automation, not a school project.
              </p>
            </div>

            {/* Tools panel */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Tools &amp; Tech
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features built */}
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Features I worked on
          </h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
                  <div>
                    <h4 className="font-semibold text-white">{f.title}</h4>
                    <p className="mt-1 text-sm text-zinc-400">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedWork;
