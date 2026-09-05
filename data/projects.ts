export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Guess My Number",
    description:
      "A simple interactive JavaScript game where the user tries to guess a randomly generated number.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/placeholder.svg",
  },
  {
    title: "Pig Game",
    description:
      "An interactive dice game built with JavaScript, focused on game logic, DOM manipulation and user interaction.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/placeholder.svg",
  },
  {
    title: "MJ Burger",
    description:
      "A responsive burger website created to present a modern food brand with a clean and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/placeholder.svg",
  },
  {
    title: "Graduation Projects PWA",
    description:
      "A Progressive Web App created for students to browse and work with graduation projects.",
    technologies: ["React", "TypeScript", "FastAPI", "PWA", "CSS"],
    image: "/images/projects/placeholder.svg",
  },
  {
    title: "School Platform",
    description:
      "A university web application project focused on creating a digital platform for students and school-related functionality.",
    technologies: ["Tech stack to be confirmed"],
    image: "/images/projects/placeholder.svg",
  },
];
