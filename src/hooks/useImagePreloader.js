import { useState, useEffect, useRef } from 'react';

/**
 * Preloads a list of image URLs and tracks loading progress.
 * Each image is loaded via a hidden Image object so the browser caches it
 * before it is needed in the DOM.
 *
 * @param {string[]} imageSources - Array of image URL strings to preload.
 * @returns {{ loadedCount: number, total: number, percent: number, isComplete: boolean }}
 */
export function useImagePreloader(imageSources) {
  const [loadedCount, setLoadedCount] = useState(0);
  const total = imageSources.length;
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!total) return;
    imageSources.forEach((src) => {
      const img = new window.Image();
      const onDone = () => {
        if (!mountedRef.current) return;
        // Use functional updater to avoid lost increments when multiple images
        // resolve concurrently (avoids stale-closure race on the local counter).
        setLoadedCount((prev) => prev + 1);
      };
      img.onload = onDone;
      img.onerror = onDone;
      img.src = src;
    });
    // Intentionally runs once on mount only. The preloader is a one-shot
    // effect — the set of images to prefetch does not change after the
    // component mounts, so re-running on array identity changes is unnecessary.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loadedCount,
    total,
    percent: total > 0 ? Math.min(100, Math.round((loadedCount / total) * 100)) : 0,
    isComplete: total > 0 ? loadedCount >= total : true,
  };
}
