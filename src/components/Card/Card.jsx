import React from "react";
import "./Card.css"
export default function Card({imageSrc,projectName}) {
  return <div className="card">
    <img loading="lazy" src={imageSrc} alt="Card Image" />
    <div className="card-info">
      <h3>{projectName}</h3>
    </div>
  </div>;
}
