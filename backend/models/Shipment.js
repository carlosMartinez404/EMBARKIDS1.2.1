const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
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
    quantity: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    boxes: {
        type: Number,
        required: true,
        trim: true
    }

}, {_id: false});


const shipmentSchema = new mongoose.Schema({
    idShipment: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        unique: true
    },
    Status: {
        type: String,
        trim: true,
        default: 'EN PROCESO'
    },
    destiny: {
        type: String,
        trim: true,
        uppercase: true,
        default: 'DESTINO AUN NO DEFINIDO'
    },
    numberBoxes: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    }, 
    items: [itemSchema],
    creationDate: {
        type: Date,
        default: Date.now
    }
});

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;