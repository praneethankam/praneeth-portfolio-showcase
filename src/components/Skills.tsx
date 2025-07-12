import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  

  const technologies = [
    'MongoDB', 'Express', 'React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 
    'Tailwind CSS', 'Git', 'GitHub', 'REST APIs', 'Bootstrap'
  ];

  return (
    <section ref={ref} id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-1">
          {/* Skill Progress Bars */}
          
          
          {/* Technology Tags */}
          <div className={`space-y-6 transition-all duration-1000 transform delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-white mb-6">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={tech}
                  className={`px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-full backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 cursor-default transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 50 + 600}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Core Competencies</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Full-stack MERN development</li>
                <li>• Responsive web design</li>
                <li>• RESTful API development</li>
                <li>• Database design & optimization</li>
                <li>• Version control with Git</li>
                <li>• Agile development practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
