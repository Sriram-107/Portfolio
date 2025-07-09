import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../NavBar/Navbar";
import "./Header.css";
import useScrollDirection from "../../hooks/UseScroll";

export default function Header() {
  const [lastScrollY] = useScrollDirection()
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
