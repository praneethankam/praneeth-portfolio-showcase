
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className={`grid md:grid-cols-3 gap-8 mb-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <div className={`transition-all duration-1000 transform delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ankam <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Praneeth</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              MERN Stack Developer passionate about creating innovative web applications 
              and solving complex problems through code.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 transform delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">Projects</a>
              <a href="#blog" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">Blog</a>
              <a href="#contact" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">Contact</a>
            </nav>
          </div>
          
          <div className={`transition-all duration-1000 transform delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/praneethankam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ankam-praneeth-634917224" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>
        
        <div className={`pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center transition-all duration-1000 transform delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ankam Praneeth. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-2">
              Built with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                MERN Stack
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
