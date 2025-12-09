import React from 'react';
import { Youtube, Instagram, Twitter, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-6 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6 group">
               <img
                 src="/TBR.svg"
                 alt="The Block Report"
                 className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
               />
            </a>
            <p className="text-gray-500 max-w-sm mb-6">
              The number one platform for UK Rap, Drill, and Grime. Keeping the culture alive, one freestyle at a time.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@theblockreport_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-block-red transition-all duration-300 hover:scale-110" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="https://www.instagram.com/flashysillah/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-block-red transition-all duration-300 hover:scale-110" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://twitter.com/FlashySillah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-block-red transition-all duration-300 hover:scale-110" aria-label="X/Twitter"><Twitter size={20} /></a>
              <a href="https://www.rinse.fm/shows/flashy-sillah" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-block-red transition-all duration-300 hover:scale-110" aria-label="Rinse FM"><Music2 size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg uppercase mb-6 tracking-widest">Sitemap</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="/" className="hover:text-block-red transition-all duration-300 hover:translate-x-2 inline-block link-underline">Home</a></li>
              <li><a href="/episodes" className="hover:text-block-red transition-all duration-300 hover:translate-x-2 inline-block link-underline">Episodes</a></li>
              <li><a href="/host" className="hover:text-block-red transition-all duration-300 hover:translate-x-2 inline-block link-underline">The Host</a></li>
              <li><a href="/#contact" className="hover:text-block-red transition-all duration-300 hover:translate-x-2 inline-block link-underline">Contact</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; 2024 The Block Report. All Rights Reserved.</p>
          <a href="https://www.bolalogos.com" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 hover:text-white transition-colors">Designed for the Culture.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
