import React from "react";

function Projects() {
  return (
    <section className="my-5">
      <h1 id="projects">Take a look at my projects!</h1>

      <article id="work" class="flex-container">
        <h2>Work</h2>
        <div className="work-grid-container">


        <div className="work-grid-item box6">
            <div className="box">
              <a href="https://small-show-group-project.herokuapp.com/" target="_blank">
                <h2>Small Show</h2>
              </a>
              <a href="https://github.com/1hoppy1/small-show" target="_blank">
                <h5>Full MERN Stack GitHub</h5>
              </a>
            </div>
          </div>


        <div className="work-grid-item box6">
            <div className="box">
              <a href="https://what-2-watch-jim.herokuapp.com/" target="_blank">
                <h2>What2Watch</h2>
              </a>
              <a href="https://github.com/1hoppy1/What2Watch" target="_blank">
                <h5>Front-End/Back-End GitHub</h5>
              </a>
            </div>
          </div>


          <div className="work-grid-item box1">
            <div className="box">
              <a
                href="https://1hoppy1.github.io/campground-finder/"
                target="_blank"
              >
                <h2>Camp Finder</h2>
              </a>
              <a
                href="https://github.com/1hoppy1/campground-finder"
                target="_blank"
              >
                <h5>HTML/CSS/JS GitHub</h5>
              </a>
            </div>
          </div>


          <div className="work-grid-item box2">
            <div className="box">
              <a
                href="https://1hoppy1.github.io/Weather-Dashboard/"
                target="_blank"
              >
                <h4>Weather Dashboard</h4>
                <h4>HTML/CSS/JS</h4>
              </a>
            </div>
          </div>
          
          
          <div className="work-grid-item box5">
            <div className="box">
              <a href="https://1hoppy1.github.io/run-buddy/" target="_blank">
                <h5>Run Buddy</h5>
                <h5>HTML/CSS</h5>
              </a>
            </div>
          </div>


        </div>
      </article>
    </section>
  );
}

export default Projects;
