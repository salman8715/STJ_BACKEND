const express = require('express');
const router = express.Router();

const drivercontrollers = require('../controllers/driver.controllers');

router.get('/getdriver', drivercontrollers.getalldriver);
router.get('/createdriver', drivercontrollers.createdriver);

module.exports = router;
