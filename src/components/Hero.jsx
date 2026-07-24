import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { MapPin, Zap, Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from './SocialIcons';

const heroLines = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const heroLine = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const lenis = useLenis();

  return (
    <section
      className="hero-bg min-h-screen flex flex-col justify-center relative overflow-hidden pt-24"
      id="hero"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left: text content */}
          <motion.div
            variants={heroLines}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-xl"
          >
            {/* Available badge */}
            <motion.div variants={heroLine} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-surface border border-border text-textSecondary text-sm font-medium px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={heroLine}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-textPrimary leading-tight tracking-tight mb-3"
            >
              Hi, I'm Trishund<br />Kupatkar
            </motion.h1>

            {/* Role — static, no cycling */}
            <motion.div variants={heroLine} className="flex items-center gap-1 mb-5">
              <span className="font-display text-2xl md:text-3xl font-bold text-textPrimary">
                Business Development &amp; Analytics Executive
              </span>
            </motion.div>

            {/* Intro paragraph */}
            <motion.p
              variants={heroLine}
              className="font-body text-base text-textSecondary leading-relaxed mb-6 max-w-md"
            >
              Curiosity drives my work. I break down complex problems, explore the data behind them, discover meaningful patterns, and translate those findings into clear business insights.
            </motion.p>

            {/* Location + Status */}
            <motion.div variants={heroLine} className="flex items-center gap-5 mb-7 text-sm text-textMuted">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                Based in Bangalore, India
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={14} />
                Available Now
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={heroLine} className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (!el) return;
                  if (lenis) lenis.scrollTo(el, { offset: -80 });
                  else el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary flex items-center gap-2"
              >
                <ArrowRight size={16} />
                Hire Me
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1yOd7LFGUHpYxLp6W7UYcYPA2gdDXzxho"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div variants={heroLine} className="w-full h-px bg-border mb-6" />

            {/* Social icons */}
            <motion.div variants={heroLine} className="flex items-center gap-4">
              <span className="text-sm text-textMuted font-medium">Follow me:</span>
              <a
                href="https://github.com/Trishund"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-textMuted hover:text-textPrimary transition-colors duration-200 hover:scale-110 transform"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/trishund-kupatkar-384931227/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-textMuted hover:text-textPrimary transition-colors duration-200 hover:scale-110 transform"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://www.kaggle.com/trishundkupatkar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle"
                className="text-textMuted hover:text-textPrimary transition-colors duration-200 hover:scale-110 transform"
              >
                <KaggleIcon size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: B&W photo — place hero-photo-bw.jpg in src/assets/ when ready */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0 flex items-end justify-center"
          >
            <div className="relative">
              {/* Subtle background blob */}
              <div className="absolute inset-0 bg-surface rounded-3xl transform rotate-3 scale-105" />
              <img
                src="/hero-photo-bw.jpg"
                alt="Trishund Kupatkar"
                className="relative w-72 md:w-80 lg:w-96 object-contain rounded-2xl grayscale hover:grayscale-0 drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-[filter] duration-500 ease-out motion-reduce:transition-none"
                onError={(e) => {
                  // Graceful fallback if photo not yet provided
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Placeholder shown until real photo is added */}
              <div
                className="relative w-72 md:w-80 lg:w-96 h-96 rounded-2xl bg-surface border border-border items-center justify-center text-center p-8 hidden"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-border mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-textMuted">📸</span>
                  </div>
                  <p className="font-mono text-xs text-textMuted leading-relaxed">
                    Add <strong>hero-photo-bw.jpg</strong><br />to <code>/public/</code>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
