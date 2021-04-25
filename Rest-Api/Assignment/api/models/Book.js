const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
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


module.exports = mongoose.model('books', bookSchema);
