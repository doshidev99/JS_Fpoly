const Users = require('../models/Users')


exports.getAll = (req, res, next) => {
	Users.findAll()
		.then(user =>
			res.status(200)
				.json({ message: `Fetched posts successfully.`, user })
		)
		.catch(err => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err)
		})
}


exports.register = (req, res, next) => {
	const User = new Users({
		title: "Memory",
		author: "Doug Lloyd",
		year: 2020,
		isbn: "1632168146",
		review_count: 28,
		average_score: 5.0
	})

	User.save()
		.then(u => {
			res.status(200)
				.json({ message: `Fetched posts successfully.`, u })
		}
		)
		.catch(err => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err)
		})
}
