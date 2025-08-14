import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div>
    <div className="navbar-wrap">
      <Navbar />
      </div>
    <section id="home" className="hero">
      {/* Liquid overlay (decorative only) */}
      <div className="liquid-overlay" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="hero-inner"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hero-title"
        >
          Creating Thoughtful Digital Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="hero-sub"
        >
          Designing and building scalable, user‑centered solutions for the modern tech stack.
        </motion.p>

        <motion.a
          href="#contact"
          aria-label="Contact us"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="cta glass-cta"
        >
          <span className="cta-shimmer" aria-hidden="true" />
          Let’s connect
        </motion.a>
      </motion.div>
    </section>
    </div>
  );
}
