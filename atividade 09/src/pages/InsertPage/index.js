import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import FirebaseContext from "../../utils/FirebaseContext";

function InsertPage() {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => <Insert firebase={firebase}></Insert>}
    </FirebaseContext.Consumer>
  );
}
function Insert(props) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [studentsAmount, setStudentsAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, course, studentsAmount });
    props.firebase
      .getFirestore()
      .collection("disciplinas")
      .add({
        nome: name,
        curso: course,
        qtdAlunos: studentsAmount,
      })
      .then(() => alert("disciplina adicionada"));
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
        <Link to="/">voltar pra home</Link>
      </form>
    </div>
  );
}

export default InsertPage;
