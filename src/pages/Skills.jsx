const skills = [
  [
    "Web & mobile",
    "JavaScript, React.js, Next.js, React Native, Kotlin, Responsive Design",
  ],
  ["AI & automation", "Claude Code, Deepgram, Gemini, HyperFrame"],
  [
    "Databases & infrastructure",
    "Supabase, Google Cloud Platform, Oracle Cloud, Ubuntu Linux, SSH, Vercel, Railway",
  ],
  ["Tools", "GitHub, VS Code, Android Studio, DaVinci Resolve"],
  [
    "Working with others",
    "Teamwork, Communication, Active Listening, Adaptability",
  ],
];
export default function Skills() {
  return (
    <section className="shell supporting-section" id="skills">
      <div className="support-grid">
        <h2>Tools & skills</h2>
        <dl className="skills-list">
          {skills.map(([name, list]) => (
            <div key={name}>
              <dt>{name}</dt>
              <dd>{list}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
