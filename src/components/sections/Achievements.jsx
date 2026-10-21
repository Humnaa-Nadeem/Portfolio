import { useState } from 'react';
import {
  achievements,
  achievementCategories,
} from '../../data/achievements';
import TiltCard from '../common/TiltCard';
import {
  Award,
  FlaskConical,
  Code2,
  Sparkles,
  FileCode2,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  Eye,
  X,
  Filter,
  Check,
  Copy,
  FileCheck,
} from 'lucide-react';

const iconMap = {
  Award,
  FlaskConical,
  Code2,
  Sparkles,
  FileCode2,
  ShieldCheck,
};

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedId, setCopiedId] = useState(false);

  const filteredAchievements = achievements.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const handleCopyId = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section
      className="achievements section-wrap section-space"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      {/* Section Index Bar */}
      <div className="section-index mono">
        <span>06 / Recognition &amp; Credentials</span>
        <span className="index-line" />
        <span>Achievements</span>
      </div>

      {/* Top Heading Row */}
      <div className="section-heading-row">
        <div className="section-heading">
          <div className="section-eyebrow mono">
            <Award size={14} className="text-gold" />
            <span>Academic Honors &amp; Verified Certifications</span>
          </div>
          <h2 id="achievements-title">
            Achievements &amp;<br />
            <em>Certificates.</em>
          </h2>
          <p className="achievements-lead">
            Documented credentials, departmental first positions, and empirical
            research recognition reflecting sustained academic excellence and technical rigor.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          className="achievement-filter-tabs mono"
          role="tablist"
          aria-label="Filter achievements"
        >
          <span className="filter-label">
            <Filter size={13} className="inline-icon" />
            Category:
          </span>
          {achievementCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-pill ${
                activeCategory === cat ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Achievements Cards Grid */}
      <div className="achievements-grid">
        {filteredAchievements.map((item) => {
          const IconComponent = iconMap[item.icon] || Award;

          return (
            <TiltCard
              key={item.id}
              maxTilt={5}
              glowColor={
                item.color === 'gold'
                  ? 'rgba(244, 184, 96, 0.22)'
                  : item.color === 'lime'
                  ? 'rgba(163, 230, 53, 0.2)'
                  : 'rgba(21, 128, 61, 0.25)'
              }
              className={`achievement-card glow-card achievement-${item.color}`}
              tabIndex={0}
              role="article"
              aria-label={item.title}
            >
              <div className="achievement-card-top">
                <div className="achievement-icon-box">
                  <IconComponent size={20} />
                </div>
                <div className="achievement-badges">
                  <span className="achievement-year mono">{item.date}</span>
                  {item.certificateUrl && (
                    <span className="achievement-badge-pill mono cert-doc-indicator">
                      <FileCheck size={11} className="text-lime" /> Doc
                    </span>
                  )}
                  <span className="achievement-badge-pill mono">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="achievement-body">
                <span className="achievement-category mono">
                  {item.category}
                </span>
                <h3 className="achievement-title">{item.title}</h3>
                <span className="achievement-issuer mono">{item.issuer}</span>
                <p className="achievement-desc">{item.description}</p>
              </div>

              {/* Skills / Honors chips */}
              <div className="achievement-skills">
                {item.skills.map((skill) => (
                  <span key={skill} className="achievement-skill-tag mono">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer action */}
              <div className="achievement-footer">
                <div className="credential-id-box mono">
                  <span className="cid-label">ID:</span>
                  <span className="cid-value">{item.credentialId}</span>
                </div>
                <button
                  type="button"
                  className="view-cert-btn mono"
                  onClick={() => setSelectedCert(item)}
                  aria-label={`Inspect certificate for ${item.title}`}
                >
                  <span>Inspect</span>
                  <Eye size={13} />
                </button>
              </div>
            </TiltCard>
          );
        })}
      </div>

      {/* Interactive Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
        >
          <div
            className="cert-modal-content glow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <div className="modal-header-left">
                <span className="modal-eyebrow mono">
                  {selectedCert.category} · {selectedCert.date}
                </span>
                <h3 id="modal-cert-title">{selectedCert.title}</h3>
                <span className="modal-issuer mono">
                  Issued by: {selectedCert.issuer}
                </span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="cert-modal-body">
              {/* Real Certificate Image or Document Mockup */}
              {selectedCert.certificateUrl ? (
                <div className="certificate-media-display">
                  <div className="cert-real-image-wrapper">
                    <img
                      src={selectedCert.certificateUrl}
                      alt={`${selectedCert.title} credential document`}
                      className="cert-real-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="cert-media-toolbar">
                    <a
                      href={selectedCert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="open-cert-btn mono"
                    >
                      <ExternalLink size={13} />
                      <span>Open Full Document / Image</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="certificate-document-frame">
                  <div className="cert-doc-border">
                    <div className="cert-doc-inner">
                      <div className="cert-doc-seal">
                        <Award size={36} className="text-gold" />
                      </div>
                      <span className="cert-doc-institution mono">
                        {selectedCert.issuer}
                      </span>
                      <h4 className="cert-doc-heading">
                        CERTIFICATE OF RECOGNITION
                      </h4>
                      <p className="cert-doc-subtext">
                        This credential officially certifies the achievement of
                      </p>
                      <span className="cert-doc-recipient">
                        HUMNA NADEEM
                      </span>
                      <p className="cert-doc-title-text">{selectedCert.title}</p>
                      <div className="cert-doc-meta-row mono">
                        <span>Date: {selectedCert.date}</span>
                        <span>Credential ID: {selectedCert.credentialId}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Description & Metadata */}
              <div className="cert-modal-meta">
                <div className="cert-meta-item">
                  <span className="meta-label mono">Description:</span>
                  <p>{selectedCert.description}</p>
                </div>

                <div className="cert-meta-item">
                  <span className="meta-label mono">Competencies &amp; Honors:</span>
                  <div className="cert-modal-tags">
                    {selectedCert.skills.map((s) => (
                      <span key={s} className="cert-modal-tag mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="cert-verification-row">
                  <div className="verification-status mono">
                    <CheckCircle size={14} className="text-lime" />
                    <span>Verified Academic / Professional Record</span>
                  </div>
                  <button
                    type="button"
                    className="copy-cid-btn mono"
                    onClick={() => handleCopyId(selectedCert.credentialId)}
                  >
                    {copiedId ? (
                      <>
                        <Check size={12} className="text-lime" />
                        <span>Copied ID</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Credential ID</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="cert-user-tip mono">
                  <Sparkles size={13} className="text-gold" />
                  <span>
                    {selectedCert.certificateUrl ? (
                      <>
                        Linked asset: <code>{selectedCert.certificateUrl}</code>
                      </>
                    ) : (
                      <>
                        Tip: Place your images in <code>public/images/certificates/</code> and set{' '}
                        <code>certificateUrl</code> in <code>src/data/achievements.js</code>.
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
