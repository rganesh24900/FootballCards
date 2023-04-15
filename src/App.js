import React from "react";
import './App.css'
import Cards from "./body/Cards";
import Header from "./header/Header";
function App() {
  return (
    <div className="App">
      <div id="app-title">
        <div id='headerFont'>Football Alley</div>
        <div id="tagline">Its more than a game</div>
        <Header />
      </div>
      <Cards />
    </div>
  );
}

export default App;
