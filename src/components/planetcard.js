import React from "react";
import "./planetcard.css";

export default function PlanetCard(props) {
  return (
    <div className="travel__planetcard">
      <div className="travel__planetcard-planet">
        <div className="travel__planetcard-planet-title">{props.name}</div>
        <img
          src={props.img}
          alt="planet"
          className="travel__planetcard-planet-img"
        />
        <div className="travel__planetcard-planet-desc">{props.desc}</div>
        <div className="travel__planetcard-planet-book">Book Now</div>
      </div>
    </div>
  );
}
