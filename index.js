const express = require("express");

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /user/1
// Request body = {"name": Edvaldo, "email": "edvaldo@email.com"}

// Simples
// server.get("/teste", (req, res) => {
//   return res.send({ message: "Hello World" });
// });

// QUery params (http://localhost:3000/teste?nome=Edvaldo)
// server.get("/teste", (req, res) => {
//   const nome = req.query.nome;

//   return res.send({ message: `Hello ${nome}` });
// });

// Route param (localhost:3000/users/123)
// server.get("/users/:id", (req, res) => {
//   const { id } = req.params;

//   return res.send({ message: `Buscando o usuário ${id}` });
// });

const users = ["Edvaldo", "Maria", "Fernando"];

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return req.json(users);
});

server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users.splice(index, 1);

  return res.send();
});

server.listen(3000);
