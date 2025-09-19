
import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-brand-deep-blue/80 backdrop-blur-lg border-b border-brand-light-blue/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Gamepad2 className="w-8 h-8 text-brand-accent" />
          <h1 className="text-2xl font-serif font-bold text-white tracking-wider">
            AETHELGARD
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Features</a>
          <a href="#quests" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Quests</a>
          <a href="#gallery" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Gallery</a>
          <a href="#community" className="text-gray-300 hover:text-brand-accent transition-colors duration-300">Community</a>
        </nav>
        <button className="hidden md:block bg-brand-accent hover:bg-opacity-80 text-brand-deep-blue font-bold py-2 px-4 rounded-md transition-all duration-300 shadow-lg shadow-brand-accent/20">
          Wishlist Now
        </button>
      </div>
    </header>
  );
};

export default Header;
