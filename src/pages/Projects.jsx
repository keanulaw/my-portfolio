import { useEffect, useRef, useState } from "react";
import { projects, tracks } from "../data/projects";
import { SectionHeading, ExternalLink } from "../components/ui";
import ProjectVisual from "../components/ProjectVisual";
import FeaturedWork from "../components/FeaturedWork";
import "./projects.css";

export default function Projects() {
  const [selectedId, setSelectedId] = useState("ai");
  const dialogRef = useRef(null);
  const returnFocusRef = useRef(null);
  const project = projects.find((p) => p.id === selectedId);

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

  return (
    <section id="projects" className="shell section">
      <SectionHeading
        title="Selected work"
        note={`${projects.length} projects across four tracks. Pick a clip to open it.`}
      />

      <div className="tracks">
        {tracks.map((track) => (
          <div className="track" key={track} role="group" aria-label={`${track} projects`}>
            <h3 className="track-name">{track}</h3>
            <div className="track-clips">
              {projects
                .filter((p) => p.track === track)
                .map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`track-clip ${p.id === "ai" ? "is-ai" : ""}`}
                    aria-pressed={p.id === selectedId}
                    onClick={() => setSelectedId(p.id)}
                  >
                    <span className="clip-title">{p.title}</span>
                    <span className="clip-kind">{p.category}</span>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      <article className="viewer" aria-live="polite" aria-labelledby="viewer-title">
        <div className="viewer-screen">
          <ProjectVisual project={project} />
        </div>
        <div className="viewer-copy">
          <p className="viewer-kind">{project.category}</p>
          <h3 id="viewer-title">{project.title}</h3>
          <p className="viewer-description">{project.description}</p>
          <dl className="viewer-meta">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{project.stack}</dd>
            </div>
          </dl>
          <div className="viewer-links">
            {project.detail && (
              <button className="button" type="button" onClick={openCaseStudy}>
                Read the case study
              </button>
            )}
            {project.live && (
              <ExternalLink href={project.live}>
                {project.id === "video" ? "View portfolio" : "View project"}
              </ExternalLink>
            )}
            {project.github && <ExternalLink href={project.github}>GitHub</ExternalLink>}
          </div>
        </div>
      </article>

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
          <span>AI edit pipeline: case study</span>
          <button autoFocus onClick={closeCaseStudy}>
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <FeaturedWork />
      </dialog>
    </section>
  );
}
