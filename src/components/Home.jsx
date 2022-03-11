import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { BiDownload } from 'react-icons/bi';
import { FaLaptopCode, FaPlay } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';

import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';
import { Link } from 'react-scroll';

import barack from '../assets/images/project2.png';
import resume from '../assets/Barack Mukelenga Resume.pdf';

export default class Home extends Component {
  render() {
    return (
      <div className='home-page-main-container' name='home'>
        {/* <div className="background-image"></div> */}
        <div className='aside-links-wrapper' data-aos='fade-up-left'>
          <ul>
            <li>
              <a href='https://www.facebook.com/freddy.fumba.7/' target='blank'>
                <IconContext.Provider
                  value={{ className: 'sidebar-link-icon' }}
                >
                  <FiFacebook />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/barackmukelenga/'
                target='blank'
              >
                <IconContext.Provider
                  value={{ className: 'sidebar-link-icon' }}
                >
                  <FiInstagram />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href='https://github.com/barackm' target='blank'>
                <IconContext.Provider
                  value={{ className: 'sidebar-link-icon' }}
                >
                  <FiGithub />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/BarackMukelenga' target='blank'>
                <IconContext.Provider
                  value={{ className: 'sidebar-link-icon' }}
                >
                  <FiTwitter />
                </IconContext.Provider>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/baraka-mukelenga/'
                target='blank'
              >
                <IconContext.Provider
                  value={{ className: 'sidebar-link-icon' }}
                >
                  <FiLinkedin />
                </IconContext.Provider>
              </a>
            </li>
          </ul>
        </div>
        <div className='home-content-wrapper'>
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
                Full-stack web developper
              </h3>
            </div>
            <div className='btn-wrapper' data-aos='fade-up'>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                duration={500}
                className='hire-me-btn'
              >
                Hire Me
              </Link>
              <a href={resume} download className='download-cv-btn'>
                Download CV{' '}
                <IconContext.Provider value={{ className: 'download-icon' }}>
                  <BiDownload />
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <div className='image-content-wrapper' data-aos='zoom-in'>
            <div className='image-wrapper'>
              <img src={barack} alt='' className='home-image' />

              <svg
                version='1.0'
                className='dots-svg'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1280.000000 1280.000000'
                preserveAspectRatio='xMidYMid meet'
              >
                <metadata></metadata>
                <g
                  transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)'
                  fill='#000000'
                  stroke='none'
                >
                  <path
                    d='M500 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M1780 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M3060 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M4340 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M5620 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M6900 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M8180 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M9460 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M10740 12647 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M12020 12647 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M500 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M1780 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M3060 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M4340 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M5620 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M6900 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M8180 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M9460 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M10740 11367 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M12020 11367 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M500 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M1780 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M3060 10087 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M4340 10087 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M5620 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M6900 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M8180 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M9460 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M10740 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M12020 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M500 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M1780 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M3060 8807 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M4340 8807 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M5620 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M6900 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M8180 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M9460 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M10740 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M12020 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M500 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M1780 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M3060 7527 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M4340 7527 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M5620 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M6900 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M8180 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M9460 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M10740 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M12020 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M500 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M1780 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M3060 6247 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M4340 6247 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M5620 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M6900 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M8180 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M9460 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M10740 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M12020 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M500 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M1780 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M3060 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M4340 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M5620 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M6900 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M8180 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M9460 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M10740 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M12020 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M500 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M1780 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M3060 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M4340 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M5620 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M6900 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M8180 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M9460 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M10740 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M12020 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                  />
                  <path
                    d='M500 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495 132z'
                  />
                  <path
                    d='M1780 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M3060 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M4340 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M5620 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M6900 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M8180 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M9460 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M10740 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M12020 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M500 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M1780 1127 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M3060 1127 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 73 249 -101 535 -373 615 -78 23 -182 20 -261
-7z'
                  />
                  <path
                    d='M4340 1127 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 73 249 -101 535 -373 615 -78 23 -182 20 -261
-7z'
                  />
                  <path
                    d='M5620 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M6900 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M8180 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M9460 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M10740 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                  <path
                    d='M12020 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                  />
                </g>
              </svg>
              <div className='play-icon-wrapper'>
                <div className='play-container'>
                  <IconContext.Provider value={{ className: 'icon-play' }}>
                    <FaPlay />
                  </IconContext.Provider>
                </div>
              </div>
              <div className='years-of-experiance'>
                <div className='blur-area'></div>
                <div className='icon-wrapper'>
                  <IconContext.Provider value={{ className: 'computer-icon' }}>
                    <FaLaptopCode />
                  </IconContext.Provider>
                </div>
                <div className='experiance-text'>
                  <h5>Experience</h5>
                  <div className='years-wrapper'>
                    <h2>
                      <IconContext.Provider value={{ className: 'check-icon' }}>
                        <AiOutlineCheck />
                      </IconContext.Provider>
                    </h2>{' '}
                    <span>3+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
