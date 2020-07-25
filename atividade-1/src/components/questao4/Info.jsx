import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
class Info extends React.Component {
  render() {
    return (
      <Card
        style={{
          fontFamily: "Arial",
          listStyle: "none",
          width: "360px",
          background: "#eee",
          borderRadius: "4px",
        }}
      >
        <ListGroup>
          <ListGroupItem active>Nome</ListGroupItem>
          <ListGroupItem>{this.props.name}</ListGroupItem>
          <ListGroupItem active>Curso</ListGroupItem>
          <ListGroupItem>{this.props.course}</ListGroupItem>
          <ListGroupItem active>Cidade de Origem</ListGroupItem>
          <ListGroupItem>{this.props.city}</ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default Info;
