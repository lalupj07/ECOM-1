import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { createPortal } from "react-dom";
import { useShopStore } from "../store/useShopStore.js";
import { formatCurrency } from "../utils/format.js";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.96,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

const ProductModal = ({ productId }) => {
  const { products, addToCart, closeModal } = useShopStore((state) => ({
    products: state.products,
    addToCart: state.addToCart,
    closeModal: state.closeModal,
  }));

  const product = useMemo(() => products.find((item) => item.id === productId), [products, productId]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product.id);
    closeModal();
  };

  return createPortal(
    <motion.div className="modal-shell" role="dialog" aria-modal="true" aria-label={`Details for ${product.name}`} variants={backdropVariants} initial="hidden" animate="visible" exit="exit">
      <motion.div className="modal-content" variants={modalVariants}>
        <button type="button" className="icon-button close" onClick={closeModal} aria-label="Close details">
          <span className="material-symbol">close</span>
        </button>
        <div className="modal-body">
          <motion.div
            className="modal-image"
            style={{ backgroundImage: `url('${product.image}')` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="modal-info">
            <motion.h2 className="modal-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              {product.name}
            </motion.h2>
            <motion.p className="modal-tagline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {product.tagline}
            </motion.p>
            <motion.div className="modal-price" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}>
              {formatCurrency(product.price)}
            </motion.div>
            <motion.p className="modal-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }}>
              {product.description}
            </motion.p>
            <motion.div className="modal-meta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}>
              {product.details.map((detail) => (
                <div key={detail.label}>
                  <strong>{detail.label}</strong>
                  <p style={{ margin: "4px 0 0" }}>{detail.value}</p>
                </div>
              ))}
            </motion.div>
            <motion.button
              type="button"
              className="primary"
              onClick={handleAddToCart}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Add to cart
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

ProductModal.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductModal;
