// create new barcode format
module.exports.parse = async function (req, res, next) {
    try {
        // check if the request is valid
        if (!req || !req.body || !req.body.data)
            throw new Error('Bad request');

    } catch (error) {
        next(error);
    }
}
