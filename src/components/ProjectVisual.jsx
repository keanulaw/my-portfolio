export default function ProjectVisual({ project }) {
  if (project.image)
    return (
      <img
        className="viewer-image"
        src={project.image}
        alt={project.alt}
        width={project.id === "galaxy" ? 1919 : 1562}
        height={project.id === "galaxy" ? 1079 : 1562}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
    );
  const { label, steps, numbered, caption } = project.visual;
  return (
    <div className="slate">
      <p className="slate-label">{label}</p>
      <ol className={numbered ? "slate-steps is-numbered" : "slate-steps"}>
        {steps.map(([title, detail]) => (
          <li key={title}>
            <strong>{title}</strong>
            <span>{detail}</span>
          </li>
        ))}
      </ol>
      <p className="slate-caption">{caption}</p>
    </div>
  );
}
