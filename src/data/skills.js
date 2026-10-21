export const skillCategories = [
  {
    id: 'web-development',
    filterKey: 'web',
    title: 'Web Development',
    eyebrow: 'Frontend Architecture & Systems',
    color: 'lime',
    glowColor: 'rgba(163, 230, 53, 0.22)',
    icon: 'Globe',
    badge: '5 Technologies',
    description:
      'Component-driven frontend engineering with modern JavaScript, semantic markup, and responsive layouts.',
    skills: [
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'React.js', iconType: 'react' },
      { name: 'Responsive Web Design', iconType: 'responsive' },
    ],
  },
  {
    id: 'programming-fundamentals',
    filterKey: 'programming',
    title: 'Programming & Web Fundamentals',
    eyebrow: 'Core Logic & Web Technologies',
    color: 'emerald',
    glowColor: 'rgba(21, 128, 61, 0.28)',
    icon: 'Terminal',
    badge: '5 Technologies',
    description:
      'Algorithmic problem-solving, structured logic, and foundational web markup and styling technologies.',
    skills: [
      { name: 'C++', iconType: 'cpp' },
      { name: 'Python', iconType: 'python' },
      { name: 'JavaScript', iconType: 'javascript' },
      { name: 'HTML5', iconType: 'html5' },
      { name: 'CSS3', iconType: 'css3' },
    ],
  },
  {
    id: 'ai-research',
    filterKey: 'research',
    title: 'AI & Research',
    eyebrow: 'Human-Centered AI & Empirical Inquiry',
    color: 'gold',
    glowColor: 'rgba(244, 184, 96, 0.25)',
    icon: 'FlaskConical',
    badge: '5 Competencies',
    description:
      'Investigating human decision-making, algorithmic trust dynamics, empirical user studies, and quantitative data analysis.',
    skills: [
      { name: 'Human–AI Interaction', iconType: 'hai' },
      { name: 'AI Trust & Reliance', iconType: 'trust' },
      { name: 'Research Writing', iconType: 'writing' },
      { name: 'Research & Analytical Thinking', iconType: 'analytical' },
      { name: 'Data Analysis', iconType: 'data' },
    ],
  },
  {
    id: 'ui-ux-design',
    filterKey: 'design',
    title: 'UI/UX & Creative Design',
    eyebrow: 'Interface Systems & Product Craft',
    color: 'lime',
    glowColor: 'rgba(163, 230, 53, 0.2)',
    icon: 'Palette',
    badge: '7 Competencies',
    description:
      'Translating human needs into intuitive wireframes, interactive prototypes, design systems, and vector communication assets.',
    skills: [
      { name: 'Figma', iconType: 'figma' },
      { name: 'UI/UX Design', iconType: 'uiux' },
      { name: 'Wireframing', iconType: 'wireframing' },
      { name: 'Prototyping', iconType: 'prototyping' },
      { name: 'Canva', iconType: 'canva' },
      { name: 'Adobe Illustrator', iconType: 'illustrator' },
      { name: 'Visual Design', iconType: 'visual' },
    ],
  },
  {
    id: 'tools-professional',
    filterKey: 'tools',
    title: 'Tools & Professional Skills',
    eyebrow: 'Toolchain & Collaborative Leadership',
    color: 'emerald',
    glowColor: 'rgba(21, 128, 61, 0.3)',
    icon: 'Boxes',
    badge: '10 Competencies',
    description:
      'Modern development workflow tooling paired with proactive technical communication, project coordination, and team leadership.',
    isSplit: true,
    subgroups: [
      {
        id: 'technical-tools',
        title: 'Technical Tools',
        label: '// DEVELOPER TOOLCHAIN',
        skills: [
          { name: 'Git', iconType: 'git' },
          { name: 'GitHub', iconType: 'github' },
          { name: 'Visual Studio Code', iconType: 'vscode' },
          { name: 'Vercel', iconType: 'vercel' },
        ],
      },
      {
        id: 'professional-skills',
        title: 'Professional Skills',
        label: '// LEADERSHIP & COLLABORATION',
        skills: [
          { name: 'Technical Communication', iconType: 'communication' },
          { name: 'Problem-Solving', iconType: 'problem-solving' },
          { name: 'Team Collaboration', iconType: 'collaboration' },
          { name: 'Project Coordination', iconType: 'coordination' },
          { name: 'Leadership', iconType: 'leadership' },
          { name: 'Research & Analytical Thinking', iconType: 'analytical' },
        ],
      },
    ],
  },
];

// Backward-compatible alias
export const skillGroups = skillCategories;
