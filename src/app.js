//importabamos express
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");

//crear una instancia de express
const app = express();
const PORT = 8000;
//localhost:8000/

//probando la conexión a la base de datos
db.authenticate()
  .then(() => console.log("Autenticación existosa"))
  .catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra db
db.sync({ alter: true })
  .then(() => console.log("Base de datos sincronizada"))
  .catch(() => console.log(error));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
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