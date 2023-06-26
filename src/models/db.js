const { Sequelize } = require('sequelize');
const config = require('../configs/db.config');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = new Sequelize(config.database, config.user, config.password, {
	host: config.host,
	dialect: 'postgres',
	logging: false
});

module.exports = sequelize;
