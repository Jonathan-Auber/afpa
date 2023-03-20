const MYSQL = require('mysql');

const DB = MYSQL.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'countries',
});

DB.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL server!");
});