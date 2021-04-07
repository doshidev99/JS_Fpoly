const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'dbManager'
});

const connect = function () {
	connection.connect((err) => {
		if (!err) {
			console.log('Database is connected !')
		} else {
			// eslint-disable-next-line no-console
			console.log(err, '<----');
			console.log('Database connected error')
		}
	});
}

const closeDB = function () {
	connection.end(err => {
		if (!err) {
			console.log('closed db')
		}
	})
}

exports.getAllUser = (callbackQuery) => {
	connect();
	connection.query('SELECT * FROM Users', function (err, results, fields) {
		if (!err) {
			callbackQuery(results)
		} else {
			console.log(err)
		}
	})
	// closeDB();

}