let router = require('express').Router();

router.get('/', (req, res)=> {
    res.status(200).json({
        status: 'success',
        message: 'barcode routes are working fine'
    })
});

module.exports = router;