
import React, { useState, useCallback } from 'react';
import { Sparkles, Dices, AlertTriangle } from 'lucide-react';
import { generateQuest } from '../services/geminiService';
import Loader from './Loader';

interface Quest {
  title: string;
  description: string;
}

const GeminiQuestGenerator: React.FC = () => {
  const [quest, setQuest] = useState<Quest | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateQuest = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setQuest(null);
    try {
      const questJsonString = await generateQuest();
      const parsedQuest = JSON.parse(questJsonString);
      setQuest(parsedQuest);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section id="quests" className="py-20 md:py-28 bg-brand-light-blue">
      <div className="container mx-auto px-6 text-center">
        <Sparkles className="mx-auto w-12 h-12 text-brand-gold animate-pulse-slow" />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wider mt-4">
          An Ever-Changing World
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
          Powered by generative AI, Aethelgard offers limitless adventures. Tap into the world's echo and discover a quest unique to your journey.
        </p>
        <button
          onClick={handleGenerateQuest}
          disabled={isLoading}
          className="mt-8 inline-flex items-center gap-3 bg-brand-accent hover:bg-opacity-80 disabled:bg-opacity-50 text-brand-deep-blue font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-brand-accent/20 text-lg disabled:cursor-not-allowed"
        >
          {isLoading ? <Loader /> : <Dices className="w-6 h-6" />}
          {isLoading ? 'Whispering to the Echoes...' : 'Generate a Unique Quest'}
        </button>

        <div className="mt-12 min-h-[150px] flex items-center justify-center">
          {quest && (
            <div className="max-w-3xl mx-auto bg-brand-deep-blue p-8 rounded-lg border border-brand-gold/30 shadow-2xl shadow-brand-gold/10 animate-fade-in-up">
              <h3 className="text-2xl font-serif text-brand-gold">{quest.title}</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">{quest.description}</p>
            </div>
          )}
          {error && (
            <div className="max-w-3xl mx-auto flex items-center gap-4 bg-red-900/50 text-red-200 p-6 rounded-lg border border-red-500 animate-fade-in-up">
                <AlertTriangle className="w-8 h-8 text-red-300"/>
                <div>
                    <h4 className="font-bold">An Echo Fades</h4>
                    <p>{error}</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiQuestGenerator;
