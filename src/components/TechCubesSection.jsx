import React from "react";
import "./TechHelix.css";

const technologies = [
  "React", "Node.js", "Python", "Java", "C++",
  "MongoDB", "Docker", "AWS", "Next.js", "TypeScript"
];

export default function TechHelix() {
  return (
    <section className="helix-section">
      <h2 className="helix-title">Tech DNA</h2>
      <div className="helix">
        {technologies.map((tech, i) => (
          <>
            {/* Strand A */}
            <div
              key={`a-${i}`}
              className="helix-node strand-a"
              style={{ "--i": i }}
            >
              {tech}
            </div>
            {/* Strand B (opposite phase) */}
            <div
              key={`b-${i}`}
              className="helix-node strand-b"
              style={{ "--i": i, "--phase": "180deg" }}
            >
              {tech}
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
