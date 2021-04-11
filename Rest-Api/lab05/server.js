const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blog')

const sequelize = require('./utils/database')

const app = express();
app.use(bodyParser.json());

app.use('/blog', blogRoutes)


sequelize.sync().then(() => {
	app.listen(port = 3000, () => {
		console.log(`server running localhost:${port} `)
	})
}).catch(err => {
	console.log(err, 'error sequelize ')
})

