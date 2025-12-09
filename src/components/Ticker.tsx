import React from 'react';

interface TickerProps {
  text: string;
  direction?: 'normal' | 'reverse';
  className?: string;
}

const Ticker: React.FC<TickerProps> = ({ text, direction = 'normal', className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden py-6 bg-block-red text-black border-y-4 border-black ${className}`}>
      <div className={`whitespace-nowrap flex gap-8 ${direction === 'normal' ? 'animate-marquee' : 'animate-marquee-reverse'}`}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter flex items-center gap-8">
            {text} <span className="w-4 h-4 bg-black rotate-45"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
