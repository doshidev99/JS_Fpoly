const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./database')

const app = express();

const userBlog = require('./routes/user')

app.use(bodyParser.json());

app.use('/user', userBlog)

sequelize.sync().then(() => {
	app.listen(port = 3001, () => {
		console.log(`server running localhost:${port} `)
	})
}).catch(err => {
	console.log(err, 'error sequelize ')
})