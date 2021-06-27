import React, { Component } from "react";

export default class ProjectCard extends Component {
  render() {
    return (
      <>
        <a href="#f" className="project-item-wrapper">
          <h3 className="project-title">Web UI-UX Design</h3>
          <p className="project-details">
            Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
          </p>
          <div className="project-technology-tags">
            <div className="project-tag">HTML </div>
            <div className="project-tag">CSS</div>
            <div className="project-tag">JAVASCRIPT</div>
          </div>
          <div className="project-images-preview"></div>
        </a>
      </>
    );
  }
}
