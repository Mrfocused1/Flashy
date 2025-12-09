import React from 'react';
import { Send, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-block-black relative">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-4 text-white">
            Get On The <span className="text-block-red">Report</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Think you got bars? Want to sponsor the show? Hit us up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10">

          {/* Form */}
          <div>
            <h3 className="font-display font-bold text-3xl uppercase text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Name</label>
                  <input type="text" className="w-full bg-block-black border border-white/20 p-4 text-white focus:border-block-red focus:outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Email</label>
                  <input type="email" className="w-full bg-block-black border border-white/20 p-4 text-white focus:border-block-red focus:outline-none transition-colors" placeholder="email@address.com" />
                </div>
              </div>
              <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Subject</label>
                  <select className="w-full bg-block-black border border-white/20 p-4 text-white focus:border-block-red focus:outline-none transition-colors">
                    <option>Submit Music</option>
                    <option>Booking Inquiry</option>
                    <option>Sponsorship</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Message</label>
                <textarea className="w-full bg-block-black border border-white/20 p-4 text-white h-32 focus:border-block-red focus:outline-none transition-colors" placeholder="Tell us what's good..."></textarea>
              </div>
              <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-block-red hover:text-white transition-colors flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pt-0 md:pl-12">
            <div>
              <h3 className="font-display font-bold text-3xl uppercase text-white mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-6">
                Don't miss a drop. Sign up to get notified when new freestyles and interviews land.
              </p>
              <div className="flex">
                <input type="email" placeholder="YOUR EMAIL" className="flex-1 bg-transparent border-b border-white/50 py-3 text-white focus:outline-none focus:border-block-red placeholder-gray-600 font-display uppercase tracking-wider" />
                <button className="text-block-red font-bold uppercase hover:text-white transition-colors">Join</button>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-display font-bold text-xl uppercase text-white mb-4">Direct Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full">
                    <Mail size={18} />
                  </div>
                  <span>promo@theblockreport.com</span>
                </li>
                 <li className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full">
                    <Mail size={18} />
                  </div>
                  <span>bookings@flashysillah.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
