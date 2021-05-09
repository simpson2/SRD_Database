const db = require('../services/db');
const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {
    res.json(await db.query('SELECT $1 FROM SRD', ['*']));
});

module.exports = router;