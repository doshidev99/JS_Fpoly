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


exports.insertData = (payload, callbackInsert) => {
	connect();
	const { username, password, address, phone, email, brithday } = payload
	const sqlQuery =
		`INSERT INTO Users (username, password, address, phone, email, brithday) VALUES("${username}", "${password}", "${address}", "${phone}", "${email}", "${brithday}")`

	console.log(sqlQuery)
	connection.query(sqlQuery, (err, results) => {
		if (!err) {
			callbackInsert(results)
		} else {
			console.log(err)
		}
	})
}


exports.deleteUser = (payload, callBackLogin) => {
	connect();
	const sqlQuery = `DELETE FROM Users WHERE Users.username = '${payload.username}'`

	connection.query(sqlQuery, (err, results) => {
		if (!err) {
			callBackDel(results)
		} else {
			console.log(err)
		}
	})
}

exports.checkLogin = (payload, callbackLogin) => {
	const { username, password } = payload
	connect();
	
	const sqlQuery = `SELECT * FROM users where username="${username}"`;
	connection.query(sqlQuery, (err, results) => {
		if (!err) {
			if (results[0].password === password) {
				callbackLogin(results)
			}
		} else {
			console.log(err)
		}
	})
};