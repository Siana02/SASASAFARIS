import { useState, useEffect, useRef } from 'react';

export const useCounters = (targets = [20, 5, 100, 50]) => {
  const [counts, setCounts] = useState(targets.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const animateCounters = () => {
      if (hasAnimated) return;
      
      setHasAnimated(true);
      
      targets.forEach((target, index) => {
        let current = 0;
        const duration = 1500; // ms
        const step = Math.max(1, Math.floor(target / (duration / 16)));
        
        const animate = () => {
          current += step;
          if (current >= target) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = target;
              return newCounts;
            });
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = current;
              return newCounts;
            });
            requestAnimationFrame(animate);
          }
        };
        
        setTimeout(() => animate(), 300 + (index * 100)); // stagger the animations
      });
    };

    // Check if IntersectionObserver is available (not available in test env)
    if (typeof IntersectionObserver === 'undefined') {
      // In test environment, just animate immediately
      animateCounters();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && observer) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, targets]);

  const formatCount = (count, index) => {
    let suffix = '';
    const target = targets[index];
    
    if (target === 100) {
      suffix = '%';
    } else if ([20, 5, 50].includes(target)) {
      suffix = '+';
    }
    
    return count + suffix;
  };

  return {
    counts,
    formatCount,
    ref,
    resetAnimation: () => {
      setHasAnimated(false);
      setCounts(targets.map(() => 0));
    },
  };
};