const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database')

// {
// 	"title": "Memory",
// 	"author": "Doug Lloyd",
// 	"year": 2020,
// 	"isbn": "1632168146",
// 	"review_count": 28,
// 	"average_score": 5.0
//  }

const Users = sequelize.define('tblUsers', {
	userId: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	author: DataTypes.STRING,
	year: DataTypes.INTEGER,
	isbn: DataTypes.STRING,
	review_count: DataTypes.INTEGER,
	average_score: DataTypes.FLOAT
}, {
	timestamps: false
})

Users.sync();


module.exports = Users;
