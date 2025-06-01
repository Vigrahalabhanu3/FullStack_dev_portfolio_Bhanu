import React from 'react';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, highlight, subtitle }) => {
  const parts = highlight ? title.split(highlight) : [title];
  
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {parts[0]}
        {highlight && <span className="blue-gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;