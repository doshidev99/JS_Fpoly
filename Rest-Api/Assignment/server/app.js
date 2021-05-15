const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')

const userRoute = require('./routes/user')
const bookRoute = require('./routes/book')

const app = express()
app.use(bodyParser.json())
/* 
	body-parser: Để giải quyết những HTTP POST request
	trong express.js từ version 4 trở lên, chúng ta cần
	mudule middleware body-parser. Body parser trích xuất toàn bộ
	phần body của request gửi đến và hiển thị chúng trên req.body
*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true })
	.then(() => {
		console.log('Database connected')
	})
	.catch((error) => {
		console.log('Error connecting to database', error)
	})


app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Welcome to Project with Nodejs Express and MongoDB',
	})
})

app.use('/api/user', userRoute)
app.use('/api/book', bookRoute)

app.listen(3000, () => {
	console.log('Server up')
})