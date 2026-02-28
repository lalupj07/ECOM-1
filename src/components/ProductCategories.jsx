import { motion } from "framer-motion";
import PropTypes from "prop-types";

const categories = [
  {
    id: "mechanical",
    name: "Mechanical Testing",
    description: "Universal testing machines, hardness testers, and impact equipment",
    icon: "engineering",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: "materials",
    name: "Materials Testing",
    description: "Compression, tensile, and flexural testing systems",
    icon: "science",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: "environmental",
    name: "Environmental",
    description: "Temperature, humidity, and climate chambers",
    icon: "thermostat",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: "safety",
    name: "Safety & Fire",
    description: "Flame resistance and safety compliance testing",
    icon: "local_fire_department",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    id: "analytical",
    name: "Analytical",
    description: "Precision measurement and analysis instruments",
    icon: "analytics",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  },
  {
    id: "calibration",
    name: "Calibration",
    description: "NIST-traceable calibration equipment and services",
    icon: "tune",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
];

const ProductCategories = ({ onCategorySelect, selectedCategory }) => {
  return (
    <section className="categories-section">
      <motion.div
        className="categories-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Product Categories</h2>
        <p>Explore our comprehensive range of precision testing equipment</p>
      </motion.div>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            className={`category-card ${selectedCategory === category.id ? "active" : ""}`}
            onClick={() => onCategorySelect(category.id)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="category-icon" style={{ background: category.gradient }}>
              <span className="material-symbol">{category.icon}</span>
            </div>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <div className="category-arrow">
              <span className="material-symbol">arrow_forward</span>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

ProductCategories.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string,
};

ProductCategories.defaultProps = {
  selectedCategory: "all",
};

export default ProductCategories;
