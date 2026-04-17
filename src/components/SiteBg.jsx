import React from 'react';

/**
 * SiteBg — fixed full-page atmospheric gradient that provides
 * the indigo-purple dawn sky as a site-wide backdrop.
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
      background:
        'linear-gradient(to bottom, #0d0820 0%, #1b0d38 22%, #420f4a 45%, #6b1c10 65%, #1a0c06 82%, #080200 100%)',
    }}
  />
);

export default SiteBg;
