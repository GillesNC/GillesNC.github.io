import React from "react";
import logo from "../assets/logo.svg";

//------CREATION ET AFFICHAGE DU HEADER-----//
function Header() {
  return (
    <div className="container main_header">
      <header>
        <div className="logo">
          <a href="./index.html">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <input type="checkbox" id="menu-checkbox" />
        <label htmlFor="menu-checkbox" className="menu_toggle">
          <i className="fa fa-bars" />
          <i className="fa fa-times" />
        </label>
        <nav>
          <ul>
            <li>
              <a href="./a_propos.html">A Propos</a>
            </li>
            <li>
              <a href="./archive_projet.html">Mes Projets</a>
            </li>
            <li>
              <a href="./contact.html">
                <button className="btn_fill">Me contacter</button>
              </a>
            </li>
          </ul>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/gilles-ling/">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

//------EXPORT DE L'APP-----//
export default Header;
