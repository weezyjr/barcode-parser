module.exports = function parse(barcode, format) {
    if (!barcode)
        throw new Error('invalid barcode');

    if (!format)
        throw new Error('invalid format');

    if(barcode.length != format.barcodeLength)
        return;

    let parsedBarcode = {};

    parsedBarcode.gtin = barcode.substr(format.gtinStartIndex, format.gtinEndIndex);

    parsedBarcode.serial = barcode.substr(format.serialStartIndex, format.serialEndIndex);

    if (format.hasExpiryDate) {
        parsedBarcode.expiryDate = barcode.substr(format.expiryDateStartIndex, format.expiryDateEndIndex);
    }

    return parsedBarcode;
}