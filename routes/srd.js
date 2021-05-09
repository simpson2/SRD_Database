const query = require('../services/db');
const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {
    res.json(await query('SELECT * FROM SRD'));
});

module.exports = router;