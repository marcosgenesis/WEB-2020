import React from "react";
import { Card } from "react-bootstrap";
function Enemy({ name, path, arena }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={path} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{arena}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Enemy;
