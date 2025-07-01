
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">Hello, I'm Praneeth!</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate MERN Stack developer and recent MCA graduate with a strong foundation in 
                full-stack web development. I love creating applications that solve real-world problems 
                while providing exceptional user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to build meaningful digital 
                solutions. I'm always eager to learn new technologies and collaborate on exciting projects.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Education</h4>
              <p className="text-gray-300">
                <span className="text-purple-400 font-semibold">Master of Computer Applications (MCA)</span><br />
                Focused on software development, algorithms, and modern web technologies.
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">Career Goal</h4>
              <p className="text-gray-300">
                Seeking full-time opportunities in web development where I can contribute to innovative 
                projects and grow as a developer in a collaborative environment.
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <h4 className="text-xl font-semibold text-white mb-3">What I Do</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Full-stack web application development</li>
                <li>• RESTful API design and implementation</li>
                <li>• Database design and optimization</li>
                <li>• Responsive UI/UX development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
