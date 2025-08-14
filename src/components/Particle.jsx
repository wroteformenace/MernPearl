import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

// Helper: Generate particle positions forming the text
function generateTextParticles(text, fontSize = 60, gap = 6) {
  // Create offscreen canvas for text measurement
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `${fontSize}px Inter, sans-serif`;

  // Measure text size for canvas dimensions
  const textWidth = ctx.measureText(text).width;
  const textHeight = fontSize * 1.2;
    canvas.width = textWidth;
    canvas.height = textHeight;
    ctx.font = `${fontSize}px Inter, sans-serif`; // set after sizing
    ctx.textBaseline = "top"; // ensures y positioning is correct
    ctx.fillStyle = "#fff";
    ctx.fillText(text, 0, 0);


  // Get pixel data
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const particles = [];

  // Scan pixels and pick opaque points spaced by gap
  for (let y = 0; y < canvas.height; y += gap) {
    for (let x = 0; x < canvas.width; x += gap) {
      const index = (y * canvas.width + x) * 4;
      const alpha = pixels.data[index + 3];
      if (alpha > 128) {
        particles.push({ x, y });
      }
    }
  }
  return { particles, width: canvas.width, height: canvas.height };
}

export default function ParticleTextReveal({ text }) {
  const containerRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { particles, width, height } = generateTextParticles(text, 80, 5);
    setParticles(particles);
    setDimensions({ width, height });
  }, [text]);

  return (
    <div
      ref={containerRef}
      className="particle-text-container"
      style={{ width: dimensions.width, height: dimensions.height }}
      aria-label={text}
      role="heading"
      aria-level={1}
    >
      {particles.map(({ x, y }, i) => {
        // Random initial offset for flying animation
        const initialX = x + (Math.random() * 600 - 300);
        const initialY = y + (Math.random() * 400 - 200);

        return (
          <motion.div
            className="particle-dot"
            key={i}
            initial={{ x: initialX, y: initialY, opacity: 0 }}
            animate={{ x, y, opacity: 1 }}
            transition={{
              delay: 0.8 + i * 0.0001,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            style={{ top: 0, left: 0 }}
          />
        );
      })}
    </div>
  );
}