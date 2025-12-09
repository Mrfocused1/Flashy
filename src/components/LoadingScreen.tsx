import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  minDuration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
  minDuration = 2800
}) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // Show logo with slight delay for dramatic effect
    const logoTimer = setTimeout(() => setLogoVisible(true), 200);

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = Math.max(0.5, (100 - prev) / 12);
        return Math.min(100, prev + increment);
      });
    }, 40);

    // Trigger exit animation after minimum duration
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onLoadingComplete, 900);
    }, minDuration);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
    };
  }, [minDuration, onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-block-black flex flex-col items-center justify-center transition-all duration-900 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

      {/* Multiple Animated Background Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-block-red/30 rounded-full blur-[120px]"
          style={{ animation: 'pulse-subtle 2s ease-in-out infinite' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"
          style={{ animation: 'pulse-subtle 2s ease-in-out infinite 0.5s' }}
        ></div>
      </div>

      {/* Logo Container */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Animated Logo Section */}
        <div className="relative mb-16">

          {/* Outer Spinning Ring */}
          <div
            className={`absolute -inset-12 md:-inset-16 border border-block-red/20 transition-all duration-1000 ${
              isExiting ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
            }`}
            style={{ animation: 'spin 8s linear infinite' }}
          ></div>

          {/* Middle Spinning Ring (opposite direction) */}
          <div
            className={`absolute -inset-8 md:-inset-10 border border-white/10 transition-all duration-1000 ${
              isExiting ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
            }`}
            style={{ animation: 'spin 6s linear infinite reverse' }}
          ></div>

          {/* Inner Pulsing Ring */}
          <div
            className={`absolute -inset-4 md:-inset-6 border-2 border-block-red/40 transition-all duration-1000 ${
              isExiting ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
            }`}
            style={{ animation: 'pulse-subtle 1.5s ease-in-out infinite' }}
          ></div>

          {/* Corner Accents around logo */}
          <div className={`absolute -top-6 -left-6 w-4 h-4 border-l-2 border-t-2 border-block-red transition-all duration-700 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute -top-6 -right-6 w-4 h-4 border-r-2 border-t-2 border-block-red transition-all duration-700 delay-100 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute -bottom-6 -left-6 w-4 h-4 border-l-2 border-b-2 border-block-red transition-all duration-700 delay-200 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute -bottom-6 -right-6 w-4 h-4 border-r-2 border-b-2 border-block-red transition-all duration-700 delay-300 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}></div>

          {/* Logo Image with animations */}
          <div
            className={`transform transition-all duration-1000 ${
              isExiting
                ? 'scale-150 opacity-0'
                : logoVisible
                  ? 'scale-100 opacity-100'
                  : 'scale-50 opacity-0'
            }`}
            style={{
              filter: `drop-shadow(0 0 ${isExiting ? '100px' : '40px'} rgba(255, 0, 0, 0.6))`,
            }}
          >
            <img
              src="/TBR.svg"
              alt="The Block Report"
              className="h-48 md:h-64 lg:h-80 w-auto"
              style={{
                animation: logoVisible && !isExiting ? 'float 3s ease-in-out infinite' : 'none'
              }}
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div
          className={`w-64 md:w-80 relative transition-all duration-700 ${
            isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Track */}
          <div className="h-[2px] bg-white/10 w-full overflow-hidden rounded-full">
            {/* Fill */}
            <div
              className="h-full bg-gradient-to-r from-block-red to-red-500 transition-all duration-100 ease-out relative rounded-full"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer"></div>
              {/* Glow dot at end */}
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 0, 0, 0.5)' }}
              ></div>
            </div>
          </div>

          {/* Progress Text */}
          <div className="flex justify-between mt-4 text-xs font-mono uppercase tracking-widest">
            <span className="text-gray-600">Loading</span>
            <span
              className="text-white font-bold"
              style={{ textShadow: '0 0 10px rgba(255, 0, 0, 0.5)' }}
            >
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p
          className={`mt-10 text-gray-500 text-sm font-display uppercase tracking-[0.4em] transition-all duration-700 ${
            isExiting ? 'opacity-0 translate-y-4' : logoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          For the Culture
        </p>
      </div>

      {/* Animated Corner Decorations */}
      <div
        className={`absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/10 transition-all duration-700 ${
          logoVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-4 -translate-y-4'
        }`}
      ></div>
      <div
        className={`absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/10 transition-all duration-700 delay-100 ${
          logoVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 -translate-y-4'
        }`}
      ></div>
      <div
        className={`absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/10 transition-all duration-700 delay-200 ${
          logoVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-4 translate-y-4'
        }`}
      ></div>
      <div
        className={`absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/10 transition-all duration-700 delay-300 ${
          logoVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 translate-y-4'
        }`}
      ></div>

      {/* Decorative Lines */}
      <div
        className={`absolute top-1/2 left-8 w-12 h-[1px] bg-gradient-to-r from-block-red/50 to-transparent transition-all duration-1000 ${
          logoVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
        style={{ transformOrigin: 'left', transitionDelay: '0.4s' }}
      ></div>
      <div
        className={`absolute top-1/2 right-8 w-12 h-[1px] bg-gradient-to-l from-block-red/50 to-transparent transition-all duration-1000 ${
          logoVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
        style={{ transformOrigin: 'right', transitionDelay: '0.4s' }}
      ></div>
    </div>
  );
};

export default LoadingScreen;
