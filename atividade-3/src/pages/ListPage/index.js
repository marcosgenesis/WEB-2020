import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ListGroup } from "react-bootstrap";
function ListPage() {
  const [disciplinas, setDisciplinas] = useState([]);
  useEffect(() => {
    async function carregarDisciplinas() {
      const response = await api.get("/disciplinas");
      setDisciplinas(response.data);
      console.log(response.data);
    }
    carregarDisciplinas();
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <ListGroup variant="flush">
        {disciplinas.map((disciplina) => (
          <ListGroup.Item>
            <h4>{disciplina.nome}</h4>
            <p>{disciplina.curso}</p>
            <p>Quantidade de alunos: {disciplina.quantidade}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ListPage;
