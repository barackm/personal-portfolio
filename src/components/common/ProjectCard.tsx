import React from "react";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { Project } from "../../utlis/types";

type Props = {
  project: Project;
};

const ProjectCard = (props: Props) => {
  const { project } = props;
  const { source_code_url, description, image_url, live_demo_url, tags, technologies, title, animation } = project;
  const splitTags = tags?.split(",") || [];
  const splitTechnologies = technologies?.split(",") || [];

  console.log({ project });

  return (
    <>
      <div className='project-item-wrapper' data-aos={animation}>
        <div className='project-card-upper-side'>
          <h3 className='project-title'>{title}</h3>
          <p className='project-details'>{description}</p>
          <div className='project-links'>
            <a href={live_demo_url} target='_blank'>
              Live Demo{" "}
              <IconContext.Provider value={{ className: "project-link" }}>
                <FiExternalLink />
              </IconContext.Provider>
            </a>
            <a href={source_code_url} target='_blank'>
              Source code
              <IconContext.Provider value={{ className: "project-link" }}>
                <AiFillGithub />
              </IconContext.Provider>
            </a>
          </div>
          <div className='project-technology-tags'>
            {splitTechnologies.map((techno) => (
              <div key={techno} className='project-tag'>
                {techno}
              </div>
            ))}
          </div>
          {/* tags */}
          <div className='project-tags'>
            {splitTags.map((tag) => (
              <div key={tag} className='project-tag-item'>
                #{tag}
              </div>
            ))}
          </div>
        </div>
        <div className='project-images-preview'>
          <img src={image_url} alt='project' />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
