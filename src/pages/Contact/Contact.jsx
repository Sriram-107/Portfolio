import React from "react";
import InfoCard from "../../components/InfoCard/InfoCard";
import Footer from "../../components/Footer/Footer";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Header from "../../components/Header/Header";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="main-wrapper">
      <Header />
      <InfoCard cardInfo="Contact" cardText="Let's Talk" />
      <DetailsCard />
      <Footer />
    </section>
  );
}
