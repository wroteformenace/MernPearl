import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import Navbar from "./Navbar";

export default function HeroSection() {
  const cosmosRef = useRef(null);
  const starContainerRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const mouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Spawn stars near cursor on movement
      spawnStar(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

    // Spawn a star particle
    function spawnStar(x, y) {
      const star = document.createElement("div");
      star.className = "star-particle";

      // Position star at cursor, random slight offset
      star.style.left = x + (Math.random() * 30 - 15) + "px";
      star.style.top = y + (Math.random() * 30 - 15) + "px";
      star.style.opacity = "1";
      star.style.transform = `scale(${(Math.random() * 0.6) + 0.4})`;

      starContainerRef.current.appendChild(star);

      stars.current.push({
        element: star,
        x: x,
        y: y,
        velocityX: (Math.random() * 1 - 0.5) * 0.6,
        velocityY: - (Math.random() * 1 + 0.5), // float upwards
        life: 0,
        maxLife: 80 + Math.random() * 30
      });
    }

    // Animate loop for smooth cosmic glow + stars
    const animate = () => {
      // Smooth follow for cosmos glow
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      if (cosmosRef.current) {
        cosmosRef.current.style.left = `${currentX}px`;
        cosmosRef.current.style.top = `${currentY}px`;
      }

      // Animate stars
      for (let i = stars.current.length - 1; i >= 0; i--) {
        const star = stars.current[i];
        star.x += star.velocityX;
        star.y += star.velocityY;
        star.life++;

        const lifeRatio = 1 - star.life / star.maxLife;

        star.element.style.left = star.x + "px";
        star.element.style.top = star.y + "px";
        star.element.style.opacity = lifeRatio;
        star.element.style.transform = `scale(${lifeRatio * 0.7 + 0.3})`;

        if (star.life >= star.maxLife) {
          starContainerRef.current.removeChild(star.element);
          stars.current.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      // Cleanup stars if any remain on unmount
      stars.current.forEach((star) => {
        if (starContainerRef.current && star.element) {
          starContainerRef.current.removeChild(star.element);
        }
      });
      stars.current = [];
    };
  }, []);

  return (
    <section id="home" className="hero">
      {/* Cosmic Mouse Glow */}
      <div className="mouse-cosmos" ref={cosmosRef} />

      {/* Star Particles Container */}
      <div className="star-particles" ref={starContainerRef} />

      {/* Navigation */}
      <div className="navbar-wrap">
        <Navbar />
      </div>

      {/* Liquid overlay */}
      <div className="liquid-overlay" aria-hidden="true" />

      {/* Hero Content */}
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
  );
}

