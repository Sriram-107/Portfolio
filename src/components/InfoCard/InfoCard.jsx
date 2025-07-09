import React from "react";
import { TbHomeMove } from "react-icons/tb";
import "./InfoCard.css";
import { Link } from "react-router";
export default function InfoCard({ cardInfo, cardText }) {
  return (
    <section className="info-section">
      <div>
        <h2>{cardInfo}</h2>
        <ul className="info-list">
          <li>
            <TbHomeMove />
          </li>
          <li>
            <Link to="/" className="link-style">
              {" "}
              Home
            </Link>
          </li>
          <li>.</li>
          <li>{cardInfo}</li>
        </ul>
      </div>
      <p className="info-text">{cardText}</p>
    </section>
  );
}
