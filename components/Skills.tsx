const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express.js", "SQL", "NoSQL"],
  },
  {
    title: "CMS / Website Development",
    skills: ["WordPress"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="card skills-card">
              <h3 className="skills-card-title">{group.title}</h3>
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
