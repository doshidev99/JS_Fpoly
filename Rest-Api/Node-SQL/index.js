const express = require('express');

const database = require('./database.js')

const app = express();

app.get('/listUser', (req, res) => {
	database.getAllUser((resultQuery) => {
		res.json(resultQuery);
	})
})

app.get('/insert', (req, res) => {

	const payload = req.query;
	const initialPayload = {
		username: 'truong',
		password: 'truong12',
		address: 'viet nam',
		phone: '090189899',
		email: 'truong@gmail.com',
		brithday: '1990-11-28'
	}

	database.insertData(payload = initialPayload, () => {
		res.json(payload)
	})
})


app.get('/del', (req, res) => {

	database.deleteUser(null, () => {
		res.json(payload)
	})
})


app.get('/checkLogin', (req, res) => {
	const payload = req.query;
	database.checkLogin(payload, (result) => {
		res.json(result)
	})
})



app.listen(3000);