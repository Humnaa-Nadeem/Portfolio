import { useState } from 'react';
import { Copy, Check, Terminal, Award } from 'lucide-react';
import TiltCard from '../common/TiltCard';

export default function About() {
  const [copied, setCopied] = useState(false);

  const identityJSON = JSON.stringify(
    {
      name: "Humna Nadeem",
      program: "Software Engineering",
      cgpa: 3.85,
      departmentRank: "1st Position (thru 4th sem)",
      research: "Human–AI Interaction",
      interests: ["Systems Engineering", "Cognitive AI", "Product UI/UX"],
      vision: "Technology that serves human flourishing",
    },
    null,
    2
  );

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(identityJSON);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="about section-wrap section-space" id="about" aria-labelledby="about-title">
      <div className="section-index mono">
        <span>01 / A Little About How I Think</span>
        <span className="index-line" />
        <span>About</span>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <div className="about-eyebrow mono">
            <Award size={14} className="text-lime" />
            <span>Academic Excellence & Applied Engineering</span>
          </div>

          <h2 id="about-title">
            Curious by nature.<br />
            <em>Intentional by design.</em>
          </h2>

          <p>
            My work moves fluidly between software engineering, cognitive Human–AI interaction
            research, and digital product design. I enjoy investigating problems from first
            principles, structuring clean architecture, and translating research insights into
            resilient software people actually love using.
          </p>

          <p>
            Currently completing Software Engineering with the highest cumulative GPA in the
            department (3.85), while leading civic technology projects and co-founding local digital
            platforms in Khyber Pakhtunkhwa.
          </p>

          <div className="about-highlights-grid mono">
            <div className="highlight-cell">
              <span className="cell-num text-lime">3.85</span>
              <span className="cell-label">Dept #1 CGPA</span>
            </div>
            <div className="highlight-cell">
              <span className="cell-num text-gold">4+</span>
              <span className="cell-label">Civic & Web Platforms</span>
            </div>
            <div className="highlight-cell">
              <span className="cell-num text-emerald">N=50</span>
              <span className="cell-label">HAI Empirical Study</span>
            </div>
          </div>

          <a className="inline-link shimmer-text" href="#work">
            <span>Explore production projects</span>
            <span className="link-arrow">→</span>
          </a>
        </div>

        {/* Identity Terminal Card with 3D Tilt */}
        <TiltCard
          maxTilt={7}
          glowColor="rgba(163, 230, 53, 0.25)"
          className="about-card glow-card terminal-card"
        >
          <div className="window-bar">
            <div className="window-dots" aria-hidden="true">
              <i /><i /><i />
            </div>
            <span className="mono window-title">
              <Terminal size={12} className="inline-icon" />
              identity.json
            </span>
            <button
              onClick={handleCopyJSON}
              className="copy-json-btn mono"
              aria-label="Copy identity JSON"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-lime" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="profile-code mono">
            <div><span className="line-number">01</span><span className="code-muted">{'{'}</span></div>
            <div><span className="line-number">02</span><span>  <b>"name"</b>: <q>Humna Nadeem</q>,</span></div>
            <div><span className="line-number">03</span><span>  <b>"program"</b>: <q>Software Engineering</q>,</span></div>
            <div><span className="line-number">04</span><span>  <b>"cgpa"</b>: <q className="text-gold">3.85</q>, <span className="code-comment">// Dept Rank #1</span></span></div>
            <div><span className="line-number">05</span><span>  <b>"research"</b>: <q>Human–AI Interaction</q>,</span></div>
            <div><span className="line-number">06</span><span>  <b>"specialties"</b>: [<q>React</q>, <q>Python</q>, <q>Civic Tech</q>],</span></div>
            <div><span className="line-number">07</span><span>  <b>"location"</b>: <q>Khyber Pakhtunkhwa, Pakistan</q>,</span></div>
            <div><span className="line-number">08</span><span>  <b>"vision"</b>: <q>Human-centered computing</q></span></div>
            <div><span className="line-number">09</span><span className="code-muted">{'}'}</span></div>
          </div>

          <div className="terminal-footer mono">
            <span className="status-dot pulse-beacon" />
            <span>Highest CGPA in Dept through 4th semester · Active Researcher</span>
          </div>
        </TiltCard>
      </div>

    </section>
  );
}
