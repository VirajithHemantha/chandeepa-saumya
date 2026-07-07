import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { FloatingPetals } from './FloatingPetals';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-ivory/50">

      {/* Background with Elegant Overlay */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ y: y1, scale }}
      >
        {/* Background Image with Cinematic Finish */}
        <div 
          className="absolute inset-0 bg-cover bg-[center_15%] bg-no-repeat transition-all duration-1000 saturate-[0.3] contrast-[0.95] opacity-55"
          style={{ backgroundImage: "url('/bride_couple.webp')" }}
        />
        
        {/* Cinematic Vignette & Color Grading */}
        <div className="absolute inset-0 bg-brand-ivory/50 mix-blend-multiply" />
        
        {/* Soft elegant gradient overlays to ensure text readability & premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ivory via-brand-ivory/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-sakura/20 via-transparent to-brand-ivory/70 mix-blend-overlay" />
        
        {/* Radial inner glow for focusing content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,253,249,0.5)_100%)]" />
      </motion.div>

      {/* Persistent subtle falling petals in background */}
      <div className="absolute inset-0 z-[5] opacity-60">
        <FloatingPetals />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 w-full max-w-6xl mt-10 sm:mt-20"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Subtle top decoration */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-brand-sakura-deep/60 to-transparent" />
            <Heart className="w-5 h-5 text-brand-sakura-deep/70 fill-brand-sakura/20" />
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-brand-sakura-deep/60 to-transparent" />
          </div>

          <span className="text-brand-sakura-deep uppercase tracking-[0.4em] sm:tracking-[0.6em] text-xs sm:text-sm font-medium mb-6 sm:mb-10 block drop-shadow-sm font-sans">
            Lovely wedding ceremony | ආදරණීය විවාහ මංගල උත්සවය
          </span>

          <div className="relative mb-8 sm:mb-12 w-full flex justify-center">
            {/* Soft glow behind text for contrast and magical feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] bg-white/40 blur-[50px] sm:blur-[80px] rounded-full pointer-events-none" />

            <h1 className="relative text-5xl sm:text-[6rem] lg:text-[8rem] font-display text-stone-800 leading-[1.1] sm:leading-[0.9] drop-shadow-sm flex flex-col items-center">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
                 <span>Chandeepa</span>
                 <span className="text-brand-sakura-deep italic font-light text-4xl sm:text-[5rem] lg:text-[7rem] inline-block">&</span>
                 <span>Saumya</span>
              </div>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-sinhala text-stone-800 tracking-tight mt-4 sm:mt-8">
                චංදීප <span className="text-brand-sakura-deep italic font-light mx-2">&</span> සෞම්‍යා
              </div>
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="hidden sm:block h-[1px] w-20 bg-gradient-to-r from-transparent to-brand-sakura-deep/40" />
            <div className="px-4 text-center max-w-xl space-y-4">
              <p className="text-[1.1rem] sm:text-2xl font-serif italic text-stone-700 tracking-wide leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]">
                Together with our families, we joyfully invite you to join us
              </p>
              <p className="text-lg sm:text-xl font-sinhala text-stone-600 leading-relaxed">
                අපගේ පවුල් වල සාමාජිකයින් සමඟ එක්ව, අපගේ විවාහ මංගල උත්සවය සඳහා අප ඔබව මහත් ප්‍රීතියෙන් යුතුව ආරාධනා කර සිටිනවා.
              </p>
            </div>
            <div className="hidden sm:block h-[1px] w-20 bg-gradient-to-l from-transparent to-brand-sakura-deep/40" />
          </div>

          {/* Enhanced Date pill with premium glass effect */}
          <div className="inline-block relative group mt-4 sm:mt-8 w-full sm:w-auto px-4 sm:px-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-sakura-deep/40 via-brand-sakura/40 to-brand-sakura-deep/40 rounded-full blur-[8px] opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 transform group-hover:scale-105" />
            <div className="relative px-6 sm:px-10 py-3 sm:py-5 bg-white/70 backdrop-blur-lg border border-brand-sakura/50 rounded-full shadow-[0_8px_30px_rgba(251,113,133,0.15)] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
              <span className="relative text-[14px] sm:text-2xl font-serif text-brand-sakura-deep tracking-[0.15em] sm:tracking-[0.3em] font-medium drop-shadow-sm flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-brand-sakura flex-shrink-0" />
                13 . 08 . 2026
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-brand-sakura flex-shrink-0" />
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Premium Side Decorative Text */}
      <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 mix-blend-multiply opacity-70">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-brand-sakura-deep/50" />
        <p className="writing-mode-vertical text-[11px] uppercase tracking-[0.6em] text-brand-sakura-deep font-semibold font-sans">
          Heritage Hotel • Anuradhapura
        </p>
        <div className="w-[1px] h-24 bg-gradient-to-t from-transparent to-brand-sakura-deep/50" />
      </div>

      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 mix-blend-multiply opacity-70">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-brand-sakura-deep/50" />
        <p className="writing-mode-vertical text-[11px] uppercase tracking-[0.6em] text-brand-sakura-deep font-semibold font-sans rotate-180">
          Save the Date • August 2026
        </p>
        <div className="w-[1px] h-24 bg-gradient-to-t from-transparent to-brand-sakura-deep/50" />
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.4em] text-stone-500 font-semibold drop-shadow-md">Discover</span>
        <div className="w-[1px] h-12 sm:h-20 bg-gradient-to-b from-brand-sakura-deep/60 to-transparent animate-bounce" />
      </motion.div>
    </div>
  );
};
