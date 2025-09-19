import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What industries does your SaaS solutions cater to?",
    answer: "We provide scalable SaaS products tailored for finance, healthcare, education, e-commerce, and tech startups, adapting to diverse business needs."
  },
  {
    question: "Can I customize the software to my specific requirements?",
    answer: "Absolutely! We work closely with clients to customize features and integrations, ensuring the product aligns with unique operational workflows."
  },
  {
    question: "How is data security handled in your solutions?",
    answer: "Data security is a top priority. We employ end-to-end encryption, regular audits, and compliance with industry standards such as GDPR and HIPAA."
  },
  {
    question: "Do you offer support and maintenance services post-deployment?",
    answer: "Yes, we provide ongoing support, system updates, and preventive maintenance to ensure your SaaS platform runs smoothly and efficiently."
  },
  {
    question: "What is the typical timeline for deploying a SaaS product?",
    answer: "Deployment timelines vary by project scope but typically range from 3 to 6 months including customization and thorough testing phases."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-section-subtitle">
  Find quick answers to common questions about our SaaS solutions, security, and customization.
</p>
      <div className="faq-list">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className={`faq-item ${openIndex === idx ? "open" : ""}`}
            onClick={() => toggle(idx)}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggle(idx); }}
            role="button"
            aria-expanded={openIndex === idx}
            aria-controls={`faq-answer-${idx}`}
            id={`faq-question-${idx}`}
          >
            <div className="faq-question">
              {item.question}
              <span className={`arrow ${openIndex === idx ? "down" : "right"}`} />
            </div>
            {openIndex === idx && (
              <div className="faq-answer" id={`faq-answer-${idx}`} aria-labelledby={`faq-question-${idx}`}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;