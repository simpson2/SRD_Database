const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        Name: 'SRD_Database',
        Info: 'Node.JS, Express',
        Server: 'Online'
    });
});

module.exports = router;