const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    quantity: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    lot: {
        type: String,
        requierd: true,
        trim: true,
        uppercase: true
    },

}, {_id: false});


const shipmentSchema = new mongoose.Schema({
    idShipment: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    destiny: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    numberBoxes: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    }, 
    items: [itemSchema],
    dateCreation: {
        type: Date,
        default: Date.now
    }

});

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;