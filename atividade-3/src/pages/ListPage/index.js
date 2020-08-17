import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import api from "../../services/api";
import { ListGroup, Modal, Button } from "react-bootstrap";
function ListPage() {
  const [disciplinas, setDisciplinas] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [qtdAlunos, setQtdAlunos] = useState(0);

  useEffect(() => {
    async function carregarDisciplinas() {
      const response = await api.get("/disciplinas");
      setDisciplinas(response.data);
      console.log(response.data);
    }
    carregarDisciplinas();
  }, []);

  async function handleOpen(disciplina) {
    setOpen(true);
    setId(disciplina.id);
    setQtdAlunos(disciplina.quantidade);
    setNome(disciplina.nome);
    setCurso(disciplina.curso);
  }
  async function handleEdit() {
    await api.put(`/disciplinas/${id}`, { nome, curso, quantidade: qtdAlunos });
    setOpen(false);

    const findIndex = disciplinas.findIndex(
      (disciplina) => disciplina.id === id
    );
    const disciplinasEditadas = disciplinas;
    disciplinasEditadas[findIndex] = { id, nome, curso, quantidade: qtdAlunos };
    console.log(disciplinasEditadas);
    setDisciplinas(disciplinasEditadas);

    setNome("");
    setId(null);
    setCurso("");
    setQtdAlunos("");
  }

  async function handleDelete(disciplina) {
    await api.delete(`/disciplinas/${disciplina.id}`);
    const disciplinaUpdated = disciplinas.filter(
      (disciplinaItem) => disciplinaItem.id !== disciplina.id
    );
    setDisciplinas(disciplinaUpdated);
  }

  return (
    <div style={{ width: "100%" }}>
      <ListGroup variant="flush">
        {disciplinas.map((disciplina) => (
          <>
            <ListGroup.Item>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h4>{disciplina.nome}</h4>
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
              <p>{disciplina.curso}</p>
              <p>Quantidade de alunos: {disciplina.quantidade}</p>
            </ListGroup.Item>
          </>
        ))}
      </ListGroup>
      {open && (
        <Modal.Dialog>
          <Modal.Header closeButton={false}>
            <Modal.Title>Editar </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <input
                type="text"
                placeholder="Nome"
                defaultValue={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="text"
                placeholder="Curso"
                defaultValue={curso}
                onChange={(e) => setCurso(e.target.value)}
              />
              <input
                type="text"
                placeholder="Quantidade de alunos"
                defaultValue={qtdAlunos}
                onChange={(e) => setQtdAlunos(e.target.value)}
              />
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Salvar Mudanças
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </div>
  );
}

export default ListPage;
