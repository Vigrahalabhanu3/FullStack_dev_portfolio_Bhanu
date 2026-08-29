import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';

interface Skill {
  name: string;
  level: 'Expert' | 'Proficient' | 'Learning';
  category: 'frontend' | 'backend' | 'tools' | 'ai';
  percentage: number;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 'Expert', category: 'frontend', percentage: 92 },
  { name: 'JavaScript (ES6+)', level: 'Expert', category: 'frontend', percentage: 90 },
  { name: 'HTML & CSS', level: 'Expert', category: 'frontend', percentage: 95 },
  { name: 'Tailwind CSS', level: 'Expert', category: 'frontend', percentage: 90 },
  // Backend
  { name: 'Node.js', level: 'Proficient', category: 'backend', percentage: 85 },
  { name: 'Express.js', level: 'Proficient', category: 'backend', percentage: 85 },
  { name: 'MongoDB', level: 'Proficient', category: 'backend', percentage: 82 },
  { name: 'REST APIs', level: 'Proficient', category: 'backend', percentage: 88 },
  { name: 'JWT Auth', level: 'Proficient', category: 'backend', percentage: 82 },
  // Tools
  { name: 'Git & GitHub', level: 'Proficient', category: 'tools', percentage: 88 },
  { name: 'VS Code', level: 'Expert', category: 'tools', percentage: 95 },
  { name: 'Postman', level: 'Proficient', category: 'tools', percentage: 82 },
  // AI & APIs
  { name: 'OpenAI API', level: 'Proficient', category: 'ai', percentage: 80 },
  { name: 'Cloudinary', level: 'Proficient', category: 'ai', percentage: 78 },
];

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Tools' },
  { id: 'ai', label: 'AI & APIs' },
];

const levelColor: Record<Skill['level'], string> = {
  Expert: 'bg-emerald-50 text-emerald-700',
  Proficient: 'bg-blue-50 text-blue-700',
  Learning: 'bg-amber-50 text-amber-700',
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = activeTab === 'all' ? skills : skills.filter(s => s.category === activeTab);

  return (
    <div className="section-container bg-slate-50/60" ref={ref}>
      <SectionTitle
        title="Skills & Technologies"
        highlight="Skills"
        subtitle="The tools and technologies I use to build full-stack web applications"
      />

      {/* Tab filter */}
      <motion.div
        className="mb-10 flex justify-center"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
      >
        <div className="inline-flex flex-wrap justify-center gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-lg bg-blue-600"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Skills grid */}
      <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{
                duration: 0.4,
                delay: inView ? index * 0.04 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="skill-card flex flex-col gap-3 p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-0.5">
                    {skill.category === 'ai' ? 'AI & APIs' : skill.category}
                  </p>
                  <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                </div>
                <span className={`rounded-md px-2.5 py-0.5 text-xs font-semibold ${levelColor[skill.level]}`}>
                  {skill.level}
                </span>
              </div>

              {/* Progress bar */}
              <div>
                <div className="mb-1.5 flex justify-between text-xs text-slate-400">
                  <span>Proficiency</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="skill-progress">
                  <motion.div
                    className="skill-progress-bar"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.04 + 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Skills;
