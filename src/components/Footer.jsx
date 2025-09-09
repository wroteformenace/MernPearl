import React from "react";
import "./Footer.css";
import logo from "/logo.png"; // Use your actual logo path or SVG

const NAV_LINKS = [
  { name: "Homepage", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: "fa-facebook-f", label: "Facebook", href: "https://facebook.com" },
  { icon: "fa-x-twitter", label: "Twitter/X", href: "https://twitter.com" },
  { icon: "fa-instagram", label: "Instagram", href: "https://instagram.com" },
  { icon: "fa-linkedin-in", label: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="footer-dark__container">
        {/* Logo and Brand */}
        <div className="footer-dark__brand">
          <img src={logo} alt="MernPearl Logo" className="footer-dark__logo" />
          <span className="footer-dark__brand-name"></span>
        </div>

        {/* Navigation */}
        <nav className="footer-dark__nav" aria-label="Footer Navigation">
          {NAV_LINKS.map(link => (
            <a key={link.href} className="footer-dark__nav-link" href={link.href}>{link.name}</a>
          ))}
        </nav>

        {/* Social */}
        <div className="footer-dark__social" aria-label="Social links">
          {SOCIAL_LINKS.map(social => (
            <a
              key={social.label}
              href={social.href}
              className="footer-dark__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <i className={`fab ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-dark__bottom">
        &copy; {new Date().getFullYear()} MernPearl. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;