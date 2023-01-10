const db = require("../utils/database");
const Users = require("../models/users.model");

const users = [
  {
    username: "Ruben",
    email: "ing.leon99@gmail.com",
    password: "1234",
  },
  {
    username: "Alex",
    email: "ing.leon25@gmail.com",
    password: "1234",
  },
  {
    username: "Maya",
    email: "ing.leon20@gmail.com",
    password: "1234",
  },
];

const todos = [
  { title: "Tarea 1", description: "Descripcion para 1", userID: 1 },
  { title: "Tarea 2", description: "Descripcion para 2", userID: 1 },
  { title: "Tarea Imposible", userID: 2 },
  { title: "Dormir", description: "Por que node no me deja", userID: 3 },
];

// const categories = [];

// const todosCategories = [];

//Create
//findOne, findAll, findByPK
//update
//destroy

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con el sembradio malicioso");
    users.forEach((user) => Users.create(user));
  })
  .catch((error) => console.log(error));
