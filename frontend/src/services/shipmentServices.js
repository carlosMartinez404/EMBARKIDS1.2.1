import api from "../api/axiosConfig";

class ShipmentService {
    //  Crear un nuevo embarque
    async createShipment(shipmentData) {
        try {
            const response = await api.post('/shipments', shipmentData);
            return response.data;
        }  catch (error) {
            console.error('Error en createShipment', error);
            throw error.response?.data || error;
        }
    }
}


export default new ShipmentService()