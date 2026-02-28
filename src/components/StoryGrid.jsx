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
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const StoryGrid = ({ stories }) => {
  return (
    <motion.section id="stories" className="story-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-140px" }}>
      {stories.map((story) => (
        <motion.article key={story.title} className="story-card" variants={cardVariants}>
          <span className="story-tag">{story.tag}</span>
          <h3>{story.title}</h3>
          <p>{story.copy}</p>
          <a href="#" className="story-link">
            {story.cta}
          </a>
        </motion.article>
      ))}
    </motion.section>
  );
};

StoryGrid.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
      cta: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StoryGrid;
