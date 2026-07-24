import { useEffect, useRef, useState } from 'react';

// Elements that make the ring grow / fill.
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, .cursor-pointer';

// Ring easing per frame. 1 = locked to dot (no lag); lower = more drag.
// Kept high on purpose so the trail is a subtle hint, never a slow chase.
const RING_EASE = 0.22;

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled]   = useState(false);
  const [hovering, setHovering] = useState(false);

  // Enable only for real mice (skip touch / coarse pointers).
  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot  = dotRef.current;
    const ring = ringRef.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ease = reduced ? 1 : RING_EASE; // no lag for reduced-motion users

    let mx = -100, my = -100; // pointer target (exact)
    let rx = -100, ry = -100; // ring position (eased → subtle trailing drag)
    let raf = 0;

    const loop = () => {
      // Dot sits exactly under the pointer — never eased, so no lag/nausea.
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      // Ring eases toward the pointer → a small inertia behind the movement.
      rx += (mx - rx) * ease;
      ry += (my - ry) * ease;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const move  = (e) => { mx = e.clientX; my = e.clientY; };
    const hover = (e) => setHovering(!!e.target.closest?.(INTERACTIVE));

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', hover, { passive: true });
    document.body.classList.add('has-custom-cursor');
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', hover);
      document.body.classList.remove('has-custom-cursor');
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`cursor-ring${hovering ? ' is-hovering' : ''}`}
      />
      <div ref={dotRef} aria-hidden="true" className="cursor-dot" />
    </>
  );
}
