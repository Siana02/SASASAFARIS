/**
 * seo.js — lightweight helpers for managing document <title> and
 * the primary <meta name="description"> in a React SPA (no SSR).
 *
 * Usage in any page component:
 *   import { setPageMeta } from '../utils/seo';
 *   useEffect(() => { setPageMeta('Page Title | Sasa Safaris Africa', 'Description…'); }, []);
 */

const SITE_NAME = 'Sasa Safaris Africa';

/**
 * Sets document.title and the primary meta description.
 * @param {string} title       - Full page title (already includes site name if desired)
 * @param {string} description - Up to ~160 characters
 * @param {string} [canonical] - Canonical URL for this page (optional)
 */
export function setPageMeta(title, description, canonical) {
  document.title = title;

  let descTag = document.querySelector('meta[name="description"]');
  if (descTag) descTag.setAttribute('content', description);

  if (canonical) {
    let canonTag = document.querySelector('link[rel="canonical"]');
    if (canonTag) canonTag.setAttribute('href', canonical);
  }
}

/**
 * Injects or replaces a JSON-LD <script> block with the given id.
 * Call from useEffect; cleaned up automatically on unmount.
 * @param {string} id      - Unique id for the script element
 * @param {object} schema  - Plain object to serialise as JSON-LD
 * @returns {function}     - Cleanup function (removes the script)
 */
export function injectSchema(id, schema) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
  return () => {
    const s = document.getElementById(id);
    if (s) s.remove();
  };
}

export { SITE_NAME };
