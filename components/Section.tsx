
import React from 'react';

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wider">
            {title}
          </h2>
          <p className="mt-2 text-lg text-brand-accent uppercase tracking-widest">{subtitle}</p>
          <div className="mt-4 w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
