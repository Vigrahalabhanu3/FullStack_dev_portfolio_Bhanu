import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import type { DotLottie } from '@lottiefiles/dotlottie-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

// Detect reduced-motion preference (evaluated once at module load)
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const LOTTIE_URL =
  'https://lottie.host/6e25cfb3-2c89-46f6-b891-b6e4a973091a/G6zWbgzyvo.lottie';

// Safety fallback: start exit after this many ms in case the
// 'complete' event never fires (e.g. slow network, wasm not ready)
const FALLBACK_MS = prefersReducedMotion ? 800 : 5000;

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const hasExited = useRef(false);

  /** Trigger the exit fade exactly once */
  const triggerExit = useCallback(() => {
    if (hasExited.current) return;
    hasExited.current = true;
    setIsExiting(true);
  }, []);

  // Safety fallback timeout
  useEffect(() => {
    const id = setTimeout(triggerExit, FALLBACK_MS);
    return () => clearTimeout(id);
  }, [triggerExit]);

  /** Receive the DotLottie instance and subscribe to 'complete' */
  const handleDotLottieRef = useCallback(
    (instance: DotLottie | null) => {
      if (!instance) return;
      instance.addEventListener('complete', triggerExit);
    },
    [triggerExit]
  );

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div
          key="welcome-overlay"
          className="welcome-overlay"
          initial={{ opacity: 1 }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.04 }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0.15 }
              : { duration: 0.75, ease: [0.4, 0, 0.2, 1] }
          }
        >
          {/* Radial glow behind content */}
          <div className="welcome-glow" aria-hidden="true" />

          {/* Subtle grid */}
          <div className="welcome-grid" aria-hidden="true" />

          {/* Content — animation ▸ tagline ▸ name */}
          <div
            className="welcome-content"
            role="status"
            aria-label="Welcome intro for Bhanu Prasad portfolio"
          >
            {/* Lottie animation */}
            <motion.div
              className="welcome-lottie-wrapper"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            >
              <DotLottieReact
                src={LOTTIE_URL}
                autoplay
                loop={false}
                dotLottieRefCallback={handleDotLottieRef}
                style={{ width: '100%', height: '100%' }}
              />
            </motion.div>

            {/* "Welcome to my portfolio" */}
            <motion.p
              className="welcome-sub"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            >
              to my portfolio
            </motion.p>

            {/* "Bhanu Prasad" */}
            <motion.h1
              className="welcome-name"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
            >
              Bhanu&nbsp;Prasad &nbsp;Vighrahala
            </motion.h1>

            {/* Decorative animated rule */}
            <motion.div
              className="welcome-rule"
              initial={prefersReducedMotion ? {} : { scaleX: 0, opacity: 0 }}
              animate={prefersReducedMotion ? {} : { scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.55, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
