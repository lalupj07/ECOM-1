import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    author: "Dr. Sarah Chen",
    company: "AeroMaterials Lab",
    rating: 5,
    date: "2 weeks ago",
    text: "The UTM-5000 has transformed our composite testing workflow. Exceptional accuracy and the support team helped us get ISO 17025 certified in record time.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    author: "Michael Rodriguez",
    company: "Precision Automotive",
    rating: 5,
    date: "1 month ago",
    text: "We've been using Cytester equipment for 5 years. The hardness tester and fatigue systems have never let us down. Best investment we've made.",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 3,
    author: "Emily Thompson",
    company: "BuildTech QC",
    rating: 5,
    date: "3 weeks ago",
    text: "Outstanding concrete testing equipment. The compression tester is built like a tank and the calibration service is impeccable. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    author: "James Park",
    company: "Polymer Research Institute",
    rating: 5,
    date: "2 months ago",
    text: "The melt flow indexer and viscometer have been game-changers for our R&D. Data export integration with our LIMS was seamless.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 5,
    author: "Dr. Lisa Anderson",
    company: "Fire Safety Consultants",
    rating: 5,
    date: "1 week ago",
    text: "Cone calorimeter exceeded expectations. Training was thorough and the software makes report generation effortless. Worth every penny.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 6,
    author: "Robert Kim",
    company: "Defense Contractor",
    rating: 5,
    date: "3 months ago",
    text: "Environmental chambers are rock solid. We run 24/7 MIL-STD testing and they've performed flawlessly for 3 years straight.",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const GoogleReviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(3);

  const showMore = () => {
    setVisibleReviews((prev) => Math.min(prev + 3, reviews.length));
  };

  return (
    <motion.section
      className="google-reviews"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.div className="reviews-header" variants={cardVariants}>
        <div className="google-badge">
          <span className="material-symbol">star</span>
          <div>
            <strong>4.9 out of 5</strong>
            <p>Based on 247 Google reviews</p>
          </div>
        </div>
        <h2>What our customers say</h2>
      </motion.div>
      <motion.div className="reviews-grid" variants={containerVariants}>
        {reviews.slice(0, visibleReviews).map((review) => (
          <motion.div
            key={review.id}
            className="review-card"
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="review-header">
              <img src={review.avatar} alt={review.author} className="review-avatar" />
              <div className="review-meta">
                <h4>{review.author}</h4>
                <p className="review-company">{review.company}</p>
              </div>
            </div>
            <div className="review-rating">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="material-symbol star-filled">
                  star
                </span>
              ))}
              <span className="review-date">{review.date}</span>
            </div>
            <p className="review-text">{review.text}</p>
            <div className="google-logo">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google Review
            </div>
          </motion.div>
        ))}
      </motion.div>
      {visibleReviews < reviews.length && (
        <motion.div className="reviews-actions" variants={cardVariants}>
          <button className="ghost" onClick={showMore}>
            Load more reviews
          </button>
        </motion.div>
      )}
    </motion.section>
  );
};

export default GoogleReviews;
