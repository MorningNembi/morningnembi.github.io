import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/MorningNembi" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/%EC%A0%95%ED%83%9D-%EC%9D%B4-11b812360/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:cvb1060@naver.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
      <p className="copyright">
        Designed & Built by Jeong-Taek Lee
      </p>
    </footer>
  );
};

export default Footer;
