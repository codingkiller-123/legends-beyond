
import React from 'react';

const galleryImages = [
  { src: 'https://picsum.photos/800/600?random=2', alt: 'Mystical Forest', topic: 'forest,fantasy' },
  { src: 'https://picsum.photos/800/600?random=3', alt: 'Futuristic City', topic: 'cyberpunk,city' },
  { src: 'https://picsum.photos/800/600?random=4', alt: 'Vast Desert', topic: 'desert,ruins' },
  { src: 'https://picsum.photos/800/600?random=5', alt: 'Ancient Temple', topic: 'temple,ancient' },
  { src: 'https://picsum.photos/800/600?random=6', alt: 'Underwater Realm', topic: 'underwater,ocean' },
  { src: 'https://picsum.photos/800/600?random=7', alt: 'Floating Islands', topic: 'sky,island' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-brand-deep-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wider">
            Glimpses of the World
          </h2>
          <p className="mt-2 text-lg text-brand-accent uppercase tracking-widest">Visual Showcase</p>
          <div className="mt-4 w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-end p-4">
                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
