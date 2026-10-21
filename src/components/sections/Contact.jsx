import { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Copy,
  Check,
  Sparkles,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  RefreshCw,
  FileText,
  Briefcase,
  ExternalLink,
} from 'lucide-react';
import { Github, Linkedin } from '../icons/BrandIcons';
import { socialLinks } from '../../data/experience';
import TiltCard from '../common/TiltCard';

const inquiryTypes = [
  { id: 'swe', label: 'Software Engineering', badge: 'Full-time / Contract' },
  { id: 'research', label: 'AI & Research Collab', badge: 'Academic / Empirical' },
  { id: 'civic', label: 'Civic Tech & Platform', badge: 'Regional Impact' },
  { id: 'general', label: 'General Dialogue', badge: 'Say Hello' },
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [activeType, setActiveType] = useState('Software Engineering');
  const [currentTime, setCurrentTime] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactEmail = 'humna.nadeem.cs@gmail.com';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formState;

    const emailSubject = encodeURIComponent(
      `[${activeType}] ${subject || 'Portfolio Inquiry'} — from ${name || 'Collaborator'}`
    );
    const emailBody = encodeURIComponent(
      `Hi Humna,\n\n${message || 'I would like to discuss an opportunity / collaboration with you.'}\n\n—\nSender: ${name || 'Anonymous'}\nEmail: ${email || 'Not provided'}\nCategory: ${activeType}`
    );

    // Trigger user's mail client with prefilled data
    window.location.href = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;
    setIsSubmitted(true);
  };

  const handleCopyDraft = () => {
    const { name, email, subject, message } = formState;
    const draftText = `Subject: [${activeType}] ${subject || 'Portfolio Inquiry'}
From: ${name || 'Anonymous'} (${email || 'No email specified'})
Inquiry Category: ${activeType}

Message:
${message || 'I would like to connect and discuss potential collaboration.'}`;

    navigator.clipboard?.writeText(draftText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2200);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <section
        className="contact section-wrap section-space"
        id="contact"
        aria-labelledby="contact-title"
      >
        {/* Section Index Bar */}
        <div className="section-index mono">
          <span>07 / Open a Dialogue</span>
          <span className="index-line" />
          <span>Direct Connection</span>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="contact-grid-layout">
          {/* Left Column: Narrative & Fast-Connect Hub */}
          <div className="contact-editorial-column">
            {/* Live Availability Badge */}
            <div className="contact-status-beacon mono">
              <span className="status-dot pulse-beacon" />
              <span>Available for Software Engineering &amp; Research</span>
            </div>

            <h2 id="contact-title" className="contact-main-heading">
              Have a meaningful<br />
              problem to solve<span className="text-lime">?</span>
            </h2>

            <p className="contact-narrative">
              I am currently seeking high-impact opportunities in software engineering, applied AI
              research, and digital product architecture where rigorous systems thinking, clean code,
              and disciplined execution make a tangible difference.
            </p>

            {/* Live Telemetry Bar */}
            <div className="contact-telemetry-grid mono">
              <div className="telemetry-item">
                <span className="telemetry-label">
                  <MapPin size={12} className="text-lime" /> Base Location
                </span>
                <span className="telemetry-value">Kohat, Pakistan · Remote-Ready</span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-label">
                  <Clock size={12} className="text-lime" /> Local Time (PKT)
                </span>
                <span className="telemetry-value">{currentTime || 'UTC+5:00'}</span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-label">
                  <ShieldCheck size={12} className="text-lime" /> Response Window
                </span>
                <span className="telemetry-value">&lt; 24 Hours SLA</span>
              </div>
              <div className="telemetry-item">
                <span className="telemetry-label">
                  <Briefcase size={12} className="text-lime" /> Target Engagement
                </span>
                <span className="telemetry-value">Full-Time · Applied Labs</span>
              </div>
            </div>

            {/* Quick Connect Primary Card */}
            <TiltCard
              maxTilt={4}
              glowColor="rgba(163, 230, 53, 0.2)"
              className="direct-connect-card glow-card"
            >
              <div className="direct-card-top mono">
                <span className="direct-card-title flex-center gap-xs">
                  <Mail size={13} className="text-lime" />
                  Direct Communication Channel
                </span>
                <span className="direct-badge mono">Primary Inbox</span>
              </div>

              <div className="direct-email-box">
                <span className="direct-email-text mono">{contactEmail}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="direct-copy-btn mono"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-lime" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="direct-card-actions">
                <a
                  className="launch-client-btn mono"
                  href={`mailto:${contactEmail}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
                >
                  <Mail size={15} />
                  <span>Launch Email Client</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </TiltCard>

            {/* Social Channels Network */}
            <div className="contact-social-channels">
              <span className="social-channels-label mono">
                <Terminal size={12} className="text-gold" />
                Verified Network Profiles:
              </span>
              <div className="social-cards-grid">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    className={`social-channel-item glow-card ${link.comingSoon ? 'coming-soon' : ''}`}
                    href={link.comingSoon ? undefined : link.url}
                    target={link.comingSoon ? undefined : '_blank'}
                    rel={link.comingSoon ? undefined : 'noopener noreferrer'}
                    aria-disabled={link.comingSoon}
                  >
                    <div className="social-item-icon">
                      {link.id === 'github' ? <Github size={18} /> : <Linkedin size={18} />}
                    </div>
                    <div className="social-item-meta">
                      <strong className="social-item-title">{link.label}</strong>
                      <span className="social-item-sub mono">
                        {link.comingSoon ? 'Profile Launching Soon' : '@Humnaa-Nadeem'}
                      </span>
                    </div>
                    <ArrowUpRight size={14} className="social-item-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Transmission & Message Studio */}
          <div className="contact-form-column">
            <div className="message-studio-card glow-card">
              {/* Studio Header Bar */}
              <div className="studio-card-header">
                <div className="studio-mac-dots" aria-hidden="true">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="studio-header-title mono">
                  <Terminal size={13} className="text-lime" />
                  <span>DISPATCH_MESSAGE.sh</span>
                </div>
                <div className="studio-header-status mono">
                  <span className="status-ping" />
                  <span>READY</span>
                </div>
              </div>

              {/* Form Body or Submitted Confirmation */}
              {!isSubmitted ? (
                <form className="studio-form-body" onSubmit={handleFormSubmit}>
                  {/* Category Chips Selector */}
                  <div className="form-field-wrapper">
                    <label className="field-label mono">
                      <MessageSquare size={12} className="text-gold" />
                      Select Inquiry Type:
                    </label>
                    <div className="inquiry-chips-row mono">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          className={`inquiry-chip-btn ${activeType === type.label ? 'active' : ''}`}
                          onClick={() => setActiveType(type.label)}
                        >
                          <span>{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="form-row-dual">
                    <div className="form-field-wrapper">
                      <label htmlFor="contact-name" className="field-label mono">
                        Your Name / Organization <span className="req">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Eleanor Vance / KUST Lab"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="studio-input"
                      />
                    </div>
                    <div className="form-field-wrapper">
                      <label htmlFor="contact-email" className="field-label mono">
                        Your Email Address <span className="req">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="name@company.com"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="studio-input"
                      />
                    </div>
                  </div>

                  {/* Subject Line */}
                  <div className="form-field-wrapper">
                    <label htmlFor="contact-subject" className="field-label mono">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder={`e.g. ${activeType} Collaboration / Opportunity`}
                      value={formState.subject}
                      onChange={handleInputChange}
                      className="studio-input"
                    />
                  </div>

                  {/* Message Area */}
                  <div className="form-field-wrapper">
                    <div className="label-with-counter">
                      <label htmlFor="contact-message" className="field-label mono">
                        Message Details <span className="req">*</span>
                      </label>
                      <span className="char-counter mono">
                        {formState.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Share your problem statement, project scope, engineering requirements, or research questions..."
                      value={formState.message}
                      onChange={handleInputChange}
                      className="studio-textarea"
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="studio-actions-row">
                    <button
                      type="submit"
                      className="studio-submit-btn mono"
                    >
                      <Send size={15} />
                      <span>Transmit Message</span>
                      <ArrowUpRight size={14} />
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="studio-draft-btn mono"
                      title="Copy formatted message to clipboard"
                    >
                      {copiedDraft ? (
                        <>
                          <Check size={14} className="text-lime" />
                          <span>Draft Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy Draft</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="studio-privacy-note mono">
                    🔒 Direct client dispatch. No telemetry or tracking stored on third-party servers.
                  </p>
                </form>
              ) : (
                /* Celebration / Confirmation State */
                <div className="studio-success-state">
                  <div className="success-icon-halo">
                    <CheckCircle2 size={42} className="text-lime" />
                  </div>
                  <h3 className="success-heading">Transmission Prepared!</h3>
                  <p className="success-description">
                    Your email client has been launched with your formatted draft to{' '}
                    <code className="text-gold">{contactEmail}</code>.
                  </p>

                  <div className="success-preview-box mono">
                    <div className="preview-header">
                      <span>Subject: [{activeType}] {formState.subject || 'Portfolio Inquiry'}</span>
                      <span>From: {formState.name}</span>
                    </div>
                    <div className="preview-body">{formState.message}</div>
                  </div>

                  <div className="success-actions-row">
                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="studio-draft-btn mono"
                    >
                      {copiedDraft ? (
                        <>
                          <Check size={14} className="text-lime" />
                          <span>Copied Draft to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy Draft to Clipboard</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="studio-reset-btn mono"
                    >
                      <RefreshCw size={14} />
                      <span>Compose Another Message</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="contact-bottom mono">
          <div className="location-pill flex-center gap-xs">
            <MapPin size={13} className="text-lime" />
            <span>Khyber Pakhtunkhwa, Pakistan · Worldwide Collaboration Ready</span>
          </div>
          <button
            onClick={scrollToTop}
            className="back-to-top shimmer-hover"
            aria-label="Back to top"
          >
            <span>Return to Surface</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </section>

      {/* Modern High-End Site Footer */}
      <footer className="site-footer section-wrap">
        <div className="footer-inner">
          <div className="footer-brand-col">
            <a className="brand" href="#home">
              <span className="brand-mark">
                H<span className="brand-accent">N</span>
              </span>
              <span className="brand-name">
                humna<span className="brand-dot">.</span>nadeem
              </span>
            </a>
            <p className="footer-tagline mono">
              Software Engineer · Applied AI Researcher · Civic Tech Platform Builder
            </p>
          </div>

          <div className="footer-nav-col mono">
            <a href="#about" className="footer-nav-link">About</a>
            <a href="#skills" className="footer-nav-link">Skills</a>
            <a href="#work" className="footer-nav-link">Projects</a>
            <a href="#research" className="footer-nav-link">Research</a>
            <a href="#design" className="footer-nav-link">Design</a>
            <a href="#experience" className="footer-nav-link">Experience</a>
            <a href="#certifications" className="footer-nav-link">Certifications</a>
            <a href="#contact" className="footer-nav-link">Contact</a>
          </div>

          <div className="footer-social-col">
            <div className="footer-links">
              {socialLinks
                .filter((l) => !l.comingSoon)
                .map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="footer-icon-link"
                  >
                    {link.id === 'github' ? <Github size={16} /> : <Linkedin size={16} />}
                  </a>
                ))}
            </div>
          </div>

          <div className="footer-copyright mono">
            © {new Date().getFullYear()} Humna Nadeem. Built with React &amp; Vite · All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
