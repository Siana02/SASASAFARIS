import React from 'react';
import AnimatedHeroBg from './AnimatedHeroBg';

/**
 * SiteBg — fixed full-page dawn-savannah background that stays
 * stagnant while page sections slide over it as the user scrolls.
 * Sits at z-index: -1 so all page content renders on top.
 */
const SiteBg = () => (
  <div
    aria-hidden="true"
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      pointerEvents: 'none',
    }}
  >
    <AnimatedHeroBg />
  </div>
);

export default SiteBg;
