import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import LivingEcosystem from '../animation/LivingEcosystem';

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-radial-glow" aria-hidden="true" />

      <div className="hero-topline">
        <div className="status-pill mono">
          <span className="status-dot pulse-beacon" />
          <span>Available for Research & Engineering Roles</span>
        </div>
        <span className="eyebrow hero-badge-tag">
          <Sparkles size={13} className="sparkle-icon" />
          Emerald Vision Design System
        </span>
      </div>

      <div className="hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-headline">
            I build at the intersection of{' '}
            <span className="gradient-highlight text-lime">code</span>,{' '}
            <span className="gradient-highlight text-gold">curiosity</span>{' '}
            <span className="amp">&</span>{' '}
            <span className="gradient-highlight text-emerald-bright">human impact.</span>
          </h1>

          <p className="hero-statement">
            I'm <strong className="text-ivory">Humna Nadeem</strong> — a software engineering student,
            researcher, and digital builder investigating algorithmic judgment, architecting civic
            platforms, and crafting intentional human experiences.
          </p>

          <div className="hero-stat-chips mono">
            <div className="stat-chip">
              <span className="stat-value text-lime">3.85</span>
              <span className="stat-caption">Top Dept CGPA</span>
            </div>
            <div className="stat-chip">
              <span className="stat-value text-gold">50+</span>
              <span className="stat-caption">Study Participants</span>
            </div>
            <div className="stat-chip">
              <span className="stat-value text-emerald">5</span>
              <span className="stat-caption">Provincial Sectors</span>
            </div>
          </div>

          <div className="hero-actions">
            <a className="button button-primary shimmer-button" href="#work">
              <span>Explore Selected Work</span>
              <ArrowDownRight size={17} className="btn-icon" />
            </a>
            <a className="button button-secondary glass-button" href="#contact">
              <span>Let's Connect</span>
              <ArrowUpRight size={17} className="btn-icon" />
            </a>
          </div>

          <div className="hero-meta mono">
            <span>Software Engineering</span>
            <span className="meta-divider">/</span>
            <span>Cognitive AI Research</span>
            <span className="meta-divider">/</span>
            <span>Civic Innovation</span>
          </div>
        </div>

        <div className="hero-ecosystem">
          <div className="ecosystem-heading mono">
            <span>
              <span className="status-dot" />
              Living Ecosystem Map
            </span>
            <span className="ecosystem-mode pulse-badge">Interactive Physics</span>
          </div>
          <LivingEcosystem />
          <span className="ecosystem-disclaimer mono">
            ✦ Hover or tap nodes to navigate domain insights
          </span>
        </div>
      </div>

      <div className="hero-bottom">
        <a className="scroll-cue mono" href="#about">
          <span className="scroll-mouse" aria-hidden="true" />
          <span>Scroll to explore</span>
        </a>
        <span className="mono hero-year">Humna Nadeem · {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
