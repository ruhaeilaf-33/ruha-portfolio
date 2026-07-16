import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <a href="#home" className="logo">
          RUHA
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
        >
          ☾
        </button>

      </div>

    </header>
  );
}

export default Navbar;