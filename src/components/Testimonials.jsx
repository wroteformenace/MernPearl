
import "./Testimonials.css";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";


const testimonials = [
  {
    id: 1,
    quote:
      "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    author: "Samantha Johnson",
    role: "CEO and Co-founder of ABC Company",
    avatarUrl: "/avatars/samantha.jpg",
  },
  {
    id: 2,
    quote:
      "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    author: "Isabella Rodriguez",
    role: "CEO and Co-founder of ABC Company",
    avatarUrl: "/avatars/isabella.jpg",
  },
  {
    id: 3,
    quote:
      "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    author: "Gabrielle Williams",
    role: "CEO and Co-founder of ABC Company",
    avatarUrl: "/avatars/gabrielle.jpg",
  },
  {
    id: 4,
    quote:
      "Their team’s artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    author: "John Peter",
    role: "CEO and Co-founder of ABC Company",
    avatarUrl: "/avatars/john.jpg",
  },
  {
    id: 5,
    quote:
      "From concept to execution, their creativity knows no bounds - a game-changer for our brand’s success.",
    author: "Natalie Martinez",
    role: "CEO and Co-founder of ABC Company",
    avatarUrl: "/avatars/natalie.jpg",
  },
  {
    id: 6,
    quote:
      "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended.",
    author: "Victoria Thompson",
    role: "CEO and Co-founder of ABC Company",
    avatarUrl: "/avatars/victoria.jpg",
  },
];

const TestimonialCard = ({ quote, author, role, avatarUrl }) => {
  return (
    <article className="testimonial-card" tabIndex={0}>
      <div className="testimonial-quote">“</div>
      <p className="testimonial-content">{quote}</p>
      <div className="testimonial-profile">
        <div className="testimonial-avatar">
          <img src={avatarUrl} alt={`Portrait of ${author}`} loading="lazy" />
        </div>
        <div className="testimonial-author-meta">
          <span className="testimonial-author">{author}</span>
          <span className="testimonial-job">{role}</span>
        </div>
      </div>
    </article>
  );
};

const Testimonials = () => {
  const firstRowTestimonials = testimonials;
  const secondRowTestimonials = [...testimonials.slice(3), ...testimonials.slice(0, 3)];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="services-showcase__glass-container" ref={containerRef}>
      <motion.section
        className="testimonials-section"
        aria-labelledby="testimonials-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <h2 id="testimonials-title" className="testimonials-title">
          Partnerships That Made a Difference
        </h2>
        <p className="testimonials-section__subtitle">
          Because client satisfaction is our biggest achievement.
        </p>
        <div className="marquee-row">
          {firstRowTestimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
        <div className="marquee-row reverse">
          {secondRowTestimonials.map((t) => (
            <TestimonialCard key={`rev-${t.id}`} {...t} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Testimonials;