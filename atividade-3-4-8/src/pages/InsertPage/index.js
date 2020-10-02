import React, { useState } from "react";
import api from "../../services/api";
import "./styles.css";

function InsertPage() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [studentsAmount, setStudentsAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await api.post("/subjects", { name, course, studentsAmount });
    alert("disciplina adicionada");
  }

  return (
    <div className="content">
      <h4>Preencha os dados para adicionar uma nova disciplina</h4>
      <form className="form">
        <input
          type="text"
          placeholder="name"
          className="input"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="course"
          className="input"
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          type="text"
          placeholder="qtdStudents máxima de alunos"
          className="input"
          onChange={(e) => setStudentsAmount(e.target.value)}
        />
        <button className="button" onClick={(e) => handleSubmit(e)}>
          Adicionar disciplina
        </button>
      </form>
    </div>
  );
}

export default InsertPage;
