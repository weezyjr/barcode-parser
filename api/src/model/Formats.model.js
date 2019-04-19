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
    },


    gtinEndIndex: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    
    serialStartIndex: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },


    serialEndIndex: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },


    hasExpiryDate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },


    expiryDateStartIndex: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },


    expiryDateEndIndex: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },


    dateFormat: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'DDMMYY'
    },


    barcodeLength: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },


}, {
    timestamps: true
})

module.exports = Formats;