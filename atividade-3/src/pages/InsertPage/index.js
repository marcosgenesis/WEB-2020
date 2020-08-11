import React, { useState } from "react";
import api from "../../services/api";
import "./styles.css";

function InsertPage() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [quantidade, setQuantidade] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await api.post("/disciplinas", { nome, curso, quantidade });
    alert("disciplina adicionada");
  }

  return (
    <div className="content">
      <h4>Preencha os dados para adicionar uma nova disciplina</h4>
      <form className="form">
        <input
          type="text"
          placeholder="Nome"
          className="input"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Curso"
          className="input"
          onChange={(e) => setCurso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quantidade máxima de alunos"
          className="input"
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <button className="button" onClick={(e) => handleSubmit(e)}>
          Adicionar disciplina
        </button>
      </form>
    </div>
  );
}

export default InsertPage;
