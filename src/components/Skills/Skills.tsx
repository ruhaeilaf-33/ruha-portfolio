import "./Skills.css";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaCloud,
  FaTools,
} from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">

      <p className="section-tag">
        SKILLS
      </p>

      <h2>
        Technologies I
        <span> Work With.</span>
      </h2>

      <div className="skills-grid">

        <div className="skill-card">
          <div className="skill-icon">
            <FaCode />
          </div>

          <h3>Languages</h3>

          <p>Java • Python • SQL • JavaScript • C</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaServer />
          </div>

          <h3>Frontend</h3>

          <p>React • HTML • CSS • Responsive UI</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaDatabase />
          </div>

          <h3>Backend</h3>

          <p>Django • REST APIs • Node.js</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaBrain />
          </div>

          <h3>AI & Analytics</h3>

          <p>Pandas • NumPy • Scikit-Learn • Tableau</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaCloud />
          </div>

          <h3>Cloud</h3>

          <p>AWS • Google Cloud</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaTools />
          </div>

          <h3>Tools</h3>

          <p>Git • GitHub • VS Code • IntelliJ IDEA </p>
        </div>

      </div>

    </section>
  );
}

export default Skills;