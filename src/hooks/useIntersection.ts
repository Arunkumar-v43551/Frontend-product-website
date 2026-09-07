import { useState, useEffect, useRef } from 'react';

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersection<T extends HTMLElement = HTMLDivElement>(options: Options = {}) {
  const { threshold = 0.15, root = null, rootMargin = '0px', freezeOnceVisible = true } = options;
  const elementRef = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || typeof IntersectionObserver !== 'function') {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (freezeOnceVisible) {
          observer.unobserve(node);
        }
      } else if (!freezeOnceVisible) {
        setIsIntersecting(false);
      }
    }, { threshold, root, rootMargin });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return { ref: elementRef, isIntersecting };
}
