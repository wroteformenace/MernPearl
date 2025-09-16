import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaVuejs, FaAngular,
  FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaDatabase,
  FaTimes, FaChevronDown
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, 
  SiPostgresql, SiRedis, SiGraphql, SiTailwindcss,
  SiFirebase, SiVercel
} from "react-icons/si";
import "./TechStackShowcase.css";

const techStack = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
    category: "Frontend",
    experience: "5+ years",
    projects: 45,
    color: "#61DAFB",
    gradient: "linear-gradient(135deg, #61DAFB 0%, #21D4FD 100%)",
    description: "Modern React development with hooks, context, and performance optimization"
  },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
    experience: "4+ years", 
    projects: 38,
    color: "#339933",
    gradient: "linear-gradient(135deg, #339933 0%, #66BB6A 100%)",
    description: "Scalable server-side applications with Express and microservices"
  },
  {
    id: 3,
    name: "Python",
    icon: <FaPython />,
    category: "Backend",
    experience: "6+ years",
    projects: 52,
    color: "#3776AB",
    gradient: "linear-gradient(135deg, #3776AB 0%, #FFD43B 100%)",
    description: "AI/ML, data analysis, Django/Flask web development"
  },
  {
    id: 4,
    name: "AWS",
    icon: <FaAws />,
    category: "Cloud",
    experience: "3+ years",
    projects: 29,
    color: "#FF9900",
    gradient: "linear-gradient(135deg, #FF9900 0%, #FFAD33 100%)",
    description: "Cloud architecture, serverless, containerization with Docker"
  },
  {
    id: 5,
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Language",
    experience: "3+ years",
    projects: 32,
    color: "#3178C6",
    gradient: "linear-gradient(135deg, #3178C6 0%, #5B9BD5 100%)",
    description: "Type-safe development for large-scale applications"
  },
  {
    id: 6,
    name: "Next.js",
    icon: <SiNextdotjs />,
    category: "Framework",
    experience: "3+ years",
    projects: 28,
    color: "#ffffffff",
    gradient: "linear-gradient(135deg, #a1a1a1ff 0%, #fafafaff 100%)",
    description: "Full-stack React applications with SSR and API routes"
  },
  {
    id: 7,
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Database",
    experience: "4+ years",
    projects: 35,
    color: "#47A248",
    gradient: "linear-gradient(135deg, #47A248 0%, #68C952 100%)",
    description: "NoSQL database design and optimization"
  },
  {
    id: 8,
    name: "GraphQL",
    icon: <SiGraphql />,
    category: "API",
    experience: "2+ years",
    projects: 18,
    color: "#E10098",
    gradient: "linear-gradient(135deg, #E10098 0%, #F037A5 100%)",
    description: "Modern API development with efficient data fetching"
  }
];

const ITEMS_PER_PAGE = 6;

const TechStackShowcase = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [showHireForm, setShowHireForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(techStack.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTechs = techStack.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const openHireForm = (tech) => {
    setSelectedTech(tech);
    setShowHireForm(true);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="services-showcase__glass-container">
      <motion.h2 
        className="tech-showcase__title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tech Stack Expertise
      </motion.h2>
      
      <div className="tech-stack-grid">
        {currentTechs.map((tech, index) => (
          <motion.div
            key={tech.id}
            className="tech-card"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ 
              y: -8, 
              scale: 1.03,
            }}
            onClick={() => openHireForm(tech)}
            style={{ '--tech-color': tech.color, '--tech-gradient': tech.gradient }}
          >
            <div className="tech-card__inner">
              <motion.div 
                className="tech-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {tech.icon}
              </motion.div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-category">{tech.category}</p>
              <div className="tech-stats">
                <span className="experience">{tech.experience}</span>
                <span className="projects">{tech.projects} projects</span>
              </div>
              <p className="tech-description">{tech.description}</p>
              <motion.button 
                className="hire-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Developer
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div 
          className="pagination-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="pagination">
            <button 
              className="pagination-btn prev"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            
            <button 
              className="pagination-btn next"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
          </div>
        </motion.div>
      )}

      <HireDeveloperModal 
        isOpen={showHireForm}
        onClose={() => setShowHireForm(false)}
        selectedTech={selectedTech}
      />
    </div>
  );
};

const HireDeveloperModal = ({ isOpen, onClose, selectedTech }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hire request:", { ...formData, technology: selectedTech?.name });
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      timeline: "",
      budget: "",
      message: ""
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="hire-modal"
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="selected-tech-info">
                <div className="tech-icon-modal" style={{ color: selectedTech?.color }}>
                  {selectedTech?.icon}
                </div>
                <div>
                  <h3>Hire {selectedTech?.name} Developer</h3>
                  <p>{selectedTech?.category} • {selectedTech?.experience}</p>
                </div>
              </div>
              <button className="close-btn" onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="hire-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
              
              <div className="custom-select">
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  required
                >
                  <option value="">Project Type *</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="dashboard">Dashboard/Analytics</option>
                  <option value="other">Other</option>
                </select>
                <FaChevronDown className="select-icon" />
              </div>
              
              <div className="form-row">
                <div className="custom-select">
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                  >
                    <option value="">Timeline</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="6-months">6+ months</option>
                  </select>
                  <FaChevronDown className="select-icon" />
                </div>
                
                <div className="custom-select">
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  >
                    <option value="">Budget Range</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k+">$50k+</option>
                  </select>
                  <FaChevronDown className="select-icon" />
                </div>
              </div>
              
              <textarea
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
              />
              
              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ background: selectedTech?.gradient }}
              >
                Send Hire Request
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TechStackShowcase;