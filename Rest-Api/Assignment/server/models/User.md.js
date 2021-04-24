const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
	username: { type: String, required: true, max: 100 },
	password: {
		type: String,
		require: true
	},
}, {
	timestamps: true,
	versionKey: false
})

module.exports = mongoose.model('User', userSchema)