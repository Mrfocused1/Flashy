import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Showcase from './components/Showcase';
import AboutHost from './components/AboutHost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Episodes from './components/Episodes';
import HostPage from './components/HostPage';

type View = 'home' | 'episodes' | 'host';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/episodes') {
        setCurrentView('episodes');
      } else if (path === '/host') {
        setCurrentView('host');
      } else {
        setCurrentView('home');
      }
    };

    // Check initial URL
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    const paths: Record<View, string> = {
      home: '/',
      episodes: '/episodes',
      host: '/host'
    };
    window.history.pushState({}, '', paths[view]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'episodes':
        return <Episodes onNavigateHome={() => navigateTo('home')} />;
      case 'host':
        return <HostPage onNavigateHome={() => navigateTo('home')} />;
      default:
        return (
          <>
            <Hero />
            <Ticker text="Flashy Sillah presents The Block Report • Exclusive Interviews • Live Performances • " />
            <Showcase onViewAllEpisodes={() => navigateTo('episodes')} />
            <Ticker text="UK's Finest • Next Up • Freestyle Sessions • Street Vox Pops • " direction="reverse" className="bg-white text-black border-y-0" />
            <AboutHost onViewMore={() => navigateTo('host')} />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-block-black text-white selection:bg-block-red selection:text-white">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      {renderView()}
      <Footer />
    </div>
  );
}

export default App;
