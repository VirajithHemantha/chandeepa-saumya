import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music2, Volume2, VolumeX, Heart } from 'lucide-react';
import { FloatingPetals } from './components/FloatingPetals';
import { IntroVideo } from './components/IntroVideo';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { CeremonyDetails } from './components/CeremonyDetails';
import { CoupleDetails } from './components/CoupleDetails';
// Removed Timeline import
import { Location } from './components/Location';
// Removed RSVPForm import
import { Footer } from './components/Footer';

export default function App() {
  const [appState, setAppState] = useState<'landing' | 'video' | 'main'>('landing');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const weddingDate = new Date('2027-01-28T10:00:00');

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const startInvitation = () => {
    setAppState('video');
  };

  const handleVideoComplete = () => {
    setAppState('main');
    // Auto play music after video
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsMusicPlaying(true);
        }).catch(err => console.log("Audio auto-play blocked: ", err));
      }
    }, 500);
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden bg-brand-ivory">
      <FloatingPetals />
      
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/paulyudin-wedding-485932.mp3"
        loop
      />

      <AnimatePresence mode="wait">
        {appState === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[150] bg-brand-ivory flex items-center justify-center overflow-hidden"
          >
            {/* Premium background for landing */}
            <div className="absolute inset-0 opacity-40">
               <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sakura/20 blur-3xl rounded-full" />
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-sakura-deep/10 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10 text-center px-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-brand-sakura-deep/40" />
                  <Heart className="w-5 h-5 text-brand-sakura-deep fill-brand-sakura/20" />
                  <div className="h-[1px] w-12 bg-brand-sakura-deep/40" />
                </div>
                <h1 className="text-4xl sm:text-6xl font-display text-stone-800 mb-4 tracking-tight">
                  Ayesh <span className="italic text-brand-sakura-deep">&</span> Senuri
                </h1>
                <p className="text-stone-500 font-serif italic text-lg sm:text-xl">You are cordially invited</p>
              </motion.div>

              <motion.button
                onClick={startInvitation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-stone-800 text-brand-champagne rounded-full overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-brand-sakura/20"
              >
                <div className="absolute inset-0 bg-brand-sakura-deep translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 font-sans tracking-[0.3em] text-xs uppercase font-bold flex items-center gap-3">
                  View Invitation
                  <Music className="w-4 h-4 animate-bounce" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}

        {appState === 'video' && (
          <IntroVideo key="intro" onComplete={handleVideoComplete} />
        )}

        {appState === 'main' && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Music Toggle Button */}
            <button
              onClick={toggleMusic}
              className="fixed bottom-8 right-8 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center text-brand-sakura-deep hover:bg-stone-800 hover:text-brand-champagne transition-all active:scale-90 shadow-2xl group"
            >
              <div className="absolute inset-0 rounded-full border border-brand-sakura/20 scale-110 group-hover:scale-125 transition-transform" />
              {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </button>

            <section id="hero">
              <Hero />
            </section>

            <section id="countdown" className="py-16 sm:py-32 relative overflow-hidden bg-brand-champagne/30">
              {/* Premium Background Ambient Glows */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] bg-brand-sakura/30 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] bg-brand-sakura-deep/10 blur-[120px] rounded-full" />
              </div>
              
              <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-brand-sakura-deep/60" />
                  <span className="text-brand-sakura-deep uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">The Final Countdown</span>
                  <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-brand-sakura-deep/60" />
                </div>
                
                <h2 className="text-5xl sm:text-7xl font-display text-stone-800 tracking-tight mb-6 drop-shadow-sm">
                  Until We Say <span className="italic text-brand-sakura-deep font-light">"I Do"</span>
                </h2>
                
                <p className="text-lg sm:text-xl font-serif italic text-stone-600/80 mb-12 sm:mb-16 max-w-2xl text-center leading-relaxed">
                  Time is standing still as we eagerly await the moment our forever begins.
                </p>

                <Countdown targetDate={weddingDate} />
              </div>
            </section>

            <section id="couple" className="py-16 sm:py-32 bg-white">
              <CoupleDetails />
            </section>

            <section id="ceremony" className="py-16 sm:py-32 bg-brand-ivory">
              <CeremonyDetails />
            </section>

            {/* Timeline section removed entirely as requested */}

            <section id="location" className="py-16 sm:py-32 bg-white">
              <Location />
            </section>



            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

