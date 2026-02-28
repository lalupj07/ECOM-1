import PropTypes from "prop-types";
import { motion } from "framer-motion";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Overlay = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <motion.div
      className="overlay show"
      role="presentation"
      onClick={onClose}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    />
  );
};

Overlay.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
};

Overlay.defaultProps = {
  isVisible: false,
  onClose: undefined,
};

export default Overlay;
