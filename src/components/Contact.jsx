import React, { Component } from "react";
import { IconContext } from "react-icons/lib";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import {
  FiFacebook,
  FiPhone,
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import Input from "./common/Input";
import SubmitBtn from "./common/SubmitBtn";
import Texterea from "./common/Texterea";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-page-main-container">
        <div className="contact-page-wrapper">
          <div className="contact-details-wrapper">
            <div className="home-hello-wrapper ">
              <div className="hello-line"></div>
              <h3 className="hero-hello">Contact me</h3>
            </div>
            <h2 className="slogan">Let's do it together</h2>

            <p className="about-work">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              explicabo totam deleniti tempore aliquid optio{" "}
            </p>

            <div className="contact-address-wrapper">
              <ul>
                <li>
                  <a href="#f">
                    <div className="address-icon-wrapper">
                      <IconContext.Provider
                        value={{ className: "contact-address-icon" }}
                      >
                        <FaMapMarkerAlt />
                      </IconContext.Provider>
                    </div>
                    Kigali - Rwanda
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <div className="address-icon-wrapper">
                      <IconContext.Provider
                        value={{ className: "contact-address-icon" }}
                      >
                        <BsEnvelope />
                      </IconContext.Provider>
                    </div>
                    barackmukelenga100@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <div className="address-icon-wrapper">
                      <IconContext.Provider
                        value={{ className: "contact-address-icon" }}
                      >
                        <FiPhone />
                      </IconContext.Provider>
                    </div>
                    +250 (0) 780-083-122
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-links-wrapper">
              <ul>
                <li>
                  <a href="#f">
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiFacebook />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiInstagram />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiGithub />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiTwitter />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <IconContext.Provider
                      value={{ className: "contact-link-icon" }}
                    >
                      <FiLinkedin />
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form action="">
              <Input placeholder="Name" error="You need to fill in the name" />
              <Input placeholder="Email address" />
              <Input placeholder="Subject" />
              <Texterea
                placeholder="Message"
                error="You need to fill in the message"
              />
              <SubmitBtn message="Send" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
