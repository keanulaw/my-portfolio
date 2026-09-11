const features = [
  ["Transcription", "Accurate speech-to-text from raw client footage."],
  [
    "Subtitle generation",
    "Automatically generated, styled captions for every clip.",
  ],
  [
    "Hook & title overlays",
    "Intros and on-screen titles that help frame the content.",
  ],
  ["Dead-air removal", "Trimming silences for tighter pacing."],
  ["Bad-take removal", "Detecting and cutting flubbed or repeated takes."],
  ["B-roll selection", "Matching supporting footage to the narrative."],
  ["Ad formatting", "Reframing and packaging cuts for ad placements."],
  ["Long-form clipping", "Slicing long videos into short, shareable clips."],
  [
    "Cloud deployment & automation",
    "Running the pipeline on cloud infrastructure end to end.",
  ],
];
export default function FeaturedWork() {
  return (
    <article className="featured-project reveal" id="featured">
      <div className="feature-intro">
        <span className="eyebrow">01 / Featured work</span>
        <span className="feature-recency">Most recent · AI automation</span>
      </div>
      <div className="feature-body">
        <div>
          <h3>
            AI automation &<br />
            AI edit pipeline<span>.</span>
          </h3>
          <p className="feature-lead">
            From raw uploads to
            <br />
            client-ready video.
          </p>
          <p className="feature-copy">
            I helped build and improve an AI-powered editing pipeline,
            automating the repetitive work between receiving client footage and
            delivering finished cuts.
          </p>
          <p className="feature-role">
            <span>My contribution</span>AI video workflows & cloud deployment
          </p>
        </div>
        <figure className="workflow">
          <figcaption className="eyebrow">The editing workflow</figcaption>
          <ol>
            <li>
              <span>01</span>
              <div>
                <strong>Transcribe</strong>
                <p>Raw footage → speech to text</p>
              </div>
              <b aria-hidden="true">↓</b>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Refine</strong>
                <p>Captions, cuts, overlays & b-roll</p>
              </div>
              <b aria-hidden="true">↓</b>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Deliver</strong>
                <p>Short clips & formatted ads</p>
              </div>
              <b aria-hidden="true">↗</b>
            </li>
          </ol>
          <p className="workflow-footer">
            Cloud deployment & end-to-end automation
          </p>
        </figure>
      </div>
      <div className="feature-stack">
        Claude Code / Deepgram / Gemini / Supabase / Vercel / Railway / React /
        Next.js / HyperFrame
      </div>
      <details className="case-details">
        <summary>
          Inside the project{" "}
          <span className="detail-indicator" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="case-narrative">
          <div>
            <h4>The challenge</h4>
            <p>
              Video teams receive hours of raw uploads. Turning them into
              polished deliverables by hand is slow and repetitive.
            </p>
          </div>
          <div>
            <h4>The result</h4>
            <p>
              A more automated, repeatable workflow that reduces manual editing
              effort and helps turn raw footage into client-ready content
              faster.
            </p>
          </div>
        </div>
        <h4 className="contributions-title">Features I worked on</h4>
        <div className="contributions">
          {features.map(([title, desc]) => (
            <div key={title}>
              <h5>{title}</h5>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </details>
    </article>
  );
}
