import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import MainSec from "./components/mainSection/MainSec";
import ButtonSection from "./components/buttonSection/ButtonSection";
import Cards from "./components/cards/Cards";
function App() {
  return (
    <>
      <Header />
      <MainSec />
      <ButtonSection />
      <Cards />
      <Cards />
    </>
  );
}

export default App;
