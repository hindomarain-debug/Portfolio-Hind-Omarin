import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <div className="project-card-image">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          width={400}
          height={240}
        />
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>

        <div className="tag-list">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="project-card-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-small"
              >
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-small"
              >
                Live Site
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
