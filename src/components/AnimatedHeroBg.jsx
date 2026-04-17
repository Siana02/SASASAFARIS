import React from 'react';

/* ── Single statement acacia tree — detailed silhouette ── */
const AcaciaTree = ({ x, y, scale = 1, color = '#0e0501' }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    {/* Root spread */}
    <path d="M-6,0 C-8,0 -10,-2 -6,-4 L-3,-3 L0,-60 L3,-3 L6,-4 C10,-2 8,0 6,0 Z" fill={color} />
    {/* Lower trunk */}
    <rect x="-3.5" y="-120" width="7" height="60" rx="2" fill={color} />
    {/* Mid trunk with slight lean */}
    <path d="M-3,-120 C-3,-120 -2,-170 0,-190 C2,-170 3,-120 3,-120 Z" fill={color} />
    {/* Left lower branch */}
    <path d="M-2,-130 C-2,-130 -28,-148 -52,-142" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Left lower sub-branch */}
    <path d="M-52,-142 C-52,-142 -66,-152 -72,-148" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M-52,-142 C-52,-142 -48,-158 -44,-162" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Right lower branch */}
    <path d="M2,-140 C2,-140 30,-156 58,-148" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M58,-148 C58,-148 70,-156 78,-150" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M58,-148 C58,-148 54,-164 50,-168" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Left upper branch */}
    <path d="M-1,-175 C-1,-175 -22,-188 -40,-182" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M-40,-182 C-40,-182 -52,-190 -58,-186" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M-40,-182 C-40,-182 -36,-198 -32,-204" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Right upper branch */}
    <path d="M1,-178 C1,-178 24,-192 44,-186" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M44,-186 C44,-186 56,-194 62,-190" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M44,-186 C44,-186 40,-202 36,-208" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Top canopy — layered flat umbrella (classic acacia profile) */}
    <ellipse cx="0"   cy="-230" rx="88"  ry="22" fill={color} />
    <ellipse cx="0"   cy="-218" rx="72"  ry="16" fill={color} />
    <ellipse cx="-28" cy="-210" rx="40"  ry="12" fill={color} />
    <ellipse cx="30"  cy="-212" rx="38"  ry="12" fill={color} />
    <ellipse cx="0"   cy="-244" rx="64"  ry="16" fill={color} />
    <ellipse cx="-18" cy="-255" rx="36"  ry="10" fill={color} />
    <ellipse cx="20"  cy="-258" rx="34"  ry="10" fill={color} />
    <ellipse cx="0"   cy="-265" rx="48"  ry="12" fill={color} />
    {/* Secondary canopy over lower branches */}
    <ellipse cx="-50" cy="-162" rx="32"  ry="10" fill={color} />
    <ellipse cx="56"  cy="-166" rx="30"  ry="9"  fill={color} />
    <ellipse cx="-38" cy="-200" rx="26"  ry="8"  fill={color} />
    <ellipse cx="42"  cy="-202" rx="24"  ry="8"  fill={color} />
  </g>
);

/* ── Sparse grass tufts along the ground ── */
const GrassTufts = ({ color = '#0e0501', yBase = 470 }) => (
  <>
    {[60, 160, 280, 400, 540, 650, 760, 860, 940].map((x, i) => (
      <g key={i} transform={`translate(${x}, ${yBase})`} opacity={0.6}>
        <line x1="0"  y1="0" x2="-6"  y2="-22" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="0"  y1="0" x2="0"   y2="-28" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="0"  y1="0" x2="7"   y2="-20" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="0"  y1="0" x2="-12" y2="-14" stroke={color} strokeWidth="1"   strokeLinecap="round" />
        <line x1="0"  y1="0" x2="13"  y2="-12" stroke={color} strokeWidth="1"   strokeLinecap="round" />
      </g>
    ))}
  </>
);

/* ── Bird group (abstract V-shapes) ── */
const BirdGroup = ({ cx, cy, className }) => (
  <g className={className} transform={`translate(${cx}, ${cy})`} opacity={0.45}>
    {[0, 16, 30, 46, 60].map((dx, i) => (
      <g key={i} transform={`translate(${dx}, ${i % 2 === 0 ? 0 : 7})`}>
        <path d="M0,0 C-4,-3 -8,-2 -11,0" stroke="#ffe9b0" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M0,0 C4,-3 8,-2 11,0"  stroke="#ffe9b0" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>
    ))}
  </g>
);

