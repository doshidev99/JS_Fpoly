const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blogDB', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	// database: 'blogDB',
	// port: 3306
})


sequelize.authenticate().then(() => 'Sequelize Connected 🚀 🚀 🚀 🚀 ')

module.exports = sequelize;