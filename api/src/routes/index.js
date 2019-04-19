const router = require('express').Router();

router.use('/barcode/formats', require('./barcodeFormats.router'));

module.exports = router;