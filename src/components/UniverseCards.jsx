import React, { useState } from "react";
import "./UniverseCards.css";

export default function UniverseCards() {
  const phases = [
    {
      title: "Discover Define",
      hoverImage: "./design.png",
    },
    {
      title: "Design",
      hoverImage: "./2.png",
    },
    {
      title: "Build",
      hoverImage: "./build.png",
    },
    {
      title: "Iterate and Scale",
      hoverImage: "./scale.png",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="cosmic-bg-section">
      <div className="card" role="list" aria-label="Project phases with images">
        {phases.map(({ title, hoverImage }, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <p
              key={idx}
              role="listitem"
              tabIndex={0}
              aria-label={title}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundImage: isHovered
                  ? `url(${hoverImage})`
                  : "none",
              }}
            >
              {/* <div className="card-image-wrapper">
                <img src={hoverImage} alt={title} />
              </div> */}
              <span>{title}</span>
            </p>
          );
        })}
      </div>
    </section>
  );
}