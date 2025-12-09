import React from 'react';
import { Mic2, Radio, Award, ArrowUpRight } from 'lucide-react';

// Flashy Sillah photo from Complex UK interview
const HOST_IMAGE_URL = 'https://images.complex.com/complex/image/upload/q_auto,f_auto,c_fill,ar_1.11,w_2048,g_auto/v1723842154/sanity-new/flashy-sillah-the-block-report-interview-134049891.png';

interface AboutHostProps {
  onViewMore?: () => void;
}

const AboutHost: React.FC<AboutHostProps> = ({ onViewMore }) => {
  return (
    <section id="host" className="py-24 bg-white text-block-black relative overflow-hidden">
      {/* Background decoration text */}
      <div className="absolute top-0 right-0 font-display font-black text-[20rem] text-gray-100 leading-none select-none -z-10 opacity-50">
        SILLAH
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
                <img
                    src={HOST_IMAGE_URL}
                    alt="Flashy Sillah - Host of The Block Report"
                    className="w-full h-auto object-cover grayscale contrast-125"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-block-red flex items-center justify-center">
                    <span className="font-display font-bold text-white text-4xl -rotate-12">HOST</span>
                </div>
            </div>
            {/* Graphic Element */}
            <div className="absolute top-6 -left-6 w-full h-full border-4 border-black z-0 hidden md:block"></div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
              Flashy <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-block-red to-black">Sillah</span>
            </h2>

            <p className="text-xl md:text-2xl font-semibold mb-6">
              The voice of the streets. The pulse of the culture.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Flashy Sillah has cemented himself as a pivotal figure in UK media. Starting The Block Report in 2020 from a bench outside his estate in Tottenham, North London, he's since hosted the likes of Youngs Teflon, Kojey Radical, and M1OnTheBeat. From conducting viral street interviews to deep-dive sit-downs with the industry's heavyweights, his energy and authenticity are unmatched. He also hosts on Rinse FM, bringing underground heat and exclusive freestyles to the airwaves.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-100 p-6 border-l-4 border-block-red hover:bg-black hover:text-white transition-colors group">
                <Mic2 className="w-8 h-8 mb-4 text-block-red" />
                <h4 className="font-display font-bold text-xl uppercase mb-2">Unfiltered</h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-400">No PR scripts. Just real conversation.</p>
              </div>
              <div className="bg-gray-100 p-6 border-l-4 border-block-red hover:bg-black hover:text-white transition-colors group">
                <Radio className="w-8 h-8 mb-4 text-block-red" />
                <h4 className="font-display font-bold text-xl uppercase mb-2">Rinse FM</h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-400">Frontline dive into UK rap on the airwaves.</p>
              </div>
              <div className="bg-gray-100 p-6 border-l-4 border-block-red hover:bg-black hover:text-white transition-colors group">
                <Award className="w-8 h-8 mb-4 text-block-red" />
                <h4 className="font-display font-bold text-xl uppercase mb-2">Culture</h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-400">Documenting the scene for the future.</p>
              </div>
            </div>

            {onViewMore && (
              <button
                onClick={onViewMore}
                className="inline-flex items-center gap-2 px-8 py-4 bg-block-black text-white font-bold uppercase tracking-widest hover:bg-block-red transition-colors"
              >
                View Full Profile <ArrowUpRight size={18} />
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHost;
