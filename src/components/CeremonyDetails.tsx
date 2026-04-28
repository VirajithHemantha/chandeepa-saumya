import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin, Heart, Sparkles } from 'lucide-react';

export const CeremonyDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Premium ambient backdrop */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-brand-sakura/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-brand-sakura-deep uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                The Sacred Union
              </span>
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-brand-sakura-deep/60 to-transparent" />
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-stone-800 mb-8 leading-[1.1] drop-shadow-sm">
              A Celebration of <br />
              <span className="italic font-light text-brand-sakura-deep">Tradition & Love</span>
            </h2>

            <p className="text-stone-500/90 font-serif text-lg sm:text-xl leading-relaxed mb-16 max-w-lg">
              We are honored to invite you to witness our union as we exchange vows in a traditional Poruwa ceremony, surrounded by the beauty of nature and the warmth of our loved ones.
            </p>

            {/* Premium Timeline */}
            <div className="relative space-y-12 ml-10 sm:ml-12 border-l-[1.5px] border-brand-sakura/30 pl-10 sm:pl-12 py-4">

              {/* Calendar */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-sakura/40 shadow-lg flex items-center justify-center group-hover:border-brand-sakura-deep group-hover:shadow-[0_4px_15px_rgba(251,113,133,0.3)] transition-all duration-500">
                  <Calendar className="w-5 h-5 text-brand-sakura-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sans text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-sakura-deep transition-colors duration-500 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span>Thursday, Jan 28</span>
                    <span className="text-xl sm:text-2xl font-sinhala">ජනවාරි 28 බ්‍රහස්පතින්දා</span>
                  </h4>
                  <p className="text-stone-500/80 text-[14px] sm:text-[16px] uppercase tracking-[0.4em] font-bold">2027</p>
                </div>
              </div>

              {/* Clock */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-sakura/40 shadow-lg flex items-center justify-center group-hover:border-brand-sakura-deep group-hover:shadow-[0_4px_15px_rgba(251,113,133,0.3)] transition-all duration-500">
                  <Clock className="w-5 h-5 text-brand-sakura-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sans text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-sakura-deep transition-colors duration-500 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span>10:00 AM - 04:00 PM</span>
                    <span className="text-xl sm:text-2xl font-sinhala">උදැසන 10:00 සිට සවස 04:00 දක්වා</span>
                  </h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-normal font-bold">Wedding Ceremony & Reception | විවාහ මංගල උත්සවය සහ දිවා භෝජනය</p>
                  <p className="text-brand-sakura-deep text-[14px] sm:text-[16px] font-bold mt-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>PORUWA CEREMONY 10.05 A.M</span>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-sakura/40 shadow-lg flex items-center justify-center group-hover:border-brand-sakura-deep group-hover:shadow-[0_4px_15px_rgba(251,113,133,0.3)] transition-all duration-500">
                  <MapPin className="w-5 h-5 text-brand-sakura-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sans text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-sakura-deep transition-colors duration-500 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span>Green Serenity Holiday Resort</span>
                    <span className="text-xl sm:text-2xl font-sinhala">ග්‍රීන් සෙරෙනිටි හෝලිඩේ රිසෝට්</span>
                  </h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-normal font-bold">Elbalawa, Demataluwa, Kurunegala | කුරුණෑගල</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visual Composition (Image removed as requested) */}
        <div className="lg:w-1/2 w-full relative mt-16 lg:mt-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-md aspect-[4/5] flex items-center justify-center bg-white/40 rounded-[3rem] border border-white/60 shadow-xl overflow-hidden"
          >
            {/* Artistic Decoration instead of image */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-sakura/10 via-transparent to-brand-sakura-deep/10" />
            <div className="relative text-center p-12">
               <motion.img 
                 src="/50.png" 
                 alt="Ceremony Illustration" 
                 className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                 animate={{ scale: [1, 1.05, 1] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               />
               <h4 className="font-display text-4xl text-stone-800 mb-4 tracking-tight mt-6">The Reception</h4>
               <p className="text-stone-500/90 font-sans text-lg leading-relaxed">
                 Followed by a celebratory lunch and festivities at the Green Serenity Holiday Resort.
               </p>
            </div>



            {/* Decorative Floating Circles */}
            <div className="absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:w-32 rounded-full border-[1.5px] border-dashed border-brand-sakura/30 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -top-2 -right-2 w-16 sm:w-24 h-16 sm:w-24 rounded-full border-[1.5px] border-brand-sakura/20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

