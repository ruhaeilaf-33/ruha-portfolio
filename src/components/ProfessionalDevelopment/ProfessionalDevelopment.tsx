import "./ProfessionalDevelopment.css";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaHandshake,
  FaCode
} from "react-icons/fa";

function ProfessionalDevelopment() {
  return (
    <section
      className="professional-development"
      id="professional-development"
    >

      <div className="development-header">

        <p className="section-subtitle">
          PROFESSIONAL DEVELOPMENT
        </p>

        <h2 className="section-title">
          Professional <span>Growth.</span>
        </h2>

        <p className="section-description">
          Experiences that strengthened my technical expertise,
          teamwork, communication, and problem-solving skills
          through hackathons, volunteering, and continuous learning.
        </p>

      </div>

      <div className="development-grid">

        {/* ================= CYBORG ================= */}

        <div className="development-card">

          <div className="development-icon">
            <FaShieldAlt />
          </div>

          <h3>CYBORG</h3>

          <h4>Cybernetic Defence Unleashed</h4>

          <p>
            Participated in an intercollegiate cybersecurity
            hackathon organized by the Department of Computer
            Science & Engineering, strengthening analytical
            thinking, cybersecurity fundamentals, and collaborative
            problem-solving through real-world technical challenges.
          </p>

          <div className="development-tags">

            <span>Cybersecurity</span>

            <span>Problem Solving</span>

            <span>Critical Thinking</span>

            <span>Teamwork</span>

          </div>

          <a
            href="/Certifications/cyborg.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="development-link"
          >
            View Certificate →
          </a>

        </div>

        {/* ================= DJANGO ================= */}

        <div className="development-card">

          <div className="development-icon">
            <FaLaptopCode />
          </div>

          <h3>Django Semi Hackathon</h3>

          <h4>Full Stack Web Development</h4>

          <p>
            Participated in a Django-based hackathon focused on
            developing full-stack web applications while applying
            authentication, database management, and rapid
            development practices in a collaborative environment.
          </p>

          <div className="development-tags">

            <span>Django</span>

            <span>Authentication</span>

            <span>CRUD</span>

            <span>Database Design</span>

          </div>

        </div>

        {/* ================= RPC ================= */}

        <div className="development-card">

          <div className="development-icon">
            <FaHandshake />
          </div>

          <h3>RPC 2024</h3>

          <h4>Student Volunteer</h4>

          <p>
            Volunteered at the RPC 2024 program conducted by
            Edulateral Higher Education, contributing to
            educational outreach initiatives while strengthening
            communication, teamwork, collaboration, and gaining
            valuable exposure to current trends in the IT industry.
          </p>

          <div className="development-tags">

            <span>Communication</span>

            <span>Teamwork</span>

            <span>Collaboration</span>

            <span>IT Industry Exposure</span>

          </div>

          <a
            href="/Certifications/edulateral.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="development-link"
          >
            View Certificate →
          </a>

        </div>

        {/* ================= COMPETITIVE PROGRAMMING ================= */}

        <div className="development-card">

          <div className="development-icon">
            <FaCode />
          </div>

          <h3>Competitive Programming</h3>

          <h4>HackerRank & LeetCode</h4>

          <p>
            Regularly solving coding challenges to strengthen
            algorithmic thinking, data structures, and
            problem-solving skills through consistent practice on
            competitive programming platforms.
          </p>

          <div className="development-tags">

            <span>Problem Solving</span>

            <span>Data Structures</span>

            <span>Algorithms</span>

            <span>Java & SQL</span>

          </div>

          <a
            href="https://www.hackerrank.com/profile/ruhaeilaf33"
            target="_blank"
            rel="noopener noreferrer"
            className="development-link"
          >
            HackerRank Profile →
          </a>

          <br />

          <a
            href="https://leetcode.com/u/Eilaf033/"
            target="_blank"
            rel="noopener noreferrer"
            className="development-link"
          >
            LeetCode Profile →
          </a>

        </div>

      </div>

    </section>
  );
}

export default ProfessionalDevelopment;