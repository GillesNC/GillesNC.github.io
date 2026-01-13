import React from "react";
import "../css/homepage.css";
import About from "../components/about.jsx";
import Hero from "../components/Hero.jsx";
import Panda from "../assets/panda.jpg";

function Homepage() {
  return (
    <main className="Homepage">
      <Hero />
      <section className="about_me_section">
        <h2>Ensemble, bâtissons l'avenir de votre projet digital</h2>
        <About title={"Un digital natif"} description={"Chef de projet web et Développeur web situé à Lille en France, spécialisé dans la création d'identité visuelle et de site web uniques et innovants."} img={Panda} buttonText={"Découvrir mon parcours"} buttonLink={"./a_propos.html"} />
      </section>
    </main>
  );
}
export default Homepage;