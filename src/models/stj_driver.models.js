const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db.js');

class driver extends Model {}
driver.init(
	{
		id_driver: {
			type: DataTypes.STRING
		},
		nama_driver: {
			type: DataTypes.STRING
		},
		status: {
			type: DataTypes.STRING
		}
	},
	{
		timestamps: false,
		sequelize,
		modelName: 'master_driver',
		tableName: 'master_driver',
		schema: 'STJ'
	}
);

module.exports = driver;
