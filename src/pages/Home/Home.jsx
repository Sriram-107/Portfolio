import React from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Profile from "../../components/Profile/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <section className="main-wrapper">
        <Profile />
        <Footer />
      </section>
    </>
  );
}
