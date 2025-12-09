import React, { useState, useEffect } from 'react';
import { Search, Play, ChevronRight, X, ArrowUpRight, Filter } from 'lucide-react';

interface Episode {
  id: string;
  videoId: string;
  title: string;
  artist: string;
  category: 'Interview' | 'Freestyle' | 'Documentary' | 'Live' | 'Clip';
  location?: string;
}

// All videos from The Block Report YouTube channel (@theblockreport_)
// Ordered from most recent to oldest
const allEpisodes: Episode[] = [
  {
    id: '1',
    videoId: 'IZ-2YBHmS5g',
    title: 'Breaks Down Old Skl Racial Tensions in SE London',
    artist: 'Lucky Lavish',
    category: 'Interview',
  },
  {
    id: '2',
    videoId: 'e_K86J94LBk',
    title: '"80% of the TikTok Drill Scene Is From Greenwich"',
    artist: 'Lucky Lavish',
    category: 'Interview',
  },
  {
    id: '3',
    videoId: 'NN7aevvK7mM',
    title: 'Live From Cherry Orchard Estate, SE7',
    artist: 'Lucky Lavish',
    category: 'Live',
    location: 'Cherry Orchard Estate, SE7'
  },
  {
    id: '4',
    videoId: 'Mtgb-I9JsGA',
    title: '10,000! WHAT\'S NEXT FOR THE BLOCK REPORT?!',
    artist: 'The Block Report',
    category: 'Documentary',
  },
  {
    id: '5',
    videoId: 'PaLe0_-4lPU',
    title: 'Live From Albany Park, EN3',
    artist: 'PokeyNotPoky',
    category: 'Live',
    location: 'Albany Park, EN3'
  },
  {
    id: '6',
    videoId: 'ny4cKYM5mlY',
    title: 'I Am Mr Anything Green Get Bun...',
    artist: 'The Block Report',
    category: 'Clip',
  },
  {
    id: '7',
    videoId: 'xCtvEK800NI',
    title: 'Live From Church Road, NW10',
    artist: 'Ice City Boys (Zino x BabyFace x Trapstar Toxic)',
    category: 'Live',
    location: 'Church Road, NW10'
  },
  {
    id: '8',
    videoId: 'VLLy8dERCaw',
    title: '"In Church Road Everyone\'s Talented, All Generations"',
    artist: 'Trapstar Toxic',
    category: 'Interview',
  },
  {
    id: '9',
    videoId: 'vdD_u705jlo',
    title: 'Zino & BabyFace Take Us to the Churches ⛪',
    artist: 'Ice City Boys',
    category: 'Interview',
  },
  {
    id: '10',
    videoId: 'NC40QTd6tlY',
    title: 'Live From Tulse Hill Estate, SW2',
    artist: 'C1 #LTH',
    category: 'Live',
    location: 'Tulse Hill Estate, SW2'
  },
  {
    id: '11',
    videoId: 'EwMuA6eZdVg',
    title: '"Rapping Under 86 Never Made Sense For Me"',
    artist: 'C1 #LTH',
    category: 'Interview',
  },
  {
    id: '12',
    videoId: 'DclIer0zhsw',
    title: 'Reporting Live From Lee Bank B15, Birmingham',
    artist: 'UnrulyCMU',
    category: 'Live',
    location: 'Lee Bank B15, Birmingham'
  },
  {
    id: '13',
    videoId: 'DuAgibc8Nkc',
    title: '"I Started the Brumtroit Sound, Everyone\'s Running With It Now"',
    artist: 'UnrulyCMU',
    category: 'Interview',
  },
  {
    id: '14',
    videoId: 'pQW_WA7i03A',
    title: '"Birmingham Has Always Been Realer Than London…"',
    artist: 'UnrulyCMU',
    category: 'Interview',
  },
  {
    id: '15',
    videoId: 'cidu96RuWHY',
    title: 'Live From Grahame Park, NW9',
    artist: 'Sly Sterling & Rzo Munna',
    category: 'Live',
    location: 'Grahame Park, NW9'
  },
  {
    id: '16',
    videoId: 'h77xzdC0bn4',
    title: '"I Stopped Making Drill, It Weren\'t Making Sense"',
    artist: 'Rzo Munna',
    category: 'Interview',
  },
  {
    id: '17',
    videoId: 'nxSz0-iHZ9w',
    title: '"South Kilburn Could Never Chat To Us, We Run North West"',
    artist: 'Sly Sterling',
    category: 'Interview',
  },
  {
    id: '18',
    videoId: 'O5ilU8P75HE',
    title: 'Live From Bayonne Estate, W6',
    artist: 'W1ZZY',
    category: 'Live',
    location: 'Bayonne Estate, W6'
  },
  {
    id: '19',
    videoId: 'zbTca4g5V8M',
    title: '"I\'m About The 💰, Not Gang Banging in West London"',
    artist: 'W1ZZY',
    category: 'Interview',
  },
  {
    id: '20',
    videoId: 'i1MrcF4jP9U',
    title: 'Pouring Live On Wandsworth Road SW8',
    artist: 'Little Torment',
    category: 'Live',
    location: 'Wandsworth Road, SW8'
  },
  {
    id: '21',
    videoId: 'jt0lVfwdYYM',
    title: 'On Jail Life: "I Spent £3,000 On 🍃"',
    artist: 'Little Torment',
    category: 'Interview',
  },
  {
    id: '22',
    videoId: 'QG38Nc1dB7g',
    title: 'Live in the 60s, SW2 #SAD',
    artist: '(67) Monkey, Dopesmoke & R6',
    category: 'Live',
    location: 'SW2'
  },
  {
    id: '23',
    videoId: 'Qujk7cRWRTg',
    title: '"We Started UK Drill... Not Dem Man" - Who Started UK Drill & The Come Up',
    artist: '(67) Monkey',
    category: 'Interview',
  },
  {
    id: '24',
    videoId: '2lNGCS2BflM',
    title: 'Monkey and R6 Pressure Sillah to Drop and Give 50 😭',
    artist: '(67) Monkey & #SAD R6',
    category: 'Clip',
  },
  {
    id: '25',
    videoId: '-mqfUtxrT8M',
    title: 'Live From NPK, N17',
    artist: 'Uncs & The Sinners',
    category: 'Live',
    location: 'NPK, N17'
  },
  {
    id: '26',
    videoId: 'WiI4-jeR-sU',
    title: 'Why Sin Squad Haven\'t Blown Up... Yet',
    artist: 'Sin Squad',
    category: 'Interview',
  },
  {
    id: '27',
    videoId: 'zT1sPwChXPs',
    title: '"There Will Never Be Unity in Tottenham"',
    artist: 'Uncs #SinSquad',
    category: 'Interview',
  },
  {
    id: '28',
    videoId: '3dZ5oINKo-A',
    title: 'Live From Bine Street, E17',
    artist: '#TightRoad Baby',
    category: 'Live',
    location: 'Bine Street, E17'
  },
  {
    id: '29',
    videoId: 'bcg7HIGe2A4',
    title: '"I Was In Jail Acting Like It Was Lit" – Brazy Police Chases & Jail Time',
    artist: '#TightRoad Baby',
    category: 'Interview',
  },
  {
    id: '30',
    videoId: 'FSB04g9JZAA',
    title: 'Welcome to the Tight Road',
    artist: '#TightRoad Baby',
    category: 'Interview',
  },
];

// Video Modal Component
const VideoModal: React.FC<{
  videoId: string;
  title: string;
  artist: string;
  onClose: () => void;
}> = ({ videoId, title, artist, onClose }) => {
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
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-5xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-block-red transition-colors flex items-center gap-2 font-bold uppercase tracking-wider text-sm group"
          aria-label="Close video modal"
        >
          <span className="group-hover:underline">Close</span>
          <div className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:border-block-red group-hover:bg-block-red transition-all">
            <X size={16} />
          </div>
        </button>

        <div className="aspect-video bg-black border border-white/10">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h3 id="modal-title" className="font-display font-bold text-3xl uppercase text-block-red">{artist}</h3>
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

interface EpisodesProps {
  onNavigateHome?: () => void;
}

const Episodes: React.FC<EpisodesProps> = ({ onNavigateHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Interview' | 'Freestyle' | 'Documentary' | 'Live' | 'Clip'>('All');
  const [selectedVideo, setSelectedVideo] = useState<Episode | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter logic
  const filteredEpisodes = allEpisodes.filter(episode => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      episode.artist.toLowerCase().includes(searchLower) ||
      episode.title.toLowerCase().includes(searchLower) ||
      (episode.location?.toLowerCase().includes(searchLower) ?? false);
    const matchesCategory = activeCategory === 'All' || episode.category === activeCategory;
    return matchesSearch && matchesCategory;
  });


  const getThumbnail = (videoId: string) => `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleVideoClick = (episode: Episode) => {
    setSelectedVideo(episode);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  const categories = ['All', 'Live', 'Interview', 'Clip', 'Documentary'] as const;

  // Count videos per category
  const categoryCounts = {
    All: allEpisodes.length,
    Live: allEpisodes.filter(e => e.category === 'Live').length,
    Interview: allEpisodes.filter(e => e.category === 'Interview').length,
    Clip: allEpisodes.filter(e => e.category === 'Clip').length,
    Documentary: allEpisodes.filter(e => e.category === 'Documentary').length,
    Freestyle: allEpisodes.filter(e => e.category === 'Freestyle').length,
  };

  return (
    <>
      <div className="min-h-screen bg-block-black pt-32 pb-20">
        <div className="container mx-auto px-6">

          {/* Header & Search Section */}
          <header className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            {/* Breadcrumb */}
            {onNavigateHome && (
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-gray-500">
                  <li>
                    <button
                      onClick={onNavigateHome}
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </button>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-white">Episodes</li>
                </ol>
              </nav>
            )}

            <h1 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-4">
              The Episodes
            </h1>
            <p className="text-gray-500 text-lg mb-8">
              {allEpisodes.length} videos from The Block Report
            </p>

            {/* Search */}
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between border-b border-white/20 pb-8">
              <div className="relative w-full lg:w-1/2 group">
                <label htmlFor="search-episodes" className="sr-only">Search artists, titles, or locations</label>
                <input
                  id="search-episodes"
                  type="search"
                  placeholder="Search artists, titles, locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xl md:text-2xl font-display uppercase placeholder-gray-700 text-white outline-none py-2 pr-12"
                  aria-describedby="search-results-count"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-block-red" aria-hidden="true">
                  <Search size={24} />
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-block-red transition-all duration-500 group-focus-within:w-full"></div>
              </div>

              {/* Filter Toggle (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                aria-expanded={showFilters}
              >
                <Filter size={20} />
                Filters
              </button>

              {/* Category Filters */}
              <fieldset className={`flex flex-wrap gap-2 ${showFilters ? 'block' : 'hidden lg:flex'}`}>
                <legend className="sr-only">Filter by category</legend>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-sm font-bold uppercase tracking-widest border transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-block-red text-white border-block-red'
                        : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-500 hover:text-gray-300'
                    }`}
                    aria-pressed={activeCategory === cat}
                  >
                    {cat} <span className="text-xs opacity-60">({categoryCounts[cat]})</span>
                  </button>
                ))}
              </fieldset>
            </div>

            {/* Results count */}
            <p id="search-results-count" className="mt-4 text-gray-500 text-sm" aria-live="polite">
              Showing {filteredEpisodes.length} of {allEpisodes.length} episodes
              {searchQuery && ` for "${searchQuery}"`}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
            </p>
          </header>

          {/* Results Grid */}
          {filteredEpisodes.length > 0 ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6"
              role="list"
              aria-label="Episodes list"
            >
              {filteredEpisodes.map((ep, index) => (
                <article
                  key={ep.id}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${Math.min(index * 30, 300)}ms` }}
                  onClick={() => handleVideoClick(ep)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleVideoClick(ep);
                    }
                  }}
                  tabIndex={0}
                  role="listitem"
                  aria-label={`${ep.artist}: ${ep.title}. Category: ${ep.category}`}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-block-gray mb-4 overflow-hidden border border-white/5 group-hover:border-block-red/50 group-focus:border-block-red/50 transition-colors">
                    <img
                      src={getThumbnail(ep.videoId)}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${ep.videoId}/hqdefault.jpg`;
                      }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-focus:scale-110 group-hover:bg-block-red group-focus:bg-block-red group-hover:border-block-red group-focus:border-block-red transition-all duration-300">
                        <Play size={28} fill="currentColor" className="text-white ml-1" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-white text-xs font-bold uppercase px-2 py-1 tracking-wider ${
                        ep.category === 'Live' ? 'bg-block-red' :
                        ep.category === 'Interview' ? 'bg-blue-600' :
                        ep.category === 'Clip' ? 'bg-purple-600' :
                        'bg-black/80 border border-white/20'
                      }`}>
                        {ep.category}
                      </span>
                    </div>

                    {/* Location Tag */}
                    {ep.location && (
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-black/70 text-white text-xs px-2 py-1 backdrop-blur-sm">
                          📍 {ep.location}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-1">
                    <h2 className="font-display font-bold text-xl uppercase leading-tight group-hover:text-block-red group-focus:text-block-red transition-colors line-clamp-1">
                      {ep.artist}
                    </h2>
                    <p className="text-gray-400 text-sm line-clamp-2">{ep.title}</p>

                    <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-white group-focus:text-white transition-colors">
                      Watch Now <ChevronRight size={14} className="group-hover:translate-x-1 group-focus:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center" role="status">
              <h2 className="font-display font-bold text-4xl text-gray-800 uppercase">No episodes found</h2>
              <p className="text-gray-600 mt-2">Try adjusting your search terms or filters.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-6 text-block-red uppercase font-bold tracking-widest hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-block-red focus:ring-offset-2 focus:ring-offset-block-black px-4 py-2"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* View More on YouTube */}
          <div className="mt-16 text-center">
            <a
              href="https://www.youtube.com/@theblockreport_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-block-black"
            >
              Subscribe on YouTube <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>

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

export default Episodes;
