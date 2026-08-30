import React, { useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const RESUME_URL =
  'https://res.cloudinary.com/dzu7g2yts/image/upload/v1787251011/taskify/ikgdrm4l2hd3tl93svnt.pdf';
const RESUME_FILENAME = 'Bhanu_Prasad_Vighrahala_Resume.pdf';

// Duration (ms) to show the "Downloaded" confirmation
const CONFIRM_DURATION = 2200;

const ResumeButton: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const confirmTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDownload = useCallback(() => {
    // Programmatic download — no new tab, no navigation
    const a = document.createElement('a');
    a.href = RESUME_URL;
    a.download = RESUME_FILENAME;
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Show confirmation
    setDownloaded(true);
    if (confirmTimer.current) clearTimeout(confirmTimer.current);
    confirmTimer.current = setTimeout(() => setDownloaded(false), CONFIRM_DURATION);
  }, []);

  return (
    <button
      type="button"
      onClick={handleDownload}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      aria-label="Download Bhanu Prasad's resume as PDF"
      className="resume-btn outline-button group"
    >
      <AnimatePresence mode="wait" initial={false}>
        {downloaded ? (
          // ── Confirmation state ──
          <motion.span
            key="confirmed"
            className="resume-btn__inner"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {/* Checkmark icon */}
            <span className="resume-btn__check" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M2.5 7.5L6 11L12.5 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Downloaded</span>
          </motion.span>
        ) : (
          // ── Default / hover state ──
          <motion.span
            key="default"
            className="resume-btn__inner"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {/* Animated download icon */}
            <span
              className="resume-btn__icon"
              aria-hidden="true"
              data-hovered={isHovered ? 'true' : 'false'}
              data-reduced={prefersReducedMotion ? 'true' : 'false'}
            >
              {/* Document body */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="resume-btn__svg"
              >
                {/* Document outline */}
                <path
                  d="M9 1H3.5A1.5 1.5 0 0 0 2 2.5v11A1.5 1.5 0 0 0 3.5 15h9A1.5 1.5 0 0 0 14 13.5V6L9 1Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                {/* Dog-ear fold */}
                <path
                  d="M9 1v5h5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
                {/* Download arrow shaft */}
                <line
                  x1="8"
                  y1="7.5"
                  x2="8"
                  y2="11.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  className="resume-btn__arrow-shaft"
                />
                {/* Arrow head */}
                <polyline
                  points="5.5,9.5 8,12 10.5,9.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="resume-btn__arrow-head"
                />
              </svg>
            </span>
            <span>Download Resume</span>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ResumeButton;
