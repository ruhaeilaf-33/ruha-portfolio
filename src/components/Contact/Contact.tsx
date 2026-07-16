import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-content">

        <p className="section-subtitle">
          CONTACT
        </p>

        <h2 className="section-title">
          Let's Build Something <span>Together.</span>
        </h2>

        <p className="section-description">
          I'm always open to discussing software engineering,
          AI, full stack development, internships and exciting
          collaboration opportunities.
        </p>

        <div className="contact-links">

          <a
            href="mailto:ruhaeilaf@gmail.com"
            className="contact-item"
          >
            <FaEnvelope />

            <span>ruhaeilaf@gmail.com</span>

            <FaArrowRight />
          </a>

          <a
            href="https://github.com/ruhaeilaf-33"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaGithub />

            <span>GitHub</span>

            <FaArrowRight />
          </a>

          <a
            href="https://www.linkedin.com/in/ruha-eilaf-495166307/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <FaLinkedin />

            <span>LinkedIn</span>

            <FaArrowRight />
          </a>

          <a
            href="/resume/Ruha_Eilaf_Resume.pdf"
            download
            className="contact-item"
          >
            📄

            <span>Download Resume</span>

            <FaArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;