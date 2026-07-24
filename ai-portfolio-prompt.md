# 🤖 AI Build Prompt — Data Analyst Portfolio
> Paste this entire document as your prompt to an AI coding assistant (Claude, GPT-4, Cursor, etc.) to scaffold the full portfolio from scratch.

---

## YOUR ROLE

You are a senior React developer and UI/UX designer specializing in dark-themed, production-grade portfolio websites. You write clean, secure, accessible, and performant code. You follow modern React best practices and produce code that looks like it was built by a professional design team — not a template.

You will build a **complete, fully-functional Data Analyst portfolio website** based on the specifications below. Every component must be production-ready: no placeholder logic, no TODOs left in the code, no lorem ipsum unless explicitly marked as demo content.

---

## TECH STACK — USE EXACTLY THESE

```
Framework:        React 18 + Vite
Styling:          Tailwind CSS v3
Routing:          React Router DOM v6
Animations:       Framer Motion v11
Icons:            Lucide React
Fonts:            Space Grotesk (headings) · Inter (body) · JetBrains Mono (code/badges)
Hosting target:   Vercel (pure static, SPA)
```

**Install commands:**
```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install react-router-dom framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Do NOT add:** Redux, Zustand, Firebase, Supabase, any backend, any database, any server-side code, any runtime API calls to third-party services (except Formspree form action).

---

## SECURITY REQUIREMENTS — NON-NEGOTIABLE

Apply all of the following without being asked:

1. **All external links** must have `rel="noopener noreferrer"` and `target="_blank"` — no exceptions.
2. **iframes (dashboard embeds)** must have the `sandbox` attribute: `sandbox="allow-scripts allow-same-origin allow-popups allow-forms"` — never remove this.
3. **No inline `<script>` tags** injected dynamically anywhere.
4. **No `dangerouslySetInnerHTML`** anywhere — all content is rendered via JSX variables.
5. **No API keys, tokens, or secrets** anywhere in the codebase — not even in comments.
6. **Formspree contact form**: Use the HTML `action` attribute method only (`<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`). Do not use the Formspree JS SDK.
7. **Content Security Policy headers** — add a `vercel.json` that sets the following response headers:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ],
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
8. **Image paths** are always from `/public/images/` — never constructed from user input.
9. **No `eval()`**, no `Function()` constructor, no dynamic code execution anywhere.

---

## VISUAL DESIGN SYSTEM — FOLLOW PRECISELY

### Color Tokens
Define all colors in `tailwind.config.js` under `theme.extend.colors` so they are available as Tailwind utility classes:

```js
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#0A0E1A',   // page background
        surface:      '#111827',   // cards, sections
        surfaceLight: '#1F2937',   // hover states, borders
        accent:       '#6366F1',   // primary — indigo
        cyan:         '#22D3EE',   // secondary — data/tags
        success:      '#10B981',   // metrics, positive values
        textPrimary:  '#F9FAFB',
        textSecondary:'#D1D5DB',
        textMuted:    '#9CA3AF',
        border:       '#374151',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

### Global CSS (`src/index.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #0A0E1A;
  color: #F9FAFB;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

