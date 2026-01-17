import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroHero from './components/IntroHero';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ChatbotButton from './components/Chatbot/ChatbotButton';
import ChatbotWidget from './components/Chatbot/ChatbotWidgetV2';
import './index.css';

// Wrapper to handle AnimatePresence with Router
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <AnimatePresence mode="wait">
            {showIntro ? (
              <IntroHero key="intro" onComplete={handleIntroComplete} />
            ) : (
              <motion.div
                key="main-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Navbar />
                <main>
                  <AnimatedRoutes />
                </main>
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>

          {!showIntro && (
            <>
              <ChatbotWidget isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
              <ChatbotButton onClick={toggleChatbot} isOpen={isChatbotOpen} />
            </>
          )}
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
