import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import truncateStr from "../utils/truncateStr";

export default class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <>
        <div
          href="#f"
          className="project-item-wrapper"
          data-aos={project.animation}
        >
          <h3 className="project-title">{project.title}</h3>
          <p className="project-details">
            {truncateStr(project.description, 100)}
          </p>
          <div className="project-links">
            <a href={project.demoLink} target="blank">
              Live Demo{" "}
              <IconContext.Provider value={{ className: "project-link" }}>
                <FiExternalLink />
              </IconContext.Provider>
            </a>
            <a href={project.sourceCodeLink} target="blank">
              Source code
              <IconContext.Provider value={{ className: "project-link" }}>
                <AiFillGithub />
              </IconContext.Provider>
            </a>
          </div>
          <div className="project-technology-tags">
            {project.technologies.map((techno) => (
              <div key={techno.id} className="project-tag">
                {techno.name}
              </div>
            ))}
          </div>
          <div className="project-images-preview">
            <img src={project.image} alt="" />
          </div>
        </div>
      </>
    );
  }
}
