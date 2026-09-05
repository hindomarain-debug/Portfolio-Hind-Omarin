import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1 className="hero-name">Hind Omarin</h1>
          <h2 className="hero-role">Software Development Student</h2>

          <p className="hero-description">
            I build practical web applications and websites, with experience in
            both software development and real client projects.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <Image
            src="/images/profile.png"
            alt="Portrait of Hind Omarin"
            width={340}
            height={425}
            priority
            className="hero-photo-img"
          />
        </div>
      </div>
    </section>
  );
}
