import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * LivingEcosystem — Generative Bioluminescent Neural & Sacred Tech Ecosystem
 * Features glowing silk mycelium tendrils, sacred central iris reticles,
 * radiant golden 4-point diamond star nodes, synaptic particle sparks,
 * and mouse-responsive magnetic physics.
 */
export default function LivingEcosystem() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [hudPos, setHudPos] = useState({ x: 0, y: 0, visible: false });

  // Physics & animation mutable refs
  const stateRef = useRef({
    time: 0,
    width: 600,
    height: 600,
    dpr: 1,
    mouse: { x: -1000, y: -1000, targetX: -1000, targetY: -1000, isOver: false },
    shockwaves: [],
    particles: [],
  });

  // Domain Star Nodes (positioned along the radiating branches)
  const starNodes = [
    {
      id: 'center',
      label: 'HUMNA NADEEM',
      sublabel: 'CORE ANCHOR · SOFTWARE & RESEARCH',
      branchAngle: 0,
      radiusRatio: 0,
      isCore: true,
      color: '#A3E635',
      starColor: '#F5F0E6',
      role: 'SYSTEM GENESIS',
      details: ['Dept Rank #1 CGPA 3.85', 'Civic Tech Innovator', 'Human-AI Researcher'],
      linkText: 'Explore Bio',
      linkHref: '#about',
    },
    {
      id: 'research',
      label: 'RESEARCH',
      sublabel: 'Human–AI Interaction · Trust',
      branchAngle: -Math.PI * 0.22, // ~-40 deg (Upper Right)
      radiusRatio: 0.62,
      color: '#F4B860',
      starColor: '#FFD700',
      role: 'COGNITIVE SCIENCE & AI',
      details: ['Human Judgment Dynamics', 'Algorithmic Over-Reliance', 'Empirical Study (N=50)', 'Decision Integrity'],
      linkText: 'Inspect Research Study',
      linkHref: '#research',
    },
    {
      id: 'development',
      label: 'DEVELOPMENT',
      sublabel: 'React · Modern Architecture · Systems',
      branchAngle: -Math.PI * 0.78, // ~-140 deg (Upper Left)
      radiusRatio: 0.64,
      color: '#34D399',
      starColor: '#A3E635',
      role: 'SYSTEMS & SOFTWARE',
      details: ['React & Next.js Ecosystem', 'Python & Algorithms', 'C++ Foundations', 'RESTful Architectures'],
      linkText: 'View Software Projects',
      linkHref: '#work',
    },
    {
      id: 'design',
      label: 'UI/UX CRAFT',
      sublabel: 'Figma · Visual Craft · Systems',
      branchAngle: Math.PI * 0.72, // ~130 deg (Lower Left)
      radiusRatio: 0.65,
      color: '#10B981',
      starColor: '#34D399',
      role: 'INTERFACE ARCHITECTURE',
      details: ['Design Systems & Tokens', 'Interaction Prototypes', 'Figma Case Studies', 'User-Centered Research'],
      linkText: 'View Design Gallery',
      linkHref: '#design',
    },
    {
      id: 'innovation',
      label: 'INNOVATION',
      sublabel: 'Civic Tech · Startups · Platforms',
      branchAngle: Math.PI * 0.24, // ~45 deg (Lower Right)
      radiusRatio: 0.66,
      color: '#F4B860',
      starColor: '#FBBF24',
      role: 'ENTREPRENEURIAL INITIATIVES',
      details: ['Smart Pakhtunkhwa Governance', 'Shopkeepers.pk Platform', 'Digital Kohat Hub', 'Incubation Leadership'],
      linkText: 'View Initiatives',
      linkHref: '#work',
    },
    {
      id: 'systems',
      label: 'ARCHITECTURE',
      sublabel: 'Distributed & Scalable Logic',
      branchAngle: Math.PI, // 180 deg (Far West)
      radiusRatio: 0.75,
      color: '#2DD4BF',
      starColor: '#67E8F9',
      role: 'CORE ENGINEERING',
      details: ['Modular Architecture', 'State Machines', 'Performance Profiling'],
      linkText: 'View Projects',
      linkHref: '#work',
    },
    {
      id: 'civic',
      label: 'CIVIC PLATFORMS',
      sublabel: 'Provincial Governance Infrastructure',
      branchAngle: 0, // 0 deg (Far East)
      radiusRatio: 0.76,
      color: '#A3E635',
      starColor: '#FACC15',
      role: 'PUBLIC IMPACT',
      details: ['5 Provincial Sectors', 'Citizen Analytics', 'Cross-Dept Flow'],
      linkText: 'Explore Smart Pakhtunkhwa',
      linkHref: '#work',
    },
    {
      id: 'cognition',
      label: 'HUMAN IMPACT',
      sublabel: 'Judgment over Synthetic Certainty',
      branchAngle: -Math.PI * 0.5, // -90 deg (Top North)
      radiusRatio: 0.74,
      color: '#F59E0B',
      starColor: '#FEF08A',
      role: 'RESEARCH SYNTHESIS',
      details: ['Cognitive Heuristics', 'Calibrated AI Confidence', 'User Autonomy'],
      linkText: 'Inspect Study',
      linkHref: '#research',
    },
  ];

  // Initialize Particles traveling along tendrils
  useEffect(() => {
    const particles = [];
    const particleCount = 140;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        branchIndex: Math.floor(Math.random() * 8),
        strandOffset: (Math.random() - 0.5) * 0.15,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
        size: 1.2 + Math.random() * 2.2,
        alpha: 0.3 + Math.random() * 0.7,
        isGold: Math.random() > 0.65,
      });
    }
    stateRef.current.particles = particles;
  }, []);

  // Canvas Resize observer
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(rect.width, 320);
      const h = Math.max(rect.height, 320);

      stateRef.current.width = w;
      stateRef.current.height = h;
      stateRef.current.dpr = dpr;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    handleResize();
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  // Helper to calculate exact star node canvas coordinates
  const getNodeScreenPos = useCallback((node, w, h) => {
    const cx = w * 0.5;
    const cy = h * 0.5;
    if (node.isCore) return { x: cx, y: cy };
    const maxR = Math.min(w, h) * 0.44;
    const r = node.radiusRatio * maxR;
    return {
      x: cx + Math.cos(node.branchAngle) * r,
      y: cy + Math.sin(node.branchAngle) * r,
    };
  }, []);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;

    const draw4PointStar = (x, y, radius, innerRadius, angle, fillStyle, flareAlpha = 0.5) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      // Long radiant lens flare cross
      ctx.beginPath();
      ctx.fillStyle = fillStyle;
      ctx.globalAlpha = flareAlpha;
      ctx.moveTo(0, -radius * 1.8);
      ctx.lineTo(radius * 0.18, -radius * 0.18);
      ctx.lineTo(radius * 1.8, 0);
      ctx.lineTo(radius * 0.18, radius * 0.18);
      ctx.lineTo(0, radius * 1.8);
      ctx.lineTo(-radius * 0.18, radius * 0.18);
      ctx.lineTo(-radius * 1.8, 0);
      ctx.lineTo(-radius * 0.18, -radius * 0.18);
      ctx.closePath();
      ctx.fill();

      // Sharp central diamond
      ctx.beginPath();
      ctx.globalAlpha = 1;
      ctx.moveTo(0, -radius);
      ctx.lineTo(innerRadius, 0);
      ctx.lineTo(0, radius);
      ctx.lineTo(-innerRadius, 0);
      ctx.closePath();
      ctx.fill();

      // Brilliant white center sparkle jewel
      ctx.beginPath();
      ctx.arc(0, 0, innerRadius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      const state = stateRef.current;
      const { width: w, height: h, dpr, mouse, particles, shockwaves } = state;
      state.time += 0.016;
      const t = state.time;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;
      const maxRadius = Math.min(w, h) * 0.48;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Update & render expanding shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += sw.speed;
        sw.alpha *= 0.94;
        if (sw.alpha < 0.02) {
          shockwaves.splice(s, 1);
        } else {
          ctx.beginPath();
          ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(163, 230, 53, ${sw.alpha * 0.6})`;
          ctx.lineWidth = 1.8;
          ctx.stroke();
        }
      }

      // ─────────────────────────────────────────────────────────
      // 1. SILKY BIOLUMINESCENT NEURAL TENDRILS
      // ─────────────────────────────────────────────────────────
      ctx.globalCompositeOperation = 'lighter';

      const branchCount = 8;
      const strandsPerBranch = 7;

      for (let b = 0; b < branchCount; b++) {
        const baseAngle = (b / branchCount) * Math.PI * 2;
        const isResearchBranch = b === 7 || b === 0;
        const isHoveredBranch =
          (hoveredNode && Math.abs(hoveredNode.branchAngle - baseAngle) < 0.35) ||
          (activeNode && Math.abs(activeNode.branchAngle - baseAngle) < 0.35);

        for (let s = 0; s < strandsPerBranch; s++) {
          const strandSpread = (s - strandsPerBranch / 2) * 0.045;
          const phase = b * 1.5 + s * 0.8;

          ctx.beginPath();

          const steps = 38;
          let prevX = cx;
          let prevY = cy;

          for (let step = 0; step <= steps; step++) {
            const frac = step / steps;
            const r = 32 + frac * (maxRadius - 28);

            // Harmonic wave formula for silky undulation
            const wave1 = Math.sin(frac * 6.5 - t * 2.2 + phase) * (18 * frac);
            const wave2 = Math.cos(frac * 11 + t * 1.4 + s) * (9 * frac);
            const waveAngle = baseAngle + strandSpread + (wave1 + wave2) / r;

            let px = cx + Math.cos(waveAngle) * r;
            let py = cy + Math.sin(waveAngle) * r;

            // Mouse magnetic deflection physics
            if (mouse.isOver) {
              const dx = mouse.x - px;
              const dy = mouse.y - py;
              const dist = Math.hypot(dx, dy);
              if (dist < 160 && dist > 1) {
                const pull = (1 - dist / 160) * 16 * frac;
                px += (dx / dist) * pull;
                py += (dy / dist) * pull;
              }
            }

            if (step === 0) {
              ctx.moveTo(px, py);
            } else {
              const midX = (prevX + px) * 0.5;
              const midY = (prevY + py) * 0.5;
              ctx.quadraticCurveTo(prevX, prevY, midX, midY);
            }
            prevX = px;
            prevY = py;
          }

          // Bioluminescent gradient styling
          const strandAlpha = isHoveredBranch
            ? 0.75 + Math.sin(t * 4 + s) * 0.15
            : 0.18 + (s / strandsPerBranch) * 0.22;

          let strokeColor;
          if (isResearchBranch) {
            strokeColor = `rgba(244, 184, 96, ${strandAlpha * 0.85})`;
          } else if (s % 2 === 0) {
            strokeColor = `rgba(52, 211, 153, ${strandAlpha})`;
          } else {
            strokeColor = `rgba(163, 230, 53, ${strandAlpha})`;
          }

          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = isHoveredBranch ? 2.2 : 1 + (s % 2) * 0.6;
          ctx.stroke();
        }
      }

      // ─────────────────────────────────────────────────────────
      // 2. SYNAPTIC PARTICLES (FLOWING ENERGY SPARKS)
      // ─────────────────────────────────────────────────────────
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const baseAngle = (p.branchIndex / branchCount) * Math.PI * 2;
        const frac = p.progress;
        const r = 30 + frac * (maxRadius - 26);
        const wave = Math.sin(frac * 7 - t * 2.2 + p.branchIndex * 1.5) * (16 * frac);
        const ang = baseAngle + p.strandOffset + wave / r;

        let px = cx + Math.cos(ang) * r;
        let py = cy + Math.sin(ang) * r;

        if (mouse.isOver) {
          const dx = mouse.x - px;
          const dy = mouse.y - py;
          const dist = Math.hypot(dx, dy);
          if (dist < 140 && dist > 1) {
            const pull = (1 - dist / 140) * 12 * frac;
            px += (dx / dist) * pull;
            py += (dy / dist) * pull;
          }
        }

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        const pAlpha = p.alpha * Math.sin(frac * Math.PI);
        ctx.fillStyle = p.isGold
          ? `rgba(251, 191, 36, ${pAlpha})`
          : `rgba(163, 230, 53, ${pAlpha})`;
        ctx.fill();
      });

      // ─────────────────────────────────────────────────────────
      // 3. SACRED TECH CENTRAL IRIS & CONCENTRIC RETICLES
      // ─────────────────────────────────────────────────────────
      ctx.globalCompositeOperation = 'source-over';

      // Deep central dark halo to give high contrast
      const coreDarkGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 65);
      coreDarkGrad.addColorStop(0, 'rgba(7, 26, 20, 0.95)');
      coreDarkGrad.addColorStop(0.65, 'rgba(7, 26, 20, 0.85)');
      coreDarkGrad.addColorStop(1, 'rgba(7, 26, 20, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 65, 0, Math.PI * 2);
      ctx.fillStyle = coreDarkGrad;
      ctx.fill();

      // Concentric glowing holographic rings
      const ringRadii = [24, 38, 54, 76, 105];
      ringRadii.forEach((rad, i) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.strokeStyle = i === 1 ? 'rgba(163, 230, 53, 0.55)' : 'rgba(52, 211, 153, 0.25)';
        ctx.lineWidth = i === 1 ? 1.5 : 0.8;
        if (i === 2) {
          ctx.setLineDash([4, 8]);
          ctx.translate(cx, cy);
          ctx.rotate(t * 0.15);
          ctx.translate(-cx, -cy);
        } else if (i === 3) {
          ctx.setLineDash([6, 14]);
          ctx.translate(cx, cy);
          ctx.rotate(-t * 0.2);
          ctx.translate(-cx, -cy);
        }
        ctx.stroke();
        ctx.restore();
      });

      // Compass crosshairs & radial tick spokes
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.08);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(163, 230, 53, 0.35)';
      ctx.lineWidth = 1;
      ctx.moveTo(-58, 0);
      ctx.lineTo(58, 0);
      ctx.moveTo(0, -58);
      ctx.lineTo(0, 58);
      ctx.stroke();
      ctx.restore();

      // Central core brilliant radiant beacon
      ctx.globalCompositeOperation = 'lighter';
      const beaconGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 28);
      beaconGrad.addColorStop(0, '#FFFFFF');
      beaconGrad.addColorStop(0.2, '#A3E635');
      beaconGrad.addColorStop(0.6, 'rgba(16, 185, 129, 0.5)');
      beaconGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');

      ctx.beginPath();
      ctx.arc(cx, cy, 26, 0, Math.PI * 2);
      ctx.fillStyle = beaconGrad;
      ctx.fill();

      // ─────────────────────────────────────────────────────────
      // 4. RADIANT 4-POINT GOLDEN DIAMOND STARS (THE NODES)
      // ─────────────────────────────────────────────────────────
      starNodes.forEach((node) => {
        if (node.isCore) return;
        const pos = getNodeScreenPos(node, w, h);
        const isHovered = (hoveredNode && hoveredNode.id === node.id) || (activeNode && activeNode.id === node.id);

        const starSize = isHovered ? 16 : 10.5;
        const starRotation = t * 0.4 + node.branchAngle;

        // Outer glow halo around star
        ctx.beginPath();
        const starHalo = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, starSize * 3);
        starHalo.addColorStop(0, node.color);
        starHalo.addColorStop(0.4, 'rgba(244, 184, 96, 0.25)');
        starHalo.addColorStop(1, 'rgba(7, 26, 20, 0)');
        ctx.arc(pos.x, pos.y, starSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = starHalo;
        ctx.fill();

        // Secondary orbital dash ring for hovered node
        if (isHovered) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, starSize * 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = node.starColor;
          ctx.setLineDash([3, 5]);
          ctx.lineWidth = 1.2;
          ctx.translate(pos.x, pos.y);
          ctx.rotate(t * 1.5);
          ctx.translate(-pos.x, -pos.y);
          ctx.stroke();
          ctx.restore();
        }

        // Draw 4-Point Radiant Diamond Star
        draw4PointStar(
          pos.x,
          pos.y,
          starSize,
          starSize * 0.35,
          starRotation,
          node.starColor,
          isHovered ? 0.9 : 0.6
        );

        // Small floating orbiting satellite diamond
        const satAngle = t * 1.8 + node.branchAngle * 2;
        const satR = starSize * 1.6;
        const satX = pos.x + Math.cos(satAngle) * satR;
        const satY = pos.y + Math.sin(satAngle) * satR;
        draw4PointStar(satX, satY, 3, 1, satAngle, node.color, 0.5);

        // Subtle node label beside star
        ctx.save();
        ctx.globalCompositeOperation = 'source-over';
        ctx.font = isHovered
          ? "600 10.5px 'Space Grotesk', sans-serif"
          : "500 8.5px 'Space Grotesk', sans-serif";
        ctx.fillStyle = isHovered ? '#FFFFFF' : 'rgba(245, 240, 230, 0.75)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const labelY = pos.y + (pos.y > cy ? 22 : -20);
        ctx.fillText(node.label, pos.x, labelY);
        ctx.restore();
      });

      // Core center label
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      ctx.font = "700 9px 'Space Grotesk', sans-serif";
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.fillText('HUMNA NADEEM', cx, cy + 38);

      ctx.font = "500 6.5px 'JetBrains Mono', monospace";
      ctx.fillStyle = 'rgba(163, 230, 53, 0.85)';
      ctx.fillText('LIVING ECOSYSTEM', cx, cy + 49);
      ctx.restore();

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [starNodes, hoveredNode, activeNode, getNodeScreenPos]);

  // Pointer interactions
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    stateRef.current.mouse.targetX = mouseX;
    stateRef.current.mouse.targetY = mouseY;
    stateRef.current.mouse.isOver = true;

    // Check hit test against star nodes
    const { width: w, height: h } = stateRef.current;
    let foundNode = null;

    for (const node of starNodes) {
      const pos = getNodeScreenPos(node, w, h);
      const hitR = node.isCore ? 38 : 26;
      if (Math.hypot(mouseX - pos.x, mouseY - pos.y) < hitR) {
        foundNode = node;
        break;
      }
    }

    if (foundNode !== hoveredNode) {
      setHoveredNode(foundNode);
      if (foundNode) {
        const pos = getNodeScreenPos(foundNode, w, h);
        setHudPos({
          x: Math.min(Math.max(pos.x, 140), w - 140),
          y: pos.y > h * 0.5 ? pos.y - 130 : pos.y + 40,
          visible: true,
        });
      }
    }
  };

  const handleMouseLeave = () => {
    stateRef.current.mouse.isOver = false;
    stateRef.current.mouse.targetX = -1000;
    stateRef.current.mouse.targetY = -1000;
    setHoveredNode(null);
  };

  const handleClick = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Trigger expanding shockwave ripple
    stateRef.current.shockwaves.push({
      x: clickX,
      y: clickY,
      radius: 4,
      speed: 6.5,
      alpha: 1,
    });

    // Check node selection
    const { width: w, height: h } = stateRef.current;
    let clickedNode = null;
    for (const node of starNodes) {
      const pos = getNodeScreenPos(node, w, h);
      const hitR = node.isCore ? 38 : 28;
      if (Math.hypot(clickX - pos.x, clickY - pos.y) < hitR) {
        clickedNode = node;
        break;
      }
    }

    if (clickedNode) {
      setActiveNode((prev) => (prev?.id === clickedNode.id ? null : clickedNode));
      const pos = getNodeScreenPos(clickedNode, w, h);
      setHudPos({
        x: Math.min(Math.max(pos.x, 140), w - 140),
        y: pos.y > h * 0.5 ? pos.y - 130 : pos.y + 40,
        visible: true,
      });
    } else {
      setActiveNode(null);
    }
  };

  const currentDisplayNode = activeNode || hoveredNode;

  return (
    <div
      ref={containerRef}
      className="ecosystem-container celestial-ecosystem"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="region"
      aria-label="Generative Living Ecosystem bioluminescent neural star map"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '440px',
        overflow: 'visible',
      }}
    >
      <canvas
        ref={canvasRef}
        className="ecosystem-canvas"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          cursor: hoveredNode ? 'pointer' : 'crosshair',
        }}
      />

      {/* Floating Holographic Star HUD (positioned smartly near active star, never obscuring the core) */}
      {currentDisplayNode && (
        <div
          className="celestial-hud-badge glass-card"
          style={{
            position: 'absolute',
            left: `${hudPos.x}px`,
            top: `${hudPos.y}px`,
            transform: 'translate(-50%, 0)',
            pointerEvents: 'auto',
            zIndex: 20,
            minWidth: '240px',
            maxWidth: '300px',
            padding: '12px 16px',
            borderRadius: '12px',
            border: `1px solid ${currentDisplayNode.starColor || '#A3E635'}`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 20px ${currentDisplayNode.color}40`,
            animation: 'hudAppear 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          role="dialog"
          aria-live="polite"
        >
          <div className="flex-center justify-between" style={{ marginBottom: '4px' }}>
            <span
              className="mono text-lime"
              style={{ fontSize: '0.66rem', letterSpacing: '0.12em', color: currentDisplayNode.color }}
            >
              ✦ {currentDisplayNode.role}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveNode(null);
                setHoveredNode(null);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '1rem',
                lineHeight: 1,
                padding: '0 4px',
              }}
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>

          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              color: '#FFFFFF',
              margin: '2px 0 4px 0',
            }}
          >
            {currentDisplayNode.label}
          </h4>

          <p
            style={{
              fontSize: '0.76rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.4,
              marginBottom: '8px',
            }}
          >
            {currentDisplayNode.sublabel}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
            {currentDisplayNode.details.map((d, i) => (
              <span
                key={i}
                className="mono"
                style={{
                  fontSize: '0.65rem',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: 'rgba(245, 240, 230, 0.07)',
                  border: '1px solid rgba(245, 240, 230, 0.1)',
                  color: 'var(--ivory)',
                }}
              >
                {d}
              </span>
            ))}
          </div>

          <a
            href={currentDisplayNode.linkHref}
            className="mono"
            style={{
              display: 'inline-block',
              fontSize: '0.74rem',
              color: currentDisplayNode.color,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            {currentDisplayNode.linkText} →
          </a>
        </div>
      )}
    </div>
  );
}
