import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}>
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Praneeth</span>
        </h1>
        <p className={`text-lg md:text-xl text-gray-300 mb-8 transition-all duration-1000 transform delay-200 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}>
          I'm a MERN stack developer passionate about building web applications and solving problems with code.
        </p>
        <button 
          onClick={scrollToAbout}
          className={`bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-full hover:scale-105 transition-all duration-300 shadow-md transition-all duration-1000 transform delay-400 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}
        >
          Learn More <ArrowDown className="inline-block ml-2" size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
