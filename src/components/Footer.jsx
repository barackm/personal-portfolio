import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-main-container">
        <div className="footer-content-container">
          <div className="footer-up">
            <ul>
              <li>
                <a href="#home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
            <p>Made with ❤️ by Baraka Mukelenga</p>
          </div>
          <div className="footer-down">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://www.linkedin.com/in/baraka-mukelenga/"
                className="name"
              >
                Baraka Mukelenga
              </a>
              , All right reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}
