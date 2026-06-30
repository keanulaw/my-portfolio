import React from "react";

const certifications = [
  {
    name: "Safe Spaces Act",
    icon: "🛡️",
    description:
      "Understanding and applying the Safe Spaces Act to help create inclusive, respectful environments.",
  },
  {
    name: "Cybersecurity",
    icon: "🔒",
    description:
      "Fundamentals of cybersecurity, security best practices, and threat-prevention awareness.",
  },
  {
    name: "Career in the IT Industry",
    icon: "💼",
    description:
      "Career development, industry trends, and professional growth in Information Technology.",
  },
];

function Certifications() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.06]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-2xl">
              {cert.icon}
            </div>
            <h3 className="text-lg font-bold text-white">{cert.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
