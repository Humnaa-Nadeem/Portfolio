import { useRef, useState } from 'react';

/**
 * Interactive 3D Tilt Card with dynamic light reflection
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  glowColor = 'rgba(163, 230, 53, 0.15)',
  glare,
  ...props
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
  });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setMousePos({ x: percentX, y: percentY, active: true });
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setMousePos(prev => ({ ...prev, active: false }));
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      {...props}
    >
      <div
        className="tilt-card-sheen"
        style={{
          opacity: mousePos.active ? 1 : 0,
          background: `radial-gradient(circle 350px at ${mousePos.x}% ${mousePos.y}%, ${glowColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
