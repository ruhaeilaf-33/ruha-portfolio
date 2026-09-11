import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact reveal" id="contact">

      <div className="contact-content">

        <p className="section-subtitle">
          CONTACT
        </p>

        <h2 className="section-title">
          Let's Build Something <span>Together.</span>
        </h2>

        <p className="section-description">
          I'm always open to discussing software engineering,
          AI, full stack development, internships, and exciting
          collaboration opportunities.
        </p>

        <div className="contact-links">

          {/* Email */}

          <a
            href="mailto:ruhaeilaf@gmail.com"
            className="contact-item"
          >
            <div className="contact-left">
              <FaEnvelope />
              <span>ruhaeilaf@gmail.com</span>
            </div>

            <FaArrowRight />
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/ruhaeilaf-33"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-left">
              <FaGithub />
              <span>GitHub</span>
            </div>

            <FaArrowRight />
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/ruha-eilaf-495166307/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-left">
              <FaLinkedin />
              <span>LinkedIn</span>
            </div>

            <FaArrowRight />
          </a>

          {/* Resume */}

          <a
            href="/resume/ruha_resume (2).pdf"
            download
            className="contact-item"
          >
            <div className="contact-left">
              <FaFileAlt />
              <span>Download Resume</span>
            </div>

            <FaArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;
