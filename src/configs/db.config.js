const dotenv = require('dotenv');
dotenv.config();
module.exports = {
	multipleStatements: true,
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
};
