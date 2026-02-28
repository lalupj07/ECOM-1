import { forwardRef } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { categories } from "../data/products.js";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Filters = forwardRef(function Filters({ filter, sort, onFilterChange, onSortChange }, ref) {
  return (
    <motion.section className="filters" aria-label="Product filters" ref={ref} variants={containerVariants} initial="hidden" animate="visible">
      <div className="filter-bar">
        <div className="filter-group" role="list">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`chip${category.id === filter ? " active" : ""}`}
              data-category={category.id}
              onClick={() => onFilterChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="sort-group">
          <label htmlFor="sortSelect">Sort by</label>
          <select
            id="sortSelect"
            className="custom-select"
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
    </motion.section>
  );
});

Filters.propTypes = {
  filter: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default Filters;
