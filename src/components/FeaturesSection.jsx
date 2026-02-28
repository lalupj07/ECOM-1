import PropTypes from "prop-types";
import { motion } from "framer-motion";

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesSection = ({ features }) => {
  return (
    <motion.section id="features" className="features" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }}>
      <motion.h2 variants={itemVariants}>Shopping elevated</motion.h2>
      <motion.div className="feature-list" variants={containerVariants}>
        {features.map((feature) => (
          <motion.div key={feature.title} className="feature" variants={itemVariants}>
            <span className="material-symbol">{feature.icon}</span>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

FeaturesSection.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeaturesSection;
