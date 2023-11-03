// db.js
const mysql = require('mysql2');

//////////////////// CONNECT TO DB + PARAMETERS
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Lokago',
  port: 3306
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

module.exports = db;
