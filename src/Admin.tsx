import React, { useState } from 'react';
import { Copy, Link2, MessageSquare, CheckCircle2 } from 'lucide-react';

const PREFIXES = [
  'Mr.',
  'Mrs.',
  'Miss',
  'Mr. & Mrs.',
  'Family',
  'Dear'
];

export default function Admin() {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const generateLink = () => {
    if (!guestName.trim()) return;
    const baseUrl = window.location.origin;
    const url = new URL(baseUrl);
    url.searchParams.set('prefix', prefix);
    url.searchParams.set('guest', guestName.trim());
    setGeneratedLink(url.toString());
    setCopiedLink(false);
    setCopiedMessage(false);
  };

  const getFullMessage = () => {
    return `Dear ${prefix} ${guestName}, 💖\n\nWith hearts full of love and gratitude, we warmly invite you to celebrate one of the most special days of our lives as we begin our beautiful journey together. 💍✨\n\nPlease view our wedding invitation and all the event details using the link below: 🌐💌\n\n${generatedLink}\n\nYour presence, love, and blessings would mean the world to us, and we would be truly honored to celebrate this unforgettable occasion with you. 🤍🌸\n\nWith love and warm wishes,\n\n❤️ Chandeepa & Saumya`;
  };

  const copyLinkOnly = async () => {
    if (!generatedLink) return;
    try {
      await navigator.clipboard.writeText(generatedLink);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const copyFullMessage = async () => {
    if (!generatedLink) return;
    try {
      await navigator.clipboard.writeText(getFullMessage());
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    } catch (err) {
      console.error('Failed to copy message', err);
    }
  };

  return (
    <div className="min-h-screen bg-brand-ivory p-6 md:p-12 font-sans text-stone-800">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-sakura/20">
        <div className="bg-brand-champagne/30 p-8 border-b border-brand-sakura/20">
          <h1 className="text-3xl font-display text-center text-stone-800">
            Invitation Link Generator
          </h1>
          <p className="text-center text-stone-500 mt-2 font-serif italic">
            Create personalized links for your guests
          </p>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-700 uppercase tracking-wider">Prefix</label>
              <select
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-brand-sakura-deep/50 transition-all"
              >
                {PREFIXES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-stone-700 uppercase tracking-wider">Guest Name</label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Sanjaya"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-brand-sakura-deep/50 transition-all"
                onKeyDown={(e) => e.key === 'Enter' && generateLink()}
              />
            </div>
          </div>

          <button
            onClick={generateLink}
            disabled={!guestName.trim()}
            className="w-full py-4 bg-stone-800 text-brand-champagne rounded-xl font-semibold uppercase tracking-widest hover:bg-stone-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Link2 className="w-5 h-5" />
            Generate Link
          </button>

          {generatedLink && (
            <div className="mt-8 space-y-6 pt-8 border-t border-stone-100">
              <div className="p-6 bg-brand-ivory rounded-2xl border border-brand-sakura/20">
                <p className="text-sm text-stone-500 mb-2 font-semibold uppercase tracking-wider">Generated Link</p>
                <div className="break-all font-mono text-stone-700 bg-white p-4 rounded-xl border border-stone-200">
                  {generatedLink}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button
                    onClick={copyLinkOnly}
                    className="flex-1 py-3 px-4 bg-white border-2 border-stone-200 text-stone-700 rounded-xl font-semibold hover:border-brand-sakura hover:text-brand-sakura-deep transition-all flex items-center justify-center gap-2"
                  >
                    {copiedLink ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    {copiedLink ? 'Copied!' : 'Copy Link Only'}
                  </button>
                  <button
                    onClick={copyFullMessage}
                    className="flex-1 py-3 px-4 bg-brand-sakura-deep text-white rounded-xl font-semibold hover:bg-brand-sakura transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-sakura-deep/30"
                  >
                    {copiedMessage ? <CheckCircle2 className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                    {copiedMessage ? 'Copied!' : 'Copy Full Message'}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-stone-500 font-semibold uppercase tracking-wider">Message Preview</p>
                <div className="p-6 bg-white border border-stone-200 rounded-2xl whitespace-pre-wrap text-stone-600 leading-relaxed font-serif text-lg">
                  {getFullMessage()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
