import React, {useState, useEffect} from "react";
import ShipmentCard from "./ShipmentCard";
import {getShipments} from '../../api/shipmentCardApi';
import styles from './styles/shipmentList.module.css';
import emptyTruck from '../../assets/camionVacio.png';

const ShipmentList =()=> {
    const [shipments, setShipments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchShipments();
    }, []);

    const fetchShipments = async () => {
        try{
            setLoading(true);
            setError(null);
            const data = await getShipments();
            setShipments(data);
            console.log(data)
        } catch (error) {
            setError('Error al cargar los envios.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };



    if(loading) {
        return (
            <div className={styles.loadingContainer}>
                <div></div>
                <p>Cargando embarques...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
                <button onClick={fetchShipments}>Reintentar</button>
            </div>
        )
    }

    return (
        <div>
            {shipments.length === 0 ? (
                <div className={styles.listContainerNoContent}>
                    <div style={styles.emptyContainer}>
                        <img src={emptyTruck}/>
                        <div className={styles.pContainer}>
                            <p>No hay embarques disponibles...</p>
                        </div>
                    </div>
                </div>

            ): (

                <div className={styles.listContainer}>
                    {shipments.map((shipment, index) => (
                        <ShipmentCard 
                            key={shipment._id || index}
                            shipment={shipment}
                        />
                    ))}
                   
                </div>

            )}
        </div>
    )


}


export default ShipmentList;