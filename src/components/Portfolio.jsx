import React, { Component } from "react";
import ProjectCard from "./common/ProjectCard";
import project1 from "../assets/images/projects/project3.png";
import project2 from "../assets/images/projects/project4.png";
import project3 from "../assets/images/projects/project5.png";
import project4 from "../assets/images/projects/project6.png";
import project5 from "../assets/images/projects/project7.png";
import project6 from "../assets/images/projects/project8.png";

export default class Portfolio extends Component {
  render() {
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
      },
      {
        id: 1,
        image: project2,
        title: "ULK Forum",
        description:
          "Forum where students should post their problems about projects or assignments to get idea from other students",
        demoLink: "https://github.com/barackm/ULK-Forum",
        sourceCodeLink: "https://github.com/barackm/ULK-Forum",
        technologies: [
          { id: 1, name: "Javascript" },
          { id: 2, name: "ReactJs" },
          { id: 3, name: "SCSS" },
        ],
      },

      {
        id: 3,
        image: project3,
        title: "Niky",
        description:
          "Niky is an online shop for fashion which sells different kinds of hats, shirts, shoes, and much more, Niky is the number 1 in this service, because it offers you the best quality of all its products and customers are always satisfied.",
        demoLink: "https://niky.netlify.app",
        sourceCodeLink: "https://github.com/barackm/Niky",
        technologies: [
          { id: 1, name: "HTML" },
          { id: 2, name: "CSS" },
          { id: 3, name: "SCSS" },
        ],
      },
      {
        id: 5,
        image: project5,
        title: "Raven Bot",
        description:
          "Raven Bot is a Ruby-based Bot used in restaurants, helping clients to place an order inside restaurants easily with some fun using their phones.",
        demoLink: "https://github.com/barackm/Niky-Restaurent-Bot",
        sourceCodeLink: "https://github.com/barackm/Niky-Restaurent-Bot",
        technologies: [{ id: 1, name: "Ruby" }],
      },
    ];

    return (
      <div className="portfolio-main-container" id="portfolio">
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
