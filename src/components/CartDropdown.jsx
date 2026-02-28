import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useShopStore } from "../store/useShopStore.js";
import { formatCurrency } from "../utils/format.js";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  }),
};

const CartDropdown = ({ isOpen, onClose }) => {
  const { cart, products, incrementCart, decrementCart, removeFromCart } = useShopStore();

  const cartItems = Object.entries(cart)
    .map(([productId, quantity]) => {
      const product = products.find((p) => p.id === productId);
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-dropdown-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="cart-dropdown"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="cart-dropdown-header">
              <h3>Shopping Cart</h3>
              <button className="close-btn" onClick={onClose} aria-label="Close cart">
                <span className="material-symbol">close</span>
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <span className="material-symbol empty-icon">shopping_cart</span>
                <p>Your cart is empty</p>
                <button className="btn primary" onClick={onClose}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items-list">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="cart-dropdown-item"
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p className="cart-item-price">{formatCurrency(item.price)}</p>
                      </div>
                      <div className="cart-item-actions">
                        <button
                          className="circular-btn"
                          onClick={() => incrementCart(item.id)}
                          aria-label="Increase quantity"
                        >
                          <span className="material-symbol">add</span>
                        </button>
                        <div className="control-divider"></div>
                        <span className="quantity-number">{item.quantity}</span>
                        <div className="control-divider"></div>
                        <button
                          className="circular-btn"
                          onClick={() => decrementCart(item.id)}
                          aria-label="Decrease quantity"
                        >
                          <span className="material-symbol">remove</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="cart-dropdown-footer">
                  <div className="cart-summary">
                    <div className="summary-row">
                      <span>Items ({itemCount})</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                    <div className="summary-row total">
                      <strong>Total</strong>
                      <strong>{formatCurrency(total)}</strong>
                    </div>
                  </div>
                  <div className="cart-actions">
                    <button className="btn ghost" onClick={onClose}>
                      Continue Shopping
                    </button>
                    <button className="btn primary">
                      Checkout
                      <span className="material-symbol">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

CartDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartDropdown;
