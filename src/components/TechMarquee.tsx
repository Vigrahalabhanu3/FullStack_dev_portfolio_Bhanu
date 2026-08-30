import React, { useEffect, useRef } from 'react';

/* ── Inline SVG Icons (stroke-based, 13×13) ─────────────────── */
const LayersIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const SparkleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);
const LinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const ShopIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const DbIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);
const CloudIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);
const ToolIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const DeviceIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <circle cx="12" cy="18" r="0.5" fill="currentColor" />
  </svg>
);

/* ── Track 1 — What I Build ─────────────────────────────────── */
const BUILD_ITEMS = [
  { Icon: LayersIcon,  label: 'Full-Stack Applications' },
  { Icon: SparkleIcon, label: 'AI Applications'         },
  { Icon: LinkIcon,    label: 'REST APIs'                },
  { Icon: ShopIcon,    label: 'E-Commerce Platforms'     },
  { Icon: DbIcon,      label: 'Database Systems'         },
  { Icon: CloudIcon,   label: 'Cloud Applications'       },
  { Icon: ToolIcon,    label: 'Developer Tools'          },
  { Icon: DeviceIcon,  label: 'Responsive Web Apps'      },
] as const;

/* ── Track 2 — Technologies ──────────────────────────────────── */
const TECH_ITEMS = [
  { mark: 'JS',  label: 'JavaScript'  },
  { mark: '⚛',  label: 'React'       },
  { mark: '▲',  label: 'Node.js'     },
  { mark: '∞',  label: 'Express'     },
  { mark: 'Jv', label: 'Java'        },
  { mark: '⚙',  label: 'Spring Boot' },
  { mark: '⊗',  label: 'MySQL'       },
  { mark: '◈',  label: 'PostgreSQL'  },
  { mark: '⌥',  label: 'Git'         },
  { mark: '◉',  label: 'GitHub'      },
  { mark: '⤷',  label: 'REST API'    },
  { mark: '☁',  label: 'AWS'         },
] as const;

const SEP = '✦';

/* ── Track sub-component ─────────────────────────────────────── */
interface TrackProps {
  id: string;
  direction: 'left' | 'right';
  durationSec: number;
  children: React.ReactNode;
}

const Track: React.FC<TrackProps> = ({ id, direction, durationSec, children }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  /* Pause animation when track scrolls far out of the viewport */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const list = el.querySelector('.bs-list') as HTMLElement | null;
        if (list) {
          list.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
        }
      },
      { rootMargin: '300px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const pauseTrack  = () => {
    const list = trackRef.current?.querySelector('.bs-list') as HTMLElement | null;
    if (list) list.style.animationPlayState = 'paused';
  };
  const resumeTrack = () => {
    const list = trackRef.current?.querySelector('.bs-list') as HTMLElement | null;
    if (list) list.style.animationPlayState = 'running';
  };

  return (
    <div
      ref={trackRef}
      className="bs-track"
      data-direction={direction}
      onMouseEnter={pauseTrack}
      onMouseLeave={resumeTrack}
      aria-label={`Scrolling ${direction} track`}
    >
      {/* aria-hidden: content is decorative; the section label is the accessible info */}
      <ul
        className="bs-list"
        style={{
          '--bs-duration': `${durationSec}s`,
          animationName: direction === 'left' ? 'bs-scroll-left' : 'bs-scroll-right',
        } as React.CSSProperties}
        aria-hidden="true"
        id={id}
      >
        {children}
        {children}
        {children}
      </ul>
    </div>
  );
};

/* ── Main component ─────────────────────────────────────────── */
const TechMarquee: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="bs-section"
      aria-label="What I build and the technologies I use"
    >
      {/* ── Header ── */}
      <div className="bs-header">
        <p className="bs-label">What I Build</p>
        <div className="bs-rule" aria-hidden="true" />
        <p className="bs-subtitle">
          Applications, platforms and experiences — built with modern technologies
        </p>
      </div>

      {/* ── Top divider ── */}
      <div className="bs-divider" aria-hidden="true" />

      {/* ── Track 1: What I build → left ── */}
      <Track id="bs-track1" direction="left" durationSec={30}>
        {BUILD_ITEMS.map(({ Icon, label }) => (
          <li key={label} className="bs-item bs-item--build">
            <span className="bs-item__icon">
              <Icon />
            </span>
            <span className="bs-item__label">{label.toUpperCase()}</span>
            <span className="bs-item__sep" aria-hidden="true">{SEP}</span>
          </li>
        ))}
      </Track>

      {/* ── Track 2: Technologies → right ── */}
      <Track id="bs-track2" direction="right" durationSec={40}>
        {TECH_ITEMS.map(({ mark, label }) => (
          <li key={label} className="bs-item bs-item--tech">
            <span className="bs-item__mark" aria-hidden="true">{mark}</span>
            <span className="bs-item__label">{label.toUpperCase()}</span>
            <span className="bs-item__sep" aria-hidden="true">{SEP}</span>
          </li>
        ))}
      </Track>

      {/* ── Bottom divider ── */}
      <div className="bs-divider" aria-hidden="true" />
    </section>
  );
};

export default TechMarquee;
