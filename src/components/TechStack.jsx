import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiCplusplus } from "react-icons/si";
import "./TechStack.css";

const techStack = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <FaDatabase />, name: "SQL" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaGitAlt />, name: "Git" },
];

export default function TechStack() {
  return (
    <div className="tech-stack-universe-bg">
      {/* We render TWO rows for perfect seamless looping */}
      <motion.div
        className="cosmic-stack-wrapper"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {/* Duplicate set twice to fill space */}
        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="glass-tile">
            <span className="icon">{tech.icon}</span>
            <span className="label">{tech.name}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="cosmic-stack-wrapper"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
          <div key={`row2-${index}`} className="glass-tile">
            <span className="icon">{tech.icon}</span>
            <span className="label">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

