import { useState, useEffect } from 'react';
import { Compass, Sparkles } from 'lucide-react';

const sections = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'skills', num: '02', label: 'Skills' },
  { id: 'work', num: '03', label: 'Work' },
  { id: 'research', num: '04', label: 'Research' },
  { id: 'design', num: '05', label: 'Design' },
  { id: 'experience', num: '06', label: 'Experience' },
  { id: 'certifications', num: '07', label: 'Certs' },
  { id: 'contact', num: '08', label: 'Contact' },
];

export default function EditorialRails() {
  const [activeSec, setActiveSec] = useState('home');
  const [activeNum, setActiveNum] = useState('00');
  const [activeName, setActiveName] = useState('Genesis');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setScrollProgress(progress);

      // Detect active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSec(sections[i].id);
            setActiveNum(sections[i].num);
            setActiveName(sections[i].label);
            return;
          }
        }
      }
      setActiveSec('home');
      setActiveNum('00');
      setActiveName('Index');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -70 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Left Editorial Publication Rail */}
      <aside className="editorial-rail editorial-rail-left mono" aria-hidden="true">
        <div className="rail-scroll-track rail-track-left">
          <div className="rail-kicker-group">
            <span className="rail-pill-badge">HN // 2026 EDITION</span>
            <span className="rail-dot-sep" />
            <span className="rail-vertical-text">HUMNA NADEEM</span>
          </div>

          <div className="rail-headline-box">
            <strong className="rail-main-headline">
              A NEW<br />
              WAY TO<br />
              BUILD
            </strong>
            <span className="rail-accent-line" />
            <span className="rail-sub-headline">SYSTEMS &amp; INQUIRY</span>
          </div>

          <div className="rail-stamp-box">
            <span className="rail-stamp-title">VOL. 01</span>
            <span className="rail-stamp-sub">KHYBER PAKHTUNKHWA</span>
          </div>

          <p className="rail-narrative-col">
            Observation becomes inquiry. Inquiry becomes architecture. Building software
            systems with empirical rigor, human context, and intent.
          </p>
        </div>
      </aside>

      {/* Right Section Progress & Transit Rail */}
      <aside className="editorial-rail editorial-rail-right mono" aria-label="Section navigation rail">
        <div className="rail-scroll-track rail-track-right">
          {/* Active Section HUD Pill */}
          <div className="rail-transit-hud">
            <div className="hud-header">
              <Compass size={11} className="text-lime spin-slow" />
              <span>TRANSIT // HUD</span>
            </div>
            <div className="hud-display-box">
              <span className="hud-num text-lime">{activeNum}</span>
              <span className="hud-slash">/</span>
              <span className="hud-name">{activeName}</span>
            </div>
          </div>

          {/* Interactive Section Milestone Pips */}
          <div className="rail-milestones-track">
            <div
              className="rail-progress-bar"
              style={{ height: `${Math.round(scrollProgress * 100)}%` }}
            />
            {sections.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`rail-pip-btn ${activeSec === s.id ? 'active' : ''}`}
                onClick={() => handleNavClick(s.id)}
                title={`Jump to ${s.label}`}
                aria-label={`Scroll to ${s.label}`}
              >
                <span className="pip-dot" />
                <span className="pip-tooltip mono">{s.num} {s.label}</span>
              </button>
            ))}
          </div>

          {/* Bottom Stamp */}
          <div className="rail-stamp-box rail-stamp-gold">
            <Sparkles size={12} className="text-gold" />
            <span className="rail-stamp-title">VERIFIED</span>
            <span className="rail-stamp-sub">APPLIED COMPUTING</span>
          </div>

          <div className="rail-vertical-sub">
            <span>SCROLL VELOCITY TRACKER</span>
          </div>
        </div>
      </aside>
    </>
  );
}
