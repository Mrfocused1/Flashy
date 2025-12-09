import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

// Featured videos from The Block Report for background slideshow
const HERO_VIDEO_IDS = [
  'vdD_u705jlo',
  'Mtgb-I9JsGA',
  'cidu96RuWHY',
  '2lNGCS2BflM',
  '-mqfUtxrT8M',
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_VIDEO_IDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pb-20">
      {/* Background Images Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_VIDEO_IDS.map((videoId, index) => (
          <img
            key={videoId}
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={`The Block Report ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-50' : 'opacity-0'
            }`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-block-black via-block-black/70 to-block-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 right-6 md:right-20 z-20 flex gap-2">
        {HERO_VIDEO_IDS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 transition-all duration-300 ${
              index === currentIndex
                ? 'bg-block-red w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 flex flex-col items-center text-center">
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm animate-slide-down" style={{ animationDelay: '0.2s' }}>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-subtle"></div>
            <span className="text-xs font-bold tracking-widest uppercase">New Episode Out Now</span>
        </div>

        <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <img
            src="/TBR.svg"
            alt="The Block Report"
            className="h-64 md:h-96 lg:h-[32rem] w-auto mx-auto"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(255, 0, 0, 0.4))'
            }}
          />
        </div>

        <p className="max-w-2xl text-gray-300 text-lg md:text-xl font-light mb-10 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          Hosted by <span className="font-bold text-white">Flashy Sillah</span>. The home of real conversations, street politics, and exclusive interviews with the UK's biggest artists.
        </p>

        <div className="flex flex-col md:flex-row gap-6 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <a href={`https://www.youtube.com/watch?v=${HERO_VIDEO_IDS[currentIndex]}`} target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-block-red text-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-red-600 hover-lift btn-pulse">
            <span className="relative z-10 flex items-center gap-2">
              Watch Latest <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
            </span>
          </a>

          <a href="https://www.youtube.com/@theblockreport_?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 hover-lift">
            Subscribe
          </a>
        </div>
      </div>

      {/* Floating Elements decoration */}
      <div className="absolute bottom-24 left-6 md:left-20 hidden md:block">
         <p className="font-display font-bold text-6xl opacity-10">THE CULTURE</p>
      </div>
      <div className="absolute top-1/2 right-6 md:right-20 -translate-y-1/2 hidden md:block rotate-90 origin-right">
         <p className="text-xs font-mono tracking-[0.3em] uppercase opacity-50">Scroll for more</p>
      </div>
    </section>
  );
};

export default Hero;
