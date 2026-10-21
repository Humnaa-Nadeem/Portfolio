export function Github({ size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export const GithubIcon = Github;

export function Linkedin({ size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function ReactIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      {...props}
    >
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function JavascriptIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" />
      <path d="M9 11v5.5a1.5 1.5 0 0 1-3 0" />
      <path d="M13.5 16.5c1.2 0 2.2-.6 2.2-1.7 0-1.8-2.7-1.5-2.7-3.1 0-.9.8-1.5 1.8-1.5 1.1 0 1.8.6 1.9 1.4" />
    </svg>
  );
}

export function Html5Icon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4 3l1.8 16.5L12 21.5l6.2-2L20 3H4z" />
      <path d="M7.5 7.5h9M8 11.5h8M8.5 15.5l3.5 1 3.5-1" />
    </svg>
  );
}

export function Css3Icon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4 3l1.8 16.5L12 21.5l6.2-2L20 3H4z" />
      <path d="M16 7.5H8l.5 4h7.5l-.6 4.2-3.4 1-3.4-1-.2-2.2" />
    </svg>
  );
}

export function PythonIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 2c-3.5 0-5 1-5 3v2h5v1H6c-2 0-4 1.5-4 4s1.5 4 4 4h1v-2c0-1.5 1.5-3 3-3h5c1 0 2-.8 2-2V5c0-2-1.5-3-5-3z" />
      <circle cx="9" cy="5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M12 22c3.5 0 5-1 5-3v-2h-5v-1h6c2 0 4-1.5 4-4s-1.5-4-4-4h-1v2c0 1.5-1.5 3-3 3h-5c-1 0-2 .8-2 2v4c0 2 1.5 3 5 3z" />
      <circle cx="15" cy="19" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CppIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2.5" y="3" width="19" height="18" rx="4" />
      <path d="M9.5 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3" />
      <path d="M13 12h3M14.5 10.5v3M18 12h3M19.5 10.5v3" />
    </svg>
  );
}

export function FigmaIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="15.5" cy="12" r="3.5" />
      <path d="M5 8.5a3.5 3.5 0 0 1 7 0v7a3.5 3.5 0 1 1-7 0v-7z" />
      <path d="M12 5a3.5 3.5 0 0 1 7 0 3.5 3.5 0 0 1-7 0z" />
      <path d="M5 5a3.5 3.5 0 0 1 7 0v3.5H8.5A3.5 3.5 0 0 1 5 5z" />
    </svg>
  );
}

export function CanvaIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5C14.2 7.5 12 7.5 10 9.2c-2.4 2-2.5 5.5-.3 7.2 2 1.5 4.5.8 5.8-.4" />
    </svg>
  );
}

export function IllustratorIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2.5" y="3" width="19" height="18" rx="4" />
      <path d="M6.5 15.5l2.5-7 2.5 7M7.5 13.5h3" />
      <path d="M15.5 11.5v4" />
      <circle cx="15.5" cy="9" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GitIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="14" height="14" rx="2" transform="rotate(45 12 12)" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 9.5v5M12 12.5l2.5-1" />
    </svg>
  );
}

export function VsCodeIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M17.5 2.5l4 2v15l-4 2-10-7.5L3 17l-1-1 3-4-3-4 1-1 4.5 3 10-7.5z" />
      <path d="M17.5 7.5v9" />
    </svg>
  );
}

export function VercelIcon({ size = 16, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 2L22 19.5H2L12 2Z" />
    </svg>
  );
}
