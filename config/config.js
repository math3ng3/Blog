const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@EWK0129#",
  database: "blogs",
});

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the database:", error);
  }
  console.log("Connected to the database");
});

module.exports = connection;
