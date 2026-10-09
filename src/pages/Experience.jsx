import { SectionHeading } from "../components/ui";
export default function Experience() {
  return (
    <section className="shell section" id="experience">
      <SectionHeading title="Experience" />
      <div className="experience-row">
        <div className="experience-when">
          <span className="meta">Most recent work</span>
          <p>AI automation & creative media</p>
        </div>
        <div>
          <h3>AI tools development</h3>
          <p className="experience-context">
            AI-powered video editing workflows
          </p>
          <p>
            Helped build and improve the editing workflow end to end: speech
            processing, subtitles, overlays, clipping, ad formatting, and cloud
            deployment.
          </p>
          <p>
            Worked on a repeatable pipeline that reduces manual editing and
            moves raw client uploads toward finished, client-ready content.
          </p>
          <a className="text-link" href="#featured">
            Read the case study
          </a>
        </div>
      </div>
    </section>
  );
}
