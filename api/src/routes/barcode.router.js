const router = require('express').Router();
const barcodeCtrl = require('../controller').Barcode;

router.post('/', barcodeCtrl.create);

router.put('/', barcodeCtrl.update);

module.exports = router;