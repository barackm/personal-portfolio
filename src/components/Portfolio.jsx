import React, { Component } from "react";
import ProjectCard from "./common/ProjectCard";
import project1 from "../assets/images/projects/project3.png";

export default class Portfolio extends Component {
  render() {
    const projects = [
      { id: 1, image: project1 },
      { id: 2, image: project1 },
      { id: 3, image: project1 },
      { id: 4, image: project1 },
      { id: 5, image: project1 },
      { id: 6, image: project1 },
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
                    <a href="#t">Web</a>
                  </li>
                  <li>
                    <a href="#t">Mobile </a>
                  </li>
                  <li>
                    <a href="#t">More</a>
                  </li>
                </ul>
              </div>
              <div className="projects-grid-wrapper">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
