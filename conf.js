require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", // address of the server
  user: "root", // username
  password: process.env.MY_PASS,
  database: "mvc",
});

module.exports = connection;
