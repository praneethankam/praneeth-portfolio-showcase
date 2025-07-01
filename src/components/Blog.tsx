
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'How I Built My First MERN Stack Project',
      excerpt: 'A detailed walkthrough of my journey creating a full-stack application, from planning to deployment, including the challenges I faced and lessons learned.',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop&crop=center',
      link: '#'
    },
    {
      id: 2,
      title: 'What I Learned as an MCA Student',
      excerpt: 'Reflecting on my Masters journey, the skills I developed, and how academic learning translates to real-world development projects.',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop&crop=center',
      link: '#'
    },
    {
      id: 3,
      title: "Beginner's Guide to Node.js",
      excerpt: 'Essential concepts every new Node.js developer should know, including event loops, modules, and building your first server.',
      date: 'December 5, 2024',
      readTime: '10 min read',
      category: 'Tutorial',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop&crop=center',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Sharing my experiences, learnings, and insights from my journey as a MERN stack developer.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.id}
              className="group backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-purple-400/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => window.open(article.link, '_blank')}
            >
              <div className="relative overflow-hidden">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
