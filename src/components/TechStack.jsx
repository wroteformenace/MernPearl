import React, { useState, useCallback } from "react";
import {
  SiReact, SiMongodb, SiNextdotjs, SiNodedotjs, SiTypescript,
  SiTailwindcss, SiGraphql, SiDocker, SiRedux, SiVercel
} from "react-icons/si";
import './TechStack.css';

const techs = [
  { Icon: SiReact, name: "React" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: SiGraphql, name: "GraphQL" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiRedux, name: "Redux" },
  { Icon: SiVercel, name: "Vercel" },
];

export default function CosmicTechStack() {
  const [hovered, setHovered] = useState(-1);

  // Handlers wrapped with useCallback for stable references
  const onMouseEnter = useCallback((idx) => {
    setHovered(idx);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHovered(-1);
  }, []);

  return (
    <div className="tech-stack-universe-bg" aria-label="Our Technology Stack">
      <div className="cosmic-tech-stack-speed" role="list">
        {[...techs, ...techs].map(({ Icon, name }, idx) => (
          <div
            key={`${name}-${idx}`}
            className="tech-item"
            onMouseEnter={() => onMouseEnter(idx)}
            onMouseLeave={onMouseLeave}
            onFocus={() => onMouseEnter(idx)}      // Supports keyboard focus
            onBlur={onMouseLeave}
            tabIndex={0}                           // Keyboard accessible
            role="listitem"
            aria-describedby={`tech-name-${idx}`} // Accessibility: connect icon and name
          >
            <span className="tech-icon-alone" aria-hidden="true">
              <Icon />
            </span>
            <span
              id={`tech-name-${idx}`}
              className={`tech-name-slide ${hovered === idx ? "show" : ""}`}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}