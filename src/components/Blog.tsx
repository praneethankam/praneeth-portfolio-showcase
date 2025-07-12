
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';


const Blog = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const articles = [
    {
    id: 1,
    title: 'Why I Chose the MERN Stack for Web Development',
    excerpt: 'Here’s why I chose MongoDB, Express.js, React, and Node.js for my full-stack projects, and how it helped me grow as a developer.',
    date: 'July 11, 2025',
    readTime: '7 min read',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&crop=center',
    link: '/blog/why-mern' // This should point to the full post route
  },
   
  ];

  return (
    <section ref={ref} id="blog" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Sharing my experiences, learnings, and insights from my journey as a MERN stack developer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-1  ">
          {articles.map((article, index) => (
            <Link to={article.link} key={article.id} className="group transform transition-all duration-300 hover:scale-105">
          <article 
              key={article.id}
              className={`group backdrop-blur-sm bg-white/5 rounded-2xl  border border-white/10 overflow-hidden hover:border-purple-400/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
             
            >
              <div className="relative overflow-hidden ">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/80 text-white text-sm rounded-full backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-cyan-400 transition-colors duration-300">
                  Read More
                  <ArrowUp size={16} className="ml-2 rotate-45 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
