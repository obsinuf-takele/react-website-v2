import React from "react";
import "../../App.css";
import Cards from "../About";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Container from "../Container";
import Container2 from "./Container2";

function Home() {
  return (
    <>
      <HeroSection />
      <Container />
      <Container2 />
      <Footer />
    </>
  );
}

export default Home;
