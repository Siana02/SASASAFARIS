import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useImagePreloader } from '../hooks/useImagePreloader';

/** Minimum time (ms) the screen is always shown — keeps the animation visible. */
const MIN_DISPLAY_MS = 2800;
/** Hard cap (ms) — we never block the user longer than this regardless of slow network. */
const MAX_WAIT_MS = 9000;

const LOADING_MESSAGES = [
  'Loading adventures…',
  'Tracking the elephants…',
  'Preparing your journey…',
  'Charting the ocean…',
  'Packing the sunscreen…',
  'Calling the dolphins…',
  'Reading the savannah…',
  'Almost there…',
];

/* ── Acacia tree SVG component ── */
const AcaciaTree = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`} color="#07030100">
    {/* Trunk */}
    <path d="M-3,85 C-3,85 -2,45 0,0 C2,45 3,85 3,85 Z" fill="#0a0503" />
    {/* Left main branch */}
    <line x1="-1" y1="28" x2="-38" y2="-8" stroke="#0a0503" strokeWidth="2.5" strokeLinecap="round" />
    {/* Right main branch */}
    <line x1="1" y1="18" x2="40" y2="-12" stroke="#0a0503" strokeWidth="2.5" strokeLinecap="round" />
    {/* Left sub-branches */}
    <line x1="-38" y1="-8" x2="-54" y2="-22" stroke="#0a0503" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="-38" y1="-8" x2="-24" y2="-24" stroke="#0a0503" strokeWidth="1.5" strokeLinecap="round" />
    {/* Right sub-branches */}
    <line x1="40" y1="-12" x2="26" y2="-28" stroke="#0a0503" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="40" y1="-12" x2="54" y2="-24" stroke="#0a0503" strokeWidth="1.5" strokeLinecap="round" />
    {/* Canopy — flat umbrella layers characteristic of acacia */}
    <ellipse cx="0" cy="-42" rx="62" ry="17" fill="#0a0503" />
    <ellipse cx="-26" cy="-30" rx="30" ry="11" fill="#0a0503" />
    <ellipse cx="30" cy="-32" rx="28" ry="10" fill="#0a0503" />
    <ellipse cx="0" cy="-52" rx="50" ry="13" fill="#0a0503" />
  </g>
);

/* ── Grass tufts along the ground ── */
const GrassTufts = () => (
  <>
    {[60, 160, 240, 380, 470, 560, 640, 760, 850, 940].map((x, i) => (
      <g key={i} transform={`translate(${x}, 200)`} opacity={0.85}>
        <line x1="0" y1="0" x2="-4" y2="-14" stroke="#0a0503" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="0" y1="0" x2="0" y2="-18" stroke="#0a0503" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="0" y1="0" x2="5" y2="-13" stroke="#0a0503" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    ))}
  </>
);

/* ── Flying birds (abstract V-shapes) ── */
const Birds = () => (
  <>
    {[[640, 28], [658, 20], [672, 30], [688, 22], [700, 32]].map(([x, y], i) => (
      <g key={i} transform={`translate(${x}, ${y})`} opacity={0.5}>
        <path d={`M0,0 C-4,-3 -8,-2 -11,0`} stroke="#fff" strokeWidth="1" fill="none" />
        <path d={`M0,0 C4,-3 8,-2 11,0`} stroke="#fff" strokeWidth="1" fill="none" />
      </g>
    ))}
  </>
);

/* ── Star data ── */
const STARS = [
  { x: 8, y: 6, r: 1.5 }, { x: 18, y: 3, r: 1 }, { x: 30, y: 10, r: 1.5 },
  { x: 43, y: 5, r: 1 }, { x: 55, y: 8, r: 2 }, { x: 67, y: 4, r: 1 },
  { x: 79, y: 9, r: 1.5 }, { x: 90, y: 6, r: 1 }, { x: 14, y: 17, r: 1 },
  { x: 26, y: 22, r: 1.5 }, { x: 38, y: 15, r: 1 }, { x: 50, y: 20, r: 2 },
  { x: 62, y: 13, r: 1 }, { x: 74, y: 18, r: 1.5 }, { x: 86, y: 14, r: 1 },
  { x: 95, y: 22, r: 1 }, { x: 5, y: 27, r: 1.5 }, { x: 46, y: 28, r: 1 },
];

const CURTAIN_EASE = [0.76, 0, 0.24, 1];

/* ════════════════════════════════════
   PreloadScreen
   ════════════════════════════════════ */
const PreloadScreen = ({ onComplete, images = [] }) => {
  const [revealing, setRevealing] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const { percent, isComplete } = useImagePreloader(images);

  // Keep onComplete stable inside effects via ref
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  // Flags — tracked in refs to avoid stale closures
  const minPassedRef = useRef(false);
  const imagesReadyRef = useRef(false);
  const revealCalledRef = useRef(false);

  const doReveal = useCallback(() => {
    if (revealCalledRef.current) return;
    revealCalledRef.current = true;
    setRevealing(true);
    setTimeout(() => onCompleteRef.current?.(), 1400);
  }, []);

  // Min display time + hard-cap timeout
  useEffect(() => {
    const minTimer = setTimeout(() => {
      minPassedRef.current = true;
      if (imagesReadyRef.current) doReveal();
    }, MIN_DISPLAY_MS);

    const maxTimer = setTimeout(() => {
      imagesReadyRef.current = true;
      minPassedRef.current = true;
      doReveal();
    }, MAX_WAIT_MS);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, [doReveal]);

  // Trigger reveal as soon as images are done AND min time has passed
  useEffect(() => {
    if (isComplete && !imagesReadyRef.current) {
      imagesReadyRef.current = true;
      if (minPassedRef.current) doReveal();
    }
  }, [isComplete, doReveal]);

  // Cycle loading messages
  useEffect(() => {
    const id = setInterval(() => {
      setMsgIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        pointerEvents: revealing ? 'none' : 'all',
      }}
    >
      {/* ── Top curtain panel ── */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(to bottom, #060301 0%, #120804 60%, #200d05 100%)',
        }}
        animate={revealing ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 1.2, ease: CURTAIN_EASE, delay: 0.08 }}
      />

      {/* ── Bottom curtain panel ── */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(to bottom, #200d05 0%, #3a1a08 60%, #271106 100%)',
        }}
        animate={revealing ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 1.2, ease: CURTAIN_EASE, delay: 0.08 }}
      />

      {/* ── Content layer (fades out before curtains split) ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
        animate={revealing ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.38 }}
      >
        {/* Stars */}
        {STARS.map((s, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.r * 2,
              height: s.r * 2,
              borderRadius: '50%',
              background: '#fff',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.55, 0.9, 0.6, 1], scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.25 + i * 0.055,
              opacity: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 2.5 + (i % 4) * 0.6,
                delay: 1.2 + i * 0.12,
                ease: 'easeInOut',
              },
            }}
          />
        ))}

        {/* Horizon golden glow line */}
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            bottom: '35%',
            width: '100%',
            height: '1px',
            background:
              'linear-gradient(to right, transparent 0%, #ff8c42 25%, #ffb347 50%, #ff8c42 75%, transparent 100%)',
            boxShadow:
              '0 0 18px 5px rgba(255,120,50,0.32), 0 0 55px 14px rgba(255,75,15,0.12)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.6 }}
        />

        {/* Rising sun — half-circle peeking above horizon */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '35%',
            left: '50%',
            transform: 'translateX(-50%) translateY(50%)',
            width: 70,
            height: 35,
            borderRadius: '35px 35px 0 0',
            background:
              'radial-gradient(ellipse at 50% 100%, #ffcf6a 0%, #ffb347 35%, #ff8c42 65%, transparent 100%)',
            filter: 'blur(1.5px)',
          }}
          initial={{ opacity: 0, scaleX: 0.2, scaleY: 0.5 }}
          animate={{ opacity: 0.88, scaleX: 1, scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Safari landscape SVG — acacia trees + grass */}
        <motion.svg
          style={{
            position: 'absolute',
            bottom: '35%',
            left: 0,
            width: '100%',
            height: 210,
            overflow: 'visible',
          }}
          viewBox="0 0 1000 210"
          preserveAspectRatio="xMidYMax meet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.5 }}
        >
          <Birds />
          {/* Ground line */}
          <line x1="0" y1="200" x2="1000" y2="200" stroke="#0a0503" strokeWidth="1" opacity={0.4} />
          <GrassTufts />
          {/* Trees at varying scales / positions */}
          <AcaciaTree x={105} y={200} scale={1.25} />
          <AcaciaTree x={310} y={200} scale={0.62} />
          <AcaciaTree x={870} y={200} scale={1.05} />
          <AcaciaTree x={720} y={200} scale={0.78} />
        </motion.svg>

        {/* ── Brand block ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.45rem',
            zIndex: 2,
            marginTop: '-60px',
          }}
        >
          {/* Top ornament */}
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            <div style={{ width: 44, height: 1, background: 'linear-gradient(to right, transparent, #c8963e)' }} />
            <svg width="10" height="10" viewBox="0 0 10 10">
              <polygon points="5,0 10,5 5,10 0,5" fill="#c8963e" opacity="0.85" />
            </svg>
            <div style={{ width: 44, height: 1, background: 'linear-gradient(to left, transparent, #c8963e)' }} />
          </motion.div>

          {/* "SASA" — large headline */}
          <motion.div
            style={{
              fontFamily: "'Martel', serif",
              fontSize: 'clamp(2.6rem, 8.5vw, 5.2rem)',
              fontWeight: 800,
              letterSpacing: '0.28em',
              color: '#e8c97a',
              lineHeight: 1,
              textShadow: '0 0 40px rgba(232,201,122,0.28), 0 2px 20px rgba(0,0,0,0.6)',
            }}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            SASA
          </motion.div>

          {/* "SAFARIS AFRICA" — subtitle */}
          <motion.div
            style={{
              fontFamily: "'Martel', serif",
              fontSize: 'clamp(0.85rem, 2.8vw, 1.55rem)',
              fontWeight: 400,
              letterSpacing: '0.65em',
              color: '#c8a96e',
              lineHeight: 1,
              paddingLeft: '0.65em',
              textShadow: '0 1px 12px rgba(0,0,0,0.5)',
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            SAFARIS AFRICA
          </motion.div>

          {/* Animated gold divider */}
          <motion.div
            style={{
              height: 1,
              background: 'linear-gradient(to right, transparent, #c8963e 30%, #e8c97a 50%, #c8963e 70%, transparent)',
              margin: '0.5rem 0',
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 190, opacity: 1 }}
            transition={{ duration: 1.0, delay: 1.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Tagline */}
          <motion.p
            style={{
              fontFamily: "'Assistant', sans-serif",
              fontSize: 'clamp(0.6rem, 1.6vw, 0.78rem)',
              letterSpacing: '0.35em',
              color: '#9a7a55',
              textTransform: 'uppercase',
              margin: 0,
              paddingLeft: '0.35em',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.85 }}
          >
            Where The Wild Awaits
          </motion.p>

          {/* Bottom ornament */}
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 2.1 }}
          >
            <div style={{ width: 28, height: 1, background: 'linear-gradient(to right, transparent, #7a5a30)' }} />
            <svg width="6" height="6" viewBox="0 0 6 6">
              <circle cx="3" cy="3" r="2" fill="#7a5a30" opacity="0.7" />
            </svg>
            <div style={{ width: 28, height: 1, background: 'linear-gradient(to left, transparent, #7a5a30)' }} />
          </motion.div>
        </div>

        {/* ── Progress track ── */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.55rem',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Cycling message */}
          <motion.p
            key={msgIndex}
            style={{
              fontFamily: "'Assistant', sans-serif",
              fontSize: 'clamp(0.55rem, 1.4vw, 0.72rem)',
              letterSpacing: '0.28em',
              color: '#7a5a35',
              textTransform: 'uppercase',
              margin: 0,
            }}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
          >
            {LOADING_MESSAGES[msgIndex]}
          </motion.p>

          {/* Track + fill */}
          <div
            style={{
              width: 160,
              height: 2,
              background: 'rgba(200,150,62,0.18)',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(to right, #c8963e, #e8c97a)',
                borderRadius: 2,
              }}
              animate={{ width: percent + '%' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>

          {/* Percentage label */}
          <motion.span
            style={{
              fontFamily: "'Assistant', sans-serif",
              fontSize: 'clamp(0.5rem, 1.2vw, 0.65rem)',
              letterSpacing: '0.18em',
              color: '#c8963e',
              opacity: 0.8,
            }}
          >
            {percent}%
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PreloadScreen;