/* ── Twinkling stars — only in upper half of sky ── */
const STARS = [
  { x: 5,  y: 5,  r: 1.5, t: 1 }, { x: 14, y: 3,  r: 1.0, t: 2 }, { x: 24, y: 8,  r: 1.5, t: 3 },
  { x: 36, y: 4,  r: 1.0, t: 1 }, { x: 47, y: 7,  r: 1.8, t: 2 }, { x: 59, y: 3,  r: 1.0, t: 3 },
  { x: 68, y: 9,  r: 1.5, t: 1 }, { x: 77, y: 5,  r: 1.0, t: 2 }, { x: 87, y: 8,  r: 1.7, t: 3 },
  { x: 94, y: 4,  r: 1.0, t: 1 }, { x: 10, y: 16, r: 1.0, t: 2 }, { x: 21, y: 20, r: 1.5, t: 3 },
  { x: 33, y: 13, r: 1.0, t: 1 }, { x: 43, y: 18, r: 1.8, t: 2 }, { x: 55, y: 12, r: 1.0, t: 3 },
  { x: 65, y: 17, r: 1.5, t: 1 }, { x: 74, y: 10, r: 1.0, t: 2 }, { x: 84, y: 16, r: 1.7, t: 3 },
  { x: 92, y: 13, r: 1.0, t: 1 }, { x: 4,  y: 25, r: 1.5, t: 2 }, { x: 17, y: 29, r: 1.0, t: 3 },
];

/* ════════════════════════════════════
   AnimatedHeroBg
   Single-acacia safari sunset — earthy gold.
   ════════════════════════════════════ */
const AnimatedHeroBg = () => (
  <div className="hero-animated-bg" aria-hidden="true">
    <svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <defs>
        {/* Sunset sky: deep dusk at top → warm amber → fiery orange near horizon */}
        <linearGradient id="hbg-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0d0401" />
          <stop offset="28%"  stopColor="#1c0803" />
          <stop offset="52%"  stopColor="#3d1505" />
          <stop offset="68%"  stopColor="#7a2e08" />
          <stop offset="80%"  stopColor="#b84a10" />
          <stop offset="90%"  stopColor="#d96820" />
          <stop offset="100%" stopColor="#e88030" />
        </linearGradient>

        {/* Sun radial glow — centred just above horizon */}
        <radialGradient id="hbg-sun-glow" cx="72%" cy="78%" r="42%">
          <stop offset="0%"   stopColor="#ffe066" stopOpacity="0.95" />
          <stop offset="18%"  stopColor="#ffb347" stopOpacity="0.80" />
          <stop offset="38%"  stopColor="#ff8c42" stopOpacity="0.52" />
          <stop offset="62%"  stopColor="#e05a10" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#7a2e08" stopOpacity="0"    />
        </radialGradient>

        {/* Horizon afterglow band */}
        <linearGradient id="hbg-afterglow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="25%"  stopColor="#ff8c42" stopOpacity="0.45" />
          <stop offset="55%"  stopColor="#ffcc55" stopOpacity="0.80" />
          <stop offset="78%"  stopColor="#ff8c42" stopOpacity="0.55" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Ground: dark earth */}
        <linearGradient id="hbg-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#150601" />
          <stop offset="100%" stopColor="#080200" />
        </linearGradient>

        {/* Clip above horizon for sun disc */}
        <clipPath id="hbg-above-horizon">
          <rect x="0" y="0" width="1000" height="468" />
        </clipPath>
      </defs>

      {/* ── Sky wash ── */}
      <rect width="1000" height="600" fill="url(#hbg-sky)" />

      {/* ── Sun atmospheric glow — large, soft ── */}
      <rect width="1000" height="600" fill="url(#hbg-sun-glow)" />

      {/* ── Twinkling stars (upper sky only) ── */}
      {STARS.map((s, i) => (
        <circle
          key={i}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="#fff8e8"
          className={`star-t${s.t}`}
        />
      ))}

      {/* ── Flying birds ── */}
      <BirdGroup cx={80}  cy={95}  className="hero-bird-group" />
      <BirdGroup cx={80}  cy={120} className="hero-bird-group" />
      <BirdGroup cx={80}  cy={74}  className="hero-bird-group" />

      {/* ── Sun disc just above horizon (right-of-centre) ── */}
      <ellipse
        cx="720" cy="468"
        rx="48" ry="48"
        fill="#ffe566"
        opacity="0.90"
        clipPath="url(#hbg-above-horizon)"
        style={{ filter: 'blur(3px)' }}
      />
      {/* Inner bright core */}
      <ellipse
        cx="720" cy="466"
        rx="28" ry="28"
        fill="#fff4a0"
        opacity="0.95"
        clipPath="url(#hbg-above-horizon)"
        style={{ filter: 'blur(1px)' }}
      />

      {/* ── Horizon afterglow line ── */}
      <rect x="0" y="466" width="1000" height="4" fill="url(#hbg-afterglow)" />

      {/* ── Ground plane ── */}
      <rect x="0" y="468" width="1000" height="132" fill="url(#hbg-ground)" />

      {/* ── Sparse grass tufts ── */}
      <GrassTufts color="#0e0501" yBase={469} />

      {/* ── Single prominent acacia tree — left-of-centre ── */}
      <AcaciaTree x={310} y={469} scale={1.55} color="#0b0300" />
    </svg>
  </div>
);

export default AnimatedHeroBg;
