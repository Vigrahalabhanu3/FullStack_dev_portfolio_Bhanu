import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import {
  BrainCircuit, CheckCircle, Code2, Database, Layers, PenTool, Sparkles
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  percentage: number;
  category: string;
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const skills: Skill[] = [
    {
      name: 'React',
      icon: <Code2 className="h-6 w-6 text-blue-600" />,
      percentage: 100,
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
      percentage: 100,
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
      percentage: 100,
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
      percentage: 50,
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

  const categorySummary = [
    { label: 'Frontend', value: skills.filter(skill => skill.category === 'frontend').length },
    { label: 'Backend', value: skills.filter(skill => skill.category === 'backend').length },
    { label: 'Tools', value: skills.filter(skill => skill.category === 'tools').length },
    { label: 'Design', value: skills.filter(skill => skill.category === 'design').length },
  ];

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle
        title="My Skills"
        highlight="Skills"
        subtitle="A comprehensive look at my technical expertise and the tools I use"
      />

      <motion.div
        className="mx-auto mb-10 grid max-w-4xl grid-cols-2 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg shadow-slate-200/60 md:grid-cols-4"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {categorySummary.map((item) => (
          <div key={item.label} className="border-r border-b border-gray-100 p-4 text-center last:border-r-0 md:border-b-0">
            <p className="text-2xl font-bold text-slate-950">{item.value}</p>
            <p className="text-sm font-semibold text-gray-500">{item.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="mb-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.12, duration: 0.45 }}
      >
        <div className="inline-flex flex-wrap justify-center gap-1 rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="skill-tab-active"
                  className="absolute inset-0 rounded-md bg-blue-600 shadow-md"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.article
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 34, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{
                duration: 0.5,
                delay: inView ? index * 0.06 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="skill-card group relative overflow-hidden p-6"
            >
              <div className="absolute right-4 top-4 text-blue-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Sparkles className="h-8 w-8" />
              </div>

              <div className="mb-6 flex items-start gap-4">
                <motion.div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-50 ring-1 ring-gray-100 transition-colors duration-300 group-hover:bg-blue-50"
                  whileHover={{ rotate: -6, scale: 1.06 }}
                >
                  {skill.icon}
                </motion.div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-400">
                    {skill.category}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">
                  <CheckCircle className="h-4 w-4" />
                  {skill.percentage}%
                </div>
              </div>

              <div className="mb-3 flex items-center justify-between text-sm font-semibold text-gray-500">
                <span>Proficiency</span>
                <span>{skill.percentage >= 90 ? 'Advanced' : skill.percentage >= 75 ? 'Strong' : 'Growing'}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-emerald-400"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.06 + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Skills;
