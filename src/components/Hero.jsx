import React from "react";
import heroImage from "../assets/hero.jpg";

//------CREATION ET AFFICHAGE DU HERO-----//
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content container">
        <h1>
          Un simple
          <span>
            <br />
            Passionné du web
          </span>{" "}
        </h1>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero Image" />
      </div>
    </section>
  );
}
export default Hero;