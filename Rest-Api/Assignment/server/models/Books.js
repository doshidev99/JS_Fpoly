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

const Books = new Schema({
	title: String, // String is shorthand for {type: String}
	author: String,
	year: String,
	isbn: String,
	review_count: Number,
	average_score: Number
});





// module.exports = class User {
// 	constructor (title, auth, year, isbn, review_count, average_score, create_date) {
// 		this.title = title;
// 		this.auth = auth;
// 		this.year = year;
// 		this.isbn = isbn;
// 		this.review_count = review_count;
// 		this.average_score = average_score;
// 		this.create_date = create_date
// 	}
// 	// add user
// 	save() {
// 		const db = getDb();
// 		return db.collection('users').insertOne(this).then(result => {
// 			console.log(result)
// 		}).catch(err => {
// 			console.log(err)
// 		})
// 	}
// }