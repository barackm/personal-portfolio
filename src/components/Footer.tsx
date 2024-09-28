import React from "react";
import { IconContext } from "react-icons";
import { FiFacebook, FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-scroll";

const socialLinks = [
  { href: "https://www.facebook.com/freddy.fumba.7/", icon: <FiFacebook /> },
  { href: "https://www.instagram.com/barackmukelenga/", icon: <FiInstagram /> },
  { href: "https://github.com/barackm", icon: <FiGithub /> },
  { href: "https://twitter.com/BarackMukelenga", icon: <FiTwitter /> },
  { href: "https://www.linkedin.com/in/baraka-mukelenga/", icon: <FiLinkedin /> },
];

const navLinks = ["home", "about", "work", "portfolio", "contact"];

const Footer: React.FC = () => {
  return (
    <footer className='footer-main-container'>
      <div className='footer-content-container'>
        <div className='footer-up'>
          <ul className='links-pages'>
            {navLinks.map((section, index) => (
              <li key={index} data-aos='fade-right'>
                <Link to={section} spy={true} smooth={true} duration={500}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <div className='contact-links-wrapper'>
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target='_blank' rel='noopener noreferrer'>
                    <IconContext.Provider value={{ className: "contact-link-icon" }}>{link.icon}</IconContext.Provider>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='footer-down'>
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a href='https://www.linkedin.com/in/baraka-mukelenga/' className='name'>
              Baraka Mukelenga
            </a>
            , All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
