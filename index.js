const express = require("express");

const server = express();

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
server.get("/users/:id", (req, res) => {
  const { id } = req.params;

  return res.send({ message: `Buscando o usuário ${id}` });
});

server.listen(3000);
