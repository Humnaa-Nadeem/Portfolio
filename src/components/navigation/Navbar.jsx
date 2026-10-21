import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'design', label: 'Design' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section
      const sections = ['contact', 'certifications', 'achievements', 'experience', 'design', 'research', 'work', 'skills', 'about', 'home'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -70 });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setMobileOpen(false);
    }
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <a
        className="brand"
        href="#home"
        onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
        aria-label="Humna Nadeem, home"
      >
        <span className="brand-mark">
          H<span className="brand-accent">N</span>
        </span>
        <span className="brand-name">
          humna<span className="brand-dot">.</span>nadeem
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        className="header-cta"
        href="#contact"
        onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
      >
        Let's Connect
        <ArrowUpRight size={14} />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav
        id="mobile-nav"
        className={`mobile-nav ${mobileOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
      >
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <span className="mobile-link-index mono">{String(i + 1).padStart(2, '0')}</span>
            <span>{item.label}</span>
          </a>
        ))}
        <a
          className="mobile-cta"
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
        >
          Let's Connect <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}
