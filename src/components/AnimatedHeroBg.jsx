import React from 'react';

/* ═══════════════════════════════════════════════════════════
   TRUE flat-top umbrella acacia silhouette
   Canopy width >> canopy height — the African thorn tree signature.
   ═══════════════════════════════════════════════════════════ */
const AcaciaTree = ({ x, y, scale = 1, color = '#0c0300' }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    {/* Ground anchor / root splay */}
    <path d="M-5,0 L-6,-12 L-2,-9 L0,-148 L2,-9 L6,-12 L5,0 Z" fill={color} />
    {/* Thin straight trunk */}
    <rect x="-3.5" y="-148" width="7" height="148" rx="2.5" fill={color} />
    {/* Upper trunk taper */}
    <path d="M-3.5,-148 L-2,-172 L2,-172 L3.5,-148 Z" fill={color} />
    {/* PRIMARY forks — nearly horizontal, wide spread */}
    <path d="M-2,-152 C-18,-156 -62,-160 -112,-154"
          stroke={color} strokeWidth="5.5" fill="none" strokeLinecap="round" />
    <path d="M-112,-154 C-125,-152 -138,-148 -146,-144"
          stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M-112,-154 C-110,-162 -108,-172 -106,-180"
          stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M2,-154 C18,-158 62,-162 114,-156"
          stroke={color} strokeWidth="5.5" fill="none" strokeLinecap="round" />
    <path d="M114,-156 C127,-154 140,-150 148,-146"
          stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M114,-156 C112,-164 110,-174 108,-182"
          stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* SECONDARY forks at upper trunk */}
    <path d="M-1.5,-163 C-14,-167 -48,-170 -82,-165"
          stroke={color} strokeWidth="3.5" fill="none" strokeLinecap="round" />
    <path d="M1.5,-165 C14,-169 48,-172 84,-167"
          stroke={color} strokeWidth="3.5" fill="none" strokeLinecap="round" />
    {/* ═══ SIGNATURE FLAT UMBRELLA CANOPY ═══ */}
    {/* Widest base layer */}
    <ellipse cx="0"    cy="-183" rx="142" ry="13"  fill={color} />
    {/* Second layer */}
    <ellipse cx="0"    cy="-193" rx="118" ry="11"  fill={color} />
    {/* Outer lobes at fork tips */}
    <ellipse cx="-116" cy="-168" rx="36"  ry="9"   fill={color} />
    <ellipse cx="118"  cy="-170" rx="34"  ry="8"   fill={color} />
    {/* Third layer */}
    <ellipse cx="0"    cy="-202" rx="90"  ry="11"  fill={color} />
    {/* Fourth — narrowing */}
    <ellipse cx="0"    cy="-210" rx="64"  ry="9"   fill={color} />
    {/* Top cap — very narrow and flat */}
    <ellipse cx="0"    cy="-217" rx="42"  ry="7"   fill={color} />
    <ellipse cx="-14"  cy="-222" rx="22"  ry="5"   fill={color} />
    <ellipse cx="16"   cy="-223" rx="20"  ry="5"   fill={color} />
  </g>
);

/* ═══════════════════════════════════════════════════════════
   Giraffe silhouette
   Key: very long neck, small round head, twin ossicones, long thin legs.
   ═══════════════════════════════════════════════════════════ */
const Giraffe = ({ x, y, scale = 1, color = '#0c0300' }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    {/* Long thin legs */}
    <rect x="-30" y="-98" width="10" height="98" rx="4" fill={color} />
    <rect x="-14" y="-98" width="10" height="98" rx="4" fill={color} />
    <rect x="6"   y="-98" width="10" height="98" rx="4" fill={color} />
    <rect x="22"  y="-98" width="10" height="98" rx="4" fill={color} />
    {/* Hooves */}
    <ellipse cx="-25" cy="2" rx="9"  ry="5" fill={color} />
    <ellipse cx="-9"  cy="2" rx="8"  ry="5" fill={color} />
    <ellipse cx="11"  cy="2" rx="8"  ry="5" fill={color} />
    <ellipse cx="27"  cy="2" rx="9"  ry="5" fill={color} />
    {/* Compact body — higher at shoulders, sloping to rump */}
    <path d="M-32,-98 C-35,-148 -28,-162 -8,-164 C12,-162 38,-148 42,-98 Z" fill={color} />
    {/* Shoulder withers */}
    <ellipse cx="-14" cy="-162" rx="20" ry="12" fill={color} />
    {/* Long tapering neck */}
    <path d="M-10,-164 C-11,-208 -8,-262 -5,-290 L5,-290 C8,-262 11,-208 10,-164 Z" fill={color} />
    {/* Small round head */}
    <ellipse cx="0" cy="-304" rx="16" ry="20" fill={color} />
    {/* Ossicones — twin horn-knobs */}
    <rect x="-13" y="-329" width="6" height="22" rx="3" fill={color} />
    <rect x="6"   y="-327" width="6" height="20" rx="3" fill={color} />
    {/* Muzzle */}
    <ellipse cx="0" cy="-292" rx="10" ry="13" fill={color} />
    {/* Tail */}
    <path d="M42,-108 C52,-98 54,-82 48,-66"
          stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" />
    <ellipse cx="48" cy="-63" rx="5" ry="9" fill={color} />
  </g>
);

