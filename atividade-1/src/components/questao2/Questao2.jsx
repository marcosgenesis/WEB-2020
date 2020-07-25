import React from "react";

class Questao2 extends React.Component {
  render() {
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
          <p>Marcos</p>
        </li>
        <li>
          <h2>Curso</h2>
          <p>Engenharia de software</p>
        </li>
        <li>
          <h2>Cidade de Origem</h2>
          <p>Horizonte-ce</p>
        </li>
      </ul>
    );
  }
}

export default Questao2;
