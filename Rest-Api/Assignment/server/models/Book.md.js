const mongoose = require('mongoose')

const { Schema } = mongoose

const bookSchema = new Schema({
	title: { type: String, required: true, max: 100 },
	author: { type: String, require: true },
	year: { type: Number, require: true },
	isbn: { type: String, require: true },
	review_count: { type: Number, require: true },
	average_score: { type: Number, require: true }
}, {
	timestamps: true,
	versionKey: false
})


module.exports = mongoose.model('Book', bookSchema)
