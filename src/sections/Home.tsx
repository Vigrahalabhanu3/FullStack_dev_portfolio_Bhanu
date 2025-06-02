import React, { useEffect } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Home: React.FC = () => {
  useEffect(() => {
    const animateItems = () => {
      const items = document.querySelectorAll('.stagger-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-stagger');
        }, 100 * index);
      });
    };

    animateItems();
  }, []);

  return (
    <div className="section-container flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2">
        <p className="text-blue-600 font-medium mb-2 stagger-item">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 stagger-item">
          Bhanu prasad Vigrahala
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 stagger-item">
          Full-Stack Developer
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed stagger-item">
          I craft exceptional digital experiences with clean, efficient code.
          Specializing in creating responsive web applications that deliver 
          both functionality and beauty.
        </p>
        <div className="flex flex-wrap gap-4 mb-8 stagger-item">
          <a href="#projects" className="blue-button">
            View My Work
          </a>
          <a href="#contact" className="outline-button">
            Get in Touch
          </a>
        </div>
        <div className="flex gap-5 stagger-item">
          <a 
            href="#" 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center stagger-item">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="public\IMG-20250420-WA0092.jpg" 
              alt="Alex Johnson" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg">
            2+ Years Exp.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;