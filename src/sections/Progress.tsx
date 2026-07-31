import { motion } from 'framer-motion';
import { Award, BookOpen, ExternalLink, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';

const progressUrl = 'https://learning.ccbp.in/progress/public?uid=36db577c-9a08-4d6a-98b2-2559e18cf120';

const Progress = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div className="section-container" ref={ref}>
      <SectionTitle
        title="Learning Progress"
        highlight="Progress"
        subtitle="My current course journey and public CCBP learning profile"
      />

      <motion.div
        className="progress-card overflow-hidden p-6 md:p-8"
        initial={{ opacity: 0, y: 34, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">CCBP Learning Progress</h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              Public profile link for my current learning progress, course completion, and practice journey.
            </p>

            <motion.a
              href={progressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-colors duration-300 hover:bg-blue-700"
              whileHover={{ y: -4, boxShadow: '0 18px 34px rgba(37, 99, 235, 0.28)' }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                className="absolute inset-y-0 -left-10 w-10 rotate-12 bg-white/45 blur-sm"
                initial={{ x: '-140%', opacity: 0 }}
                whileHover={{ x: '140%', opacity: [0, 0.55, 0] }}
                transition={{ duration: 0.72, ease: 'easeOut' }}
              />
              <span className="relative z-10">View Current Progress</span>
              <ExternalLink className="relative z-10 h-4 w-4" />
            </motion.a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: BookOpen, title: 'Course Progress', text: 'Live CCBP profile' },
              { icon: Award, title: 'Verified Learning', text: 'Public progress record' },
            ].map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                className="rounded-lg border border-gray-100 bg-slate-50 p-5"
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.18, duration: 0.45 }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-white text-blue-700 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mb-2 font-bold text-slate-900">{title}</h4>
                <p className="text-sm text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Progress;
