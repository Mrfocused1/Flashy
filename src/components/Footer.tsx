import React from 'react';
import { Youtube, Instagram, Twitter, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-6 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-block-red flex items-center justify-center font-display font-bold skew-x-[-10deg]">BR</div>
               <span className="font-display font-bold text-2xl uppercase">The Block Report</span>
            </a>
            <p className="text-gray-500 max-w-sm mb-6">
              The number one platform for UK Rap, Drill, and Grime. Keeping the culture alive, one freestyle at a time.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@theblockreport_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-block-red transition-colors"><Youtube size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-block-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-block-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-block-red transition-colors"><Music2 size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg uppercase mb-6 tracking-widest">Sitemap</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-block-red transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-block-red transition-colors">Episodes</a></li>
              <li><a href="#" className="hover:text-block-red transition-colors">Interviews</a></li>
              <li><a href="#" className="hover:text-block-red transition-colors">About Host</a></li>
              <li><a href="#" className="hover:text-block-red transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg uppercase mb-6 tracking-widest">Legal</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#" className="hover:text-block-red transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-block-red transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-block-red transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; 2024 The Block Report. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed for the Culture.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
