import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import { FaGithub, FaLinkedin, FaInstagram, FaCompass } from "react-icons/fa";
import "./Compass.css";

export default function CompassDock() {
  const nodeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/wroteformenace",
      className: "github",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      className: "linkedin",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      url: "https://instagram.com/yourprofile",
      className: "instagram",
    },
  ];

  return (
    <>
      {/* 🌍 Floating Toggle Button */}
      <button
        className="floating-compass-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Hide social compass" : "Show social compass"}
      >
        <FaCompass />
      </button>

      {/* 🧭 Draggable Compass Dock */}
      {isOpen && (
        <Draggable nodeRef={nodeRef}>
          <div
            ref={nodeRef}
            className="social-compass-dock"
            aria-label="Social links dock"
          >
            <div className="compass-circle">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className={`compass-point ${link.className}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
              <span className="compass-arrow" aria-hidden="true" />
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
}
