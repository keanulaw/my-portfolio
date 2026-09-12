import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { SectionHeading, ExternalLink } from "../components/ui";
import ProjectVisual from "../components/ProjectVisual";
import FeaturedWork from "../components/FeaturedWork";
import useProjectShowcase from "../hooks/useProjectShowcase";
import "./projects.css";

const number = (value) => String(value).padStart(2, "0");

export default function Projects() {
  const [viewMode, setViewMode] = useState("auto");
  const dialogRef = useRef(null);
  const returnFocusRef = useRef(null);
  const {
    railRef,
    stageRef,
    progressRef,
    capable,
    reduced,
    enabled,
    active,
    goTo,
  } = useProjectShowcase(projects.length, viewMode);

  useEffect(() => {
    setViewMode("auto");
  }, [reduced]);

  function openCaseStudy(event) {
    event?.preventDefault();
    returnFocusRef.current = document.activeElement;
    if (!dialogRef.current.open) dialogRef.current.showModal();
  }
  function closeCaseStudy() {
    dialogRef.current.close();
  }
  useEffect(() => {
    const onLink = (event) => {
      if (event.target.closest('a[href="#featured"]')) openCaseStudy(event);
    };
    const onHash = () => {
      if (window.location.hash === "#featured") openCaseStudy();
    };
    document.addEventListener("click", onLink);
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => {
      document.removeEventListener("click", onLink);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  function switchMode() {
    setViewMode(enabled ? "list" : "gallery");
    // Keep the gallery heading in view when collapsing the long scroll rail.
    requestAnimationFrame(() =>
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "instant" }),
    );
  }

  return (
    <section
      id="projects"
      className={`shell section work-section project-showcase ${enabled ? "is-pinned" : "is-flowing"}`}
    >
      <SectionHeading
        number="01"
        title="Selected work"
        note="Six projects. A few different ways of building."
      />
      <div ref={railRef} className="showcase-rail">
        <div ref={stageRef} className="showcase-stage">
          <div className="showcase-toolbar">
            <p className="showcase-counter">
              <span>{enabled ? number(active + 1) : "01"}</span>
              <span className="counter-divider">/</span>
              {number(projects.length)}
              <span className="counter-label">
                {enabled ? "Scroll to explore" : "Projects"}
              </span>
            </p>
            <div className="showcase-options">
              {capable && (
                <button onClick={switchMode}>
                  {enabled
                    ? "View as list"
                    : reduced
                      ? "Enable scroll effects"
                      : "Scroll gallery"}
                </button>
              )}
              <a href="#experience">
                Skip to experience <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
          <div className="showcase-panels">
            {projects.map((project, index) => (
              <article
                id={`project-${project.id}`}
                className={`showcase-panel chapter-${project.id}`}
                key={project.id}
                aria-labelledby={`title-${project.id}`}
              >
                <div className="showcase-artwork">
                  <div className={`showcase-media media-${project.id}`}>
                    <ProjectVisual project={project} />
                  </div>
                  <span className="showcase-art-caption">
                    {project.id === "galaxy"
                      ? "Spline scene preview"
                      : project.id === "neocare"
                        ? "NeoCare identity"
                        : project.id === "portfolio"
                          ? "Interface excerpt"
                          : "Project workflow"}
                  </span>
                </div>
                <div className="showcase-copy">
                  <p className="chapter-category">
                    <span>
                      {number(index + 1)} / {number(projects.length)}
                    </span>
                    {project.category}
                  </p>
                  <h3 id={`title-${project.id}`} tabIndex={-1}>
                    {project.title}
                  </h3>
                  <p className="chapter-description">{project.description}</p>
                  <dl className="chapter-meta">
                    <div>
                      <dt>Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt>Stack</dt>
                      <dd>{project.stack}</dd>
                    </div>
                  </dl>
                  <div className="chapter-links">
                    {project.live && (
                      <ExternalLink href={project.live}>
                        View project
                      </ExternalLink>
                    )}
                    {project.github && (
                      <ExternalLink href={project.github}>GitHub</ExternalLink>
                    )}
                    {project.detail && (
                      <button className="text-link" onClick={openCaseStudy}>
                        Read case study <span aria-hidden="true">↗</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          {enabled && (
            <div className="showcase-bottom">
              <nav className="chapter-navigation" aria-label="Choose a project">
                {projects.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => goTo(i)}
                    aria-label={`Project ${i + 1}: ${p.title}`}
                    aria-current={active === i ? "step" : undefined}
                  >
                    {number(i + 1)}
                  </button>
                ))}
              </nav>
              <div className="chapter-progress" aria-hidden="true">
                <span ref={progressRef} />
              </div>
              <span className="showcase-hint">
                {active === projects.length - 1
                  ? "Keep scrolling for experience ↓"
                  : "Next project ↓"}
              </span>
            </div>
          )}
        </div>
      </div>
      <dialog
        className="project-dialog"
        ref={dialogRef}
        aria-label="AI edit pipeline case study"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeCaseStudy();
        }}
        onClose={() => returnFocusRef.current?.focus({ preventScroll: true })}
      >
        <div className="dialog-top">
          <span>AI edit pipeline / Case study</span>
          <button autoFocus onClick={closeCaseStudy}>
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <FeaturedWork />
      </dialog>
    </section>
  );
}
