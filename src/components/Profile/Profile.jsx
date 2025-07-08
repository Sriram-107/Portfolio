import React from "react";
import "./Profile.css";
import ProfileImage from "../../assets/images/sriram.png";
import Card from "../Card/Card";
import ProjectCards from "../ProjectCards/ProjectCards";
export default function Profile() {
  return (
    <section className="profile-container">
      <section className="name-img">
        <img loading="lazy" src={ProfileImage} alt="Profile Image" />
        <span>Sriram</span>
        <span>Ravisankar</span>
      </section>
      <p>
        A front-end developer, UI designer, and all-around doodler who enjoys
        developing accessible, usable and engaging websites & apps that bring
        your products to life.
      </p>
      <section className="recent-works">
        <h1>Recent Works</h1>
        <p>23 - Present</p>
      </section>
      <div className="home-project-cards">
     <ProjectCards/>
      </div>
    </section>
  );
}
