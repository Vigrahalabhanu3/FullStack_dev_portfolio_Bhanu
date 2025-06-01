import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { 
  Code2, Database, Layers, PenTool, BrainCircuit, CheckCircle
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  percentage: number;
  category: string;
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skills: Skill[] = [
    { 
      name: 'React', 
      icon: <Code2 className="h-6 w-6 text-blue-600" />, 
      percentage: 95, 
      category: 'frontend' 
    },
    { 
      name: 'TypeScript', 
      icon: <Code2 className="h-6 w-6 text-blue-600" />, 
      percentage: 90, 
      category: 'frontend' 
    },
    { 
      name: 'Vue.js', 
      icon: <Code2 className="h-6 w-6 text-green-600" />, 
      percentage: 85, 
      category: 'frontend' 
    },
    { 
      name: 'Node.js', 
      icon: <Layers className="h-6 w-6 text-green-600" />, 
      percentage: 92, 
      category: 'backend' 
    },
    { 
      name: 'Python', 
      icon: <Layers className="h-6 w-6 text-blue-600" />, 
      percentage: 88, 
      category: 'backend' 
    },
    { 
      name: 'PostgreSQL', 
      icon: <Database className="h-6 w-6 text-blue-600" />, 
      percentage: 85, 
      category: 'backend' 
    },
    { 
      name: 'MongoDB', 
      icon: <Database className="h-6 w-6 text-green-600" />, 
      percentage: 80, 
      category: 'backend' 
    },
    { 
      name: 'Git', 
      icon: <BrainCircuit className="h-6 w-6 text-orange-600" />, 
      percentage: 95, 
      category: 'tools' 
    },
    { 
      name: 'Docker', 
      icon: <BrainCircuit className="h-6 w-6 text-blue-600" />, 
      percentage: 85, 
      category: 'tools' 
    },
    { 
      name: 'Figma', 
      icon: <PenTool className="h-6 w-6 text-purple-600" />, 
      percentage: 75, 
      category: 'design' 
    },
    { 
      name: 'Adobe XD', 
      icon: <PenTool className="h-6 w-6 text-pink-600" />, 
      percentage: 70, 
      category: 'design' 
    },
    { 
      name: 'TailwindCSS', 
      icon: <Code2 className="h-6 w-6 text-teal-600" />, 
      percentage: 95, 
      category: 'frontend' 
    },
  ];

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'design', label: 'Design' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
      const items = document.querySelectorAll('.skill-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('fade-in-up');
        }, 100 * index);
      });
    }
  }, [inView, animationTriggered, activeTab]);

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle 
        title="My Skills" 
        highlight="Skills"
        subtitle="A comprehensive look at my technical expertise and the tools I use"
      />
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-item opacity-0 card p-6 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-md bg-gray-50 mr-3">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <div className="ml-auto flex items-center">
                <span className="text-blue-600 font-semibold mr-2">{skill.percentage}%</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
            </div>
            <div className="skill-progress mt-auto">
              <div 
                className="skill-progress-bar" 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;