const mongoose = require('mongoose')

const { Schema } = mongoose

const reviewSchema = new Schema({
	review: String,
}, {
	timestamps: true,
	versionKey: false
})


module.exports = mongoose.model('Review', reviewSchema)