/* Custom scrollbar — dark theme */
::-webkit-scrollbar        { width: 6px; }
::-webkit-scrollbar-track  { background: #111827; }
::-webkit-scrollbar-thumb  { background: #374151; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #6366F1; }

/* Dot-grid hero background */
.hero-bg {
  background-color: #0A0E1A;
  background-image: radial-gradient(#6366F118 1px, transparent 1px);
  background-size: 28px 28px;
}

/* Selection highlight */
::selection {
  background: #6366F140;
  color: #F9FAFB;
}

/* Smooth page transitions */
.page-enter {
  opacity: 0;
  transform: translateY(16px);
}
.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 400ms ease, transform 400ms ease;
}
```

### Typography Rules
- **All headings**: `font-display` (Space Grotesk), never Inter
- **Body paragraphs**: `font-body` (Inter), `leading-relaxed`
- **Tech badges, labels, captions**: `font-mono` (JetBrains Mono)
- **No raw `<h1>–<h6>` without Tailwind classes** — always apply size + weight

### Reusable Class Patterns (build as Tailwind `@apply` or just inline consistently)

```
Tech badge:    bg-surfaceLight border border-border text-cyan font-mono text-xs px-3 py-1 rounded-full
Metric chip:   bg-success/10 border border-success text-success text-sm font-semibold px-3 py-1 rounded-md
Primary btn:   bg-accent hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200
Outline btn:   border border-accent text-accent hover:bg-accent/10 font-semibold px-6 py-3 rounded-lg transition-all duration-200
Card:          bg-surface border border-border hover:border-accent rounded-xl p-6 transition-all duration-300
Section wrap:  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20
```

---

## ANIMATION SYSTEM — SMOOTH & PERFORMANT

Use **Framer Motion** for all animations. Follow these exact patterns — do not invent new ones:

### 1. Page Transition Wrapper
Wrap every page (`Home.jsx`, `ProjectDetail.jsx`) in this:
```jsx
import { motion } from 'framer-motion';

const pageVariants = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:     { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

// Wrap page root element:
<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
  {/* page content */}
</motion.div>
```

Wrap `<Routes>` in `<AnimatePresence mode="wait">` in `App.jsx`.

### 2. Scroll-Reveal (use for every section)
```jsx
const revealVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

<motion.div
  variants={revealVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
>
  {children}
</motion.div>
```

### 3. Stagger Children (project cards, skill items, tool icons)
```jsx
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {/* item */}
    </motion.div>
  ))}
</motion.div>
```

### 4. Card Hover
```jsx
<motion.div
  whileHover={{ scale: 1.025, borderColor: '#6366F1' }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
>
```

### 5. Hero Text Entrance (stagger each line)
```jsx
const heroLines = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const heroLine = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
```

### 6. Skill Bar Fill
```jsx
// Animate width from 0 to the skill % value when scrolled into view
<motion.div
  className="h-1.5 rounded-full bg-accent"
  initial={{ width: 0 }}
  whileInView={{ width: `${skill.level}%` }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, ease: 'easeOut', delay: index * 0.06 }}
/>
```

### 7. Navbar scroll effect
```jsx
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 20);
  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}, []);

// Apply to navbar:
className={`fixed top-0 w-full z-50 transition-all duration-300
  ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20' : 'bg-transparent'}`}
```

**Performance rules:**
- All `whileInView` use `viewport={{ once: true }}` — animate only once, never on scroll back up
- Never animate `width/height` on large containers — use `opacity` + `transform` only (GPU composited)
- No animation duration over `0.7s`
- Add `will-change: transform` only on the navbar and hero elements — not globally

---

## MULTILINGUAL HELLO INTRO SEQUENCE — HERO ENTRY FEATURE

When the user first loads the portfolio URL, **before the main hero content appears**, display a full-screen animated greeting sequence that cycles through 18 languages, then transitions into the hero section.

### Languages & Greetings (exact order)
```
1.  Hindi      — नमस्ते
2.  Bengali    — নমস্কার
3.  Telugu     — నమస్కారం
4.  Tamil      — வணக்கம்
5.  Marathi    — नमस्कार
6.  Gujarati   — નમસ્તે
7.  Kannada    — ನಮಸ್ಕಾರ
8.  Malayalam  — നമസ്കാരം
9.  Punjabi    — ਸਤ ਸ੍ਰੀ ਅਕਾਲ
10. Odia       — ନମସ୍କାର
11. Japanese   — こんにちは
12. Korean     — 안녕하세요
13. Arabic     — مرحباً
14. French     — Bonjour
15. Spanish    — Hola
16. Portuguese — Olá
17. Mandarin   — 你好
18. English    — Hello
```

### IntroSequence Component Spec (`src/components/IntroSequence.jsx`)

**Behavior:**
- Renders as a full-screen overlay (`fixed inset-0 z-[9999]`)
- Background: `#0A0E1A` with the dot-grid pattern
- Each greeting displays for **280ms**, then fades out (80ms) and the next fades in (80ms)
- Total sequence: ~18 × 360ms ≈ 6.5 seconds
- After the last greeting ("Hello"), the entire overlay slides up and off screen (like a curtain raise — `y: 0 → y: '-100%'`), revealing the portfolio underneath
- Once the curtain exits, the overlay is **unmounted from the DOM entirely** (not just hidden)
- The overlay only plays **once per session** — store a `sessionStorage` flag so refreshing the page within the same tab skips it. On a new tab/session it plays again.

