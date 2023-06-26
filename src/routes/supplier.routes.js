const express = require('express');
const router = express.Router();

const supplierController = require('../controllers/supplier.controllers');

router.get('/listDataSupplier', supplierController.listDataSupplier);

module.exports = router;
