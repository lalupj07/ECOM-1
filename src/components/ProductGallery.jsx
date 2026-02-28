import { forwardRef, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useShopStore } from "../store/useShopStore.js";
import { formatCurrency } from "../utils/format.js";
import ProductTooltip from "./ProductTooltip.jsx";

const gridVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: { opacity: 1, y: 0, rotateX: 0 },
};

const ProductGallery = forwardRef(function ProductGallery(
  { products, highlightProductId, onHighlightCleared, onAddToCart },
  ref
) {
  const openModal = useShopStore((state) => state.openModal);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = useCallback((product, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const tooltipWidth = 380;
    const x = rect.left + (rect.width / 2) - (tooltipWidth / 2);
    const y = rect.top - 10;
    
    setHoveredProduct(product);
    setTooltipPosition({ x, y });
  }, []);

  const handleMouseMove = useCallback((event) => {
    if (!hoveredProduct) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const tooltipWidth = 380;
    const x = rect.left + (rect.width / 2) - (tooltipWidth / 2);
    const y = rect.top - 10;
    setTooltipPosition({ x, y });
  }, [hoveredProduct]);

  const handleMouseLeave = useCallback(() => {
    setHoveredProduct(null);
  }, []);

  useEffect(() => {
    if (!highlightProductId) return undefined;
    const timeout = setTimeout(() => {
      onHighlightCleared?.();
    }, 2200);
    return () => clearTimeout(timeout);
  }, [highlightProductId, onHighlightCleared]);

  return (
    <>
      <motion.section
        id="collections"
        className="product-grid"
        ref={ref}
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        aria-live="polite"
      >
        {products.map((product) => {
        const isHighlighted = product.id === highlightProductId;
        return (
          <motion.article
            key={product.id}
            className={`product-card${isHighlighted ? " product-card--highlight" : ""}`}
            variants={cardVariants}
            layout
            animate={{
              scale: isHighlighted ? 1.04 : 1,
              boxShadow: isHighlighted
                ? "0 34px 68px -40px rgba(87, 214, 255, 0.75)"
                : "0 18px 38px -28px rgba(8, 12, 22, 0.85)",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
            onMouseEnter={(e) => handleMouseEnter(product, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className="product-image"
              style={{ backgroundImage: `url('${product.image}')` }}
              onClick={() => openModal(product.id)}
              aria-label={`View details for ${product.name}`}
            />
            <div className="product-content">
              <div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>
              </div>
              <div className="product-footer">
                <motion.span className="price" layout>
                  {formatCurrency(product.price)}
                </motion.span>
                <motion.button
                  type="button"
                  className="ghost"
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onAddToCart(product.id)}
                >
                  Add to cart
                </motion.button>
              </div>
            </div>
          </motion.article>
        );
      })}
      </motion.section>
      <AnimatePresence>
        {hoveredProduct && (
          <ProductTooltip
            key={hoveredProduct.id}
            product={hoveredProduct}
            position={tooltipPosition}
          />
        )}
      </AnimatePresence>
    </>
  );
});

ProductGallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      description: PropTypes.string,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      featured: PropTypes.bool,
      launchedAt: PropTypes.string,
    })
  ).isRequired,
  highlightProductId: PropTypes.string,
  onHighlightCleared: PropTypes.func,
  onAddToCart: PropTypes.func.isRequired,
};

ProductGallery.defaultProps = {
  highlightProductId: null,
  onHighlightCleared: undefined,
};

export default ProductGallery;
