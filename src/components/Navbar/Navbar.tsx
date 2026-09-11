import "./Navbar.css";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {

  // The portfolio is intentionally cream-led on every fresh visit.
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

  }, [theme]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-25% 0px -65%", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {

    const newTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(newTheme);

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

  };

  return (

    <header className="navbar">

      <div className="navbar-container">

        <a
          href="#home"
          className="logo"
        >
          Ruha.
        </a>

        <nav>

          <ul className="nav-links">

            <li>
              <a className={activeSection === "home" ? "is-active" : ""} href="#home">Home</a>
            </li>

            <li>
              <a className={activeSection === "about" ? "is-active" : ""} href="#about">About</a>
            </li>

            <li>
              <a className={activeSection === "skills" ? "is-active" : ""} href="#skills">Skills</a>
            </li>

            <li>
              <a className={activeSection === "projects" ? "is-active" : ""} href="#projects">Projects</a>
            </li>

            <li>
              <a className={activeSection === "contact" ? "is-active" : ""} href="#contact">Contact</a>
            </li>

          </ul>

        </nav>

        <button
          className="theme-button"
          aria-label="Toggle Theme"
          onClick={toggleTheme}
        >

          {theme === "light"
            ? <FaMoon />
            : <FaSun />}

        </button>

      </div>

    </header>

  );

}

export default Navbar;
