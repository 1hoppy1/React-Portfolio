import React from "react";

function Projects() {
  return (
    <section className="my-5">
      <h1 id="projects">Take a look at my projects!</h1>

      <article id="work" class="flex-container">
        <div className="work-grid-container">
          <div className="work-grid-item box6">
            <div className="box">
              <a
                href="https://small-show-group-project.herokuapp.com/"
                target="_blank"
              >
                <h2>Small Show: on Heroku</h2>
              </a>
              <a href="https://github.com/1hoppy1/small-show" target="_blank">
                <h5>Full MERN Stack GitHub Repo</h5>
              </a>
            </div>
          </div>

          <div className="work-grid-item box6">
            <div className="box">
              <a href="https://what-2-watch-jim.herokuapp.com/" target="_blank">
                <h2>What2Watch: on Heroku</h2>
              </a>
              <a href="https://github.com/1hoppy1/What2Watch" target="_blank">
                <h5>Front-End/Back-End GitHub Repo</h5>
              </a>
            </div>
          </div>

          <div className="work-grid-item box1">
            <div className="box">
              <a
                href="https://1hoppy1.github.io/campground-finder/"
                target="_blank"
              >
                <h2>Camp Finder: on GitHub</h2>
              </a>
              <a
                href="https://github.com/1hoppy1/campground-finder"
                target="_blank"
              >
                <h5>HTML/CSS/JS GitHub Repo</h5>
              </a>
            </div>
          </div>

          <div className="work-grid-item box1">
            <div className="box">
              <a
                href="https://1hoppy1.github.io/Weather-Dashboard/"
                target="_blank"
              >
                <h2>Weather Dashboard: on GitHub</h2>
              </a>
              <a
                href="https://github.com/1hoppy1/Weather-Dashboard"
                target="_blank"
              >
                <h5>HTML/CSS/JS GitHub Repo</h5>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Projects;
