import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';

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
  const { ref, inView } = useInView({
    threshold: 0.15,
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

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'featured', label: 'Featured' },
  ];

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle 
        title="Featured Projects" 
        highlight="Projects"
        subtitle="Showcasing my best work and the technologies I've used"
      />
      
      <div className="mb-12 flex justify-center">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeFilter === filter.value
                  ? 'text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {activeFilter === filter.value && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-md bg-blue-600 shadow-md"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{
                duration: 0.55,
                delay: inView ? index * 0.08 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className="project-card group"
            >
              <div className="relative h-48 overflow-hidden sm:h-56">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                  <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800 shadow-sm backdrop-blur">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-md bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900 shadow-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-lg transition-colors duration-300 hover:bg-blue-50"
                  >
                    Preview
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex min-h-[250px] flex-col p-5 sm:min-h-[284px] sm:p-6">
                <div className="mb-4">
                  <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                    {project.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{project.description}</p>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.08 + techIndex * 0.04 + 0.18 }}
                      className="rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-5">
                  <a
                    href={project.githubUrl}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    aria-label={`${project.title} source code`}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
