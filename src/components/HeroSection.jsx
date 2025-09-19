import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import TechStack from "./TechStack";
import ParticleTextReveal from "./Particle";
import TextType from "./TextType";
import FloatingImg from "./FloatingImg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const cosmosRef = useRef(null);
  const starContainerRef = useRef(null);
  const stars = useRef([]);
  const MotionLink = motion(Link);

  const openBookingPage = () => {
  window.open('/book', '_blank', 'noopener,noreferrer');
};

  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const mouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      spawnStar(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

    function spawnStar(x, y) {
      const star = document.createElement("div");
      star.className = "star-particle";
      star.style.left = x + (Math.random() * 30 - 15) + "px";
      star.style.top = y + (Math.random() * 30 - 15) + "px";
      star.style.opacity = "1";
      star.style.transform = `scale(${(Math.random() * 0.6) + 0.4})`;

      if (starContainerRef.current) {
        starContainerRef.current.appendChild(star);

        stars.current.push({
          element: star,
          x: x,
          y: y,
          velocityX: (Math.random() * 1 - 0.5) * 0.6,
          velocityY: -(Math.random() * 1 + 0.5),
          life: 0,
          maxLife: 80 + Math.random() * 30,
        });
      }
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      if (cosmosRef.current) {
        cosmosRef.current.style.left = `${currentX}px`;
        cosmosRef.current.style.top = `${currentY}px`;
      }

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

        if (star.life >= star.maxLife && starContainerRef.current) {
          starContainerRef.current.removeChild(star.element);
          stars.current.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      stars.current.forEach((star) => {
        if (starContainerRef.current && star.element) {
          starContainerRef.current.removeChild(star.element);
        }
      });
      stars.current = [];
    };
  }, []);

  return (
    <>
      <section id="home" className="hero">
        {/* Cosmic Mouse Glow */}
        {/* <div className="mouse-cosmos" ref={cosmosRef} /> */}

        {/* Star Particles Container */}
        {/* <div className="star-particles" ref={starContainerRef} /> */}

        {/* Liquid overlay */}
        <div className="liquid-overlay" aria-hidden="true" />

        <div className="loader-fullscreen-wrapper">
          <div className="loader-wrapper">
            <div className="loader"></div>
          </div>
        </div>
                <FloatingImg />

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="hero-inner"
          >
            <ParticleTextReveal text="Creating Thoughtful Digital Products" />

            <TextType
              text={[
                " Designing and building scalable",
                " user‑centered solutions for the modern tech stack.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="hero-sub"
            />

<MotionLink
  to="/book"
  aria-label="Navigate to book meeting page"
  className="cta glass-cta"
  initial={{ opacity: 0, y: 8 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
>
  Let’s connect
  <span className="cta-shimmer" aria-hidden="true" />
</MotionLink>
        {/* {showBooking && (
          <div style={{ width: "100%", maxWidth: 600, height: 650, marginTop: 20 }}>
            <Cal
              namespace="intro-call"
              calLink="richard-feynman-t59amh/intro-call"
              config={{ layout: "month_view", theme: "light" }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        )} */}
          </motion.div>
        </div>

        <TechStack />
      </section>
    </>
  );
}