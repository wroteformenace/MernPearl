import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./ProjectParallaxShowcase.css";

const projects = [
  {
    id: 1,
    image: "/portal1.jpg",
    title: "AI Helper Platform",
    desc: "An intelligent platform leveraging AI to automate customer support for SaaS businesses.",
    tech: ["React", "Node.js", "AI/ML"],
    url: "#"
  },
  {
    id: 2,
    image: "/portal2.jpg",
    title: "SEO Suite",
    desc: "Glassmorphic dashboard that analyzes and boosts organic traffic using advanced SEO techniques.",
    tech: ["SEO", "Next.js", "Cloud"],
    url: "#"
  },
];

const ParallaxProject = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="parallax-project-row"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 80, rotateY: -20 },
        visible: {
          opacity: 1,
          y: 0,
          rotateY: 0,
          transition: { duration: 1, ease: [0.23, 1, 0.32, 1], delay: index * 0.25 }
        }
      }}
      whileHover={{
        scale: 1.04,
        rotateX: 3,
        rotateY: -3,
        filter: "drop-shadow(0px 0px 24px #a86bff88)",
        zIndex: 2
      }}
      tabIndex={0}
      aria-labelledby={`project-name-${project.id}`}
      role="group"
    >
      {/* Animated Image */}
      <motion.div
        className="parallax-project__image-wrap"
        initial={{ clipPath: "inset(0 50% 0 50%)", opacity: 0 }}
        animate={{ clipPath: "inset(0 0% 0 0%)", opacity: 1 }}
        transition={{ duration: 1, delay: index * 0.22, ease: "easeOut" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="parallax-project__image"
          draggable={false}
        />
        {/* Particle glow overlay (decorative) */}
        <div className="parallax-project__img-glow" aria-hidden="true" />
      </motion.div>

      {/* Glass Info Card */}
      <motion.div
        className="parallax-project__info glassmorphic"
        initial={{ opacity: 0, scale: 0.85, rotateX: -8 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.26 + index * 0.18, ease: [0.68, -0.55, 0.265, 1.55] }}
        whileHover={{
          scale: 1.06,
          boxShadow: "0 0 38px #a86bff80",
          borderColor: "#a86bff"
        }}
        tabIndex={0}
        aria-label={`About ${project.title}`}
      >
        <motion.h3
          id={`project-name-${project.id}`}
          className="parallax-project__name"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34 + index * 0.16 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="parallax-project__desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.41 + index * 0.15 }}
        >
          {project.desc}
        </motion.p>

        <div className="parallax-project__tech">
          {project.tech.map((t, i2) => (
            <motion.span
              key={t}
              className="parallax-tech-pill"
              initial={{ opacity: 0, y: 11 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 + i2 * 0.09 + index * 0.12 }}
              whileHover={{
                background: "linear-gradient(90deg, #a86bff 30%, #c9a7ff 70%)",
                color: "#fff",
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        <motion.a
          href={project.url}
          className="parallax-project__cta"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.13,
            textShadow: "0 0 18px #a86bff",
            color: "#fff"
          }}
        >
          View Project →
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const ProjectParallaxShowcase = () => {
  return (
    <section className="parallax-section">
      {/* Cosmic background and headline */}
      <motion.h2
        className="parallax-section__title"
        initial={{ scale: 0.91, opacity: 0, y: -32 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.68, -0.55, 0.265, 1.55] }}
      >
       Projects
      </motion.h2>

      <div className="parallax-section__content">
        {projects.map((project, i) => (
          <ParallaxProject key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectParallaxShowcase;