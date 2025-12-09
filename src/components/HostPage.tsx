import React, { useState, useEffect } from 'react';
import { Search, Play, ChevronRight, X, ExternalLink, Calendar, Instagram, Youtube, FileText, Headphones, ArrowUpRight } from 'lucide-react';

// Flashy Sillah photo from Complex UK interview
const HOST_IMAGE_URL = 'https://images.complex.com/complex/image/upload/q_auto,f_auto,c_fill,ar_1.11,w_2048,g_auto/v1723842154/sanity-new/flashy-sillah-the-block-report-interview-134049891.png';

interface MediaItem {
  id: string;
  type: 'video' | 'article' | 'podcast';
  title: string;
  source: string;
  url: string;
  videoId?: string;
  date: string;
  description?: string;
}

// All media appearances by Flashy Sillah - articles, interviews, podcasts, videos
const mediaAppearances: MediaItem[] = [
  // Articles & Written Interviews
  {
    id: '1',
    type: 'article',
    title: 'How Flashy Sillah\'s \'Block Report\' Is Pushing UK Rap Forward',
    source: 'Complex UK',
    url: 'https://www.complex.com/music/a/claudia-valentina-cagna/flashy-sillah-block-report-interview',
    date: 'September 2022',
    description: 'In-depth interview about the origin story of The Block Report, his long-term vision, and the importance of content creators owning their platforms.'
  },
  {
    id: '2',
    type: 'article',
    title: 'The Block Report Live - Bringing Undiscovered Talent to the Forefront',
    source: '99 Piece',
    url: 'https://99piece.com/blogs/news/the-block-report-live-bringing-undiscovered-talent-to-the-forefront-in-a-major-way',
    date: '2023',
    description: 'Feature on The Block Report Live showcases and how they\'re changing the underground music scene.'
  },
  {
    id: '3',
    type: 'article',
    title: 'The Block Report\'s Second Episode Arrives',
    source: 'Mixtape Madness',
    url: 'https://www.mixtapemadness.com/blog/videos/the-block-reports-second-epsiode-arrives',
    date: '2020',
    description: 'Coverage of the early days of The Block Report when it first launched on Mixtape Madness.'
  },
  {
    id: '4',
    type: 'article',
    title: 'The Block Report: What Are Our U.K. Classics?',
    source: 'Mixtape Madness',
    url: 'https://www.mixtapemadness.com/blog/shows/the-block-report-what-are-our-u-k-classics',
    date: '2021',
    description: 'Discussion on iconic UK rap classics with guests on The Block Report bench.'
  },
  {
    id: '5',
    type: 'article',
    title: 'The Block Report Invites M1OnTheBeat To The Bench',
    source: 'Mixtape Madness',
    url: 'https://www.mixtapemadness.com/blog/shows/the-block-report-invites-m1onthebeat-to-the-bench',
    date: '2021',
    description: 'Flashy Sillah welcomes legendary producer M1OnTheBeat to The Block Report.'
  },
  {
    id: '6',
    type: 'article',
    title: 'The Block Report Live Is Back With A Fresh New Line-Up',
    source: 'Mixtape Madness',
    url: 'https://www.mixtapemadness.com/blog/shows/the-block-report-live-is-back-with-a-fresh-new-line-up',
    date: 'February 2023',
    description: 'Announcement of the 3rd Block Report Live showcase featuring emerging UK talent.'
  },
  {
    id: '7',
    type: 'article',
    title: 'The CNSR Reconnects With Flashy Sillah On The Pengest Munch',
    source: 'GRM Daily',
    url: 'https://grmdaily.com/the-pengest-munch-episode-84/',
    date: 'October 2022',
    description: 'Flashy Sillah joins The Chicken Connoisseur to review Chick Stop in North London.'
  },
  // Podcast Appearances
  {
    id: '8',
    type: 'podcast',
    title: 'The UK Has Something To Say ft Flashy Sillah',
    source: 'The RARE Podcast',
    url: 'https://podcasts.apple.com/zw/podcast/the-uk-has-something-to-say-ft-flashy-sillah-the-rare-podcast/id1539548685?i=1000697505555',
    date: '2024',
    description: 'Discussion on the evolution of the UK music scene, from hip-hop to R&B and how the industry has changed.'
  },
  {
    id: '9',
    type: 'podcast',
    title: 'Ultimate UK RAP Album Bracket ft Flashy Sillah & Telli',
    source: 'Outchea Podcast',
    url: 'https://podcasts.apple.com/us/podcast/164-ultimate-uk-rap-album-bracket-ft-flashy-sillah-telli/id1577434832?i=1000673963461',
    date: 'October 2024',
    description: '16 iconic UK rap albums and mixtapes go head-to-head in an ultimate bracket showdown.'
  },
  {
    id: '10',
    type: 'podcast',
    title: '"Chill Unc" Ft Flashy Sillah',
    source: 'The Pull Up Podcast',
    url: 'https://www.imdb.com/title/tt33142873/',
    date: '2024',
    description: 'Episode 202 featuring an in-depth conversation with Flashy Sillah.'
  },
  // Radio & Video Appearances
  {
    id: '11',
    type: 'video',
    title: 'Flashy Sillah Show',
    source: 'Rinse FM',
    url: 'https://www.rinse.fm/shows/flashy-sillah',
    date: 'Ongoing',
    description: 'Monthly radio show on Rinse FM - frontline dive into UK rap, underground heat, and exclusive freestyles.'
  },
  {
    id: '12',
    type: 'video',
    title: 'Chris The Capo with Flashy Sillah',
    source: 'Rinse FM',
    url: 'https://www.rinse.fm/episodes/chris-the-capo-30-05-2022-1500/',
    date: 'May 2022',
    description: 'Guest appearance on Chris The Capo\'s Rinse FM show.'
  },
  {
    id: '13',
    type: 'video',
    title: 'NLE Choppa Interview at Rolling Loud Portugal',
    source: 'Complex UK',
    url: 'https://www.tiktok.com/@complex_uk/video/7254934759527304474',
    videoId: undefined,
    date: 'July 2023',
    description: 'Flashy Sillah interviews NLE Choppa backstage at Rolling Loud Portugal for Complex UK.'
  },
  {
    id: '14',
    type: 'video',
    title: 'The Pengest Munch Episode 84',
    source: 'The Chicken Connoisseur',
    url: 'https://www.youtube.com/watch?v=abc123',
    videoId: 'pengest-munch',
    date: 'October 2022',
    description: 'Flashy Sillah joins The Chicken Connoisseur in Broad Lane, North London. 126K+ views.'
  },
];

// Timeline milestones for Flashy Sillah's career
const timeline = [
  {
    year: '2011',
    title: 'Early Beginnings',
    description: 'Started following his sister to the studio at age 14, learning music structure and production.'
  },
  {
    year: '2016',
    title: 'Flash Squard',
    description: 'Joined creative collective Flash Squard in Tottenham, managing artists Millz and Ray Niro.'
  },
  {
    year: '2020',
    title: 'The Block Report Launches',
    description: 'Started The Block Report during COVID-19, filming from a bench outside his Tottenham estate.'
  },
  {
    year: '2021',
    title: 'Mixtape Madness Partnership',
    description: 'The Block Report becomes exclusively hosted on Mixtape Madness YouTube channel.'
  },
  {
    year: '2022',
    title: 'Complex UK Feature',
    description: 'Major interview with Complex UK, establishing himself as a key UK rap tastemaker.'
  },
  {
    year: '2022',
    title: 'The Block Report Live',
    description: 'Launched live open-mic showcases, discovering talent like Sony-signed artist Shakes.'
  },
  {
    year: '2023',
    title: 'Rolling Loud',
    description: 'Conducted interviews for Complex UK at Rolling Loud Portugal festival.'
  },
  {
    year: '2023',
    title: 'Brand Collaborations',
    description: 'Partnered with MOBOs, Amazon Music, JD Sports, and Adidas for various projects.'
  },
  {
    year: '2024',
    title: 'Rinse FM Residency',
    description: 'Secured monthly radio show on legendary station Rinse FM.'
  },
  {
    year: '2024',
    title: 'Legend Interviews',
    description: 'Interviewed UK and international legends including Ghetts, Jadakiss, and Vybz Kartel.'
  },
];

