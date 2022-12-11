import React, { useEffect, useState } from 'react';
import { getProjectCategoriesAsync } from '../api/projectCategories';
import { getProjectsAsync } from '../api/projects';
import ProjectCard from './common/ProjectCard';

const Portfolio = () => {
  const [shownTab, setShownTab] = useState('All');
  const handleHowTab = (tab) => {
    setShownTab(tab);
  };

  const [fetching, setFetching] = useState(false);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProjects = async () => {
    setFetching(true);
    try {
      const { data } = await getProjectsAsync();
      setProjects(data);
    } catch (error) {
    } finally {
      setFetching(false);
    }
  };

  const animations = {
    All: 'fade-up',
    Backend: 'fade-up',
    Frontend: 'fade-up',
    Mobile: 'fade-up',
    'Full Stack': 'fade-up',
  };

  const getCategories = async () => {
    setFetching(true);

    try {
      const { data } = await getProjectCategoriesAsync();
      setCategories(
        data.map((category) => ({
          ...category,
          animation: animations[category.name],
        })),
      );
    } catch (error) {
    } finally {
      setFetching(false);
    }
  };

  const getProjectsToRender = (projects) => {
    if (shownTab === 'All') {
      return projects;
    } else {
      return projects
        .filter((project) => project.category.name === shownTab)
        .map((project) => ({ ...project, animation: animations[shownTab] }));
    }
  };

  useEffect(() => {
    getProjects();
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatedCategories = [
    {
      name: 'All',
    },
    ...categories,
  ];
  const projectsList = getProjectsToRender(projects);

  return (
    <div className='portfolio-main-container' id='portfolio' name='portfolio'>
      <div className='portfolio-wrapper'>
        <div className='portfolio-header'>
          <div className='home-hello-wrapper' data-aos='fade-up'>
            <div className='hello-line'></div>
            <h3 className='hero-hello'>Portfolio</h3>
          </div>
          <div className='portfolio-works-wrapper'>
            <div className='links-wrapper'>
              <h3 data-aos='fade-up'>Some of my best works</h3>
              <ul>
                {fetching ? (
                  <li>
                    <div className='loading-container'>Loading...</div>
                  </li>
                ) : (
                  ''
                )}
                {formatedCategories.map((category) => (
                  <li key={category.name}>
                    <div
                      onClick={() => handleHowTab(category.name)}
                      className={shownTab === category.name ? 'active' : ''}
                    >
                      {category.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='projects-grid-wrapper'>
              {projectsList.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
