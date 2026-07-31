import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Twitter } from 'lucide-react';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const buttonMotion = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 10px 20px rgba(37, 99, 235, 0.14)',
  },
  hover: {
    y: -5,
    scale: 1.03,
    boxShadow: '0 18px 34px rgba(37, 99, 235, 0.26)',
    transition: { type: 'spring', stiffness: 420, damping: 22 },
  },
  tap: {
    y: -1,
    scale: 0.97,
    boxShadow: '0 8px 16px rgba(37, 99, 235, 0.18)',
    transition: { type: 'spring', stiffness: 520, damping: 24 },
  },
};

const outlineButtonMotion = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 8px 18px rgba(15, 23, 42, 0.06)',
  },
  hover: {
    y: -5,
    scale: 1.03,
    boxShadow: '0 18px 34px rgba(37, 99, 235, 0.16)',
    transition: { type: 'spring', stiffness: 420, damping: 22 },
  },
  tap: {
    y: -1,
    scale: 0.97,
    transition: { type: 'spring', stiffness: 520, damping: 24 },
  },
};

const shineMotion = {
  rest: { x: '-140%', opacity: 0 },
  hover: {
    x: '140%',
    opacity: [0, 0.55, 0],
    transition: { duration: 0.72, ease: 'easeOut' },
  },
};

const iconMotion = {
  rest: { x: 0, rotate: 0 },
  hover: { x: 4, rotate: -8, transition: { type: 'spring', stiffness: 500, damping: 18 } },
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
    label: 'Twitter',
    href: 'https://x.com/bhanu7671988410',
    icon: Twitter,
  },
];

const Home: React.FC = () => {
  return (
    <div className="section-container relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-10 overflow-hidden md:min-h-[calc(100vh-10rem)] md:flex-row md:justify-between md:gap-12">
      <motion.div
        className="pointer-events-none absolute left-6 top-24 h-24 w-24 rounded-full border border-blue-100"
        animate={{ y: [0, -12, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-16 right-8 h-16 w-16 rounded-md border border-emerald-100"
        animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 md:w-1/2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUp}
          className="mb-4 inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
        >
          <Sparkles className="h-4 w-4" />
          Hello, I'm
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mb-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Bhanu Prasad Vigrahala
        </motion.h1>

        <motion.h2 variants={fadeUp} className="mb-6 text-xl font-semibold text-gray-700 sm:text-2xl md:text-3xl">
          Full-Stack Developer
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-8 max-w-xl leading-relaxed text-gray-600">
          I craft exceptional digital experiences with clean, efficient code.
          Specializing in creating responsive web applications that deliver
          both functionality and beauty.
        </motion.p>

        <motion.div variants={fadeUp} className="mb-8 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          <motion.a
            href="#projects"
            className="blue-button group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap"
            variants={buttonMotion}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              className="absolute inset-y-0 -left-10 w-10 rotate-12 bg-white/45 blur-sm"
              variants={shineMotion}
            />
            <span className="relative z-10">View My Work</span>
            <motion.span className="relative z-10" variants={iconMotion}>
              <ArrowRight className="h-5 w-5" />
            </motion.span>
          </motion.a>
          <motion.a
            href="#contact"
            className="outline-button group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap bg-white"
            variants={outlineButtonMotion}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              className="absolute inset-y-0 -left-10 w-10 rotate-12 bg-blue-200/60 blur-sm"
              variants={shineMotion}
            />
            <motion.span className="relative z-10" variants={iconMotion}>
              <Mail className="h-5 w-5" />
            </motion.span>
            <span className="relative z-10">Get in Touch</span>
          </motion.a>
          <motion.a
            href="https://res.cloudinary.com/dzu7g2yts/image/upload/v1785523329/MERN_Stack_Resume_Bhanu_1_v1hdpr.pdf"
            download="MERN_Stack_Resume_Bhanu.pdf"
            className="blue-button group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap"
            variants={buttonMotion}
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span
              className="absolute inset-y-0 -left-10 w-10 rotate-12 bg-white/45 blur-sm"
              variants={shineMotion}
            />
            <motion.span className="relative z-10" variants={iconMotion}>
              <Download className="h-5 w-5" />
            </motion.span>
            <span className="relative z-10">Download Resume</span>
          </motion.a>
        </motion.div>

        <motion.div variants={fadeUp} className="flex gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              aria-label={label}
              whileHover={{ y: -4, rotate: 3 }}
              whileTap={{ scale: 0.92 }}
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 flex justify-center md:w-1/2"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 rounded-full bg-blue-100/70 blur-2xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 0.95, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl shadow-blue-200/60 sm:h-64 sm:w-64 md:h-80 md:w-80"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            <motion.img
              src="https://res.cloudinary.com/dzu7g2yts/image/upload/v1769582764/53c68e46-6eae-45e6-bf9e-ea7a673a5dbb_tyulyb.jpg"
              alt="Bhanu Prasad"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.55 }}
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -right-4 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            2+ Years Exp.
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
