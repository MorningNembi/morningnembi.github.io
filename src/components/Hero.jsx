import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';
import './Hero.css';

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language].hero;

  const handleViewWork = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="hero-title-combined">
            <span className="hero-greeting-text">{t.greeting} </span>
            <span className="hero-name">{t.name}</span>
            <span className="hero-greeting-text">{t.ending}</span>
          </h1>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="hero-subtitle">{t.subtitle}</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="hero-description">
            {t.description.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < t.description.split('\n').length - 1 && <br className="desktop-break" />}
              </React.Fragment>
            ))}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#projects" className="btn-primary" onClick={handleViewWork}>
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
