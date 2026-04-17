import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import UG from "country-flag-icons/react/3x2/UG";
import KE from "country-flag-icons/react/3x2/KE";
import TZ from "country-flag-icons/react/3x2/TZ";
import RW from "country-flag-icons/react/3x2/RW";
import BI from "country-flag-icons/react/3x2/BI";

const EAST_AFRICA = [
  { Flag: UG, name: "Uganda",   code: "UG" },
  { Flag: RW, name: "Rwanda",   code: "RW" },
  { Flag: KE, name: "Kenya",    code: "KE" },
  { Flag: TZ, name: "Tanzania", code: "TZ" },
  { Flag: BI, name: "Burundi",  code: "BI" },
];

// SVG viewBox 0 0 500 50.
// 5 flags at space-around positions: x = 50, 150, 250, 350, 450.
// Cubic-bezier path passes exactly through each flag's x anchor.
const TRAIL_PATH =
  "M 50,30 C 90,18 120,18 150,22 C 200,30 220,30 250,26 C 280,20 310,20 350,26 C 390,34 420,34 450,26";

const FLAG_ANCHORS = [
  { cx: 50,  cy: 30 },
  { cx: 150, cy: 22 },
  { cx: 250, cy: 26 },
  { cx: 350, cy: 26 },
  { cx: 450, cy: 26 },
];

const RouteAnimation = () => (
  <svg
    className="cs-trail-svg"
    viewBox="0 0 500 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Dotted trail */}
    <path
      id="cs-trail-path"
      d={TRAIL_PATH}
      stroke="#c8963e"
      strokeWidth="2.5"
      strokeDasharray="8 5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Pulsing stop dots at each flag position */}
    {FLAG_ANCHORS.map(({ cx, cy }, i) => (
      <circle key={i} cx={cx} cy={cy} r="3.5" fill="#c8963e" opacity="0.85">
        <animate
          attributeName="r"
          values="3;5;3"
          dur="2.4s"
          repeatCount="indefinite"
          begin={`${i * 0.45}s`}
        />
        <animate
          attributeName="opacity"
          values="0.85;0.4;0.85"
          dur="2.4s"
          repeatCount="indefinite"
          begin={`${i * 0.45}s`}
        />
      </circle>
    ))}

    {/* Airplane animating along the trail */}
    <text
      fontSize="18"
      fill="#fff"
      dy="-3"
      textAnchor="middle"
      className="cs-airplane-icon"
    >
      ✈
      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
        <mpath href="#cs-trail-path" />
      </animateMotion>
    </text>
  </svg>
);

const ComingSoon = () => {
  const { t } = useLanguage();

  return (
  <section className="coming-soon" aria-label={t('comingSoon.headlinePrimary')}>
    <div className="coming-soon-inner">
      {/* Badge */}
      <span className="cs-badge">{t('comingSoon.title')}</span>

      {/* Headline */}
      <h2 className="cs-headline">
        {t('comingSoon.headlinePrimary')}
        <span className="cs-headline-accent"> {t('comingSoon.headlineAccent')}</span>
      </h2>

      {/* Subheadline */}
      <p className="cs-subheadline">
        {t('comingSoon.subheadline')}
      </p>

      {/* Flags + animated route */}
      <div className="cs-route-wrapper" aria-hidden="true">
        <RouteAnimation />
        <div className="cs-flags-row">
          {EAST_AFRICA.map(({ Flag, name, code }, i) => (
            <div
              key={code}
              className="cs-flag-item"
              style={{ animationDelay: `${0.5 + i * 0.18}s` }}
            >
              <div className="cs-flag-img">
                <Flag title={name} />
              </div>
              <span className="cs-flag-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default ComingSoon;
