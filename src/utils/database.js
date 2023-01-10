const { Sequelize } = require("sequelize");

// crear una instancia con parametros de incorporacion de nuesta base de datos
//Un obejto de configuracion => credenciales de base de datos

const db = new Sequelize({
  database: "todoapp",
  username: "postgres",
  host: "localhost",
  port: "5432",
  password: "root",
  dialect: "postgres", // la base de datos que estamos usando
});

module.exports = db;
