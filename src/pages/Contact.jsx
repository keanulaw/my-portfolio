import { ExternalLink } from "../components/ui";
export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell">
        <div className="contact-top">
          <span className="meta">Contact</span>
          <span className="availability">
            <i /> Open to opportunities
          </span>
        </div>
        <div className="contact-main">
          <div>
            <h2>
              Have something
              <br />
              in mind?
            </h2>
            <p>
              I'm open to opportunities and collaboration.
              <br />
              Feel free to reach out.
            </p>
          </div>
          <div className="contact-links">
            <span className="meta">Send me an email</span>
            <a className="email-link" href="mailto:shannonkeanu1@gmail.com">
              shannonkeanu1@gmail.com
            </a>
            <ExternalLink href="https://github.com/keanulaw">
              github.com/keanulaw
            </ExternalLink>
            <p>Cebu, Philippines</p>
          </div>
        </div>
      </div>
    </section>
  );
}
