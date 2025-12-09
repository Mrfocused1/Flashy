import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Submit Music',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto URL with pre-filled data
    const recipient = 'promo@theblockreport.com';
    const subject = encodeURIComponent(`[${formData.subject}] Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open user's email client with pre-filled data
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-block-black relative overflow-hidden">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-4 text-white animate-slide-up">
            Get On The <span className="text-block-red animate-pulse-subtle">Report</span>
          </h2>
          <p className="text-gray-400 text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Think you got bars? Want to sponsor the show? Hit us up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10 animate-scale-in" style={{ animationDelay: '0.3s' }}>

          {/* Form */}
          <div>
            <h3 className="font-display font-bold text-3xl uppercase text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-block-black border border-white/20 p-4 text-white focus:border-block-red focus:outline-none transition-all duration-300 focus:scale-[1.02]"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-block-black border border-white/20 p-4 text-white focus:border-block-red focus:outline-none transition-all duration-300 focus:scale-[1.02]"
                    placeholder="email@address.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-block-black border border-white/20 p-4 text-white focus:border-block-red focus:outline-none transition-all duration-300 focus:scale-[1.02] appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                  >
                    <option value="Submit Music" className="bg-block-black text-white">Submit Music</option>
                    <option value="Booking Inquiry" className="bg-block-black text-white">Booking Inquiry</option>
                    <option value="Sponsorship" className="bg-block-black text-white">Sponsorship</option>
                    <option value="General Inquiry" className="bg-block-black text-white">General Inquiry</option>
                  </select>
                </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-block-black border border-white/20 p-4 text-white h-32 focus:border-block-red focus:outline-none transition-all duration-300 focus:scale-[1.02]"
                  placeholder="Tell us what's good..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-block-red hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover-lift btn-pulse group">
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
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
              <div className="flex group">
                <input type="email" placeholder="YOUR EMAIL" className="flex-1 bg-transparent border-b border-white/50 py-3 text-white focus:outline-none focus:border-block-red placeholder-gray-600 font-display uppercase tracking-wider transition-all duration-300" />
                <button className="text-block-red font-bold uppercase hover:text-white transition-all duration-300 hover:scale-110">Join</button>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-display font-bold text-xl uppercase text-white mb-4">Direct Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer group">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full group-hover:border-block-red group-hover:bg-block-red transition-all duration-300">
                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">promo@theblockreport.com</span>
                </li>
                 <li className="flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-300 cursor-pointer group">
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full group-hover:border-block-red group-hover:bg-block-red transition-all duration-300">
                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">bookings@flashysillah.com</span>
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
