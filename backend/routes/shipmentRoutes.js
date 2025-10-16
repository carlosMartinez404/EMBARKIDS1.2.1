const express = require('express');
const router = express.Router();
const {createShipment, getShipments} = require('../controllers/shipmentController');

console.log('Shipment Routes cargado correctamente');

router.post('/shipments', createShipment);

router.get('/shipments', getShipments);

module.exports = router;