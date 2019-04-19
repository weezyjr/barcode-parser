const router = require('express').Router();
const barcodeCtrl = require('../controller').Barcode;

router.post('/', barcodeCtrl.create);

module.exports = router;