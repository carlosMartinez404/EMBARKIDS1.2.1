import api from './axiosConfig';

export const getShipments = async () => {
    try {
        const response = await api.get('/shipments');
        return response.data.shipments
    } catch (error) {
        console.error('Error al obtener Shipments: ', error);
        throw error;
    }
};