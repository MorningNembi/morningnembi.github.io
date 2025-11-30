import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Resume />
    </>
  );
};

export default Home;
