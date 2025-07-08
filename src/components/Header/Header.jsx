import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../NavBar/Navbar";
import "./Header.css";

export default function Header() {
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
  return (
    <header>
      <div className="navbar">
        <h2
          className={`sr-logo ${
            lastScrollY > 100 ? "ease-out-left" : "ease-in-left"
          }`}
        >
          SR
        </h2>
        <Navbar />
        <div
          className={`social-links ${
            lastScrollY > 100 ? "ease-out-right" : "ease-in-right"
          }`}
        >
          <p>Social Links:</p>
          <ul className="links-flex">
            <li>
              <a href="">FB</a>
            </li>
            <li>
              <a href="">TW</a>
            </li>
            <li>
              <a href="">IN</a>
            </li>
            <li>
              <a href="">GITHUB</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
