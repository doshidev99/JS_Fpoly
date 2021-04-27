const { Book } = require('../../models')

module.exports = {
	getBooks: async (req, res) => {
		try {
			const books = await Book.find();
			res.json({
				status: 200,
				message: 'Success',
				payload: books,
			});
		} catch (error) {
			res.json({
				status: 500,
				message: 'Internal not found',
				payload: error,
			});
		}
	},

	getBook: async (req, res) => {
		try {
			const { id } = req.params;

			const books = await Book.find({ _id: id });
			res.json({
				status: 200,
				message: 'Success',
				payload: books,
			});
		} catch (error) {
			res.json({
				status: 500,
				message: 'Internal not found',
				payload: error,
			});
		}
	},

	createBook: async (req, res) => {
		try {
			const { title, author, year, isbn, review_count, average_score } = req.body;
			let book = new Book({
				title, author, year, isbn, review_count, average_score
			});

			book = await book.save();
			res.json({
				status: 200,
				message: 'Create User successfully',
				payload: book
			})

		} catch (error) {
			res.json({
				status: 500,
				message: 'Internal not found!',
				payload: error,
			});
		}
	},


	deleteBook: async (req, res) => {
		try {
			const { id } = req.params;
			const book = await Book.remove({ _id: id })
			res.json({
				status: 201,
				message: 'Delete User successfully',
				payload: book,
			})

		} catch (error) {
			res.json({
				status: 500,
				message: 'Internal not found!',
				payload: error,
			});
		}
	},

	updateBook: async (req, res) => {
		try {
			const { id } = req.params;
			const { password } = req.body;

			await Book.findByIdAndUpdate({
				_id: id
			}, {
				$set: {
					password
				}
			})

			res.json({
				status: 200,
				message: 'Update User successfully',
			})

		} catch (error) {
			res.json({
				status: 500,
				message: 'Internal not found!',
				payload: error,
			});
		}
	},

	searchBook: async (req, res) => {
		try {
			const entries = Object.keys(req.query)
			let query = Book.find();

			for (let i = 0; i < entries.length; i++) {
				let keyTemp = entries[i];
				// eslint-disable-next-line no-console
				query.where({ [keyTemp]: { $regex: req.query[keyTemp], $options: 'i' } });
			}

			let payload = await query.exec();

			res.json({
				status: 200, payload,
				message: 'Search....',
			})

		} catch (error) {
			res.json({
				status: 500,
				message: 'Internal not found!',
				payload: error,
			});
		}
	},

}