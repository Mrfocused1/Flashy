import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, Instagram, Twitter } from 'lucide-react';

type View = 'home' | 'episodes' | 'host';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (target === 'episodes') {
      onNavigate('episodes');
    } else if (target === 'host') {
      onNavigate('host');
    } else if (target === 'home') {
      onNavigate('home');
    } else if (currentView !== 'home') {
      // If we're on a subpage and clicking a home section link, go home first
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(target);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // We're on home page, scroll to section
      const element = document.querySelector(target);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Episodes', target: 'episodes', isPage: true, view: 'episodes' },
    { name: 'The Host', target: 'host', isPage: true, view: 'host' },
    { name: 'Contact', target: '#contact', isPage: false, view: null },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-block-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 group"
          aria-label="Go to homepage"
        >
          <div className="w-10 h-10 bg-block-red flex items-center justify-center font-display font-bold text-xl skew-x-[-10deg] group-hover:skew-x-0 transition-transform">
            BR
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl leading-none tracking-tighter uppercase">The Block</span>
            <span className="font-display font-bold text-lg leading-none tracking-widest text-block-red uppercase">Report</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.isPage && link.view === currentView;
            return (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.target)}
                className={`text-sm font-semibold uppercase tracking-wider hover:text-block-red transition-colors relative group ${
                  isActive ? 'text-block-red' : ''
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-block-red transition-all ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            );
          })}
          <div className="w-px h-6 bg-white/20 mx-2" aria-hidden="true"></div>
          <div className="flex gap-4">
            <a
              href="https://www.youtube.com/@theblockreport_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-block-red transition-colors"
              aria-label="Visit The Block Report on YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="hover:text-block-red transition-colors"
              aria-label="Visit The Block Report on Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-block-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Close button inside menu */}
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {navLinks.map((link) => {
          const isActive = link.isPage && link.view === currentView;
          return (
            <button
              key={link.name}
              onClick={(e) => handleNavClick(e, link.target)}
              className={`font-display text-4xl font-bold uppercase hover:text-block-red transition-colors ${
                isActive ? 'text-block-red' : ''
              }`}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {link.name}
            </button>
          );
        })}
        <div className="flex gap-8 mt-8">
          <a
            href="https://www.youtube.com/@theblockreport_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-block-red transition-colors"
            aria-label="Visit The Block Report on YouTube"
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            <Youtube size={32} />
          </a>
          <a
            href="#"
            className="hover:text-block-red transition-colors"
            aria-label="Visit The Block Report on Instagram"
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            <Instagram size={32} />
          </a>
          <a
            href="#"
            className="hover:text-block-red transition-colors"
            aria-label="Visit The Block Report on Twitter"
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            <Twitter size={32} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
