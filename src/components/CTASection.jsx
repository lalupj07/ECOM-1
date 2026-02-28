import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3200);
  };

  return (
    <motion.section id="cta" className="cta" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-140px" }}>
      <div className="cta-copy">
        <h2>Schedule a systems demo</h2>
        <p>
          Connect with a Cytester engineer to map your validation roadmap, preview automation scripts, and scope deployment timelines across your lines.
        </p>
      </div>
      <form className="cta-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="ctaEmail">
          Email
        </label>
        <input
          type="email"
          id="ctaEmail"
          placeholder="you@hardwarelab.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <motion.button
          whileTap={{ scale: 0.96 }}
          className="primary"
          type="submit"
        >
          {submitted ? "Demo scheduled" : "Request demo"}
        </motion.button>
      </form>
    </motion.section>
  );
};

export default CTASection;
