import Image from "next/image";

const responsibilities = [
  "Understanding client requirements",
  "Building and customizing WordPress websites",
  "Managing website content",
  "Responsive design",
  "Making changes based on client feedback",
  "Delivering finished websites for real use",
];

const clientProjects = [
  {
    name: "Client Project 1 (name to be added)",
    description: "Short project description to be added.",
    role: "WordPress Developer",
    liveUrl: undefined as string | undefined,
  },
  {
    name: "Client Project 2 (name to be added)",
    description: "Short project description to be added.",
    role: "WordPress Developer",
    liveUrl: undefined as string | undefined,
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-heading">Experience</h2>

        <div className="experience-intro">
          <h3 className="experience-title">WordPress Website Development</h3>
          <p className="section-intro">
            I have built two WordPress websites for real clients. This
            experience included:
          </p>
          <ul className="experience-list">
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="projects-grid">
          {clientProjects.map((client) => (
            <article key={client.name} className="card project-card">
              <div className="project-card-image">
                <Image
                  src="/images/website-placeholder.svg"
                  alt={`${client.name} screenshot placeholder`}
                  width={400}
                  height={240}
                />
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{client.name}</h3>
                <p className="project-card-description">{client.description}</p>
                <p className="experience-role">Role: {client.role}</p>

                <div className="tag-list">
                  <span className="tag">WordPress</span>
                </div>

                {client.liveUrl && (
                  <div className="project-card-links">
                    <a
                      href={client.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-small"
                    >
                      Live Site
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
