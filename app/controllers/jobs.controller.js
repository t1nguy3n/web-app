const express = require('express');

const router = express.Router();

const { getJobs } = require('../models/jobs.model');

const queryJobs = async (req, res) => {
    const results = await getJobs();
    res.json(results);
};

router.get('/jobs', (req, res) => {
    queryJobs(req, res);
});

module.exports = router;