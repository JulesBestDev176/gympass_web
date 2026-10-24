'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Remonter en haut"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 24,
        zIndex: 50,
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--brand-accent)',
        color: 'var(--surface-page)',
        border: 'none',
        display: 'grid',
        placeItems: 'center',
        boxShadow: '0 4px 20px #b5ff2d44',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.9)',
        transition: 'opacity 220ms, transform 220ms cubic-bezier(.16,1,.3,1)',
      }}
    >
      <ArrowUp size={18} strokeWidth={2.2} />
    </button>
  );
}
