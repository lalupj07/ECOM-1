import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartDropdown from "./CartDropdown.jsx";
import "../styles/cartDropdown.css";
import "../styles/navDropdown.css";

const navLinks = [
  { href: "/", label: "Home", type: "route" },
  { href: "#collections", label: "Products", type: "hash" },
  { href: "/demo", label: "Demo", type: "route" },
  { href: "/contact", label: "Contact Us", type: "route" },
  { href: "/about", label: "About", type: "route" },
  { href: "/quote", label: "Request Quote", type: "route" },
];

const Header = ({ onSearch, onToggleCart, cartCount }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleDropdownItemClick = (href) => {
    setOpenDropdown(null);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="site-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link to="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>
          Cytester
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.label} className="nav-dropdown">
                <button 
                  className="nav-link dropdown-trigger"
                  onClick={() => handleDropdownToggle(link.label)}
                >
                  {link.label}
                  <span className="material-symbol dropdown-icon">
                    {openDropdown === link.label ? "expand_less" : "expand_more"}
                  </span>
                </button>
                {openDropdown === link.label && (
                  <motion.div 
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDropdownItemClick(item.href);
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ) : link.type === "route" ? (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={(event) => {
                event.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
              }}>
                {link.label}
              </a>
            )
          ))}
        </nav>
        <div className="header-actions">
          <motion.button
            type="button"
            className="icon-button cart-button"
            aria-label="Open cart"
            onClick={toggleCart}
            whileTap={{ scale: 0.94 }}
            whileHover={{ scale: 1.05 }}
            animate={cartCount > 0 ? { y: [0, -4, 0] } : {}}
            transition={{ 
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              scale: { duration: 0.2 }
            }}
          >
            <span className="material-symbol">shopping_cart</span>
            {cartCount > 0 && (
              <motion.span 
                className="badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>
        </div>
      </motion.header>
      <CartDropdown isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onToggleCart: PropTypes.func.isRequired,
  cartCount: PropTypes.number.isRequired,
};

const Layout = ({ children, onSearch, onToggleCart, cartCount }) => {
  return (
    <div className="page-shell">
      <Header onSearch={onSearch} onToggleCart={onToggleCart} cartCount={cartCount} />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  onSearch: PropTypes.func.isRequired,
  onToggleCart: PropTypes.func.isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default Layout;
