import React, { Component } from "react";
import ProjectCard from "./common/ProjectCard";

export default class Portfolio extends Component {
  render() {
    const projects = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ];
    return (
      <div className="portfolio-main-container">
        <div className="portfolio-wrapper">
          <div className="portfolio-header">
            <div className="home-hello-wrapper ">
              <div className="hello-line"></div>
              <h3 className="hero-hello">Portfolio</h3>
            </div>
            <div className="portfolio-works-wrapper">
              <div className="links-wrapper">
                <h3>Some of my best works</h3>
                <ul>
                  <li>
                    <a href="#t" className="active">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#t">Web Design</a>
                  </li>
                  <li>
                    <a href="#t">Mobile design </a>
                  </li>
                  <li>
                    <a href="#t">More</a>
                  </li>
                </ul>
              </div>
              <div className="projects-grid-wrapper">
                {projects.map((project) => (
                  <ProjectCard key={project.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
