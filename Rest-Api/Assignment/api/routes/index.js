const express = require('express');
const axios = require('axios').default;
const router = express.Router();

router.get('/', (req, res) => {

	axios.get('localhost:3000/api/book')
		.then(function (response) {
			// handle success
			console.log(response.json());
		})
		.catch(function (error) {
			// eslint-disable-next-line no-console
			console.log(error, '<----');
		})
		.then(function () {
			res.render('client/page', {
				books: []
				// posts: postsTao, // Truyền biến posts từ Server xuống view qua hàm render
			});
		});


});






module.exports = router;