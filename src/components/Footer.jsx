import React from "react";
import "./Footer.css";
import logo from "/logo.png"; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand Section with Logo */}
        <div className="footer__brand">
          <img src={logo} alt="MernPearl Logo" className="footer__logo" />
          <p className="footer__slogan">Building modern web experiences.</p>
        </div>

        {/* Navigation Links */}
        <nav className="footer__nav">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Social Links */}
        <div className="footer__social">
          <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
          <a href="mailto:admin@mernpearl.netlify.app" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} MernPearl. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;