const express = require('express');

const database = require('./database.js')

const app = express();

app.get('/listUser', (req, res) => {
	database.getAllUser((resultQuery) => {
		res.json(resultQuery);
	})
})

app.listen(3000);