import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-flex">
        <ul className="links-flex">
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Linkedin</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
        </ul>
        <p className="copy-right">&copy; 2024 Sriram.All rights reserved</p>
      </div>
      <ul className="footer-flex links-flex">
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <p id="developed">Developed by Sriram</p>
        </li>
      </ul>
    </footer>
  );
}
