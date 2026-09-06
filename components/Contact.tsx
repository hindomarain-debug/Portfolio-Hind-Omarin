const contactLinks = [
  {
    label: "Email",
    value: "hind.omarin@gmail.com",
    href: "mailto:hind.omarin@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/hindomarin",
    href: "https://github.com/hindomarin",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hindomarin",
    href: "https://linkedin.com/in/hindomarin",
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-heading">Let&apos;s connect</h2>
        <p className="section-intro">
          Feel free to reach out if you&apos;d like to connect or talk about
          an opportunity.
        </p>

        <div className="contact-grid">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="card contact-card"
            >
              <span className="contact-card-label">{link.label}</span>
              <span className="contact-card-value">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