// Content Modal Component - handles articles, podcasts, and videos
const ContentModal: React.FC<{
  item: MediaItem;
  onClose: () => void;
}> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Get icon based on type
  const getIcon = () => {
    switch (item.type) {
      case 'article': return <FileText size={24} />;
      case 'podcast': return <Headphones size={24} />;
      case 'video': return <Play size={24} />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-6xl h-[90vh] flex flex-col animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 flex items-center justify-center ${
              item.type === 'article' ? 'bg-blue-600' :
              item.type === 'podcast' ? 'bg-purple-600' :
              'bg-block-red'
            }`}>
              {getIcon()}
            </div>
            <div>
              <p className="text-block-red text-sm font-bold uppercase tracking-wider">{item.source}</p>
              <h3 id="modal-title" className="font-display font-bold text-xl uppercase text-white">{item.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-block-red transition-colors flex items-center gap-2 font-bold uppercase tracking-wider text-sm group"
            aria-label="Close modal"
          >
            <span className="group-hover:underline hidden sm:inline">Close</span>
            <div className="w-10 h-10 border border-white/30 flex items-center justify-center group-hover:border-block-red group-hover:bg-block-red transition-all">
              <X size={20} />
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white border border-white/10 overflow-hidden">
          <iframe
            src={item.url}
            title={item.title}
            className="w-full h-full"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          {item.description && (
            <p className="text-gray-400 text-sm max-w-2xl">{item.description}</p>
          )}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors ml-auto"
          >
            Open in new tab <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

interface HostPageProps {
  onNavigateHome?: () => void;
}

const HostPage: React.FC<HostPageProps> = ({ onNavigateHome }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState<'All' | 'video' | 'article' | 'podcast'>('All');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter logic
  const filteredMedia = mediaAppearances.filter(item => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchLower) ||
      item.source.toLowerCase().includes(searchLower) ||
      (item.description?.toLowerCase().includes(searchLower) ?? false);
    const matchesType = activeType === 'All' || item.type === activeType;
    return matchesSearch && matchesType;
  });

  const handleMediaClick = (item: MediaItem) => {
    setSelectedMedia(item);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  const types = ['All', 'article', 'podcast', 'video'] as const;

  const typeCounts = {
    All: mediaAppearances.length,
    article: mediaAppearances.filter(m => m.type === 'article').length,
    podcast: mediaAppearances.filter(m => m.type === 'podcast').length,
    video: mediaAppearances.filter(m => m.type === 'video').length,
  };

  const typeLabels = {
    All: 'All',
    article: 'Articles',
    podcast: 'Podcasts',
    video: 'Videos',
  };

  return (
    <>
      <div className="min-h-screen bg-block-black pt-32 pb-20">
        <div className="container mx-auto px-6">

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
                <li aria-current="page" className="text-white">The Host</li>
              </ol>
            </nav>
          )}

          {/* Hero Section - Biography */}
          <header className={`mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Image */}
              <div className="lg:col-span-4 relative">
                <div className="relative">
                  <img
                    src={HOST_IMAGE_URL}
                    alt="Flashy Sillah - Host of The Block Report"
                    className="w-full aspect-square object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/flashysillah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-block-red transition-colors"
                        aria-label="Follow on Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                      <a
                        href="https://twitter.com/FlashySillah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-block-red transition-colors"
                        aria-label="Follow on X/Twitter"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.youtube.com/@theblockreport_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-block-red transition-colors"
                        aria-label="Subscribe on YouTube"
                      >
                        <Youtube size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-8">
                <h1 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter mb-4">
                  Flashy <span className="text-block-red">Sillah</span>
                </h1>
                <p className="text-xl text-gray-400 mb-6">
                  The Voice of the Streets. The Pulse of the Culture.
                </p>

                <div className="prose prose-lg prose-invert max-w-none mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Flashy Sillah</strong> is a driving force in UK rap, a leading tastemaker, journalist, and cultural connector known for championing raw talent through his acclaimed platform, <strong className="text-block-red">The Block Report</strong>.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Born and raised in <strong className="text-white">Tottenham, North London</strong>, Sillah grew up surrounded by the rich cultural heritage that produced legends like <strong>Skepta</strong>, <strong>Jme</strong>, <strong>Frisco</strong>, and <strong>Headie One</strong>. His sister, a singer on the live music scene, inspired him to start following her to the studio at age 14, where he learned how music is structured from the ground up.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    He officially entered the music industry as part of <strong className="text-white">Flash Squard</strong>, a creative collective in Tottenham where he managed artists Millz and Ray Niro. This experience gave him hands-on skills in A&R, production, and artist development.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    In <strong className="text-white">2020</strong>, during the COVID-19 pandemic, Sillah launched The Block Report from a bench outside his estate. What started as a way to document UK music culture has evolved into a full platform featuring in-depth interviews, high-energy cyphers, and live showcases that have discovered talents like <strong>Shakes</strong>, who signed to Sony's Dream Life Records after winning a Block Report Live event.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 p-4 text-center">
                    <div className="font-display font-bold text-3xl text-block-red">30+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Episodes</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 text-center">
                    <div className="font-display font-bold text-3xl text-block-red">17K</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Instagram</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 text-center">
                    <div className="font-display font-bold text-3xl text-block-red">5+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Brand Partners</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 text-center">
                    <div className="font-display font-bold text-3xl text-block-red">Rinse</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">FM Resident</div>
                  </div>
                </div>

                {/* Brand Collaborations */}
                <div className="flex flex-wrap gap-3">
                  {['MOBOs', 'Amazon Music', 'Rolling Loud', 'JD Sports', 'Adidas', 'Complex UK', 'Mixtape Madness', 'Rinse FM'].map((brand) => (
                    <span key={brand} className="px-3 py-1 bg-white/5 border border-white/10 text-sm text-gray-400">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Timeline Section */}
          <section className={`mb-20 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display font-bold text-4xl uppercase mb-8 flex items-center gap-4">
              <Calendar className="text-block-red" />
              The Journey
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20" aria-hidden="true"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white/5 border border-white/10 p-6 hover:border-block-red/50 transition-colors">
                        <span className="text-block-red font-mono text-sm">{item.year}</span>
                        <h3 className="font-display font-bold text-xl uppercase mt-1 mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-block-red transform -translate-x-1/2 mt-8" aria-hidden="true"></div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Media Directory Section */}
          <section className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-display font-bold text-4xl uppercase mb-8">
              Media <span className="text-block-red">Directory</span>
            </h2>

            {/* Search & Filter */}
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between border-b border-white/20 pb-8 mb-8">
              <div className="relative w-full lg:w-1/2 group">
                <label htmlFor="search-media" className="sr-only">Search articles, podcasts, videos</label>
                <input
                  id="search-media"
                  type="search"
                  placeholder="Search media..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xl font-display uppercase placeholder-gray-700 text-white outline-none py-2 pr-12"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-block-red" aria-hidden="true">
                  <Search size={24} />
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-block-red transition-all duration-500 group-focus-within:w-full"></div>
              </div>

              <fieldset className="flex flex-wrap gap-2">
                <legend className="sr-only">Filter by type</legend>
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`px-4 py-2 text-sm font-bold uppercase tracking-widest border transition-all duration-300 ${
                      activeType === type
                        ? 'bg-block-red text-white border-block-red'
                        : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-500 hover:text-gray-300'
                    }`}
                    aria-pressed={activeType === type}
                  >
                    {typeLabels[type]} <span className="text-xs opacity-60">({typeCounts[type]})</span>
                  </button>
                ))}
              </fieldset>
            </div>

            {/* Results count */}
            <p className="mb-6 text-gray-500 text-sm" aria-live="polite">
              Showing {filteredMedia.length} of {mediaAppearances.length} items
            </p>

            {/* Media Grid */}
            {filteredMedia.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
                {filteredMedia.map((item, index) => (
                  <article
                    key={item.id}
                    className={`group cursor-pointer bg-white/5 border border-white/10 hover:border-block-red/50 transition-all duration-500 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${Math.min(index * 50, 300)}ms` }}
                    onClick={() => handleMediaClick(item)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleMediaClick(item);
                      }
                    }}
                    tabIndex={0}
                    role="listitem"
                  >
                    <div className="p-6">
                      {/* Type Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-bold uppercase px-2 py-1 ${
                          item.type === 'article' ? 'bg-blue-600 text-white' :
                          item.type === 'podcast' ? 'bg-purple-600 text-white' :
                          'bg-block-red text-white'
                        }`}>
                          {item.type}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">{item.date}</span>
                      </div>

                      {/* Source */}
                      <p className="text-block-red text-sm font-bold uppercase tracking-wider mb-2">{item.source}</p>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg uppercase leading-tight group-hover:text-block-red transition-colors mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      {item.description && (
                        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{item.description}</p>
                      )}

                      {/* Action */}
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">
                        {item.type === 'video' ? (
                          <>
                            <Play size={14} /> Watch
                          </>
                        ) : (
                          <>
                            <ExternalLink size={14} /> Read
                          </>
                        )}
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center" role="status">
                <h3 className="font-display font-bold text-4xl text-gray-800 uppercase">No results found</h3>
                <p className="text-gray-600 mt-2">Try adjusting your search terms.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveType('All'); }}
                  className="mt-6 text-block-red uppercase font-bold tracking-widest hover:text-white transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>

          {/* Notable Interviews */}
          <section className="mt-20 text-center">
            <h2 className="font-display font-bold text-2xl uppercase mb-4 text-gray-500">Notable Interviews Conducted</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Ghetts', 'Jadakiss', 'Vybz Kartel', 'Youngs Teflon', 'Kojey Radical', 'M1OnTheBeat', 'NLE Choppa'].map((artist) => (
                <span key={artist} className="px-4 py-2 border border-white/20 text-white font-display font-bold uppercase">
                  {artist}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Content Modal */}
      {selectedMedia && (
        <ContentModal
          item={selectedMedia}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default HostPage;
