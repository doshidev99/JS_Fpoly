const { User } = require('../../models')

module.exports = {
	login: async (req, res) => {
		try {
			const { username, password } = req.body;
			const users = await User.find({ username, password });
			res.json({
				status: 200,
				message: 'Login success',
				payload: users,
				token: 'hello'
			});
		} catch (error) {
			res.json({
				status: 500,
				message: 'Internal not found',
				payload: error,
			});
		}
	},

	register: async (req, res) => {
		try {
			const { username, password } = req.body;
			let user = new User({
				username, password
			});

			user = await user.save();
			res.json({
				status: 200,
				message: 'Create User successfully',
				payload: user
			})

		} catch (error) {
			res.json({
				status: 500,
				message: 'Internal not found!',
				payload: error,
			});
		}
	},


	deleteUser: async (req, res) => {
		try {
			const { id } = req.params;
			await User.findByIdAndDelete({ _id: id })

			res.json({
				status: 201,
				message: 'Delete User successfully',
			})

		} catch (error) {
			res.json({
				status: 500,
				message: 'Internal not found!',
				payload: error,
			});
		}
	},

	updateUser: async (req, res) => {
		try {
			const { id } = req.params;
			const { password } = req.body;

			await User.findByIdAndUpdate({
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

}