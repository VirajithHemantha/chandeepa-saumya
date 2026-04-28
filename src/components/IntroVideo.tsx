import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Attempt to play automatically
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
        // If autoplay fails, we show a "Start" button
        setIsStarted(false);
      });
    }
  }, []);

  const handlePlay = () => {
    setIsStarted(true);
  };

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsStarted(true);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/Cartoon_bride_groom_202604191444.mp4"
        playsInline
        onPlay={handlePlay}
        onEnded={onComplete}
        onError={() => setHasError(true)}
        autoPlay
      />

      {/* Manual Start button removed as we handle interaction in App.tsx */}
      {!isStarted && !hasError && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
           <div className="w-12 h-12 border-4 border-brand-sakura-deep border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Fallback if video fails to load */}
      {hasError && (
        <div className="flex flex-col items-center gap-4 text-white text-center px-6">
          <p className="font-serif text-xl italic">Unable to load the intro video.</p>
          <button
            onClick={onComplete}
            className="px-6 py-2 bg-brand-sakura-deep rounded-full text-sm uppercase tracking-widest font-bold"
          >
            Enter Website
          </button>
        </div>
      )}

      {/* Skip Button */}
      <motion.button
        onClick={onComplete}
        className="absolute bottom-10 right-10 z-[110] px-4 py-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        Skip Intro
      </motion.button>
    </motion.div>
  );
};
