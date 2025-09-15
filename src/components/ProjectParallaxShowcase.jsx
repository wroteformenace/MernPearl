// import React, { useRef, useEffect } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import "./ProjectParallaxShowcase.css";

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

// const ParallaxProject = ({ project, index }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { amount: 0.25, once: true });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [inView, controls]);

//   return (
//     <motion.div
//       ref={ref}
//       className="parallax-project-row"
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 60, scale: 0.97 },
//         visible: { opacity: 1, y: 0, scale: 1 }
//       }}
//       transition={{
//         duration: 0.9,
//         ease: [0.25, 0.1, 0.25, 1],
//         delay: index * 0.14
//       }}
//       role="group"
//       aria-labelledby={`project-title-${project.id}`}
//     >
//       <motion.div
//         className="project-container"
//         animate={{
//           y: [0, -8, 0], // gentle float
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//       >
//         {/* Image Section */}
//         <motion.div
//           className="project-image-container"
//           aria-hidden="true"
//           whileHover={{ scale: 1.05, rotate: 1 }}
//           transition={{ type: "spring", stiffness: 180, damping: 14 }}
//         >
//           <img
//             src={project.image}
//             alt={project.title}
//             className="project-image"
//             draggable={false}
//           />
//         </motion.div>

//         {/* Info Section */}
//         <motion.div
//           className="project-info glassmorphic"
//           aria-label={`Details about ${project.title}`}
//           initial={{ opacity: 0, x: 50 }}
//           animate={controls}
//           variants={{
//             visible: { opacity: 1, x: 0 }
//           }}
//           transition={{
//             duration: 0.7,
//             delay: index * 0.2 + 0.2,
//             ease: [0.25, 0.1, 0.25, 1]
//           }}
//         >
//           <h3 id={`project-title-${project.id}`} className="project-title">
//             {project.title}
//           </h3>
//           <p className="project-desc">{project.desc}</p>
//           <div
//             className="project-tech"
//             aria-label="Technologies used (decorative only)"
//           >
//             {project.tech.map((tech, idx) => (
//               <span key={tech + idx} className="tech-pill" aria-hidden="true">
//                 {tech}
//               </span>
//             ))}
//           </div>
//           <a
//             href={project.url}
//             className="project-cta"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={`View project: ${project.title}`}
//           >
//             View Project →
//           </a>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const ProjectParallaxShowcase = () => (
//   <div className="services-showcase__glass-container">
//   <section className="parallax-section" aria-label="Projects Showcase Section">
//     <motion.h2
//       className="parallax-section__title"
//       initial={{ scale: 0.95, opacity: 0, y: -28 }}
//       animate={{ scale: 1, opacity: 1, y: 0 }}
//       transition={{ duration: 0.9, ease: [0.44, 0.09, 0.41, 0.99] }}
//     >
//       Projects
//     </motion.h2>
//     <div className="parallax-section__content">
//       {projects.map((project, i) => (
//         <ParallaxProject key={project.id} project={project} index={i} />
//       ))}
//     </div>
//   </section>
//   </div>
// );

// export default ProjectParallaxShowcase;

import React, { useState } from "react";
import "./ProjectParallaxShowcase.css";


const slideshowCategories = [
  "AI Helper Platform",
  "SEO Tools",
  "Analytics",
  "Fitness",
  "Blockchain",
  "Learning",
  "IoT & Control"
];

const ProjectSlideshow = () => {
  const [current, setCurrent] = useState(0);

  // Handler for next/prev
  const goTo = idx => setCurrent(idx);
  const prevSlide = () => setCurrent((prev) => prev === 0 ? projects.length - 1 : prev - 1);
  const nextSlide = () => setCurrent((prev) => prev === projects.length - 1 ? 0 : prev + 1);

  const project = projects[current];

  return (
    <div className="services-showcase__glass-container">
    <div className="project-slideshow__container">
      {/* Dynamic Category/Title */}
      <div className="project-slideshow__category">
        {slideshowCategories[current] || project.title}
      </div>
      <div className="project-slideshow__slide">
        {/* Description (left) */}
        <div className="project-slideshow__desc">
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
        </div>
        {/* Image (right) */}
        <div className="project-slideshow__imgwrap">
          <img src={project.image} alt={project.title} className="project-image" />
        </div>
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
          />
        ))}
      </div>
      {/* Optional prev/next: */}
      <button onClick={prevSlide} className="project-slideshow__arrow left" aria-label="Previous slide">‹</button>
      <button onClick={nextSlide} className="project-slideshow__arrow right" aria-label="Next slide">›</button>
    </div>
    </div>
  );
};

export default ProjectSlideshow;