import React from "react";
import Project1 from "../../assets/images/project_1.PNG";
import Project2 from "../../assets/images/project_2.PNG";
import Card from "../Card/Card";

export default function ProjectCards() {
  return [Project1, Project2].map((element) => {
    return <Card imageSrc={element} />;
  });
}
