import React from "react";
import "./Testimonials.css";

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
  // Duplicate the arrays for seamless looping
  const firstRowTestimonials = testimonials;
  const secondRowTestimonials = [...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title" className="testimonials-title">
        Words of praise from others about our presence.
      </h2>
      <p className="testimonials-section__subtitle">
        From concept to launch — we design, build, and perfect remarkable client experiences powered by trust and creativity.
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
    </section>
  );
};

export default Testimonials;