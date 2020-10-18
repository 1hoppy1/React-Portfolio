import React from "react";

function Nav(props) {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            {/* 📸 */}
          </span>{" "}
          Jim Hopkinson
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="/">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="projects" href="/projects">
            Projects
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="/contact">
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="/resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;