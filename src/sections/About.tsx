import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { Award, Code2, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
      const items = document.querySelectorAll('.about-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('fade-in-up');
        }, 200 * index);
      });
    }
  }, [inView, animationTriggered]);

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

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle 
        title="About Me" 
        highlight="Me"
        subtitle="Passionate developer dedicated to crafting beautiful and functional digital experiences"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="about-item opacity-0">
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
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
        </div>

        <div className="about-item opacity-0">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Workspace with laptops" 
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="about-item opacity-0 text-center p-6 rounded-lg bg-white shadow-md border border-gray-100"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
            <p className="text-gray-600">{stat.text}</p>
          </div>
        ))}
      </div>

      <div className="about-item opacity-0">
        <h3 className="text-2xl font-bold mb-6 text-center">What Drives Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="about-item opacity-0 p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="mb-4">{value.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;