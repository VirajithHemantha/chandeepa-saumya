import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { submitToGoogleSheet } from '../googleSheets';
import { CheckCircle, Loader2, MessageSquare, Sparkles } from 'lucide-react';

export const WishesForm: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const guestName = searchParams.get('guest') || '';
  const prefix = searchParams.get('prefix') || '';
  const initialName = guestName ? `${prefix} ${guestName}`.trim() : '';

  const [formData, setFormData] = useState({
    name: initialName,
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await submitToGoogleSheet('wishes', {
        name: formData.name,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      });

      setStatus('success');
      setFormData({ name: '', message: '' });
    } catch (error) {
      console.error('Error sending wish to Google Sheets: ', error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 relative py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="glass p-10 sm:p-14 lg:p-16 rounded-[3rem] border border-white/40 shadow-[0_30px_60px_rgba(251,113,133,0.1)] relative overflow-hidden bg-white/60 backdrop-blur-3xl lg:flex flex-row-reverse items-center gap-16"
      >
        {/* Soft top border line */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-champagne via-brand-sakura-deep/80 to-brand-champagne" />

        {/* Left Side (now on right): Elegant Text */}
        <div className="lg:w-1/2 lg:pl-10 mb-12 lg:mb-0 relative text-center lg:text-left">
          <MessageSquare className="absolute -top-6 -right-6 w-12 h-12 text-brand-sakura/30 animate-pulse hidden lg:block" />

          <div className="inline-flex items-center justify-center lg:justify-start gap-4 mb-6">
            <span className="text-brand-sakura-deep uppercase tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
              Warm Wishes
            </span>
            <div className="hidden lg:block w-16 h-[1px] bg-gradient-to-r from-brand-sakura-deep/60 to-transparent" />
          </div>

          <h2 className="text-5xl sm:text-6xl font-display text-stone-800 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Leave a <span className="italic font-light text-brand-sakura-deep">Message</span>
          </h2>

          <p className="text-stone-500/90 font-serif text-lg leading-relaxed mb-6">
            Your love and support mean the world to us. Please leave a message for our new beginning together.
          </p>
          <div className="w-12 h-[1px] bg-brand-sakura/50 mx-auto lg:mx-0" />
        </div>

        {/* Right Side (now on left): Form */}
        <div className="lg:w-1/2 relative z-10">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-16 px-8 bg-white/70 rounded-[2rem] border border-white shadow-xl"
              >
                <div className="w-24 h-24 bg-green-50/80 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-green-100">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-4xl font-display text-stone-800 mb-4 tracking-tight drop-shadow-sm">Thank You</h3>
                <p className="text-stone-500/90 leading-relaxed font-serif text-lg mb-8">
                  Your heartfelt message has been recorded. It will surely bring a smile to our faces!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 rounded-full border border-brand-sakura/30 text-brand-sakura-deep font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-brand-sakura/10 transition-all duration-300 shadow-sm"
                >
                  Write Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 bg-white/40 p-8 sm:p-10 rounded-[2.5rem] border border-white shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
              >
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-3 ml-2">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/80 px-6 py-4 rounded-full border border-stone-200/60 focus:ring-2 focus:ring-brand-sakura/30 focus:border-brand-sakura-deep/40 outline-none transition-all duration-300 font-serif italic text-lg shadow-inner placeholder:text-stone-300"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-3 ml-2">Message</label>
                  <textarea
                    required
                    placeholder="Write your wishes here..."
                    className="w-full bg-white/80 px-6 py-4 rounded-[2rem] border border-stone-200/60 focus:ring-2 focus:ring-brand-sakura/30 focus:border-brand-sakura-deep/40 outline-none transition-all duration-300 h-40 resize-none font-serif italic text-lg shadow-inner placeholder:text-stone-300"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="pt-4">
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-stone-800 text-brand-champagne py-5 rounded-full font-sans tracking-[0.3em] font-bold text-[11px] uppercase hover:bg-stone-900 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      'Send Wishes'
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
