import React from "react";
function Hero({ name }) {
  return (
    <div>
      <p>{name}</p>
      <img
        src="https://source.unsplash.com/random"
        alt=""
        style={{ width: "300px" }}
      />
    </div>
  );
}

function Enemy({ name }) {
  return (
    <div>
      <p>{name}</p>
      <img
        src="https://source.unsplash.com/random"
        alt=""
        style={{ width: "300px" }}
      />
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
      <Hero name="Hero"></Hero>
      <Enemy name="Enemy"></Enemy>
    </div>
  );
}
export default Arena;
