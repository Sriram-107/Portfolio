import React from "react";
import { projectDetails } from "../../constants/constants";
import Card from "../Card/Card";
import "./ProjectCards.css";
import Button from "../Button/Button";

export default function ProjectCards() {
  
  return (<>
 <section className="card-flex"> 
 {projectDetails.map((element) => <Card imageSrc={element.img} projectName={element.projectName} />)}
 </section>
 <Button labelName="LOAD MORE" classname="btn-flex"/>
  </>
  )
  
}
