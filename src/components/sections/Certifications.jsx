import { useState, useEffect, useCallback } from 'react';
import {
  certifications,
  certificationCategories,
} from '../../data/certifications';
import TiltCard from '../common/TiltCard';
import {
  Award,
  CheckCircle,
  ExternalLink,
  Eye,
  X,
  Filter,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Calendar,
  MapPin,
  Check,
  Copy,
  FileCheck2,
} from 'lucide-react';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);
  const [copiedId, setCopiedId] = useState(false);

  const filteredCerts = certifications.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const selectedCert =
    selectedCertIndex !== null ? filteredCerts[selectedCertIndex] : null;

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (selectedCertIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedCertIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedCertIndex((prev) =>
          prev < filteredCerts.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedCertIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCerts.length - 1
        );
      }
    },
    [selectedCertIndex, filteredCerts.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleCopyId = (cid) => {
    if (!cid) return;
    navigator.clipboard?.writeText(cid);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const nextCert = (e) => {
    e.stopPropagation();
    setSelectedCertIndex((prev) =>
      prev < filteredCerts.length - 1 ? prev + 1 : 0
    );
  };

  const prevCert = (e) => {
    e.stopPropagation();
    setSelectedCertIndex((prev) =>
      prev > 0 ? prev - 1 : filteredCerts.length - 1
    );
  };

  return (
    <section
      className="certifications-section section-wrap section-space"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      {/* Anchor alias for existing achievements links */}
      <span id="achievements" className="section-anchor-alias" aria-hidden="true" />

      {/* Section Index Bar */}
      <div className="section-index mono">
        <span>06 / Verified Credentials &amp; Honors</span>
        <span className="index-line" />
        <span>Certifications</span>
      </div>

      {/* Top Heading Row */}
      <div className="section-heading-row">
        <div className="section-heading">
          <div className="section-eyebrow mono">
            <Award size={14} className="text-gold" />
            <span>Documented Credentials &amp; Honors</span>
          </div>
          <h2 id="certifications-title">
            Certifications &amp;<br />
            <em>Official Recognition.</em>
          </h2>
          <p className="certifications-lead">
            Authentic certificates across modern frontend architecture, AI-powered software development,
            regional government commendations, and academic merit awards.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="cert-filter-tabs mono"
          role="tablist"
          aria-label="Filter certifications"
        >
          <span className="filter-label">
            <Filter size={13} className="inline-icon" />
            Category:
          </span>
          {certificationCategories.map((cat) => {
            const count =
              cat === 'All'
                ? certifications.length
                : certifications.filter((c) => c.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`cert-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedCertIndex(null);
                }}
              >
                <span>{cat}</span>
                <span className="cert-filter-count mono">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Certifications Grid with Direct Image Display */}
      <div className="certifications-grid">
        {filteredCerts.map((item, index) => (
          <TiltCard
            key={item.id}
            maxTilt={6}
            className={`cert-card glow-card cert-card-${item.color}`}
            tabIndex={0}
            role="article"
            aria-label={item.title}
          >
            {/* Direct Certificate Image Preview Box */}
            <div
              className="cert-card-image-box"
              onClick={() => setSelectedCertIndex(index)}
              title="Click to view full certificate"
            >
              <img
                src={item.image}
                alt={item.title}
                className="cert-thumbnail-img"
                loading="lazy"
              />
              <div className="cert-image-overlay">
                <button
                  type="button"
                  className="cert-zoom-btn mono"
                  aria-label={`Inspect ${item.title}`}
                >
                  <Eye size={14} />
                  <span>View Document</span>
                </button>
              </div>
              <div className="cert-card-badge-tag mono">
                <ShieldCheck size={12} className="text-lime" />
                <span>{item.badge}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="cert-card-content">
              <div className="cert-card-header">
                <span className="cert-card-category mono">
                  {item.category}
                </span>
                <span className="cert-card-year mono">{item.year}</span>
              </div>

              <h3 className="cert-card-title">{item.title}</h3>

              <div className="cert-card-issuer mono">
                <FileCheck2 size={13} className="issuer-icon" />
                <span>{item.issuer}</span>
              </div>

              <p className="cert-card-desc">{item.description}</p>

              {/* Skills / Honors chips */}
              <div className="cert-card-skills">
                {item.skills.map((skill) => (
                  <span key={skill} className="cert-skill-tag mono">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer action */}
              <div className="cert-card-footer">
                <div className="cert-credential-meta mono">
                  {item.credentialId ? (
                    <span className="cert-cid">ID: {item.credentialId}</span>
                  ) : (
                    <span className="cert-cid">{item.date}</span>
                  )}
                </div>
                <button
                  type="button"
                  className="cert-inspect-action-btn mono"
                  onClick={() => setSelectedCertIndex(index)}
                  aria-label={`Inspect ${item.title}`}
                >
                  <span>Inspect</span>
                  <Maximize2 size={13} />
                </button>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Interactive Lightbox Modal for High-Resolution View */}
      {selectedCert && (
        <div
          className="cert-lightbox-backdrop"
          onClick={() => setSelectedCertIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-cert-title"
        >
          <div
            className="cert-lightbox-modal glow-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-lightbox-header">
              <div className="cert-lightbox-title-area">
                <span className="lightbox-eyebrow mono">
                  Credential {selectedCertIndex + 1} of {filteredCerts.length} · {selectedCert.category}
                </span>
                <h3 id="lightbox-cert-title">{selectedCert.title}</h3>
                <span className="lightbox-issuer mono">
                  {selectedCert.issuer} {selectedCert.office ? `(${selectedCert.office})` : ''}
                </span>
              </div>

              <div className="lightbox-header-actions">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lightbox-open-external-btn mono"
                  title="Open high-resolution file in new tab"
                >
                  <ExternalLink size={14} />
                  <span>Full Size</span>
                </a>
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setSelectedCertIndex(null)}
                  aria-label="Close certificate lightbox"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body: High-Res Image + Metadata */}
            <div className="cert-lightbox-body">
              {/* High-Resolution Document Display */}
              <div className="cert-lightbox-image-stage">
                <div className="cert-lightbox-img-frame">
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} certificate`}
                    className="cert-lightbox-full-img"
                  />
                </div>

                {/* Navigation Arrows */}
                <button
                  type="button"
                  className="lightbox-nav-btn prev-btn"
                  onClick={prevCert}
                  aria-label="Previous certificate"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  className="lightbox-nav-btn next-btn"
                  onClick={nextCert}
                  aria-label="Next certificate"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Detailed Metadata Tray */}
              <div className="cert-lightbox-meta-panel">
                <div className="lightbox-meta-row-grid">
                  <div className="meta-box">
                    <span className="meta-box-label mono">
                      <Calendar size={12} /> Issued / Duration
                    </span>
                    <span className="meta-box-value">{selectedCert.date}</span>
                  </div>

                  {selectedCert.signatory && (
                    <div className="meta-box">
                      <span className="meta-box-label mono">
                        <ShieldCheck size={12} /> Signatory Authority
                      </span>
                      <span className="meta-box-value">{selectedCert.signatory}</span>
                    </div>
                  )}

                  {selectedCert.credentialId && (
                    <div className="meta-box">
                      <span className="meta-box-label mono">
                        <FileCheck2 size={12} /> Credential ID
                      </span>
                      <span className="meta-box-value mono">{selectedCert.credentialId}</span>
                    </div>
                  )}

                  {selectedCert.place && (
                    <div className="meta-box">
                      <span className="meta-box-label mono">
                        <MapPin size={12} /> Place / Jurisdiction
                      </span>
                      <span className="meta-box-value">{selectedCert.place}</span>
                    </div>
                  )}
                </div>

                <div className="lightbox-desc-box">
                  <span className="meta-label mono">Official Citation &amp; Context:</span>
                  <p>{selectedCert.description}</p>
                </div>

                <div className="lightbox-skills-box">
                  <span className="meta-label mono">Validated Competencies &amp; Honors:</span>
                  <div className="lightbox-tag-cloud">
                    {selectedCert.skills.map((s) => (
                      <span key={s} className="lightbox-tag mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Row */}
                <div className="lightbox-verification-bar">
                  <div className="lightbox-verify-status mono">
                    <CheckCircle size={14} className="text-lime" />
                    <span>Verified Official Credential Record</span>
                  </div>

                  {selectedCert.credentialId && (
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
