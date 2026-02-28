import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "../styles/whyChooseUs.css";

const reasons = [
  {
    icon: "verified",
    title: "ISO 17025 Accredited",
    description: "All calibration services traceable to NIST standards with full documentation and certification.",
  },
  {
    icon: "engineering",
    title: "Expert Engineering Support",
    description: "Dedicated application engineers help design test protocols and optimize your validation workflows.",
  },
  {
    icon: "schedule",
    title: "Rapid Deployment",
    description: "Factory acceptance testing, installation, and operator training completed within 2-4 weeks.",
  },
  {
    icon: "update",
    title: "Lifetime Software Updates",
    description: "Continuous firmware improvements, new test standards, and feature enhancements at no extra cost.",
  },
  {
    icon: "handshake",
    title: "Flexible Financing",
    description: "Lease-to-own, rental programs, and multi-year service contracts tailored to your budget.",
  },
  {
    icon: "public",
    title: "Global Service Network",
    description: "24/7 technical support, spare parts inventory, and certified technicians in 40+ countries.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <motion.section
      className="why-choose-us"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.div className="section-header" variants={cardVariants}>
        <h2>Why choose Cytester</h2>
        <p>
          Three decades of materials testing expertise combined with cutting-edge automation and unmatched customer support.
        </p>
      </motion.div>
      <motion.div className="reasons-grid" variants={containerVariants}>
        {reasons.map((reason) => (
          <motion.div
            key={reason.title}
            className="reason-card"
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 28px 56px -24px rgba(87, 214, 255, 0.4)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="material-symbol reason-icon">{reason.icon}</span>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyChooseUs;
