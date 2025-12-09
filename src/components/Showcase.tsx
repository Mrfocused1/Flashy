import React, { useState, useEffect } from 'react';
import { PlayCircle, ArrowUpRight, X } from 'lucide-react';

interface Episode {
  id: string;
  videoId: string;
  title: string;
  artist: string;
  category: 'Freestyle' | 'Interview' | 'Documentary' | 'Live';
  date: string;
}

// Featured videos from The Block Report YouTube channel (@theblockreport_)
// Most recent 6 videos
const episodes: Episode[] = [
  {
    id: '1',
    videoId: 'IZ-2YBHmS5g',
    title: 'Breaks Down Old Skl Racial Tensions in SE London',
    artist: 'Lucky Lavish',
    category: 'Interview',
    date: 'Latest'
  },
  {
    id: '2',
    videoId: 'e_K86J94LBk',
    title: '"80% of the TikTok Drill Scene Is From Greenwich"',
    artist: 'Lucky Lavish',
    category: 'Interview',
    date: 'SE7'
  },
  {
    id: '3',
    videoId: 'NN7aevvK7mM',
    title: 'Live From Cherry Orchard Estate, SE7',
    artist: 'Lucky Lavish',
    category: 'Live',
    date: 'SE7'
  },
  {
    id: '4',
    videoId: 'Mtgb-I9JsGA',
    title: '10,000! WHAT\'S NEXT FOR THE BLOCK REPORT?!',
    artist: 'The Block Report',
    category: 'Documentary',
    date: 'Milestone'
  },
  {
    id: '5',
    videoId: 'PaLe0_-4lPU',
    title: 'Live From Albany Park, EN3',
    artist: 'PokeyNotPoky',
    category: 'Live',
    date: 'EN3'
  },
  {
    id: '6',
    videoId: 'xCtvEK800NI',
    title: 'Live From Church Road, NW10',
    artist: 'Ice City Boys',
    category: 'Live',
    date: 'NW10'
  },
];

// Video Modal Component
const VideoModal: React.FC<{
  videoId: string;
  title: string;
  artist: string;
  onClose: () => void;
}> = ({ videoId, title, artist, onClose }) => {
  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-block-red transition-colors flex items-center gap-2 font-bold uppercase tracking-wider text-sm group"
        >
          <span className="group-hover:underline">Close</span>
          <div className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:border-block-red group-hover:bg-block-red transition-all">
            <X size={16} />
          </div>
        </button>

        {/* Video Container */}
        <div className="aspect-video bg-black border border-white/10">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Info */}
        <div className="mt-6 text-white flex justify-between items-end">
          <div>
            <h3 className="font-display font-bold text-3xl uppercase text-block-red">{artist}</h3>
            <p className="text-gray-400 text-lg">{title}</p>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1"
          >
            Watch on YouTube <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

interface ShowcaseProps {
  onViewAllEpisodes?: () => void;
}

const Showcase: React.FC<ShowcaseProps> = ({ onViewAllEpisodes }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Episode | null>(null);

  // Generate YouTube thumbnail URL from video ID
  const getThumbnail = (videoId: string) => `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleVideoClick = (episode: Episode) => {
    setSelectedVideo(episode);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="episodes" className="py-20 bg-block-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-display font-bold text-5xl md:text-7xl uppercase mb-2">Latest <span className="text-block-red">Uploads</span></h2>
              <p className="text-gray-400 text-lg">Fresh interviews and street content.</p>
            </div>
{onViewAllEpisodes ? (
              <button
                onClick={onViewAllEpisodes}
                className="hidden md:flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-block-red transition-colors"
              >
                View All Episodes <ArrowUpRight size={20} />
              </button>
            ) : (
              <a href="https://www.youtube.com/@theblockreport_" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-block-red transition-colors">
                View Channel <ArrowUpRight size={20} />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((ep) => (
              <div
                key={ep.id}
                onClick={() => handleVideoClick(ep)}
                className="group relative cursor-pointer overflow-hidden bg-block-gray block"
                onMouseEnter={() => setHoveredId(ep.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={getThumbnail(ep.videoId)}
                    alt={ep.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                    onError={(e) => {
                      // Fallback to hqdefault if maxresdefault doesn't exist
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${ep.videoId}/hqdefault.jpg`;
                    }}
                  />

                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 bg-block-red/80 flex items-center justify-center transition-opacity duration-300 ${hoveredId === ep.id ? 'opacity-90' : 'opacity-0'}`}>
                     <PlayCircle size={64} className="text-white drop-shadow-lg scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" />
                  </div>
                </div>

                {/* Info Card - Always visible but styled differently on hover */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-block-red text-white text-[10px] font-bold uppercase px-2 py-1 tracking-wider">{ep.category}</span>
                    <span className="text-gray-400 text-xs font-mono uppercase">{ep.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase leading-none mb-1 group-hover:text-block-red transition-colors">{ep.artist}</h3>
                  <p className="font-medium text-gray-300 truncate group-hover:text-white transition-colors">{ep.title}</p>
                  <div className="mt-4 w-full h-px bg-white/20 group-hover:bg-white transition-colors"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            {onViewAllEpisodes ? (
              <button
                onClick={onViewAllEpisodes}
                className="inline-block px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                View All Episodes
              </button>
            ) : (
              <a href="https://www.youtube.com/@theblockreport_" className="inline-block px-8 py-4 border border-white text-white font-bold uppercase tracking-widest">
                View All Episodes
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          videoId={selectedVideo.videoId}
          title={selectedVideo.title}
          artist={selectedVideo.artist}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Showcase;
