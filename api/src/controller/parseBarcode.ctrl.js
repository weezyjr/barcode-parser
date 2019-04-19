const Formats = require('../model').Formats;
const parseFunction = require('../parseBarcodeService');

module.exports.parse = async function (req, res, next) {
    try {
        // check if the request is valid
        if (!req || !req.params || !req.params.barcode)
            throw new Error('Bad request');

        const barcode = req.params.barcode;

        await Formats.findAll()
            .then((formats) => {

                let results = [];

                for(let format of formats){
                    const parsedBarcode = parseFunction(barcode, format);
                    if(parsedBarcode){
                        results.push({
                            format,
                            parsedBarcode
                        });
                    }
                }
                
                // response
                res.status(200).json({
                    status: 'success',
                    message: 'barcode parsed successfly',
                    data: results
                })
            });

    } catch (error) {
        next(error);
    }
}