const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')

const authRoute = require('./modules/auth/route')
const bookRoute = require('./modules/books/route')
const commentRoute = require('./modules/comment/route')
const app = express();

const corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions))


// Lấy đối tượng router từ file ./routes/index.js
const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/manageBooks', { useNewUrlParser: true });

// Setting static folder
app.use('/public', express.static('./public'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set("view engine", "ejs")


app.use(routes); // Áp dụng routes đã import vào dự án

// Routes

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Welcome to Project with Nodejs Express and MongoDB',
	})
})


app.use('/api/auth', authRoute)
app.use('/api/book', bookRoute)
app.use('/api/comment', commentRoute)

app.listen(3000, () => {
	console.log('> Running');
})