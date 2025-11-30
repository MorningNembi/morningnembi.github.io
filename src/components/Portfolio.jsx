import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaFileAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { language } = useLanguage();
  const t = content[language].portfolio;

  const selectedProject = t.projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        <div className="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {t.projects.map(project => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                className="portfolio-card"
                onClick={() => setSelectedId(project.id)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
              >
                <div className="card-content">
                  <span className="card-category">{project.category}</span>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                  <div className="card-footer">
                    <span className="read-more">Read More &rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="modal-overlay" onClick={() => setSelectedId(null)}>
              <motion.div
                layoutId={`card-${selectedId}`}
                className="modal-content"
                onClick={e => e.stopPropagation()}
              >
                <button className="modal-close" onClick={() => setSelectedId(null)}>
                  <FaTimes />
                </button>

                <div className="modal-header">
                  <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                  <div className="modal-title-row">
                    <div>
                      <span className="modal-category">{selectedProject.category}</span>
                      <h2>{selectedProject.title}</h2>
                    </div>
                    <div className="modal-links">
                      {selectedProject.links.github && (
                        <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                          <FaGithub /> {t.modal.links.github}
                        </a>
                      )}
                      {selectedProject.links.demo && (
                        <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="icon-link">
                          <FaExternalLinkAlt /> {t.modal.links.demo}
                        </a>
                      )}
                      {selectedProject.links.paper && (
                        <a href={selectedProject.links.paper} target="_blank" rel="noopener noreferrer" className="icon-link">
                          <FaFileAlt /> {t.modal.links.paper}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="modal-section">
                    <h3>{t.modal.overview}</h3>
                    <p>{selectedProject.details.problem}</p>
                    <p>{selectedProject.details.solution}</p>
                  </div>

                  <div className="modal-row">
                    <div className="modal-col">
                      <h3>{t.modal.role}</h3>
                      <p>{selectedProject.details.role}</p>
                    </div>
                    <div className="modal-col">
                      <h3>{t.modal.techStack}</h3>
                      <div className="tech-tags">
                        {selectedProject.details.tech.map(t => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="modal-section">
                    <h3>{t.modal.keyFeatures}</h3>
                    <ul className="feature-list">
                      {selectedProject.details.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.details.achievement && (
                    <div className="modal-section">
                      <h3>{t.modal.achievement}</h3>
                      <p>{selectedProject.details.achievement}</p>
                    </div>
                  )}

                  {selectedProject.details.troubleshooting && (
                    <div className="modal-section">
                      <h3>트러블슈팅</h3>
                      <p>{selectedProject.details.troubleshooting}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
