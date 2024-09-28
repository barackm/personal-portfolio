export interface Project {
  _id: string;
  title: string;
  description: string;
  image_url: string;
  liveDemoUrl: string;
  sourceCodeUrl: string;
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
