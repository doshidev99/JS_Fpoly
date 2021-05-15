const { Comment } = require('../../models')

module.exports = {
	getComments: async (req, res) => {
		try {
			const books = await Comment.find({});
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

	getComment: async (req, res) => {
		try {
			const books = await Comment.find({ _id: req.params.id });
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

	createComment: async (req, res) => {
		try {
			const { idBook, comment } = req.body;

			let _comment = new Comment({
				_id: idBook,
				comment,
			});

			_comment = await _comment.save();
			res.json({
				status: 200,
				message: 'Create User successfully',
				payload: _comment
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