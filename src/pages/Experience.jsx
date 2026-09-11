import { SectionHeading } from "../components/ui";
export default function Experience() {
  return (
    <section className="shell section" id="experience">
      <SectionHeading number="02" title="Experience" />
      <div className="experience-row reveal">
        <div className="experience-when">
          <span className="eyebrow">Most recent work</span>
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
            Explore the project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