/* ═══════════════════════════════════════════════════════════
   Elephant silhouette
   Key: massive domed body, huge fan ear, long curved trunk, tusks.
   ═══════════════════════════════════════════════════════════ */
const Elephant = ({ x, y, scale = 1, color = '#0c0300' }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`}>
    {/* Thick pillar legs */}
    <rect x="-60" y="-78" width="26" height="78" rx="9"  fill={color} />
    <rect x="-26" y="-78" width="26" height="78" rx="9"  fill={color} />
    <rect x="8"   y="-78" width="26" height="78" rx="9"  fill={color} />
    <rect x="42"  y="-78" width="26" height="78" rx="9"  fill={color} />
    {/* Foot pads */}
    <ellipse cx="-47" cy="3"  rx="18" ry="7" fill={color} />
    <ellipse cx="-13" cy="3"  rx="17" ry="7" fill={color} />
    <ellipse cx="21"  cy="3"  rx="17" ry="7" fill={color} />
    <ellipse cx="55"  cy="3"  rx="18" ry="7" fill={color} />
    {/* Massive rounded body */}
    <ellipse cx="8"   cy="-125" rx="98"  ry="72"  fill={color} />
    {/* Hindquarters bulge */}
    <ellipse cx="75"  cy="-90"  rx="32"  ry="38"  fill={color} />
    {/* Large rounded head */}
    <ellipse cx="-82" cy="-135" rx="54"  ry="48"  fill={color} />
    {/* Characteristic forehead dome */}
    <ellipse cx="-82" cy="-168" rx="36"  ry="24"  fill={color} />
    {/* Large fan ear */}
    <path d="M-94,-100 C-148,-94 -162,-116 -158,-148
             C-154,-178 -136,-192 -110,-180
             C-92,-170 -86,-150 -92,-126 Z"
          fill={color} />
    {/* Trunk — long, distinctively curved */}
    <path d="M-118,-115 C-142,-110 -153,-88 -150,-66
             C-147,-44 -138,-28 -142,-12 C-145,2 -138,12 -134,9"
          stroke={color} strokeWidth="16" fill="none" strokeLinecap="round" />
    {/* Tusk */}
    <path d="M-112,-126 C-134,-120 -144,-108 -140,-94"
          stroke={color} strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.85" />
    {/* Tail */}
    <path d="M100,-100 C110,-89 113,-72 106,-56"
          stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />
    <ellipse cx="106" cy="-53" rx="7" ry="10" fill={color} />
  </g>
);

/* ═══════════════════════════════════════════════════════════
   Savannah grass tuft — animated sway
   ═══════════════════════════════════════════════════════════ */
const GrassTuft = ({ x, yBase, color, className }) => (
  <g transform={`translate(${x}, ${yBase})`}>
    <g className={className} style={{ transformBox: 'fill-box', transformOrigin: 'center bottom' }}>
      <line x1="-5" y1="0" x2="-12" y2="-28" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="0"  y1="0" x2="0"   y2="-35" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="5"  y1="0" x2="13"  y2="-26" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="-9" y1="0" x2="-18" y2="-18" stroke={color} strokeWidth="1.0" strokeLinecap="round" />
      <line x1="9"  y1="0" x2="18"  y2="-16" stroke={color} strokeWidth="1.0" strokeLinecap="round" />
    </g>
  </g>
);

const GRASS_POSITIONS = [
  { x: 45,  className: 'hero-grass-1' }, { x: 62,  className: 'hero-grass-2' },
  { x: 88,  className: 'hero-grass-3' }, { x: 130, className: 'hero-grass-2' },
  { x: 168, className: 'hero-grass-1' }, { x: 208, className: 'hero-grass-3' },
  { x: 252, className: 'hero-grass-2' }, { x: 338, className: 'hero-grass-1' },
  { x: 395, className: 'hero-grass-3' }, { x: 458, className: 'hero-grass-2' },
  { x: 512, className: 'hero-grass-1' }, { x: 572, className: 'hero-grass-3' },
  { x: 628, className: 'hero-grass-2' }, { x: 692, className: 'hero-grass-1' },
  { x: 742, className: 'hero-grass-3' }, { x: 796, className: 'hero-grass-2' },
  { x: 852, className: 'hero-grass-1' }, { x: 902, className: 'hero-grass-3' },
  { x: 952, className: 'hero-grass-2' }, { x: 978, className: 'hero-grass-1' },
];

/* ── Bird group — gold-tinted V shapes ── */
const BirdGroup = ({ cx, cy, className }) => (
  <g className={className} transform={`translate(${cx}, ${cy})`} opacity={0.50}>
    {[0, 20, 38, 58, 78, 96].map((dx, i) => (
      <g key={i} transform={`translate(${dx}, ${i % 2 === 0 ? 0 : 10})`}>
        <path d="M0,0 C-5,-5 -10,-3 -14,0"  stroke="#ffd080" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M0,0 C5,-5 10,-3 14,0"     stroke="#ffd080" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      </g>
    ))}
  </g>
);

/* ── Stars — violet-white tint to match indigo sky ── */
const STARS = [
  { x: 3,  y: 4,  r: 1.5, t: 1 }, { x: 11, y: 2,  r: 1.0, t: 2 }, { x: 22, y: 7,  r: 1.4, t: 3 },
  { x: 34, y: 3,  r: 1.0, t: 1 }, { x: 44, y: 6,  r: 1.7, t: 2 }, { x: 55, y: 2,  r: 1.0, t: 3 },
  { x: 65, y: 8,  r: 1.4, t: 1 }, { x: 75, y: 4,  r: 1.0, t: 2 }, { x: 85, y: 7,  r: 1.6, t: 3 },
  { x: 93, y: 3,  r: 1.0, t: 1 }, { x: 8,  y: 15, r: 1.0, t: 2 }, { x: 18, y: 20, r: 1.4, t: 3 },
  { x: 29, y: 13, r: 1.0, t: 1 }, { x: 40, y: 18, r: 1.6, t: 2 }, { x: 52, y: 11, r: 1.0, t: 3 },
  { x: 62, y: 16, r: 1.4, t: 1 }, { x: 71, y: 9,  r: 1.0, t: 2 }, { x: 82, y: 15, r: 1.5, t: 3 },
  { x: 2,  y: 26, r: 1.2, t: 1 }, { x: 16, y: 30, r: 0.9, t: 2 }, { x: 49, y: 28, r: 1.0, t: 3 },
];

/* ════════════════════════════════════════════════════════════
   AnimatedHeroBg
   Dawn savannah panorama — dramatically different from the preload.
   Deep indigo-purple sky fades to blazing gold at the horizon.
   Elephant backlit by the rising sun, towering giraffe, proper
   flat-top acacia trees, swaying grass, drifting clouds.
   ════════════════════════════════════════════════════════════ */
const AnimatedHeroBg = () => (
  <div className="hero-animated-bg" aria-hidden="true">
    <svg
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <defs>
        {/* Dawn sky: deep indigo at top → vivid purple → blazing amber-gold at horizon */}
        <linearGradient id="hbg-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#0d0820" />
          <stop offset="16%"  stopColor="#1b0d38" />
          <stop offset="35%"  stopColor="#42124a" />
          <stop offset="52%"  stopColor="#7a1e16" />
          <stop offset="66%"  stopColor="#b03a10" />
          <stop offset="78%"  stopColor="#d06015" />
          <stop offset="90%"  stopColor="#e08820" />
          <stop offset="100%" stopColor="#f0a030" />
        </linearGradient>

        {/* Dawn glow — centred left-of-middle where sun rises */}
        <radialGradient id="hbg-glow" cx="32%" cy="80%" r="52%">
          <stop offset="0%"   stopColor="#ffe055" stopOpacity="0.95" />
          <stop offset="14%"  stopColor="#ffaa30" stopOpacity="0.80" />
          <stop offset="32%"  stopColor="#f06520" stopOpacity="0.50" />
          <stop offset="55%"  stopColor="#c03010" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#42124a" stopOpacity="0"    />
        </radialGradient>

        {/* Purple atmospheric bloom — upper right sky */}
        <radialGradient id="hbg-bloom" cx="72%" cy="12%" r="38%">
          <stop offset="0%"   stopColor="#7c2a9e" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#0d0820" stopOpacity="0"    />
        </radialGradient>

        {/* Ground: warm dark earth */}
        <linearGradient id="hbg-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1c0904" />
          <stop offset="100%" stopColor="#080200" />
        </linearGradient>

        {/* Horizon afterglow band */}
        <linearGradient id="hbg-glow-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="18%"  stopColor="#ff9040" stopOpacity="0.4" />
          <stop offset="35%"  stopColor="#ffe060" stopOpacity="0.9" />
          <stop offset="52%"  stopColor="#ff9040" stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Atmospheric cloud fill */}
        <linearGradient id="hbg-cloud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ff9860" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#c84818" stopOpacity="0.06" />
        </linearGradient>

        {/* Above-horizon clip for sun disc */}
        <clipPath id="hbg-horizon">
          <rect x="0" y="0" width="1000" height="469" />
        </clipPath>
      </defs>

      {/* ── Sky wash ── */}
      <rect width="1000" height="600" fill="url(#hbg-sky)" />

      {/* ── Purple atmospheric bloom (upper right) ── */}
      <rect width="1000" height="600" fill="url(#hbg-bloom)" />

      {/* ── Dawn glow (left of centre) ── */}
      <rect width="1000" height="600" fill="url(#hbg-glow)" />

      {/* ── Stars — violet-white tint, upper sky ── */}
      {STARS.map((s, i) => (
        <circle
          key={i}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="#ddd0ff"
          className={`star-t${s.t}`}
        />
      ))}

      {/* ── Drifting dawn clouds — 3 layers ── */}
      <g className="hero-cloud-1" opacity={0.22}>
        <ellipse cx="180" cy="75"  rx="110" ry="20" fill="url(#hbg-cloud)" />
        <ellipse cx="140" cy="67"  rx="65"  ry="14" fill="url(#hbg-cloud)" />
        <ellipse cx="230" cy="70"  rx="85"  ry="17" fill="url(#hbg-cloud)" />
      </g>
      <g className="hero-cloud-2" opacity={0.17}>
        <ellipse cx="720" cy="105" rx="130" ry="18" fill="url(#hbg-cloud)" />
        <ellipse cx="668" cy="97"  rx="74"  ry="14" fill="url(#hbg-cloud)" />
        <ellipse cx="778" cy="100" rx="96"  ry="16" fill="url(#hbg-cloud)" />
      </g>
      <g className="hero-cloud-3" opacity={0.12}>
        <ellipse cx="470" cy="50"  rx="92"  ry="13" fill="url(#hbg-cloud)" />
        <ellipse cx="426" cy="45"  rx="55"  ry="10" fill="url(#hbg-cloud)" />
      </g>

      {/* ── Rising sun disc — left-of-centre, backlit silhouettes ── */}
      <ellipse
        cx="320" cy="470" rx="54" ry="54"
        fill="#ffe566" opacity="0.85"
        clipPath="url(#hbg-horizon)"
        style={{ filter: 'blur(3px)' }}
      />
      <ellipse
        cx="320" cy="468" rx="32" ry="32"
        fill="#fff5aa" opacity="0.95"
        clipPath="url(#hbg-horizon)"
        style={{ filter: 'blur(1px)' }}
      />

      {/* ── Horizon afterglow line ── */}
      <rect x="0" y="467" width="1000" height="5" fill="url(#hbg-glow-line)" />

      {/* ── Ground ── */}
      <rect x="0" y="470" width="1000" height="130" fill="url(#hbg-ground)" />

      {/* ── Distant rolling koppies / hills — cubic bezier curves tracing
           undulating silhouette across the horizon (y≈418–442) ── */}
      <path
        d="M0,470 C120,444 280,436 420,442 C510,436 640,428 780,434 C880,428 950,422 1000,418 L1000,470 Z"
        fill="#100502"
        opacity={0.55}
      />

      {/* ── Flying birds ── */}
      <BirdGroup cx={120} cy={138} className="hero-bird-group" />
      <BirdGroup cx={120} cy={110} className="hero-bird-group" />
      <BirdGroup cx={120} cy={162} className="hero-bird-group" />

      {/* ── Savannah grass tufts ── */}
      {GRASS_POSITIONS.map((g, i) => (
        <GrassTuft key={i} x={g.x} yBase={470} color="#140602" className={g.className} />
      ))}

      {/* ── Acacia trees: small far-left, large landmark right, tiny far-right ── */}
      <AcaciaTree x={78}  y={470} scale={0.62} color="#0c0300" />
      <AcaciaTree x={760} y={470} scale={1.28} color="#0b0200" />
      <AcaciaTree x={924} y={470} scale={0.52} color="#0c0300" />

      {/* ── Elephant — backlit by rising sun, left-centre ── */}
      <Elephant x={240} y={470} scale={0.68} color="#0c0300" />

      {/* ── Giraffe — right-of-centre, silhouetted against the dawn sky ── */}
      <Giraffe x={540} y={470} scale={0.80} color="#0c0300" />
    </svg>
  </div>
);

export default AnimatedHeroBg;
