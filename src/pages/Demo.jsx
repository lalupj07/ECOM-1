import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useShopStore } from "../store/useShopStore.js";
import "../styles/demoVideos.css";

const Demo = () => {
  const { products } = useShopStore();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Demo videos data - 3 videos per product
  const demoVideos = products.map((product) => ({
    productId: product.id,
    productName: product.name,
    category: product.category,
    videos: [
      {
        id: 1,
        title: `${product.name} - Setup & Installation`,
        thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        duration: "5:32",
      },
      {
        id: 2,
        title: `${product.name} - Operation Demo`,
        thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        duration: "8:45",
      },
      {
        id: 3,
        title: `${product.name} - Advanced Features`,
        thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        duration: "6:18",
      },
    ],
  }));

  const filteredVideos =
    selectedCategory === "all"
      ? demoVideos
      : demoVideos.filter((item) => item.category === selectedCategory);

  const categories = [
    { id: "all", label: "All Machines" },
    { id: "mechanical", label: "Mechanical Testing" },
    { id: "materials", label: "Materials Testing" },
    { id: "environmental", label: "Environmental" },
    { id: "safety", label: "Safety & Fire" },
    { id: "analytical", label: "Analytical" },
    { id: "calibration", label: "Calibration" },
  ];

  return (
    <div className="page-shell">
      <section className="demo-videos-section">
        <motion.div
          className="demo-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Product Demo Videos</h2>
          <p>Watch comprehensive demonstrations of our testing equipment in action</p>
        </motion.div>

        <div className="demo-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="demo-products-grid">
          {filteredVideos.map((product, index) => (
            <motion.div
              key={product.productId}
              className="demo-product-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="product-name">{product.productName}</h3>
              <div className="video-thumbnails">
                {product.videos.map((video) => (
                  <motion.a
                    key={video.id}
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-card"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="thumbnail-wrapper">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="play-overlay">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="duration">{video.duration}</span>
                    </div>
                    <div className="video-info">
                      <h4>{video.title}</h4>
                      <div className="video-meta">
                        <span className="material-symbol">play_circle</span>
                        <span>Watch Demo</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Demo;
