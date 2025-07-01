
import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const fullText = 'MERN Stack Developer';
  
  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a dummy resume download - in real implementation, this would link to actual PDF
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Ankam_Praneeth_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Ankam <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Praneeth</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-4 h-10 flex items-center justify-center">
            <span className="border-r-2 border-purple-400 pr-1 animate-pulse">
              {displayText}
            </span>
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turning ideas into full-stack applications with MongoDB, Express, React, and Node.js. 
            Passionate about creating seamless user experiences and robust backend solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={downloadResume}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Download Resume
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="https://github.com/ankampraneeth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://linkedin.com/in/ankampraneeth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
        
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="text-purple-400 hover:text-purple-300 transition-colors duration-300" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
