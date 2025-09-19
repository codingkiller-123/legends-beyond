
import React from 'react';
import { Twitter, Youtube, Twitch, Disc } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="community" className="bg-brand-light-blue border-t border-brand-accent/20">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-serif font-bold text-white">AETHELGARD</h2>
            <p className="text-gray-400 mt-2">Join the community and shape the world.</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Youtube className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Twitch className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-brand-accent transition-colors"><Disc className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aethelgard Studios. A fictional concept. All rights reserved.</p>
          <p className="mt-1">This page is a conceptual demonstration and not a real game.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
