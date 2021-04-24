const express = require('express');
const mongoose = require('mongoose');

const ReviewModal = require('../models/Review.md');


exports.getAll = (req, res) => {
	return Book.findOne({ title: 'Memory' }).populate('Review').exec((err, result) => {
		console.log(result)
	})
}

// exports.createBook = (req, res) => {
// 	const book = new BookModal({
// 		_id: mongoose.Types.ObjectId(),
// 		...req.body
// 	});

// 	return book
// 		.save()
// 		.then((b) => {
// 			return res.status(201).json({
// 				success: true,
// 				message: 'New the book created successfully',
// 				book: b
// 			})
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			res.status(500).json({
// 				success: false,
// 				message: 'Server error. Please try again.',
// 				error: error.message,
// 			});
// 		});
// }


// exports.deleteBook = (req, res) => {
// 	const { id } = req.params;
// 	return BookModal.findByIdAndRemove({ _id: id }).exec().then(() => {
// 		res.status(204).json({ success: true, message: 'Delete successfully' })
// 	}).catch((error) => {
// 		res.status(500).json({
// 			success: false,
// 			message: 'Server error. Please try again.',
// 			error: error.message,
// 		})
// 	})
// }
