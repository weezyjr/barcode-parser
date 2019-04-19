const router = require('express').Router();

router.use('/barcode', require('./barcode.router'));

module.exports = router;