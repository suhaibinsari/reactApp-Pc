import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainSec from "./components/mainSection/MainSec";
import ButtonSection from "./components/buttonSection/ButtonSection";
import Cards from "./components/cards/Cards";
function App() {
  return (
    <div className="body">
      <Header />
      <MainSec />
      <ButtonSection />
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
