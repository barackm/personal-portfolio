import { useEffect, useState } from "react";
import ProjectCard from "./common/ProjectCard";
import { supabase } from "../utlis/supabase";
import { Category, Project } from "../utlis/types";

const Portfolio = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [fetching, setFetching] = useState(false);
  const [shownTab, setShownTab] = useState<string>("All");

  async function getCategories() {
    const { data: categories = [], error } = await supabase.from("categories").select();
    if (error) {
      console.log("error", error);
      return;
    }

    if (categories!.length > 1) {
      setCategories(categories as any);
    }
  }

  async function getProjects() {
    const { data: projects = [], error } = await supabase.from("projects").select();
    if (error) {
      console.log("error", error);
      return;
    }

    if (projects!.length > 1) {
      setProjects(projects as any);
    }
  }

  useEffect(() => {
    getCategories();
    getProjects();
  }, []);

  const handleHowTab = (tab: string) => {
    setShownTab(tab);
  };

  const formatedCategories = [
    {
      name: "All",
    },
    ...categories,
  ];

  const selectedCategory = categories.find((category) => category.name === shownTab);

  const projectsList: any[] = !selectedCategory
    ? projects
    : projects.filter((project) => project.category_id === selectedCategory.id);

  console.log({ projects, categories });

  return (
    <div className='portfolio-main-container' id='portfolio'>
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
                  ""
                )}
                {formatedCategories.map((category) => (
                  <li key={category.name}>
                    <div
                      onClick={() => handleHowTab(category.name)}
                      className={shownTab === category.name ? "active" : ""}
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
