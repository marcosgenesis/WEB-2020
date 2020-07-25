import React from "react";
import Questao1 from "./components/questao1/Questao1";
import Questao2 from "./components/questao2/Questao2";
import Questao3 from "./components/questao3/Questao3";
import Questao4 from "./components/questao4/Questao4";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Questao1 />
      <Questao2 />
      <Questao3 />
      <Questao4 />
    </div>
  );
}

export default App;
