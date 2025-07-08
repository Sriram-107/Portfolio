import React from "react";
import { projectDetails } from "../../constants/constants";
import Card from "../Card/Card";
import "./ProjectCards.css";

export default function ProjectCards() {
  
  return (
 <section className="card-flex"> 
 {projectDetails.map((element) => <Card imageSrc={element.img} projectName={element.projectName} />)}
 </section>
  )
  
}
