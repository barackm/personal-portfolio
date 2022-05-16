import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from '@formspree/react';
import { BsEnvelope } from 'react-icons/bs';
import {
  FiFacebook,
  FiPhone,
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';

import Input from './common/Input';
import SubmitBtn from './common/SubmitBtn';
import Texterea from './common/Texterea';

export default function Contact() {
  const [state, handleSubmit] = useForm('xyylpkll');

  const Message = () => (
    <div className="contact-page-main-container" id="contact" name="contact">
      <div className="contact-page-wrapper">
        <div className="contact-details-wrapper">
          <div className="home-hello-wrapper ">
            <div className="hello-line"></div>
            <h3 className="hero-hello">Contact me</h3>
          </div>
          <h2 className="slogan">Let's do it together</h2>

          <p className="about-work">
            Question, comment or concern? this contact form is the best way to
            get in touch with me.
          </p>

          <div className="contact-address-wrapper">
            <ul>
              <li>
                <a href="#f">
                  <div className="address-icon-wrapper">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
                    >
                      <FaMapMarkerAlt />
                    </IconContext.Provider>
                  </div>
                  Kigali - Rwanda, KK 8 Av 190
                </a>
              </li>
              <li>
                <a href="#f">
                  <div className="address-icon-wrapper">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
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
                      value={{ className: 'contact-address-icon' }}
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
                <a
                  href="https://www.facebook.com/freddy.fumba.7/"
                  target="blank"
                >
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiFacebook />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/barackmukelenga/"
                  target="blank"
                >
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiInstagram />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a href="https://github.com/barackm" target="blank">
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiGithub />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/BarackMukelenga" target="blank">
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiTwitter />
                  </IconContext.Provider>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/baraka-mukelenga/"
                  target="blank"
                >
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiLinkedin />
                  </IconContext.Provider>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-form-wrapper redirect-form-contact">
          <div className="form-submission-message">
            Thanks for staying in touch! 😍 😍 😍 😍
          </div>
          <div className="show-form-btn">
            Click
            <div
              onClick={() => window.location.reload()}
              className="show-contact-form"
            >
              here
            </div>
            to show the contact form again.
          </div>
        </div>
      </div>
    </div>
  );
  if (state.succeeded) {
    return <Message />;
  }

  return (
    <div className="contact-page-main-container" id="contact">
      <div className="contact-page-wrapper">
        <div className="contact-details-wrapper">
          <div className="home-hello-wrapper" data-aos="fade-down">
            <div className="hello-line"></div>
            <h3 className="hero-hello">Contact me</h3>
          </div>
          <h2 className="slogan" data-aos="fade-down">
            Let's do it together
          </h2>

          <p className="about-work" data-aos="fade-down">
            Question, comment or concern? this contact form is the best way to
            get in touch with me.
          </p>

          <div className="contact-address-wrapper">
            <ul>
              <li data-aos="fade-down-right">
                <a href="#f">
                  <div className="address-icon-wrapper">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
                    >
                      <FaMapMarkerAlt />
                    </IconContext.Provider>
                  </div>
                  Kigali - Rwanda
                </a>
              </li>
              <li data-aos="fade-down-right">
                <a href="#f">
                  <div className="address-icon-wrapper">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
                    >
                      <BsEnvelope />
                    </IconContext.Provider>
                  </div>
                  barackmukelenga100@gmail.com
                </a>
              </li>
              <li data-aos="fade-down-right">
                <a href="#f">
                  <div className="address-icon-wrapper">
                    <IconContext.Provider
                      value={{ className: 'contact-address-icon' }}
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
              <li data-aos="fade-right">
                <a
                  href="https://www.facebook.com/freddy.fumba.7/"
                  target="blank"
                >
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiFacebook />
                  </IconContext.Provider>
                </a>
              </li>
              <li data-aos="fade-right">
                <a
                  href="https://www.instagram.com/barackmukelenga/"
                  target="blank"
                >
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiInstagram />
                  </IconContext.Provider>
                </a>
              </li>
              <li data-aos="fade-right">
                <a href="https://github.com/barackm" target="blank">
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiGithub />
                  </IconContext.Provider>
                </a>
              </li>
              <li data-aos="fade-right">
                <a href="https://twitter.com/BarackMukelenga" target="blank">
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiTwitter />
                  </IconContext.Provider>
                </a>
              </li>
              <li data-aos="fade-right">
                <a
                  href="https://www.linkedin.com/in/baraka-mukelenga/"
                  target="blank"
                >
                  <IconContext.Provider
                    value={{ className: 'contact-link-icon' }}
                  >
                    <FiLinkedin />
                  </IconContext.Provider>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-form-wrapper" data-aos="fade-left">
          <form onSubmit={handleSubmit}>
            <Input placeholder="Name" name="name" errors={state.errors} />
            <Input
              placeholder="Email address"
              name="email"
              errors={state.errors}
            />
            <Input placeholder="Subject" name="subject" errors={state.errors} />
            <Texterea
              placeholder="Message"
              name="message"
              errors={state.errors}
            />
            <SubmitBtn message="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
