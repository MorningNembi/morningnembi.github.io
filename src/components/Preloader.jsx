import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500); // Wait a bit before unmounting
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 20);

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="preloader-content">
        <div className="loading-text">
          <span className="loading-percentage">{progress}%</span>
          <h2>Loading...</h2>
        </div>
        <div className="loader-container">
          <div className="progress-bar">
            <motion.div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
