import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./TechPortals.css";

const portals = [
  { id: 1, tech: ["React", "Node.js", "MongoDB"] },
  { id: 2, tech: ["Vue", "Express", "Postgres"] },
  { id: 3, tech: ["Angular", "Django", "Redis"] },
  { id: 4, tech: ["Next.js", "Flask", "MySQL"] },
];

export default function TechPortals() {
  return (
    <ParallaxProvider>
      <div className="wrapper">
        <div className="techportals-container">
          {portals.map((portal) => (
            <Parallax
              key={portal.id}
              scale={[1.2, 1]}          // Smooth zoom-in
              opacity={[0, 1]}          // Fade-in
              translateY={[50, 0]}      // Slide-up
              easing="easeOutQuad"
              className="portal-card"
            >
              <div className="portal-inner">
                <img
                  src={`/portal${portal.id}.jpg`}
                  alt={`portal-${portal.id}`}
                  className="portal-image"
                />
                <div className="portal-content">
                  {portal.tech.map((stack, idx) => (
                    <div key={idx} className="stack-item">
                      {stack}
                    </div>
                  ))}
                </div>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </ParallaxProvider>
  );
}