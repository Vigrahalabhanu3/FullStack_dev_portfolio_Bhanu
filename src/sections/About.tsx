import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { Award, Code2, Sparkles, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const stats = [
    { number: '20+', text: 'Projects Completed' },
    { number: '5+', text: 'Happy Clients' },
    { number: '2+', text: 'Years Experience' },
    { number: '15+', text: 'Technologies' },
  ];    
  

  const values = [
    { 
      icon: <Users className="h-6 w-6 text-blue-600" />, 
      title: 'User-Centered Design', 
      description: 'Creating experiences that truly resonate with users' 
    },
    { 
      icon: <Code2 className="h-6 w-6 text-blue-600" />, 
      title: 'Clean, Efficient Code', 
      description: 'Writing maintainable code that scales with your business' 
    },
    { 
      icon: <Zap className="h-6 w-6 text-blue-600" />, 
      title: 'Performance Obsessed', 
      description: 'Optimizing for speed, accessibility, and user experience' 
    },
    { 
      icon: <Award className="h-6 w-6 text-blue-600" />, 
      title: 'Quality Delivery', 
      description: 'Delivering exceptional results that exceed expectations' 
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle 
        title="About Me" 
        highlight="Me"
        subtitle="Passionate developer dedicated to crafting beautiful and functional digital experiences"
      />

      <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-2 lg:gap-12 lg:mt-12">
        <motion.div
          className="about-card p-6 md:p-8"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
            <Sparkles className="h-4 w-4" />
            My Journey
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Building With Purpose</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With over 2 years of experience in software development, I've honed my skills in building 
            responsive, user-friendly web applications. My journey began with a passion for solving 
            complex problems through elegant code solutions.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I've had the privilege of working with startups and established enterprises alike, helping 
            them build products that users love. My approach combines technical expertise with a deep 
            understanding of user needs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I believe that great software isn't just about writing code—it's about creating experiences 
            that make a difference in people's lives.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.12, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute -right-4 -top-4 z-10 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-xl shadow-slate-300/70"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-2xl font-bold">2+</p>
            <p className="text-xs font-medium text-slate-300">Years Experience</p>
          </motion.div>
          <motion.div
            className="about-card overflow-hidden p-3"
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <motion.img 
              src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Workspace with laptops" 
              className="w-full h-56 object-cover rounded-md sm:h-72 md:h-[320px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-4 my-12 sm:grid-cols-2 md:grid-cols-4 md:gap-6 md:my-16">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.text} 
            className="about-card group text-center p-6"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: index * 0.08 + 0.18, duration: 0.48 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 transition-transform duration-300 group-hover:scale-110">{stat.number}</h3>
            <p className="text-gray-600 font-medium">{stat.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.24, duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">What Drives Me</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="about-card group p-6"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.08 + 0.32, duration: 0.48 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-blue-100"
                whileHover={{ rotate: -8, scale: 1.08 }}
              >
                {value.icon}
              </motion.div>
              <h4 className="text-lg font-bold mb-2 text-slate-900 transition-colors duration-300 group-hover:text-blue-700">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
