import portrait from "../assets/me.webp";
import { SectionHeading } from "../components/ui";
export default function About() {
  return (
    <section className="shell section" id="about">
      <SectionHeading number="03" title="A little about me" />
      <div className="about-grid reveal">
        <figure className="portrait">
          <img
            src={portrait}
            alt="Shannon's illustrated profile portrait"
            width="1024"
            height="1536"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Shannon Keanu A. Yase <span>Cebu, Philippines</span>
          </figcaption>
        </figure>
        <div className="about-copy">
          <h3>
            I like making
            <br />
            the repetitive parts easier.
          </h3>
          <p>
            I'm an AI tools developer and IT graduate. I enjoy turning everyday
            problems into practical software, whether that's automating a video
            workflow, building a mobile app, or getting a project running in the
            cloud.
          </p>
          <p>
            Recently, my focus has been AI-powered video editing. Alongside that
            work, I've built web and mobile applications and deployed projects
            on Google Cloud, Oracle Cloud, Vercel, and Railway.
          </p>
          <p>
            I value clear communication, active listening, and working well with
            a team. I'm always learning tools that make the work better, and I'm
            open to opportunities in AI automation, web development, and
            creative media.
          </p>
          <a className="text-link" href="#contact">
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
