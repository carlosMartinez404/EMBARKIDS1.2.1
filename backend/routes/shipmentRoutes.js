const express = require('express');
const router = express.Router();
const {createShipment, getShipments, deleteAllShipments} = require('../controllers/shipmentController');

console.log('Shipment Routes cargado correctamente');

router.post('/shipments', createShipment);

router.get('/shipments', getShipments);

router.delete('/shipments', deleteAllShipments);

module.exports = router;