import React from "react";
import "../css/about.css";

function About({title, description, img, buttonText, buttonLink}) {
  return (
    <div className="about_me">
      <img src={img} alt="panda" />
      <div className="about_me_description">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={buttonLink}>
          <button className="btn_outline">{buttonText}</button>
        </a>
      </div>
    </div>
  );
}
export default About;