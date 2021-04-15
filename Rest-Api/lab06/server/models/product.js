const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/database')

class Product extends Model { }

Product.init('tblProduct', {
	prId: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: DataTypes.STRING,
	content: {
		type: DataTypes.STRING,
		allowNull: false
	},
	create_date: {
		type: DataTypes.DATE,
		allowNull: false
	}
})

Product.sync();

module.exports = Post;