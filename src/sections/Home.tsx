import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ResumeButton from '../components/ResumeButton';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Vigrahalabhanu3',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bhanu-prasad-848003289',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:banuvigrahala@gmail.com',
    icon: Mail,
  },
];

const Home: React.FC = () => {
  return (
    <div className="section-container relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center gap-12 md:flex-row md:justify-between">
      {/* Text content */}
      <motion.div
        className="relative z-10 flex-1"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="section-label mb-5"
        >
          MERN Stack Developer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="display-heading mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
        >
          Bhanu
          <br />
          Prasad Vighrahala
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mb-8 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg"
        >
          I build full-stack web applications using React, Node.js, Express,
          and MongoDB — focusing on clean code, real performance, and
          intuitive user experiences.
        </motion.p>

        <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="blue-button group"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="outline-button"
          >
            Contact Me
          </a>
          <ResumeButton />
        </motion.div>

        <motion.div variants={fadeUp} className="flex gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-0.5"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Profile image */}
      <motion.div
        className="relative z-10 flex justify-center md:flex-none"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          {/* Subtle background ring */}
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100" />
          {/* Image */}
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl sm:h-72 sm:w-72 md:h-80 md:w-80">
            <img
              src="https://res.cloudinary.com/dzu7g2yts/image/upload/v1769582764/53c68e46-6eae-45e6-bf9e-ea7a673a5dbb_tyulyb.jpg"
              alt="Bhanu Prasad — MERN Stack Developer"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          {/* Available badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-100 bg-white px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
            Available for work
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
