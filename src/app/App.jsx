import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '../components/navigation/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Research from '../components/sections/Research';
import DesignGallery from '../components/sections/DesignGallery';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';
import CustomCursor from '../components/common/CustomCursor';
import BackgroundCanvas from '../components/common/BackgroundCanvas';
import EditorialRails from '../components/common/EditorialRails';
import { initScrollAnimations } from '../utils/scrollAnimations';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      smoothTouch: false,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Initialize GSAP ScrollTrigger On-Scroll Animations Engine
    const cleanupScrollAnimations = initScrollAnimations(lenis);

    // Scroll progress bar
    const progressBar = document.querySelector('.scroll-progress');
    const handleScroll = ({ scroll, limit }) => {
      const progress = limit > 0 ? scroll / limit : 0;
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress})`;
      }
    };

    lenis.on('scroll', handleScroll);

    // ResizeObserver ensures Lenis always knows the correct page scroll height as images load
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    // Intercept in-page hash links so they scroll smoothly via Lenis
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -70 });
        if (window.history.pushState) {
          window.history.pushState(null, '', targetId);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all elements with reveal classes
    const timer = setTimeout(() => {
      document
        .querySelectorAll(
          '.section-index, .section-heading, .about-copy, .about-card, ' +
          '.skills-filter-bar, .skill-card, .project-card, .research-copy, .research-card, ' +
          '.design-card, .timeline-item, .experience-card, .achievement-card, .cert-card, ' +
          '.contact-content, .contact-editorial-column, .contact-form-column, .experience-intro, .stat-counter-box, .simulator-card'
        )
        .forEach((el) => {
          el.classList.add('reveal');
          observer.observe(el);
        });
      lenis.resize();
    }, 120);

    return () => {
      cleanupScrollAnimations?.();
      document.removeEventListener('click', handleAnchorClick);
      resizeObserver.disconnect();
      delete window.__lenis;
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <BackgroundCanvas />
      <EditorialRails />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <DesignGallery />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
