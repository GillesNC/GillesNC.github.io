import React from "react";
import "../css/bloc_contact.css";

function ContactBlock() {
  return (
    <section className="contact_me">
      <div>
        <h2>Échangez avec moi, et construisons ensemble votre projet !</h2>
        <p>
          Vous souhaitez des questions ? Parlez-nous de votre besoin et nous
          définirons ensemble les axes la plus adaptée pour atteindre vos
          objectifs.
        </p>
      </div>
      <a href="./contact.html">
        <button className="btn_outline">Me contacter</button>
      </a>
    </section>
  );
}
export default ContactBlock;
