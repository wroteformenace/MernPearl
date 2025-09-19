
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaVuejs,
  FaAngular,
  FaJs,
  FaHtml5,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import "./TechStackShowcase.css";

const techStack = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
    category: "Frontend",
    color: "white",
    gradient: "linear-gradient(135deg, #61DAFB 0%, #21D4FD 100%)",
    description:
      "Modern React development with hooks, context, and performance optimization",
  },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
    color: "white",
    gradient: "linear-gradient(135deg, #339933 0%, #66BB6A 100%)",
    description: "Scalable server-side applications with Express and microservices",
  },
  {
    id: 3,
    name: "Python",
    icon: <FaPython />,
    category: "Backend",
    color: "white",
    gradient: "linear-gradient(135deg, #aedbffff 0%, #007be0ff 100%)",
    description: "AI/ML, data analysis, Django/Flask web development",
  },
  {
    id: 4,
    name: "AWS",
    icon: <FaAws />,
    category: "Cloud",
    color: "white",
    gradient: "linear-gradient(135deg, #FF9900 0%, #FFAD33 100%)",
    description: "Cloud architecture, serverless, containerization",
  },
  {
    id: 5,
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Language",
    color: "white",
    gradient: "linear-gradient(135deg, #3176C6 0%, #5B9BD5 100%)",
    description: "Type-safe development for large-scale applications",
  },
  {
    id: 6,
    name: "Next.js",
    icon: <SiNextdotjs />,
    category: "Framework",
    color: "white",
    gradient: "linear-gradient(135deg, #a1a1a1 0%, #fafafa 100%)",
    description: "Full stack modern React framework with SSR",
  },
  {
    id: 7,
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Database",
    color: "white",
    gradient: "linear-gradient(135deg, #47A248 0%, #68C952 100%)",
    description: "NoSQL database design and optimization",
  },
  {
    id: 8,
    name: "GraphQL",
    icon: <SiGraphql />,
    category: "API",
    color: "white",
    gradient: "linear-gradient(135deg, #E10098 0%, #F037A5 100%)",
    description: "Modern API development with efficient data fetching",
  },
];

const TechStackShowcase = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [showHireModal, setShowHireModal] = useState(false);
  const [showLearnModal, setShowLearnModal] = useState(false);

  const openHireForm = (tech) => {
    setSelectedTech(tech);
    setShowHireModal(true);
    setShowLearnModal(false);
  };

  const openLearnModal = (tech) => {
    setSelectedTech(tech);
    setShowLearnModal(true);
    setShowHireModal(false);
  };

  return (
    <div className="services-showcas__glass-container">
      <div className="services__glass-container">
        <motion.h2
          className="tech-showcase__title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
The Tech We Trust
        </motion.h2>

        <div className="tech-stack">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.id}
              className="tech-card"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              style={{ "--tech-color": tech.color, "--tech-gradient": tech.gradient }}
            >
              <div className="tech-card__inner">
                <motion.div
                  className="tech-icon"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-category">{tech.category}</p>
                <p className="tech-description">{tech.description}</p>
                <div className="tech-card-actions">
                  <button className="learn-btn" onClick={() => openLearnModal(tech)}>
                    Learn More
                  </button>
                  <button className="hire-btn" onClick={() => openHireForm(tech)}>
                    Hire Developer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showHireModal && selectedTech && (
            <ModalHireDeveloper tech={selectedTech} closeModal={() => setShowHireModal(false)} />
          )}
          {showLearnModal && selectedTech && (
            <ModalLearnMore
              tech={selectedTech}
              closeModal={() => setShowLearnModal(false)}
              openHireForm={() => openHireForm(selectedTech)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ModalHireDeveloper = ({ tech, closeModal }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    experienceRange: "",
    timeline: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hiring request:", { ...form, technology: tech.name });
    setForm({
      name: "",
      email: "",
      company: "",
      projectType: "",
      experienceRange: "",
      timeline: "",
      budget: "",
      message: "",
    });
    closeModal();
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
      tabIndex={-1}
    >
      <motion.div
        className="modal-hire"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hire-modal-title"
      >
        <header className="modal-header">
          <div className="selected-tech-info">
            <div className="tech-icon-modal" style={{ color: tech.color }}>
              {tech.icon}
            </div>
            <div>
              <h2 id="hire-modal-title">Hire {tech.name} Developer</h2>
              <p>{tech.category} Technology</p>
            </div>
          </div>
          <button className="close-btn" onClick={closeModal} aria-label="Close Modal">
            <FaTimes />
          </button>
        </header>

<div className="modal-form-container">
        <form className="hire-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            autoComplete="organization"
          />
          <div className="form-row">
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              required
              aria-label="Project Type"
            >
              <option value="">Select Project Type</option>
              <option value="web-app">Web Application</option>
              <option value="mobile-app">Mobile App</option>
              <option value="ecommerce">E-commerce</option>
              <option value="dashboard">Dashboard / Analytics</option>
              <option value="other">Other</option>
            </select>
            <select
              name="experienceRange"
              value={form.experienceRange}
              onChange={handleChange}
              required
              aria-label="Experience Range"
            >
              <option value="">Select Experience</option>
              <option value="0-2">0 - 2 years</option>
              <option value="2-4">2 - 4 years</option>
              <option value="5+">5+ years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            aria-label="Timeline"
          >
            <option value="">Select Timeline</option>
            <option value="1-2-weeks">1-2 Weeks</option>
            <option value="1-month">1 Month</option>
            <option value="2-3-months">2-3 Months</option>
            <option value="6-months">6+ Months</option>
          </select>
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            aria-label="Budget Range"
          >
            <option value="">Select Budget</option>
            <option value="5k-10k">$5K - $10K</option>
            <option value="10k-25k">$10K - $25K</option>
            <option value="25k-50k">$25K - $50K</option>
            <option value="50k+">$50K+</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project requirements..."
            value={form.message}
            onChange={handleChange}
            rows={4}
          />

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ background: tech.gradient }}
          >
            Send Hire Request
          </motion.button>
        </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Learn More Modal
const ModalLearnMore = ({ tech, closeModal, openHireForm }) => (
  <motion.div
    className="modal-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={closeModal}
    tabIndex={-1}
  >
    <motion.div
      className="modal-learn"
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.85, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="learn-modal-title"
    >
      <header className="modal-header">
        <div className="selected-tech-info">
          <div className="tech-icon-modal" style={{ color: tech.color }}>
            {tech.icon}
          </div>
          <div>
            <h2 id="learn-modal-title">{tech.name} Overview</h2>
            <p>{tech.category} Technology</p>
          </div>
        </div>
        <button className="close-btn" onClick={closeModal} aria-label="Close Modal">
          <FaTimes />
        </button>
      </header>
      <div className="tech-details">
        <p><strong>Description:</strong> {tech.description}</p>
        {/* Example placeholders */}
        <p><strong>Popular Uses:</strong> Used in SPA, SSR, complex interfaces, etc.</p>
        <p><strong>Key Features:</strong> Fast, component based, scalable, large ecosystem.</p>
      </div>
      <div className="modal-actions">
        <button className="hire-btn" onClick={openHireForm}>Hire Developer</button>
      </div>
    </motion.div>
  </motion.div>
);

export default TechStackShowcase;