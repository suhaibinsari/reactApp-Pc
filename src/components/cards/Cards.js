import React from "react";
import "./Cards.css";

function Cards(props) {
  return (
    <div>
      <div className="card">
        <img src={props.image} alt={props.alt} className="img" />
        <p className="descriptionTxtCard">{props.description}</p>
      </div>
    </div>
  );
}

export default Cards;
