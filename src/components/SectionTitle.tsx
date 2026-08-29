import React from 'react';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, highlight, subtitle }) => {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className="mb-12 md:mb-16">
      <h2
        className="mb-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl md:text-5xl"
        style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
      >
        {parts[0]}
        {highlight && <span className="blue-gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-slate-500 sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
