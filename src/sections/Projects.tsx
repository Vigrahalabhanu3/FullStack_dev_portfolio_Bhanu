import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, CheckCircle, Github, X, ZoomIn } from 'lucide-react';
import { projects } from '../data/projects';
import SectionTitle from '../components/SectionTitle';

/* ── Per-project card with its own inView trigger ── */
interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14 lg:items-center"
    >
      {/* ── Number watermark ── */}
      <span
        aria-hidden="true"
        className="project-number pointer-events-none absolute -top-8 left-0 lg:left-auto"
        style={{ [isEven ? 'right' : 'left']: '-0.25rem' }}
      >
        {project.number}
      </span>

      {/* ── Image ── (order swaps on desktop for alternating layout) */}
      <motion.div
        className={`relative overflow-hidden rounded-2xl border border-slate-100 bg-[#f5f6fa] shadow-sm ${
          isEven ? 'lg:order-1' : 'lg:order-2'
        }`}
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Clickable image with zoom hint */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="group relative block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
          aria-label={`Zoom ${project.title} screenshot`}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Hover zoom overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/25">
            <span className="flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ZoomIn className="h-3.5 w-3.5 text-blue-600" />
              Click to zoom
            </span>
          </div>
        </button>

        {/* Project number badge */}
        <div className="absolute left-4 top-4 rounded-md bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-sm border border-slate-100 pointer-events-none">
          Project {project.number}
        </div>

        {/* Lightbox */}
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
                className="relative max-h-[92vh] w-full max-w-5xl"
                initial={{ scale: 0.88, opacity: 0, y: 24 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 16 }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={project.image}
                  alt={`${project.title} — full size`}
                  className="h-auto max-h-[88vh] w-full rounded-2xl object-contain shadow-2xl"
                />
                {/* Title pill */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-slate-800 shadow backdrop-blur-sm whitespace-nowrap">
                  {project.title}
                </div>
                {/* Close */}
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition-colors hover:bg-red-50 hover:text-red-600"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Content ── */}
      <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        {/* Tagline */}
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {project.tagline}
        </motion.p>

        {/* Title */}
        <motion.h3
          className="display-heading mb-4 text-3xl sm:text-4xl"
          style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="mb-5 leading-relaxed text-slate-500"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          {project.description}
        </motion.p>

        {/* Features list */}
        <motion.ul
          className="mb-6 space-y-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.features.map((feat) => (
            <li key={feat} className="feature-item">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
              <span>{feat}</span>
            </li>
          ))}
        </motion.ul>

        {/* Tech stack */}
        <motion.div
          className="mb-7 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.24 }}
        >
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.28 }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button text-sm"
              aria-label={`${project.title} source code on GitHub`}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="blue-button group text-sm"
              aria-label={`${project.title} live demo`}
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
};

/* ── Main Projects Section ── */
const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle
        title="Featured Projects"
        highlight="Projects"
        subtitle="A selection of what I've built — real products with real problems solved"
      />

      {/* Vertical timeline wrapper */}
      <div className="project-timeline relative mt-16 flex flex-col gap-24 lg:gap-32">
        {/* Connecting line (visual only) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 top-0 hidden w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:block"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        />

        {projects.map((project, index) => (
          <React.Fragment key={project.number}>
            <ProjectCard project={project} index={index} />

            {/* Timeline connector dot (between projects) */}
            {index < projects.length - 1 && (
              <motion.div
                aria-hidden="true"
                className="relative hidden lg:flex"
                style={{ justifyContent: 'center' }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="-my-12 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                </div>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
      >
        <p className="mb-4 text-slate-500">Want to see more of my work?</p>
        <a
          href="https://github.com/Vigrahalabhanu3"
          target="_blank"
          rel="noopener noreferrer"
          className="outline-button inline-flex"
        >
          <Github className="h-4 w-4" />
          View GitHub Profile
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
