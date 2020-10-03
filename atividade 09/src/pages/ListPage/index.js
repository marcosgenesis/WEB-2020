import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import api from "../../services/api";
import { ListGroup, Modal, Button } from "react-bootstrap";
import FirebaseContext from "../../utils/FirebaseContext";

function ListPage() {
  return (
    <FirebaseContext.Consumer>
      {(firebase) => <List firebase={firebase}></List>}
    </FirebaseContext.Consumer>
  );
}

function List(props) {
  const [disciplinas, setDisciplinas] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [studentsAmount, setStudentsAmount] = useState(0);

  useEffect(() => {
    let ref;
    ref = props.firebase.getFirestore().collection("disciplinas");
    ref.onSnapshot(alimentarDisciplinas.bind(this));
  }, [props.firebase]);
  function alimentarDisciplinas(query) {
    let todasDisciplinas = [];
    query.forEach((doc) => {
      const { nome, curso, qtdAlunos } = doc.data();
      todasDisciplinas.push({
        _id: doc.id,
        name: nome,
        course: curso,
        studentsAmount: qtdAlunos,
      });
    });
    setDisciplinas(todasDisciplinas);
  }

  async function handleOpen(disciplina) {
    setOpen(true);
    setId(disciplina._id);
    setStudentsAmount(disciplina.studentsAmount);
    setName(disciplina.name);
    setCourse(disciplina.course);
  }
  async function handleEdit(e) {
    e.preventDefault();
    props.firebase.getFirestore().collection("disciplinas").doc(id).update({
      nome: name,
      curso: course,
      qtdAlunos: studentsAmount,
    });
    setName("");
    setId(null);
    setCourse("");
    setStudentsAmount(0);
    setOpen(false);
  }

  async function handleDelete(disciplina) {
    props.firebase
      .getFirestore()
      .collection("disciplinas")
      .doc(disciplina._id)
      .delete();
  }

  return (
    <div style={{ width: "100%" }}>
      <ListGroup variant="flush">
        {disciplinas.map((disciplina) => (
          <ListGroup.Item key={disciplina._id}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h4>{disciplina.name}</h4>
              <FiEdit
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleOpen(disciplina)}
              />
              <FiTrash
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleDelete(disciplina)}
              />
            </span>
            <p>{disciplina.course}</p>
            <p>Quantidade de alunos: {disciplina.studentsAmount}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {open && (
        <Modal.Dialog>
          <Modal.Header closeButton={false}>
            <Modal.Title>Editar </Modal.Title>
          </Modal.Header>
          <form onSubmit={handleEdit}>
            <Modal.Body>
              <input
                type="text"
                placeholder="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="course"
                defaultValue={course}
                onChange={(e) => setCourse(e.target.value)}
              />
              <input
                type="text"
                placeholder="Quantidade de alunos"
                defaultValue={studentsAmount}
                onChange={(e) => setStudentsAmount(e.target.value)}
              />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Fechar
              </Button>
              <Button variant="primary" type="submit">
                Salvar Mudanças
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Dialog>
      )}
    </div>
  );
}

export default ListPage;