**Visual design:**
- Greeting text: `font-display`, `text-5xl md:text-7xl font-bold text-textPrimary`, centered both axes
- Below the greeting word: the language name in `font-mono text-sm text-textMuted` (e.g. "Hindi", "Japanese")
- A thin progress bar at the very bottom of the screen animates from 0% to 100% width over the full sequence duration. Color: `bg-accent`.
- A small dot-pulse indicator in the bottom-right corner (3 dots cycling) shows the sequence is running

**Implementation:**
```jsx
// src/components/IntroSequence.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { word: 'नमस्ते',      lang: 'Hindi' },
  { word: 'নমস্কার',     lang: 'Bengali' },
  { word: 'నమస్కారం',   lang: 'Telugu' },
  { word: 'வணக்கம்',    lang: 'Tamil' },
  { word: 'नमस्कार',    lang: 'Marathi' },
  { word: 'નમસ્તે',     lang: 'Gujarati' },
  { word: 'ನಮಸ್ಕಾರ',   lang: 'Kannada' },
  { word: 'നമസ്കാരം',   lang: 'Malayalam' },
  { word: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', lang: 'Punjabi' },
  { word: 'ନମସ୍କାର',   lang: 'Odia' },
  { word: 'こんにちは',   lang: 'Japanese' },
  { word: '안녕하세요',   lang: 'Korean' },
  { word: 'مرحباً',     lang: 'Arabic' },
  { word: 'Bonjour',    lang: 'French' },
  { word: 'Hola',       lang: 'Spanish' },
  { word: 'Olá',        lang: 'Portuguese' },
  { word: '你好',        lang: 'Mandarin' },
  { word: 'Hello',      lang: 'English' },
];

const DISPLAY_MS   = 280;  // how long each word is fully visible
const TRANSITION_MS = 80;  // fade in / fade out duration

export default function IntroSequence({ onComplete }) {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(true);   // word visibility
  const [exiting, setExiting] = useState(false);  // curtain exit

  useEffect(() => {
    // Skip if already played this session
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
      // Curtain exit
      setExiting(true);
      await wait(700); // curtain animation duration
      sessionStorage.setItem('intro_played', '1');
      onComplete();
    };

    runSequence();
    return () => { cancelled = true; };
  }, [onComplete]);

  if (exiting) {
    return (
      <motion.div
        className="fixed inset-0 z-[9999] bg-bg hero-bg flex items-center justify-center"
        animate={{ y: '-100%' }}
        transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      />
    );
  }

  const totalMs = greetings.length * (DISPLAY_MS + TRANSITION_MS);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg hero-bg flex flex-col items-center justify-center">

      {/* Greeting word */}
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
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-surfaceLight">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: totalMs / 1000, ease: 'linear' }}
        />
      </div>

      {/* Dot pulse indicator */}
      <div className="absolute bottom-6 right-6 flex gap-1.5">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-accent"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

**Integration in `App.jsx`:**
```jsx
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroSequence from './components/IntroSequence';

function App() {
  const [introComplete, setIntroComplete] = useState(
    () => !!sessionStorage.getItem('intro_played')
  );

  return (
    <>
      {!introComplete && (
        <IntroSequence onComplete={() => setIntroComplete(true)} />
      )}
      {introComplete && (
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes> ... </Routes>
          </AnimatePresence>
        </BrowserRouter>
      )}
    </>
  );
}
```

---

## FOLDER STRUCTURE — BUILD EXACTLY THIS

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project1-overview.png
│   │   ├── project1-chart1.png
│   │   ├── project1-chart2.png
│   │   ├── project1-chart3.png
│   │   ├── project1-chart4.png
│   │   └── project1-dashboard.png
│   └── resume.pdf
│
├── src/
│   ├── data/
│   │   └── projects.js          ← single source of truth
│   │
│   ├── components/
│   │   ├── IntroSequence.jsx    ← multilingual intro (built above)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Tools.jsx
│   │   ├── Experience.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── vercel.json                  ← security headers + SPA rewrite
├── tailwind.config.js
├── vite.config.js
└── index.html
```

---

## COMPONENT SPECIFICATIONS

