import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useShopStore } from "../store/useShopStore.js";
import { formatCurrency } from "../utils/format.js";

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const CartDrawer = ({ onClose }) => {
  const { getCartItems, updateCartQuantity, removeFromCart, toggleCart } = useShopStore((state) => ({
    getCartItems: state.getCartItems,
    updateCartQuantity: state.updateCartQuantity,
    removeFromCart: state.removeFromCart,
    toggleCart: state.toggleCart,
  }));

  const items = getCartItems();
  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [items]
  );

  const quantityHandlers = {
    increase: (productId, quantity) => updateCartQuantity(productId, quantity + 1),
    decrease: (productId, quantity) => updateCartQuantity(productId, quantity - 1),
  };

  const handleClose = () => {
    toggleCart(false);
    onClose?.();
  };

  return createPortal(
    <motion.aside className="cart-drawer" variants={drawerVariants} initial="hidden" animate="visible" exit="exit" aria-label="Shopping cart">
      <div className="cart-header">
        <h2>Your cart</h2>
        <button type="button" className="icon-button close" aria-label="Close cart" onClick={handleClose}>
          <span className="material-symbol">close</span>
        </button>
      </div>
      <div className="cart-body">
        {items.length === 0 ? (
          <p style={{ color: "var(--text-muted)" }}>Your cart is still empty. Discover something remarkable.</p>
        ) : (
          items.map(({ product, quantity }) => (
            <div key={product.id} className="cart-item" data-id={product.id}>
              <div className="cart-item-thumb" style={{ backgroundImage: `url('${product.image}')` }} />
              <div className="cart-item-info">
                <p className="cart-item-title">{product.name}</p>
                <span className="cart-item-meta">{product.tagline}</span>
              </div>
              <div className="cart-item-actions">
                <span>{formatCurrency(product.price * quantity)}</span>
                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => quantityHandlers.decrease(product.id, quantity)}
                    aria-label="Decrease quantity"
                  >
                    <span className="material-symbol">remove</span>
                  </button>
                  <span aria-live="polite">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => quantityHandlers.increase(product.id, quantity)}
                    aria-label="Increase quantity"
                  >
                    <span className="material-symbol">add</span>
                  </button>
                </div>
                <button type="button" className="ghost" onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-summary">
          <span>Subtotal</span>
          <strong>{formatCurrency(subtotal)}</strong>
        </div>
        <motion.button type="button" className="primary" whileTap={{ scale: 0.95 }}>
          Checkout
        </motion.button>
        <p className="fine-print">Secure checkout powered by NovaShield™</p>
      </div>
    </motion.aside>,
    document.body
  );
};

CartDrawer.propTypes = {
  onClose: PropTypes.func,
};

CartDrawer.defaultProps = {
  onClose: undefined,
};

export default CartDrawer;
