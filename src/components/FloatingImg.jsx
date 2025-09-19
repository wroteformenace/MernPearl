// FloatingImages.jsx
import React from "react";
import "./FloatingImg.css";

const images = [
  { src: "/google-developer.png", alt: "Google Logo" },
  { src: "/undraw_date.svg", alt: "iOS Icon" },
  { src: "/undraw_web-design.svg", alt: "Web Developer Icon" },
  { src: "/undraw_server.svg", alt: "AI Icon" },
  { src: "/undraw_ideas.svg", alt: "SEO Icon" },
  { src: "/app-store.png", alt: "App Developer Icon" },
];

// Utility to generate random values within a range
const randomInRange = (min, max) => Math.random() * (max - min) + min;

export default function FloatingImages() {
  return (
    <>
      {images.map(({ src, alt }, index) => {
        let style = {
          position: "fixed",
          width: `${randomInRange(60, 100)}px`,
          animationDuration: `${randomInRange(4, 7)}s`,
          animationDelay: `${index * 1000 + randomInRange(0, 1000)}ms`,
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
        };

        if (alt === "pp Developer Icon") {
          // Center position
          style.left = "50wh";
          style.top = "50vh";
          style.transform = "translate(-50%, -50%)"; // center align
          style.animationDelay = "0ms"; // optional: no delay on center image
        } else if (alt === "oogle Logo") {
          // Bottom left or right just aside center horizontally
          const side = Math.random() < 0.5 ? "left" : "right";
          style[side] = "40vw";
          style.top = "70vh";
          style.width = "80px";
          style.animationDelay = "500ms";
          // No transform needed as fixed with left/right positioning
        } else {
          // Others float randomly on left or right side near center height
          const side = Math.random() < 0.5 ? "left" : "right";
          style[side] = `${randomInRange(5, 20)}vw`;
          style.top = `${randomInRange(30, 70)}vh`;
        }

        return (
          <img
            key={index}
            src={src}
            alt={alt}
            className="floating-image-natural"
            style={style}
          />
        );
      })}
    </>
  );
}