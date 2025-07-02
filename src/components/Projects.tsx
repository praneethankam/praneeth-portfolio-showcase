
import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const projects = [
    {
      id: 1,
      title: 'Paste-App',
      description: 'A minimalist web app to create, update, and view text pastes',
      image: '../public/generated-image(2)',
      technologies: ['React', 'Redux', 'Toolkit',' Tailwind CSS', 'Vite', 'React Router'],
      github: 'https://github.com/praneethankam/PasteApp',
      live: 'https://paste-app-six-psi.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'LeetMetric – LeetCode Stats Visualizer',
      description: 'Built a responsive web app to fetch and display LeetCode stats via GraphQL, integrating Firebase analytics and CORS handling',
      image: '../public/generated-image(3)',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'GraphQL'],
      github: 'https://github.com/praneethankam/Metrics_App',
      live: 'metrics-2bf0d.web.app',
      featured: true
    },
    {
      id: 3,
      title: 'Responsive Landing Page',
      description: 'Developed a fully responsive landing page using modern UI/UX principles and component-based architecture',
      image: '../public/generated-image(4)',
      technologies: ['HTML' , 'CSS'],
      github: 'https://github.com/ankampraneeth/weather-app',
      live: 'front-end-529c1.web.app',
      featured: false
    }
  ];

  return (
    <section ref={ref} id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and problem-solving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-purple-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded-full font-semibold">
                    Featured
                  </span>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open(project.github, '_blank')}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    onClick={() => window.open(project.live, '_blank')}
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-1000 transform delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Button
            onClick={() => window.open('https://github.com/ankampraneeth', '_blank')}
            variant="outline"
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Code size={20} className="mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
