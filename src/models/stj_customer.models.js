const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db.js');

class customer extends Model {}
customer.init(
	{
		id_customer: {
			type: DataTypes.STRING
		},
		nama_customer: {
			type: DataTypes.STRING
		},
		address: {
			type: DataTypes.STRING
		},
		pic: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.DATE
		},
		owner: {
			type: DataTypes.STRING
		},
		no_hp_pic: {
			type: DataTypes.DATE
		}
	},
	{
		timestamps: false,
		sequelize,
		modelName: 'master_customer',
		tableName: 'master_customer',
		schema: 'STJ'
	}
);

module.exports = schedule;
