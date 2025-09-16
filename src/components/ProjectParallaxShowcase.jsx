import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import "./ProjectParallaxShowcase.css";

const projects = [
  {
    id: 1,
    image: "/Desktop4.png",
    title: "AI Helper Platform",
    desc: "An intelligent platform leveraging AI to automate customer support for SaaS businesses.",
    tech: ["React", "Node.js", "AI/ML"],
    url: "#"
  },
  {
    id: 2,
    image: "/Wireframe - 2.png",
    title: "SEO Suite",
    desc: "Glassmorphic dashboard that analyzes and boosts organic traffic using advanced SEO techniques.",
    tech: ["SEO", "Next.js", "Cloud"],
    url: "#"
  },
  {
    id: 3,
    image: "/image 6.png",
    title: "E-Commerce Analytics",
    desc: "A comprehensive analytics dashboard for e-commerce stores to track sales and user behavior.",
    tech: ["React", "D3.js", "GraphQL"],
    url: "#"
  },
  {
    id: 4,
    image: "/Desktop - 5.png",
    title: "Fitness Tracker App",
    desc: "A mobile-friendly app to track workouts, nutrition, and progress with social sharing features.",
    tech: ["React Native", "Firebase", "APIs"],
    url: "#"
  },
  {
    id: 5,
    image: "/Desktop 9.png",
    title: "Cryptocurrency Wallet",
    desc: "Secure wallet app to manage multiple cryptocurrencies with real-time price updates.",
    tech: ["Vue.js", "Node.js", "Blockchain"],
    url: "#"
  },
  {
    id: 6,
    image: "/Desktop1.png",
    title: "Online Learning Platform",
    desc: "Interactive platform for hosting and managing online courses with gamification elements.",
    tech: ["Angular", "TypeScript", "REST API"],
    url: "#"
  },
  {
    id: 7,
    image: "/Desktop11.png",
    title: "Smart Home Control",
    desc: "IoT-based app to control and monitor smart home devices with voice assistant integration.",
    tech: ["React", "AWS IoT", "Python"],
    url: "#"
  }
];

const slideshowCategories = [
  "AI Helper Platform",
  "SEO Tools",
  "Analytics",
  "Fitness",
  "Blockchain",
  "Learning",
  "IoT & Control"
];

const variants = {
  initial: { opacity: 0, y: 60, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 70, damping: 18 } },
  exit: { opacity: 0, y: -40, scale: 0.96, transition: { duration: 0.32 } }
};

const ProjectSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = React.useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.20 });

  const goTo = idx => setCurrent(idx);
  const prevSlide = () => setCurrent((prev) => prev === 0 ? projects.length - 1 : prev - 1);
  const nextSlide = () => setCurrent((prev) => prev === projects.length - 1 ? 0 : prev + 1);
  const project = projects[current];

  return (
    <div className="services-showcase__glass-container" ref={containerRef}>
      <motion.div
        className="project-slideshow__container"
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={{
          initial: { opacity: 0, y: 60 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32,0.72,0.1,1] } }
        }}
      >
        {/* Dynamic Category/Title */}
        <motion.div
          className="project-slideshow__category"
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
          exit={{ opacity: 0, x: -40 }}
        >
          {slideshowCategories[current] || project.title}
        </motion.div>
        <div className="project-slideshow__slide">
          {/* Animate on slide switch */}
          <AnimatePresence mode="wait">
            <motion.div
              className="project-slideshow__desc"
              key={project.id}
              initial={variants.initial}
              animate={variants.animate}
              exit={variants.exit}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="tech-pill" key={t + i}>{t}</span>
                ))}
              </div>
              <a href={project.url} className="project-cta" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              className="project-slideshow__imgwrap"
              key={project.id + "-img"}
              initial={{ opacity: 0, scale: 0.93, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0, transition: { delay: 0.11 } }}
              exit={{ opacity: 0, scale: 0.96, x: -40, transition: { duration: 0.28 } }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bullets/Navigation */}
        <div className="project-slideshow__bullets">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={
                "project-slideshow__bullet" + (idx === current ? " active" : "")
              }
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              tabIndex={0}
            />
          ))}
        </div>
        {/* Prev/next arrows */}
        <button onClick={prevSlide} className="project-slideshow__arrow left" aria-label="Previous slide">‹</button>
        <button onClick={nextSlide} className="project-slideshow__arrow right" aria-label="Next slide">›</button>
      </motion.div>
    </div>
  );
};

export default ProjectSlideshow;