import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/contactQuote.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="page-shell contact-page">
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Our team is ready to help with your testing equipment needs.</p>
      </motion.section>

      <div className="contact-content">
        <div className="contact-layout">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Contact Information</h2>
            <p className="info-subtitle">Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <span className="material-symbol">call</span>
                </div>
                <div className="detail-content">
                  <h4>Phone</h4>
                  <p>+1 (408) 555-TEST</p>
                  <p>+1 (408) 555-HELP</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <span className="material-symbol">mail</span>
                </div>
                <div className="detail-content">
                  <h4>Email</h4>
                  <p>sales@cytester.com</p>
                  <p>support@cytester.com</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <span className="material-symbol">location_on</span>
                </div>
                <div className="detail-content">
                  <h4>Address</h4>
                  <p>2450 Innovation Parkway</p>
                  <p>San Jose, CA 95134</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <span className="material-symbol">schedule</span>
                </div>
                <div className="detail-content">
                  <h4>Working Hours</h4>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM PST</p>
                  <p>24/7 Emergency Support</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span className="material-symbol">photo_camera</span>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span className="material-symbol">thumb_up</span>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <span className="material-symbol">play_circle</span>
                </a>
                <a href="https://wa.me/14085555555" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <span className="material-symbol">chat</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us more about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn primary submit-btn">
                Send Message
                <span className="material-symbol">send</span>
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="map-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2>Visit Our Headquarters</h2>
          <div className="map-container">
            <iframe
              title="Cytester Headquarters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.2!2d-121.9!3d37.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI0JzAwLjAiTiAxMjHCsDU0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: "16px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
