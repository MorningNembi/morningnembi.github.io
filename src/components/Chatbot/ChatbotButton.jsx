import React from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import './ChatbotButton.css';

const ChatbotButton = ({ onClick, isOpen }) => {
  return (
    <button className={`chatbot-button ${isOpen ? 'open' : ''}`} onClick={onClick}>
      {isOpen ? <FaTimes /> : <FaComments />}
    </button>
  );
};

export default ChatbotButton;
