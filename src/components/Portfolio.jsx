import React, { Component } from "react";
import ProjectCard from "./common/ProjectCard";
import project1 from "../assets/images/projects/project11.png";
import project2 from "../assets/images/projects/project4.png";
import project3 from "../assets/images/projects/project7.png";
import project4 from "../assets/images/projects/project6.png";
import project6 from "../assets/images/projects/project12.png";
import project7 from "../assets/images/projects/project10.png";

export default class Portfolio extends Component {
  state = {
    shownTab: "all",
  };

  handleHowTab = (tab) => {
    this.setState({ shownTab: tab });
  };

  render() {
    const { shownTab } = this.state;
    const projects = [
      {
        id: 4,
        image: project4,
        title: "Microverse Chat",
        description:
          "This project provides a social media website created with Ruby on Rails. We tried to implement a UX based on Facebook",
        demoLink: "https://tranquil-chamber-60677.herokuapp.com/",
        sourceCodeLink: "https://github.com/barackm/ULK-Forum",
        technologies: [
          { id: 1, name: "Rails" },
          { id: 2, name: "Stimulus" },
          { id: 3, name: "SCSS" },
        ],
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 2,
        image: project1,
        title: "FMB Studio",
        description:
          "FMB studio is a website for photographs, Where they can post the best of their work.",
        demoLink: "https://fmbstudio.netlify.app/",
        sourceCodeLink: "https://github.com/barackm/fmb-studio",
        technologies: [
          { id: 1, name: "Javascript" },
          { id: 2, name: "ReactJs" },
          { id: 3, name: "SCSS" },
        ],
        category_id: 1,
        animation: "zoom-in-up",
      },
      {
        id: 5,
        image: project7,
        title: "My Doctor",
        description:
          "My Doctor is a mobile app Designed for Hospitals, helping petients to be assisted by thier doctors online.",
        demoLink: "https://github.com/barackm/Doctor-App",
        sourceCodeLink: "https://github.com/barackm/Doctor-App",
        technologies: [{ id: 1, name: "React Native" }],
        category_id: 2,
        animation: "fade-down-left",
      },
      {
        id: 6,
        image: project6,
        title: "Book Reviewer",
        description:
          "This project is a Ruby on Rails capstone project based on a redesign of Twitter. It is a place where people can share opinions or reviews about books with people who follow them. Reviews can be commented on and voted on so that other users may be confident about posted reviews.",
        demoLink: "https://b-book-reviewer.herokuapp.com",
        sourceCodeLink: "https://github.com/barackm/book-opinions",
        technologies: [
          { id: 1, name: "Rails" },
          { id: 2, name: "Stimulus" },
          { id: 3, name: "SCSS" },
        ],
        category_id: 3,
        animation: "flip-left",
      },
      {
        id: 1,
        image: project2,
        title: "ULK Forum",
        description:
          "Forum where students should post their problems about projects or assignments to get idea from other students",
        demoLink: "https://ulk-forum.netlify.app/",
        sourceCodeLink: "https://github.com/barackm/ULK-Forum",
        technologies: [
          { id: 1, name: "Javascript" },
          { id: 2, name: "ReactJs" },
          { id: 3, name: "SCSS" },
        ],
        category_id: 1,
        animation: "zoom-in-up",
      },

      {
        id: 3,
        image: project3,
        title: "Raven Bot ",
        description:
          "Raven Bot is a Ruby-based Bot used in restaurants, helping clients to place an order inside restaurents.          ",
        demoLink: "https://github.com/barackm/Niky-Restaurent-Bot",
        sourceCodeLink: "https://github.com/barackm/Niky-Restaurent-Bot",
        technologies: [{ id: 1, name: "Ruby" }],
        category_id: 3,
        animation: "flip-left",
      },
    ];

    const webProjects = projects.filter((project) => project.category_id === 1);
    const mobileProjects = projects.filter(
      (project) => project.category_id === 2
    );
    const backendProjects = projects.filter(
      (project) => project.category_id === 3
    );

    const renderProjects = () => {
      if (shownTab === "all") {
        return projects;
      } else if (shownTab === "mobile") {
        return mobileProjects;
      } else if (shownTab === "web") {
        return webProjects;
      } else {
        return backendProjects;
      }
    };
    return (
      <div className="portfolio-main-container" id="portfolio" name="portfolio">
        <div className="portfolio-wrapper">
          <div className="portfolio-header">
            <div className="home-hello-wrapper" data-aos="fade-up">
              <div className="hello-line"></div>
              <h3 className="hero-hello">Portfolio</h3>
            </div>
            <div className="portfolio-works-wrapper">
              <div className="links-wrapper">
                <h3 data-aos="fade-up">Some of my best works</h3>
                <ul>
                  <li>
                    <div
                      onClick={() => this.handleHowTab("all")}
                      className={shownTab === "all" ? "active" : ""}
                    >
                      All
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("web")}>
                    <div className={shownTab === "web" ? "active" : ""}>
                      Web
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("mobile")}>
                    <div className={shownTab === "mobile" ? "active" : ""}>
                      Mobile{" "}
                    </div>
                  </li>
                  <li onClick={() => this.handleHowTab("backend")}>
                    <div className={shownTab === "backend" ? "active" : ""}>
                      Backend
                    </div>
                  </li>
                </ul>
              </div>
              <div className="projects-grid-wrapper">
                {renderProjects().map((project) => (
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
