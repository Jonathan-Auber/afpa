const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
    port: 8889,
	database : 'countries',
	user : 'root',
	password : 'root'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;