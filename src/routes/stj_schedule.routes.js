const express = require('express');
const router = express.Router();

const schcontrollers = require('../controllers/sch.controllers');

router.get('/getsch', schcontrollers.getallsch);
router.post('/createsch', schcontrollers.createsch);

module.exports = router;
