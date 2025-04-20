
import React from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export function useScrollVisibility(threshold = 100) {
  const [isVisible, setIsVisible] = React.useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current > lastScrollY.current && current > threshold) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY.current = current;
  });

  return isVisible;
}
