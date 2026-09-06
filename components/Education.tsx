const educationItems = [
  {
    title: "ICT Beheerder",
    school: "MBO Level 4",
    description:
      "Focused on IT systems, technical support, infrastructure and technical problem solving.",
  },
  {
    title: "Associate Degree Software Development",
    school: "Hogeschool Rotterdam",
    description:
      "Focused on software development, web applications, frontend and backend development, APIs and modern development technologies.",
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <div className="education-grid">
          {educationItems.map((item) => (
            <div key={item.title} className="card education-card">
              <h3 className="education-card-title">{item.title}</h3>
              <p className="education-card-school">{item.school}</p>
              <p className="education-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
