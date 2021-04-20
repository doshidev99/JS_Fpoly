const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookManagement', 'root', 'Tt241299', {
	host: 'localhost',
	dialect: 'mysql',
})


sequelize.authenticate().then(() => 'Sequelize Connected 🚀 🚀 🚀 🚀 ')

module.exports = sequelize;