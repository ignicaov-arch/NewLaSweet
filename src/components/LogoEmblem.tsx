export function LogoEmblem({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'inline-block' }}
    >
      <circle cx="32" cy="32" r="30" fill="#F48C94" />
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="#FFFDF9"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x="32"
        y="34"
        textAnchor="middle"
        fill="#FFFDF9"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="13.5"
        fontWeight="600"
        letterSpacing="-0.3"
      >
        La Sweet
      </text>
      <path
        d="M32 47.5c-0.3 0-4.4-2.8-4.4-5.3a2.4 2.4 0 0 1 4.4-1.3 2.4 2.4 0 0 1 4.4 1.3c0 2.5-4.1 5.3-4.4 5.3Z"
        fill="#FFFDF9"
      />
    </svg>
  );
}

export default LogoEmblem;
