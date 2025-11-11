import "../Nav/Navbar.css";
import Logo from "./../../images/Manoj.png";
export const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="Logo" className="logo-image" />
        </a>
      </div>

      <input type="checkbox" id="nav-toggle" className="nav-toggle" />

      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </label>

      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#certifications">Certificate</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#achievements">Achievement</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <li className="resume-mobile">
            {/* <a href="/resume.pdf" download>
              Resume
            </a>*/}
            <a href="https://manojnahak-resume.tiiny.site">Resume</a>
          </li>
        </ul>
      </nav>

      <div className="resume-desktop">
        <a href="https://manojnahak-resume.tiiny.site">
          Resume
        </a>
      </div>
    </header>
  );
};
