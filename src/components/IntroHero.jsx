import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';
import './IntroHero.css';

const IntroHero = ({ onComplete }) => {
  const { language } = useLanguage();
  const t = content[language].hero;
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start fade out animation after 2.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Call onComplete after fade out animation completes (3.5 seconds total)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.section
      className="intro-hero"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="intro-hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="intro-hero-title">
            <span className="intro-greeting">{t.greeting} </span>
            <span className="intro-name">{t.name}</span>
            <span className="intro-greeting">{t.ending}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="intro-subtitle">{t.subtitle}</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntroHero;
