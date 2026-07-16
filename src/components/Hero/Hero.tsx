import "./Hero.css";
import profile from "../../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT */}

      <div className="hero-left">

        <p className="hero-badge">
          COMPUTER SCIENCE ENGINEER
        </p>

        <h1 className="hero-title">

          Building

          <span> Intelligent </span>

          Solutions.

        </h1>

        <p className="hero-description">

          Passionate about crafting impactful software through
          Artificial Intelligence, Full Stack Development and
          Data Analytics.

        </p>

        <div className="hero-buttons">

          <a
            href="/resume/Ruha_Eilaf_Resume.pdf"
            className="primary-btn"
            download
          >
            Resume
          </a>

          <a
            href="#projects"
            className="secondary-btn"
          >
            Projects
          </a>

        </div>

        <div className="hero-stats">

          <div>

            <h3>9.55</h3>

            <p>Academic CGPA</p>

          </div>

          <div>

            <h3>5+</h3>

            <p>Projects</p>

          </div>

          <div>

            <h3>5</h3>

            <p>Certifications</p>

          </div>

          <div>

            <h3>AI</h3>

            <p>Focus</p>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="hero-right">

        <div className="hero-image-wrapper">

          <div className="hero-circle"></div>

          <div className="hero-image">

            <img
              src={profile}
              alt="Ruha Eilaf"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;