const Shipment = require('../models/Shipment');

//  Crear un nuevo embarque
const createShipment = async (req, res) => {
    try{
        const { idShipment, destiny, numberBoxes, items } = req.body;
        const idExist = await Shipment.findOne({idShipment: idShipment});

        if(idExist){
            res.status(409).json({
                success: false,
                message: "Este id ya esta registrado!"
            })
        }
        
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


// Eliminar todos los embarques (para pruebas)
const deleteAllShipments = async (req, res) => {
    try {
        const response = await Shipment.deleteMany({});

        res.status(200).json({
            message: 'Todos los embarques han sido eliminados',
            eliminatedShipments: response.deletedCount
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar los usuarios',
            error: error.message
        });
    }
};

//  Obtener embarque por id
const getShipmentById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const shipment = await Shipment.findOne({ idShipment: id });
        
        if (!shipment) {
            return res.status(404).json({ 
                message: 'Embarque no encontrado' 
            });
        }
        
        res.status(200).json({
            success: true,
            data: shipment
        });
    } catch (error) {
        console.error('Error al obtener embarque:', error);
        res.status(500).json({ 
            message: 'Error al obtener el embarque',
            error: error.message 
        });
    }
};


module.exports = {
    createShipment,
    getShipments,
    deleteAllShipments,
    getShipmentById
}