import neoCareImage from "../assets/NeoCare.png";
import galaxyImage from "../assets/3d.png";
import FeaturedWork from "../components/FeaturedWork";
import { SectionHeading, ExternalLink } from "../components/ui";
const projects = [
  {
    title: "NeoCare",
    subtitle: "Pregnancy support app",
    role: "Mobile & web development",
    description:
      "A React Native app for pregnancy support, tracking, and guidance. A chatbot provides doctor recommendations, with a companion React website.",
    stack: "React Native / React.js / Chatbot",
    image: neoCareImage,
    alt: "NeoCare logo — Tender Care for Two",
    mediaClass: "neocare",
    github: "https://github.com/keanulaw/NeoCare-App.git",
  },
  {
    title: "Galaxy 3D",
    subtitle: "Interactive web experience",
    role: "Web development",
    description:
      "An interactive 3D landing site for modern creators, bringing a Spline scene into a responsive React experience.",
    stack: "React.js / Spline",
    image: galaxyImage,
    alt: "Galaxy 3D website preview showing a luminous spiral galaxy",
    mediaClass: "galaxy",
    github: "https://github.com/keanulaw/my-3d-website",
    live: "https://my-3d-website-krqk.vercel.app/",
  },
];
const more = [
  {
    title: "Phone Rental App",
    role: "Mobile application",
    description:
      "List devices, browse available phones, and manage secure bookings and rentals with verified profiles and in-app messaging.",
    stack: "React.js / Mobile",
    github: "https://github.com/keanulaw/phone-rental",
  },
  {
    title: "Cloud & Infrastructure Projects",
    role: "Deployment & server configuration",
    description:
      "Deployed websites on Google Cloud and configured a Minecraft server on an Ubuntu virtual machine with Oracle Cloud and SSH.",
    stack: "Google Cloud / Oracle Cloud / Ubuntu Linux / SSH",
  },
  {
    title: "Personal Development Portfolio",
    role: "Design & web development",
    description:
      "Designed and deployed this responsive portfolio to bring together my projects and development work.",
    stack: "React / Vite / Tailwind CSS",
    github: "https://github.com/keanulaw/my-portfolio",
  },
];
export default function Projects() {
  return (
    <section className="shell section work-section" id="projects">
      <SectionHeading
        number="01"
        title="Selected work"
        note="AI automation, mobile, web & cloud."
      />
      <FeaturedWork />
      <div className="visual-projects">
        {projects.map((project, i) => (
          <article className="visual-project reveal" key={project.title}>
            <a
              className={`project-image ${project.mediaClass}`}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} ${project.live ? "live website" : "source code"}`}
            >
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                decoding="async"
                width={project.mediaClass === "galaxy" ? 1919 : 1562}
                height={project.mediaClass === "galaxy" ? 1079 : 1562}
              />
              <span className="image-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <div className="project-title">
              <h3>{project.title}</h3>
              <span className="eyebrow">0{i + 2}</span>
            </div>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-meta">
              <p>
                <span>Role</span>
                {project.role}
              </p>
              <p>
                <span>Stack</span>
                {project.stack}
              </p>
            </div>
            <div className="project-links">
              <ExternalLink href={project.github}>Source code</ExternalLink>
              {project.live && (
                <ExternalLink href={project.live}>Live project</ExternalLink>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="more-work">
        <h3 className="eyebrow">More projects</h3>
        {more.map((project, i) => (
          <article className="project-row reveal" key={project.title}>
            <span className="row-number">0{i + 4}</span>
            <div>
              <h4>{project.title}</h4>
              <p className="row-role">{project.role}</p>
            </div>
            <div>
              <p>{project.description}</p>
              <p className="row-stack">{project.stack}</p>
              {project.github && (
                <ExternalLink href={project.github}>Source code</ExternalLink>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
