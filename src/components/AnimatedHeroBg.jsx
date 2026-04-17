import React from 'react';

/* ── Acacia tree SVG component ── */
const AcaciaTree = ({ x, y, scale = 1, color = '#1a0a04' }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    {/* Trunk */}
    <path d="M-3,85 C-3,85 -2,45 0,0 C2,45 3,85 3,85 Z" fill={color} />
    {/* Left main branch */}
    <line x1="-1" y1="28" x2="-38" y2="-8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Right main branch */}
    <line x1="1" y1="18" x2="40" y2="-12" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Left sub-branches */}
    <line x1="-38" y1="-8" x2="-54" y2="-22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="-38" y1="-8" x2="-24" y2="-24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    {/* Right sub-branches */}
    <line x1="40" y1="-12" x2="26" y2="-28" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="-12" x2="54" y2="-24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    {/* Canopy — flat umbrella layers */}
    <ellipse cx="0" cy="-42" rx="62" ry="17" fill={color} />
    <ellipse cx="-26" cy="-30" rx="30" ry="11" fill={color} />
    <ellipse cx="30" cy="-32" rx="28" ry="10" fill={color} />
    <ellipse cx="0" cy="-52" rx="50" ry="13" fill={color} />
  </g>
);

/* ── Grass tufts ── */
const GrassTufts = ({ color = '#1a0a04', yBase = 470 }) => (
  <>
    {[40, 120, 210, 310, 430, 510, 600, 680, 790, 880, 960].map((x, i) => (
      <g key={i} transform={`translate(${x}, ${yBase})`} opacity={0.75}>
        <line x1="0" y1="0" x2="-5" y2="-20" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="0" y1="0" x2="0" y2="-26" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="0" y1="0" x2="6" y2="-18" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </g>
    ))}
  </>
);

/* ── Bird group (abstract V-shapes) ── */
const BirdGroup = ({ cx, cy, className }) => (
  <g className={className} transform={`translate(${cx}, ${cy})`} opacity={0.5}>
    {[0, 14, 26, 40, 52].map((dx, i) => (
      <g key={i} transform={`translate(${dx}, ${i % 2 === 0 ? 0 : 6})`}>
        <path d="M0,0 C-4,-3 -8,-2 -11,0" stroke="#fff" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        <path d="M0,0 C4,-3 8,-2 11,0" stroke="#fff" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      </g>
    ))}
  </g>
);

/* ── Star data ── */
const STARS = [
  { x: 4,  y: 4,  r: 1.4, t: 1 }, { x: 12, y: 2,  r: 0.9, t: 2 }, { x: 22, y: 7,  r: 1.4, t: 3 },
  { x: 34, y: 3,  r: 0.9, t: 1 }, { x: 45, y: 6,  r: 1.7, t: 2 }, { x: 57, y: 2,  r: 0.9, t: 3 },
  { x: 66, y: 8,  r: 1.4, t: 1 }, { x: 75, y: 4,  r: 0.9, t: 2 }, { x: 85, y: 7,  r: 1.6, t: 3 },
  { x: 93, y: 3,  r: 0.9, t: 1 }, { x: 9,  y: 14, r: 0.9, t: 2 }, { x: 20, y: 18, r: 1.4, t: 3 },
  { x: 32, y: 12, r: 0.9, t: 1 }, { x: 42, y: 17, r: 1.7, t: 2 }, { x: 53, y: 11, r: 0.9, t: 3 },
  { x: 63, y: 16, r: 1.4, t: 1 }, { x: 72, y: 9,  r: 0.9, t: 2 }, { x: 82, y: 15, r: 1.6, t: 3 },
  { x: 91, y: 12, r: 0.9, t: 1 }, { x: 3,  y: 24, r: 1.4, t: 2 }, { x: 16, y: 28, r: 0.9, t: 3 },
  { x: 28, y: 21, r: 0.9, t: 1 }, { x: 38, y: 26, r: 1.4, t: 2 }, { x: 49, y: 22, r: 0.9, t: 3 },
  { x: 60, y: 27, r: 1.7, t: 1 }, { x: 70, y: 20, r: 0.9, t: 2 }, { x: 80, y: 25, r: 1.4, t: 3 },
  { x: 88, y: 29, r: 0.9, t: 1 }, { x: 97, y: 18, r: 1.4, t: 2 },
];

