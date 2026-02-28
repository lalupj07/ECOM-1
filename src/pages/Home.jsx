import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "../components/HeroSection.jsx";
import ProductCategories from "../components/ProductCategories.jsx";
import Filters from "../components/Filters.jsx";
import ProductGallery from "../components/ProductGallery.jsx";
import ClientsSection from "../components/ClientsSection.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import StoryGrid from "../components/StoryGrid.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import CTASection from "../components/CTASection.jsx";
import GoogleReviews from "../components/GoogleReviews.jsx";
import ProductModal from "../components/ProductModal.jsx";
import { stories, featurePoints, products as allProducts } from "../data/products.js";
import { useShopStore } from "../store/useShopStore.js";
import "../styles/productEnhancements.css";

const sortStrategies = {
  featured: (a, b) => {
    if (a.featured === b.featured) {
      return new Date(b.launchedAt) - new Date(a.launchedAt);
    }
    return a.featured ? -1 : 1;
  },
  "price-low": (a, b) => a.price - b.price,
  "price-high": (a, b) => b.price - a.price,
  newest: (a, b) => new Date(b.launchedAt) - new Date(a.launchedAt),
};

function Home() {
  const filtersRef = useRef(null);
  const collectionRef = useRef(null);
  const [highlightProductId, setHighlightProductId] = useState(null);

  const {
    products,
    filter,
    sort,
    setFilter,
    setSort,
    addToCart,
    modalProductId,
  } = useShopStore((state) => ({
    products: state.products,
    filter: state.filter,
    sort: state.sort,
    setFilter: state.setFilter,
    setSort: state.setSort,
    addToCart: state.addToCart,
    modalProductId: state.modalProductId,
  }));

  const filteredProducts = useMemo(() => {
    const scoped = filter === "all" ? products : products.filter((product) => product.category === filter);
    const strategy = sortStrategies[sort] ?? sortStrategies.featured;
    return [...scoped].sort(strategy);
  }, [products, filter, sort]);

  const handleExplore = useCallback(() => {
    collectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleLatestDrop = useCallback(() => {
    setFilter("all");
    setSort("newest");
    const newestProduct = [...allProducts].sort(sortStrategies.newest)[0];
    setHighlightProductId(newestProduct?.id ?? null);
    collectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [setFilter, setSort]);

  return (
    <>
      <HeroSection onExplore={handleExplore} onLatestDrop={handleLatestDrop} />
      
      <motion.div
        className="product-section-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Precision Testing Equipment</h2>
        <p>
          Industry-leading instrumentation for materials testing, quality assurance, and compliance. 
          Trusted by Fortune 500 companies and research institutions worldwide.
        </p>
        <div className="product-stats">
          <div className="product-stat">
            <div className="product-stat-number">24</div>
            <div className="product-stat-label">Products</div>
          </div>
          <div className="product-stat">
            <div className="product-stat-number">6</div>
            <div className="product-stat-label">Categories</div>
          </div>
          <div className="product-stat">
            <div className="product-stat-number">ISO</div>
            <div className="product-stat-label">Certified</div>
          </div>
        </div>
      </motion.div>

      <ProductCategories onCategorySelect={setFilter} selectedCategory={filter} />
      
      <Filters ref={filtersRef} filter={filter} sort={sort} onFilterChange={setFilter} onSortChange={setSort} />
      <ProductGallery
        ref={collectionRef}
        products={filteredProducts}
        highlightProductId={highlightProductId}
        onHighlightCleared={() => setHighlightProductId(null)}
        onAddToCart={addToCart}
      />
      <ClientsSection />
      <WhyChooseUs />
      <StoryGrid stories={stories} />
      <FeaturesSection features={featurePoints} />
      <CTASection />
      <GoogleReviews />
      <AnimatePresence>
        {modalProductId && <ProductModal key="product-modal" productId={modalProductId} />}
      </AnimatePresence>
    </>
  );
}

export default Home;
