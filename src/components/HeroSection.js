import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-01.mp4" autoPlay loop muted />

      <h1>
        RIFT VALLEY
        <br />
        UNIVERSITY
      </h1>
      <h2>GULELE CAMPUS</h2>
      <div className="hero-btns" id="About-us">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large">
          Log in
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}>
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
