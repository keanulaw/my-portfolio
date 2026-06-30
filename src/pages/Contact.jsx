import React from "react";

const contacts = [
  {
    label: "Email",
    value: "shannonkeanu1@gmail.com",
    href: "mailto:shannonkeanu1@gmail.com",
    icon: "📧",
  },
  {
    label: "GitHub",
    value: "github.com/keanulaw",
    href: "https://github.com/keanulaw",
    icon: "💻",
  },
  {
    label: "Location",
    value: "Cebu, Philippines",
    href: null,
    icon: "📍",
  },
];

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Get In{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">
          Open to opportunities and collaboration. Feel free to reach out — I usually respond
          quickly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contacts.map((c) => {
          const inner = (
            <>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-2xl">
                {c.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {c.label}
              </p>
              <p className="mt-1 break-words font-medium text-zinc-100">{c.value}</p>
            </>
          );
          const cls =
            "block rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all duration-200";
          return c.href ? (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`${cls} hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.06]`}
            >
              {inner}
            </a>
          ) : (
            <div key={c.label} className={cls}>
              {inner}
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <a
          href="mailto:shannonkeanu1@gmail.com"
          className="inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-8 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.03] hover:shadow-indigo-500/40"
        >
          Send me an email
        </a>
      </div>
    </div>
  );
}

export default Contact;
