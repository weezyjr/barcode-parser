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

// update barcode format
module.exports.update = async function (req, res, next) {
    try {
        // check if the request is valid
        if (!req || !req.body || !req.body.data)
            throw new Error('Bad request');

        // check if there is barcode id
        if(!req.body.data.id)
            throw new Error('Please add the barcode format id');

        // shorthand for req.body.data
        const reqBarcodeFormat = req.body.data;

        // update the format with that specific id
        await Formats.update(reqBarcodeFormat, {
                where: {
                    id: reqBarcodeFormat.id
                }
            })
            .then((results) => {

                // check if there is no result with this id
                if (!results[0])
                    throw new Error('barcode format with this id is not found');

                // response
                res.status(200).json({
                    status: 'success',
                    message: 'Format updated successfly',
                    data: reqBarcodeFormat
                })
            });

    } catch (error) {
        next(error);
    }
}