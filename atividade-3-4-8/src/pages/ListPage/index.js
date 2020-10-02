import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import api from "../../services/api";
import { ListGroup, Modal, Button } from "react-bootstrap";
function ListPage() {
  const [disciplinas, setDisciplinas] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [studentsAmount, setStudentsAmount] = useState(0);

  useEffect(() => {
    async function carregarDisciplinas() {
      const response = await api.get("/subjects");
      console.log(response.data);
      setDisciplinas(response.data);
    }
    carregarDisciplinas();
  }, []);

  async function handleOpen(disciplina) {
    setOpen(true);
    setId(disciplina._id);
    console.log(disciplina);
    setStudentsAmount(disciplina.studentsAmount);
    setName(disciplina.name);
    setCourse(disciplina.course);
  }
  async function handleEdit(e) {
    e.preventDefault();
    console.log("dasdsa");
    await api.put(`/subjects/${id}`, { name, course, studentsAmount });
    setOpen(false);

    const findIndex = disciplinas.findIndex(
      (disciplina) => disciplina._id === id
    );
    console.log(findIndex);
    const disciplinasEditadas = disciplinas;
    disciplinasEditadas[findIndex] = {
      id,
      name,
      course,
      studentsAmount,
    };
    setDisciplinas(disciplinasEditadas);

    setName("");
    setId(null);
    setCourse("");
    setStudentsAmount(0);
  }

  async function handleDelete(disciplina) {
    await api.delete(`/subjects/${disciplina._id}`);
    const disciplinaUpdated = disciplinas.filter(
      (disciplinaItem) => disciplinaItem._id !== disciplina._id
    );
    setDisciplinas(disciplinaUpdated);
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
