import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-textPrimary text-lg">
            Trishund Kupatkar<span className="text-accent">.</span>
          </p>
          <p className="font-body text-xs text-textMuted mt-1">
            Business Development &amp; Analytics Executive · Power BI · Python · SQL
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-textMuted">
          <span>Built with</span>
          <Heart size={12} className="text-accent fill-accent" />
          <span>using React + Vite · 2026</span>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Trishund"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-textMuted hover:text-accent transition-colors duration-200"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/trishund-kupatkar-384931227/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-textMuted hover:text-accent transition-colors duration-200"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://www.kaggle.com/trishundkupatkar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaggle"
            className="text-textMuted hover:text-accent transition-colors duration-200"
          >
            <KaggleIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
