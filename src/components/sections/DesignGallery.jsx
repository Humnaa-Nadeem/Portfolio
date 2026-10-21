import { useState } from 'react';
import { ExternalLink, Eye, X, Layers, Palette } from 'lucide-react';
import TiltCard from '../common/TiltCard';
import lbopImg from '../../assets/lbop_design.jpg';
import smartPakhtunkhwaImg from '../../assets/smart_pakhtunkhwa.jpg';

const designProjects = [
  {
    id: 'lbop-design',
    title: 'LBOP Design System',
    category: 'UI/UX Design · Design System · Mobile & Web',
    description:
      'Comprehensive design system case study with dark forest & neon lime tokens, mobile application wireframes, modular UI components, and user journey flowcharts.',
    figmaUrl:
      'https://www.figma.com/design/vVerq9zJxDoUVYjFWCSeOV/LBOP?node-id=0-1&t=IzCuvTt4r2wjqMBD-1',
    color: 'lime',
    image: lbopImg,
    metrics: ['Full Token Library', 'Mobile Flowcharts', 'High-Fidelity Wireframes'],
  },
  {
    id: 'smart-pakhtunkhwa-design',
    title: 'Smart Pakhtunkhwa Governance UI',
    category: 'Civic UI/UX · Public Services Architecture',
    description:
      'Interface design ecosystem for provincial public service coordination across Health, Agriculture, Education, Transport, and Tourism modules.',
    figmaUrl:
      'https://www.figma.com/design/C9Ac6cxpAZGK92QIuF8bjL/Smart-Pakhtoonkhwa?node-id=0-1&t=mQpydEYj6OVYxNa7-1',
    color: 'emerald',
    image: smartPakhtunkhwaImg,
    metrics: ['5 Integrated Sectors', 'Citizen Analytics', 'Cross-Department Sync'],
  },
];

export default function DesignGallery() {
  const [zoomModal, setZoomModal] = useState(null);

  return (
    <section className="design-gallery section-wrap section-space" id="design" aria-labelledby="design-title">
      <div className="section-index mono">
        <span>04 / Visual Language & Interface Craft</span>
        <span className="index-line" />
        <span>Design</span>
      </div>

      <div className="section-heading">
        <h2 id="design-title">
          Where function meets<br />
          <em>visual intention.</em>
        </h2>
        <p>
          UI/UX design exploration grounded in systematic typography, disciplined color spaces,
          and component architectures that make complex software intuitive.
        </p>
      </div>

      <div className="design-grid">
        {designProjects.map((project, idx) => (
          <TiltCard
            key={project.id}
            maxTilt={6}
            glowColor={project.color === 'lime' ? 'rgba(163, 230, 53, 0.22)' : 'rgba(21, 128, 61, 0.25)'}
            className={`design-card glow-card design-${project.color}`}
          >
            <article className="design-card-inner">
              <div className="design-preview">
                <div className="design-image-container">
                  <img
                    src={project.image}
                    alt={`${project.title} UI showcase`}
                    className="design-showcase-img"
                    loading="lazy"
                  />
                  <div className="design-overlay-action">
                    <button
                      onClick={() => setZoomModal(project)}
                      className="preview-zoom-btn mono"
                      aria-label={`Inspect ${project.title} design system`}
                    >
                      <Eye size={15} />
                      <span>Inspect Design System</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="design-info">
                <div className="design-info-top mono">
                  <span className="design-category-badge">
                    <Palette size={12} />
                    {project.category}
                  </span>
                  <span className="design-number">0{idx + 1}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="design-metrics-row mono">
                  {project.metrics.map((m) => (
                    <span key={m} className="design-metric-chip">
                      <Layers size={11} />
                      {m}
                    </span>
                  ))}
                </div>

                <div className="design-actions">
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="design-figma-link button-link-figma"
                  >
                    <span>Open in Figma</span>
                    <ExternalLink size={14} />
                  </a>
                  <button
                    onClick={() => setZoomModal(project)}
                    className="design-inspect-btn mono"
                  >
                    <Eye size={14} />
                    <span>Quick Preview</span>
                  </button>
                </div>
              </div>
            </article>
          </TiltCard>
        ))}
      </div>

      {/* High-res Design System Zoom Modal */}
      {zoomModal && (
        <div
          className="modal-backdrop"
          onClick={() => setZoomModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="mono modal-cat">{zoomModal.category}</span>
                <h3>{zoomModal.title}</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setZoomModal(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="modal-image-body">
              <img src={zoomModal.image} alt={zoomModal.title} />
            </div>
            <div className="modal-footer mono">
              <span>{zoomModal.description}</span>
              <a
                href={zoomModal.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
                style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}
              >
                Open File on Figma <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
