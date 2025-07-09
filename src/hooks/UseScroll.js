import { useState, useEffect, useCallback, useRef } from 'react';

const useScrollDirection = (throttleLimit = 10) => {

    const [scrollDirection, setScrollDirection] = useState("none");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Throttling for limiting scroll event trigger
  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  // Scroll event handler function
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    console.log(currentScrollY);

    if (currentScrollY > lastScrollY && currentScrollY > 0) {
      if (scrollDirection !== "down") {
        setScrollDirection("down");
      }
    } else if (currentScrollY < lastScrollY) {
      if (scrollDirection !== "up") {
        setScrollDirection("up");
      }
    } else if (currentScrollY === 0) {
      if (scrollDirection !== "none") {
        setScrollDirection("none");
      }
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, scrollDirection]);

  // Make the handleScroll a throttle function
  const throttleScroll = throttle(handleScroll, 10);

  useEffect(() => {
    // onmount
    window.addEventListener("scroll", throttleScroll);
    // on unmount.
    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, [throttleScroll]);

  // Return both scrollDirection and the current value of lastScrollY
  return [lastScrollY]; // <--- Change here
};

export default useScrollDirection;