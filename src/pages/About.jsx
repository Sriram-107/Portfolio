import React from "react";
import Header from "../components/Header/Header";
import InfoCard from "../components/InfoCard/InfoCard";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <section className="main-wrapper">
      <Header />
      <InfoCard cardInfo="About Me" cardText="Who I Am" />
      <Footer />
    </section>
  );
}
