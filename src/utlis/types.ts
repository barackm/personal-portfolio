export interface Project {
  _id: string;
  title: string;
  description: string;
  image_url: string;
  live_demo_url: string;
  source_code_url: string;
  category_id: string;
  animation: string;
  tags: string;
  technologies: string;
}

export interface Category {
  id: string;
  name: string;
  animation: string;
}
