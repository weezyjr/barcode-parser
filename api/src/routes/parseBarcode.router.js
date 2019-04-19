const router = require('express').Router();
const parseBarcodeCtrl = require('../controller').parseBarcode;

router.get('/:barcode', parseBarcodeCtrl.parse);

module.exports = router;