import React from "react";
import Cards from "./Cards";
import p1 from "../../assets/4dots.png";
import p2 from "../../assets/blueDot.png";
import p3 from "../../assets/download.png";
import p4 from "../../assets/ok.png";
import p5 from "../../assets/render.png";

function CardsDetails() {
  return (
    <div className="cardHead grid-container ">
      <Cards image={p1} description="dots screen" />
      <Cards image={p2} description="How are you" />
      <Cards image={p3} description="Loading Screen" />
      <Cards image={p4} description="dots screen" />
      <Cards image={p5} description="Loading " />
      <Cards image={p1} description="Delete" />
    </div>
  );
}

export default CardsDetails;
