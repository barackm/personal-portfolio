import React, { useRef, useState } from "react";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const navbar = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);

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
            <svg className='logo-wrapper' viewBox='0 0 157 149' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0)'>
                <path
                  d='M155.192 66.4327C157.844 71.0897 157.809 76.8076 155.102 81.4324L123.437 135.525C120.73 140.15 115.761 142.98 110.402 142.947L47.7236 142.571C42.3647 142.539 37.4301 139.651 34.7785 134.994L3.76496 80.5244C1.11337 75.8674 1.14768 70.1495 3.85496 65.5247L35.5198 11.4317C38.2271 6.8068 43.1961 3.97758 48.555 4.00973L111.233 4.3858C116.592 4.41796 121.527 7.3066 124.178 11.9636L155.192 66.4327Z'
                  fill='white'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M74 68H85H85.3383C89.1613 68.0785 94.3072 70.7891 96.6967 76H78V92.3541C73.1397 89.7392 72 84.7679 72 82H71L70 83V72V68H74Z'
                  fill='black'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M78 82H76V74H84V76C87.3137 76 90 78.6863 90 82C90 85.3137 87.3137 88 84 88C80.6863 88 78 85.3137 78 82ZM84 68C76.268 68 70 74.268 70 82C70 89.732 76.268 96 84 96C91.732 96 98 89.732 98 82C98 74.268 91.732 68 84 68Z'
                  fill='black'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M52 4.01147V79V83H56H60V75V56.5V53V4.05734L52 4.01147ZM70 4.11467V48V75V83H74H78V79V4.16053L70 4.11467Z'
                  fill='black'
                />
                <path d='M85 49H78V57H85V49Z' fill='black' />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M60 83V81.5V60.1451C55.0178 65.8564 52 73.3258 52 81.5C52 99.4493 66.5507 114 84.5 114C102.449 114 117 99.4493 117 81.5C117 63.5507 102.449 49 84.5 49C79.2893 49 74.365 50.2263 70 52.4059V61.7496C72.3761 60.0022 75.079 58.6733 78 57.8716V57H84.5H85V57.005C98.3002 57.2713 109 68.1361 109 81.5C109 95.031 98.031 106 84.5 106C71.4727 106 60.8202 95.8324 60.0452 83H60Z'
                  fill='black'
                />
              </g>
              <defs>
                <clipPath id='clip0'>
                  <rect width='157' height='149' fill='black' />
                </clipPath>
              </defs>
            </svg>
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
