import React from "react";
import "../css/homepage.css";

function CardService({ img, title, description }) {
  return (
    <div className="services_card">
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default CardService;