### `Navbar.jsx`
- `position: fixed`, `top: 0`, `width: 100%`, `z-index: 50`
- Transparent when at top of page; becomes `bg-bg/90 backdrop-blur-md border-b border-border` after scrolling 20px
- Logo: your name in `font-display font-bold text-xl text-textPrimary` on the left
- Nav links on the right: About · Skills · Experience · Projects · Contact
  - Each link: `text-textSecondary hover:text-textPrimary font-medium text-sm transition-colors duration-200`
  - Smooth scroll: `document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })`
- "Download Resume" button: outline style, opens `/resume.pdf` with `target="_blank" rel="noopener noreferrer"`
- Mobile: hamburger icon (Lucide `Menu` / `X`), slides down a mobile nav panel from the top with `AnimatePresence`
- Active link: highlight with `text-accent` based on which section is in viewport (use `IntersectionObserver`)

### `Hero.jsx`
- Full viewport: `min-h-screen flex flex-col items-center justify-center`
- Background: `hero-bg` class (dot-grid)
- Subtle radial vignette overlay: `bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#0A0E1A_100%)]` as an absolute layer
- Content (centered, staggered entrance animation):
  1. Small label: `AVAILABLE FOR OPPORTUNITIES` in `font-mono text-xs text-accent tracking-widest` with a pulsing green dot
  2. Your name: `font-display text-6xl md:text-8xl font-bold text-textPrimary`
  3. Animated role title: cycles through 3 roles (Data Analyst / Business Intelligence / Python & SQL) — swap text every 2.5s with a smooth fade + slide
  4. Tagline: `font-body text-lg md:text-xl text-textSecondary max-w-xl text-center leading-relaxed`
  5. Two CTA buttons side by side: "View My Work" (primary) + "Download Resume" (outline)
  6. Social icon row: GitHub, LinkedIn, Kaggle icons (Lucide or SVG) — `text-textMuted hover:text-accent transition-colors`
- Scroll indicator: `ChevronDown` icon from Lucide, positioned `absolute bottom-8`, gentle bounce animation with Framer Motion `y: [0, 8, 0]` loop

### `About.jsx`
- Two-column: `grid md:grid-cols-2 gap-16 items-center`
- Left: profile photo with a decorative border — `rounded-2xl border-2 border-accent/30` with a glowing shadow `shadow-[0_0_40px_#6366F120]`
- Right: 3–4 sentences of personal bio, then 3 stat cards in a row:
  - Each stat card: `bg-surface border border-border rounded-xl p-5 text-center` — number in `font-display text-3xl font-bold text-accent`, label in `text-textMuted text-sm font-mono`

### `Skills.jsx`
- Three category cards side by side (stack on mobile)
- Each card lists 4–5 skills with an icon + name + animated fill bar
- Bar track: `bg-surfaceLight rounded-full h-1.5`, fill: `bg-gradient-to-r from-accent to-cyan`
- Skill level shown as percentage number in `font-mono text-xs text-textMuted` on the right

### `Tools.jsx`
- `grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4`
- Each tool card: `bg-surface border border-border rounded-xl p-4 flex flex-col items-center gap-2 hover:border-accent transition-all duration-200`
- Tool icon (SVG or image), name in `font-mono text-xs text-textSecondary`, proficiency badge in the color of its category

### `Experience.jsx`
- Vertical timeline with a left accent line: `border-l-2 border-border ml-4 pl-8 space-y-10`
- Each entry has a colored dot on the timeline line, company + role in bold, dates in `font-mono text-xs text-textMuted`, and bullet points using `text-textSecondary`

### `ProjectCard.jsx`
Props: `project` object from `projects.js`
```jsx
<motion.div
  variants={itemVariants}
  whileHover={{ scale: 1.025 }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
  className="bg-surface border border-border hover:border-accent rounded-2xl overflow-hidden cursor-pointer group transition-colors duration-300"
  onClick={() => navigate(`/project/${project.id}`)}
>
  {/* Thumbnail with overlay on hover */}
  <div className="relative overflow-hidden h-48">
    <img src={project.thumbnail} alt={project.title}
         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
  </div>
  {/* Content */}
  <div className="p-6 space-y-3">
    <div className="flex flex-wrap gap-2">
      {project.techStack.slice(0, 4).map(tech => (
        <span key={tech} className="tech-badge">{tech}</span>
      ))}
    </div>
    <h3 className="font-display text-xl font-semibold text-textPrimary">{project.title}</h3>
    <p className="text-textSecondary text-sm leading-relaxed">{project.summary}</p>
    <span className="metric-chip">{project.keyMetric}</span>
    <div className="pt-2">
      <span className="text-accent font-semibold text-sm group-hover:underline">
        View Case Study →
      </span>
    </div>
  </div>
</motion.div>
```

