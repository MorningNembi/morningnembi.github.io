import React from 'react';
import { FaComments } from 'react-icons/fa';
import './ChatbotButton.css';

const ChatbotButton = ({ onClick, isOpen }) => {
  return (
    <button 
      className={`chatbot-button ${isOpen ? 'open' : ''}`}
      onClick={onClick}
      aria-label="Open chatbot"
    >
      <FaComments className="chatbot-icon" />
      <span className="pulse-indicator"></span>
    </button>
  );
};

export default ChatbotButton;
