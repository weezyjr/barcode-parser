const router = require('express').Router();
const parseBarcodeCtrl = require('../controller').parseBarcode;

router.post('/', parseBarcodeCtrl.parse);

module.exports = router;