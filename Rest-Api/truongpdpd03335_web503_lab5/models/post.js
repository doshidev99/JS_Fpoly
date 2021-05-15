const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Post = sequelize.define('tblPost', {
	postId: {
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
}, {
	timestamps: false
})

Post.sync();


module.exports = Post;