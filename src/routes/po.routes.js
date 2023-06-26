const express = require('express');
const router = express.Router();

const POController = require('../controllers/ponew.controllers');

router.get('/getPO', POController.getPO);

module.exports = router;
