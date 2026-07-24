import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { word: 'नमस्ते',        lang: 'Hindi' },
  { word: 'வணக்கம்',      lang: 'Tamil' },
  { word: 'નમસ્તે',       lang: 'Gujarati' },
  { word: 'ನಮಸ್ಕಾರ',     lang: 'Kannada' },
  { word: 'こんにちは',     lang: 'Japanese' },
  { word: '안녕하세요',     lang: 'Korean' },
  { word: 'مرحباً',       lang: 'Arabic' },
  { word: 'Bonjour',      lang: 'French' },
  { word: 'Hola',         lang: 'Spanish' },
  { word: 'Hello',        lang: 'English' },
];

const DISPLAY_MS    = 340;
const TRANSITION_MS = 60;

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function IntroSequence({ onComplete }) {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('intro_played')) {
      onComplete();
      return;
    }

    let cancelled = false;

    const runSequence = async () => {
      for (let i = 0; i < greetings.length; i++) {
        if (cancelled) return;
        setIndex(i);
        setVisible(true);
        await wait(DISPLAY_MS);
        if (cancelled) return;
        setVisible(false);
        await wait(TRANSITION_MS);
      }
      if (cancelled) return;
      setExiting(true);
      await wait(700);
      sessionStorage.setItem('intro_played', '1');
      onComplete();
    };

    runSequence();
    return () => { cancelled = true; };
  }, [onComplete]);

  if (exiting) {
    return (
      <motion.div
        className="fixed inset-0 z-[9999] bg-bg hero-bg"
        animate={{ y: '-100%' }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
        aria-hidden="true"
      />
    );
  }

  const totalMs = greetings.length * (DISPLAY_MS + TRANSITION_MS);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-bg hero-bg flex flex-col items-center justify-center"
      aria-live="polite"
      aria-label="Loading greeting sequence"
    >
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: TRANSITION_MS / 1000, ease: 'easeOut' }}
            className="text-center select-none"
          >
            <p className="font-display text-6xl md:text-8xl font-bold text-textPrimary tracking-tight">
              {greetings[index].word}
            </p>
            <p className="font-mono text-sm text-textMuted mt-3 tracking-widest uppercase">
              {greetings[index].lang}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-border">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: totalMs / 1000, ease: 'linear' }}
        />
      </div>

      {/* Dot pulse indicator */}
      <div className="absolute bottom-6 right-6 flex gap-1.5" aria-hidden="true">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-textPrimary"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}
