import React from "react";
import "./Profile.css";
import ProfileImage from "../../assets/images/sriram.png";
export default function Profile() {
  return (
    <section className="profile-container">
      <section className="name-img">
        <img src={ProfileImage} alt="Profile Image" />
        <span>Sriram</span>
        <span>Ravisankar</span>
      </section>
      <p>
        A front-end developer, UI designer, and all-around doodler who enjoys
        developing accessible, usable and engaging websites & apps that bring
        your products to life.
      </p>
    </section>
  );
}
