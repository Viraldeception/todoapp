//importabamos express
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const Users = require("./models/users.model");

//crear una instancia de express
const app = express();

app.use(express.json());

const PORT = 8000;
//localhost:8000/

//probando la conexión a la base de datos
db.authenticate()
  .then(() => console.log("Autenticación existosa"))
  .catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra db
db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch(() => console.log(error));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

//Definir las rutas de nuestros endpoints (de ahora en adelante ep)
// todas las consultas de usuarios
//localhost:8000/users ----> todo para usuarios
//localhost:8000/todos ----> todo para tareas

//GET A // USERS

app.get("/users", async (req, res) => {
  try {
    //vamos a obtener el resultado de consultar a todos los usuarios de la base de datos
    const result = await Users.findAll(); // SELECT * FROM USERS
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
});

//Obtener su usuario sabiendo su id
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//Obtener un usuario  por username
app.get("/users/username/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

// Crear un usuario
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Vamos a terminar los modelos => rapido
// Crear las relaciones entre los modelos
// Les voy a enseñar a insertar información desde este mismo proyectos

//Vamos a estar haciendo los endpoints y consultas

// users

//Vamos a insertar información en nuestra base de datos
//Desde nuestro proyecto en Node

//Consultar la información con endpoints

// seed
