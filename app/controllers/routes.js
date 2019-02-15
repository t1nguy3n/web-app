const express = require('express');

const router = express.Router();

const jobs = require('./jobs.controller');

router.use('/', jobs);

module.exports = router;