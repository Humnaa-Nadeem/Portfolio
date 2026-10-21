import { useState, useId } from 'react';
import { skillCategories } from '../../data/skills';
import TiltCard from '../common/TiltCard';
import {
  Globe,
  Terminal,
  FlaskConical,
  Palette,
  Boxes,
  Sparkles,
  Smartphone,
  ShieldCheck,
  FileText,
  Search,
  BarChart3,
  Layers,
  LayoutGrid,
  PlayCircle,
  Eye,
  MessageSquareText,
  Lightbulb,
  Users,
  CalendarRange,
  Award,
  Filter,
} from 'lucide-react';
import {
  ReactIcon,
  JavascriptIcon,
  Html5Icon,
  Css3Icon,
  PythonIcon,
  CppIcon,
  FigmaIcon,
  CanvaIcon,
  IllustratorIcon,
  GitIcon,
  GithubIcon,
  VsCodeIcon,
  VercelIcon,
} from '../icons/BrandIcons';

const categoryIconMap = {
  Globe,
  Terminal,
  FlaskConical,
  Palette,
  Boxes,
};

function renderSkillIcon(type) {
  switch (type) {
    case 'html5':
      return <Html5Icon size={15} />;
    case 'css3':
      return <Css3Icon size={15} />;
    case 'javascript':
      return <JavascriptIcon size={15} />;
    case 'react':
      return <ReactIcon size={15} />;
    case 'responsive':
      return <Smartphone size={14} />;
    case 'cpp':
      return <CppIcon size={15} />;
    case 'python':
      return <PythonIcon size={15} />;
    case 'hai':
      return <Sparkles size={14} />;
    case 'trust':
      return <ShieldCheck size={14} />;
    case 'writing':
      return <FileText size={14} />;
    case 'analytical':
      return <Search size={14} />;
    case 'data':
      return <BarChart3 size={14} />;
    case 'figma':
      return <FigmaIcon size={15} />;
    case 'uiux':
      return <Layers size={14} />;
    case 'wireframing':
      return <LayoutGrid size={14} />;
    case 'prototyping':
      return <PlayCircle size={14} />;
    case 'canva':
      return <CanvaIcon size={15} />;
    case 'illustrator':
      return <IllustratorIcon size={15} />;
    case 'visual':
      return <Eye size={14} />;
    case 'git':
      return <GitIcon size={15} />;
    case 'github':
      return <GithubIcon size={15} />;
    case 'vscode':
      return <VsCodeIcon size={15} />;
    case 'vercel':
      return <VercelIcon size={13} />;
    case 'communication':
      return <MessageSquareText size={14} />;
    case 'problem-solving':
      return <Lightbulb size={14} />;
    case 'collaboration':
      return <Users size={14} />;
    case 'coordination':
      return <CalendarRange size={14} />;
    case 'leadership':
      return <Award size={14} />;
    default:
      return <Sparkles size={14} />;
  }
}

const filterOptions = [
  { key: 'all', label: 'All Capabilities' },
  { key: 'web', label: 'Web Development' },
  { key: 'programming', label: 'Programming & Logic' },
  { key: 'research', label: 'AI & Research' },
  { key: 'design', label: 'UI/UX Design' },
  { key: 'tools', label: 'Tools & Leadership' },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filterListId = useId();

  const filteredCategories = skillCategories.filter((category) => {
    if (activeFilter === 'all') return true;
    return category.filterKey === activeFilter;
  });

  return (
    <section
      className="skills-section section-wrap section-space"
      id="skills"
      aria-labelledby="skills-title"
    >
      {/* Section Index Bar */}
      <div className="section-index mono">
        <span>WHAT I BRING</span>
        <span className="index-line" />
        <span>Skills &amp; Expertise</span>
      </div>

      {/* Section Heading Row */}
      <div className="section-heading-row">
        <div className="section-heading">
          <div className="section-eyebrow mono">
            <Sparkles size={14} className="text-lime" />
            <span>WHAT I BRING</span>
          </div>
          <h2 id="skills-title">
            Skills &amp; <em>Expertise</em>
          </h2>
          <p className="skills-lead">
            Combining software development, creative design, research, and
            collaborative leadership to turn ideas into meaningful digital
            experiences.
          </p>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div
        id={filterListId}
        className="skills-filter-bar mono"
        role="tablist"
        aria-label="Filter capabilities by domain"
      >
        <span className="filter-label" aria-hidden="true">
          <Filter size={13} className="inline-icon" />
          Filter:
        </span>
        {filterOptions.map((opt) => (
          <button
            key={opt.key}
            type="button"
            role="tab"
            aria-selected={activeFilter === opt.key}
            className={`skills-filter-btn ${
              activeFilter === opt.key ? 'active' : ''
            }`}
            onClick={() => setActiveFilter(opt.key)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-editorial-grid">
        {filteredCategories.map((category) => {
          const IconComponent = categoryIconMap[category.icon] || Sparkles;

          if (category.isSplit) {
            return (
              <TiltCard
                key={category.id}
                maxTilt={4}
                glowColor={category.glowColor}
                className={`skill-card skill-card-full glow-card skill-${category.color}`}
                tabIndex={0}
                role="region"
                aria-label={category.title}
              >
                <div className="skill-card-header">
                  <div className="skill-card-badge-row">
                    <div className="skill-category-icon">
                      <IconComponent size={20} />
                    </div>
                    <span className="skill-count-badge mono">
                      {category.badge}
                    </span>
                  </div>
                  <span className="skill-card-eyebrow mono">
                    {category.eyebrow}
                  </span>
                  <h3 className="skill-card-title">{category.title}</h3>
                  <p className="skill-card-desc">{category.description}</p>
                </div>

                <div className="skill-subgroups-layout">
                  {category.subgroups.map((subgroup) => (
                    <div key={subgroup.id} className="skill-subgroup">
                      <div className="skill-subgroup-header">
                        <span className="skill-subgroup-label mono">
                          {subgroup.label}
                        </span>
                        <h4 className="skill-subgroup-title">
                          {subgroup.title}
                        </h4>
                      </div>
                      <div className="skill-chips-group" role="list">
                        {subgroup.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="skill-chip"
                            role="listitem"
                            tabIndex={0}
                            aria-label={`Skill: ${skill.name}`}
                          >
                            <span
                              className="skill-chip-icon"
                              aria-hidden="true"
                            >
                              {renderSkillIcon(skill.iconType)}
                            </span>
                            <span className="skill-chip-name">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            );
          }

          return (
            <TiltCard
              key={category.id}
              maxTilt={5}
              glowColor={category.glowColor}
              className={`skill-card glow-card skill-${category.color}`}
              tabIndex={0}
              role="region"
              aria-label={category.title}
            >
              <div className="skill-card-header">
                <div className="skill-card-badge-row">
                  <div className="skill-category-icon">
                    <IconComponent size={20} />
                  </div>
                  <span className="skill-count-badge mono">{category.badge}</span>
                </div>
                <span className="skill-card-eyebrow mono">{category.eyebrow}</span>
                <h3 className="skill-card-title">{category.title}</h3>
                <p className="skill-card-desc">{category.description}</p>
              </div>

              <div className="skill-chips-group" role="list">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-chip"
                    role="listitem"
                    tabIndex={0}
                    aria-label={`Skill: ${skill.name}`}
                  >
                    <span className="skill-chip-icon" aria-hidden="true">
                      {renderSkillIcon(skill.iconType)}
                    </span>
                    <span className="skill-chip-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
