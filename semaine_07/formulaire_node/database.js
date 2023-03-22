// On créer la connection à la base de données

const MYSQL = require('mysql');

const CONNECTION = MYSQL.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'NodeForm'
});

CONNECTION.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server!');
});

// On exporte la connection comme un module
module.exports = CONNECTION;