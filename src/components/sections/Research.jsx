import { useState } from 'react';
import TiltCard from '../common/TiltCard';
import { Sliders, Sparkles, AlertTriangle, CheckCircle, BarChart3, Database } from 'lucide-react';

export default function Research() {
  const [activeTab, setActiveTab] = useState('simulator'); // 'simulator' | 'data' | 'insights'
  const [aiConfidence, setAiConfidence] = useState(85);
  const [aiCorrect, setAiCorrect] = useState(false);

  // Derived metrics dynamically calculated from research findings:
  // When AI confidence is high, human deference increases sharply even if advice is inaccurate!
  const deferenceRate = Math.min(
    Math.round((aiConfidence / 100) * 42 + (aiCorrect ? 18 : 8)),
    94
  );
  const criticalInspectionRisk = Math.round((aiConfidence / 100) * (aiCorrect ? 24 : 76));

  return (
    <section className="research section-wrap section-space" id="research" aria-labelledby="research-title">
      <div className="section-index mono">
        <span>03 / Beyond Blind Trust</span>
        <span className="index-line" />
        <span>Research</span>
      </div>

      <div className="research-layout">
        <div className="research-copy">
          <span className="research-eyebrow mono">
            <span className="status-dot" style={{ background: 'var(--gold)' }} />
            Human–AI Interaction · Cognitive Judgment
          </span>

          <h2 id="research-title">
            When confidence sounds like certainty,{' '}
            <em className="text-gold">judgment deserves a closer look.</em>
          </h2>

          <p className="research-statement">
            My empirical research investigates how people respond to assertively confident AI
            recommendations, revealing how synthetic confidence frequently suppresses critical human
            oversight.
          </p>

          <div className="research-highlight-box glass-card">
            <div className="research-paper-tag mono">
              <Sparkles size={13} className="text-gold" />
              <span>Independent Empirical Study</span>
            </div>
            <h3 className="research-subtitle">Beyond Blind Trust</h3>
            <p className="research-subtitle-desc">
              When Confident AI Advice Overrides Human Judgment
            </p>
            <p className="paper-abstract">
              Investigating 250 experimental decision events to examine selective deference,
              accuracy-insensitive reliance, and the cognitive heuristics triggered by confident
              conversational agents.
            </p>
          </div>

          {/* Interactive Mode Selector */}
          <div className="research-mode-tabs mono" role="tablist">
            <button
              className={`mode-tab ${activeTab === 'simulator' ? 'active' : ''}`}
              onClick={() => setActiveTab('simulator')}
            >
              <Sliders size={14} />
              <span>Live Trust Simulator</span>
            </button>
            <button
              className={`mode-tab ${activeTab === 'data' ? 'active' : ''}`}
              onClick={() => setActiveTab('data')}
            >
              <BarChart3 size={14} />
              <span>Study Metrics (N=50)</span>
            </button>
            <button
              className={`mode-tab ${activeTab === 'insights' ? 'active' : ''}`}
              onClick={() => setActiveTab('insights')}
            >
              <Database size={14} />
              <span>Cognitive Findings</span>
            </button>
          </div>
        </div>

        {/* Interactive Visualization / Simulator Area */}
        <div className="research-viz-container">
          <TiltCard
            maxTilt={5}
            glowColor="rgba(244, 184, 96, 0.22)"
            className="research-card glow-card"
          >
            {activeTab === 'simulator' && (
              <div className="simulator-panel">
                <div className="research-card-header mono">
                  <span className="flex-center gap-sm">
                    <span className="status-dot" style={{ background: 'var(--gold)' }} />
                    Interactive Heuristic Model
                  </span>
                  <span className="pulse-badge">Live Experiment</span>
                </div>

                <div className="simulator-controls">
                  <div className="control-group">
                    <div className="control-label mono">
                      <span>Simulated AI Stated Confidence</span>
                      <strong className="text-gold">{aiConfidence}%</strong>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="99"
                      value={aiConfidence}
                      onChange={(e) => setAiConfidence(Number(e.target.value))}
                      className="slider-accent-gold"
                      aria-label="Adjust AI Stated Confidence"
                    />
                    <div className="slider-ticks mono">
                      <span>50% (Tentative)</span>
                      <span>75% (Confident)</span>
                      <span>99% (Assertive)</span>
                    </div>
                  </div>

                  <div className="control-group correctness-toggle">
                    <span className="control-label mono">Ground Truth AI Accuracy</span>
                    <div className="toggle-pill-wrap">
                      <button
                        className={`toggle-pill ${aiCorrect ? 'selected' : ''}`}
                        onClick={() => setAiCorrect(true)}
                      >
                        <CheckCircle size={14} />
                        Accurate Advice
                      </button>
                      <button
                        className={`toggle-pill ${!aiCorrect ? 'selected-warn' : ''}`}
                        onClick={() => setAiCorrect(false)}
                      >
                        <AlertTriangle size={14} />
                        Misleading (Deceptive)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Real-time Dynamic Gauge Output */}
                <div className="simulator-results">
                  <div className="sim-metric-card">
                    <span className="sim-metric-title mono">Human Judgment Override</span>
                    <div className="sim-metric-value text-gold">{deferenceRate}%</div>
                    <div className="sim-progress-bar">
                      <div
                        className="sim-progress-fill"
                        style={{
                          width: `${deferenceRate}%`,
                          background: 'linear-gradient(90deg, var(--emerald), var(--gold))',
                        }}
                      />
                    </div>
                    <span className="sim-metric-desc">
                      Participants abandon initial judgment in favor of AI recommendation.
                    </span>
                  </div>

                  <div className="sim-metric-card">
                    <span className="sim-metric-title mono">
                      {aiCorrect ? 'Verified Agreement' : 'Accuracy Blindspot Risk'}
                    </span>
                    <div
                      className={`sim-metric-value ${aiCorrect ? 'text-lime' : 'text-danger'}`}
                    >
                      {criticalInspectionRisk}%
                    </div>
                    <div className="sim-progress-bar">
                      <div
                        className="sim-progress-fill"
                        style={{
                          width: `${criticalInspectionRisk}%`,
                          background: aiCorrect
                            ? 'linear-gradient(90deg, var(--emerald), var(--lime))'
                            : 'linear-gradient(90deg, #F59E0B, #EF4444)',
                        }}
                      />
                    </div>
                    <span className="sim-metric-desc">
                      {aiCorrect
                        ? 'Accurate guidance properly integrated into task outcome.'
                        : 'Severe hazard: humans accept flawed advice without verification.'}
                    </span>
                  </div>
                </div>

                <div className="simulator-chart-svg">
                  <svg viewBox="0 0 360 85" className="curve-svg" aria-hidden="true">
                    <defs>
                      <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#15803D" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#F4B860" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#EF4444" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 10 75 Q 90 70, 180 50 T 350 15"
                      fill="none"
                      stroke="url(#curveGradient)"
                      strokeWidth="2.5"
                    />
                    {/* Dynamic point tracking user's slider */}
                    <circle
                      cx={10 + ((aiConfidence - 50) / 49) * 340}
                      cy={75 - ((aiConfidence - 50) / 49) * 58}
                      r="6"
                      fill="#F4B860"
                      stroke="#071A14"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className="curve-labels mono">
                    <span>Low AI Confidence</span>
                    <span className="text-gold">Current Selection ({aiConfidence}%)</span>
                    <span>High AI Confidence</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'data' && (
              <div className="data-panel">
                <div className="research-card-header mono">
                  <span>
                    <span className="status-dot" style={{ background: 'var(--gold)' }} />
                    Dataset Breakdown
                  </span>
                  <span>50 Cohorts</span>
                </div>

                <div className="decision-flow">
                  <div className="flow-stage">
                    <div className="flow-number text-ivory">250</div>
                    <div className="flow-label mono">Total Trials</div>
                  </div>
                  <div className="flow-connector">
                    <span className="flow-line" />
                  </div>
                  <div className="flow-stage">
                    <div className="flow-number text-gold">61</div>
                    <div className="flow-label mono">Judgments Overridden</div>
                  </div>
                  <div className="flow-connector">
                    <span className="flow-line" />
                  </div>
                  <div className="flow-stage">
                    <div className="flow-number text-lime">3.82<small>/5</small></div>
                    <div className="flow-label mono">Baseline Confidence</div>
                  </div>
                </div>

                <div className="findings-bars">
                  <div className="finding-bar-item">
                    <div className="bar-meta mono">
                      <span>Advice Alignment Ratio</span>
                      <span>50.8%</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: '50.8%', background: 'var(--gold)' }} />
                    </div>
                  </div>

                  <div className="finding-bar-item">
                    <div className="bar-meta mono">
                      <span>Misplaced Confidence Effect</span>
                      <span>73.2%</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: '73.2%', background: 'var(--lime)' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'insights' && (
              <div className="insights-panel">
                <div className="research-card-header mono">
                  <span>
                    <span className="status-dot" style={{ background: 'var(--gold)' }} />
                    Core Findings & Implications
                  </span>
                  <span>Synthesis</span>
                </div>
                <div className="findings-list">
                  <div className="finding-item">
                    <span className="finding-number mono text-gold">01</span>
                    <p>
                      <strong>Tone Over Evidence:</strong> High synthetic certainty induces decision
                      shortcuts, causing participants to bypass active verification.
                    </p>
                  </div>
                  <div className="finding-item">
                    <span className="finding-number mono text-lime">02</span>
                    <p>
                      <strong>Selective Obedience:</strong> When users doubt their own expertise, they
                      delegate critical responsibility even when anomalous clues exist.
                    </p>
                  </div>
                  <div className="finding-item">
                    <span className="finding-number mono text-emerald">03</span>
                    <p>
                      <strong>Design Mandate:</strong> Interfaces must visualize uncertainty and provide
                      calibrated friction rather than artificial infallibility.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