/* ════════════════════════════════════
   AnimatedHeroBg
   Full-screen animated safari SVG hero background.
   Matches the preload screen's earthy-gold aesthetic.
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
        {/* Night-to-dawn sky */}
        <linearGradient id="hbg-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#030100" />
          <stop offset="40%"  stopColor="#0d0603" />
          <stop offset="68%"  stopColor="#1e0c04" />
          <stop offset="82%"  stopColor="#3a1508" />
          <stop offset="92%"  stopColor="#5a2a0a" />
          <stop offset="100%" stopColor="#7a3b10" />
        </linearGradient>

        {/* Horizon sun glow radial */}
        <radialGradient id="hbg-sun" cx="50%" cy="100%" r="55%">
          <stop offset="0%"   stopColor="#ffcf6a" stopOpacity="0.95" />
          <stop offset="25%"  stopColor="#ffb347" stopOpacity="0.65" />
          <stop offset="50%"  stopColor="#ff8c42" stopOpacity="0.35" />
          <stop offset="75%"  stopColor="#ff6200" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#c84400" stopOpacity="0" />
        </radialGradient>

        {/* Horizon line glow */}
        <linearGradient id="hbg-horizon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="18%"  stopColor="#ff8c42" stopOpacity="0.6" />
          <stop offset="50%"  stopColor="#ffb347" stopOpacity="0.9" />
          <stop offset="82%"  stopColor="#ff8c42" stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Ground */}
        <linearGradient id="hbg-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#1a0a04" />
          <stop offset="100%" stopColor="#0a0301" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="1000" height="600" fill="url(#hbg-sky)" />

      {/* Horizon glow */}
      <ellipse cx="500" cy="472" rx="580" ry="260" fill="url(#hbg-sun)" />

      {/* Stars */}
      {STARS.map((s, i) => (
        <circle
          key={i}
          cx={`${s.x}%`}
          cy={`${s.y * 1.3}%`}
          r={s.r}
          fill="#fff"
          className={`star-t${s.t}`}
        />
      ))}

      {/* Flying birds — three groups at different heights/delays */}
      <BirdGroup cx={80} cy={90} className="hero-bird-group" />
      <BirdGroup cx={80} cy={115} className="hero-bird-group" />
      <BirdGroup cx={80} cy={70} className="hero-bird-group" />

      {/* Horizon glow line */}
      <rect x="0" y="470" width="1000" height="2" fill="url(#hbg-horizon)" />

      {/* Rising half-sun */}
      <ellipse cx="500" cy="470" rx="52" ry="26"
        fill="none"
        clipPath="url(#hbg-sun-clip)"
      />
      <defs>
        <clipPath id="hbg-sun-clip">
          <rect x="0" y="0" width="1000" height="470" />
        </clipPath>
      </defs>
      <ellipse cx="500" cy="471" rx="52" ry="27"
        fill="#ffcf6a"
        opacity="0.82"
        clipPath="url(#hbg-sun-clip)"
        style={{ filter: 'blur(2px)' }}
      />

      {/* Ground plane */}
      <rect x="0" y="470" width="1000" height="130" fill="url(#hbg-ground)" />

      {/* Ground line */}
      <line x1="0" y1="471" x2="1000" y2="471" stroke="#0a0301" strokeWidth="1" opacity={0.4} />

      {/* Grass tufts */}
      <GrassTufts color="#1a0a04" yBase={471} />

      {/* Acacia silhouettes */}
      <AcaciaTree x={108}  y={471} scale={1.35} color="#150704" />
      <AcaciaTree x={290}  y={471} scale={0.65} color="#1a0a04" />
      <AcaciaTree x={870}  y={471} scale={1.12} color="#150704" />
      <AcaciaTree x={720}  y={471} scale={0.82} color="#1a0a04" />
      <AcaciaTree x={500}  y={471} scale={0.48} color="#200c05" />
    </svg>
  </div>
);

export default AnimatedHeroBg;
