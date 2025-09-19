import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactUs.css";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form here (e.g., API call)
    console.log("Contact Form Submitted:", form);
    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <motion.div
      className="contact-page-container"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
    >
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        Fill in the form below and we'll get back to you as soon as possible.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={form.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          autoComplete="off"
        />
        <textarea
          name="message"
          placeholder="Your Message *"
          value={form.message}
          onChange={handleChange}
          rows={6}
          required
        ></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
        {success && <p className="success-msg">Thank you! We will contact you soon.</p>}
      </form>
    </motion.div>
  );
};

export default ContactUs;