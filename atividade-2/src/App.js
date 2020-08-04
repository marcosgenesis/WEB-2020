import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Arena from "./components/questao1/";
import { Arena as Questao2 } from "./components/questao2/";
import World from "./components/questao3/World";
import Questao4 from "./components/questao4/";

function App() {
  return (
    <div>
      <Arena></Arena>
      <Questao2></Questao2>
      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>
      <Questao4 arena="opa" />
    </div>
  );
}

export default App;
