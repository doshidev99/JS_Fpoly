// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../database')

// // {
// // 	"title": "Memory",
// // 	"author": "Doug Lloyd",
// // 	"year": 2020,
// // 	"isbn": "1632168146",
// // 	"review_count": 28,
// // 	"average_score": 5.0
// //  }

const mongodb = require('mongodb');
const mongoose = require('mongoose');
const getDb = require('../database')

const { Schema } = mongoose;

const UserSchema = new Schema({
	username: String,
	password: {
		type: String,
		require: true
	},
}, {
	timestamps: true
});


module.exports = mongoose.model('User', UserSchema);