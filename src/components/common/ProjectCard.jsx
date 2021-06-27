import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

export default class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <>
        <div href="#f" className="project-item-wrapper">
          <h3 className="project-title">Web UI-UX Design</h3>
          <p className="project-details">
            Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
          </p>
          <div className="project-links">
            <a href="#1">
              Live Demo{" "}
              <IconContext.Provider value={{ className: "project-link" }}>
                <FiExternalLink />
              </IconContext.Provider>
            </a>
            <a href="#1">
              Source code
              <IconContext.Provider value={{ className: "project-link" }}>
                <AiFillGithub />
              </IconContext.Provider>
            </a>
          </div>
          <div className="project-technology-tags">
            <div className="project-tag">HTML </div>
            <div className="project-tag">CSS</div>
            <div className="project-tag">JAVASCRIPT</div>
          </div>
          <div className="project-images-preview">
            <img src={project.image} alt="" />
          </div>
        </div>
      </>
    );
  }
}
