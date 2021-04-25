const { User } = require('../../models')

module.exports = {
	getUsers: async (req, res) => {
		try {
			const users = await User.find();
			res.json({
				status: 200,
				message: 'Success',
				payload: users,
			});
		} catch (error) {
			res.json({
				status: 500,
				message: 'Internal not found',
				payload: error,
			});
		}
	},

	createUser: async (req, res) => {
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