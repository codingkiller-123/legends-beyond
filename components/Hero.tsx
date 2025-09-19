
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2&random=1')" }}
    >
      <div className="absolute inset-0 bg-brand-deep-blue bg-opacity-70"></div>
      <div className="relative z-10 p-6 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-widest uppercase" style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}>
          Aethelgard
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-wide">
          Echoes of a Forgotten Eternity
        </p>
        <button className="mt-8 bg-brand-gold hover:scale-105 text-brand-deep-blue font-bold py-3 px-8 rounded-lg transition-transform duration-300 shadow-lg shadow-brand-gold/30 text-lg">
          Discover the Legend
        </button>
      </div>
    </section>
  );
};

export default Hero;
