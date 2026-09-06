export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">Hind Omarin</p>
          <p className="footer-role">Software Development Student</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/hindomarin"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/hindomarin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="footer-copyright">
          &copy; {year} Hind Omarin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
