import { motion } from "framer-motion";
import PropTypes from "prop-types";
import HeroScene from "./HeroScene.jsx";

const copyVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const HeroSection = ({ onExplore, onLatestDrop }) => {
  return (
    <section className="hero" id="top">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={copyVariants}
        custom={0}
      >
        <motion.p className="eyebrow" variants={copyVariants} custom={0.1}>
          Integrated test ecosystems
        </motion.p>
        <motion.h1 variants={copyVariants} custom={0.2}>
          Instrumentation engineered for <span>zero-defect electronics.</span>
        </motion.h1>
        <motion.p className="lead" variants={copyVariants} custom={0.35}>
          Cytester deploys turnkey battery, power, RF, and compliance stations that compress validation cycles, boost throughput, and keep audits effortless across every factory.
        </motion.p>
        <motion.div className="hero-actions" variants={copyVariants} custom={0.45}>
          <button className="primary" type="button" onClick={onExplore}>
            Browse test platforms
          </button>
          <button className="ghost" type="button" onClick={onLatestDrop}>
            See newest release
          </button>
        </motion.div>
        <motion.dl className="impact-metrics" variants={copyVariants} custom={0.55}>
          <div>
            <dt>42%</dt>
            <dd>Faster validation cycles</dd>
          </div>
          <div>
            <dt>99.8%</dt>
            <dd>Yield across partner lines</dd>
          </div>
          <div>
            <dt>48h</dt>
            <dd>Global deployment support</dd>
          </div>
        </motion.dl>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <HeroScene className="hero-canvas" />
        <motion.div
          className="hero-overlay-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <h3>SpectraPulse Analyzer Suite</h3>
          <span>New release • Multi-pack EV diagnostics</span>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            Execute 8-channel SOH profiling with automated traceability and cloud-ready reporting.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

HeroSection.propTypes = {
  onExplore: PropTypes.func.isRequired,
  onLatestDrop: PropTypes.func.isRequired,
};

export default HeroSection;