### `ProjectDetail.jsx`

Uses `useParams()` → finds project in `projects.js` → renders all sections.

**Dashboard section (Section 7.8) — the most important section:**

```jsx
{/* Live Dashboard Section */}
<section className="space-y-6">
  <h2 className="font-display text-2xl font-bold text-textPrimary">📊 Live Dashboard</h2>
  <p className="text-textSecondary leading-relaxed">{project.dashboard.description}</p>

  {project.dashboard.embedUrl ? (
    <div className="space-y-3">
      {/* Live badge */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="font-mono text-sm text-success">Live Interactive Dashboard</span>
      </div>

      {/* Responsive iframe wrapper — 16:9 */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-border"
           style={{ paddingTop: '56.25%' }}>
        <iframe
          src={project.dashboard.embedUrl}
          title={`${project.title} — Live Dashboard`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          loading="lazy"
        />
      </div>

      {/* Full screen link */}
      <a
        href={project.dashboard.embedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline font-medium"
      >
        Open in full screen →
      </a>
    </div>
  ) : (
    /* Fallback screenshot */
    <div className="space-y-4">
      {project.dashboard.screenshots.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${project.title} dashboard screenshot ${i + 1}`}
          className="w-full rounded-2xl border border-border"
          loading="lazy"
        />
      ))}
    </div>
  )}
</section>
```

**All other project detail sections** must render their content from the `project` object. Never hardcode section content.

**Prev/Next navigation:** Find the current project index in the `projects` array, render links to `projects[index - 1]` and `projects[index + 1]` with the card thumbnail, title, and an arrow. Use `useNavigate()` to navigate.

### `Contact.jsx`
```jsx
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  className="space-y-4"
>
  <input type="text"  name="name"    required placeholder="Your Name"    className="input-field" />
  <input type="email" name="email"   required placeholder="Your Email"   className="input-field" />
  <textarea           name="message" required placeholder="Your Message" rows={5} className="input-field resize-none" />
  <input type="hidden" name="_subject" value="Portfolio Contact" />
  <button type="submit" className="btn-primary w-full">Send Message</button>
