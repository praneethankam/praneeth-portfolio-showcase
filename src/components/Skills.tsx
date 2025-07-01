
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', level: 85, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', level: 75, color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', level: 80, color: 'from-gray-500 to-gray-700' },
    { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-800' },
    { name: 'Git', level: 85, color: 'from-orange-600 to-red-600' },
    { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-cyan-500' },
  ];

  const technologies = [
    'MongoDB', 'Express', 'React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 
    'Tailwind CSS', 'Git', 'GitHub', 'REST APIs', 'JSON', 'Bootstrap'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Progress Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div 
                    className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Technology Tags */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-full backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
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
