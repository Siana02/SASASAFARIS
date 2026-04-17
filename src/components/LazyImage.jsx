import React, { useRef, useState, useEffect } from 'react';

/**
 * 1×1 transparent GIF — prevents broken-image icon while no real src is set.
 */
const PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * LazyImage — a drop-in <img> replacement that:
 *  • Starts fetching the real image 500 px before it enters the viewport
 *    (IntersectionObserver with rootMargin: '500px 0px').
 *  • Shows a shimmer-skeleton while the image is pending / loading.
 *  • Fades in smoothly once the image has fully loaded.
 *  • Accepts an optional `eager` prop — when true the image is loaded
 *    immediately (no IntersectionObserver delay), useful for images that
 *    are already in the visible viewport when their card first mounts.
 *
 * All standard <img> props (className, style, draggable, etc.) are forwarded
 * directly to the underlying <img> element so existing CSS continues to work.
 */
const LazyImage = React.forwardRef(function LazyImage(
  { src, alt, className, style, draggable, onLoad, eager, ...rest },
  forwardedRef
) {
  // Eager images skip the observer and load immediately.
  const [realSrc, setRealSrc] = useState(eager ? src : null);
  const [loaded, setLoaded] = useState(false);
  const internalRef = useRef(null);
  const ref = forwardedRef || internalRef;

  useEffect(() => {
    // When eager, the src is already set in state; nothing to do here.
    if (eager) return;

    const el = ref.current;
    if (!el || !src) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRealSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: '500px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // `ref` is stable. `eager` is intentionally excluded — if it changes
    // after mount the component should remount instead.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const handleLoad = (e) => {
    if (realSrc) setLoaded(true);
    if (onLoad) onLoad(e);
  };

  const classes = [
    'lazy-img',
    loaded ? 'lazy-img--loaded' : 'lazy-img--pending',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <img
      ref={ref}
      src={realSrc || PLACEHOLDER}
      alt={alt}
      className={classes}
      style={style}
      draggable={draggable}
      onLoad={handleLoad}
      {...rest}
    />
  );
});

export default LazyImage;
