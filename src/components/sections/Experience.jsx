import { experiences } from '../../data/experience';
import TiltCard from '../common/TiltCard';
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function Experience() {
  return (
    <section
      className="experience section-wrap section-space"
      id="experience"
      aria-labelledby="experience-title"
    >
      {/* Section Index Bar */}
      <div className="section-index mono">
        <span>05 / Leadership &amp; Applied Engineering</span>
        <span className="index-line" />
        <span>Experience</span>
      </div>

      {/* Top Heading Row */}
      <div className="section-heading-row experience-heading-row">
        <div className="section-heading">
          <div className="section-eyebrow mono">
            <Briefcase size={14} className="text-lime" />
            <span>Track Record of Initiative</span>
          </div>
          <h2 id="experience-title">
            Built on<br />
            <em>real initiative.</em>
          </h2>
          <p className="experience-lead">
            From co-founding regional digital platforms to directing research
            programs and incubation operations — taking ownership of ideas from
            genesis to execution.
          </p>
        </div>

        {/* Executive Highlights Strip */}
        <div className="experience-stats-strip mono">
          <div className="exp-stat-box">
            <span className="exp-stat-num text-lime">2+</span>
            <span className="exp-stat-label">Co-Founded Platforms</span>
          </div>
          <div className="exp-stat-box">
            <span className="exp-stat-num text-gold">Civic</span>
            <span className="exp-stat-label">Tech Focus (KP)</span>
          </div>
          <div className="exp-stat-box">
            <span className="exp-stat-num text-emerald">N=50</span>
            <span className="exp-stat-label">Research Study Lead</span>
          </div>
        </div>
      </div>

      {/* Symmetrical, Proportional Experience Cards Grid */}
      <div className="experience-cards-grid">
        {experiences.map((exp) => (
          <TiltCard
            key={exp.id}
            maxTilt={4}
            glowColor={
              exp.current
                ? 'rgba(163, 230, 53, 0.22)'
                : 'rgba(21, 128, 61, 0.2)'
            }
            className={`experience-card glow-card ${
              exp.current ? 'is-active-role' : 'is-completed-role'
            }`}
            tabIndex={0}
            role="article"
            aria-label={`${exp.role} at ${exp.organization}`}
          >
            {/* Card Header */}
            <div className="exp-card-header">
              <div className="exp-top-meta">
                <span className="exp-role-type mono">{exp.type}</span>
                {exp.current ? (
                  <span className="role-status-badge active mono">
                    <span className="status-dot" />
                    Active Role
                  </span>
                ) : (
                  <span className="role-status-badge completed mono">
                    <Calendar size={11} className="inline-icon" />
                    {exp.period}
                  </span>
                )}
              </div>

              <h3 className="exp-role-title">{exp.role}</h3>

              <div className="exp-org-row mono">
                <span className="exp-org-name">
                  <Building2 size={13} className="inline-icon text-lime" />
                  {exp.organization}
                </span>
                <span className="exp-bullet">•</span>
                <span className="exp-location">
                  <MapPin size={12} className="inline-icon text-muted" />
                  {exp.location}
                </span>
                {exp.current && (
                  <>
                    <span className="exp-bullet">•</span>
                    <span className="exp-duration text-lime">{exp.period}</span>
                  </>
                )}
              </div>
            </div>

            {/* Role Summary */}
            <p className="exp-card-desc">{exp.description}</p>

            {/* Key Deliverables & Highlights */}
            {exp.highlights && exp.highlights.length > 0 && (
              <div className="exp-highlights-list">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="exp-highlight-item">
                    <CheckCircle2
                      size={14}
                      className="highlight-icon text-lime"
                    />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Competency & Skill Tags */}
            <div className="exp-tags-row">
              {exp.tags.map((tag) => (
                <span key={tag} className="exp-tag mono">
                  {tag}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
