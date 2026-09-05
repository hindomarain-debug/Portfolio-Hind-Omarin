"use client";

import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLinkClick(href: string) {
    setActiveLink(href);
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => handleLinkClick("#home")}
        >
          H<span className="navbar-logo-o">O</span>
        </a>

        <nav className={`navbar-nav ${menuOpen ? "is-open" : ""}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeLink === link.href ? "is-active" : ""}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="navbar-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
