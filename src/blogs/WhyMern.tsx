import React from 'react';
import { Link } from 'react-router-dom';

const WhyMern = () => {
  return (
    <div  className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <section className="max-w-3xl mx-auto py-12 px-6 text-white">
          <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-cyan-400 transition-colors duration-300 underline underline-offset-4 decoration-purple-500 hover:decoration-cyan-400 text-sm"
        >
          ← Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
        Why I Chose the MERN Stack for Web Development
      </h1>
      <p className="text-sm text-gray-400 mb-8">Published on July 11, 2025 • 7 min read</p>

      <p className="mb-6 leading-relaxed">
        As a web developer and MCA graduate, choosing the right tech stack was one of the most important decisions I made early in my journey.
        After experimenting with various technologies and building a couple of full-stack projects, I found myself consistently coming back to one stack: <strong>MERN</strong> — MongoDB, Express.js, React, and Node.js.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-purple-300">1. All JavaScript — End to End</h2>
      <p className="mb-6">
        One of the biggest reasons I love MERN is that it uses <strong>JavaScript throughout the entire stack</strong> — from frontend to backend to database queries. This makes development faster and more consistent, especially when working solo or on small teams.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-purple-300">2. React for the Frontend</h2>
      <p className="mb-6">
        React’s component-based structure and virtual DOM make building UIs both intuitive and scalable. It allowed me to build responsive and dynamic interfaces for my Todo App and Airbnb Clone efficiently.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-purple-300">3. Node.js + Express.js for the Backend</h2>
      <p className="mb-6">
        Node.js is great for building scalable server-side apps, and Express simplifies routing and API handling. Together, they help create RESTful APIs and manage backend logic with ease.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-purple-300">4. MongoDB: Flexible and JSON-Friendly</h2>
      <p className="mb-6">
        I love MongoDB because of its schema-less, document-based approach. It integrates perfectly with JavaScript, and it’s especially helpful for fast prototyping.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-purple-300">5. Great for Full-Stack Projects</h2>
      <p className="mb-6">
        With MERN, I can handle frontend, backend, and database all with JavaScript. It’s open-source, scalable, and ideal for full-stack apps like the ones I’ve built in my portfolio.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-purple-300">Final Thoughts</h2>
      <p className="mb-6">
        The MERN stack gave me everything I needed to grow as a developer. If you’re starting out or looking to build complete web apps, I highly recommend trying it out.
      </p>
      <h2 className="text-2xl font-semibold mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-cyan-400 transition-colors duration-300 underline underline-offset-4 decoration-purple-500 hover:decoration-cyan-400"
        >
          ← Back to Home
        </Link>
      </h2>
    </section>
    </div>
  );
};

export default WhyMern;
