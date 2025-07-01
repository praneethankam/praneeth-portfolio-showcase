
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
