
import React from 'react';

import type { Feature } from '../types';

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => {
  return (
    <div className="bg-brand-light-blue p-6 rounded-lg border border-brand-accent/20 transition-all duration-300 hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/10 hover:-translate-y-2">
      <div className="flex items-center mb-4 space-x-4">
        {icon}
        <h3 className="text-xl font-bold font-serif text-white">{title}</h3>
      </div>
      <p className="text-gray-400 font-light leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
