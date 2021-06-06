import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div className="welcome-page-main-container">
        <div className="home-main-title">
          <div className="title-name">
            <div className="title-1">
              <h3>
                <span>I</span> AM
              </h3>
            </div>
            <h1 className="main-name-title">BARACK</h1>
          </div>
          <div className="home-about">
            <h3>A JUNIOR</h3>
            <h3>FULL STACK DEVELOPPER</h3>
          </div>
        </div>
        <div className="icons-wrapper">
          <ul>
            <li>
              <a href="#1">
                <IconContext.Provider
                  value={{ className: "home-links-icon" }}
                >
                  <FaFacebookF />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="#1">
                <IconContext.Provider
                  value={{ className: "home-links-icon" }}
                >
                  <FaTwitter />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="#1">
                <IconContext.Provider
                  value={{ className: "home-links-icon" }}
                >
                  <AiFillLinkedin />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href="#1">
                <IconContext.Provider
                  value={{ className: "header-links-icon" }}
                >
                  <AiOutlineGithub />
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </div>
        <div className="arrow-down">
          <div className="text">SCROLL</div>
          <div className="arrow"></div>
        </div>
      </div>
    );
  }
}

export default Welcome;
