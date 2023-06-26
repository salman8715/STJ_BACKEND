const supplier = require('../models/supplier.models');

async function listDataSupplier(req, res, next) {
	try {
		const supplier = await supplier.findAll({ attributes: [ 'status' ] });
		res.status(200).json(po);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Server Error' });
	}
}

module.exports = {
	listDataSupplier
};
