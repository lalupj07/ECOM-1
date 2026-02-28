import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { formatCurrency } from "../utils/format.js";

const tooltipVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.92, 
    y: 10,
    transition: { duration: 0.15 }
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.25, 
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 8,
    transition: { duration: 0.15 }
  }
};

const ProductTooltip = ({ product, position }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="product-tooltip"
        style={{
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translateY(-100%)",
        }}
        variants={tooltipVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="tooltip-content">
          <div className="tooltip-header">
            <h4>{product.name}</h4>
            <span className="tooltip-price">{formatCurrency(product.price)}</span>
          </div>
          <p className="tooltip-tagline">{product.tagline}</p>
          <div className="tooltip-specs">
            {product.details.slice(0, 2).map((detail) => (
              <div key={detail.label} className="tooltip-spec">
                <span className="spec-label">{detail.label}:</span>
                <span className="spec-value">{detail.value}</span>
              </div>
            ))}
          </div>
          <div className="tooltip-footer">
            <span className="tooltip-category">{product.category}</span>
            {product.featured && <span className="tooltip-badge">Featured</span>}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

ProductTooltip.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    featured: PropTypes.bool,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

ProductTooltip.defaultProps = {
  product: null,
};

export default ProductTooltip;
