import React from "react";
import constants from "./constants";

function Hero({ name, path }) {
  return (
    <div>
      <p>{name}</p>
      <img src={path} alt="" style={{ width: "300px" }} />
    </div>
  );
}

function Enemy({ name, path }) {
  return (
    <div>
      <p>{name}</p>
      <img src={path} alt="" style={{ width: "300px" }} />
    </div>
  );
}

function Arena() {
  return (
    <div
      style={{
        display: "flex",
        width: "800px",
        justifyContent: "space-between",
      }}
    >
      <h3>Questao 2</h3>
      <Hero name="Hero" path={constants.ramdomImage}></Hero>
      <Enemy name="Enemy" path={constants.ramdomImage}></Enemy>
    </div>
  );
}
export { Arena };
