interface AvataqLogoProps {
  size?: number;
  className?: string;
}

export function AvataqLogo({ size = 48, className = '' }: AvataqLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer diamond frame */}
      <path
        d="M32 4L60 32L32 60L4 32Z"
        fill="rgba(26,23,222,0.1)"
        stroke="rgba(26,23,222,0.5)"
        strokeWidth="1.5"
      />
      {/* Inner A lettermark - legs */}
      <path
        d="M32 16L42 44H37.5L32 28L26.5 44H22L32 16Z"
        fill="#1A17DE"
      />
      {/* Crossbar */}
      <rect x="25" y="34" width="14" height="2.5" rx="1.25" fill="#1A17DE" />
      {/* Apex glow dot */}
      <circle cx="32" cy="16" r="2.5" fill="#5A57FF" />
      {/* Corner node dots */}
      <circle cx="22" cy="44" r="1.5" fill="rgba(26,23,222,0.5)" />
      <circle cx="42" cy="44" r="1.5" fill="rgba(26,23,222,0.5)" />
    </svg>
  );
}
