
import React from 'react';
import {
  Globe,
  Feather,
  Sword,
  Users,
  BrainCircuit,
  Puzzle,
  Camera,
  HeartHandshake,
  BotMessageSquare,
  Sparkles,
  Palette,
  Coins
} from 'lucide-react';

import type { Feature } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Section from './components/Section';
import GeminiQuestGenerator from './components/GeminiQuestGenerator';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  const features: Feature[] = [
    { 
      icon: <Globe className="w-8 h-8 text-brand-accent" />, 
      title: 'Open World Realism', 
      description: 'Explore a massive world with diverse biomes, dynamic weather, and realistic physics that affect gameplay.' 
    },
    { 
      icon: <Feather className="w-8 h-8 text-brand-accent" />, 
      title: 'Immersive Storytelling', 
      description: 'Experience a branching narrative where your decisions matter, with AI NPCs that remember your actions.' 
    },
    { 
      icon: <Sword className="w-8 h-8 text-brand-accent" />, 
      title: 'Advanced Gameplay', 
      description: 'Master deep combat, parkour, crafting, and diplomacy. Form alliances or rivalries with unique factions.' 
    },
    { 
      icon: <BrainCircuit className="w-8 h-8 text-brand-accent" />, 
      title: 'Smart AI Companions', 
      description: 'Team up with AI companions that learn your strategies and grow with you. Face enemies with adaptive tactics.' 
    },
    { 
      icon: <Users className="w-8 h-8 text-brand-accent" />, 
      title: 'Global & Cultural Appeal', 
      description: 'Discover diverse cultures and traditions woven into quests, with events based on real-world festivals.' 
    },
    { 
      icon: <Sparkles className="w-8 h-8 text-brand-accent" />, 
      title: 'Next-Gen Technology', 
      description: 'Immerse yourself with VR/AR compatibility, cross-platform play, and AI-generated content for endless replayability.' 
    },
    { 
      icon: <Coins className="w-8 h-8 text-brand-accent" />, 
      title: 'Player-Friendly', 
      description: 'Enjoy a free-to-play experience with cosmetic-only purchases and a player-driven economy. No pay-to-win.' 
    },
    { 
      icon: <Camera className="w-8 h-8 text-brand-accent" />, 
      title: 'Cinematic Photo Mode', 
      description: 'Capture and share your epic moments with a powerful in-game photo and video mode with advanced cinematic tools.'
    },
  ];

  return (
    <div className="bg-brand-deep-blue overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Section title="The World of Aethelgard Awaits" subtitle="Core Features">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </Section>
        <GeminiQuestGenerator />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
