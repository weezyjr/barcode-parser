const Sequelize = require('sequelize');
const db = require('./db.connection');

const Formats = db.define('Formats', {

    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },


    gtinStartIndex: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: 'Miniumum GTIN start index is 0.'
            },
            max: {
                args: [12],
                msg: 'Maximum GTIN start index is 12.'
            }
        }
    },


    gtinEndIndex: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: 'Miniumum GTIN end index is 0.'
            },
            max: {
                args: [12],
                msg: 'Maximum GTIN end index is 12.'
            }
        }
    },

    
    serialStartIndex: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [13],
                msg: 'Miniumum serial start index is 13.'
            },
            max: {
                args: [20],
                msg: 'Maximum serial start index is 20.'
            }
        }
    },


    serialEndIndex: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [13],
                msg: 'Miniumum serial end index is 13.'
            },
            max: {
                args: [20],
                msg: 'Maximum serial end index is 20.'
            }
        }
    },


    hasExpiryDate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },


    expiryDateStartIndex: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            min: {
                args: [21],
                msg: 'Miniumum expiry date start index is 21.'
            },
            max: {
                args: [27],
                msg: 'Maximum expiry date start index is 27.'
            }
        }
    },


    expiryDateEndIndex: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
            min: {
                args: [21],
                msg: 'Miniumum expiry date end index is 21.'
            },
            max: {
                args: [27],
                msg: 'Maximum expiry date end index is 27.'
            }
        }
    },


    dateFormat: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'DDMMYY'
    },


    barcodeLength: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [1],
                msg: 'Miniumum barcode length is 1.'
            },
            max: {
                args: [27],
                msg: 'Maximum barcode length is 27.'
            }
        }
    },


}, {
    timestamps: true
})

module.exports = Formats;