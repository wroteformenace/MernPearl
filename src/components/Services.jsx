import React, { useEffect, useRef, useCallback, useState, useMemo } from "react";
import { Globe2, Smartphone, ServerCog, Brush } from "lucide-react"; // replaced with stronger icons
import "./Services.css";

const SERVICES_CONFIG = [
  { 
    id: "web-dev", 
    name: "Web Development", 
    desc: "Fast, scalable websites crafted with precision and performance.", 
    direction: "left", 
    Icon: Globe2,
    delay: 0
  },
  { 
    id: "app-dev", 
    name: "App Development", 
    desc: "Native and cross-platform apps that delight and engage users.", 
    direction: "right", 
    Icon: Smartphone,
    delay: 0.2
  },
  { 
    id: "devops", 
    name: "DevOps", 
    desc: "Automated pipelines, smart scaling, and CI/CD excellence.", 
    direction: "left", 
    Icon: ServerCog,
    delay: 0.4
  },
  { 
    id: "ui-design", 
    name: "UI / UX Design", 
    desc: "Human-centered design with clean, modern aesthetics.", 
    direction: "right", 
    Icon: Brush,
    delay: 0.6
  },
];

const ServiceCard = React.memo(({ service, isVisible, onVisibilityChange }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltTransform, setTiltTransform] = useState("");

  const calculateTilt = useCallback((e) => {
    const card = cardRef.current;
    if (!card || !isHovered) return;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (mouseY / (rect.height / 2)) * -8;
    const rotateY = (mouseX / (rect.width / 2)) * 8;
    setTiltTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(25px)`
    );
  }, [isHovered]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            onVisibilityChange(service.id, true);
          }, service.delay * 1000);
        }
      },
      { threshold: 0.3, rootMargin: "-50px 0px" }
    );
    observer.observe(card);
    return () => observer.unobserve(card);
  }, [service.id, service.delay, isVisible, onVisibilityChange]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltTransform("");
  };

  const serviceUrl = useMemo(() => 
    `/services/${service.name.toLowerCase().replace(/\s+/g, "-")}`,
    [service.name]
  );

  const cardClasses = [
    "service-card",
    `animate-${service.direction}`,
    isVisible && "is-visible",
    isHovered && "is-hovered"
  ].filter(Boolean).join(" ");

  return (
    <article
      ref={cardRef}
      className={cardClasses}
      style={{ transform: tiltTransform, "--animation-delay": `${service.delay}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={isHovered ? (e) => requestAnimationFrame(() => calculateTilt(e)) : null}
      role="region"
      aria-labelledby={`service-${service.id}`}
      tabIndex={0}
    >
      <div className="service-card__icon" role="img" aria-hidden="true">
        <service.Icon size={32} strokeWidth={1.6} />
      </div>
      <div className="service-card__content">
        <h3 id={`service-${service.id}`} className="service-card__title">
          {service.name}
        </h3>
        <p className="service-card__description">{service.desc}</p>
      </div>
      <a 
        href={serviceUrl}
        className="service-card__cta"
        aria-label={`Learn more about ${service.name}`}
      >
        <span>Learn More</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </article>
  );
});
ServiceCard.displayName = "ServiceCard";

const ServicesShowcase = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  const handleVisibilityChange = useCallback((cardId, isVisible) => {
    if (isVisible) {
      setVisibleCards(prev => new Set([...prev, cardId]));
    }
  }, []);

  return (
    <section className="services-showcase" aria-labelledby="services-title">
      <div className="services-showcase__header">
        <h2 id="services-title" className="services-showcase__title">
          Our Services
        </h2>
        <p className="services-showcase__subtitle">
          From concept to launch — we design, build, and scale digital experiences that inspire and perform.
        </p>
      </div>
      <div className="services-showcase__grid">
        {SERVICES_CONFIG.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isVisible={visibleCards.has(service.id)}
            onVisibilityChange={handleVisibilityChange}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesShowcase;