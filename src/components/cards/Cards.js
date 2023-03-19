import React from "react";
import "./Cards.css";
import c1 from "../../assets/c1.png";

function Cards() {
  return (
    <div className="cardHead">
      <div className="card-container">
        <div className="card">
          <img src={c1} alt="Card Image" />
          <h3>Card Title 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card ">
          <img src={c1} alt="Card Image" />
          <h3>Card Title 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <img src={c1} alt="Card Image" />
          <h3>Card Title 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
