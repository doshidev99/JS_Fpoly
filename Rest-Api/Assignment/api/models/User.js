const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: String,
	password: String
}, {
	timestamps: true,
	versionKey: false
})

module.exports = mongoose.model('users', UserSchema);