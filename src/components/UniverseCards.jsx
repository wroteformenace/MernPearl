import React, { useState } from "react";
import "./UniverseCards.css";

export default function UniverseCards() {
  const phases = [
    {
      title: "AI Driven Solutions",
      hoverImage: "/assets/design.png",
    },
    {
      title: "UI/UX Designing",
      hoverImage: "/assets/2.png",
    },
    {
      // ✨ Use <br/> for clean line breaks
      title: (
        <>
          Website & Mobile<br />App Development
        </>
      ),
      hoverImage: "/assets/build.png",
    },
    {
      title: "DevOps",
      hoverImage: "/assets/scale.png",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="cosmic-bg-section">
      {/* SERVICES TITLE */}
      <h2 className="services-title">Services</h2>

      <div className="card" role="list" aria-label="Project phases with images">
        {phases.map(({ title, hoverImage }, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <p
              key={idx}
              role="listitem"
              tabIndex={0}
              aria-label={typeof title === "string" ? title : "Website & Mobile App Development"}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Overlayed hover image */}
              {isHovered && (
                <div className="card-image-overlay">
                  <img src={hoverImage} alt={typeof title === "string" ? title : "Website & Mobile App Development"} />
                </div>
              )}
              <span>{title}</span>
            </p>
          );
        })}
      </div>
    </section>
  );
}