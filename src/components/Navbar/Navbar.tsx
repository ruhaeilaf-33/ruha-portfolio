import "./Navbar.css";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme") || "light";

    setTheme(savedTheme);

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );

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

    localStorage.setItem(
      "theme",
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
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
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