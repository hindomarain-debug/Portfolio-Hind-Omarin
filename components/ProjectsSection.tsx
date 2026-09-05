import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
