import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { Award, Code2, Users, X, ZoomIn, Zap } from 'lucide-react';

const ABOUT_IMAGE =
  'https://res.cloudinary.com/dzu7g2yts/image/upload/v1787983675/ChatGPT_Image_Aug_29_2026_11_37_26_AM_mppqbj.png';

const About: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: '5+', text: 'Projects Built' },
    { number: '2+', text: 'Years Experience' },
    { number: '10+', text: 'Technologies' },
    { number: '9', text: 'Certifications' },
  ];

  const values = [
    {
      icon: <Users className="h-5 w-5 text-blue-600" />,
      title: 'User-Centered',
      description: 'I build for people first — usability and clarity over complexity.',
    },
    {
      icon: <Code2 className="h-5 w-5 text-blue-600" />,
      title: 'Clean Code',
      description: 'Readable, maintainable code that scales as the product grows.',
    },
    {
      icon: <Zap className="h-5 w-5 text-blue-600" />,
      title: 'Performance',
      description: 'Fast load times and smooth interactions are non-negotiable.',
    },
    {
      icon: <Award className="h-5 w-5 text-blue-600" />,
      title: 'Quality First',
      description: 'Every detail matters — from API design to pixel alignment.',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle
        title="About Me"
        highlight="Me"
        subtitle="A MERN stack developer passionate about building products that solve real problems"
      />

      <div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-2 lg:gap-16">
        {/* Text column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <p className="mb-5 leading-relaxed text-slate-600">
            I'm Bhanu Prasad, a full-stack developer from Andhra Pradesh, India, specializing in the
            MERN stack — React, Node.js, Express, and MongoDB. Over the past two years, I've built
            applications ranging from AI-powered interview platforms to resume builders and travel
            discovery tools.
          </p>
          <p className="mb-5 leading-relaxed text-slate-600">
            My work is shaped by a focus on real-world utility. I don't just build features — I
            think through the problem, design the data flow, and implement it end to end. Clean
            APIs, responsive frontends, and reliable deployments are my standard.
          </p>
          <p className="leading-relaxed text-slate-600">
            I'm currently deepening my understanding of system design, AI integrations, and
            production-grade Node.js architecture through the CCBP Developer Foundations program.
          </p>
        </motion.div>

        {/* Image column */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            {/* Clickable image with zoom hint */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="group relative block w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
              aria-label="Click to zoom image"
            >
              <img
                src={ABOUT_IMAGE}
                alt="Developer workspace"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
                loading="lazy"
              />
              {/* Zoom overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/30">
                <span className="flex translate-y-2 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ZoomIn className="h-3.5 w-3.5 text-blue-600" />
                  Click to enlarge
                </span>
              </div>
            </button>

            {/* Stats row */}
            <div className="grid grid-cols-4 divide-x divide-slate-100">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.text}
                  className="p-4 text-center"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.07 + 0.25, duration: 0.45 }}
                >
                  <p className="text-xl font-bold text-blue-600 sm:text-2xl">{stat.number}</p>
                  <p className="text-xs font-medium text-slate-500 leading-tight">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Values grid */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="rounded-xl border border-slate-100 bg-slate-50 p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.07 + 0.4, duration: 0.45 }}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                {value.icon}
              </div>
              <h4 className="mb-1.5 font-semibold text-slate-900">{value.title}</h4>
              <p className="text-sm leading-relaxed text-slate-500">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              className="relative max-h-[90vh] max-w-3xl w-full"
              initial={{ scale: 0.88, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 16 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={ABOUT_IMAGE}
                alt="Developer workspace — full size"
                className="h-auto max-h-[85vh] w-full rounded-2xl object-contain shadow-2xl"
              />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition-colors hover:bg-red-50 hover:text-red-600"
                aria-label="Close image"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
