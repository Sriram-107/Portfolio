import React, { useRef, useState, useEffect, useCallback, memo } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

export default memo(function Navbar() {
  const navRef = useRef(null);
  const [showNavBar, setShowNavBar] = useState(false);

  function toggleNavBar(e) {
    console.log(e.target);

    setShowNavBar(!showNavBar);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(navRef.current.contains(event.target));

      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowNavBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav ref={navRef} className={`nav-main `}>
      <ul className={`nav-main-flex ${showNavBar ? "active" : "inactive"}`}>
        <li>
          <Link to="/" className="link-style">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link-style">
            About
          </Link>
        </li>

        <li>
          <Link to="/project" className="link-style">
            Project
          </Link>
        </li>

        <li>
          <Link to="/contact" className="link-style">
            {" "}
            Contact
          </Link>
        </li>
        <span></span>
      </ul>

      <button onClick={toggleNavBar}>
        {showNavBar ? (
          <IoMdClose className="close-nav" size={140} />
        ) : (
          <FaBars className="fa-bar" />
        )}
      </button>
    </nav>
  );
});
