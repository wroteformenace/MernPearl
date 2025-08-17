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
  { icon: <FaReact /> },
  { icon: <FaNodeJs /> },
  { icon: <SiExpress /> },
  { icon: <FaPython /> },
  { icon: <FaJava /> },
  { icon: <FaHtml5 /> },
  { icon: <FaCss3Alt /> },
  { icon: <FaJs /> },
  { icon: <SiTypescript /> },
  { icon: <SiCplusplus /> },
  { icon: <SiMongodb /> },
  { icon: <FaDatabase /> },
  { icon: <FaDocker /> },
  { icon: <FaAws /> },
  { icon: <FaGitAlt /> },
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
  const baseClass = isTech ? "icon-tile" : "service-tile";

  return (
    <div className="marquee">
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="marquee__group"
          animate={{
            x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
          }}
          transition={{
            duration: direction === "left" ? 30 : 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {items.map((item, idx) => (
            <div key={`${i}-${idx}`} className={baseClass}>
              {isTech ? <span className="icon">{item.icon}</span> : item}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <div
      className="tech-stack-universe-bg"
      aria-label="Technology Stack Floating List"
    >
      {/* Tech row - moves left */}
      <MarqueeRow items={techStack} direction="left" type="tech" />

      {/* Services row - moves right */}
      <MarqueeRow items={services} direction="right" type="service" />
    </div>
  );
}
