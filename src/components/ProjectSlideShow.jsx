import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import "./ProjectSlideShow.css";

const projects = [
  {
    id: 1,
    image: "/Desktop4.png",
    // title: "AI Helper Platform",
    desc: "An intelligent platform leveraging AI to automate customer support for SaaS businesses.",
    tech: ["React", "Node.js", "AI/ML"],
    url: "#"
  },
  {
    id: 2,
    image: "/sick.png",
    // title: "SEO Suite",
    desc: "Glassmorphic dashboard that analyzes and boosts organic traffic using advanced SEO techniques.",
    tech: ["SEO", "Next.js", "Cloud"],
    url: "#"
  },
  {
    id: 3,
    image: "/image 6.png",
    // title: "E-Commerce Analytics",
    desc: "A comprehensive analytics dashboard for e-commerce stores to track sales and user behavior.",
    tech: ["React", "D3.js", "GraphQL"],
    url: "#"
  },
  {
    id: 4,
    image: "/Desktop - 5.png",
    // title: "Fitness Tracker App",
    desc: "A mobile-friendly app to track workouts, nutrition, and progress with social sharing features.",
    tech: ["React Native", "Firebase", "APIs"],
    url: "#"
  },
  {
    id: 5,
    image: "/Desktop 9.png",
    // title: "Cryptocurrency Wallet",
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
    // title: "Smart Home Control",
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
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const transition = {
  duration: 1.2, // slower, smoother transition
  ease: "easeInOut",
};

const ProjectSlideShow = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.25 });

  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // 5 seconds

    return () => {
      resetTimeout();
    };
  }, [current]);

  const goTo = (idx) => {
    setCurrent(idx);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="services-showcase__glass-container" ref={containerRef}>
      <motion.div
        className="project-slideshow__container"
        initial="enter"
        animate={inView ? "center" : "enter"}
        exit="exit"
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div className="project-slideshow__category" key={current} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.7 }}>
          {/* <div className="project-title">{slideshowCategories[current] || projects[current].title}</div> */}
        </motion.div>
                            <div className="project-title">Work That Speaks for Itself</div>

        <div className="project-slideshow__slide">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[current].id}
              className="project-slideshow__desc"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              style={{ position: "absolute", width: "50%", left: 0 }}
            >
              <h3 className="project-title">{projects[current].title}</h3>
              <p className="project-desc">{projects[current].desc}</p>
              <div className="project-tech">
                {projects[current].tech.map((t, i) => (
                  <span className="tech-pill" key={t + i}>{t}</span>
                ))}
              </div>
              <a href={projects[current].url} className="project-cta" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={projects[current].id + "-img"}
              className="project-slideshow__imgwrap"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ ...transition, delay: 0.2 }}
              style={{ position: "absolute", width: "50%", right: 0 }}
            >
              <img src={projects[current].image} alt={projects[current].title} className="project-image" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="project-slideshow__bullets">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={"project-slideshow__bullet" + (idx === current ? " active" : "")}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              tabIndex={0}
            />
          ))}
        </div>

        <button onClick={prevSlide} className="project-slideshow__arrow left" aria-label="Previous slide">‹</button>
        <button onClick={nextSlide} className="project-slideshow__arrow right" aria-label="Next slide">›</button>
      </motion.div>
    </div>
  );
};

export default ProjectSlideShow;
