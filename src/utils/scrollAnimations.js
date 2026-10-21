import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations(lenis) {
  const syncScrollTrigger = () => ScrollTrigger.update();
  if (lenis) lenis.on('scroll', syncScrollTrigger);

  const mm = gsap.matchMedia();

  // Desktop & Tablet Animations (> 768px)
  mm.add('(min-width: 769px)', () => {
    // 1. SECTION INDEX BARS — Laser Draw & Text Bloom
    const sectionIndexes = gsap.utils.toArray('.section-index');
    sectionIndexes.forEach((idx) => {
      const line = idx.querySelector('.index-line');
      const spans = idx.querySelectorAll('span:not(.index-line)');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: idx,
          start: 'top 88%',
          once: true,
        },
      });

      if (line) {
        tl.fromTo(
          line,
          { scaleX: 0, opacity: 0.3 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.95,
            ease: 'power3.out',
            transformOrigin: 'left center',
          }
        );
      }

      if (spans.length) {
        tl.from(
          spans,
          {
            y: 12,
            opacity: 0,
            letterSpacing: '0.22em',
            duration: 0.65,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.6'
        );
      }
    });

    // 2. SECTION HEADINGS — Editorial Masked Lift
    const sectionHeadings = gsap.utils.toArray('.section-heading');
    sectionHeadings.forEach((heading) => {
      const eyebrow = heading.querySelector('.section-eyebrow, .about-eyebrow');
      const title = heading.querySelector('h2');
      const desc = heading.querySelector('p, .experience-lead, .certifications-lead');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: 'top 86%',
          once: true,
        },
      });

      if (eyebrow) {
        tl.from(eyebrow, {
          y: 16,
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
        });
      }

      if (title) {
        tl.from(
          title,
          {
            y: 35,
            opacity: 0,
            duration: 0.85,
            ease: 'power3.out',
          },
          '-=0.35'
        );
      }

      if (desc) {
        tl.from(
          desc,
          {
            y: 20,
            opacity: 0,
            duration: 0.65,
            ease: 'power2.out',
          },
          '-=0.5'
        );
      }
    });

    // 3. SIGNATURE ALTERNATING CLIP-PATH REVEALS (Direct from Inspo Portfolio)
    // Applies to project art frames, cert image boxes, and design gallery cards
    const clipItems = gsap.utils.toArray(
      '.project-image-wrapper, .cert-card-image-box, .design-image-container, .about-card, .research-highlight-box'
    );

    clipItems.forEach((item, index) => {
      const isEven = index % 2 === 0;
      gsap.fromTo(
        item,
        {
          clipPath: isEven ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
          scale: 1.04,
          filter: 'brightness(1.2)',
        },
        {
          clipPath: 'inset(0 0% 0 0%)',
          scale: 1,
          filter: 'brightness(1)',
          duration: 1.05,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });

    // 4. KINETIC CARD CASCADE STAGGER
    const cardGroups = [
      { trigger: '.skills-section', selector: '.skill-card', animateOpacity: false },
      { trigger: '.projects', selector: '.project-card-outer' },
      { trigger: '.design-grid', selector: '.design-card', animateOpacity: false },
      { trigger: '.experience-cards-grid', selector: '.experience-card', animateOpacity: false },
      { trigger: '.certifications-grid', selector: '.cert-card', animateOpacity: false },
    ];

    cardGroups.forEach((group) => {
      const parent = document.querySelector(group.trigger);
      if (!parent) return;

      const cards = parent.querySelectorAll(group.selector);
      if (!cards.length) return;

      gsap.from(cards, {
        y: 40,
        ...(group.animateOpacity === false ? {} : { opacity: 0 }),
        rotateX: 4,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: parent,
          start: 'top 84%',
          once: true,
        },
      });
    });

    // 5. EDITORIAL RAILS PARALLAX SCRUB (Like Inspo Portfolio)
    const leftTrack = document.querySelector('.rail-track-left');
    const rightTrack = document.querySelector('.rail-track-right');

    if (leftTrack) {
      gsap.to(leftTrack, {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: '#main',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
        },
      });
    }

    if (rightTrack) {
      gsap.to(rightTrack, {
        yPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: '#main',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
        },
      });
    }

    // 6. CONTACT SECTION 2-COLUMN SLIDE-IN
    const contactLayout = document.querySelector('.contact-grid-layout');
    if (contactLayout) {
      const leftCol = contactLayout.querySelector('.contact-editorial-column');
      const rightCol = contactLayout.querySelector('.contact-form-column');

      gsap.from(leftCol, {
        x: -30,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactLayout,
          start: 'top 82%',
          once: true,
        },
      });

      gsap.from(rightCol, {
        x: 30,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactLayout,
          start: 'top 82%',
          once: true,
        },
      });
    }
  });

  // Mobile / Small Screen Animations (<= 768px)
  mm.add('(max-width: 768px)', () => {
    gsap.utils.toArray('.section-index, .section-heading, .about-card, .project-card').forEach((el) => {
      gsap.from(el, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
      });
    });

    gsap.utils.toArray('.experience-card').forEach((card) => {
      gsap.from(card, {
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          once: true,
        },
      });
    });

    gsap.utils.toArray('.cert-card').forEach((card) => {
      gsap.from(card, {
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          once: true,
        },
      });
    });
  });

  // Refresh ScrollTrigger after elements and images initialize
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 350);

  return () => {
    if (lenis) lenis.off('scroll', syncScrollTrigger);
    mm.revert();
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}
