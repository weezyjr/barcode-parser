const router = require('express').Router();

router.use('/barcode/formats', require('./barcodeFormats.router'));

router.use('/barcode/parse', require('./parseBarcode.router'));


module.exports = router;