</form>
```

Input field style: `bg-surface border border-border focus:border-accent rounded-lg px-4 py-3 text-textPrimary placeholder-textMuted outline-none transition-colors duration-200 w-full font-body text-sm`

---

## DATA FILE — `src/data/projects.js`

The file must export a named `projects` array. Every UI component reads from this — nothing is hardcoded. Structure:

```js
export const projects = [
  {
    id: 'project-slug',              // URL: /project/project-slug
    title: '',
    summary: '',
    keyMetric: '',                   // e.g. "↑ 23% revenue identified"
    thumbnail: '/images/p1-thumb.png',
    date: '',
    techStack: [],
    tags: [],
    overview: '',
    problemStatement: '',
    businessObjective: '',
    whyNeeded: '',
    stakeholders: [],
    dataset: {
      source: '', sourceUrl: '', rows: '', columns: 0,
      timePeriod: '', features: [], qualityIssues: [],
    },
    cleaning: { missingValues: '', duplicates: '', outliers: '', transformations: '' },
    eda: {
      keyFindings: [],
      charts: [{ image: '', caption: '' }],
    },
    dashboard: {
      screenshots: ['/images/p1-dashboard.png'],
      embedUrl: '',     // Power BI / Tableau / Looker embed src. Empty string = show screenshot only.
      description: '',
    },
    storytelling: { insights: '', patterns: '', recommendations: '' },
    businessImpact: { revenueOpportunity: '', costReduction: '', processImprovement: '' },
    links: { github: '', dataset: '', dashboard: '', report: '' },
    keyLearnings: '',
    challenges: '',
  },
];
```

Populate with 1 real demo project and 2–3 placeholder projects that follow the exact same structure.

---

## ROUTING — `src/App.jsx`

```jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/Navbar';
import IntroSequence from './components/IntroSequence';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"            element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(
    () => !!sessionStorage.getItem('intro_played')
  );

  if (!introComplete) {
    return <IntroSequence onComplete={() => setIntroComplete(true)} />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
```

---

## `index.html` — Add fonts & meta

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Data Analyst Portfolio — Python, SQL, Power BI" />
  <meta name="theme-color" content="#0A0E1A" />
  <title>Your Name — Data Analyst</title>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

---

## `vercel.json` — Security headers + SPA routing

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options",    "value": "nosniff" },
        { "key": "X-Frame-Options",           "value": "SAMEORIGIN" },
        { "key": "X-XSS-Protection",          "value": "1; mode=block" },
        { "key": "Referrer-Policy",           "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy",        "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ],
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## PERFORMANCE RULES

1. **Images**: always include `loading="lazy"` on all `<img>` except the hero photo (which gets `loading="eager"`)
2. **Fonts**: use `display=swap` in the Google Fonts URL (already in the link above)
3. **Framer Motion**: import only what you use — `import { motion, AnimatePresence } from 'framer-motion'`
4. **No layout shift**: always set explicit `width` and `height` or aspect-ratio wrapper on images and iframes
5. **Passive event listeners**: scroll handlers must use `{ passive: true }` option
6. **Bundle**: do not import entire icon libraries — import icons individually: `import { Github } from 'lucide-react'`

---

## ACCESSIBILITY RULES

1. All `<img>` tags must have meaningful `alt` text
2. All icon-only buttons must have `aria-label`
3. Color contrast: text on dark background must meet WCAG AA (the palette above already satisfies this)
4. Focus outlines: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent` on all interactive elements
5. The contact form must use `<label>` elements associated with each input via `htmlFor`/`id`, or use `aria-label` at minimum
6. The Navbar mobile menu must trap focus when open (`aria-expanded`, `aria-controls`)
7. The intro sequence overlay must have `aria-live="polite"` so screen readers announce the greeting changes

---

## QUALITY CHECKLIST — VERIFY BEFORE FINISHING

### Code quality
- [ ] Zero `console.log` statements in production code
- [ ] Zero hardcoded content that should come from `projects.js`
- [ ] Zero `dangerouslySetInnerHTML` usage
- [ ] All external links have `rel="noopener noreferrer"` and `target="_blank"`
- [ ] All iframes have `sandbox` attribute
- [ ] `vercel.json` present with security headers and SPA rewrite

### UX & Animations
- [ ] Intro sequence plays on first load, skips on same-session refresh
- [ ] Intro curtain exits smoothly before hero content is visible
- [ ] Page transitions are smooth (no flash between routes)
- [ ] All scroll-reveal animations use `viewport={{ once: true }}`
- [ ] Card hover effects are subtle (scale 1.025, not 1.1)
- [ ] Navbar blurs correctly on scroll and becomes transparent at top

### Responsive
- [ ] Mobile (375px): all sections readable, no overflow
- [ ] Tablet (768px): layouts collapse correctly
- [ ] Desktop (1280px+): max-width container keeps content readable

### Dashboard embed
- [ ] Iframe renders correctly for projects with `embedUrl`
- [ ] Projects with empty `embedUrl` fall back to screenshot
- [ ] "Live Interactive Dashboard" pulse badge shows only when embed exists
- [ ] "Open in full screen →" link present below iframe

### Performance
- [ ] No layout shift on page load
- [ ] All below-fold images have `loading="lazy"`
- [ ] Fonts loaded via `display=swap`

---

## FINAL INSTRUCTION TO AI

Build the complete portfolio following every specification in this document exactly.

- Start with `vercel.json`, `tailwind.config.js`, `index.css`, `index.html`, and `main.jsx`
- Then build `IntroSequence.jsx` and verify the greeting sequence logic
- Then build `App.jsx` with routing and `AnimatePresence`
- Then build all components in the order listed in the folder structure
- Then build `Home.jsx` and `ProjectDetail.jsx`
- Finally populate `projects.js` with demo data

Do not ask for clarification — use the specifications above to make all decisions. Where something is not specified, choose the option that produces the most polished, production-grade result consistent with the dark design system described here.

Every file must be complete and immediately runnable. No placeholder functions. No empty components. No `// TODO` comments.
