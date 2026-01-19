import React from "react";
import "../css/homepage.css";
import About from "../components/About.jsx";
import Hero from "../components/Hero.jsx";
import ContactBlock from "../components/ContactBlock.jsx";
import Panda from "../assets/panda.jpg";
import CardService from "../components/CardService.jsx";
import Service1 from "../assets/services1.jpg";
import Service2 from "../assets/services2.jpg";
import Service3 from "../assets/services3.jpg";
import imgExplorer from "../assets/project1.jpg";

function Homepage() {
  return (
    <main className="Homepage">
      <Hero />
      <section className="about_me_section">
        <h2>Ensemble, bâtissons l'avenir de votre projet digital</h2>
        <About
          title={"Un digital natif"}
          description={
            "Chef de projet web et Développeur web situé à Lille en France, spécialisé dans la création d'identité visuelle et de site web uniques et innovants."
          }
          img={Panda}
          buttonText={"Découvrir mon parcours"}
          buttonLink={"./a_propos.html"}
        />
      </section>

      {/* SECTION SERVICES */}
      <section className="main_services">
        <h2>
          Des services sur-mesure pour propulser votre entreprise dans l'ère du
          numérique
        </h2>
        <div className="services_container container">
          <CardService
            img={Service1}
            title={"Stratégie digitale"}
            description={
              "Boostez votre présence en ligne avec une stratégie digitale personnalisée, conçue pour maximiser votre impact et atteindre vos objectifs."
            }
          />
          <CardService
            img={Service2}
            title={"Design UX/UI"}
            description={
              "Créez une expérience utilisateur inoubliable avec des designs modernes et intuitifs, adaptés à vos besoins spécifiques."
            }
          />
          <CardService
            img={Service3}
            title={"Développement web"}
            description={
              "Développez des sites web performants et adaptés à vos besoins, alliant esthétique et fonctionnalité pour un impact maximal."
            }
          />
        </div>
      </section>

      {/* SECTION EXPLORER */}
      <section className="project container">
        <div className="carousel_projects">
          <img src={imgExplorer} alt="Project 1" />
        </div>
        <div className="project_description">
          <h2>Explorez mon portfolio pour découvrir mes réalisations</h2>
          <p>
            Découvrez l’ensemble de mes projets personnels et professionnels que
            j’ai pu réaliser durant ma carrière. La réalisation de mes projets
            aborde une approche fortement centrée sur l’expérience utilisateur
            et la performance tout en offrant un style moderne et épuré.
          </p>
          <div className="project_button">
            <a href="./a_propos.html">
              <button className="btn_outline">Découvrir</button>
            </a>
            <a href="./contact.html">
              <button className="btn_fill">Me contacter</button>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION METHODOLOGY */}
      <section className="methodology container">
        <h2>Une méthodologie en 4 étapes</h2>
        <div>
          <div className="methodology_step">
            <span>01</span>
            <h3>Echanger</h3>
            <p>
              Comprendre vos besoins et objectifs pour définir une stratégie
              digitale efficace.
            </p>
          </div>
          <div className="methodology_step">
            <span>02</span>
            <h3>Réfléchir</h3>
            <p>
              Élaborer un plan d'action détaillé pour garantir le succès de
              votre projet.
            </p>
          </div>
          <div className="methodology_step">
            <span>03</span>
            <h3>Construire</h3>
            <p>
              Créer des solutions digitales innovantes et performantes, adaptées
              à votre entreprise.
            </p>
          </div>
          <div className="methodology_step">
            <span>04</span>
            <h3>Diffuser</h3>
            <p>
              Assurer un déploiement réussi et un suivi continu pour optimiser
              les résultats.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION ECHANGE */}
      <ContactBlock />
    </main>
  );
}
export default Homepage;
