import React from "react";

function Education() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-200 hover:border-indigo-400/40">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-2xl">
            🎓
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Bachelor of Science in Information Technology (BSIT)
            </h3>
            <p className="mt-1 text-lg font-semibold text-indigo-300">
              University of Cebu – Banilad
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Studied programming, web and mobile development, databases, and core IT
              fundamentals — building the technical foundation behind my work in AI automation,
              web development, and cloud deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
