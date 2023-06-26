const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db.js');

class schedule extends Model {}
schedule.init(
	{
		
		id_sch: {
			type: DataTypes.STRING,
			primaryKey: true, 
			autoIncrement: true
		},
		tanggal: {
			type: DataTypes.STRING
		},
		id_unit: {
			type: DataTypes.STRING
		},
		type_unit: {
			type: DataTypes.STRING
		},
		driver: {
			type: DataTypes.DATE
		},
		customer: {
			type: DataTypes.STRING
		},
		muat_loc: {
			type: DataTypes.DATE
		},
		bongkar_loc: {
			type: DataTypes.STRING
		},
		status: {
			type: DataTypes.STRING
		}
	},
	{
		timestamps: false,
		sequelize,
		modelName: 'master_schdule',
		tableName: 'master_schdule',
		schema: 'STJ'
	}
);

module.exports = schedule;
