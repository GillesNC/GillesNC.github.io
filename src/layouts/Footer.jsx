import React from "react";
import logo from "../assets/logo2.svg";

//------CREATION ET AFFICHAGE DU FOOTER-----//
function Footer() {
  return (
    <footer>
      <div className="container container_footer">
        <div className="logoFooter">
          <a href="./index.html">
            <img src={logo} alt="logoFooter" />
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="a_propos.html">A propos</a>
            </li>
            <li>
              <a href="archive_projet.html">Mes projets</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/gilles-ling/">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright container">
        <p>© 2023 Le Cagou du web. Tous droits réservés.</p>
        <div>
          <a href="">Mentions légales</a>
          <a href="">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;