import "./Hero.css";
import profile from "../../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT */}

      <div className="hero-left">


        <p className="hero-badge">
          COMPUTER SCIENCE ENGINEERING STUDENT
        </p>

        <h1 className="hero-title">

          Building

          <span> Intelligent </span>

          Solutions.

        </h1>

        <p className="hero-description">

          Computer Science Engineering student passionate about
          building intelligent software through Artificial
          Intelligence, Full Stack Development, and Data Analytics.
          Driven by continuous learning and creating impactful,
          user-focused digital solutions.

        </p>

        <div className="hero-thought" aria-label="Personal thoughts">
          <span className="thought-stage" aria-hidden="true">
            <span>Building insights</span>
            <span>Turning ideas into impact</span>
            <span>Creating intelligent solutions</span>
            <span>Learning • Building • Growing</span>
            <span>Curious about what&apos;s next</span>
          </span>
        </div>

        <div className="hero-buttons">

          <a
            href="/resume/ruha_resume (2).pdf"
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

            <h3>5+</h3>

            <p>Certifications</p>

          </div>

          <div>

            <h3>2027</h3>

            <p>Graduating</p>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="hero-right">

        <div className="hero-image-wrapper">

          <span className="orbit orbit-one" aria-hidden="true"></span>
          <span className="orbit orbit-two" aria-hidden="true"></span>
          <span className="orbit-node node-one" aria-hidden="true"></span>
          <span className="orbit-node node-two" aria-hidden="true"></span>
          <span className="hero-sparkle sparkle-one" aria-hidden="true">✦</span>
          <span className="hero-sparkle sparkle-two" aria-hidden="true">✦</span>
          <span className="hero-sparkle sparkle-three" aria-hidden="true">✦</span>
          <span className="idea-chip visual-chip" aria-hidden="true">✦&nbsp; Ideas</span>
          <span className="code-chip visual-chip" aria-hidden="true">&lt;/&gt;&nbsp; Code</span>
          <span className="data-chip visual-chip" aria-hidden="true">▥&nbsp; Data</span>
          <span className="impact-chip visual-chip" aria-hidden="true">✧&nbsp; Impact</span>
          <span className="hero-quote" aria-hidden="true">“A curious mind<br />builds a kinder<br />tech world.”<small>— RUHA</small></span>

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
