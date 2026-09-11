import { ExternalLink } from "../components/ui";
export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell">
        <div className="contact-top">
          <span className="eyebrow">04 / Contact</span>
          <span className="availability">
            <i /> Open to opportunities
          </span>
        </div>
        <div className="contact-main">
          <div>
            <h2>
              Have something
              <br />
              in mind<span>?</span>
            </h2>
            <p>
              I'm open to opportunities and collaboration.
              <br />
              Feel free to reach out.
            </p>
          </div>
          <div className="contact-links">
            <span className="eyebrow">Send me an email</span>
            <a className="email-link" href="mailto:shannonkeanu1@gmail.com">
              shannonkeanu1@gmail.com <span aria-hidden="true">↗</span>
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
