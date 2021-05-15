const mongoose = require('mongoose')

const BookModel = require('../models/Book.md')
const ReviewModel = require('../models/Review.md')

exports.getAll = (req, res) => {
	return BookModel.find()
		.then((u) => {
			return res.status(200).json({
				success: true,
				message: 'Get Book successfully',
				book: u
			})
		})
		.catch((error) => {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Server error. Please try again.',
				error: error.message,
			})
		})
}

exports.getDetail = async (req, res) => {
	const { id } = req.params
	const leanDoc = await BookModel.find({ _id: id }).select('comments')
	res.json(leanDoc)
}

exports.createBook = (req, res) => {
	const newBook = new BookModel({
		...req.body
	})

	return newBook.save(newBook).then((book) => {
		res.status(200).json({
			success: true,
			message: 'create successfully!',
			book
		})
	})
}

exports.updateBook = (req, res) => {
	const { id } = req.params

	const updateObject = req.body
	return BookModel.update({ _id: id }, { $set: updateObject }).exec().then(() => {
		res.status(200).json({
			success: true,
			message: 'the book is updated',
			updateCourse: updateObject,
		})
	}).catch((err) => {
		res.json(err)
	})
}


exports.deleteBook = (req, res) => {
	const { id } = req.params
	return BookModel.findByIdAndRemove({ _id: id }).exec().then(() => {
		res.status(204).json({ success: true, message: 'Delete successfully' })
	}).catch((error) => {
		res.status(500).json({
			success: false,
			message: 'Server error. Please try again.',
			error: error.message,
		})
	})
}


exports.searchBook = (req, res) => {

	console.log(req)
























	
	// const { title, author, isbn } = req.query
	// const query = BookModel.find({})
	// if (title) query.where({ title })
	// if (author) query.where({ author })
	// if (isbn) query.where({ isbn })

	// query.skip().then(book => {
	// 	res.status(204).json({ success: true, message: 'Get the book successfully', book }).catch((error) => {
	// 		res.status(500).json({
	// 			success: false,
	// 			message: 'Server error. Please try again.',
	// 			error: error.message,
	// 		})
	// 	})
	// })
}