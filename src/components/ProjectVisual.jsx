export default function ProjectVisual({ project }) {
  if (project.image)
    return (
      <img
        className="showcase-image"
        src={project.image}
        alt={project.alt}
        width={project.id === "galaxy" ? 1919 : 1562}
        height={project.id === "galaxy" ? 1079 : 1562}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
    );
  if (project.id === "ai")
    return (
      <div className="showcase-diagram pipeline-visual">
        <span className="eyebrow">Editing workflow</span>
        <div className="pipeline-steps">
          {[
            ["01", "Transcribe", "Speech → text"],
            ["02", "Refine", "Captions, cuts & b-roll"],
            ["03", "Deliver", "Clips & formatted ads"],
          ].map(([n, title, detail]) => (
            <div key={n}>
              <span>{n}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </div>
          ))}
        </div>
        <span className="diagram-caption">
          Raw uploads → client-ready video
        </span>
      </div>
    );
  if (project.id === "rental")
    return (
      <div className="showcase-diagram rental-visual">
        <span className="eyebrow">Rental flow</span>
        <div className="rental-flow">
          {["List", "Browse", "Book"].map((text, i) => (
            <div className="rental-device" key={text}>
              <span className="device-speaker" />
              <span className="device-number">0{i + 1}</span>
              <strong>{text}</strong>
              <span className="device-line" />
            </div>
          ))}
        </div>
        <span className="diagram-caption">
          Verified profiles / bookings / in-app messaging
        </span>
      </div>
    );
  if (project.id === "cloud")
    return (
      <div className="showcase-diagram cloud-visual">
        <span className="eyebrow">Deployment overview</span>
        <div className="cloud-path">
          <span>Websites</span>
          <b aria-hidden="true">↗</b>
          <strong>Google Cloud</strong>
        </div>
        <div className="cloud-path">
          <span>Minecraft server</span>
          <b aria-hidden="true">↗</b>
          <strong>Oracle Cloud</strong>
        </div>
        <span className="diagram-caption">
          Ubuntu virtual machine / SSH / server configuration
        </span>
      </div>
    );
  return (
    <div className="showcase-diagram portfolio-visual">
      <span className="eyebrow">Developer portfolio</span>
      <strong>
        Shannon Keanu
        <br />
        A. Yase<span>.</span>
      </strong>
      <p>
        AI tools developer.
        <br />
        Web developer.
      </p>
      <span className="diagram-caption">React / Vite / Tailwind CSS</span>
    </div>
  );
}
