import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useShopStore } from "../store/useShopStore.js";
import "../styles/contactQuote.css";

const RequestQuote = () => {
  const { products } = useShopStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    productInterest: "",
    quantity: "",
    timeline: "",
    budget: "",
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
    console.log("Quote request submitted:", formData);
    // Handle form submission
  };

  const categories = [
    { id: "mechanical", label: "Mechanical Testing" },
    { id: "materials", label: "Materials Testing" },
    { id: "environmental", label: "Environmental Testing" },
    { id: "safety", label: "Safety & Fire Testing" },
    { id: "analytical", label: "Analytical Testing" },
    { id: "calibration", label: "Calibration Services" },
  ];

  return (
    <div className="page-shell quote-page">
      <motion.section
        className="quote-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Request a Quote</h1>
        <p>Get customized pricing for our industrial testing equipment and solutions</p>
      </motion.section>

      <div className="quote-content">
        <motion.div
          className="quote-benefits"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Why Request a Quote?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="material-symbol">price_check</span>
              <h3>Competitive Pricing</h3>
              <p>Get the best prices tailored to your specific requirements and volume needs</p>
            </div>
            <div className="benefit-card">
              <span className="material-symbol">support_agent</span>
              <h3>Expert Consultation</h3>
              <p>Our team will help you select the right equipment for your testing needs</p>
            </div>
            <div className="benefit-card">
              <span className="material-symbol">local_shipping</span>
              <h3>Custom Solutions</h3>
              <p>Bundled packages, installation, training, and ongoing support options</p>
            </div>
            <div className="benefit-card">
              <span className="material-symbol">schedule</span>
              <h3>Fast Response</h3>
              <p>Receive a detailed quote within 24-48 hours from our sales team</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="quote-form-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Fill Out Your Quote Request</h2>
          <form onSubmit={handleSubmit} className="quote-form">
            <div className="form-section">
              <h3>Contact Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Project Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="industry">Industry *</label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Industry</option>
                    <option value="aerospace">Aerospace</option>
                    <option value="automotive">Automotive</option>
                    <option value="electronics">Electronics</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="research">Research & Development</option>
                    <option value="quality">Quality Control</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="productInterest">Product Category *</label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quantity">Quantity Needed</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="timeline">Timeline *</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">Immediate (1-2 weeks)</option>
                    <option value="short">Short-term (1-3 months)</option>
                    <option value="medium">Medium-term (3-6 months)</option>
                    <option value="long">Long-term (6+ months)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select Budget Range</option>
                  <option value="under50k">Under $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="over500k">Over $500,000</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Requirements or Questions</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your specific testing requirements, application details, or any questions you have..."
              ></textarea>
            </div>

            <button type="submit" className="btn primary submit-btn">
              Submit Quote Request
              <span className="material-symbol">request_quote</span>
            </button>
          </form>
        </motion.div>

        <motion.div
          className="quote-cta"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="cta-content">
            <h3>Need Help Choosing?</h3>
            <p>Our technical sales team is ready to assist you in selecting the right equipment for your specific testing needs.</p>
            <div className="cta-actions">
              <a href="tel:+14085555555" className="btn ghost">
                <span className="material-symbol">call</span>
                Call Sales: +1 (408) 555-TEST
              </a>
              <a href="mailto:sales@cytester.com" className="btn ghost">
                <span className="material-symbol">mail</span>
                Email: sales@cytester.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RequestQuote;
