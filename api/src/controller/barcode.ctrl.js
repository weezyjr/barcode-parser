const Formats = require('../model').Formats;

// create new barcode format
module.exports.create = async function (req, res, next) {
    try {
        // check if the request is valid
        if (!req || !req.body || !req.body.data)
            throw new Error('Bad request');


        // shorthand for req.body.data
        const reqBarcodeFormat = req.body.data;

        // TODO: Check if the barcode format already exist

        // create the format and add it to the database
        await Formats.create(reqBarcodeFormat)
            .then((format) => {

                // response
                res.status(200).json({
                    status: 'success',
                    message: 'Format added successfly',
                    data: format
                })
            });

    } catch (error) {
        next(error);
    }
}