const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const subjects = [];

app.get("/subjects", async (request, response) => {
  return response.json(subjects);
});
app.get("/subjects/:id", async (request, response) => {
  const { id } = request.params;
  const subject = subjects.find((subject) => subject.id == id);
  return response.json(subject);
});
app.post("/subjects", async (request, response) => {
  const { name, course, qtdStudents } = request.body;
  const subject = {
    id: uuid(),
    name,
    course,
    qtdStudents,
  };
  subjects.push(subject);
  return response.json(subject);
});

app.put("/subjects/:id", async (request, response) => {
  const { name, course, qtdStudents } = request.body;
  const { id } = request.params;

  const subjectId = subjects.findIndex((subject) => subject.id == id);
  if (subjectId === -1) return response.status(400).send();
  subjects[subjectId] = {
    ...subjects[subjectId],
    name,
    course,
    qtdStudents,
  };
  return response.json(subjects[subjectId]);
});

app.delete("/subjects/:id", async (request, response) => {
  const { id } = request.params;
  const subjectId = subjects.findIndex((subject) => subject.id === id);
  if (subjectId === -1) return response.status(400).send();
  subjects.splice(subjectId, 1);
  return response.status(204).send();
});

module.exports = app;
