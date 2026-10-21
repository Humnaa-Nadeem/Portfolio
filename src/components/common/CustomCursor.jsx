import { useEffect, useState, useRef } from 'react';

/**
 * Custom interactive magnetic cursor follower
 */
export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setMounted(true);

    const onMouseMove = (e) => {
      pos.current.targetX = e.clientX;
      pos.current.targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    let animId;
    const animate = () => {
      // Smooth interpolation for trailing ring
      pos.current.x += (pos.current.targetX - pos.current.x) * 0.18;
      pos.current.y += (pos.current.targetY - pos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.targetX}px, ${pos.current.targetY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    const handleHoverCheck = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.tilt-card') ||
        target.closest('.project-card') ||
        target.closest('.glow-card') ||
        target.closest('input') ||
        target.closest('.interactive-node') ||
        target.closest('.tab-pill')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', handleHoverCheck, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleHoverCheck);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${visible ? 'is-visible' : ''} ${hovered ? 'is-hovered' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${visible ? 'is-visible' : ''} ${hovered ? 'is-hovered' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
