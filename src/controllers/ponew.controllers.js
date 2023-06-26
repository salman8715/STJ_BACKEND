const PO = require('../models/po.models');

async function getPO(req, res, next) {
	try {
		const po = await PO.findAll({ attributes: [ 'status' ] });
		res.status(200).json(po);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Server Error' });
	}
}

module.exports = {
	getPO
};
