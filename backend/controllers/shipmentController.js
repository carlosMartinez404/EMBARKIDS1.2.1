const Shipment = require('../models/Shipment');

//  Crear un nuevo embarque
const createShipment = async (req, res) => {
    try{
        const { idShipment, destiny, numberBoxes, items } = req.body;

        const newShipment = await Shipment.create({
            idShipment,
            destiny,
            numberBoxes,
            items
        });

        res.status(201).json({
            success: true,
            data: newShipment
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};



//  Obtener todos los embarques
const getShipments = async (req, res) => {
    try {
        const shipments = await Shipment.find();

        res.status(200).json({
            total: shipments.length,
            shipments: shipments
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los usuarios',
            error: error.message
        })
    }
}


module.exports = {
    createShipment,
    getShipments
}