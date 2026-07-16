import "./About.css";
import {
  FaGraduationCap,
  FaCode,
  FaBrain,
  FaAward,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <p className="section-tag">
          ABOUT ME
        </p>

        <h2>
          Passionate About Building
          <span> Intelligent Software.</span>
        </h2>

        <p className="about-description">
          I'm a Computer Science Engineering student with a
          passion for creating impactful software solutions through
          Artificial Intelligence, Full Stack Development and Data
          Analytics.

          <br /><br />

          I enjoy transforming ideas into real-world applications,
          continuously learning new technologies, and solving meaningful
          problems through clean, scalable software.
        </p>

      </div>

      <div className="about-right">

        <div className="about-card">

          <FaGraduationCap className="about-icon"/>

          <h3>Education</h3>

          <p>
            B.E. Computer Science Engineering
          </p>

          <span>
            SJB Institute of Technology
          </span>

        </div>

        <div className="about-card">

          <FaCode className="about-icon"/>

          <h3>Projects</h3>

          <p>
            5+ Real World Projects
          </p>

        </div>

        <div className="about-card">

          <FaBrain className="about-icon"/>

          <h3>Focus</h3>

          <p>
            AI • Full Stack • Analytics
          </p>

        </div>

        <div className="about-card">

          <FaAward className="about-icon"/>

          <h3>Learning</h3>

          <p>
            5+ Professional Certifications
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;