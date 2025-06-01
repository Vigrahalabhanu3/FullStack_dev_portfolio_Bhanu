import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with secure payment processing and inventory management.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration.',
      image: 'https://images.pexels.com/photos/6956795/pexels-photo-6956795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Finance Dashboard',
      description: 'An interactive financial dashboard with data visualization and reporting features.',
      image: 'https://images.pexels.com/photos/7876303/pexels-photo-7876303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web',
      technologies: ['React', 'D3.js', 'Express', 'MySQL'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'A real-time social networking app with chat functionality and media sharing.',
      image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Weather Application',
      description: 'A location-based weather forecasting application with interactive maps.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'mobile',
      technologies: ['React Native', 'OpenWeatherAPI', 'Redux'],
      githubUrl: '#',
      liveUrl: 'https://nxt-weather-app.lovable.app/',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website for showcasing creative work.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
      const items = document.querySelectorAll('.project-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('fade-in-up');
        }, 150 * index);
      });
    }
  }, [inView, animationTriggered, activeFilter]);

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle 
        title="Featured Projects" 
        highlight="Projects"
        subtitle="Showcasing my best work and the technologies I've used"
      />
      
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeFilter === 'all'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveFilter('featured')}
          className={`px-4 py-2 rounded-full transition-all duration-300 ${
            activeFilter === 'featured'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Featured
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-item opacity-0 project-card">
            <div className="relative h-52 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a 
                  href={project.githubUrl} 
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <Github className="h-4 w-4 mr-1" />
                  <span>Code</span>
                </a>
                <a 
                  href={project.liveUrl} 
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 ml-4"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;