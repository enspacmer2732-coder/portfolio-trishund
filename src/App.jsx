import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { useState } from 'react';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/Navbar';
import IntroSequence from './components/IntroSequence';
import CustomCursor from './components/CustomCursor';

// Respect users who ask for reduced motion — skip the momentum entirely for them.
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// "Subtle & responsive" feel: higher lerp = snappier, glides just a little.
const lenisOptions = {
  lerp: prefersReducedMotion ? 1 : 0.13,
  smoothWheel: !prefersReducedMotion,
  wheelMultiplier: 1,
};

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
    <ReactLenis root options={lenisOptions}>
      <CustomCursor />
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </ReactLenis>
  );
}
