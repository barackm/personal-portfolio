import React, { Component } from 'react'
import { IconContext } from 'react-icons'
import {BiDownload} from 'react-icons/bi'
import {BsCheckCircle} from 'react-icons/bs'
import project from '../assets/images/project1.png'

export default class About extends Component {
    render() {
        return (
            <div className="about-page-main-container">
                <div className="right-area-main-container">
                        <div className="home-hello-wrapper ">
                            <div className="hello-line"></div>
                            <h3 className="hero-hello">About me</h3>
                        </div>
                        <h2 className="slogan">Hi, Here I am<br /> To help your next project</h2>

                        <p className="about-work">I'm Baraka Mukelenga a software developer specialized in different technologies ,Building web applications and beautiful websites for companies. Love digging into hard problems, learning new languages and technologies.</p>

                        <div className="about-work-details-wrapper">
                            <div className="work-about-item-wrapper">
                                <div className="check-icon">
                                <IconContext.Provider value={{className: "check-list-icon"}}>
                                    <BsCheckCircle />
                                </IconContext.Provider>
                                </div>
                                <h3>Problem solving</h3>
                            </div>
                            <div className="work-about-item-wrapper">
                                <div className="check-icon">
                                <IconContext.Provider value={{className: "check-list-icon"}}>
                                    <BsCheckCircle />
                                </IconContext.Provider>
                                </div>
                                <h3>Problem solving</h3>
                            </div>
                            <div className="work-about-item-wrapper">
                                <div className="check-icon">
                                <IconContext.Provider value={{className: "check-list-icon"}}>
                                    <BsCheckCircle />
                                </IconContext.Provider>
                                </div>
                                <h3>Problem solving</h3>
                            </div>
                            <div className="work-about-item-wrapper">
                                <div className="check-icon">
                                <IconContext.Provider value={{className: "check-list-icon"}}>
                                    <BsCheckCircle />
                                </IconContext.Provider>
                                </div>
                                <h3>Problem solving</h3>
                            </div>
                        </div>
                        <div className="btn-wrapper">
                            <a href="#home" className="hire-me-btn">My portfolio</a>
                            <a href="#home" className="download-cv-btn">Download CV <IconContext.Provider value={{className: "download-icon"}}>
                                <BiDownload />
                            </IconContext.Provider>
                            </a>
                        </div>
                    

                </div>
                <div className="right-about-page-area">
                    <div className="image-container">
                        <img src={project} alt="" className="project-about-img" />
                    </div>
                </div>
            </div>
        )
    }
}
