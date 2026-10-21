import { useState } from 'react';
import { projects } from '../../data/projects';
import { ArrowUpRight, ExternalLink, PenTool, Eye, X, Filter } from 'lucide-react';
import { Github } from '../icons/BrandIcons';
import TiltCard from '../common/TiltCard';
import smartPakhtunkhwaImg from '../../assets/smart_pakhtunkhwa.jpg';
import digitalKohatImg from '../../assets/digital_kohat.jpg';

const projectImages = {
  'smart-pakhtunkhwa': smartPakhtunkhwaImg,
  'digital-kohat': digitalKohatImg,
};

const statusColors = {
  'Deployed': 'lime',
  'In Progress': 'gold',
  'Concept': 'emerald',
  'Research': 'gold',
};

const filterCategories = ['All', 'Civic Tech', 'Web Platforms', 'Engineering'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [previewModal, setPreviewModal] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Civic Tech') {
      return (
        project.category.toLowerCase().includes('civic') ||
        project.category.toLowerCase().includes('governance')
      );
    }
    if (activeFilter === 'Web Platforms') {
      return (
        project.category.toLowerCase().includes('platform') ||
        project.category.toLowerCase().includes('business') ||
        project.category.toLowerCase().includes('e-commerce')
      );
    }
    if (activeFilter === 'Engineering') {
      return (
        project.category.toLowerCase().includes('engineering') ||
        project.category.toLowerCase().includes('tool')
      );
    }
    return true;
  });

  return (
    <section className="projects section-wrap section-space" id="work" aria-labelledby="projects-title">
      <div className="section-index mono">
        <span>02 / Ideas Are Only the Beginning</span>
        <span className="index-line" />
        <span>Selected Work</span>
      </div>

      <div className="section-heading-row">
        <div className="section-heading">
          <h2 id="projects-title">
            Ideas are only<br />
            <em>the beginning.</em>
          </h2>
          <p>
            A curated selection of digital governance platforms, civic technologies,
            and software systems built with precision and intent.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="project-filter-tabs mono" role="tablist" aria-label="Filter projects">
          <span className="filter-label">
            <Filter size={13} />
            Filter:
          </span>
          {filterCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => {
          const projectImage = projectImages[project.id];

          return (
            <TiltCard
              key={project.id}
              maxTilt={6}
              glowColor={
                project.color === 'lime'
                  ? 'rgba(163, 230, 53, 0.22)'
                  : project.color === 'gold'
                  ? 'rgba(244, 184, 96, 0.2)'
                  : 'rgba(21, 128, 61, 0.25)'
              }
              className={`project-card-outer glow-card ${project.featured ? 'featured' : ''}`}
            >
              <article className="project-card-inner">
                {/* Visual Media Showcase */}
                <div className={`project-preview project-${project.color}`}>
                  <div className="preview-top mono">
                    <span className="preview-cat-badge">{project.category.split('·')[0].trim()}</span>
                    <span className="preview-idx">0{index + 1}</span>
                  </div>

                  {projectImage ? (
                    <div className="project-image-wrapper">
                      <img
                        src={projectImage}
                        alt={`${project.title} dashboard interface`}
                        className="project-cover-img"
                        loading="lazy"
                      />
                      <div className="image-overlay-action">
                        <button
                          onClick={() =>
                            setPreviewModal({
                              title: project.title,
                              img: projectImage,
                              desc: project.description,
                              category: project.category,
                            })
                          }
                          className="preview-zoom-btn mono"
                          aria-label={`Enlarge ${project.title} UI preview`}
                        >
                          <Eye size={15} />
                          <span>Inspect High-Res UI</span>
                        </button>
                      </div>
                    </div>
                  ) : project.id === 'shopkeepers-pk' ? (
                    <div className="project-viz shopkeepers-viz">
                      <div className="shop-connection">
                        <div className="shop-node">Local Retail</div>
                        <span className="connection-line-pulse" />
                        <div className="shop-node">Consumer Hub</div>
                      </div>
                      <div className="viz-label mono">B2C Digital Commerce Bridge</div>
                    </div>
                  ) : (
                    <div className="project-viz idea-viz">
                      <div className="idea-flow">
                        <span className="flow-step">Concept</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Iterate</span>
                        <span className="flow-arrow">→</span>
                        <span className="flow-step">Production</span>
                      </div>
                      <div className="viz-label mono">Full-Cycle Pipeline Engine</div>
                    </div>
                  )}
                </div>

                {/* Project Details Content */}
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className={`project-status status-${statusColors[project.status] || 'emerald'}`}>
                      <span className="status-dot pulse-dot" />
                      {project.status}
                    </span>
                  </div>

                  <p className="project-category-line mono">{project.category}</p>
                  <p className="project-description">{project.description}</p>

                  {project.longDescription && (
                    <p className="project-long-desc">{project.longDescription}</p>
                  )}

                  {/* Sectors if available */}
                  {project.sectors && (
                    <div className="project-sectors-chips mono">
                      <span className="sector-chip-label">Sectors:</span>
                      {project.sectors.map((s) => (
                        <span key={s} className="sector-chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.technologies.length > 0 && (
                    <div className="project-tech">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="project-links">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link button-link-primary"
                      >
                        <ExternalLink size={14} />
                        Visit Live Platform
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Github size={14} />
                        Inspect Source
                      </a>
                    )}
                    {project.links.figma && (
                      <a
                        href={project.links.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link button-link-figma"
                      >
                        <PenTool size={14} />
                        View Figma System
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </TiltCard>
          );
        })}
      </div>

      {/* Modal Zoom Viewer */}
      {previewModal && (
        <div
          className="modal-backdrop"
          onClick={() => setPreviewModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label="UI Preview Modal"
        >
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="mono modal-cat">{previewModal.category}</span>
                <h3>{previewModal.title} — High Fidelity UI Preview</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setPreviewModal(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="modal-image-body">
              <img src={previewModal.img} alt={previewModal.title} />
            </div>
            <div className="modal-footer mono">
              <span>{previewModal.desc}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
