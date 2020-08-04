import React from "react";
import Arena from "./components/Arena";
import Hero from "./components/Hero";
import Enemy from "./components/Enemy";

export default function Questao4() {
  return (
    <>
      <Arena arena="Old Trafford">
        <Hero name="Random Hero" path="https://source.unsplash.com/random" />
        <Enemy name="Random Enemy" path="https://source.unsplash.com/random" />
      </Arena>
    </>
  );
}
