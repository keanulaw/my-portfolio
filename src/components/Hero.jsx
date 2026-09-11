export default function Hero() {
  return (
    <div className="shell hero">
      <div className="hero-top">
        <span className="eyebrow">Developer portfolio</span>
        <span className="location">Cebu, Philippines</span>
      </div>
      <h1>
        Shannon Keanu
        <br />
        A. Yase<span className="accent">.</span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-role">
          AI tools developer.
          <br />
          Web developer.
        </p>
        <div className="hero-description">
          <p>
            I build practical AI workflows, web applications, and video
            automation systems that turn raw footage into client-ready content.
          </p>
          <div className="actions">
            <a className="button" href="#projects">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#contact">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <span className="availability">
          <i /> Available for opportunities
        </span>
        <span className="eyebrow">AI automation / Web / Creative media</span>
      </div>
    </div>
  );
}
