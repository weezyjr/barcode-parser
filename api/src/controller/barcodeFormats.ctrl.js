const Formats = require('../model').Formats;


function validateFormatIndices(format) {

    if (format.gtinStartIndex >= format.gtinEndIndex)
        throw new Error('gtin start index must be smaller than gtin end index');

    if (format.serialStartIndex >= format.serialEndIndex)
        throw new Error('serial start index must be smaller than serial end index');

    if (format.hasExpiryDate &&
        format.expiryDateStartIndex >= format.expiryDateEndIndex)
        throw new Error('expiry date start index must be smaller than expiry date end index');

    if (format.hasExpiryDate && format.barcodeLength < format.expiryDateEndIndex)
        throw new Error('barcode length must be bigger than or equal to the expiry date end index');


    if (!format.hasExpiryDate && format.barcodeLength < format.serialEndIndex)
        throw new Error('barcode length must be bigger than or equal to the serial end index');
}

// create new barcode format
module.exports.create = async function (req, res, next) {
    try {
        // check if the request is valid
        if (!req || !req.body || !req.body.data)
            throw new Error('Bad request');

        // shorthand for req.body.data
        const reqBarcodeFormat = req.body.data;

        // check if the start indices are smaller than the end indices
        validateFormatIndices(reqBarcodeFormat);

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
        if (!req.body.data.id)
            throw new Error('Please add the barcode format id');

        // shorthand for req.body.data
        const reqBarcodeFormat = req.body.data;


        // check if the start indices are smaller than the end indices
        validateFormatIndices(reqBarcodeFormat);

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


// update barcode format
module.exports.delete = async function (req, res, next) {
    try {
        // check if the request is valid
        if (!req || !req.body || !req.body.data)
            throw new Error('Bad request');

        // check if there is barcode id
        if (!req.body.data.id)
            throw new Error('Please add the barcode format id');

        // shorthand for req.body.data
        const reqBarcodeFormat = req.body.data;

        // update the format with that specific id
        await Formats.destroy({
                where: {
                    id: reqBarcodeFormat.id
                }
            })
            .then((result) => {

                // check if there is no result with this id
                if (!result)
                    throw new Error('barcode format with this id is not found');

                // response
                res.status(200).json({
                    status: 'success',
                    message: 'Format deleted successfly',
                    data: result
                })
            });

    } catch (error) {
        next(error);
    }
}


// read barcode format by id
module.exports.read = async function (req, res, next) {
    try {
        // check if the request is valid
        if (!req)
            throw new Error('Bad request');

        // if the id is not attached in the params
        // get all the barcode formats
        if (!req.params || !req.params.id) {
            await Formats.findAll()
                .then((formats) => {
                    // response
                    res.status(200).json({
                        status: 'success',
                        message: 'Formats retrived successfly',
                        data: formats
                    })
                });
        } else {
            // read barcode format by Id

            // shorthand for req.params.id
            const reqBarcodeFormatId = req.params.id;

            // update the format with that specific id
            await Formats.findOne({
                    where: {
                        id: reqBarcodeFormatId
                    }
                })
                .then((format) => {
                    // if the format not found
                    if (!format)
                        throw new Error('there is not format with this id');

                    // response
                    res.status(200).json({
                        status: 'success',
                        message: 'Format retrived successfly',
                        data: format
                    })
                });
        }

    } catch (error) {
        next(error);
    }
}