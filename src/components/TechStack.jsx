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

const services = [
  "SEO Optimization",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Performance Tuning",
  "API Integration",
  "Cloud Hosting",
  "Cyber Security",
];

function MarqueeRow({ items, direction = "left", type = "tech" }) {
  const isTech = type === "tech";
  const baseClass = isTech ? "glass-tile" : "service-tile";

  return (
    <div className="marquee">
      <motion.div
        className="marquee__group"
        animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{
          duration: direction === "left" ? 30 : 35, // speed control
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((item, idx) => (
          <div key={idx} className={baseClass}>
            {isTech ? (
              <>
                <span className="icon">{item.icon}</span>
                <span className="label">{item.name}</span>
              </>
            ) : (
              <>{item}</>
            )}
          </div>
        ))}
      </motion.div>

      {/* Second copy immediately follows */}
      <motion.div
        className="marquee__group"
        animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{
          duration: direction === "left" ? 30 : 35,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((item, idx) => (
          <div key={`dup-${idx}`} className={baseClass}>
            {isTech ? (
              <>
                <span className="icon">{item.icon}</span>
                <span className="label">{item.name}</span>
              </>
            ) : (
              <>{item}</>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="tech-stack-universe-bg" aria-label="Technology Stack Floating List">
      {/* Tech row - moves left */}
      <MarqueeRow items={techStack} direction="left" type="tech" />

      {/* Services row - moves right */}
      <MarqueeRow items={services} direction="right" type="service" />
    </div>
  );
}