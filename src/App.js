import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainSec from "./components/mainSection/MainSec";
import ButtonSection from "./components/buttonSection/ButtonSection";
import CardsDetails from "./components/cards/CardsDetails";
function App() {
  return (
    <div className="body">
      <Header />
      <MainSec />
      <ButtonSection />
      <CardsDetails />
    </div>
  );
}

export default App;
