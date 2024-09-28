import React, { useRef, useState } from "react";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const navbar = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [links, setLinks] = useState([
    {
      id: 1,
      name: "Blog",
      to: "home",
      class: "",
      isExternal: true,
      url: "https://blog.barackm.me",
    },
    { id: 2, name: "About", to: "about", class: "" },
    { id: 3, name: "Work", to: "work", class: "" },
    { id: 4, name: "Portfolio", to: "portfolio", class: "" },
    { id: 5, name: "contact", to: "contact", class: "" },
  ]);

  const handleShowLinks = () => {
    setIsMenuOpen(!isMenuOpen);
    if (navbar.current && menu.current) {
      navbar.current.classList.toggle("open");
      menu.current.classList.toggle("open");
    }
  };

  const handleHover = (link: (typeof links)[0]) => {
    const updatedLinks = links.map((item) => {
      if (item.id === link.id) {
        return { ...item, class: "focusOut focused" };
      }
      return { ...item, class: "focusOut" };
    });
    setLinks(updatedLinks);
  };

  const handleHoverOut = () => {
    const updatedLinks = links.map((item) => ({ ...item, class: "" }));
    setLinks(updatedLinks);
  };

  const closeMenu = () => {
    if (navbar.current && menu.current) {
      navbar.current.classList.remove("open");
      menu.current.classList.remove("open");
    }
  };

  return (
    <header>
      <nav className='header-main-container' ref={menu}>
        <div className='logo-container'>
          <Link to='home' spy={true} smooth={true} duration={500} delay={800} className='logo-area' onClick={closeMenu}>
            <img className='logo' src={isMenuOpen ? "/images/logo-blue.png" : "/images/logo-white.png"} />
          </Link>
        </div>
        <div className='hamburger-container'>
          <div className='hamburger-area' onClick={handleShowLinks}>
            <div className='burger'></div>
            <div className='burger'></div>
            <div className='burger'></div>
          </div>
        </div>
      </nav>
      <nav className='header-links-main-container' ref={navbar}>
        <div className='navbar-overlay-main-container'></div>
        <div className='links-wrapper'>
          <div className='menu-text'>
            <h1>Menu</h1>
          </div>
          <ul>
            {links.map((link, index) => (
              <li
                onMouseEnter={() => handleHover(link)}
                onMouseLeave={handleHoverOut}
                className={link.class}
                key={link.id}
              >
                {link.isExternal ? (
                  <a href={link.url} target='_blank' rel='noopener noreferrer' key={link.id}>
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={800}
                    key={link.id}
                    onClick={handleShowLinks}
                  >
                    {link.name}
                  </Link>
                )}
                <div className='link-number'>0{index + 1}</div>
                <div className='link-text-overlay'>{link.name}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className='contact-details'>
          <div className='contact-text'>
            <p>barackmukelenga100@gmail.com</p> <br />
            <p>+(250) 780-083-122</p> <br />
            <span>Kigali Rwanda, KK 8 Av 190</span>
          </div>
          <div className='contact-details-icon-wrapper'>
            <div className='contact-icon-item'>
              <a href='https://www.facebook.com/freddy.fumba.7/' target='blank'>
                <IconContext.Provider value={{ className: "header-links-icon" }}>
                  <FaFacebookF />
                </IconContext.Provider>
              </a>
              <a href='https://twitter.com/BarackMukelenga' target='blank'>
                <IconContext.Provider value={{ className: "header-links-icon" }}>
                  <FaTwitter />
                </IconContext.Provider>
              </a>
              <a href='https://www.instagram.com/barackmukelenga/' target='blank'>
                <IconContext.Provider value={{ className: "header-links-icon" }}>
                  <FaInstagram />
                </IconContext.Provider>
              </a>
              <a href='https://www.linkedin.com/in/baraka-mukelenga/' target='blank'>
                <IconContext.Provider value={{ className: "header-links-icon" }}>
                  <AiFillLinkedin />
                </IconContext.Provider>
              </a>
              <a href='https://github.com/barackm' target='blank'>
                <IconContext.Provider value={{ className: "header-links-icon" }}>
                  <AiOutlineGithub />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
