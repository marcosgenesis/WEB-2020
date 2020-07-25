import React from "react";

function Info(props) {
  return (
    <ul
      style={{
        fontFamily: "Arial",
        listStyle: "none",
        width: "360px",
        background: "#eee",
        borderRadius: "4px",
      }}
    >
      <li>
        <h2>Nome</h2>
        <p>{props.name}</p>
      </li>
      <li>
        <h2>Curso</h2>
        <p>{props.course}</p>
      </li>
      <li>
        <h2>Cidade de Origem</h2>
        <p>{props.city}</p>
      </li>
    </ul>
  );
}

export default Info;
