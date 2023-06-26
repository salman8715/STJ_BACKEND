const { query } = require('express');

const schedule = require('../models/stj_schedule.models');


async function getallsch(req, res, next) {
	const page = req.query.page || 1; // Current page number
	const limit = req.query.limit || 10;
	schedule.findAll({
	limit,
    attributes:['tanggal', 'type_unit', 'driver', 'customer', 'muat_loc', 'bongkar_loc', 'status']})
		.then((data) => {
				res.json({
					code: 0,
					message: "ok",
					type: "success",
					result: data, page, limit,
				 });
                 //console.log(data);
				
		})
		.catch((error) => {
			res.status(400).json({
				error
			});
		});
}


async function createsch (req, res) {
    const {tanggal}= req.body;
    const {id_unit}= req.body;
    const {type_unit}= req.body;
    const {driver}= req.body;
    const {customer}= req.body;
    const {id_cust}= req.body;
    const {muat_loc}= req.body;
    const {bongkar_loc}= req.body;
    

    const createschd = await schedule.create({
        tanggal: tanggal, 
        id_unit: id_unit, 
        type_unit: type_unit, 
        driver: driver, 
        customer: customer, 
        id_cust: id_cust, 
        muat_loc: muat_loc, 
        bongkar_loc: bongkar_loc, 
        status: 'NEW'
            });	
            res.status(200).json({
                code: 0,
                result: {
                    hasilnya : createschd.tanggal
                },
                message: 'ok',
                type: 'success'
            });
}

module.exports = {
getallsch,
createsch
};