import { useMemo, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Demo from "./pages/Demo.jsx";
import Contact from "./pages/Contact.jsx";
import RequestQuote from "./pages/RequestQuote.jsx";
import Footer from "./components/Footer.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Overlay from "./components/Overlay.jsx";
import { useShopStore } from "./store/useShopStore.js";

function App() {
  const {
    modalProductId,
    isCartOpen,
    cart,
    toggleCart,
    closeModal,
  } = useShopStore((state) => ({
    modalProductId: state.modalProductId,
    isCartOpen: state.isCartOpen,
    cart: state.cart,
    toggleCart: state.toggleCart,
    closeModal: state.closeModal,
  }));

  const cartCount = useMemo(() => Object.values(cart).reduce((acc, value) => acc + value, 0), [cart]);

  const handleSearch = useCallback(() => {
    const filtersSection = document.querySelector(".filters");
    filtersSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const closeCart = useCallback(() => toggleCart(false), [toggleCart]);

  const handleOverlayClose = useCallback(() => {
    closeModal();
    closeCart();
  }, [closeModal, closeCart]);

  return (
    <BrowserRouter>
      <Layout onSearch={handleSearch} onToggleCart={toggleCart} cartCount={cartCount}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<RequestQuote />} />
        </Routes>
        <Footer />
      </Layout>
      <AnimatePresence>
        {isCartOpen && <CartDrawer key="cart-drawer" onClose={closeCart} />}
      </AnimatePresence>
      <Overlay isVisible={Boolean(modalProductId || isCartOpen)} onClose={handleOverlayClose} />
    </BrowserRouter>
  );
}

export default App;
