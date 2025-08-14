import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for "sticky elevate" effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Closes mobile menu on link click
  const handleNavClick = () => setOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`navbar-wrap ${scrolled ? "navbar--scrolled" : ""}`}
    >
      <nav className="navbar">
        <a className="brand" href="#home" aria-label="Home">
          {/* Replace with your logo */}
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand"><img src="logo.png" alt="Logo" /></span>
        </a>

        {/* Hamburger Menu Toggle */}
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${open ? "is-open" : ""}`}>
          <li><a href="#home" onClick={handleNavClick}>Home</a></li>
          <li><a href="#why" onClick={handleNavClick}>Why Us?</a></li>
          <li><a href="#services" onClick={handleNavClick}>Services</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}
