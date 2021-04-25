const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const commentSchema = new Schema({
	// _id: Schema.Types.ObjectId,
	comment: String
}, {
	timestamps: true,
	versionKey: false
})


module.exports = mongoose.model('comments', commentSchema);
