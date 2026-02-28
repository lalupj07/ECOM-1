import { motion } from "framer-motion";
import { useEffect } from "react";
import "../styles/certifications.css";
import "../styles/about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell">
      <motion.section
        className="about-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>About Cytester</h1>
        <p className="lead">
          Three decades of innovation in materials testing and quality assurance solutions for the world's most demanding industries.
        </p>
      </motion.section>

      <motion.section
        className="about-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="about-grid">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 1994, Cytester Technologies began with a simple mission: make precision testing equipment accessible to manufacturers of all sizes. What started as a small engineering firm in San Jose has grown into a global leader in materials testing instrumentation.
            </p>
            <p>
              Today, we serve over 3,000 customers across aerospace, automotive, construction, and research sectors. Our equipment validates everything from aircraft composites to medical device polymers, ensuring safety and compliance worldwide.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>30+</h3>
              <p>Years in business</p>
            </div>
            <div className="stat-card">
              <h3>3,000+</h3>
              <p>Active customers</p>
            </div>
            <div className="stat-card">
              <h3>40+</h3>
              <p>Countries served</p>
            </div>
            <div className="stat-card">
              <h3>ISO 17025</h3>
              <p>Accredited lab</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="ceo-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="ceo-container">
          <div className="ceo-image">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" 
              alt="Dr. Michael Chen, CEO"
            />
            <div className="ceo-badge">CEO & Founder</div>
          </div>
          <div className="ceo-content">
            <h2>Leadership Message</h2>
            <h3>Dr. Michael Chen</h3>
            <p className="ceo-title">Chief Executive Officer & Founder</p>
            <p className="ceo-quote">
              "For over three decades, our commitment has remained unwavering: to deliver testing solutions that don't just meet standards—they define them. Every instrument we build represents our promise to precision, reliability, and innovation."
            </p>
            <p>
              Dr. Chen founded Cytester Technologies in 1994 with a vision to revolutionize materials testing. With a Ph.D. in Mechanical Engineering from MIT and 15 years of experience at leading aerospace companies, he brings deep technical expertise and industry insight to the company.
            </p>
            <p>
              Under his leadership, Cytester has grown from a small startup to a global leader, serving Fortune 500 companies and research institutions worldwide. His focus on customer success and continuous innovation has earned the company numerous industry awards and certifications.
            </p>
            <div className="ceo-credentials">
              <div className="credential">
                <span className="material-symbol">school</span>
                <span>Ph.D. Mechanical Engineering, MIT</span>
              </div>
              <div className="credential">
                <span className="material-symbol">workspace_premium</span>
                <span>30+ Years Industry Experience</span>
              </div>
              <div className="credential">
                <span className="material-symbol">emoji_events</span>
                <span>Industry Innovation Award 2023</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mission-vision-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="mvv-grid">
          <div className="mvv-card">
            <div className="mvv-icon">
              <span className="material-symbol">flag</span>
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower manufacturers and researchers worldwide with precision testing equipment that ensures product quality, safety, and compliance. We're committed to making advanced testing technology accessible, reliable, and backed by exceptional support.
            </p>
          </div>
          <div className="mvv-card">
            <div className="mvv-icon">
              <span className="material-symbol">visibility</span>
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the global standard in materials testing innovation, leading the industry through cutting-edge automation, AI-driven analytics, and sustainable practices. We envision a future where quality assurance is seamless, intelligent, and universally accessible.
            </p>
          </div>
          <div className="mvv-card">
            <div className="mvv-icon">
              <span className="material-symbol">favorite</span>
            </div>
            <h3>Our Values</h3>
            <ul className="values-list">
              <li><strong>Precision First:</strong> Every instrument calibrated to NIST standards</li>
              <li><strong>Customer Success:</strong> 24/7 support and lifetime training</li>
              <li><strong>Innovation:</strong> Continuous R&D investment in automation and AI</li>
              <li><strong>Integrity:</strong> Transparent pricing, honest recommendations</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="location-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <h2>Visit Our Headquarters</h2>
        <div className="location-grid">
          <div className="location-info">
            <h3>Cytester Technologies Inc.</h3>
            <p>2450 Innovation Parkway<br />San Jose, CA 95134<br />United States</p>
            <div className="contact-details">
              <div>
                <strong>Sales:</strong><br />
                +1 (408) 555-TEST<br />
                sales@cytester.com
              </div>
              <div>
                <strong>Support:</strong><br />
                +1 (408) 555-HELP<br />
                support@cytester.com
              </div>
              <div>
                <strong>Hours:</strong><br />
                Mon-Fri: 8:00 AM - 6:00 PM PST<br />
                24/7 Emergency Support
              </div>
            </div>
          </div>
          <div className="map-container">
            <iframe
              title="Cytester Headquarters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.2!2d-121.9!3d37.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI0JzAwLjAiTiAxMjHCsDU0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "var(--radius-md)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="certifications-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <div className="cert-header">
          <h2>Certifications & Compliance</h2>
          <p>Industry-leading standards and certifications ensuring quality, accuracy, and reliability</p>
        </div>
        <div className="cert-grid">
          <motion.div 
            className="cert-card"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="cert-icon-wrapper">
              <div className="cert-sticker">✓</div>
            </div>
            <div className="cert-content">
              <h4>ISO 17025:2017</h4>
              <p>Accredited calibration laboratory</p>
            </div>
            <div className="cert-badge">Verified</div>
          </motion.div>
          <motion.div 
            className="cert-card"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="cert-icon-wrapper">
              <div className="cert-sticker">★</div>
            </div>
            <div className="cert-content">
              <h4>ISO 9001:2015</h4>
              <p>Quality management systems</p>
            </div>
            <div className="cert-badge">Certified</div>
          </motion.div>
          <motion.div 
            className="cert-card"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="cert-icon-wrapper">
              <div className="cert-sticker">🛡</div>
            </div>
            <div className="cert-content">
              <h4>NIST Traceable</h4>
              <p>All calibrations certified</p>
            </div>
            <div className="cert-badge">Traceable</div>
          </motion.div>
          <motion.div 
            className="cert-card"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="cert-icon-wrapper">
              <div className="cert-sticker">🌿</div>
            </div>
            <div className="cert-content">
              <h4>RoHS Compliant</h4>
              <p>Environmental standards</p>
            </div>
            <div className="cert-badge">Compliant</div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
