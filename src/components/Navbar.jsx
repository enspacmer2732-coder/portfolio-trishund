import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',                    id: 'hero' },
  { label: 'About',                   id: 'about' },
  { label: 'Skills',                  id: 'skills' },
  { label: 'What I Use',              id: 'tools' },
  { label: 'Experience',              id: 'experience' },
  { label: 'Projects',               id: 'projects' },
  { label: 'Leadership & Initiatives', id: 'achievements' },
  { label: 'Certifications',          id: 'certifications' },
  { label: 'Education',               id: 'education' },
  { label: 'Contact',                 id: 'contact' },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const lenis = useLenis();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -50% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (lenis) lenis.scrollTo(el, { offset: -80 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 flex justify-center pt-4 pb-2"
        style={{ pointerEvents: 'none' }}
      >
        {/* Pill navbar — scrollable on smaller screens */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="hidden md:flex items-center gap-0.5 bg-white/95 backdrop-blur-md border border-border rounded-full px-2 py-1.5 shadow-sm overflow-x-auto max-w-[95vw]"
          style={{ pointerEvents: 'all', scrollbarWidth: 'none' }}
        >
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex-shrink-0 text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                activeSection === id
                  ? 'bg-accent text-white shadow-sm'
                  : 'text-textSecondary hover:text-textPrimary hover:bg-surface'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden fixed top-4 right-4 bg-white border border-border rounded-full p-2.5 shadow-sm text-textPrimary hover:bg-surface transition-colors"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{ pointerEvents: 'all' }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 right-4 z-40 bg-white border border-border rounded-2xl shadow-lg px-3 py-3 flex flex-col gap-1 md:hidden min-w-[200px] max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-left text-sm font-medium px-3 py-2 rounded-xl transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-accent text-white'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-surface'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
