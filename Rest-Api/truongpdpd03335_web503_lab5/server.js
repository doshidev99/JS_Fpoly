const express = require('express');
const cors = require('cors')

const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blog')

const sequelize = require('./utils/database')

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.options('*', cors())


app.use('/blog', blogRoutes)


sequelize.sync().then(() => {
	app.listen(port = 3001, () => {
		console.log(`server running localhost:${port} `)
	})
}).catch(err => {
	console.log(err, 'error sequelize ')
})

