import React from "react";

const skillCategories = [
  {
    name: "Languages & Frameworks",
    icon: "⚛️",
    skills: ["React Native", "React.js", "Kotlin", "JavaScript"],
  },
  {
    name: "Mobile & Web",
    icon: "📱",
    skills: ["Android Studio", "Responsive Design"],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "☁️",
    skills: ["Google Cloud Platform", "Oracle Cloud", "Ubuntu Linux", "SSH"],
  },
  {
    name: "Tools",
    icon: "🛠️",
    skills: [
      "GitHub",
      "VS Code",
      "DaVinci Resolve",
      "Claude Code",
      "Deepgram",
      "Gemini",
      "Supabase",
      "Vercel",
      "Railway",
    ],
  },
  {
    name: "Soft Skills",
    icon: "🤝",
    skills: ["Teamwork", "Communication", "Adaptability"],
  },
];

function Skills() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Skills &amp;{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          The languages, platforms, and tools I use to build and ship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:border-indigo-400/40 hover:bg-white/[0.06]"
          >
            <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-base">
                {category.icon}
              </span>
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
