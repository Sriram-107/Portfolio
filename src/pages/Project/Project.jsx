import React from "react";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard/InfoCard";
import Footer from "../../components/Footer/Footer";
export default function Project() {
  return (
    <section className="main-wrapper">
      <Header />
      <InfoCard cardInfo="Recent Works" cardText="23 - Presentk" />
      <Footer />
    </section>
  );
}
