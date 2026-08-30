import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Home, ArrowLeft } from 'lucide-react';

const LOTTIE_URL =
  'https://lottie.host/7a61734f-61ef-4a08-9fd4-b4ddf64b4d6f/NH8nLKJtM3.lottie';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      {/* Subtle background glow */}
      <div className="not-found__glow" aria-hidden="true" />

      <div className="not-found__content">
        {/* Lottie animation */}
        <motion.div
          className="not-found__lottie"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <DotLottieReact
            src={LOTTIE_URL}
            autoplay
            loop
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>

        {/* 404 badge */}
        <motion.p
          className="not-found__badge"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.1}
        >
          404
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="not-found__heading"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          className="not-found__desc"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.3}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="not-found__actions"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.4}
        >
          <Link to="/" className="blue-button group" aria-label="Go to home page">
            <Home className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="outline-button group"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
