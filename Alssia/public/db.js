//connecter la base de donnée

const mysql = require('mysql2');

port_cyril = 3306
port_ali = 3307

//////////////////// CONNECT TO DB + PARAMETERS
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Lokago',
    port: port_ali
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = db;