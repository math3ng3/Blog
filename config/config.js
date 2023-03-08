const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Art3mis1985",
  database: "blogs",
});

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the database:", error);
  }
  console.log("Connected to the database");
});

module.exports = connection;
