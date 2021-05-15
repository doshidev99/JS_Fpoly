const mongoose = require('mongoose');
const UserModel = require('../models/User.md');

exports.getAll = (req, res) => {
	return UserModel.find()
		.then((u) => {
			return res.status(200).json({
				success: true,
				message: 'Get user successfully',
				user: u
			})
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				success: false,
				message: 'Server error. Please try again.',
				error: error.message,
			});
		});
}

exports.createUser = (req, res) => {
	const user = new UserModel({
		_id: mongoose.Types.ObjectId(),
		username: req.body.username,
		password: req.body.password,
	});

	return user
		.save()
		.then((u) => {
			return res.status(201).json({
				success: true,
				message: 'New user created successfully',
				user: u
			})
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				success: false,
				message: 'Server error. Please try again.',
				error: error.message,
			});
		});
}


exports.updateUser = (req, res) => {
	const { id } = req.params;

	const updateObject = req.body;
	return UserModel.update({ _id: id }, { $set: updateObject }).exec().then(() => {
		res.status(200).json({
			success: true,
			message: 'user is updated',
			updateCourse: updateObject,
		});
	}).catch((err) => {
		res.status(500).json({
			success: false,
			message: 'Server error. Please try again.'
		});
	});
}

exports.deleteUser = (req, res) => {
	const { id } = req.params;
	return User.findByIdAndRemove({ _id: id }).exec().then(() => {
		res.status(204).json({ success: true })
	}).catch((error) => {
		res.status(500).json({
			success: false,
			message: 'Server error. Please try again.',
			error: error.message,
		})
	})
}
