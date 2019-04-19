const router = require('express').Router();
const barcodeCtrl = require('../controller').Barcode;

router.post('/', barcodeCtrl.create);

router.put('/', barcodeCtrl.update);

router.delete('/', barcodeCtrl.delete);

router.get('/:id', barcodeCtrl.read);

router.get('/', barcodeCtrl.read);

module.exports = router;