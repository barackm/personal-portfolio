import React from "react";
import { IconContext } from "react-icons";
import { BiDownload } from "react-icons/bi";
import { FaLaptopCode, FaPlay } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-scroll";
import ResumeButton from "./common/ResumeButton";

const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com/freddy.fumba.7/",
    icon: <FiFacebook />,
  },
  {
    id: 2,
    href: "https://www.instagram.com/barackmukelenga/",
    icon: <FiInstagram />,
  },
  {
    id: 3,
    href: "https://github.com/barackm",
    icon: <FiGithub />,
  },
  {
    id: 4,
    href: "https://twitter.com/BarackMukelenga",
    icon: <FiTwitter />,
  },
  {
    id: 5,
    href: "https://www.linkedin.com/in/baraka-mukelenga/",
    icon: <FiLinkedin />,
  },
];

const Home: React.FC = () => {
  return (
    <div className='home-page-main-container'>
      <aside className='aside-links-wrapper' data-aos='fade-up-left'>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} target='_blank' rel='noopener noreferrer'>
                <IconContext.Provider value={{ className: "sidebar-link-icon" }}>{link.icon}</IconContext.Provider>
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <section className='home-content-wrapper'>
        <div className='home-text-content'>
          <div className='home-hello-wrapper' data-aos='fade-up-right'>
            <div className='hello-line'></div>
            <h3 className='hero-hello'>Hi there,</h3>
          </div>

          <div className='hero-text-wrapper' data-aos='fade-up-right'>
            I am Baraka Mukelenga
          </div>

          <div className='profession-area'>
            <h3 className='hero-profession' data-aos='fade-up-right'>
              Full-stack Web Developer
            </h3>
          </div>

          <div className='btn-wrapper' data-aos='fade-up'>
            <Link to='contact' spy={true} smooth={true} duration={500} className='hire-me-btn'>
              Hire Me
            </Link>
            <ResumeButton />
          </div>
        </div>

        <div className='image-content-wrapper' data-aos='zoom-in'>
          <div className='image-wrapper'>
            <div className='play-icon-wrapper'>
              <div className='play-container'>
                <IconContext.Provider value={{ className: "icon-play" }}>
                  <FaPlay />
                </IconContext.Provider>
              </div>
            </div>

            <div className='years-of-experience'>
              <div className='blur-area'></div>
              <div className='icon-wrapper'>
                <IconContext.Provider value={{ className: "computer-icon" }}>
                  <FaLaptopCode />
                </IconContext.Provider>
              </div>
              <div className='experience-text'>
                <h5>Experience</h5>
                <div className='years-wrapper'>
                  <h2>
                    <IconContext.Provider value={{ className: "check-icon" }}>
                      <AiOutlineCheck />
                    </IconContext.Provider>
                  </h2>
                  <span>4+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
